const ProdutosModel = require('../models/ProdutoModel');

const ProdutosController = {
  index: (req, res) => {
    const pets = ProdutosModel.obterInformacoes();

    res.render('produtos', { produtos: produtos});
  }
}

module.exports = ProdutosController;