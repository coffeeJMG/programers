function solution(s) {
    var answer = '';
    s=s.split(' ')
    for(let i=0; i<s.length; i++){
         answer=s[i].split('')
       
        for(let j=0; j<answer.length; j++){
            if(j%2 ===0){
                answer[j]= answer[j].toUpperCase();
            }else{
                 answer[j]= answer[j].toLowerCase();
            }
        }
            s[i]=answer.join('')
          
    }
    console.log(s)
    return s.join(' ');
}
    
    //S의 배열이 짝수번째이거나 0이면 홀수로
    //홀수면 짝수로 