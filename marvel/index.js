const rq   = require('electron-require');
const main = rq.remote('./main.js');
const $    = require("jquery");
var buscarPersonaje = function(){

}
$("#txtPersonaje").focus();
$("#btnBuscar").on("click",buscarPersonaje); 
