function solution(arr, divisor) {
    var answer = [];
    
    arr= arr.sort((a,b)=> a-b);
    for(i=0; i<arr.length; i++){        
        let item= arr[i];
        
        if(item % divisor ===0){        // 나누어 떨어지는 지 계산
            answer.push(item)
        }
    }
    
    if(answer.length ===0){             // 배열을 돈 후 answer 길이가 0이면 -1 추가
        answer.push(-1)
    }
    return answer
}

// arr을 오름차순 배열
// 배열을 돌며 divisor 로 나누어 떨어지면 answer 에 추가
// 만약 길이가 0이면 -1 추가  