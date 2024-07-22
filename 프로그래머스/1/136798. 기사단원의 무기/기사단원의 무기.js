function countDivisors(n) {
    let divisors = Array(n + 1).fill(1);
    for (let i = 2; i <= n; i++) {
        for (let j = i; j <= n; j += i) {
            divisors[j]++;
        }
    }
    return divisors;
}

function solution(number, limit, power) {
    let answer = 0;
    let divisors = countDivisors(number);
    
    for (let i = 1; i <= number; i++) {
        let divisor = divisors[i];
        
        if (divisor > limit) {
            divisor = power;
        }
        
        answer += divisor;
    }
    
    return answer;
}