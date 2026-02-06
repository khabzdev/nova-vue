import{d as D,C as S,I as k,L as E,E as j,G as C,K as W,f as l,R as Q,c as $,B as T,D as V}from"./vue.esm-bundler-BitZzlT5.js";import{u as N}from"./useForwardExpose-ClhNePUc.js";import{P as X}from"./Primitive-B5VkAsKh.js";import{W as Y}from"./cn-gWiv5-6R-CwNMvQqb.js";import"./index-BGV6KQZa.js";import"./index-CvzWs3kq.js";var z=D({inheritAttrs:!1,__name:"AspectRatio",props:{ratio:{type:Number,required:!1,default:1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const p=e,{forwardRef:i}=N(),r=$(()=>1/p.ratio*100);return(t,u)=>(S(),k("div",{style:Q(`position: relative; width: 100%; padding-bottom: ${r.value}%`),"data-reka-aspect-ratio-wrapper":""},[E(l(X),W({ref:l(i),"as-child":t.asChild,as:t.as,style:{position:"absolute",inset:"0px"}},t.$attrs),{default:j(()=>[C(t.$slots,"default",{aspect:r.value})]),_:3},16,["as-child","as"])],4))}}),F=z;const s=D({__name:"AspectRatio",props:{ratio:{default:1},class:{}},setup(e){const p=e,{ratio:i,class:r}=T(p),t=$(()=>Y("overflow-hidden",r.value));return(u,G)=>(S(),V(l(F),W({ratio:l(i),class:t.value},u.$attrs),{default:j(()=>[C(u.$slots,"default")]),_:3},16,["ratio","class"]))}}),M={title:"Components/AspectRatio",component:s,tags:["autodocs"],argTypes:{ratio:{control:"number",description:"The desired aspect ratio (width / height)"}},args:{ratio:16/9}},a={args:{ratio:16/9},render:e=>({components:{AspectRatio:s},setup(){return{args:e}},template:`
      <div class="w-[450px]">
        <AspectRatio v-bind="args" class="rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            class="h-full w-full rounded-lg object-cover"
          />
        </AspectRatio>
      </div>
    `})},o={args:{ratio:1},render:e=>({components:{AspectRatio:s},setup(){return{args:e}},template:`
      <div class="w-[300px]">
        <AspectRatio v-bind="args" class="rounded-lg bg-muted">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            class="h-full w-full rounded-lg object-cover"
          />
        </AspectRatio>
      </div>
    `})},n={args:{ratio:3/4},render:e=>({components:{AspectRatio:s},setup(){return{args:e}},template:`
      <div class="w-[300px]">
        <AspectRatio v-bind="args" class="rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            class="h-full w-full rounded-lg object-cover"
          />
        </AspectRatio>
      </div>
    `})},c={args:{ratio:16/9},render:e=>({components:{AspectRatio:s},setup(){return{args:e}},template:`
      <div class="w-[600px]">
        <AspectRatio v-bind="args" class="rounded-lg bg-muted">
          <iframe
            class="h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </AspectRatio>
      </div>
    `})},d={args:{ratio:16/9},render:e=>({components:{AspectRatio:s},setup(){return{args:e}},template:`
      <div class="w-[450px]">
        <AspectRatio v-bind="args" class="flex items-center justify-center rounded-lg bg-muted">
          <span class="text-sm text-muted-foreground">16:9 Aspect Ratio</span>
        </AspectRatio>
      </div>
    `})};var m,g,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ratio: 16 / 9
  },
  render: args => ({
    components: {
      AspectRatio
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-[450px]">
        <AspectRatio v-bind="args" class="rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            class="h-full w-full rounded-lg object-cover"
          />
        </AspectRatio>
      </div>
    \`
  })
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var w,h,v;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ratio: 1
  },
  render: args => ({
    components: {
      AspectRatio
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-[300px]">
        <AspectRatio v-bind="args" class="rounded-lg bg-muted">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            class="h-full w-full rounded-lg object-cover"
          />
        </AspectRatio>
      </div>
    \`
  })
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var b,R,A;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ratio: 3 / 4
  },
  render: args => ({
    components: {
      AspectRatio
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-[300px]">
        <AspectRatio v-bind="args" class="rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            class="h-full w-full rounded-lg object-cover"
          />
        </AspectRatio>
      </div>
    \`
  })
}`,...(A=(R=n.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var y,x,_;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ratio: 16 / 9
  },
  render: args => ({
    components: {
      AspectRatio
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-[600px]">
        <AspectRatio v-bind="args" class="rounded-lg bg-muted">
          <iframe
            class="h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </AspectRatio>
      </div>
    \`
  })
}`,...(_=(x=c.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var P,q,B;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ratio: 16 / 9
  },
  render: args => ({
    components: {
      AspectRatio
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-[450px]">
        <AspectRatio v-bind="args" class="flex items-center justify-center rounded-lg bg-muted">
          <span class="text-sm text-muted-foreground">16:9 Aspect Ratio</span>
        </AspectRatio>
      </div>
    \`
  })
}`,...(B=(q=d.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const U=["Default","Square","Portrait","Video","WithPlaceholder"];export{a as Default,n as Portrait,o as Square,c as Video,d as WithPlaceholder,U as __namedExportsOrder,M as default};
