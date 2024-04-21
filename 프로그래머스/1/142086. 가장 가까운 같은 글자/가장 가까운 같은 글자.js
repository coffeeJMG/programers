let str = {}

function solution(s) {
    var answer = [];
    
    for(let i = 0; i < s.length; i++) {
        if (str[s[i]] === undefined) {
            answer.push(-1)
            str[s[i]] = i; 
        } else {
            answer.push(i-str[s[i]])
            
            str[s[i]] =i;  
        }
    }
    
    console.log(str);
    return answer;
}