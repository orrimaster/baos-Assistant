# BAOS 공정 CHECKER

두 개의 BAOS 생산 기술 프로그램을 하나로 합친 웹 앱입니다. 메뉴 화면에서 사용할 프로그램을 고릅니다.

**접속 주소: https://orrimaster.github.io/baos-Assistant/**

| 메뉴 | 프로그램 | 파일 |
|---|---|---|
| 1 | **원자재 크기 VS 제품 크기, 재단 공정 CHECKER** — 원자재(판재) 크기와 제품 크기로 재단 배치, 생산 가능 제품 수, 원자재 잔량 계산 (v1.5.0) | `cut.html` |
| 2 | **제품 크기 VS 공정 기계 적용 범위 CHECKER** — 해당 인치, 근접 비율, 적용 가능 기계 26대 판정 (v1.4.2) | `ratio.html` |

- 버전 **v2.0.1** · 제작일 2026-11-12 · 제작자 **Kwag D.S**
- 언어: 국기 버튼(한국어 / English / Tiếng Việt) — 메뉴와 두 프로그램에 함께 적용
- 각 프로그램 오른쪽 위의 집 모양 버튼으로 메뉴(`index.html`)로 돌아갑니다.
- 카카오톡으로 받은 주소를 누르면 메뉴가 열립니다. 아이폰은 Safari, 안드로이드는 Chrome으로 열어 **홈 화면에 추가**하면 앱처럼 쓸 수 있습니다.
- 한 번 열면 인터넷이 없어도 동작합니다.

## 파일 구성

| 파일 | 내용 |
|---|---|
| `index.html` | 메뉴 화면 |
| `cut.html` | 1) 재단 공정 CHECKER |
| `ratio.html` | 2) 공정 기계 적용 범위 CHECKER (기계 제원 `const M = [...]` 포함) |
| `manifest.webmanifest` | 앱 설치 정보 |
| `sw.js` | 오프라인 캐시 (파일을 고치면 `CACHE` 버전을 올리세요) |
| `icons/` | 앱 아이콘 (BAOS 마크) |
| `docs/` | 사용 설명서 PDF (모바일 앱판: 한국어 · 영어 · 베트남어) |
| `.nojekyll` | GitHub Pages가 파일을 그대로 올리도록 하는 빈 파일 |

## 판정 기준 (2번 프로그램)

| 기계 분류 | O (적용 가능) 조건 |
|---|---|
| 가공 공정 (MS3 · MD3 · MD4 · MD5 · MS6 · MD6) | 가로 ≤ MAX L **그리고** 세로 ≥ MIN W |
| Rollstamping (32 · 55 · 65 · 75 · 86 RSM) | MIN L ≤ 가로 ≤ MAX L **그리고** MIN W ≤ 세로 ≤ MAX W |

## 주의

GitHub Free 요금제에서는 저장소를 Public(공개)으로 만들어야 GitHub Pages를 쓸 수 있고, 주소를 아는 사람은 누구나 접속할 수 있습니다.

---

**English** · BAOS Process CHECKER combines two tools: (1) Raw Material Size VS Product Size — Cutting Process CHECKER and (2) Product Size VS Process Machine Range CHECKER. Open the address above, pick a program on the menu, switch language with the flags and return with the house button. Works offline after the first visit.
