import { Router } from 'express'
import { EnderecosController } from '../Controllers/EnderecosController'

export const EnderecosRouter = Router()


EnderecosRouter.put('/removerEndereco/:email/:id', EnderecosController.removerEndereco)
EnderecosRouter.put('/atualizarEndereco/:email/:id', EnderecosController.atualizarEndereco)
EnderecosRouter.put('/adicionarEndereco/:email', EnderecosController.adicionarEndereco)
EnderecosRouter.get('/listarEnderecoUsuario/:email', EnderecosController.listarEnderecoUsuario)
EnderecosRouter.get('/listarEnderecos', EnderecosController.listarItensEnderecos)
EnderecosRouter.post('/cadastrarEndereco', EnderecosController.criarEndereco)
