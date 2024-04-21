function solution(s, n) {
    var answer = '';
    
    for(let i=0; i<s.length; i++){
        
        let item = s[i]
        
        item =Number(item.charCodeAt())
        
        if(item >=65 && item <= 90){
            console.log(item, "변환 전 ")
                if(item + n>90){
                    item = item +n -26
                }else {
                    item +=n
                }
            console.log(item, "변환 후 " )
                answer += String.fromCharCode(item)
                
        }else if(item >=97 && item <= 122){
                console.log(item, "변환 전 ")
                if(item + n>122){
                    item = item +n -26
                }else {
                    item +=n
                }
            console.log(item, "변환 후 " )
                answer += String.fromCharCode(item)
                
        }
        else {
            answer+=s[i]
        }
        
    }
    
    return answer;
}