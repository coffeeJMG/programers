function solution(answers) {
    var answer = [];
    let one = [1,2,3,4,5]
    let two = [ 2, 1, 2, 3, 2, 4, 2, 5]
    let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    let count =[0,0,0];
    
    for(i=0; i<answers.length; i++){
        if(answers[i]===one[i%5]){
            count[0]++
        }
        if(answers[i]===two[i%8]){
             count[1]++
        }
        if(answers[i]===three[i%10]){
             count[2]++
        }
      }
    let maxNum=0;
    for(i=0; i<count.length; i++){
        let item= count[i];
        if(item>maxNum){
            maxNum=item;
        }
    }
    
    for(i=0; i<count.length; i++){
        let item=count[i];
        if(item===maxNum){
            answer.push(i+1)
        }
    }
    
    console.log(count)
    console.log(answer)
    return answer;
}

//먼저 1,2,3번 수포자의 찍는 방식을 표현할 방법을 찾아야함
// 배열로 찾아서 포문 돌리면서 같을때마다 count ++ 
// count 높은사람 반환

