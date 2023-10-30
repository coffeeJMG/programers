function solution(s){
    let stackCount = 0;
    for (let i = 0; i < s.length; i++) {
        
        // 요소가 여는 괄호이면 +1 닫는 괄호이면 -1
        stackCount += s[i] === '(' ? 1 : -1;
        
        // 0보다 작으면 닫는괄호가 더 많으므로 false
        if (stackCount < 0) return false;
        
    }
    
   
    return stackCount === 0 ? true : false;
}