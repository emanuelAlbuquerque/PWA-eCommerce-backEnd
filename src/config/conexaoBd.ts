import mongoose from 'mongoose'

const password = 'admin'

mongoose.connect(`mongodb+srv://admin:${password}@pwa-ecommerce.wvr2cnv.mongodb.net/PWA-Ecommerce`)

export const bd = mongoose.connection