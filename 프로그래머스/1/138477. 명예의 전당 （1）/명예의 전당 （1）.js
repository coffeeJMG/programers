function solution(k, score) {
    var answer = [];
    let honor = [];
    
    for(let i=0; i<score.length; i++){
        
       
        if(i<k){
           

                honor.unshift(score[i])
                honor.sort((a,b)=>a-b)
                answer.push(honor[0])
        }else if(i>=k){
            
            if(score[i]>=honor[0]){
                
                honor.shift()
                honor.unshift(score[i])
                honor.sort((a,b)=>a-b)
                answer.push(honor[0])
            } else{
                
                answer.push(honor[0])
            }
            
        }
        
 
  }
 
    return answer;
}


// k일까지는 첫날의 점수가 계속 올라감
// k+1 번째 부터는 해당 번째 까지의 숫자 중에 가장 낮은 숫자가 추가됨
// minNum k+1 번째 부터 기록해서 가장 낮은 점수 추가