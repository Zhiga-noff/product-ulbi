import React, {FC} from 'react';
import {classNames} from "shared/lib/class-names/class-names";
import styles from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: string
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {to, className, children, theme = AppLinkTheme.PRIMARY, ...other} = props

    return (
        <Link to={to} className={classNames(styles.AppLink, {}, [className, styles[theme]])} {...other}>
            {children}
        </Link>
    );
};