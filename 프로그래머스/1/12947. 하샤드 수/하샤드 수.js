function solution(x) {
    var answer = true;
    let sum = 0;
    
    for(value of String(x)){
        
        sum+=Number(value)
    }
    
    
    
    return x % sum ===0 ? true : false
}