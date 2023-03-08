function solution(x, n) {
    var answer = [];
    //초항이 x 공차가 x 길이가 n인 등차수열
     for(i=1; i<=n; i++){
        
        answer.push(x + (i-1)*x)  // n번째 항을 구하는 등차수열의 공식대로 배열에 추가 
    }
    console.log(answer)
    return answer;
}