import{d as i,C as d,D as p,E as o,G as b,Y as S,Z as I,f as e,B as Ie,L as h,r as T,w as Ce,c as C,K as y,a0 as z,q as Be,o as we,J as W,I as ke,H as qe}from"./vue.esm-bundler-BitZzlT5.js";import{b as j,u as w,a as R}from"./useForwardPropsEmits-DQ7cY2da.js";import{u as v}from"./useForwardExpose-ClhNePUc.js";import{M as xe,a as Te,b as Re,c as Pe,d as Ve,e as Oe,f as Fe,g as Ae,h as $e,i as Le,j as Ne,k as De,l as Ge,m as Ee,n as Ke}from"./MenuSubTrigger-BfMPH_V6.js";import{c as ie}from"./createContext-Fl0g0pNq.js";import{u as Ue}from"./useDirection-C1R3tBjc.js";import{P as de}from"./Primitive-B5VkAsKh.js";import{u as L}from"./Collection-CCDXBU9V.js";import{R as We}from"./RovingFocusGroup-mrBWr27v.js";import{a as pe}from"./index-BGV6KQZa.js";import{u as be}from"./useId-DKCHXeQR.js";import{w as Me}from"./useTypeahead-siFnJEHo.js";import{R as ze}from"./RovingFocusItem-C_b6YGFL.js";import{W as B}from"./cn-gWiv5-6R-CwNMvQqb.js";import{_ as ce,e as me}from"./utils-DfTrNRhL.js";import{M as fe}from"./index-BcdZTg5d.js";import{I as ge}from"./iconify-C6s_K7BB.js";import"./utils-kTTPDiSQ.js";import"./getActiveElement-FUKBWQwh.js";import"./index-CvzWs3kq.js";import"./Presence-V9PPYXmU.js";import"./FocusScope-DcG16un3.js";import"./ConfigProvider-CB94jlZd.js";import"./utils-T_AZzJOL.js";import"./Teleport-zC8-hnMw.js";import"./PopperContent-BZxkLFfv.js";import"./useSize-CCXUmRMH.js";import"./useArrowNavigation-B5rxJs06.js";import"./useFocusGuards-DVm2F-IH.js";import"./DismissableLayer-DXSzZs-S.js";import"./nullish-CHIgUVhi.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./usePrimitiveElement-JmSCNQYd.js";import"./utils-D788IsuB.js";var je=i({__name:"MenubarCheckboxItem",props:{modelValue:{type:[Boolean,String],required:!1},disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["select","update:modelValue"],setup(t,{emit:r}){const a=t,u=j(r);return v(),(l,s)=>(d(),p(e(xe),S(I({...a,...e(u)})),{default:o(()=>[b(l.$slots,"default")]),_:3},16))}}),Ze=je;const[N,He]=ie("MenubarRoot");var Xe=i({__name:"MenubarRoot",props:{modelValue:{type:String,required:!1},defaultValue:{type:String,required:!1},dir:{type:String,required:!1},loop:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:r}){const a=t,n=r,{forwardRef:u}=v(),{CollectionSlot:l}=L({key:"Menubar",isProvider:!0}),s=pe(a,"modelValue",n,{defaultValue:a.defaultValue??"",passive:a.modelValue===void 0}),g=T(null),{dir:f,loop:M}=Ie(a),c=Ue(f);return He({modelValue:s,dir:c,loop:M,onMenuOpen:m=>{s.value=m,g.value=m},onMenuClose:()=>{s.value=""},onMenuToggle:m=>{s.value=s.value?"":m,g.value=m}}),(m,_)=>(d(),p(e(l),null,{default:o(()=>[h(e(We),{"current-tab-stop-id":g.value,"onUpdate:currentTabStopId":_[0]||(_[0]=q=>g.value=q),orientation:"horizontal",loop:e(M),dir:e(c),"as-child":""},{default:o(()=>[h(e(de),{ref:e(u),role:"menubar"},{default:o(()=>[b(m.$slots,"default",{modelValue:e(s)})]),_:3},512)]),_:3},8,["current-tab-stop-id","loop","dir"])]),_:3}))}}),Je=Xe;const[Z,Ye]=ie("MenubarMenu");var Qe=i({__name:"MenubarMenu",props:{value:{type:String,required:!1}},setup(t){const a=be(t.value),n=N();v();const u=T(),l=T(!1),s=C(()=>n.modelValue.value===a);return Ce(s,()=>{s.value||(l.value=!1)}),Ye({value:a,triggerElement:u,triggerId:a,contentId:"",wasKeyboardTriggerOpenRef:l}),(g,f)=>(d(),p(e(Te),{open:s.value,modal:!1,dir:e(n).dir.value,"onUpdate:open":f[0]||(f[0]=M=>{M||e(n).onMenuClose()})},{default:o(()=>[b(g.$slots,"default")]),_:3},8,["open","dir"]))}}),ea=Qe,aa=i({__name:"MenubarContent",props:{forceMount:{type:Boolean,required:!1},loop:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1,default:"start"},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","closeAutoFocus"],setup(t,{emit:r}){const u=w(t,r);v();const l=N(),s=Z();s.contentId||(s.contentId=be(void 0,"reka-menubar-content"));const{getItems:g}=L({key:"Menubar"}),f=T(!1);function M(c){const _=c.target.hasAttribute("data-reka-menubar-subtrigger"),k=(l.dir.value==="rtl"?"ArrowRight":"ArrowLeft")===c.key;if(!k&&_)return;let P=g().filter(U=>U.ref.dataset.disabled!=="").map(U=>U.ref.dataset.value);k&&P.reverse();const H=P.indexOf(s.value);P=l.loop.value?Me(P,H+1):P.slice(H+1);const[X]=P;X&&l.onMenuOpen(X)}return(c,m)=>(d(),p(e(Re),y(e(u),{id:e(s).contentId,"data-reka-menubar-content":"","aria-labelledby":e(s).triggerId,style:{"--reka-menubar-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-menubar-content-available-width":"var(--reka-popper-available-width)","--reka-menubar-content-available-height":"var(--reka-popper-available-height)","--reka-menubar-trigger-width":"var(--reka-popper-anchor-width)","--reka-menubar-trigger-height":"var(--reka-popper-anchor-height)"},onCloseAutoFocus:m[0]||(m[0]=_=>{var k;!!!e(l).modelValue.value&&!f.value&&((k=e(s).triggerElement.value)==null||k.focus()),f.value=!1,_.preventDefault()}),onFocusOutside:m[1]||(m[1]=_=>{const q=_.target;e(g)().filter(x=>x.ref.dataset.disabled!=="").some(x=>x.ref.contains(q))&&_.preventDefault()}),onInteractOutside:m[2]||(m[2]=_=>{f.value=!0}),onEntryFocus:m[3]||(m[3]=_=>{e(s).wasKeyboardTriggerOpenRef.value||_.preventDefault()}),onKeydown:z(M,["arrow-right","arrow-left"])}),{default:o(()=>[b(c.$slots,"default")]),_:3},16,["id","aria-labelledby"]))}}),ra=aa,ta=i({__name:"MenubarGroup",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const r=t;return v(),(a,n)=>(d(),p(e(Pe),S(I(r)),{default:o(()=>[b(a.$slots,"default")]),_:3},16))}}),na=ta,ua=i({__name:"MenubarItem",props:{disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["select"],setup(t,{emit:r}){const a=t,u=j(r);return v(),(l,s)=>(d(),p(e(Ve),S(I({...a,...e(u)})),{default:o(()=>[b(l.$slots,"default")]),_:3},16))}}),oa=ua,sa=i({__name:"MenubarItemIndicator",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const r=t;return v(),(a,n)=>(d(),p(e(Oe),S(I(r)),{default:o(()=>[b(a.$slots,"default")]),_:3},16))}}),_e=sa,la=i({__name:"MenubarLabel",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const r=t;return v(),(a,n)=>(d(),p(e(Fe),S(I(r)),{default:o(()=>[b(a.$slots,"default")]),_:3},16))}}),ia=la,da=i({__name:"MenubarPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(t){const r=t;return(a,n)=>(d(),p(e(Ae),S(I(r)),{default:o(()=>[b(a.$slots,"default")]),_:3},16))}}),he=da,pa=i({__name:"MenubarRadioGroup",props:{modelValue:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:modelValue"],setup(t,{emit:r}){const a=t,u=j(r);return v(),(l,s)=>(d(),p(e($e),S(I({...a,...e(u)})),{default:o(()=>[b(l.$slots,"default")]),_:3},16))}}),ba=pa,Ma=i({__name:"MenubarRadioItem",props:{value:{type:null,required:!0},disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["select"],setup(t,{emit:r}){const u=w(t,r);return v(),(l,s)=>(d(),p(e(Le),S(I(e(u))),{default:o(()=>[b(l.$slots,"default")]),_:3},16))}}),ca=Ma,ma=i({__name:"MenubarSeparator",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const r=t;return v(),(a,n)=>(d(),p(e(Ne),S(I(r)),{default:o(()=>[b(a.$slots,"default")]),_:3},16))}}),fa=ma,ga=i({__name:"MenubarSub",props:{defaultOpen:{type:Boolean,required:!1},open:{type:Boolean,required:!1,default:void 0}},emits:["update:open"],setup(t,{emit:r}){const a=t,n=r;v();const u=pe(a,"open",n,{defaultValue:a.defaultOpen??!1,passive:a.open===void 0});return(l,s)=>(d(),p(e(De),{open:e(u),"onUpdate:open":s[0]||(s[0]=g=>Be(u)?u.value=g:null)},{default:o(()=>[b(l.$slots,"default",{open:e(u)})]),_:3},8,["open"]))}}),_a=ga,ha=i({__name:"MenubarSubContent",props:{forceMount:{type:Boolean,required:!1},loop:{type:Boolean,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","entryFocus","openAutoFocus","closeAutoFocus"],setup(t,{emit:r}){const u=w(t,r);v();const{getItems:l}=L({key:"Menubar"}),s=N(),g=Z();function f(M){if(M.target.hasAttribute("data-reka-menubar-subtrigger"))return;let _=l().filter(x=>x.ref.dataset.disabled!=="").map(x=>x.ref.dataset.value);const q=_.indexOf(g.value);_=s.loop.value?Me(_,q+1):_.slice(q+1);const[k]=_;k&&s.onMenuOpen(k)}return(M,c)=>(d(),p(e(Ge),y(e(u),{"data-reka-menubar-content":"",style:{"--reka-menubar-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-menubar-content-available-width":"var(--reka-popper-available-width)","--reka-menubar-content-available-height":"var(--reka-popper-available-height)","--reka-menubar-trigger-width":"var(--reka-popper-anchor-width)","--reka-menubar-trigger-height":"var(--reka-popper-anchor-height)"},onKeydown:z(f,["arrow-right"])}),{default:o(()=>[b(M.$slots,"default")]),_:3},16))}}),ya=ha,va=i({__name:"MenubarSubTrigger",props:{disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const r=t;return v(),(a,n)=>(d(),p(e(Ee),y(r,{"data-reka-menubar-subtrigger":""}),{default:o(()=>[b(a.$slots,"default")]),_:3},16))}}),Sa=va,Ia=i({__name:"MenubarTrigger",props:{disabled:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(t){const r=N(),a=Z(),{forwardRef:n,currentElement:u}=v(),{CollectionItem:l}=L({key:"Menubar"}),s=T(!1),g=C(()=>r.modelValue.value===a.value);return we(()=>{a.triggerElement=u}),(f,M)=>(d(),p(e(ze),{"as-child":"",focusable:!f.disabled,"tab-stop-id":e(a).value},{default:o(()=>[h(e(l),null,{default:o(()=>[h(e(Ke),{"as-child":""},{default:o(()=>[h(e(de),{id:e(a).triggerId,ref:e(n),as:f.as,"as-child":f.asChild,type:f.as==="button"?"button":void 0,role:"menuitem","aria-haspopup":"menu","aria-expanded":g.value,"aria-controls":g.value?e(a).contentId:void 0,"data-highlighted":s.value?"":void 0,"data-state":g.value?"open":"closed","data-disabled":f.disabled?"":void 0,disabled:f.disabled,"data-value":e(a).value,onPointerdown:M[0]||(M[0]=c=>{!f.disabled&&c.button===0&&c.ctrlKey===!1&&(e(r).onMenuOpen(e(a).value),g.value||c.preventDefault())}),onPointerenter:M[1]||(M[1]=()=>{var m;!!e(r).modelValue.value&&!g.value&&(e(r).onMenuOpen(e(a).value),(m=e(u))==null||m.focus())}),onKeydown:M[2]||(M[2]=z(c=>{f.disabled||(["Enter"," "].includes(c.key)&&e(r).onMenuToggle(e(a).value),c.key==="ArrowDown"&&e(r).onMenuOpen(e(a).value),["Enter"," ","ArrowDown"].includes(c.key)&&(e(a).wasKeyboardTriggerOpenRef.value=!0,c.preventDefault()))},["enter","space","arrow-down"])),onFocus:M[3]||(M[3]=c=>s.value=!0),onBlur:M[4]||(M[4]=c=>s.value=!1)},{default:o(()=>[b(f.$slots,"default")]),_:3},8,["id","as","as-child","type","aria-expanded","aria-controls","data-highlighted","data-state","data-disabled","disabled","data-value"])]),_:3})]),_:3})]),_:3},8,["focusable","tab-stop-id"]))}}),Ca=Ia;const V=i({__name:"Menubar",props:{class:{},modelValue:{},defaultValue:{},dir:{},loop:{type:Boolean}},emits:["update:modelValue"],setup(t,{emit:r}){const a=t,n=w(a,r),u=C(()=>B(["flex h-9 items-center gap-1","rounded-lg border border-input","bg-background","p-1","shadow-xs/5"],a.class));return(l,s)=>(d(),p(e(Je),y(e(n),{class:u.value}),{default:o(()=>[b(l.$slots,"default")]),_:3},16,["class"]))}}),D=i({__name:"MenubarMenu",props:{value:{}},setup(t){const r=R(t);return(a,n)=>(d(),p(e(ea),S(I(e(r))),{default:o(()=>[b(a.$slots,"default")]),_:3},16))}}),G=i({__name:"MenubarTrigger",props:{class:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(t){const r=t,a=R(r),n=C(()=>B(["flex cursor-default select-none items-center","px-3 py-1","text-sm font-medium","rounded-md","outline-none transition-colors","hover:bg-accent hover:text-accent-foreground","focus:bg-accent focus:text-accent-foreground","data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"],r.class));return(u,l)=>(d(),p(e(Ca),y(e(a),{class:n.value}),{default:o(()=>[b(u.$slots,"default")]),_:3},16,["class"]))}}),E=i({__name:"MenubarContent",props:{class:{},forceMount:{type:Boolean},loop:{type:Boolean},side:{},sideOffset:{default:8},sideFlip:{type:Boolean},align:{default:"start"},alignOffset:{default:-4},alignFlip:{type:Boolean},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},hideShiftedArrow:{type:Boolean},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{},disableUpdateOnLayoutShift:{type:Boolean},prioritizePosition:{type:Boolean},reference:{},asChild:{type:Boolean},as:{}},setup(t){const r=t,a=R(r),n=C(()=>B(["z-50 min-w-[12rem] overflow-hidden p-1","rounded-xl border border-input","bg-popover text-popover-foreground","shadow-lg shadow-black/8","dark:shadow-none dark:border-input/50"],r.class));return(u,l)=>(d(),p(e(he),null,{default:o(()=>[h(e(ce),null,{default:o(()=>[h(e(ra),y(e(a),{"as-child":""}),{default:o(()=>[h(e(fe),y(e(me),{class:n.value}),{default:o(()=>[b(u.$slots,"default")]),_:3},16,["class"])]),_:3},16)]),_:3})]),_:3}))}}),ye=i({__name:"MenubarItem",props:{class:{},inset:{type:Boolean},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{}},emits:["select"],setup(t,{emit:r}){const a=t,n=w(a,r),u=C(()=>B(["relative flex cursor-default select-none items-center gap-2","px-2 py-1.5","text-sm","rounded-lg","outline-none transition-colors","hover:bg-accent/64 focus:bg-accent focus:text-accent-foreground","data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground","data-[disabled]:pointer-events-none data-[disabled]:opacity-50","[&>svg]:size-4 [&>svg]:shrink-0"],a.inset&&"pl-8",a.class));return(l,s)=>(d(),p(e(oa),y(e(n),{class:u.value}),{default:o(()=>[b(l.$slots,"default")]),_:3},16,["class"]))}}),Ba={class:"absolute left-2 flex size-4 items-center justify-center"},wa=i({__name:"MenubarCheckboxItem",props:{class:{},modelValue:{type:[Boolean,String]},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{}},emits:["select","update:modelValue"],setup(t,{emit:r}){const a=t,n=w(a,r),u=C(()=>B(["relative flex cursor-default select-none items-center","py-1.5 pl-8 pr-2","text-sm","rounded-lg","outline-none transition-colors","hover:bg-accent/64 focus:bg-accent focus:text-accent-foreground","data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground","data-[disabled]:pointer-events-none data-[disabled]:opacity-50"],a.class));return(l,s)=>(d(),p(e(Ze),y(e(n),{class:u.value}),{default:o(()=>[W("span",Ba,[h(e(_e),null,{default:o(()=>[h(e(ge),{icon:"hugeicons:tick-02",width:"14",height:"14"})]),_:1})]),b(l.$slots,"default")]),_:3},16,["class"]))}}),ka={class:"absolute left-2 flex size-3.5 items-center justify-center"},qa=i({__name:"MenubarRadioItem",props:{class:{},value:{},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{}},emits:["select"],setup(t,{emit:r}){const a=t,n=w(a,r),u=C(()=>B(["relative flex cursor-default select-none items-center","py-1.5 pl-8 pr-2","text-sm","rounded-lg","outline-none transition-colors","hover:bg-accent/64 focus:bg-accent focus:text-accent-foreground","data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground","data-[disabled]:pointer-events-none data-[disabled]:opacity-50"],a.class));return(l,s)=>(d(),p(e(ca),y(e(n),{class:u.value}),{default:o(()=>[W("span",ka,[h(e(_e),null,{default:o(()=>[...s[0]||(s[0]=[W("span",{class:"size-2 rounded-full bg-current"},null,-1)])]),_:1})]),b(l.$slots,"default")]),_:3},16,["class"]))}}),xa=i({__name:"MenubarRadioGroup",props:{modelValue:{},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(t,{emit:r}){const a=w(t,r);return(n,u)=>(d(),p(e(ba),S(I(e(a))),{default:o(()=>[b(n.$slots,"default")]),_:3},16))}}),Ta=i({__name:"MenubarGroup",props:{asChild:{type:Boolean},as:{}},setup(t){const r=R(t);return(a,n)=>(d(),p(e(na),S(I(e(r))),{default:o(()=>[b(a.$slots,"default")]),_:3},16))}}),ve=i({__name:"MenubarLabel",props:{class:{},inset:{type:Boolean},asChild:{type:Boolean},as:{}},setup(t){const r=t,a=R(r),n=C(()=>B(["px-2 py-1.5","text-sm font-semibold"],r.inset&&"pl-8",r.class));return(u,l)=>(d(),p(e(ia),y(e(a),{class:n.value}),{default:o(()=>[b(u.$slots,"default")]),_:3},16,["class"]))}}),K=i({__name:"MenubarSeparator",props:{class:{},asChild:{type:Boolean},as:{}},setup(t){const r=t,a=R(r),n=C(()=>B("-mx-1 my-1 h-px bg-muted",r.class));return(u,l)=>(d(),p(e(fa),y(e(a),{class:n.value}),null,16,["class"]))}}),Se=i({__name:"MenubarShortcut",props:{class:{}},setup(t){const r=t,a=C(()=>B("ml-auto text-xs tracking-widest opacity-60",r.class));return(n,u)=>(d(),ke("span",{class:qe(a.value)},[b(n.$slots,"default")],2))}}),Ra=i({__name:"MenubarSub",props:{defaultOpen:{type:Boolean},open:{type:Boolean}},emits:["update:open"],setup(t,{emit:r}){const a=w(t,r);return(n,u)=>(d(),p(e(_a),S(I(e(a))),{default:o(()=>[b(n.$slots,"default")]),_:3},16))}}),Pa=i({__name:"MenubarSubTrigger",props:{class:{},inset:{type:Boolean},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{}},setup(t){const r=t,a=R(r),n=C(()=>B(["flex cursor-default select-none items-center gap-2","px-2 py-1.5","text-sm","rounded-lg","outline-none transition-colors","hover:bg-accent/64 focus:bg-accent","data-[highlighted]:bg-accent","data-[state=open]:bg-accent"],r.inset&&"pl-8",r.class));return(u,l)=>(d(),p(e(Sa),y(e(a),{class:n.value}),{default:o(()=>[b(u.$slots,"default"),h(e(ge),{icon:"hugeicons:arrow-right-01",width:"16",height:"16",class:"ml-auto"})]),_:3},16,["class"]))}}),Va=i({__name:"MenubarSubContent",props:{class:{},forceMount:{type:Boolean},loop:{type:Boolean},sideOffset:{default:2},sideFlip:{type:Boolean},alignOffset:{default:-5},alignFlip:{type:Boolean},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},hideShiftedArrow:{type:Boolean},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{},disableUpdateOnLayoutShift:{type:Boolean},prioritizePosition:{type:Boolean},reference:{},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","entryFocus","openAutoFocus","closeAutoFocus"],setup(t,{emit:r}){const a=t,n=w(a,r),u=C(()=>B(["z-50 min-w-[8rem] overflow-hidden p-1","rounded-xl border border-input","bg-popover text-popover-foreground","shadow-lg shadow-black/8","dark:shadow-none dark:border-input/50"],a.class));return(l,s)=>(d(),p(e(he),null,{default:o(()=>[h(e(ce),null,{default:o(()=>[h(e(ya),y(e(n),{"as-child":""}),{default:o(()=>[h(e(fe),y(e(me),{class:u.value}),{default:o(()=>[b(l.$slots,"default")]),_:3},16,["class"])]),_:3},16)]),_:3})]),_:3}))}}),cr={title:"Components/Menubar",component:V,tags:["autodocs"]},O={render:()=>({components:{Menubar:V,MenubarMenu:D,MenubarTrigger:G,MenubarContent:E,MenubarItem:ye,MenubarSeparator:K,MenubarShortcut:Se},template:`
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab
              <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window
              <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Print
              <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo
              <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo
              <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Cut
              <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Copy
              <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Paste
              <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Always Show Bookmarks Bar</MenubarItem>
            <MenubarItem>Always Show Full URLs</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Reload
              <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Force Reload
              <MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Toggle Fullscreen</MenubarItem>
            <MenubarItem>Hide Sidebar</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    `})},F={render:()=>({components:{Menubar:V,MenubarMenu:D,MenubarTrigger:G,MenubarContent:E,MenubarCheckboxItem:wa,MenubarLabel:ve,MenubarSeparator:K},setup(){const t=T(!0),r=T(!1);return{showBookmarksBar:t,showFullUrls:r}},template:`
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel>Appearance</MenubarLabel>
            <MenubarSeparator />
            <MenubarCheckboxItem v-model:checked="showBookmarksBar">
              Always Show Bookmarks Bar
            </MenubarCheckboxItem>
            <MenubarCheckboxItem v-model:checked="showFullUrls">
              Always Show Full URLs
            </MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    `})},A={render:()=>({components:{Menubar:V,MenubarMenu:D,MenubarTrigger:G,MenubarContent:E,MenubarRadioGroup:xa,MenubarRadioItem:qa,MenubarLabel:ve,MenubarSeparator:K},setup(){return{profile:T("benoit")}},template:`
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Profiles</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel>Switch Account</MenubarLabel>
            <MenubarSeparator />
            <MenubarRadioGroup v-model="profile">
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    `})},$={render:()=>({components:{Menubar:V,MenubarMenu:D,MenubarTrigger:G,MenubarContent:E,MenubarItem:ye,MenubarGroup:Ta,MenubarSeparator:K,MenubarShortcut:Se,MenubarSub:Ra,MenubarSubTrigger:Pa,MenubarSubContent:Va},template:`
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab
              <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window
              <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Email link</MenubarItem>
                <MenubarItem>Messages</MenubarItem>
                <MenubarItem>Notes</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              Print
              <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    `})};var J,Y,Q;O.parameters={...O.parameters,docs:{...(J=O.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Menubar,
      MenubarMenu,
      MenubarTrigger,
      MenubarContent,
      MenubarItem,
      MenubarSeparator,
      MenubarShortcut
    },
    template: \`
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab
              <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window
              <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Print
              <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo
              <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo
              <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Cut
              <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Copy
              <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Paste
              <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Always Show Bookmarks Bar</MenubarItem>
            <MenubarItem>Always Show Full URLs</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Reload
              <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Force Reload
              <MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Toggle Fullscreen</MenubarItem>
            <MenubarItem>Hide Sidebar</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    \`
  })
}`,...(Q=(Y=O.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var ee,ae,re;F.parameters={...F.parameters,docs:{...(ee=F.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Menubar,
      MenubarMenu,
      MenubarTrigger,
      MenubarContent,
      MenubarCheckboxItem,
      MenubarLabel,
      MenubarSeparator
    },
    setup() {
      const showBookmarksBar = ref(true);
      const showFullUrls = ref(false);
      return {
        showBookmarksBar,
        showFullUrls
      };
    },
    template: \`
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel>Appearance</MenubarLabel>
            <MenubarSeparator />
            <MenubarCheckboxItem v-model:checked="showBookmarksBar">
              Always Show Bookmarks Bar
            </MenubarCheckboxItem>
            <MenubarCheckboxItem v-model:checked="showFullUrls">
              Always Show Full URLs
            </MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    \`
  })
}`,...(re=(ae=F.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,ne,ue;A.parameters={...A.parameters,docs:{...(te=A.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Menubar,
      MenubarMenu,
      MenubarTrigger,
      MenubarContent,
      MenubarRadioGroup,
      MenubarRadioItem,
      MenubarLabel,
      MenubarSeparator
    },
    setup() {
      const profile = ref('benoit');
      return {
        profile
      };
    },
    template: \`
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Profiles</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel>Switch Account</MenubarLabel>
            <MenubarSeparator />
            <MenubarRadioGroup v-model="profile">
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    \`
  })
}`,...(ue=(ne=A.parameters)==null?void 0:ne.docs)==null?void 0:ue.source}}};var oe,se,le;$.parameters={...$.parameters,docs:{...(oe=$.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Menubar,
      MenubarMenu,
      MenubarTrigger,
      MenubarContent,
      MenubarItem,
      MenubarGroup,
      MenubarSeparator,
      MenubarShortcut,
      MenubarSub,
      MenubarSubTrigger,
      MenubarSubContent
    },
    template: \`
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab
              <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window
              <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Email link</MenubarItem>
                <MenubarItem>Messages</MenubarItem>
                <MenubarItem>Notes</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              Print
              <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    \`
  })
}`,...(le=(se=$.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};const mr=["Default","WithCheckboxItems","WithRadioItems","WithSubMenu"];export{O as Default,F as WithCheckboxItems,A as WithRadioItems,$ as WithSubMenu,mr as __namedExportsOrder,cr as default};
