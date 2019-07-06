const express = require('express');
const mongoose = require('mongoose');
app = express();
users = require('./routes/users');
posts = require('./routes/posts');
profile = require('./routes/profile');
const db = require('./config/keys').MongoUrl;
mongoose.connect(db,{ useNewUrlParser: true })
        .then(()=>console.log('Mongo db connected'))
        .catch(err => console.log(err));

app.get('/',(req,res)=> res.send('Hellow world'));
app.use('/posts',posts);
app.use('/profile',profile);
app.use('/users',users);

Port = process.env.PORT || 5000 ;
app.listen(Port,()=>console.log(`server running on ${Port}`));