const express = require('express');

profileRouter= express.Router();

profileRouter.get('/test',(req,res)=> res.json({"message": "working Fine"}));

module.exports = profileRouter;