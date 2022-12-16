"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoritosController = void 0;
const Favoritos_1 = require("../Models/Favoritos");
class FavoritosController {
    static async listarItensFavoritos(req, res) {
        const itensFavoritos = await Favoritos_1.favoritos.find().populate('produtos.produto').clone();
        res.status(200).send(itensFavoritos);
    }
    static async listarFavoritosUsuario(req, res) {
        const { email } = req.params;
        const favorito = await Favoritos_1.favoritos.find({ _id: email }).populate('produtos.produto').clone();
        if (favorito.length === 0) {
            return res.status(500).send({ mensage: `Favorito de Usuário não encontrado! Verifique se o email está correto` });
        }
        return res.status(200).send(favorito);
    }
    static async adicionarProdutoFavoritos(req, res) {
        try {
            const { email } = req.params;
            const itens = {
                produto: req.body.produto,
            };
            const item = await Favoritos_1.favoritos.updateOne({ _id: email }, { $push: { produtos: itens } }).clone();
            return res.status(200).send({ mensage: `Produto adicionado com sucesso` });
        }
        catch (err) {
            return res.status(500).send({ mensage: `${err} Erro ao adicionar o produto` });
        }
    }
    static async removerProdutoFavorito(req, res) {
        const email = req.params.email;
        const id = req.params.id;
        await Favoritos_1.favoritos.updateOne({ _id: email }, { $pull: { produtos: { _id: id } } }).clone();
        return res.status(200).send({ mensage: `Produto removido com sucesso` });
    }
}
exports.FavoritosController = FavoritosController;
