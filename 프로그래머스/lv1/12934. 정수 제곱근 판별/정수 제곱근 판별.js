function solution(n) {
    var answer = 0;
    
    for(i=0; i*i<=n; i++){
        if(i*i ===n){
            answer= (i+1)*(i+1)
            break;
        }else{
            answer =-1
        }
    }
    
    
    return answer;
}