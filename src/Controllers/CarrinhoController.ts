import { Request, Response } from "express";
import { isValidObjectId } from "mongoose";
import { Carrinho, carrinhos } from "../Models/Carrinho";

export interface ParamsAdicionaProps {
  produto: string
  quantidade: number
}

export class CarrinhoController {

  static async listarItensCarrinho(req: Request, res: Response) {
    const itensCarrinho = await carrinhos.find().populate('produtos.produto').clone()

    res.status(200).send(itensCarrinho)
  }

  static async listarCarrinhoUsuario(req: Request, res: Response) {
    const { email } = req.params
    const carrinho = await carrinhos.find({ _id: email }).populate('produtos.produto').clone()

    if (carrinho.length === 0) {
      return res.status(500).send({ mensage: `Carrinho de Usuário não encontrado! Verifique se o email está correto` })
    }

    return res.status(200).send(carrinho)
  }

  static async adicionarProdutoCarrinho(req: Request, res: Response) {
    try {
      const { email } = req.params

      const itens: ParamsAdicionaProps = {
        produto: req.body.produto,
        quantidade: req.body.quantidade
      }

      const item = await carrinhos.updateOne({ _id: email }, { $push: { produtos: itens } }).clone()

      return res.status(200).send({ mensage: `Produto adicionado com sucesso` })

    } catch (err) {
      return res.status(500).send({ mensage: `${err} Erro ao adicionar o produto` })
    }
  }

  static async removerProdutoCarrinho(req: Request, res: Response) {

    const email = req.params.email
    const id = req.params.id

    await carrinhos.updateOne({ _id: email }, { $pull: { produtos: { _id: id } } }).clone()

    return res.status(200).send({ mensage: `Produto removido com sucesso` })
  }

  static async atualizarProdutoCarrinho(req: Request, res: Response) {

    const email = req.params.email
    const id = req.params.id

    const { quantidade } = req.body

    const itensCarrinho = (await carrinhos.find().clone()).forEach(async (carrinho: Carrinho) => {//Lista todos os carrinhos de usuarios
      if (carrinho._id === email) {// Pega o carrinho de um unico usuario
        let listaProdutosCarrinhosUser = carrinho// Guarda esse carrinho em uma variavel para ser modificada
        listaProdutosCarrinhosUser.produtos.forEach(async (produto) => {// Pecorre os produtos que estão nesse carrinho
          if (String(produto._id) === id) {// Pega o produto que tem o id igual ao passado na url
            if (quantidade) {
              produto.quantidade = quantidade
            }//Muda a quantidade

            await carrinhos.updateOne({ _id: email }, { $set: listaProdutosCarrinhosUser }).clone()
            return res.status(200).send({ mensage: 'Produto atualizado com sucesso' })
          }
        })
      }
    })
  }
}