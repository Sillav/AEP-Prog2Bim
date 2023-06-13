import Matemagica from "../src/Matemagica";

describe('TESTE CLASSE MATEMAGICA', () => {

    test('FUNÇÃO DE SOMA', () => {
        expect(Matemagica.soma(1,2)).toBe(3);
    });

    test('FUNÇÃO DE SUBTRAÇÃO', () => {
        expect(Matemagica.subtracao(5,4)).toBe(1);
    });

    test('FUNÇÃO DE MULTIPLICAÇÃO', () => {
        expect(Matemagica.multiplicacao(3,2)).toBe(6);
    });

    test('FUNÇÃO DE DIVISÃO', () => {
        expect(Matemagica.divisao(6,2)).toBe(3);
    });
});