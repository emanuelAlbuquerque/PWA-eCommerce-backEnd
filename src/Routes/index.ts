import { Request, Response } from 'express'
import { Router } from 'express'
import { listarProdutos, listarProdutoPorId, cadastrarProduto, deletarProduto, atualizarProduto } from '../Controllers/ProdutoControleer'

export const router = Router()


router.get('/listarProdutos', listarProdutos)
router.get('/produto/:id', listarProdutoPorId)
router.post('/cadastrarProduto', cadastrarProduto)
router.delete('/deletarProduto/:id', deletarProduto)
router.put('/atualizarProduto/:id', atualizarProduto)