func multipleAorB(maxNum: Int, a: Int, b: Int) -> Int {
    var result = 0;
    for num in a...maxNum - 1 {
        if num % a == 0 || num % b == 0 {
            result += num;
                    print(result);
        }
    }
    return result;
}
print(multipleAorB(maxNum: 1000, a: 3, b: 5))