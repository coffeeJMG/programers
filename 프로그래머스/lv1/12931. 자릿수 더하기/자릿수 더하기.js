function solution(n)
{
    var answer = 0;
    
    let str = String(n).split("")
     
    for(i=0; i<str.length; i++){
        answer+=Number(str[i])
    }


    return answer;
}