// Criando o express
const app = require('express')();
const consign = require('consign')

// Consign é usado para ajudar nas dependências dos arquivos com as funções
consign().then('./config/middlewares.js').into(app)

// Iniciando na porta 300
app.listen(3000, () => {
    console.log('backend executando...')
})