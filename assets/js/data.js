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
    roles: ["System Engineer", "Full-Stack Engineer", "Healthcare IT Engineer"],
    tagline:
      "병원·헬스케어 도메인에서 인프라, 데이터 파이프라인, 웹 서비스를 설계하고 운영해 왔습니다.",
    intro: [
      "2018년 아주대학교 의료원 의료정보학과에서 서버·DB·분석 환경 운영과 국책 과제 개발로 커리어를 시작했으며, 병원 의료데이터의 표준화와 활용을 위한 CDM 기반 데이터 환경 구축 업무를 수행했습니다. 2022년 11월부터는 파이 디지털 헬스케어에서 의료 데이터 플랫폼, FHIR 기반 의료데이터 표준화, LLM 기반 의료 기록 자동 생성 서비스, FHIR 변환 시스템 등의 설계·개발·운영을 담당하고 있습니다.",
      "의료기관의 다양한 데이터를 표준화하고 이를 실제 서비스와 연결하는 의료 데이터 플랫폼 구축과 AI 활용에 관심이 많습니다. 인프라부터 애플리케이션 개발까지 폭넓게 경험했으며, 온프레미스와 클라우드 환경 모두에 익숙하고 다양한 오픈소스를 조합해 필요한 시스템을 직접 만들어가는 것을 좋아합니다."
    ],
    email: "dongsu2005@naver.com",
    location: "경기도 광명시",
    github: "https://github.com/parkdongsu",
    careerStart: "2018.07"
  },

  // 노션 "박동수 이력" Skills 분류 체계를 따르고, 이후 업무에서 추가된 항목을 덧붙임
  skills: [
    { group: "Container", items: ["Docker", "Docker Swarm", "Docker Compose"] },
    { group: "IaC", items: ["Ansible", "Terraform"] },
    { group: "Database", items: ["MSSQL", "PostgreSQL", "MySQL", "MongoDB", "Elasticsearch"] },
    { group: "Cloud", items: ["AWS"] },
    { group: "Web", items: ["React", "Next.js", "Node.js", "FastAPI", "Nginx"] },
    { group: "Tool", items: ["GitHub", "GitLab", "Embulk", "Airflow", "ELK Stack", "Beats", "Grafana", "Prometheus", "Loki", "Tempo"] },
    { group: "Language", items: ["Python", "R", "JavaScript / TypeScript", "SQL"] },
    { group: "CI/CD", items: ["GitHub Actions", "AWS CodeDeploy", "AWS CodePipeline", "GitLab CI"] },
    { group: "Healthcare Standard", items: ["HL7 FHIR", "OMOP CDM / ATLAS"] },
    { group: "LLM", items: ["ChatGPT", "Claude", "vLLM / Hugging Face"] }
  ],

  careers: [
    {
      org: "파이 디지털 헬스케어",
      role: "인공지능사업부 과장 · Full-Stack Engineer",
      period: "2022.11 ~ 현재",
      items: [
        "LLM 기반 의료 기록 자동 생성 서비스 플랫폼 개발",
        "HL7 FHIR 기반 의료데이터 변환 시스템 설계·개발",
        "세브란스 대상 HL7 FHIR 개념 및 실습 교육 진행",
        "사내 서버 및 협업 도구 구축·관리",
        "제안서 및 문서 작성"
      ]
    },
    {
      org: "아주대학교 의료원 의료정보학과",
      role: "연구원 (개발팀장) · System Engineer",
      period: "2018.07 ~ 2022.10",
      items: [
        "인프라·DB·분석 환경 운영 및 유지보수",
        "서버 모니터링 시스템 구축 및 운영",
        "OMOP CDM 관리 및 ATLAS 설치·운영",
        "국책 과제 플랫폼 및 연구 지원 도구 개발",
        "CDM 기반 개방형 임상·중개연구 플랫폼 구축",
        "제안서 및 문서 작성"
      ]
    }
  ],

  // 프로젝트 필터에 쓰이는 조직 키
  orgs: {
    phi: "파이 디지털 헬스케어",
    ajou: "아주대학교 의료원"
  },

  projects: [
    /* ---------------- 파이 디지털 헬스케어 ---------------- */
    {
      id: "llm-record-platform",
      org: "phi",
      title: "초거대 AI 기반 의료 기록지 자동 생성 플랫폼",
      period: "2024.05 ~ 현재",
      category: ["AI / LLM", "Backend", "Infra"],
      summary:
        "산업통상자원부 과제. EMR 데이터를 FHIR로 표준화하고 LLM으로 의료 기록 서식을 자동 생성하는 플랫폼의 아키텍처·인프라·백엔드를 담당. 2026년부터 서식 생성 파이프라인을 AI Agent 구조로 고도화 중.",
      role: [
        "EMR → Operator → Data Processer → FHIR 변환 → LLM으로 이어지는 데이터 파이프라인 설계",
        "기록지 XML을 FHIR로 변환하기 위한 분석용 테이블 구조 및 변환 규칙 설계",
        "단일 컨테이너 구조에서 멀티 컨테이너(Nginx / K8s, Redis 세션 이원화, Message Queue) 구조로 확장 설계",
        "스트레스 테스트(3차), 보안 취약점 점검 대응, 운영 배포(2025.07) 수행",
        "2026년 고도화: Spring Boot Platform + Kafka + FastAPI Processer + vLLM 구조, Prometheus·Loki·Tempo·Grafana 관제 설계",
        "AI Agent 고도화 (2026.06~): 서식 생성 파이프라인을 단일 Agent + Tool 구조로 재설계하고, 확장을 고려해 Tool을 MCP 규격에 맞춰 개발. Processer·Broker의 전/후처리(FHIR 변환 결과 병합, 프롬프트 동적 조립, 입력 정제, 추론 결과 출력) 담당",
        "Agent 운영 점검: Usecase별 FHIR 그룹핑 로직 재배치, Elasticsearch 로그·Grafana 모니터링 기반 기능 점검 및 배포, 10건 케이스 대상 Agent 기반 PoC 수행",
        "Tool Calling 미지원 의료 특화 모델 대응: Tool Calling용 모델과 서식 추론용 모델을 분리해 vLLM으로 서빙하고 OpenAI 호환 규격으로 정비"
      ],
      tech: ["Python", "FastAPI", "vLLM", "AI Agent / MCP", "Kafka", "Redis", "Docker", "Kubernetes", "Nginx", "PostgreSQL", "MongoDB", "Elasticsearch", "HL7 FHIR", "Grafana"],
      highlights: [
        "산자부 과제 제안서(서식 10종 모델 개발) 중 데이터 수집·가공·표준화 파트 작성",
        "모델 인수인계 및 전처리 룰 v2 반영, 학습 데이터 저장 구조(MongoDB) 설계"
      ]
    },
    {
      id: "fhir-converter",
      org: "phi",
      title: "룰 기반 EMR → FHIR 실시간 변환 시스템",
      period: "2024.06 ~ 현재",
      category: ["Backend", "AI / LLM"],
      summary:
        "EMR 서식지(XML)를 자체 DSL 기반 Rule로 HL7 FHIR 리소스에 매핑·변환하는 시스템. 룰 관리 UI, 변환 API, 변환 이력을 제공하며 변환 방식에 대해 특허를 출원.",
      role: [
        "Rule Group / Rule 기반 XML → FHIR 변환 로직 및 연동 API(POST /convert/fhir/api) 개발",
        "서식지 1:N Rule Group 매핑 허용(v1.2.0 → v1.3.0), 부분 실패 시 partial 상태 응답 등 하위 호환 설계",
        "FHIR 변환 테스트 페이지, 원본 XML 샘플 저장·복원, 변환 로그 설명 저장 기능 추가",
        "DB 마이그레이션 스크립트 및 API 기반 마이그레이션 적용 절차 정리",
        "입원·경과·퇴원 매핑 정의서 기반 Task 변환 Rule 정리"
      ],
      tech: ["Python", "FastAPI", "HL7 FHIR", "PostgreSQL", "Docker", "XML"],
      highlights: [
        "룰 기반 실시간 EMR → FHIR 변환 방식에 대한 특허 출원 (2025): 국내외 선행 특허(FHIR 매핑·컨버터 관련) 조사 및 차별점 정리, 명세 작성 참여",
        "인재원 FHIR 교육 실습 도구로 활용 (KR Core 기반 Resource 정의, DSL 실습)"
      ]
    },
    {
      id: "chatbot-console",
      org: "phi",
      title: "소아의료 챗봇 관리 도구 설계",
      period: "2026.06 ~ 현재",
      category: ["Backend", "Frontend", "Infra"],
      summary:
        "소아의료 AI 챗봇의 시나리오·의도·응답을 관리하는 관리 도구의 아키텍처, DB, 모니터링 설계를 주도.",
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
      org: "phi",
      title: "연세 세브란스 데이터레이크 ETL·모니터링 구축 및 운영",
      period: "2023.12 ~ 2024.03 (구축) · 2025.08 ~ 현재 (운영·유지보수)",
      category: ["Data / ETL", "Infra", "Monitoring"],
      summary:
        "폐쇄망 환경에서 Embulk + Airflow 기반 ETL 반자동화 시스템과 ELK + Grafana 모니터링 서비스를 구축하고 이후 유지보수 사업을 수행.",
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
      id: "cdm-support",
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
      org: "phi",
      title: "원주세브란스 안심활용센터 플랫폼 Frontend 개발",
      period: "2023.01 ~ 2023.04",
      category: ["Frontend"],
      summary:
        "기관 보유 데이터를 연구 목적으로 안전하게 활용하기 위한 안심활용센터 웹 서비스의 Frontend 전반을 개발.",
      role: [
        "React(CRA) + Material-UI 기반 화면 개발",
        "동적 신청서 작성, 좌석 관리, 관리자 페이지 등 전체 기능 구현",
        "클라우드 구축 회의 참여, 매뉴얼 작성 및 결과 보고서 보완"
      ],
      tech: ["React", "CRA", "Material-UI", "JavaScript"],
      highlights: []
    },
    {
      id: "sdp-education",
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
      org: "phi",
      track: "교육 · 세브란스 의무기록팀",
      title: "세브란스 의무기록팀 대상 인재원 HL7 FHIR 교육",
      period: "2026.03 ~ 현재",
      category: ["Education", "AI / LLM"],
      summary:
        "세브란스 의무기록팀(보건의료정보관리사)을 대상으로 한 인재원 교육 과정의 커리큘럼을 설계하고 HL7 FHIR 기초부터 FHIR 변환 도구 실습까지 강의를 담당.",
      description:
        "비개발자인 의무기록팀 구성원이 병원 데이터를 FHIR 표준으로 이해하고 직접 변환·검증할 수 있도록, FHIR 기본 구조 → 주요 임상 Resource 적용 → 병원 Core Profile 정의 → FHIR 변환 도구 실습으로 이어지는 총 13시간 과정을 구성했습니다.",
      role: [
        "강의 1 · 비개발자를 위한 HL7 FHIR 기초 (3h): Resource, Profile, ValueSet, CodeSystem, ConceptMap 구조와 국제 → 국가(KR-Core) → 병원 표준 적용 흐름",
        "강의 2 · SNOMED CT 결과를 FHIR로 연결하는 방법 (3h, 공동 강의): Condition, Observation, Procedure, MedicationRequest 적용과 외래 시나리오 모델링 실습",
        "강의 3 · KR-CDI, KR-Core를 활용한 세브란스 Core Resource 정의 (1h)",
        "강의 4 · 자체 FHIR 변환 도구 소개 및 사용 방법 (1h)",
        "강의 5 · 의무기록 질관리 및 데이터 품질 검증·관리 체계 구축 실습 (5h): FHIR 변환 도구의 Rule Group·DSL로 샘플 데이터 변환, SNOMED CT 적용, Structure·Terminology Validation",
        "교육 회의 참여, 커리큘럼·강의 세부 목차 정리, 강의 자료 스크립트 검토, 실습용 FHIR 변환 도구 기능(Terminology 적용, 1:N 매핑) 보강"
      ],
      tech: ["HL7 FHIR", "KR-Core", "KR-CDI", "SNOMED CT", "LLM"],
      highlights: ["프롬프트 기반 의무기록 생성·평가 실습, 바이브 코딩 프로젝트(45h) 등 후속 과정 설계"]
    },

    /* ---------------- 아주대학교 의료원 ---------------- */
    {
      id: "rtrod",
      org: "ajou",
      track: "국책 과제 수행 · 연구 중심 병원",
      title: "RTROD · 개방형 임상 중개 연구 플랫폼 개발",
      period: "2021.01 ~ 2022.06",
      team: "2명",
      category: ["Backend", "Cloud", "Infra"],
      summary:
        "연구 중심 병원 과제. 사용자의 R 분석 패키지를 병원 내부 서버에서 Docker로 실행하고 결과만 반출해 데이터 접근을 제한하면서 분석 결과를 공유하는 플랫폼.",
      description:
        "AWS Cloud 환경의 서버에 구축된 Web 환경의 시스템으로, 사용자의 R 기반 분석 패키지를 HTTPS 프로토콜로 병원 내부 서버로 보내면 분석 패키지를 Docker로 감싸 실행한 후 분석 결과만 반출해 병원 데이터 접근을 제한하며 분석 결과를 공유하는 플랫폼을 개발했습니다.",
      images: [
        { src: "assets/images/projects/rtrod-1.jpg", alt: "RTROD AWS 아키텍처 구성도", caption: "AWS 아키텍처 및 CI/CD 구성도" },
        { src: "assets/images/projects/rtrod-2.jpg", alt: "RTROD 프로젝트 관리 화면", caption: "RT-ROD 프로젝트 관리 화면" }
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
      org: "ajou",
      track: "서버 관리 업무",
      title: "학과 서버실 인프라 구축·운영",
      period: "2018.07 ~ 2022.10",
      category: ["Infra"],
      summary:
        "약 20대의 Windows·Ubuntu 서버와 NAS·SAN·iSCSI 스토리지, 스위치 등 서버실 전 장비의 설치·환경 세팅·운영을 담당.",
      images: [
        { src: "assets/images/projects/notion-handover.jpg", alt: "노션에 작성한 학과 서버·인프라 인수인계 문서 목차", caption: "노션으로 작성한 인수인계 문서 — 장비 정보, 서버 점검, 소프트웨어별 운영 가이드, 국책과제, 트러블 슈팅 등 (페이지 구조 재현)" }
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
      id: "datathon-env",
      org: "ajou",
      track: "서버 관리 업무 · OHDSI",
      title: "2019 OHDSI Korea 국제 심포지엄 & 자체 데이터톤 환경 구축·운영",
      period: "2019 ~ 2022",
      category: ["Cloud", "Infra"],
      summary:
        "OHDSI Korea 국제 심포지엄 튜토리얼과 매년 30~40명 규모의 자체 데이터톤을 위해 AWS 또는 온프레미스 환경에 ATLAS·RStudio 분석 환경을 구축하고 행사 기간 운영.",
      description:
        "OHDSI(Observational Health Data Sciences and Informatics) 협력 기관으로 참여하며 2019년 한국에서 열린 국제 심포지엄의 튜토리얼 환경을 AWS Cloud 위에 구축하고 참가자용 VDI 환경을 제공했습니다. 이후 학과에서 매년 개최한 데이터톤에서도 행사 규모에 따라 AWS 또는 온프레미스 서버에 ATLAS와 RStudio Server를 세팅하고, 참가 팀별 분석 컨테이너와 DB 환경을 제공하며 행사 기간 리소스 모니터링을 담당했습니다.",
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
      org: "ajou",
      track: "서버 관리 업무 · OHDSI",
      title: "OMOP CDM 이관 및 ATLAS 설치·운영",
      period: "2019 ~ 2022",
      category: ["Data / ETL", "Cloud", "Infra"],
      summary:
        "튜토리얼·테스트용 샘플 CDM을 AWS RDS로 이관하고 ATLAS·WebAPI를 Docker로 구축해 PLE·PLP 분석 환경을 제공. 강동성심병원, 심평원 등 외부 기관 ATLAS 설치 출장 지원과 설치 가이드 문서화까지 담당.",
      description:
        "OHDSI ATLAS v2.8.0과 WebAPI를 Docker 이미지로 빌드해 AWS EC2와 온프레미스 서버에 배포하고, 튜토리얼·스트레스 테스트용 샘플 CDM을 Embulk로 MSSQL → PostgreSQL(AWS RDS)에 이관한 뒤 Achilles 통계와 Results 스키마를 구성해 ATLAS에 연결했습니다. 온프레미스 ATLAS는 병원 내부 CDM에 직접 연결해 운영했습니다. 50만·100만 환자 규모의 샘플 CDM으로 PLE·PLP 패키지를 실행하는 스트레스 테스트를 수행해 RDS·EC2 권장 사양을 도출했습니다.",
      role: [
        "ATLAS / WebAPI Docker 이미지 빌드 및 EC2·온프레미스 배포, DB·LDAP 로그인 연동 설정",
        "Embulk를 Docker로 구성해 샘플 CDM 테이블을 MSSQL → PostgreSQL(AWS RDS)로 이관(테이블별 YAML 자동 생성), DDL 변경 및 인덱스 작업",
        "Achilles(R) 실행을 위한 RStudio Server 컨테이너 구성, WebAPI Results 스키마 생성 및 ATLAS Source 등록",
        "pg_dump / RDS 스냅샷 기반 샘플 CDM(50만·100만 환자) 구성 및 PLE·PLP 스트레스 테스트로 클라우드 사양 산정",
        "튜토리얼용 VDI 분석 환경(R, RStudio, Java) 세팅 및 설치·운영 가이드 문서화",
        "강동성심병원, 건강보험심사평가원(심평원) 등 외부 기관 ATLAS 설치 출장 지원: 폐쇄망 환경에 ATLAS·WebAPI Docker 이미지를 반입·배포하고 기관 CDM(Oracle 등) 연결, Results 스키마 구성, 분석 컨테이너 이슈 대응"
      ],
      tech: ["OMOP CDM", "ATLAS", "WebAPI", "Docker", "Embulk", "MSSQL", "PostgreSQL", "AWS EC2 / RDS", "R", "Achilles", "LDAP"],
      highlights: ["ATLAS 설치 가이드 및 CDM 이관 절차를 문서화해 외부 기관 설치 지원 시 Docker 이미지 반입 방식으로 표준화"]
    },
    {
      id: "db-admin",
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
