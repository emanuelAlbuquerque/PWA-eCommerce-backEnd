import { Request, Response } from "express";
import { produtos } from "../Models/Produto";


export async function listarProdutos(req: Request, res: Response): Promise<Response>{
  let listaProdutos = await produtos.find()
  return res.send(200).json(listaProdutos)
} 