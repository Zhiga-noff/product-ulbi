import React from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss';
import {classNames} from 'shared/lib/class-names/class-names';
import {useTheme} from 'app/providers/theme-provider';
import {AppRuter} from 'app/providers/router';
import {Navbar} from 'widgets/navbar';
import {Sidebar} from "widgets/sidebar";


const App = () => {
    const {
        theme
    } = useTheme();

    return (<div className={classNames('app', {}, [theme])}>
        <Navbar/>
        <div className={'content-page'}>
            <Sidebar/>
            <AppRuter/>
        </div>
    </div>);
};

export default App;
