import mongoose, { Error } from 'mongoose'
const password = 'admin'

export const conectedBd = () => {

  console.log('Conectando database...')

  mongoose.connect(
    `mongodb+srv://admin:${password}@pwa-ecommerce.wvr2cnv.mongodb.net/PWA-Ecommerce`
  )
  .then(() => console.log('MongoDB Atlas conectado'))
  .catch((error : Error) => console.log(`${error.message} - Erro ao conectar o MongoDB`))
}
