// function f(x, y, z) {
//   let a = x + y;
//   let b = a * z;
//   let c = Math.sin(b);
//   return c;
// }
//Calcular el seno de la suma de dos numeros y un producto
//Cambie los nombre con el fin de hacerlo claro tomandolo solo como una funcion,
//sin embargo esa funcion matematica podría modelar una oscilación donde x e y son desplazamientos y z es una frecuencia angular.
function calculateSine(x, y, z) {
  let sum = x + y;
  let product = sum * z;
  let sineValue = Math.sin(product);
  return sineValue;
}
