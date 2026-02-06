import{d as y,B as M,C as b,D as v,E as q,G as W,f as a,F as G,K as P,a0 as I,a1 as O,c as S,L as U,H as J,r as C}from"./vue.esm-bundler-BitZzlT5.js";import{j as _}from"./index-I_2vzNuA-BfX5bdph.js";import{c as Q}from"./createContext-Fl0g0pNq.js";import{u as X}from"./useFormControl-DEb_yQqi.js";import{u as j}from"./useForwardExpose-ClhNePUc.js";import{P as A}from"./Primitive-B5VkAsKh.js";import{V as Y}from"./VisuallyHiddenInput-CSZpUBkU.js";import{a as Z}from"./index-BGV6KQZa.js";import{W as ee}from"./cn-gWiv5-6R-CwNMvQqb.js";import{w as H}from"./Label.vue_vue_type_script_setup_true_lang-CcQM5z7h-DekRYA-r.js";import"./usePrimitiveElement-JmSCNQYd.js";import"./VisuallyHidden-BLZVLwmx.js";import"./index-CvzWs3kq.js";const[ae,te]=Q("SwitchRoot");var re=y({__name:"SwitchRoot",props:{defaultValue:{type:Boolean,required:!1},modelValue:{type:[Boolean,null],required:!1,default:void 0},disabled:{type:Boolean,required:!1},id:{type:String,required:!1},value:{type:String,required:!1,default:"on"},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["update:modelValue"],setup(t,{emit:l}){const r=t,i=l,{disabled:s}=M(r),d=Z(r,"modelValue",i,{defaultValue:r.defaultValue,passive:r.modelValue===void 0});function o(){s.value||(d.value=!d.value)}const{forwardRef:c,currentElement:u}=j(),k=X(u),g=S(()=>{var e;return r.id&&u.value?(e=document.querySelector(`[for="${r.id}"]`))==null?void 0:e.innerText:void 0});return te({modelValue:d,toggleCheck:o,disabled:s}),(e,w)=>(b(),v(a(A),P(e.$attrs,{id:e.id,ref:a(c),role:"switch",type:e.as==="button"?"button":void 0,value:e.value,"aria-label":e.$attrs["aria-label"]||g.value,"aria-checked":a(d),"aria-required":e.required,"data-state":a(d)?"checked":"unchecked","data-disabled":a(s)?"":void 0,"as-child":e.asChild,as:e.as,disabled:a(s),onClick:o,onKeydown:I(O(o,["prevent"]),["enter"])}),{default:q(()=>[W(e.$slots,"default",{modelValue:a(d)}),a(k)&&e.name?(b(),v(a(Y),{key:0,type:"checkbox",name:e.name,disabled:a(s),required:e.required,value:e.value,checked:!!a(d)},null,8,["name","disabled","required","value","checked"])):G("v-if",!0)]),_:3},16,["id","type","value","aria-label","aria-checked","aria-required","data-state","data-disabled","as-child","as","disabled","onKeydown"]))}}),se=re,de=y({__name:"SwitchThumb",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){const l=ae();return j(),(r,i)=>{var s;return b(),v(a(A),{"data-state":(s=a(l).modelValue)!=null&&s.value?"checked":"unchecked","data-disabled":a(l).disabled.value?"":void 0,"as-child":r.asChild,as:r.as},{default:q(()=>[W(r.$slots,"default")]),_:3},8,["data-state","data-disabled","as-child","as"])}}}),le=de;const n=y({__name:"Switch",props:{variant:{default:"default"},size:{default:"default"},class:{},checked:{type:Boolean},defaultChecked:{type:Boolean},disabled:{type:Boolean},required:{type:Boolean},name:{},value:{}},emits:["update:checked"],setup(t,{emit:l}){const r=_(["peer relative inline-flex shrink-0 cursor-pointer items-center","rounded-full border-2 border-transparent","transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background","disabled:cursor-not-allowed disabled:opacity-64"],{variants:{variant:{default:["bg-input","data-[state=checked]:bg-primary"],destructive:["bg-input","data-[state=checked]:bg-destructive"],success:["bg-input","data-[state=checked]:bg-green-500 dark:data-[state=checked]:bg-green-600"]},size:{default:"h-6 w-11",sm:"h-5 w-9",lg:"h-7 w-[3.25rem]"}},defaultVariants:{variant:"default",size:"default"}}),i=_(["pointer-events-none block rounded-full bg-background shadow-lg ring-0","transition-transform"],{variants:{size:{default:"size-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",sm:"size-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",lg:"size-6 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0"}},defaultVariants:{size:"default"}}),s=t,d=l,{variant:o,size:c,class:u}=M(s),k=S(()=>ee(r({variant:o.value,size:c.value}),u.value)),g=S(()=>i({size:c.value}));return(e,w)=>(b(),v(a(se),P({class:k.value,checked:t.checked,"default-checked":t.defaultChecked,disabled:t.disabled,required:t.required,name:t.name,value:t.value},e.$attrs,{"onUpdate:checked":w[0]||(w[0]=N=>d("update:checked",N))}),{default:q(()=>[U(a(le),{class:J(g.value)},null,8,["class"])]),_:1},16,["class","checked","default-checked","disabled","required","name","value"]))}}),we={title:"Components/Switch",component:n,tags:["autodocs"],argTypes:{disabled:{control:"boolean"}}},p={render:()=>({components:{Switch:n},setup(){return{checked:C(!1)}},template:'<Switch v-model="checked" />'})},m={render:()=>({components:{Switch:n},setup(){return{checked:C(!0)}},template:'<Switch v-model="checked" />'})},f={render:()=>({components:{Switch:n,Label:H},setup(){return{enabled:C(!1)}},template:`
      <div class="flex items-center gap-2">
        <Switch id="airplane" v-model="enabled" />
        <Label for="airplane">Airplane Mode</Label>
      </div>
    `})},h={render:()=>({components:{Switch:n,Label:H},template:`
      <div class="flex items-center gap-2">
        <Switch id="disabled" disabled />
        <Label for="disabled" class="text-muted-foreground">Disabled</Label>
      </div>
    `})};var V,L,B;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Switch
    },
    setup() {
      const checked = ref(false);
      return {
        checked
      };
    },
    template: '<Switch v-model="checked" />'
  })
}`,...(B=(L=p.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var z,x,R;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Switch
    },
    setup() {
      const checked = ref(true);
      return {
        checked
      };
    },
    template: '<Switch v-model="checked" />'
  })
}`,...(R=(x=m.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var D,T,$;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Switch,
      Label
    },
    setup() {
      const enabled = ref(false);
      return {
        enabled
      };
    },
    template: \`
      <div class="flex items-center gap-2">
        <Switch id="airplane" v-model="enabled" />
        <Label for="airplane">Airplane Mode</Label>
      </div>
    \`
  })
}`,...($=(T=f.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var E,F,K;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Switch,
      Label
    },
    template: \`
      <div class="flex items-center gap-2">
        <Switch id="disabled" disabled />
        <Label for="disabled" class="text-muted-foreground">Disabled</Label>
      </div>
    \`
  })
}`,...(K=(F=h.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};const Se=["Default","Checked","WithLabel","Disabled"];export{m as Checked,p as Default,h as Disabled,f as WithLabel,Se as __namedExportsOrder,we as default};
