const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://Selerski:Paparipa123$@cluster0-xrruv.mongodb.net/london-app-api?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connection with the database established'));

const Schema = mongoose.Schema;

const boroughSchema = new Schema({
  site: {
    type: String,
  },
  ratio: {
    type: String,
  },
  salary: {
    type: String,
  }
});

const boroughs = mongoose.model('Borough', boroughSchema);

exports.getAllBoroughs = async () => {
  console.log('hello')
  const res = await boroughs.find();
  return res;
};

