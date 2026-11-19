
// Importando o Express
const express = require('express');

// Criando a aplicação
const app = express();

// Definindo a porta
const PORT = 3000;

// Permite receber dados JSON nas requisições
app.use(express.json());

// Banco de dados temporário (apenas um array)
let clientes = [
    { id: 1, nome: 'João', email: 'joao@email.com' },
    { id: 2, nome: 'Maria', email: 'maria@email.com' }
];

// ROTA GET: listar todos os clientes
app.get('/api/clientes', (req, res) => {
    res.json(clientes);
});

// ROTA GET: buscar um cliente pelo ID
app.get('/api/clientes/:id', (req, res) => {
    const id = Number(req.params.id);

    const cliente = clientes.find(c => c.id === id);

    if (!cliente) {
        return res.status(404).json({
            mensagem: 'Cliente não encontrado'
        });
    }

    res.json(cliente);
});

// ROTA POST: cadastrar um cliente
app.post('/api/clientes', (req, res) => {
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({
            mensagem: 'Nome e email são obrigatórios'
        });
    }

    const novoCliente = {
        id: clientes.length
            ? Math.max(...clientes.map(c => c.id)) + 1
            : 1,
        nome,
        email
    };

    clientes.push(novoCliente);

    res.status(201).json(novoCliente);
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`API funcionando em http://localhost:${PORT}`);
});
