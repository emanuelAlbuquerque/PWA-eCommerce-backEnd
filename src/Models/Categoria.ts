import mongoose, { Schema } from "mongoose";


export type Categoria = {
  nome: string
}



const categoriaSchema: Schema = new Schema(
  {
    nome: { type: String, required: true }
  }, { versionKey: false }
)

export const categorias = mongoose.model<Categoria>('categories', categoriaSchema)