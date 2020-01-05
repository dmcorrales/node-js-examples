require('./config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

buildStatus = (res,code,message)  => {
    res.status(code).json({
        fail:true,
        message
    })
};

app.get('/users', (req,res) => {
    res.json('hello world');
});

app.post('/users', (req,res) => {
    let body = req.body;

    if(body.name === undefined) {
        buildStatus(res, 400, 'El nombre no puede estar vacío');
    }
    
    res.json({body});
});

app.put('/users/:id', (req,res) => {
    res.json('hello world');
});

app.delete('/users/:id', (req,res) => {
    res.json('hello world');
});

app.listen(process.env.PORT, () => {
    console.log("Se ha iniciado, y se está escuchando en el puerto", process.env.PORT);
})