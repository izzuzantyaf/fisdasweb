(this.webpackJsonplabfisdas=this.webpackJsonplabfisdas||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(23),s=n.n(r),i=(n(29),n(13)),o=n(7),l=(n(30),n(31),n.p+"static/media/fisdas-logo-min.22e6bcc5.png"),u=[{name:"Tata tertib",icon:"balance-scale",link:"/code-of-conduct",newFeature:!1},{name:"Modul",icon:"book",link:"/handout",newFeature:!1},{name:"Tugas Pendahuluan",icon:"tasks",link:"/preliminary-test",newFeature:!1},{name:"Video",icon:"play",link:"/practicum-video",newFeature:!1},{name:"Regresi Linear",icon:"chart-line",link:"/regression",newFeature:!1},{name:"Simulator Praktikum",icon:"cogs",link:"/practicum-simulator",newFeature:!1},{name:"Cover Jurnal",icon:"file",link:"/journal-cover",newFeature:!1},{name:"Asisten",icon:"users",link:"/assistants",newFeature:!1},{name:"Jadwal",icon:"calendar-minus",link:"/practicum-schedule",newFeature:!1},{name:"Organigram",icon:"sitemap",link:"/organigram",newFeature:!1}],j=n(9),d=n(0);function b(){return Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)(i.b,{to:"/",style:{textDecoration:"none"},children:Object(d.jsx)("img",{src:l,alt:"fisdas-logo"})})})}function m(){var e=u.map((function(e,t){return Object(d.jsx)(i.b,{to:e.link,style:{textDecoration:"none",color:"black"},className:"menu-list-item",children:e.name},t)}));return Object(c.useEffect)((function(){var e=document.querySelector(".hamburger-icon"),t=document.querySelector(".menu-list");return e.addEventListener("mouseenter",(function(){t.classList.add("show")})),e.addEventListener("click",(function(){t.classList.toggle("show")})),t.addEventListener("mouseleave",(function(){t.classList.remove("show")})),function(){}}),[]),Object(d.jsxs)("div",{className:"navigation",children:[Object(d.jsx)(j.a,{icon:"bars",className:"hamburger-icon"}),Object(d.jsx)("div",{className:"menu-list",children:e})]})}function f(){return Object(d.jsx)("section",{className:"navbar",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(b,{}),Object(d.jsx)(m,{})]})})}n(40);function O(){return Object(c.useEffect)((function(){window.scrollTo(0,0)})),Object(d.jsx)("section",{className:"hero",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"main-title",children:["Laboratorium Fisika Dasar ",Object(d.jsx)("br",{})," Universitas Telkom"]}),Object(d.jsxs)("div",{className:"desc",children:["The official website of",Object(d.jsx)("br",{}),"Tel-U Physics Laboratory"]})]})})}var h=n(2),x=n.n(h),v=n(6),p=n(4),N=(n(42),function(){var e=Object(v.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fisdascms.herokuapp.com/api/".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.message}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());function g(e){return Object(d.jsxs)("div",{className:"menu-card",children:[Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)(j.a,{icon:e.data.icon})}),Object(d.jsx)("div",{className:"menu-name",children:e.data.name})]})}function w(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){Object(v.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("social-media");case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(d.jsxs)("div",{className:"socmed-banner",children:[Object(d.jsx)("div",{className:"title",children:"Keep in touch with us"}),Object(d.jsx)("div",{className:"socmed-list",children:n.map((function(e,t){var n=e.link,c=e.reactjs_icon;return Object(d.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)(j.a,{icon:c.split("-")})},t)}))})]})}function k(){return Object(d.jsx)("div",{className:"new-feature",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"title",children:"New features"}),Object(d.jsx)("div",{className:"new-menu-list",children:u.filter((function(e){return e.newFeature})).map((function(e,t){return Object(d.jsx)(i.b,{to:e.link,style:{textDecoration:"none"},children:Object(d.jsx)(g,{data:e})},t)}))})]})})}function y(){return Object(d.jsx)("div",{className:"menu-list",children:u.filter((function(e){return!e.newFeature})).map((function(e,t){return Object(d.jsx)(i.b,{to:e.link,style:{textDecoration:"none"},children:Object(d.jsx)(g,{data:e})},t)}))})}function _(){var e=Object(c.useState)(u.map((function(e){return e.newFeature})).some((function(e){return e}))),t=Object(p.a)(e,1)[0];return Object(d.jsx)("section",{className:"menu",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(w,{}),t?Object(d.jsx)(k,{}):"",Object(d.jsx)(y,{})]})})}n(43);function T(){var e=Object(c.useState)({}),t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){Object(v.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("code-of-conduct");case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))(),window.scrollTo(0,0)}),[]),Object(d.jsx)("section",{className:"organigram",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"title",children:"Tata Tertib Praktikum Fisika Dasar Universitas Telkom"}),Object(d.jsx)("iframe",{title:"code-of-conduct",src:null===n||void 0===n?void 0:n.prepared_url,frameBorder:"0",width:"67%",height:"720px",style:{margin:"auto"}})]})})}n(44);function S(e){var t=e.data,n=t.lang,c=t.faculty,a=t.file_url;return Object(d.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",opacity:a?1:.3},children:Object(d.jsx)("div",{className:"handout-card",children:Object(d.jsxs)("div",{className:"handout-info",children:[Object(d.jsxs)("p",{className:"title",children:["id"===n?"Modul Praktikum Fisika Dasar":"Physics Lab Works Handout"," (",c,")"]}),Object(d.jsx)("p",{className:"lang",children:"id"===n?"Bahasa Indonesia":"English"})]})})})}function E(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){Object(v.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("practicum-handout");case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))(),window.scrollTo(0,0)}),[]),Object(d.jsx)("section",{className:"handouts",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"main-title",children:"Modul Praktikum"}),Object(d.jsx)("div",{className:"handouts-list",children:n.map((function(e,t){return Object(d.jsx)(S,{data:e},t)}))})]})})}n(45);function P(e){return Object(d.jsxs)("div",{className:"pt-card",children:[Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)(j.a,{icon:e.data.reactjs_icon})}),Object(d.jsx)("div",{className:"module-name",children:e.data.name})]})}function C(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){Object(v.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("preliminary-test");case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))(),window.scrollTo(0,0)}),[]),Object(d.jsx)("section",{className:"preliminary-test",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"title",children:"Tugas Pendahuluan"}),Object(d.jsx)("div",{className:"pt-card-list",children:n.map((function(e,t){return Object(d.jsx)("a",{style:e.preliminary_test_link?{}:{opacity:.3},href:e.preliminary_test_link,target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)(P,{data:e})},t)}))})]})})}n(46);function L(e){var t=Object(c.useState)(0),n=Object(p.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){var e=document.querySelector("iframe.practicum-video");return r(.5625*e.offsetWidth),window.addEventListener("resize",(function(){r(.5625*e.offsetWidth)})),function(){window.removeEventListener("resize",(function(){}))}}),[e.videoUrl]),Object(d.jsx)("iframe",{className:"practicum-video",title:e.videoUrl,width:"100%",height:"".concat(a,"px"),src:e.videoUrl,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}function F(e){return Object(d.jsxs)("div",{className:"other-video-card",style:e.video.video_embed_url===e.currentPlayingVideoUrl?{color:"#222ea2"}:{},onClick:function(){e.onCurrentPlayingChange({videoUrl:e.video.video_embed_url,videoTitle:e.video.name})},children:[Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)(j.a,{icon:e.video.reactjs_icon})}),Object(d.jsx)("div",{className:"video-name",children:e.video.name})]})}function U(e){var t=Object(c.useState)(e.currentLang),n=Object(p.a)(t,2),a=n[0],r=n[1];return Object(d.jsxs)("div",{className:"lang-switch",children:[Object(d.jsx)("div",{className:"lang1 ".concat("id"===a?"active":""),onClick:function(){r("id"),e.onCurrentLangChange("id")},children:"Indonesia"}),Object(d.jsx)("div",{className:"lang2 ".concat("en"===a?"active":""),onClick:function(){r("en"),e.onCurrentLangChange("en")},children:"English"})]})}function D(e){return Object(d.jsxs)("div",{className:"player",children:[Object(d.jsx)(L,{videoUrl:e.currentPlayingUrl}),Object(d.jsx)("div",{className:"video-title",children:e.currentPlayingTitle})]})}function B(e){var t=Object(c.useState)([]),n=Object(p.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)("id"),i=Object(p.a)(s,2),o=i[0],l=i[1],u=function(t){e.onCurrentPlayingChange(t)};Object(c.useEffect)((function(){Object(v.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("practicum-video");case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))()}),[]);var j=a.filter((function(e){return e.lang===o})).map((function(t,n){return Object(d.jsx)(F,{onCurrentPlayingChange:u,currentPlayingVideoUrl:e.currentPlayingUrl,video:t},n)}));return Object(d.jsxs)("div",{className:"sidebar",children:[Object(d.jsx)("div",{className:"video-title",children:e.currentPlayingTitle}),Object(d.jsx)(U,{onCurrentLangChange:function(e){l(e)},currentLang:o}),j]})}var J=function(){var e=Object(c.useState)(null),t=Object(p.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(p.a)(r,2),i=s[0],o=s[1];return Object(c.useEffect)((function(){!function(){var e=document.querySelector(".practicum-video .player"),t=e.offsetTop,n=document.querySelector(".practicum-video .sidebar"),c=document.querySelector(".practicum-video");window.onscroll=function(){window.pageYOffset>=t&&window.innerWidth<=768?(e.classList.add("sticky"),n.style.marginTop="".concat(e.offsetHeight,"px"),c.style.display="block"):(e.classList.remove("sticky"),n.style.marginTop="0px",c.style.display="grid")}}()}),[]),Object(d.jsxs)("section",{className:"practicum-video",children:[Object(d.jsx)(D,{currentPlayingUrl:n,currentPlayingTitle:i}),Object(d.jsx)(B,{onCurrentPlayingChange:function(e){var t=e.videoUrl,n=e.videoTitle;a(t),o(n)},currentPlayingUrl:n,currentPlayingTitle:i})]})};n(47);function q(){return Object(c.useEffect)((function(){window.scrollTo(0,0),window.open("https://regresi.msatrio.com/","_blank")})),Object(d.jsx)("div",{children:Object(d.jsx)(o.a,{to:"/"})})}n(48);function W(e){return Object(d.jsxs)("div",{className:"sw-card",children:[Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)(j.a,{icon:e.data.reactjs_icon})}),Object(d.jsx)("div",{className:"module-name",children:e.data.name})]})}function A(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){Object(v.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("practicum-simulator");case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))(),window.scrollTo(0,0)}),[]),Object(d.jsx)("section",{className:"practicum-simulator",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"title",children:"Simulator Praktikum"}),Object(d.jsx)("div",{className:"sw-card-list",children:n.map((function(e,t){return Object(d.jsx)("a",{style:e.simulator_link?{}:{opacity:.3},href:e.simulator_link,target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)(W,{data:e})},t)}))})]})})}n(49);function M(e){return Object(d.jsxs)("div",{className:"jc-card",children:[Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)(j.a,{icon:e.data.reactjs_icon})}),Object(d.jsx)("div",{className:"module-name",children:e.data.name})]})}function z(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){Object(v.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("journal-cover");case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))(),window.scrollTo(0,0)}),[]),Object(d.jsx)("div",{className:"journal-cover",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"title",children:"Cover Jurnal Praktikum"}),Object(d.jsx)("div",{className:"jc-card-list",children:n.map((function(e,t){return Object(d.jsx)("a",{style:{opacity:e.journal_cover_link?1:.3},href:e.journal_cover_link,target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)(M,{data:e})},t)}))})]})})}n(50);function I(e){var t=Object(c.useState)(!1),n=Object(p.a)(t,1)[0],a=e.data,r=a.name,s=a.code,i=a.feedback_link;return Object(d.jsxs)("div",{className:"assistant-card",children:[Object(d.jsx)("div",{className:"assitants-name",children:r}),Object(d.jsx)("div",{className:"assistant-code",children:s}),n?Object(d.jsx)("a",{href:i,target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)("div",{className:"feedback-btn",children:"Write me a feedback"})}):""]})}function V(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){Object(v.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("assistant");case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))(),window.scrollTo(0,0)}),[]),Object(d.jsx)("section",{className:"assistants",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"title",children:"Asisten Praktikum"}),Object(d.jsx)("div",{className:"assistants-list",children:n.map((function(e,t){return Object(d.jsx)(I,{data:e},t)}))})]})})}n(51);function H(){var e=Object(c.useState)({}),t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){Object(v.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("schedule");case 2:t=e.sent,a(null===t||void 0===t?void 0:t.class_schedule);case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(d.jsxs)("div",{className:"class-schedule",children:[Object(d.jsx)("div",{className:"table-title",children:"Jadwal kelas"}),Object(d.jsx)("div",{className:"img-container",children:Object(d.jsx)("iframe",{title:"class_schedule",src:null===n||void 0===n?void 0:n.prepared_url,frameBorder:"0",width:"67%",height:"720px",style:{margin:"auto"}})})]})}function K(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){Object(v.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("schedule");case 2:t=e.sent,a(null===t||void 0===t?void 0:t.module_schedules);case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(d.jsxs)("div",{className:"handout-schedule",children:[Object(d.jsx)("div",{className:"table-title",children:"Jadwal modul"}),n.map((function(e,t){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"table-sub-title",children:e.faculty}),Object(d.jsx)("iframe",{title:"class_schedule",src:null===e||void 0===e?void 0:e.prepared_url,frameBorder:"0",width:"67%",height:"720px",style:{margin:"auto"}})]},t)}))]})}function Y(){return Object(d.jsx)("section",{className:"practicum-schedule",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"title",children:"Jadwal Praktikum Fisika Dasar 1 Tahun Akademik 2020/2021"}),Object(d.jsx)(H,{}),Object(d.jsx)(K,{})]})})}n(52);function G(){var e=Object(c.useState)({}),t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){Object(v.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("organigram");case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))(),window.scrollTo(0,0)}),[]),Object(d.jsx)("section",{className:"organigram",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"title",children:"Organigram Asisten Laboratorium Fisika Dasar 2020/2021"}),Object(d.jsx)("iframe",{title:"organigram",src:null===n||void 0===n?void 0:n.prepared_url,frameBorder:"0",width:"67%",height:"720px",style:{margin:"auto"}})]})})}n(53);function R(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){Object(v.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("social-media");case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(d.jsxs)("div",{className:"identity",children:[Object(d.jsxs)("p",{className:"title",children:["Laboratorium Fisika Dasar",Object(d.jsx)("br",{}),"Universitas Telkom"]}),Object(d.jsx)("div",{className:"socmed",children:n.map((function(e,t){var n=e.link,c=e.name,a=e.reactjs_icon;return Object(d.jsx)("a",{className:"socmed-icon",href:n,target:"_blank",rel:"noopener noreferrer",alt:c,children:Object(d.jsx)(j.a,{icon:a.split("-")})},t)}))})]})}function $(){return Object(d.jsxs)("div",{className:"headquarters",children:[Object(d.jsx)("p",{className:"title",children:"Our headquarters"}),Object(d.jsx)("p",{className:"address",children:"Gedung P (Deli) lantai 3, Telkom University, Jl. Telekomunikasi No.1, Sukapura, Kec. Dayeuhkolot, Bandung, Jawa Barat."})]})}function Q(){var e=u.map((function(e,t){return Object(d.jsx)(i.b,{to:e.link,style:{textDecoration:"none",cursor:"pointer"},children:e.name},t)}));return Object(d.jsxs)("div",{className:"explore",children:[Object(d.jsx)("p",{className:"title",children:"Explore"}),Object(d.jsx)("div",{className:"footer-menu-list",children:e})]})}function X(){return Object(d.jsx)("div",{className:"back-to-top-icon",onClick:function(){window.scrollTo(0,0)},children:Object(d.jsx)(j.a,{icon:"chevron-circle-up"})})}function Z(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(R,{}),Object(d.jsx)($,{}),Object(d.jsx)(Q,{}),Object(d.jsx)(X,{}),Object(d.jsx)("div",{className:"credits",children:"All rights reserved."})]})})}n(54);var ee=n.p+"static/media/404-min.89b0731b.png";function te(){return Object(c.useEffect)((function(){window.scrollTo(0,0)})),Object(d.jsx)("section",{className:"not-found",children:Object(d.jsxs)("div",{className:"error-message",children:[Object(d.jsx)("img",{className:"img-404",src:ee,alt:"404"}),Object(d.jsx)("div",{className:"messages",children:"Your lovely website is under development."})]})})}var ne=n(15),ce=n(14),ae=n(5);function re(){return Object(d.jsx)("div",{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(o.b,{path:"/",render:function(){return Object(d.jsx)(f,{})}}),Object(d.jsxs)(o.d,{children:[Object(d.jsxs)(o.b,{exact:!0,path:"/",children:[Object(d.jsx)(O,{}),Object(d.jsx)(_,{})]}),Object(d.jsx)(o.b,{path:"/code-of-conduct",render:function(){return Object(d.jsx)(T,{})}}),Object(d.jsx)(o.b,{path:"/handout",render:function(){return Object(d.jsx)(E,{})}}),Object(d.jsx)(o.b,{path:"/preliminary-test",render:function(){return Object(d.jsx)(C,{})}}),Object(d.jsx)(o.b,{path:"/practicum-video",render:function(){return Object(d.jsx)(J,{})}}),Object(d.jsx)(o.b,{path:"/regression",render:function(){return Object(d.jsx)(q,{})}}),Object(d.jsx)(o.b,{path:"/practicum-simulator",render:function(){return Object(d.jsx)(A,{})}}),Object(d.jsx)(o.b,{path:"/journal-cover",render:function(){return Object(d.jsx)(z,{})}}),Object(d.jsx)(o.b,{path:"/assistants",render:function(){return Object(d.jsx)(V,{})}}),Object(d.jsx)(o.b,{path:"/practicum-schedule",render:function(){return Object(d.jsx)(Y,{})}}),Object(d.jsx)(o.b,{path:"/organigram",render:function(){return Object(d.jsx)(G,{})}}),Object(d.jsx)(o.b,{path:"/404",render:function(){return Object(d.jsx)(te,{})}}),Object(d.jsx)(o.a,{to:"/404"})]}),Object(d.jsx)(o.b,{path:"/",render:function(){return Object(d.jsx)(Z,{})}})]})})}ne.b.add(ce.b,ce.h,ce.c,ce.d,ce.a,ce.g,ce.e,ce.f,ce.i,ae.j,ae.s,ae.d,ae.v,ae.B,ae.f,ae.y,ae.p,ae.n,ae.l,ae.A,ae.a,ae.z,ae.q,ae.i,ae.r,ae.x,ae.C,ae.t,ae.c,ae.h,ae.o,ae.g,ae.k,ae.b,ae.e,ae.w,ae.m,ae.u);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(re,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.44859f7d.chunk.js.map