let selectElement = document.getElementById("select");
let isAction = false;
selectElement.addEventListener("change", () => {
  if (selectElement.value === "true") {
    isAction = true;
  } else if (selectElement.value === "false") {
    isAction = false;
  }
});

let options = select.options;

// 윗방향키

//////원 기준 좌표 찾기 부분

// 기준 박스
const box = document.querySelector("#box");
const circle = document.querySelector("#circle");
const moveValue = 50;

// 상대좌표
let relBoxTop = box.getBoundingClientRect().top;
let relBoxLeft = box.getBoundingClientRect().left;
let relBoxRight = box.getBoundingClientRect().right;
let relBoxBottom = box.getBoundingClientRect().bottom;

// 절대좌표
let windowLeft = window.screenX;
let windowTop = window.screenY;
let windowBottom = window.innerHeight;
let windowRight = window.innerWidth;
// 방향키 이벤트

// function isTrue() {
function btn1Click() {
  btn1Action();
}
function btn1Action() {
  let relCircle = circle.getBoundingClientRect();
  let circleWidth = relCircle.width;
  let top;
  if (isAction) {
    if (relCircle.top > relBoxTop) {
      top = relCircle.top - moveValue;
      if (relCircle.top - moveValue - circleWidth < relBoxTop) {
        top = relBoxTop;
      }
      circle.style.top = top + "px";
    }
  } else if (!isAction) {
    let absCircleY = window.pageYOffset + relCircle.top;
    top = absCircleY - moveValue;
    if (absCircleY - circleWidth < windowTop) {
      top = windowTop;
    }
    circle.style.top = top + "px";
  }
}

// 왼쪽 방향키
function btn2Click() {
  btn2Action();
}
function btn2Action() {
  let relCircle = circle.getBoundingClientRect();
  let circleWidth = relCircle.width;
  let left;
  if (isAction) {
    if (relCircle.x > relBoxLeft) {
      left = relCircle.x - moveValue;
      if (relCircle.x - moveValue < relBoxLeft) {
        left = relBoxLeft;
      }
      circle.style.left = left + "px";
    }
  } else if (!isAction) {
    let absCircleX = window.pageXOffset + relCircle.left;
    left = absCircleX - moveValue;
    if (absCircleX - circleWidth < windowLeft) {
      left = windowLeft;
    }
    circle.style.left = left + "px";
  }
}

// 아래방향키
function btn3Click() {
  btn3Action();
}
function btn3Action() {
  let relCircle = circle.getBoundingClientRect();
  let circleWidth = relCircle.width;
  let bottom;
  if (isAction) {
    if (relCircle.y < relBoxBottom) {
      bottom = relCircle.y + moveValue;
      if (relCircle.y + moveValue + circleWidth > relBoxBottom) {
        bottom = relBoxBottom - moveValue;
      }
      circle.style.top = bottom + "px";
    }
  } else if (!isAction) {
    let absCircleY = window.pageYOffset + relCircle.bottom;
    bottom = absCircleY;
    if (absCircleY + circleWidth > windowBottom) {
      bottom = windowBottom - moveValue;
    }
    circle.style.top = bottom + "px";
  }
}

// 오른쪽 방향키
function btn4Click() {
  btn4Action();
}
function btn4Action() {
  let relCircle = circle.getBoundingClientRect();
  let circleWidth = relCircle.width; //원의 지름
  let right; // 이동할 값 넣어주는 곳
  if (isAction) {
    if (relCircle.x < relBoxRight) {
      right = relCircle.x + moveValue;
      if (relCircle.x + moveValue + circleWidth > relBoxRight) {
        right = relBoxRight - moveValue;
      }
      circle.style.left = right + "px";
    }
  } else if (!isAction) {
    let absCircleX = window.pageXOffset + relCircle.right;
    right = absCircleX;
    if (absCircleX + circleWidth > windowRight) {
      right = windowRight - moveValue;
    }
    circle.style.left = right + "px";
  }
}
const btn = document.querySelectorAll(".btn");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function (num) {
    if (i === 0) {
      btn1Click();
    }
    if (i === 1) {
      btn2Click();
    }
    if (i === 2) {
      btn3Click();
    }
    if (i === 3) {
      btn4Click();
    }
  });
}
