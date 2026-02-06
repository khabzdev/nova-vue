import{d as h,B as b,C as g,I as v,G as E,K as x,c as m,b as K,p as q}from"./vue.esm-bundler-BitZzlT5.js";import{W as A}from"./cn-gWiv5-6R-CwNMvQqb.js";import{j as O}from"./index-I_2vzNuA-BfX5bdph.js";const s=h({__name:"InputGroup",props:{class:{default:""},disabled:{type:Boolean}},setup(e){const o=e,{class:p,disabled:t}=b(o);q("inputGroupDisabled",t);const u=m(()=>A("relative flex items-stretch","rounded-lg","has-focus-visible:ring-2 has-focus-visible:ring-ring has-focus-visible:ring-offset-1 has-focus-visible:ring-offset-background","[&>*:first-child]:rounded-l-lg [&>*:first-child]:rounded-r-none","[&>*:last-child]:rounded-r-lg [&>*:last-child]:rounded-l-none","[&>*:not(:first-child):not(:last-child)]:rounded-none","[&>*:not(:first-child)]:-ml-px",p.value));return(n,a)=>(g(),v("div",x({class:u.value},n.$attrs),[E(n.$slots,"default")],16))}}),F=["type","value","placeholder","disabled","readonly"],I=h({__name:"InputGroupInput",props:{size:{default:"default"},type:{default:"text"},modelValue:{default:""},placeholder:{default:""},disabled:{type:Boolean},readonly:{type:Boolean},class:{}},emits:["update:modelValue"],setup(e,{emit:o}){const p=O(["relative flex w-full min-w-0","text-base sm:text-sm","placeholder:text-muted-foreground","rounded-lg border border-input","px-[calc(theme(spacing.3)-1px)] py-2","bg-popover text-foreground","shadow-xs/5","dark:bg-input/32","outline-none","focus:z-10 focus:border-ring","hover:bg-accent/50 dark:hover:bg-input/64","focus:bg-popover dark:focus:bg-input/32","disabled:pointer-events-none disabled:opacity-64 disabled:shadow-none","aria-invalid:border-destructive aria-invalid:z-10"],{variants:{size:{default:"h-9 sm:h-8",sm:"h-8 px-[calc(theme(spacing[2.5])-1px)] sm:h-7",lg:"h-10 px-[calc(theme(spacing[3.5])-1px)] sm:h-9"}},defaultVariants:{size:"default"}}),t=e,u=o,{size:n,class:a}=b(t),r=K("inputGroupDisabled"),w=m(()=>A(p({size:n.value}),a.value)),P=m(()=>t.disabled||(r==null?void 0:r.value));function R(f){const y=f.target;u("update:modelValue",y.value)}return(f,y)=>(g(),v("input",x({class:w.value,type:e.type,value:e.modelValue,placeholder:e.placeholder,disabled:P.value,readonly:e.readonly},f.$attrs,{onInput:R}),null,16,F))}}),G=h({__name:"InputGroupAddon",props:{size:{default:"default"},class:{}},setup(e){const o=O(["relative inline-flex items-center justify-center shrink-0","text-sm text-muted-foreground","rounded-lg border border-input","px-3","bg-muted","dark:bg-input/48","[&_svg]:size-4 [&_svg]:shrink-0"],{variants:{size:{default:"h-9 sm:h-8",sm:"h-8 px-2.5 sm:h-7",lg:"h-10 px-3.5 sm:h-9"}},defaultVariants:{size:"default"}}),p=e,{size:t,class:u}=b(p),n=K("inputGroupDisabled"),a=m(()=>A(o({size:t.value}),(n==null?void 0:n.value)&&"opacity-64",u.value));return(r,w)=>(g(),v("span",x({class:a.value},r.$attrs),[E(r.$slots,"default")],16))}}),M={title:"Components/InputGroup",component:s,tags:["autodocs"]},d={render:()=>({components:{InputGroup:s,InputGroupInput:I,InputGroupAddon:G},template:`
      <InputGroup class="w-full max-w-sm">
        <InputGroupAddon>https://</InputGroupAddon>
        <InputGroupInput placeholder="example.com" />
      </InputGroup>
    `})},l={render:()=>({components:{InputGroup:s,InputGroupInput:I,InputGroupAddon:G},template:`
      <InputGroup class="w-full max-w-sm">
        <InputGroupInput placeholder="Username" />
        <InputGroupAddon>@gmail.com</InputGroupAddon>
      </InputGroup>
    `})},c={render:()=>({components:{InputGroup:s,InputGroupInput:I,InputGroupAddon:G},template:`
      <InputGroup class="w-full max-w-sm">
        <InputGroupAddon>$</InputGroupAddon>
        <InputGroupInput placeholder="0.00" type="number" />
        <InputGroupAddon>USD</InputGroupAddon>
      </InputGroup>
    `})},i={render:()=>({components:{InputGroup:s,InputGroupInput:I,InputGroupAddon:G},template:`
      <InputGroup class="w-full max-w-sm">
        <InputGroupAddon>https://</InputGroupAddon>
        <InputGroupInput placeholder="example.com" disabled />
      </InputGroup>
    `})};var z,S,_;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      InputGroup,
      InputGroupInput,
      InputGroupAddon
    },
    template: \`
      <InputGroup class="w-full max-w-sm">
        <InputGroupAddon>https://</InputGroupAddon>
        <InputGroupInput placeholder="example.com" />
      </InputGroup>
    \`
  })
}`,...(_=(S=d.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var k,B,D;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => ({
    components: {
      InputGroup,
      InputGroupInput,
      InputGroupAddon
    },
    template: \`
      <InputGroup class="w-full max-w-sm">
        <InputGroupInput placeholder="Username" />
        <InputGroupAddon>@gmail.com</InputGroupAddon>
      </InputGroup>
    \`
  })
}`,...(D=(B=l.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var V,$,C;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => ({
    components: {
      InputGroup,
      InputGroupInput,
      InputGroupAddon
    },
    template: \`
      <InputGroup class="w-full max-w-sm">
        <InputGroupAddon>$</InputGroupAddon>
        <InputGroupInput placeholder="0.00" type="number" />
        <InputGroupAddon>USD</InputGroupAddon>
      </InputGroup>
    \`
  })
}`,...(C=($=c.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var U,W,j;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => ({
    components: {
      InputGroup,
      InputGroupInput,
      InputGroupAddon
    },
    template: \`
      <InputGroup class="w-full max-w-sm">
        <InputGroupAddon>https://</InputGroupAddon>
        <InputGroupInput placeholder="example.com" disabled />
      </InputGroup>
    \`
  })
}`,...(j=(W=i.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};const N=["Default","WithSuffix","BothSides","Disabled"];export{c as BothSides,d as Default,i as Disabled,l as WithSuffix,N as __namedExportsOrder,M as default};
