const baseUrl = 'http://localhost:3000'

module.exports = {
  getAllBoroughs: async () => {
    return await fetch(baseUrl).then(response => {
      return response.json();
    }).catch(err => console.log(err));
  }
};