function solution(s) {
    var answer = '';
    let strArray = [];
    
    for(str of s){
        
        strArray.push(str.charCodeAt(str))
    }
    
    strArray.sort((a,b)=>b-a)
    
    strArray.forEach((item)=> answer+=String.fromCharCode(item))
    
    return answer;
}