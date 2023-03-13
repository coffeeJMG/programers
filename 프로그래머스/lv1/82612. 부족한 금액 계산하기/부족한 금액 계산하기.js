function solution(price, money, count) {
    var answer = 0;
    let sum=0;           // 총가격 변수
    
    for(i=1; i<=count; i++){       
        sum+=price*i                //총가격의 식
    }
    
    if(money-sum >0){
        answer =0;
    }else {
        answer = sum-money
    }
   
    return answer;
}


// 처음 100원  2번쨰 200 3번째 300 즉 (a1*1 + a1*2 + a1*3) 총가격의 식
// money - 총가격 >=0 return 0
// money =총가격 <0 return 총가격 - money 