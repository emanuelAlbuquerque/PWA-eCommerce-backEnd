import mongoose, { Schema } from "mongoose";
import { Produto } from "./Produto";


interface Carrinho {
  produto: Produto[]
  quantidade: number
  usuario: string
}


const carrinhoSchema: Schema = new Schema(
  {
    _id: { type: String, required: true },
    produtos: [
      {
        produto: { type: String, required: true, ref: 'produtos' },
        quantidade: { type: Number, required: true },
      }
    ]
  }, { _id: false, versionKey: false }
)

export const carrinho = mongoose.model<Carrinho>('carrinho', carrinhoSchema)