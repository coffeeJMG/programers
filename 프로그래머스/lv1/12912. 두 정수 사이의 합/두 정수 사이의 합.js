function solution(a, b) {
    var answer = 0;
    let sum =0;
    
    if(a<=b){
        for(i=a; i<=b; i++){
        sum+=i
        }    
    }else if(a>b){
        for(i=b; i<=a; i++){
        sum+=i
      }
    }
    return sum;
    
}

// 1. 합 변수 설정하고 for문 돌려서 계산