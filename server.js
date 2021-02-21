const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'client/dist')));
app.get('/', (req, res) => res.sendFile('index.html', { root: __dirname }));

const port = process.env.PORT || 1409;

app.listen(port, () => `Server running on port ${port}`);
