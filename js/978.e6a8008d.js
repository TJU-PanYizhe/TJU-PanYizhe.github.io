"use strict";(self["webpackChunkpyz_vue3"]=self["webpackChunkpyz_vue3"]||[]).push([[978],{6978:function(e,a,l){l.r(a),l.d(a,{default:function(){return F}});var r=l(3396),t=l(7139),n=l(4870);const o={class:"card-header"},u=["href"],s={class:"card-header"},d=["href"],i=["innerHTML"];var m={__name:"GameList",props:{gameList:Array,isFuture:Boolean},setup(e){const a=e=>e.love&&e.love.flag;return(l,n)=>{const m=(0,r.up)("el-card"),c=(0,r.up)("FullScreen"),g=(0,r.up)("el-icon"),f=(0,r.up)("router-link"),p=(0,r.up)("el-rate");return e.isFuture?((0,r.wg)(!0),(0,r.iD)(r.HY,{key:0},(0,r.Ko)(e.gameList,((e,a)=>((0,r.wg)(),(0,r.j4)(m,{class:"game-card",shadow:"hover",key:a,style:{width:"30%"}},{header:(0,r.w5)((()=>[(0,r._)("div",o,[(0,r._)("h3",null,[(0,r._)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},(0,t.zw)(e.gameName),9,u)])])])),_:2},1024)))),128)):((0,r.wg)(!0),(0,r.iD)(r.HY,{key:1},(0,r.Ko)(e.gameList,((e,l)=>((0,r.wg)(),(0,r.j4)(m,{class:"game-card",shadow:"hover",key:l},{header:(0,r.w5)((()=>[(0,r._)("div",s,[(0,r._)("h3",null,[(0,r._)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},(0,t.zw)(e.gameName),9,d)]),a(e)?((0,r.wg)(),(0,r.j4)(f,{key:0,class:"game-route",to:"/happy/game/"+e.love.route},{default:(0,r.w5)((()=>[(0,r.Wm)(g,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c)])),_:1})])),_:2},1032,["to"])):(0,r.kq)("",!0)])])),default:(0,r.w5)((()=>[(0,r._)("p",null,"昵称: "+(0,t.zw)(e.userName),1),e.like?((0,r.wg)(),(0,r.j4)(p,{key:0,modelValue:e.like,"onUpdate:modelValue":a=>e.like=a,disabled:"","text-color":"#ff9900","allow-half":""},null,8,["modelValue","onUpdate:modelValue"])):(0,r.kq)("",!0),(0,r._)("p",{innerHTML:e.moreInfo},null,8,i)])),_:2},1024)))),128))}}},c=l(89);const g=(0,c.Z)(m,[["__scopeId","data-v-43dfe952"]]);var f=g,p=l(6623);const _=e=>((0,r.dD)("data-v-03b18c98"),e=e(),(0,r.Cn)(),e),v={id:"Game"},w=_((()=>(0,r._)("br",null,null,-1))),k={key:0,id:"PlatformContainer"},h=["href"],y={class:"platform-card-pname"},L={class:"platform-card-intro"},b={id:"GameContainer"},j=_((()=>(0,r._)("div",{class:"game-divider"},null,-1))),z=_((()=>(0,r._)("div",{class:"game-divider"},null,-1)));var D={__name:"Game",setup(e){const a=(0,p.oR)(),l=(0,n.qj)({data:[],platforms:[]});(0,r.bv)((()=>{a.state.myAxios.get("Game").then((e=>{l.platforms=e.data.platforms||[],l.data=e.data.games||[],l.future_games=e.data.future_games||[]}))}));const o=(0,r.Fl)((()=>l.data.filter((e=>e.love&&e.love.flag)))),u=(0,r.Fl)((()=>l.data.filter((e=>!e.love||!e.love.flag))));return(e,a)=>{const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",v,[(0,r.Wm)(n,null,{default:(0,r.w5)((({Component:e})=>[((0,r.wg)(),(0,r.j4)(r.Ob,null,[((0,r.wg)(),(0,r.j4)((0,r.LL)(e)))],1024))])),_:1}),w,((0,r.wg)(),(0,r.iD)("div",k,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.platforms,((e,a)=>((0,r.wg)(),(0,r.iD)("a",{class:"platform-card",key:a,href:e.link,rel:"noopener noreferrer",target:"_blank",style:(0,t.j5)("background-color:"+e.color)},[(0,r._)("h1",y,(0,t.zw)(e.pName),1),(0,r._)("p",null,(0,t.zw)(e.uName),1),(0,r._)("div",L,[(0,r._)("p",null,(0,t.zw)(e.intro),1)])],12,h)))),128))])),(0,r._)("div",b,[(0,r.Wm)(f,{gameList:o.value},null,8,["gameList"]),j,(0,r.Wm)(f,{gameList:u.value},null,8,["gameList"]),z,(0,r.Wm)(f,{gameList:l.future_games,isFuture:!0},null,8,["gameList"])])])}}};const C=(0,c.Z)(D,[["__scopeId","data-v-03b18c98"]]);var F=C}}]);