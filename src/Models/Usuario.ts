import mongoose, { Schema } from "mongoose";
import { carrinhos } from "./Carrinho";



export type Usuario = {
  _id: string
  nome: string
  email: string
}



const usuarioSchema: Schema = new Schema(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },

    carrinho: { type: String, ref: 'carrinhos', lowercase: true },
    enderecos: { type: String, ref: 'enderecos', lowercase: true },
    favoritos: { type: String, ref: 'favoritos', lowercase: true }
  }, { versionKey: false }
)

export const usuarios = mongoose.model<Usuario>('usuarios', usuarioSchema)