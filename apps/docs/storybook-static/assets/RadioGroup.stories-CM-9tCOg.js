import{d as y,B as S,C as g,D as G,E as v,G as q,f as e,F as Y,K as I,a1 as Q,c as L,L as C,a0 as te,r as h,J as re,H as ie}from"./vue.esm-bundler-BitZzlT5.js";import{u as le,a as de}from"./useForwardPropsEmits-DQ7cY2da.js";import{c as X}from"./createContext-Fl0g0pNq.js";import{u as se}from"./useDirection-C1R3tBjc.js";import{u as Z}from"./useFormControl-DEb_yQqi.js";import{u as z}from"./useForwardExpose-ClhNePUc.js";import{P as D}from"./Primitive-B5VkAsKh.js";import{R as ne}from"./RovingFocusGroup-mrBWr27v.js";import{V as ee}from"./VisuallyHiddenInput-CSZpUBkU.js";import{a as ae,c as E}from"./index-BGV6KQZa.js";import{R as ue}from"./RovingFocusItem-C_b6YGFL.js";import{h as pe}from"./handleAndDispatchCustomEvent-ChOKVcqp.js";import{i as me}from"./ohash.D__AXeF1-Cq3NGnZa.js";import{P as ce}from"./Presence-V9PPYXmU.js";import{W as oe}from"./cn-gWiv5-6R-CwNMvQqb.js";import{j as T}from"./index-I_2vzNuA-BfX5bdph.js";import{w as B}from"./Label.vue_vue_type_script_setup_true_lang-CcQM5z7h-DekRYA-r.js";import"./ConfigProvider-CB94jlZd.js";import"./Collection-CCDXBU9V.js";import"./usePrimitiveElement-JmSCNQYd.js";import"./utils-D788IsuB.js";import"./getActiveElement-FUKBWQwh.js";import"./VisuallyHidden-BLZVLwmx.js";import"./index-CvzWs3kq.js";import"./useId-DKCHXeQR.js";const fe="radio.select";function ve(r,i,a){pe(fe,a,{originalEvent:r,value:i})}var be=y({__name:"Radio",props:{id:{type:String,required:!1},value:{type:null,required:!1},disabled:{type:Boolean,required:!1,default:!1},checked:{type:Boolean,required:!1,default:void 0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["update:checked","select"],setup(r,{emit:i}){const a=r,t=i,d=ae(a,"checked",t,{passive:a.checked===void 0}),{value:m}=S(a),{forwardRef:l,currentElement:s}=z(),c=Z(s),u=L(()=>{var o;return a.id&&s.value?((o=document.querySelector(`[for="${a.id}"]`))==null?void 0:o.innerText)??a.value:void 0});function p(o){a.disabled||ve(o,a.value,f=>{t("select",f),!(f!=null&&f.defaultPrevented)&&(d.value=!0,c.value&&f.stopPropagation())})}return(o,f)=>(g(),G(e(D),I(o.$attrs,{id:o.id,ref:e(l),role:"radio",type:o.as==="button"?"button":void 0,as:o.as,"aria-checked":e(d),"aria-label":u.value,"as-child":o.asChild,disabled:o.disabled?"":void 0,"data-state":e(d)?"checked":"unchecked","data-disabled":o.disabled?"":void 0,value:e(m),required:o.required,name:o.name,onClick:Q(p,["stop"])}),{default:v(()=>[q(o.$slots,"default",{checked:e(d)}),e(c)&&o.name?(g(),G(e(ee),{key:0,type:"radio",tabindex:"-1",value:e(m),checked:!!e(d),name:o.name,disabled:o.disabled,required:o.required},null,8,["value","checked","name","disabled","required"])):Y("v-if",!0)]),_:3},16,["id","type","as","aria-checked","aria-label","as-child","disabled","data-state","data-disabled","value","required","name"]))}}),Re=be;const[ge,Ge]=X("RadioGroupRoot");var Le=y({__name:"RadioGroupRoot",props:{modelValue:{type:null,required:!1},defaultValue:{type:null,required:!1},disabled:{type:Boolean,required:!1,default:!1},orientation:{type:String,required:!1,default:void 0},dir:{type:String,required:!1},loop:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},name:{type:String,required:!1},required:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(r,{emit:i}){const a=r,t=i,{forwardRef:d,currentElement:m}=z(),l=ae(a,"modelValue",t,{defaultValue:a.defaultValue,passive:a.modelValue===void 0}),{disabled:s,loop:c,orientation:u,name:p,required:o,dir:f}=S(a),n=se(f),b=Z(m);return Ge({modelValue:l,changeModelValue:R=>{l.value=R},disabled:s,loop:c,orientation:u,name:p==null?void 0:p.value,required:o}),(R,ke)=>(g(),G(e(ne),{"as-child":"",orientation:e(u),dir:e(n),loop:e(c)},{default:v(()=>[C(e(D),{ref:e(d),role:"radiogroup","data-disabled":e(s)?"":void 0,"as-child":R.asChild,as:R.as,"aria-orientation":e(u),"aria-required":e(o),dir:e(n)},{default:v(()=>[q(R.$slots,"default",{modelValue:e(l)}),e(b)&&e(p)?(g(),G(e(ee),{key:0,required:e(o),disabled:e(s),value:e(l),name:e(p)},null,8,["required","disabled","value","name"])):Y("v-if",!0)]),_:3},8,["data-disabled","as-child","as","aria-orientation","aria-required","dir"])]),_:3},8,["orientation","dir","loop"]))}}),he=Le;const[ye,qe]=X("RadioGroupItem");var Ie=y({inheritAttrs:!1,__name:"RadioGroupItem",props:{id:{type:String,required:!1},value:{type:null,required:!1},disabled:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["select"],setup(r,{emit:i}){const a=r,t=i,{forwardRef:d,currentElement:m}=z(),l=ge(),s=L(()=>l.disabled.value||a.disabled),c=L(()=>l.required.value||a.required),u=L(()=>{var n;return me((n=l.modelValue)==null?void 0:n.value,a.value)});qe({disabled:s,checked:u});const p=h(!1),o=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];E("keydown",n=>{o.includes(n.key)&&(p.value=!0)}),E("keyup",()=>{p.value=!1});function f(){setTimeout(()=>{var n;p.value&&((n=m.value)==null||n.click())},0)}return(n,b)=>(g(),G(e(ue),{checked:u.value,disabled:s.value,"as-child":"",focusable:!s.value,active:u.value},{default:v(()=>[C(Re,I({...n.$attrs,...a},{ref:e(d),checked:u.value,required:c.value,disabled:s.value,"onUpdate:checked":b[0]||(b[0]=R=>e(l).changeModelValue(n.value)),onSelect:b[1]||(b[1]=R=>t("select",R)),onKeydown:b[2]||(b[2]=te(Q(()=>{},["prevent"]),["enter"])),onFocus:f}),{default:v(()=>[q(n.$slots,"default",{checked:u.value,required:c.value,disabled:s.value})]),_:3},16,["checked","required","disabled"])]),_:3},8,["checked","disabled","focusable","active"]))}}),_e=Ie,we=y({__name:"RadioGroupIndicator",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(r){const{forwardRef:i}=z(),a=ye();return(t,d)=>(g(),G(e(ce),{present:t.forceMount||e(a).checked.value},{default:v(()=>[C(e(D),I({ref:e(i),"data-state":e(a).checked.value?"checked":"unchecked","data-disabled":e(a).disabled.value?"":void 0,"as-child":t.asChild,as:t.as},t.$attrs),{default:v(()=>[q(t.$slots,"default")]),_:3},16,["data-state","data-disabled","as-child","as"])]),_:3},8,["present"]))}}),xe=we;const _=y({__name:"RadioGroup",props:{class:{},modelValue:{},defaultValue:{},disabled:{type:Boolean},orientation:{},dir:{},loop:{type:Boolean},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean}},emits:["update:modelValue"],setup(r,{emit:i}){const a=r,t=le(a,i),d=L(()=>oe("grid gap-2",a.class));return(m,l)=>(g(),G(e(he),I(e(t),{class:d.value}),{default:v(()=>[q(m.$slots,"default")]),_:3},16,["class"]))}}),V=y({__name:"RadioGroupItem",props:{variant:{default:"default"},size:{default:"default"},class:{},id:{},value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean}},setup(r){const i=T(["peer aspect-square relative inline-flex items-center justify-center shrink-0","rounded-full border","ring-offset-background","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2","disabled:cursor-not-allowed disabled:opacity-64","transition-colors"],{variants:{variant:{default:["border-input bg-background","data-[state=checked]:border-primary","hover:border-primary/80"],destructive:["border-input bg-background","data-[state=checked]:border-destructive","hover:border-destructive/80"]},size:{default:"size-4",sm:"size-3.5",lg:"size-5"}},defaultVariants:{variant:"default",size:"default"}}),a=T(["rounded-full"],{variants:{variant:{default:"bg-primary",destructive:"bg-destructive"},size:{default:"size-2",sm:"size-1.5",lg:"size-2.5"}},defaultVariants:{variant:"default",size:"default"}}),t=r,d=de(t),{variant:m,size:l,class:s}=S(t),c=L(()=>oe(i({variant:m.value,size:l.value}),s.value)),u=L(()=>a({variant:m.value,size:l.value}));return(p,o)=>(g(),G(e(_e),I(e(d),{class:c.value}),{default:v(()=>[C(e(xe),{class:"flex items-center justify-center"},{default:v(()=>[re("span",{class:ie(u.value)},null,2)]),_:1})]),_:1},16,["class"]))}}),ea={title:"Components/RadioGroup",component:_,tags:["autodocs"]},w={render:()=>({components:{RadioGroup:_,RadioGroupItem:V,Label:B},setup(){return{value:h("option-one")}},template:`
      <RadioGroup v-model="value">
        <div class="flex items-center gap-2">
          <RadioGroupItem id="option-one" value="option-one" />
          <Label for="option-one">Option One</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem id="option-two" value="option-two" />
          <Label for="option-two">Option Two</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem id="option-three" value="option-three" />
          <Label for="option-three">Option Three</Label>
        </div>
      </RadioGroup>
    `})},x={render:()=>({components:{RadioGroup:_,RadioGroupItem:V,Label:B},setup(){const r=h("sm-1"),i=h("md-1"),a=h("lg-1");return{sm:r,md:i,lg:a}},template:`
      <div class="flex flex-col gap-6">
        <div>
          <p class="text-sm font-medium mb-2">Small</p>
          <RadioGroup v-model="sm">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="sm-1" value="sm-1" size="sm" />
              <Label for="sm-1" class="text-sm">Option One</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="sm-2" value="sm-2" size="sm" />
              <Label for="sm-2" class="text-sm">Option Two</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <p class="text-sm font-medium mb-2">Default</p>
          <RadioGroup v-model="md">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="md-1" value="md-1" />
              <Label for="md-1">Option One</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="md-2" value="md-2" />
              <Label for="md-2">Option Two</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <p class="text-sm font-medium mb-2">Large</p>
          <RadioGroup v-model="lg">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="lg-1" value="lg-1" size="lg" />
              <Label for="lg-1">Option One</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="lg-2" value="lg-2" size="lg" />
              <Label for="lg-2">Option Two</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    `})},k={render:()=>({components:{RadioGroup:_,RadioGroupItem:V,Label:B},setup(){return{value:h("comfortable")}},template:`
      <RadioGroup v-model="value" orientation="horizontal" class="flex flex-row gap-4">
        <div class="flex items-center gap-2">
          <RadioGroupItem id="default" value="default" />
          <Label for="default">Default</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem id="comfortable" value="comfortable" />
          <Label for="comfortable">Comfortable</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem id="compact" value="compact" />
          <Label for="compact">Compact</Label>
        </div>
      </RadioGroup>
    `})},O={render:()=>({components:{RadioGroup:_,RadioGroupItem:V,Label:B},setup(){return{value:h("option-one")}},template:`
      <RadioGroup v-model="value" disabled>
        <div class="flex items-center gap-2">
          <RadioGroupItem id="disabled-1" value="option-one" />
          <Label for="disabled-1" class="opacity-64">Option One</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem id="disabled-2" value="option-two" />
          <Label for="disabled-2" class="opacity-64">Option Two</Label>
        </div>
      </RadioGroup>
    `})};var F,P,$;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => ({
    components: {
      RadioGroup,
      RadioGroupItem,
      Label
    },
    setup() {
      const value = ref('option-one');
      return {
        value
      };
    },
    template: \`
      <RadioGroup v-model="value">
        <div class="flex items-center gap-2">
          <RadioGroupItem id="option-one" value="option-one" />
          <Label for="option-one">Option One</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem id="option-two" value="option-two" />
          <Label for="option-two">Option Two</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem id="option-three" value="option-three" />
          <Label for="option-three">Option Three</Label>
        </div>
      </RadioGroup>
    \`
  })
}`,...($=(P=w.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var A,M,j;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      RadioGroup,
      RadioGroupItem,
      Label
    },
    setup() {
      const sm = ref('sm-1');
      const md = ref('md-1');
      const lg = ref('lg-1');
      return {
        sm,
        md,
        lg
      };
    },
    template: \`
      <div class="flex flex-col gap-6">
        <div>
          <p class="text-sm font-medium mb-2">Small</p>
          <RadioGroup v-model="sm">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="sm-1" value="sm-1" size="sm" />
              <Label for="sm-1" class="text-sm">Option One</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="sm-2" value="sm-2" size="sm" />
              <Label for="sm-2" class="text-sm">Option Two</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <p class="text-sm font-medium mb-2">Default</p>
          <RadioGroup v-model="md">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="md-1" value="md-1" />
              <Label for="md-1">Option One</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="md-2" value="md-2" />
              <Label for="md-2">Option Two</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <p class="text-sm font-medium mb-2">Large</p>
          <RadioGroup v-model="lg">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="lg-1" value="lg-1" size="lg" />
              <Label for="lg-1">Option One</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="lg-2" value="lg-2" size="lg" />
              <Label for="lg-2">Option Two</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    \`
  })
}`,...(j=(M=x.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var K,H,N;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => ({
    components: {
      RadioGroup,
      RadioGroupItem,
      Label
    },
    setup() {
      const value = ref('comfortable');
      return {
        value
      };
    },
    template: \`
      <RadioGroup v-model="value" orientation="horizontal" class="flex flex-row gap-4">
        <div class="flex items-center gap-2">
          <RadioGroupItem id="default" value="default" />
          <Label for="default">Default</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem id="comfortable" value="comfortable" />
          <Label for="comfortable">Comfortable</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem id="compact" value="compact" />
          <Label for="compact">Compact</Label>
        </div>
      </RadioGroup>
    \`
  })
}`,...(N=(H=k.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var W,U,J;O.parameters={...O.parameters,docs:{...(W=O.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => ({
    components: {
      RadioGroup,
      RadioGroupItem,
      Label
    },
    setup() {
      const value = ref('option-one');
      return {
        value
      };
    },
    template: \`
      <RadioGroup v-model="value" disabled>
        <div class="flex items-center gap-2">
          <RadioGroupItem id="disabled-1" value="option-one" />
          <Label for="disabled-1" class="opacity-64">Option One</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem id="disabled-2" value="option-two" />
          <Label for="disabled-2" class="opacity-64">Option Two</Label>
        </div>
      </RadioGroup>
    \`
  })
}`,...(J=(U=O.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};const aa=["Default","Sizes","Horizontal","Disabled"];export{w as Default,O as Disabled,k as Horizontal,x as Sizes,aa as __namedExportsOrder,ea as default};
