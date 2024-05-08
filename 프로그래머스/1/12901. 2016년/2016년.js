function solution(a, b) {
    let weeks = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    let months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // b 일수까지 담는 변수
    let whatWeek = b - 1;
    
    // a 월 까지 지난 날을 합산해주는 for문
    for (let i = 1; i < a; i++) {
        whatWeek += months[i - 1];
    }

    return weeks[whatWeek % 7];
}