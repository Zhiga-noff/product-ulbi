import React, { FC } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui';
import styles from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(styles.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button theme={ThemeButton.CLEAR} onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>
    );
};
