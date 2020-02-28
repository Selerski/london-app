//const baseUrl = 'http://api.erg.kcl.ac.uk/AirQuality/Information/Groups/Json';
// const baseUrl = 'http://api.erg.kcl.ac.uk/AirQuality/Information/IndexHealthAdvice/Json'
const baseUrl = 'http://api.erg.kcl.ac.uk/AirQuality/Daily/MonitoringIndex/Latest/GroupName=greenwich/Json'
const boroughAPI = 'http://localhost:3000';

module.exports = {
  getAll: () => {
    return fetch(baseUrl).then(response => {
      return response.json();
    }).catch(err => console.log(err));
  },
  boroughInfo: () => {
    return fetch(boroughAPI).catch(err => console.log(err));
  }
};

