## 📋 프로젝트 주소

[배포 사이트](https://weebur-coding-test-theta.vercel.app)

## 🧰 기술 스택

- Next.js 14
- React 18
- TypeScript
- React Query
- React Hook Form
- Zod
- TailwindCSS
- shadcn/ui

## 🚀 시작하기

### 필수 요구사항

- Node.js 20 버전 이상
- Yarn 패키지 매니저 사용
- 루트 폴더에 .env 파일 설정

```bash
# 패키지 설치
yarn

# 개발 서버 실행
yarn dev

# 빌드 및 실행
yarn build
yarn start
```

## 📝 개발 설계 과정

### 1. 상품 리스트 페이지

- view 타입(리스트/그리드)은 첫 진입 시 50% 확률로 랜덤하게 쿠키에 저장, 24시간 동안 유지
- 무한 스크롤은 API의 skip 파라미터와 Intersection Observer를 활용해 구현

### 2. 상품 생성 페이지

- 상품 생성 페이지는 Parallel Routes를 사용하여 모달로 오버레이되도록 구현
- React Hook Form과 Zod를 이용해 유효성 검증
- 가격/할인율 입력 UX: 숫자 단위(콤마 포함)로 렌더링, 제출 시 number 타입으로 변환 처리

## 🐞 개발 중 경험한 이슈 & 해결 과정

### 1. View 타입 SSR/CSR 하이드레이션 이슈

- 상황:
  - 상품 리스트 초기 데이터는 React Query의 prefetchInfiniteQuery로 SSR 처리
  - View 타입 쿠키를 클라이언트에서만 저장하면, 서버와 클라이언트의 렌더 결과가 달라(list, grid 스타일 때문) 하이드레이션 에러가 발생
- 해결:
  - middleware에서 쿠키(view)가 없을 때 랜덤하게 결정해 쿠키에 저장
  - 서버에서 해당 쿠키를 읽어 SSR에도 동일한 view 타입이 반영되도록 처리해, SSR과 CSR이 일치하도록 함. ([참고한 이슈](https://github.com/vercel/next.js/issues/67814))

### 2. 셀렉트 박스(Form 데이터 연결 문제)

- 상황:
  - shadcn/ui의 Select 컴포넌트를 사용했으나, React Hook Form의 폼 데이터와 바로 연결되지 않아 선택한 값이 submit에 반영되지 않음.
- 해결:
  - React Hook Form의 Controller를 사용해 Select 컴포넌트의 값과 Form 데이터를 연결
  - 커스텀 컴포넌트도 상태/유효성 검증이 가능해짐
