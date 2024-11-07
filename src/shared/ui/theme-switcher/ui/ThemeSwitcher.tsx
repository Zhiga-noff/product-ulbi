import React, {FC} from 'react';
import {classNames} from 'shared/lib/class-names/class-names';
import styles from './ThemeSwitcher.module.scss'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {Theme, useTheme} from "app/providers/theme-provider";
import {Button, ThemeButton} from "shared/ui";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const {
        theme, toggleTheme
    } = useTheme();

    return (
        <Button onClick={toggleTheme}
                theme={ThemeButton.CLEAR}
                className={classNames(styles.ThemeSwitcher, {},
                    [className])}>
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
        </Button>
    );
};