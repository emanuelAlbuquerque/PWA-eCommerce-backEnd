import mongoose, { Schema } from "mongoose";


interface Enderecos {
  usuario: string
  cep: string
  rua: string
  cidade: string
  estado: string
  numero: string
}


const enderecosSchema: Schema = new Schema(
  {
    usuario: { type: String, required: true, ref: 'usuarios' },
    enderecos: [
      {
        cep: { type: String, required: true },
        rua: { type: String, required: true },
        cidade: { type: String, required: true },
        estado: { type: String, required: true },
        numero: { type: String, required: true }
      }
    ]
  }
)

export const enderecos = mongoose.model<Enderecos>('avaliacoes', enderecosSchema)