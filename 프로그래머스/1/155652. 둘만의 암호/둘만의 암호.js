function solution(s, skip, index) {
    const skipSet = new Set(skip.split('').map(char => char.charCodeAt(0)));
    let result = '';

    for (let i = 0; i < s.length; i++) {
        let charCode = s[i].charCodeAt(0);

        let shifts = 0;
        while (shifts < index) {
            charCode++;

            // 'z'를 넘어가면 'a'로 돌아옴
            if (charCode > 122) {
                charCode = 97;
            }

            // skip에 포함된 문자가 아니라면 이동을 카운트
            if (!skipSet.has(charCode)) {
                shifts++;
            }
        }

        result += String.fromCharCode(charCode);
    }

    return result;
}


// 알파벳 소문자 아스키코드 97~122 
// console.log('A'.charCodeAt())   => 65
// String.fromCharCode(65, 66, 67) => A,B,C

// skip 을 아스키코드 번호로 변환
// s 순회하면서 각 인덱스를 +5하면서 중간에 skip의 번호가 있으면 +1추가
// 만일 122 넘어가는 숫자가 있다면 -25

