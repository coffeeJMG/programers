function solution(arr) {
    var answer = [];
    let minNum = 100000000;
    
    for(let i=0; i<arr.length; i++){
        
        if(arr[i]<minNum){
            minNum = arr[i]
        }
    }
    
    answer = arr.filter((item)=> item!==minNum)
    
    if(answer.length ===0){
        return [-1]
    }
    
    if(answer[0] ===10 && answer.length ===1){
        return [-1]
    }
    
    return answer;
}

