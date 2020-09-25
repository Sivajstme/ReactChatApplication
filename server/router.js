const express = require("express");

const rounter = express.Router();

rounter.get('/',(req,res) =>{

    res.send('Server is up and running');

});

module.exports = rounter;