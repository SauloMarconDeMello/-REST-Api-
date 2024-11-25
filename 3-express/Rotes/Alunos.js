const express = require('express');
const router = express.Router();

// Funções de manipulação para cada rota
const getAlunos = (req, res) => {
  res.send('Você acessou a rota aluno.');
};

const criarAluno = (req, res) => {
  res.send('Você está na rota para o cadastro de um novo aluno.');
};

const atualizarAluno = (req, res) => {
  res.send('Você está na rota para a atualização dos dados de um aluno.');
};

const removerAluno = (req, res) => {
  res.send('Você está na rota para a remoção de um aluno.');
};

// Definição de rotas
router.get('/', getAlunos);
router.post('/cadastro', criarAluno);
router.put('/atualizacao', atualizarAluno);
router.delete('/remocao', removerAluno);

module.exports = router;
