const express = require('express');

postsRouter= express.Router();

postsRouter.get('/test',(req,res)=> res.json({"message": "working Fine"}));

module.exports = postsRouter;