import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests-helper/render-with-translation/RenderWithTranslation';
import { Sidebar } from '../Sidebar';

describe('Компонент Sidebar', () => {
    test('Рендер компонента', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Работа кнопки Переключить', () => {
        renderWithTranslation(<Sidebar />);
        const toggleButton = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();

        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
