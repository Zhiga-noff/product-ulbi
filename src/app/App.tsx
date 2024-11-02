import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import {classNames} from 'shared/lib/class-names/class-names';
import {useTheme} from 'app/providers/theme-provider';
import {AppRuter} from 'app/providers/router';


const App = () => {
    const {
        theme,
        toggleTheme
    } = useTheme();

    return (<div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>TOGGLE</button>
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О сайте</Link>
        <AppRuter/>
    </div>);
};

export default App;
