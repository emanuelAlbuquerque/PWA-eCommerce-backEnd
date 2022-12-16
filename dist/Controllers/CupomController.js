"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizarCupom = exports.deletarCupom = exports.cadastrarCupom = exports.listarCupomPorId = exports.listarCupons = void 0;
const Cupom_1 = require("../Models/Cupom");
async function listarCupons(req, res) {
    const listaCupons = await Cupom_1.cupons.find().clone();
    if (!listaCupons) {
        return res.status(404).send('Lista vazia');
    }
    return res.status(200).send(listaCupons);
}
exports.listarCupons = listarCupons;
async function listarCupomPorId(req, res) {
    try {
        const { id } = req.params;
        const cupom = await Cupom_1.cupons.findById(id).clone();
        if (!cupom) {
            return res.status(404).send({ mensage: `Cupom não encontrado` });
        }
        return res.status(200).send(cupom);
    }
    catch (error) {
        return res.status(404).send({ mensage: `${error} Verifique se o tamanho do ID está correto` });
    }
}
exports.listarCupomPorId = listarCupomPorId;
async function cadastrarCupom(req, res) {
    try {
        const cupom = await Cupom_1.cupons.create(req.body);
        return res.status(201).send('Cupom cadastrado com sucesso');
    }
    catch (err) {
        return res.status(500).send(`${err} - Erro ao cadastrar o Cupom`);
    }
}
exports.cadastrarCupom = cadastrarCupom;
async function deletarCupom(req, res) {
    try {
        const { id } = req.params;
        const cupom = await Cupom_1.cupons.findByIdAndDelete(id).clone();
        if (!cupom) {
            return res.status(404).send({ mensage: `Cupom não encontrado para ser deletado` });
        }
        return res.status(200).send('Cupom deletado com suscesso');
    }
    catch (error) {
        return res.status(500).send({ mensage: `${error} - Verifique o ID` });
    }
}
exports.deletarCupom = deletarCupom;
async function atualizarCupom(req, res) {
    try {
        const { id } = req.params;
        const cupom = await Cupom_1.cupons.findByIdAndUpdate(id, { $set: req.body }).clone();
        if (!cupom) {
            return res.status(404).send({ mensage: `Cupom não encontrado para ser Atualizado` });
        }
        return res.status(200).send('Cupom atualizado com suscesso');
    }
    catch (error) {
        return res.status(500).send({ mensage: `${error} - Verifique o ID` });
    }
}
exports.atualizarCupom = atualizarCupom;
