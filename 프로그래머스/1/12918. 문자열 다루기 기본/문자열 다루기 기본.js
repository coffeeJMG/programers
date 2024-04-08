function solution(s) {
    var answer = true;
    
    if(s.length ===4 || s.length ===6){
          for(item of s){
        
        if(isNaN(Number(item))){
            
            answer =false;
           
        }
        
    }
        
    }else {
        answer =false;
    }
    
  
    
    return answer;
}