(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{389:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"프리티어-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#프리티어-설정"}},[t._v("#")]),t._v(" 프리티어 설정")]),t._v(" "),a("p",[t._v("많은 개발자들이 코드포멧팅인 "),a("a",{attrs:{href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("프리티어"),a("OutboundLink")],1),t._v("를 많이 사용합니다.")]),t._v(" "),a("p",[t._v("같은 프로젝트를 여러 사람이 개발할 땐, 코드 포멧팅을 맞춰줘야하는데, 이때 프리티어 설정을 코드 컨벤션에 맞게 설정하면 모든 개발자가 같은 포맷으로 코딩을 할 수 있습니다.")]),t._v(" "),a("p",[t._v("그래서 이번 포스팅은 로컬에 있는 프리티어 설정을 "),a("strong",[t._v("무시")]),t._v("하고, 프로젝트 설정에 있는 컨벤션에 맞게 프리티어가 작동하게 하는 방법을 알아보겠습니다.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("개발자 노트북 VScode에 Prettier 설치")])]),t._v(" "),a("li",[a("p",[t._v("개발하는 프로젝트의 "),a("strong",[t._v("루트 디렉토리")]),t._v("에 "),a("code",[t._v(".prettierrc")]),t._v("를 생성합니다.")])]),t._v(" "),a("li",[a("p",[t._v("원하는 포맷 설정 작성")])])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("json")]),t._v(" 형식으로 작성합니다.")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//줄 바꿈 폭 길이")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"printWidth"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//탭 너비")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tabWidth"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//탭 사용 여부")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"useTabs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//세미클론 여부")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"semi"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//' or \"")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"singleQuote"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//여러줄 사용시, 뒷줄 콤마 여부")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"trailingComma"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"all"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//객체 리터럴 사용시 괄호에 공백 삽입 여부")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bracketSpacing"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// JSX의 마지막 `>`를 다음 줄로 내릴지 여부")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsxBracketSameLine"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//화살표 함수 괄호 사용 방식")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"arrowParens"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"avoid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//vue 파일의 script와 style태그 들여쓰기 여부")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vueIndentScriptAndStyle"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//맨마지막 줄 넣는지 여부")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"endOfLine"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auto"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("제가 중요하게 생각하는 설정만 넣었습니다. 이외에서 다른 설정 들이 많으니 찾아보시고 더 추가하기면 되겠습니다.")]),t._v(" "),a("TagLinks"),t._v(" "),a("Disqus")],1)}),[],!1,null,null,null);s.default=e.exports}}]);