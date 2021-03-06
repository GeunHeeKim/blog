# 2019.12월

## 12.16

- 스튜디오메이트 입사

- 새로운 컴퓨터 수령 및 초기 세팅 및 회사 권한 획득 (github, postman, tablePlus, aws)
  - vscode
  - tablePlus
  - postman
  - zepline
  - sourseTree
  - slack

## 12.17

- 매주 화요일 23:00에 staging에 올라간 작업들을 production에 배포한다
- git 활용

  - jira에 등록된 이슈번호를 기준으로 branch를 만든다 (ex - git checkout -b sm-1820)
  - 이때 꼭 master 브랜치에서 위 커멘드를 실행한다. 아니면 confilct 날 가능성이 매우 높다
  - 작업 이후 해당 branch를 qa에 merge 한다
    - 이슈 등록된 jira에 관련된 사람들 태그하고 검수 요청한다
    - 이후 qa완료되면 해당 이슈를 staging에 pr올린다 (merge 아님)

- 코드리뷰
  - staging에는 매주 월요일 13:00 경에 qa에 올린 파일을 staging에 pr 해놓고 리뷰에 들어간다
  - 어떤 이슈인지 설명하고 이 코드는 어떤 의도로 만들었고 어떻게 작동한다고 설명한다
  - 어느곳이나 마찬가지이지만 가급적 중복은 삼가한다.
  - qa는 작업이 완료되면 알아서 올린다

## 12.18

- 혼자 코드 이해하는 시간
  - store, api, 여러곳에서 사용되는 컴포넌트, utills, css 등등 여러 곳에서 호출되는 정보들은 모두 전역으로 호출이 가능하게 설계됨
    - (필수!) 새로운 프로젝트에서 전역으로 호출되는 방법 만들어보고 이해할 것
  - router에 /settings 같은 도메인 네임이 들어가고, 그안에 화면이 보여지는 view 컴포넌트로 구성됨
  - view 컴포넌트 내부에는 여러 사용되는 shared 컴포넌트, 그곳에만 사용되는 컴포넌트로 구성됨, 화면에서 사용되는 methods, 그 컴포넌트에서만 사용되는 data는 view 컴포넌트 내부에서 정의 및 사용됨

## 12.19

- 뷰 style 가이드
  - 컴포넌트가 self closing의 경우 카멜케이스로 컴포넌트를 정의한다 (customTabs)
  - 아닐경우 custom-tabs로 컴포넌트를 정의한다 - 뷰의 경우 위 아래 이름 모두 동일한 컴포넌트 이름으로 취급한다.

## 12.20

- aws route/53
  - Route 53 사용하여 도메인 등록, dns 라우팅, 올려 놓은 서버의 상태 확인을 실행 할 수 있다.
- Lodash : 자바스크립트 유틸리티 라이브러리
  - 배열, date, number, object등 여러 데이터를 다루게 도와준다
  - 배열안의 객체 값들을 핸들링 할 때 사용 (여기서는 get을 주로 쓰고 undefiend의 경우 원래는 에러를 도출하지만 \_를 사용하면 지정한 값을 리턴한다)
  - \_ : omit : 빼라
  - \_.get(obj, ‘name’, ‘nkh’) : undified라면 ’nkh’를 가져온다
  - \_.sortBy(arr, [‘created_at’,’name’])
  - \_.pick(obj, ‘name’, ‘age’) - obj에서 name값만 가져온다.
  - \_.omit(obj, ‘name’,’age’) - obj에서 name, age 빼고 가져온다

## 12.23 - 24

- 코드 이해하는 시간

  - slot
    - <slot name="suffix"/> 이라고 정의 한곳에 <span slot="suffix">qwe</span> 가 들어간다 컴포넌트 사이에 어떤 텍스트를 넣어야 할 때 유용하게 사용한다.

- postman에 api가 올라와 있고, 상세 설명이 있으므로 프론트 작업중 api 모르는 것이 있으면 postman에서 먼저 확인하고 이상있으면 백엔드 개발자님께 콜
- tableplue에 DB에 대한 정보가 있으니 컬럼 확인 하여 현재 내가 사용할 데이터가 어떤 종류, 값인지 확인
- git을 기존에는 cli로 활용 했는데, gui툴이 좀 더 직관적이고, 빠르게 일을 할 수 있었다.
  - git diff 같은 경우도 일일히 cli에서 검색 할 필요 없이 소스트리에서 클릭하면 바뀐 부분 파일만 보여주어 매우 편했다.
  - stash도 클릭 한번으로 저장 및 다시 불러오기 가능
  - 내 컴퓨터에 있는 branch와 origin의 branch가 어떻게 다른지 한번에 볼수 있는게 가장 편했음
  - confilct가 발생한 경우로 소스트리에서 머지가 실패하면 바로 vscode로 뭐가 달라서 confilct가 났다고 직관적으로 보여주어 충돌 해결이 쉬웠다.

## 12.26-27

- 기간제 수강권 취소 가능 횟수 설정 및 잔여 횟수 보이기 / 안보이기 설정
  - 수강권 추가 / 수정 / 상세보기 창 모두 cancelCount flag 및 변수를 넣어야함
- oh my zsh alias 설정

```sh
vim ~/.zshrc

# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"
alias gs="git status"
alias gl="git log"
alias gd="git diff"
alias gc="git checkout"
alias gcm="git checkout master"
alias gp="git pull"
alias ys="yarn start"
alias vd="vuepress dev"

//원하시는 shortcut 커멘드 입력
```

`:wq` 로 저장 후 터미널로 나간 후 아래 커멘드로 변경사항 저장

```sh
source ~/.zshrc
```

## 12.30 ~ 1.2

- 그룹, 프라이빗 예약 가능 / 취소 타입은 4개 중 1개로 고정되었지만 소비자의 요청에 따라 4가지 타입을 원하는 타입을 맞춰서 쓰겠다는 요청
  - 그룹 예약 / 취소, 프라이빗 예약 / 취소 총 4가지의 상황에 대해 4가지의 선택하도록 맞춰야함
  - 기존 rule-type을 group_booking_rule_type, group_cancel_rule_type등 4가지의 변수로 쪼개서 선택 가능하도록 함
  - 시간 역전 현상 (시작시간이 끝 시간부터 뒤인 경우) 모두 예외 처리하여 해당 이벤트 발생시 noti로 알려주고, ref를 통해 오류가 나는 input으로 자동 이동
  - 아무 이상이 없으면 api 호출 하여 4가지의 룰타입과 각 룰타입별 시간을 넣어 post한다
  - 시간 설정하는 화면 외 이 이슈로 인하여 바뀌어야하는 화면은
    - lecture 수정 화면 (룰 타입 바뀌면 안됨, 타입은 고정되고 시간만 바뀌도록)
    - course 수정 화면 (룰 타입 바뀌면 안됨, 타입은 고정되고 시간만 바뀌도록)
    - 수업 보여지는 화면
    - 수업 일괄수정하는 화면 작업 요구 (룰 타입 바뀌면 안됨, 타입은 고정되고 시간만 바뀌도록)
  - 각 화면별 css layout 변경 디자인 요구

<Disqus />
