function solution(k, m, score) {
    
    
    var answer = 0;
    
    score.sort((a,b)=> b-a)
    
    console.log(score)
    
    for(let i=0; i<score.length; i+=m){
        
        
        if(score.length- i >=m){
            answer += score[i+m-1] * m    
        } 
        
    }
    
    
    return answer;
}