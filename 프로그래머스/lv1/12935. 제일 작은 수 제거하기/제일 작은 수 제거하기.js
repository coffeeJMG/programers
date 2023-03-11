function solution(arr) {
    var answer = [];
    
    
    let minNum=10000000000000;                 // 배열을 돌며 최솟값 저장할 변수
    for(i=0; i<arr.length; i++){
        let item=arr[i];            // 배열값이 minNum보다 작으면 minNum 변경 
        if(item <minNum){
            minNum=item
        }
     }
    
     for(i=0; i<arr.length; i++){  
     let item=arr[i];
             
        if(arr.length <=1){           // arr길이가 1이면 -1추가 
             answer.push(-1)
       }else if(item !==minNum){
             answer.push(item)         // 배열을 돌며 최솟값이 아니라면 answer 에 추가  
       }
   }
    console.log(answer)
    return answer;
}


// 가장 작은 수를 찾고 해당 숫자 제외하고 answer 에 추가 
// arr 배열길이가 1이면 -1 answer 에 추가