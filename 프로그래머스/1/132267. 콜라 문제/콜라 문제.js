function solution(a, b, n) {
    var answer = 0;

    function exchange(n) {
        if (n < a) {
            return;
        }
        
        let exchanged = Math.floor(n / a); 
        let newBottles = exchanged * b;    
        let remainingBottles = n % a;      
        
        answer += newBottles;             
        
        exchange(newBottles + remainingBottles); 
    }
    
    exchange(n);
    
    return answer;
}
