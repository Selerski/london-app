const express = require('express')
const cors = require('cors');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3000;

app
  .use(cors())
  .use(express.json()) 

app.use('/boroughs', require('./router'));

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT, () => {
  console.log('Server running at port 3000');
});
