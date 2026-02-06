import{d as m,B as S,C as b,D as g,E as d,G as T,f as e,r as $,s as A,o as F,j as D,L as V,R as E,F as O,c as p,a0 as j,a1 as H,K as _}from"./vue.esm-bundler-BitZzlT5.js";import{u as K,a as q}from"./useForwardPropsEmits-DQ7cY2da.js";import{c as N}from"./createContext-Fl0g0pNq.js";import{u as z}from"./useDirection-C1R3tBjc.js";import{u as h}from"./useForwardExpose-ClhNePUc.js";import{u as G}from"./useId-DKCHXeQR.js";import{P as C}from"./Primitive-B5VkAsKh.js";import{a as W}from"./index-BGV6KQZa.js";import{P as U}from"./Presence-V9PPYXmU.js";import{R as J}from"./RovingFocusGroup-mrBWr27v.js";import{R as Q}from"./RovingFocusItem-C_b6YGFL.js";import{W as B}from"./cn-gWiv5-6R-CwNMvQqb.js";import"./ConfigProvider-CB94jlZd.js";import"./index-CvzWs3kq.js";import"./Collection-CCDXBU9V.js";import"./usePrimitiveElement-JmSCNQYd.js";import"./utils-D788IsuB.js";import"./getActiveElement-FUKBWQwh.js";const[M,X]=N("TabsRoot");var Y=m({__name:"TabsRoot",props:{defaultValue:{type:null,required:!1},orientation:{type:String,required:!1,default:"horizontal"},dir:{type:String,required:!1},activationMode:{type:String,required:!1,default:"automatic"},modelValue:{type:null,required:!1},unmountOnHide:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:modelValue"],setup(o,{emit:a}){const s=o,t=a,{orientation:r,unmountOnHide:i,dir:u}=S(s),n=z(u);h();const l=W(s,"modelValue",t,{defaultValue:s.defaultValue,passive:s.modelValue===void 0}),f=$(),v=A(new Set);return X({modelValue:l,changeModelValue:c=>{l.value=c},orientation:r,dir:n,unmountOnHide:i,activationMode:s.activationMode,baseId:G(void 0,"reka-tabs"),tabsList:f,contentIds:v,registerContent:c=>{v.value=new Set([...v.value,c])},unregisterContent:c=>{const w=new Set(v.value);w.delete(c),v.value=w}}),(c,w)=>(b(),g(e(C),{dir:e(n),"data-orientation":e(r),"as-child":c.asChild,as:c.as},{default:d(()=>[T(c.$slots,"default",{modelValue:e(l)})]),_:3},8,["dir","data-orientation","as-child","as"]))}}),Z=Y;function L(o,a){return`${o}-trigger-${a}`}function P(o,a){return`${o}-content-${a}`}var ee=m({__name:"TabsContent",props:{value:{type:[String,Number],required:!0},forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(o){const a=o,{forwardRef:s}=h(),t=M(),r=p(()=>L(t.baseId,a.value)),i=p(()=>P(t.baseId,a.value)),u=p(()=>a.value===t.modelValue.value),n=$(u.value);return F(()=>{t.registerContent(a.value),requestAnimationFrame(()=>{n.value=!1})}),D(()=>{t.unregisterContent(a.value)}),(l,f)=>(b(),g(e(U),{present:l.forceMount||u.value,"force-mount":""},{default:d(({present:v})=>[V(e(C),{id:i.value,ref:e(s),"as-child":l.asChild,as:l.as,role:"tabpanel","data-state":u.value?"active":"inactive","data-orientation":e(t).orientation.value,"aria-labelledby":r.value,hidden:!v,tabindex:"0",style:E({animationDuration:n.value?"0s":void 0})},{default:d(()=>[!e(t).unmountOnHide.value||v?T(l.$slots,"default",{key:0}):O("v-if",!0)]),_:2},1032,["id","as-child","as","data-state","data-orientation","aria-labelledby","hidden","style"])]),_:3},8,["present"]))}}),ae=ee,te=m({__name:"TabsList",props:{loop:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(o){const a=o,{loop:s}=S(a),{forwardRef:t,currentElement:r}=h(),i=M();return i.tabsList=r,(u,n)=>(b(),g(e(J),{"as-child":"",orientation:e(i).orientation.value,dir:e(i).dir.value,loop:e(s)},{default:d(()=>[V(e(C),{ref:e(t),role:"tablist","as-child":u.asChild,as:u.as,"aria-orientation":e(i).orientation.value},{default:d(()=>[T(u.$slots,"default")]),_:3},8,["as-child","as","aria-orientation"])]),_:3},8,["orientation","dir","loop"]))}}),se=te,oe=m({__name:"TabsTrigger",props:{value:{type:[String,Number],required:!0},disabled:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(o){const a=o,{forwardRef:s}=h(),t=M(),r=p(()=>L(t.baseId,a.value)),i=p(()=>t.contentIds.value.has(a.value)?P(t.baseId,a.value):void 0),u=p(()=>a.value===t.modelValue.value);return(n,l)=>(b(),g(e(Q),{"as-child":"",focusable:!n.disabled,active:u.value},{default:d(()=>[V(e(C),{id:r.value,ref:e(s),role:"tab",type:n.as==="button"?"button":void 0,as:n.as,"as-child":n.asChild,"aria-selected":u.value?"true":"false","aria-controls":i.value,"data-state":u.value?"active":"inactive",disabled:n.disabled,"data-disabled":n.disabled?"":void 0,"data-orientation":e(t).orientation.value,onMousedown:l[0]||(l[0]=H(f=>{!n.disabled&&f.ctrlKey===!1?e(t).changeModelValue(n.value):f.preventDefault()},["left"])),onKeydown:l[1]||(l[1]=j(f=>e(t).changeModelValue(n.value),["enter","space"])),onFocus:l[2]||(l[2]=()=>{const f=e(t).activationMode!=="manual";!u.value&&!n.disabled&&f&&e(t).changeModelValue(n.value)})},{default:d(()=>[T(n.$slots,"default")]),_:3},8,["id","type","as","as-child","aria-selected","aria-controls","data-state","disabled","data-disabled","data-orientation"])]),_:3},8,["focusable","active"]))}}),ne=oe;const x=m({__name:"Tabs",props:{class:{},defaultValue:{},orientation:{default:"horizontal"},dir:{},activationMode:{},modelValue:{},unmountOnHide:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(o,{emit:a}){const s=o,t=K(s,a);return(r,i)=>(b(),g(e(Z),_(e(t),{class:s.class}),{default:d(()=>[T(r.$slots,"default")]),_:3},16,["class"]))}}),re=m({__name:"TabsList",props:{class:{},loop:{type:Boolean},asChild:{type:Boolean},as:{}},setup(o){const a=o,s=q(a),t=p(()=>B(["inline-flex items-center justify-center","h-9 gap-1 p-1 sm:h-8","rounded-lg","bg-muted text-muted-foreground"],a.class));return(r,i)=>(b(),g(e(se),_(e(s),{class:t.value}),{default:d(()=>[T(r.$slots,"default")]),_:3},16,["class"]))}}),le=m({__name:"TabsTrigger",props:{class:{},value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(o){const a=o,s=q(a),t=p(()=>B(["inline-flex items-center justify-center","px-3 py-1 sm:px-2.5","text-sm font-medium whitespace-nowrap","rounded-md","transition-all","outline-none","focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background","disabled:pointer-events-none disabled:opacity-50","data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"],a.class));return(r,i)=>(b(),g(e(ne),_(e(s),{class:t.value}),{default:d(()=>[T(r.$slots,"default")]),_:3},16,["class"]))}}),ie=m({__name:"TabsContent",props:{class:{},value:{},forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(o){const a=o,s=q(a),t=p(()=>B(["mt-2","outline-none","focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"],a.class));return(r,i)=>(b(),g(e(ae),_(e(s),{class:t.value}),{default:d(()=>[T(r.$slots,"default")]),_:3},16,["class"]))}}),Me={title:"Components/Tabs",component:x,tags:["autodocs"]},y={render:()=>({components:{Tabs:x,TabsContent:ie,TabsList:re,TabsTrigger:le},template:`
      <Tabs default-value="account" class="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account" class="p-4">
          <p class="text-sm text-muted-foreground">
            Make changes to your account here. Click save when you're done.
          </p>
        </TabsContent>
        <TabsContent value="password" class="p-4">
          <p class="text-sm text-muted-foreground">
            Change your password here. After saving, you'll be logged out.
          </p>
        </TabsContent>
      </Tabs>
    `})};var R,I,k;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tabs,
      TabsContent,
      TabsList,
      TabsTrigger
    },
    template: \`
      <Tabs default-value="account" class="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account" class="p-4">
          <p class="text-sm text-muted-foreground">
            Make changes to your account here. Click save when you're done.
          </p>
        </TabsContent>
        <TabsContent value="password" class="p-4">
          <p class="text-sm text-muted-foreground">
            Change your password here. After saving, you'll be logged out.
          </p>
        </TabsContent>
      </Tabs>
    \`
  })
}`,...(k=(I=y.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};const Re=["Default"];export{y as Default,Re as __namedExportsOrder,Me as default};
