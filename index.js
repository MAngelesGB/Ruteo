let express = require('express'); //Se importa la dependencia
let app = express(); // se declara una App de express

let port = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor

//primera ruta --> esta al nivel de la raiz '/' --> Hello world!
app.get('/', function(req,res) {
    res.send('<html><head></head><body><h1>Hello world!</h1></body></html>'); 
});

//segunda ruta /api, regresa un objeto JSON
app.get('/api', function (req, res) {
    res.json({firstname: 'John', lastname: 'Doe'}); 
});

//tercera ruta, recibe parametro desde la ruta
app.get('/person/:id', function(req, res) {
    res.send('<html><head></head><body><h1>Person : '+ req.params.id+' </h1></body></html>'); 
});

app.listen(port); //Levantar el server y ponerlo a la escucha