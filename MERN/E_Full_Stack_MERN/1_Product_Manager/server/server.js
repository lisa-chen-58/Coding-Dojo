const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json()); //allows JSON objects to be posted
app.use(express.urlencoded({ extended: true  })); //allows JSON objects with strings and arrays

require('./config/mongoose.config');
require('./routes/product.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );