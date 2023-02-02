const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
let esPar = "";

if (numeroRandom % 2 === 0) {
  esPar = "par";
} else {
  esPar = "impar";
}

console.log(`El número ${numeroRandom} es ${esPar}.`);
