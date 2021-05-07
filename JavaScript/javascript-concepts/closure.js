// https://poiemaweb.com/js-closure

function outerFunc() {
    var x = 10;
    var innerFunc = function () { console.log(x); };
    return innerFunc;
  }

/**
 *  함수 outerFunc를 호출하면 내부 함수 innerFunc가 반환된다.
 *  그리고 함수 outerFunc의 실행 컨텍스트는 소멸한다.
 */
var inner = outerFunc();
inner(); // 10

//클로저는 반환된 내부함수가 자신이 선언됐을 때의 환경(Lexical environment)인 스코프를 기억하여 자신이 선언됐을 때의 환경(스코프) 밖에서 호출되어도 그 환경(스코프)에 접근할 수 있는 함수를 말한다. 
//내부함수가 유효한 상태에서 외부함수가 종료하여 외부함수의 실행 컨텍스트가 반환되어도, 외부함수 실행 컨텍스트 내의 활성 객체(Activation object)(변수, 함수 선언 등의 정보를 가지고 있다)는 내부함수에 의해 참조되는 한 유효하여 내부함수가 스코프 체인을 통해 참조할 수 있는 것을 의미한다.
//클로저는 자신이 생성될 때의 환경(Lexical environment)을 기억해야 하므로 메모리 차원에서 손해를 볼 수 있다. 하지만 클로저는 자바스크립트의 강력한 기능으로 이를 적극적으로 사용해야 한다.
//클로저가 가장 유용하게 사용되는 상황은 현재 상태를 기억하고 변경된 최신 상태를 유지하는 것이다.

<!DOCTYPE html>
<html>
<body>
    <button class="toggle">toggle</button>
    <div class="box" style="width: 100px; height: 100px; background: red;"></div>

    <script>
        var box = document.querySelector('.box');
        var toggleBtn = document.querySelector('.toggle');

        var toggle = (function () {
        var isShow = false;

        // ① 클로저를 반환
        return function () {
            box.style.display = isShow ? 'block' : 'none';
            // ③ 상태 변경
            isShow = !isShow;
        };
        })();
        // ② 이벤트 프로퍼티에 클로저를 할당
        toggleBtn.onclick = toggle;
    </script>
</body>
</html>

//이처럼 클로저는 현재 상태(위 예제의 경우 .box 요소의 표시 상태를 나타내는 isShow 변수)를 기억하고 이 상태가 변경되어도 최신 상태를 유지해야 하는 상황에 매우 유용하다.
//만약 자바스크립트에 클로저라는 기능이 없다면 상태를 유지하기 위해 전역 변수를 사용할 수 밖에 없다. 
//전역 변수는 언제든지 누구나 접근할 수 있고 변경할 수 있기 때문에 많은 부작용을 유발해 오류의 원인이 되므로 사용을 억제해야 한다.