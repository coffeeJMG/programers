function solution(ingredient) {
    let stack = [];
    let answer = 0;

    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]); // 스택에 재료를 추가

        // 스택의 마지막 4개가 [1, 2, 3, 1]인지 확인
        if (stack.length >= 4 &&
            stack[stack.length - 4] === 1 &&
            stack[stack.length - 3] === 2 &&
            stack[stack.length - 2] === 3 &&
            stack[stack.length - 1] === 1) {
            // 패턴이 맞으면 마지막 4개 제거
            stack.splice(-4, 4);
            answer++; // 햄버거 개수 증가
        }
    }

    return answer; // 완성된 햄버거 개수 반환
}