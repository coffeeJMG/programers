function solution(array) {
    var soltedArray = array.sort((a,b) => a-b);   //정렬
    var beforeNum = -1;
    var repeatCnt = 0;
    var choi = -1;
    var choiRepeatCnt=0;
    var isDupChoi = false;
    
     for(cnt=0; cnt<array.length; cnt ++){
        if(beforeNum !== array[cnt]){           //이 전 번호 확인
            repeatCnt = 1;
        } else{
            repeatCnt = repeatCnt +1;            // 현재 값 추가
        }
        if (repeatCnt === choiRepeatCnt){       // 최빈 값이라면
            if(choi !== array[cnt]){
             isDupChoi = true;
            }
        }
        if (repeatCnt > choiRepeatCnt){            // 현재 빈도수가 더 크다면
            choi = array[cnt];
            choiRepeatCnt = repeatCnt;
            isDupChoi = false;
        }
            beforeNum = array[cnt];                 // 이전넘버 초기화 
        }
        if(isDupChoi) {
        return -1 ;
      }
        return choi;
}
