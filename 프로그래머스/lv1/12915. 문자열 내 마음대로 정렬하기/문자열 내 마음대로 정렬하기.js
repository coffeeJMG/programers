function solution(strings, n) {
    var answer = [];
    
 
       
       answer= strings.sort(function(a,b){
           if(a[n] >b[n]){                 // 우선 n번째 인덱스가 같다는건 나중에
               return 1;                    // a= sun  b =bed 각 n번째 항 비교해서 오름차순 
           }else if(a[n] < b[n]){    
               return -1;
           }else{
               if(a>b){
                   return 1
               }
               if(a<b){
                   return -1
               }
           }
           
      
        })
   
    console.log(strings)
   
   
    
    return answer;
}

// 각 인덱스의 n번째 값 순으로 배열    strings[i][n]
// n번째 인덱스가 같으면 전체 문자열 사전순 
// sort 함수는 a-b 가 양수면 b가 오른쪽이동
//                   음수면 a가 오른쪽이동?