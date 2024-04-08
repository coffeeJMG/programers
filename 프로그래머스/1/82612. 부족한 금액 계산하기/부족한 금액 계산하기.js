function solution(price, money, count) {
   
    let i =1;
    
    while(i<=count){
        
        money-=i*price
        
        i++     
        
    }
    
    
    
    return money>=0 ? 0 : -money
}