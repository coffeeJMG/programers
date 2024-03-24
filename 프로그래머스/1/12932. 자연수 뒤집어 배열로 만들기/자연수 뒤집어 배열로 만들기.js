function solution(n) {
    var answer = [];
    
    let newArray = String(n).split("")
    console.log(newArray)
    
    for(let i=newArray.length-1 ; i>=0; i--){
        
        answer.push(Number(newArray[i]))
    }
    
    
    return answer;
}