(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{464:function(e,a,r){"use strict";r.r(a);var n=r(25),t=Object(n.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"lighthouse를-이용해-성능-최적화-하기-bundle-analyzer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lighthouse를-이용해-성능-최적화-하기-bundle-analyzer"}},[e._v("#")]),e._v(" lighthouse를 이용해 성능 최적화 하기 (bundle-analyzer)")]),e._v(" "),r("h2",{attrs:{id:"서론"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#서론"}},[e._v("#")]),e._v(" 서론")]),e._v(" "),r("p",[e._v("이번 포스팅은 우리가 초기에 불러오는 번들의 구성이 어떠한이 알려주는 "),r("code",[e._v("bundle-analyzer")]),e._v("에 대해서 알아보겠습니다.")]),e._v(" "),r("h2",{attrs:{id:"bundle-analyzer란"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bundle-analyzer란"}},[e._v("#")]),e._v(" bundle-analyzer란?")]),e._v(" "),r("p",[e._v("이 포스팅을 보기 전에, 크롬 개발자 도구의 Performance 탭을 먼저 보고 오셔야합니다. spa로 구성된 웹의 경우 Performance를 보면 초기에 번들 파일(js)을 다운 받기 때문에 시간이 오래 걸립니다. 그리고 이 큰 번들 파일을 성공적으로 다운로드 해야 렌더링이 시작되죠. 그래서 spa가 초기 로딩속도가 느리다고 하는 것입니다!")]),e._v(" "),r("p",[e._v("그래서!! 유난히 컸던 js 파일이 어떤 코드로 구성이 어떻게 되어 있는지 가시화 하여 어떻게 하면 초기 리로딩 성능을 개선할지 인사이트를 주는 도구가 "),r("code",[e._v("bundle-analyze")]),e._v("입니다")]),e._v(" "),r("h2",{attrs:{id:"사용"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#사용"}},[e._v("#")]),e._v(" 사용")]),e._v(" "),r("p",[e._v("google에 webpack bundle analyz를 검색하면 webpack Bundle Analyzer 툴을 찾을 수 있습니다. 웹팩을 통해 번들링된 파일이 어떻게 구성되어있는지 보여줍니다. 그리고 다운받은 도구를 사용하려면 "),r("code",[e._v("webpack.config.js")]),e._v("를 수정해야합니다.")]),e._v(" "),r("p",[e._v("cra로 프로젝트를 구성한 경우 "),r("code",[e._v("webpack.config.js")]),e._v("를 사용하려면 "),r("code",[e._v("eject")]),e._v("를 시켜야 해당 파일이 보입니다. 그리고 이젝트를 하는 순간... cra의 장점인 패키지의 통일성을 보장받을 수 없게되죠.....")]),e._v(" "),r("p",[e._v("혹시 "),r("code",[e._v("webpack.config.js")]),e._v("가 있으신 분들을 위한 링크를 남깁니다 "),r("a",{attrs:{href:"https://www.npmjs.com/package/webpack-bundle-analyzer",target:"_blank",rel:"noopener noreferrer"}},[e._v("링크"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("하지만 최근에 이젝트 시키지 않아도 사용 가능한 npm 툴이 나와서 이 도구를 사용할 것입니다.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.npmjs.com/package/cra-bundle-analyzer",target:"_blank",rel:"noopener noreferrer"}},[e._v("cra-bundle-analyzer"),r("OutboundLink")],1),e._v("에 들어가셔서 자세한 내용을 보고 오시면 됩니다.")]),e._v(" "),r("h2",{attrs:{id:"사용법"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#사용법"}},[e._v("#")]),e._v(" 사용법")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("npm install --save-dev cra-bundle-analyzer\n\n// 콘솔의 위치를 프로젝트로\nnpx cra-bundle-analyzer\n")])])]),r("p",[e._v("위 처럼 실행하면 현재 내가 설치한 패키지의 용량이 얼마나 차지하는지, 번들이 어떻게 구성되는지 볼 수 있습니다.")]),e._v(" "),r("h2",{attrs:{id:"번들-결과-살펴보기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#번들-결과-살펴보기"}},[e._v("#")]),e._v(" 번들 결과 살펴보기")]),e._v(" "),r("p",[r("code",[e._v("src")]),e._v(" 블럭은 우리가 실제 구현한 코드로 "),r("code",[e._v("main chunk")]),e._v("에 속합니다.\n"),r("code",[e._v("node_modules")]),e._v("이하 블럭은 우리가 npm으로 설치한 파일입니다.")]),e._v(" "),r("p",[e._v("이제 이 파일을 가지고 초기 로딩 시간을 줄여봅시다! "),r("a",{attrs:{href:"https://kyounghwan01.github.io/blog/React/optimize-performance/code-splitting/",target:"_blank",rel:"noopener noreferrer"}},[e._v("다음 포스팅"),r("OutboundLink")],1),e._v("에서 계속됩니다.")]),e._v(" "),r("TagLinks"),e._v(" "),r("Disqus")],1)}),[],!1,null,null,null);a.default=t.exports}}]);