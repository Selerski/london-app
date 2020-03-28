const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_user}:${process.env.DB_password}@cluster0-xrruv.mongodb.net/london-app-api`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connection with the database established'));

const Schema = mongoose.Schema;

const boroughSchema = new Schema({
  site: {
    type: String
  }
});

const boroughs = mongoose.model('Borough', boroughSchema);

exports.getAllBoroughs = async () => {
  return await boroughs.find();
};
