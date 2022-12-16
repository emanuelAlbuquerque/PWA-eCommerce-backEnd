import { Router } from 'express'
import { FavoritosController } from '../Controllers/FavoritosController'

export const FavoritosRouter = Router()


FavoritosRouter.put('/removerProdutosFavorito/:email/:id', FavoritosController.removerProdutoFavorito)
FavoritosRouter.put('/adicionarProdutosFavorito/:email', FavoritosController.adicionarProdutoFavoritos)
FavoritosRouter.get('/listarFavoritoUsuario/:email', FavoritosController.listarFavoritosUsuario)
FavoritosRouter.get('/listarFavoritos', FavoritosController.listarItensFavoritos)
