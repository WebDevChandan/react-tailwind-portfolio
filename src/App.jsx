import React, { createContext } from 'react';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import { useSelector } from 'react-redux';

export const DarkModeContext = createContext(null);

function App() {
  const darkModeSwitcher = useSelector(state => state.custom.switcher);

  return (
    <>
      <DarkModeContext.Provider value={darkModeSwitcher}>
        <div className={darkModeSwitcher ? "dark" : ""}>
          <main className='bg-vidBg px-5 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white'>
            <Nav />
            <Service />
            <Portfolio />
          </main>
        </div>
      </DarkModeContext.Provider>
    </>
  )
}

export default App;
