"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conectedBd = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const password = 'admin';
const conectedBd = () => {
    console.log('Conectando database...');
    mongoose_1.default.connect(`mongodb+srv://admin:${password}@pwa-ecommerce.wvr2cnv.mongodb.net/PWA-Ecommerce`)
        .then(() => console.log('MongoDB Atlas conectado'))
        .catch((error) => console.log(`${error.message} - Erro ao conectar o MongoDB`));
};
exports.conectedBd = conectedBd;
