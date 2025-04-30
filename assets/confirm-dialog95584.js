import{B as k,o as l,c as f,m as i,S as h,A as y,a as p,s as B,a3 as A,a4 as D,L as at,a5 as Q,a6 as q,a7 as G,R as Y,q as P,e as S,w as b,U as _,n as K,a8 as O,a9 as W,aa as nt,ab as F,ac as st,ad as ot,F as H,E as rt,d as J,r as N,j as it,b as lt,f as u,k as z,l as ct,u as x,x as dt,T as ut,ae as bt}from"../index95584.js";import{a as pt,s as ft}from"./index955845.js";import{f as ht,u as vt,T as g,g as $t,L as mt,b as gt,s as yt,c as wt}from"./role95584.js";import{s as Tt}from"./index955844.js";import{u as xt}from"./user95584.js";var kt=({dt:t})=>`
.p-card {
    background: ${t("card.background")};
    color: ${t("card.color")};
    box-shadow: ${t("card.shadow")};
    border-radius: ${t("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${t("card.caption.gap")};
}

.p-card-body {
    padding: ${t("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${t("card.body.gap")};
}

.p-card-title {
    font-size: ${t("card.title.font.size")};
    font-weight: ${t("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${t("card.subtitle.color")};
}
`,Bt={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Lt=k.extend({name:"card",style:kt,classes:Bt}),Pt={name:"BaseCard",extends:B,style:Lt,provide:function(){return{$pcCard:this,$parentInstance:this}}},St={name:"Card",extends:Pt,inheritAttrs:!1};function Ct(t,e,a,s,r,n){return l(),f("div",i({class:t.cx("root")},t.ptmi("root")),[t.$slots.header?(l(),f("div",i({key:0,class:t.cx("header")},t.ptm("header")),[h(t.$slots,"header")],16)):y("",!0),p("div",i({class:t.cx("body")},t.ptm("body")),[t.$slots.title||t.$slots.subtitle?(l(),f("div",i({key:0,class:t.cx("caption")},t.ptm("caption")),[t.$slots.title?(l(),f("div",i({key:0,class:t.cx("title")},t.ptm("title")),[h(t.$slots,"title")],16)):y("",!0),t.$slots.subtitle?(l(),f("div",i({key:1,class:t.cx("subtitle")},t.ptm("subtitle")),[h(t.$slots,"subtitle")],16)):y("",!0)],16)):y("",!0),p("div",i({class:t.cx("content")},t.ptm("content")),[h(t.$slots,"content")],16),t.$slots.footer?(l(),f("div",i({key:1,class:t.cx("footer")},t.ptm("footer")),[h(t.$slots,"footer")],16)):y("",!0)],16)],16)}St.render=Ct;var Vt={root:function(e){var a=e.instance,s=e.props;return["p-tab",{"p-tab-active":a.active,"p-disabled":s.disabled}]}},At=k.extend({name:"tab",classes:Vt}),Ft={name:"BaseTab",extends:B,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:At,provide:function(){return{$pcTab:this,$parentInstance:this}}},Nt={name:"Tab",extends:Ft,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowRightKey:function(e){var a=this.findNextTab(e.currentTarget);a?this.changeFocusedTab(e,a):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var a=this.findPrevTab(e.currentTarget);a?this.changeFocusedTab(e,a):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var a=this.findFirstTab();this.changeFocusedTab(e,a),e.preventDefault()},onEndKey:function(e){var a=this.findLastTab();this.changeFocusedTab(e,a),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findNextTab:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=a?e:e.nextElementSibling;return s?A(s,"data-p-disabled")||A(s,"data-pc-section")==="activebar"?this.findNextTab(s):D(s,'[data-pc-name="tab"]'):null},findPrevTab:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=a?e:e.previousElementSibling;return s?A(s,"data-p-disabled")||A(s,"data-pc-section")==="activebar"?this.findPrevTab(s):D(s,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,a){at(a),this.scrollInView(a)},scrollInView:function(e){var a;e==null||(a=e.scrollIntoView)===null||a===void 0||a.call(e,{block:"nearest"})}},computed:{active:function(){var e;return Q((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},ariaControls:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},attrs:function(){return i(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return q({active:this.active})}},directives:{ripple:G}};function zt(t,e,a,s,r,n){var d=Y("ripple");return t.asChild?h(t.$slots,"default",{key:1,dataP:n.dataP,class:K(t.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs,onClick:n.onClick}):P((l(),S(_(t.as),i({key:0,class:t.cx("root"),"data-p":n.dataP,onClick:n.onClick},n.attrs),{default:b(function(){return[h(t.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[d]])}Nt.render=zt;var _t={root:"p-tablist",content:function(e){var a=e.instance;return["p-tablist-content",{"p-tablist-viewport":a.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Kt=k.extend({name:"tablist",classes:_t}),Et={name:"BaseTabList",extends:B,props:{},style:Kt,provide:function(){return{$pcTabList:this,$parentInstance:this}}},It={name:"TabList",extends:Et,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var e=this;setTimeout(function(){e.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,a=this.getVisibleButtonWidths(),s=O(e)-a,r=Math.abs(e.scrollLeft),n=s*.8,d=r-n,v=Math.max(d,0);e.scrollLeft=W(e)?-1*v:v},onNextButtonClick:function(){var e=this.$refs.content,a=this.getVisibleButtonWidths(),s=O(e)-a,r=Math.abs(e.scrollLeft),n=s*.8,d=r+n,v=e.scrollWidth-s,w=Math.min(d,v);e.scrollLeft=W(e)?-1*w:w},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)===null||e===void 0||e.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var e=this.$refs,a=e.content,s=e.inkbar,r=e.tabs;if(s){var n=D(a,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(s.style.height=nt(n)+"px",s.style.top=F(n).top-F(r).top+"px"):(s.style.width=st(n)+"px",s.style.left=F(n).left-F(r).left+"px")}},updateButtonState:function(){var e=this.$refs,a=e.list,s=e.content,r=s.scrollTop,n=s.scrollWidth,d=s.scrollHeight,v=s.offsetWidth,w=s.offsetHeight,C=Math.abs(s.scrollLeft),V=[O(s),ot(s)],L=V[0],E=V[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=r!==0,this.isNextButtonEnabled=a.offsetHeight>=w&&parseInt(r)!==d-E):(this.isPrevButtonEnabled=C!==0,this.isNextButtonEnabled=a.offsetWidth>=v&&parseInt(C)!==n-L)},getVisibleButtonWidths:function(){var e=this.$refs,a=e.prevButton,s=e.nextButton,r=0;return this.showNavigators&&(r=((a==null?void 0:a.offsetWidth)||0)+((s==null?void 0:s.offsetWidth)||0)),r}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return q({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:pt,ChevronRightIcon:ht},directives:{ripple:G}},Ot=["data-p"],Dt=["aria-label","tabindex"],Mt=["data-p"],Ut=["aria-orientation"],Rt=["aria-label","tabindex"];function Wt(t,e,a,s,r,n){var d=Y("ripple");return l(),f("div",i({ref:"list",class:t.cx("root"),"data-p":n.dataP},t.ptmi("root")),[n.showNavigators&&r.isPrevButtonEnabled?P((l(),f("button",i({key:0,ref:"prevButton",type:"button",class:t.cx("prevButton"),"aria-label":n.prevButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:e[0]||(e[0]=function(){return n.onPrevButtonClick&&n.onPrevButtonClick.apply(n,arguments)})},t.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(l(),S(_(n.templates.previcon||"ChevronLeftIcon"),i({"aria-hidden":"true"},t.ptm("prevIcon")),null,16))],16,Dt)),[[d]]):y("",!0),p("div",i({ref:"content",class:t.cx("content"),onScroll:e[1]||(e[1]=function(){return n.onScroll&&n.onScroll.apply(n,arguments)}),"data-p":n.dataP},t.ptm("content")),[p("div",i({ref:"tabs",class:t.cx("tabList"),role:"tablist","aria-orientation":n.$pcTabs.orientation||"horizontal"},t.ptm("tabList")),[h(t.$slots,"default"),p("span",i({ref:"inkbar",class:t.cx("activeBar"),role:"presentation","aria-hidden":"true"},t.ptm("activeBar")),null,16)],16,Ut)],16,Mt),n.showNavigators&&r.isNextButtonEnabled?P((l(),f("button",i({key:1,ref:"nextButton",type:"button",class:t.cx("nextButton"),"aria-label":n.nextButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:e[2]||(e[2]=function(){return n.onNextButtonClick&&n.onNextButtonClick.apply(n,arguments)})},t.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(l(),S(_(n.templates.nexticon||"ChevronRightIcon"),i({"aria-hidden":"true"},t.ptm("nextIcon")),null,16))],16,Rt)),[[d]]):y("",!0)],16,Ot)}It.render=Wt;var Ht={root:function(e){var a=e.instance;return["p-tabpanel",{"p-tabpanel-active":a.active}]}},jt=k.extend({name:"tabpanel",classes:Ht}),Qt={name:"BaseTabPanel",extends:B,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:jt,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},qt={name:"TabPanel",extends:Qt,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var e;return Q((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},attrs:function(){return i(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var e;return{id:this.id,tabindex:(e=this.$pcTabs)===null||e===void 0?void 0:e.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function Gt(t,e,a,s,r,n){var d,v;return n.$pcTabs?(l(),f(H,{key:1},[t.asChild?h(t.$slots,"default",{key:1,class:K(t.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs}):(l(),f(H,{key:0},[!((d=n.$pcTabs)!==null&&d!==void 0&&d.lazy)||n.active?P((l(),S(_(t.as),i({key:0,class:t.cx("root")},n.attrs),{default:b(function(){return[h(t.$slots,"default")]}),_:3},16,["class"])),[[rt,(v=n.$pcTabs)!==null&&v!==void 0&&v.lazy?!0:n.active]]):y("",!0)],64))],64)):h(t.$slots,"default",{key:0})}qt.render=Gt;var Yt={root:"p-tabpanels"},Jt=k.extend({name:"tabpanels",classes:Yt}),Xt={name:"BaseTabPanels",extends:B,props:{},style:Jt,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},Zt={name:"TabPanels",extends:Xt,inheritAttrs:!1};function te(t,e,a,s,r,n){return l(),f("div",i({class:t.cx("root"),role:"presentation"},t.ptmi("root")),[h(t.$slots,"default")],16)}Zt.render=te;var ee=({dt:t})=>`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: ${t("tabs.tablist.background")};
    border-style: solid;
    border-color: ${t("tabs.tablist.border.color")};
    border-width: ${t("tabs.tablist.border.width")};
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    inset-block-start: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${t("tabs.nav.button.background")};
    color: ${t("tabs.nav.button.color")};
    width: ${t("tabs.nav.button.width")};
    transition: color ${t("tabs.transition.duration")}, outline-color ${t("tabs.transition.duration")}, box-shadow ${t("tabs.transition.duration")};
    box-shadow: ${t("tabs.nav.button.shadow")};
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: ${t("tabs.nav.button.focus.ring.shadow")};
    outline: ${t("tabs.nav.button.focus.ring.width")} ${t("tabs.nav.button.focus.ring.style")} ${t("tabs.nav.button.focus.ring.color")};
    outline-offset: ${t("tabs.nav.button.focus.ring.offset")};
}

.p-tablist-nav-button:hover {
    color: ${t("tabs.nav.button.hover.color")};
}

.p-tablist-prev-button {
    inset-inline-start: 0;
}

.p-tablist-next-button {
    inset-inline-end: 0;
}

.p-tablist-prev-button:dir(rtl),
.p-tablist-next-button:dir(rtl) {
    transform: rotate(180deg);
}

.p-tab {
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    gap: ${t("tabs.tab.gap")};
    background: ${t("tabs.tab.background")};
    border-width: ${t("tabs.tab.border.width")};
    border-color: ${t("tabs.tab.border.color")};
    color: ${t("tabs.tab.color")};
    padding: ${t("tabs.tab.padding")};
    font-weight: ${t("tabs.tab.font.weight")};
    transition: background ${t("tabs.transition.duration")}, border-color ${t("tabs.transition.duration")}, color ${t("tabs.transition.duration")}, outline-color ${t("tabs.transition.duration")}, box-shadow ${t("tabs.transition.duration")};
    margin: ${t("tabs.tab.margin")};
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: ${t("tabs.tab.focus.ring.shadow")};
    outline: ${t("tabs.tab.focus.ring.width")} ${t("tabs.tab.focus.ring.style")} ${t("tabs.tab.focus.ring.color")};
    outline-offset: ${t("tabs.tab.focus.ring.offset")};
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: ${t("tabs.tab.hover.background")};
    border-color: ${t("tabs.tab.hover.border.color")};
    color: ${t("tabs.tab.hover.color")};
}

.p-tab-active {
    background: ${t("tabs.tab.active.background")};
    border-color: ${t("tabs.tab.active.border.color")};
    color: ${t("tabs.tab.active.color")};
}

.p-tabpanels {
    background: ${t("tabs.tabpanel.background")};
    color: ${t("tabs.tabpanel.color")};
    padding: ${t("tabs.tabpanel.padding")};
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: ${t("tabs.tabpanel.focus.ring.shadow")};
    outline: ${t("tabs.tabpanel.focus.ring.width")} ${t("tabs.tabpanel.focus.ring.style")} ${t("tabs.tabpanel.focus.ring.color")};
    outline-offset: ${t("tabs.tabpanel.focus.ring.offset")};
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    inset-block-end: ${t("tabs.active.bar.bottom")};
    height: ${t("tabs.active.bar.height")};
    background: ${t("tabs.active.bar.background")};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`,ae={root:function(e){var a=e.props;return["p-tabs p-component",{"p-tabs-scrollable":a.scrollable}]}},ne=k.extend({name:"tabs",style:ee,classes:ae}),se={name:"BaseTabs",extends:B,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:ne,provide:function(){return{$pcTabs:this,$parentInstance:this}}},oe={name:"Tabs",extends:se,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isVertical:function(){return this.orientation==="vertical"}}};function re(t,e,a,s,r,n){return l(),f("div",i({class:t.cx("root")},t.ptmi("root")),[h(t.$slots,"default")],16)}oe.render=re;const ie={class:"flex flex-col mb-8"},le={class:"flex items-center gap-x-2"},ce={class:"flex items-center gap-x-2"},de={class:"flex items-center gap-x-2"},ue={class:"flex items-center gap-x-2"},be={class:"flex items-center justify-center"},j=10,pe=J({__name:"UserNotificationTable",setup(t){const e=N(),a=N([{name:"Segnalazioni effettuate",code:"NY"},{name:"Segnalazioni ricevute",code:"RM"}]),s=xt(),{users:r,totalUsers:n}=it(s),{onSort:d,onPage:v,onFilter:w,loadLazyData:C,isLoading:V}=vt({rows:j},X);N(!1);const L=N({id:{value:"",matchMode:g.EQ},email:{value:"",matchMode:g.LIKE},role:{value:"",matchMode:g.EQ},first_name:{value:"",matchMode:g.LIKE},last_name:{value:"",matchMode:g.LIKE},partner_id:{value:"",matchMode:g.EQ},full_name:{value:"",matchMode:g.LIKE},date_open:{value:null,matchMode:g.EQ},date_close:{value:null,matchMode:g.EQ}});function E(){w(L.value)}async function X(M){try{await s.fetchUsers(M)}catch(c){console.error(c)}}return lt(()=>{e.value=a.value[0],C()}),(M,c)=>{const U=gt,T=yt,R=ft,Z=Tt,I=dt,tt=wt,et=ut;return l(),f("div",null,[p("div",ie,[c[2]||(c[2]=p("label",{for:"warnings_type",class:"text-muted-color font-500 mb-1"},"Tipo di segnalazione",-1)),u(U,{modelValue:e.value,"onUpdate:modelValue":c[0]||(c[0]=o=>e.value=o),options:a.value,optionLabel:"name",class:"w-full md:w-60"},null,8,["modelValue","options"])]),u(mt,{value:x(r),rows:j,"total-records":x(n),onSort:x(d),onPage:x(v),onFilter:E,filters:L.value,"onUpdate:filters":c[1]||(c[1]=o=>L.value=o),"data-key":"id",scrollable:"",loading:x(V),rowHover:!0,showGridlines:""},{empty:b(()=>c[7]||(c[7]=[z("Non ci sono segnalazioni")])),default:b(()=>[u(T,{class:"min-w-[200px]",header:"Messaggio",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,"show-clear-button":!1},{body:b(({data:o})=>c[3]||(c[3]=[p("div",{class:"flex items-center gap-2"},[p("span",null," Video di minorenni ")],-1)])),_:1}),u(T,{class:"min-w-[200px]",header:"Data apertura",field:"date_open",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,"show-clear-button":!1},{filter:b(({filterModel:o,filterCallback:m})=>[p("div",le,[u(R,{modelValue:o.value,"onUpdate:modelValue":$=>o.value=$,dateFormat:"dd/mm/yy",placeholder:"Filtra",onDateSelect:$=>m()},null,8,["modelValue","onUpdate:modelValue","onDateSelect"])])]),body:b(()=>c[4]||(c[4]=[z(" 02/01/2025 ")])),_:1}),u(T,{class:"min-w-[200px]",header:"Data chiusura",field:"date_close",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,"show-clear-button":!1},{filter:b(({filterModel:o,filterCallback:m})=>[p("div",ce,[u(R,{modelValue:o.value,"onUpdate:modelValue":$=>o.value=$,dateFormat:"dd/mm/yy",placeholder:"Filtra",onDateSelect:$=>m()},null,8,["modelValue","onUpdate:modelValue","onDateSelect"])])]),body:b(()=>c[5]||(c[5]=[z(" 03/01/2025 ")])),_:1}),u(T,{header:"Operatore",field:"email",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,"show-clear-button":!1},{filter:b(({filterModel:o,filterCallback:m})=>[p("div",de,[u(Z,{fluid:"",modelValue:o.value,"onUpdate:modelValue":$=>o.value=$,type:"text",placeholder:"Filtra",onKeydown:ct($=>m(),["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeydown"]),u(I,{class:K(o.value?"":"invisible"),icon:"pi pi-filter-slash",variant:"text",rounded:"",onClick:$=>{o.value="",m()}},null,8,["class","onClick"])])]),body:b(({data:o})=>c[6]||(c[6]=[z(" Mario Rossi ")])),_:1}),u(T,{class:"min-w-[100px]",header:"Stato",field:"role",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,"show-clear-button":!1},{filter:b(({filterModel:o,filterCallback:m})=>[p("div",ue,[u(U,{class:"w-[100px]",modelValue:o.value,"onUpdate:modelValue":[$=>o.value=$,m],options:x($t)(),"option-label":"label","option-value":"value"},null,8,["modelValue","onUpdate:modelValue","options"]),u(I,{class:K(o.value?"":"invisible"),icon:"pi pi-filter-slash",variant:"text",rounded:"",onClick:$=>{o.value="",m()}},null,8,["class","onClick"])])]),body:b(({data:o})=>[u(tt,{value:"Chiusa",severity:"danger"})]),_:1}),u(T,{class:"w-[50px]","align-frozen":"right",frozen:""},{body:b(({data:o})=>[p("div",be,[P(u(I,{icon:"pi pi-lock-open",severity:"secondary",rounded:"",text:""},null,512),[[et,"Segnala come aperta",void 0,{top:!0}]])])]),_:1})]),_:1},8,["value","total-records","onSort","onPage","filters","loading"])])}}}),ge=J({__name:"NotificationDataTab",setup(t){return(e,a)=>(l(),S(pe))}});function ye(t){bt.config.globalProperties.$confirm.require({header:t.header,group:"confirm-dialog",message:t.message,accept(){var a;(a=t.acceptCallback)==null||a.call(t)},reject(){var a;(a=t.rejectCallback)==null||a.call(t)}})}export{ge as _,St as a,Nt as b,It as c,qt as d,Zt as e,oe as f,ye as s};
