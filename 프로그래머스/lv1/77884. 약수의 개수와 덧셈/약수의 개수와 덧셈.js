function solution(left, right) {
    var answer = 0;
    let divisor=[];
    for(i=left; i<=right; i++){
        
        for(j=1; j<=i; j++){
            if(i%j===0){
            divisor.push(j)             // i의 약수를 divisor 에 추가
            }
        }

        if(divisor.length %2===0){   //약수의 길이가 짝수면 더하고 홀수면 뺸다
            answer+=i
        }else{
            answer-=i
        }
         divisor=[]                   //다음 숫자를 돌기전에 배열 초기화
    }
    console.log(answer)
    return answer;
}

// left 부터 right 까지 약수의 개수가
// 짝수면 + 홀수면 -