"use strict";(self["webpackChunkpyz_vue3"]=self["webpackChunkpyz_vue3"]||[]).push([[53],{2053:function(i,l,n){n.r(l),n.d(l,{default:function(){return y}});var e=n(3396),t=n(7139);const o={class:"folder-button2"},a={key:1},w={class:"content"},b=["href"];var m={__name:"FolderButton2",props:{FolderButtonObj:{type:Object,default:()=>({id:" fb2t1",icon:{enable:!0,value:"Folder"},text:"AI",defaultLinkIndex:0,linkList:[{name:"baidu",link:"https://www.baidu.com"},{name:"bing",link:"https://cn.bing.com/"},{name:"google",link:"https://www.google.com/"}]})}},setup(i){const l=i,n=()=>{let i=l.FolderButtonObj;console.log(i);let n=i.id;window.open(i.linkList[i.defaultLinkIndex].link,n,"noopener=yes,noreferrer=yes")};return(l,m)=>{const s=(0,e.up)("el-icon"),p=(0,e.up)("el-popover");return(0,e.wg)(),(0,e.iD)("div",o,[(0,e.Wm)(p,{class:"chai-el-popover",placement:"bottom-start",trigger:"hover"},{reference:(0,e.w5)((()=>[(0,e._)("div",{class:"header",onClick:n},[i.FolderButtonObj.icon.enable?((0,e.wg)(),(0,e.j4)(s,{key:0},{default:(0,e.w5)((()=>[((0,e.wg)(),(0,e.j4)((0,e.LL)(i.FolderButtonObj.icon.value)))])),_:1})):(0,e.kq)("",!0),i.FolderButtonObj.icon.enable?((0,e.wg)(),(0,e.iD)("span",a," ")):(0,e.kq)("",!0),(0,e._)("div",null,(0,t.zw)(i.FolderButtonObj.text),1)])])),default:(0,e.w5)((()=>[(0,e._)("div",w,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(i.FolderButtonObj.linkList,((i,l)=>((0,e.wg)(),(0,e.iD)("div",{key:l},[(0,e._)("a",{href:i.link,target:"_blank",rel:"noopener noreferrer",style:{color:"var(--text)","text-decoration":"none"}},(0,t.zw)(i.name),9,b)])))),128))])])),_:1})])}}},s=n(89);const p=(0,s.Z)(m,[["__scopeId","data-v-cc8e904a"]]);var c=p;const d={class:"folder-button2-container"};var u={__name:"FolderButton2List",props:{FolderButton2_Objects:{type:Array,default:()=>[{id:"fb2t1",icon:{enable:!0,value:"Folder"},text:"Hello",defaultLinkIndex:0,linkList:[{name:"baidu",link:"https://www.baidu.com"}]},{id:"fb2t2",icon:{enable:!0,value:"Folder"},text:"World",defaultLinkIndex:0,linkList:[{name:"bing",link:"https://cn.bing.com/"},{name:"google",link:"https://www.google.com/"},{name:"bing1",link:"https://cn.bing.com/"},{name:"google1",link:"https://www.google.com/"},{name:"bing2",link:"https://cn.bing.com/"},{name:"google2",link:"https://www.google.com/"},{name:"bing3",link:"https://cn.bing.com/"},{name:"google3",link:"https://www.google.com/"}]}]}},setup(i){return(l,n)=>((0,e.wg)(),(0,e.iD)("div",d,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(i.FolderButton2_Objects,(i=>((0,e.wg)(),(0,e.j4)(c,{key:i.id,FolderButtonObj:i,style:{width:"max-content"}},null,8,["FolderButtonObj"])))),128))]))}};const k=(0,s.Z)(u,[["__scopeId","data-v-6e471d76"]]);var r=k;const g=["href"];var h={__name:"Movie",setup(i){const l=["https://movie.douban.com/top250","https://www.yinhuadm.vip/","https://www.bilibili.com/movie/","https://www.bilibili.com/anime/"],n=[{id:"我是大侦探",icon:{enable:!0,value:"ZoomIn"},text:"我是大侦探",defaultLinkIndex:0,linkList:[{name:"23 无巧不成书",link:"https://www.bilibili.com/list/433262468?sid=2460058&oid=728944864&bvid=BV1qS4y1t7m6"},{name:"32 盗墓洛阳铲",link:"https://www.bilibili.com/list/433262468?sid=2460058&oid=556622792&bvid=BV1He4y1D7ac"}]},{id:"小潮院长",icon:{enable:!0,value:"VideoCameraFilled"},text:"小潮院长",defaultLinkIndex:0,linkList:[{name:"All",link:"https://www.bilibili.com/list/5970160"},{name:"谋权篡位",link:"https://www.bilibili.com/list/5970160?sid=1045729"},{name:"不要做挑战",link:"https://www.bilibili.com/list/5970160?sid=60221"},{name:"羊村",link:"https://www.bilibili.com/list/5970160?sid=2829480"},{name:"眼色游戏",link:"https://www.bilibili.com/list/5970160?sid=1045728"}]},{id:"下一个是谁",icon:{enable:!0,value:"Stopwatch"},text:"下一个是谁",defaultLinkIndex:0,linkList:[{name:"谢幕之战",link:"https://www.bilibili.com/list/147166910?sid=431716&oid=480999095&bvid=BV1TT41117DK"},{name:"他好帅",link:"https://www.bilibili.com/list/147166910?sid=431716&oid=818813640&bvid=BV1gG4y1g7f7"}]},{id:"迪迦奥特曼",icon:{enable:!0,value:"MagicStick"},text:"迪迦奥特曼",defaultLinkIndex:0,linkList:[{name:"5 怪兽出没的日子",link:"https://www.bilibili.com/bangumi/play/ep396929"},{name:"12 从深海来的紧急呼救",link:"https://www.bilibili.com/bangumi/play/ep396936"},{name:"13 不做奴隶",link:"https://www.bilibili.com/bangumi/play/ep396937"},{name:"18 哥尔赞的反袭",link:"https://www.bilibili.com/bangumi/play/ep396942"},{name:"19 奔向宇宙 上",link:"https://www.bilibili.com/bangumi/play/ep396943"},{name:"22 大雾来了",link:"https://www.bilibili.com/bangumi/play/ep396946"},{name:"26 彩虹般的怪兽魔镜",link:"https://www.bilibili.com/bangumi/play/ep396950"},{name:"27 看见了 奥比克",link:"https://www.bilibili.com/bangumi/play/ep396951"},{name:"28 呼唤",link:"https://www.bilibili.com/bangumi/play/ep396952"},{name:"29 蓝色夜晚的记忆",link:"https://www.bilibili.com/bangumi/play/ep396953"},{name:"31 胜利基地被袭击",link:"https://www.bilibili.com/bangumi/play/ep396955"},{name:"34 南方海峡",link:"https://www.bilibili.com/bangumi/play/ep396958"},{name:"37 花",link:"https://www.bilibili.com/bangumi/play/ep396961"},{name:"38 蜃楼的怪兽",link:"https://www.bilibili.com/bangumi/play/ep396962"},{name:"43 地中的鲨鱼",link:"https://www.bilibili.com/bangumi/play/ep396967"},{name:"44 连影",link:"https://www.bilibili.com/bangumi/play/ep396968"},{name:"45 生命永存",link:"https://www.bilibili.com/bangumi/play/ep396969"},{name:"47 告别黑暗",link:"https://www.bilibili.com/bangumi/play/ep396971"},{name:"47 告别黑暗",link:"https://www.bilibili.com/bangumi/play/ep396971"},{name:"50 飞得更高",link:"https://www.bilibili.com/bangumi/play/ep396974"},{name:"51 黑暗的支配者",link:"https://www.bilibili.com/bangumi/play/ep396975"},{name:"52 致以辉煌的人",link:"https://www.bilibili.com/bangumi/play/ep396976"}]},{id:"徐大虾",icon:{enable:!0,value:"Dish"},text:"徐大虾",defaultLinkIndex:0,linkList:[{name:"All",link:"https://www.bilibili.com/list/13354765"},{name:"德华的世界",link:"https://www.bilibili.com/list/13354765?sid=1945343&oid=97846830&bvid=BV1HE411A7Jt"},{name:"木筏求生",link:"https://www.bilibili.com/list/13354765?sid=1945346&oid=248303729&bvid=BV1dv411G7iq"}]},{id:"某幻君",icon:{enable:!0,value:"Mic"},text:"某幻君",defaultLinkIndex:0,linkList:[{name:"All",link:"https://www.bilibili.com/list/1577804"},{name:"深度下饭视频",link:"https://www.bilibili.com/list/1577804?sid=2484704"},{name:"轻度下饭视频",link:"https://www.bilibili.com/list/1577804?sid=975266"}]},{id:"谁不重要i",icon:{enable:!0,value:"Female"},text:"谁不重要i",defaultLinkIndex:0,linkList:[{name:"All",link:"https://www.bilibili.com/list/1910020454"}]},{id:"中国BOY",icon:{enable:!0,value:"Food"},text:"中国BOY",defaultLinkIndex:0,linkList:[{name:"All",link:"https://www.bilibili.com/list/562197"}]}];return(i,o)=>((0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("ul",null,[((0,e.wg)(),(0,e.iD)(e.HY,null,(0,e.Ko)(l,((i,l)=>(0,e._)("li",{key:l},[(0,e._)("a",{href:i,target:"_blank",rel:"noopener noreferrer"},(0,t.zw)(i),9,g)]))),64))]),(0,e.Wm)(r,{FolderButton2_Objects:n})],64))}};const v=(0,s.Z)(h,[["__scopeId","data-v-7e8b953e"]]);var y=v}}]);