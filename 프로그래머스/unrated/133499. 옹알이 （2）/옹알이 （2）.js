function solution(babbling) {
    var answer = 0;
    let diction =["aya", "ye", "woo", "ma"]
    
    for(i=0; i<babbling.length; i++){
            let item =babbling[i]
        for(j=0; j<diction.length; j ++){
           if(item.includes(diction[j].repeat(2))){
                break;
            }
        item=  item.split(diction[j]).join(" ")
        
        }
            if(item.split(" ").join("").length === 0){
            answer += 1;
        }

       console.log(item)
    }
    
    return answer;
}