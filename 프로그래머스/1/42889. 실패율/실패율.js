function solution(N, stages) {
    var answer = [];
    let currentTotalUser = stages.length;
    let rank = {};
    
    for(let i = 1; i <= N; i++) {
        let count = 0;
        
        for(let j = 0; j < stages.length; j++) {
            let userStage = stages[j];
            
            if(userStage === i) {
                count++;
            }
        }
        
        rank[i] = count / currentTotalUser;
        currentTotalUser -= count;
    }
    
    console.log(rank)
    // 객체를 배열로 변환 후 정렬
    let sortedRank = Object.entries(rank).sort((a, b) => b[1] - a[1]);
    
    console.log(sortedRank)
    // 정렬된 결과에서 키 값만 추출
    answer = sortedRank.map(entry => parseInt(entry[0]));
    
    
    console.log(answer);
    
    return answer;
}
