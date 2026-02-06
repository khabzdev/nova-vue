import{d as I,B as be,y as ie,C as k,D as T,E as x,L as R,f as e,G as L,r as E,c as D,a0 as Me,K as P,T as Ne,o as se,I as G,P as X,F as Y,w as Z,n as Ce}from"./vue.esm-bundler-BitZzlT5.js";import{u as re,a as j}from"./useForwardPropsEmits-DQ7cY2da.js";import{c as ue}from"./createContext-Fl0g0pNq.js";import{u as we}from"./useDirection-C1R3tBjc.js";import{u as V}from"./useForwardExpose-ClhNePUc.js";import{u as le}from"./useId-DKCHXeQR.js";import{P as q}from"./Primitive-B5VkAsKh.js";import{u as A}from"./Collection-CCDXBU9V.js";import{g as F}from"./getActiveElement-FUKBWQwh.js";import{a as xe,c as _e,u as ke,e as ee}from"./index-BGV6KQZa.js";import{r as de,u as Ie,k as Ee,a as te}from"./index-CvzWs3kq.js";import{u as ce}from"./useArrowNavigation-B5rxJs06.js";import{P as fe}from"./Presence-V9PPYXmU.js";import{D as Te}from"./DismissableLayer-DXSzZs-S.js";import{V as Le}from"./VisuallyHidden-BLZVLwmx.js";import{W as K}from"./cn-gWiv5-6R-CwNMvQqb.js";import{I as De}from"./iconify-C6s_K7BB.js";import"./ConfigProvider-CB94jlZd.js";import"./usePrimitiveElement-JmSCNQYd.js";import"./nullish-CHIgUVhi.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";function z(u){return u?"open":"closed"}function ve(u,a){return`${u}-trigger-${a}`}function J(u,a){return`${u}-content-${a}`}const Oe="navigationMenu.linkSelect",S="navigationMenu.rootContentDismiss";function U(u){const a=[],n=document.createTreeWalker(u,NodeFilter.SHOW_ELEMENT,{acceptNode:t=>{const i=t.tagName==="INPUT"&&t.type==="hidden";return t.disabled||t.hidden||i?NodeFilter.FILTER_SKIP:t.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)a.push(n.currentNode);return a}function ge(u){const a=F();return u.some(n=>n===a?!0:(n.focus(),F()!==a))}function Pe(u){return u.forEach(a=>{a.dataset.tabindex=a.getAttribute("tabindex")||"",a.setAttribute("tabindex","-1")}),()=>{u.forEach(a=>{const n=a.dataset.tabindex;a.setAttribute("tabindex",n)})}}function pe(u){return a=>a.pointerType==="mouse"?u(a):void 0}const[$,Be]=ue(["NavigationMenuRoot","NavigationMenuSub"],"NavigationMenuContext");var Re=I({__name:"NavigationMenuRoot",props:{modelValue:{type:String,required:!1,default:void 0},defaultValue:{type:String,required:!1},dir:{type:String,required:!1},orientation:{type:String,required:!1,default:"horizontal"},delayDuration:{type:Number,required:!1,default:200},skipDelayDuration:{type:Number,required:!1,default:300},disableClickTrigger:{type:Boolean,required:!1,default:!1},disableHoverTrigger:{type:Boolean,required:!1,default:!1},disablePointerLeaveClose:{type:Boolean,required:!1},unmountOnHide:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"nav"}},emits:["update:modelValue"],setup(u,{emit:a}){const n=u,i=xe(n,"modelValue",a,{defaultValue:n.defaultValue??"",passive:n.modelValue===void 0}),p=E(""),{forwardRef:d,currentElement:r}=V(),l=E(),N=E(),C=E(),{getItems:g,CollectionSlot:O}=A({key:"NavigationMenu",isProvider:!0}),{delayDuration:_,skipDelayDuration:c,dir:y,disableClickTrigger:b,disableHoverTrigger:w,unmountOnHide:s}=be(n),o=we(y),f=de(!1,c),h=D(()=>i.value!==""||f.value?150:_.value),m=Ie(v=>{typeof v=="string"&&(p.value=i.value,i.value=v)},h);ie(()=>{if(!i.value)return;const v=g().map(B=>B.ref);C.value=v.find(B=>B.id.includes(i.value))}),_e(r,S,M),Be({isRootMenu:!0,modelValue:i,previousValue:p,baseId:le(void 0,"reka-navigation-menu"),disableClickTrigger:b,disableHoverTrigger:w,dir:o,unmountOnHide:s,orientation:n.orientation,rootNavigationMenu:r,indicatorTrack:l,activeTrigger:C,onIndicatorTrackChange:v=>{l.value=v},viewport:N,onViewportChange:v=>{N.value=v},onTriggerEnter:v=>{m(v)},onTriggerLeave:()=>{f.value=!0,m("")},onContentEnter:()=>{m()},onContentLeave:()=>{n.disablePointerLeaveClose||m("")},onItemSelect:v=>{p.value=i.value,i.value=v},onItemDismiss:M});function M(){p.value=i.value,i.value=""}return(v,B)=>(k(),T(e(O),null,{default:x(()=>[R(e(q),{ref:e(d),as:v.as,"as-child":v.asChild,"data-orientation":v.orientation,dir:e(o),"data-reka-navigation-menu":""},{default:x(()=>[L(v.$slots,"default",{modelValue:e(i)})]),_:3},8,["as","as-child","data-orientation","dir"])]),_:3}))}}),Ve=Re;const[Q,qe]=ue("NavigationMenuItem");var Fe=I({__name:"NavigationMenuItem",props:{value:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"li"}},setup(u){const a=u;V();const{getItems:n}=A({key:"NavigationMenu"}),t=$(),i=le(a.value),p=E(),d=E(),r=J(t.baseId,i);let l=()=>({});const N=E(!1);async function C(c="start"){const y=document.getElementById(r);if(y){l();const b=U(y);b.length&&ge(c==="start"?b:b.reverse())}}function g(){const c=document.getElementById(r);if(c){const y=U(c);y.length&&(l=Pe(y))}}qe({value:i,contentId:r,triggerRef:p,focusProxyRef:d,wasEscapeCloseRef:N,onEntryKeyDown:C,onFocusProxyEnter:C,onContentFocusOutside:g,onRootContentClose:g});function O(){var c;t.onItemDismiss(),(c=p.value)==null||c.focus()}function _(c){const y=F();if(c.keyCode===32||c.key==="Enter")if(t.modelValue.value===i){O(),c.preventDefault();return}else{c.target.click(),c.preventDefault();return}const b=n().filter(s=>{var o;return(o=s.ref.parentElement)==null?void 0:o.hasAttribute("data-menu-item")}).map(s=>s.ref);if(!b.includes(y))return;const w=ce(c,y,void 0,{itemsArray:b,loop:!1});w&&(w==null||w.focus()),c.preventDefault(),c.stopPropagation()}return(c,y)=>(k(),T(e(q),{"as-child":c.asChild,as:c.as,"data-menu-item":"",onKeydown:Me(_,["up","down","left","right","home","end","space"])},{default:x(()=>[L(c.$slots,"default")]),_:3},8,["as-child","as"]))}}),Ke=Fe,$e=I({__name:"NavigationMenuContentImpl",props:{disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside"],setup(u,{emit:a}){const n=u,t=a,{getItems:i}=A({key:"NavigationMenu"}),{forwardRef:p,currentElement:d}=V(),r=$(),l=Q(),N=ve(r.baseId,l.value),C=J(r.baseId,l.value),g=E(null),O=D(()=>{const s=i().map(v=>v.ref.id.split("trigger-")[1]);r.dir.value==="rtl"&&s.reverse();const o=s.indexOf(r.modelValue.value),f=s.indexOf(r.previousValue.value),h=l.value===r.modelValue.value,m=f===s.indexOf(l.value);if(!h&&!m)return g.value;const M=(()=>{if(o!==f){if(h&&f!==-1)return o>f?"from-end":"from-start";if(m&&o!==-1)return o>f?"to-start":"to-end"}return null})();return g.value=M,M});function _(s){var f,h;if(t("focusOutside",s),t("interactOutside",s),s.detail.originalEvent.target.hasAttribute("data-navigation-menu-trigger")&&s.preventDefault(),!s.defaultPrevented){l.onContentFocusOutside();const m=s.target;(h=(f=r.rootNavigationMenu)==null?void 0:f.value)!=null&&h.contains(m)&&s.preventDefault()}}function c(s){var o;if(t("pointerDownOutside",s),!s.defaultPrevented){const f=s.target,h=i().some(M=>M.ref.contains(f)),m=r.isRootMenu&&((o=r.viewport.value)==null?void 0:o.contains(f));(h||m||!r.isRootMenu)&&s.preventDefault()}}ie(s=>{const o=d.value;if(r.isRootMenu&&o){const f=()=>{var h;r.onItemDismiss(),l.onRootContentClose(),o.contains(F())&&((h=l.triggerRef.value)==null||h.focus())};o.addEventListener(S,f),s(()=>o.removeEventListener(S,f))}});function y(s){var o,f;t("escapeKeyDown",s),s.defaultPrevented||(r.onItemDismiss(),(f=(o=l.triggerRef)==null?void 0:o.value)==null||f.focus(),l.wasEscapeCloseRef.value=!0)}function b(s){var M;if(s.target.closest("[data-reka-navigation-menu]")!==r.rootNavigationMenu.value)return;const o=s.altKey||s.ctrlKey||s.metaKey,f=s.key==="Tab"&&!o,h=U(s.currentTarget);if(f){const v=F(),B=h.findIndex(ye=>ye===v),he=s.shiftKey?h.slice(0,B).reverse():h.slice(B+1,h.length);if(ge(he))s.preventDefault();else{(M=l.focusProxyRef.value)==null||M.focus();return}}const m=ce(s,F(),void 0,{itemsArray:h,loop:!1,enableIgnoredElement:!0});m==null||m.focus()}function w(){var o;const s=new Event(S,{bubbles:!0,cancelable:!0});(o=d.value)==null||o.dispatchEvent(s)}return(s,o)=>(k(),T(e(Te),P({id:e(C),ref:e(p),"aria-labelledby":e(N),"data-motion":O.value,"data-state":e(z)(e(r).modelValue.value===e(l).value),"data-orientation":e(r).orientation},n,{onKeydown:b,onEscapeKeyDown:y,onPointerDownOutside:c,onFocusOutside:_,onDismiss:w}),{default:x(()=>[L(s.$slots,"default")]),_:3},16,["id","aria-labelledby","data-motion","data-state","data-orientation"]))}}),Se=$e,Ae=I({inheritAttrs:!1,__name:"NavigationMenuContent",props:{forceMount:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside"],setup(u,{emit:a}){const n=u,t=a,i=re(Ee(n,"forceMount"),t),{forwardRef:p}=V(),d=$(),r=Q(),l=D(()=>r.value===d.modelValue.value),N=D(()=>d.viewport.value&&!d.modelValue.value&&d.previousValue.value?d.previousValue.value===r.value:!1);return(C,g)=>(k(),T(Ne,{to:e(te)&&e(d).viewport.value?e(d).viewport.value:"body",disabled:e(te)&&e(d).viewport.value?!e(d).viewport.value:!0},[R(e(fe),{present:C.forceMount||l.value||N.value,"force-mount":!e(d).unmountOnHide.value},{default:x(({present:O})=>[R(Se,P({ref:e(p),"data-state":e(z)(l.value),style:{pointerEvents:!l.value&&e(d).isRootMenu?"none":void 0}},{...C.$attrs,...e(i)},{hidden:!O,onPointerenter:g[0]||(g[0]=_=>e(d).onContentEnter(e(r).value)),onPointerleave:g[1]||(g[1]=_=>e(pe)(()=>e(d).onContentLeave())(_)),onPointerDownOutside:g[2]||(g[2]=_=>t("pointerDownOutside",_)),onFocusOutside:g[3]||(g[3]=_=>t("focusOutside",_)),onInteractOutside:g[4]||(g[4]=_=>t("interactOutside",_))}),{default:x(()=>[L(C.$slots,"default")]),_:2},1040,["data-state","style","hidden"])]),_:3},8,["present","force-mount"])],8,["to","disabled"]))}}),He=Ae,je=I({__name:"NavigationMenuLink",props:{active:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"a"}},emits:["select"],setup(u,{emit:a}){const n=u,t=a,{CollectionItem:i}=A({key:"NavigationMenu"});V();async function p(d){var l;const r=new CustomEvent(Oe,{bubbles:!0,cancelable:!0,detail:{originalEvent:d}});if(t("select",r),!r.defaultPrevented&&!d.metaKey){const N=new CustomEvent(S,{bubbles:!0,cancelable:!0});(l=d.target)==null||l.dispatchEvent(N)}}return(d,r)=>(k(),T(e(i),null,{default:x(()=>[R(e(q),{as:d.as,"data-active":d.active?"":void 0,"aria-current":d.active?"page":void 0,"as-child":n.asChild,onClick:p},{default:x(()=>[L(d.$slots,"default")]),_:3},8,["as","data-active","aria-current","as-child"])]),_:3}))}}),ze=je,We=I({inheritAttrs:!1,__name:"NavigationMenuList",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"ul"}},setup(u){const a=u,n=$(),{forwardRef:t,currentElement:i}=V();return se(()=>{n.onIndicatorTrackChange(i.value)}),(p,d)=>(k(),T(e(q),{ref:e(t),style:{position:"relative"}},{default:x(()=>[R(e(q),P(p.$attrs,{"as-child":a.asChild,as:p.as,"data-orientation":e(n).orientation}),{default:x(()=>[L(p.$slots,"default")]),_:3},16,["as-child","as","data-orientation"])]),_:3},512))}}),Ge=We;const Ue=["aria-owns"];var Je=I({inheritAttrs:!1,__name:"NavigationMenuTrigger",props:{disabled:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(u){const a=u,n=$(),t=Q(),{CollectionItem:i}=A({key:"NavigationMenu"}),{forwardRef:p,currentElement:d}=V(),r=E(""),l=E(""),N=de(!1,300),C=E(!1),g=D(()=>t.value===n.modelValue.value);se(()=>{t.triggerRef=d,r.value=ve(n.baseId,t.value),l.value=J(n.baseId,t.value)});function O(){n.disableHoverTrigger.value||(C.value=!1,t.wasEscapeCloseRef.value=!1)}function _(o){if(!n.disableHoverTrigger.value&&o.pointerType==="mouse"){if(a.disabled||C.value||t.wasEscapeCloseRef.value||N.value)return;n.onTriggerEnter(t.value),N.value=!0}}function c(o){if(!n.disableHoverTrigger.value&&o.pointerType==="mouse"){if(a.disabled)return;n.onTriggerLeave(),N.value=!1}}function y(o){(!("pointerType"in o)||o.pointerType==="mouse")&&n.disableClickTrigger.value||N.value||(g.value?n.onItemSelect(""):n.onItemSelect(t.value),C.value=g.value)}function b(o){const h={horizontal:"ArrowDown",vertical:n.dir.value==="rtl"?"ArrowLeft":"ArrowRight"}[n.orientation];g.value&&o.key===h&&(t.onEntryKeyDown(),o.preventDefault(),o.stopPropagation())}function w(o){t.focusProxyRef.value=ke(o)}function s(o){const f=document.getElementById(t.contentId),h=o.relatedTarget,m=h===d.value,M=f==null?void 0:f.contains(h);(m||!M)&&t.onFocusProxyEnter(m?"start":"end")}return(o,f)=>(k(),G(X,null,[R(e(i),null,{default:x(()=>[R(e(q),P({id:r.value,ref:e(p),disabled:o.disabled,"data-disabled":o.disabled?"":void 0,"data-state":e(z)(g.value),"data-navigation-menu-trigger":"","aria-expanded":g.value,"aria-controls":l.value,"as-child":a.asChild,as:o.as},o.$attrs,{onPointerenter:O,onPointermove:_,onPointerleave:c,onClick:y,onKeydown:b}),{default:x(()=>[L(o.$slots,"default")]),_:3},16,["id","disabled","data-disabled","data-state","aria-expanded","aria-controls","as-child","as"])]),_:3}),g.value?(k(),G(X,{key:0},[R(e(Le),{ref:w,"aria-hidden":"true",tabindex:0,onFocus:s}),e(n).viewport?(k(),G("span",{key:0,"aria-owns":l.value},null,8,Ue)):Y("v-if",!0)],64)):Y("v-if",!0)],64))}}),Qe=Je,Xe=I({inheritAttrs:!1,__name:"NavigationMenuViewport",props:{forceMount:{type:Boolean,required:!1},align:{type:String,required:!1,default:"center"},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(u){var _;const a=u,{forwardRef:n,currentElement:t}=V(),i=$(),{activeTrigger:p,rootNavigationMenu:d,modelValue:r}=i,l=E(),N=E(),C=D(()=>!!i.modelValue.value);Z(t,()=>{i.onViewportChange(t.value)});const g=E();Z([r,C],()=>{Ce(()=>{t.value&&requestAnimationFrame(()=>{var y;const c=(y=t.value)==null?void 0:y.querySelector("[data-state=open]");g.value=c})})},{immediate:!0});function O(){if(g.value&&p.value&&d.value){const c=document.documentElement.offsetWidth,y=document.documentElement.offsetHeight,b=d.value.getBoundingClientRect(),w=p.value.getBoundingClientRect(),{offsetWidth:s,offsetHeight:o}=g.value,f=w.left-b.left,h=w.top-b.top;let m=null,M=null;switch(a.align){case"start":m=f,M=h;break;case"end":m=f-s+w.width,M=h-o+w.height;break;default:m=f-s/2+w.width/2,M=h-o/2+w.height/2}const v=10;m+b.left<v&&(m=v-b.left);const B=m+b.left+s;B>c-v&&(m-=B-c+v,m<v-b.left&&(m=v-b.left)),M+b.top<v&&(M=v-b.top);const W=M+b.top+o;W>y-v&&(M-=W-y+v,M<v-b.top&&(M=v-b.top)),m=Math.round(m),M=Math.round(M),N.value={left:m,top:M}}}return ee(g,()=>{g.value&&(l.value={width:g.value.offsetWidth,height:g.value.offsetHeight},O())}),ee([(_=globalThis.document)==null?void 0:_.body,d],()=>{O()}),(c,y)=>(k(),T(e(fe),{present:c.forceMount||C.value,"force-mount":!e(i).unmountOnHide.value,onAfterLeave:y[2]||(y[2]=()=>{l.value=void 0,N.value=void 0})},{default:x(({present:b})=>{var w,s,o,f;return[R(e(q),P(c.$attrs,{ref:e(n),as:c.as,"as-child":c.asChild,"data-state":e(z)(C.value),"data-orientation":e(i).orientation,style:{pointerEvents:!C.value&&e(i).isRootMenu?"none":void 0,"--reka-navigation-menu-viewport-width":l.value?`${(w=l.value)==null?void 0:w.width}px`:void 0,"--reka-navigation-menu-viewport-height":l.value?`${(s=l.value)==null?void 0:s.height}px`:void 0,"--reka-navigation-menu-viewport-left":N.value?`${(o=N.value)==null?void 0:o.left}px`:void 0,"--reka-navigation-menu-viewport-top":N.value?`${(f=N.value)==null?void 0:f.top}px`:void 0},hidden:!b,onPointerenter:y[0]||(y[0]=h=>e(i).onContentEnter(e(i).modelValue.value)),onPointerleave:y[1]||(y[1]=h=>e(pe)(()=>e(i).onContentLeave())(h))}),{default:x(()=>[L(c.$slots,"default")]),_:2},1040,["as","as-child","data-state","data-orientation","style","hidden"])]}),_:3},8,["present","force-mount"]))}}),Ye=Xe;const me=I({__name:"NavigationMenu",props:{class:{},modelValue:{},defaultValue:{},dir:{},orientation:{},delayDuration:{},skipDelayDuration:{},disableClickTrigger:{type:Boolean},disableHoverTrigger:{type:Boolean},disablePointerLeaveClose:{type:Boolean},unmountOnHide:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(u,{emit:a}){const n=u,t=re(n,a);return(i,p)=>(k(),T(e(Ve),P(e(t),{class:e(K)("relative z-10 flex max-w-max flex-1 items-center justify-center",n.class)}),{default:x(()=>[L(i.$slots,"default")]),_:3},16,["class"]))}}),Ze=I({__name:"NavigationMenuList",props:{class:{},asChild:{type:Boolean},as:{}},setup(u){const a=u,n=j(a),t=D(()=>K(["group flex flex-1 list-none items-center justify-center","gap-1"],a.class));return(i,p)=>(k(),T(e(Ge),P(e(n),{class:t.value}),{default:x(()=>[L(i.$slots,"default")]),_:3},16,["class"]))}}),et=I({__name:"NavigationMenuItem",props:{class:{},value:{},asChild:{type:Boolean},as:{}},setup(u){const a=u,n=j(a);return(t,i)=>(k(),T(e(Ke),P(e(n),{class:a.class}),{default:x(()=>[L(t.$slots,"default")]),_:3},16,["class"]))}}),tt=I({__name:"NavigationMenuTrigger",props:{class:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(u){const a=u,n=j(a),t=D(()=>K(["group inline-flex items-center justify-center gap-1.5","text-sm font-medium","h-9 px-3 sm:h-8","rounded-lg","bg-background text-foreground","outline-none transition-colors","focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background","hover:bg-accent hover:text-accent-foreground","data-[state=open]:bg-accent/50","disabled:pointer-events-none disabled:opacity-64"],a.class));return(i,p)=>(k(),T(e(Qe),P(e(n),{class:t.value}),{default:x(()=>[L(i.$slots,"default"),R(e(De),{icon:"hugeicons:arrow-down-01",width:"14",height:"14",class:"relative top-px ml-0.5 transition-transform duration-200 group-data-[state=open]:rotate-180","aria-hidden":"true"})]),_:3},16,["class"]))}}),nt=I({__name:"NavigationMenuContent",props:{class:{},forceMount:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside"],setup(u,{emit:a}){const n=u,t=a,i=D(()=>{const{class:d,...r}=n;return r}),p=D(()=>K(["left-0 top-0","rounded-xl border border-input","bg-popover text-popover-foreground","shadow-lg shadow-black/8","dark:shadow-none dark:border-input/50","before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-[calc(var(--radius-xl)-1px)]","dark:before:shadow-[inset_0_1px_theme(colors.white/4%)]","data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out","data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out","data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52","data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52"],n.class));return(d,r)=>(k(),T(e(He),P(i.value,{class:p.value,onEscapeKeyDown:r[0]||(r[0]=l=>t("escapeKeyDown",l)),onPointerDownOutside:r[1]||(r[1]=l=>t("pointerDownOutside",l)),onFocusOutside:r[2]||(r[2]=l=>t("focusOutside",l)),onInteractOutside:r[3]||(r[3]=l=>t("interactOutside",l))}),{default:x(()=>[L(d.$slots,"default")]),_:3},16,["class"]))}}),at=I({__name:"NavigationMenuLink",props:{class:{},active:{type:Boolean},asChild:{type:Boolean},as:{}},setup(u){const a=u,n=j(a),t=D(()=>K(["block select-none","rounded-md p-3","text-sm leading-none no-underline","outline-none transition-colors","focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background","hover:bg-accent hover:text-accent-foreground","focus:bg-accent focus:text-accent-foreground"],a.class));return(i,p)=>(k(),T(e(ze),P(e(n),{class:t.value}),{default:x(()=>[L(i.$slots,"default")]),_:3},16,["class"]))}}),ot=I({__name:"NavigationMenuViewport",props:{class:{},forceMount:{type:Boolean},align:{},asChild:{type:Boolean},as:{}},setup(u){const a=u,n=D(()=>{const{class:i,...p}=a;return p}),t=D(()=>K(["absolute left-0 top-full mt-1.5","data-[state=open]:animate-in data-[state=closed]:animate-out","data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0","data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90"],a.class));return(i,p)=>(k(),T(e(Ye),P(n.value,{class:t.value}),null,16,["class"]))}}),kt={title:"Components/NavigationMenu",component:me,tags:["autodocs"]},H={render:()=>({components:{NavigationMenu:me,NavigationMenuList:Ze,NavigationMenuItem:et,NavigationMenuTrigger:tt,NavigationMenuContent:nt,NavigationMenuLink:at,NavigationMenuViewport:ot},template:`
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid gap-3 p-4 w-[400px] md:w-[500px] md:grid-cols-2">
                <li>
                  <NavigationMenuLink as-child>
                    <a
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="#"
                    >
                      <div class="text-sm font-medium leading-none">Introduction</div>
                      <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Learn the basics and get started quickly.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink as-child>
                    <a
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="#"
                    >
                      <div class="text-sm font-medium leading-none">Installation</div>
                      <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        How to install and configure the library.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                <li>
                  <NavigationMenuLink as-child>
                    <a
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="#"
                    >
                      <div class="text-sm font-medium leading-none">Button</div>
                      <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Interactive button elements with variants.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink as-child>
                    <a
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="#"
                    >
                      <div class="text-sm font-medium leading-none">Input</div>
                      <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Text input fields for forms.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              class="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              Documentation
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuViewport />
      </NavigationMenu>
    `})};var ne,ae,oe;H.parameters={...H.parameters,docs:{...(ne=H.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => ({
    components: {
      NavigationMenu,
      NavigationMenuList,
      NavigationMenuItem,
      NavigationMenuTrigger,
      NavigationMenuContent,
      NavigationMenuLink,
      NavigationMenuViewport
    },
    template: \`
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid gap-3 p-4 w-[400px] md:w-[500px] md:grid-cols-2">
                <li>
                  <NavigationMenuLink as-child>
                    <a
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="#"
                    >
                      <div class="text-sm font-medium leading-none">Introduction</div>
                      <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Learn the basics and get started quickly.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink as-child>
                    <a
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="#"
                    >
                      <div class="text-sm font-medium leading-none">Installation</div>
                      <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        How to install and configure the library.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                <li>
                  <NavigationMenuLink as-child>
                    <a
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="#"
                    >
                      <div class="text-sm font-medium leading-none">Button</div>
                      <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Interactive button elements with variants.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink as-child>
                    <a
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="#"
                    >
                      <div class="text-sm font-medium leading-none">Input</div>
                      <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Text input fields for forms.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              class="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              Documentation
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuViewport />
      </NavigationMenu>
    \`
  })
}`,...(oe=(ae=H.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const It=["Default"];export{H as Default,It as __namedExportsOrder,kt as default};
