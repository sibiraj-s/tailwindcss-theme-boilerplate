import { useEffect, useState } from 'react';

import Switch from './ui/Switch';

type Theme = 'dark' | 'light'

const getInitialTheme = (): Theme => {
  const cachedTheme = localStorage.getItem('theme')

  if (cachedTheme) {
    return cachedTheme === 'dark' ? 'dark' : 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleThemeChange = (checked: boolean) => {
    setTheme(() => {
      const _theme = checked ? 'dark' : 'light';
      localStorage.setItem('theme', _theme);
      return _theme;
    });
  };

  const isChecked = theme === 'dark'

  return (
    <Switch
      className='fixed right-3 top-3'
      checked={isChecked}
      onCheckedChange={handleThemeChange}
    />
  )
}

export default ThemeToggle
