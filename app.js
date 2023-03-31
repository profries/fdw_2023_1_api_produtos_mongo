const express = require('express');
const { default: mongoose } = require('mongoose');
const rotaProduto = require('./rotas/produto_rotas')

const app = express();
const PORTA = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Configuração da conexão com o Mongo
mongoose.connect('mongodb://127.0.0.1:27017/app_produtos')
    .then(() => {
        console.log("Conectado ao MongoDB..");
    }).catch((error) => {
        console.log("Erro:", error)
    });

app.use('/api/produtos', rotaProduto);

app.listen(PORTA, () => {
    console.log(`Servidor iniciado na porta ${PORTA}`);
})