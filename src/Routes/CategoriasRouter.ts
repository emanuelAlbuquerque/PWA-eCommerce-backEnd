import { Router } from 'express'
import { 
          listarCategoriaPorId, 
          listarCategorias, 
          deletarCategoria, 
          atualizarCategoria, 
          cadastrarCategoria 
        } from '../Controllers/CategoriaController'

export const CategoriasRouter = Router()


CategoriasRouter.get('/listarCategorias', listarCategorias)
CategoriasRouter.post('/cadastrarCategoria', cadastrarCategoria)
CategoriasRouter.get('/categoria/:id', listarCategoriaPorId)
CategoriasRouter.delete('/deletarCategoria/:id', deletarCategoria)
CategoriasRouter.put('/atualizarProduto/:id', atualizarCategoria)