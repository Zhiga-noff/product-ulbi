import React, { FC, useEffect, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui';
import { useTranslation } from 'react-i18next';

export const BugButton: FC = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const throwError = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={throwError}
        >
            {t('Создать ошибку')}
        </Button>
    );
};
