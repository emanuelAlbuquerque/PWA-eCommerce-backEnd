import { Router } from 'express'
import { CarrinhoController } from '../Controllers/CarrinhoController'

export const CarrinhoRouter = Router()


CarrinhoRouter.put('/removerProdutos/:email/:id', CarrinhoController.removerProdutoCarrinho)
CarrinhoRouter.put('/atualizarProdutoCarrinho/:email/:id', CarrinhoController.atualizarProdutoCarrinho)
CarrinhoRouter.put('/adicionarProdutosCarrinho/:email', CarrinhoController.adicionarProdutoCarrinho)
CarrinhoRouter.get('/listarCarrinhoUsuario/:email', CarrinhoController.listarCarrinhoUsuario)
CarrinhoRouter.get('/listarCarrinhos', CarrinhoController.listarItensCarrinho)
