function solution(arr) {
    var result = [];
   
    for(let i=0; i<arr.length; i++){
        let item= arr[i]
        
        if(result.length ===0){
            result.push(item)
        }else if(result[result.length-1] ===item){
            result.pop()
        }else if(result[result.length-1] !==item){
            result.push(item)
        }
        
    }
    
    if(result.length===0){
        result.push(-1)
    }
    return result;
}