const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;

app.use(express.json()); 
    //allows JSON objects to be posted. middleware that allows us to read JSON objects sent in the client's request
app.use(express.urlencoded({ extended: true  }));
    //allows JSON objects with strings and arrays in the client's request
app.use(
    cors({
        origin: "http://localhost:300"
    })
    );


require('./config/mongoose.config');
require('./routes/product.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );