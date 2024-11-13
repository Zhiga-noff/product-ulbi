import {classNames} from "./class-names";

describe('Функция classNames', function () {
    test('test', () => {
        expect(classNames('string')).toBe('string')
    })
});