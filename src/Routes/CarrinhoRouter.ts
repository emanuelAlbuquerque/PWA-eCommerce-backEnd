import { Router } from 'express'
import { CarrinhoController } from '../Controllers/CarrinhoController'

export const CarrinhoRouter = Router()


CarrinhoRouter.put('/removerProdutos/:email/:id', CarrinhoController.removerProdutoCarrinho)
CarrinhoRouter.put('/adicionarProdutos/:email', CarrinhoController.adicionarProdutoCarrinho)
CarrinhoRouter.get('/listarCarrinhoUsuario/:email', CarrinhoController.listarCarrinhoUsuario)
CarrinhoRouter.get('/listarCarrinhos', CarrinhoController.listarItensCarrinho)
CarrinhoRouter.post('/cadastrarCarrinho', CarrinhoController.criarCarrinho)
