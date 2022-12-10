import express from 'express';
import { conectedBd } from '../config/conexaoBd';
import { AvaliacaosRouter } from '../Routes/AvaliacoesRouter';
import { CategoriasRouter } from '../Routes/CategoriasRouter';
import { CuponsRouter } from '../Routes/CupomRouter';
import { ProdutosRouter } from '../Routes/ProdutosRouter'


export const app = express();
conectedBd()
app.use(express.json())
app.use(ProdutosRouter)
app.use(CategoriasRouter)
app.use(CuponsRouter)
app.use(AvaliacaosRouter)




// route.post('/novoProduto', (req: Request, res: Response) => {
//   produtos.push(req.body);
//   res.status(201).send('Produto cadastrado com sucesso');
// })

// route.put('/atualizaProduto/:id', (req: Request, res: Response) => {
//   const idProduto = procuraProduto(req.params.id)
//   produtos[idProduto].nome = req.body.nome

//   res.send('livro alualizado com sucesso')
// })

// route.get('/produto/:id', (req: Request, res: Response) => {
//   const produto = procuraProduto(req.params.id)
//   res.json(produtos[produto])
// })

// route.delete('/deletaProduto/:id', (req: Request, res: Response) => {
//   const { id } = req.params
//   const novoProduto = produtos.splice(parseInt(id), 1)
//   res.json(novoProduto)
// })

// const procuraProduto = (idProduto: string) => {
//   return produtos.findIndex(produto => produto.id === idProduto)
// }