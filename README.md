# Place-Note Monorepo

PlaceNote은 사용자가 특정 지역 내에서 원하는 장소(식당, 카페, 문화시설 등)를 검색하고 저장하는 개인화된 장소 관리 웹 서비스입니다.
지도 기반으로 쉽게 탐색하고, 나만의 장소를 기록하고 공유할 수 있습니다.

## 해결하고자 하는 문제

- 저장하고 싶은 장소가 흩어져 있어서 관리가 어려움
- 기존 지도 서비스는 개인 맞춤형 저장·관리 기능 부족
- 친구와 장소 정보를 쉽게 공유하고 추천받기 어려움

## 목표

- 지역 기반 장소 저장 및 관리 서비스 제공
- 개인 맞춤형 장소 추천 및 기록 기능 제공
- 장소 공유 및 소셜 추천 기능 지원

이 프로젝트는 Next.js 기반의 사용자 앱(`client`)과 디자인 시스템(`ui`)으로 구성되어 있으며, `pnpm`, `TurboRepo`, `Storybook`을 활용해 효율적인 개발 환경을 구축했습니다.

---

## 프로젝트 구조

```
place-note/
├── apps/
│   └── client/              # 사용자용 Next.js 애플리케이션
├── packages/
│   ├── api/                 # 공통 API 로직
│   ├── ui/                  # UI 컴포넌트 및 디자인 시스템 (Storybook 포함)
│   └── config/              # 공통 설정 모듈
├── turbo.json               # Turborepo 파이프라인 설정
├── pnpm-workspace.yaml      # pnpm 워크스페이스 설정
├── package.json             # 루트 스크립트 및 개발 의존성
```

## 실행 방법

1. 의존성 설치
   `pnpm install`
2. 모든 패키지의 개발 서버 실행
   `pnpm run dev`
3. 각 패키지 별 실행 (개별 디버깅 시)

- client (Next.js 앱)
  `pnpm --filter client dev`
- packages (Storybook)
  `pnpm --filter ui dev`

## 주요 기술 스택

|     영역      |           기술           |
| :-----------: | :----------------------: |
| 패키지 매니저 |     pnpm (Workspace)     |
| 앱 프레임워크 |  Next.js 15 (React 19)   |
| 디자인 시스템 | Storybook 8, React, Vite |
|   빌드 관리   |        TurboRepo         |
|    스타일     |       Tailwind CSS       |
|  타입 시스템  |        TypeScript        |
|  린팅/포맷팅  |     ESLint, Prettier     |
