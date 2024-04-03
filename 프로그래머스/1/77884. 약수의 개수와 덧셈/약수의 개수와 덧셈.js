function solution(left, right) {
    var answer = 0;
    
    
    function divisor (num){
        
        let count =0;
        
        for(i=1; i<=num; i++)  {
            
            if(num%i ===0){
                count++
            }
        }
        
        if(count%2 ===0){
            return num
        }
        
        return -1*num
    }
    
    for(let i=left; i<=right; i++){
        
            let item =i
            
            
        
        answer+=divisor(i)
    }
    
    return answer;
}