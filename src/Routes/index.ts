import { Request, Response } from 'express'
import { Router } from 'express'
import { listarProdutos } from '../Controllers/ProdutoControleer'

export const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.status(200).send({titulo: 'Produtos disponiveis'})
})


router.get('/listarProdutos', listarProdutos)