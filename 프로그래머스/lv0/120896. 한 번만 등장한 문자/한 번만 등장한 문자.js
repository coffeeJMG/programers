let obj={}
function solution(s) {
    let answer = [];
    for(let i=0; i<s.length; i++){
        let item = s[i];
        if(obj[item]){
            obj[item] +=1;
        }else{
            obj[item] =1;
        }
    }
    let objArray = Object.entries(obj);
    for(let i=0; i<objArray.length; i++){
        let item = objArray[i];
        if(item[1] ===1){
            answer.push(item[0]);
        }
    }
    console.log(answer)
    let sortedArray = answer.sort((a,b)=> a.charCodeAt(0)-b.charCodeAt(0));
    return sortedArray.join("");
}