function solution(quiz) {
    let answer = [];
    let num=0;
    quiz = quiz.join(' ').split(' ');
    
    for(i=0; i<quiz.length; i++){
       
        if(quiz[i] === '-'){
            num=quiz[i-1]-quiz[i+1];
            if(String(num) ===quiz[i+3]){
                answer.push('O');
                num=0;
            }else if(String(num) !==quiz[i+3]){
                answer.push('X');
                num=0;
            }  
        }
        if(quiz[i] === '+'){
            num=Number(quiz[i-1])+Number(quiz[i+1]);
            if(String(num) ===quiz[i+3]){
                answer.push('O');
                num=0;
            }else if(String(num) !==quiz[i+3]){
                answer.push('X');
                num=0;
            }  
        }
    }
    console.log(num)
    return answer;
}

