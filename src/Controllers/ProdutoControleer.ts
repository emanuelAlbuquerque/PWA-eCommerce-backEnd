import { Request, Response } from "express";
import { produtos } from "../Models/Produto";

// https://bobbyhadz.com/blog/javascript-error-cannot-set-headers-after-they-are-sent-to-client#:~:text=The%20%22Cannot%20set%20headers%20after,single%20response%20for%20each%20request.

// https://stackoverflow.com/questions/7042340/error-cant-set-headers-after-they-are-sent-to-the-client

// https://stackoverflow.com/questions/38995240/rest-http-status-code-if-error-mongoose

// https://github.com/Automattic/mongoose/issues/4192


// https://pt.stackoverflow.com/questions/391469/inserir-valor-no-array-mongoose - Pode ser util para a api de avaliações


export async function listarProdutos(req: Request, res: Response){
  const listaProdutos = await produtos.find().populate('categoria').clone()

  if (!listaProdutos) {
    return res.status(404).send('Lista vazia')
  }
  return res.status(200).send(listaProdutos)
} 

export async function listarProdutoPorId(req: Request, res: Response) {
  try {
    const { id } = req.params
    const produto = await produtos.findById(id).clone()

    if (!produto) {
      return res.status(404).send({ mensage: `Produto não encontrado` })
    }

    return res.status(200).send(produto)
    
  } catch (error) {
    return res.status(404).send({ mensage: `${error} Verifique se o tamanho do ID está correto` })
  }
} 

export async function cadastrarProduto(req: Request, res: Response) {
  try {
    const produto = await produtos.create(req.body)
    return res.status(201).send('Produto cadastrado com sucesso')

  } catch (err) {
    return res.status(500).send(`${err} - Erro ao cadastrar o Produto`)
  }
}


export async function deletarProduto(req: Request, res: Response): Promise<Response> {
  try {
    const { id } = req.params
    const produto = await produtos.findByIdAndDelete(id).clone()

    if(!produto){
      return res.status(404).send({ mensage: `Produto não encontrado para ser deletado` })
    }

    return res.status(200).send('Produto deletado com suscesso')

  } catch (error) {
    return res.status(404).send({ mensage: `${error} - Verifique o ID` })
  }
} 


export async function atualizarProduto(req: Request, res: Response): Promise<Response> {
  try {
    const { id } = req.params
    const produto = await produtos.findByIdAndUpdate(id, {$set: req.body}).clone()

    if (!produto) {
      return res.status(404).send({ mensage: `Produto não encontrado para ser Atualizado` })
    }

    return res.status(200).send('Produto atualizado com suscesso')
  } catch (error) {
    return res.status(404).send({ mensage: `${error} - Verifique o ID` })
  }
} 

