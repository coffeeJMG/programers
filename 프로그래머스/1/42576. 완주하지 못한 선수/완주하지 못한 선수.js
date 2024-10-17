function solution(participant, completion) {
    let participantMap = {};
    
    // 참가자 리스트에서 각 이름의 등장 횟수를 기록
    participant.forEach((name) => {
        participantMap[name] = (participantMap[name] || 0) + 1;
    });
    
    // 완주한 사람의 이름을 참가자에서 제거 (횟수를 감소)
    completion.forEach((name) => {
        participantMap[name] -= 1;
    });
    
    // 등장 횟수가 0이 아닌 이름이 완주하지 못한 사람
    for (let name in participantMap) {
        if (participantMap[name] > 0) {
            return name;
        }
    }
}