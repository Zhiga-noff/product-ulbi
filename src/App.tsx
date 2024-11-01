import React, { Suspense, useContext } from 'react';
import './styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { MainPageLazy } from './pages/main-page/MainPage.lazy';
import { AboutPageLazy } from './pages/about-page/AboutPage.lazy';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/use-theme';
import { classNames } from './helpers/class-names/class-names';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <h2>Preview</h2>
        <Routes>
          <Route path={'/'} element={<MainPageLazy />} />
          <Route path={'/about'} element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
