import express from 'express';
import { validarCPF } from './servicos/servico.js';

const app = express();

app.get('/validarNumeroCPF', (req, res) => {
    const numeroCPF = req.query.cpf;

    if (!numeroCPF) {
        return res.status(400).json({ erro: "CPF não fornecido" });
    }

    const resultado = validarCPF(numeroCPF) ? "Número de CPF correto" : "Número de CPF incorreto";
    res.json({ resultado });
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 8080' + 'na data ' + data.toLocaleDateString("pt-BR"));
});