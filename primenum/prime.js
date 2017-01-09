function getPrimes(n) {
    var arr = [], i, j, primes = [];
    for (i = 2; i <= n; i++) {
        if (!arr[i]) {
            primes.push(i);
            for (j = i << 1; j <= n; j += i) {
                arr[j] = true;
            }
        }
    }
    return primes;
}
getPrimes(10);