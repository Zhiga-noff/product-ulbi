import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import { LangSwitcher, ThemeSwitcher } from 'shared/ui';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
                className,
            ])}
        >
            <button type="button" onClick={onToggle}>
                toggle
            </button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    );
};
