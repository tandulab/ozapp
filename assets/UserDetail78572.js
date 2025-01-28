import{B as N,o as l,a as v,m as y,p as d,t as D,g as P,n as V,q as O,v as B,x as F,y as gt,e as o,z as M,A as G,C as yt,D as nt,R as st,E as ot,j as _,w as b,F as H,G as X,H as $t,I as R,J as xt,K as wt,L as tt,M as Tt,U as et,d as W,r as L,s as kt,f as it,b as r,h,i as q,u as A,l as rt,T as lt,N as Bt,O as Ct,P as J,Q as Lt,k as Q}from"../index78572.js";import{e as _t,u as Y,a as zt,T as S,g as St,L as At,c as Vt,s as Pt,d as ct,A as Nt}from"./role78572.js";import{s as Ft}from"./index78572.js";var Kt=function(e){var a=e.dt;return`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: `.concat(a("avatar.width"),`;
    height: `).concat(a("avatar.height"),`;
    font-size: `).concat(a("avatar.font.size"),`;
    background: `).concat(a("avatar.background"),`;
    color: `).concat(a("avatar.color"),`;
    border-radius: `).concat(a("avatar.border.radius"),`;
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: `).concat(a("avatar.icon.size"),`;
    width: `).concat(a("avatar.icon.size"),`;
    height: `).concat(a("avatar.icon.size"),`;
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: `).concat(a("avatar.lg.width"),`;
    height: `).concat(a("avatar.lg.width"),`;
    font-size: `).concat(a("avatar.lg.font.size"),`;
}

.p-avatar-lg .p-avatar-icon {
    font-size: `).concat(a("avatar.lg.icon.size"),`;
    width: `).concat(a("avatar.lg.icon.size"),`;
    height: `).concat(a("avatar.lg.icon.size"),`;
}

.p-avatar-xl {
    width: `).concat(a("avatar.xl.width"),`;
    height: `).concat(a("avatar.xl.width"),`;
    font-size: `).concat(a("avatar.xl.font.size"),`;
}

.p-avatar-xl .p-avatar-icon {
    font-size: `).concat(a("avatar.xl.icon.size"),`;
    width: `).concat(a("avatar.xl.icon.size"),`;
    height: `).concat(a("avatar.xl.icon.size"),`;
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: `).concat(a("avatar.group.offset"),`;
}

.p-avatar-group .p-avatar {
    border: 2px solid `).concat(a("avatar.group.border.color"),`;
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: `).concat(a("avatar.lg.group.offset"),`;
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: `).concat(a("avatar.xl.group.offset"),`;
}
`)},Et={root:function(e){var a=e.props;return["p-avatar p-component",{"p-avatar-image":a.image!=null,"p-avatar-circle":a.shape==="circle","p-avatar-lg":a.size==="large","p-avatar-xl":a.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},It=N.extend({name:"avatar",theme:Kt,classes:Et}),Ut={name:"BaseAvatar",extends:F,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:It,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},ut={name:"Avatar",extends:Ut,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}}},Dt=["aria-labelledby","aria-label"],Ot=["src","alt"];function Mt(t,e,a,s,c,n){return l(),v("div",d({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root")),[y(t.$slots,"default",{},function(){return[t.label?(l(),v("span",d({key:0,class:t.cx("label")},t.ptm("label")),D(t.label),17)):t.$slots.icon?(l(),P(O(t.$slots.icon),{key:1,class:V(t.cx("icon"))},null,8,["class"])):t.icon?(l(),v("span",d({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):t.image?(l(),v("img",d({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return n.onError&&n.onError.apply(n,arguments)})},t.ptm("image")),null,16,Ot)):B("",!0)]})],16,Dt)}ut.render=Mt;var dt={name:"ChevronLeftIcon",extends:gt};function Rt(t,e,a,s,c,n){return l(),v("svg",d({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[o("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"},null,-1)]),16)}dt.render=Rt;var Wt=function(e){var a=e.dt;return`
.p-card {
    background: `.concat(a("card.background"),`;
    color: `).concat(a("card.color"),`;
    box-shadow: `).concat(a("card.shadow"),`;
    border-radius: `).concat(a("card.border.radius"),`;
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: `).concat(a("card.caption.gap"),`;
}

.p-card-body {
    padding: `).concat(a("card.body.padding"),`;
    display: flex;
    flex-direction: column;
    gap: `).concat(a("card.body.gap"),`;
}

.p-card-title {
    font-size: `).concat(a("card.title.font.size"),`;
    font-weight: `).concat(a("card.title.font.weight"),`;
}

.p-card-subtitle {
    color: `).concat(a("card.subtitle.color"),`;
}
`)},jt={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Ht=N.extend({name:"card",theme:Wt,classes:jt}),qt={name:"BaseCard",extends:F,style:Ht,provide:function(){return{$pcCard:this,$parentInstance:this}}},Z={name:"Card",extends:qt,inheritAttrs:!1};function Qt(t,e,a,s,c,n){return l(),v("div",d({class:t.cx("root")},t.ptmi("root")),[t.$slots.header?(l(),v("div",d({key:0,class:t.cx("header")},t.ptm("header")),[y(t.$slots,"header")],16)):B("",!0),o("div",d({class:t.cx("body")},t.ptm("body")),[t.$slots.title||t.$slots.subtitle?(l(),v("div",d({key:0,class:t.cx("caption")},t.ptm("caption")),[t.$slots.title?(l(),v("div",d({key:0,class:t.cx("title")},t.ptm("title")),[y(t.$slots,"title")],16)):B("",!0),t.$slots.subtitle?(l(),v("div",d({key:1,class:t.cx("subtitle")},t.ptm("subtitle")),[y(t.$slots,"subtitle")],16)):B("",!0)],16)):B("",!0),o("div",d({class:t.cx("content")},t.ptm("content")),[y(t.$slots,"content")],16),t.$slots.footer?(l(),v("div",d({key:1,class:t.cx("footer")},t.ptm("footer")),[y(t.$slots,"footer")],16)):B("",!0)],16)],16)}Z.render=Qt;var Gt={root:function(e){var a=e.instance,s=e.props;return["p-tab",{"p-tab-active":a.active,"p-disabled":s.disabled}]}},Jt=N.extend({name:"tab",classes:Gt}),Yt={name:"BaseTab",extends:F,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Jt,provide:function(){return{$pcTab:this,$parentInstance:this}}},pt={name:"Tab",extends:Yt,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowRightKey:function(e){var a=this.findNextTab(e.currentTarget);a?this.changeFocusedTab(e,a):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var a=this.findPrevTab(e.currentTarget);a?this.changeFocusedTab(e,a):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var a=this.findFirstTab();this.changeFocusedTab(e,a),e.preventDefault()},onEndKey:function(e){var a=this.findLastTab();this.changeFocusedTab(e,a),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findNextTab:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=a?e:e.nextElementSibling;return s?M(s,"data-p-disabled")||M(s,"data-pc-section")==="inkbar"?this.findNextTab(s):G(s,'[data-pc-name="tab"]'):null},findPrevTab:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=a?e:e.previousElementSibling;return s?M(s,"data-p-disabled")||M(s,"data-pc-section")==="inkbar"?this.findPrevTab(s):G(s,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.content.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.content.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,a){yt(a),this.scrollInView(a)},scrollInView:function(e){var a;e==null||(a=e.scrollIntoView)===null||a===void 0||a.call(e,{block:"nearest"})}},computed:{active:function(){var e;return nt((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.id,"_tab_").concat(this.value)},ariaControls:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.id,"_tabpanel_").concat(this.value)},attrs:function(){return d(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}}},directives:{ripple:st}};function Zt(t,e,a,s,c,n){var f=ot("ripple");return t.asChild?y(t.$slots,"default",{key:1,class:V(t.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs,onClick:n.onClick}):_((l(),P(O(t.as),d({key:0,class:t.cx("root"),onClick:n.onClick},n.attrs),{default:b(function(){return[y(t.$slots,"default")]}),_:3},16,["class","onClick"])),[[f]])}pt.render=Zt;var Xt={root:"p-tablist",content:function(e){var a=e.instance;return["p-tablist-content",{"p-tablist-viewport":a.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},te=N.extend({name:"tablist",classes:Xt}),ee={name:"BaseTabList",extends:F,props:{},style:te,provide:function(){return{$pcTabList:this,$parentInstance:this}}},bt={name:"TabList",extends:ee,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var e=this;this.$nextTick(function(){e.updateInkBar()}),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,a=this.getVisibleButtonWidths(),s=H(e)-a,c=Math.abs(e.scrollLeft),n=s*.8,f=c-n,m=Math.max(f,0);e.scrollLeft=X(e)?-1*m:m},onNextButtonClick:function(){var e=this.$refs.content,a=this.getVisibleButtonWidths(),s=H(e)-a,c=Math.abs(e.scrollLeft),n=s*.8,f=c+n,m=e.scrollWidth-s,$=Math.min(f,m);e.scrollLeft=X(e)?-1*$:$},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)===null||e===void 0||e.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var e=this.$refs,a=e.content,s=e.inkbar,c=e.tabs,n=G(a,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(s.style.height=$t(n)+"px",s.style.top=R(n).top-R(c).top+"px"):(s.style.width=xt(n)+"px",s.style.left=R(n).left-R(c).left+"px")},updateButtonState:function(){var e=this.$refs,a=e.list,s=e.content,c=s.scrollTop,n=s.scrollWidth,f=s.scrollHeight,m=s.offsetWidth,$=s.offsetHeight,i=Math.abs(s.scrollLeft),x=[H(s),wt(s)],T=x[0],z=x[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=c!==0,this.isNextButtonEnabled=a.offsetHeight>=$&&parseInt(c)!==f-z):(this.isPrevButtonEnabled=i!==0,this.isNextButtonEnabled=a.offsetWidth>=m&&parseInt(i)!==n-T)},getVisibleButtonWidths:function(){var e=this.$refs,a=e.prevButton,s=e.nextButton,c=0;return this.showNavigators&&(c=((a==null?void 0:a.offsetWidth)||0)+((s==null?void 0:s.offsetWidth)||0)),c}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},components:{ChevronLeftIcon:dt,ChevronRightIcon:_t},directives:{ripple:st}},ae=["aria-label","tabindex"],ne=["aria-orientation"],se=["aria-label","tabindex"];function oe(t,e,a,s,c,n){var f=ot("ripple");return l(),v("div",d({ref:"list",class:t.cx("root")},t.ptmi("root")),[n.showNavigators&&c.isPrevButtonEnabled?_((l(),v("button",d({key:0,ref:"prevButton",class:t.cx("prevButton"),"aria-label":n.prevButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:e[0]||(e[0]=function(){return n.onPrevButtonClick&&n.onPrevButtonClick.apply(n,arguments)})},t.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(l(),P(O(n.templates.previcon||"ChevronLeftIcon"),d({"aria-hidden":"true"},t.ptm("prevIcon")),null,16))],16,ae)),[[f]]):B("",!0),o("div",d({ref:"content",class:t.cx("content"),onScroll:e[1]||(e[1]=function(){return n.onScroll&&n.onScroll.apply(n,arguments)})},t.ptm("content")),[o("div",d({ref:"tabs",class:t.cx("tabList"),role:"tablist","aria-orientation":n.$pcTabs.orientation||"horizontal"},t.ptm("tabList")),[y(t.$slots,"default"),o("span",d({ref:"inkbar",class:t.cx("activeBar"),role:"presentation","aria-hidden":"true"},t.ptm("activeBar")),null,16)],16,ne)],16),n.showNavigators&&c.isNextButtonEnabled?_((l(),v("button",d({key:1,ref:"nextButton",class:t.cx("nextButton"),"aria-label":n.nextButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:e[2]||(e[2]=function(){return n.onNextButtonClick&&n.onNextButtonClick.apply(n,arguments)})},t.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(l(),P(O(n.templates.nexticon||"ChevronRightIcon"),d({"aria-hidden":"true"},t.ptm("nextIcon")),null,16))],16,se)),[[f]]):B("",!0)],16)}bt.render=oe;var ie={root:function(e){var a=e.instance;return["p-tabpanel",{"p-tabpanel-active":a.active}]}},re=N.extend({name:"tabpanel",classes:ie}),le={name:"BaseTabPanel",extends:F,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:re,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},vt={name:"TabPanel",extends:le,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var e;return nt((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.id,"_tab_").concat(this.value)},attrs:function(){return d(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var e;return{id:this.id,tabindex:(e=this.$pcTabs)===null||e===void 0?void 0:e.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function ce(t,e,a,s,c,n){var f,m;return n.$pcTabs?(l(),v(tt,{key:1},[t.asChild?y(t.$slots,"default",{key:1,class:V(t.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs}):(l(),v(tt,{key:0},[!((f=n.$pcTabs)!==null&&f!==void 0&&f.lazy)||n.active?_((l(),P(O(t.as),d({key:0,class:t.cx("root")},n.attrs),{default:b(function(){return[y(t.$slots,"default")]}),_:3},16,["class"])),[[Tt,(m=n.$pcTabs)!==null&&m!==void 0&&m.lazy?!0:n.active]]):B("",!0)],64))],64)):y(t.$slots,"default",{key:0})}vt.render=ce;var ue={root:"p-tabpanels"},de=N.extend({name:"tabpanels",classes:ue}),pe={name:"BaseTabPanels",extends:F,props:{},style:de,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},ft={name:"TabPanels",extends:pe,inheritAttrs:!1};function be(t,e,a,s,c,n){return l(),v("div",d({class:t.cx("root"),role:"presentation"},t.ptmi("root")),[y(t.$slots,"default")],16)}ft.render=be;var ve=function(e){var a=e.dt;return`
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
    background: `.concat(a("tabs.tablist.background"),`;
    border-style: solid;
    border-color: `).concat(a("tabs.tablist.border.color"),`;
    border-width: `).concat(a("tabs.tablist.border.width"),`;
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
    background: `).concat(a("tabs.nav.button.background"),`;
    color: `).concat(a("tabs.nav.button.color"),`;
    width: `).concat(a("tabs.nav.button.width"),`;
    transition: color `).concat(a("tabs.transition.duration"),", outline-color ").concat(a("tabs.transition.duration"),", box-shadow ").concat(a("tabs.transition.duration"),`;
    box-shadow: `).concat(a("tabs.nav.button.shadow"),`;
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: `).concat(a("tabs.nav.button.focus.ring.shadow"),`;
    outline: `).concat(a("tabs.nav.button.focus.ring.width")," ").concat(a("tabs.nav.button.focus.ring.style")," ").concat(a("tabs.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(a("tabs.nav.button.focus.ring.offset"),`;
}

.p-tablist-nav-button:hover {
    color: `).concat(a("tabs.nav.button.hover.color"),`;
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
    background: `).concat(a("tabs.tab.background"),`;
    border-width: `).concat(a("tabs.tab.border.width"),`;
    border-color: `).concat(a("tabs.tab.border.color"),`;
    color: `).concat(a("tabs.tab.color"),`;
    padding: `).concat(a("tabs.tab.padding"),`;
    font-weight: `).concat(a("tabs.tab.font.weight"),`;
    transition: background `).concat(a("tabs.transition.duration"),", border-color ").concat(a("tabs.transition.duration"),", color ").concat(a("tabs.transition.duration"),", outline-color ").concat(a("tabs.transition.duration"),", box-shadow ").concat(a("tabs.transition.duration"),`;
    margin: `).concat(a("tabs.tab.margin"),`;
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: `).concat(a("tabs.tab.focus.ring.shadow"),`;
    outline: `).concat(a("tabs.tab.focus.ring.width")," ").concat(a("tabs.tab.focus.ring.style")," ").concat(a("tabs.tab.focus.ring.color"),`;
    outline-offset: `).concat(a("tabs.tab.focus.ring.offset"),`;
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: `).concat(a("tabs.tab.hover.background"),`;
    border-color: `).concat(a("tabs.tab.hover.border.color"),`;
    color: `).concat(a("tabs.tab.hover.color"),`;
}

.p-tab-active {
    background: `).concat(a("tabs.tab.active.background"),`;
    border-color: `).concat(a("tabs.tab.active.border.color"),`;
    color: `).concat(a("tabs.tab.active.color"),`;
}

.p-tabpanels {
    background: `).concat(a("tabs.tabpanel.background"),`;
    color: `).concat(a("tabs.tabpanel.color"),`;
    padding: `).concat(a("tabs.tabpanel.padding"),`;
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: `).concat(a("tabs.tabpanel.focus.ring.shadow"),`;
    outline: `).concat(a("tabs.tabpanel.focus.ring.width")," ").concat(a("tabs.tabpanel.focus.ring.style")," ").concat(a("tabs.tabpanel.focus.ring.color"),`;
    outline-offset: `).concat(a("tabs.tabpanel.focus.ring.offset"),`;
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    inset-block-end: `).concat(a("tabs.active.bar.bottom"),`;
    height: `).concat(a("tabs.active.bar.height"),`;
    background: `).concat(a("tabs.active.bar.background"),`;
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`)},fe={root:function(e){var a=e.props;return["p-tabs p-component",{"p-tabs-scrollable":a.scrollable}]}},he=N.extend({name:"tabs",theme:ve,classes:fe}),me={name:"BaseTabs",extends:F,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:he,provide:function(){return{$pcTabs:this,$parentInstance:this}}},ht={name:"Tabs",extends:me,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(e){this.id=e||et()},value:function(e){this.d_value=e}},mounted:function(){this.id=this.id||et()},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isVertical:function(){return this.orientation==="vertical"}}};function ge(t,e,a,s,c,n){return l(),v("div",d({class:t.cx("root")},t.ptmi("root")),[y(t.$slots,"default")],16)}ht.render=ge;const ye={class:"p-6"},$e={class:"flex flex-col mb-8"},xe={class:"flex items-center gap-x-2"},we={class:"flex items-center gap-x-2"},Te={class:"flex items-center gap-x-2"},ke={class:"flex items-center gap-x-2"},Be={class:"flex items-center justify-center"},at=10,Ce=W({__name:"WarningTable",setup(t){const e=L(),a=L([{name:"Segnalazioni effettuate",code:"NY"},{name:"Segnalazioni ricevute",code:"RM"}]),s=Y(),{users:c,totalUsers:n}=kt(s),{onSort:f,onPage:m,onFilter:$,loadLazyData:i,isLoading:x}=zt({rows:at},I);L(!1);const T=L({id:{value:"",matchMode:S.EQ},email:{value:"",matchMode:S.LIKE},role:{value:"",matchMode:S.EQ},first_name:{value:"",matchMode:S.LIKE},last_name:{value:"",matchMode:S.LIKE},partner_id:{value:"",matchMode:S.EQ},full_name:{value:"",matchMode:S.LIKE}});function z(){$(T.value)}async function I(K){try{await s.fetchUsers(K)}catch(p){console.error(p)}}return it(()=>{e.value=a.value[0],i()}),(K,p)=>{const U=Vt,k=Pt,E=Ft,C=rt,j=ct,mt=lt;return l(),v("div",ye,[o("div",$e,[p[2]||(p[2]=o("label",{for:"warnings_type",class:"text-muted-color font-500 mb-1"},"Tipo di segnalazione",-1)),r(U,{modelValue:e.value,"onUpdate:modelValue":p[0]||(p[0]=u=>e.value=u),options:a.value,optionLabel:"name",class:"w-full md:w-60"},null,8,["modelValue","options"])]),r(At,{value:A(c),rows:at,"total-records":A(n),onSort:A(f),onPage:A(m),onFilter:z,filters:T.value,"onUpdate:filters":p[1]||(p[1]=u=>T.value=u),"data-key":"id",scrollable:"",loading:A(x),rowHover:!0,showGridlines:""},{empty:b(()=>p[7]||(p[7]=[h("Non ci sono segnalazioni")])),default:b(()=>[r(k,{class:"min-w-[200px]",header:"Messaggio",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,"show-clear-button":!1},{body:b(({data:u})=>p[3]||(p[3]=[o("div",{class:"flex items-center gap-2"},[o("span",null," Video di minorenni ")],-1)])),_:1}),r(k,{class:"min-w-[200px]",header:"Data apertura",field:"email",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,"show-clear-button":!1},{filter:b(({filterModel:u,filterCallback:w})=>[o("div",xe,[r(E,{fluid:"",modelValue:u.value,"onUpdate:modelValue":g=>u.value=g,type:"text",placeholder:"Filtra",onKeydown:q(g=>w(),["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeydown"]),r(C,{class:V(u.value?"":"invisible"),icon:"pi pi-filter-slash",variant:"text",rounded:"",onClick:g=>{u.value="",w()}},null,8,["class","onClick"])])]),body:b(()=>p[4]||(p[4]=[h(" 02/01/2025 ")])),_:1}),r(k,{class:"min-w-[200px]",header:"Data chiusura",field:"email",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,"show-clear-button":!1},{filter:b(({filterModel:u,filterCallback:w})=>[o("div",we,[r(E,{fluid:"",modelValue:u.value,"onUpdate:modelValue":g=>u.value=g,type:"text",placeholder:"Filtra",onKeydown:q(g=>w(),["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeydown"]),r(C,{class:V(u.value?"":"invisible"),icon:"pi pi-filter-slash",variant:"text",rounded:"",onClick:g=>{u.value="",w()}},null,8,["class","onClick"])])]),body:b(()=>p[5]||(p[5]=[h(" 03/01/2025 ")])),_:1}),r(k,{header:"Operatore",field:"email",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,"show-clear-button":!1},{filter:b(({filterModel:u,filterCallback:w})=>[o("div",Te,[r(E,{fluid:"",modelValue:u.value,"onUpdate:modelValue":g=>u.value=g,type:"text",placeholder:"Filtra",onKeydown:q(g=>w(),["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeydown"]),r(C,{class:V(u.value?"":"invisible"),icon:"pi pi-filter-slash",variant:"text",rounded:"",onClick:g=>{u.value="",w()}},null,8,["class","onClick"])])]),body:b(({data:u})=>p[6]||(p[6]=[h(" Mario Rossi ")])),_:1}),r(k,{class:"min-w-[100px]",header:"Stato",field:"role",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,"show-clear-button":!1},{filter:b(({filterModel:u,filterCallback:w})=>[o("div",ke,[r(U,{class:"w-[100px]",modelValue:u.value,"onUpdate:modelValue":[g=>u.value=g,w],options:A(St)(),"option-label":"label","option-value":"value"},null,8,["modelValue","onUpdate:modelValue","options"]),r(C,{class:V(u.value?"":"invisible"),icon:"pi pi-filter-slash",variant:"text",rounded:"",onClick:g=>{u.value="",w()}},null,8,["class","onClick"])])]),body:b(({data:u})=>[r(j,{value:"Chiusa",severity:"danger"})]),_:1}),r(k,{class:"w-[50px]","align-frozen":"right",frozen:""},{body:b(({data:u})=>[o("div",Be,[_(r(C,{icon:"pi pi-lock-open",severity:"secondary",rounded:"",text:""},null,512),[[mt,"Segnala come aperta",void 0,{top:!0}]])])]),_:1})]),_:1},8,["value","total-records","onSort","onPage","filters","loading"])])}}}),Le=W({__name:"WarningDataTab",setup(t){return(e,a)=>(l(),P(Ce))}});function _e(t){Bt.config.globalProperties.$confirm.require({header:t.header,group:"confirm-dialog",message:t.message,accept(){var a;(a=t.acceptCallback)==null||a.call(t)},reject(){var a;(a=t.rejectCallback)==null||a.call(t)}})}const ze={class:"flex flex-row-reverse"},Se={class:"flex justify-end absolute"},Ae={class:"flex items-baseline"},Ve={class:"grid grid-cols-[auto,1fr] p-6"},Pe={class:"flex items-center flex-col"},Ne={class:"pl-6"},Fe={class:"uppercase font-semibold text-xl mb-2"},Ke={class:"flex justify-between"},Ee={class:"flex gap-7 align-center"},Ie={class:"flex items-center"},Ue={class:"flex items-center"},De={class:"flex gap-4 align-center"},Oe={class:"flex items-center gap-1"},Me={class:"flex items-center gap-1"},Re={class:"flex items-center gap-1"},We=W({__name:"UserDataCard",setup(t){const e=Y(),{toggleBtn:a}=Ct(),s=L(),c=L([{items:[{label:"Cambia stato"},{label:"Cambia ruolo"},{label:"Elimina utente",command:()=>{m()}}]}]),n=J(()=>e.currentUser);async function f($){try{await e.deleteUser($)}catch(i){console.error(i)}}function m(){_e({message:"Stai per eliminare un utente. Vuoi confermare l'operazione?",header:"Eliminazione utente",acceptCallback(){n.value&&f(n.value.id)}})}return($,i)=>{const x=ct,T=rt,z=Lt,I=ut,K=Z,p=lt;return l(),P(K,{class:"mt-4"},{content:b(()=>{var U,k,E,C;return[o("div",ze,[o("div",Se,[o("div",Ae,[r(x,{value:"Attivo",severity:"info",class:"mr-2"}),r(x,{value:"Admin",severity:"danger",rounded:""}),r(T,{icon:"pi pi-cog",severity:"secondary",rounded:"",text:"",onClick:i[0]||(i[0]=j=>A(a)(s.value,j))}),r(z,{ref_key:"menu",ref:s,id:"config_menu",model:c.value,popup:""},null,8,["model"])])]),o("div",Ve,[o("div",Pe,[r(I,{image:"https://primefaces.org/cdn/primevue/images/avatar/ivanmagalhaes.png",class:"mr-2 !w-32 !h-32 mb-3",shape:"circle"}),r(x,{value:"Recitazione"})]),o("div",Ne,[o("div",null,[o("h1",Fe,D((U=n.value)==null?void 0:U.first_name)+" "+D((k=n.value)==null?void 0:k.last_name),1)]),o("div",Ke,[o("div",Ee,[i[3]||(i[3]=o("div",{class:"flex items-center"},[o("i",{class:"pi pi-user mr-2 !text-xs text-muted-color"}),h("username ")],-1)),o("div",Ie,[i[1]||(i[1]=o("i",{class:"pi pi-envelope mr-2 !text-xs text-muted-color"},null,-1)),h(" "+D((E=n.value)==null?void 0:E.email),1)]),o("div",Ue,[i[2]||(i[2]=o("i",{class:"pi pi-phone mr-2 !text-xs text-muted-color"},null,-1)),h(" "+D(((C=n.value)==null?void 0:C.telephone)||"333 333333333"),1)])]),o("div",De,[_((l(),v("div",Oe,i[4]||(i[4]=[o("i",{class:"pi pi-heart-fill text-pink-500 mr-1"},null,-1),h(" 12 ")]))),[[p,"Like ricevuti",void 0,{top:!0}]]),_((l(),v("div",Me,i[5]||(i[5]=[o("i",{class:"pi pi-thumbs-up text-blue-500 mr-1"},null,-1),h(" 31 ")]))),[[p,"Like lasciati",void 0,{top:!0}]]),_((l(),v("div",Re,i[6]||(i[6]=[o("i",{class:"pi pi-video text-purple-500 mr-1"},null,-1),h(" 5 ")]))),[[p,"Video caricati",void 0,{top:!0}]])])]),i[7]||(i[7]=o("hr",{class:"mt-2"},null,-1)),i[8]||(i[8]=o("div",{class:"flex gap-7 align-center pt-4"},[o("div",{class:"flex flex-col"},[o("p",{class:"uppercase text-muted-color font-medium mb-4 text-xs"}," città "),h(" Torino ")]),o("div",{class:"flex flex-col"},[o("p",{class:"uppercase text-muted-color font-medium mb-4 text-xs"}," data di nascita "),h(" 24/10/1990 ")]),o("div",{class:"flex flex-col"},[o("p",{class:"uppercase text-muted-color font-medium mb-4 text-xs"}," lingua "),h(" Italiano ")]),o("div",{class:"flex flex-col"},[o("p",{class:"uppercase text-muted-color font-medium mb-4 text-xs"}," tipo accesso "),h(" Email ")]),o("div",{class:"flex flex-col"},[o("p",{class:"uppercase text-muted-color font-medium mb-4 text-xs"}," servizi offerti "),h(" doppiaggio, teatro, cinema ")])],-1)),i[9]||(i[9]=o("div",{class:"flex pt-4"},[o("div",{class:"flex flex-col"},[o("p",{class:"uppercase text-muted-color font-medium mb-4 text-xs"}," biografia "),h(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non finibus massa, at vulputate quam. Phasellus nunc quam, feugiat at tincidunt ac, tincidunt malesuada orci. Aenean lectus lacus, sodales et est at, sollicitudin facilisis mi. Vestibulum orci arcu, sagittis sit amet orci sit amet, sagittis vestibulum magna. Nullam aliquam pretium neque, eu pulvinar risus. Pellentesque vulputate nibh urna, a efficitur magna lacinia ac. Morbi sapien justo, ullamcorper ut turpis auctor, convallis tempus felis. Cras ipsum ligula, gravida in facilisis vitae, dictum eu tellus. Pellentesque in dolor et augue lacinia volutpat eu nec lacus. Etiam lectus odio, mollis eget ante ut, sodales convallis odio. ")])],-1))])])])]}),_:1})}}}),Qe=W({__name:"UserDetail",props:{id:{}},setup(t){const e=t,a=Y(),s=L([]),c=L(!1),n=J(()=>!e.id);J(()=>a.currentUser);function f(){s.value=[{label:"Tutti gli utenti",route:{name:Q.utenti}}],n.value?s.value.push({label:"Nuovo utente",route:{name:Q.utentiNew}}):s.value.push({label:e.id,route:{name:Q.utentiDettaglio,params:{id:e.id}}})}async function m($){try{c.value=!0;const i=new Map;await a.fetchUserDetail($,i)}catch(i){console.error(i)}finally{c.value=!1}}return it(()=>{f(),e.id&&m(e.id)}),($,i)=>{const x=pt,T=bt,z=vt,I=ft,K=ht,p=Z;return l(),v("div",null,[r(Nt,{items:s.value},null,8,["items"]),r(We),r(p,{class:"mt-4"},{content:b(()=>[r(K,{scrollable:"",value:"0"},{default:b(()=>[r(T,null,{default:b(()=>[r(x,{value:"0"},{default:b(()=>i[0]||(i[0]=[h("Segnalazioni")])),_:1}),r(x,{value:"1"},{default:b(()=>i[1]||(i[1]=[h("Media")])),_:1}),r(x,{value:"2"},{default:b(()=>i[2]||(i[2]=[h("Commenti")])),_:1})]),_:1}),r(I,null,{default:b(()=>[r(z,{value:"0"},{default:b(()=>[r(Le)]),_:1})]),_:1})]),_:1})]),_:1})])}}});export{Qe as default};
