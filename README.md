# 리액트 스터디

#### [1주차](#1주차) - 2021/1/15
* 리액트 개발 환경 구성, Babel, Webpack
#### [2주차](#2주차) - 2021/1/23
* JS 심화

---
### 1주차
- CRA(create-react-app) 사용하지 않고 리액트 개발 환경 구성하기
- 참고 https://www.youtube.com/watch?v=TkMpKCJEFB4
- 에러
  - 영상대로 따라 했지만 에러 발생
    - configuration The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment. You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
  - 해결 : 'mode' 추가 설정
  <br/><br/>
#### Babel이란?
  - JavaScript transpiler
    - 코드 변환 JS -> JS
    - 특정 브라우저나 플랫폼이 ES6+(최신 문법), ESNext(정식 버전이 아닌 출시될 다음 버전)를 이해하지 못할 때, JavaScript코드를 호환되는 코드로 변환한다.
      - TypeScript, JSX 등도 변환시켜 준다.
  - plugin : 코드 변환 규칙
  - preset : plugin의 모음
  <br/><br/>
- babel-cli사용해서 babel로 소스코드 빌드 해보고 해 본 결과 확인해보기
  - `npx babel src/code.js --presets=@babel/[실행할 preset] --plugins=@babel/[실행할 
    plugin]`
  <br/><br/>
- esmodules로 빌드 해보기 & commonjs로 빌드 해보기 
  - dist폴더 만들어서 결과 저장
    <br/>1. babel.config.js 파일 생성 및 plugin, preset 설정
    <br/>2.
    - `npx babel src/code.js` 설정한 plugin, preset 적용되어 cli에 출력
    - `npx babel src/code.js --out-file dist.js` 파일로 저장
    - `npx babel src/ --out-dir dist` 폴더 단위로 저장
 #### Webpack이란?
   - 프론트엔드 프레임워크에서 가장 많이 사용되는 모듈 번들러(Module Bundler)
     - Module Bundler : 웹 애플리케이션을 구성하는 자원(HTML, CSS, Javscript, Images 등)을 모두 각각의 모듈로 보고 이를 조합해서 병합된 하나의 결과물을 만드는 도구
   - 해결하고자 하는 문제
     - 자바스크립트 변수 유효 범위 문제
     - 브라우저별 HTTP 요청 숫자의 제약
     - Dynamic Loading & Lazy Loading 미지원
   - 단점
     - 높은 러닝 커브
   - Mode란?
     - Webpack의 결과물을 바꾸는 실행 모드
     - development
       - 개발자들이 좀 더 보기 편하게 웹팩 로그나 결과물을 보여준다.
     - production
       - 성능 최적화를 위해 기본적인 파일 압축 등의 빌드 과정이 추가된다.
     - none
       - 모드 설정 안함
     ##### ref - <a href="https://joshua1988.github.io/webpack-guide/" target="_blank">웹팩 핸드북</a>
     
 ---
### 2주차
### var, const, let 차이
### var 키워드
  - ES5까지 변수를 선언할 수 있는 유일한 방법은 var키워드를 사용하는 것이었다.
### var 키워드의 문제점
#### 1) 변수 중복 선언 허용
  ```javascript
  var x = 1;
  var x = 100;

  console.log(x); // 100
  ```
  - 중복 선언이 허용되면 의도치 않게 선언된 값이 변경되는 부작용이 발생한다.
#### 2) 함수 레벨 스코프<br/>
  - var 키워드는 오로지 함수의 코드 블록만을 지역 스코프로 인정한다.
  - 따라서 함수 코드 블록을 제외한 코드블록(if, for, switch 등)에서 var키워드로 선언하면 전역 변수가 된다.
  - 이로 인해 전역 변수를 남발할 가능성을 높인다.
 #### 3) 변수 호이스팅
  - 변수 호이스팅이란
      ```javascript
        console.log(score); // undefined
        var score;
      ```
    - 자바스크립트 엔진은 코드를 실행(런타임)하기 전에 **평가과정**을 거친다.
      - 평가과정 : 코드에 있는 모든 선언문을 찾아 실행한다.
      위 코드에서는 score라는 변수 선언을 하는 것을 말한다.
    - 평가과정에서 선언문을 실행했기 때문에 코드 내 어디든 변수를 참조할 수 있다.
    - 단, ES6에 도입된 let, const, arrow function, class를 사용한 선언문은 호이스팅이 발생하지 않는 것처럼 동작한다.(Temporal Dead Zone[TDZ])
    - 위와 같은 원리로
      변수를 먼저 참조할 수 있고 뒤에서 변수 선언을 하는 것을
      끌어올려진 것처럼 동작한다고 하여 변수 호이스팅이라고 부른다. 
  - 따라서 var 키워드로 선언한 변수는 변수 호이스팅이 발생하는데,
    이로 인해 프로그램 흐름과 맞지 않아 가독성을 떨어뜨리고 오류를 발생시킬 여지가 있다.
    
  ### let 키워드
  - var 키워드의 단점을 보완하기 위해 ES6에서 let과 const를 도입
- 변수 중복 선언 금지
- 블록 레벨 스코프
    - 모든 블록에서 지역 스코프를 가질 수 있다.
- 변수 호이스팅
  - let 키워드는 평가과정에서 선언 단계만 진행되고, 초기화 단계는 런타임 중에 변수 선언문에 도달했을 때 실행된다.
    또한 TDZ구간 동안 변수를 참조할 수 없다.
    > Temporal Dead Zone[TDZ] : 스코프의 시작 지점(해당 스코프 첫 줄)부터 초기화 지점(변수 선언문)까지 변수를 참조할 수 없는 구간
  - 위와 같이 이유 때문에 호이스팅이 발생하지 않는다. 정확히는 발생하지 않는 것처럼 보인다.

 ### Const 키워드
  - const 키워드의 특징은 let 키워드와 대부분 동일하다.
  - let 키워드와의 차이점
      - 선언과 동시에 초기화를 해야 한다.
      - 재할당 금지
        - 한 번 참조값을 가지면 변경할 수 없다.
        - 하지만 객체의 경우 프로퍼티를 변경할 수 있다.
  ##### ref - <a href="http://www.yes24.com/Product/Goods/92742567" target="_blank">모던 자바스크립 Deep Dive 15장</a>



      
 









  
 
