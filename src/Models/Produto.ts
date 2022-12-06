import mongoose, { Schema } from "mongoose";


type Produto = {
  nome: string
  descricao: string
  img: string
  preco: number
  precoTotal: number
  desconto: number
  ratings: number
  defaultRatings: number
  quantidadeVendas: number
}



const produtoSchema = new Schema(
  {
    nome: {type: String, required: true},
    descricao: { type: String, required: true },
    img: { type: String, required: true },
    preco: { type: Number, required: true },
    precoTotal: {type: Number},
    desconto: {type: Number},
    ratings: {type: Number},
    defaultRatings: {type: Number, required: true},
    quantidadeVendas: {type: Number},

  }
)

export const produtos = mongoose.model('produtos', produtoSchema)