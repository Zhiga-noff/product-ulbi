import React, { FC } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import { Loader } from 'shared/ui';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <div className={classNames(styles.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
