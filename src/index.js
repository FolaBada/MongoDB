const express = require('express');
const connect = require('./config/database');
const userRoute = require('./router/userRoutes')
const {json} = require('express')
connect()

const PORT = process.env.PORT || 3000;

const app = express();
app.use(json());
app.use('/user', userRoute);

app.get('/', (req,res) =>{
    res.send('My tarining on MongoDB')
})

app.listen(3000, () => console.log(`Serving on port ${PORT}`));