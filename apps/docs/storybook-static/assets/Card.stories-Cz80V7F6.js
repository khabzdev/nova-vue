import{d,B as s,C as l,I as p,G as i,K as c,c as C}from"./vue.esm-bundler-BitZzlT5.js";import{j as y}from"./index-I_2vzNuA-BfX5bdph.js";import{W as u}from"./cn-gWiv5-6R-CwNMvQqb.js";import{M as j}from"./Button.vue_vue_type_script_setup_true_lang-DIJKvcpn-y-8jE4mo.js";import{V as k}from"./Input.vue_vue_type_script_setup_true_lang-D96E5V6Z-Bl0Oelpq.js";import{w as L}from"./Label.vue_vue_type_script_setup_true_lang-CcQM5z7h-DekRYA-r.js";import"./index-BcdZTg5d.js";import"./index-CvzWs3kq.js";import"./useForwardExpose-ClhNePUc.js";import"./index-BGV6KQZa.js";import"./Primitive-B5VkAsKh.js";const v=d({__name:"Card",props:{variant:{default:"default"},class:{}},setup(r){const t=y(["relative flex flex-col","rounded-xl border","bg-card text-card-foreground","shadow-sm"],{variants:{variant:{default:"border-border",outline:["border-input","shadow-xs/5","dark:bg-input/16"],ghost:"border-transparent shadow-none bg-transparent"}},defaultVariants:{variant:"default"}}),a=r,{variant:n,class:e}=s(a),o=C(()=>u(t({variant:n.value}),e.value));return(x,I)=>(l(),p("div",c({class:o.value},x.$attrs),[i(x.$slots,"default")],16))}}),T=d({__name:"CardHeader",props:{class:{default:""}},setup(r){const t=r,{class:a}=s(t),n=C(()=>u("flex flex-col gap-1.5 p-6",a.value));return(e,o)=>(l(),p("div",c({class:n.value},e.$attrs),[i(e.$slots,"default")],16))}}),_=d({__name:"CardTitle",props:{class:{default:""}},setup(r){const t=r,{class:a}=s(t),n=C(()=>u("text-lg font-semibold leading-none tracking-tight",a.value));return(e,o)=>(l(),p("h3",c({class:n.value},e.$attrs),[i(e.$slots,"default")],16))}}),B=d({__name:"CardDescription",props:{class:{default:""}},setup(r){const t=r,{class:a}=s(t),n=C(()=>u("text-sm text-muted-foreground",a.value));return(e,o)=>(l(),p("p",c({class:n.value},e.$attrs),[i(e.$slots,"default")],16))}}),H=d({__name:"CardContent",props:{class:{default:""}},setup(r){const t=r,{class:a}=s(t),n=C(()=>u("p-6 pt-0",a.value));return(e,o)=>(l(),p("div",c({class:n.value},e.$attrs),[i(e.$slots,"default")],16))}}),$=d({__name:"CardFooter",props:{class:{default:""}},setup(r){const t=r,{class:a}=s(t),n=C(()=>u("flex items-center p-6 pt-0",a.value));return(e,o)=>(l(),p("div",c({class:n.value},e.$attrs),[i(e.$slots,"default")],16))}}),q={title:"Components/Card",component:v,tags:["autodocs"]},m={render:()=>({components:{Card:v,CardContent:H,CardDescription:B,CardFooter:$,CardHeader:T,CardTitle:_},template:`
      <Card class="w-[350px]">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content goes here.</p>
        </CardContent>
        <CardFooter>
          <p class="text-sm text-muted-foreground">Card footer</p>
        </CardFooter>
      </Card>
    `})},f={render:()=>({components:{Card:v,CardContent:H,CardDescription:B,CardFooter:$,CardHeader:T,CardTitle:_,Button:j,Input:k,Label:L},template:`
      <Card class="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div class="grid w-full items-center gap-4">
              <div class="flex flex-col space-y-1.5">
                <Label for="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter class="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    `})};var g,D,b;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Card,
      CardContent,
      CardDescription,
      CardFooter,
      CardHeader,
      CardTitle
    },
    template: \`
      <Card class="w-[350px]">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content goes here.</p>
        </CardContent>
        <CardFooter>
          <p class="text-sm text-muted-foreground">Card footer</p>
        </CardFooter>
      </Card>
    \`
  })
}`,...(b=(D=m.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var w,h,F;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Card,
      CardContent,
      CardDescription,
      CardFooter,
      CardHeader,
      CardTitle,
      Button,
      Input,
      Label
    },
    template: \`
      <Card class="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div class="grid w-full items-center gap-4">
              <div class="flex flex-col space-y-1.5">
                <Label for="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter class="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    \`
  })
}`,...(F=(h=f.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};const z=["Default","WithForm"];export{m as Default,f as WithForm,z as __namedExportsOrder,q as default};
