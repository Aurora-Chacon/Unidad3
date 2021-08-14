var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
var diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
var f = new Date();

document.writeln('Hoy es: ' + diasSemana[f.getDay()] 
+ ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());


var fechaHora = new Date();
var horas = fechaHora.getHours();
var minutos = fechaHora.getMinutes();


document.writeln("<br> Son las:" + horas + ":" + minutos);

document.getElementById("reloj").innerHTML = horas+':'+minutos+':'+segundos;
