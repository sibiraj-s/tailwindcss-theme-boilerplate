import { useState } from 'react';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import Button from './components/ui/Button';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex h-full'>
      <ThemeToggle />
      <div className='m-auto text-center'>
        <div className='mb-2'>
          <div className='mb-3 flex justify-center gap-6'>
            <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
              <img src={viteLogo} className='h-24 w-24' alt='Vite logo' />
            </a>
            <a href='https://react.dev' target='_blank' rel='noreferrer'>
              <img src={reactLogo} className='animate-spin-slowest h-24 w-24' alt='React logo' />
            </a>
          </div>
          <h1 className='text-4xl'>Vite + React</h1>
        </div>
        <div className='p-8'>
          <Button onPress={() => setCount((count) => count + 1)} className='mb-3'>
            count is {count}
          </Button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className='text-xs'>Click on the Vite and React logos to learn more</p>
      </div>
    </div>
  );
}

export default App;
