(function(t){function e(e){for(var r,o,i=e[0],c=e[1],l=e[2],u=0,h=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&h.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);m&&m(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(r=!1)}r&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},s={app:0},n=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var m=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0368":function(t,e,a){},1013:function(t,e,a){"use strict";var r=a("7c3d"),s=a.n(r);s.a},"13c7":function(t,e,a){},"195c":function(t,e,a){"use strict";var r=a("5e86"),s=a.n(r);s.a},"27c2":function(t,e,a){"use strict";var r=a("88c3"),s=a.n(r);s.a},"33d0":function(t,e,a){},4697:function(t,e,a){"use strict";var r=a("be15"),s=a.n(r);s.a},"49c9":function(t,e,a){},"4f69":function(t,e,a){},5222:function(t,e,a){"use strict";var r=a("33d0"),s=a.n(r);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("AppBar"),a("v-main",[a("router-view")],1)],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"navigation"}},[a("v-navigation-drawer",{attrs:{"overlay-opacity":"{true}",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{color:"primary",dense:""}},[t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{link:"",to:e.href}},[a("v-list-item-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),a("v-list-item",{attrs:{link:"",href:"https://andydavisson.com"}},[a("v-list-item-action",[a("v-icon",[t._v("mdi-exit-to-app")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("andydavisson.com")])],1)],1)],2),a("br")],1),a("v-app-bar",{attrs:{app:"",color:"primary",dark:"","collapse-on-scroll":"",elevation:"5"}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("CFB Machine")]),a("v-spacer"),a("v-btn",{attrs:{color:"secondary"},on:{click:t.toggleTheme}},[a("v-icon",[t._v(t._s(t.buttonText))])],1)],1)],1)},i=[],c={name:"AppBar",data:function(){return{drawer:!1,items:[{title:"Home",icon:"mdi-home",href:"/"},{title:"Match History",icon:"mdi-football-helmet",href:"/match-history"},{title:"Team Statistics",icon:"mdi-clipboard-text",href:"/team-stats"},{title:"Roster",icon:"mdi-account-group",href:"/roster"},{title:"About",icon:"mdi-information-outline",href:"/about"}]}},computed:{buttonText:function(){return this.$vuetify.theme.dark?"mdi-white-balance-sunny":"mdi-moon-waning-crescent"}},methods:{toggleTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},l=c,m=a("2877"),u=a("6544"),h=a.n(u),d=a("40dc"),f=a("5bc1"),v=a("8336"),p=a("132d"),b=a("8860"),_=a("da13"),y=a("1800"),T=a("5d23"),g=a("f774"),x=a("2fa4"),S=a("2a7f"),w=Object(m["a"])(l,o,i,!1,null,"70c91919",null),C=w.exports;h()(w,{VAppBar:d["a"],VAppBarNavIcon:f["a"],VBtn:v["a"],VIcon:p["a"],VList:b["a"],VListItem:_["a"],VListItemAction:y["a"],VListItemContent:T["a"],VListItemTitle:T["b"],VNavigationDrawer:g["a"],VSpacer:x["a"],VToolbarTitle:S["a"]});var k={name:"App",components:{AppBar:C},beforeMount:function(){this.$store.commit("fetchTeams")},data:function(){return{}}},V=k,O=a("7496"),j=a("f6c4"),$=Object(m["a"])(V,s,n,!1,null,"4a3a62c2",null),R=$.exports;h()($,{VApp:O["a"],VMain:j["a"]});var M=a("8c4f"),F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex-md home"},[r("h1",{staticClass:"text-md-h1 header"},[t._v("CFB Machine")]),r("div",{staticClass:"content"},[r("p",[t._v(" Welcome to the CFB Machine. Explore this site to find historical college football stats. ")]),r("v-img",{staticClass:"pic",attrs:{src:"https://media.giphy.com/media/eKlzZj8vDZOxNNjbVr/giphy.gif",contain:"","max-width":"{200}",alt:"clemson football player","lazy-src":a("f80d")}})],1)])},E=[],A={name:"Home",data:function(){return{}}},B=A,Y=(a("ec38"),a("adda")),P=Object(m["a"])(B,F,E,!1,null,"3d882c50",null),D=P.exports;h()(P,{VImg:Y["a"]});var H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex-md about"},[a("h1",{staticClass:"text-md-h1 header"},[t._v("About")]),a("div",{staticClass:"content"},[a("p",[t._v(" This app allows you to look at historical college football matchups, current rosters, and seasonal stats for each team. All of the data is pulled from "),a("a",{attrs:{href:"https://api.collegefootballdata.com"}},[t._v("https://api.collegefootballdata.com")]),t._v(". This app is built using Vue/Vuetify. View the source code "),a("a",{attrs:{href:"https://github.com/adavisson/cfb-machine-vuetify"}},[t._v("here")]),t._v(". ")])])])}],N={name:"About",data:function(){return{}}},W=N,L=(a("27c2"),Object(m["a"])(W,H,I,!1,null,"2873b550",null)),q=L.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex-md match-history"},[a("h1",{staticClass:"text-md-h1 header"},[t._v("Match History")]),t.submitted?a("MatchResults",{attrs:{firstTeam:t.firstTeam,secondTeam:t.secondTeam},on:{handleSubmit:t.handleSubmit}}):a("MatchForm",{attrs:{teams:t.teams,firstTeam:t.firstTeam,secondTeam:t.secondTeam},on:{handleSubmit:t.handleSubmit}})],1)},Z=[],z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{staticClass:"form",attrs:{id:"match-history-form"},on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[t.error1||t.error2?a("p",{staticClass:"error-message"},[t._v(" Please fill out the required fields. ")]):t._e(),a("v-select",{attrs:{items:t.teams,"item-text":"school","item-value":"school",label:"Team 1",color:"secondary",dense:"",error:!!t.error1},model:{value:t.teamOne,callback:function(e){t.teamOne=e},expression:"teamOne"}}),a("v-select",{attrs:{items:t.teams,"item-text":"school","item-value":"school",label:"Team 2",color:"secondary",dense:"",error:!!t.error2},model:{value:t.teamTwo,callback:function(e){t.teamTwo=e},expression:"teamTwo"}}),a("v-btn",{attrs:{type:"submit",color:"secondary",form:"match-history-form"}},[t._v("Submit")])],1)},G=[],K={name:"MatchForm",data:function(){return{teamOne:"",teamTwo:"",error1:!1,error2:!1}},props:["teams","handleSubmit","firstTeam","secondTeam"],beforeMount:function(){this.teamOne=this.firstTeam,this.teamTwo=this.secondTeam},methods:{submitForm:function(){""!=this.teamOne&&""!=this.teamTwo?this.$emit("handleSubmit",this.teamOne,this.teamTwo):(""===this.teamOne&&(this.error1=!0),""===this.teamTwo&&(this.error2=!0))}}},U=K,Q=(a("4697"),a("4bd4")),X=a("b974"),tt=Object(m["a"])(U,z,G,!1,null,"77ca3cec",null),et=tt.exports;h()(tt,{VBtn:v["a"],VForm:Q["a"],VSelect:X["a"]});var at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"matchup-results"},[a("v-btn",{staticClass:"button",attrs:{color:"secondary"},on:{click:t.handleClick}},[t._v("Pick Different Teams")]),a("h5",{staticClass:"text-md-h5 header"},[t._v(" Wins for "+t._s(t.matchup.team1)+": "+t._s(t.matchup.team1Wins)+" ")]),a("h5",{staticClass:"text-md-h5 header"},[t._v(" Wins for "+t._s(t.matchup.team2)+": "+t._s(t.matchup.team2Wins)+" ")]),a("h5",{staticClass:"text-md-h5 header"},[t._v("Ties: "+t._s(t.matchup.ties))]),a("div",{staticClass:"content"},t._l(t.matchup.games,(function(e){return a("v-card",{key:e.season,staticClass:"card"},[a("v-card-title",{staticClass:"headline"},[t._v(t._s(e.season))]),a("v-card-text",[a("p",[a("strong",[t._v("Winner")]),t._v(": "+t._s(e.winner))]),a("p",[a("strong",[t._v("Score")]),t._v(": "+t._s(e.awayTeam)+" "+t._s(e.awayScore)+" - "+t._s(e.homeScore)+" "+t._s(e.homeTeam)+" ")]),a("p",[a("strong",[t._v("Venue")]),t._v(": "+t._s(e.venue?e.venue:"N/A"))])])],1)})),1)],1)},rt=[],st=(a("99af"),a("d3b7"),a("96cf"),a("1da1")),nt={name:"MatchResults",data:function(){return{matchup:{}}},props:["handleSubmit","firstTeam","secondTeam"],beforeMount:function(){this.fetchData()},methods:{handleClick:function(){this.$emit("handleSubmit",this.firstTeam,this.secondTeam)},fetchData:function(){var t=this;return Object(st["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.collegefootballdata.com/teams/matchup?team1=".concat(t.firstTeam,"&team2=").concat(t.secondTeam));case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,r.games.sort((function(t,e){return t.season<e.season?1:-1})),t.matchup=r,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}}},ot=nt,it=(a("1013"),a("b0af")),ct=a("99d9"),lt=Object(m["a"])(ot,at,rt,!1,null,"87ed8da0",null),mt=lt.exports;h()(lt,{VBtn:v["a"],VCard:it["a"],VCardText:ct["a"],VCardTitle:ct["b"]});var ut={name:"MatchHistory",components:{MatchForm:et,MatchResults:mt},data:function(){return{firstTeam:"",secondTeam:"",submitted:!1}},computed:{teams:function(){return this.$store.state.teams}},methods:{handleSubmit:function(t,e){this.firstTeam=t,this.secondTeam=e,this.submitted=!this.submitted}}},ht=ut,dt=(a("f100"),Object(m["a"])(ht,J,Z,!1,null,"67968aca",null)),ft=dt.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex-md team-stats"},[a("h1",{staticClass:"text-md-h1 header"},[t._v("Team Statistics")]),t.submitted?a("TeamStatsResults",{attrs:{team:t.team,year:t.year},on:{handleSubmit:t.handleSubmit}}):a("TeamStatsForm",{attrs:{teams:t.teams,team:t.team,year:t.year},on:{handleSubmit:t.handleSubmit}})],1)},pt=[],bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{staticClass:"form",attrs:{id:"team-stats-form"},on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[t.teamError||t.yearError?a("p",{staticClass:"error-message"},[t._v(" Please fill out the required fields. ")]):t._e(),a("v-select",{attrs:{items:t.teams,"item-text":"school","item-value":"school",label:"Team",color:"secondary",dense:"",error:!!t.teamError},model:{value:t.selectedTeam,callback:function(e){t.selectedTeam=e},expression:"selectedTeam"}}),a("v-select",{attrs:{items:t.years,"item-text":"text","item-value":"value",label:"Year",color:"secondary",dense:"",error:!!t.yearError},model:{value:t.selectedYear,callback:function(e){t.selectedYear=e},expression:"selectedYear"}}),a("v-btn",{attrs:{type:"submit",color:"secondary",form:"team-stats-form"}},[t._v("Submit")])],1)},_t=[],yt={name:"TeamStatsForm",props:["teams","handleSubmit","year","team"],data:function(){return{selectedTeam:"",years:[],selectedYear:0,teamError:!1,yearError:!1}},beforeMount:function(){this.fillYears(),this.selectedYear=this.year,this.selectedTeam=this.team},methods:{fillYears:function(){var t=(new Date).getFullYear();while(t>=1900)this.years.push({text:t,value:t}),t--},submitForm:function(){""!=this.selectedTeam&&""!=this.selectedYear?this.$emit("handleSubmit",this.selectedTeam,this.selectedYear):(""===this.selectedTeam&&(this.teamError=!0),""===this.selectedYear&&(this.yearError=!0))}}},Tt=yt,gt=(a("195c"),Object(m["a"])(Tt,bt,_t,!1,null,"28730b98",null)),xt=gt.exports;h()(gt,{VBtn:v["a"],VForm:Q["a"],VSelect:X["a"]});var St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"team-stats-results"},[a("v-btn",{staticClass:"button",attrs:{color:"secondary"},on:{click:t.handleClick}},[t._v("Change Team/Year")]),a("h5",{staticClass:"text-md-h5 header"},[t._v(t._s(t.team)+" Statistics for "+t._s(t.year))]),a("v-simple-table",{staticClass:"table",scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",[t._v("Statistic")]),a("th",[t._v("Value")])])]),a("tbody",t._l(t.stats,(function(e){return a("tr",{key:e.statName},[a("td",[t._v(t._s(t.convertCase(e.statName)))]),a("td",[t._v(t._s(e.statValue))])])})),0)]},proxy:!0}])})],1)},wt=[],Ct=(a("fb6a"),a("ac1f"),a("5319"),{name:"TeamStatsResults",props:["handleSubmit","team","year"],data:function(){return{stats:[]}},beforeMount:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return Object(st["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.collegefootballdata.com/stats/season?year=".concat(t.year,"&team=").concat(t.team));case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,t.stats=r,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},handleClick:function(){this.$emit("handleSubmit",this.team,this.year)},convertCase:function(t){var e=t.replace(/([A-Z])/g," $1");return e.charAt(0).toUpperCase()+e.slice(1)}}}),kt=Ct,Vt=(a("8602"),a("1f4f")),Ot=Object(m["a"])(kt,St,wt,!1,null,"aefca148",null),jt=Ot.exports;h()(Ot,{VBtn:v["a"],VSimpleTable:Vt["a"]});var $t={name:"TeamStats",components:{TeamStatsForm:xt,TeamStatsResults:jt},data:function(){return{submitted:!1,team:"",year:(new Date).getFullYear()}},computed:{teams:function(){return this.$store.state.teams}},methods:{handleSubmit:function(t,e){this.team=t,this.year=e,this.submitted=!this.submitted}}},Rt=$t,Mt=(a("aca5"),Object(m["a"])(Rt,vt,pt,!1,null,"ec850116",null)),Ft=Mt.exports,Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex-md roster"},[a("h1",{staticClass:"text-md-h1 header"},[t._v("Rosters")]),t.submitted?a("RosterResults",{attrs:{team:t.team},on:{handleSubmit:t.handleSubmit}}):a("RosterForm",{attrs:{teams:t.teams,team:t.team},on:{handleSubmit:t.handleSubmit}})],1)},At=[],Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{staticClass:"form",attrs:{id:"roster-form"},on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[t.error?a("p",{staticClass:"error-message"},[t._v(" Please fill out the required fields. ")]):t._e(),a("v-select",{attrs:{items:t.teams,"item-text":"school","item-value":"school",label:"Team",color:"secondary",error:!!t.error,dense:""},model:{value:t.selectedTeam,callback:function(e){t.selectedTeam=e},expression:"selectedTeam"}}),a("v-btn",{attrs:{type:"submit",color:"secondary",form:"roster-form"}},[t._v("Submit")])],1)},Yt=[],Pt={name:"RosterForm",data:function(){return{selectedTeam:"",error:!1}},props:["teams","handleSubmit","team"],beforeMount:function(){this.selectedTeam=this.team},methods:{submitForm:function(){""!=this.selectedTeam?this.$emit("handleSubmit",this.selectedTeam):this.error=!0}}},Dt=Pt,Ht=(a("6d9f"),Object(m["a"])(Dt,Bt,Yt,!1,null,"0ad10041",null)),It=Ht.exports;h()(Ht,{VBtn:v["a"],VForm:Q["a"],VSelect:X["a"]});var Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"roster-results"},[a("v-btn",{staticClass:"button",attrs:{color:"secondary"},on:{click:t.handleClick}},[t._v("Pick Another Team")]),a("h5",{staticClass:"text-md-h5 header"},[t._v(t._s(t.team)+" Roster")]),a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",[t._v("#")]),a("th",[t._v("Player")]),a("th",[t._v("Position")]),a("th",[t._v("Height")]),a("th",[t._v("Weight")]),a("th",[t._v("Home Town")]),a("th",[t._v("Highlights")])])]),a("tbody",t._l(t.roster,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.jersey))]),a("td",[t._v(" "+t._s(e.first_name)+" "+t._s(e.last_name)+" - "+t._s(t.getYear(e.year))+" ")]),a("td",[t._v(t._s(e.position))]),a("td",[t._v(t._s(t.getHeight(e.height)))]),a("td",[t._v(t._s(e.weight)+" lbs.")]),a("td",[t._v(t._s(e.home_city)+", "+t._s(e.home_state))]),a("td",[a("v-btn",{attrs:{color:"secondary",small:"",href:"https://youtube.com/results?search_query="+e.first_name+"+"+e.last_name+"+football+highlights",target:"_blank"}},[t._v("YouTube")])],1)])})),0)]},proxy:!0}])})],1)},Wt=[],Lt={name:"RosterResults",data:function(){return{roster:{}}},props:["team","handleSubmit"],beforeMount:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return Object(st["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.collegefootballdata.com/roster?team=".concat(t.team));case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,t.roster=r,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},handleClick:function(){this.$emit("handleSubmit",this.team)},getYear:function(t){switch(t){case 1:return"Fr.";case 2:return"So.";case 3:return"Jr.";case 4:return"Sr.";default:return""}},getHeight:function(t){var e=t/12,a=t%12;return"".concat(Math.floor(e),"' ").concat(a,'"')}}},qt=Lt,Jt=(a("5222"),Object(m["a"])(qt,Nt,Wt,!1,null,"35e3fc20",null)),Zt=Jt.exports;h()(Jt,{VBtn:v["a"],VSimpleTable:Vt["a"]});var zt={name:"Roster",components:{RosterForm:It,RosterResults:Zt},data:function(){return{submitted:!1,team:""}},computed:{teams:function(){return this.$store.state.teams}},methods:{handleSubmit:function(t){this.team=t,this.submitted=!this.submitted}}},Gt=zt,Kt=(a("eaff"),Object(m["a"])(Gt,Et,At,!1,null,"15edc933",null)),Ut=Kt.exports;r["a"].use(M["a"]);var Qt=[{path:"/",name:"Home",component:D},{path:"/about",name:"About",component:q},{path:"/match-history",name:"Match History",component:ft},{path:"/team-stats",name:"Team Stats",component:Ft},{path:"/roster",name:"Roster",component:Ut}],Xt=new M["a"]({routes:Qt}),te=Xt,ee=a("f309"),ae=a("fcf4");r["a"].use(ee["a"]);var re=new ee["a"]({theme:{themes:{light:{primary:ae["a"].lightGreen.base,secondary:ae["a"].lightBlue.base},dark:{primary:ae["a"].lightGreen.base,secondary:ae["a"].lightBlue.base}},dark:!0}}),se=a("2f62");r["a"].use(se["a"]);var ne=new se["a"].Store({state:{teams:[]},mutations:{fetchTeams:function(t){var e=function(){var e=Object(st["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.collegefootballdata.com/teams/fbs");case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,t.teams=r,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:te,vuetify:re,store:ne,render:function(t){return t(R)}}).$mount("#app")},"5e86":function(t,e,a){},"6d9f":function(t,e,a){"use strict";var r=a("13c7"),s=a.n(r);s.a},"7c3d":function(t,e,a){},8602:function(t,e,a){"use strict";var r=a("0368"),s=a.n(r);s.a},"88c3":function(t,e,a){},aca5:function(t,e,a){"use strict";var r=a("49c9"),s=a.n(r);s.a},b7bc:function(t,e,a){},be15:function(t,e,a){},eaff:function(t,e,a){"use strict";var r=a("f556"),s=a.n(r);s.a},ec38:function(t,e,a){"use strict";var r=a("4f69"),s=a.n(r);s.a},f100:function(t,e,a){"use strict";var r=a("b7bc"),s=a.n(r);s.a},f556:function(t,e,a){},f80d:function(t,e,a){t.exports=a.p+"img/cfb-trophy.8e416cd8.jpg"}});
//# sourceMappingURL=app.75d3c441.js.map