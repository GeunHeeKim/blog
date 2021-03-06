---
title: react-redux state 초기화와 a 태그의 함정
meta:
  - name: description
    content: react-redux state 초기화와 a 태그의 함정
  - property: og:title
    content: react-redux state 초기화와 a 태그의 함정
  - property: og:description
    content: react-redux state 초기화와 a 태그의 함정
  - property: og:url
    content: https://kyounghwan01.github.io/blog/React/a-tag-trap/
tags: ["react", "styled-component"]
---

# a 태그의 함정

> react에서 우리는 버튼을 클릭시 다른 페이지로 이동할 때, 흔히 a tag를 사용할 수 있습니다. 아래처럼 말이죠.

```jsx
const Ex = () => {
  return (
    <Tabs key="/login" to="/login">
      로그인으로 이동
    </Tabs>
  );
};

const Tabs = styled.a`
  color: #f2f2f2;

  &:hover {
    background: #f1f1f1;
    color: black;
  }
`;
```

## a tag의 문제점

- 개발을 하던 중 문제가 발생했습니다. 라우트를 이동시 redux의 전역 state가 모두 **초기화** 되는 것입니다. 이유는 아래와 같습니다.

  :::tip TIP a 태그 속성
  a 태그의 기본 속성은 페이지를 이동시키면서, 페이지를 새로 불러옵니다.
  그렇게 되면서 react 앱이 지닌 상태도 초기화 됩니다.
  :::

- 위 이유 때문에 우리는 react에서 페이지를 이동시킬 때 무조건 react-router의 `Link` 컴포넌트를 사용해야 합니다.
- `Link`컴포넌트는 브라우저 주소만 바꾸고, 페이지를 새로고침 하지 않기 때문에 react 앱의 state를 초기화 하지 않습니다. 위 예제를 Link 태그에 맞게 수정하면 아래와 같습니다.

```jsx
import { Link } from "react-router-dom";

const Ex = () => {
  return (
    <Tabs key="/login" to="/login">
      로그인으로 이동
    </Tabs>
  );
};

const Tabs = styled(Link)`
  color: #f2f2f2;

  &:hover {
    background: #f1f1f1;
    color: black;
  }
`;
```

- 클릭을 이용해 이동할 때는 위처럼 Link 컴포넌트를 사용하고, 함수내에서 페이지를 이동할 때는 useHistory안의 history를 사용하면 됩니다.
- useHistory는 react-router v5에 새로 도입된 문법입니다. 사용방법은 아래와 같습니다.
- 또한 아래와 같이 페이지를 이동하면서 state를 담아 보낼 수 있습니다.

```jsx
import { useHistory, Link } from "react-router-dom";

const ExChangePage = () => {
  const history = useHistory();
  const changePage = () => {
    history.push({
      pathname: "/success",
      state: {
        title: "비밀번호 찾기 완료",
        body: "회원님의 비밀번호가 성공적으로 변경되었습니다.",
      },
    });
  };
};
```

- 이동한 페이지에서 state를 받는 방법은 location props를 이용하면 됩니다.
- 예시코드는 아래와 같습니다.

```jsx
function Success({ location }) {
  return (
    <div className="success">
      제목:
      {location.state.title}
      내용:
      {location.state.body}
    </div>
  );
}
```

## 결론

> a 태그 쓰지말고 Link 쓰자!

<TagLinks />

<Disqus />
