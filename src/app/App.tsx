import React from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss';
import {classNames} from 'shared/lib/class-names/class-names';
import {useTheme} from 'app/providers/theme-provider';
import {AppRuter} from 'app/providers/router';
import {Navbar} from "widget/navbar";


const App = () => {
    const {
        theme,
        toggleTheme
    } = useTheme();

    return (<div className={classNames('app', {}, [theme])}>
        <Navbar/>

        <AppRuter/>
        <button onClick={toggleTheme}>TOGGLE</button>
    </div>);
};

export default App;
