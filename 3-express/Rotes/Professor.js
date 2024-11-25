const express = require('express');
const router = express.Router();

// Funções de manipulação para cada rota
const getProfessores = (req, res) => {
  res.send('Você acessou a rota professor.');
};

const criarProfessor = (req, res) => {
  res.send('Você está na rota para o cadastro de um novo professor.');
};

const atualizarProfessor = (req, res) => {
  res.send('Você está na rota para a atualização dos dados de um professor.');
};

const removerProfessor = (req, res) => {
  res.send('Você está na rota para a remoção de um professor.');
};

// Definição de rotas
router.get('/', getProfessores);
router.post('/cadastro', criarProfessor);
router.put('/atualizacao', atualizarProfessor);
router.delete('/remocao', removerProfessor);

module.exports = router;
