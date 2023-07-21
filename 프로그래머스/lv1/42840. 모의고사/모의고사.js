function solution(answers) {
    var answer = [0,0,0];
    let result=[];
    let first = [1,2,3,4,5]
    let second = [2, 1, 2, 3, 2, 4, 2, 5]
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    for(i=0; i<answers.length; i++){
        if(answers[i] === first[i%5]){
            answer[0]++
        }
         if(answers[i] === second[i%8]){
            answer[1]++
        }
         if(answers[i] === third[i%10]){
            answer[2]++
        }
    }
    console.log(answer)
    for(i=0; i<answer.length; i++){
        if(answer[i] ===Math.max(...answer)){
           result.push(i+1)
        }
    }
   
    return result;
}