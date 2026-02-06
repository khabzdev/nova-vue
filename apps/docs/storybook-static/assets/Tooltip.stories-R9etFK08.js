import{d as T,C as d,D as v,E as u,G as m,I as $,K as C,f as t,L as D,R as re,c as y,Y as A,Z as R,B as z,r as w,w as ae,o as W,a4 as ie,a5 as ne,a1 as le,S as se,ab as pe,F as ue}from"./vue.esm-bundler-BitZzlT5.js";import{u as b}from"./useForwardExpose-ClhNePUc.js";import{P as X}from"./Primitive-B5VkAsKh.js";import{i as de,P as fe,a as ce,b as ge}from"./PopperContent-BZxkLFfv.js";import{c as G}from"./createContext-Fl0g0pNq.js";import{l as U}from"./index-CvzWs3kq.js";import{a as ve,c as F}from"./index-BGV6KQZa.js";import{a as Te,u as me}from"./useForwardPropsEmits-DQ7cY2da.js";import{P as ye}from"./Presence-V9PPYXmU.js";import{D as _e}from"./DismissableLayer-DXSzZs-S.js";import{V as he}from"./VisuallyHidden-BLZVLwmx.js";import{u as be}from"./useGraceArea-KbZoGECQ.js";import{T as Ce}from"./Teleport-zC8-hnMw.js";import{u as qe}from"./useId-DKCHXeQR.js";import{W as we}from"./cn-gWiv5-6R-CwNMvQqb.js";import{M as Z}from"./Button.vue_vue_type_script_setup_true_lang-DIJKvcpn-y-8jE4mo.js";import"./useSize-CCXUmRMH.js";import"./nullish-CHIgUVhi.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./index-I_2vzNuA-BfX5bdph.js";import"./index-BcdZTg5d.js";const Pe={key:0,d:"M0 0L6 6L12 0"},Be={key:1,d:"M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"};var De=T({__name:"Arrow",props:{width:{type:Number,required:!1,default:10},height:{type:Number,required:!1,default:5},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(a){const i=a;return b(),(e,n)=>(d(),v(t(X),C(i,{width:e.width,height:e.height,viewBox:e.asChild?void 0:"0 0 12 6",preserveAspectRatio:e.asChild?void 0:"none"}),{default:u(()=>[m(e.$slots,"default",{},()=>[e.rounded?(d(),$("path",Be)):(d(),$("path",Pe))])]),_:3},16,["width","height","viewBox","preserveAspectRatio"]))}}),Oe=De;const Ne={top:"bottom",right:"left",bottom:"top",left:"right"};var Se=T({inheritAttrs:!1,__name:"PopperArrow",props:{width:{type:Number,required:!1},height:{type:Number,required:!1},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(a){const{forwardRef:i}=b(),e=de(),n=y(()=>Ne[e.placedSide.value]);return(o,f)=>{var l,p,c,s;return d(),$("span",{ref:r=>{t(e).onArrowChange(r)},style:re({position:"absolute",left:(l=t(e).arrowX)!=null&&l.value?`${(p=t(e).arrowX)==null?void 0:p.value}px`:void 0,top:(c=t(e).arrowY)!=null&&c.value?`${(s=t(e).arrowY)==null?void 0:s.value}px`:void 0,[n.value]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[t(e).placedSide.value],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[t(e).placedSide.value],visibility:t(e).shouldHideArrow.value?"hidden":void 0})},[D(Oe,C(o.$attrs,{ref:t(i),style:{display:"block"},as:o.as,"as-child":o.asChild,rounded:o.rounded,width:o.width,height:o.height}),{default:u(()=>[m(o.$slots,"default")]),_:3},16,["as","as-child","rounded","width","height"])],4)}}}),ke=Se,Ae=T({__name:"TooltipArrow",props:{width:{type:Number,required:!1,default:10},height:{type:Number,required:!1,default:5},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(a){const i=a;return b(),(e,n)=>(d(),v(t(ke),A(R(i)),{default:u(()=>[m(e.$slots,"default")]),_:3},16))}}),Re=Ae;const[I,Le]=G("TooltipProvider");var Ee=T({inheritAttrs:!1,__name:"TooltipProvider",props:{delayDuration:{type:Number,required:!1,default:700},skipDelayDuration:{type:Number,required:!1,default:300},disableHoverableContent:{type:Boolean,required:!1,default:!1},disableClosingTrigger:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},ignoreNonKeyboardFocus:{type:Boolean,required:!1,default:!1}},setup(a){const i=a,{delayDuration:e,skipDelayDuration:n,disableHoverableContent:o,disableClosingTrigger:f,ignoreNonKeyboardFocus:l,disabled:p}=z(i);b();const c=w(!0),s=w(!1),{start:r,stop:g}=U(()=>{c.value=!0},n,{immediate:!1});return Le({isOpenDelayed:c,delayDuration:e,onOpen(){g(),c.value=!1},onClose(){r()},isPointerInTransitRef:s,disableHoverableContent:o,disableClosingTrigger:f,disabled:p,ignoreNonKeyboardFocus:l}),(h,O)=>m(h.$slots,"default")}}),$e=Ee;const J="tooltip.open",[L,Ie]=G("TooltipRoot");var He=T({__name:"TooltipRoot",props:{defaultOpen:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:void 0},delayDuration:{type:Number,required:!1,default:void 0},disableHoverableContent:{type:Boolean,required:!1,default:void 0},disableClosingTrigger:{type:Boolean,required:!1,default:void 0},disabled:{type:Boolean,required:!1,default:void 0},ignoreNonKeyboardFocus:{type:Boolean,required:!1,default:void 0}},emits:["update:open"],setup(a,{emit:i}){const e=a,n=i;b();const o=I(),f=y(()=>e.disableHoverableContent??o.disableHoverableContent.value),l=y(()=>e.disableClosingTrigger??o.disableClosingTrigger.value),p=y(()=>e.disabled??o.disabled.value),c=y(()=>e.delayDuration??o.delayDuration.value),s=y(()=>e.ignoreNonKeyboardFocus??o.ignoreNonKeyboardFocus.value),r=ve(e,"open",n,{defaultValue:e.defaultOpen,passive:e.open===void 0});ae(r,B=>{o.onClose&&(B?(o.onOpen(),document.dispatchEvent(new CustomEvent(J))):o.onClose())});const g=w(!1),h=w(),O=y(()=>r.value?g.value?"delayed-open":"instant-open":"closed"),{start:E,stop:P}=U(()=>{g.value=!0,r.value=!0},c,{immediate:!1});function _(){P(),g.value=!1,r.value=!0}function q(){P(),r.value=!1}function N(){E()}return Ie({contentId:"",open:r,stateAttribute:O,trigger:h,onTriggerChange(B){h.value=B},onTriggerEnter(){o.isOpenDelayed.value?N():_()},onTriggerLeave(){f.value?q():P()},onOpen:_,onClose:q,disableHoverableContent:f,disableClosingTrigger:l,disabled:p,ignoreNonKeyboardFocus:s}),(B,Ge)=>(d(),v(t(fe),null,{default:u(()=>[m(B.$slots,"default",{open:t(r)})]),_:3}))}}),Fe=He,xe=T({__name:"TooltipContentImpl",props:{ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1,default:"top"},sideOffset:{type:Number,required:!1,default:0},align:{type:null,required:!1,default:"center"},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1,default:!0},collisionBoundary:{type:null,required:!1,default:()=>[]},collisionPadding:{type:[Number,Object],required:!1,default:0},arrowPadding:{type:Number,required:!1,default:0},sticky:{type:String,required:!1,default:"partial"},hideWhenDetached:{type:Boolean,required:!1,default:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},emits:["escapeKeyDown","pointerDownOutside"],setup(a,{emit:i}){const e=a,n=i,o=L(),{forwardRef:f,currentElement:l}=b(),p=y(()=>{var s;return e.ariaLabel||((s=l.value)==null?void 0:s.textContent)}),c=y(()=>{const{ariaLabel:s,...r}=e;return r});return W(()=>{F(window,"scroll",s=>{const r=s.target;r!=null&&r.contains(o.trigger.value)&&o.onClose()}),F(window,J,o.onClose)}),(s,r)=>(d(),v(t(_e),{"as-child":"","disable-outside-pointer-events":!1,onEscapeKeyDown:r[0]||(r[0]=g=>n("escapeKeyDown",g)),onPointerDownOutside:r[1]||(r[1]=g=>{var h;t(o).disableClosingTrigger.value&&((h=t(o).trigger.value)!=null&&h.contains(g.target))&&g.preventDefault(),n("pointerDownOutside",g)}),onFocusOutside:r[2]||(r[2]=le(()=>{},["prevent"])),onDismiss:r[3]||(r[3]=g=>t(o).onClose())},{default:u(()=>[D(t(ce),C({ref:t(f),"data-state":t(o).stateAttribute.value},{...s.$attrs,...c.value},{style:{"--reka-tooltip-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-tooltip-content-available-width":"var(--reka-popper-available-width)","--reka-tooltip-content-available-height":"var(--reka-popper-available-height)","--reka-tooltip-trigger-width":"var(--reka-popper-anchor-width)","--reka-tooltip-trigger-height":"var(--reka-popper-anchor-height)"}}),{default:u(()=>[m(s.$slots,"default"),D(t(he),{id:t(o).contentId,role:"tooltip"},{default:u(()=>[ie(ne(p.value),1)]),_:1},8,["id"])]),_:3},16,["data-state"])]),_:3}))}}),Q=xe,Ke=T({__name:"TooltipContentHoverable",props:{ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},setup(a){const e=Te(a),{forwardRef:n,currentElement:o}=b(),{trigger:f,onClose:l}=L(),p=I(),{isPointerInTransit:c,onPointerExit:s}=be(f,o);return p.isPointerInTransitRef=c,s(()=>{l()}),(r,g)=>(d(),v(Q,C({ref:t(n)},t(e)),{default:u(()=>[m(r.$slots,"default")]),_:3},16))}}),Me=Ke,Ve=T({__name:"TooltipContent",props:{forceMount:{type:Boolean,required:!1},ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1,default:"top"},sideOffset:{type:Number,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},emits:["escapeKeyDown","pointerDownOutside"],setup(a,{emit:i}){const e=a,n=i,o=L(),f=me(e,n),{forwardRef:l}=b();return(p,c)=>(d(),v(t(ye),{present:p.forceMount||t(o).open.value},{default:u(()=>[(d(),v(se(t(o).disableHoverableContent.value?Q:Me),C({ref:t(l)},t(f)),{default:u(()=>[m(p.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),je=Ve,Ye=T({__name:"TooltipPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(a){const i=a;return(e,n)=>(d(),v(t(Ce),A(R(i)),{default:u(()=>[m(e.$slots,"default")]),_:3},16))}}),ze=Ye,We=T({__name:"TooltipTrigger",props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(a){const i=a,e=L(),n=I();e.contentId||(e.contentId=qe(void 0,"reka-tooltip-content"));const{forwardRef:o,currentElement:f}=b(),l=w(!1),p=w(!1),c=y(()=>e.disabled.value?{}:{click:P,focus:O,pointermove:g,pointerleave:h,pointerdown:r,blur:E});W(()=>{e.onTriggerChange(f.value)});function s(){setTimeout(()=>{l.value=!1},1)}function r(){e.open&&!e.disableClosingTrigger.value&&e.onClose(),l.value=!0,document.addEventListener("pointerup",s,{once:!0})}function g(_){_.pointerType!=="touch"&&!p.value&&!n.isPointerInTransitRef.value&&(e.onTriggerEnter(),p.value=!0)}function h(){e.onTriggerLeave(),p.value=!1}function O(_){var q,N;l.value||e.ignoreNonKeyboardFocus.value&&!((N=(q=_.target).matches)!=null&&N.call(q,":focus-visible"))||e.onOpen()}function E(){e.onClose()}function P(){e.disableClosingTrigger.value||e.onClose()}return(_,q)=>(d(),v(t(ge),{"as-child":"",reference:_.reference},{default:u(()=>[D(t(X),C({ref:t(o),"aria-describedby":t(e).open.value?t(e).contentId:void 0,"data-state":t(e).stateAttribute.value,as:_.as,"as-child":i.asChild,"data-grace-area-trigger":""},pe(c.value)),{default:u(()=>[m(_.$slots,"default")]),_:3},16,["aria-describedby","data-state","as","as-child"])]),_:3},8,["reference"]))}}),Xe=We;const H=T({__name:"Tooltip",props:{delayDuration:{default:300}},setup(a){const i=a;return(e,n)=>(d(),v(t(Fe),A(R(i)),{default:u(()=>[m(e.$slots,"default")]),_:3},16))}}),ee=T({__name:"TooltipTrigger",setup(a){return(i,e)=>(d(),v(t(Xe),{"as-child":""},{default:u(()=>[m(i.$slots,"default")]),_:3}))}}),te=T({__name:"TooltipContent",props:{class:{},sideOffset:{default:6},showArrow:{type:Boolean,default:!0}},setup(a){const i=a,{class:e,sideOffset:n,showArrow:o}=z(i),f=y(()=>we("z-50 overflow-hidden","px-3 py-1.5","text-xs font-medium","rounded-md","bg-primary text-primary-foreground","shadow-md","animate-in fade-in-0 zoom-in-95","data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95","data-[side=bottom]:slide-in-from-top-2","data-[side=left]:slide-in-from-right-2","data-[side=right]:slide-in-from-left-2","data-[side=top]:slide-in-from-bottom-2",e.value));return(l,p)=>(d(),v(t(ze),null,{default:u(()=>[D(t(je),C({"side-offset":t(n),class:f.value},l.$attrs),{default:u(()=>[m(l.$slots,"default"),t(o)?(d(),v(t(Re),{key:0,class:"fill-primary"})):ue("",!0)]),_:3},16,["side-offset","class"])]),_:3}))}}),oe=T({__name:"TooltipProvider",props:{delayDuration:{default:300},skipDelayDuration:{default:300}},setup(a){const i=a;return(e,n)=>(d(),v(t($e),A(R(i)),{default:u(()=>[m(e.$slots,"default")]),_:3},16))}}),mt={title:"Components/Tooltip",component:H,tags:["autodocs"],argTypes:{delayDuration:{control:"number"}}},S={args:{delayDuration:300},render:a=>({components:{Tooltip:H,TooltipTrigger:ee,TooltipContent:te,TooltipProvider:oe,Button:Z},setup(){return{args:a}},template:`
      <TooltipProvider>
        <Tooltip v-bind="args">
          <TooltipTrigger as-child>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    `})},k={render:()=>({components:{Tooltip:H,TooltipTrigger:ee,TooltipContent:te,TooltipProvider:oe,Button:Z},template:`
      <TooltipProvider>
        <div class="flex gap-4">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">Top</Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Tooltip on top</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">Bottom</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Tooltip on bottom</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">Left</Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Tooltip on left</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">Right</Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Tooltip on right</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    `})};var x,K,M;S.parameters={...S.parameters,docs:{...(x=S.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    delayDuration: 300
  },
  render: args => ({
    components: {
      Tooltip,
      TooltipTrigger,
      TooltipContent,
      TooltipProvider,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TooltipProvider>
        <Tooltip v-bind="args">
          <TooltipTrigger as-child>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    \`
  })
}`,...(M=(K=S.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var V,j,Y;k.parameters={...k.parameters,docs:{...(V=k.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tooltip,
      TooltipTrigger,
      TooltipContent,
      TooltipProvider,
      Button
    },
    template: \`
      <TooltipProvider>
        <div class="flex gap-4">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">Top</Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Tooltip on top</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">Bottom</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Tooltip on bottom</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">Left</Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Tooltip on left</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">Right</Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Tooltip on right</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    \`
  })
}`,...(Y=(j=k.parameters)==null?void 0:j.docs)==null?void 0:Y.source}}};const yt=["Default","Positioning"];export{S as Default,k as Positioning,yt as __namedExportsOrder,mt as default};
