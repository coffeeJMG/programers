function solution(s) {
    let answer= []
    s=s.split("")
    
    
    
    while(s.length > 2){
        
        answer= s.pop()
        answer= s.shift()
        
    }
    
   
    
    return s.join("")
}

// 배열의 길이가 2보다 클때까지 n번 반복하며 첫번째 요소랑 마지막 요소 제거
// 최종적으로 s의 길이는 1혹은 2 