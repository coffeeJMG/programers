function solution(l, r) {
    var answer = [];
    let result = [];
    let count =0;
    
    for(let i=l; i<=r; i++){
        answer.push(i)
    }
    
    for(let i=0; i<answer.length; i++){
        let item = String(answer[i]);
        
        for(let j=0; j<item.length; j++){
            if(item[j] !=="5" && item[j] !=="0" ){
                count ++
            }
        }
        if(count ===0){
            result.push(answer[i])
        }
        count=0
    }
    if(result.length ===0){
        result.push(-1)
    }
    return result;
}