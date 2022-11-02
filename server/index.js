import express from 'express';
const fetch = require('node-fetch');

export default (app) => {
  app.use(express.json());

  app.get('/foo', (req, res) => {
    res.json({msg: 'foo'});
  });

  app.post('/bar', (req, res) => {
    res.json(req.body);
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
  app.get('/api/playlists/:id', (req, res) => {
    fetch('https://api.deezer.com/playlist/' + req.params.id, {
    })
    .then(data => data.json())
    .then(json => {
      res.send(json);
    });
  });
}
