function solution(n, m, section) {
    var answer = 0;
   
    let painted= 0;           // 색을 칠해야하는 범위를 확인하는 변수 
    
    section.forEach((i)=>{    // 칠해야 하는 영역을 순회
        if(i>painted){        // 칠해야 하는 영역의 땅이 색칠된 변수보다 크다면
            painted= i+m-1    // 색칠된 변수는 현재 칠해야하는 땅(i) + 롤러의 길이(m) -1
             answer++         // 새로 페인트칠 하므로 answer ++
        }
     })
    
    return answer;
}