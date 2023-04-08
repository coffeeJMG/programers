 const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
} 

function solution(letter) {
    let answer = ''
    let currentMorse ='';
    for( i= 0 ; i <letter.length; i++){
        const item = letter[i];
        if(item ===' '){                     // item 이 빈칸이면
            answer +=morse[currentMorse];    // 현재까지 쌓인 모스부호를 앤서에 저장
            currentMorse = '';               // 현재까지 쌓인 모스부호 초기화
        }else {
            currentMorse +=item;            // 빈칸이 아니라면 모스부호를 쌓는다.
        }
        
       }
    
    answer +=morse[currentMorse];
    return answer;
}