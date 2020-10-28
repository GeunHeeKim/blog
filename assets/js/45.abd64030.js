(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{446:function(t,s,a){"use strict";a.r(s);var n=a(25),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"antd-번들-사이즈-줄이기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#antd-번들-사이즈-줄이기"}},[t._v("#")]),t._v(" antd 번들 사이즈 줄이기")]),t._v(" "),a("p",[t._v("antd, antd-mobile, element-ui 등등 라이브러리를 많이 사용합니다"),a("br"),t._v("\n사용방법은 "),a("code",[t._v("import { List } from 'antd-mobile';")]),t._v(" 이런 방법으로 손쉽게 사용할 것입니다."),a("br"),t._v("\n위처럼 사용하시다보면 아래와 같은 "),a("code",[t._v("warning")]),t._v("을 발견할 수 있습니다.")]),t._v(" "),a("h2",{attrs:{id:"원인"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#원인"}},[t._v("#")]),t._v(" 원인")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("You are using a whole package of antd-mobile,\nplease use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.\n")])])]),a("ul",[a("li",[t._v("말 그대로 "),a("strong",[t._v("전체 번들을 가져오고 있으니, 필요한 것만 추려서 가져다 써라")]),t._v(" 이런 뜻입니다.")]),t._v(" "),a("li",[t._v("그렇다면 해결해봅시다.")])]),t._v(" "),a("h2",{attrs:{id:"babel-plugin-import-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-plugin-import-설치"}},[t._v("#")]),t._v(" babel-plugin-import 설치")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install babel-plugin-import --save-dev\n")])])]),a("h2",{attrs:{id:"babelic-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babelic-설정"}},[t._v("#")]),t._v(" .babelic 설정")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"presets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/preset-env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 아래와 같이 위에 설치한 라이브러리를 플러그인으로 넣어줍니다.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// libraryDirectory 값이 import로 불러올 변수가 됩니다.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"import"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"libraryName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"antd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"libraryDirectory"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lib"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ant"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"import"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"libraryName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"antd-mobile"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"libraryDirectory"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lib"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"antd-mobile"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"사용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용"}},[t._v("#")]),t._v(" 사용")]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이렇게 사용하던 것을")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Button "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"antd-mobile"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이렇게 사용하면 됩니다.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" List "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"antd-mobile/lib/list"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Button "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"antd-mobile/lib/list"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("한줄로 하던 것을 두줄, 세줄로 나오니 불편한 면이 있지만, 번들 사이즈를 현저히 줄일 수 있으므로 하나씩 필요한 것만 부르는 것이 더욱 시스템에 유리합니다.")])]),t._v(" "),a("TagLinks"),t._v(" "),a("Disqus")],1)}),[],!1,null,null,null);s.default=r.exports}}]);