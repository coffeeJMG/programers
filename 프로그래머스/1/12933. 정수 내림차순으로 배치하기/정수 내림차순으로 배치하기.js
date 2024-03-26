function solution(n) {
    var answer = 0;
    
    return Number(String(n).split("").sort((a,b) => b-a).join(""))
    
    
}