"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriasRouter = void 0;
const express_1 = require("express");
const CategoriaController_1 = require("../Controllers/CategoriaController");
exports.CategoriasRouter = (0, express_1.Router)();
exports.CategoriasRouter.get('/listarCategorias', CategoriaController_1.listarCategorias);
exports.CategoriasRouter.post('/cadastrarCategoria', CategoriaController_1.cadastrarCategoria);
exports.CategoriasRouter.get('/categoria/:id', CategoriaController_1.listarCategoriaPorId);
exports.CategoriasRouter.delete('/deletarCategoria/:id', CategoriaController_1.deletarCategoria);
exports.CategoriasRouter.put('/atualizarProduto/:id', CategoriaController_1.atualizarCategoria);
