(function(e){function t(t){for(var n,l,r=t[0],s=t[1],i=t[2],u=0,j=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&j.push(a[l][0]),a[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);b&&b(t);while(j.length)j.shift()();return o.push.apply(o,i||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],n=!0,r=1;r<c.length;r++){var s=c[r];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=c[0]))}return e}var n={},a={app:0},o=[];function l(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=e,l.c=n,l.d=function(e,t,c){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(c,n,function(t){return e[t]}.bind(null,n));return c},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/kaedeportfolio/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var i=0;i<r.length;i++)t(r[i]);var b=s;o.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"029d":function(e,t,c){"use strict";c("85a5")},"06bd":function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),a={id:"wrap"},o={id:"app"};function l(e,t,c,l,r,s){var i=Object(n["y"])("top-menu"),b=Object(n["y"])("router-view");return Object(n["q"])(),Object(n["e"])("body",null,[Object(n["h"])("div",a,[Object(n["h"])("div",o,[Object(n["h"])(i),Object(n["h"])(b,{class:"container"})])])])}var r=Object(n["F"])("data-v-32df5a02");Object(n["t"])("data-v-32df5a02");var s={class:"row"},i={class:"header-color"},b={class:"nav justify-content-end"};Object(n["r"])();var u=r((function(e,t,c,a,o,l){var u=Object(n["y"])("router-link");return Object(n["q"])(),Object(n["e"])("div",s,[Object(n["h"])("div",i,[Object(n["h"])("ul",b,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(o.items,(function(e,t){return Object(n["q"])(),Object(n["e"])("li",{class:"nav-item",key:t},[Object(n["h"])(u,{to:e.path},{default:r((function(){return[Object(n["g"])(Object(n["A"])(e.title),1)]})),_:2},1032,["to"])])})),128))])])])})),j={name:"TopMenu",data:function(){return{changecolor:!1,items:[{title:"HOME",path:"/"},{title:"PROFILE",path:"/profile"},{title:"SKILL",path:"/skill"},{title:"WORK",path:"/work"},{title:"CONTACT",path:"/contact"}]}},mounted:function(){window.addEventListener("scroll",this.onScroll)},unmounted:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(){window.scrollY>0?document.getElementsByClassName("header-color")[0].style.opacity=.5:document.getElementsByClassName("header-color")[0].style.opacity=1}}};c("8223");j.render=u,j.__scopeId="data-v-32df5a02";var d=j,O={name:"App",components:{TopMenu:d}};c("d60f");O.render=l;var m=O,p=c("6c02"),h=Object(n["F"])("data-v-1a7b5d3a");Object(n["t"])("data-v-1a7b5d3a");var f={class:"greet"},v={class:"row justify-content-center"},g={class:"heading w-80"},y={class:"row justify-content-center"},w={class:"message"};Object(n["r"])();var k=h((function(e,t,c,a,o,l){return Object(n["q"])(),Object(n["e"])("section",null,[Object(n["h"])("div",f,[Object(n["h"])("div",v,[Object(n["h"])("h1",g,Object(n["A"])(o.greet),1)]),Object(n["h"])("div",y,[Object(n["h"])("div",w,[Object(n["h"])("p",null,Object(n["A"])(o.message),1)])])])])})),q={name:"Home",data:function(){return{greet:"Welcom to my home page!",message:"こんにちは。こちらのサイトは大学生広田のポートフォリオサイトとなっております。これまでのプログラム経験や作品などを載せています。どうぞよろしくお願いします。"}}};c("a15d");q.render=k,q.__scopeId="data-v-1a7b5d3a";var S=q,A=c("8950"),P=c.n(A),x=Object(n["F"])("data-v-cd26593a");Object(n["t"])("data-v-cd26593a");var _={class:"page-wrapper"},M=Object(n["h"])("div",{class:"row"},[Object(n["h"])("div",{class:"col-12"},[Object(n["h"])("h1",{class:"title"},"Profile")])],-1),C={class:"back-color"},L={class:"line-eq-wrapper row"},H=Object(n["h"])("div",{class:"profile-img col-md-4 col-12 p-5"},[Object(n["h"])("img",{class:"img-size img-fluid",src:P.a,tittle:"プロフィール画像"})],-1),T={class:"col-md-8 col-12"},D={class:"row p-3"},I={class:"col"},E={class:"row"},F={valign:"top",class:"col-12 col-md-2"},W={key:0,valign:"top",class:"col-12 col-md-10"},G={key:1,valign:"top",class:"last-td col-12 col-md-10"};Object(n["r"])();var K=x((function(e,t,c,a,o,l){return Object(n["q"])(),Object(n["e"])("section",null,[Object(n["h"])("div",_,[M,Object(n["h"])("div",C,[Object(n["h"])("div",L,[H,Object(n["h"])("div",T,[Object(n["h"])("div",D,[Object(n["h"])("div",I,[Object(n["h"])("table",null,[Object(n["h"])("tbody",null,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(o.items,(function(e,t){return Object(n["q"])(),Object(n["e"])("tr",{key:t},[Object(n["h"])("div",E,[Object(n["h"])("th",F,Object(n["A"])(e.title),1),e.url?(Object(n["q"])(),Object(n["e"])("td",W,[Object(n["h"])("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",class:"url-color"},Object(n["A"])(e.value),9,["href"])])):(Object(n["q"])(),Object(n["e"])("td",G,Object(n["A"])(e.value),1))])])})),128))])])])])])])])])])})),Q={name:"Profile",data:function(){return{items:[{title:"Name",value:"広田楓(ひろたかえで)",url:""},{title:"University",value:"公立はこだて未来大学 情報システム科学部 複雑系コース",url:""},{title:"E-mail",value:"b1017222@fun.ac.jp",url:""},{title:"GitHub",value:"こちらからどうぞ！",url:"https://github.com/b1017222"},{title:"Comment",value:"初めまして。北海道函館出身の大学生です。1年半程前にプログラミングに興味を持ち始め、そこからインターンでサーバーサイド言語に触れたのを機にバックエンドからの学習を進めていました。一年前からプログラミングのアルバイトを始め、主にスマホ向けアプリやwebアプリケーションの受託開発に携わっています。そのため普段はバックエンドからフロントエンドまで幅広く案件に触れる機会が多いです。また最近ではwebアプリケーションに興味を持ち始め、モダンjsやデータベースについて学習しています。",url:""}]}}};c("029d");Q.render=K,Q.__scopeId="data-v-cd26593a";var J=Q,N=(c("b0c0"),Object(n["F"])("data-v-713b95c1"));Object(n["t"])("data-v-713b95c1");var Y={class:"page-wrapper"},$=Object(n["h"])("div",{class:"row"},[Object(n["h"])("h1",{class:"title col"},"skill")],-1),B={class:"row"},V={class:"col"},R={class:"box-wrapper row"},z={class:"row"},U={class:"col pt-3"},X={class:"row pt-3"},Z={class:"col-md-2 col-sm-12"},ee={class:"table-wrapper back-color"},te=Object(n["h"])("div",{class:"row"},[Object(n["h"])("h3",{class:"col pt-3"},"インターン")],-1),ce={class:"row pt-4"},ne={class:"col-md-2 col-sm-12"},ae={class:"col-md-2 col-sm-12"},oe={class:"col-md-2 col-sm-12"},le={class:"col-md-6 col-sm-12"};Object(n["r"])();var re=N((function(e,t,c,a,o,l){return Object(n["q"])(),Object(n["e"])("section",null,[Object(n["h"])("div",Y,[$,Object(n["h"])("div",B,[Object(n["h"])("div",V,[Object(n["h"])("p",null,Object(n["A"])(o.message),1)])]),Object(n["h"])("div",R,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(o.skills,(function(e,t){return Object(n["q"])(),Object(n["e"])("div",{key:t,class:"card-wrapper back-color"},[Object(n["h"])("div",z,[Object(n["h"])("h3",U,Object(n["A"])(e.title),1)]),Object(n["h"])("div",X,[Object(n["h"])("ul",Z,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(e.langs,(function(e,t){return Object(n["q"])(),Object(n["e"])("li",{key:t},Object(n["A"])(e.name),1)})),128))])])])})),128))]),Object(n["h"])("div",ee,[te,Object(n["h"])("table",null,[Object(n["h"])("tbody",null,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(o.interns,(function(e,t){return Object(n["q"])(),Object(n["e"])("tr",{key:t},[Object(n["h"])("div",ce,[Object(n["h"])("th",ne,Object(n["A"])(e.name),1),Object(n["h"])("td",ae,Object(n["A"])(e.company),1),Object(n["h"])("td",oe,Object(n["A"])(e.contents),1),Object(n["h"])("td",le,Object(n["A"])(e.detail),1)])])})),128))])])])])])})),se={name:"Skills",data:function(){return{message:"各分野で主に扱っている言語の一覧をご紹介します。",skills:[{title:"アルバイト",langs:[{name:"HTML/CSS"},{name:"jQuery"},{name:"JavaScript"},{name:"PHP"},{name:"MySQL"},{name:"Swift"},{name:"Kotlin"},{name:"GitHub"},{name:"Docker"},{name:"WordPress"}]},{title:"講義",langs:[{name:"Python"},{name:"Java"},{name:"C"},{name:"Processing"}]},{title:"個人学習",langs:[{name:"Go"},{name:"Vue.js"},{name:"PHP(Laravel)"},{name:"MySQL"},{name:"Docker"}]}],interns:[{name:"Go,MySQL",company:"株式会社サイバーエージェント",contents:"Dojo CA Tech Dojo 〜サーバサイドGo編〜参加",detail:"2週間でwebAPIを自力で作れるようになることを目標に、個々人が課題に取り組む学主型インターンでした。具体的にいうとソーシャルゲームのAPIで、ガチャ機能、ランキング機能などの実装を行いました。"},{name:"PHP(Laravel)",company:"株式会社ウエディングパーク",contents:"４日間のハッカソン型インターン",detail:"３人１組でチームを作り、テーマに沿って企画、設計、開発、プレゼンテーションという一連の流れを短期間で体験するインターンでした。自分はサーバーサイドを担当しました。"},{name:"Docker",company:"株式会社ディレクターズ",contents:"コンテナ開発",detail:"コマンド知識の学習や一からDockerイメージの作成をしたり、コンテナの作り方を一から学ぶというものでした。"}]}}};c("95e5");se.render=re,se.__scopeId="data-v-713b95c1";var ie=se,be={class:""},ue={class:"page-wrapper"},je=Object(n["h"])("h1",{class:"row justify-content-center title"},"Work",-1),de={class:"box row justify-content-center pt-4"},Oe={class:"contents"},me={class:"pt-2"},pe={class:"mx-auto col-6 pt-2"},he={key:0};function fe(e,t,c,a,o,l){var r=Object(n["y"])("modal");return Object(n["q"])(),Object(n["e"])("div",be,[Object(n["h"])("section",null,[Object(n["h"])("div",ue,[je,Object(n["h"])("p",null,Object(n["A"])(o.message),1),Object(n["h"])("div",de,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(o.works,(function(e,t){return Object(n["q"])(),Object(n["e"])("div",{class:"work-box col",key:t},[Object(n["h"])("img",{width:"100%",src:e.icon,class:"",onClick:function(e){return l.openModal("modal"+t)}},null,8,["src","onClick"]),Object(n["h"])(r,{ref:"modal"+t},{default:Object(n["D"])((function(){return[Object(n["h"])("div",Oe,[Object(n["h"])("h1",me,Object(n["A"])(e.name),1),Object(n["h"])("img",{width:"25%",src:e.icon},null,8,["src"]),Object(n["h"])("p",pe,Object(n["A"])(e.content),1),Object(n["h"])("p",null,Object(n["A"])(e.language),1),e.url?(Object(n["q"])(),Object(n["e"])("div",he,[Object(n["h"])("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",class:"url-color"},Object(n["A"])(e.value),9,["href"])])):Object(n["f"])("",!0),Object(n["h"])("button",{class:"btn btn-warning pt-2",onClick:function(e){return l.closeModal("modal"+t)}},"close",8,["onClick"])])]})),_:2},1536),Object(n["h"])("div",null,Object(n["A"])(e.name),1)])})),128))])])])])}var ve={key:0,class:"modal-open"};function ge(e,t,c,a,o,l){return Object(n["q"])(),Object(n["e"])(n["b"],{name:"modal"},{default:Object(n["D"])((function(){return[o.modal?(Object(n["q"])(),Object(n["e"])("div",ve,[Object(n["h"])("p",{class:"modal-close",onClick:t[1]||(t[1]=Object(n["E"])((function(){return l.close&&l.close.apply(l,arguments)}),["self"]))},"✖"),Object(n["x"])(e.$slots,"default",{class:"contents"})])):Object(n["f"])("",!0)]})),_:3})}var ye={name:"Modal",data:function(){return{modal:!1}},methods:{open:function(){this.modal=!0},close:function(){this.modal=!1}}};c("aa51");ye.render=ge;var we=ye,ke={name:"Work",components:{Modal:we},data:function(){return{message:"これまで作成した作品を載せていきます。更新予定です",works:[{name:"Kaedesportfolio",content:"このポートフォリオサイトです。就活用に作成しましたがせっかくなのでモダンjsの学習も兼ねてVueを用いて作成しました。",language:"使用言語　 Vue.js HTML/CSS Bootstrap",icon:c("bc85"),url:""},{name:"神経衰弱ゲーム",content:"一年ほど前にモバイルアプリで簡単なゲームを作ってみようと思いアルゴリズムの勉強も兼ねて作成しました。",language:"使用言語　 Kotlin",icon:c("f7f1"),url:"https://github.com/b1017222/ShinkeiSuijaku",value:"作品はこちらからどうぞ"},{name:"Todo-List",content:"サーバーサイドの仕組みやDockerについてもう一度しっかりと勉強をしたいと思い作成しました。",language:"使用言語　 PHP(Laravel) HTML Docker MySQL",icon:c("bfa0"),url:"https://github.com/b1017222/ShinkeiSuijaku",value:"作品はこちらからどうぞ"}]}},methods:{openModal:function(e){console.log(this.$refs[e]),this.$refs[e].open()},closeModal:function(e){console.log(e),this.$refs[e].close()}}};c("844c");ke.render=fe;var qe=ke,Se=Object(n["F"])("data-v-2cc0d66d");Object(n["t"])("data-v-2cc0d66d");var Ae={class:"page-wrapper"},Pe=Object(n["h"])("h1",{class:"title"},"Contact",-1),xe={class:"form",action:"https://formspree.io/f/mbjqrejd",method:"POST"},_e={valign:"top"},Me={key:0,valign:"top",class:""},Ce=Object(n["h"])("label",null,[Object(n["h"])("input",{class:"text back-color",type:"{item.kind}",name:"{item.text}"})],-1),Le={key:1,valign:"top",class:"text last-td"},He=Object(n["h"])("label",null,[Object(n["h"])("textarea",{class:"text back-color",name:"{item.text}"})],-1),Te=Object(n["h"])("button",{class:"btn btn-warning",type:"submit"},"Send",-1);Object(n["r"])();var De=Se((function(e,t,c,a,o,l){return Object(n["q"])(),Object(n["e"])("section",null,[Object(n["h"])("div",Ae,[Pe,Object(n["h"])("p",null,Object(n["A"])(o.message),1),Object(n["h"])("div",null,[Object(n["h"])("form",xe,[Object(n["h"])("tbody",null,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(o.items,(function(e,t){return Object(n["q"])(),Object(n["e"])("tr",{key:t},[Object(n["h"])("th",_e,Object(n["A"])(e.name),1),e.kind?(Object(n["q"])(),Object(n["e"])("td",Me,[Ce])):(Object(n["q"])(),Object(n["e"])("td",Le,[He]))])})),128))]),Te])])])])})),Ie={name:"Contact",data:function(){return{message:"お気軽にどうぞ",items:[{name:"Your email",kind:"email",text:"_replyto"},{name:"Your name",kind:"",text:"message"},{name:"Your message",kind:"",text:"test"}]}}};c("f5d2");Ie.render=De,Ie.__scopeId="data-v-2cc0d66d";var Ee=Ie,Fe=[{path:"/",name:"Home",component:S},{path:"/profile",name:"Profile",component:J},{path:"/skill",name:"Skill",component:ie},{path:"/work",name:"Work",component:qe},{path:"/contact",name:"Contact",component:Ee}],We=Object(p["a"])({history:Object(p["b"])("/kaedeportfolio/"),routes:Fe}),Ge=We;c("f9e3"),c("2dd8");Object(n["d"])(m).use(Ge).mount("#app")},8223:function(e,t,c){"use strict";c("c1b6")},"844c":function(e,t,c){"use strict";c("f50e")},"85a5":function(e,t,c){},8950:function(e,t,c){e.exports=c.p+"img/myface.3f61f12d.png"},9559:function(e,t,c){},"95e5":function(e,t,c){"use strict";c("e6ee")},"9e3b":function(e,t,c){},a15d:function(e,t,c){"use strict";c("9559")},aa51:function(e,t,c){"use strict";c("be8e")},bc85:function(e,t,c){e.exports=c.p+"img/samune1.73daac17.png"},be8e:function(e,t,c){},bfa0:function(e,t,c){e.exports=c.p+"img/todolist.35c5e1ea.png"},c1b6:function(e,t,c){},d60f:function(e,t,c){"use strict";c("9e3b")},e6ee:function(e,t,c){},f50e:function(e,t,c){},f5d2:function(e,t,c){"use strict";c("06bd")},f7f1:function(e,t,c){e.exports=c.p+"img/samune2.e21d67b4.png"}});
//# sourceMappingURL=app.33d453f1.js.map