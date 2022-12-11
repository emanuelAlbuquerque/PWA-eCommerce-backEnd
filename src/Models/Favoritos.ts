import mongoose, { Schema } from "mongoose";
import { Produto } from "./Produto";


interface Favoritos {
  produto: Produto[]
}


const favoritoSchema: Schema = new Schema(
  {
    usuario: { type: String, required: true, ref: 'usuarios' },
    produtos: [
      {
        produto: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'produtos' },
      }
    ]
  }, { versionKey: false }
)

export const carrinho = mongoose.model<Favoritos>('categories', favoritoSchema)