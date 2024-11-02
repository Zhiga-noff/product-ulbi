import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routeConfig} from 'shared/config/route-config/route.config';

export const AppRuter = () => {
    return (<Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {Object.values(routeConfig).map(({path, element}) => <Route path={path} element={element}/>)}
        </Routes>
    </Suspense>);
};