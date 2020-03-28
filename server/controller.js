const borough = require('./models/borough');

module.exports = {
  getBoroughs: async (req, res) => {
    try {
      const boroughs = await borough.getAllBoroughs();
      res.status(200).send(boroughs);
    } catch {
      res.status(500).send('Internal server error');
    }
  }
};
