import { Request, Response } from "express";
import { Error } from "mongoose";
import { produtos } from "../Models/Produto";

// https://bobbyhadz.com/blog/javascript-error-cannot-set-headers-after-they-are-sent-to-client#:~:text=The%20%22Cannot%20set%20headers%20after,single%20response%20for%20each%20request.

// https://stackoverflow.com/questions/7042340/error-cant-set-headers-after-they-are-sent-to-the-client

// https://stackoverflow.com/questions/38995240/rest-http-status-code-if-error-mongoose

// https://github.com/Automattic/mongoose/issues/4192


export async function listarProdutos(req: Request, res: Response): Promise<Response>{
  const listaProdutos = await produtos.find()
  return res.status(200).send(listaProdutos)
} 

export async function listarProdutoPorId(req: Request, res: Response): Promise<Response> {
  const { id } = req.params
  const produto = await produtos.findById(id, (err: Error) => {
    if(err){
      return res.status(404).send({ mensage: `${err.message} - Produto não encontrado`})
    }
  })
  return res.send(produto)
} 

export async function cadastrarProduto(req: Request, res: Response): Promise<Response> {
  const produto = await produtos.create(req.body, (err: Error) => {
    if(err){
      return res.status(500).send({mensage: `${err.message} - Erro ao cadastrar o produto`})
    }
  })
  return res.status(201).send('Produto cadastrado com sucesso').json(produto)
} 

export async function deletarProduto(req: Request, res: Response): Promise<Response> {
  const { id } = req.params
  const produto = await produtos.findByIdAndDelete(id, (err: Error) => {
    if (err) {
      return res.status(404).send({ mensage: `${err.message} - Produto não encontrado para ser deletado` })
    }
  })
  return res.status(200).send('Produto deletado com suscesso').json(produto)
} 


export async function atualizarProduto(req: Request, res: Response): Promise<Response> {
  const { id } = req.params
  
  const produto = await produtos.findByIdAndUpdate(id, {$set: req.body}, (err: Error) => {
  
  })
  return res.status(200).send('Produto atualizado com suscesso').json(produto)
} 

