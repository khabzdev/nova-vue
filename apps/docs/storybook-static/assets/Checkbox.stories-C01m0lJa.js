import{d as _,C as l,D as c,E as m,G as O,f as e,F as G,K as V,a0 as ee,a1 as ae,S as te,c as y,L as T,B as re,r as L}from"./vue.esm-bundler-BitZzlT5.js";import{j as oe}from"./index-I_2vzNuA-BfX5bdph.js";import{c as H}from"./createContext-Fl0g0pNq.js";import{i as S}from"./nullish-CHIgUVhi.js";import{i as w}from"./isValueEqualOrExist-DvmIGGK4.js";import{u as se}from"./useFormControl-DEb_yQqi.js";import{u as U}from"./useForwardExpose-ClhNePUc.js";import{P as J}from"./Primitive-B5VkAsKh.js";import{R as de}from"./RovingFocusItem-C_b6YGFL.js";import{V as ne}from"./VisuallyHiddenInput-CSZpUBkU.js";import{a as ie}from"./index-BGV6KQZa.js";import{i as le}from"./ohash.D__AXeF1-Cq3NGnZa.js";import{P as ce}from"./Presence-V9PPYXmU.js";import{I}from"./iconify-C6s_K7BB.js";import{W as ue}from"./cn-gWiv5-6R-CwNMvQqb.js";import{w as Q}from"./Label.vue_vue_type_script_setup_true_lang-CcQM5z7h-DekRYA-r.js";import"./useId-DKCHXeQR.js";import"./Collection-CCDXBU9V.js";import"./usePrimitiveElement-JmSCNQYd.js";import"./utils-D788IsuB.js";import"./getActiveElement-FUKBWQwh.js";import"./RovingFocusGroup-mrBWr27v.js";import"./useDirection-C1R3tBjc.js";import"./ConfigProvider-CB94jlZd.js";import"./VisuallyHidden-BLZVLwmx.js";import"./index-CvzWs3kq.js";const[me]=H("CheckboxGroupRoot");function x(t){return t==="indeterminate"}function X(t){return x(t)?"indeterminate":t?"checked":"unchecked"}const[pe,fe]=H("CheckboxRoot");var be=_({inheritAttrs:!1,__name:"CheckboxRoot",props:{defaultValue:{type:[Boolean,String],required:!1},modelValue:{type:[Boolean,String,null],required:!1,default:void 0},disabled:{type:Boolean,required:!1},value:{type:null,required:!1,default:"on"},id:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["update:modelValue"],setup(t,{emit:u}){const r=t,s=u,{forwardRef:f,currentElement:b}=U(),o=me(null),n=ie(r,"modelValue",s,{defaultValue:r.defaultValue,passive:r.modelValue===void 0}),i=y(()=>(o==null?void 0:o.disabled.value)||r.disabled),d=y(()=>S(o==null?void 0:o.modelValue.value)?n.value==="indeterminate"?"indeterminate":n.value:w(o.modelValue.value,r.value));function q(){if(S(o==null?void 0:o.modelValue.value))n.value=x(n.value)?!0:!n.value;else{const a=[...o.modelValue.value||[]];if(w(a,r.value)){const B=a.findIndex(v=>le(v,r.value));a.splice(B,1)}else a.push(r.value);o.modelValue.value=a}}const Y=se(b),Z=y(()=>{var a;return r.id&&b.value?(a=document.querySelector(`[for="${r.id}"]`))==null?void 0:a.innerText:void 0});return fe({disabled:i,state:d}),(a,B)=>{var v,R;return l(),c(te((v=e(o))!=null&&v.rovingFocus.value?e(de):e(J)),V(a.$attrs,{id:a.id,ref:e(f),role:"checkbox","as-child":a.asChild,as:a.as,type:a.as==="button"?"button":void 0,"aria-checked":e(x)(d.value)?"mixed":d.value,"aria-required":a.required,"aria-label":a.$attrs["aria-label"]||Z.value,"data-state":e(X)(d.value),"data-disabled":i.value?"":void 0,disabled:i.value,focusable:(R=e(o))!=null&&R.rovingFocus.value?!i.value:void 0,onKeydown:ee(ae(()=>{},["prevent"]),["enter"]),onClick:q}),{default:m(()=>[O(a.$slots,"default",{modelValue:e(n),state:d.value}),e(Y)&&a.name&&!e(o)?(l(),c(e(ne),{key:0,type:"checkbox",checked:!!d.value,name:a.name,value:a.value,disabled:i.value,required:a.required},null,8,["checked","name","value","disabled","required"])):G("v-if",!0)]),_:3},16,["id","as-child","as","type","aria-checked","aria-required","aria-label","data-state","data-disabled","disabled","focusable","onKeydown"])}}}),ve=be,he=_({__name:"CheckboxIndicator",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){const{forwardRef:u}=U(),r=pe();return(s,f)=>(l(),c(e(ce),{present:s.forceMount||e(x)(e(r).state.value)||e(r).state.value===!0},{default:m(()=>[T(e(J),V({ref:e(u),"data-state":e(X)(e(r).state.value),"data-disabled":e(r).disabled.value?"":void 0,style:{pointerEvents:"none"},"as-child":s.asChild,as:s.as},s.$attrs),{default:m(()=>[O(s.$slots,"default")]),_:3},16,["data-state","data-disabled","as-child","as"])]),_:3},8,["present"]))}}),ke=he;const p=_({__name:"Checkbox",props:{variant:{default:"default"},class:{},checked:{type:[Boolean,String]},defaultChecked:{type:Boolean},disabled:{type:Boolean},required:{type:Boolean},name:{},value:{}},emits:["update:checked"],setup(t,{emit:u}){const r=oe(["peer relative inline-flex items-center justify-center shrink-0","rounded-md border","size-4.5 sm:size-4","ring-offset-background","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2","disabled:cursor-not-allowed disabled:opacity-64","transition-colors"],{variants:{variant:{default:["border-input bg-background","data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground","data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground","hover:border-primary/80"],destructive:["border-input bg-background","data-[state=checked]:border-destructive data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground","data-[state=indeterminate]:border-destructive data-[state=indeterminate]:bg-destructive data-[state=indeterminate]:text-destructive-foreground","hover:border-destructive/80"]}},defaultVariants:{variant:"default"}}),s=t,f=u,{variant:b,class:o}=re(s),n=y(()=>ue(r({variant:b.value}),o.value));return(i,d)=>(l(),c(e(ve),V({class:n.value,checked:t.checked,"default-checked":t.defaultChecked,disabled:t.disabled,required:t.required,name:t.name,value:t.value},i.$attrs,{"onUpdate:checked":d[0]||(d[0]=q=>f("update:checked",q))}),{default:m(()=>[T(e(ke),{class:"flex items-center justify-center text-current"},{default:m(()=>[t.checked==="indeterminate"?(l(),c(e(I),{key:0,icon:"hugeicons:minus-sign",width:"12",height:"12",class:"sm:size-2.5"})):(l(),c(e(I),{key:1,icon:"hugeicons:tick-02",width:"12",height:"12",class:"sm:size-2.5"}))]),_:1})]),_:1},16,["class","checked","default-checked","disabled","required","name","value"]))}}),Te={title:"Components/Checkbox",component:p,tags:["autodocs"],argTypes:{disabled:{control:"boolean"}}},h={render:()=>({components:{Checkbox:p},setup(){return{checked:L(!1)}},template:'<Checkbox v-model="checked" />'})},k={render:()=>({components:{Checkbox:p},setup(){return{checked:L(!0)}},template:'<Checkbox v-model="checked" />'})},g={render:()=>({components:{Checkbox:p,Label:Q},setup(){return{checked:L(!1)}},template:`
      <div class="flex items-center gap-2">
        <Checkbox id="terms" v-model="checked" />
        <Label for="terms">Accept terms and conditions</Label>
      </div>
    `})},C={render:()=>({components:{Checkbox:p,Label:Q},template:`
      <div class="flex items-center gap-2">
        <Checkbox id="disabled" disabled />
        <Label for="disabled" class="text-muted-foreground">Disabled checkbox</Label>
      </div>
    `})};var D,E,F;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox
    },
    setup() {
      const checked = ref(false);
      return {
        checked
      };
    },
    template: '<Checkbox v-model="checked" />'
  })
}`,...(F=(E=h.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var $,j,P;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox
    },
    setup() {
      const checked = ref(true);
      return {
        checked
      };
    },
    template: '<Checkbox v-model="checked" />'
  })
}`,...(P=(j=k.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var z,A,K;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox,
      Label
    },
    setup() {
      const checked = ref(false);
      return {
        checked
      };
    },
    template: \`
      <div class="flex items-center gap-2">
        <Checkbox id="terms" v-model="checked" />
        <Label for="terms">Accept terms and conditions</Label>
      </div>
    \`
  })
}`,...(K=(A=g.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var M,W,N;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox,
      Label
    },
    template: \`
      <div class="flex items-center gap-2">
        <Checkbox id="disabled" disabled />
        <Label for="disabled" class="text-muted-foreground">Disabled checkbox</Label>
      </div>
    \`
  })
}`,...(N=(W=C.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};const He=["Default","Checked","WithLabel","Disabled"];export{k as Checked,h as Default,C as Disabled,g as WithLabel,He as __namedExportsOrder,Te as default};
