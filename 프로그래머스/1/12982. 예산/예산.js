function solution(d, budget) {
    var answer = 0;
    d=d.sort((a,b)=>a-b)
    
    console.log(d)
    
    for(let i=0; i<d.length; i++){
        
        if(budget -d[i]>=0){
            budget-=d[i]
            answer+=1
        }else{
           
            break;
        }
        console.log(budget,`${i}번째`)
    }
    
    return answer;
}