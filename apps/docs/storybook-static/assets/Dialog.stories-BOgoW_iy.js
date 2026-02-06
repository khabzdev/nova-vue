import{d as c,B as le,G as p,f as e,r as b,C as d,D as g,E as r,K as m,o as S,L as B,F as se,Y as N,Z as V,J as re,c as h,I as W,H as z}from"./vue.esm-bundler-BitZzlT5.js";import{M as j}from"./Button.vue_vue_type_script_setup_true_lang-DIJKvcpn-y-8jE4mo.js";import{b as k,u as G,a as q}from"./useForwardPropsEmits-DQ7cY2da.js";import{c as ne}from"./createContext-Fl0g0pNq.js";import{a as ie}from"./index-BGV6KQZa.js";import{u as y}from"./useForwardExpose-ClhNePUc.js";import{P as F}from"./Primitive-B5VkAsKh.js";import{P as J}from"./Presence-V9PPYXmU.js";import{F as ue,a as de,u as pe}from"./FocusScope-DcG16un3.js";import{g as x}from"./getActiveElement-FUKBWQwh.js";import{u as I}from"./useId-DKCHXeQR.js";import{D as ce}from"./DismissableLayer-DXSzZs-S.js";import{g as ge}from"./utils-kTTPDiSQ.js";import{T as fe}from"./Teleport-zC8-hnMw.js";import{_ as me,i as De,t as _e}from"./utils-DfTrNRhL.js";import{M as U}from"./index-BcdZTg5d.js";import{I as ve}from"./iconify-C6s_K7BB.js";import{W as O}from"./cn-gWiv5-6R-CwNMvQqb.js";import{V as ye}from"./Input.vue_vue_type_script_setup_true_lang-D96E5V6Z-Bl0Oelpq.js";import{w as Ce}from"./Label.vue_vue_type_script_setup_true_lang-CcQM5z7h-DekRYA-r.js";import"./index-I_2vzNuA-BfX5bdph.js";import"./index-CvzWs3kq.js";import"./ConfigProvider-CB94jlZd.js";import"./utils-T_AZzJOL.js";import"./nullish-CHIgUVhi.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";const[C,Be]=ne("DialogRoot");var be=c({inheritAttrs:!1,__name:"DialogRoot",props:{open:{type:Boolean,required:!1,default:void 0},defaultOpen:{type:Boolean,required:!1,default:!1},modal:{type:Boolean,required:!1,default:!0}},emits:["update:open"],setup(s,{emit:o}){const t=s,a=ie(t,"open",o,{defaultValue:t.defaultOpen,passive:t.open===void 0}),i=b(),_=b(),{modal:f}=le(t);return Be({open:a,modal:f,openModal:()=>{a.value=!0},onOpenChange:u=>{a.value=u},onOpenToggle:()=>{a.value=!a.value},contentId:"",titleId:"",descriptionId:"",triggerElement:i,contentElement:_}),(u,n)=>p(u.$slots,"default",{open:e(a),close:()=>a.value=!1})}}),he=be,Oe=c({__name:"DialogClose",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(s){const o=s;y();const t=C();return(l,a)=>(d(),g(e(F),m(o,{type:l.as==="button"?"button":void 0,onClick:a[0]||(a[0]=i=>e(t).onOpenChange(!1))}),{default:r(()=>[p(l.$slots,"default")]),_:3},16,["type"]))}}),Y=Oe,Fe=c({__name:"DialogContentImpl",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(s,{emit:o}){const t=s,l=o,a=C(),{forwardRef:i,currentElement:_}=y();return a.titleId||(a.titleId=I(void 0,"reka-dialog-title")),a.descriptionId||(a.descriptionId=I(void 0,"reka-dialog-description")),S(()=>{a.contentElement=_,x()!==document.body&&(a.triggerElement.value=x())}),(f,u)=>(d(),g(e(ue),{"as-child":"",loop:"",trapped:t.trapFocus,onMountAutoFocus:u[5]||(u[5]=n=>l("openAutoFocus",n)),onUnmountAutoFocus:u[6]||(u[6]=n=>l("closeAutoFocus",n))},{default:r(()=>[B(e(ce),m({id:e(a).contentId,ref:e(i),as:f.as,"as-child":f.asChild,"disable-outside-pointer-events":f.disableOutsidePointerEvents,role:"dialog","aria-describedby":e(a).descriptionId,"aria-labelledby":e(a).titleId,"data-state":e(ge)(e(a).open.value)},f.$attrs,{onDismiss:u[0]||(u[0]=n=>e(a).onOpenChange(!1)),onEscapeKeyDown:u[1]||(u[1]=n=>l("escapeKeyDown",n)),onFocusOutside:u[2]||(u[2]=n=>l("focusOutside",n)),onInteractOutside:u[3]||(u[3]=n=>l("interactOutside",n)),onPointerDownOutside:u[4]||(u[4]=n=>l("pointerDownOutside",n))}),{default:r(()=>[p(f.$slots,"default")]),_:3},16,["id","as","as-child","disable-outside-pointer-events","aria-describedby","aria-labelledby","data-state"])]),_:3},8,["trapped"]))}}),Q=Fe,we=c({__name:"DialogContentModal",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(s,{emit:o}){const t=s,l=o,a=C(),i=k(l),{forwardRef:_,currentElement:f}=y();return de(f),(u,n)=>(d(),g(Q,m({...t,...e(i)},{ref:e(_),"trap-focus":e(a).open.value,"disable-outside-pointer-events":!0,onCloseAutoFocus:n[0]||(n[0]=D=>{var v;D.defaultPrevented||(D.preventDefault(),(v=e(a).triggerElement.value)==null||v.focus())}),onPointerDownOutside:n[1]||(n[1]=D=>{const v=D.detail.originalEvent,$=v.button===0&&v.ctrlKey===!0;(v.button===2||$)&&D.preventDefault()}),onFocusOutside:n[2]||(n[2]=D=>{D.preventDefault()})}),{default:r(()=>[p(u.$slots,"default")]),_:3},16,["trap-focus"]))}}),Te=we,qe=c({__name:"DialogContentNonModal",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(s,{emit:o}){const t=s,a=k(o);y();const i=C(),_=b(!1),f=b(!1);return(u,n)=>(d(),g(Q,m({...t,...e(a)},{"trap-focus":!1,"disable-outside-pointer-events":!1,onCloseAutoFocus:n[0]||(n[0]=D=>{var v;D.defaultPrevented||(_.value||(v=e(i).triggerElement.value)==null||v.focus(),D.preventDefault()),_.value=!1,f.value=!1}),onInteractOutside:n[1]||(n[1]=D=>{var E;D.defaultPrevented||(_.value=!0,D.detail.originalEvent.type==="pointerdown"&&(f.value=!0));const v=D.target;((E=e(i).triggerElement.value)==null?void 0:E.contains(v))&&D.preventDefault(),D.detail.originalEvent.type==="focusin"&&f.value&&D.preventDefault()})}),{default:r(()=>[p(u.$slots,"default")]),_:3},16))}}),Ee=qe,Ie=c({__name:"DialogContent",props:{forceMount:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(s,{emit:o}){const t=s,l=o,a=C(),i=k(l),{forwardRef:_}=y();return(f,u)=>(d(),g(e(J),{present:f.forceMount||e(a).open.value},{default:r(()=>[e(a).modal.value?(d(),g(Te,m({key:0,ref:e(_)},{...t,...e(i),...f.$attrs}),{default:r(()=>[p(f.$slots,"default")]),_:3},16)):(d(),g(Ee,m({key:1,ref:e(_)},{...t,...e(i),...f.$attrs}),{default:r(()=>[p(f.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),ke=Ie,Pe=c({__name:"DialogDescription",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"p"}},setup(s){const o=s;y();const t=C();return(l,a)=>(d(),g(e(F),m(o,{id:e(t).descriptionId}),{default:r(()=>[p(l.$slots,"default")]),_:3},16,["id"]))}}),$e=Pe,xe=c({__name:"DialogOverlayImpl",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(s){const o=C();return pe(!0),y(),(t,l)=>(d(),g(e(F),{as:t.as,"as-child":t.asChild,"data-state":e(o).open.value?"open":"closed",style:{"pointer-events":"auto"}},{default:r(()=>[p(t.$slots,"default")]),_:3},8,["as","as-child","data-state"]))}}),Ae=xe,Me=c({__name:"DialogOverlay",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(s){const o=C(),{forwardRef:t}=y();return(l,a)=>{var i;return(i=e(o))!=null&&i.modal.value?(d(),g(e(J),{key:0,present:l.forceMount||e(o).open.value},{default:r(()=>[B(Ae,m(l.$attrs,{ref:e(t),as:l.as,"as-child":l.asChild}),{default:r(()=>[p(l.$slots,"default")]),_:3},16,["as","as-child"])]),_:3},8,["present"])):se("v-if",!0)}}}),Re=Me,He=c({__name:"DialogPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(s){const o=s;return(t,l)=>(d(),g(e(fe),N(V(o)),{default:r(()=>[p(t.$slots,"default")]),_:3},16))}}),Le=He,Ke=c({__name:"DialogTitle",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"h2"}},setup(s){const o=s,t=C();return y(),(l,a)=>(d(),g(e(F),m(o,{id:e(t).titleId}),{default:r(()=>[p(l.$slots,"default")]),_:3},16,["id"]))}}),Se=Ke,Ne=c({__name:"DialogTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(s){const o=s,t=C(),{forwardRef:l,currentElement:a}=y();return t.contentId||(t.contentId=I(void 0,"reka-dialog-content")),S(()=>{t.triggerElement.value=a.value}),(i,_)=>(d(),g(e(F),m(o,{ref:e(l),type:i.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":e(t).open.value||!1,"aria-controls":e(t).open.value?e(t).contentId:void 0,"data-state":e(t).open.value?"open":"closed",onClick:e(t).onOpenToggle}),{default:r(()=>[p(i.$slots,"default")]),_:3},16,["type","aria-expanded","aria-controls","data-state","onClick"]))}}),Ve=Ne;const P=c({__name:"Dialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(s,{emit:o}){const t=G(s,o);return(l,a)=>(d(),g(e(he),N(V(e(t))),{default:r(()=>[p(l.$slots,"default")]),_:3},16))}}),X=c({__name:"DialogTrigger",props:{asChild:{type:Boolean},as:{}},setup(s){return(o,t)=>(d(),g(e(Ve),m(o.$props,{"as-child":""}),{default:r(()=>[p(o.$slots,"default")]),_:3},16))}}),We=c({__name:"DialogOverlay",props:{class:{},forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(s){const o=s,t=q(o),l=h(()=>O(["fixed inset-0 z-50","bg-black/64 backdrop-blur-sm","dark:bg-black/72"],o.class));return(a,i)=>(d(),g(e(Re),m(e(t),{"as-child":""}),{default:r(()=>[B(e(U),m(e(_e),{class:l.value}),null,16,["class"])]),_:1},16))}}),Z=c({__name:"DialogContent",props:{class:{},forceMount:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(s,{emit:o}){const t=s,l=G(t,o),a=h(()=>O(["fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4","p-6 rounded-xl border","bg-background text-foreground","shadow-lg shadow-black/8","dark:shadow-none","dark:border-input/50","before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)]","dark:before:shadow-[inset_0_1px_theme(colors.white/4%)]"],t.class));return(i,_)=>(d(),g(e(Le),null,{default:r(()=>[B(e(me),{multiple:""},{default:r(()=>[B(We),B(e(ke),m(e(l),{"as-child":""}),{default:r(()=>[B(e(U),m(e(De),{class:a.value}),{default:r(()=>[p(i.$slots,"default"),B(e(Y),{class:"absolute right-4 top-4 rounded-lg p-1 opacity-64 transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none"},{default:r(()=>[B(e(ve),{icon:"hugeicons:cancel-01",width:"16",height:"16"}),_[0]||(_[0]=re("span",{class:"sr-only"},"Close",-1))]),_:1})]),_:3},16,["class"])]),_:3},16)]),_:3})]),_:3}))}}),ee=c({__name:"DialogHeader",props:{class:{}},setup(s){const o=s,t=h(()=>O(["flex flex-col gap-1.5","text-left"],o.class));return(l,a)=>(d(),W("div",{class:z(t.value)},[p(l.$slots,"default")],2))}}),te=c({__name:"DialogTitle",props:{class:{},asChild:{type:Boolean},as:{}},setup(s){const o=s,t=q(o),l=h(()=>O(["text-lg font-semibold","leading-none tracking-tight","text-foreground"],o.class));return(a,i)=>(d(),g(e(Se),m(e(t),{class:l.value}),{default:r(()=>[p(a.$slots,"default")]),_:3},16,["class"]))}}),oe=c({__name:"DialogDescription",props:{class:{},asChild:{type:Boolean},as:{}},setup(s){const o=s,t=q(o),l=h(()=>O(["text-base sm:text-sm","text-muted-foreground","leading-relaxed"],o.class));return(a,i)=>(d(),g(e($e),m(e(t),{class:l.value}),{default:r(()=>[p(a.$slots,"default")]),_:3},16,["class"]))}}),ae=c({__name:"DialogFooter",props:{class:{}},setup(s){const o=s,t=h(()=>O(["flex flex-col-reverse gap-2","sm:flex-row sm:justify-end"],o.class));return(l,a)=>(d(),W("div",{class:z(t.value)},[p(l.$slots,"default")],2))}}),ze=c({__name:"DialogClose",props:{class:{},asChild:{type:Boolean},as:{}},setup(s){const o=s,t=q(o);return(l,a)=>(d(),g(e(Y),m(e(t),{class:o.class,"as-child":""}),{default:r(()=>[p(l.$slots,"default")]),_:3},16,["class"]))}}),vt={title:"Components/Dialog",component:P,tags:["autodocs"]},w={render:()=>({components:{Button:j,Dialog:P,DialogContent:Z,DialogDescription:oe,DialogFooter:ae,DialogHeader:ee,DialogTitle:te,DialogTrigger:X,DialogClose:ze},template:`
      <Dialog>
        <DialogTrigger as-child>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose as-child>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive">Delete Account</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `})},T={render:()=>({components:{Button:j,Dialog:P,DialogContent:Z,DialogDescription:oe,DialogFooter:ae,DialogHeader:ee,DialogTitle:te,DialogTrigger:X,Input:ye,Label:Ce},setup(){const s=b(""),o=b("");return{name:s,email:o}},template:`
      <Dialog>
        <DialogTrigger as-child>
          <Button>Edit Profile</Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="name" class="text-right">Name</Label>
              <Input id="name" v-model="name" class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="email" class="text-right">Email</Label>
              <Input id="email" v-model="email" type="email" class="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `})};var A,M,R;w.parameters={...w.parameters,docs:{...(A=w.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button,
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
      DialogClose
    },
    template: \`
      <Dialog>
        <DialogTrigger as-child>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose as-child>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive">Delete Account</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    \`
  })
}`,...(R=(M=w.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var H,L,K;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button,
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
      Input,
      Label
    },
    setup() {
      const name = ref('');
      const email = ref('');
      return {
        name,
        email
      };
    },
    template: \`
      <Dialog>
        <DialogTrigger as-child>
          <Button>Edit Profile</Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="name" class="text-right">Name</Label>
              <Input id="name" v-model="name" class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="email" class="text-right">Email</Label>
              <Input id="email" v-model="email" type="email" class="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    \`
  })
}`,...(K=(L=T.parameters)==null?void 0:L.docs)==null?void 0:K.source}}};const yt=["Default","WithForm"];export{w as Default,T as WithForm,yt as __namedExportsOrder,vt as default};
