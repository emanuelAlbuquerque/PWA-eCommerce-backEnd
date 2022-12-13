import express from 'express';
import { conectedBd } from '../config/conexaoBd';
import { AvaliacaosRouter } from '../Routes/AvaliacoesRouter';
import { CategoriasRouter } from '../Routes/CategoriasRouter';
import { CuponsRouter } from '../Routes/CupomRouter';
import { ProdutosRouter } from '../Routes/ProdutosRouter'
import { UsuarioRouter } from '../Routes/UsuarioRouter';
import { CarrinhoRouter } from '../Routes/CarrinhoRouter';
import { EnderecosRouter } from '../Routes/EnderecosRouter';
import { FavoritosRouter } from '../Routes/FavoritosRouter';


export const app = express();
conectedBd()
app.use(express.json())
app.use(ProdutosRouter)
app.use(CategoriasRouter)
app.use(CuponsRouter)
app.use(AvaliacaosRouter)
app.use(UsuarioRouter)
app.use(CarrinhoRouter)
app.use(EnderecosRouter)
app.use(FavoritosRouter)



