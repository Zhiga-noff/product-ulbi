import React, {Suspense} from 'react';
import './styles/index.scss';
import {classNames} from 'shared/lib/class-names/class-names';
import {useTheme} from 'app/providers/theme-provider';
import {AppRuter} from 'app/providers/router';
import {Navbar} from 'widgets/navbar';
import {Sidebar} from 'widgets/sidebar';

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    <AppRuter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
