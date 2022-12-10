import { Router } from 'express'
import {
  listarAvaliacaoPorId,
  listarAvaliacao,
  deletarAvaliacao,
  atualizarAvaliacao,
  cadastrarAvaliacao
} from '../Controllers/AvaliacaoController'

export const AvaliacaosRouter = Router()


AvaliacaosRouter.get('/listarAvaliacao', listarAvaliacao)
AvaliacaosRouter.post('/cadastrarAvaliacao', cadastrarAvaliacao)
AvaliacaosRouter.get('/Avaliacao/:id', listarAvaliacaoPorId)
AvaliacaosRouter.delete('/deletarAvaliacao/:id', deletarAvaliacao)
AvaliacaosRouter.put('/atualizarProduto/:id', atualizarAvaliacao)