const express = require('express');
const app = express();

// Utilização de JSON
app.use(express.urlencoded({ extended: false })); // Apenas dados simples
app.use(express.json());

// Definição de headers usando CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Qualquer origem pode acessar o recurso
    res.header(
        'Access-Control-Allow-Headers',
        'Content-Type, Origin, X-Requested-With, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT', 'GET', 'POST', 'PATCH', 'DELETE');
        return res.status(200).send({});
    }

    next();
});

const rotaMain = require('./routes/main');

app.use('/', rotaMain);

// Não encontrou nenhuma rota
app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    return res.status(error.status || 500).send({ erro: { mensagem: error.message } });
});

module.exports = app;