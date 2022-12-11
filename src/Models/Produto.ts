import mongoose, { Schema } from "mongoose";


export type Produto = {
  nome: string
  descricao: string
  img: string
  preco: number
  precoTotal: number
  desconto: number
  ratings: number
  defaultRatings: number
  quantidadeVendas: number
  cor: string,
  quantidade: number,
  tamanho: string,
  marca: string,
  categoria: {
    _id: Schema.Types.ObjectId,
    nome: string
  }
}



const produtoSchema: Schema = new Schema(
  {
    nome: {type: String, required: true},
    descricao: { type: String, required: true },
    img: { type: String, required: true },
    preco: { type: Number, required: true },
    precoTotal: {type: Number},
    quantidadeVendas: {type: Number},
    desconto: {type: Number},
    ratings: {type: Number},
    defaultRatings: {type: Number, required: true},
    quantidade: { type: Number, required: true },
    tamanho: { type: String, required: true },
    cor: { type: String, required: true },
    marca: { type: String, required: true },
    categoria: { type: Schema.Types.ObjectId, ref: 'categories', required: true }
  }, { versionKey: false }
)

export const produtos = mongoose.model<Produto>('produtos', produtoSchema)