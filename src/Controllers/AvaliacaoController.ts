import { Request, Response } from "express";
import { avaliacoes } from "../Models/Avaliacao";


export async function listarAvaliacao(req: Request, res: Response) {
  const listaAvaliacoes = await avaliacoes.find().clone()
  return res.status(200).send(listaAvaliacoes)
}

export async function listarAvaliacoesUsuario(req: Request, res: Response) {
  try {
    const { email } = req.params
    const avaliacao = await avaliacoes.findById(email).clone()

    if (!avaliacao) {
      return res.status(404).send({ mensage: `avaliacao não encontrada` })
    }

    return res.status(200).send(avaliacao)

  } catch (error) {
    return res.status(404).send({ mensage: `${error} Verifique se o tamanho do ID está correto` })
  }
}

export async function cadastrarAvaliacao(req: Request, res: Response) {
  const avaliacao = await avaliacoes.create(req.body)
  return res.status(201).send('avaliacao cadastrada com sucesso').json(avaliacao)
}


export async function deletarAvaliacao(req: Request, res: Response): Promise<Response> {
  try {
    const { id } = req.params
    const avaliacao = await avaliacoes.findByIdAndDelete(id).clone()

    if (!avaliacao) {
      return res.status(404).send({ mensage: `avaliacao não encontrada para ser deletado` })
    }

    return res.status(200).send('avaliacao deletada com suscesso').json(avaliacao)

  } catch (error) {
    return res.status(404).send({ mensage: `${error} - Verifique o ID` })
  }
}


export async function atualizarAvaliacao(req: Request, res: Response): Promise<Response> {
  try {
    const { id } = req.params
    const avaliacao = await avaliacoes.findByIdAndUpdate(id, { $set: req.body }).clone()

    if (!avaliacao) {
      return res.status(404).send({ mensage: `avaliacao não encontrada para ser Atualizado` })
    }

    return res.status(200).send('avaliacao atualizada com suscesso').json(avaliacao)
  } catch (error) {
    return res.status(404).send({ mensage: `${error} - Verifique o ID` })
  }
}

