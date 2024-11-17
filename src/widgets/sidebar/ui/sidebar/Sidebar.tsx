import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import { Button, LangSwitcher, ThemeSwitcher } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(
                styles.Sidebar,
                { [styles.collapsed]: collapsed },
                [className],
            )}
            data-testid="sidebar"
        >
            <Button type="button" onClick={onToggle} data-testid="sidebar-toggle">
                {t('Скрыть')}
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    );
};
