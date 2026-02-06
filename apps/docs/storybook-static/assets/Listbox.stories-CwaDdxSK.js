import{d as y,B as je,w as ze,n as R,C as g,D as h,E as L,G as C,f as e,F as qe,r as I,L as Q,a0 as D,a1 as ie,a8 as Xe,o as Je,a as Qe,c as _,K as w,a9 as Ye}from"./vue.esm-bundler-BitZzlT5.js";import{u as le,a as re}from"./useForwardPropsEmits-DQ7cY2da.js";import{f as Ze}from"./arrays-B6bjiBgC.js";import{c as ue}from"./createContext-Fl0g0pNq.js";import{u as et}from"./useDirection-C1R3tBjc.js";import{u as tt}from"./useFormControl-DEb_yQqi.js";import{u as ot}from"./useTypeahead-siFnJEHo.js";import{P as S}from"./Primitive-B5VkAsKh.js";import{u as ke}from"./usePrimitiveElement-JmSCNQYd.js";import{u as de}from"./Collection-CCDXBU9V.js";import{g as at}from"./utils-D788IsuB.js";import{V as st}from"./VisuallyHiddenInput-CSZpUBkU.js";import{i as nt}from"./ohash.D__AXeF1-Cq3NGnZa.js";import{a as Ke}from"./index-BGV6KQZa.js";import{d as ne,r as it}from"./index-CvzWs3kq.js";import{u as Oe}from"./useId-DKCHXeQR.js";import{h as lt}from"./handleAndDispatchCustomEvent-ChOKVcqp.js";import{u as Ve}from"./useForwardExpose-ClhNePUc.js";import{W as k}from"./cn-gWiv5-6R-CwNMvQqb.js";import{I as rt}from"./iconify-C6s_K7BB.js";import"./ConfigProvider-CB94jlZd.js";import"./getActiveElement-FUKBWQwh.js";import"./VisuallyHidden-BLZVLwmx.js";function ut(){return{ALT:"Alt",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",BACKSPACE:"Backspace",CAPS_LOCK:"CapsLock",CONTROL:"Control",DELETE:"Delete",END:"End",ENTER:"Enter",ESCAPE:"Escape",F1:"F1",F10:"F10",F11:"F11",F12:"F12",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",HOME:"Home",META:"Meta",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SHIFT:"Shift",SPACE:" ",TAB:"Tab",CTRL:"Control",ASTERISK:"*",SPACE_CODE:"Space"}}function dt(a,s,o){return a===void 0?!1:Array.isArray(a)?a.some(n=>T(n,s,o)):T(a,s,o)}function T(a,s,o){return a===void 0||s===void 0?!1:typeof a=="string"?a===s:typeof o=="function"?o(a,s):typeof o=="string"?(a==null?void 0:a[o])===(s==null?void 0:s[o]):nt(a,s)}const[pe,pt]=ue("ListboxRoot");var ct=y({__name:"ListboxRoot",props:{modelValue:{type:null,required:!1},defaultValue:{type:null,required:!1},multiple:{type:Boolean,required:!1},orientation:{type:String,required:!1,default:"vertical"},dir:{type:String,required:!1},disabled:{type:Boolean,required:!1},selectionBehavior:{type:String,required:!1,default:"toggle"},highlightOnHover:{type:Boolean,required:!1},by:{type:[String,Function],required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["update:modelValue","highlight","entryFocus","leave"],setup(a,{expose:s,emit:o}){const n=a,u=o,{multiple:r,highlightOnHover:c,orientation:E,disabled:d,selectionBehavior:A,dir:b}=je(n),{getItems:v}=de({isProvider:!0}),{handleTypeaheadSearch:O}=ot(),{primitiveElement:$,currentElement:m}=ke(),G=ut(),Y=et(b),Pe=tt(m),W=I(),V=I(!1),Z=I(!0),x=Ke(n,"modelValue",u,{defaultValue:n.defaultValue??(r.value?[]:void 0),passive:n.modelValue===void 0,deep:!0});function Re(t){if(V.value=!0,n.multiple){const i=Array.isArray(x.value)?[...x.value]:[],l=i.findIndex(p=>T(p,t,n.by));n.selectionBehavior==="toggle"?(l===-1?i.push(t):i.splice(l,1),x.value=i):(x.value=[t],W.value=t)}else n.selectionBehavior==="toggle"&&T(x.value,t,n.by)?x.value=void 0:x.value=t;setTimeout(()=>{V.value=!1},1)}const f=I(null),ee=I(null),q=I(!1),te=I(!1),ce=ne(),oe=ne(),me=ne();function ae(){return v().map(t=>t.ref).filter(t=>t.dataset.disabled!=="")}function F(t,i=!0){if(!t)return;f.value=t,Z.value&&f.value.focus(),i&&f.value.scrollIntoView({block:"nearest"});const l=v().find(p=>p.ref===t);u("highlight",l)}function Te(t){if(q.value)me.trigger(t);else{const i=v().find(l=>T(l.value,t,n.by));i&&(f.value=i.ref,F(i.ref))}}function De(t){f.value&&f.value.isConnected&&(t.preventDefault(),t.stopPropagation(),te.value||f.value.click())}function Me(t){if(Z.value){if(V.value=!0,q.value)oe.trigger(t);else{const i=t.altKey||t.ctrlKey||t.metaKey;if(i&&t.key==="a"&&r.value){const l=v(),p=l.map(B=>B.value);x.value=[...p],t.preventDefault(),F(l[l.length-1].ref)}else if(!i){const l=O(t.key,v());l&&F(l)}}setTimeout(()=>{V.value=!1},1)}}function He(){te.value=!0}function $e(){R(()=>{te.value=!1})}function be(){R(()=>{const t=new KeyboardEvent("keydown",{key:"PageUp"});xe(t)})}function se(t){const i=f.value;i!=null&&i.isConnected&&(ee.value=i),f.value=null,u("leave",t)}function We(t){var l,p;const i=new CustomEvent("listbox.entryFocus",{bubbles:!1,cancelable:!0});if((l=t.currentTarget)==null||l.dispatchEvent(i),u("entryFocus",i),!i.defaultPrevented)if(ee.value)F(ee.value);else{const B=(p=ae())==null?void 0:p[0];F(B)}}function xe(t){const i=at(t,E.value,Y.value);if(!i)return;let l=ae();if(f.value){if(i==="last")l.reverse();else if(i==="prev"||i==="next"){i==="prev"&&l.reverse();const p=l.indexOf(f.value);l=l.slice(p+1)}Ne(t,l[0])}if(l.length){const p=!f.value&&i==="prev"?l.length-1:0;F(l[p])}if(q.value)return oe.trigger(t)}function Ne(t,i){var p;if(!(q.value||n.selectionBehavior!=="replace"||!r.value||!Array.isArray(x.value)||(t.altKey||t.ctrlKey||t.metaKey)&&!t.shiftKey)&&t.shiftKey){const B=v().filter(P=>P.ref.dataset.disabled!=="");let N=(p=B.find(P=>P.ref===i))==null?void 0:p.value;if(t.key===G.END?N=B[B.length-1].value:t.key===G.HOME&&(N=B[0].value),!N||!W.value)return;const Ue=Ze(B.map(P=>P.value),W.value,N);x.value=Ue}}async function fe(t){if(await R(),q.value)ce.trigger(t);else{const i=ae(),l=i.find(p=>p.dataset.state==="checked");l?F(l):i.length&&F(i[0])}}return ze(x,()=>{V.value||R(()=>{fe()})},{immediate:!0,deep:!0}),s({highlightedElement:f,highlightItem:Te,highlightFirstItem:be,highlightSelected:fe,getItems:v}),pt({modelValue:x,onValueChange:Re,multiple:r,orientation:E,dir:Y,disabled:d,highlightOnHover:c,highlightedElement:f,isVirtual:q,virtualFocusHook:ce,virtualKeydownHook:oe,virtualHighlightHook:me,by:n.by,firstValue:W,selectionBehavior:A,focusable:Z,onLeave:se,onEnter:We,changeHighlight:F,onKeydownEnter:De,onKeydownNavigation:xe,onKeydownTypeAhead:Me,onCompositionStart:He,onCompositionEnd:$e,highlightFirstItem:be}),(t,i)=>(g(),h(e(S),{ref_key:"primitiveElement",ref:$,as:t.as,"as-child":t.asChild,dir:e(Y),"data-disabled":e(d)?"":void 0,onPointerleave:se,onFocusout:i[0]||(i[0]=async l=>{const p=l.relatedTarget||l.target;await R(),f.value&&e(m)&&!e(m).contains(p)&&se(l)})},{default:L(()=>[C(t.$slots,"default",{modelValue:e(x)}),e(Pe)&&t.name?(g(),h(e(st),{key:0,name:t.name,value:e(x),disabled:e(d),required:t.required},null,8,["name","value","disabled","required"])):qe("v-if",!0)]),_:3},8,["as","as-child","dir","data-disabled"]))}}),mt=ct,bt=y({__name:"ListboxContent",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(a){const{CollectionSlot:s}=de(),o=pe(),n=it(!1,10);return(u,r)=>(g(),h(e(s),null,{default:L(()=>[Q(e(S),{role:"listbox",as:u.as,"as-child":u.asChild,tabindex:e(o).focusable.value?e(o).highlightedElement.value?"-1":"0":"-1","aria-orientation":e(o).orientation.value,"aria-multiselectable":!!e(o).multiple.value,"data-orientation":e(o).orientation.value,onMousedown:r[0]||(r[0]=ie(c=>n.value=!0,["left"])),onFocus:r[1]||(r[1]=c=>{e(n)||e(o).onEnter(c)}),onKeydown:[r[2]||(r[2]=D(c=>{e(o).orientation.value==="vertical"&&(c.key==="ArrowLeft"||c.key==="ArrowRight")||e(o).orientation.value==="horizontal"&&(c.key==="ArrowUp"||c.key==="ArrowDown")||(c.preventDefault(),e(o).focusable.value&&e(o).onKeydownNavigation(c))},["down","up","left","right","home","end"])),D(e(o).onKeydownEnter,["enter"]),e(o).onKeydownTypeAhead]},{default:L(()=>[C(u.$slots,"default")]),_:3},8,["as","as-child","tabindex","aria-orientation","aria-multiselectable","data-orientation","onKeydown"])]),_:3}))}}),xt=bt,ft=y({__name:"ListboxFilter",props:{modelValue:{type:String,required:!1},autoFocus:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"input"}},emits:["update:modelValue"],setup(a,{emit:s}){const o=a,u=Ke(o,"modelValue",s,{defaultValue:"",passive:o.modelValue===void 0}),r=pe(),{primitiveElement:c,currentElement:E}=ke(),d=_(()=>o.disabled||r.disabled.value||!1),A=I();return Xe(()=>{var b;return A.value=(b=r.highlightedElement.value)==null?void 0:b.id}),Je(()=>{r.focusable.value=!1,setTimeout(()=>{var b;o.autoFocus&&((b=E.value)==null||b.focus())},1)}),Qe(()=>{r.focusable.value=!0}),(b,v)=>(g(),h(e(S),{ref_key:"primitiveElement",ref:c,as:b.as,"as-child":b.asChild,value:e(u),disabled:d.value?"":void 0,"data-disabled":d.value?"":void 0,"aria-disabled":d.value??void 0,"aria-activedescendant":A.value,type:"text",onKeydown:[D(ie(e(r).onKeydownNavigation,["prevent"]),["down","up","home","end"]),D(e(r).onKeydownEnter,["enter"])],onInput:v[0]||(v[0]=O=>{u.value=O.target.value,e(r).highlightFirstItem()}),onCompositionstart:e(r).onCompositionStart,onCompositionend:e(r).onCompositionEnd},{default:L(()=>[C(b.$slots,"default",{modelValue:e(u)})]),_:3},8,["as","as-child","value","disabled","data-disabled","aria-disabled","aria-activedescendant","onKeydown","onCompositionstart","onCompositionend"]))}}),Lt=ft;const[vt,gt]=ue("ListboxGroup");var ht=y({__name:"ListboxGroup",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(a){const s=a,o=Oe(void 0,"reka-listbox-group");return gt({id:o}),(n,u)=>(g(),h(e(S),w({role:"group"},s,{"aria-labelledby":e(o)}),{default:L(()=>[C(n.$slots,"default")]),_:3},16,["aria-labelledby"]))}}),It=ht,yt=y({__name:"ListboxGroupLabel",props:{for:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},setup(a){const s=a,o=vt({id:""});return(n,u)=>(g(),h(e(S),w(s,{id:e(o).id}),{default:L(()=>[C(n.$slots,"default")]),_:3},16,["id"]))}}),Ct=yt;const _t="listbox.select",[wt,Et]=ue("ListboxItem");var Ft=y({__name:"ListboxItem",props:{value:{type:null,required:!0},disabled:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},emits:["select"],setup(a,{emit:s}){const o=a,n=s,u=Oe(void 0,"reka-listbox-item"),{CollectionItem:r}=de(),{forwardRef:c,currentElement:E}=Ve(),d=pe(),A=_(()=>E.value===d.highlightedElement.value),b=_(()=>dt(d.modelValue.value,o.value,d.by)),v=_(()=>d.disabled.value||o.disabled);async function O(m){n("select",m),!(m!=null&&m.defaultPrevented)&&!v.value&&m&&(d.onValueChange(o.value),d.changeHighlight(E.value))}function $(m){const G={originalEvent:m,value:o.value};lt(_t,O,G)}return Et({isSelected:b}),(m,G)=>(g(),h(e(r),{value:m.value},{default:L(()=>[Ye([A.value,b.value],()=>Q(e(S),w({id:e(u)},m.$attrs,{ref:e(c),role:"option",tabindex:e(d).focusable.value?A.value?"0":"-1":-1,"aria-selected":b.value,as:m.as,"as-child":m.asChild,disabled:v.value?"":void 0,"data-disabled":v.value?"":void 0,"data-highlighted":A.value?"":void 0,"data-state":b.value?"checked":"unchecked",onClick:$,onKeydown:D(ie($,["prevent"]),["space"]),onPointermove:G[0]||(G[0]=()=>{e(d).highlightedElement.value!==e(E)&&e(d).highlightOnHover.value&&!e(d).focusable.value&&e(d).changeHighlight(e(E),!1)})}),{default:L(()=>[C(m.$slots,"default")]),_:3},16,["id","tabindex","aria-selected","as","as-child","disabled","data-disabled","data-highlighted","data-state","onKeydown"]),G,1)]),_:3},8,["value"]))}}),Bt=Ft,At=y({__name:"ListboxItemIndicator",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(a){const s=a;Ve();const o=wt();return(n,u)=>e(o).isSelected.value?(g(),h(e(S),w({key:0,"aria-hidden":"true"},s),{default:L(()=>[C(n.$slots,"default")]),_:3},16)):qe("v-if",!0)}}),Gt=At;const K=y({__name:"Listbox",props:{class:{},modelValue:{},defaultValue:{},multiple:{type:Boolean},orientation:{},dir:{},disabled:{type:Boolean},selectionBehavior:{},highlightOnHover:{type:Boolean},by:{type:[String,Function]},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean}},emits:["update:modelValue","highlight","entryFocus","leave"],setup(a,{emit:s}){const o=a,n=le(o,s),u=_(()=>k(["flex flex-col gap-1 overflow-hidden","rounded-xl border border-input","bg-popover text-popover-foreground","focus:outline-none"],o.class));return(r,c)=>(g(),h(e(mt),w(e(n),{class:u.value}),{default:L(()=>[C(r.$slots,"default")]),_:3},16,["class"]))}}),M=y({__name:"ListboxContent",props:{class:{},asChild:{type:Boolean},as:{}},setup(a){const s=a,o=re(s),n=_(()=>k("flex flex-col gap-0.5 p-1",s.class));return(u,r)=>(g(),h(e(xt),w(e(o),{class:n.value}),{default:L(()=>[C(u.$slots,"default")]),_:3},16,["class"]))}}),H=y({__name:"ListboxItem",props:{class:{},value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["select"],setup(a,{emit:s}){const o=a,n=le(o,s),u=_(()=>k(["relative flex w-full cursor-default select-none items-center gap-2","py-1.5 pl-8 pr-2","text-sm","rounded-lg","outline-none transition-colors","data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground","data-[disabled]:pointer-events-none data-[disabled]:opacity-64"],o.class));return(r,c)=>(g(),h(e(Bt),w(e(n),{class:u.value}),{default:L(()=>[Q(e(Gt),{class:"absolute left-2 flex size-3.5 items-center justify-center"},{default:L(()=>[Q(e(rt),{icon:"hugeicons:tick-02",width:"14",height:"14"})]),_:1}),C(r.$slots,"default")]),_:3},16,["class"]))}}),St=y({__name:"ListboxGroup",props:{class:{},asChild:{type:Boolean},as:{}},setup(a){const s=a,o=re(s),n=_(()=>k("overflow-hidden",s.class));return(u,r)=>(g(),h(e(It),w(e(o),{class:n.value}),{default:L(()=>[C(u.$slots,"default")]),_:3},16,["class"]))}}),qt=y({__name:"ListboxGroupLabel",props:{class:{},for:{},asChild:{type:Boolean},as:{}},setup(a){const s=a,o=re(s),n=_(()=>k("px-2 py-1.5 text-xs font-medium text-muted-foreground",s.class));return(u,r)=>(g(),h(e(Ct),w(e(o),{class:n.value}),{default:L(()=>[C(u.$slots,"default")]),_:3},16,["class"]))}}),kt=y({__name:"ListboxFilter",props:{class:{},modelValue:{},autoFocus:{type:Boolean},disabled:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(a,{emit:s}){const o=a,n=le(o,s),u=_(()=>k(["flex w-full","rounded-lg border-b border-input","bg-transparent text-foreground","px-3 py-2 text-sm","placeholder:text-muted-foreground","focus:outline-none","disabled:cursor-not-allowed disabled:opacity-64"],o.class));return(r,c)=>(g(),h(e(Lt),w(e(n),{class:u.value}),null,16,["class"]))}}),ao={title:"Components/Listbox",component:K,tags:["autodocs"]},U={render:()=>({components:{Listbox:K,ListboxContent:M,ListboxItem:H},setup(){return{selected:I("")}},template:`
      <Listbox v-model="selected" class="w-[200px]">
        <ListboxContent>
          <ListboxItem value="apple">Apple</ListboxItem>
          <ListboxItem value="banana">Banana</ListboxItem>
          <ListboxItem value="orange">Orange</ListboxItem>
          <ListboxItem value="grape">Grape</ListboxItem>
          <ListboxItem value="mango">Mango</ListboxItem>
        </ListboxContent>
      </Listbox>
    `})},j={render:()=>({components:{Listbox:K,ListboxContent:M,ListboxItem:H},setup(){return{selected:I([])}},template:`
      <Listbox v-model="selected" multiple class="w-[200px]">
        <ListboxContent>
          <ListboxItem value="apple">Apple</ListboxItem>
          <ListboxItem value="banana">Banana</ListboxItem>
          <ListboxItem value="orange">Orange</ListboxItem>
          <ListboxItem value="grape">Grape</ListboxItem>
          <ListboxItem value="mango">Mango</ListboxItem>
        </ListboxContent>
      </Listbox>
    `})},z={render:()=>({components:{Listbox:K,ListboxContent:M,ListboxItem:H,ListboxGroup:St,ListboxGroupLabel:qt},setup(){return{selected:I("")}},template:`
      <Listbox v-model="selected" class="w-[220px]">
        <ListboxContent>
          <ListboxGroup>
            <ListboxGroupLabel>Fruits</ListboxGroupLabel>
            <ListboxItem value="apple">Apple</ListboxItem>
            <ListboxItem value="banana">Banana</ListboxItem>
            <ListboxItem value="orange">Orange</ListboxItem>
          </ListboxGroup>
          <ListboxGroup>
            <ListboxGroupLabel>Vegetables</ListboxGroupLabel>
            <ListboxItem value="carrot">Carrot</ListboxItem>
            <ListboxItem value="broccoli">Broccoli</ListboxItem>
            <ListboxItem value="spinach">Spinach</ListboxItem>
          </ListboxGroup>
        </ListboxContent>
      </Listbox>
    `})},X={render:()=>({components:{Listbox:K,ListboxContent:M,ListboxItem:H,ListboxFilter:kt},setup(){return{selected:I("")}},template:`
      <Listbox v-model="selected" class="w-[220px]">
        <ListboxFilter placeholder="Search fruits..." />
        <ListboxContent>
          <ListboxItem value="apple">Apple</ListboxItem>
          <ListboxItem value="banana">Banana</ListboxItem>
          <ListboxItem value="orange">Orange</ListboxItem>
          <ListboxItem value="grape">Grape</ListboxItem>
          <ListboxItem value="mango">Mango</ListboxItem>
          <ListboxItem value="strawberry">Strawberry</ListboxItem>
          <ListboxItem value="blueberry">Blueberry</ListboxItem>
        </ListboxContent>
      </Listbox>
    `})},J={render:()=>({components:{Listbox:K,ListboxContent:M,ListboxItem:H},setup(){return{selected:I("")}},template:`
      <Listbox v-model="selected" disabled class="w-[200px]">
        <ListboxContent>
          <ListboxItem value="apple">Apple</ListboxItem>
          <ListboxItem value="banana">Banana</ListboxItem>
          <ListboxItem value="orange">Orange</ListboxItem>
        </ListboxContent>
      </Listbox>
    `})};var Le,ve,ge;U.parameters={...U.parameters,docs:{...(Le=U.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Listbox,
      ListboxContent,
      ListboxItem
    },
    setup() {
      const selected = ref('');
      return {
        selected
      };
    },
    template: \`
      <Listbox v-model="selected" class="w-[200px]">
        <ListboxContent>
          <ListboxItem value="apple">Apple</ListboxItem>
          <ListboxItem value="banana">Banana</ListboxItem>
          <ListboxItem value="orange">Orange</ListboxItem>
          <ListboxItem value="grape">Grape</ListboxItem>
          <ListboxItem value="mango">Mango</ListboxItem>
        </ListboxContent>
      </Listbox>
    \`
  })
}`,...(ge=(ve=U.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var he,Ie,ye;j.parameters={...j.parameters,docs:{...(he=j.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Listbox,
      ListboxContent,
      ListboxItem
    },
    setup() {
      const selected = ref<string[]>([]);
      return {
        selected
      };
    },
    template: \`
      <Listbox v-model="selected" multiple class="w-[200px]">
        <ListboxContent>
          <ListboxItem value="apple">Apple</ListboxItem>
          <ListboxItem value="banana">Banana</ListboxItem>
          <ListboxItem value="orange">Orange</ListboxItem>
          <ListboxItem value="grape">Grape</ListboxItem>
          <ListboxItem value="mango">Mango</ListboxItem>
        </ListboxContent>
      </Listbox>
    \`
  })
}`,...(ye=(Ie=j.parameters)==null?void 0:Ie.docs)==null?void 0:ye.source}}};var Ce,_e,we;z.parameters={...z.parameters,docs:{...(Ce=z.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Listbox,
      ListboxContent,
      ListboxItem,
      ListboxGroup,
      ListboxGroupLabel
    },
    setup() {
      const selected = ref('');
      return {
        selected
      };
    },
    template: \`
      <Listbox v-model="selected" class="w-[220px]">
        <ListboxContent>
          <ListboxGroup>
            <ListboxGroupLabel>Fruits</ListboxGroupLabel>
            <ListboxItem value="apple">Apple</ListboxItem>
            <ListboxItem value="banana">Banana</ListboxItem>
            <ListboxItem value="orange">Orange</ListboxItem>
          </ListboxGroup>
          <ListboxGroup>
            <ListboxGroupLabel>Vegetables</ListboxGroupLabel>
            <ListboxItem value="carrot">Carrot</ListboxItem>
            <ListboxItem value="broccoli">Broccoli</ListboxItem>
            <ListboxItem value="spinach">Spinach</ListboxItem>
          </ListboxGroup>
        </ListboxContent>
      </Listbox>
    \`
  })
}`,...(we=(_e=z.parameters)==null?void 0:_e.docs)==null?void 0:we.source}}};var Ee,Fe,Be;X.parameters={...X.parameters,docs:{...(Ee=X.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Listbox,
      ListboxContent,
      ListboxItem,
      ListboxFilter
    },
    setup() {
      const selected = ref('');
      return {
        selected
      };
    },
    template: \`
      <Listbox v-model="selected" class="w-[220px]">
        <ListboxFilter placeholder="Search fruits..." />
        <ListboxContent>
          <ListboxItem value="apple">Apple</ListboxItem>
          <ListboxItem value="banana">Banana</ListboxItem>
          <ListboxItem value="orange">Orange</ListboxItem>
          <ListboxItem value="grape">Grape</ListboxItem>
          <ListboxItem value="mango">Mango</ListboxItem>
          <ListboxItem value="strawberry">Strawberry</ListboxItem>
          <ListboxItem value="blueberry">Blueberry</ListboxItem>
        </ListboxContent>
      </Listbox>
    \`
  })
}`,...(Be=(Fe=X.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source}}};var Ae,Ge,Se;J.parameters={...J.parameters,docs:{...(Ae=J.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Listbox,
      ListboxContent,
      ListboxItem
    },
    setup() {
      const selected = ref('');
      return {
        selected
      };
    },
    template: \`
      <Listbox v-model="selected" disabled class="w-[200px]">
        <ListboxContent>
          <ListboxItem value="apple">Apple</ListboxItem>
          <ListboxItem value="banana">Banana</ListboxItem>
          <ListboxItem value="orange">Orange</ListboxItem>
        </ListboxContent>
      </Listbox>
    \`
  })
}`,...(Se=(Ge=J.parameters)==null?void 0:Ge.docs)==null?void 0:Se.source}}};const so=["Default","Multiple","WithGroups","WithFilter","Disabled"];export{U as Default,J as Disabled,j as Multiple,X as WithFilter,z as WithGroups,so as __namedExportsOrder,ao as default};
