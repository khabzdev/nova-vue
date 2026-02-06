import{b as r}from"./Separator.vue_vue_type_script_setup_true_lang-Dgz3yZLC-D9AOBgih.js";import"./vue.esm-bundler-BitZzlT5.js";import"./index-I_2vzNuA-BfX5bdph.js";import"./cn-gWiv5-6R-CwNMvQqb.js";import"./Primitive-B5VkAsKh.js";const S={title:"Components/Separator",component:r,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},decorative:{control:"boolean"}}},e={args:{orientation:"horizontal"},render:d=>({components:{Separator:r},setup(){return{args:d}},template:`
      <div class="w-full max-w-sm">
        <div class="space-y-1">
          <h4 class="text-sm font-medium leading-none">Lettuce UI</h4>
          <p class="text-sm text-muted-foreground">
            A component library for Vue.
          </p>
        </div>
        <Separator v-bind="args" class="my-4" />
        <div class="flex h-5 items-center space-x-4 text-sm">
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>API</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    `})},t={render:()=>({components:{Separator:r},template:`
      <div class="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
        <Separator orientation="vertical" />
        <div>Community</div>
      </div>
    `})};var n,a,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  render: args => ({
    components: {
      Separator
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-full max-w-sm">
        <div class="space-y-1">
          <h4 class="text-sm font-medium leading-none">Lettuce UI</h4>
          <p class="text-sm text-muted-foreground">
            A component library for Vue.
          </p>
        </div>
        <Separator v-bind="args" class="my-4" />
        <div class="flex h-5 items-center space-x-4 text-sm">
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>API</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    \`
  })
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var i,s,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Separator
    },
    template: \`
      <div class="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
        <Separator orientation="vertical" />
        <div>Community</div>
      </div>
    \`
  })
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const x=["Default","Vertical"];export{e as Default,t as Vertical,x as __namedExportsOrder,S as default};
