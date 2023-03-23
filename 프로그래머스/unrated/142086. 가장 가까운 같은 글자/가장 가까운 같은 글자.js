function solution(s) {
    var answer = [];
    let count =0;
    let distance=[];
    for( i=0; i<s.length; i++){
        let item=s[i];
        for(j=0; j<i; j++){
          
            if(item ===s[j]){
                count+=1
                distance.push(i-j)
                
               }
          
         }
       
       
        if(count===0){
            answer.push(-1)
         }else{
               answer.push(distance[distance.length-1])
              distance=[];
         }
        count=0;
       
    }
    console.log(distance)
    //// 우선 여기까지 앞에 자기랑 같은 숫자가 나오면 -1 반환 성공 
    
        return answer
}


// 해당 인덱스가 등장한 적 없으면 -1
// 있으면 같은 글자가 몇번째앞에있는지 ex) 두칸이면 2 