import mongoose, { Schema } from "mongoose";


export type Categoria = {
  nome: string
}



const categoriaSchema: Schema = new Schema(
  {
    nome: { type: String, required: true }
  }
)

export const categorias = mongoose.model<Categoria>('categories', categoriaSchema)