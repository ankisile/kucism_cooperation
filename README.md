# No Pain No Gain (큐시즘 기업프로젝트 5조)
# http://nopainnogain.ga

## 1. 웹페이지 기능

‘노페인 노게인’은 머신러닝을 통해 카톡 대화 내용을 분석하여 팀원 기여도를 측정 및 관리해주는 서비스다. 분석하고 싶은 대화방의 대화 내용을 TXT 파일로 내보내기 하고, 그 파일을 업로드하면 대화 내용을 분석 및 저장해준다.

1. 회원가입
2. 로그인 / 로그아웃
3. 프로필 관리

    1) 사용자 이름

    2) 팀플 기여도 평균

    3) 팀플 금메달 총 개수

    4) FreeRider 총 개수

4. 대화 내용 분석기

    1) 프로젝트 이름 입력

    2) TXT 파일 업로드

5. 분석결과

    1) 대화 내용 분석 시각화 이미지

    2) 대화방에 참가한 사람들 추가 및 선택

    3) 분석 결과 저장 버튼

6. 나의 분석 기록 (사용자의 분석 기록 테이블)

    1) 등록일 순으로 분석 기록 나열

    2) 삭제 버튼 클릭시 삭제 가능

    3) 100점을 한명이 해야하는 기준으로 잡고 그 이하는 빨간색, 이상은 파란색으로 표시

<img width="740" alt="_2021-04-02__9 10 59" src="https://user-images.githubusercontent.com/53250432/113415078-67a5f000-93f9-11eb-9b61-0625110025f7.png">
<img width="740" alt="_2021-04-02__9 11 20" src="https://user-images.githubusercontent.com/53250432/113415086-6a084a00-93f9-11eb-8c4b-5d1adb3af42a.png">
<img width="1437" alt="_2021-04-02__9 10 14" src="https://user-images.githubusercontent.com/53250432/113416655-be60f900-93fc-11eb-9c9d-5b8e6c5024a5.png">
<img width="1420" alt="_2021-04-02__9 42 56" src="https://user-images.githubusercontent.com/53250432/113416555-8fe31e00-93fc-11eb-9b78-a82abb25e563.png">



## 2. 데이터 분석 및 내용
### 1. 카카오톡에서 내보내기 한 txt 파일 텍스트 전처리
**Mecab**으로 불용어 필터링

카톡방 참여자 추출

이름, 날짜, 시간, 채팅 내용으로 구분한 dictionary 생성
### 2.
### 3.
### 4.

## 3. 오류

node js(백엔드)에서 python-shell을 이용하여 python으로 작성된 데이터분석파일을 연동시키려고 하였으나, 데이터 반환이 안되는 오류가 있습니다. 각각의 웹과 데이터분석 파일에서 잘 작동을 하나, 연동 과정에서의 오류로, 데이터 분석 결과가 제대로 나오지 않는 점 양해부탁드립니다.

### 4. 사용언어

Front-end : React 기반 

Back-end : Node.js 기반 

Data-base : MongoDB 

데이터 분석 : Python ( mecab, scikit-learn )

서버 배포 : AWS 아마존 웹 서비스
