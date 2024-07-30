function solution(n) {
    let sieve = Array(n + 1).fill(true); // 0부터 n까지의 배열을 true로 초기화
    sieve[0] = sieve[1] = false; // 0과 1은 소수가 아니므로 false

    for (let i = 2; i * i <= n; i++) { // i의 제곱이 n 이하일 때까지만 검사
        if (sieve[i]) {
            for (let j = i * i; j <= n; j += i) { // i의 배수를 false로 설정
                sieve[j] = false;
            }
        }
    }

    return sieve.filter(value => value).length; // true인 요소의 개수를 반환
}