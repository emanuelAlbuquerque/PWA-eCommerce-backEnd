"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizarAvaliacao = exports.deletarAvaliacao = exports.cadastrarAvaliacao = exports.listarAvaliacoesUsuario = exports.listarAvaliacao = void 0;
const Avaliacao_1 = require("../Models/Avaliacao");
async function listarAvaliacao(req, res) {
    const listaAvaliacoes = await Avaliacao_1.avaliacoes.find().clone();
    return res.status(200).send(listaAvaliacoes);
}
exports.listarAvaliacao = listarAvaliacao;
async function listarAvaliacoesUsuario(req, res) {
    try {
        const { email } = req.params;
        const avaliacao = await Avaliacao_1.avaliacoes.findById(email).clone();
        if (!avaliacao) {
            return res.status(404).send({ mensage: `avaliacao não encontrada` });
        }
        return res.status(200).send(avaliacao);
    }
    catch (error) {
        return res.status(404).send({ mensage: `${error} Verifique se o tamanho do ID está correto` });
    }
}
exports.listarAvaliacoesUsuario = listarAvaliacoesUsuario;
async function cadastrarAvaliacao(req, res) {
    const avaliacao = await Avaliacao_1.avaliacoes.create(req.body);
    return res.status(201).send('avaliacao cadastrada com sucesso').json(avaliacao);
}
exports.cadastrarAvaliacao = cadastrarAvaliacao;
async function deletarAvaliacao(req, res) {
    try {
        const { id } = req.params;
        const avaliacao = await Avaliacao_1.avaliacoes.findByIdAndDelete(id).clone();
        if (!avaliacao) {
            return res.status(404).send({ mensage: `avaliacao não encontrada para ser deletado` });
        }
        return res.status(200).send('avaliacao deletada com suscesso').json(avaliacao);
    }
    catch (error) {
        return res.status(404).send({ mensage: `${error} - Verifique o ID` });
    }
}
exports.deletarAvaliacao = deletarAvaliacao;
async function atualizarAvaliacao(req, res) {
    try {
        const { id } = req.params;
        const avaliacao = await Avaliacao_1.avaliacoes.findByIdAndUpdate(id, { $set: req.body }).clone();
        if (!avaliacao) {
            return res.status(404).send({ mensage: `avaliacao não encontrada para ser Atualizado` });
        }
        return res.status(200).send('avaliacao atualizada com suscesso').json(avaliacao);
    }
    catch (error) {
        return res.status(404).send({ mensage: `${error} - Verifique o ID` });
    }
}
exports.atualizarAvaliacao = atualizarAvaliacao;
