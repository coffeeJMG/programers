function solution(arr) {
    var answer = [];
    let count = [];
    
    for(let i=0; i<arr.length; i++){
        let item = arr[i]
        if(item ===2){
            count.push(i)
        }
        
    }
   
    if(count.length===0){
        answer.push(-1)
        return answer
    }
    answer= arr.splice(count[0],count[count.length - 1] - count[0] + 1)
    console.log(count)
    return answer;
}