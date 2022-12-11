import mongoose, { Schema } from "mongoose";
import { carrinho } from "./Carrinho";



export type Usuario = {
  _id: string
  nome: string
  email: string
}



const usuarioSchema: Schema = new Schema(
  {
    nome: {type: String, required: true},
    email: { type: String, required: true, unique: true, lowercase: true },

    carrinho: { type: String, ref: 'carrinho' }
  }, { versionKey: false }
)

export const usuarios = mongoose.model<Usuario>('usuarios', usuarioSchema)