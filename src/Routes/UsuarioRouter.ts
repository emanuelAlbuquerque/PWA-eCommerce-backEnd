import { UsuarioController } from "../Controllers/UsuarioController";
import { Router } from "express";

export const UsuarioRouter = Router()

UsuarioRouter.get('/listarUsuario', UsuarioController.listarUsuario)
UsuarioRouter.post('/cadastrarUsuario', UsuarioController.cadastarUsuario)
UsuarioRouter.get('/usuario/:id', UsuarioController.listarUsuarioPorId)
UsuarioRouter.delete('/deletarUsuario/:id', UsuarioController.deletarUsuario)
UsuarioRouter.put('/atualizarUsuario/:id', UsuarioController.atualizarUsuario)