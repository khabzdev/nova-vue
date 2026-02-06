import{d as l,C as i,I as c,G as d,H as u,c as p}from"./vue.esm-bundler-BitZzlT5.js";import{j as _}from"./index-I_2vzNuA-BfX5bdph.js";import{W as g}from"./cn-gWiv5-6R-CwNMvQqb.js";const m=l({__name:"Alert",props:{variant:{default:"default"},class:{}},setup(t){const r=_(["relative w-full","p-4","rounded-xl border","[&>svg+div]:translate-y-[-3px]","[&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4","[&>svg~*]:pl-7","before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)]"],{variants:{variant:{default:["border-input bg-background text-foreground","dark:border-input/50","[&>svg]:text-foreground"],destructive:["border-destructive/50 bg-destructive/10 text-destructive","dark:border-destructive/30 dark:bg-destructive/5","[&>svg]:text-destructive"],success:["border-success/50 bg-success/10 text-success-foreground","dark:border-success/30 dark:bg-success/5","[&>svg]:text-success"],warning:["border-warning/50 bg-warning/10 text-warning-foreground","dark:border-warning/30 dark:bg-warning/5","[&>svg]:text-warning"],info:["border-info/50 bg-info/10 text-info-foreground","dark:border-info/30 dark:bg-info/5","[&>svg]:text-info"]}},defaultVariants:{variant:"default"}}),e=t,s=p(()=>g(r({variant:e.variant}),e.class));return(a,w)=>(i(),c("div",{role:"alert",class:u(s.value)},[d(a.$slots,"default")],2))}}),T=l({__name:"AlertTitle",props:{class:{}},setup(t){const r=t,e=p(()=>g(["font-medium text-base leading-none tracking-tight sm:text-sm"],r.class));return(s,a)=>(i(),c("h5",{class:u(e.value)},[d(s.$slots,"default")],2))}}),k=l({__name:"AlertDescription",props:{class:{}},setup(t){const r=t,e=p(()=>g(["text-sm sm:text-xs","[&_p]:leading-relaxed"],r.class));return(s,a)=>(i(),c("div",{class:u(e.value)},[d(s.$slots,"default")],2))}}),E={title:"Components/Alert",component:m,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive"]}}},n={render:()=>({components:{Alert:m,AlertDescription:k,AlertTitle:T},template:`
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    `})},o={render:()=>({components:{Alert:m,AlertDescription:k,AlertTitle:T},template:`
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    `})};var v,A,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Alert,
      AlertDescription,
      AlertTitle
    },
    template: \`
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    \`
  })
}`,...(f=(A=n.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var b,x,D;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Alert,
      AlertDescription,
      AlertTitle
    },
    template: \`
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    \`
  })
}`,...(D=(x=o.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const Y=["Default","Destructive"];export{n as Default,o as Destructive,Y as __namedExportsOrder,E as default};
