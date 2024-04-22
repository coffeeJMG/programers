


function solution(numbers) {
    
    let answer = [];
    let combinations = [];
    
    function backtrack(cur){
        
         if(combinations.length ===2){
             
             let sum = combinations[0]+combinations[1]
             
             if(!answer.includes(sum)){
                 answer.push(sum)
             }
             
             return;
         }
        
        for(let i=cur; i<numbers.length; i++){
            
            combinations.push(numbers[i]);
            backtrack(i+1);
            combinations.pop();
        }
        
    }
    
    backtrack(0)
    
    return answer.sort((a,b)=>a-b);
}





