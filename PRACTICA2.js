var fecha = prompt ("Introduzca dato: ");

var date = new Date (fecha);
var fechaActual = new Date();


let miilisegundos = 24*60*60*1000;
let MilisegundosTranscurridos = Math.abs(date.getTime() - fechaActual.getTime());
let diasTranscurridos = Math.round (MilisegundosTranscurridos/miilisegundos);

if (fecha.startsWith("jan" || "feb" || "mar" || "apr" || "may" || "oct" 
|| "nov" || "dec") ) {
    
document.write(fecha);
alert("Dias Transcurridos");
alert(diasTranscurridos-1);
console.log (diasTranscurridos-1);

}else {
    alert("Introduzca fecha valida");
}
