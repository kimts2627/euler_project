// 1
const multipleAorB = (number: number, a: number, b: number): number => {
  let result = 0;
  for (let i = 1; i < number; i++) {
    if (i % a === 0 || i % b === 0) {
      result += i;
    }
  }
  return result;
};
console.log(multipleAorB(1000, 3, 5));

// 2
// const evenNumberFibonacci = (number: number): number => {
//   if (number <= 2) {
//     return number;
//   }
//   return evenNumberFibonacci(number - 1) + evenNumberFibonacci(number - 2);
// };
// console.log(evenNumberFibonacci(4000000));

const getPrimeNumber = (order: number): number => {
  let primesArr: Array<number> = [];
  let counter: number = 1;
  while (primesArr.length < order) {
    for (let i = 2; i < counter; i++) {
      if (counter % i === 0) {
        counter += 1;
        break;
      }
    }
    primesArr.push(counter);
    counter += 1;
  }

  return primesArr[order - 1];
};
console.log(getPrimeNumber(10001));

// // 10
// const sumAllPrimeNumbers = (max: number, acc: number = 0): number => {
//   if (max === 2) {
//     return acc;
//   }

//   for (let i = 2; i < max; i++) {
//     if (i === max - 1) {
//       acc += max;
//     }
//     if (max % i === 0) {
//       break;
//     }
//   }
//   return sumAllPrimeNumbers(max - 1, acc);
// };
// console.log(sumAllPrimeNumbers(2000000));
