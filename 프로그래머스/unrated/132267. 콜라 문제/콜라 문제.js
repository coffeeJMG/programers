function solution(a, b, n) {
    var answer = 0;
    
  
    
    while(true){
        if(n<a){
            break;
        }else{
        answer+=Math.floor(n/a)*b
        n=(n%a)+Math.floor(n/a)*b
        }
        
        
    }
    return answer
}
    

// a = 교환 기준 개수  b= 받는 개수 n = 보유 개수
// n이 a보다 작으면 끝   n이 2개미만이면 교환 X 

//        n=(n%a)+Math.floor(n/a)*b
//         answer+=Math.floor(n/a)*b
//   answer     a  b   n        
//              3  1   20                   
// 1.   6              8
// 2.   2              4
// 3.   1              2
