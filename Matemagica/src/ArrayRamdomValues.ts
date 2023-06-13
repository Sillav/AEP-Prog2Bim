class ArrayRamdomValues {

    public getRandomNumber(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public comparaArray(array: number[]) {

        const numAleatorio = this.getRandomNumber(1,20)

        let teste = false

        array.filter((num) => {
            if (num == numAleatorio) {
                teste = true
            }
        })

        return teste
    }
}

export default new ArrayRamdomValues()