function solution(n) {
    // n을 3진법으로 변환
    const reversedBase3 = n.toString(3).split("").reverse().join("");
    
    // 뒤집힌 3진법 문자열을 다시 10진수로 변환
    return parseInt(reversedBase3, 3);
}