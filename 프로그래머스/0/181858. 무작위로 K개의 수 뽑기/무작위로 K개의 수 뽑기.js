function solution(arr, k) {
    var answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (answer.length === k) {  // k가 answer 의 길이와 같으면 종료
            break;
        }

        let item = arr[i];
        let count = 0;

        for (let j = 0; j < answer.length; j++) {
            if (answer[j] === item) {   // 같은 숫자 있으면 종료
                count++;
                break;
            }
        }

        if (count === 0) {   // 같은 숫자 없으면 answer 에 추가
            answer.push(item);
        }
    }
    
    while (answer.length < k) {  // k 만큼 숫자를 못채웠으면 -1로 추가
        answer.push(-1);
    }

    return answer;
}