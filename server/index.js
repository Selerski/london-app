const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');
const app = express();

app
  .use(cors())
  // .use(express.json())
  .use(router)
  
app.use(router);

app.listen(3000, () => {
  console.log('Server running at port 3000');
});
