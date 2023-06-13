import PokemonSchema from "./pokemon.schema";
import { writeFile, readFile } from 'fs/promises'

export class PokemonService {

    //FUNÇÃO PARA REQUISITAR OS DADOS DA API VIA FETCH

    async getPokemonsFetch() {

        const read = await fetch("http://localhost:3000/pokemons-data")
        .then((response) => response.json())

        return read
    }

    //FUNÇÃO PARA FILTRAR OS DADOS OBTIDOS DA API

    async filterPokeApi() {

        const data = await this.getPokemonsFetch();

        let pokemons;

        pokemons = data.map(pokemon => {
            return {
                nome: pokemon.name,
                tipo: pokemon.types.map(type => type.type.name),
                status: pokemon.stats[0].base_stat,
                numero_dex: pokemon.game_indices[0].game_index,
                altura: pokemon.height,
                peso: pokemon.weight,
                moves: pokemon.moves.slice(0, 4).map(moves => moves.move.name)
            }
        })

        return pokemons

    }

    //FUNÇÃO PARA ESCREVER OS POKEMONS FILTRADOS EM UM ARQUIVO JSON

    async writePokemonsJSON() {

        const pokemons = await this.filterPokeApi();

        try {
            await writeFile('pokemons-Filtrados.json', JSON.stringify(pokemons));
            console.log("Arquivo Criado")
        } catch (erro) {
            console.log('Falha ao Criar Arquivo');
        }
    }

    //FUNÇÃO PARA LER OS POKEMONS FILTRADOS QUE FORAM ESCRITOS NO ARQUIVO JSON

    async readPokemonsJSON() {
        try {
            const pokemons = await readFile("pokemons-Filtrados.json", "utf-8")
            return JSON.parse(pokemons)
        } catch (erro) {
            console.error(erro)
        }
    }

    //FUNÇÃO PARA ESCREVER OS POKEMONS FILTRADOS PELO TIPO EM UM JSON

    async writeTiposPokemonsJSON() {

        const pokemons = await this.readPokemonsJSON();

        const pokemonsTipoTmp = await pokemons.reduce((mapa, pokemon) => {

            pokemon.tipo.forEach((tipo) => {
                if (!mapa[tipo]) {
                    mapa[tipo] = [];
                }
                mapa[tipo].push(pokemon);
            });
            return mapa;
        }, {});

        const pokemonsTipo = pokemonsTipoTmp

        try {
            await writeFile('pokemons-Por-Tipo.json', JSON.stringify(pokemonsTipo));
            console.log("2º Arquivo Criado!")
        } catch (erro) {
            console.log('Falha ao Criar 2º Arquivo!');
        }
    }

    //FUNÇÕES DE CRUD E BUSCAS DE POKEMONS NO BANCO

    async createPokemonsMongoDB() {

        const pokemons = await this.filterPokeApi();

        const createdPokemon = await PokemonSchema.insertMany(pokemons)

        return createdPokemon
    }

    async readPokemonsMongoDB() {

        const result = await PokemonSchema.find()

        return result
    }

    async findPokemonsByTypeMongoDB(tipo) {

        const result = await PokemonSchema.find({ tipo: tipo });

        return result
    }

    async findPokemonsByNameMongoDB(nome) {

        const result = await PokemonSchema.findOne({ nome: nome });

        return result
    }

    async findPokemonsByDexMongoDB(dex) {

        const result = await PokemonSchema.findOne({ numero_dex: dex });

        return result
    }

    
}