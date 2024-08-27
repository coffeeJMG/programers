const findIndex = (keymap, target) => {
    let count = 0;
    
    for (let i = 0; i < target.length; i++) {
        let minNum = 999999; 
        let currentKey = target[i]; // target의 i번째 문자

        for (let j = 0; j < keymap.length; j++) {
            let index = keymap[j].indexOf(currentKey); // keymap의 j번째 문자열에서 currentKey 위치 찾기
            
            // 만약에 존재한다면 minNum과 index + 1 중 더 작은 수로 minNum 초기화
            if (index !== -1) {
                minNum = Math.min(minNum, index + 1);
            }
        }
        
        // 만약에 minNum이 초기값 그대로라면 (해당 키를 찾지 못한 경우)
        if (minNum === 999999) {
            return -1;
        }
        
        count += minNum;
    }
 
    return count; 
}

function solution(keymap, targets) {
    var answer = [];
    
    for (let i = 0; i < targets.length; i++) {
        answer.push(findIndex(keymap, targets[i]));
    }
    
    return answer;
}
