function solution(cards1, cards2, goal) {
   
    
    for(let cards of goal){                 
        
        if(cards1[0] ===cards){            // cards1[0] 번째의 값이 goal 의 n번째 값과 같다면
          cards1.shift()                   // cards1[0] 지우기
        
        }else if(cards2[0] ===cards){      // cards2[0] 번째의 값이 goal 의 n번째 값과 같다면
          cards2.shift()                   // cards2[0] 지우기
        }else{
            return "No"
        }
    } 
    
    return "Yes";
}





