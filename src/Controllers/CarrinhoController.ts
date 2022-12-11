import { Request, Response } from "express";
import { carrinho } from "../Models/Carrinho";

export class CarrinhoController{

  static async listarItensCarrinho(req: Request, res: Response){
    const itensCarrinho = await carrinho.find().populate('produtos.produto').clone()

    res.status(200).send(itensCarrinho)
  }

  static async criarCarrinho(req: Request, res: Response){
    const itemCarrinho = await carrinho.create(req.body)

    res.status(201).send('Carrinho criado com suscesso')
  }

}