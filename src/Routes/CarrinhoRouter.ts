import { Router } from 'express'
import { CarrinhoController } from '../Controllers/CarrinhoController'

export const CarrinhoRouter = Router()


CarrinhoRouter.get('/listarCarrinhos', CarrinhoController.listarItensCarrinho)
CarrinhoRouter.post('/cadastrarCarrinho', CarrinhoController.criarCarrinho)
