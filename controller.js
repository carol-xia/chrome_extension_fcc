// const messages = require('./../../data/messages');
const express = require('express');
const fs = require('fs');
const { request } = require('http');

//error helper fxn
const createErr = (errInfo) => {
    const { method, type, err } = errInfo;
    return { 
      log: `controller.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
      message: { err: `Error occurred in controller.${method}. Check server logs for more details.` }
    };
  };

module.exports = {
  getPokemon: (req, res, next) => {
    const pokemon = req.params.ditto;
    console.log(pokemon);
    const fetchURL = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;
    // console.log(fetchURL);
    fetch(fetchURL)
      .then(data => data.json())
      .then(data => {
        // console.log(data);
        res.locals.data = data;
        return next();
      }).catch(err => next(createErr({
        method: 'getPokemon', 
        type: 'when fetching from pokemon api', 
        err: err, 
      }))); 
  }
};