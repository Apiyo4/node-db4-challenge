const express = require('express');

const server = express();

server.use(express.json());


server.get('/', (req, res)=>{
    res.send(`testing backend for / path`)
})


module.exports = server;