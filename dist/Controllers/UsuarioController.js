"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const Carrinho_1 = require("../Models/Carrinho");
const Enderecos_1 = require("../Models/Enderecos");
const Favoritos_1 = require("../Models/Favoritos");
const Usuario_1 = require("../Models/Usuario");
class UsuarioController {
    static async listarUsuario(req, res) {
        const listaUsuarios = await Usuario_1.usuarios.find().populate([
            {
                path: 'carrinho',
                populate: [{ path: 'produtos.produto' }], // E popula também o produto dentro do carrinho.produtos
            },
            {
                path: 'enderecos', // Popula o campo carrinho         
                // E popula também o produto dentro do carrinho.produtos
            },
            {
                path: 'favoritos',
                populate: [{ path: 'produtos.produto' }],
            },
        ]).clone();
        if (!listaUsuarios) {
            return res.status(404).send({ mensage: `Lista Vazia!! Cadastre algun usuário` });
        }
        return res.status(200).send(listaUsuarios);
    }
    static async listarUsuarioPorId(req, res) {
        try {
            const { id } = req.params;
            const usuario = await Usuario_1.usuarios.findById(id).populate([
                {
                    path: 'carrinho',
                    populate: [{ path: 'produtos.produto' }], // E popula também o produto dentro do carrinho.produtos
                },
                {
                    path: 'enderecos', // Popula o campo carrinho         
                    // E popula também o produto dentro do carrinho.produtos
                },
                {
                    path: 'favoritos',
                    populate: [{ path: 'produtos.produto' }],
                },
            ]).clone();
            if (!usuario) {
                return res.status(404).send({ mensage: `Usuario não encontrado` });
            }
            return res.status(200).send(usuario);
        }
        catch (err) {
            return res.status(500).send({ mensage: `${err} ID incorreto` });
        }
    }
    static async cadastarUsuario(req, res) {
        try {
            const email = req.body.email;
            const criaRefs = {
                _id: email
            };
            const usuario = await Usuario_1.usuarios.create(req.body);
            const itemCarrinho = await Carrinho_1.carrinhos.create(criaRefs);
            const itemEndereco = await Enderecos_1.enderecos.create(criaRefs);
            const itemFavorito = await Favoritos_1.favoritos.create(criaRefs);
            return res.status(201).send('Usuario cadastrado com sucesso');
        }
        catch (err) {
            return res.status(500).send(`${err} Erro ao cadastrar o usuário`);
        }
    }
    static async atualizarUsuario(req, res) {
        try {
            const { id } = req.params;
            const usuario = await Usuario_1.usuarios.findByIdAndUpdate(id, { $set: req.body }).clone();
            if (!usuario) {
                return res.status(404).send({ mensage: `Usuario não encontrado` });
            }
            return res.status(200).send({ mensage: `Usuario atualizado com sucesso` });
        }
        catch (err) {
            return res.status(500).send({ mensage: `${err} ID incorreto` });
        }
    }
    static async deletarUsuario(req, res) {
        try {
            const { id } = req.params;
            const usuario = await Usuario_1.usuarios.findByIdAndDelete(id).clone();
            if (!usuario) {
                return res.status(404).send({ mensage: `Usuario não encontrado` });
            }
            return res.status(200).send({ mensage: `Usuario deletado com sucesso` });
        }
        catch (err) {
            return res.status(500).send({ mensage: `${err} ID incorreto` });
        }
    }
}
exports.UsuarioController = UsuarioController;
