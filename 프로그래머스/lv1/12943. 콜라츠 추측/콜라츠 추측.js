function solution(num) {
    var answer = 0;          
   
    
    for(i=0; i<500; i++){
        
    if(num !==1){
        if(num%2 ===0){
            num= num/2;
        }else{
            num=num*3 +1;
        }
    }else{
        return answer =i;
    }
        
      if(i===499){
          answer =-1
      }
    }
     
    return answer
   
}
// 짝수인 경우와 홀수인 경우로 나누어 계산을 시작해 결과값을 저장
// 결과값이 1일때까지 반복하고 1이면 1반환
// 최대 반복 횟수 500을 넘으면 -1 반환
// num 이 1인경우 0반환 