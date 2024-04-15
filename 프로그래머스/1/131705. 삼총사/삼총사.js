function solution(number) {
    var answer = 0;
    let count = 0;
    
    
    
     for(let i=0; i<number.length; i++){
         
         for(let j=i+1; j<number.length; j++){
             
             for(let k=j+1; k<number.length; k++){
                     
                    if(number[i]+number[j]+number[k] === 0){
                        
                        console.log(i,j,k, "세 수의 합이 0")
                        count ++
                    }
             }
         }
     }
    
    return count;
}


