import { Router } from 'express'
import { listarProdutos, listarProdutoPorId, cadastrarProduto, deletarProduto, atualizarProduto } from '../Controllers/ProdutoControleer'

export const ProdutosRouter = Router()


ProdutosRouter.get('/listarProdutos', listarProdutos)
ProdutosRouter.post('/cadastrarProduto', cadastrarProduto)
ProdutosRouter.get('/produto/:id', listarProdutoPorId)
ProdutosRouter.delete('/deletarProduto/:id', deletarProduto)
ProdutosRouter.put('/atualizarProduto/:id', atualizarProduto)