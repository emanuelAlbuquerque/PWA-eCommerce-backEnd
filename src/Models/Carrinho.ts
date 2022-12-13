import mongoose, { Schema } from "mongoose";
import { Produto } from "./Produto";


interface Carrinho {
  produto: Produto[]
  quantidade: number
  usuario: string
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