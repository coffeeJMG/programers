function solution(number) {
    var answer = 0;
    const sum= [];
    for(i=0; i<number.length; i++){
        for(j=i+1 ; j<number.length; j++){
            for(k=j+1; k<number.length; k++){
                
                if(isNaN(number[j])===false && isNaN(number[k])===false ){
                     sum.push(number[i]+number[j] +number[k])
                }
            }
        }
    }
    
    for(i=0; i<sum.length; i++){
        if(sum[i] ===0){
            answer++
        }
    }
    return answer;
}


// 서로다른 세 수를 모두 더하는 포문 
