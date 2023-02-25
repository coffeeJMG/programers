function solution(spell, dic) {
    let answer = 0;
    let sumString ='';
    for(i=0; i<spell.length; i++){
        sumString+=spell[i]
    }
    sumString = sumString.split("").sort().join("")
    
    for(i=0; i<dic.length; i++){
        dic[i] = dic[i].split("").sort().join("")
    }
    let count =0;
    for(i=0; i<dic.length; i++){
        if(dic[i] === sumString){
            count ++
        }
    }
    if(count ===1){
        return 1
    }else{
        return 2
    }
}