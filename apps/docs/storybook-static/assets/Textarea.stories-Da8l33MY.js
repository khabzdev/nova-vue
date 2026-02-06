import{d as S,B as V,C as W,I as B,K as Y,c as C}from"./vue.esm-bundler-BitZzlT5.js";import{j as E}from"./index-I_2vzNuA-BfX5bdph.js";import{W as I}from"./cn-gWiv5-6R-CwNMvQqb.js";import{w as j}from"./Label.vue_vue_type_script_setup_true_lang-CcQM5z7h-DekRYA-r.js";import"./useForwardExpose-ClhNePUc.js";import"./index-BGV6KQZa.js";import"./index-CvzWs3kq.js";import"./Primitive-B5VkAsKh.js";const K=["value","placeholder","disabled","readonly","rows"],a=S({__name:"Textarea",props:{size:{type:String,default:"default"},modelValue:{type:String,default:""},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rows:{type:Number,default:3},class:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:w}){const y=E(["relative flex w-full min-h-20","text-base sm:text-sm","placeholder:text-muted-foreground","rounded-lg border border-input","px-[calc(theme(spacing.3)-1px)] py-2","bg-popover text-foreground","shadow-xs/5","before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)]","not-disabled:not-read-only:not-focus:before:shadow-[0_1px_theme(colors.black/4%)]","dark:bg-input/32","dark:not-disabled:not-read-only:before:shadow-[0_-1px_theme(colors.white/2%)]","dark:not-disabled:not-read-only:not-focus:before:shadow-[0_-1px_theme(colors.white/6%)]","outline-none transition-shadow","focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background","hover:bg-accent/50 dark:hover:bg-input/64","focus:bg-popover dark:focus:bg-input/32","disabled:pointer-events-none disabled:opacity-64 disabled:shadow-none","read-only:bg-muted read-only:shadow-none","aria-invalid:border-destructive aria-invalid:ring-destructive/24","resize-y"],{variants:{size:{default:"min-h-20",sm:["min-h-16 px-[calc(theme(spacing[2.5])-1px)] text-sm sm:text-xs"],lg:["min-h-28 px-[calc(theme(spacing[3.5])-1px)]"]}},defaultVariants:{size:"default"}}),T=e,_=w,{size:k,class:z}=V(T),D=C(()=>I(y({size:k.value}),z.value));function L(l){const n=l.target;_("update:modelValue",n.value)}return(l,n)=>(W(),B("textarea",Y({class:D.value,value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,rows:e.rows},l.$attrs,{onInput:L}),null,16,K))}}),G={title:"Components/Textarea",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","default","lg"]},disabled:{control:"boolean"},placeholder:{control:"text"}}},r={args:{placeholder:"Type your message here."},render:e=>({components:{Textarea:a},setup(){return{args:e}},template:'<Textarea v-bind="args" class="w-full max-w-sm" />'})},s={render:()=>({components:{Textarea:a,Label:j},template:`
      <div class="grid w-full max-w-sm gap-1.5">
        <Label for="message">Your message</Label>
        <Textarea id="message" placeholder="Type your message here." />
      </div>
    `})},t={args:{disabled:!0,placeholder:"Disabled textarea"},render:e=>({components:{Textarea:a},setup(){return{args:e}},template:'<Textarea v-bind="args" class="w-full max-w-sm" />'})},o={render:()=>({components:{Textarea:a},template:`
      <Textarea class="w-full max-w-sm" model-value="This is a default value for the textarea. You can edit it as needed." />
    `})};var d,i,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your message here.'
  },
  render: args => ({
    components: {
      Textarea
    },
    setup() {
      return {
        args
      };
    },
    template: '<Textarea v-bind="args" class="w-full max-w-sm" />'
  })
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,u,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Textarea,
      Label
    },
    template: \`
      <div class="grid w-full max-w-sm gap-1.5">
        <Label for="message">Your message</Label>
        <Textarea id="message" placeholder="Type your message here." />
      </div>
    \`
  })
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var f,g,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled textarea'
  },
  render: args => ({
    components: {
      Textarea
    },
    setup() {
      return {
        args
      };
    },
    template: '<Textarea v-bind="args" class="w-full max-w-sm" />'
  })
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,h,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Textarea
    },
    template: \`
      <Textarea class="w-full max-w-sm" model-value="This is a default value for the textarea. You can edit it as needed." />
    \`
  })
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const H=["Default","WithLabel","Disabled","WithDefaultValue"];export{r as Default,t as Disabled,o as WithDefaultValue,s as WithLabel,H as __namedExportsOrder,G as default};
