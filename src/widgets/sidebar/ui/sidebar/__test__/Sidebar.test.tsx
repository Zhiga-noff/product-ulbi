import {fireEvent, screen} from "@testing-library/react";
import {Sidebar} from "../Sidebar";
import {renderWithTranslation} from "shared/lib/tests-helper/render-with-translation/RenderWithTranslation";

describe('Компонент Sidebar', function () {
    test('Рендер компонента', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('Работа кнопки Переключить', () => {
        renderWithTranslation(<Sidebar/>)
        const toggleButton = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()

        fireEvent.click(toggleButton)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
});