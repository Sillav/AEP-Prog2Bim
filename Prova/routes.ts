import { Router } from "express";
import PokemonController from "./src/pokemon.controller"
import PokemonTeamControler from "./src/pokemonTeam.controller"

const routes = Router();

//routes.get("/getPokeApi", PokemonController.readPokeApi);
//routes.get("/filterPokeApi", PokemonController.filterPokemons);
//routes.get("/getPokemonsMongoDB", PokemonController.getPokemonsMongoDB);


routes.post("/writePokemonsJSON", PokemonController.writePokemonsJSONandSaveMongoDB);                // QUESTÃO 1
routes.post("/writeTiposPokemonsJSON", PokemonController.writeTiposPokemonsJSON);                    // QUESTÃO 2
routes.post("/createPokemonTeam", PokemonTeamControler.createPokemonTeamMongoDB);                    // QUESTÃO 3 A)
routes.get("/getPokemonTeams", PokemonTeamControler.readPokemonTeamMongoDB);                         // QUESTÃO 3 B)
routes.get("/getPokemonTeams/:trainerName", PokemonTeamControler.findPokemonTeamByNameMongoDB);      // QUESTÃO 3 C)
routes.put("/getPokemonTeams/:trainerName", PokemonTeamControler.updatePokemonTeamByNameMongoDB);    // QUESTÃO 3 D)
routes.delete("/getPokemonTeams/:trainerName", PokemonTeamControler.deletePokemonTeamByNameMongoDB); // QUESTÃO 3 E)
routes.get("/findByType/:tipo", PokemonController.findPokemonsByTypeMongoDB);                        // QUESTÃO 4
routes.get("/findByName/:nome", PokemonController.findPokemonsByNameMongoDB);                        // QUESTÃO 5
routes.get("/findByDex/:dex", PokemonController.findPokemonsByDexMongoDB);                           // QUESTÃO 6

export default routes;