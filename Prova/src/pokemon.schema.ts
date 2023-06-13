import { Schema, model } from "mongoose";

const PokemonSchema = new Schema({
    nome: {
        required: true,
        type: String,
    },
    tipo: {
        rquired: true,
        type: [String],
    },
    /* nature: {
        NÃO HÁ NENHUM NETURE NO RETORNO DA PokeApi
    }, */
    status: {
        rquired: true,
        type: [String],
    },
    numero_dex: {
        rquired: true,
        type: Number,
    },
    altura: {
        rquired: true,
        type: Number,
    },
    peso: {
        rquired: true,
        type: Number,
    },
    moves: {
        rquired: true,
        type: [String],
    }
}, {
    timestamps: true
})

export default model("Pokemon", PokemonSchema)