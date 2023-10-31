function solution(people, limit) {
    var answer = 0;
    // 내림차순 정렬
    people.sort((a,b) => b-a);
    console.log(people);
    let left = 0;   // 가장 무거운 사람
    let right = people.length -1; // 가장 가벼운 사람 
    
    while(left < right){
      
        // 두명까지만 탑승 가능 
        const sum = people[left] + people[right];
        // 무게가 넘치면 (left만 배에 태우고) 다음 사람을 검사한다.
        if(sum > limit){
            
            left++;
        } else {
            // 무게가 넘치지 않으면 (둘다 태우고) 다음 사람을 검사한다.
            
            left++;
            right--;
        }
        answer++;
    }
    // 한명 남은 경우 배 하나가 더 필요하다.
    if(left == right) answer++;
    return answer;
}