"use strict";

var express=require('express');
var app=express();

app.get('/', (req, res) => {
   res.send('Hola Mundo!!')
 });

app.listen(3000,function(){
   console.log("Esta escuchando en el puerto 3000!")
});