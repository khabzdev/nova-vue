import{d as y,C as A,D as x,E as f,L as N,f as t,K as b,G as _,Y,Z,S as H,c,B as J,b as B,p as S,r as a}from"./vue.esm-bundler-BitZzlT5.js";import{j as W}from"./index-I_2vzNuA-BfX5bdph.js";import{u as Q,a as X}from"./useForwardPropsEmits-DQ7cY2da.js";import{i as ee,T as oe,a as te}from"./Toggle-CiwiHDQM.js";import{i as le}from"./isValueEqualOrExist-DvmIGGK4.js";import{u as ne}from"./useForwardExpose-ClhNePUc.js";import{P as ie}from"./Primitive-B5VkAsKh.js";import{R as re}from"./RovingFocusItem-C_b6YGFL.js";import{W as K}from"./cn-gWiv5-6R-CwNMvQqb.js";import{I as m}from"./iconify-C6s_K7BB.js";import"./useFormControl-DEb_yQqi.js";import"./index-BGV6KQZa.js";import"./index-CvzWs3kq.js";import"./VisuallyHiddenInput-CSZpUBkU.js";import"./usePrimitiveElement-JmSCNQYd.js";import"./VisuallyHidden-BLZVLwmx.js";import"./createContext-Fl0g0pNq.js";import"./useDirection-C1R3tBjc.js";import"./ConfigProvider-CB94jlZd.js";import"./useSingleOrMultipleValue-ZklQkghw.js";import"./ohash.D__AXeF1-Cq3NGnZa.js";import"./RovingFocusGroup-mrBWr27v.js";import"./Collection-CCDXBU9V.js";import"./utils-D788IsuB.js";import"./getActiveElement-FUKBWQwh.js";import"./nullish-CHIgUVhi.js";import"./useId-DKCHXeQR.js";var ae=y({__name:"ToggleGroupItem",props:{value:{type:null,required:!0},disabled:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(o){const n=o,e=ee(),i=c(()=>{var l;return((l=e.disabled)==null?void 0:l.value)||n.disabled}),g=c(()=>le(e.modelValue.value,n.value)),{forwardRef:r}=ne();return(l,u)=>(A(),x(H(t(e).rovingFocus.value?t(re):t(ie)),b({"as-child":""},t(e).rovingFocus.value?{focusable:!i.value,active:g.value}:{}),{default:f(()=>[N(t(oe),b(n,{ref:t(r),disabled:i.value,"model-value":g.value,"onUpdate:modelValue":u[0]||(u[0]=s=>t(e).changeModelValue(l.value))}),{default:f(s=>[_(l.$slots,"default",Y(Z(s)))]),_:3},16,["disabled","model-value"])]),_:3},16))}}),ge=ae;const p=y({__name:"ToggleGroup",props:{variant:{default:"default"},size:{default:"default"},class:{},rovingFocus:{type:Boolean},disabled:{type:Boolean},orientation:{},dir:{},loop:{type:Boolean},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean},type:{},modelValue:{},defaultValue:{}},emits:["update:modelValue"],setup(o,{emit:n}){const e=W(["inline-flex items-center justify-center gap-1"],{variants:{variant:{default:"",outline:"rounded-lg border border-input shadow-xs/5"}},defaultVariants:{variant:"default"}}),i=o,g=Q(i,n),{variant:r,size:l,class:u}=J(i);S("toggleGroupVariant",r),S("toggleGroupSize",l);const s=c(()=>K(e({variant:r.value}),u.value));return(w,z)=>(A(),x(t(te),b(t(g),{class:s.value}),{default:f(()=>[_(w.$slots,"default")]),_:3},16,["class"]))}}),d=y({__name:"ToggleGroupItem",props:{variant:{default:void 0},size:{default:void 0},class:{},value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(o){const n=W(["inline-flex items-center justify-center gap-2","font-medium text-sm","rounded-lg","outline-none transition-colors","focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:z-10","disabled:pointer-events-none disabled:opacity-64","[&_svg]:pointer-events-none [&_svg]:shrink-0","[&_svg:not([class*='size-'])]:size-4"],{variants:{variant:{default:["bg-transparent text-foreground","hover:bg-accent hover:text-accent-foreground","data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"],outline:["bg-transparent text-foreground","hover:bg-accent hover:text-accent-foreground","data-[state=on]:bg-accent data-[state=on]:text-accent-foreground","first:rounded-l-lg first:rounded-r-none last:rounded-r-lg last:rounded-l-none [&:not(:first-child):not(:last-child)]:rounded-none","border-r border-input last:border-r-0"]},size:{default:"h-9 min-w-9 px-3",sm:"h-8 min-w-8 px-2.5",lg:"h-10 min-w-10 px-4"}},defaultVariants:{variant:"default",size:"default"}}),e=o,i=X(e),{class:g}=J(e),r=B("toggleGroupVariant"),l=B("toggleGroupSize"),u=c(()=>e.variant??(r==null?void 0:r.value)??"default"),s=c(()=>e.size??(l==null?void 0:l.value)??"default"),w=c(()=>K(n({variant:u.value,size:s.value}),g.value));return(z,ue)=>(A(),x(t(ge),b(t(i),{class:w.value}),{default:f(()=>[_(z.$slots,"default")]),_:3},16,["class"]))}}),qe={title:"Components/ToggleGroup",component:p,tags:["autodocs"]},h={render:()=>({components:{ToggleGroup:p,ToggleGroupItem:d,Icon:m},setup(){return{value:a("center")}},template:`
      <ToggleGroup v-model="value" type="single">
        <ToggleGroupItem value="left" aria-label="Align left">
          <Icon icon="hugeicons:align-left" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <Icon icon="hugeicons:align-center" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <Icon icon="hugeicons:align-right" width="16" height="16" />
        </ToggleGroupItem>
      </ToggleGroup>
    `})},v={render:()=>({components:{ToggleGroup:p,ToggleGroupItem:d,Icon:m},setup(){return{value:a("center")}},template:`
      <ToggleGroup v-model="value" type="single" variant="outline">
        <ToggleGroupItem value="left" aria-label="Align left">
          <Icon icon="hugeicons:align-left" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <Icon icon="hugeicons:align-center" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <Icon icon="hugeicons:align-right" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="justify" aria-label="Justify">
          <Icon icon="hugeicons:align-justify" width="16" height="16" />
        </ToggleGroupItem>
      </ToggleGroup>
    `})},I={render:()=>({components:{ToggleGroup:p,ToggleGroupItem:d,Icon:m},setup(){return{value:a(["bold"])}},template:`
      <ToggleGroup v-model="value" type="multiple">
        <ToggleGroupItem value="bold" aria-label="Bold">
          <Icon icon="hugeicons:text-bold" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <Icon icon="hugeicons:text-italic" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <Icon icon="hugeicons:text-underline" width="16" height="16" />
        </ToggleGroupItem>
      </ToggleGroup>
    `})},G={render:()=>({components:{ToggleGroup:p,ToggleGroupItem:d,Icon:m},setup(){const o=a("center"),n=a("center"),e=a("center");return{sm:o,md:n,lg:e}},template:`
      <div class="flex flex-col gap-4">
        <div>
          <p class="text-sm font-medium mb-2">Small</p>
          <ToggleGroup v-model="sm" type="single" size="sm" variant="outline">
            <ToggleGroupItem value="left" aria-label="Align left">
              <Icon icon="hugeicons:align-left" width="14" height="14" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <Icon icon="hugeicons:align-center" width="14" height="14" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <Icon icon="hugeicons:align-right" width="14" height="14" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Default</p>
          <ToggleGroup v-model="md" type="single" variant="outline">
            <ToggleGroupItem value="left" aria-label="Align left">
              <Icon icon="hugeicons:align-left" width="16" height="16" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <Icon icon="hugeicons:align-center" width="16" height="16" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <Icon icon="hugeicons:align-right" width="16" height="16" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Large</p>
          <ToggleGroup v-model="lg" type="single" size="lg" variant="outline">
            <ToggleGroupItem value="left" aria-label="Align left">
              <Icon icon="hugeicons:align-left" width="18" height="18" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <Icon icon="hugeicons:align-center" width="18" height="18" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <Icon icon="hugeicons:align-right" width="18" height="18" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    `})},T={render:()=>({components:{ToggleGroup:p,ToggleGroupItem:d,Icon:m},setup(){return{value:a("center")}},template:`
      <ToggleGroup v-model="value" type="single" disabled variant="outline">
        <ToggleGroupItem value="left" aria-label="Align left">
          <Icon icon="hugeicons:align-left" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <Icon icon="hugeicons:align-center" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <Icon icon="hugeicons:align-right" width="16" height="16" />
        </ToggleGroupItem>
      </ToggleGroup>
    `})};var V,C,j;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ToggleGroup,
      ToggleGroupItem,
      Icon
    },
    setup() {
      const value = ref('center');
      return {
        value
      };
    },
    template: \`
      <ToggleGroup v-model="value" type="single">
        <ToggleGroupItem value="left" aria-label="Align left">
          <Icon icon="hugeicons:align-left" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <Icon icon="hugeicons:align-center" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <Icon icon="hugeicons:align-right" width="16" height="16" />
        </ToggleGroupItem>
      </ToggleGroup>
    \`
  })
}`,...(j=(C=h.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var D,P,F;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ToggleGroup,
      ToggleGroupItem,
      Icon
    },
    setup() {
      const value = ref('center');
      return {
        value
      };
    },
    template: \`
      <ToggleGroup v-model="value" type="single" variant="outline">
        <ToggleGroupItem value="left" aria-label="Align left">
          <Icon icon="hugeicons:align-left" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <Icon icon="hugeicons:align-center" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <Icon icon="hugeicons:align-right" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="justify" aria-label="Justify">
          <Icon icon="hugeicons:align-justify" width="16" height="16" />
        </ToggleGroupItem>
      </ToggleGroup>
    \`
  })
}`,...(F=(P=v.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var R,q,E;I.parameters={...I.parameters,docs:{...(R=I.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ToggleGroup,
      ToggleGroupItem,
      Icon
    },
    setup() {
      const value = ref(['bold']);
      return {
        value
      };
    },
    template: \`
      <ToggleGroup v-model="value" type="multiple">
        <ToggleGroupItem value="bold" aria-label="Bold">
          <Icon icon="hugeicons:text-bold" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <Icon icon="hugeicons:text-italic" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <Icon icon="hugeicons:text-underline" width="16" height="16" />
        </ToggleGroupItem>
      </ToggleGroup>
    \`
  })
}`,...(E=(q=I.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var $,k,O;G.parameters={...G.parameters,docs:{...($=G.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ToggleGroup,
      ToggleGroupItem,
      Icon
    },
    setup() {
      const sm = ref('center');
      const md = ref('center');
      const lg = ref('center');
      return {
        sm,
        md,
        lg
      };
    },
    template: \`
      <div class="flex flex-col gap-4">
        <div>
          <p class="text-sm font-medium mb-2">Small</p>
          <ToggleGroup v-model="sm" type="single" size="sm" variant="outline">
            <ToggleGroupItem value="left" aria-label="Align left">
              <Icon icon="hugeicons:align-left" width="14" height="14" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <Icon icon="hugeicons:align-center" width="14" height="14" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <Icon icon="hugeicons:align-right" width="14" height="14" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Default</p>
          <ToggleGroup v-model="md" type="single" variant="outline">
            <ToggleGroupItem value="left" aria-label="Align left">
              <Icon icon="hugeicons:align-left" width="16" height="16" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <Icon icon="hugeicons:align-center" width="16" height="16" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <Icon icon="hugeicons:align-right" width="16" height="16" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Large</p>
          <ToggleGroup v-model="lg" type="single" size="lg" variant="outline">
            <ToggleGroupItem value="left" aria-label="Align left">
              <Icon icon="hugeicons:align-left" width="18" height="18" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <Icon icon="hugeicons:align-center" width="18" height="18" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <Icon icon="hugeicons:align-right" width="18" height="18" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    \`
  })
}`,...(O=(k=G.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var L,M,U;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ToggleGroup,
      ToggleGroupItem,
      Icon
    },
    setup() {
      const value = ref('center');
      return {
        value
      };
    },
    template: \`
      <ToggleGroup v-model="value" type="single" disabled variant="outline">
        <ToggleGroupItem value="left" aria-label="Align left">
          <Icon icon="hugeicons:align-left" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <Icon icon="hugeicons:align-center" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <Icon icon="hugeicons:align-right" width="16" height="16" />
        </ToggleGroupItem>
      </ToggleGroup>
    \`
  })
}`,...(U=(M=T.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};const Ee=["Default","Outline","Multiple","Sizes","Disabled"];export{h as Default,T as Disabled,I as Multiple,v as Outline,G as Sizes,Ee as __namedExportsOrder,qe as default};
