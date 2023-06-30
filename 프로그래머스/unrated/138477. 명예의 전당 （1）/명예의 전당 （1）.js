function solution(k, score) {
   let result = [], king=[]
   
   score.forEach((v,i)=>{
       
       king.sort((a,b)=>b-a)
       
       if(i<k){
           king.push(v)
       }else{
           if(Math.min(...king)<v){
               king.pop()
               king.push(v)
           }
       }
       result.push(Math.min(...king))
   })
     console.log(king)
    return result
   
}



// k 번째 까지는 answer 에 첫 번째 점수 기록     O
// k+x 번째 부터는 k+x-1까지의 숫자와 비교해서 
// 더 크다면 k+x-1 까지의 가장 작은 점수부터 차례대로 answer에 추가
// 더 작다면 기존 첫 번 째 점수를 그대로 기록 