const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4500;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/api/message', (req, res) => {
    res.send({message: 'hello'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));