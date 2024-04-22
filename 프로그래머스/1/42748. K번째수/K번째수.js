function solution(array, commands) {
    var answer = [];
    
    
        
        for(let i=0; i<commands.length; i++){
                    let item = commands[i]
                    let newArray = array.slice(item[0]-1,item[1]).sort((a,b)=>a-b)
                
                    answer.push(newArray[item[2]-1])
            
        }
        
    
    
    return answer;
}


// commands 배열 순회 
// array 의 배열을 [[0]] 부터 [[1]] 까지 잘라서 반환
// 정렬 후 [[2]] 번 째 요소 answer.push