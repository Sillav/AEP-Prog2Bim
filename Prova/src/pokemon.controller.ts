import { Request, Response } from "express";
import { PokemonService } from "./pokemon.service";

class PokemonController {

    //LEITURA DE DADOS DA API
    async readPokeApi(req: Request, res: Response) {

        const pokemons = await new PokemonService().getPokemonsFetch();

        return res.status(200).json(pokemons)

    }

    //FILTRO DOS DADOS DA API
    async filterPokeApi(req: Request, res: Response) {

        const pokemons = await new PokemonService().filterPokeApi();

        return res.status(200).send(pokemons)

    }

    //CRIAR ARQUIVO JSON COM POKEMONS FILTRADOS E SALVAR NO MONGO DB
    async writePokemonsJSONandSaveMongoDB(req: Request, res: Response) {

        const create = await new PokemonService().createPokemonsMongoDB();

        const pokemonsJSON = await new PokemonService().writePokemonsJSON();

        return res.status(201).send()

    }

    //CRIAR o 2º ARQUIVO JSON COM os POKEMONS FILTRADOS POR TIPO
    async writeTiposPokemonsJSON(req: Request, res: Response) {

        const read = await new PokemonService().writeTiposPokemonsJSON();

        return res.status(201).send()

    }

    //BUSCAR OS POKEMONS SALVOS NO MONGODB
    async getPokemonsMongoDB(req: Request, res: Response) {

        const pokemons = await new PokemonService().readPokemonsMongoDB();

        return res.status(201).send(pokemons)

    }

    ////BUSCAR POKEMONS NO MONGODB PASSANDO O TIPO COMO PARAMETRO
    async findPokemonsByTypeMongoDB(req: Request, res: Response) {

        const tipo = req.params.tipo;

        const result = await new PokemonService().findPokemonsByTypeMongoDB(tipo);

        return res.status(302).send(result)

    }
    
    //BUSCAR POKEMONS NO MONGODB PASSANDO O NOME COMO PARAMETRO
    async findPokemonsByNameMongoDB(req: Request, res: Response) {

        const nome = req.params.nome;

        const result = await new PokemonService().findPokemonsByNameMongoDB(nome);

        return res.status(302).send(result)

    }

    //BUSCAR POKEMONS NO MONGODB PASSANDO A DEX COMO PARAMETRO
    async findPokemonsByDexMongoDB(req: Request, res: Response) {

        const dex = req.params.dex;

        const result = await new PokemonService().findPokemonsByDexMongoDB(dex)
        
        return res.status(302).send(result)
    }

}

export default new PokemonController();