def multipleAorB(maxNum, a, b): #! 1
  result = 0
  for num in range(maxNum + 1):
    if num % a == 0 or num % b == 0: result += num
  return result

def sumEvenFibonacci(num): #! 2
  result = 0
  lists = [1, 2]
  while True:
    if lists[-1] % 2 == 0: result += lists[-1]
    if lists[-1] + lists[-2] > num: break
    lists.append(lists[-1] + lists[-2])
  return result

def lagestPrimeNumber(num): #! 3
  cntNum = 1
  while True:
    cntNum += 1
    if num % cntNum == 0:
      if num == cntNum: break
      else: num /= cntNum
  return int(num)

def lagestPalindrome(): #! 4
  result = 0
  for i in range(100, 1000):
    for j in range(100, 1000):
      num = str(i * j)
      if num == num[::-1] and result < int(num): result = int(num)
  return result

def squaredSumSubtractSumOfSquare(maxNum): #! 6
  resultA = 0; resultB = 0
  for i in range(1, maxNum + 1):
    resultA += i
    resultB += i * i
  return (resultA ** 2) - resultB

def primeNumOfOrder(order): #! 7
  primeNums = [2]; num = 3
  while len(primeNums) < order:
    print(len(primeNums))
    for i in range(2, num):
      if num % i == 0: break
      if i == num - 1: primeNums.append(num)
    num += 1
  return primeNums[-1]

def sumOfPrimeNums(maxNum): #! 10
  a = [False, False] + [True] * (maxNum - 1)
  result = 0
  for i in range(2, maxNum + 1):
    if a[i]:
      result += i
      for j in range(2 * i, maxNum + 1, i): a[j] = False
  return result
print(sumOfPrimeNums(2000000))