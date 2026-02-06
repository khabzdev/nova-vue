import{d as y,o as ue,a as ke,C as p,D as f,E as c,G as b,K as B,f as t,B as $,r as C,a4 as X,a5 as j,F as I,y as Se,w as Ve,I as Pe,L as A,a1 as We,T as Oe,P as De,c as D,Y as le,Z as de,R as Ne,Q as Ke,J as Be}from"./vue.esm-bundler-BitZzlT5.js";import{c as Ae}from"./createContext-Fl0g0pNq.js";import{u as ce}from"./Collection-CCDXBU9V.js";import{u as L}from"./useForwardExpose-ClhNePUc.js";import{P as W}from"./Primitive-B5VkAsKh.js";import{g as ne}from"./getActiveElement-FUKBWQwh.js";import{V as Re}from"./VisuallyHidden-BLZVLwmx.js";import{f as Ie,o as Fe,a as Ue,u as fe}from"./index-BGV6KQZa.js";import{m as Ye,a as He}from"./index-CvzWs3kq.js";import{P as Xe}from"./Presence-V9PPYXmU.js";import{c as ve}from"./DismissableLayer-DXSzZs-S.js";import{a as ae,g as je}from"./utils-T_AZzJOL.js";import{W as O}from"./cn-gWiv5-6R-CwNMvQqb.js";import{j as ze}from"./index-I_2vzNuA-BfX5bdph.js";import{I as Ge}from"./iconify-C6s_K7BB.js";import{M as pe}from"./Button.vue_vue_type_script_setup_true_lang-DIJKvcpn-y-8jE4mo.js";import"./usePrimitiveElement-JmSCNQYd.js";import"./nullish-CHIgUVhi.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./index-BcdZTg5d.js";var Je=y({__name:"DismissableLayerBranch",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(s){const o=s,{forwardRef:a,currentElement:e}=L();return ue(()=>{ve.branches.add(e.value)}),ke(()=>{ve.branches.delete(e.value)}),(r,n)=>(p(),f(t(W),B({ref:t(a)},o),{default:c(()=>[b(r.$slots,"default")]),_:3},16))}}),Qe=Je,Ze=y({__name:"ToastAnnounceExclude",props:{altText:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(s){return(o,a)=>(p(),f(t(W),{as:o.as,"as-child":o.asChild,"data-reka-toast-announce-exclude":"","data-reka-toast-announce-alt":o.altText||void 0},{default:c(()=>[b(o.$slots,"default")]),_:3},8,["as","as-child","data-reka-toast-announce-alt"]))}}),qe=Ze;const[ee,et]=Ae("ToastProvider");var tt=y({inheritAttrs:!1,__name:"ToastProvider",props:{label:{type:String,required:!1,default:"Notification"},duration:{type:Number,required:!1,default:5e3},disableSwipe:{type:Boolean,required:!1},swipeDirection:{type:String,required:!1,default:"right"},swipeThreshold:{type:Number,required:!1,default:50}},setup(s){const o=s,{label:a,duration:e,disableSwipe:r,swipeDirection:n,swipeThreshold:w}=$(o);ce({isProvider:!0});const i=C(),u=C(0),d=C(!1),T=C(!1);if(o.label&&typeof o.label=="string"&&!o.label.trim()){const h="Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";throw new Error(h)}return et({label:a,duration:e,disableSwipe:r,swipeDirection:n,swipeThreshold:w,toastCount:u,viewport:i,onViewportChange(h){i.value=h},onToastAdd(){u.value++},onToastRemove(){u.value--},isFocusedToastEscapeKeyDownRef:d,isClosePausedRef:T}),(h,R)=>b(h.$slots,"default")}}),ot=tt,st=y({__name:"ToastAnnounce",setup(s){const o=ee(),a=Ye(1e3),e=C(!1);return Ie(()=>{e.value=!0}),(r,n)=>t(a)||e.value?(p(),f(t(Re),{key:0},{default:c(()=>[X(j(t(o).label.value)+" ",1),b(r.$slots,"default")]),_:3})):I("v-if",!0)}}),at=st;const nt="toast.swipeStart",rt="toast.swipeMove",it="toast.swipeCancel",ut="toast.swipeEnd",re="toast.viewportPause",ie="toast.viewportResume";function G(s,o,a){const e=a.originalEvent.currentTarget,r=new CustomEvent(s,{bubbles:!1,cancelable:!0,detail:a});o&&e.addEventListener(s,o,{once:!0}),e.dispatchEvent(r)}function me(s,o,a=0){const e=Math.abs(s.x),r=Math.abs(s.y),n=e>r;return o==="left"||o==="right"?n&&e>a:!n&&r>a}function lt(s){return s.nodeType===s.ELEMENT_NODE}function Me(s){const o=[];return Array.from(s.childNodes).forEach(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent&&o.push(e.textContent),lt(e)){const r=e.ariaHidden||e.hidden||e.style.display==="none",n=e.dataset.rekaToastAnnounceExclude==="";if(!r)if(n){const w=e.dataset.rekaToastAnnounceAlt;w&&o.push(w)}else o.push(...Me(e))}}),o}const[dt,ct]=Ae("ToastRoot");var pt=y({inheritAttrs:!1,__name:"ToastRootImpl",props:{type:{type:String,required:!1},open:{type:Boolean,required:!1,default:!1},duration:{type:Number,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"li"}},emits:["close","escapeKeyDown","pause","resume","swipeStart","swipeMove","swipeCancel","swipeEnd"],setup(s,{emit:o}){const a=s,e=o,{forwardRef:r,currentElement:n}=L(),{CollectionItem:w}=ce(),i=ee(),u=C(null),d=C(null),T=D(()=>typeof a.duration=="number"?a.duration:i.duration.value),h=C(0),R=C(T.value),V=C(0),k=C(T.value),v=Ie(()=>{const m=new Date().getTime()-h.value;k.value=Math.max(R.value-m,0)},{fpsLimit:60});function g(m){m<=0||m===Number.POSITIVE_INFINITY||He&&(window.clearTimeout(V.value),h.value=new Date().getTime(),V.value=window.setTimeout(E,m))}function E(m){var x,S;const _=(m==null?void 0:m.pointerType)==="";((x=n.value)==null?void 0:x.contains(ne()))&&_&&((S=i.viewport.value)==null||S.focus()),_&&(i.isClosePausedRef.value=!1),e("close")}const F=D(()=>n.value?Me(n.value):null);if(a.type&&!["foreground","background"].includes(a.type)){const m="Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";throw new Error(m)}return Se(m=>{const _=i.viewport.value;if(_){const l=()=>{g(R.value),v.resume(),e("resume")},x=()=>{const S=new Date().getTime()-h.value;R.value=R.value-S,window.clearTimeout(V.value),v.pause(),e("pause")};return _.addEventListener(re,x),_.addEventListener(ie,l),()=>{_.removeEventListener(re,x),_.removeEventListener(ie,l)}}}),Ve(()=>[a.open,T.value],()=>{R.value=T.value,a.open&&!i.isClosePausedRef.value&&g(T.value)},{immediate:!0}),Fe("Escape",m=>{e("escapeKeyDown",m),m.defaultPrevented||(i.isFocusedToastEscapeKeyDownRef.value=!0,E())}),ue(()=>{i.onToastAdd()}),ke(()=>{i.onToastRemove()}),ct({onClose:E}),(m,_)=>(p(),Pe(De,null,[F.value?(p(),f(at,{key:0,role:"alert","aria-live":m.type==="foreground"?"assertive":"polite","aria-atomic":"true"},{default:c(()=>[X(j(F.value),1)]),_:1},8,["aria-live"])):I("v-if",!0),t(i).viewport.value?(p(),f(Oe,{key:1,to:t(i).viewport.value},[A(t(w),null,{default:c(()=>[A(t(W),B({ref:t(r),role:"alert","aria-live":"off","aria-atomic":"true",tabindex:"0"},m.$attrs,{as:m.as,"as-child":m.asChild,"data-state":m.open?"open":"closed","data-swipe-direction":t(i).swipeDirection.value,style:t(i).disableSwipe.value?void 0:{userSelect:"none",touchAction:"none"},onPointerdown:_[0]||(_[0]=We(l=>{t(i).disableSwipe.value||(u.value={x:l.clientX,y:l.clientY})},["left"])),onPointermove:_[1]||(_[1]=l=>{if(t(i).disableSwipe.value||!u.value)return;const x=l.clientX-u.value.x,S=l.clientY-u.value.y,q=!!d.value,M=["left","right"].includes(t(i).swipeDirection.value),P=["left","up"].includes(t(i).swipeDirection.value)?Math.min:Math.max,se=M?P(0,x):0,N=M?0:P(0,S),z=l.pointerType==="touch"?10:2,K={x:se,y:N},U={originalEvent:l,delta:K};q?(d.value=K,t(G)(t(rt),Y=>e("swipeMove",Y),U)):t(me)(K,t(i).swipeDirection.value,z)?(d.value=K,t(G)(t(nt),Y=>e("swipeStart",Y),U),l.target.setPointerCapture(l.pointerId)):(Math.abs(x)>z||Math.abs(S)>z)&&(u.value=null)}),onPointerup:_[2]||(_[2]=l=>{if(t(i).disableSwipe.value)return;const x=d.value,S=l.target;if(S.hasPointerCapture(l.pointerId)&&S.releasePointerCapture(l.pointerId),d.value=null,u.value=null,x){const q=l.currentTarget,M={originalEvent:l,delta:x};t(me)(x,t(i).swipeDirection.value,t(i).swipeThreshold.value)?t(G)(t(ut),P=>e("swipeEnd",P),M):t(G)(t(it),P=>e("swipeCancel",P),M),q==null||q.addEventListener("click",P=>P.preventDefault(),{once:!0})}})}),{default:c(()=>[b(m.$slots,"default",{remaining:k.value,duration:T.value})]),_:3},16,["as","as-child","data-state","data-swipe-direction","style"])]),_:3})],8,["to"])):I("v-if",!0)],64))}}),ft=pt,vt=y({__name:"ToastClose",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(s){const o=s,a=dt(),{forwardRef:e}=L();return(r,n)=>(p(),f(qe,{"as-child":""},{default:c(()=>[A(t(W),B(o,{ref:t(e),type:r.as==="button"?"button":void 0,onClick:t(a).onClose}),{default:c(()=>[b(r.$slots,"default")]),_:3},16,["type","onClick"])]),_:3}))}}),$e=vt,mt=y({__name:"ToastAction",props:{altText:{type:String,required:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(s){if(!s.altText)throw new Error("Missing prop `altText` expected on `ToastAction`");const{forwardRef:a}=L();return(e,r)=>e.altText?(p(),f(qe,{key:0,"alt-text":e.altText,"as-child":""},{default:c(()=>[A($e,{ref:t(a),as:e.as,"as-child":e.asChild},{default:c(()=>[b(e.$slots,"default")]),_:3},8,["as","as-child"])]),_:3},8,["alt-text"])):I("v-if",!0)}}),wt=mt,ht=y({__name:"ToastDescription",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(s){const o=s;return L(),(a,e)=>(p(),f(t(W),le(de(o)),{default:c(()=>[b(a.$slots,"default")]),_:3},16))}}),gt=ht,yt=y({__name:"ToastRoot",props:{defaultOpen:{type:Boolean,required:!1,default:!0},forceMount:{type:Boolean,required:!1},type:{type:String,required:!1,default:"foreground"},open:{type:Boolean,required:!1,default:void 0},duration:{type:Number,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"li"}},emits:["escapeKeyDown","pause","resume","swipeStart","swipeMove","swipeCancel","swipeEnd","update:open"],setup(s,{emit:o}){const a=s,e=o,{forwardRef:r}=L(),n=Ue(a,"open",e,{defaultValue:a.defaultOpen,passive:a.open===void 0});return(w,i)=>(p(),f(t(Xe),{present:w.forceMount||t(n)},{default:c(()=>[A(ft,B({ref:t(r),open:t(n),type:w.type,as:w.as,"as-child":w.asChild,duration:w.duration},w.$attrs,{onClose:i[0]||(i[0]=u=>n.value=!1),onPause:i[1]||(i[1]=u=>e("pause")),onResume:i[2]||(i[2]=u=>e("resume")),onEscapeKeyDown:i[3]||(i[3]=u=>e("escapeKeyDown",u)),onSwipeStart:i[4]||(i[4]=u=>{e("swipeStart",u),u.defaultPrevented||u.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:i[5]||(i[5]=u=>{if(e("swipeMove",u),!u.defaultPrevented){const{x:d,y:T}=u.detail.delta,h=u.currentTarget;h.setAttribute("data-swipe","move"),h.style.setProperty("--reka-toast-swipe-move-x",`${d}px`),h.style.setProperty("--reka-toast-swipe-move-y",`${T}px`)}}),onSwipeCancel:i[6]||(i[6]=u=>{if(e("swipeCancel",u),!u.defaultPrevented){const d=u.currentTarget;d.setAttribute("data-swipe","cancel"),d.style.removeProperty("--reka-toast-swipe-move-x"),d.style.removeProperty("--reka-toast-swipe-move-y"),d.style.removeProperty("--reka-toast-swipe-end-x"),d.style.removeProperty("--reka-toast-swipe-end-y")}}),onSwipeEnd:i[7]||(i[7]=u=>{if(e("swipeEnd",u),!u.defaultPrevented){const{x:d,y:T}=u.detail.delta,h=u.currentTarget;h.setAttribute("data-swipe","end"),h.style.removeProperty("--reka-toast-swipe-move-x"),h.style.removeProperty("--reka-toast-swipe-move-y"),h.style.setProperty("--reka-toast-swipe-end-x",`${d}px`),h.style.setProperty("--reka-toast-swipe-end-y",`${T}px`),n.value=!1}})}),{default:c(({remaining:u,duration:d})=>[b(w.$slots,"default",{remaining:u,duration:d,open:t(n)})]),_:3},16,["open","type","as","as-child","duration"])]),_:3},8,["present"]))}}),Tt=yt,_t=y({__name:"ToastTitle",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(s){const o=s;return L(),(a,e)=>(p(),f(t(W),le(de(o)),{default:c(()=>[b(a.$slots,"default")]),_:3},16))}}),bt=_t,xt=y({__name:"FocusProxy",emits:["focusFromOutsideViewport"],setup(s,{emit:o}){const a=o,e=ee();return(r,n)=>(p(),f(t(Re),{"aria-hidden":"true",tabindex:"0",style:{position:"fixed"},onFocus:n[0]||(n[0]=w=>{var d;const i=w.relatedTarget;!((d=t(e).viewport.value)!=null&&d.contains(i))&&a("focusFromOutsideViewport")})},{default:c(()=>[b(r.$slots,"default")]),_:3}))}}),we=xt,Ct=y({inheritAttrs:!1,__name:"ToastViewport",props:{hotkey:{type:Array,required:!1,default:()=>["F8"]},label:{type:[String,Function],required:!1,default:"Notifications ({hotkey})"},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"ol"}},setup(s){const o=s,{hotkey:a,label:e}=$(o),{forwardRef:r,currentElement:n}=L(),{CollectionSlot:w,getItems:i}=ce(),u=ee(),d=D(()=>u.toastCount.value>0),T=C(),h=C(),R=D(()=>a.value.join("+").replace(/Key/g,"").replace(/Digit/g,""));Fe(a.value,()=>{n.value.focus()}),ue(()=>{u.onViewportChange(n.value)}),Se(k=>{const v=n.value;if(d.value&&v){const g=()=>{if(!u.isClosePausedRef.value){const l=new CustomEvent(re);v.dispatchEvent(l),u.isClosePausedRef.value=!0}},E=()=>{if(u.isClosePausedRef.value){const l=new CustomEvent(ie);v.dispatchEvent(l),u.isClosePausedRef.value=!1}},F=l=>{!v.contains(l.relatedTarget)&&E()},m=()=>{v.contains(ne())||E()},_=l=>{var q,M,P;const x=l.altKey||l.ctrlKey||l.metaKey;if(l.key==="Tab"&&!x){const se=ne(),N=l.shiftKey;if(l.target===v&&N){(q=T.value)==null||q.focus();return}const U=V({tabbingDirection:N?"backwards":"forwards"}),Y=U.findIndex(Le=>Le===se);ae(U.slice(Y+1))?l.preventDefault():N?(M=T.value)==null||M.focus():(P=h.value)==null||P.focus()}};v.addEventListener("focusin",g),v.addEventListener("focusout",F),v.addEventListener("pointermove",g),v.addEventListener("pointerleave",m),v.addEventListener("keydown",_),window.addEventListener("blur",g),window.addEventListener("focus",E),k(()=>{v.removeEventListener("focusin",g),v.removeEventListener("focusout",F),v.removeEventListener("pointermove",g),v.removeEventListener("pointerleave",m),v.removeEventListener("keydown",_),window.removeEventListener("blur",g),window.removeEventListener("focus",E)})}});function V({tabbingDirection:k}){const g=i().map(E=>E.ref).map(E=>{const F=[E,...je(E)];return k==="forwards"?F:F.reverse()});return(k==="forwards"?g.reverse():g).flat()}return(k,v)=>(p(),f(t(Qe),{role:"region","aria-label":typeof t(e)=="string"?t(e).replace("{hotkey}",R.value):t(e)(R.value),tabindex:"-1",style:Ne({pointerEvents:d.value?void 0:"none"})},{default:c(()=>[d.value?(p(),f(we,{key:0,ref:g=>{T.value=t(fe)(g)},onFocusFromOutsideViewport:v[0]||(v[0]=()=>{const g=V({tabbingDirection:"forwards"});t(ae)(g)})},null,512)):I("v-if",!0),A(t(w),null,{default:c(()=>[A(t(W),B({ref:t(r),tabindex:"-1",as:k.as,"as-child":k.asChild},k.$attrs),{default:c(()=>[b(k.$slots,"default")]),_:3},16,["as","as-child"])]),_:3}),d.value?(p(),f(we,{key:1,ref:g=>{h.value=t(fe)(g)},onFocusFromOutsideViewport:v[1]||(v[1]=()=>{const g=V({tabbingDirection:"backwards"});t(ae)(g)})},null,512)):I("v-if",!0)]),_:3},8,["aria-label","style"]))}}),Et=Ct;const kt=y({__name:"Toast",props:{variant:{default:"default"},class:{}},emits:["update:open"],setup(s,{emit:o}){const a=ze(["group pointer-events-auto relative flex w-full items-center justify-between gap-4 pr-8","rounded-lg border","p-4","shadow-lg","transition-all","data-[swipe=cancel]:translate-x-0","data-[swipe=end]:translate-x-[var(--reka-toast-swipe-end-x)]","data-[swipe=move]:translate-x-[var(--reka-toast-swipe-move-x)]","data-[swipe=move]:transition-none","data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-full","data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-right-full"],{variants:{variant:{default:["border-border bg-background text-foreground"],success:["success border-green-200 bg-green-500 text-white dark:border-green-800 dark:bg-green-900 dark:text-green-100"],destructive:["destructive border-red-200 bg-red-500 text-white dark:border-red-800 dark:bg-red-900 dark:text-red-100"],warning:["warning border-yellow-200 bg-yellow-500 text-white dark:border-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"],info:["info border-blue-200 bg-blue-500 text-white dark:border-blue-800 dark:bg-blue-900 dark:text-blue-100"]}},defaultVariants:{variant:"default"}}),e=s,r=o,{variant:n,class:w}=$(e),i=D(()=>O(a({variant:n.value}),w.value));return(u,d)=>(p(),f(t(Tt),B({class:i.value},u.$attrs,{"onUpdate:open":d[0]||(d[0]=T=>r("update:open",T))}),{default:c(()=>[b(u.$slots,"default")]),_:3},16,["class"]))}}),St=y({__name:"ToastProvider",props:{duration:{default:5e3},swipeDirection:{default:"right"},swipeThreshold:{default:50}},setup(s){const o=s;return(a,e)=>(p(),f(t(ot),le(de(o)),{default:c(()=>[b(a.$slots,"default")]),_:3},16))}}),Pt=y({__name:"ToastViewport",props:{class:{},position:{default:"bottom-right"}},setup(s){const o=s,{class:a,position:e}=$(o),r={"top-left":"top-0 left-0","top-center":"top-0 left-1/2 -translate-x-1/2","top-right":"top-0 right-0","bottom-left":"bottom-0 left-0","bottom-center":"bottom-0 left-1/2 -translate-x-1/2","bottom-right":"bottom-0 right-0"},n=D(()=>O("fixed z-[100] flex max-h-screen flex-col-reverse gap-2 p-4","w-full sm:max-w-[420px]","outline-none",r[e.value],a.value));return(w,i)=>(p(),f(t(Et),B({class:n.value},w.$attrs),null,16,["class"]))}}),Dt=y({__name:"ToastTitle",props:{class:{default:""}},setup(s){const o=s,{class:a}=$(o),e=D(()=>O("text-sm font-semibold",a.value));return(r,n)=>(p(),f(t(bt),B({class:e.value},r.$attrs),{default:c(()=>[b(r.$slots,"default")]),_:3},16,["class"]))}}),Bt=y({__name:"ToastDescription",props:{class:{default:""}},setup(s){const o=s,{class:a}=$(o),e=D(()=>O("text-sm opacity-90",a.value));return(r,n)=>(p(),f(t(gt),B({class:e.value},r.$attrs),{default:c(()=>[b(r.$slots,"default")]),_:3},16,["class"]))}}),At=y({__name:"ToastAction",props:{class:{}},setup(s){const o=s,{class:a}=$(o),e=D(()=>O("inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-transparent bg-transparent px-3","text-sm font-medium","ring-offset-background transition-colors","hover:bg-secondary","focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2","disabled:pointer-events-none disabled:opacity-50","group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30","group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground","group-[.destructive]:focus:ring-destructive",a==null?void 0:a.value));return(r,n)=>(p(),f(t(wt),B({"alt-text":r.altText,class:e.value},r.$attrs),{default:c(()=>[b(r.$slots,"default")]),_:3},16,["alt-text","class"]))}}),Rt=y({__name:"ToastClose",props:{class:{default:""}},setup(s){const o=s,{class:a}=$(o),e=D(()=>O("absolute right-2 top-2 rounded-md p-1","transition-opacity","focus:outline-none focus:ring-2 focus:ring-ring","text-foreground/50 hover:text-foreground","group-[.success]:text-white/70 group-[.success]:hover:text-white","group-[.destructive]:text-white/70 group-[.destructive]:hover:text-white","group-[.warning]:text-white/70 group-[.warning]:hover:text-white","group-[.info]:text-white/70 group-[.info]:hover:text-white",a.value));return(r,n)=>(p(),f(t($e),B({class:e.value},r.$attrs),{default:c(()=>[A(t(Ge),{icon:"hugeicons:cancel-01",width:"14",height:"14"}),n[0]||(n[0]=Be("span",{class:"sr-only"},"Close",-1))]),_:1},16,["class"]))}}),H=C([]);let It=0;function te(){function s(e){const r=`toast-${++It}`;return H.value.push({...e,id:r}),r}function o(e){H.value=H.value.filter(r=>r.id!==e)}function a(){H.value=[]}return{toasts:D(()=>H.value),toast:s,dismiss:o,dismissAll:a}}const Ft={class:"grid gap-1"},oe=y({__name:"Toaster",props:{position:{default:"bottom-right"}},setup(s){const{toasts:o,dismiss:a}=te();return(e,r)=>(p(),f(St,null,{default:c(()=>[(p(!0),Pe(De,null,Ke(t(o),n=>(p(),f(kt,{key:n.id,variant:n.variant,duration:n.duration,"onUpdate:open":w=>!w&&t(a)(n.id)},{default:c(()=>[Be("div",Ft,[n.title?(p(),f(Dt,{key:0},{default:c(()=>[X(j(n.title),1)]),_:2},1024)):I("",!0),n.description?(p(),f(Bt,{key:1},{default:c(()=>[X(j(n.description),1)]),_:2},1024)):I("",!0)]),n.action?(p(),f(At,{key:0,"alt-text":n.action.altText||n.action.label,onClick:n.action.onClick},{default:c(()=>[X(j(n.action.label),1)]),_:2},1032,["alt-text","onClick"])):I("",!0),A(Rt)]),_:2},1032,["variant","duration","onUpdate:open"]))),128)),A(Pt,{position:s.position},null,8,["position"])]),_:1}))}}),to={title:"Components/Toast",component:oe,tags:["autodocs"]},J={render:()=>({components:{Toaster:oe,Button:pe},setup(){const{toast:s}=te();return{showToast:()=>{s({title:"Scheduled: Catch up",description:"Friday, February 10, 2023 at 5:57 PM"})}}},template:`
      <div>
        <Button @click="showToast">Show Toast</Button>
        <Toaster />
      </div>
    `})},Q={render:()=>({components:{Toaster:oe,Button:pe},setup(){const{toast:s}=te();return{showDefault:()=>{s({title:"Default Toast",description:"This is a default toast notification."})},showSuccess:()=>{s({title:"Success!",description:"Your changes have been saved.",variant:"success"})},showDestructive:()=>{s({title:"Error",description:"Something went wrong.",variant:"destructive"})},showWarning:()=>{s({title:"Warning",description:"Please review your settings.",variant:"warning"})},showInfo:()=>{s({title:"Info",description:"Here is some useful information.",variant:"info"})}}},template:`
      <div>
        <div class="flex flex-wrap gap-2">
          <Button variant="outline" @click="showDefault">Default</Button>
          <Button variant="outline" @click="showSuccess">Success</Button>
          <Button variant="outline" @click="showDestructive">Destructive</Button>
          <Button variant="outline" @click="showWarning">Warning</Button>
          <Button variant="outline" @click="showInfo">Info</Button>
        </div>
        <Toaster />
      </div>
    `})},Z={render:()=>({components:{Toaster:oe,Button:pe},setup(){const{toast:s}=te();return{showWithAction:()=>{s({title:"Undo available",description:"Your recent action can be undone.",action:{label:"Undo",onClick:()=>{console.log("Undo clicked")}}})}}},template:`
      <div>
        <Button @click="showWithAction">Show Toast with Action</Button>
        <Toaster />
      </div>
    `})};var he,ge,ye;J.parameters={...J.parameters,docs:{...(he=J.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Toaster,
      Button
    },
    setup() {
      const {
        toast
      } = useToast();
      const showToast = () => {
        toast({
          title: 'Scheduled: Catch up',
          description: 'Friday, February 10, 2023 at 5:57 PM'
        });
      };
      return {
        showToast
      };
    },
    template: \`
      <div>
        <Button @click="showToast">Show Toast</Button>
        <Toaster />
      </div>
    \`
  })
}`,...(ye=(ge=J.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var Te,_e,be;Q.parameters={...Q.parameters,docs:{...(Te=Q.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Toaster,
      Button
    },
    setup() {
      const {
        toast
      } = useToast();
      const showDefault = () => {
        toast({
          title: 'Default Toast',
          description: 'This is a default toast notification.'
        });
      };
      const showSuccess = () => {
        toast({
          title: 'Success!',
          description: 'Your changes have been saved.',
          variant: 'success'
        });
      };
      const showDestructive = () => {
        toast({
          title: 'Error',
          description: 'Something went wrong.',
          variant: 'destructive'
        });
      };
      const showWarning = () => {
        toast({
          title: 'Warning',
          description: 'Please review your settings.',
          variant: 'warning'
        });
      };
      const showInfo = () => {
        toast({
          title: 'Info',
          description: 'Here is some useful information.',
          variant: 'info'
        });
      };
      return {
        showDefault,
        showSuccess,
        showDestructive,
        showWarning,
        showInfo
      };
    },
    template: \`
      <div>
        <div class="flex flex-wrap gap-2">
          <Button variant="outline" @click="showDefault">Default</Button>
          <Button variant="outline" @click="showSuccess">Success</Button>
          <Button variant="outline" @click="showDestructive">Destructive</Button>
          <Button variant="outline" @click="showWarning">Warning</Button>
          <Button variant="outline" @click="showInfo">Info</Button>
        </div>
        <Toaster />
      </div>
    \`
  })
}`,...(be=(_e=Q.parameters)==null?void 0:_e.docs)==null?void 0:be.source}}};var xe,Ce,Ee;Z.parameters={...Z.parameters,docs:{...(xe=Z.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Toaster,
      Button
    },
    setup() {
      const {
        toast
      } = useToast();
      const showWithAction = () => {
        toast({
          title: 'Undo available',
          description: 'Your recent action can be undone.',
          action: {
            label: 'Undo',
            onClick: () => {
              console.log('Undo clicked');
            }
          }
        });
      };
      return {
        showWithAction
      };
    },
    template: \`
      <div>
        <Button @click="showWithAction">Show Toast with Action</Button>
        <Toaster />
      </div>
    \`
  })
}`,...(Ee=(Ce=Z.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.source}}};const oo=["Default","Variants","WithAction"];export{J as Default,Q as Variants,Z as WithAction,oo as __namedExportsOrder,to as default};
