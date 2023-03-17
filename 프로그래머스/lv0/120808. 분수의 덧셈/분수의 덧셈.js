function solution(numer1, denom1, numer2, denom2) {
var answer = [];
var numer =numer1*denom2+numer2*denom1;    // 두 분수의 합 분수의 분자
var denom =denom1*denom2;                  // 두 분수의 합 분수의 분모 
var maxNumber ;                            // 공약수 변수 

    if(numer > denom ){                    // 분자가 더 큰경우
         maxNumber = denom;                // 공약수는 분모
    }  else{                
        maxNumber = numer;                 // 공약수는 분자
    }

    // 기약 분수가 되려면 최대공약수로 분모/분자를 나누어주면된다.
    
    while(true){
        if(denom % maxNumber ===0 && numer % maxNumber===0){   // 만약 분모/분자가 공약수로 모두 나누어진다면
        return [numer / maxNumber,denom / maxNumber];           // [분자/최대공약수,분모/최대공약수
    }
         maxNumber = maxNumber -1;              // 두 수의 최대공약수는 작은 숫자보다 클 수 없기때문에 
                                                // 더 작은 수로 위 if문 조건이 안된다면 -1 하고 리턴 
                                                // 두수가 공약수가 없다면 애초에 기약분수 이기때문에
                                                // 계속 -1이되다가 maxNumber가 1때 if문에 들어가서 그대로 나온다.
     }
   }
 
 // ex) 8/4 + 8/4 = 16/4 max 넘이 4가 되고 둘다 나누어 떨어지므로 리턴 값 [16/4,[4/4]] = [4,1] 통과
 