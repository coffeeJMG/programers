function solution(cards1, cards2, goal) {
    var answer = 'Yes';

    for(let i=0; i<goal.length; i++){
            let item = goal[i]
            
            if(item === cards1[0]){
                
                cards1.shift()
            }else if ( item === cards2[0]){
                
                cards2.shift()
            }else{
                
                answer = "No"
            }
        
    }
    
    
    return answer;
}


// cards1,2 의 순서는 바꿀 수 없음
// goal 을 돌면서 cards[1] 과 cards[2] 의 0번 확인
// goal i 번째 값이 존재하면 배열에서 제거
// goal 의 i번째 값이 cards1,2의 0번 째에 없으면 No

