function solution(name, yearning, photo) {
    var answer = [];
    
    let sum =0;
    for(i=0; i<photo.length; i++){
        
        for(j=0; j<photo[i].length; j++){          // 이중포문으로 photo[i] 순서대로 돌면서 찍음
            let item = photo[i][j]
            
           for(k=0; k<name.length; k++){
               if(item ===name[k]){
                   sum+=yearning[k]
                    
              }
         }
      }
         answer.push(sum)
        sum=0
    }
    
    
    return answer
}




// photo 배열을 돌면서 name 이 있는지 확인
// name 에 해당하는 yearging 점수 합산