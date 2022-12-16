"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrinhoController = void 0;
const Carrinho_1 = require("../Models/Carrinho");
class CarrinhoController {
    static async listarItensCarrinho(req, res) {
        const itensCarrinho = await Carrinho_1.carrinhos.find().populate('produtos.produto').clone();
        res.status(200).send(itensCarrinho);
    }
    static async listarCarrinhoUsuario(req, res) {
        const { email } = req.params;
        const carrinho = await Carrinho_1.carrinhos.find({ _id: email }).populate('produtos.produto').clone();
        if (carrinho.length === 0) {
            return res.status(500).send({ mensage: `Carrinho de Usuário não encontrado! Verifique se o email está correto` });
        }
        return res.status(200).send(carrinho);
    }
    static async adicionarProdutoCarrinho(req, res) {
        try {
            const { email } = req.params;
            const itens = {
                produto: req.body.produto,
                quantidade: req.body.quantidade
            };
            const item = await Carrinho_1.carrinhos.updateOne({ _id: email }, { $push: { produtos: itens } }).clone();
            return res.status(200).send({ mensage: `Produto adicionado com sucesso` });
        }
        catch (err) {
            return res.status(500).send({ mensage: `${err} Erro ao adicionar o produto` });
        }
    }
    static async removerProdutoCarrinho(req, res) {
        const email = req.params.email;
        const id = req.params.id;
        await Carrinho_1.carrinhos.updateOne({ _id: email }, { $pull: { produtos: { _id: id } } }).clone();
        return res.status(200).send({ mensage: `Produto removido com sucesso` });
    }
    static async atualizarProdutoCarrinho(req, res) {
        const email = req.params.email;
        const id = req.params.id;
        const { quantidade } = req.body;
        const itensCarrinho = (await Carrinho_1.carrinhos.find()).forEach(async (carrinho) => {
            if (carrinho._id === email) { // Pega o carrinho de um unico usuario
                let listaProdutosCarrinhosUser = carrinho; // Guarda esse carrinho em uma variavel para ser modificada
                listaProdutosCarrinhosUser.produtos.forEach(async (produto) => {
                    if (String(produto._id) === id) { // Pega o produto que tem o id igual ao passado na url
                        if (quantidade) {
                            produto.quantidade = quantidade;
                        } //Muda a quantidade
                        await Carrinho_1.carrinhos.updateOne({ _id: email }, { $set: listaProdutosCarrinhosUser });
                        return res.status(200).send({ mensage: 'Produto atualizado com sucesso' });
                    }
                    else {
                        return res.status(404).send({ mensage: 'Produto não encontrado' });
                    }
                });
            }
        });
    }
}
exports.CarrinhoController = CarrinhoController;
