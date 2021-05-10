{
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
  const sumEvenNumberFibonacci = (number: number): number => {
    let result = 2;
    let lists = [1, 2];
    while (true) {
      lists.push(lists[lists.length - 1] + lists[lists.length - 2]);
      if (lists[lists.length - 1] % 2 === 0) {
        if (lists[lists.length - 1] > number) {
          return result;
        }
        result += lists[lists.length - 1];
      }
    }
  };
  console.log(sumEvenNumberFibonacci(4000000));

  // // 3
  // const lagestPrimeNumber = (number: number): number | undefined => {
  //   let factor: Array<number> = [];
  //   for (let i = 2; i < number / 2; i++) {
  //     if (number % i === 0) {
  //       factor.push(i);
  //     }
  //   }

  //   const isPrimeNumber = (number: number): boolean => {
  //     let result: boolean = true;
  //     for (let i = 2; i < number / 2; i++) {
  //       if (number % i === 0) {
  //         result = false;
  //         break;
  //       }
  //     }
  //     return result;
  //   };

  //   for (let i of factor.reverse()) {
  //     if (isPrimeNumber(i)) {
  //       return i;
  //     }
  //   }
  // };

  // console.log(lagestPrimeNumber(13195));

  //4
  const lagestPalindrome = (): number | undefined => {
    let result: number = 0;
    for (let j = 900; j < 1000; j++) {
      for (let i = 900; i < 1000; i++) {
        if (
          String(i * j) ===
          String(i * j)
            .split("")
            .reverse()
            .join("")
        ) {
          result = i * j;
        }
      }
    }
    return result;
  };
  console.log(lagestPalindrome());

  // // 5
  // const lowestCommonMultipleBetweenOneAndNumber = (number: number): number => {
  //   let result = 0;
  //   let newNumber = number;
  //   while (true) {
  //     for (let i = 2; i <= newNumber; i++) {
  //       if (newNumber % i !== 0) {
  //         break;
  //       }
  //       if (i === newNumber) {
  //         return newNumber;
  //       }
  //     }
  //     newNumber = newNumber * 2;
  //   }
  //   return result;
  // };
  // console.log(lowestCommonMultipleBetweenOneAndNumber(20));

  // 6
  const squaredSumMinusSumOfSquare = (maxNumber: number): number => {
    if (maxNumber === 0) {
      throw new Error("input number is can not be 0");
    }
    let squaredSum: number = 0;
    let sumOfSquared: number = 0;

    for (let i = 1; i <= maxNumber; i++) {
      squaredSum += i;
      sumOfSquared += i * i;
      if (i === maxNumber) {
        squaredSum = squaredSum * squaredSum;
      }
    }

    return squaredSum - sumOfSquared;
  };
  console.log(squaredSumMinusSumOfSquare(100));
}

// const primeNumberOfOrder = (order: number): number => {
//   let primeNumbers: Array<number> = [];
//   for (let i = 1; i <= order; i++) {
//     for (let j = 2; j <= i; i++) {
//       // if (i % j !== 0) {
//       //   break;
//       // }
//       if (j === i - 1) {
//         primeNumbers.push(i);
//       }
//     }
//   }
//   console.log(primeNumbers);
//   return primeNumbers[primeNumbers.length - 1];
// };
// console.log(primeNumberOfOrder(10001));
