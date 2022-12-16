import mongoose, { Schema } from "mongoose";


interface AvaliacoesItemProps {
  descricao: string
  img: string[]
  ratings: number
  produto: mongoose.Schema.Types.ObjectId
  idUsuario: string
  dataPostagem: Date
}

export type Avaliacao = {
  _id: string
  avaliacoes: AvaliacoesItemProps[]
}



const avaliacoesSchema: Schema = new Schema(
  {
    _id: { type: String, required: true },
    avaliacoes: [
      {
        produto: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'produtos' },
        descricao: { type: String, required: true },
        img: [String],
        ratings: { type: Number, required: true },
        dataPostagem: { type: Date, default: Date.now() }
      }
    ]
  }, { versionKey: false }
)

export const avaliacoes = mongoose.model<Avaliacao>('avaliacoes', avaliacoesSchema)