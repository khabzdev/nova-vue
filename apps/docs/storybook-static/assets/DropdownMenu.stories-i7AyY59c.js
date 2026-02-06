import{d as p,C as s,D as l,E as d,G as i,Y as w,Z as m,f as e,B as we,q as ee,r as S,K as D,o as me,L as g,a0 as fe,n as Me,c as b,J as G,I as De,H as ge}from"./vue.esm-bundler-BitZzlT5.js";import{b as V,u as _,a as C}from"./useForwardPropsEmits-DQ7cY2da.js";import{u as M}from"./useForwardExpose-ClhNePUc.js";import{M as _e,a as he,b as ye,c as be,d as ve,e as Be,f as Se,g as Ie,h as Ce,i as qe,j as ke,k as xe,l as Pe,m as Re,n as Te}from"./MenuSubTrigger-BfMPH_V6.js";import{c as Oe}from"./createContext-Fl0g0pNq.js";import{u as Le}from"./useDirection-C1R3tBjc.js";import{a as oe}from"./index-BGV6KQZa.js";import{u as ne}from"./useId-DKCHXeQR.js";import{P as Ae}from"./Primitive-B5VkAsKh.js";import{_ as te,e as re}from"./utils-DfTrNRhL.js";import{M as ae}from"./index-BcdZTg5d.js";import{W as v}from"./cn-gWiv5-6R-CwNMvQqb.js";import{I as ue}from"./iconify-C6s_K7BB.js";import{M as T}from"./Button.vue_vue_type_script_setup_true_lang-DIJKvcpn-y-8jE4mo.js";import"./utils-kTTPDiSQ.js";import"./getActiveElement-FUKBWQwh.js";import"./index-CvzWs3kq.js";import"./Presence-V9PPYXmU.js";import"./FocusScope-DcG16un3.js";import"./ConfigProvider-CB94jlZd.js";import"./utils-T_AZzJOL.js";import"./Teleport-zC8-hnMw.js";import"./PopperContent-BZxkLFfv.js";import"./useSize-CCXUmRMH.js";import"./useArrowNavigation-B5rxJs06.js";import"./useFocusGuards-DVm2F-IH.js";import"./useTypeahead-siFnJEHo.js";import"./DismissableLayer-DXSzZs-S.js";import"./nullish-CHIgUVhi.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./RovingFocusGroup-mrBWr27v.js";import"./Collection-CCDXBU9V.js";import"./usePrimitiveElement-JmSCNQYd.js";import"./utils-D788IsuB.js";import"./index-I_2vzNuA-BfX5bdph.js";var $e=p({__name:"DropdownMenuCheckboxItem",props:{modelValue:{type:[Boolean,String],required:!1},disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["select","update:modelValue"],setup(t,{emit:n}){const o=t,r=V(n);return M(),(a,c)=>(s(),l(e(_e),w(m({...o,...e(r)})),{default:d(()=>[i(a.$slots,"default")]),_:3},16))}}),Ge=$e;const[de,Ve]=Oe("DropdownMenuRoot");var Fe=p({__name:"DropdownMenuRoot",props:{defaultOpen:{type:Boolean,required:!1},open:{type:Boolean,required:!1,default:void 0},dir:{type:String,required:!1},modal:{type:Boolean,required:!1,default:!0}},emits:["update:open"],setup(t,{emit:n}){const o=t,u=n;M();const r=oe(o,"open",u,{defaultValue:o.defaultOpen,passive:o.open===void 0}),a=S(),{modal:c,dir:f}=we(o),h=Le(f);return Ve({open:r,onOpenChange:y=>{r.value=y},onOpenToggle:()=>{r.value=!r.value},triggerId:"",triggerElement:a,contentId:"",modal:c,dir:h}),(y,I)=>(s(),l(e(he),{open:e(r),"onUpdate:open":I[0]||(I[0]=B=>ee(r)?r.value=B:null),dir:e(h),modal:e(c)},{default:d(()=>[i(y.$slots,"default",{open:e(r)})]),_:3},8,["open","dir","modal"]))}}),Ee=Fe,ze=p({__name:"DropdownMenuContent",props:{forceMount:{type:Boolean,required:!1},loop:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","closeAutoFocus"],setup(t,{emit:n}){const r=_(t,n);M();const a=de(),c=S(!1);function f(h){h.defaultPrevented||(c.value||setTimeout(()=>{var y;(y=a.triggerElement.value)==null||y.focus()},0),c.value=!1,h.preventDefault())}return a.contentId||(a.contentId=ne(void 0,"reka-dropdown-menu-content")),(h,y)=>{var I;return s(),l(e(ye),D(e(r),{id:e(a).contentId,"aria-labelledby":(I=e(a))==null?void 0:I.triggerId,style:{"--reka-dropdown-menu-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-dropdown-menu-content-available-width":"var(--reka-popper-available-width)","--reka-dropdown-menu-content-available-height":"var(--reka-popper-available-height)","--reka-dropdown-menu-trigger-width":"var(--reka-popper-anchor-width)","--reka-dropdown-menu-trigger-height":"var(--reka-popper-anchor-height)"},onCloseAutoFocus:f,onInteractOutside:y[0]||(y[0]=B=>{var E;if(B.defaultPrevented)return;const $=B.detail.originalEvent,ie=$.button===0&&$.ctrlKey===!0,ce=$.button===2||ie;(!e(a).modal.value||ce)&&(c.value=!0),(E=e(a).triggerElement.value)!=null&&E.contains(B.target)&&B.preventDefault()})}),{default:d(()=>[i(h.$slots,"default")]),_:3},16,["id","aria-labelledby"])}}}),We=ze,Ne=p({__name:"DropdownMenuGroup",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const n=t;return M(),(o,u)=>(s(),l(e(be),w(m(n)),{default:d(()=>[i(o.$slots,"default")]),_:3},16))}}),Ke=Ne,Ue=p({__name:"DropdownMenuItem",props:{disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["select"],setup(t,{emit:n}){const o=t,r=V(n);return M(),(a,c)=>(s(),l(e(ve),w(m({...o,...e(r)})),{default:d(()=>[i(a.$slots,"default")]),_:3},16))}}),je=Ue,Qe=p({__name:"DropdownMenuItemIndicator",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const n=t;return M(),(o,u)=>(s(),l(e(Be),w(m(n)),{default:d(()=>[i(o.$slots,"default")]),_:3},16))}}),pe=Qe,Ye=p({__name:"DropdownMenuLabel",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const n=t;return M(),(o,u)=>(s(),l(e(Se),w(m(n)),{default:d(()=>[i(o.$slots,"default")]),_:3},16))}}),Ze=Ye,He=p({__name:"DropdownMenuPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(t){const n=t;return(o,u)=>(s(),l(e(Ie),w(m(n)),{default:d(()=>[i(o.$slots,"default")]),_:3},16))}}),se=He,Je=p({__name:"DropdownMenuRadioGroup",props:{modelValue:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:modelValue"],setup(t,{emit:n}){const o=t,r=V(n);return M(),(a,c)=>(s(),l(e(Ce),w(m({...o,...e(r)})),{default:d(()=>[i(a.$slots,"default")]),_:3},16))}}),Xe=Je,eo=p({__name:"DropdownMenuRadioItem",props:{value:{type:null,required:!0},disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["select"],setup(t,{emit:n}){const r=_(t,n);return M(),(a,c)=>(s(),l(e(qe),w(m(e(r))),{default:d(()=>[i(a.$slots,"default")]),_:3},16))}}),oo=eo,no=p({__name:"DropdownMenuSeparator",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const n=t;return M(),(o,u)=>(s(),l(e(ke),w(m(n)),{default:d(()=>[i(o.$slots,"default")]),_:3},16))}}),to=no,ro=p({__name:"DropdownMenuSub",props:{defaultOpen:{type:Boolean,required:!1},open:{type:Boolean,required:!1,default:void 0}},emits:["update:open"],setup(t,{emit:n}){const o=t,r=oe(o,"open",n,{passive:o.open===void 0,defaultValue:o.defaultOpen??!1});return M(),(a,c)=>(s(),l(e(xe),{open:e(r),"onUpdate:open":c[0]||(c[0]=f=>ee(r)?r.value=f:null)},{default:d(()=>[i(a.$slots,"default",{open:e(r)})]),_:3},8,["open"]))}}),ao=ro,uo=p({__name:"DropdownMenuSubContent",props:{forceMount:{type:Boolean,required:!1},loop:{type:Boolean,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","entryFocus","openAutoFocus","closeAutoFocus"],setup(t,{emit:n}){const r=_(t,n);return M(),(a,c)=>(s(),l(e(Pe),D(e(r),{style:{"--reka-dropdown-menu-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-dropdown-menu-content-available-width":"var(--reka-popper-available-width)","--reka-dropdown-menu-content-available-height":"var(--reka-popper-available-height)","--reka-dropdown-menu-trigger-width":"var(--reka-popper-anchor-width)","--reka-dropdown-menu-trigger-height":"var(--reka-popper-anchor-height)"}}),{default:d(()=>[i(a.$slots,"default")]),_:3},16))}}),po=uo,so=p({__name:"DropdownMenuSubTrigger",props:{disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const n=t;return M(),(o,u)=>(s(),l(e(Re),w(m(n)),{default:d(()=>[i(o.$slots,"default")]),_:3},16))}}),lo=so,io=p({__name:"DropdownMenuTrigger",props:{disabled:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(t){const n=t,o=de(),{forwardRef:u,currentElement:r}=M();return me(()=>{o.triggerElement=r}),o.triggerId||(o.triggerId=ne(void 0,"reka-dropdown-menu-trigger")),(a,c)=>(s(),l(e(Te),{"as-child":""},{default:d(()=>[g(e(Ae),{id:e(o).triggerId,ref:e(u),type:a.as==="button"?"button":void 0,"as-child":n.asChild,as:a.as,"aria-haspopup":"menu","aria-expanded":e(o).open.value,"aria-controls":e(o).open.value?e(o).contentId:void 0,"data-disabled":a.disabled?"":void 0,disabled:a.disabled,"data-state":e(o).open.value?"open":"closed",onClick:c[0]||(c[0]=async f=>{var h;!a.disabled&&f.button===0&&f.ctrlKey===!1&&((h=e(o))==null||h.onOpenToggle(),await Me(),e(o).open.value&&f.preventDefault())}),onKeydown:c[1]||(c[1]=fe(f=>{a.disabled||(["Enter"," "].includes(f.key)&&e(o).onOpenToggle(),f.key==="ArrowDown"&&e(o).onOpenChange(!0),["Enter"," ","ArrowDown"].includes(f.key)&&f.preventDefault())},["enter","space","arrow-down"]))},{default:d(()=>[i(a.$slots,"default")]),_:3},8,["id","type","as-child","as","aria-expanded","aria-controls","data-disabled","disabled","data-state"])]),_:3}))}}),co=io;const q=p({__name:"DropdownMenu",props:{defaultOpen:{type:Boolean},open:{type:Boolean},dir:{},modal:{type:Boolean}},emits:["update:open"],setup(t,{emit:n}){const o=_(t,n);return(u,r)=>(s(),l(e(Ee),w(m(e(o))),{default:d(()=>[i(u.$slots,"default")]),_:3},16))}}),O=p({__name:"DropdownMenuTrigger",props:{disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(t){const n=C(t);return(o,u)=>(s(),l(e(co),w(m(e(n))),{default:d(()=>[i(o.$slots,"default")]),_:3},16))}}),L=p({__name:"DropdownMenuContent",props:{class:{},forceMount:{type:Boolean},loop:{type:Boolean},side:{},sideOffset:{default:4},sideFlip:{type:Boolean},align:{default:"start"},alignOffset:{},alignFlip:{type:Boolean},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},hideShiftedArrow:{type:Boolean},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{},disableUpdateOnLayoutShift:{type:Boolean},prioritizePosition:{type:Boolean},reference:{},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","closeAutoFocus"],setup(t,{emit:n}){const o=t,u=_(o,n),r=b(()=>v(["z-50 min-w-[8rem] overflow-hidden p-1","rounded-xl border border-input","bg-popover text-popover-foreground","shadow-lg shadow-black/8","dark:shadow-none dark:border-input/50","before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)]","dark:before:shadow-[inset_0_1px_theme(colors.white/4%)]"],o.class));return(a,c)=>(s(),l(e(se),null,{default:d(()=>[g(e(te),null,{default:d(()=>[g(e(We),D(e(u),{"as-child":""}),{default:d(()=>[g(e(ae),D(e(re),{class:r.value}),{default:d(()=>[i(a.$slots,"default")]),_:3},16,["class"])]),_:3},16)]),_:3})]),_:3}))}}),le=p({__name:"DropdownMenuItem",props:{class:{},inset:{type:Boolean},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{}},emits:["select"],setup(t,{emit:n}){const o=t,u=_(o,n),r=b(()=>v(["relative flex cursor-default select-none items-center gap-2","px-2 py-1.5","text-base sm:text-sm","rounded-lg","outline-none transition-colors","hover:bg-accent/64 focus:bg-accent focus:text-accent-foreground","data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground","data-[disabled]:pointer-events-none data-[disabled]:opacity-50","[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"],o.inset&&"pl-8",o.class));return(a,c)=>(s(),l(e(je),D(e(u),{class:r.value}),{default:d(()=>[i(a.$slots,"default")]),_:3},16,["class"]))}}),wo={class:"absolute left-2 flex size-4 items-center justify-center"},mo=p({__name:"DropdownMenuCheckboxItem",props:{class:{},modelValue:{type:[Boolean,String]},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{}},emits:["select","update:modelValue"],setup(t,{emit:n}){const o=t,u=_(o,n),r=b(()=>v(["relative flex cursor-default select-none items-center","py-1.5 pl-8 pr-2","text-base sm:text-sm","rounded-lg","outline-none transition-colors","hover:bg-accent/64 focus:bg-accent focus:text-accent-foreground","data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground","data-[disabled]:pointer-events-none data-[disabled]:opacity-50"],o.class));return(a,c)=>(s(),l(e(Ge),D(e(u),{class:r.value}),{default:d(()=>[G("span",wo,[g(e(pe),null,{default:d(()=>[g(e(ue),{icon:"hugeicons:tick-02",width:"14",height:"14"})]),_:1})]),i(a.$slots,"default")]),_:3},16,["class"]))}}),fo={class:"absolute left-2 flex size-3.5 items-center justify-center"},Mo=p({__name:"DropdownMenuRadioItem",props:{class:{},value:{},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{}},emits:["select"],setup(t,{emit:n}){const o=t,u=_(o,n),r=b(()=>v(["relative flex cursor-default select-none items-center","py-1.5 pl-8 pr-2","text-base sm:text-sm","rounded-lg","outline-none transition-colors","hover:bg-accent/64 focus:bg-accent focus:text-accent-foreground","data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground","data-[disabled]:pointer-events-none data-[disabled]:opacity-50"],o.class));return(a,c)=>(s(),l(e(oo),D(e(u),{class:r.value}),{default:d(()=>[G("span",fo,[g(e(pe),null,{default:d(()=>[...c[0]||(c[0]=[G("span",{class:"size-2 rounded-full bg-current"},null,-1)])]),_:1})]),i(a.$slots,"default")]),_:3},16,["class"]))}}),Do=p({__name:"DropdownMenuRadioGroup",props:{modelValue:{},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(t,{emit:n}){const o=_(t,n);return(u,r)=>(s(),l(e(Xe),w(m(e(o))),{default:d(()=>[i(u.$slots,"default")]),_:3},16))}}),go=p({__name:"DropdownMenuGroup",props:{asChild:{type:Boolean},as:{}},setup(t){const n=C(t);return(o,u)=>(s(),l(e(Ke),w(m(e(n))),{default:d(()=>[i(o.$slots,"default")]),_:3},16))}}),F=p({__name:"DropdownMenuLabel",props:{class:{},inset:{type:Boolean},asChild:{type:Boolean},as:{}},setup(t){const n=t,o=C(n),u=b(()=>v(["px-2 py-1.5","text-sm font-semibold"],n.inset&&"pl-8",n.class));return(r,a)=>(s(),l(e(Ze),D(e(o),{class:u.value}),{default:d(()=>[i(r.$slots,"default")]),_:3},16,["class"]))}}),A=p({__name:"DropdownMenuSeparator",props:{class:{},asChild:{type:Boolean},as:{}},setup(t){const n=t,o=C(n),u=b(()=>v("-mx-1 my-1 h-px bg-muted",n.class));return(r,a)=>(s(),l(e(to),D(e(o),{class:u.value}),null,16,["class"]))}}),_o=p({__name:"DropdownMenuShortcut",props:{class:{}},setup(t){const n=t,o=b(()=>v("ml-auto text-xs tracking-widest opacity-60",n.class));return(u,r)=>(s(),De("span",{class:ge(o.value)},[i(u.$slots,"default")],2))}}),ho=p({__name:"DropdownMenuSub",props:{defaultOpen:{type:Boolean},open:{type:Boolean}},emits:["update:open"],setup(t,{emit:n}){const o=_(t,n);return(u,r)=>(s(),l(e(ao),w(m(e(o))),{default:d(()=>[i(u.$slots,"default")]),_:3},16))}}),yo=p({__name:"DropdownMenuSubTrigger",props:{class:{},inset:{type:Boolean},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{}},setup(t){const n=t,o=C(n),u=b(()=>v(["flex cursor-default select-none items-center gap-2","px-2 py-1.5","text-base sm:text-sm","rounded-lg","outline-none transition-colors","hover:bg-accent/64 focus:bg-accent","data-[highlighted]:bg-accent","data-[state=open]:bg-accent"],n.inset&&"pl-8",n.class));return(r,a)=>(s(),l(e(lo),D(e(o),{class:u.value}),{default:d(()=>[i(r.$slots,"default"),g(e(ue),{icon:"hugeicons:arrow-right-01",width:"16",height:"16",class:"ml-auto"})]),_:3},16,["class"]))}}),bo=p({__name:"DropdownMenuSubContent",props:{class:{},forceMount:{type:Boolean},loop:{type:Boolean},sideOffset:{default:2},sideFlip:{type:Boolean},alignOffset:{},alignFlip:{type:Boolean},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},hideShiftedArrow:{type:Boolean},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{},disableUpdateOnLayoutShift:{type:Boolean},prioritizePosition:{type:Boolean},reference:{},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","entryFocus","openAutoFocus","closeAutoFocus"],setup(t,{emit:n}){const o=t,u=_(o,n),r=b(()=>v(["z-50 min-w-[8rem] overflow-hidden p-1","rounded-xl border border-input","bg-popover text-popover-foreground","shadow-lg shadow-black/8","dark:shadow-none dark:border-input/50"],o.class));return(a,c)=>(s(),l(e(se),null,{default:d(()=>[g(e(te),null,{default:d(()=>[g(e(po),D(e(u),{"as-child":""}),{default:d(()=>[g(e(ae),D(e(re),{class:r.value}),{default:d(()=>[i(a.$slots,"default")]),_:3},16,["class"])]),_:3},16)]),_:3})]),_:3}))}}),rn={title:"Components/DropdownMenu",component:q,tags:["autodocs"]},k={render:()=>({components:{DropdownMenu:q,DropdownMenuTrigger:O,DropdownMenuContent:L,DropdownMenuItem:le,DropdownMenuSeparator:A,DropdownMenuShortcut:_o,Button:T},template:`
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline">Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    `})},x={render:()=>({components:{DropdownMenu:q,DropdownMenuTrigger:O,DropdownMenuContent:L,DropdownMenuCheckboxItem:mo,DropdownMenuLabel:F,DropdownMenuSeparator:A,Button:T},setup(){const t=S(!0),n=S(!1),o=S(!1);return{showStatusBar:t,showActivityBar:n,showPanel:o}},template:`
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline">View Settings</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem v-model:checked="showStatusBar">
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem v-model:checked="showActivityBar">
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem v-model:checked="showPanel">
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    `})},P={render:()=>({components:{DropdownMenu:q,DropdownMenuTrigger:O,DropdownMenuContent:L,DropdownMenuRadioGroup:Do,DropdownMenuRadioItem:Mo,DropdownMenuLabel:F,DropdownMenuSeparator:A,Button:T},setup(){return{position:S("bottom")}},template:`
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline">Panel Position</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup v-model="position">
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    `})},R={render:()=>({components:{DropdownMenu:q,DropdownMenuTrigger:O,DropdownMenuContent:L,DropdownMenuItem:le,DropdownMenuGroup:go,DropdownMenuLabel:F,DropdownMenuSeparator:A,DropdownMenuSub:ho,DropdownMenuSubTrigger:yo,DropdownMenuSubContent:bo,Button:T},template:`
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline">Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Email</DropdownMenuItem>
              <DropdownMenuItem>Message</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>More...</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    `})};var z,W,N;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuSeparator,
      DropdownMenuShortcut,
      Button
    },
    template: \`
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline">Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    \`
  })
}`,...(N=(W=k.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var K,U,j;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuCheckboxItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      Button
    },
    setup() {
      const showStatusBar = ref(true);
      const showActivityBar = ref(false);
      const showPanel = ref(false);
      return {
        showStatusBar,
        showActivityBar,
        showPanel
      };
    },
    template: \`
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline">View Settings</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem v-model:checked="showStatusBar">
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem v-model:checked="showActivityBar">
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem v-model:checked="showPanel">
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    \`
  })
}`,...(j=(U=x.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var Q,Y,Z;P.parameters={...P.parameters,docs:{...(Q=P.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuRadioGroup,
      DropdownMenuRadioItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      Button
    },
    setup() {
      const position = ref('bottom');
      return {
        position
      };
    },
    template: \`
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline">Panel Position</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup v-model="position">
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    \`
  })
}`,...(Z=(Y=P.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var H,J,X;R.parameters={...R.parameters,docs:{...(H=R.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuGroup,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      DropdownMenuSub,
      DropdownMenuSubTrigger,
      DropdownMenuSubContent,
      Button
    },
    template: \`
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline">Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Email</DropdownMenuItem>
              <DropdownMenuItem>Message</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>More...</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    \`
  })
}`,...(X=(J=R.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};const an=["Default","WithCheckboxItems","WithRadioItems","WithSubMenu"];export{k as Default,x as WithCheckboxItems,P as WithRadioItems,R as WithSubMenu,an as __namedExportsOrder,rn as default};
