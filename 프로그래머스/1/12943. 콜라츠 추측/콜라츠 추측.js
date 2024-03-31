function solution(num) {
    var answer = 0;
    let count =0 ;
    
    
    while( num !==1){
        
        if(num %2 ===0){
            num= num/2
        }else if(num%2 ===1){
            
            num = num*3 +1
        }
        
        count ++
        
    }
    
    
    return count < 501 ? count : -1
}