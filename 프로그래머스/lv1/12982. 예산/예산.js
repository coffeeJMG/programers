function solution(d, budget) {
    var answer = 0;
    let sum=0;
    let count =0;
    d = d.sort((a,b)=>(a-b));                 
   
    for(i=0; i<d.length; i++){
        
          if(sum>budget){
              break;
          }                
          sum+=d[i] 
          count ++;
    }
    
    if(sum<=budget){
        answer =count;
    }else{
        answer = count-1
    }
    
    
    return answer;
}


