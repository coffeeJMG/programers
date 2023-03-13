function solution(s) {
    var answer = '';
   

   
        
        if(s.length %2 !==0){
            answer+=(s[(s.length-1)/2]);         //홀수라면 배열길이-1 /2
       }else {
            answer+=(s[s.length/2-1]);
           answer+=(s[s.length/2]);              //짝수라면 배열길이 /2 , /2-1
          
          }
    
    console.log(answer)
    return answer;
}

//  [1,2,3,4,5] =5           홀수면 배열 길이 -1/2
//  [1,2,3,4] =2            짝수면 배열길이 /2 , /2-1

