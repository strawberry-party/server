const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/api/message', (req, res) => {
    res.send({message: 'hello'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));