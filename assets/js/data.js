/* =========================================================
   Portfolio data
   - 노션("박동수 이력", 경력기술서, 파이 디지털 헬스케어 업무 페이지)을 기반으로 정리
   - 필드: track(과업 구분) · team(참여 인원) · description(원문 설명) · images(스크린샷) 는 선택 항목
   - 새 과업을 추가하려면 PROJECTS 배열에 객체를 하나 더 넣으면 됩니다.
   ========================================================= */

window.PORTFOLIO = {
  profile: {
    name: "박동수",
    nameEn: "Dongsu Park",
    roles: ["System Engineer", "Full-Stack Engineer", "Healthcare Data Engineer"],
    tagline:
      "필요한 일을 먼저 찾고, 역할의 경계에 머무르기보다 직접 만들고 부딪혀 끝까지 해결하는 개발자입니다.",
    intro: [
      "병원 인프라·DB 운영에서 시작해 OMOP CDM·HL7 FHIR 기반 의료데이터 표준화, 데이터 파이프라인 구축, LLM 기반 의료 서비스 개발까지 헬스케어 IT 전반의 시스템을 설계·개발·운영해왔습니다. 인프라부터 데이터, 서비스, AI까지 직접 다루며 의료 현장의 문제를 기술로 해결하고, 컨설팅·교육까지 다양한 역할을 수행해왔습니다.",
      "저의 가장 큰 강점은 주인의식을 가지고 맡은 일을 끝까지 책임지는 태도입니다. 회사가 필요로 하는 일이라면 업무 범위를 제한하지 않고 직접 부딪혀 해결하며, 그 과정에서 회사의 성장과 함께 제 역량도 키워왔습니다. 첫 직장에서도 인프라 운영부터 개발 외 다양한 업무까지 적극적으로 맡아 경험을 넓혔고, 이러한 태도와 성과를 인정받아 현 회사에 스카웃을 받아 합류하게 되었습니다.",
      "한번 맡은 일은 어떻게든 잘 마무리하고 싶어해 회사와 고객의 입장을 함께 고려하고, 필요한 경우 양쪽을 조율하며 주어진 환경에서 최선의 결과를 만들어내는 것을 중요하게 생각합니다. 앞으로도 필요한 일을 먼저 찾고, 끝까지 책임지며, 그 과정에서 함께 성장하는 사람이 되고자 합니다."
    ],
    email: "dongsu2005@naver.com",
    location: "경기도 광명시",
    github: "https://github.com/parkdongsu",
    careerStart: "2018.07"
  },

  // 노션 "박동수 이력" Skills 분류 체계를 따르고, 이후 업무에서 추가된 항목을 덧붙임
  skills: [
    {
      group: "언어 · 웹 · 백엔드",
      sub: [
        { label: "언어", items: ["Python", "R", "JavaScript / TypeScript", "SQL"] },
        { label: "웹 · 백엔드", items: ["React", "Next.js", "Node.js", "FastAPI", "Nginx"] }
      ]
    },
    {
      group: "인프라 · 클라우드",
      sub: [
        { label: "컨테이너", items: ["Docker", "Docker Swarm", "Docker Compose"] },
        { label: "인프라 자동화", items: ["Ansible", "Terraform"] },
        { label: "클라우드", items: ["AWS"] }
      ]
    },
    {
      group: "데이터베이스 · 파이프라인",
      sub: [
        { label: "데이터베이스", items: ["MSSQL", "PostgreSQL", "MySQL", "MongoDB", "Elasticsearch"] },
        { label: "데이터 파이프라인", items: ["Embulk", "Airflow"] }
      ]
    },
    {
      group: "모니터링",
      sub: [
        { label: "로그 · 대시보드", items: ["ELK Stack", "Beats", "Grafana"] },
        { label: "메트릭 · 트레이싱", items: ["Prometheus", "Loki", "Tempo"] }
      ]
    },
    {
      group: "형상 관리 · CI / CD",
      sub: [
        { label: "형상 관리", items: ["GitHub", "GitLab"] },
        { label: "CI / CD", items: ["GitHub Actions", "GitLab CI", "AWS CodeDeploy", "AWS CodePipeline"] }
      ]
    },
    {
      group: "의료 데이터 표준 · LLM",
      sub: [
        { label: "의료 데이터 표준", items: ["HL7 FHIR", "OMOP CDM / ATLAS"] },
        { label: "LLM", items: ["ChatGPT", "Claude", "vLLM / Hugging Face"] }
      ]
    }
  ],

  careers: [
    {
      org: "파이 디지털 헬스케어",
      role: "인공지능사업부 과장 · Full-Stack Engineer",
      period: "2022.11 ~ 현재",
      note: "이직 사유: 아주대학교 의료정보학과에서 근무하던 중, 학과 내 의대 교수님의 제안을 받아 현 직장으로 이직",
      intro: [
        "세브란스에 도입되는 시스템을 중심으로 개발·운영·유지보수부터 컨설팅과 교육까지 프로젝트 전반의 업무를 수행했습니다.",
        "주요 개발 업무로는 데이터레이크 시스템의 데이터 이관 자동화, EMR 데이터 표준화, EMR 데이터를 기반으로 LLM이 의료서식 초안을 작성하는 서비스 플랫폼 개발, HL7 FHIR 기반 의료데이터 변환 시스템의 설계·개발 등이 있습니다. 특히 특정 기관에 종속된 시스템 구축에 그치지 않고, 기관별 데이터 구조와 업무 환경의 차이를 고려하면서도 다양한 의료기관에 적용할 수 있도록 HL7 FHIR 기반의 표준화·재사용성·확장성을 고려하여 서비스를 기획하고 설계·개발했습니다.",
        "또한 세브란스 기존 시스템의 문제점 분석 및 외부 업체 연계, Cloud 도입에 따른 장·단점 및 비용 분석 등 시스템 구축과 운영 전반에 대한 컨설팅을 수행했습니다. 세브란스 구성원을 대상으로 HL7 FHIR 개념 및 실습 교육을 진행했으며, 사내 서버 및 협업 도구 구축·관리, 제안서 및 기술 문서 작성 등 프로젝트 수행에 필요한 다양한 업무도 함께 담당했습니다."
        ]
    },
    {
      org: "아주대학교 의료원 의료정보학과",
      role: "연구원 (개발팀장) · System Engineer",
      period: "2018.07 ~ 2022.10",
      intro: [
        "학과 인프라 전반의 관리 업무를 담당하며 물리 서버·스토리지 구매 및 구축부터 서버실 관리, DB 구축·운영, 모니터링 시스템 구축, WEB 서비스 설계·개발, 제안서 작성까지 개발자로서 다양한 업무를 경험했습니다. 또한 병원 의료데이터의 표준화와 활용을 위해 관리하고 있던 CDM을 기반으로 ATLAS와 연동되는 임상·중개연구 플랫폼을 구축하고, CDM을 활용한 데이터톤·심포지엄의 분석 환경 구축 및 운영까지 담당했습니다. 특히 서버실 구축 과정에서 UPS 도입과 방음 공사를 진행하고, 스토리지 배터리 문제를 직접 파악해 교체하는 등 인프라 운영 과정에서 발생하는 다양한 문제를 직접 해결하며 실무 경험을 쌓았습니다.",
        "퇴사 전에는 이러한 운영 경험과 주요 업무 노하우를 글과 스크린샷 중심으로 총 63개의 노션 페이지(A4 약 350장 분량)로 체계적으로 문서화하고, 학과 구성원을 대상으로 인수인계를 진행했습니다. 단순한 업무 절차뿐만 아니라 실제 운영 과정에서 발생했던 문제와 해결 방법까지 함께 정리하여 이후에도 활용할 수 있도록 했습니다.",
        "퇴사 이후에도 기존 구성원들과 지속적으로 소통하며 인수인계 및 운영 관련 지원을 요청받는 등, 업무에 대한 책임감을 바탕으로 지속적인 관계를 유지하고 있습니다."
        ]
    }
  ],

  // 프로젝트 필터에 쓰이는 조직 키
  orgs: {
    phi: "파이 디지털 헬스케어",
    ajou: "아주대학교 의료원"
  },

  groups: [
    {
      id: "fhir",
      title: "EMR 데이터 FHIR 변환 통합 관리 시스템 설계 및 개발",
      plain:
        "병원마다 다른 모양으로 저장된 진료 기록을, 전 세계가 함께 쓰는 표준 규격(FHIR)으로 바꿔 주는 서비스를 개발했습니다. 개발자가 아니어도 병원 데이터를 표준으로 쉽게 변환할 수 있도록 서비스를 구성했습니다. 이 방식으로 특허도 받았습니다.",
      projects: ["fhir-converter"]
    },
    {
      id: "llm",
      title: "LLM 기반 의료 기록지 자동 생성 플랫폼",
      plain:
        "의사가 직접 작성하던 의료기록을 AI가 초안으로 생성해 작성 시간을 줄이는 서비스입니다. 데이터 전·후처리와 LLM 활용 구조를 설계하고 개발했습니다.",
      projects: ["llm-record-platform", "llm-record-agent"]
    },
    {
      id: "edu",
      title: "세브란스 대상 HL7 FHIR 교육",
      plain:
        "의료 데이터 표준(FHIR)이 무엇인지, 어떻게 쓰는지를 병원 직원분들께 가르치는 강의를 진행했습니다. 이론 및 실습 커리큘럼을 직접 짜고 실제 의료데이터를 FHIR로 변환하고 활용하는 실습까지 단계적으로 교육했습니다.",
      projects: ["fhir-education"]
    },
    {
      id: "sev-platform",
      title: "세브란스 데이터 플랫폼 구축·컨설팅",
      plain:
        "병원의 데이터와 시스템 환경을 분석하고, 요구사항에 맞는 데이터 활용 방안과 시스템 구축 방향을 제안했습니다. 필요에 따라 적합한 외부 연계 업체를 소개하고 기술·일정 조율 역할을 하고 직접 시스템을 설계·개발하여 제공하는 등, 데이터 활용을 위한 컨설팅부터 실제 구축까지 경험했습니다.",
      projects: ["dbp-consulting", "datalake", "isp-pmo", "datalake-poc"]
    },
    {
      id: "server",
      title: "학과 서버실 인프라 구축·운영 & 서버 모니터링 시스템 구축",
      plain:
        "연구실 서버 약 20대와 스토리지가 구축된 서버실을 4년 이상 주도적으로 관리·운영했습니다. 개별 서버 상태를 확인해야 하는 불편함을 개선하기 위해 통합 모니터링 화면과 장애·이상 상태 알림 기능을 직접 구축했습니다.",
      projects: ["server-ops", "monitoring"]
    },
    {
      id: "cdm",
      title: "OMOP CDM 관리 및 ATLAS 설치·운영 & 심포지엄·데이터톤 환경 구축",
      plain:
        "OMOP CDM 데이터를 관리하고, 그 데이터를 클릭만으로 분석할 수 있는 도구(ATLAS)를 설치해 연구자들에게 제공했습니다. OHDSI 국제 심포지엄과 매년 열리는 CDM 데이터 분석 대회(데이터톤)의 실습 환경도 직접 준비했습니다.",
      projects: ["db-admin", "cdm-atlas", "datathon-env", "hira-cdm"]
    },
    {
      id: "rtrod",
      title: "개방형 임상 중개 연구 플랫폼 개발",
      plain:
        "병원 밖 연구자가 병원 데이터 접근 없이 분석할 수 있게 하는 플랫폼을 개발했습니다. 연구자가 만든 분석 프로그램을 병원 안 서버에서 대신 실행하고 결과만 돌려줘 개인정보가 밖으로 나가지 않도록 구성했습니다.",
      projects: ["rtrod"]
    },
    {
      id: "etc",
      title: "기타",
      plain:
        "위의 주요 업무엔 속하지 않지만 의미 있었던 과업들로 챗봇 관리 도구 설계, AWS 아키텍처 설계 등이 있습니다.",
      projects: ["chatbot-console", "sdp-education", "safe-center", "server-hw-ops", "cdm-support", "rehosp-plp", "crawling-tool", "etl-explorer"]
    }
  ],
  projects: [
    /* ---------------- 파이 디지털 헬스케어 ---------------- */
    {
      id: "llm-record-platform",
      oneLiner: "환자 기록을 읽은 AI가 의료 서식 초안을 대신 써 주는 서비스의 뼈대(서버와 데이터 흐름)를 설계하고 개발했습니다.",
      org: "phi",
      title: "LLM 기반 의료 기록지 자동 생성 플랫폼 구축 · 운영",
      period: "2024.05 ~ 2026.05",
      category: ["AI / LLM", "Backend", "Infra"],
      summary:
        "EMR 데이터를 FHIR로 표준화하고 LLM으로 의료 기록 서식을 자동 생성하는 플랫폼의 아키텍처·인프라·백엔드를 담당.",
      description: [
        "의료 분야 LLM을 실제 EMR에 연동해 현장 업무에 활용한 국내 최초 사례입니다. 이미 효율적으로 돌아가던 진료 업무 사이에서 '서식 작성'이라는 키워드를 잡아 업무 효율을 높이자는 제안으로 병원의 승인을 받았고, 4개월 만에 개발을 마쳐 운영을 시작했습니다.",
        "폐쇄망 환경에서 모델 업체와 협업해 학습을 진행하고 오픈 모델도 함께 활용하면서, LLM 서빙과 운영 전반에 대한 경험을 쌓았습니다."
      ],
      images: [
        { src: "assets/images/projects/llm-record-process-1.jpg", alt: "의무기록 자동 생성 프로세스 구성도", caption: "의무기록 자동 생성 프로세스 — EMR의 'AI 생성' 버튼 하나로 기존 문서 작성 흐름 안에서 AI가 동작" }
      ],
      role: [
        "EMR → 게이트웨이 → 데이터 표준화 → 전처리 → LLM → 후처리로 이어지는 데이터 파이프라인 설계",
        "서비스별 단일 컨테이너 구조에서 멀티 컨테이너(Nginx, MSA 기반 Scaling) 구조로 확장 설계",
        "스트레스 테스트, 보안 취약점 점검 대응 및 로깅·모니터링 기반 vLLM 추론 성능·시스템 개선 수행"
      ],
      tech: ["Python", "FastAPI", "vLLM", "Docker", "Nginx", "Redis", "PostgreSQL", "MongoDB", "Elasticsearch", "HL7 FHIR", "Grafana"],
      highlights: [
        "세브란스 3개 병원에 5종 서식, 1개 병원에 1종 서식 적용 (운영 배포)",
        "실제 병원 업무에 LLM을 적용하고 운영하며 AI 서비스의 개발·운영 경험을 축적"
      ]
    },
    {
      id: "llm-record-agent",
      oneLiner: "서식 생성 파이프라인을 AI Agent 구조로 다시 설계해 확장하기 쉽게 만들고, 검진 데이터·OCR 연동을 병행했습니다.",
      org: "phi",
      title: "서식 생성 파이프라인 AI Agent 고도화 및 확장 사업",
      period: "2026.06 ~ 현재",
      category: ["AI / LLM", "Backend", "Monitoring"],
      summary:
        "늘어나는 전·후처리 요구사항에 대응하기 위해 서식 생성 파이프라인을 Kafka + AI Agent 구조로 재설계하고, 검진 데이터·OCR 연동 등 확장 사업을 병행.",
      description: [
        "서식 작성에 대한 요구사항이 늘어나면서 전·후처리 항목이 계속 추가되었고 코드도 점점 복잡해져, 2026년부터 서식 생성 파이프라인을 AI Agent 구조로 고도화하기로 결정했습니다.",
        "전·후처리 영역을 Tool 단위로 나누어 구분하고, 이후 일부 판단 영역은 Agent에게 맡길 수 있도록 구조를 잡았습니다. 이 과정에서 검진 데이터, OCR 연동 같은 확장 포인트를 찾아 세브란스와 신규 계약을 진행했습니다."
      ],
      role: [
        "AI Agent 고도화: 서식 생성 파이프라인을 Kafka + AI Agent 구조로 재설계하고, 확장을 고려해 Tool을 MCP 규격에 맞춰 개발",
        "AI Agent 설계 일부와 프로젝트 리드를 맡아 팀원과 함께 설계·개발 진행",
        "Prometheus · Loki · Tempo · Grafana 기반 모니터링 설계",
        "OCR 시스템 연동, 건강검진 데이터 자동 생성 프로젝트 병행 진행"
      ],
      tech: ["Python", "AI Agent / MCP", "Kafka", "vLLM", "Prometheus", "Loki", "Tempo", "Grafana", "Docker"],
      highlights: [
        "파이프라인을 확장 가능한 구조로 고도화하며 AI 기반 서비스의 아키텍처 설계 및 실무 경험을 축적"
      ]
    },
    {
      id: "fhir-converter",
      oneLiner: "병원마다 다른 진료 기록을 세계 표준 형식으로 바꿔 주는 변환 도구를 만들었고, 이 방식으로 특허를 받았습니다.",
      org: "phi",
      title: "EMR 데이터 FHIR 변환 통합 관리 시스템 설계 및 개발",
      period: "2024.06 ~ 현재",
      category: ["Backend", "Frontend", "AI / LLM"],
      summary:
        "병원마다 다른 의료데이터를 국제 표준인 HL7 FHIR 형식으로 변환하고 관리하는 웹 기반 통합 시스템. 변환 방식에 대한 특허 출원 및 등록 완료.",
      description: [
        "병원마다 다른 의료데이터를 국제 표준인 HL7 FHIR 형식으로 변환하고 관리할 수 있는 웹 기반 통합 시스템을 설계·개발했습니다.",
        "기존에는 FHIR 변환 과정에 필요한 여러 도구를 개별적으로 활용해야 했는데, 이를 하나의 시스템으로 통합했습니다.",
        "의료기관의 데이터 구조와 변환 요구사항을 고려해 확장성 있게 시스템을 설계했으며, 변환 방식에 대한 특허를 출원하고 등록까지 완료했습니다."
      ],
      images: [
        { src: "assets/images/projects/fhir-workbench-1.jpg", alt: "FHIR 변환 통합 워크벤치 사용 가이드 화면", caption: "사용 가이드 화면 — 빠른 시작 6단계(리소스 등록 → 변환 규칙 학습 → 보조 데이터 구성 → 변환 룰 정의 → FHIR Server 저장 → IG 발행)" }
      ],
      role: [
        "전체 아키텍처 설계부터 React·FastAPI 기반 프론트엔드·백엔드 개발 및 배포·운영",
        "자체 변환 Rule(DSL)을 설계하여 의료데이터의 FHIR 변환 및 매핑 기능 구현",
        "Profile·Terminology 관리, 변환 결과 Validation, FHIR Server 연동, IG 발행 등 FHIR 변환 전 과정 통합",
        "변환 이력·권한·감사 로그 등 운영 및 관리 기능 개발"
      ],
      tech: ["Python", "FastAPI", "React", "HL7 FHIR", "HAPI FHIR", "SUSHI / IG Publisher", "MariaDB", "MongoDB", "Redis", "Docker Compose", "XML"],
      highlights: [
        "룰 기반 EMR → FHIR 변환 방식 특허 출원 및 등록",
        "FHIR 변환·검증·발행 과정을 하나의 시스템으로 통합하여 업무 효율성과 재사용성 향상"
      ]
    },
    {
      id: "chatbot-console",
      oneLiner: "재택 치료를 받는 소아 환자의 보호자가 병원과 소통할 수 있는 AI 챗봇 시스템을 설계하고, 챗봇 시나리오와 지식을 관리하는 관리 도구까지 개발했습니다.",
      org: "phi",
      title: "소아의료 챗봇 관리 도구 설계",
      period: "2026.06 ~ 현재",
      category: ["Backend", "Frontend", "Infra"],
      summary:
        "소아의료 AI 챗봇의 시나리오·의도·응답을 관리하는 관리 도구의 아키텍처, DB, 모니터링 설계를 주도.",
      images: [
        { src: "assets/images/projects/chatbot-scenario-1.jpg", alt: "챗봇 시나리오 플로우 편집 화면", caption: "시나리오 플로우 편집 화면 — 노드 단위로 대화 흐름을 설계하고 LLM·RAG 사용 여부를 지정" }
      ],
      role: [
        "오픈소스(Botpress) 활용 vs 신규 개발 비교 후 신규 개발 방향 제안",
        "Next.js + FastAPI + PostgreSQL + Redis + Nginx + Docker Compose 서비스 아키텍처 설계",
        "의도(Intent)·시나리오(Node/Edge)·응답·대화 이력·감사 로그 중심의 DB 모델링 및 DDL/ERD 작성",
        "Prometheus / Loki / Tempo / Grafana 기반 메트릭·로그·트레이스 통합 모니터링 설계",
        "LangGraph 기반 멀티테넌트 AI Agent에 의도·시나리오·응답 등 지식을 배포하고, 운영자가 GUI에서 챗봇 시나리오를 직접 설계·시뮬레이션할 수 있는 관리 도구 개발"
      ],
      tech: ["Next.js", "TypeScript", "FastAPI", "LangGraph", "PostgreSQL", "Redis", "Docker Compose", "Nginx", "GitLab CI", "Grafana", "Loki", "Tempo"],
      highlights: []
    },
    {
      id: "datalake",
      oneLiner: "병원 데이터를 매일 자동으로 옮기고, 문제가 생기면 바로 알려 주는 시스템을 만들고 운영하고 있습니다.",
      org: "phi",
      title: "연세 세브란스 데이터레이크 ETL·모니터링 구축 및 운영",
      period: "2023.12 ~ 2024.03 (구축) · 2025.08 ~ 현재 (운영·유지보수)",
      category: ["Data / ETL", "Infra", "Monitoring"],
      summary:
        "폐쇄망 환경에서 Embulk + Airflow 기반 ETL 반자동화 시스템과 ELK + Grafana 모니터링 서비스를 구축하고 이후 유지보수 사업을 수행.",
      images: [
        { src: "assets/images/projects/datalake-etl-1.jpg", alt: "ETL · Monitoring 시스템 서비스 구성도", caption: "ETL · Monitoring 시스템 구성도 — Airflow가 일정에 따라 Embulk를 실행해 데이터를 옮기고, ELK·Grafana 대시보드와 알림톡으로 상태를 전달" }
      ],
      role: [
        "Embulk + Airflow 조합의 데이터 이관 시스템 구축 (DDL 생성 → Embulk 쿼리 생성 → 적용 → 실행 → 인덱스·제약조건 등 후처리 적용 자동화)",
        "대용량 테이블을 기간·키 기준으로 분할 이관해 실패 시 재실행 범위와 부담을 줄이고, 일부 컬럼은 증분 CRUD(추가·수정·삭제 반영)가 가능하도록 이관 로직 구성",
        "EKG / CDM / 주요 CDW / 암 종 데이터 등 대상별 증분 적재 설계 및 SSIS 대비 이관 속도 비교",
        "ELK Stack, Beats, Grafana 기반 서버·DB·로그 모니터링 구축, 보안성 검토 대응",
        "이관 현황 대시보드 구축: 대상별 이관 건수·마지막 적재 일시·소요 시간을 Grafana에서 한눈에 확인할 수 있도록 구성",
        "카카오톡 알림톡 연동: 이관 실패·지연, 서버 이상 등 알림을 담당자에게 실시간 전송",
        "기존 CDM 이관(Achilles, ATLAS Results) 지원, 서버 구성 문제점 및 개선 제언 정리",
        "유지보수: Elasticsearch 인덱스 삭제 배치, 대시보드 추가·수정, 생체신호 데이터 운영 방안, 과업지시서 산출물 점검"
      ],
      tech: ["Embulk", "Airflow", "Docker", "MSSQL", "Elasticsearch", "Kibana", "Beats", "Grafana", "Python"],
      highlights: ["단기 개선 사업 완료 보고서 작성 및 발표"]
    },
    {
      id: "isp-pmo",
      org: "phi",
      title: "의료원 인프라·가상화 환경 컨설팅을 통한 CMP 도입 지원",
      period: "2025 ~ 현재",
      category: ["Infra", "Cloud"],
      track: "컨설팅 · PMO",
      oneLiner: "병원의 인프라·가상화 환경을 분석해 업체를 추천하고, 의료원과 업체 사이에서 PMO 역할을 수행했습니다.",
      summary:
        "병원의 인프라·가상화 환경을 분석해 적합한 CMP 업체를 검토·추천하고, 의료원과 외부 업체 간 기술 요구사항·일정·이슈를 조율하는 PMO 및 기술 지원 역할을 수행.",
      role: [
        "ISP 컨설팅 후속 과업의 PMO로 참여하여 외부 컨설팅 업체와 의료원 간 일정 및 주요 이슈 조율",
        "의료원의 인프라·가상화 환경과 요구사항을 정리하여 CMP 업체에 전달하고 기술 검토 지원",
        "CMP 업체 선정 과정에서 기술 요건을 파악·정리하고 업체의 기술 내용을 의료원 담당자가 이해하기 쉽게 설명 및 조율",
        "의료원과 CMP 업체 간 주요 기술·일정·요구사항의 실무 커뮤니케이션 창구 역할 수행"
      ],
      tech: ["ISP", "PMO", "CMP", "Cloud", "가상화"],
      highlights: [
        "의료원 환경에 적합한 CMP 업체 검토·추천 및 도입 과정 지원"
      ]
    },
    {
      id: "datalake-poc",
      org: "phi",
      title: "연세의료원 데이터레이크 제안을 위한 내부 PoC 수행",
      period: "2026.09 ~ 현재",
      category: ["Data / ETL", "Infra", "AI / LLM"],
      track: "제안 준비 · 내부 PoC",
      oneLiner: "의료원 데이터레이크 구축 방향을 제안하기 위해 데이터 수집부터 표준화·거버넌스·AI 활용까지 이어지는 시범 환경을 직접 구축했습니다.",
      summary:
        "기존 데이터 이관·모니터링 경험을 바탕으로 의료원 환경에 적용 가능한 On-Premise 기반의 데이터레이크 아키텍처를 설계하고, 오픈소스를 활용해 실제 동작하는 내부 PoC를 구축했습니다. 또한 데이터 흐름과 서비스 상태를 확인할 수 있는 관리 콘솔을 개발해 제안 시연 환경을 구성했습니다.",
      images: [
        { src: "assets/images/projects/datalake-poc-1.jpg", alt: "데이터레이크 PoC 콘솔 대시보드", caption: "PoC 콘솔 대시보드 — 16개 서비스 상태, Iceberg 테이블(bronze / silver / gold / deid), 품질 검사 결과, 수집 → Lakehouse → 표준화 → 거버넌스 → AI로 이어지는 데이터 흐름과 최근 적재 이력" }
      ],
      role: [
        "데이터 수집·적재·표준화·거버넌스·AI 활용을 고려한 데이터레이크 아키텍처 설계",
        "오픈소스 기반 데이터 수집 및 Lakehouse 환경 구축",
        "데이터 품질 관리와 표준화, 접근제어 등 데이터 거버넌스 구성",
        "데이터 흐름·서비스 상태·적재 이력을 확인할 수 있는 관리 콘솔 개발",
        "제안서 및 시연을 위한 PoC 환경과 시나리오 구성"
      ],
      tech: ["Apache Iceberg", "Nessie", "Trino", "Dremio", "Apache NiFi", "Kafka", "Flink", "MinIO", "HAPI FHIR", "Orthanc", "OMOP CDM", "OpenMetadata", "Keycloak", "OpenSearch", "Milvus", "MLflow", "Docker"],
      highlights: [
        "데이터 수집부터 AI 활용까지 연결되는 데이터레이크 구축 방향을 가상 데이터 기반으로 검증",
        "아키텍처 설계 및 PoC 구축을 직접 수행하며 제안 역량 확보"
      ]
    },
    {
      id: "cdm-support",
      oneLiner: "병원 연구 데이터 도구(ATLAS)가 커져도 잘 돌아가도록 구조를 제안하고 문제 해결을 지원했습니다.",
      org: "phi",
      title: "연세 세브란스 CDM 기술지원",
      period: "2023.07 ~ 2023.10",
      category: ["Data / ETL", "Cloud"],
      summary:
        "운영 중인 ATLAS의 Results 스키마 구조를 확장성을 고려해 제안하고 문제 해결을 지원하며, Cloud ATLAS 재구축과 SSL 적용을 수행.",
      role: [
        "확장성을 고려한 ATLAS Results 스키마 구조 제안 및 문제 해결 지원",
        "Cloud ATLAS 재설치·유지보수(LDAP, DB Instance 교체) 및 SSL 인증서 적용"
      ],
      tech: ["OMOP CDM", "ATLAS", "Docker", "PostgreSQL", "LDAP", "SSL"],
      highlights: []
    },
    {
      id: "dbp-consulting",
      oneLiner: "병원이 데이터를 어디에 어떻게 저장할지, 서버를 어떻게 나눠 쓸지 조언했습니다.",
      org: "phi",
      title: "의료 빅데이터 플랫폼(데중병) 1.5단계 컨설팅",
      period: "2023.03 ~ 2023.04",
      category: ["Cloud", "Infra"],
      summary:
        "연세 세브란스 데이터 중심 병원 사업의 데이터 저장소 선정과 온프레미스 가상 서버 배분 플랫폼 PoC에 대한 컨설팅 지원.",
      role: [
        "S3 vs On-premise Storage 비용·성능 비교 및 제안안 작성",
        "온프레미스 서버를 분할해 연구자에게 가상 서버(인스턴스)를 배분하는 플랫폼의 PoC 환경 분석, 프록시 구성과 분석용 기본 패키지 등 제안"
      ],
      tech: ["AWS S3", "온프레미스 스토리지", "가상화 / 인스턴스", "Nginx", "R", "Docker"],
      highlights: []
    },
    {
      id: "safe-center",
      oneLiner: "연구자가 병원 데이터를 안전하게 신청하고 쓰는 웹 화면을 개발했습니다.",
      org: "phi",
      title: "원주세브란스 안심활용센터 플랫폼 Frontend 개발",
      period: "2023.01 ~ 2023.04",
      category: ["Frontend"],
      summary:
        "기관 보유 데이터를 연구 목적으로 안전하게 활용하기 위한 안심활용센터 웹 서비스의 Frontend 전반을 개발.",
      role: [
        "React(CRA) + Material-UI 기반 화면 개발",
        "동적 신청서 작성, 좌석 관리 등 전체 화면 기능 구현",
        "매뉴얼 작성 및 결과 보고서 보완"
      ],
      tech: ["React", "CRA", "Material-UI", "JavaScript"],
      highlights: [
        "사용자 업무 흐름을 고려한 Frontend 전반 구현",
        "서비스 운영에 필요한 매뉴얼 및 결과 보고서를 작성·보완하여 운영 및 사용자 활용 지원"
      ]
    },
    {
      id: "server-hw-ops",
      org: "phi",
      title: "GPU 서버 · NAS 등 하드웨어 및 서버 소프트웨어 관리",
      period: "2025 ~ 현재",
      category: ["Infra"],
      track: "서버 관리 업무",
      oneLiner: "회사와 의료원의 GPU 서버, 저장 장치, 신규 입고 서버를 설치하고, 그 안의 소프트웨어와 설치 매뉴얼을 관리하고 있습니다.",
      summary:
        "GPU 서버, NAS, 의료원 입고 서버 등 하드웨어와 서버 내 소프트웨어의 설치·관리 및 매뉴얼 관리를 담당.",
      role: [
        "GPU 서버, NAS, 의료원 입고 서버 등 하드웨어 설치 및 관리",
        "서버 내 소프트웨어 설치·구성 및 설치 매뉴얼 작성·관리"
      ],
      tech: ["Linux", "GPU 서버", "NAS", "Docker"]
    },
    {
      id: "sdp-education",
      oneLiner: "의대생 실습을 위해 버튼 하나로 학생마다 클라우드 컴퓨터가 자동으로 만들어지는 구조를 설계했습니다.",
      org: "phi",
      title: "SDP 교육용 AWS 아키텍처 설계",
      period: "2023.06 ~ 2023.09",
      category: ["Cloud", "Backend"],
      summary:
        "의대생·행사 참가자용 SDP(Secure Data Platform) 실습 환경을 위해, 교육용 포털이 AWS SDK API로 학생별 EC2 분석 인스턴스를 자동 생성·삭제하고 접속 정보를 배포하는 AWS 아키텍처를 설계.",
      description:
        "학생 계정 관리, 데이터 접근 권한 관리, 과제 제출·샘플 데이터 배포라는 요구사항을 바탕으로 AWS 실습·행사용 아키텍처를 설계했습니다. 교육용 Portal EC2가 AWS SDK API로 R·Python·딥러닝 환경이 준비된 AMI 기반 EC2를 학생 수만큼 한 번에 생성·삭제(Auto Scaling)하고, 생성된 인스턴스의 원격 접속 정보 파일을 포털에서 학생별로 내려받아 접속하는 구조입니다. 학생 데이터는 S3 버킷(과제 제출용 업로드 전용 / 데이터 배포용)과 버킷 정책으로 권한을 분리하고, VPC Endpoint·VPN·CloudTrail로 접근 경로와 감사 로그를 구성했습니다.",
      images: [
        { src: "assets/images/projects/sdp-architecture.jpg", alt: "SDP 교육용 AWS 아키텍처 구성도", caption: "SDP 교육용 AWS 아키텍처 구성도 — 교육용 Portal EC2가 AWS SDK API로 학생별 EC2를 조정" }
      ],
      role: [
        "요구사항 정의: 학생(AD) 계정·행사용 임시 계정 관리, 학생별 인스턴스 접속 권한 분리, S3 업로드·다운로드 권한 설계",
        "AWS SDK API 기반 EC2 자동 생성·삭제 및 Auto Scaling 구조와 접속 정보 파일 배포 흐름 설계, IAM Policy 정의",
        "학생용 AMI(R, Python, Deep Learning) 기반 일괄 생성·삭제 방식과 RDP / Docker 컨테이너 / GPU 인스턴스 할당 방식 검토",
        "공유 스토리지 대안(S3, EFS, FSx, 웹 업로드) 비교와 버킷 정책 설계, VPC Endpoint·VPN·CloudTrail 모니터링 구성",
        "SDP 포털 연계 방안 및 용역 과제 일정·계약 협의 지원"
      ],
      tech: ["AWS EC2", "AWS SDK", "Auto Scaling", "AMI", "S3", "IAM", "VPC Endpoint", "CloudTrail", "EFS / FSx"],
      highlights: []
    },
    {
      id: "fhir-education",
      oneLiner: "병원 직원분들께 의료 데이터 표준(FHIR)을 이론과 실습으로 가르치는 수업을 설계하고 진행하고 있습니다.",
      org: "phi",
      track: "교육 · 세브란스 의무기록팀",
      title: "세브란스 대상 HL7 FHIR 교육",
      period: "2026.05 ~ 현재",
      category: ["Education", "AI / LLM"],
      summary:
        "세브란스 의무기록팀(보건의료정보관리사)을 대상으로 한 인재원 교육 과정의 커리큘럼을 설계하고 HL7 FHIR 기초부터 FHIR 변환 도구 실습까지 강의를 담당.",
      description: [
        "비개발자인 의무기록팀이 병원 데이터를 FHIR 표준으로 이해하고 직접 변환·검증할 수 있도록 교육 과정을 설계하고 진행했습니다.",
        "FHIR 기본 구조부터 주요 임상 Resource, 병원 Core Profile 정의, FHIR 변환 도구 활용까지 이어지는 8시간의 이론 과정을 구성했으며, 이후 실습과 바이브 코딩 프로젝트로 구성된 60시간의 심화 과정을 설계해 교육을 진행했습니다."
      ],
      images: [
        { src: "assets/images/projects/fhir-edu-1.jpg", alt: "HL7 FHIR 교육 강의 목차 — FHIR 소개, Resource·Profile·Terminology 이해", caption: "강의 목차 (이론) — FHIR 소개부터 Resource · Profile · Terminology, 구성요소 간 관계까지" },
        { src: "assets/images/projects/fhir-edu-2.jpg", alt: "HL7 FHIR 교육 강의 목차 — Profiling 개념부터 진료 사례 연결까지", caption: "강의 목차 (Profiling) — 실제 병원 서식으로 핵심 Profile 8종을 정의하고 하나의 진료 사례로 연결 (기관명 마스킹)" }
      ],
      role: [
        "HL7 FHIR 기초 교육 (3h): 비개발자를 대상으로 Resource, Profile, ValueSet, CodeSystem, ConceptMap의 구조와 국제 표준 → KR-Core → 병원 표준으로 이어지는 적용 흐름 교육",
        "FHIR 임상 활용 교육 (3h, 공동 강의): SNOMED CT 결과를 FHIR로 연결하는 방법과 Condition, Observation, Procedure, MedicationRequest를 활용한 외래 시나리오 모델링 실습",
        "세브란스 Core Resource 정의 (1h): KR-CDI·KR-Core를 기반으로 병원 Core Resource 정의 및 적용 방법 교육",
        "FHIR 변환 도구 활용 교육 (1h): 자체 개발한 FHIR 변환 도구의 주요 기능과 데이터 변환·검증 과정 소개 및 실습",
        "실습 및 바이브 코딩 과정 (60h): FHIR 변환 도구를 활용한 데이터 변환 실습, LLM API를 활용한 의무기록 질 향상 서비스 개발 프로젝트 진행"
      ],
      tech: ["HL7 FHIR", "KR-Core", "KR-CDI", "SNOMED CT", "LLM"],
      highlights: [
        "전체 교육 과정 설계부터 실습 환경 구성, 교육 콘텐츠 개발 및 강의까지 FHIR 교육 전반을 직접 수행"
      ]
    },

    /* ---------------- 아주대학교 의료원 ---------------- */
    {
      id: "rtrod",
      oneLiner: "연구자의 분석 프로그램을 병원 안에서 대신 실행하고 결과만 돌려주는 안전한 연구 플랫폼을 개발했습니다.",
      org: "ajou",
      track: "국책 과제 수행 · 연구 중심 병원",
      title: "개방형 임상 중개 연구 플랫폼 개발",
      period: "2021.01 ~ 2022.06",
      team: "2명",
      category: ["Backend", "Cloud", "Infra"],
      summary:
        "연구 중심 병원 과제. 사용자의 R 분석 패키지를 병원 내부 서버에서 Docker로 실행하고 결과만 반출해 데이터 접근을 제한하면서 분석 결과를 공유하는 플랫폼.",
      description:
        "AWS Cloud 환경의 서버에 구축된 Web 환경의 시스템으로, 사용자의 R 기반 분석 패키지를 HTTPS 프로토콜로 병원 내부 서버로 보내면 분석 패키지를 Docker로 감싸 실행한 후 분석 결과만 반출해 병원 데이터 접근을 제한하며 분석 결과를 공유하는 플랫폼을 개발했습니다.",
      images: [
        { src: "assets/images/projects/rtrod-1.jpg", alt: "개방형 임상 중개 연구 플랫폼 AWS 아키텍처 구성도", caption: "AWS 아키텍처 및 CI/CD 구성도" },
        { src: "assets/images/projects/rtrod-2.jpg", alt: "연구 플랫폼 프로젝트 관리 화면", caption: "프로젝트 관리 화면" }
      ],
      role: [
        "Node.js 기반 분석·Batch Backend 서버 개발",
        "AWS Cloud 아키텍처 설계 (CloudFront, Lambda, SES, Cognito, S3, EC2, RDS, Route53, ACM)",
        "분석 패키지 설계 → 반출 프로세스 정의 및 로직 개발",
        "Docker를 활용한 분석 컨테이너 실행 환경 구축",
        "GitHub Actions + AWS CodeDeploy 기반 CI/CD 구성"
      ],
      tech: ["Node.js", "React", "Nginx", "Docker", "AWS", "GitHub Actions", "AWS CodeDeploy", "MSSQL", "MySQL", "R"],
      links: [{ label: "rtrod.org", url: "https://rtrod.org" }],
      highlights: []
    },
    {
      id: "rehosp-plp",
      oneLiner: "입원했던 환자가 한 달 안에 응급실로 다시 올지 미리 예측하는 연구 프로그램을 개발했습니다.",
      org: "ajou",
      track: "연구 지원 · OHDSI PLP",
      title: "임상 노트 기반 응급실 경유 재입원 예측 PLP 패키지 개발",
      period: "2018.07 ~ 2019.01",
      category: ["AI / LLM", "Data / ETL"],
      summary:
        "OMOP CDM 위에서 OHDSI PatientLevelPrediction(PLP) 프레임워크로 입원 환자의 30일 내 응급실 경유 재입원을 예측하는 커스텀 연구 패키지를 개발. 임상 노트를 토픽 모델링으로 공변량화해 예측에 활용.",
      description:
        "OHDSI PLP 스켈레톤을 기반으로 ATLAS에서 정의한 코호트(타깃: 입원·응급 방문, 아웃컴: 응급실 방문)를 가져와 위험 기간 1~30일의 재입원 예측 연구를 패키지화했습니다. 구조화 데이터뿐 아니라 CDM NOTE 테이블의 한·영 임상 노트에서 100개 토픽의 LDA 토픽 모델 공변량을 추출하는 별도 R 패키지를 만들어 연계했고, Lasso 로지스틱 회귀와 Gradient Boosting Machine 모델로 학습·평가한 뒤 결과 패키징과 외부 검증용 패키지 생성까지 지원하도록 구성했습니다.",
      role: [
        "OHDSI PLP 스켈레톤 기반 연구 패키지 구조 설계 및 R 패키지 개발 (코호트 생성, 분석 실행, 결과 패키징, 검증 패키지 생성)",
        "ATLAS 코호트 정의(입원·응급 방문 / 응급실 방문)를 패키지에 내장하고 SQL Server용 코호트 SQL 관리",
        "임상 노트 공변량 추출 R 패키지 개발: 한·영 노트 토큰화, text2vec 기반 LDA 토픽 모델링(100 토픽)으로 PLP 공변량 생성",
        "Lasso 로지스틱 회귀·GBM 모델 설정, 위험 기간(1~30일)·관찰 기간 등 예측 설정 정의 및 병원 CDM(MSSQL)에서 실행"
      ],
      tech: ["R", "OHDSI PatientLevelPrediction", "FeatureExtraction", "OMOP CDM", "ATLAS", "MSSQL", "text2vec", "Topic Modeling (LDA)"],
      links: [{ label: "GitHub · RehospitalizationPredictionWithNote", url: "https://github.com/parkdongsu/RehospitalizationPredictionWithNote" }],
      highlights: []
    },
    {
      id: "monitoring",
      oneLiner: "서버 20여 대의 건강 상태를 한 화면에서 보고, 문제가 생기면 메신저로 알려 주는 시스템을 구축했습니다.",
      org: "ajou",
      track: "서버 관리 업무",
      title: "Docker Swarm 기반 서버 모니터링 시스템 구축",
      period: "2019 ~ 2022",
      category: ["Monitoring", "Infra"],
      summary:
        "ELK Stack, Beats, Grafana를 Docker Swarm 위에 구성해 서버 리소스·로그·웹 상태를 모니터링하고 Slack 알림으로 실시간 문제 파악을 가능하게 함.",
      description:
        "Docker Swarm 기반으로 ELK Stack, Beats, Grafana 컨테이너를 띄워 Filebeat, Metricbeat, Winlogbeat, Heartbeat로 서버 리소스, 로그, 웹페이지 상태를 관리했습니다. Alert와 Slack 연동으로 실시간 문제 파악이 가능하도록 했고, 대시보드 설정은 Grafana Provisioning으로 보관했습니다.",
      images: [
        { src: "assets/images/projects/monitoring-1.jpg", alt: "Grafana 서버 요약 대시보드", caption: "서버 상태 요약 대시보드 (Grafana)" },
        { src: "assets/images/projects/monitoring-2.jpg", alt: "Grafana 서버별 상세 모니터링 화면", caption: "서버별 리소스 · 로그 모니터링 화면" }
      ],
      role: [
        "Filebeat, Metricbeat, Winlogbeat, Heartbeat를 활용한 리소스·로그·웹페이지 상태 수집",
        "Disk 모니터링 소프트웨어 + Python으로 디스크 상태를 Elasticsearch에 적재",
        "Alert 및 Slack 연동, Grafana Provisioning으로 대시보드 설정 코드화"
      ],
      tech: ["Docker Swarm", "Elasticsearch", "Logstash", "Kibana", "Beats", "Grafana", "Python", "Slack"],
      highlights: []
    },
    {
      id: "server-ops",
      oneLiner: "연구실 서버실을 4년 넘게 관리·운영했으며, 떠날 때는 약 350쪽 분량의 안내서를 남겼습니다.",
      org: "ajou",
      track: "서버 관리 업무",
      title: "학과 서버실 인프라 구축·운영",
      period: "2018.07 ~ 2022.10",
      category: ["Infra"],
      summary:
        "약 20대의 Windows·Ubuntu 서버와 NAS·SAN·iSCSI 스토리지, 스위치 등 서버실 전 장비의 설치·환경 세팅·운영을 담당.",
      images: [
        { src: "assets/images/projects/notion-handover.png", alt: "노션에 작성한 학과 서버·인프라 인수인계 문서 목차 전체", caption: "노션으로 작성한 인수인계 문서 목차 — 관리자 변경 시 체크 항목, 서버실·장비·스토리지 상세 스펙, 네트워크 구성과 IP·방화벽 신청, 서버 점검, 소프트웨어(Docker Swarm·ELK, ATLAS, LDAP, NTP, DNS, R, Python, Nginx, MSSQL 백업), 국책과제, 예산, 신규 서버 세팅, 담당자 연락처, 기타 관리, 수업 보조, 데이터톤, 트러블 슈팅, 유용한 툴(Ansible, DB Migration), 추가 사항" }
      ],
      description:
        "약 20대의 Windows·Ubuntu 서버, NAS·SAN·iSCSI 스토리지, 스위치 등 서버실 내 모든 장비의 설치, 환경 세팅, 관리를 담당했습니다. 서버와 서비스를 관리하기 위해 Docker Swarm을 활용한 모니터링 환경을 구성했고, IaC 도구인 Ansible, Terraform을 활용해 서버 유지보수를 진행했습니다.",
      role: [
        "신규 서버 구매·입고·세팅 및 네트워크 구성",
        "Ansible, Terraform 등 IaC 도구를 활용한 서버 유지보수 자동화",
        "LDAP, DNS, NTP, Nginx 프록시 등 공통 서비스 운영",
        "R Server, Shiny Server 설치·운영 및 패키지 관리로 연구원들의 데이터 분석·시각화 환경 지원",
        "관리자 인수인계용 운영 문서(장비 리스트, 서버 스펙, 트러블 슈팅) 체계화"
      ],
      tech: ["Ubuntu", "Windows Server", "Ansible", "Terraform", "NAS / SAN / iSCSI", "Nginx", "LDAP", "R Server", "Shiny Server"],
      highlights: []
    },
    {
      id: "hira-cdm",
      org: "ajou",
      title: "심평원 CDM · ATLAS 환경 업데이트 지원",
      period: "2022",
      category: ["Data / ETL", "Infra"],
      track: "기술 지원 · OHDSI",
      oneLiner: "건강보험심사평가원의 연구용 데이터 분석 환경(ATLAS, RStudio)을 최신 버전으로 올리고 용어 사전을 갱신하는 작업을 지원했습니다.",
      summary:
        "심평원 CDM 환경의 ATLAS 최신 버전 설치와 Vocabulary 업데이트, RStudio Server 컨테이너 버전 업데이트를 지원.",
      role: [
        "ATLAS 최신 버전 설치 및 Vocabulary 업데이트 지원",
        "RStudio Server 컨테이너 버전 업데이트 지원"
      ],
      tech: ["OMOP CDM", "ATLAS", "RStudio Server", "Docker"]
    },
    {
      id: "datathon-env",
      oneLiner: "국제 행사와 매년 열리는 데이터 분석 대회를 위해 30~40명이 동시에 쓸 분석 환경을 준비했습니다.",
      org: "ajou",
      track: "서버 관리 업무 · OHDSI",
      title: "2019 OHDSI Korea 국제 심포지엄 & 자체 데이터톤 환경 구축·운영",
      period: "2019 ~ 2022",
      category: ["Cloud", "Infra"],
      summary:
        "OHDSI Korea 국제 심포지엄 튜토리얼과 매년 30~40명 규모의 자체 데이터톤을 위해 AWS 또는 온프레미스 환경에 ATLAS·RStudio 분석 환경을 구축하고 행사 기간 운영.",
      description:
        "OHDSI(Observational Health Data Sciences and Informatics) 협력 기관으로 참여하며 2019년 한국에서 열린 국제 심포지엄의 튜토리얼 환경을 AWS Cloud 위에 구축하고 참가자용 VDI 환경을 제공했습니다. 이후 학과에서 매년 개최한 데이터톤에서도 행사 규모에 따라 AWS 또는 온프레미스 서버에 ATLAS와 RStudio Server를 세팅하고, 참가 팀별 분석 컨테이너와 DB 환경을 제공하며 행사 기간 리소스 모니터링을 담당했습니다.",
      images: [
        { src: "assets/images/projects/ohdsi-profile-1.jpg", alt: "OHDSI 공식 사이트에 등록된 프로필 페이지", caption: "OHDSI 공식 사이트 프로필 — 2019년 OHDSI Korea 튜토리얼 환경 구축 등 OHDSI 커뮤니티 활동 이력이 등록되어 있음" }
      ],
      role: [
        "OHDSI Korea 국제 심포지엄(2019) 튜토리얼용 AWS 분석 환경 및 참가자 VDI 환경 구축·운영 지원",
        "데이터톤용 ATLAS·RStudio Server 세팅 (AWS 또는 온프레미스 환경 선택)",
        "참가 팀별 Docker 기반 분석 컨테이너 및 샘플 CDM DB 환경 제공",
        "행사 기간 서버 리소스 모니터링 및 참가자 기술 지원"
      ],
      tech: ["AWS", "Docker", "OMOP CDM", "ATLAS", "RStudio Server", "R", "MSSQL"],
      highlights: []
    },
    {
      id: "cdm-atlas",
      oneLiner: "아주대병원 OMOP CDM을 관리하고 OHDSI ATLAS를 구축해 연구자가 데이터를 분석할 수 있는 환경을 제공했습니다.",
      org: "ajou",
      track: "서버 관리 업무 · OHDSI",
      title: "OMOP CDM 관리 및 ATLAS 설치·운영",
      period: "2019 ~ 2022",
      category: ["Data / ETL", "Cloud", "Infra"],
      summary:
        "AWS 및 온프레미스 환경에 ATLAS를 구축·관리하고 강동성심병원·건강보험심사평가원 등 외부 기관의 ATLAS 설치 및 운영을 지원.",
      role: [
        "OMOP CDM 관리 및 AWS RDS 기반 분석 환경 구축",
        "ATLAS 설치 및 운영",
        "PLE·PLP 분석 환경 구성 및 성능 테스트",
        "외부 기관 ATLAS 설치·CDM 연계 및 폐쇄망 환경 지원",
        "설치 및 운영 절차 문서화"
      ],
      tech: ["OMOP CDM", "ATLAS", "WebAPI", "Docker", "Embulk", "MSSQL", "PostgreSQL", "AWS EC2 / RDS", "R", "Achilles", "LDAP"],
      highlights: [
        "ATLAS 설치 및 CDM 이관 절차를 표준화하고 가이드로 문서화",
        "클라우드·온프레미스 환경에서 OMOP CDM 분석 환경 구축 및 운영 경험 확보"
      ]
    },
    {
      id: "db-admin",
      oneLiner: "병원 데이터베이스를 관리하고, 서로 다른 형식의 데이터를 공통 형식으로 옮기는 작업을 수행했습니다.",
      org: "ajou",
      track: "서버 관리 업무",
      title: "데이터베이스 관리 및 CDM 마이그레이션",
      period: "2018 ~ 2022",
      category: ["Data / ETL"],
      summary:
        "온프레미스 MSSQL, PostgreSQL 운영·관리와 Embulk·Airflow 기반 이기종 CDM 데이터 마이그레이션 수행.",
      description:
        "On-Premise 환경의 MSSQL, PostgreSQL DB 관리 역할을 수행했습니다. Procedure를 활용해 사용자 권한과 백업을 관리하고 서비스 계정·접근 권한 발급, 스케줄 백업 및 복구 점검, 용량·성능 모니터링 등 일상 운영을 담당했으며, 오픈소스 도구인 Embulk, Airflow를 세팅해 MSSQL ↔ PostgreSQL 간 이기종 CDM 데이터 마이그레이션을 진행했습니다.",
      role: [
        "Procedure를 활용한 사용자 권한 관리 및 백업 관리 (계정·권한 발급, 스케줄 백업 및 복구 점검)",
        "DB 서버 용량·성능 모니터링, 인덱스·통계 정비, 장애 대응 등 일상 운영",
        "연구자 요청에 따른 스키마·계정 생성 및 데이터 반출 지원",
        "Embulk, Airflow 세팅 및 MSSQL ↔ PostgreSQL 이기종 CDM 데이터 마이그레이션 수행 (DDL 변환, 인덱스 재생성, 이관 검증)"
      ],
      tech: ["MSSQL", "PostgreSQL", "Embulk", "Airflow", "OMOP CDM", "Docker"],
      highlights: []
    },
    {
      id: "crawling-tool",
      oneLiner: "새로 생긴 의료 용어를 자동으로 모아 담당자에게 메일로 보내 주는 작은 프로그램을 개발했습니다.",
      org: "ajou",
      track: "국책 과제 수행 · 산자부",
      title: "의료 데이터 통합을 위한 Crawling 툴 개발",
      period: "2019.06",
      team: "1명",
      category: ["Backend"],
      summary:
        "산자부 과제. 신규 의료 용어 파악을 위해 HIRA 페이지를 크롤링하고 담당자 메일로 전송하는 프로세스를 .exe로 배포.",
      description:
        "신규 의료 용어 파악을 위해 HIRA 페이지를 Crawling하고 담당자의 메일로 전송하는 프로세스를 실행하는 .exe 파일을 개발했습니다.",
      role: ["HIRA 페이지 Crawling 및 메일 전송 프로세스 개발", "실행 파일(.exe) 패키징"],
      tech: ["Python"],
      highlights: []
    },
    {
      id: "etl-explorer",
      oneLiner: "병원 데이터베이스에서 필요한 표와 항목을 빠르게 찾아 주는 검색 도구를 개발했습니다.",
      org: "ajou",
      track: "국책 과제 수행 · 산자부",
      title: "비정형 문서 ETL 대상 탐색 툴 개발",
      period: "2018",
      team: "1명",
      category: ["Data / ETL"],
      summary:
        "산자부 과제. EMR DB에서 ETL에 사용할 테이블·컬럼을 찾기 위한 검색 툴을 R Shiny로 개발.",
      description:
        "EMR DB 중 ETL에 사용할 컬럼을 찾기 위한 검색 툴을 R Shiny를 활용해 개발했습니다. EMR 스키마 및 비정형 문서 데이터 관련 테이블/컬럼 파악, 다기관 비정형 문서 데이터 추출 로직 개발을 수행했습니다.",
      role: [
        "EMR 스키마 및 비정형 문서 데이터 관련 테이블/컬럼 파악",
        "다기관 비정형 문서 데이터 추출 로직 개발"
      ],
      tech: ["R", "R Shiny"],
      highlights: []
    }

  ]
};
