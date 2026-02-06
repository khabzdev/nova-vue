import{d as O,B as j,C as P,D as q,E as F,G,K,f as p,c as R,r as o}from"./vue.esm-bundler-BitZzlT5.js";import{j as $}from"./index-I_2vzNuA-BfX5bdph.js";import{u as A}from"./useForwardPropsEmits-DQ7cY2da.js";import{T as H}from"./Toggle-CiwiHDQM.js";import{W as J}from"./cn-gWiv5-6R-CwNMvQqb.js";import{I as s}from"./iconify-C6s_K7BB.js";import"./useFormControl-DEb_yQqi.js";import"./index-BGV6KQZa.js";import"./index-CvzWs3kq.js";import"./useForwardExpose-ClhNePUc.js";import"./Primitive-B5VkAsKh.js";import"./VisuallyHiddenInput-CSZpUBkU.js";import"./usePrimitiveElement-JmSCNQYd.js";import"./VisuallyHidden-BLZVLwmx.js";import"./createContext-Fl0g0pNq.js";import"./useDirection-C1R3tBjc.js";import"./ConfigProvider-CB94jlZd.js";import"./useSingleOrMultipleValue-ZklQkghw.js";import"./isValueEqualOrExist-DvmIGGK4.js";import"./nullish-CHIgUVhi.js";import"./ohash.D__AXeF1-Cq3NGnZa.js";import"./RovingFocusGroup-mrBWr27v.js";import"./Collection-CCDXBU9V.js";import"./utils-D788IsuB.js";import"./getActiveElement-FUKBWQwh.js";const n=O({__name:"Toggle",props:{variant:{default:"default"},size:{default:"default"},class:{},defaultValue:{type:Boolean},modelValue:{type:[Boolean,null]},disabled:{type:Boolean},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:t}){const d=$(["inline-flex items-center justify-center gap-2","font-medium text-sm","rounded-lg","outline-none transition-colors","focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background","disabled:pointer-events-none disabled:opacity-64","[&_svg]:pointer-events-none [&_svg]:shrink-0","[&_svg:not([class*='size-'])]:size-4"],{variants:{variant:{default:["bg-transparent text-foreground","hover:bg-accent hover:text-accent-foreground","data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"],outline:["border border-input bg-transparent text-foreground","shadow-xs/5","hover:bg-accent hover:text-accent-foreground","data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"]},size:{default:"h-9 px-3",sm:"h-8 px-2.5",lg:"h-10 px-4"}},defaultVariants:{variant:"default",size:"default"}}),c=e,S=A(c,t),{variant:C,size:V,class:k}=j(c),W=R(()=>J(d({variant:C.value,size:V.value}),k.value));return(E,L)=>(P(),q(p(H),K(p(S),{class:W.value}),{default:F(()=>[G(E.$slots,"default")]),_:3},16,["class"]))}}),be={title:"Components/Toggle",component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outline"]},size:{control:"select",options:["default","sm","lg"]},disabled:{control:"boolean"}}},a={render:e=>({components:{Toggle:n,Icon:s},setup(){const t=o(!1);return{args:e,pressed:t}},template:`
      <Toggle v-bind="args" v-model="pressed" aria-label="Toggle bold">
        <Icon icon="hugeicons:text-bold" width="16" height="16" />
      </Toggle>
    `})},l={render:()=>({components:{Toggle:n,Icon:s},setup(){return{pressed:o(!1)}},template:`
      <Toggle v-model="pressed" aria-label="Toggle italic">
        <Icon icon="hugeicons:text-italic" width="16" height="16" />
        Italic
      </Toggle>
    `})},r={render:()=>({components:{Toggle:n,Icon:s},setup(){return{pressed:o(!1)}},template:`
      <Toggle v-model="pressed" variant="outline" aria-label="Toggle underline">
        <Icon icon="hugeicons:text-underline" width="16" height="16" />
      </Toggle>
    `})},i={render:()=>({components:{Toggle:n,Icon:s},setup(){const e=o(!1),t=o(!0),d=o(!1);return{sm:e,md:t,lg:d}},template:`
      <div class="flex items-center gap-4">
        <Toggle v-model="sm" size="sm" aria-label="Toggle small">
          <Icon icon="hugeicons:text-bold" width="14" height="14" />
        </Toggle>
        <Toggle v-model="md" aria-label="Toggle default">
          <Icon icon="hugeicons:text-bold" width="16" height="16" />
        </Toggle>
        <Toggle v-model="lg" size="lg" aria-label="Toggle large">
          <Icon icon="hugeicons:text-bold" width="18" height="18" />
        </Toggle>
      </div>
    `})},g={render:()=>({components:{Toggle:n,Icon:s},template:`
      <div class="flex items-center gap-4">
        <Toggle disabled aria-label="Disabled toggle">
          <Icon icon="hugeicons:text-bold" width="16" height="16" />
        </Toggle>
        <Toggle disabled default-value aria-label="Disabled pressed toggle">
          <Icon icon="hugeicons:text-bold" width="16" height="16" />
        </Toggle>
      </div>
    `})};var m,u,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Toggle,
      Icon
    },
    setup() {
      const pressed = ref(false);
      return {
        args,
        pressed
      };
    },
    template: \`
      <Toggle v-bind="args" v-model="pressed" aria-label="Toggle bold">
        <Icon icon="hugeicons:text-bold" width="16" height="16" />
      </Toggle>
    \`
  })
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,T,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Toggle,
      Icon
    },
    setup() {
      const pressed = ref(false);
      return {
        pressed
      };
    },
    template: \`
      <Toggle v-model="pressed" aria-label="Toggle italic">
        <Icon icon="hugeicons:text-italic" width="16" height="16" />
        Italic
      </Toggle>
    \`
  })
}`,...(b=(T=l.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var v,x,I;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Toggle,
      Icon
    },
    setup() {
      const pressed = ref(false);
      return {
        pressed
      };
    },
    template: \`
      <Toggle v-model="pressed" variant="outline" aria-label="Toggle underline">
        <Icon icon="hugeicons:text-underline" width="16" height="16" />
      </Toggle>
    \`
  })
}`,...(I=(x=r.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var w,z,D;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Toggle,
      Icon
    },
    setup() {
      const sm = ref(false);
      const md = ref(true);
      const lg = ref(false);
      return {
        sm,
        md,
        lg
      };
    },
    template: \`
      <div class="flex items-center gap-4">
        <Toggle v-model="sm" size="sm" aria-label="Toggle small">
          <Icon icon="hugeicons:text-bold" width="14" height="14" />
        </Toggle>
        <Toggle v-model="md" aria-label="Toggle default">
          <Icon icon="hugeicons:text-bold" width="16" height="16" />
        </Toggle>
        <Toggle v-model="lg" size="lg" aria-label="Toggle large">
          <Icon icon="hugeicons:text-bold" width="18" height="18" />
        </Toggle>
      </div>
    \`
  })
}`,...(D=(z=i.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var _,y,B;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Toggle,
      Icon
    },
    template: \`
      <div class="flex items-center gap-4">
        <Toggle disabled aria-label="Disabled toggle">
          <Icon icon="hugeicons:text-bold" width="16" height="16" />
        </Toggle>
        <Toggle disabled default-value aria-label="Disabled pressed toggle">
          <Icon icon="hugeicons:text-bold" width="16" height="16" />
        </Toggle>
      </div>
    \`
  })
}`,...(B=(y=g.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const ve=["Default","WithText","Outline","Sizes","Disabled"];export{a as Default,g as Disabled,r as Outline,i as Sizes,l as WithText,ve as __namedExportsOrder,be as default};
