function getOddNumbers(number) {
  const array = [];
  for (let index = 1; index <= number; index++) {
    if (index % 2 != 0) array.push(index);
  }
  return array;
}
console.log(getOddNumbers(9));
