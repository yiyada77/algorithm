function Fibonacci(n) {
    if (n <=0) {
        return false;
    } else if (n <= 2) {
        return 1;
    } else {
        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}

console.log(Fibonacci(9));