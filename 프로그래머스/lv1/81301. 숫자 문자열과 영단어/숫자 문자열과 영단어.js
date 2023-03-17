
function solution(s) {
    let obj = ['zero','one','two','three','four','five','six','seven','eight','nine']

    var answer = 0;
    let str=''
    let result=''
    
    for(i=0; i<s.length; i++){
        
        if(s.charCodeAt(i)>64 && s.charCodeAt(i)<124){
            str+=s[i]
           
            for(j=0; j<obj.length; j++){
                if(str===obj[j]){
                    result+=obj.indexOf(obj[j])
                    str=''
                }
            }
        }else{
            result+=s[i]
        }
    }
    console.log(result)
    
    return Number(result);
    
}

// 배열 돌면서 숫자가 아니면 str에 추가
// 숫자를 만나면 str에 쌓인 문자를 숫자로 바꾸고 str 초기화 