// Creo un ciclo che mi stampa 100 numeri

for (var i = 1; i <= 100; i++) {
  // Devo determinare se i numeri sono multipli di 3 e 5 o entrambi
  // Determino se sia multiplo di 5 e di 3
  if ((i % 3 == 0) && (i % 5 == 0)) {
    console.log("Fizz Buzz");
    // Determino se è multiplo di 5
  } else if (i % 5 == 0) {
    console.log("Buzz");
    // Determino se è multiplo di 3
  } else if (i % 3 == 0){
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
