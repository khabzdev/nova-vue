import{w as r}from"./Label.vue_vue_type_script_setup_true_lang-CcQM5z7h-DekRYA-r.js";import{V as b}from"./Input.vue_vue_type_script_setup_true_lang-D96E5V6Z-Bl0Oelpq.js";import"./vue.esm-bundler-BitZzlT5.js";import"./index-I_2vzNuA-BfX5bdph.js";import"./cn-gWiv5-6R-CwNMvQqb.js";import"./useForwardExpose-ClhNePUc.js";import"./index-BGV6KQZa.js";import"./index-CvzWs3kq.js";import"./Primitive-B5VkAsKh.js";const h={title:"Components/Label",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","muted","destructive"]}}},e={args:{variant:"default"},render:u=>({components:{Label:r},setup(){return{args:u}},template:'<Label v-bind="args">Email</Label>'})},a={render:()=>({components:{Label:r,Input:b},template:`
      <div class="grid w-full max-w-sm items-center gap-1.5">
        <Label for="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
    `})},t={render:()=>({components:{Label:r},template:`
      <div class="flex flex-col gap-3">
        <Label variant="default">Default Label</Label>
        <Label variant="muted">Muted Label</Label>
        <Label variant="destructive">Destructive Label</Label>
      </div>
    `})};var l,n,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  },
  render: args => ({
    components: {
      Label
    },
    setup() {
      return {
        args
      };
    },
    template: '<Label v-bind="args">Email</Label>'
  })
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var o,i,m;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Label,
      Input
    },
    template: \`
      <div class="grid w-full max-w-sm items-center gap-1.5">
        <Label for="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
    \`
  })
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,c,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Label
    },
    template: \`
      <div class="flex flex-col gap-3">
        <Label variant="default">Default Label</Label>
        <Label variant="muted">Muted Label</Label>
        <Label variant="destructive">Destructive Label</Label>
      </div>
    \`
  })
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const y=["Default","WithInput","Variants"];export{e as Default,t as Variants,a as WithInput,y as __namedExportsOrder,h as default};
