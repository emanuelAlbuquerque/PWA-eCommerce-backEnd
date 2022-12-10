import mongoose, { Schema } from "mongoose";
import { Avaliacao } from "./Avaliacao";


export type Usuario = {

}



const usuarioSchema: Schema = new Schema(
  {
    nome: {type: String, require: true},
  }
)

export const usuarios = mongoose.model<Usuario>('usuarios', usuarioSchema)