# Dongsu Park · Portfolio

노션에 정리해 둔 경력기술서와 업무 기록을 기반으로 만든 개인 포트폴리오 사이트입니다.
빌드 도구 없이 정적 HTML / CSS / JS로만 구성되어 GitHub Pages에 바로 배포됩니다.

## 구성

```
index.html                # 단일 페이지 (Hero · About · Career · Projects · Contact)
assets/css/style.css      # 스타일 (라이트/다크 테마, 반응형)
assets/js/data.js         # 프로필 · 스킬 · 경력 · 프로젝트 데이터
assets/js/main.js         # 렌더링, 필터, 프로젝트 상세 모달, 해시 라우팅
print.html                # PDF 생성용 인쇄 레이아웃 (assets/css/print.css, assets/js/print.js)
scripts/build-pdf.js      # print.html → assets/Dongsu_Park_Portfolio.pdf
scripts/build-pptx.js     # data.js → assets/Dongsu_Park_Portfolio.pptx (pptxgenjs)
assets/images/            # 로고, 배경 이미지, 아이콘
.nojekyll                 # GitHub Pages에서 Jekyll 처리 건너뛰기
```

## 과업(프로젝트) 추가·수정

`assets/js/data.js` 의 `projects` 배열에 객체를 추가한 뒤, `groups` 배열의 원하는 스토리(큰 프로젝트)의 `projects` 목록에 id 를 넣으면 단계와 상세 모달이 자동으로 생성됩니다. `groups` 의 순서와 각 `projects` 배열의 순서가 화면에 표시되는 순서입니다.

```js
{
  id: "unique-id",                 // #project/unique-id 로 딥링크
  org: "phi",                      // "phi" | "ajou"  (orgs 에 정의)
  title: "과업 제목",
  period: "2025.01 ~ 2025.06",
  category: ["Backend", "Infra"],  // 분류 필터에 사용
  summary: "한 줄 요약",
  oneLiner: "비전공자도 이해할 수 있는 쉬운 한 줄 설명",
  role: ["역할 1", "역할 2"],
  tech: ["FastAPI", "PostgreSQL"],
  highlights: ["성과 1"],
  links: [{ label: "사이트", url: "https://..." }]   // 선택
}
```

## PDF 포트폴리오

`print.html` 이 같은 데이터(`assets/js/data.js`)로 인쇄용 문서를 렌더링하며, 상단 메뉴의 **PDF 다운로드** 버튼은 `assets/Dongsu_Park_Portfolio.pdf` 를 내려받습니다.
내용을 수정한 뒤에는 PDF 를 다시 생성해 함께 커밋합니다 (Playwright + Chromium 필요).

```bash
node scripts/build-pdf.js
# 환경에 따라: PLAYWRIGHT_MODULE=<playwright 경로> CHROMIUM_PATH=<chromium 실행 파일> node scripts/build-pdf.js
```

## PPTX 포트폴리오

같은 데이터로 발표용 슬라이드(`assets/Dongsu_Park_Portfolio.pptx`)도 만들며, 상단 메뉴의 **PPTX 다운로드** 버튼으로 내려받습니다. 표지 · About · Career(기관별 1장) 다음에 프로젝트 그룹마다 표지 1장과 과업당 1장이 이어집니다.

```bash
npm install pptxgenjs      # 최초 1회
node scripts/build-pptx.js
```

## 로컬에서 보기

```bash
python3 -m http.server 8080
# http://localhost:8080
```

## GitHub Pages 배포

정적 파일이 저장소 루트에 있어 별도 빌드 없이 브랜치에서 바로 게시됩니다.

- **사용자 사이트로 게시 (권장)**: 저장소 이름을 `parkdongsu.github.io` 로 바꾸면 GitHub이 `main` 브랜치를 자동으로 게시합니다.
  주소: `https://parkdongsu.github.io/`
- **프로젝트 사이트로 게시**: Settings → Pages → Build and deployment → Source 를 **Deploy from a branch**, Branch 를 `main` / `/ (root)` 로 선택합니다.
  주소: `https://parkdongsu.github.io/portfolio/`

모든 경로가 상대 경로라 두 방식 모두 수정 없이 동작합니다. 게시 후 `main` 에 push 하면 자동으로 반영됩니다.
