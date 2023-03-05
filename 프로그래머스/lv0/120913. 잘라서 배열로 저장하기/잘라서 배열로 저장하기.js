function solution(my_str, n) {
    var answer = [];
    var newString ='';
    for(i=0; i<my_str.length; i++){
        var item = my_str[i];
        if(newString.length<n){
            newString+=item
        }else if(newString.length===n){
            answer.push(newString);
            newString=''+item;
            
        }
    }answer.push(newString);
    
    return answer;
}