import ArrayRamdomValues from "../src/ArrayRamdomValues";

let array = [1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

describe("TESTE CLASSE ARRAYRANDOMVALUES", () => {

    test("TESTE GERAR NUMERO ALEATORIO", () => {
        expect(typeof ArrayRamdomValues.getRandomNumber(1,20)).toBe("number")
    })

    test("VALIDAR SE O ARRAY POSSUI O NÚMERO ALEATÓRIO", () => {
        expect(ArrayRamdomValues.comparaArray(array)).toBe(true)
    })
})

