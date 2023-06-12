import { useEffect, useState, useSyncExternalStore } from 'react';

import Switch from './ui/Switch';

type Theme = 'dark' | 'light'

const getPreferredTheme = (): Theme => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const getCachedTheme = (): Theme | null => {
  const cachedTheme = localStorage.getItem('theme') ?? ''
  return ['dark', 'light'].includes(cachedTheme) ? (cachedTheme as Theme) : null
}

const getInitialTheme = (): Theme => {
  const cachedTheme = getCachedTheme()
  return cachedTheme ? cachedTheme : getPreferredTheme();
}

const themeListener = (callback: EventListenerOrEventListenerObject): () => void => {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', callback);

  return () => {
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', callback);
  };
}

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme())
  const [autoDetect, setAutoDetect] = useState<boolean>(getCachedTheme() === null ? true : false)
  const preferredTheme = useSyncExternalStore(themeListener, getPreferredTheme)

  const appliedTheme = autoDetect ? preferredTheme : theme

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', appliedTheme);
  }, [appliedTheme]);

  const handleSetTheme = (newTheme: Theme) => {
    localStorage.setItem('theme', newTheme);
    setAutoDetect(false)
    setTheme(newTheme)
  }

  return [
    appliedTheme as Theme,
    handleSetTheme
  ] as const
}

const ThemeToggle = () => {
  const [theme, setTheme] = useTheme();
  const isChecked = theme === 'dark'

  const handleThemeChange = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <Switch
      className='fixed right-3 top-3'
      checked={isChecked}
      onCheckedChange={handleThemeChange}
    />
  )
}

export default ThemeToggle
