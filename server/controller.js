const borough = require('./models/borough');

module.exports = {
    getBoroughs: async (req, res) => {
    try {
        console.log('hi')
      const boroughs = await borough.getAllBoroughs();
      res.status(200);
      res.send(boroughs);
    } catch {
      res.status(500);
      res.send('Internal server error');
    }
  }
};
