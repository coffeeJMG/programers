
 function solution(a, b) {
    let weeks = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    let months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let whatWeek = b - 1;                    // 인덱스가 0부터라서 -1
    for (let i = 1; i < a; i++) {
        whatWeek += months[i - 1];           // 새로운 월이 되면 그 이전까지의 일수를 합산 
                                             // 마찬가지로 인덱스 0부터 이기 때문에 -1
    }

    return weeks[whatWeek % 7];
}
 

