import{d as v,B as z,C as m,D as g,E as l,G as C,f as e,r as h,y as G,o as Y,a as Z,L as b,K as P,a1 as Q,n as X,Y as O,Z as R,c as ee}from"./vue.esm-bundler-BitZzlT5.js";import{a as A,u as K}from"./useForwardPropsEmits-DQ7cY2da.js";import{c as te}from"./createContext-Fl0g0pNq.js";import{u as T}from"./useForwardExpose-ClhNePUc.js";import{P as re,a as oe,b as ae}from"./PopperContent-BZxkLFfv.js";import{a as ne}from"./index-BGV6KQZa.js";import{P as se}from"./Presence-V9PPYXmU.js";import{u as ie}from"./useGraceArea-KbZoGECQ.js";import{D as le}from"./DismissableLayer-DXSzZs-S.js";import{s as de}from"./index-CvzWs3kq.js";import{T as ue}from"./Teleport-zC8-hnMw.js";import{P as pe}from"./Primitive-B5VkAsKh.js";import{_ as fe,e as ce}from"./utils-DfTrNRhL.js";import{M as ve}from"./index-BcdZTg5d.js";import{W as me}from"./cn-gWiv5-6R-CwNMvQqb.js";import{B as ge,y as Ce,w as ye}from"./AvatarFallback.vue_vue_type_script_setup_true_lang-D1rffe3M-CiftZN6I.js";import{M as he}from"./Button.vue_vue_type_script_setup_true_lang-DIJKvcpn-y-8jE4mo.js";import"./useSize-CCXUmRMH.js";import"./nullish-CHIgUVhi.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./index-I_2vzNuA-BfX5bdph.js";const[F,He]=te("HoverCardRoot");var be=v({__name:"HoverCardRoot",props:{defaultOpen:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:void 0},openDelay:{type:Number,required:!1,default:700},closeDelay:{type:Number,required:!1,default:300}},emits:["update:open"],setup(i,{emit:n}){const s=i,t=n,{openDelay:u,closeDelay:d}=z(s);T();const o=ne(s,"open",t,{defaultValue:s.defaultOpen,passive:s.open===void 0}),r=h(0),y=h(0),H=h(!1),f=h(!1),_=h(!1),w=h();function c(){clearTimeout(y.value),r.value=window.setTimeout(()=>o.value=!0,u.value)}function a(){clearTimeout(r.value),!H.value&&!f.value&&(y.value=window.setTimeout(()=>o.value=!1,d.value))}function p(){o.value=!1}return He({open:o,onOpenChange(k){o.value=k},onOpen:c,onClose:a,onDismiss:p,hasSelectionRef:H,isPointerDownOnContentRef:f,isPointerInTransitRef:_,triggerElement:w}),(k,Oe)=>(m(),g(e(re),null,{default:l(()=>[C(k.$slots,"default",{open:e(o)})]),_:3}))}}),_e=be;function D(i){return n=>n.pointerType==="touch"?void 0:i()}function we(i){const n=[],s=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,{acceptNode:t=>t.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;s.nextNode();)n.push(s.currentNode);return n}var Be=v({__name:"HoverCardContentImpl",props:{side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside"],setup(i,{emit:n}){const s=i,t=n,u=A(s),{forwardRef:d,currentElement:o}=T(),r=F(),{isPointerInTransit:y,onPointerExit:H}=ie(r.triggerElement,o);de(r.isPointerInTransitRef,y,{direction:"rtl"}),H(()=>{r.onClose()});const f=h(!1);let _;G(c=>{if(f.value){const a=document.body;_=a.style.userSelect||a.style.webkitUserSelect,a.style.userSelect="none",a.style.webkitUserSelect="none",c(()=>{a.style.userSelect=_,a.style.webkitUserSelect=_})}});function w(){f.value=!1,r.isPointerDownOnContentRef.value=!1,X(()=>{var a;((a=document.getSelection())==null?void 0:a.toString())!==""&&(r.hasSelectionRef.value=!0)})}return Y(()=>{o.value&&(document.addEventListener("pointerup",w),we(o.value).forEach(a=>a.setAttribute("tabindex","-1")))}),Z(()=>{document.removeEventListener("pointerup",w),r.hasSelectionRef.value=!1,r.isPointerDownOnContentRef.value=!1}),(c,a)=>(m(),g(e(le),{"as-child":"","disable-outside-pointer-events":!1,onEscapeKeyDown:a[1]||(a[1]=p=>t("escapeKeyDown",p)),onPointerDownOutside:a[2]||(a[2]=p=>t("pointerDownOutside",p)),onFocusOutside:a[3]||(a[3]=Q(p=>t("focusOutside",p),["prevent"])),onDismiss:e(r).onDismiss},{default:l(()=>[b(e(oe),P({...e(u),...c.$attrs},{ref:e(d),"data-state":e(r).open.value?"open":"closed",style:{userSelect:f.value?"text":void 0,WebkitUserSelect:f.value?"text":void 0,"--reka-hover-card-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-hover-card-content-available-width":"var(--reka-popper-available-width)","--reka-hover-card-content-available-height":"var(--reka-popper-available-height)","--reka-hover-card-trigger-width":"var(--reka-popper-anchor-width)","--reka-hover-card-trigger-height":"var(--reka-popper-anchor-height)"},onPointerdown:a[0]||(a[0]=p=>{p.currentTarget.contains(p.target)&&(f.value=!0),e(r).hasSelectionRef.value=!1,e(r).isPointerDownOnContentRef.value=!0})}),{default:l(()=>[C(c.$slots,"default")]),_:3},16,["data-state","style"])]),_:3},8,["onDismiss"]))}}),xe=Be,qe=v({__name:"HoverCardContent",props:{forceMount:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside"],setup(i,{emit:n}){const u=K(i,n),{forwardRef:d}=T(),o=F();return(r,y)=>(m(),g(e(se),{present:r.forceMount||e(o).open.value},{default:l(()=>[b(xe,P(e(u),{ref:e(d),onPointerenter:y[0]||(y[0]=H=>e(D)(e(o).onOpen)(H))}),{default:l(()=>[C(r.$slots,"default")]),_:3},16)]),_:3},8,["present"]))}}),Pe=qe,Te=v({__name:"HoverCardPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(i){const n=i;return(s,t)=>(m(),g(e(ue),O(R(n)),{default:l(()=>[C(s.$slots,"default")]),_:3},16))}}),Se=Te,ke=v({__name:"HoverCardTrigger",props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"a"}},setup(i){const{forwardRef:n,currentElement:s}=T(),t=F();t.triggerElement=s;function u(){setTimeout(()=>{!t.isPointerInTransitRef.value&&!t.open.value&&t.onClose()},0)}return(d,o)=>(m(),g(e(ae),{"as-child":"",reference:d.reference},{default:l(()=>[b(e(pe),{ref:e(n),"as-child":d.asChild,as:d.as,"data-state":e(t).open.value?"open":"closed","data-grace-area-trigger":"",onPointerenter:o[0]||(o[0]=r=>e(D)(e(t).onOpen)(r)),onPointerleave:o[1]||(o[1]=r=>e(D)(u)(r)),onFocus:o[2]||(o[2]=r=>e(t).onOpen()),onBlur:o[3]||(o[3]=r=>e(t).onClose())},{default:l(()=>[C(d.$slots,"default")]),_:3},8,["as-child","as","data-state"])]),_:3},8,["reference"]))}}),De=ke;const S=v({__name:"HoverCard",props:{defaultOpen:{type:Boolean},open:{type:Boolean},openDelay:{default:200},closeDelay:{default:300}},emits:["update:open"],setup(i,{emit:n}){const s=K(i,n);return(t,u)=>(m(),g(e(_e),O(R(e(s))),{default:l(()=>[C(t.$slots,"default")]),_:3},16))}}),E=v({__name:"HoverCardTrigger",props:{reference:{},asChild:{type:Boolean},as:{}},setup(i){const n=A(i);return(s,t)=>(m(),g(e(De),O(R(e(n))),{default:l(()=>[C(s.$slots,"default")]),_:3},16))}}),N=v({__name:"HoverCardContent",props:{class:{},forceMount:{type:Boolean},side:{default:"bottom"},sideOffset:{default:4},sideFlip:{type:Boolean},align:{default:"center"},alignOffset:{},alignFlip:{type:Boolean},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},hideShiftedArrow:{type:Boolean},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{},disableUpdateOnLayoutShift:{type:Boolean},prioritizePosition:{type:Boolean},reference:{},asChild:{type:Boolean},as:{}},setup(i){const n=i,s=A(n),t=ee(()=>me(["z-50 w-64 p-4","rounded-xl border border-input","bg-popover text-popover-foreground","shadow-lg shadow-black/8","dark:shadow-none dark:border-input/50","before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)]","dark:before:shadow-[inset_0_1px_theme(colors.white/4%)]","outline-none"],n.class));return(u,d)=>(m(),g(e(Se),null,{default:l(()=>[b(e(fe),null,{default:l(()=>[b(e(Pe),P(e(s),{"as-child":""}),{default:l(()=>[b(e(ve),P(e(ce),{class:t.value}),{default:l(()=>[C(u.$slots,"default")]),_:3},16,["class"])]),_:3},16)]),_:3})]),_:3}))}}),et={title:"Components/HoverCard",component:S,tags:["autodocs"]},B={render:()=>({components:{HoverCard:S,HoverCardTrigger:E,HoverCardContent:N},template:`
      <HoverCard>
        <HoverCardTrigger as-child>
          <a href="#" class="font-medium underline underline-offset-4">@vue</a>
        </HoverCardTrigger>
        <HoverCardContent class="w-80">
          <div class="flex justify-between gap-4">
            <div class="space-y-1">
              <h4 class="text-sm font-semibold">@vue</h4>
              <p class="text-sm">
                The Progressive JavaScript Framework. Built by the community for the community.
              </p>
              <div class="flex items-center pt-2">
                <span class="text-xs text-muted-foreground">
                  Joined December 2016
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    `})},x={render:()=>({components:{HoverCard:S,HoverCardTrigger:E,HoverCardContent:N,Avatar:ye,AvatarImage:Ce,AvatarFallback:ge},template:`
      <HoverCard>
        <HoverCardTrigger as-child>
          <a href="#" class="font-medium underline underline-offset-4">@vue</a>
        </HoverCardTrigger>
        <HoverCardContent class="w-80">
          <div class="flex justify-between gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/vuejs.png" />
              <AvatarFallback>VU</AvatarFallback>
            </Avatar>
            <div class="space-y-1">
              <h4 class="text-sm font-semibold">@vue</h4>
              <p class="text-sm">
                The Progressive JavaScript Framework. Built by the community for the community.
              </p>
              <div class="flex items-center pt-2">
                <span class="text-xs text-muted-foreground">
                  Joined December 2016
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    `})},q={render:()=>({components:{HoverCard:S,HoverCardTrigger:E,HoverCardContent:N,Button:he},template:`
      <HoverCard>
        <HoverCardTrigger as-child>
          <Button variant="link">Hover me</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div class="space-y-2">
            <h4 class="text-sm font-semibold">Documentation</h4>
            <p class="text-sm text-muted-foreground">
              View the full documentation at docs.example.com
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    `})};var I,M,U;B.parameters={...B.parameters,docs:{...(I=B.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    components: {
      HoverCard,
      HoverCardTrigger,
      HoverCardContent
    },
    template: \`
      <HoverCard>
        <HoverCardTrigger as-child>
          <a href="#" class="font-medium underline underline-offset-4">@vue</a>
        </HoverCardTrigger>
        <HoverCardContent class="w-80">
          <div class="flex justify-between gap-4">
            <div class="space-y-1">
              <h4 class="text-sm font-semibold">@vue</h4>
              <p class="text-sm">
                The Progressive JavaScript Framework. Built by the community for the community.
              </p>
              <div class="flex items-center pt-2">
                <span class="text-xs text-muted-foreground">
                  Joined December 2016
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    \`
  })
}`,...(U=(M=B.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var W,$,L;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => ({
    components: {
      HoverCard,
      HoverCardTrigger,
      HoverCardContent,
      Avatar,
      AvatarImage,
      AvatarFallback
    },
    template: \`
      <HoverCard>
        <HoverCardTrigger as-child>
          <a href="#" class="font-medium underline underline-offset-4">@vue</a>
        </HoverCardTrigger>
        <HoverCardContent class="w-80">
          <div class="flex justify-between gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/vuejs.png" />
              <AvatarFallback>VU</AvatarFallback>
            </Avatar>
            <div class="space-y-1">
              <h4 class="text-sm font-semibold">@vue</h4>
              <p class="text-sm">
                The Progressive JavaScript Framework. Built by the community for the community.
              </p>
              <div class="flex items-center pt-2">
                <span class="text-xs text-muted-foreground">
                  Joined December 2016
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    \`
  })
}`,...(L=($=x.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var j,J,V;q.parameters={...q.parameters,docs:{...(j=q.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => ({
    components: {
      HoverCard,
      HoverCardTrigger,
      HoverCardContent,
      Button
    },
    template: \`
      <HoverCard>
        <HoverCardTrigger as-child>
          <Button variant="link">Hover me</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div class="space-y-2">
            <h4 class="text-sm font-semibold">Documentation</h4>
            <p class="text-sm text-muted-foreground">
              View the full documentation at docs.example.com
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    \`
  })
}`,...(V=(J=q.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};const tt=["Default","WithAvatar","WithButton"];export{B as Default,x as WithAvatar,q as WithButton,tt as __namedExportsOrder,et as default};
