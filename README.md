# Dongsu Park · Portfolio

노션에 정리해 둔 경력기술서와 업무 기록을 기반으로 만든 개인 포트폴리오 사이트입니다.
빌드 도구 없이 정적 HTML / CSS / JS로만 구성되어 GitHub Pages에 바로 배포됩니다.

## 구성

```
index.html                # 단일 페이지 (Hero · About · Career · Projects · Contact)
assets/css/style.css      # 스타일 (라이트/다크 테마, 반응형)
assets/js/data.js         # 프로필 · 스킬 · 경력 · 프로젝트 데이터
assets/js/main.js         # 렌더링, 필터, 프로젝트 상세 모달, 해시 라우팅
assets/images/            # 로고, 배경 이미지, 아이콘
.github/workflows/deploy.yml  # GitHub Pages 배포 워크플로
```

## 과업(프로젝트) 추가·수정

`assets/js/data.js` 의 `projects` 배열에 객체를 추가하면 카드와 상세 모달이 자동으로 생성됩니다.

```js
{
  id: "unique-id",                 // #project/unique-id 로 딥링크
  org: "phi",                      // "phi" | "ajou"  (orgs 에 정의)
  title: "과업 제목",
  period: "2025.01 ~ 2025.06",
  category: ["Backend", "Infra"],  // 분류 필터에 사용
  summary: "한 줄 요약",
  role: ["역할 1", "역할 2"],
  tech: ["FastAPI", "PostgreSQL"],
  highlights: ["성과 1"],
  links: [{ label: "사이트", url: "https://..." }]   // 선택
}
```

## 로컬에서 보기

```bash
python3 -m http.server 8080
# http://localhost:8080
```

## GitHub Pages 배포

1. GitHub 저장소 **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions** 로 선택합니다.
2. `main` 브랜치에 push 하면 `.github/workflows/deploy.yml` 이 자동으로 배포합니다.
3. 배포 주소: `https://parkdongsu.github.io/portfolio/`

> 저장소 이름을 `parkdongsu.github.io` 로 바꾸면 `https://parkdongsu.github.io/` 루트 주소로 서비스됩니다. 모든 경로가 상대 경로라 별도 수정 없이 동작합니다.
