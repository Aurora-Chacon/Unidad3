/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// tiene que ir en una función 
function abrir(){
    //Mostrara un cuadro de texto donde se le pide introducir su edad 
  var edad = prompt("Introduce una edad:");
// Verifica que el dato indroducido sea un numero de ser asi valida que sea mayor a 18
// Mostrara un mensaje de puede conducir 
// De no ser asi mostrara otro mensaje que aun no puede conducir 
  if(Number(edad)==edad){
      if(edad >= 18){
          document.getElementById("root").innerHTML="Puedes conducir";
      }else{
          document.getElementById("root").innerHTML="Aun no puedes conducir";
      }
      // Si no era un numero valida pedira que sea introducido uno que si lo sea 
  }else{
      alert("Introduce un número válido");
  }
}
