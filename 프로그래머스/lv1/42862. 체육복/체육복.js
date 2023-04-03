function solution(n, lost, reserve) {
    let answer = 0;
    const uniform = [];
    
    // 0) 모두가 체육복을 1벌씩 가지고 있도록 설정
    for (let i = 0; i < n; i++) {
        uniform[i] = 1;
    }
    
    // 1) 체육복을 도난당한 학생의 체육복을 0개로 수정
    for (let i = 0; i < lost.length; i++) {    
        uniform[lost[i]-1] = 0;
    }
    console.log(uniform)
    // 2) 여벌의 체육복을 가져온 학생의 체육복을 +1개로 수정
    for (let i = 0; i < reserve.length; i++) {
        uniform[reserve[i]-1] += 1;
    }
    console.log(uniform)
    // 3-1) 체육복이 0개인 학생이 앞번호에서 체육복을 빌려올 수 있는 경우
    for (let i = 0; i < n; i++) {
        if (uniform[i-1] === 2 && uniform[i] === 0) {
            uniform[i-1] = 1;
            uniform[i] = 1;
    
    // 3-2) 체육복이 0개인 학생이 뒷번호에서 체육복을 빌려올 수 있는 경우
        } else if (uniform[i] === 0 && uniform[i+1] === 2) {
            uniform[i] = 1;
            uniform[i+1] = 1;
        }
    }
    
    // 결과: 체육복을 1개 이상 가지고 있게 된 학생의 수를 카운트 후, 답안 제출
    for (let i = 0; i < n; i++) {
        if (uniform[i] > 0) {
            answer++;
        }
    }
    
    return answer;
}
