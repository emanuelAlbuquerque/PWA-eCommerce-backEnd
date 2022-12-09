import { Request, Response } from "express";
import { categorias } from "../Models/Categoria";


export async function listarCategorias(req: Request, res: Response) {
  const listaCategorias = await categorias.find().clone()
  return res.status(200).send(listaCategorias)
}

export async function listarCategoriaPorId(req: Request, res: Response) {
  try {
    const { id } = req.params
    const categoria = await categorias.findById(id).clone()

    if (!categoria) {
      return res.status(404).send({ mensage: `categoria não encontrado` })
    }

    return res.status(200).send(categoria)

  } catch (error) {
    return res.status(404).send({ mensage: `${error} Verifique se o tamanho do ID está correto` })
  }
}

export async function cadastrarCategoria(req: Request, res: Response) {
  const categoria = await categorias.create(req.body)
  return res.status(201).send('Categoria cadastrada com sucesso').json(categoria)
}


export async function deletarCategoria(req: Request, res: Response): Promise<Response> {
  try {
    const { id } = req.params
    const categoria = await categorias.findByIdAndDelete(id).clone()

    if (!categoria) {
      return res.status(404).send({ mensage: `categoria não encontrada para ser deletada` })
    }

    return res.status(200).send('categoria deletada com suscesso').json(categoria)

  } catch (error) {
    return res.status(404).send({ mensage: `${error} - Verifique o ID` })
  }
}


export async function atualizarCategoria(req: Request, res: Response): Promise<Response> {
  try {
    const { id } = req.params
    const categoria = await categorias.findByIdAndUpdate(id, { $set: req.body })

    if (!categoria) {
      return res.status(404).send({ mensage: `categoria não encontrada para ser Atualizada` })
    }

    return res.status(200).send('Categoria atualizada com suscessa').json(categoria)
  } catch (error) {
    return res.status(404).send({ mensage: `${error} - Verifique o ID` })
  }
}

