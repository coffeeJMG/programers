function solution(s) {
  let answer = [0, 0];
  let sLen = 0;

    // s의 길이가 1보다 클때까지 반복
  while (s.length > 1) {
    sLen = s.length;
      
     // 0을 제거
    s = s.split("0").join("");
      
     // 반복횟수 추가
    answer[0]++;
      
     // 제거할 0의 개수 추가
    answer[1] += (sLen - s.length);
    s = s.length.toString(2);
  }

  return answer;
}