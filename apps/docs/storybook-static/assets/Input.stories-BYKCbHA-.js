import{r as n}from"./vue.esm-bundler-BitZzlT5.js";import{V as e}from"./Input.vue_vue_type_script_setup_true_lang-D96E5V6Z-Bl0Oelpq.js";import{w as y}from"./Label.vue_vue_type_script_setup_true_lang-CcQM5z7h-DekRYA-r.js";import"./index-I_2vzNuA-BfX5bdph.js";import"./cn-gWiv5-6R-CwNMvQqb.js";import"./useForwardExpose-ClhNePUc.js";import"./index-BGV6KQZa.js";import"./index-CvzWs3kq.js";import"./Primitive-B5VkAsKh.js";const V={title:"Components/Input",component:e,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","tel","url"]},disabled:{control:"boolean"},placeholder:{control:"text"}}},a={render:()=>({components:{Input:e},setup(){return{value:n("")}},template:'<Input v-model="value" class="max-w-xs" />'})},r={render:()=>({components:{Input:e},setup(){return{value:n("")}},template:'<Input v-model="value" placeholder="Enter your email" class="max-w-xs" />'})},s={render:()=>({components:{Input:e,Label:y},setup(){return{email:n("")}},template:`
      <div class="grid w-full max-w-xs gap-1.5">
        <Label for="email">Email</Label>
        <Input id="email" v-model="email" type="email" placeholder="Enter your email" />
      </div>
    `})},t={render:()=>({components:{Input:e},template:'<Input disabled value="Disabled input" class="max-w-xs" />'})},o={render:()=>({components:{Input:e,Label:y},setup(){return{password:n("")}},template:`
      <div class="grid w-full max-w-xs gap-1.5">
        <Label for="password">Password</Label>
        <Input id="password" v-model="password" type="password" placeholder="Enter password" />
      </div>
    `})};var p,m,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Input
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: '<Input v-model="value" class="max-w-xs" />'
  })
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,c,i;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Input
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: '<Input v-model="value" placeholder="Enter your email" class="max-w-xs" />'
  })
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var w,v,x;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Input,
      Label
    },
    setup() {
      const email = ref('');
      return {
        email
      };
    },
    template: \`
      <div class="grid w-full max-w-xs gap-1.5">
        <Label for="email">Email</Label>
        <Input id="email" v-model="email" type="email" placeholder="Enter your email" />
      </div>
    \`
  })
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,I,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Input
    },
    template: '<Input disabled value="Disabled input" class="max-w-xs" />'
  })
}`,...(f=(I=t.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var g,L,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Input,
      Label
    },
    setup() {
      const password = ref('');
      return {
        password
      };
    },
    template: \`
      <div class="grid w-full max-w-xs gap-1.5">
        <Label for="password">Password</Label>
        <Input id="password" v-model="password" type="password" placeholder="Enter password" />
      </div>
    \`
  })
}`,...(h=(L=o.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};const j=["Default","WithPlaceholder","WithLabel","Disabled","Password"];export{a as Default,t as Disabled,o as Password,s as WithLabel,r as WithPlaceholder,j as __namedExportsOrder,V as default};
