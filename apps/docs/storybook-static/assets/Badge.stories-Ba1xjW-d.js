import{d as C,B as V,C as j,I as A,G as E,K as W,c as $}from"./vue.esm-bundler-BitZzlT5.js";import{j as G}from"./index-I_2vzNuA-BfX5bdph.js";import{W as I}from"./cn-gWiv5-6R-CwNMvQqb.js";const r=C({__name:"Badge",props:{variant:{default:"default"},size:{default:"default"},class:{}},setup(e){const D=G(["inline-flex items-center justify-center gap-1","font-medium text-xs","rounded-full border","transition-colors","[&_svg]:pointer-events-none [&_svg]:shrink-0","[&_svg:not([class*='size-'])]:size-3"],{variants:{variant:{default:["border-primary/20 bg-primary/10 text-primary","dark:border-primary/30 dark:bg-primary/20"],secondary:["border-secondary bg-secondary text-secondary-foreground"],destructive:["border-destructive/20 bg-destructive/10 text-destructive","dark:border-destructive/30 dark:bg-destructive/20"],success:["border-green-500/20 bg-green-500/10 text-green-700","dark:border-green-500/30 dark:bg-green-500/20 dark:text-green-400"],warning:["border-yellow-500/20 bg-yellow-500/10 text-yellow-700","dark:border-yellow-500/30 dark:bg-yellow-500/20 dark:text-yellow-400"],info:["border-blue-500/20 bg-blue-500/10 text-blue-700","dark:border-blue-500/30 dark:bg-blue-500/20 dark:text-blue-400"],outline:["border-input bg-transparent text-foreground"]},size:{default:"h-5 px-2",sm:"h-4 px-1.5 text-[10px]",lg:"h-6 px-2.5 text-sm"}},defaultVariants:{variant:"default",size:"default"}}),_=e,{variant:w,size:z,class:O}=V(_),h=$(()=>I(D({variant:w.value,size:z.value}),O.value));return(o,K)=>(j(),A("span",W({class:h.value},o.$attrs),[E(o.$slots,"default")],16))}}),q={title:"Components/Badge",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline"]}}},a={render:e=>({components:{Badge:r},setup(){return{args:e}},template:'<Badge v-bind="args">Badge</Badge>'})},t={args:{variant:"secondary"},render:e=>({components:{Badge:r},setup(){return{args:e}},template:'<Badge v-bind="args">Secondary</Badge>'})},s={args:{variant:"destructive"},render:e=>({components:{Badge:r},setup(){return{args:e}},template:'<Badge v-bind="args">Destructive</Badge>'})},n={args:{variant:"outline"},render:e=>({components:{Badge:r},setup(){return{args:e}},template:'<Badge v-bind="args">Outline</Badge>'})},d={render:()=>({components:{Badge:r},template:`
      <div class="flex gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    `})};var g,i,c;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: '<Badge v-bind="args">Badge</Badge>'
  })
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,l,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  },
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: '<Badge v-bind="args">Secondary</Badge>'
  })
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,v,B;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'destructive'
  },
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: '<Badge v-bind="args">Destructive</Badge>'
  })
}`,...(B=(v=s.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var b,f,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  },
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: '<Badge v-bind="args">Outline</Badge>'
  })
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,k,S;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div class="flex gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    \`
  })
}`,...(S=(k=d.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const F=["Default","Secondary","Destructive","Outline","AllVariants"];export{d as AllVariants,a as Default,s as Destructive,n as Outline,t as Secondary,F as __namedExportsOrder,q as default};
