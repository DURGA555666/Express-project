const express = require('express');

userRouter= express.Router();

userRouter.get('/test',(req,res)=> res.json({"message": "working Fine"}));

module.exports = userRouter;