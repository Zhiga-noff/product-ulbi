import React, { FC } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation('header');

    return (

        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY} className={styles.mainLink}>
                    {t('Главная')}
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
