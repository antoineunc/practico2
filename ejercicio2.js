let word1 = "tren";
let word2 = "edificio";

if (word1.length > word2.length) {
  console.log(`La palabra "${word1}" es más larga.`);
} else if (word2.length > word1.length) {
  console.log(`La palabra "${word2}" es más larga.`);
} else {
  console.log(`Ambas palabras tienen la misma longitud.`);
}
