import mongoose, { Schema } from "mongoose";
import { Produto } from "./Produto";


interface Carrinho {
  produto: Produto[]
  quantidade: number
}


const carrinhoSchema: Schema = new Schema(
  {
    usuario: { type: String, required: true, ref: 'usuarios'},
    produtos: [
      {
        produto: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'produtos' },
        quantidade: { type: Number, required: true },
      }
    ]
  }
)

export const carrinho = mongoose.model<Carrinho>('categories', carrinhoSchema)