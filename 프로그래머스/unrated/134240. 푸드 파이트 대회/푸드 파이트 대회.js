function solution(food) {
    var answer = '';
   
  
         for(i=1; i<food.length; i++){
            if(food[i] %2 ===1){                          // 준비된 물이 홀수라면
              answer+=String(i).repeat((food[i]-1)/2);    //   갯수 -1/2 만큼 앞에 추가
          }else{
              answer+=String(i).repeat(food[i]/2)         //짝수면 그대로
          }
        }
        answer+='0'                                       //중간 물
        
        for(i=food.length-1; i>=0; i--){                  // 앞과 뒤는 같으므로 반대 순으로 포문돌며 추가
          if(food[i] %2 ===1){
              answer+=String(i).repeat((food[i]-1)/2);
          }else{
              answer+=String(i).repeat(food[i]/2)
          }
        }
    console.log(answer)
    return answer
}


// food의 1,2,3 번째 숫자는 홀수 일시 (food[i]-1)/2 해서 추가 짝수일시 그대로 추가
// food의 1,2,3을 순서대로 추가하고 역순으로 다시한번 추가
// food[1] = 1  food[2] =2 food[3] =3    변수에 저장 후에 그만큼 반복 

