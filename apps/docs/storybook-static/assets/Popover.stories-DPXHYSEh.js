import{d as m,B as G,C as v,D as c,E as p,G as g,f as e,r as q,L as B,K as h,a1 as E,Y as J,Z as H,o as Y,S as Z,c as Q}from"./vue.esm-bundler-BitZzlT5.js";import{a as X,u as T}from"./useForwardPropsEmits-DQ7cY2da.js";import{c as ee}from"./createContext-Fl0g0pNq.js";import{P as oe,a as te,b as re}from"./PopperContent-BZxkLFfv.js";import{a as ne}from"./index-BGV6KQZa.js";import{u as F}from"./useForwardExpose-ClhNePUc.js";import{u as j}from"./useId-DKCHXeQR.js";import{P as ae}from"./Presence-V9PPYXmU.js";import{F as se,u as ie,a as le}from"./FocusScope-DcG16un3.js";import{u as pe}from"./useFocusGuards-DVm2F-IH.js";import{D as ue}from"./DismissableLayer-DXSzZs-S.js";import{k as de}from"./index-CvzWs3kq.js";import{T as fe}from"./Teleport-zC8-hnMw.js";import{P as A}from"./Primitive-B5VkAsKh.js";import{_ as ve,e as ce}from"./utils-DfTrNRhL.js";import{M as ge}from"./index-BcdZTg5d.js";import{W as me}from"./cn-gWiv5-6R-CwNMvQqb.js";import{M as D}from"./Button.vue_vue_type_script_setup_true_lang-DIJKvcpn-y-8jE4mo.js";import{V as Pe}from"./Input.vue_vue_type_script_setup_true_lang-D96E5V6Z-Bl0Oelpq.js";import{w as ye}from"./Label.vue_vue_type_script_setup_true_lang-CcQM5z7h-DekRYA-r.js";import"./useSize-CCXUmRMH.js";import"./ConfigProvider-CB94jlZd.js";import"./getActiveElement-FUKBWQwh.js";import"./utils-T_AZzJOL.js";import"./nullish-CHIgUVhi.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./index-I_2vzNuA-BfX5bdph.js";const[_,he]=ee("PopoverRoot");var Be=m({__name:"PopoverRoot",props:{defaultOpen:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:void 0},modal:{type:Boolean,required:!1,default:!1}},emits:["update:open"],setup(u,{emit:s}){const o=u,r=s,{modal:i}=G(o),t=ne(o,"open",r,{defaultValue:o.defaultOpen,passive:o.open===void 0}),d=q(),f=q(!1);return he({contentId:"",triggerId:"",modal:i,open:t,onOpenChange:n=>{t.value=n},onOpenToggle:()=>{t.value=!t.value},triggerElement:d,hasCustomAnchor:f}),(n,a)=>(v(),c(e(oe),null,{default:p(()=>[g(n.$slots,"default",{open:e(t),close:()=>t.value=!1})]),_:3}))}}),qe=Be,_e=m({__name:"PopoverContentImpl",props:{trapFocus:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(u,{emit:s}){const o=u,r=s,i=X(de(o,"trapFocus","disableOutsidePointerEvents")),{forwardRef:t}=F(),d=_();return pe(),(f,n)=>(v(),c(e(se),{"as-child":"",loop:"",trapped:f.trapFocus,onMountAutoFocus:n[5]||(n[5]=a=>r("openAutoFocus",a)),onUnmountAutoFocus:n[6]||(n[6]=a=>r("closeAutoFocus",a))},{default:p(()=>[B(e(ue),{"as-child":"","disable-outside-pointer-events":f.disableOutsidePointerEvents,onPointerDownOutside:n[0]||(n[0]=a=>r("pointerDownOutside",a)),onInteractOutside:n[1]||(n[1]=a=>r("interactOutside",a)),onEscapeKeyDown:n[2]||(n[2]=a=>r("escapeKeyDown",a)),onFocusOutside:n[3]||(n[3]=a=>r("focusOutside",a)),onDismiss:n[4]||(n[4]=a=>e(d).onOpenChange(!1))},{default:p(()=>[B(e(te),h(e(i),{id:e(d).contentId,ref:e(t),"data-state":e(d).open.value?"open":"closed","aria-labelledby":e(d).triggerId,style:{"--reka-popover-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-popover-content-available-width":"var(--reka-popper-available-width)","--reka-popover-content-available-height":"var(--reka-popper-available-height)","--reka-popover-trigger-width":"var(--reka-popper-anchor-width)","--reka-popover-trigger-height":"var(--reka-popper-anchor-height)"},role:"dialog"}),{default:p(()=>[g(f.$slots,"default")]),_:3},16,["id","data-state","aria-labelledby"])]),_:3},8,["disable-outside-pointer-events"])]),_:3},8,["trapped"]))}}),z=_e,be=m({__name:"PopoverContentModal",props:{side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(u,{emit:s}){const o=u,r=s,i=_(),t=q(!1);ie(!0);const d=T(o,r),{forwardRef:f,currentElement:n}=F();return le(n),(a,l)=>(v(),c(z,h(e(d),{ref:e(f),"trap-focus":e(i).open.value,"disable-outside-pointer-events":"",onCloseAutoFocus:l[0]||(l[0]=E(P=>{var y;r("closeAutoFocus",P),t.value||(y=e(i).triggerElement.value)==null||y.focus()},["prevent"])),onPointerDownOutside:l[1]||(l[1]=P=>{r("pointerDownOutside",P);const y=P.detail.originalEvent,b=y.button===0&&y.ctrlKey===!0,V=y.button===2||b;t.value=V}),onFocusOutside:l[2]||(l[2]=E(()=>{},["prevent"]))}),{default:p(()=>[g(a.$slots,"default")]),_:3},16,["trap-focus"]))}}),Ce=be,Oe=m({__name:"PopoverContentNonModal",props:{side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(u,{emit:s}){const o=u,r=s,i=_(),t=q(!1),d=q(!1),f=T(o,r);return(n,a)=>(v(),c(z,h(e(f),{"trap-focus":!1,"disable-outside-pointer-events":!1,onCloseAutoFocus:a[0]||(a[0]=l=>{var P;r("closeAutoFocus",l),l.defaultPrevented||(t.value||(P=e(i).triggerElement.value)==null||P.focus(),l.preventDefault()),t.value=!1,d.value=!1}),onInteractOutside:a[1]||(a[1]=async l=>{var b;r("interactOutside",l),l.defaultPrevented||(t.value=!0,l.detail.originalEvent.type==="pointerdown"&&(d.value=!0));const P=l.target;((b=e(i).triggerElement.value)==null?void 0:b.contains(P))&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&d.value&&l.preventDefault()})}),{default:p(()=>[g(n.$slots,"default")]),_:3},16))}}),we=Oe,Te=m({__name:"PopoverContent",props:{forceMount:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(u,{emit:s}){const o=u,r=s,i=_(),t=T(o,r),{forwardRef:d}=F();return i.contentId||(i.contentId=j(void 0,"reka-popover-content")),(f,n)=>(v(),c(e(ae),{present:f.forceMount||e(i).open.value},{default:p(()=>[e(i).modal.value?(v(),c(Ce,h({key:0},e(t),{ref:e(d)}),{default:p(()=>[g(f.$slots,"default")]),_:3},16)):(v(),c(we,h({key:1},e(t),{ref:e(d)}),{default:p(()=>[g(f.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),Fe=Te,Se=m({__name:"PopoverPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(u){const s=u;return(o,r)=>(v(),c(e(fe),J(H(s)),{default:p(()=>[g(o.$slots,"default")]),_:3},16))}}),De=Se,ke=m({__name:"PopoverTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(u){const s=u,o=_(),{forwardRef:r,currentElement:i}=F();return o.triggerId||(o.triggerId=j(void 0,"reka-popover-trigger")),Y(()=>{o.triggerElement.value=i.value}),(t,d)=>(v(),c(Z(e(o).hasCustomAnchor.value?e(A):e(re)),{"as-child":""},{default:p(()=>[B(e(A),{id:e(o).triggerId,ref:e(r),type:t.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":e(o).open.value,"aria-controls":e(o).contentId,"data-state":e(o).open.value?"open":"closed",as:t.as,"as-child":s.asChild,onClick:e(o).onOpenToggle},{default:p(()=>[g(t.$slots,"default")]),_:3},8,["id","type","aria-expanded","aria-controls","data-state","as","as-child","onClick"])]),_:3}))}}),xe=ke;const S=m({name:"Popover",__name:"Popover",setup(u){return(s,o)=>(v(),c(e(qe),null,{default:p(()=>[g(s.$slots,"default")]),_:3}))}}),k=m({name:"PopoverTrigger",__name:"PopoverTrigger",setup(u){return(s,o)=>(v(),c(e(xe),{"as-child":""},{default:p(()=>[g(s.$slots,"default")]),_:3}))}}),x=m({__name:"PopoverContent",props:{class:{},forceMount:{type:Boolean},side:{default:"bottom"},sideOffset:{default:4},sideFlip:{type:Boolean},align:{default:"center"},alignOffset:{},alignFlip:{type:Boolean},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},hideShiftedArrow:{type:Boolean},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{},disableUpdateOnLayoutShift:{type:Boolean},prioritizePosition:{type:Boolean},reference:{},asChild:{type:Boolean},as:{},disableOutsidePointerEvents:{type:Boolean}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(u,{emit:s}){const o=u,r=T(o,s),i=Q(()=>me(["relative z-50 w-72 p-4","rounded-xl border border-input","bg-popover text-popover-foreground","shadow-lg shadow-black/8","dark:shadow-none dark:border-input/50","before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)]","dark:before:shadow-[inset_0_1px_theme(colors.white/4%)]","outline-none"],o.class));return(t,d)=>(v(),c(e(De),null,{default:p(()=>[B(e(ve),null,{default:p(()=>[B(e(Fe),h(e(r),{"as-child":""}),{default:p(()=>[B(e(ge),h(e(ce),{class:i.value}),{default:p(()=>[g(t.$slots,"default")]),_:3},16,["class"])]),_:3},16)]),_:3})]),_:3}))}}),so={title:"Components/Popover",component:S,tags:["autodocs"]},C={render:()=>({components:{Popover:S,PopoverTrigger:k,PopoverContent:x,Button:D},template:`
      <Popover>
        <PopoverTrigger as-child>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent class="w-80">
          <div class="grid gap-4">
            <div class="space-y-2">
              <h4 class="font-medium leading-none">Dimensions</h4>
              <p class="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    `})},O={render:()=>({components:{Popover:S,PopoverTrigger:k,PopoverContent:x,Button:D,Input:Pe,Label:ye},template:`
      <Popover>
        <PopoverTrigger as-child>
          <Button variant="outline">Edit Profile</Button>
        </PopoverTrigger>
        <PopoverContent class="w-80">
          <div class="grid gap-4">
            <div class="space-y-2">
              <h4 class="font-medium leading-none">Profile</h4>
              <p class="text-sm text-muted-foreground">
                Update your profile information.
              </p>
            </div>
            <div class="grid gap-2">
              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="name">Name</Label>
                <Input id="name" class="col-span-2 h-8" value="John Doe" />
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="email">Email</Label>
                <Input id="email" class="col-span-2 h-8" value="john@example.com" />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    `})},w={render:()=>({components:{Popover:S,PopoverTrigger:k,PopoverContent:x,Button:D},template:`
      <div class="flex gap-4">
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline">Top</Button>
          </PopoverTrigger>
          <PopoverContent side="top">
            <p class="text-sm">Popover on top</p>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline">Bottom</Button>
          </PopoverTrigger>
          <PopoverContent side="bottom">
            <p class="text-sm">Popover on bottom</p>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline">Left</Button>
          </PopoverTrigger>
          <PopoverContent side="left">
            <p class="text-sm">Popover on left</p>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline">Right</Button>
          </PopoverTrigger>
          <PopoverContent side="right">
            <p class="text-sm">Popover on right</p>
          </PopoverContent>
        </Popover>
      </div>
    `})};var I,N,L;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Popover,
      PopoverTrigger,
      PopoverContent,
      Button
    },
    template: \`
      <Popover>
        <PopoverTrigger as-child>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent class="w-80">
          <div class="grid gap-4">
            <div class="space-y-2">
              <h4 class="font-medium leading-none">Dimensions</h4>
              <p class="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    \`
  })
}`,...(L=(N=C.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var R,M,$;O.parameters={...O.parameters,docs:{...(R=O.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Popover,
      PopoverTrigger,
      PopoverContent,
      Button,
      Input,
      Label
    },
    template: \`
      <Popover>
        <PopoverTrigger as-child>
          <Button variant="outline">Edit Profile</Button>
        </PopoverTrigger>
        <PopoverContent class="w-80">
          <div class="grid gap-4">
            <div class="space-y-2">
              <h4 class="font-medium leading-none">Profile</h4>
              <p class="text-sm text-muted-foreground">
                Update your profile information.
              </p>
            </div>
            <div class="grid gap-2">
              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="name">Name</Label>
                <Input id="name" class="col-span-2 h-8" value="John Doe" />
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="email">Email</Label>
                <Input id="email" class="col-span-2 h-8" value="john@example.com" />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    \`
  })
}`,...($=(M=O.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var K,W,U;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Popover,
      PopoverTrigger,
      PopoverContent,
      Button
    },
    template: \`
      <div class="flex gap-4">
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline">Top</Button>
          </PopoverTrigger>
          <PopoverContent side="top">
            <p class="text-sm">Popover on top</p>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline">Bottom</Button>
          </PopoverTrigger>
          <PopoverContent side="bottom">
            <p class="text-sm">Popover on bottom</p>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline">Left</Button>
          </PopoverTrigger>
          <PopoverContent side="left">
            <p class="text-sm">Popover on left</p>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline">Right</Button>
          </PopoverTrigger>
          <PopoverContent side="right">
            <p class="text-sm">Popover on right</p>
          </PopoverContent>
        </Popover>
      </div>
    \`
  })
}`,...(U=(W=w.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};const io=["Default","WithForm","Positioning"];export{C as Default,w as Positioning,O as WithForm,io as __namedExportsOrder,so as default};
