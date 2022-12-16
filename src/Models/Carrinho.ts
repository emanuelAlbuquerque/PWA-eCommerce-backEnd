import mongoose, { Schema } from "mongoose";
import { Produto } from "./Produto";


interface ProdutosCarrinhoItem {
  _id: mongoose.Schema.Types.ObjectId
  produto: Produto[]
  quantidade: number
}


export interface Carrinho {
  _id: string
  produtos: ProdutosCarrinhoItem[]
}


const carrinhoSchema: Schema = new Schema(
  {
    _id: { type: String, required: true, lowercase: true },
    produtos: [
      {
        produto: { type: String, required: true, ref: 'produtos' },
        quantidade: { type: Number, required: true },
      }
    ]
  }, { versionKey: false }
)

export const carrinhos = mongoose.model<Carrinho>('carrinhos', carrinhoSchema)