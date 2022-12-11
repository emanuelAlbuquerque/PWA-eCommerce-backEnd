import mongoose, { Schema } from "mongoose";


export type Cupom = {
  code: string
  condicao: string
  dataValidade: string
  status: string
  desconto: number
}



const cupomSchema: Schema = new Schema(
  {
    code: { type: String, required: true },
    condicao: { type: String, required: true },
    dataValidade: { type: String, required: true },
    status: { type: String, required: true },
    desconto: { type: Number, required: true }
  }, { versionKey: false }
)

export const cupons = mongoose.model<Cupom>('cupons', cupomSchema)