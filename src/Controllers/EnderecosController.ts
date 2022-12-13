import { Request, Response } from "express";
import { json } from "stream/consumers";
import { Enderecos, enderecos } from "../Models/Enderecos";

export interface ParamsAdicionaEnderecoProps {
  cep: string
  rua: string
  cidade: string
  estado: string
  numero: string
}

export class EnderecosController {

  static async listarItensEnderecos(req: Request, res: Response) {
    const itensEndereco = await enderecos.find().clone()

    res.status(200).send(itensEndereco)
  }

  static async criarEndereco(req: Request, res: Response) {
    const itemEndereco = await enderecos.create(req.body)

    res.status(201).send('Endereco criado com suscesso')
  }

  static async listarEnderecoUsuario(req: Request, res: Response) {
    const { email } = req.params
    const endereco = await enderecos.find({ _id: email }).clone()

    if (endereco.length === 0) {
      return res.status(500).send({ mensage: `Endereco de Usuário não encontrado! Verifique se o email está correto` })
    }

    return res.status(200).send(endereco)
  }

  static async adicionarEndereco(req: Request, res: Response) {
    try {
      const { email } = req.params

      const itens: ParamsAdicionaEnderecoProps = {
        cep: req.body.cep,
        rua: req.body.rua,
        cidade: req.body.cidade,
        estado: req.body.estado,
        numero: req.body.numero
      }

      const item = await enderecos.updateOne({ _id: email }, { $push: { enderecos: itens } }).clone()

      return res.status(200).send({ mensage: `Endereco adicionado com sucesso` })

    } catch (err) {
      return res.status(500).send({ mensage: `${err} Erro ao adicionar o endereco` })
    }
  }

  static async removerEndereco(req: Request, res: Response) {

    const email = req.params.email
    const id = req.params.id

    await enderecos.updateOne({ _id: email }, { $pull: { enderecos: { _id: id } } })

    return res.status(200).send({ mensage: `Enderecos removido com sucesso` })
  }

  static async atualizarEndereco(req: Request, res: Response) {

    const email = req.params.email
    const id = req.params.id

    const { cep, rua, cidade, estado, numero } = req.body


    const listaEndereco = (await enderecos.find()).forEach((endereco: Enderecos) => {
      if (endereco._id === email) {
        let listaEnderecosUser = endereco
        listaEnderecosUser.enderecos.forEach(async (item) => {
          if (String(item._id) === id) {

            if (cep) {
              item.cep = cep
            }
            if (rua) {
              item.rua = rua
            }
            if (cidade) {
              item.cidade = cidade
            }
            if (estado) {
              item.estado = estado
            }
            if (numero) {
              item.numero = numero
            }

            await enderecos.updateOne({ _id: email }, { $set: listaEnderecosUser })
            return res.status(200).send({ mensage: 'Endereço atualizado com sucesso' })

          } else {
            return res.status(404).send({ mensage: 'Endereço não encontrado' })
          }

        })
      }
    })
    // return res.status(200).send({ mensage: `Enderecos atualizado com sucesso` })
  }

}