import{d as B,B as j,C as _,D as E,E as K,G as P,f as e,R as te,r as z,c as p,S as Ee,K as N,F as Ke,aa as qe,o as Be,a as Re,L as ee,H as Z,I as ze,P as Pe,Q as Ae}from"./vue.esm-bundler-BitZzlT5.js";import{j as O}from"./index-I_2vzNuA-BfX5bdph.js";import{c as Se}from"./clamp-BstbYvQo.js";import{c as be}from"./createContext-Fl0g0pNq.js";import{u as Me}from"./useDirection-C1R3tBjc.js";import{u as ke}from"./useFormControl-DEb_yQqi.js";import{u as k}from"./useForwardExpose-ClhNePUc.js";import{u as ae}from"./Collection-CCDXBU9V.js";import{V as Ie}from"./VisuallyHiddenInput-CSZpUBkU.js";import{P as G}from"./Primitive-B5VkAsKh.js";import{a as Te,b as $e}from"./index-BGV6KQZa.js";import{u as He}from"./useSize-CCXUmRMH.js";import{W as Ne}from"./cn-gWiv5-6R-CwNMvQqb.js";import"./ConfigProvider-CB94jlZd.js";import"./usePrimitiveElement-JmSCNQYd.js";import"./VisuallyHidden-BLZVLwmx.js";import"./index-CvzWs3kq.js";function Fe(t=[],n,a){const l=[...t];return l[a]=n,l.sort((u,m)=>u-m)}function ye(t,n,a){const m=100/(a-n)*(t-n);return Se(m,0,100)}function Le(t,n){return n>2?`Value ${t+1} of ${n}`:n===2?["Minimum","Maximum"][t]:void 0}function Oe(t,n){if(t.length===1)return 0;const a=t.map(u=>Math.abs(u-n)),l=Math.min(...a);return a.indexOf(l)}function Ye(t,n,a){const l=t/2,m=ne([0,50],[0,l]);return(l-m(n)*a)*a}function Ue(t){return t.slice(0,-1).map((n,a)=>t[a+1]-n)}function We(t,n){if(n>0){const a=Ue(t);return Math.min(...a)>=n}return!0}function ne(t,n){return a=>{if(t[0]===t[1]||n[0]===n[1])return n[0];const l=(n[1]-n[0])/(t[1]-t[0]);return n[0]+l*(a-t[0])}}function Xe(t){return(String(t).split(".")[1]||"").length}function je(t,n){const a=10**n;return Math.round(t*a)/a}const he=["PageUp","PageDown"],we=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],xe={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageUp","ArrowUp","ArrowLeft"]},[Ve,Ce]=be(["SliderVertical","SliderHorizontal"]);var Ge=B({__name:"SliderHorizontal",props:{dir:{type:String,required:!1},min:{type:Number,required:!0},max:{type:Number,required:!0},inverted:{type:Boolean,required:!0}},emits:["slideEnd","slideStart","slideMove","homeKeyDown","endKeyDown","stepKeyDown"],setup(t,{emit:n}){const a=t,l=n,{max:u,min:m,dir:r,inverted:o}=j(a),{forwardRef:f,currentElement:c}=k(),g=T(),x=z(),w=z(),V=p(()=>(r==null?void 0:r.value)!=="rtl"&&!o.value||(r==null?void 0:r.value)!=="ltr"&&o.value);function v(i,s){const d=w.value||c.value.getBoundingClientRect(),C=[...g.thumbElements.value][g.valueIndexToChangeRef.value],R=g.thumbAlignment.value==="contain"?C.clientWidth:0;!x.value&&!s&&g.thumbAlignment.value==="contain"&&(x.value=i.clientX-C.getBoundingClientRect().left);const $=[0,d.width-R],q=V.value?[m.value,u.value]:[u.value,m.value],I=ne($,q);w.value=d;const S=s?i.clientX-d.left-R/2:i.clientX-d.left-(x.value??0);return I(S)}const y=p(()=>V.value?"left":"right"),A=p(()=>V.value?"right":"left"),h=p(()=>V.value?1:-1);return Ce({startEdge:y,endEdge:A,direction:h,size:"width"}),(i,s)=>(_(),E(De,{ref:e(f),dir:e(r),"data-orientation":"horizontal",style:te({"--reka-slider-thumb-transform":!V.value&&e(g).thumbAlignment.value==="overflow"?"translateX(50%)":"translateX(-50%)"}),onSlideStart:s[0]||(s[0]=d=>{const C=v(d,!0);l("slideStart",C)}),onSlideMove:s[1]||(s[1]=d=>{const C=v(d);l("slideMove",C)}),onSlideEnd:s[2]||(s[2]=()=>{w.value=void 0,x.value=void 0,l("slideEnd")}),onStepKeyDown:s[3]||(s[3]=d=>{const C=V.value?"from-left":"from-right",R=e(xe)[C].includes(d.key);l("stepKeyDown",d,R?-1:1)}),onEndKeyDown:s[4]||(s[4]=d=>l("endKeyDown",d)),onHomeKeyDown:s[5]||(s[5]=d=>l("homeKeyDown",d))},{default:K(()=>[P(i.$slots,"default")]),_:3},8,["dir","style"]))}}),Je=Ge,Qe=B({__name:"SliderVertical",props:{min:{type:Number,required:!0},max:{type:Number,required:!0},inverted:{type:Boolean,required:!0}},emits:["slideEnd","slideStart","slideMove","homeKeyDown","endKeyDown","stepKeyDown"],setup(t,{emit:n}){const a=t,l=n,{max:u,min:m,inverted:r}=j(a),o=T(),{forwardRef:f,currentElement:c}=k(),g=z(),x=z(),w=p(()=>!r.value);function V(h,i){const s=x.value||c.value.getBoundingClientRect(),d=[...o.thumbElements.value][o.valueIndexToChangeRef.value],C=o.thumbAlignment.value==="contain"?d.clientHeight:0;!g.value&&!i&&o.thumbAlignment.value==="contain"&&(g.value=h.clientY-d.getBoundingClientRect().top);const R=[0,s.height-C],$=w.value?[u.value,m.value]:[m.value,u.value],q=ne(R,$),I=i?h.clientY-s.top-C/2:h.clientY-s.top-(g.value??0);return x.value=s,q(I)}const v=p(()=>w.value?"bottom":"top"),y=p(()=>w.value?"top":"bottom"),A=p(()=>w.value?1:-1);return Ce({startEdge:v,endEdge:y,direction:A,size:"height"}),(h,i)=>(_(),E(De,{ref:e(f),"data-orientation":"vertical",style:te({"--reka-slider-thumb-transform":!w.value&&e(o).thumbAlignment.value==="overflow"?"translateY(-50%)":"translateY(50%)"}),onSlideStart:i[0]||(i[0]=s=>{const d=V(s,!0);l("slideStart",d)}),onSlideMove:i[1]||(i[1]=s=>{const d=V(s);l("slideMove",d)}),onSlideEnd:i[2]||(i[2]=()=>{x.value=void 0,g.value=void 0,l("slideEnd")}),onStepKeyDown:i[3]||(i[3]=s=>{const d=w.value?"from-bottom":"from-top",C=e(xe)[d].includes(s.key);l("stepKeyDown",s,C?-1:1)}),onEndKeyDown:i[4]||(i[4]=s=>l("endKeyDown",s)),onHomeKeyDown:i[5]||(i[5]=s=>l("homeKeyDown",s))},{default:K(()=>[P(h.$slots,"default")]),_:3},8,["style"]))}}),Ze=Qe;const[T,et]=be("SliderRoot");var tt=B({inheritAttrs:!1,__name:"SliderRoot",props:{defaultValue:{type:Array,required:!1,default:()=>[0]},modelValue:{type:[Array,null],required:!1},disabled:{type:Boolean,required:!1,default:!1},orientation:{type:String,required:!1,default:"horizontal"},dir:{type:String,required:!1},inverted:{type:Boolean,required:!1,default:!1},min:{type:Number,required:!1,default:0},max:{type:Number,required:!1,default:100},step:{type:Number,required:!1,default:1},minStepsBetweenThumbs:{type:Number,required:!1,default:0},thumbAlignment:{type:String,required:!1,default:"contain"},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["update:modelValue","valueCommit"],setup(t,{emit:n}){const a=t,l=n,{min:u,max:m,step:r,minStepsBetweenThumbs:o,orientation:f,disabled:c,thumbAlignment:g,dir:x}=j(a),w=Me(x),{forwardRef:V,currentElement:v}=k(),y=ke(v),{CollectionSlot:A}=ae({isProvider:!0}),h=Te(a,"modelValue",l,{defaultValue:a.defaultValue,passive:a.modelValue===void 0}),i=p(()=>Array.isArray(h.value)?[...h.value]:[]),s=z(0),d=z(i.value);function C(S){const b=Oe(i.value,S);q(S,b)}function R(S){q(S,s.value)}function $(){const S=d.value[s.value];i.value[s.value]!==S&&l("valueCommit",qe(i.value))}function q(S,b,{commit:D}={commit:!1}){var H;const J=Xe(r.value),le=je(Math.round((S-u.value)/r.value)*r.value+u.value,J),Q=Se(le,u.value,m.value),M=Fe(i.value,Q,b);if(We(M,o.value*r.value)){s.value=M.indexOf(Q);const L=String(M)!==String(h.value);L&&D&&l("valueCommit",M),L&&((H=I.value[s.value])==null||H.focus(),h.value=M)}}const I=z([]);return et({modelValue:h,currentModelValue:i,valueIndexToChangeRef:s,thumbElements:I,orientation:f,min:u,max:m,disabled:c,thumbAlignment:g}),(S,b)=>(_(),E(e(A),null,{default:K(()=>[(_(),E(Ee(e(f)==="horizontal"?Je:Ze),N(S.$attrs,{ref:e(V),"as-child":S.asChild,as:S.as,min:e(u),max:e(m),dir:e(w),inverted:S.inverted,"aria-disabled":e(c),"data-disabled":e(c)?"":void 0,onPointerdown:b[0]||(b[0]=()=>{e(c)||(d.value=i.value)}),onSlideStart:b[1]||(b[1]=D=>!e(c)&&C(D)),onSlideMove:b[2]||(b[2]=D=>!e(c)&&R(D)),onSlideEnd:b[3]||(b[3]=D=>!e(c)&&$()),onHomeKeyDown:b[4]||(b[4]=D=>!e(c)&&q(e(u),0,{commit:!0})),onEndKeyDown:b[5]||(b[5]=D=>!e(c)&&q(e(m),i.value.length-1,{commit:!0})),onStepKeyDown:b[6]||(b[6]=(D,J)=>{if(!e(c)){const M=e(he).includes(D.key)||D.shiftKey&&e(we).includes(D.key)?10:1,H=s.value,L=i.value[H],_e=e(r)*M*J;q(L+_e,H,{commit:!0})}})}),{default:K(()=>[P(S.$slots,"default",{modelValue:e(h)}),e(y)&&S.name?(_(),E(e(Ie),{key:0,type:"number",value:e(h),name:S.name,required:S.required,disabled:e(c),step:e(r)},null,8,["value","name","required","disabled","step"])):Ke("v-if",!0)]),_:3},16,["as-child","as","min","max","dir","inverted","aria-disabled","data-disabled"]))]),_:3}))}}),at=tt,nt=B({__name:"SliderImpl",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},emits:["slideStart","slideMove","slideEnd","homeKeyDown","endKeyDown","stepKeyDown"],setup(t,{emit:n}){const a=t,l=n,u=T();return(m,r)=>(_(),E(e(G),N({"data-slider-impl":""},a,{onKeydown:r[0]||(r[0]=o=>{o.key==="Home"?(l("homeKeyDown",o),o.preventDefault()):o.key==="End"?(l("endKeyDown",o),o.preventDefault()):e(he).concat(e(we)).includes(o.key)&&(l("stepKeyDown",o),o.preventDefault())}),onPointerdown:r[1]||(r[1]=o=>{const f=o.target;f.setPointerCapture(o.pointerId),o.preventDefault(),e(u).thumbElements.value.includes(f)?f.focus():l("slideStart",o)}),onPointermove:r[2]||(r[2]=o=>{o.target.hasPointerCapture(o.pointerId)&&l("slideMove",o)}),onPointerup:r[3]||(r[3]=o=>{const f=o.target;f.hasPointerCapture(o.pointerId)&&(f.releasePointerCapture(o.pointerId),l("slideEnd",o))})}),{default:K(()=>[P(m.$slots,"default")]),_:3},16))}}),De=nt,lt=B({__name:"SliderRange",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){const n=T(),a=Ve();k();const l=p(()=>n.currentModelValue.value.map(r=>ye(r,n.min.value,n.max.value))),u=p(()=>n.currentModelValue.value.length>1?Math.min(...l.value):0),m=p(()=>100-Math.max(...l.value,0));return(r,o)=>(_(),E(e(G),{"data-disabled":e(n).disabled.value?"":void 0,"data-orientation":e(n).orientation.value,"as-child":r.asChild,as:r.as,style:te({[e(a).startEdge.value]:`${u.value}%`,[e(a).endEdge.value]:`${m.value}%`})},{default:K(()=>[P(r.$slots,"default")]),_:3},8,["data-disabled","data-orientation","as-child","as","style"]))}}),rt=lt,ot=B({inheritAttrs:!1,__name:"SliderThumbImpl",props:{index:{type:Number,required:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const n=t,a=T(),l=Ve(),{forwardRef:u,currentElement:m}=k(),{CollectionItem:r}=ae(),o=p(()=>{var v,y;return(y=(v=a.modelValue)==null?void 0:v.value)==null?void 0:y[n.index]}),f=p(()=>o.value===void 0?0:ye(o.value,a.min.value??0,a.max.value??100)),c=p(()=>{var v,y;return Le(n.index,((y=(v=a.modelValue)==null?void 0:v.value)==null?void 0:y.length)??0)}),g=He(m),x=p(()=>g[l.size].value),w=p(()=>a.thumbAlignment.value==="overflow"||!x.value?0:Ye(x.value,f.value,l.direction.value)),V=$e();return Be(()=>{a.thumbElements.value.push(m.value)}),Re(()=>{const v=a.thumbElements.value.findIndex(y=>y===m.value)??-1;a.thumbElements.value.splice(v,1)}),(v,y)=>(_(),E(e(r),null,{default:K(()=>[ee(e(G),N(v.$attrs,{ref:e(u),role:"slider",tabindex:e(a).disabled.value?void 0:0,"aria-label":v.$attrs["aria-label"]||c.value,"data-disabled":e(a).disabled.value?"":void 0,"data-orientation":e(a).orientation.value,"aria-valuenow":o.value,"aria-valuemin":e(a).min.value,"aria-valuemax":e(a).max.value,"aria-orientation":e(a).orientation.value,"as-child":v.asChild,as:v.as,style:{transform:"var(--reka-slider-thumb-transform)",position:"absolute",[e(l).startEdge.value]:`calc(${f.value}% + ${w.value}px)`,display:!e(V)&&o.value===void 0?"none":void 0},onFocus:y[0]||(y[0]=()=>{e(a).valueIndexToChangeRef.value=v.index})}),{default:K(()=>[P(v.$slots,"default")]),_:3},16,["tabindex","aria-label","data-disabled","data-orientation","aria-valuenow","aria-valuemin","aria-valuemax","aria-orientation","as-child","as","style"])]),_:3}))}}),st=ot,it=B({__name:"SliderThumb",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){const n=t,{getItems:a}=ae(),{forwardRef:l,currentElement:u}=k(),m=p(()=>u.value?a(!0).findIndex(r=>r.ref===u.value):-1);return(r,o)=>(_(),E(st,N({ref:e(l)},n,{index:m.value}),{default:K(()=>[P(r.$slots,"default")]),_:3},16,["index"]))}}),ut=it,dt=B({__name:"SliderTrack",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){const n=T();return k(),(a,l)=>(_(),E(e(G),{"as-child":a.asChild,as:a.as,"data-disabled":e(n).disabled.value?"":void 0,"data-orientation":e(n).orientation.value},{default:K(()=>[P(a.$slots,"default")]),_:3},8,["as-child","as","data-disabled","data-orientation"]))}}),mt=dt;const F=B({__name:"Slider",props:{variant:{default:"default"},size:{default:"default"},orientation:{default:"horizontal"},class:{},modelValue:{},defaultValue:{},min:{default:0},max:{default:100},step:{default:1},minStepsBetweenThumbs:{},disabled:{type:Boolean},inverted:{type:Boolean},name:{}},emits:["update:modelValue"],setup(t,{emit:n}){const a=O(["relative flex w-full touch-none select-none items-center"],{variants:{orientation:{horizontal:"h-5",vertical:"h-full w-5 flex-col"}},defaultVariants:{orientation:"horizontal"}}),l=O(["relative grow overflow-hidden rounded-full bg-secondary"],{variants:{orientation:{horizontal:"h-2 w-full",vertical:"h-full w-2"}},defaultVariants:{orientation:"horizontal"}}),u=O(["absolute rounded-full"],{variants:{variant:{default:"bg-primary",destructive:"bg-destructive",success:"bg-green-500 dark:bg-green-600"},orientation:{horizontal:"h-full",vertical:"w-full"}},defaultVariants:{variant:"default",orientation:"horizontal"}}),m=O(["block rounded-full border-2 bg-background","ring-offset-background","transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2","disabled:pointer-events-none disabled:opacity-64"],{variants:{variant:{default:"border-primary",destructive:"border-destructive",success:"border-green-500 dark:border-green-600"},size:{default:"size-5",sm:"size-4",lg:"size-6"}},defaultVariants:{variant:"default",size:"default"}}),r=t,o=n,{variant:f,size:c,orientation:g,class:x}=j(r),w=p(()=>Ne(a({orientation:g.value}),x.value)),V=p(()=>l({orientation:g.value})),v=p(()=>u({variant:f.value,orientation:g.value})),y=p(()=>m({variant:f.value,size:c.value})),A=p(()=>r.modelValue?r.modelValue.length:r.defaultValue?r.defaultValue.length:1);return(h,i)=>(_(),E(e(at),N({class:w.value,"model-value":t.modelValue,"default-value":t.defaultValue,min:t.min,max:t.max,step:t.step,"min-steps-between-thumbs":t.minStepsBetweenThumbs,disabled:t.disabled,inverted:t.inverted,orientation:e(g),name:t.name},h.$attrs,{"onUpdate:modelValue":i[0]||(i[0]=s=>s&&o("update:modelValue",s))}),{default:K(()=>[ee(e(mt),{class:Z(V.value)},{default:K(()=>[ee(e(rt),{class:Z(v.value)},null,8,["class"])]),_:1},8,["class"]),(_(!0),ze(Pe,null,Ae(A.value,(s,d)=>(_(),E(e(ut),{key:d,class:Z(y.value)},null,8,["class"]))),128))]),_:1},16,["class","model-value","default-value","min","max","step","min-steps-between-thumbs","disabled","inverted","orientation","name"]))}}),qt={title:"Components/Slider",component:F,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","success"]},orientation:{control:"select",options:["horizontal","vertical"]},disabled:{control:"boolean"}}},Y={args:{variant:"default",defaultValue:[50],max:100,step:1},render:t=>({components:{Slider:F},setup(){return{args:t}},template:'<Slider v-bind="args" class="w-60" />'})},U={render:()=>({components:{Slider:F},template:`
      <div class="flex flex-col gap-6 w-60">
        <div class="space-y-2">
          <span class="text-sm text-muted-foreground">Default</span>
          <Slider variant="default" :default-value="[50]" :max="100" :step="1" />
        </div>
        <div class="space-y-2">
          <span class="text-sm text-muted-foreground">Success</span>
          <Slider variant="success" :default-value="[75]" :max="100" :step="1" />
        </div>
        <div class="space-y-2">
          <span class="text-sm text-muted-foreground">Destructive</span>
          <Slider variant="destructive" :default-value="[25]" :max="100" :step="1" />
        </div>
      </div>
    `})},W={render:()=>({components:{Slider:F},setup(){return{value:z([25,75])}},template:`
      <div class="space-y-2 w-60">
        <span class="text-sm text-muted-foreground">Range: {{ value[0] }} - {{ value[1] }}</span>
        <Slider v-model="value" :max="100" :step="1" />
      </div>
    `})},X={args:{disabled:!0,defaultValue:[50],max:100},render:t=>({components:{Slider:F},setup(){return{args:t}},template:'<Slider v-bind="args" class="w-60" />'})};var re,oe,se;Y.parameters={...Y.parameters,docs:{...(re=Y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    defaultValue: [50],
    max: 100,
    step: 1
  },
  render: args => ({
    components: {
      Slider
    },
    setup() {
      return {
        args
      };
    },
    template: '<Slider v-bind="args" class="w-60" />'
  })
}`,...(se=(oe=Y.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,ue,de;U.parameters={...U.parameters,docs:{...(ie=U.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Slider
    },
    template: \`
      <div class="flex flex-col gap-6 w-60">
        <div class="space-y-2">
          <span class="text-sm text-muted-foreground">Default</span>
          <Slider variant="default" :default-value="[50]" :max="100" :step="1" />
        </div>
        <div class="space-y-2">
          <span class="text-sm text-muted-foreground">Success</span>
          <Slider variant="success" :default-value="[75]" :max="100" :step="1" />
        </div>
        <div class="space-y-2">
          <span class="text-sm text-muted-foreground">Destructive</span>
          <Slider variant="destructive" :default-value="[25]" :max="100" :step="1" />
        </div>
      </div>
    \`
  })
}`,...(de=(ue=U.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,ve,pe;W.parameters={...W.parameters,docs:{...(me=W.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Slider
    },
    setup() {
      const value = ref([25, 75]);
      return {
        value
      };
    },
    template: \`
      <div class="space-y-2 w-60">
        <span class="text-sm text-muted-foreground">Range: {{ value[0] }} - {{ value[1] }}</span>
        <Slider v-model="value" :max="100" :step="1" />
      </div>
    \`
  })
}`,...(pe=(ve=W.parameters)==null?void 0:ve.docs)==null?void 0:pe.source}}};var fe,ce,ge;X.parameters={...X.parameters,docs:{...(fe=X.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: [50],
    max: 100
  },
  render: args => ({
    components: {
      Slider
    },
    setup() {
      return {
        args
      };
    },
    template: '<Slider v-bind="args" class="w-60" />'
  })
}`,...(ge=(ce=X.parameters)==null?void 0:ce.docs)==null?void 0:ge.source}}};const Bt=["Default","Variants","Range","Disabled"];export{Y as Default,X as Disabled,W as Range,U as Variants,Bt as __namedExportsOrder,qt as default};
