function sumTwoSmallestNumbers(numbers) {
  //Code here
  var newArr = numbers.sort(function (a,b) {
    return a-b;
  });
  // console.log(newArr);
  // console.log(newArr[0]+newArr[1]);
  return newArr[0]+newArr[1];
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22]);