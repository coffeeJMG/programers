function solution(n) {
    var answer = '수';
    
    
    for(i=0; i<n-1; i++){
        if(answer.length %2 ===0){
              answer+='수'
    }  else{
        (answer.length %2 !==0)
              answer+='박'
    
       }
     }
 return answer;
}

//for문을 돌며 n번만큼 수행 
//0이면 '수' 추가
// n의 길이가 홀수면 '박' 추가
// n의 길이가 짝수면 '수 추가
