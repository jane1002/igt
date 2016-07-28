/**
 * Created by Onion on 7/27/16.
 */
const express = require('express');
const path = require('path');

const app = express();

app.get('/rest/data', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'data', 'data.json'));
});

app.get('/rest/player-list', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'data', 'player-list.json'));
});


app.listen(8080, () => console.log('listening port 8080'));
