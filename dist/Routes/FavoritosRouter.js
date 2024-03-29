"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoritosRouter = void 0;
const express_1 = require("express");
const FavoritosController_1 = require("../Controllers/FavoritosController");
exports.FavoritosRouter = (0, express_1.Router)();
exports.FavoritosRouter.put('/removerProdutosFavorito/:email/:id', FavoritosController_1.FavoritosController.removerProdutoFavorito);
exports.FavoritosRouter.put('/adicionarProdutosFavorito/:email', FavoritosController_1.FavoritosController.adicionarProdutoFavoritos);
exports.FavoritosRouter.get('/listarFavoritoUsuario/:email', FavoritosController_1.FavoritosController.listarFavoritosUsuario);
exports.FavoritosRouter.get('/listarFavoritos', FavoritosController_1.FavoritosController.listarItensFavoritos);
