function solution(array, commands) {
    var answer = [];
    let result =[];
    for(i=0; i<commands.length; i++){
        let item= commands[i][2]-1
       answer.push(array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=>a-b)[item])
       
    }
    return answer;

}
// commands 는 i,j,k를 담은 이중배열 
// array[commands[i]] ~ array[commands[j]] 까지 자른다.
// 위 배열을 정렬한다.
// 3번째 숫자를 고른다.