function solution(cards1, cards2, goal) {
    var answer = '';
    
    for(i=0; i<goal.length; i++){
        let item = goal[i];
        
        if(item === cards1[0]){
            cards1.shift();
        }else if(item ===cards2[0]){
            cards2.shift();
        }else{
            answer+='No'
            return answer
        }
    }
    answer +='Yes'
    return answer;
}