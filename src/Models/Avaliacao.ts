import mongoose, { Schema } from "mongoose";


export type Avaliacao = {
  descricao: string
  img: string[]
  ratings: number
  produto: string
  idUsuario: string
  dataPostagem: Date
}



const avaliacoesSchema: Schema = new Schema(
  {
    produto: { type: String, required: true },
    idUsuario: { type: String, required: true },
    descricao: { type: String, required: true },
    img: [{
      url: { type: String }
    }],
    ratings: { type: Number, required: true },
    dataPostagem: { type: Date, default: Date}
  }
)

export const avaliacoes = mongoose.model<Avaliacao>('avaliacoes', avaliacoesSchema)