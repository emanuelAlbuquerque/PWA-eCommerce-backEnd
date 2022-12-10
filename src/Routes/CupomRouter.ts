import { Router } from 'express'
import {
  listarCupomPorId,
  listarCupons,
  deletarCupom,
  atualizarCupom,
  cadastrarCupom
} from '../Controllers/CupomController'

export const CuponsRouter = Router()


CuponsRouter.get('/listarCupons', listarCupons)
CuponsRouter.post('/cadastrarCupom', cadastrarCupom)
CuponsRouter.get('/cupom/:id', listarCupomPorId)
CuponsRouter.delete('/deletarCupom/:id', deletarCupom)
CuponsRouter.put('/atualizarCupom/:id', atualizarCupom)