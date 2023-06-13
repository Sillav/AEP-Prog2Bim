import PokemonTeamSchema from "./pokemonTeam.schema";
import { PokemonTeamTypes } from "./types/pokemonTeam.types";

export class PokemonTeamService {

    //FUNÇÕES DE CRUD DO TIME DE POKEMONS
    async createPokemonTeamMongoDB(team) {

        const createdTeam = await PokemonTeamSchema.create(team)

        return createdTeam

    }

    async readPokemonTeamMongoDB() {

        const result = await PokemonTeamSchema.find();

        return result
    }

    async findPokemonTeamByNameMongoDB(trainerName) {

        const result = await PokemonTeamSchema.findOne({ nome: trainerName });

        return result
    }

    async updatePokemonTeamByNameMongoDB(trainerName, updateInfo) {

        const result = await PokemonTeamSchema.findByIdAndUpdate({ nome: trainerName }, updateInfo);

        return result
    }

    async deletePokemonTeamByNameMongoDB(trainerName) {

        const result = await PokemonTeamSchema.deleteOne({ nome: trainerName });

        return "Time deletado"
    }
}

