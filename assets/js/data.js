/* =========================================================
   Portfolio data
   - 노션(경력기술서 / 파이 디지털 헬스케어 업무 페이지)을 기반으로 정리
   - 새 과업을 추가하려면 PROJECTS 배열에 객체를 하나 더 넣으면 됩니다.
   ========================================================= */

window.PORTFOLIO = {
  profile: {
    name: "박동수",
    nameEn: "Dongsu Park",
    roles: ["System Engineer", "Backend Developer", "DevOps Engineer", "Healthcare IT Engineer"],
    tagline:
      "병원·헬스케어 도메인에서 인프라, 데이터 파이프라인, 웹 서비스를 설계하고 운영해 왔습니다.",
    intro: [
      "2018년 아주대학교 의료원 의료정보학과에서 서버·DB·분석 환경 운영과 국책 과제 개발로 커리어를 시작했고, 2023년부터 파이 디지털 헬스케어에서 의료 데이터 플랫폼, LLM 기반 의료 기록 자동 생성 서비스(Y-KNOT), FHIR 변환 시스템(FHIRMate) 등의 설계·개발·운영을 맡고 있습니다.",
      "온프레미스 서버실부터 AWS·GPU 서버까지 인프라를 직접 구축하고, Docker·Airflow·ELK·Grafana 같은 오픈소스를 조합해 실제 운영되는 시스템을 만드는 일을 좋아합니다."
    ],
    email: "dongsu2005@naver.com",
    location: "경기도 수원시",
    github: "https://github.com/parkdongsu",
    careerStart: "2018.07"
  },

  skills: [
    { group: "Container / Orchestration", items: ["Docker", "Docker Compose", "Docker Swarm", "Kubernetes"] },
    { group: "Infra / IaC", items: ["Ansible", "Terraform", "Nginx", "LDAP", "DNS", "NTP", "Windows / Ubuntu Server"] },
    { group: "Cloud", items: ["AWS (EC2, S3, RDS, Lambda, CloudFront, Cognito, SES, Route53)", "GCP"] },
    { group: "Database / Data", items: ["MSSQL", "PostgreSQL", "MySQL", "MongoDB", "Elasticsearch", "Embulk", "Airflow"] },
    { group: "Monitoring", items: ["ELK Stack", "Beats", "Grafana", "Prometheus", "Loki", "Tempo"] },
    { group: "Web / Backend", items: ["React", "Next.js", "Node.js", "FastAPI", "Python", "R"] },
    { group: "AI / Healthcare", items: ["vLLM", "Hugging Face", "HL7 FHIR", "OMOP CDM / ATLAS", "SNOMED CT"] },
    { group: "CI/CD / Tools", items: ["GitHub Actions", "GitLab CI", "AWS CodeDeploy / CodePipeline", "Git"] }
  ],

  careers: [
    {
      org: "파이 디지털 헬스케어",
      role: "System Engineer / Backend Developer",
      period: "2023.01 ~ 현재",
      summary:
        "의료 데이터 플랫폼 구축·운영, LLM 기반 의료 기록 자동 생성 서비스(Y-KNOT) 및 FHIR 변환 시스템(FHIRMate) 설계·개발, GPU 서버 및 클라우드 인프라 구축"
    },
    {
      org: "아주대학교 의료원 의료정보학과",
      role: "System Engineer",
      period: "2018.07 ~ 2022.12",
      summary:
        "서버실 인프라·DB·분석 환경 운영, 모니터링 시스템 구축, 국책 과제(연구 중심 병원, 산자부) 플랫폼 및 툴 개발"
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
      id: "y-knot",
      org: "phi",
      title: "Y-KNOT · 초거대 AI 기반 의료 기록지 자동 생성 플랫폼",
      period: "2024.05 ~ 현재",
      category: ["AI / LLM", "Backend", "Infra"],
      summary:
        "산업통상자원부 과제. EMR 데이터를 FHIR로 표준화하고 LLM으로 의료 기록 서식을 자동 생성하는 플랫폼의 아키텍처·인프라·백엔드를 담당.",
      role: [
        "EMR → Operator → Data Processer → FHIRMate → LLM으로 이어지는 데이터 파이프라인 설계",
        "기록지 XML을 FHIR로 변환하기 위한 분석용 테이블 구조 및 변환 규칙 설계",
        "단일 컨테이너 구조에서 멀티 컨테이너(Nginx / K8s, Redis 세션 이원화, Message Queue) 구조로 확장 설계",
        "스트레스 테스트(3차), 보안 취약점 점검 대응, 운영 배포(2025.07) 수행",
        "2026년 고도화: Spring Boot Platform + Kafka + FastAPI Processer + vLLM 구조, Prometheus·Loki·Tempo·Grafana 관제 설계"
      ],
      tech: ["Python", "FastAPI", "vLLM", "Kafka", "Redis", "Docker", "Kubernetes", "Nginx", "PostgreSQL", "MongoDB", "HL7 FHIR", "Grafana"],
      highlights: [
        "산자부 과제 제안서(서식 10종 모델 개발) 중 데이터 수집·가공·표준화 파트 작성",
        "모델 인수인계 및 전처리 룰 v2 반영, 학습 데이터 저장 구조(MongoDB) 설계"
      ]
    },
    {
      id: "fhirmate",
      org: "phi",
      title: "FHIRMate · 룰 기반 EMR → FHIR 실시간 변환 시스템",
      period: "2024.06 ~ 현재",
      category: ["Backend", "AI / LLM"],
      summary:
        "EMR 서식지(XML)를 자체 DSL 기반 Rule로 HL7 FHIR 리소스에 매핑·변환하는 시스템. 룰 관리 UI, 변환 API, 변환 이력을 제공.",
      role: [
        "Rule Group / Rule 기반 XML → FHIR 변환 로직 및 연동 API(POST /convert/fhir/api) 개발",
        "서식지 1:N Rule Group 매핑 허용(v1.2.0 → v1.3.0), 부분 실패 시 partial 상태 응답 등 하위 호환 설계",
        "FHIR 변환 테스트 페이지, 원본 XML 샘플 저장·복원, 변환 로그 설명 저장 기능 추가",
        "DB 마이그레이션 스크립트 및 API 기반 마이그레이션 적용 절차 정리",
        "입원·경과·퇴원 매핑 정의서 기반 Task 변환 Rule 정리"
      ],
      tech: ["Python", "FastAPI", "HL7 FHIR", "PostgreSQL", "Docker", "XML"],
      highlights: [
        "인재원 FHIR 교육 실습 도구로 활용 (KR Core 기반 Resource 정의, DSL 실습)"
      ]
    },
    {
      id: "gpu-infra",
      org: "phi",
      title: "LLM 연구용 GPU 서버 인프라 구축",
      period: "2024.11 ~ 2025.11",
      category: ["Infra"],
      summary:
        "ML 서버 세팅부터 H200 8EA GPU 서버 입고·설치·모델 세팅까지 LLM 연구/서빙 인프라 전반을 구축.",
      role: [
        "H200 × 8 GPU 서버 입고, 서버실 사전 답사, 전원(UPS 이중화)·랙 설치, 네트워크 세팅",
        "Ubuntu 24.04 설치, RAID 1 디스크 구성, Docker·NVIDIA Driver·CUDA 환경 구성",
        "Hugging Face 기반 오픈 모델(MedGemma, Qwen3, Llama, DeepSeek, EXAONE 등) 다운로드·세팅",
        "GCP A100 인스턴스 CUDA 세팅, 의료원 연구망 서버 입고 절차 진행, ML 서버 백업 계획 수립",
        "ML 서버 트러블 슈팅 및 운영 문서화"
      ],
      tech: ["Ubuntu", "NVIDIA Driver / CUDA", "Docker", "Hugging Face", "vLLM", "GCP"],
      highlights: []
    },
    {
      id: "compass",
      org: "phi",
      title: "COMPASS · 소아의료 챗봇 관리 도구 설계",
      period: "2025.07 ~ 2026",
      category: ["Backend", "Frontend", "Infra"],
      summary:
        "소아의료 AI 챗봇의 시나리오·의도·응답을 관리하는 관리 도구의 아키텍처, DB, 모니터링 설계를 주도.",
      role: [
        "오픈소스(Botpress) 활용 vs 신규 개발 비교 후 신규 개발 방향 제안",
        "Next.js + FastAPI + PostgreSQL + Redis + Nginx + Docker Compose 서비스 아키텍처 설계",
        "의도(Intent)·시나리오(Node/Edge)·응답·대화 이력·감사 로그 중심의 DB 모델링 및 DDL/ERD 작성",
        "Prometheus / Loki / Tempo / Grafana 기반 메트릭·로그·트레이스 통합 모니터링 설계",
        "MySQL 대비 PostgreSQL 선정 근거(JSONB, FTS, 파티션+FK) 정리"
      ],
      tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Docker Compose", "Nginx", "GitLab CI", "Grafana", "Loki", "Tempo"],
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
        "Embulk + Airflow 조합의 데이터 이관 시스템 구축 (DDL 생성 → Embulk 쿼리 생성 → 적용 → 실행 자동화)",
        "EKG / CDM / SCRAP / YCDL 등 대상별 증분 적재 설계 및 SSIS 대비 이관 속도 비교",
        "ELK Stack, Beats, Grafana 기반 서버·DB·로그 모니터링 구축, 보안성 검토 대응",
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
        "운영 중인 OMOP CDM의 스키마 문제를 파악하고 Cloud ATLAS 재구축·SSL 적용·시각화 요구사항 대응을 지원.",
      role: [
        "확장성을 고려한 CDM 스키마 구조 제안 및 일부 문제 해결 지원",
        "Cloud ATLAS 재설치·유지보수(LDAP, DB Instance 교체) 및 SSL 인증서 적용",
        "시각화 요구사항 정리 및 SDP·CDM 카탈로그 로그인 연동 관련 협의"
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
        "연세 세브란스 데이터 중심 병원 사업의 데이터 저장소·인스턴스 활용에 대한 컨설팅 및 POC 지원.",
      role: [
        "S3 vs On-premise Storage 비용·성능 비교 및 제안안 작성",
        "SDP 인스턴스 사용을 위한 POC 지원 (분석 인스턴스 세팅, 기본 패키지 제안)",
        "Cloud 요금/성능 POC, 국립암센터 자문 회의 참여"
      ],
      tech: ["AWS S3", "AWS EC2", "R", "Docker"],
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
      id: "dtx-ai-center",
      org: "phi",
      title: "DTx 플랫폼 · AI 실증센터 배포 환경 및 Frontend 지원",
      period: "2022.10 ~ 2023.10",
      category: ["Cloud", "Frontend"],
      summary:
        "디지털 치료제(DTx) 플랫폼의 외부망(AWS) 배포 환경 구성과 AI 실증센터 Frontend 개발·코드 개선을 지원.",
      role: [
        "DTx 운영 페이지 외부망 배포 환경 구성(AWS)",
        "React 프로젝트 인수·인계 및 CI/CD 방법 공유",
        "AI 실증센터 Frontend 개발 회의 참여 및 코드 개선 사항 정리"
      ],
      tech: ["AWS", "React", "CI/CD"],
      highlights: []
    },
    {
      id: "sdp-education",
      org: "phi",
      title: "SDP 교육용 AWS 아키텍처 설계",
      period: "2023.06 ~ 2023.09",
      category: ["Cloud"],
      summary:
        "학생·실습용 SDP(Secure Data Platform) 환경을 위한 AWS 실습·행사용 아키텍처를 설계하고 서비스 구성을 정리.",
      role: [
        "AWS 실습·행사용 아키텍처 설계",
        "교육용 SDP 관련 아키텍처 서비스 정리 및 계약 협의 지원"
      ],
      tech: ["AWS", "Docker"],
      highlights: []
    },
    {
      id: "fhir-education",
      org: "phi",
      title: "HL7 FHIR 교육 및 인재원 커리큘럼 설계",
      period: "2026.03 ~ 현재",
      category: ["AI / LLM", "Education"],
      summary:
        "비개발자 대상 FHIR 기초 교육 자료 제작과 인재원 실습 커리큘럼(FHIRMate 변환 실습, PromptIDE 평가 실습, 바이브 코딩 프로젝트) 설계.",
      role: [
        "FHIR 교육 PPT 기획·제작 및 발표 자료 작성",
        "SNOMED CT 매핑 → FHIR 리소스 생성 → AI 의무기록 생성 흐름의 실습 커리큘럼 정리",
        "FHIRMate DSL 실습, PromptIDE 기반 평가 실습, 바이브 코딩 서비스 개발 프로젝트(45h) 구성",
        "강의 세부 목차 정리 및 강의 자료 스크립트 검토"
      ],
      tech: ["HL7 FHIR", "KR Core", "SNOMED CT", "FHIRMate", "LLM"],
      highlights: []
    },

    /* ---------------- 아주대학교 의료원 ---------------- */
    {
      id: "rtrod",
      org: "ajou",
      title: "RTROD · 개방형 임상 중개 연구 플랫폼 개발",
      period: "2021.01 ~ 2022.06",
      category: ["Backend", "Cloud", "Infra"],
      summary:
        "연구 중심 병원 과제. 사용자의 R 분석 패키지를 병원 내부 서버에서 Docker로 실행하고 결과만 반출해 데이터 접근을 제한하면서 분석 결과를 공유하는 플랫폼 (참여 인원 2명).",
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
      id: "monitoring",
      org: "ajou",
      title: "Docker Swarm 기반 서버 모니터링 시스템 구축",
      period: "2019 ~ 2022",
      category: ["Monitoring", "Infra"],
      summary:
        "ELK Stack, Beats, Grafana를 Docker Swarm 위에 구성해 서버 리소스·로그·웹 상태를 모니터링하고 Slack 알림으로 실시간 문제 파악을 가능하게 함.",
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
      title: "학과 서버실 인프라 구축·운영",
      period: "2018.07 ~ 2022.12",
      category: ["Infra"],
      summary:
        "약 20대의 Windows·Ubuntu 서버와 NAS·SAN·iSCSI 스토리지, 스위치 등 서버실 전 장비의 설치·환경 세팅·운영을 담당.",
      role: [
        "신규 서버 구매·입고·세팅 및 네트워크 구성",
        "Ansible, Terraform 등 IaC 도구를 활용한 서버 유지보수 자동화",
        "LDAP, DNS, NTP, Nginx 프록시 등 공통 서비스 운영",
        "관리자 인수인계용 운영 문서(장비 리스트, 서버 스펙, 트러블 슈팅) 체계화"
      ],
      tech: ["Ubuntu", "Windows Server", "Ansible", "Terraform", "NAS / SAN / iSCSI", "Nginx", "LDAP"],
      highlights: []
    },
    {
      id: "analysis-env",
      org: "ajou",
      title: "연구자용 분석 환경 구성 및 데이터톤 운영",
      period: "2018 ~ 2022",
      category: ["Infra"],
      summary:
        "학생 개발자·외부 연구원을 위한 RStudio Server, Jupyter Notebook 분석 환경을 구축·운영하고 매년 30~40명 규모 데이터톤 환경을 제공.",
      role: [
        "RStudio Server, Jupyter Notebook 개발 환경 세팅 및 유지보수",
        "LDAP, DNS, Nginx 프록시를 활용한 접근 최적화 및 관리 편의성 확보",
        "Docker 컨테이너 기반 외부 연구원 분석 환경 제공",
        "데이터톤용 분석 컨테이너·DB 환경 제공 및 리소스 모니터링"
      ],
      tech: ["Docker", "RStudio Server", "Jupyter", "LDAP", "Nginx", "MSSQL"],
      highlights: []
    },
    {
      id: "ohdsi-2019",
      org: "ajou",
      title: "OHDSI Korea International Symposium 2019 튜토리얼 환경 구축",
      period: "2019",
      category: ["Cloud", "Infra"],
      summary:
        "OHDSI 국제 심포지엄 튜토리얼을 위해 AWS Cloud 위에 분석 환경과 참가자용 VDI 환경을 구축.",
      role: [
        "AWS 기반 OMOP CDM 분석 환경 구축",
        "튜토리얼 참가자용 VDI 환경 구성 및 운영 지원"
      ],
      tech: ["AWS", "OMOP CDM", "ATLAS", "R"],
      highlights: []
    },
    {
      id: "db-admin",
      org: "ajou",
      title: "온프레미스 DB 관리 및 데이터 마이그레이션",
      period: "2018 ~ 2022",
      category: ["Data / ETL"],
      summary:
        "MSSQL, PostgreSQL DB 관리와 Embulk·Airflow 기반 ETL 데이터 마이그레이션 수행.",
      role: [
        "Procedure를 활용한 사용자 권한 관리, 백업 관리",
        "Embulk, Airflow 세팅 및 데이터 마이그레이션 수행"
      ],
      tech: ["MSSQL", "PostgreSQL", "Embulk", "Airflow"],
      highlights: []
    },
    {
      id: "crawling-tool",
      org: "ajou",
      title: "의료 데이터 통합을 위한 Crawling 툴 개발",
      period: "2019.06",
      category: ["Backend"],
      summary:
        "산자부 과제. 신규 의료 용어 파악을 위해 HIRA 페이지를 크롤링하고 담당자 메일로 전송하는 프로세스를 .exe로 배포 (1인 개발).",
      role: ["HIRA 페이지 Crawling 및 메일 전송 프로세스 개발", "실행 파일(.exe) 패키징"],
      tech: ["Python"],
      highlights: []
    },
    {
      id: "etl-explorer",
      org: "ajou",
      title: "비정형 문서 ETL 대상 탐색 툴 개발",
      period: "2018.04",
      category: ["Data / ETL"],
      summary:
        "산자부 과제. EMR DB에서 ETL에 사용할 테이블·컬럼을 찾기 위한 검색 툴을 R Shiny로 개발 (1인 개발).",
      role: [
        "EMR 스키마 및 비정형 문서 데이터 관련 테이블/컬럼 파악",
        "다기관 비정형 문서 데이터 추출 로직 개발"
      ],
      tech: ["R", "R Shiny"],
      highlights: []
    }
  ]
};
