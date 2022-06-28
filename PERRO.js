var express = require("express");
var app = express();

 app.get("/", inicio);

 function inicio(peticion, resultado)
 {
    resultado.send(Este es mi primer servidor);
 }

 app.listen(9090);