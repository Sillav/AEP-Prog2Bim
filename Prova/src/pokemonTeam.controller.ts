import { Request, Response } from "express";
import { PokemonTeamService } from "./pokemonTeam.service";
import pokemonTeamSchema from "./pokemonTeam.schema";

class PokemonTeamController {

    async createPokemonTeamMongoDB(req: Request, res: Response) {

        const createdTeam = await new PokemonTeamService().createPokemonTeamMongoDB(req.body);

        return res.status(200).send(createdTeam)

    }

    async readPokemonTeamMongoDB(req: Request, res: Response) {

        const result = await new PokemonTeamService().readPokemonTeamMongoDB();

        return res.status(200).send(result)
    }

    async findPokemonTeamByNameMongoDB(req: Request, res: Response) {

        const result = await new PokemonTeamService().findPokemonTeamByNameMongoDB(req.params.trainerName)

        return res.status(200).send(result)

    }

    async updatePokemonTeamByNameMongoDB(req: Request, res: Response) {

        const result = await new PokemonTeamService().updatePokemonTeamByNameMongoDB(req.params.trainerName, req.body)

        return res.status(201).send(result)
        

    }

    async deletePokemonTeamByNameMongoDB(req: Request, res: Response) {

        const result = await new PokemonTeamService().deletePokemonTeamByNameMongoDB(req.params.trainerName)

        return res.status(200).send(result)

    }

}

export default new PokemonTeamController();