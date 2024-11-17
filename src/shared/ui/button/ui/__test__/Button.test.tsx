import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from '../Button';

describe('Компонент Button', () => {
    test('Рендер кнопки', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText(/TEST/i)).toBeInTheDocument();
    });

    test('Проверка добавления класса', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText(/TEST/i)).toHaveClass('clear');
    });
});
