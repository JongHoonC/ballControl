HTML, CSS 부분

1. 가장큰 초록색 네모 만들고, 노랑색 원까지 만든다. 단, 만들 때 잡기 쉽게 id 부여.
2. 하단에 방향키 만들고 querySelectorAll로 잡을거라 class명 같게 부여.
3. 유효성 검사는 select option을 사용해 드롭다운 구현.
4. css대충 알아볼 수 있게

JS 부분

1. 방향키에 keyup 이벤트와 click 이벤트 생성.

- 이벤트리스터로 키업 이벤트와 클릭 이벤트 생성.
- 방향키.이벤트리스터('클릭', 실행함수)
- 방향키.이벤트리스터('키업', 실행함수)

2. 원의 기준 좌표를 찾는다.O

- https://lpla.tistory.com/157 를 참고
- 네모에서는 상대좌표로 찾는다.
  - 원.getBoundingClientRect().top;
- window에서는 절대좌표로
  - window.pageYOffset + dnjs.getBoundingClientRect().top;
  - window의 좌표 찾기

3. 방향키마다 style.left, right, up, down 을 사용해 클릭 시 5px씩 움직이도록 한다.

- 위에서 만든 이벤트리스너 안에 style.left 이런 것들을 안에 넣는다.

4. 드롭다운 메뉴에 value 값을 받아서 메뉴마다 다른 행동을 할 수 있게 한다.

- if(value === 뭐시기 일때){함수 실행}

5. 유효성 검사가 true 일 때는 원의 활동 범위를 초록색 네모로 한다.
6. 유효성 검사가 false 일 때는 원의 활동 범위를 window로 한다.

hint.

window 에서는 절대좌표
네모에서는 상대좌표

node tree

문제점

1. true -> false 로 메뉴를 변경할 때 50px씩 이동하는것이 아닌 100px씩 이동

- 함수 호출이 중복으로 이루어져서 해당 현상이 발생한다.

해결방안

- 하나의 클릭으로 유효성 검사를 모두 제어하기
- 위에 addeventlistener 내에서 처리하기.

3. if 문으로 isTrue 일때와 isFalse 일때를 구분하지 못함. O

클릭했을 때 select에 change라는 이벤트리스너를 추가

만약 select의 value 값이 true 일 때
아래의 콘솔을 출력

value 값이 false 일 때는
아래의 콘솔을 출력

위 두개의 조건 모두 아닐 때
아래의 콘솔 출력
