webpackJsonp([0],{"5LVi":function(n,e,t){(n.exports=t("FZ+f")(!0)).push([n.i,"/* タイトル */\n.title[data-v-cf6573c0]{\nfont-size: 70px;\nfont-weight: 100px;\ncolor: rgb(235, 185, 22);\npadding:10px 0 20px 0;\nmargin: auto;\n}\n.page-wrapper[data-v-cf6573c0]{\n    position: inherit;\n    margin:auto;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    max-width: 80%;\n}\n/* /ボックス要素 */\n.box-wrapper[data-v-cf6573c0]{\n    width: 80%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0;\n    width: 100%;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n/* フォント */\n/*  */\n","",{version:3,sources:["/Users/hirotakaede/kaedeportfolio/src/assets/styles/base.css","/Users/hirotakaede/kaedeportfolio/src/components/src/components/Contact.vue"],names:[],mappings:"AAAA,UAAU;AACV;AACA,gBAAgB;AAChB,mBAAmB;AACnB,yBAAyB;AACzB,sBAAsB;AACtB,aAAa;CACZ;AACD;IACI,kBAAkB;IAClB,YAAY;IACZ,yBAAwB;QAAxB,sBAAwB;YAAxB,wBAAwB;IACxB,eAAe;CAClB;AAED,aAAa;AACb;IACI,WAAW;IACX,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,UAAU;IACV,YAAY;IACZ,yBAAwB;QAAxB,sBAAwB;YAAxB,wBAAwB;IACxB,oBAAgB;QAAhB,gBAAgB;CACjB;AACH,UAAU;ACLV,MAAA",file:"Contact.vue",sourcesContent:["/* タイトル */\n.title{\nfont-size: 70px;\nfont-weight: 100px;\ncolor: rgb(235, 185, 22);\npadding:10px 0 20px 0;\nmargin: auto;\n}\n.page-wrapper{\n    position: inherit;\n    margin:auto;\n    justify-content: center;\n    max-width: 80%;\n}\n\n/* /ボックス要素 */\n.box-wrapper{\n    width: 80%;\n    display: flex;\n    margin: 0;\n    width: 100%;\n    justify-content: center;\n    flex-wrap: wrap; \n  }\n/* フォント */","<template>\n    <section>\n        <div class=\"page-wrapper\">\n            <h1 class=\"title\">Contact</h1>\n        </div>\n    </section>\n</template>\n\n<script>\nexport default {\n  name: 'Contact',\n  data () {\n    return {\n    }\n  }\n}\n<\/script>\n<style scoped>\n@import '../assets/styles/base.css';\n/*  */\n</style>\n"],sourceRoot:""}])},"7DgA":function(n,e,t){(n.exports=t("FZ+f")(!0)).push([n.i,"\n.header-color[data-v-91b6ff58]{\n    background-color: black;\n    position:sticky; top:0;\n    width:100%;\n}\n.changecolor[data-v-91b6ff58]{\n  background-color: rgb(185, 55, 55);\n}\nol[data-v-91b6ff58] {\n  margin-top: 0;\n  margin-left: auto;\n  width: 600px;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0;\n  list-style: none;\n}\nli[data-v-91b6ff58] {\n  width: 100px;\n  height: 50px;\n  margin-left:10px;\n  margin-right:10px;\n  font-size: 14px;\n  background-color: black;\n  border-radius: 8px;\n  position: relative;\n}\nli[data-v-91b6ff58]:hover {\n  opacity: 0.4;\n}\na[data-v-91b6ff58] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  color: white;\n  text-decoration: none;\n  line-height: 50px;\n}\n","",{version:3,sources:["/Users/hirotakaede/kaedeportfolio/src/components/src/components/TopMenu.vue"],names:[],mappings:";AA+CA;IACA,wBAAA;IAEA,gBAAA,CAAA,MAAA;IACA,WAAA;CACA;AACA;EACA,mCAAA;CACA;AACA;EACA,cAAA;EACA,kBAAA;EACA,aAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;EACA,WAAA;EACA,iBAAA;CACA;AAEA;EACA,aAAA;EACA,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,wBAAA;EACA,mBAAA;EACA,mBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,mBAAA;EACA,QAAA;EACA,OAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;CACA",file:"TopMenu.vue",sourcesContent:["<template>\n    <div class=\"header-color\">\n        <ol>\n            <li v-for=\"(item, i) in items\" :key=i>\n                <router-link v-bind:to= item.path>\n                    {{ item.title }}\n                </router-link>\n            </li>\n        </ol>\n    </div>\n</template>\n\n<script>\nexport default {\n  name: 'TopMenu',\n  data () {\n    return {\n      changecolor: false,\n      items: [\n        { title: 'HOME', path: '/' },\n        { title: 'PROFILE', path: '/profile' },\n        { title: 'SKILL', path: '/skill' },\n        { title: 'WORK', path: '/work' },\n        { title: 'CONTACT', path: '/contact' }\n      ]\n    }\n  },\n  mounted () {\n    window.addEventListener('scroll', this.onScroll)\n  },\n  destroyed () {\n    window.removeEventListener('scroll', this.onScroll)\n  },\n  methods: {\n    onScroll () {\n      if (window.scrollY > 0) {\n        document.getElementsByClassName(`header-color`)[0].style.opacity = 0.5\n      } else {\n        document.getElementsByClassName(`header-color`)[0].style.opacity = 1.0\n      }\n    }\n  }\n}\n<\/script>\n\n<style scoped>\n\n.header-color{\n    background-color: black;\n    position:-webkit-sticky;\n    position:sticky; top:0;\n    width:100%;\n}\n.changecolor{\n  background-color: rgb(185, 55, 55);\n}\nol {\n  margin-top: 0;\n  margin-left: auto;\n  width: 600px;\n  display:flex;\n  justify-content: center;\n  padding: 0;\n  list-style: none;\n}\n\nli {\n  width: 100px;\n  height: 50px;\n  margin-left:10px;\n  margin-right:10px;\n  font-size: 14px;\n  background-color: black;\n  border-radius: 8px;\n  position: relative;\n}\n\nli:hover {\n  opacity: 0.4;\n}\n\na {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  color: white;\n  text-decoration: none;\n  line-height: 50px;\n}\n</style>\n"],sourceRoot:""}])},CK2B:function(n,e,t){var A=t("7DgA");"string"==typeof A&&(A=[[n.i,A,""]]),A.locals&&(n.exports=A.locals);t("rjj0")("18d4cc1a",A,!1,{})},G9YX:function(n,e,t){(n.exports=t("FZ+f")(!0)).push([n.i,"\nh1[data-v-8dc7cce2], h2[data-v-8dc7cce2] {\n  font-weight: normal;\n}\nul[data-v-8dc7cce2] {\n  list-style-type: none;\n  padding: 0;\n}\nli[data-v-8dc7cce2] {\n  display: inline-block;\n  margin: 0 10px;\n}\na[data-v-8dc7cce2] {\n  color: #42b983;\n}\n","",{version:3,sources:["/Users/hirotakaede/kaedeportfolio/src/components/src/components/Home.vue"],names:[],mappings:";AAmBA;EACA,oBAAA;CACA;AACA;EACA,sBAAA;EACA,WAAA;CACA;AACA;EACA,sBAAA;EACA,eAAA;CACA;AACA;EACA,eAAA;CACA",file:"Home.vue",sourcesContent:["<template>\n  <div class=\"hello\">\n    <h1>{{ msg }}</h1>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'Home',\n  data () {\n    return {\n      msg: 'Welcom to my home page!'\n    }\n  }\n}\n<\/script>\n\n\x3c!-- Add \"scoped\" attribute to limit CSS to this component only --\x3e\n<style scoped>\nh1, h2 {\n  font-weight: normal;\n}\nul {\n  list-style-type: none;\n  padding: 0;\n}\nli {\n  display: inline-block;\n  margin: 0 10px;\n}\na {\n  color: #42b983;\n}\n</style>\n"],sourceRoot:""}])},GHGh:function(n,e,t){var A=t("z/+d");"string"==typeof A&&(A=[[n.i,A,""]]),A.locals&&(n.exports=A.locals);t("rjj0")("08bac906",A,!1,{})},JXf5:function(n,e,t){var A=t("G9YX");"string"==typeof A&&(A=[[n.i,A,""]]),A.locals&&(n.exports=A.locals);t("rjj0")("678c2d17",A,!1,{})},L53r:function(n,e,t){(n.exports=t("FZ+f")(!0)).push([n.i,"/* タイトル */\n.title[data-v-657525d1]{\nfont-size: 70px;\nfont-weight: 100px;\ncolor: rgb(235, 185, 22);\npadding:10px 0 20px 0;\nmargin: auto;\n}\n.page-wrapper[data-v-657525d1]{\n    position: inherit;\n    margin:auto;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    max-width: 80%;\n}\n/* /ボックス要素 */\n.box-wrapper[data-v-657525d1]{\n    width: 80%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0;\n    width: 100%;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n/* フォント */\n.card-wrapper[data-v-657525d1]{\n    -webkit-box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);\n            box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);\n    width: 40%;\n    vertical-align: top;\n    margin: 20px;\n    border-radius: 20px;\n    position: relative;\n    padding-bottom: 10px;\n}\n.table-wrapper[data-v-657525d1]{\n    -webkit-box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);\n            box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);\n    border-radius: 20px;\n}\nul[data-v-657525d1]{\n    padding:0%;\n    list-style-type: none;\n    display: grid;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    grid-template-columns: repeat(3, 150px);\n     /* @media(max-width: 1410px) {\n            grid-template-columns: repeat(2, 200px);\n    }\n    @media (max-width: 670px) {\n             grid-template-columns: 200px;\n    } */\n}\ntable[data-v-657525d1] {\n    display: inline-block;\n    margin-left: 32px;\n    text-align: left;\n}\ntr[data-v-657525d1] {\n    height: 100px;\n}\nth[data-v-657525d1] {\n    padding-right: 20px;\n    font-weight: normal;\n    color: rgb(0, 0, 0);\n}\ntd[data-v-657525d1] {\n    padding-right: 30px;\n}\na[data-v-657525d1] {\n  text-decoration: none;\n}\n","",{version:3,sources:["/Users/hirotakaede/kaedeportfolio/src/assets/styles/base.css","/Users/hirotakaede/kaedeportfolio/src/components/src/components/Skill.vue"],names:[],mappings:"AAAA,UAAU;AACV;AACA,gBAAgB;AAChB,mBAAmB;AACnB,yBAAyB;AACzB,sBAAsB;AACtB,aAAa;CACZ;AACD;IACI,kBAAkB;IAClB,YAAY;IACZ,yBAAwB;QAAxB,sBAAwB;YAAxB,wBAAwB;IACxB,eAAe;CAClB;AAED,aAAa;AACb;IACI,WAAW;IACX,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,UAAU;IACV,YAAY;IACZ,yBAAwB;QAAxB,sBAAwB;YAAxB,wBAAwB;IACxB,oBAAgB;QAAhB,gBAAgB;CACjB;AACH,UAAU;ACyDV;IACA,gDAAA;YAAA,wCAAA;IACA,WAAA;IACA,oBAAA;IACA,aAAA;IACA,oBAAA;IACA,mBAAA;IACA,qBAAA;CACA;AACA;IACA,gDAAA;YAAA,wCAAA;IACA,oBAAA;CACA;AACA;IACA,WAAA;IACA,sBAAA;IACA,cAAA;IACA,yBAAA;QAAA,sBAAA;YAAA,wBAAA;IACA,wCAAA;KACA;;;;;QAKA;CACA;AACA;IACA,sBAAA;IACA,kBAAA;IACA,iBAAA;CACA;AACA;IACA,cAAA;CACA;AACA;IACA,oBAAA;IACA,oBAAA;IACA,oBAAA;CACA;AACA;IACA,oBAAA;CACA;AACA;EACA,sBAAA;CACA",file:"Skill.vue",sourcesContent:["/* タイトル */\n.title{\nfont-size: 70px;\nfont-weight: 100px;\ncolor: rgb(235, 185, 22);\npadding:10px 0 20px 0;\nmargin: auto;\n}\n.page-wrapper{\n    position: inherit;\n    margin:auto;\n    justify-content: center;\n    max-width: 80%;\n}\n\n/* /ボックス要素 */\n.box-wrapper{\n    width: 80%;\n    display: flex;\n    margin: 0;\n    width: 100%;\n    justify-content: center;\n    flex-wrap: wrap; \n  }\n/* フォント */","<template>\n    <section>\n        <div class=\"page-wrapper\">\n            <h1 class=\"title\">skill</h1>\n            <div class=\"box-wrapper\">\n                <div v-for=\"(skill, i) in skills\" :key=\"i\" class=\"card-wrapper\">\n                    <h3>{{ skill.title }}</h3>\n                    <ul>\n                        <li v-for=\"(lang, i) in skill.langs\" :key=\"i\">\n                            {{ lang.name }}\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"table-wrapper\">\n                    <h3>インターン</h3>\n                    <table>\n                        <tbody>\n                            <tr v-for=\"(intern, i) in interns\" :key=\"i\">\n                                <th>{{ intern.name }}</th>\n                                <td>{{ intern.company }}</td>\n                                <td>{{ intern.contents }}</td>\n                                <td>{{ intern.detail }}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </section>\n</template>\n\n<script>\nexport default {\n  name: 'Skills',\n  data () {\n    return {\n      skills: [\n        {title: 'アルバイト',\n          langs: [\n            { name: 'HTML/CSS' },\n            { name: 'jQuery' },\n            { name: 'JavaScript' },\n            { name: 'PHP' },\n            { name: 'MySQL' },\n            { name: 'Swift' },\n            { name: 'Kotlin' },\n            { name: 'GitHub' },\n            { name: 'Docker' },\n            { name: 'WordPress' }\n          ]\n        },\n        {title: '講義',\n          langs: [\n            { name: 'Python' },\n            { name: 'Java' },\n            { name: 'C' },\n            { name: 'Processing' }\n          ]\n        },\n        {title: '個人学習',\n          langs: [\n            { name: 'Go' },\n            { name: 'Vue.js' },\n            { name: 'PHP(Laravel)' },\n            { name: 'MySQL' },\n            { name: 'Docker' }\n          ]\n        }\n      ],\n      interns: [\n        {name: 'Go,MySQL', company: '株式会社サイバーエージェント', contents: 'Dojo CA Tech Dojo 〜サーバサイドGo編〜参加', detail: '2週間でwebAPIを自力で作れるようになることを目標に、個々人が課題に取り組む学主型インターンでした。具体的にいうとソーシャルゲームのAPIで、ガチャ機能、ランキング機能などの実装を行いました。'},\n        {name: 'PHP(Laravel)', company: '株式会社ウエディングパーク', contents: '４日間のハッカソン型インターン', detail: '３人１組でチームを作り、テーマに沿って企画、設計、開発、プレゼンテーションという一連の流れを短期間で体験するインターンでした。自分はサーバーサイドを担当しました。'},\n        {name: 'Docker', company: '株式会社ディレクターズ', contents: 'コンテナ開発', detail: 'コマンド知識の学習や一からDockerイメージの作成をしたり、コンテナの作り方を一から学ぶというものでした。'}\n      ]\n    }\n  }\n}\n<\/script>\n<style scoped>\n@import '../assets/styles/base.css';\n\n.card-wrapper{\n    box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);\n    width: 40%;\n    vertical-align: top;\n    margin: 20px;\n    border-radius: 20px;\n    position: relative;\n    padding-bottom: 10px;\n}\n.table-wrapper{\n    box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);\n    border-radius: 20px;\n}\nul{\n    padding:0%;\n    list-style-type: none;\n    display: grid;\n    justify-content: center;\n    grid-template-columns: repeat(3, 150px);\n     /* @media(max-width: 1410px) {\n            grid-template-columns: repeat(2, 200px);\n    }\n    @media (max-width: 670px) {\n             grid-template-columns: 200px;\n    } */\n}\ntable {\n    display: inline-block;\n    margin-left: 32px;\n    text-align: left;\n}\ntr {\n    height: 100px;\n}\nth {\n    padding-right: 20px;\n    font-weight: normal;\n    color: rgb(0, 0, 0);\n}\ntd {\n    padding-right: 30px;\n}\na {\n  text-decoration: none;\n}\n</style>\n"],sourceRoot:""}])},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var A=t("7+uW"),a={name:"TopMenu",data:function(){return{changecolor:!1,items:[{title:"HOME",path:"/"},{title:"PROFILE",path:"/profile"},{title:"SKILL",path:"/skill"},{title:"WORK",path:"/work"},{title:"CONTACT",path:"/contact"}]}},mounted:function(){window.addEventListener("scroll",this.onScroll)},destroyed:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(){window.scrollY>0?document.getElementsByClassName("header-color")[0].style.opacity=.5:document.getElementsByClassName("header-color")[0].style.opacity=1}}},i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"header-color"},[t("ol",n._l(n.items,function(e,A){return t("li",{key:A},[t("router-link",{attrs:{to:e.path}},[n._v("\n                "+n._s(e.title)+"\n            ")])],1)}),0)])};i._withStripped=!0;var o={render:i,staticRenderFns:[]},r=o;var s=!1;var l=t("VU/8")(a,r,!1,function(n){s||t("CK2B")},"data-v-91b6ff58",null);l.options.__file="src/components/TopMenu.vue";var p={name:"App",components:{TopMenu:l.exports}},c=function(){var n=this.$createElement,e=this._self._c||n;return e("div",{attrs:{id:"app"}},[e("top-menu"),this._v(" "),e("router-view")],1)};c._withStripped=!0;var d={render:c,staticRenderFns:[]},m=d;var C=!1;var f=t("VU/8")(p,m,!1,function(n){C||t("GHGh")},null,null);f.options.__file="src/App.vue";var u=f.exports,x=t("/ocq"),g=function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))])])};g._withStripped=!0;var h={render:g,staticRenderFns:[]},v=h;var B=!1;var w=t("VU/8")({name:"Home",data:function(){return{msg:"Welcom to my home page!"}}},v,!1,function(n){B||t("JXf5")},"data-v-8dc7cce2",null);w.options.__file="src/components/Home.vue";var b=w.exports,y=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",[t("div",{staticClass:"page-wrapper"},[t("h1",{staticClass:"title"},[n._v("Profile")]),n._v(" "),t("div",{staticClass:"line-eq-wrapper"},[n._m(0),n._v(" "),t("table",[t("tbody",n._l(n.items,function(e,A){return t("tr",{key:A},[t("th",[n._v(n._s(e.title))]),n._v(" "),e.url?t("td",{},[t("a",{staticClass:"url-color",attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[n._v("\n                "+n._s(e.value)+"\n              ")])]):t("td",{staticClass:"last-td"},[n._v("\n              "+n._s(e.value)+"\n            ")])])}),0)])])])])},k=[function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"profile-img"},[e("img",{staticClass:"img-size",attrs:{src:t("zlpE"),tittle:"プロフィール画像"}})])}];y._withStripped=!0;var I={render:y,staticRenderFns:k},_=I;var E=!1;var j=t("VU/8")({name:"Profile",data:function(){return{items:[{title:"Name",value:"広田楓(ひろたかえで)",url:""},{title:"University",value:"公立はこだて未来大学 情報システム科学部 複雑系コース",url:""},{title:"E-mail",value:"b1017222@fun.ac.jp",url:""},{title:"GitHub",value:"こちらからどうぞ！",url:"https://github.com/b1017222"},{title:"Comment",value:"初めまして。北海道函館出身の大学生です。1年半程前にプログラミングに興味を持ち始め、そこからインターンでサーバーサイド言語に触れたのを機にバックエンドからの学習を進めていました。一年前からプログラミングのアルバイトを始め、主にスマホ向けアプリやwebアプリケーションの受託開発に携わっています。そのため普段はバックエンドからフロントエンドまで幅広く案件に触れる機会が多いです。また最近ではwebアプリケーションに興味を持ち始め、モダンjsやデータベースについて学習しています。",url:""}]}}},_,!1,function(n){E||t("X+TC")},"data-v-bf1681ae",null);j.options.__file="src/components/Profile.vue";var U=j.exports,Y=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",[t("div",{staticClass:"page-wrapper"},[t("h1",{staticClass:"title"},[n._v("skill")]),n._v(" "),t("div",{staticClass:"box-wrapper"},[n._l(n.skills,function(e,A){return t("div",{key:A,staticClass:"card-wrapper"},[t("h3",[n._v(n._s(e.title))]),n._v(" "),t("ul",n._l(e.langs,function(e,A){return t("li",{key:A},[n._v("\n                        "+n._s(e.name)+"\n                    ")])}),0)])}),n._v(" "),t("div",{staticClass:"table-wrapper"},[t("h3",[n._v("インターン")]),n._v(" "),t("table",[t("tbody",n._l(n.interns,function(e,A){return t("tr",{key:A},[t("th",[n._v(n._s(e.name))]),n._v(" "),t("td",[n._v(n._s(e.company))]),n._v(" "),t("td",[n._v(n._s(e.contents))]),n._v(" "),t("td",[n._v(n._s(e.detail))])])}),0)])])],2)])])};Y._withStripped=!0;var S={render:Y,staticRenderFns:[]},P=S;var z=!1;var H=t("VU/8")({name:"Skills",data:function(){return{skills:[{title:"アルバイト",langs:[{name:"HTML/CSS"},{name:"jQuery"},{name:"JavaScript"},{name:"PHP"},{name:"MySQL"},{name:"Swift"},{name:"Kotlin"},{name:"GitHub"},{name:"Docker"},{name:"WordPress"}]},{title:"講義",langs:[{name:"Python"},{name:"Java"},{name:"C"},{name:"Processing"}]},{title:"個人学習",langs:[{name:"Go"},{name:"Vue.js"},{name:"PHP(Laravel)"},{name:"MySQL"},{name:"Docker"}]}],interns:[{name:"Go,MySQL",company:"株式会社サイバーエージェント",contents:"Dojo CA Tech Dojo 〜サーバサイドGo編〜参加",detail:"2週間でwebAPIを自力で作れるようになることを目標に、個々人が課題に取り組む学主型インターンでした。具体的にいうとソーシャルゲームのAPIで、ガチャ機能、ランキング機能などの実装を行いました。"},{name:"PHP(Laravel)",company:"株式会社ウエディングパーク",contents:"４日間のハッカソン型インターン",detail:"３人１組でチームを作り、テーマに沿って企画、設計、開発、プレゼンテーションという一連の流れを短期間で体験するインターンでした。自分はサーバーサイドを担当しました。"},{name:"Docker",company:"株式会社ディレクターズ",contents:"コンテナ開発",detail:"コマンド知識の学習や一からDockerイメージの作成をしたり、コンテナの作り方を一から学ぶというものでした。"}]}}},P,!1,function(n){z||t("dcUF")},"data-v-657525d1",null);H.options.__file="src/components/Skill.vue";var L=H.exports,W=function(){var n=this.$createElement;this._self._c;return this._m(0)};W._withStripped=!0;var D={render:W,staticRenderFns:[function(){var n=this.$createElement,e=this._self._c||n;return e("section",[e("div",{staticClass:"page-wrapper"},[e("h1",{staticClass:"title"},[this._v("Work")])])])}]},Q=D;var M=!1;var V=t("VU/8")({name:"Work",data:function(){return{}}},Q,!1,function(n){M||t("g8pf")},"data-v-4faafa7e",null);V.options.__file="src/components/Work.vue";var T=V.exports,Z=function(){var n=this.$createElement;this._self._c;return this._m(0)};Z._withStripped=!0;var q={render:Z,staticRenderFns:[function(){var n=this.$createElement,e=this._self._c||n;return e("section",[e("div",{staticClass:"page-wrapper"},[e("h1",{staticClass:"title"},[this._v("Contact")])])])}]},F=q;var R=!1;var G=t("VU/8")({name:"Contact",data:function(){return{}}},F,!1,function(n){R||t("bb4n")},"data-v-cf6573c0",null);G.options.__file="src/components/Contact.vue";var K=G.exports;A.a.use(x.a);var N=new x.a({routes:[{path:"/",name:"Home",component:b},{path:"/profile",name:"Profile",component:U},{path:"/skill",name:"Skill",component:L},{path:"/work",name:"Work",component:T},{path:"/contact",name:"Contact",component:K}]});A.a.config.productionTip=!1,new A.a({el:"#app",router:N,components:{App:u},template:"<App/>"})},"X+TC":function(n,e,t){var A=t("h7sy");"string"==typeof A&&(A=[[n.i,A,""]]),A.locals&&(n.exports=A.locals);t("rjj0")("dc179cec",A,!1,{})},apYA:function(n,e,t){(n.exports=t("FZ+f")(!0)).push([n.i,"/* タイトル */\n.title[data-v-4faafa7e]{\nfont-size: 70px;\nfont-weight: 100px;\ncolor: rgb(235, 185, 22);\npadding:10px 0 20px 0;\nmargin: auto;\n}\n.page-wrapper[data-v-4faafa7e]{\n    position: inherit;\n    margin:auto;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    max-width: 80%;\n}\n/* /ボックス要素 */\n.box-wrapper[data-v-4faafa7e]{\n    width: 80%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0;\n    width: 100%;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n/* フォント */\n/*  */\n","",{version:3,sources:["/Users/hirotakaede/kaedeportfolio/src/assets/styles/base.css","/Users/hirotakaede/kaedeportfolio/src/components/src/components/Work.vue"],names:[],mappings:"AAAA,UAAU;AACV;AACA,gBAAgB;AAChB,mBAAmB;AACnB,yBAAyB;AACzB,sBAAsB;AACtB,aAAa;CACZ;AACD;IACI,kBAAkB;IAClB,YAAY;IACZ,yBAAwB;QAAxB,sBAAwB;YAAxB,wBAAwB;IACxB,eAAe;CAClB;AAED,aAAa;AACb;IACI,WAAW;IACX,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,UAAU;IACV,YAAY;IACZ,yBAAwB;QAAxB,sBAAwB;YAAxB,wBAAwB;IACxB,oBAAgB;QAAhB,gBAAgB;CACjB;AACH,UAAU;ACLV,MAAA",file:"Work.vue",sourcesContent:["/* タイトル */\n.title{\nfont-size: 70px;\nfont-weight: 100px;\ncolor: rgb(235, 185, 22);\npadding:10px 0 20px 0;\nmargin: auto;\n}\n.page-wrapper{\n    position: inherit;\n    margin:auto;\n    justify-content: center;\n    max-width: 80%;\n}\n\n/* /ボックス要素 */\n.box-wrapper{\n    width: 80%;\n    display: flex;\n    margin: 0;\n    width: 100%;\n    justify-content: center;\n    flex-wrap: wrap; \n  }\n/* フォント */","<template>\n    <section>\n        <div class=\"page-wrapper\">\n            <h1 class=\"title\">Work</h1>\n        </div>\n    </section>\n</template>\n\n<script>\nexport default {\n  name: 'Work',\n  data () {\n    return {\n    }\n  }\n}\n<\/script>\n<style scoped>\n@import '../assets/styles/base.css';\n/*  */\n</style>\n"],sourceRoot:""}])},bb4n:function(n,e,t){var A=t("5LVi");"string"==typeof A&&(A=[[n.i,A,""]]),A.locals&&(n.exports=A.locals);t("rjj0")("0776dd62",A,!1,{})},dcUF:function(n,e,t){var A=t("L53r");"string"==typeof A&&(A=[[n.i,A,""]]),A.locals&&(n.exports=A.locals);t("rjj0")("1b2360f1",A,!1,{})},g8pf:function(n,e,t){var A=t("apYA");"string"==typeof A&&(A=[[n.i,A,""]]),A.locals&&(n.exports=A.locals);t("rjj0")("5fd0e1ae",A,!1,{})},h7sy:function(n,e,t){(n.exports=t("FZ+f")(!0)).push([n.i,"/* タイトル */\n.title[data-v-bf1681ae]{\nfont-size: 70px;\nfont-weight: 100px;\ncolor: rgb(235, 185, 22);\npadding:10px 0 20px 0;\nmargin: auto;\n}\n.page-wrapper[data-v-bf1681ae]{\n    position: inherit;\n    margin:auto;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    max-width: 80%;\n}\n/* /ボックス要素 */\n.box-wrapper[data-v-bf1681ae]{\n    width: 80%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0;\n    width: 100%;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n/* フォント */\n.line-eq-wrapper[data-v-bf1681ae]{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-sizing:content-box;\n            box-sizing:content-box;\n}\n.img-size[data-v-bf1681ae]{\n    width: 400px;\n}\n.profile-img[data-v-bf1681ae]{\n     display: inline-block;\n}\np[data-v-bf1681ae]{\n  margin: 0 auto;\n}\n/* ▼テーブル▼ */\ntable[data-v-bf1681ae] {\n    display: inline-block;\n    margin-left: 32px;\n    text-align: left;\n}\ntr[data-v-bf1681ae] {\n    height: 52px;\n}\nth[data-v-bf1681ae] {\n    padding-right: 20px;\n    font-weight: normal;\n    color: rgb(0, 0, 0);\n}\ntd[data-v-bf1681ae] {\n    font-size: 20px;\n    padding: 5px 8px 5px 0;\n}\na[data-v-bf1681ae] {\n  text-decoration: none;\n}\n.url-color[data-v-bf1681ae]{\n    color: rgb(216, 80, 18);\n}\n/* ▲テーブル▲ */\n/* スマホ */\n/* @media (max-width: 670px) {\n    td {\n      display: block;\n      font-size: 16px;\n      width: 100%;\n      padding: 5px 0;\n      border-bottom: none;\n    }\n    .line-eq-wrapper{\n    }\n} */\n","",{version:3,sources:["/Users/hirotakaede/kaedeportfolio/src/assets/styles/base.css","/Users/hirotakaede/kaedeportfolio/src/components/src/components/Profile.vue"],names:[],mappings:"AAAA,UAAU;AACV;AACA,gBAAgB;AAChB,mBAAmB;AACnB,yBAAyB;AACzB,sBAAsB;AACtB,aAAa;CACZ;AACD;IACI,kBAAkB;IAClB,YAAY;IACZ,yBAAwB;QAAxB,sBAAwB;YAAxB,wBAAwB;IACxB,eAAe;CAClB;AAED,aAAa;AACb;IACI,WAAW;IACX,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,UAAU;IACV,YAAY;IACZ,yBAAwB;QAAxB,sBAAwB;YAAxB,wBAAwB;IACxB,oBAAgB;QAAhB,gBAAgB;CACjB;AACH,UAAU;ACwBV;IACA,qBAAA;IAAA,qBAAA;IAAA,cAAA;IACA,yBAAA;QAAA,sBAAA;YAAA,wBAAA;IACA,0BAAA;QAAA,uBAAA;YAAA,oBAAA;IACA,+BAAA;YAAA,uBAAA;CACA;AACA;IACA,aAAA;CACA;AACA;KACA,sBAAA;CACA;AACA;EACA,eAAA;CACA;AACA,YAAA;AACA;IACA,sBAAA;IACA,kBAAA;IACA,iBAAA;CACA;AACA;IACA,aAAA;CACA;AACA;IACA,oBAAA;IACA,oBAAA;IACA,oBAAA;CACA;AACA;IACA,gBAAA;IACA,uBAAA;CACA;AACA;EACA,sBAAA;CACA;AACA;IACA,wBAAA;CACA;AACA,YAAA;AAEA,SAAA;AACA;;;;;;;;;;IAUA",file:"Profile.vue",sourcesContent:["/* タイトル */\n.title{\nfont-size: 70px;\nfont-weight: 100px;\ncolor: rgb(235, 185, 22);\npadding:10px 0 20px 0;\nmargin: auto;\n}\n.page-wrapper{\n    position: inherit;\n    margin:auto;\n    justify-content: center;\n    max-width: 80%;\n}\n\n/* /ボックス要素 */\n.box-wrapper{\n    width: 80%;\n    display: flex;\n    margin: 0;\n    width: 100%;\n    justify-content: center;\n    flex-wrap: wrap; \n  }\n/* フォント */","<template>\n  <section>\n    <div class=\"page-wrapper\">\n      <h1 class=\"title\">Profile</h1>\n      <div class=\"line-eq-wrapper\">\n        <div class=\"profile-img\">\n          <img class=\"img-size\" src=\"../assets/myface.png\" tittle=\"プロフィール画像\">\n        </div>\n        <table>\n          <tbody>\n            <tr v-for=\"(item, i) in items\" :key=\"i\">\n              <th>{{ item.title }}</th>\n              <td v-if=\"item.url\" class=\"\">\n                <a :href=\"item.url\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"url-color\">\n                  {{ item.value }}\n                </a>\n              </td>\n              <td v-else class=\"last-td\">\n                {{ item.value }}\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </section>\n</template>\n\n<script>\nexport default {\n  name: 'Profile',\n  data () {\n    return {\n      items: [\n        {title: 'Name', value: '広田楓(ひろたかえで)', url: ''},\n        {title: 'University', value: '公立はこだて未来大学 情報システム科学部 複雑系コース', url: ''},\n        {title: 'E-mail', value: 'b1017222@fun.ac.jp', url: ''},\n        {title: 'GitHub', value: 'こちらからどうぞ！', url: 'https://github.com/b1017222'},\n        {title: 'Comment', value: '初めまして。北海道函館出身の大学生です。1年半程前にプログラミングに興味を持ち始め、そこからインターンでサーバーサイド言語に触れたのを機にバックエンドからの学習を進めていました。一年前からプログラミングのアルバイトを始め、主にスマホ向けアプリやwebアプリケーションの受託開発に携わっています。そのため普段はバックエンドからフロントエンドまで幅広く案件に触れる機会が多いです。また最近ではwebアプリケーションに興味を持ち始め、モダンjsやデータベースについて学習しています。', url: ''}\n      ]\n    }\n  }\n}\n<\/script>\n\n<style scoped>\n@import '../assets/styles/base.css';\n\n.line-eq-wrapper{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-sizing:content-box;\n}\n.img-size{\n    width: 400px;\n}\n.profile-img{\n     display: inline-block;\n}\np{\n  margin: 0 auto;\n }\n/* ▼テーブル▼ */\ntable {\n    display: inline-block;\n    margin-left: 32px;\n    text-align: left;\n}\ntr {\n    height: 52px;\n}\nth {\n    padding-right: 20px;\n    font-weight: normal;\n    color: rgb(0, 0, 0);\n}\ntd {\n    font-size: 20px;\n    padding: 5px 8px 5px 0;\n}\na {\n  text-decoration: none;\n}\n.url-color{\n    color: rgb(216, 80, 18);\n}\n/* ▲テーブル▲ */\n\n/* スマホ */\n/* @media (max-width: 670px) {\n    td {\n      display: block;\n      font-size: 16px;\n      width: 100%;\n      padding: 5px 0;\n      border-bottom: none;\n    }\n    .line-eq-wrapper{\n    }\n} */\n</style>\n"],sourceRoot:""}])},"z/+d":function(n,e,t){(n.exports=t("FZ+f")(!0)).push([n.i,"\nbody {\n  margin: auto;\n}\n#app {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n}\n","",{version:3,sources:["/Users/hirotakaede/kaedeportfolio/src/src/App.vue"],names:[],mappings:";AAoBA;EACA,aAAA;CACA;AACA;EACA,oDAAA;EACA,oCAAA;EACA,mCAAA;EACA,mBAAA;EACA,eAAA;CACA",file:"App.vue",sourcesContent:["<template>\n  <div id=\"app\">\n    <top-menu></top-menu>\n    <router-view/>\n  </div>\n</template>\n\n<script>\n\nimport TopMenu from './components/TopMenu.vue'\n\nexport default {\n  name: 'App',\n  components: {\n    TopMenu\n  }\n}\n<\/script>\n\n<style>\nbody {\n  margin: auto;\n}\n#app {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n}\n</style>\n"],sourceRoot:""}])},zlpE:function(n,e,t){n.exports=t.p+"static/img/myface.3f61f12.png"}},["NHnr"]);
//# sourceMappingURL=app.3699a7a93df89631cc9f.js.map