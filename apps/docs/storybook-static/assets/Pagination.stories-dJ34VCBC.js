import{d as u,C as g,D as p,E as d,G as P,a4 as x,K as m,f as s,B as ae,c as r,Y as ne,Z as ie,a5 as ee,L as N,J as te,r as S}from"./vue.esm-bundler-BitZzlT5.js";import{u as se,a as C}from"./useForwardPropsEmits-DQ7cY2da.js";import{u as b}from"./useForwardExpose-ClhNePUc.js";import{P as _}from"./Primitive-B5VkAsKh.js";import{c as oe}from"./createContext-Fl0g0pNq.js";import{a as le}from"./index-BGV6KQZa.js";import{W as y}from"./cn-gWiv5-6R-CwNMvQqb.js";import{I as E}from"./iconify-C6s_K7BB.js";import"./index-CvzWs3kq.js";var re=u({__name:"PaginationEllipsis",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(n){const a=n;return b(),(e,i)=>(g(),p(s(_),m(a,{"data-type":"ellipsis"}),{default:d(()=>[P(e.$slots,"default",{},()=>[i[0]||(i[0]=x("…"))])]),_:3},16))}}),ue=re;const[I,ge]=oe("PaginationRoot");var pe=u({__name:"PaginationRoot",props:{page:{type:Number,required:!1},defaultPage:{type:Number,required:!1,default:1},itemsPerPage:{type:Number,required:!0},total:{type:Number,required:!1,default:0},siblingCount:{type:Number,required:!1,default:2},disabled:{type:Boolean,required:!1},showEdges:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"nav"}},emits:["update:page"],setup(n,{emit:a}){const e=n,i=a,{siblingCount:o,disabled:t,showEdges:l}=ae(e);b();const c=le(e,"page",i,{defaultValue:e.defaultPage,passive:e.page===void 0}),h=r(()=>Math.max(1,Math.ceil(e.total/(e.itemsPerPage||1))));return ge({page:c,onPageChange(f){c.value=f},pageCount:h,siblingCount:o,disabled:t,showEdges:l}),(f,q)=>(g(),p(s(_),{as:f.as,"as-child":f.asChild},{default:d(()=>[P(f.$slots,"default",{page:s(c),pageCount:h.value})]),_:3},8,["as","as-child"]))}}),de=pe,Pe=u({__name:"PaginationFirst",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const a=n,e=I();b();const i=r(()=>e.page.value===1||e.disabled.value);return(o,t)=>(g(),p(s(_),m(a,{"aria-label":"First Page",type:o.as==="button"?"button":void 0,disabled:i.value,onClick:t[0]||(t[0]=l=>!i.value&&s(e).onPageChange(1))}),{default:d(()=>[P(o.$slots,"default",{},()=>[t[1]||(t[1]=x("First page"))])]),_:3},16,["type","disabled"]))}}),me=Pe,fe=u({__name:"PaginationLast",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const a=n,e=I();b();const i=r(()=>e.page.value===e.pageCount.value||e.disabled.value);return(o,t)=>(g(),p(s(_),m(a,{"aria-label":"Last Page",type:o.as==="button"?"button":void 0,disabled:i.value,onClick:t[0]||(t[0]=l=>!i.value&&s(e).onPageChange(s(e).pageCount.value))}),{default:d(()=>[P(o.$slots,"default",{},()=>[t[1]||(t[1]=x("Last page"))])]),_:3},16,["type","disabled"]))}}),ce=fe;function v(n,a){const e=a-n+1;return Array.from({length:e},(i,o)=>o+n)}function ve(n){return n.map(a=>typeof a=="number"?{type:"page",value:a}:{type:"ellipsis"})}const L="ellipsis";function be(n,a,e,i){const t=a,l=Math.max(n-e,1),c=Math.min(n+e,t);if(i){const f=Math.min(2*e+5,a)-2,q=l>3&&Math.abs(t-f-1+1)>2&&Math.abs(l-1)>2,V=c<t-2&&Math.abs(t-f)>2&&Math.abs(t-c)>2;if(!q&&V)return[...v(1,f),L,t];if(q&&!V){const B=v(t-f+1,t);return[1,L,...B]}if(q&&V){const B=v(l,c);return[1,L,...B,L,t]}return v(1,t)}else{const h=e*2+1;return a<h?v(1,t):n<=e+1?v(1,h):a-n<=e?v(a-h+1,t):v(l,c)}}var _e=u({__name:"PaginationList",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(n){const a=n;b();const e=I(),i=r(()=>ve(be(e.page.value,e.pageCount.value,e.siblingCount.value,e.showEdges.value)));return(o,t)=>(g(),p(s(_),ne(ie(a)),{default:d(()=>[P(o.$slots,"default",{items:i.value})]),_:3},16))}}),ye=_e,he=u({__name:"PaginationListItem",props:{value:{type:Number,required:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const a=n;b();const e=I(),i=r(()=>e.page.value===a.value),o=r(()=>e.disabled.value);return(t,l)=>(g(),p(s(_),m(a,{"data-type":"page","aria-label":`Page ${t.value}`,"aria-current":i.value?"page":void 0,"data-selected":i.value?"true":void 0,disabled:o.value,type:t.as==="button"?"button":void 0,onClick:l[0]||(l[0]=c=>!o.value&&s(e).onPageChange(t.value))}),{default:d(()=>[P(t.$slots,"default",{},()=>[x(ee(t.value),1)])]),_:3},16,["aria-label","aria-current","data-selected","disabled","type"]))}}),xe=he,Ce=u({__name:"PaginationNext",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const a=n;b();const e=I(),i=r(()=>e.page.value===e.pageCount.value||e.disabled.value);return(o,t)=>(g(),p(s(_),m(a,{"aria-label":"Next Page",type:o.as==="button"?"button":void 0,disabled:i.value,onClick:t[0]||(t[0]=l=>!i.value&&s(e).onPageChange(s(e).page.value+1))}),{default:d(()=>[P(o.$slots,"default",{},()=>[t[1]||(t[1]=x("Next page"))])]),_:3},16,["type","disabled"]))}}),Ie=Ce,Ne=u({__name:"PaginationPrev",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const a=n;b();const e=I(),i=r(()=>e.page.value===1||e.disabled.value);return(o,t)=>(g(),p(s(_),m(a,{"aria-label":"Previous Page",type:o.as==="button"?"button":void 0,disabled:i.value,onClick:t[0]||(t[0]=l=>!i.value&&s(e).onPageChange(s(e).page.value-1))}),{default:d(()=>[P(o.$slots,"default",{},()=>[t[1]||(t[1]=x("Prev page"))])]),_:3},16,["type","disabled"]))}}),Ee=Ne;const w=u({__name:"Pagination",props:{class:{},page:{},defaultPage:{},itemsPerPage:{},total:{},siblingCount:{},disabled:{type:Boolean},showEdges:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["update:page"],setup(n,{emit:a}){const e=n,i=se(e,a),o=r(()=>y("mx-auto flex w-full justify-center",e.class));return(t,l)=>(g(),p(s(de),m(s(i),{class:o.value}),{default:d(()=>[P(t.$slots,"default")]),_:3},16,["class"]))}}),M=u({__name:"PaginationContent",props:{class:{},asChild:{type:Boolean},as:{}},setup(n){const a=n,e=C(a),i=r(()=>y("flex flex-row items-center gap-1",a.class));return(o,t)=>(g(),p(s(ye),m(s(e),{class:i.value}),{default:d(({items:l})=>[P(o.$slots,"default",{items:l})]),_:3},16,["class"]))}}),j=u({__name:"PaginationItem",props:{class:{},value:{},asChild:{type:Boolean},as:{}},setup(n){const a=n,e=C(a),i=r(()=>y(["inline-flex items-center justify-center","size-9","text-sm font-medium","rounded-lg","outline-none transition-colors","hover:bg-accent/64 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background","disabled:pointer-events-none disabled:opacity-64","data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground"],a.class));return(o,t)=>(g(),p(s(xe),m(s(e),{class:i.value}),{default:d(()=>[P(o.$slots,"default",{},()=>[x(ee(n.value),1)])]),_:3},16,["class"]))}}),D=u({__name:"PaginationPrevious",props:{class:{},asChild:{type:Boolean},as:{}},setup(n){const a=n,e=C(a),i=r(()=>y(["inline-flex items-center justify-center gap-1","h-9 px-2.5","text-sm font-medium","rounded-lg","outline-none transition-colors","hover:bg-accent/64 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background","disabled:pointer-events-none disabled:opacity-64"],a.class));return(o,t)=>(g(),p(s(Ee),m(s(e),{class:i.value}),{default:d(()=>[P(o.$slots,"default",{},()=>[N(s(E),{icon:"hugeicons:arrow-left-01",width:"16",height:"16"}),t[0]||(t[0]=te("span",null,"Previous",-1))])]),_:3},16,["class"]))}}),z=u({__name:"PaginationNext",props:{class:{},asChild:{type:Boolean},as:{}},setup(n){const a=n,e=C(a),i=r(()=>y(["inline-flex items-center justify-center gap-1","h-9 px-2.5","text-sm font-medium","rounded-lg","outline-none transition-colors","hover:bg-accent/64 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background","disabled:pointer-events-none disabled:opacity-64"],a.class));return(o,t)=>(g(),p(s(Ie),m(s(e),{class:i.value}),{default:d(()=>[P(o.$slots,"default",{},()=>[t[0]||(t[0]=te("span",null,"Next",-1)),N(s(E),{icon:"hugeicons:arrow-right-01",width:"16",height:"16"})])]),_:3},16,["class"]))}}),we=u({__name:"PaginationFirst",props:{class:{},asChild:{type:Boolean},as:{}},setup(n){const a=n,e=C(a),i=r(()=>y(["inline-flex items-center justify-center","size-9","rounded-lg","outline-none transition-colors","hover:bg-accent/64 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background","disabled:pointer-events-none disabled:opacity-64"],a.class));return(o,t)=>(g(),p(s(me),m(s(e),{class:i.value}),{default:d(()=>[P(o.$slots,"default",{},()=>[N(s(E),{icon:"hugeicons:arrow-left-double",width:"16",height:"16"})])]),_:3},16,["class"]))}}),qe=u({__name:"PaginationLast",props:{class:{},asChild:{type:Boolean},as:{}},setup(n){const a=n,e=C(a),i=r(()=>y(["inline-flex items-center justify-center","size-9","rounded-lg","outline-none transition-colors","hover:bg-accent/64 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background","disabled:pointer-events-none disabled:opacity-64"],a.class));return(o,t)=>(g(),p(s(ce),m(s(e),{class:i.value}),{default:d(()=>[P(o.$slots,"default",{},()=>[N(s(E),{icon:"hugeicons:arrow-right-double",width:"16",height:"16"})])]),_:3},16,["class"]))}}),W=u({__name:"PaginationEllipsis",props:{class:{},asChild:{type:Boolean},as:{}},setup(n){const a=n,e=C(a),i=r(()=>y("inline-flex items-center justify-center size-9",a.class));return(o,t)=>(g(),p(s(ue),m(s(e),{class:i.value}),{default:d(()=>[P(o.$slots,"default",{},()=>[N(s(E),{icon:"hugeicons:more-horizontal",width:"16",height:"16"})])]),_:3},16,["class"]))}}),ze={title:"Components/Pagination",component:w,tags:["autodocs"]},$={args:{itemsPerPage:10,total:100},render:()=>({components:{Pagination:w,PaginationContent:M,PaginationItem:j,PaginationPrevious:D,PaginationNext:z,PaginationEllipsis:W},setup(){return{page:S(1)}},template:`
      <Pagination v-model:page="page" :total="100" :items-per-page="10" :sibling-count="1" show-edges>
        <PaginationContent v-slot="{ items }">
          <PaginationPrevious />
          <template v-for="(item, index) in items" :key="index">
            <PaginationItem v-if="item.type === 'page'" :value="item.value" />
            <PaginationEllipsis v-else />
          </template>
          <PaginationNext />
        </PaginationContent>
      </Pagination>
    `})},k={args:{itemsPerPage:10,total:100},render:()=>({components:{Pagination:w,PaginationContent:M,PaginationItem:j,PaginationPrevious:D,PaginationNext:z,PaginationFirst:we,PaginationLast:qe,PaginationEllipsis:W},setup(){return{page:S(5)}},template:`
      <Pagination v-model:page="page" :total="100" :items-per-page="10" :sibling-count="1" show-edges>
        <PaginationContent v-slot="{ items }">
          <PaginationFirst />
          <PaginationPrevious />
          <template v-for="(item, index) in items" :key="index">
            <PaginationItem v-if="item.type === 'page'" :value="item.value" />
            <PaginationEllipsis v-else />
          </template>
          <PaginationNext />
          <PaginationLast />
        </PaginationContent>
      </Pagination>
    `})},R={args:{itemsPerPage:10,total:100},render:()=>({components:{Pagination:w,PaginationContent:M,PaginationItem:j,PaginationPrevious:D,PaginationNext:z,PaginationEllipsis:W},setup(){return{page:S(5)}},template:`
      <Pagination v-model:page="page" :total="100" :items-per-page="10" :sibling-count="2" show-edges>
        <PaginationContent v-slot="{ items }">
          <PaginationPrevious />
          <template v-for="(item, index) in items" :key="index">
            <PaginationItem v-if="item.type === 'page'" :value="item.value" />
            <PaginationEllipsis v-else />
          </template>
          <PaginationNext />
        </PaginationContent>
      </Pagination>
    `})},F={args:{itemsPerPage:10,total:100},render:()=>({components:{Pagination:w,PaginationContent:M,PaginationItem:j,PaginationPrevious:D,PaginationNext:z,PaginationEllipsis:W},setup(){return{page:S(1)}},template:`
      <Pagination v-model:page="page" :total="100" :items-per-page="10" :sibling-count="1" show-edges disabled>
        <PaginationContent v-slot="{ items }">
          <PaginationPrevious />
          <template v-for="(item, index) in items" :key="index">
            <PaginationItem v-if="item.type === 'page'" :value="item.value" />
            <PaginationEllipsis v-else />
          </template>
          <PaginationNext />
        </PaginationContent>
      </Pagination>
    `})};var A,G,T;$.parameters={...$.parameters,docs:{...(A=$.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    itemsPerPage: 10,
    total: 100
  },
  render: () => ({
    components: {
      Pagination,
      PaginationContent,
      PaginationItem,
      PaginationPrevious,
      PaginationNext,
      PaginationEllipsis
    },
    setup() {
      const page = ref(1);
      return {
        page
      };
    },
    template: \`
      <Pagination v-model:page="page" :total="100" :items-per-page="10" :sibling-count="1" show-edges>
        <PaginationContent v-slot="{ items }">
          <PaginationPrevious />
          <template v-for="(item, index) in items" :key="index">
            <PaginationItem v-if="item.type === 'page'" :value="item.value" />
            <PaginationEllipsis v-else />
          </template>
          <PaginationNext />
        </PaginationContent>
      </Pagination>
    \`
  })
}`,...(T=(G=$.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var H,J,K;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    itemsPerPage: 10,
    total: 100
  },
  render: () => ({
    components: {
      Pagination,
      PaginationContent,
      PaginationItem,
      PaginationPrevious,
      PaginationNext,
      PaginationFirst,
      PaginationLast,
      PaginationEllipsis
    },
    setup() {
      const page = ref(5);
      return {
        page
      };
    },
    template: \`
      <Pagination v-model:page="page" :total="100" :items-per-page="10" :sibling-count="1" show-edges>
        <PaginationContent v-slot="{ items }">
          <PaginationFirst />
          <PaginationPrevious />
          <template v-for="(item, index) in items" :key="index">
            <PaginationItem v-if="item.type === 'page'" :value="item.value" />
            <PaginationEllipsis v-else />
          </template>
          <PaginationNext />
          <PaginationLast />
        </PaginationContent>
      </Pagination>
    \`
  })
}`,...(K=(J=k.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var O,Y,Z;R.parameters={...R.parameters,docs:{...(O=R.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    itemsPerPage: 10,
    total: 100
  },
  render: () => ({
    components: {
      Pagination,
      PaginationContent,
      PaginationItem,
      PaginationPrevious,
      PaginationNext,
      PaginationEllipsis
    },
    setup() {
      const page = ref(5);
      return {
        page
      };
    },
    template: \`
      <Pagination v-model:page="page" :total="100" :items-per-page="10" :sibling-count="2" show-edges>
        <PaginationContent v-slot="{ items }">
          <PaginationPrevious />
          <template v-for="(item, index) in items" :key="index">
            <PaginationItem v-if="item.type === 'page'" :value="item.value" />
            <PaginationEllipsis v-else />
          </template>
          <PaginationNext />
        </PaginationContent>
      </Pagination>
    \`
  })
}`,...(Z=(Y=R.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var Q,U,X;F.parameters={...F.parameters,docs:{...(Q=F.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    itemsPerPage: 10,
    total: 100
  },
  render: () => ({
    components: {
      Pagination,
      PaginationContent,
      PaginationItem,
      PaginationPrevious,
      PaginationNext,
      PaginationEllipsis
    },
    setup() {
      const page = ref(1);
      return {
        page
      };
    },
    template: \`
      <Pagination v-model:page="page" :total="100" :items-per-page="10" :sibling-count="1" show-edges disabled>
        <PaginationContent v-slot="{ items }">
          <PaginationPrevious />
          <template v-for="(item, index) in items" :key="index">
            <PaginationItem v-if="item.type === 'page'" :value="item.value" />
            <PaginationEllipsis v-else />
          </template>
          <PaginationNext />
        </PaginationContent>
      </Pagination>
    \`
  })
}`,...(X=(U=F.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const We=["Default","WithFirstAndLast","WithMoreSiblings","Disabled"];export{$ as Default,F as Disabled,k as WithFirstAndLast,R as WithMoreSiblings,We as __namedExportsOrder,ze as default};
