import mongoose, { Schema } from "mongoose";
import { Produto } from "./Produto";


interface Favoritos {
  produtos: Produto[]
}


const favoritoSchema: Schema = new Schema(
  {
    _id: { type: String, required: true, lowercase: true },
    produtos: [
      {
        produto: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'produtos' },
      }
    ]
  }, { versionKey: false }
)

export const favoritos = mongoose.model<Favoritos>('favoritos', favoritoSchema)