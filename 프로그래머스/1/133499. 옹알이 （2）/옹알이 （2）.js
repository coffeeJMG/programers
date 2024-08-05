function solution(babbling) {
    var answer = 0;
    let babbles = ["aya", "ye", "woo", "ma"];  
    
    for (let i = 0; i < babbling.length; i++) {
        let lastRemoved = "";
        let canContinue = true;

        while (canContinue) {
            canContinue = false; 
            for (let value of babbles) {
                
                // index를 검사해서 yeayeye에서 ye나 aye가 배열에 있어도 첫번째 인지 확인 
                if (babbling[i].indexOf(value) === 0 && value !== lastRemoved) {
                    babbling[i] = babbling[i].substring(value.length);
                    lastRemoved = value;
                    canContinue = true; 
                    break; 
                }
            }
        }

        if (babbling[i].length === 0) {
            answer++;
        }
    }

    return answer;
}
