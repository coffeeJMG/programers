function solution(n) {
    let answer = 0;
    let arr = [];
    
    // 초기배열 셋팅
    // 0과 1은 소수가 아니기 때문에 처음부터 0을 넣음
    for (let i = 0; i <= n; i++) {
        if (i == 1)
            arr[i] = 0;
        else
            arr[i] = i;       
    }
    
    // 소수 찾기
    for (let i = 2; i*i <= n ; i++) { // 제곱근까지 반복
        if (arr[i] != 0) { // 0아니면 소수
            for (let j = i+i; j <= n; j += i) { // 소수의 배수들은 소수가 아님
                arr[j] = 0; // 소수 아닌것을 0으로 표현
            }
        }
    }
    
    // 소수의 개수 구하기
    for (let i = 0; i <= n; i++) {
        if (arr[i] != 0) // 소수 아닌것을 0으로표현했으니, 0이아니면 소수
            answer++; // 소수의 갯수 카운트
    }
    
    return answer;
}
 

// 1. 1부터 n 까지 for 문
//
// 더 효율 좋은 방법  n>1 인 합성수라면 n은 제곱근보다 큰 약수를 가지지 않는다.
