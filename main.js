// Creo un ciclo che mi stampa 100 numeri

for (var i = 1; i <= 100; i++) {
  // Devo determinare se i numeri sono multipli di 3 e 5 o entrambi
  if (i % 3 == 0) {
    console.log(i, "Fizz");
  } else if (i % 5 == 0) {
    console.log(i, "Buzz");
  }
}
