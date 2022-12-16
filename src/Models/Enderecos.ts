import mongoose, { Schema } from "mongoose";

interface EnderecoItem {
  _id: mongoose.Schema.Types.ObjectId
  cep: string
  rua: string
  cidade: string
  estado: string
  numero: string
  nome: string
}

export interface Enderecos {
  _id: string
  enderecos: EnderecoItem[]
}


const enderecosSchema: Schema = new Schema(
  {
    _id: { type: String, required: true, lowercase: true },
    enderecos: [
      {
        nome: { type: String, required: true },
        cep: { type: String, required: true },
        rua: { type: String, required: true },
        cidade: { type: String, required: true },
        estado: { type: String, required: true },
        numero: { type: String, required: true }
      }
    ]
  }, { versionKey: false }
)

export const enderecos = mongoose.model<Enderecos>('enderecos', enderecosSchema)