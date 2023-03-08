function solution(x, n) {
    var answer = [];
    
    for(i=1; i<=n; i++){
        
        answer.push(x + (i-1)*x)
    }
    console.log(answer)
    return answer;
}