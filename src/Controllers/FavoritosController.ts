import { Request, Response } from "express";
import { favoritos } from "../Models/Favoritos";

export interface ParamsAdicionaProps {
  produto: string
  quantidade: number
}

export class FavoritosController {

  static async listarItensFavoritos(req: Request, res: Response) {
    const itensFavoritos = await favoritos.find().populate('produtos.produto').clone()

    res.status(200).send(itensFavoritos)
  }

  static async listarFavoritosUsuario(req: Request, res: Response) {
    const { email } = req.params
    const favorito = await favoritos.find({ _id: email }).populate('produtos.produto').clone()

    if (favorito.length === 0) {
      return res.status(500).send({ mensage: `Favorito de Usuário não encontrado! Verifique se o email está correto` })
    }

    return res.status(200).send(favorito)
  }

  static async adicionarProdutoFavoritos(req: Request, res: Response) {
    try {
      const { email } = req.params

      const itens = {
        produto: req.body.produto,
      }

      const item = await favoritos.updateOne({ _id: email }, { $push: { produtos: itens } }).clone()

      return res.status(200).send({ mensage: `Produto adicionado com sucesso` })

    } catch (err) {
      return res.status(500).send({ mensage: `${err} Erro ao adicionar o produto` })
    }
  }

  static async removerProdutoFavorito(req: Request, res: Response) {

    const email = req.params.email
    const id = req.params.id

    await favoritos.updateOne({ _id: email }, { $pull: { produtos: { _id: id } } }).clone()

    return res.status(200).send({ mensage: `Produto removido com sucesso` })
  }
}