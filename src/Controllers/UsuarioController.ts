import { Request, Response } from "express";
import { Error } from "mongoose";
import { carrinhos } from "../Models/Carrinho";
import { enderecos } from "../Models/Enderecos";
import { favoritos } from "../Models/Favoritos";
import { usuarios } from "../Models/Usuario";

export class UsuarioController {
  static async listarUsuario(req: Request, res: Response) {
    const listaUsuarios = await usuarios.find().populate(
      [
        {
          path: 'carrinho',  // Popula o campo carrinho           
          populate: [{ path: 'produtos.produto' }], // E popula também o produto dentro do carrinho.produtos
        },
        {
          path: 'enderecos',  // Popula o campo carrinho         
          // E popula também o produto dentro do carrinho.produtos
        },
        {
          path: 'favoritos',
          populate: [{ path: 'produtos.produto' }],
        },

      ]

    ).clone()

    if (!listaUsuarios) {
      return res.status(404).send({ mensage: `Lista Vazia!! Cadastre algun usuário` })
    }

    return res.status(200).send(listaUsuarios)
  }

  static async listarUsuarioPorId(req: Request, res: Response) {
    try {
      const { id } = req.params
      const usuario = await usuarios.findById(id).populate(
        [
          {
            path: 'carrinho',  // Popula o campo carrinho           
            populate: [{ path: 'produtos.produto' }], // E popula também o produto dentro do carrinho.produtos
          },
          {
            path: 'enderecos',  // Popula o campo carrinho         
            // E popula também o produto dentro do carrinho.produtos
          },
          {
            path: 'favoritos',
            populate: [{ path: 'produtos.produto' }],
          },

        ]

      ).clone()

      if (!usuario) {
        return res.status(404).send({ mensage: `Usuario não encontrado` })
      }

      return res.status(200).send(usuario)

    } catch (err) {
      return res.status(500).send({ mensage: `${err} ID incorreto` })
    }
  }

  static async cadastarUsuario(req: Request, res: Response) {
    try {

      const email: string = req.body.email

      const criaRefs = {
        _id: email
      }

      const usuario = await usuarios.create(req.body)
      const itemCarrinho = await carrinhos.create(criaRefs)
      const itemEndereco = await enderecos.create(criaRefs)
      const itemFavorito = await favoritos.create(criaRefs)

      return res.status(201).send('Usuario cadastrado com sucesso')

    } catch (err) {
      return res.status(500).send(`${err} Erro ao cadastrar o usuário`)
    }
  }

  static async atualizarUsuario(req: Request, res: Response) {
    try {
      const { id } = req.params
      const usuario = await usuarios.findByIdAndUpdate(id, { $set: req.body }).clone()

      if (!usuario) {
        return res.status(404).send({ mensage: `Usuario não encontrado` })
      }

      return res.status(200).send({ mensage: `Usuario atualizado com sucesso` })

    } catch (err) {
      return res.status(500).send({ mensage: `${err} ID incorreto` })
    }
  }

  static async deletarUsuario(req: Request, res: Response) {
    try {
      const { id } = req.params
      const usuario = await usuarios.findByIdAndDelete(id).clone()

      if (!usuario) {
        return res.status(404).send({ mensage: `Usuario não encontrado` })
      }

      return res.status(200).send({ mensage: `Usuario deletado com sucesso` })

    } catch (err) {
      return res.status(500).send({ mensage: `${err} ID incorreto` })
    }
  }
}