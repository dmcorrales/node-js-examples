const express = require('express');
const app = express();

const hbs = require('hbs');

require('./helpers/hbs');

app.use( express.static(__dirname + '/public') );
app.set('view engine','hbs');

//Partials of template
hbs.registerPartials( __dirname + '/views/template');
/**
 * Default web page.
 * OLD method to 'render page' => res.send('content');
 * NEW method using 'handlebars' => res.render(); 
 */
app.get('/', (req,res) => {  
    res.render('home' , {
        content: 'This is the dynamic content.',
    });
});

app.get('/about', (req,res) =>{
    res.render('about', {
        name: 'Daniel Corrales',
    })
});  

app.listen(8000, () => {
    console.log("Escuchando peticiones en el puerto 8000");
});