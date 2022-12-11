import { Request, Response } from "express";
import { cupons } from "../Models/Cupom";


export async function listarCupons(req: Request, res: Response) {
  const listaCupons = await cupons.find().clone()

  if (!listaCupons) {
    return res.status(404).send('Lista vazia')
  }

  return res.status(200).send(listaCupons)
}

export async function listarCupomPorId(req: Request, res: Response) {
  try {
    const { id } = req.params
    const cupom = await cupons.findById(id).clone()

    if (!cupom) {
      return res.status(404).send({ mensage: `Cupom não encontrado` })
    }

    return res.status(200).send(cupom)

  } catch (error) {
    return res.status(404).send({ mensage: `${error} Verifique se o tamanho do ID está correto` })
  }
}

export async function cadastrarCupom(req: Request, res: Response) {
  try {
    const cupom = await cupons.create(req.body)
    return res.status(201).send('Cupom cadastrado com sucesso')

  } catch (err) {
    return res.status(500).send(`${err} - Erro ao cadastrar o Cupom`)
  }
}


export async function deletarCupom(req: Request, res: Response): Promise<Response> {
  try {
    const { id } = req.params
    const cupom = await cupons.findByIdAndDelete(id).clone()

    if (!cupom) {
      return res.status(404).send({ mensage: `Cupom não encontrado para ser deletado` })
    }

    return res.status(200).send('Cupom deletado com suscesso')

  } catch (error) {
    return res.status(500).send({ mensage: `${error} - Verifique o ID` })
  }
}


export async function atualizarCupom(req: Request, res: Response): Promise<Response> {
  try {
    const { id } = req.params
    const cupom = await cupons.findByIdAndUpdate(id, { $set: req.body }).clone()

    if (!cupom) {
      return res.status(404).send({ mensage: `Cupom não encontrado para ser Atualizado` })
    }

    return res.status(200).send('Cupom atualizado com suscesso')
  } catch (error) {
    return res.status(500).send({ mensage: `${error} - Verifique o ID` })
  }
}

