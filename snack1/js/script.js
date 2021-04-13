var sommaNumeri = 0


//METODO FOR

/* for(var i = 0; i < 5; i++){
  var nuovoNumero =parseInt(prompt('inserisci un numero'))
  sommaNumeri += nuovoNumero
}
console.log(sommaNumeri) */

//METODO WHILE

var limite = 5;
var c = 0;

while(c < limite){
  var nuovoNumero =parseInt(prompt('inserisci un numero'))
  sommaNumeri += nuovoNumero
  c++;
}

console.log(sommaNumeri)
