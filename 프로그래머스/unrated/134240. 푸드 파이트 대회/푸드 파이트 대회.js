function solution(food) {
    var answer = '';
    
    for(i=1; i<food.length; i++){
        answer+=String(i).repeat(food[i]/2)           // 양쪽에서 나눠서 먹어야 하므로 /2 값을 반복
    }
    
    console.log(answer)
    return answer + '0' + [...answer].reverse().join('')  // 앞에서 먹은걸 두 번째 사람은 거꾸로
}