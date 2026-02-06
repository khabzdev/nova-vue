import{d as c,B as j,C as u,D as p,E as d,G as m,f as e,r as w,w as U,n as X,o as Z,L as V,K as T,F as ee,c as f,a0 as te,J as oe,H as ae}from"./vue.esm-bundler-BitZzlT5.js";import{u as ne,a as S}from"./useForwardPropsEmits-DQ7cY2da.js";import{c as D}from"./createContext-Fl0g0pNq.js";import{u as re}from"./useDirection-C1R3tBjc.js";import{u as b}from"./useForwardExpose-ClhNePUc.js";import{P as q}from"./Primitive-B5VkAsKh.js";import{u as ie}from"./useSingleOrMultipleValue-ZklQkghw.js";import{u as se}from"./useArrowNavigation-B5rxJs06.js";import{a as le,c as de}from"./index-BGV6KQZa.js";import{u as L}from"./useId-DKCHXeQR.js";import{P as ce}from"./Presence-V9PPYXmU.js";import{W as R}from"./cn-gWiv5-6R-CwNMvQqb.js";import{I as ue}from"./iconify-C6s_K7BB.js";import"./ConfigProvider-CB94jlZd.js";import"./isValueEqualOrExist-DvmIGGK4.js";import"./nullish-CHIgUVhi.js";import"./ohash.D__AXeF1-Cq3NGnZa.js";import"./index-CvzWs3kq.js";const[z,pe]=D("CollapsibleRoot");var me=c({__name:"CollapsibleRoot",props:{defaultOpen:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:void 0},disabled:{type:Boolean,required:!1},unmountOnHide:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:open"],setup(n,{expose:i,emit:o}){const t=n,r=le(t,"open",o,{defaultValue:t.defaultOpen,passive:t.open===void 0}),{disabled:l,unmountOnHide:_}=j(t);return pe({contentId:"",disabled:l,open:r,unmountOnHide:_,onOpenToggle:()=>{l.value||(r.value=!r.value)}}),i({open:r}),b(),(v,y)=>(u(),p(e(q),{as:v.as,"as-child":t.asChild,"data-state":e(r)?"open":"closed","data-disabled":e(l)?"":void 0},{default:d(()=>[m(v.$slots,"default",{open:e(r)})]),_:3},8,["as","as-child","data-state","data-disabled"]))}}),fe=me,ve=c({inheritAttrs:!1,__name:"CollapsibleContent",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["contentFound"],setup(n,{emit:i}){const o=n,t=i,a=z();a.contentId||(a.contentId=L(void 0,"reka-collapsible-content"));const r=w(),{forwardRef:l,currentElement:_}=b(),v=w(0),y=w(0),h=f(()=>a.open.value),g=w(h.value),A=w();U(()=>{var s;return[h.value,(s=r.value)==null?void 0:s.present]},async()=>{await X();const s=_.value;if(!s)return;A.value=A.value||{transitionDuration:s.style.transitionDuration,animationName:s.style.animationName},s.style.transitionDuration="0s",s.style.animationName="none";const I=s.getBoundingClientRect();y.value=I.height,v.value=I.width,g.value||(s.style.transitionDuration=A.value.transitionDuration,s.style.animationName=A.value.animationName)},{immediate:!0});const C=f(()=>g.value&&a.open.value);return Z(()=>{requestAnimationFrame(()=>{g.value=!1})}),de(_,"beforematch",s=>{requestAnimationFrame(()=>{a.onOpenToggle(),t("contentFound")})}),(s,I)=>(u(),p(e(ce),{ref_key:"presentRef",ref:r,present:s.forceMount||e(a).open.value,"force-mount":!0},{default:d(({present:x})=>{var $;return[V(e(q),T(s.$attrs,{id:e(a).contentId,ref:e(l),"as-child":o.asChild,as:s.as,hidden:x?void 0:e(a).unmountOnHide.value?"":"until-found","data-state":C.value?void 0:e(a).open.value?"open":"closed","data-disabled":($=e(a).disabled)!=null&&$.value?"":void 0,style:{"--reka-collapsible-content-height":`${y.value}px`,"--reka-collapsible-content-width":`${v.value}px`}}),{default:d(()=>[!e(a).unmountOnHide.value||x?m(s.$slots,"default",{key:0}):ee("v-if",!0)]),_:2},1040,["id","as-child","as","hidden","data-state","data-disabled","style"])]}),_:3},8,["present"]))}}),ge=ve,Ae=c({__name:"CollapsibleTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const i=n;b();const o=z();return(t,a)=>{var r,l;return u(),p(e(q),{type:t.as==="button"?"button":void 0,as:t.as,"as-child":i.asChild,"aria-controls":e(o).contentId,"aria-expanded":e(o).open.value,"data-state":e(o).open.value?"open":"closed","data-disabled":(r=e(o).disabled)!=null&&r.value?"":void 0,disabled:(l=e(o).disabled)==null?void 0:l.value,onClick:e(o).onOpenToggle},{default:d(()=>[m(t.$slots,"default")]),_:3},8,["type","as","as-child","aria-controls","aria-expanded","data-state","data-disabled","disabled","onClick"])}}}),_e=Ae;const[O,ye]=D("AccordionRoot");var be=c({__name:"AccordionRoot",props:{collapsible:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},dir:{type:String,required:!1},orientation:{type:String,required:!1,default:"vertical"},unmountOnHide:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},type:{type:String,required:!1},modelValue:{type:null,required:!1},defaultValue:{type:null,required:!1}},emits:["update:modelValue"],setup(n,{emit:i}){const o=n,t=i,{dir:a,disabled:r,unmountOnHide:l}=j(o),_=re(a),{modelValue:v,changeModelValue:y,isSingle:h}=ie(o,t),{forwardRef:g,currentElement:A}=b();return ye({disabled:r,direction:_,orientation:o.orientation,parentElement:A,isSingle:h,collapsible:o.collapsible,modelValue:v,changeModelValue:y,unmountOnHide:l}),(C,s)=>(u(),p(e(q),{ref:e(g),"as-child":C.asChild,as:C.as},{default:d(()=>[m(C.$slots,"default",{modelValue:e(v)})]),_:3},8,["as-child","as"]))}}),he=be,H=(function(n){return n.Open="open",n.Closed="closed",n})(H||{});const[E,Ce]=D("AccordionItem");var Ie=c({__name:"AccordionItem",props:{disabled:{type:Boolean,required:!1},value:{type:String,required:!0},unmountOnHide:{type:Boolean,required:!1,default:void 0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(n,{expose:i}){const o=n,t=O(),a=f(()=>t.isSingle.value?o.value===t.modelValue.value:Array.isArray(t.modelValue.value)&&t.modelValue.value.includes(o.value)),r=f(()=>t.disabled.value||o.disabled),l=f(()=>r.value?"":void 0),_=f(()=>a.value?H.Open:H.Closed);i({open:a,dataDisabled:l});const{currentRef:v,currentElement:y}=b();Ce({open:a,dataState:_,disabled:r,dataDisabled:l,triggerId:"",currentRef:v,currentElement:y,value:f(()=>o.value)});function h(g){var I;const A=g.target;if(Array.from(((I=t.parentElement.value)==null?void 0:I.querySelectorAll("[data-reka-collection-item]"))??[]).findIndex(x=>x===A)===-1)return null;se(g,A,t.parentElement.value,{arrowKeyOptions:t.orientation,dir:t.direction.value,focus:!0})}return(g,A)=>(u(),p(e(fe),{"data-orientation":e(t).orientation,"data-disabled":l.value,"data-state":_.value,disabled:r.value,open:a.value,as:o.as,"as-child":o.asChild,"unmount-on-hide":o.unmountOnHide??e(t).unmountOnHide.value,onKeydown:te(h,["up","down","left","right","home","end"])},{default:d(()=>[m(g.$slots,"default",{open:a.value})]),_:3},8,["data-orientation","data-disabled","data-state","disabled","open","as","as-child","unmount-on-hide"]))}}),we=Ie,Te=c({__name:"AccordionContent",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(n){const i=n,o=O(),t=E();return b(),(a,r)=>(u(),p(e(ge),{role:"region","as-child":i.asChild,as:a.as,"force-mount":i.forceMount,"aria-labelledby":e(t).triggerId,"data-state":e(t).dataState.value,"data-disabled":e(t).dataDisabled.value,"data-orientation":e(o).orientation,style:{"--reka-accordion-content-width":"var(--reka-collapsible-content-width)","--reka-accordion-content-height":"var(--reka-collapsible-content-height)"},onContentFound:r[0]||(r[0]=l=>e(o).changeModelValue(e(t).value.value))},{default:d(()=>[m(a.$slots,"default")]),_:3},8,["as-child","as","force-mount","aria-labelledby","data-state","data-disabled","data-orientation"]))}}),qe=Te,xe=c({__name:"AccordionHeader",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"h3"}},setup(n){const i=n,o=O(),t=E();return b(),(a,r)=>(u(),p(e(q),{as:i.as,"as-child":i.asChild,"data-orientation":e(o).orientation,"data-state":e(t).dataState.value,"data-disabled":e(t).dataDisabled.value},{default:d(()=>[m(a.$slots,"default")]),_:3},8,["as","as-child","data-orientation","data-state","data-disabled"]))}}),Be=xe,ke=c({__name:"AccordionTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(n){const i=n,o=O(),t=E();t.triggerId||(t.triggerId=L(void 0,"reka-accordion-trigger"));function a(){const r=o.isSingle.value&&t.open.value&&!o.collapsible;t.disabled.value||r||o.changeModelValue(t.value.value)}return(r,l)=>(u(),p(e(_e),{id:e(t).triggerId,ref:e(t).currentRef,"data-reka-collection-item":"",as:i.as,"as-child":i.asChild,"aria-disabled":e(t).disabled.value||void 0,"aria-expanded":e(t).open.value||!1,"data-disabled":e(t).dataDisabled.value,"data-orientation":e(o).orientation,"data-state":e(t).dataState.value,disabled:e(t).disabled.value,onClick:a},{default:d(()=>[m(r.$slots,"default")]),_:3},8,["id","as","as-child","aria-disabled","aria-expanded","data-disabled","data-orientation","data-state","disabled"]))}}),Re=ke;const M=c({__name:"Accordion",props:{class:{},collapsible:{type:Boolean,default:!0},disabled:{type:Boolean},dir:{},orientation:{},unmountOnHide:{type:Boolean},asChild:{type:Boolean},as:{},type:{default:"single"},modelValue:{},defaultValue:{}},emits:["update:modelValue"],setup(n,{emit:i}){const o=n,t=ne(o,i);return(a,r)=>(u(),p(e(he),T(e(t),{class:o.class}),{default:d(()=>[m(a.$slots,"default")]),_:3},16,["class"]))}}),G=c({__name:"AccordionItem",props:{class:{},disabled:{type:Boolean},value:{},unmountOnHide:{type:Boolean},asChild:{type:Boolean},as:{}},setup(n){const i=n,o=S(i),t=f(()=>R(["border-b border-border","last:border-b-0"],i.class));return(a,r)=>(u(),p(e(we),T(e(o),{class:t.value}),{default:d(()=>[m(a.$slots,"default")]),_:3},16,["class"]))}}),J=c({__name:"AccordionTrigger",props:{class:{},asChild:{type:Boolean},as:{}},setup(n){const i=n,o=S(i),t=f(()=>R(["flex flex-1 items-center justify-between gap-4","text-base font-medium sm:text-sm","py-4","outline-none transition-colors","focus-visible:underline","hover:underline","[&[data-state=open]>svg]:rotate-180","disabled:pointer-events-none disabled:opacity-64"],i.class));return(a,r)=>(u(),p(e(Be),{class:"flex"},{default:d(()=>[V(e(Re),T(e(o),{class:t.value}),{default:d(()=>[m(a.$slots,"default"),V(e(ue),{icon:"hugeicons:arrow-down-01",width:"16",height:"16",class:"shrink-0 text-muted-foreground transition-transform duration-200"})]),_:3},16,["class"])]),_:3}))}}),Q=c({__name:"AccordionContent",props:{class:{},forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(n){const i=n,o=S(i),t=f(()=>R(["overflow-hidden","text-base sm:text-sm","data-[state=open]:animate-accordion-down","data-[state=closed]:animate-accordion-up"],i.class)),a=f(()=>R(["pb-4 pt-0","text-muted-foreground"]));return(r,l)=>(u(),p(e(qe),T(e(o),{class:t.value}),{default:d(()=>[oe("div",{class:ae(a.value)},[m(r.$slots,"default")],2)]),_:3},16,["class"]))}}),Je={title:"Components/Accordion",component:M,tags:["autodocs"],argTypes:{type:{control:"select",options:["single","multiple"]},collapsible:{control:"boolean"}}},B={args:{type:"single",collapsible:!0},render:n=>({components:{Accordion:M,AccordionItem:G,AccordionTrigger:J,AccordionContent:Q},setup(){return{args:n}},template:`
      <Accordion v-bind="args" class="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match your design system.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default with smooth transitions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    `})},k={args:{type:"multiple"},render:n=>({components:{Accordion:M,AccordionItem:G,AccordionTrigger:J,AccordionContent:Q},setup(){return{args:n}},template:`
      <Accordion v-bind="args" class="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
          <AccordionContent>
            Yes! With type="multiple" you can expand multiple items at once.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How does it work?</AccordionTrigger>
          <AccordionContent>
            Each item maintains its own open/closed state independently.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What about accessibility?</AccordionTrigger>
          <AccordionContent>
            Full keyboard navigation and ARIA support is included.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    `})};var F,N,P;B.parameters={...B.parameters,docs:{...(F=B.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: true
  },
  render: args => ({
    components: {
      Accordion,
      AccordionItem,
      AccordionTrigger,
      AccordionContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Accordion v-bind="args" class="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match your design system.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default with smooth transitions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    \`
  })
}`,...(P=(N=B.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var W,Y,K;k.parameters={...k.parameters,docs:{...(W=k.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: 'multiple'
  },
  render: args => ({
    components: {
      Accordion,
      AccordionItem,
      AccordionTrigger,
      AccordionContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Accordion v-bind="args" class="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
          <AccordionContent>
            Yes! With type="multiple" you can expand multiple items at once.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How does it work?</AccordionTrigger>
          <AccordionContent>
            Each item maintains its own open/closed state independently.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What about accessibility?</AccordionTrigger>
          <AccordionContent>
            Full keyboard navigation and ARIA support is included.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    \`
  })
}`,...(K=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};const Qe=["Default","Multiple"];export{B as Default,k as Multiple,Qe as __namedExportsOrder,Je as default};
