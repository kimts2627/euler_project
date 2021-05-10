{
  // 1
  const multipleAorB = (number: number, a: number, b: number): number => {  //! number보다 작은 수 중에서 a 와 b 의 공배수를 result에 플러스 할당하여 반환
    let result = 0;
    for (let i = 1; i < number; i++) {
      if (i % a === 0 || i % b === 0) {
        result += i;
      }
    }
    return result;
  };
  console.log(`1번: ${multipleAorB(1000, 3, 5)}`);

  // 2
  const sumEvenNumberFibonacci = (number: number): number => {  //! 피보나치 수열을 배열에 전개하며, 그 중 짝수인 수만 result에 플러스 할당하여 반환
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
  console.log(`2번: ${sumEvenNumberFibonacci(4000000)}`);

  // 3
  const lagestPrimeNumber = (number: number): number => { //! loop를 통해 소수인지 판별하여 가장 큰 소인수 반환
    let result: number = 0;
    let countNumber: number = 2;
    while(countNumber <= number) {
      if(number % countNumber === 0) {
        result = countNumber;
        number = number / countNumber;
      }
      else {
        countNumber += 1;
      }
    }
    return result;
  };
  console.log(`3번: ${lagestPrimeNumber(600851475143)}`);

  //4
  const lagestPalindrome = (): number | undefined => { //! 세자리수를 곱해 만들 수 있는 가장 큰 팰린드롬을 반환
    let result: number = 0;
    for (let j = 900; j < 1000; j++) {
      for (let i = 900; i < 1000; i++) {  //! 가장 큰 대칭수를 찾아야 하니, 900대 부터 loop시작
        if (
          String(i * j) ===
          String(i * j)
            .split("")
            .reverse()
            .join("")  //! 두 수가 대칭인지 비교
        ) {
          result = i * j;
        }
      }
    }
    return result;
  };
  console.log(`4번: ${lagestPalindrome()}`);

  // 5
  const lowestCommonMultipleUnderInputNumber = (number: number): any => {
    let result: number = 0;
    outer : while(true) {
      inner : for(let i = 2; i <= number; i ++) {
        if(i === number) {
          result = number;
          break outer;
        }
        else if(number % i !== 0) {
          break inner;
        }
      }
      number = number * 2;
    }
    return result;
  }
  console.log(`5번: ${lowestCommonMultipleUnderInputNumber(10)}`);

  // 6
  const squaredSumMinusSumOfSquare = (maxNumber: number): number => {  //! 각 수들의 제곱의 합과 합의 제곱을 구해 차이를 반환
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
  console.log(`6번: ${squaredSumMinusSumOfSquare(100)}`);

  // 7
  const primeNumberOfOrder = (order: number): number => { //! primeNumbers 배열에 소수를 차례로 push 후, order번째 값 반환
    let primeNumbers: Array<number> = [2];
    let number: number = 3;
    outer : while (true) {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          break;
        }
        if (i === number - 1) {
          primeNumbers.push(number);
        }
        if(primeNumbers.length === order) {
          break outer
        }
      }
      number += 1;
    }
    return primeNumbers[order - 1];
  };
  console.log(`7번: ${primeNumberOfOrder(10001)}`);

  // 8
  let inputNumbers: Array<string> = ['73167176531330624919225119674426574742355349194934',
  '96983520312774506326239578318016984801869478851843',
  '85861560789112949495459501737958331952853208805511',
  '12540698747158523863050715693290963295227443043557',
  '66896648950445244523161731856403098711121722383113',
  '62229893423380308135336276614282806444486645238749',
  '30358907296290491560440772390713810515859307960866',
  '70172427121883998797908792274921901699720888093776',
  '65727333001053367881220235421809751254540594752243',
  '52584907711670556013604839586446706324415722155397',
  '53697817977846174064955149290862569321978468622482',
  '83972241375657056057490261407972968652414535100474',
  '82166370484403199890008895243450658541227588666881',
  '16427171479924442928230863465674813919123162824586',
  '17866458359124566529476545682848912883142607690042',
  '24219022671055626321111109370544217506941658960408',
  '07198403850962455444362981230987879927244284909188',
  '84580156166097919133875499200524063689912560717606',
  '05886116467109405077541002256983155200055935729725',
  '71636269561882670428252483600823257530420752963450']

  //! 맵 or 리듀스를 사용하여 refactor 해보자.
  const lasgestNumberInThousandDigits = (stringifyNumbers: Array<string>): number => {
    let result: number = 0;
    for(let i = 0; i < stringifyNumbers.length; i ++) {
      for(let j = 0; j < stringifyNumbers[i].length; j ++) {

        let multiplication: number = 0; //! 각 루프마다 연속된 5개의 수의 곱을 저장

        if(i !== stringifyNumbers.length - 1) { //! 연속된 5개의 수의 곱셈, 다음 수가 없을 시 배열의 다음 인덱스 첫번째 수 부터 조회
          if(!(stringifyNumbers[i][j+1])) {
            multiplication = Number(stringifyNumbers[i][j]) * Number(stringifyNumbers[i+1][0]) * Number(stringifyNumbers[i+1][1]) * Number(stringifyNumbers[i+1][2]) * Number(stringifyNumbers[i+1][3]);
          }
          else if(!(stringifyNumbers[i][j+2])) {
            multiplication = Number(stringifyNumbers[i][j]) * Number(stringifyNumbers[i][j+1]) * Number(stringifyNumbers[i+1][0]) * Number(stringifyNumbers[i+1][1]) * Number(stringifyNumbers[i+1][2]);
          }
          else if(!(stringifyNumbers[i][j+2])) {
            multiplication = Number(stringifyNumbers[i][j]) * Number(stringifyNumbers[i][j+1]) * Number(stringifyNumbers[i][j+2]) * Number(stringifyNumbers[i+1][0]) * Number(stringifyNumbers[i+1][1]);
          }
          else if(!(stringifyNumbers[i][j+3])) {
            multiplication = Number(stringifyNumbers[i][j]) * Number(stringifyNumbers[i][j+1]) * Number(stringifyNumbers[i][j+2]) * Number(stringifyNumbers[i][j+3]) * Number(stringifyNumbers[i+1][0]);
          }
          else {
            multiplication = Number(stringifyNumbers[i][j]) * Number(stringifyNumbers[i][j+1]) * Number(stringifyNumbers[i][j+2]) * Number(stringifyNumbers[i][j+3]) * Number(stringifyNumbers[i][j+4]);
          }
        } else {
          if(!(stringifyNumbers[i][j+1])) { //! 배열의 다음 인덱스 첫번째 수 조차 없을 때 break
            break;
          }
        }
        if(result < multiplication) {
          result = multiplication;
        }
      }
    }
    return result;
  }
  console.log(`8번: ${lasgestNumberInThousandDigits(inputNumbers)}`);

  // 9
  const multiplicationOfPythagorasNumbers = (sumOfThreeNumbers: number): number | undefined => {
    let a: number;
    let b: number;
    let c: number;
    for(a = 1; a <= sumOfThreeNumbers / 2; a ++ ) {
      for(b = 1; b <= sumOfThreeNumbers / 2; b ++ ) {
        for(c = 1; c <= sumOfThreeNumbers / 2; c ++ ) {
          if(a + b + c === 1000 && (a * a) + (b * b) === (c * c)) {  //! 3중 loop로 세 숫자의 합이 1000인 조건과 피타고라스 정리를 만족하는지 확인 후 반환
            return a * b * c;
          }
        }
      }
    }
  }
  console.log(`9번: ${multiplicationOfPythagorasNumbers(1000)}`);

  // 10
  const isPrimeNumber = (number: number): boolean => { //! 인자로 정수를 받아 소수인지 판별하는 함수
    let result: boolean = true;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        result = false;
        break;
      }
    }
    return result;
  };

  const sumOfPrimeNumbersUnderInputNumber = (number: number): number => { //! 하나씩 조회하여 소수인지 판별 후, 배열에 담아 전부 더해준 후 반환
    let primeNumbers: Array<number> = [];
    for(let i = 2; i < number; i ++) {
      if(isPrimeNumber(i)) {
        primeNumbers.push(i);
      }
    }
    return primeNumbers.reduce((acc, val) => acc + val);
  }
  console.log(`10번: ${sumOfPrimeNumbersUnderInputNumber(200)}`); //! 매우매우매우 오래걸림 (3~5분) 개선 필요

};

