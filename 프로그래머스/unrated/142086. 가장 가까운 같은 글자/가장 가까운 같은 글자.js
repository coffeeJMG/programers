function solution(s) {
    var answer = [];
    let count =0;
    let distance=[];                        // 같은 값이 있을경우 거리 값 저장배열
    
    
    for( i=0; i<s.length; i++){             // 먼저 s[i] 번째를 0부터 순서대로 돈다
        let item=s[i];
        for(j=0; j<i; j++){                 // 다음으로 s[j]값은 0부터 i보다 작을때까지 돈다.
          
            if(item ===s[j]){               // 만약 같은 값이 있다면
                count+=1                    // count를 늘리고
                distance.push(i-j)          // 두 원소 거리를 차이배열에 추가한다.
                
               }
          
         }
       if(count===0){                       // 같은 값이 없다면 -1을 정답에추가
            answer.push(-1)
         }else{                                        // 같은 값이 있는 s[i] 번째라면 해당 순서에서
              answer.push(distance[distance.length-1]) // 차이배열 중 가장 뒤쪽 즉 순서상 가장 가까운쪽 원소추가
              distance=[];                             // 다음 s[i] 번째 차이를 비교하기 위해 차이배열 초기화;
         }
        count=0;                                       // 카운트또한 다음 순서비교를 위해 초기화
       
    }
    console.log(distance)
    //// 우선 여기까지 앞에 자기랑 같은 숫자가 나오면 -1 반환 성공 
    
        return answer
}


// 해당 인덱스가 등장한 적 없으면 -1
// 있으면 같은 글자가 몇번째앞에있는지 ex) 두칸이면 2 