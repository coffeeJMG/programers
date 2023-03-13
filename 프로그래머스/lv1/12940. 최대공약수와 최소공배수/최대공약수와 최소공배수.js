function solution(n, m) {
    var answer = [];
    var divisor=[];                             //공약수 배열
    let xxx=[];
    for(i=1; i<=m; i++){
        if(m %i ===0 && n%i===0){
            divisor.push(i)                     // 공약수들을 배열에 순차적으로 추가
        }
    }
    answer.push(divisor[divisor.length-1])      // 가장 마지막 즉 가장 큰 수 최대공약수를 답에 추가
   
    for(i=m; i<=n*m; i++){
        if( i % n ===0 && i %m ===0){
            xxx.push(i);
        }
    }
    answer.push(xxx[0])
    console.log(xxx)
    return answer;
}

// 두 수의 최대공약수, 최대공배수
// 공약수 중 가장 큰 수 =최대공약수
// 공배수 중 가장 작은 수 =최소공배수 