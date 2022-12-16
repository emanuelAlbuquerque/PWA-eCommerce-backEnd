"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizarCategoria = exports.deletarCategoria = exports.cadastrarCategoria = exports.listarCategoriaPorId = exports.listarCategorias = void 0;
const Categoria_1 = require("../Models/Categoria");
async function listarCategorias(req, res) {
    const listaCategorias = await Categoria_1.categorias.find().clone();
    return res.status(200).send(listaCategorias);
}
exports.listarCategorias = listarCategorias;
async function listarCategoriaPorId(req, res) {
    try {
        const { id } = req.params;
        const categoria = await Categoria_1.categorias.findById(id).clone();
        if (!categoria) {
            return res.status(404).send({ mensage: `categoria não encontrado` });
        }
        return res.status(200).send(categoria);
    }
    catch (error) {
        return res.status(404).send({ mensage: `${error} Verifique se o tamanho do ID está correto` });
    }
}
exports.listarCategoriaPorId = listarCategoriaPorId;
async function cadastrarCategoria(req, res) {
    const categoria = await Categoria_1.categorias.create(req.body);
    return res.status(201).send('Categoria cadastrada com sucesso').json(categoria);
}
exports.cadastrarCategoria = cadastrarCategoria;
async function deletarCategoria(req, res) {
    try {
        const { id } = req.params;
        const categoria = await Categoria_1.categorias.findByIdAndDelete(id).clone();
        if (!categoria) {
            return res.status(404).send({ mensage: `categoria não encontrada para ser deletada` });
        }
        return res.status(200).send('categoria deletada com suscesso').json(categoria);
    }
    catch (error) {
        return res.status(404).send({ mensage: `${error} - Verifique o ID` });
    }
}
exports.deletarCategoria = deletarCategoria;
async function atualizarCategoria(req, res) {
    try {
        const { id } = req.params;
        const categoria = await Categoria_1.categorias.findByIdAndUpdate(id, { $set: req.body });
        if (!categoria) {
            return res.status(404).send({ mensage: `categoria não encontrada para ser Atualizada` });
        }
        return res.status(200).send('Categoria atualizada com suscessa').json(categoria);
    }
    catch (error) {
        return res.status(404).send({ mensage: `${error} - Verifique o ID` });
    }
}
exports.atualizarCategoria = atualizarCategoria;
