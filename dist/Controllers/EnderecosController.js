"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnderecosController = void 0;
const Enderecos_1 = require("../Models/Enderecos");
class EnderecosController {
    static async listarItensEnderecos(req, res) {
        const itensEndereco = await Enderecos_1.enderecos.find().clone();
        res.status(200).send(itensEndereco);
    }
    static async listarEnderecoUsuario(req, res) {
        const { email } = req.params;
        const endereco = await Enderecos_1.enderecos.find({ _id: email }).clone();
        if (endereco.length === 0) {
            return res.status(500).send({ mensage: `Endereco de Usuário não encontrado! Verifique se o email está correto` });
        }
        return res.status(200).send(endereco);
    }
    static async adicionarEndereco(req, res) {
        try {
            const { email } = req.params;
            const itens = {
                cep: req.body.cep,
                rua: req.body.rua,
                cidade: req.body.cidade,
                estado: req.body.estado,
                numero: req.body.numero,
                nome: req.body.nome
            };
            const item = await Enderecos_1.enderecos.updateOne({ _id: email }, { $push: { enderecos: itens } }).clone();
            return res.status(200).send({ mensage: `Endereco adicionado com sucesso` });
        }
        catch (err) {
            return res.status(500).send({ mensage: `${err} Erro ao adicionar o endereco` });
        }
    }
    static async removerEndereco(req, res) {
        const email = req.params.email;
        const id = req.params.id;
        await Enderecos_1.enderecos.updateOne({ _id: email }, { $pull: { enderecos: { _id: id } } });
        return res.status(200).send({ mensage: `Enderecos removido com sucesso` });
    }
    static async atualizarEndereco(req, res) {
        const email = req.params.email;
        const id = req.params.id;
        const { cep, rua, cidade, estado, numero, nome } = req.body;
        const listaEndereco = (await Enderecos_1.enderecos.find()).forEach((endereco) => {
            if (endereco._id === email) {
                let listaEnderecosUser = endereco;
                listaEnderecosUser.enderecos.forEach(async (item) => {
                    if (String(item._id) === id) {
                        if (nome) {
                            item.nome = nome;
                        }
                        if (cep) {
                            item.cep = cep;
                        }
                        if (rua) {
                            item.rua = rua;
                        }
                        if (cidade) {
                            item.cidade = cidade;
                        }
                        if (estado) {
                            item.estado = estado;
                        }
                        if (numero) {
                            item.numero = numero;
                        }
                        await Enderecos_1.enderecos.updateOne({ _id: email }, { $set: listaEnderecosUser });
                        return res.status(200).send({ mensage: 'Endereço atualizado com sucesso' });
                    }
                    else {
                        return res.status(404).send({ mensage: 'Endereço não encontrado' });
                    }
                });
            }
        });
        // return res.status(200).send({ mensage: `Enderecos atualizado com sucesso` })
    }
}
exports.EnderecosController = EnderecosController;
