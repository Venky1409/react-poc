const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
var fs = require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'client/build')));

const port = process.env.PORT || 1409;

app.listen(port, () => `Server running on port ${port}`);
