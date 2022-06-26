var express = require("express");
var app = express();

 app.get("/", inicio);

 function inicio(peticion, resultado)
 {
    resultado.send(PERRO.html, PERRO.css);
 }

 app.listen(9090);