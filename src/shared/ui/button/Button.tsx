import React, {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from "shared/lib/class-names/class-names";
import styles from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {

    const {className, children, theme, ...other} = props

    return (
        <button className={classNames(styles.Button, {[styles[theme]]: true}, [className])} {...other}>{children}
        </button>


    );


};