// function solution(s) {
//     var answer = 0;
//     let count =0;
//     let currentStr = "";
    
//     for(let i=0; i<s.length; i++){
        
        
//         if(count ===0){
//             currentStr = s[i]
//             count ++
//         }else {
            
//             if(currentStr === s[i]){
//                 count ++
//             }else {
//                 count --
//             }
//         }
        
        
//         if(count ===0){
//             answer +=1; 
//             currentStr = ""
//         }
        
        
//     }
    
//     if(count !==0){
//         answer ++
//     }
    
//     return answer;
    
    
// }

function solution(s){
    
    let answer =0;
    let stack = [];
    
    for(let i=0; i<s.length; i++){
        
        if(stack.length ===0){
            
            stack.push(s[i])
        }else {
            
            if(stack[stack.length-1] === s[i]){
                
                stack.push(s[i])
            }else {
                stack.pop()
            }
        }
        
        if(stack.length===0){
            answer ++
        }
        
    }
    
    
    if(stack.length !==0) answer ++
    
    return answer
}


// // 카운트가 0이면 currentStr= s[i] 저장 및 count ++
// // 카운트가 0이 아니면 count --
// // if(count =0) answer ++ currentStr=""
// // 만약 딱 떨어지지 않고 남은 문자열이 있는경우 answer +=1