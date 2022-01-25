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
- Babel이란?
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
 ---
### 2주차










  
 
