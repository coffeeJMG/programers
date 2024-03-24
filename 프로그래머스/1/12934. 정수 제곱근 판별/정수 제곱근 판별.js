function solution(n) {
    
    
    for(let i=1; i<=n; i++){
        
            if(n/i ===i){
            
               
                return (i+1)**2
            }
        
    }
    
    
    return -1
}