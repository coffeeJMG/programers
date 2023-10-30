function solution(n) {
    var answer = 1;
    
    // 15를 예를들면 8부터는 8+9 에서 이미 자연수를 넘기 때문에 반까지만 검사
    
    for (let k = 1; k <= n / 2; k++) {
        let sum = 0;
        
        // 처음엔 1부터 반복되는 합 그다음부턴 +1 씩이므로 i를 따른다.
        let i = k;
        
        // 합이 자연수보다 같으면 정답 크면 필요없으므로 작을때만 연산반복
        while (sum < n) sum += i++;
        if (sum == n) answer++;
    }
    return answer;
}