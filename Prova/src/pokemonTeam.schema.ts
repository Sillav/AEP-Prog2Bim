import { Schema, model } from "mongoose";

const PokemonTeamSchema = new Schema({
    trainerName: {
        required: true,
        type: String
    },
    team: {
        required: true,
        type: []
    }
}, {
    timestamps: true
})

export default model("PokemonTeam", PokemonTeamSchema)