function solution(num) {
    var answer = 0;          
   
    
    for(i=0; i<500; i++){
        
    if(num !==1){
        if(num%2 ===0){
            num= num/2;         //짝수 계산
        }else{
            num=num*3 +1;       //홀수 계산
        }
    }else{
        return answer =i;       //num 이 1인경우 이므로 i가 0으로 바로 빠져나옴
    }
        
      if(i===499){              //500번째 인 경우 -1;
          answer =-1
      }
    }
     
    return answer
   
}
// num이 1이 아니라면
// 짝수인 경우와 홀수인 경우로 나누어 
// 계산을 시작해 결과값을 저장
// 최대 반복 횟수 500을 넘으면 -1 반환
// num 이 1인경우 0반환 