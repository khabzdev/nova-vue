import{M as e}from"./Button.vue_vue_type_script_setup_true_lang-DIJKvcpn-y-8jE4mo.js";import"./vue.esm-bundler-BitZzlT5.js";import"./index-I_2vzNuA-BfX5bdph.js";import"./cn-gWiv5-6R-CwNMvQqb.js";import"./index-BcdZTg5d.js";import"./index-CvzWs3kq.js";const Z={title:"Components/Button",component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","outline","destructive-outline","secondary","ghost","link"]},size:{control:"select",options:["xs","sm","default","lg","xl","icon","icon-xs","icon-sm","icon-lg","icon-xl"]},disabled:{control:"boolean"},loading:{control:"boolean"}},args:{default:"Button"}},n={args:{variant:"default"},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args">Button</Button>'})},r={args:{variant:"destructive"},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args">Delete</Button>'})},o={args:{variant:"outline"},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args">Outline</Button>'})},a={args:{variant:"secondary"},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args">Secondary</Button>'})},s={args:{variant:"ghost"},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args">Ghost</Button>'})},u={args:{variant:"link"},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args">Link</Button>'})},i={render:()=>({components:{Button:e},template:`
      <div class="flex flex-wrap gap-4">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    `})},l={render:()=>({components:{Button:e},template:`
      <div class="flex flex-wrap items-center gap-4">
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </div>
    `})},c={args:{loading:!0},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args">Loading</Button>'})},d={args:{disabled:!0},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args">Disabled</Button>'})},p={render:()=>({components:{Button:e},template:`
      <div class="flex gap-4">
        <Button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          Add Item
        </Button>
        <Button size="icon" variant="outline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
        </Button>
      </div>
    `})};var m,B,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Button</Button>'
  })
}`,...(g=(B=n.parameters)==null?void 0:B.docs)==null?void 0:g.source}}};var v,h,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'destructive'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Delete</Button>'
  })
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var w,f,k;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Outline</Button>'
  })
}`,...(k=(f=o.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var b,S,z;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Secondary</Button>'
  })
}`,...(z=(S=a.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var D,y,L;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Ghost</Button>'
  })
}`,...(L=(y=s.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var M,O,A;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'link'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Link</Button>'
  })
}`,...(A=(O=u.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var G,V,C;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    template: \`
      <div class="flex flex-wrap gap-4">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    \`
  })
}`,...(C=(V=i.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var E,j,I;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    template: \`
      <div class="flex flex-wrap items-center gap-4">
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </div>
    \`
  })
}`,...(I=(j=l.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var W,_,T;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Loading</Button>'
  })
}`,...(T=(_=c.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var q,F,H;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Disabled</Button>'
  })
}`,...(H=(F=d.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,K,N;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    template: \`
      <div class="flex gap-4">
        <Button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          Add Item
        </Button>
        <Button size="icon" variant="outline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
        </Button>
      </div>
    \`
  })
}`,...(N=(K=p.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};const $=["Default","Destructive","Outline","Secondary","Ghost","Link","AllVariants","AllSizes","Loading","Disabled","WithIcon"];export{l as AllSizes,i as AllVariants,n as Default,r as Destructive,d as Disabled,s as Ghost,u as Link,c as Loading,o as Outline,a as Secondary,p as WithIcon,$ as __namedExportsOrder,Z as default};
