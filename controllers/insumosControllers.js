const InsumosModel = require('../models/InsumoModel')

module.exports = {
  index: (req, res) => {
    const insumos = InsumoModel.index();
    return res.render('insumos', { insumos });
  }
};