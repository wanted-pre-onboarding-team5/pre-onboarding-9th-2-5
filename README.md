# 원티드 프리온보딩 프론트엔드 인턴십 2주차 기업과제

## 목차

[1. 프로젝트 소개](#1-프로젝트-소개)
[2. 구현 결과](#2-구현-결과)
[3. 과제 수행 과정](#3-과제-수행-과정)
[4. Best Practice 산출 전략 및 근거](#4-Best-Practice-산출-전략-및-근거)
[5. 팀 협업 방식](#5-팀-협업-방식)

<br>

## 1. 프로젝트 소개

![메인 프로젝트 이미지](https://i.imgur.com/lWC98ke.jpg)

<p align="center">
  <a href="https://lambent-churros-a47ede.netlify.app/">🔗 배포 URL</a>
</p>

> Travel Tech 스타트업인 <U>Like A Local의 기업 과제</U>로, 여행 상품을 필터링할 수 있고 장바구니에 저장할 수 있는 사이트를 구현한 프로젝트입니다. 7명의 팀원들이 각자 과제를 구현하고, Pull Request를 보내 코드리뷰를 진행하였으며 최종적으로 Best Practice를 선정하였습니다.

- **진행 기간**: 2023.03.07 ~ 2023.03.10(4일)
- **프로젝트 실행 방법** :

```
$ git clone git@github.com:wanted-pre-onboarding-team5/pre-onboarding-9th-2-5.git
$ cd wanted-pre-onboarding-9th-2-5
$ npm install
$ npm run dev
```

<br>

## 2. 구현 결과

### (1) 메인 페이지

|                                           리스트 나열, 모달창, 예약 기능                                            |
| :-----------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/59612529/224309049-0a5dc98a-3c59-4bad-ad18-5fc4aaa63121.gif" /> |

|                                                      필터 기능                                                      |
| :-----------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/59612529/224309158-5fbd5b69-73e6-43af-a1ae-b6419fa9f7f5.gif" /> |

**메인 페이지 요구사항** [ISSUE#2](https://github.com/wanted-pre-onboarding-team5/pre-onboarding-9th-2-5/issues/2)

- [x] 1. mock_data.json을 활용하여 상품 리스트를 나열한다.
- [x] 2. 리스트 아이템 클릭시 모달창을 띄운다.
- [x] 3. 리스트 아이템의 모달창의 예약 버튼을 클릭하면 장바구니에 저장된다.
- [x] 4. 아이템 필터 기능을 구현한다.
- [x] 5. / 경로로 진입 시 /main으로 리다이렉트한다.

<br>

### (2) 여행 상품 장바구니 페이지

|                                     장바구니 리스트, 수량 변경, 삭제, 총 금액                                      |
| :----------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/59612529/224309176-39d761b1-9548-4ab4-8f71-37f3d288326d.gif"/> |

**장바구니 페이지 요구사항** [ISSUE#3](https://github.com/wanted-pre-onboarding-team5/pre-onboarding-9th-2-5/issues/3)

- [x] 1. 장바구니에 저장한 여행 상품의 리스트를 보여준다.
- [x] 2. 여행 상품의 구매 수량을 변경할 수 있다.
- [x] 3. 여행 상품을 삭제할 수 있다.
- [x] 4. 장바구니에 저장한 여행 상품의 총 결제액 수를 계산하여 보여준다.

<br>

## 3. 과제 수행 과정

### 요구사항 분석

- 주어진 요구사항에서 해석의 여지가 있는 부분을 토론을 통해 구체화하는 작업을 거쳤습니다.
  - 가격 필터링의 경우, 데이터가 가지고 있는 가격의 범위를 토대로 3가지로 나눠서 구현하기로 결론을 지었습니다.
- 두 개의 페이지를 기준으로 큰 단위의 이슈로 나누었습니다.
  - 메인페이지에서는 가장 큰 기능인 상품 리스트를 기준으로 해서 그 하위에 있는 리스트 아이템들의 기능에 대해 고민하였습니다.
  - 예약상품 페이지의 경우 예약상품의 CRUD 과정을 기준으로 나누었습니다.
- 상품 예약 버튼의 경우 위치가 명확하게 명시되어 있지 않아 토론을 거쳐 리스트가 아닌 모달창에 위치하도록 하였습니다.

<br>

### 컴포넌트 설계

![image](https://user-images.githubusercontent.com/85419343/224008296-655c992c-7a4c-4752-9d3e-b3534ef387a6.png)

<br>

### 폴더 구조

```
src
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┣ 📂OrderSummary
 ┃ ┣ 📂Reservation
 ┃ ┗ 📂Travel
 ┣ 📂constants
 ┣ 📂hooks
 ┣ 📂mocks
 ┣ 📂pages
 ┣ 📂providers
 ┃ ┣ 📂Reservation
 ┃ ┣ 📂Travel
 ┣ 📂router
 ┃ ┣ 📂loaders
 ┣ 📂types
 ┣ 📂utils
 ┣ 📜App.tsx
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

### 사용한 라이브러리

<div>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white">
  <img src="https://img.shields.io/badge/Chakra UI-319795?style=for-the-badge&logo=Chakra UI&logoColor=white">
  <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">
  <img src="https://img.shields.io/badge/husky-5D4F85?style=for-the-badge&logo=husky&logoColor=white">
</div>
 
<div style='margin-top:10px;'>  
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white"> 
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white"> 
</div>
<br>

- **React** : 요구사항의 필수 스택인 react를 사용하였습니다.
- **Vite** : vite를 사용하여 프로젝트 툴체인을 구성하였습니다.
- **TypeScript** : 안정적인 프로그래밍을 위해 타입스크립트를 사용하였습니다.
- **Chakra UI** : 필수 스택인 Chakra UI의 기능을 바탕으로 개발하였습니다.
- **react-router-dom** : 직관적인 API로 SPA를 구축할 때 라우팅을 수월하게 할 수 있어 사용했습니다.
- **eslint** : 팀원간 코드 컨벤션을 통일하기 위해 사용했습니다.
- **prettier** : 팀원간 코드 포맷을 통일하기 위해 사용했습니다.
- **husky** : git hook의 사용을 강제하여 전원이 동일한 컨벤션을 유지하기 위해 사용했습니다.

<br>

## 4. Best Practice 산출 전략 및 근거

### Best Practice 산출 전략

- 분석한 요구사항을 토대로 큰 단위의 이슈 2개로 나눴으며, 팀원 모두 요구사항을 구현하여 2회의 PR을 정해진 시간까지 보냈습니다.
  - 1회차 PR: 3/9(목) 오전 8시까지 (EPIC ISSUE 1)
  - 2회차 PR: 3/9(목) 오후 5시까지 (EPIC ISSUE 2)
- PR message에는 Pull Request 템플릿에 맞춰 자신이 구현한 로직과 의도를 설명하여 팀원들이 이해하기 쉽도록 하였습니다.
- 팀원들의 코드를 리뷰하며 자신의 의견 및 질문을 코멘트로 남겼습니다.
- 마지막 코드 리뷰를 마친 후 자신이 생각하는 Best Practice를 뽑고 그 근거를 Notion에 정리했으며, 토론을 통해 최종 Best Practice를 선정했습니다.
- 선정된 Best Practice를 main 브랜치에 merge하였고, 팀원들과 함께 리팩토링을 진행하여 코드 퀄리티를 높였습니다.

### Best Practice 산출 근거

- 코드에서 사용되는 문자열, 숫자 등의 값을 상수화하여 가독성과 유지보수성을 높이고, 배열일 경우 TypeScript의 const assertion을 활용하여 Type checking의 정확도를 높였습니다.
- 에러가 발생하거나 존재하지 않는 경로로 접근한 경우 Error 페이지를 보여주며, 다시 Main 페이지로 돌아갈 수 있도록 버튼을 배치해 유저의 편의성을 높였습니다.
- 장바구니에 아이템을 추가할 때 이미 있는 상품일 때와 잘 담겼을 때 토스트 메시지를 보여주며 유저에게 적절한 피드백을 제공했습니다.
- 필터링 등의 비즈니스 로직을 별도의 유틸 함수로 분리하여 로직의 재사용성과 코드의 가독성을 높였습니다.
- 멀리 떨어져 있는 컴포넌트와 상태를 공유해야 할 경우 Context API를 사용하여 props drilling을 해결하였습니다.
- 컴포넌트를 적절한 단위로 분리하고 폴더에 정리하여 구조화하였으며, 중복되는 코드를 최소화하고 재사용성을 높였습니다.
- 변수의 Type을 선언하여, 에러를 방지하고 개발 생산성을 향상시켰습니다.

<br>

## 5. 팀 협업 방식

### 🏃🏻‍♂️ 팀 프로젝트 진행 방식

#### 1. Discord 채널을 활용한 주기적인 회의 진행

- 주기적인 회의를 통해 서로의 의견을 나누고, 다음 할 일에 대한 계획을 수립하였습니다.
- 기능을 구현하는데 필요한 스택을 논의한 뒤 사용 라이브러리를 정하였습니다
- 분류에 따라 팀원 개개인이 과제를 수행했습니다.
- 리뷰 시간을 정하여 해당 시간에 PR에서 코드리뷰를 했습니다.
- 투표를 통해 Best Practice를 선정한 후, 다른 과제 중 좋았던 구현들을 의논하여 추가하였습니다.

- [이슈](https://github.com/wanted-pre-onboarding-team5/pre-onboarding-9th-2-5/issues?q=is%3Aissue+is%3Aclosed)와 [PR메시지](https://github.com/wanted-pre-onboarding-team5/pre-onboarding-9th-2-5/pulls)를 활용하여 문서화하였습니다.

#### 2. Notion을 활용한 팀 프로젝트 과정 문서화

- 진행한 프로젝트의 문서화를 위해 notion을 활용하여 모든 구성원이 의견을 남기고, 진행 과정을 정리하였습니다.

#### 3. [요구사항 분석 후 Issue 생성](https://github.com/wanted-pre-onboarding-team5/pre-onboarding-9th-2-5/issues)

- 프로젝트 개발의 요구사항을 분석, 세부적으로 나누어 issue를 생성하였습니다.

#### 4. [Pull requests와 코드 리뷰](https://github.com/wanted-pre-onboarding-team5/pre-onboarding-9th-2-5/pulls)

- 세부적 issue를 두 개의 큰 단락으로 나누어 메인, 장바구니와 Best Practice, refactoring으로 총 네 번의 PR과 코드 리뷰를 진행하였습니다.

<br>

### 🤙 팀 컨벤션

<br>

<details>
<summary>💬<strong>커밋 컨벤션</strong></summary>
    
<div markdown="1">
    
#### 💬 Commit message

```tsx
[#Issue Number] Type: commit title

Description
```

#### 💬 Commit Type and Description

| Type     | Description                                                                        |
| -------- | ---------------------------------------------------------------------------------- |
| Feat     | 새로운 기능 추가                                                                   |
| Design   | CSS 등 UI 디자인 변경                                                              |
| Refactor | 코드 리팩토링                                                                      |
| Fix      | 버그 수정                                                                          |
| Docs     | 문서 작업, 수정                                                                    |
| Style    | 코드 스타일 및 포맷 변경(코드 자체의 변경은 없는 경우, 함수/ 변수명 변경 포함)     |
| Test     | 테스트 코드 작성, 테스트 리팩토링(프로덕션 코드 변경 X)                            |
| Chore    | 소스 코드를 건들지 않는 작업 - 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우 |
| Init     | 초기화                                                                             |
| Build    | 빌드 관련 파일 수정                                                                |
| CI       | CI 관련 설정 수정                                                                  |
| Rename   | 파일 혹은 폴더명을 수정하거나 옮기는 작업만 수행                                   |
| Remove   | 파일을 삭제하는 작업만 수행                                                        |

</div>
</details>

<br>

<details>
<summary><strong>💬 eslint/prettier 설정</strong></summary>
<div markdown="1">
 
####  💬 .eslintrc.cjs
 
```js
 module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    'no-var': 'error',
    'no-multiple-empty-lines': 'error',

    'no-console': ['warn', { allow: ['error'] }],
    eqeqeq: 'error',
    'dot-notation': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '@/*',
            group: 'internal',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

},
};

```

####  💬 .prettierrc.cjs

```

'use strict';

module.exports = {
bracketSpacing: true,
singleQuote: true,
tabWidth: 2,
trailingComma: 'all',
printWidth: 100,
endOfLine: 'auto',
useTabs: false,
semi: true,
jsxSingleQuote: true,
arrowParens: 'always',
};

```

</div>
</details>

<br>

<details>
<summary>💬<strong>이슈 전략</strong></summary>  - 이슈는 요구사항 분석에 작성한 리스트를 토대로 크게 메인페이지와 장바구니 페이지의 기능들을 구현하는 것을 EPIC이슈로 두고 하위 요구사항들을 세부이슈로 만들었습니다.

![스크린샷 2023-03-08 오전 9.57.46.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/84e2f5d9-2fe0-4fc8-a31d-7d451a7f46a2/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-03-08_%EC%98%A4%EC%A0%84_9.57.46.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230310T132622Z&X-Amz-Expires=86400&X-Amz-Signature=0795a4bb123f1520580bb688a939d41406e57d3ab5232fd51b95206ddcbe2781&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25EC%258A%25A4%25ED%2581%25AC%25EB%25A6%25B0%25EC%2583%25B7%25202023-03-08%2520%25EC%2598%25A4%25EC%25A0%2584%25209.57.46.png%22&x-id=GetObject)

- **EPIC 이슈 -** PR 보낼 때 멘션하는 용도, 브랜치에 표시되어야 합니다. **(Epic/#1-chadseok**)
- **요구사항 이슈 -** 커밋에 명시하는 용도입니다. (ex. [**#5**] Feat: 모달창 띄우기 기능)
</details>
<br>

### 👤 팀 멤버
|   강승훈   |   김은우   |   박준수   |   박한나   |   석창환   |   이자윤   |   조현오   |
|:--------:|:--------:|:--------:|:--------:|:--------:|:----------:|:----------:|
|[@seunghoonKang](https://github.com/seunghoonKang)|[@eunoo1995](https://github.com/eunoo1995)|[@junsu1220](https://github.com/junsu1220)|[@hannaax](https://github.com/hannaax)|[@chadseok](https://github.com/chadseok)|[@jaypedia](https://github.com/jaypedia)|[@letsjo](https://github.com/letsjo)|
|<img src="https://avatars.githubusercontent.com/seunghoonKang" width="80">|<img src="https://avatars.githubusercontent.com/eunoo1995" width="80">|<img src="https://avatars.githubusercontent.com/junsu1220" width="80">|<img src="https://avatars.githubusercontent.com/hannaax" width="80">|<img src="https://avatars.githubusercontent.com/chadseok" width="80">|<img src="https://avatars.githubusercontent.com/jaypedia" width="80">|<img src="https://avatars.githubusercontent.com/letsjo" width="80">|
<br>
```
