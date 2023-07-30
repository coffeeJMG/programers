function solution(str_list) {
    var answer = [];
    
    for (let i = 0; i < str_list.length; i++) {
        let item = str_list[i];
        
        if (item === "l") {
            answer = str_list.slice(0, i);
            break; // Move the break inside the if block
        } else if (item === "r") {
            answer = str_list.slice(i + 1);
            break; // Move the break inside the else-if block
        }
    }
    
    console.log(answer);
    return answer;
}