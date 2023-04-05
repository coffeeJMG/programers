function solution(number, limit, power) {
    var answer = 0;
    
   
    let count=0;      // 공격력 변수
    let attack=[];    // 기사단원의 공격력 변수(약수의 개수)
    
   
    
    for(i=1; i<=number; i++){
       
        for(j=1; j<=i/2; j++){         // 각 기사단원의 약수의 개수를 구함
            if(i%j===0){
                count++
            }
        }
        attack.push(count+1)              // 약수의 개수를 attack에 추가하고 초기화
        count=0;
    }
    
    for(i=0; i<attack.length; i++){     
         
        if(attack[i]>limit){           // 공격력이 제한수치를 넘으면 
           attack[i]=power;            // power 로 변경 
        }else{
            continue;
        }
        
         
    }
  
    
    
    return attack.reduce((acc, cur) => acc + cur, 0);
}





// 기사 단원의 번호는 1~number까지
// 약수의 개수는 1~limit 까지
// limit을 안넘으면 공격력은 자신의 번호 약수의 개수, 넘으면 power 
