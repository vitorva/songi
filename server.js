const express = require('express');
const cors = require('cors');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));


const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});

app.get('/test', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    });
});

  // Top playlists
  app.get('/api/playlists/top/:limit', (req, res) => {
    fetch('https://api.deezer.com/chart/0/playlists?limit=' + req.params.limit, {
    })
    .then(data => data.json())
    .then(json => {
      res.send(json);
    });
  });

  // One playlist
  app.get('/api/playlist/:id', (req, res) => {
    fetch('https://api.deezer.com/playlist/' + req.params.id, {
    })
    .then(data => data.json())
    .then(json => {
      res.send(json);
    });
  });

