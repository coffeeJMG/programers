function solution(array, commands) {
    var answer = [];
    
    for(var i=0; i<commands.length;i++){
        var list = array.slice(commands[i][0]-1, commands[i]
        							[1]).sort((a,b)=>{return a-b});
        
        answer.push(list[commands[i][2]-1]);
    }

    return answer;
}

// commands[i][0] 번째부터 commands[i][1] 번째까지 배열을 자른다.
// 오름차순으로 정렬 뒤 commands[i][2] 번째 값을 리턴한다.