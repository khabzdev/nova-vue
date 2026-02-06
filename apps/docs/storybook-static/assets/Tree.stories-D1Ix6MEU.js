import{r as w,d as z,B as fe,C as q,D as G,E as D,L as se,f as v,a0 as M,a1 as R,G as L,c as k,n as ve,K as de,Y as ge,Z as ye,I as U,H as Z,J as Q,a4 as he,a5 as xe,R as Te}from"./vue.esm-bundler-BitZzlT5.js";import{u as be}from"./useForwardPropsEmits-DQ7cY2da.js";import{c as Ie}from"./createContext-Fl0g0pNq.js";import{g as W}from"./getActiveElement-FUKBWQwh.js";import{u as Ce}from"./useDirection-C1R3tBjc.js";import{f as H}from"./arrays-B6bjiBgC.js";import{u as Ke}from"./useTypeahead-siFnJEHo.js";import{P as oe}from"./Primitive-B5VkAsKh.js";import{M as Se}from"./utils-D788IsuB.js";import{R as ke}from"./RovingFocusGroup-mrBWr27v.js";import{a as X}from"./index-BGV6KQZa.js";import{d as _e}from"./index-CvzWs3kq.js";import{h as ee}from"./handleAndDispatchCustomEvent-ChOKVcqp.js";import{u as Ee}from"./Collection-CCDXBU9V.js";import{R as Ae}from"./RovingFocusItem-C_b6YGFL.js";import{W as ue}from"./cn-gWiv5-6R-CwNMvQqb.js";import"./ConfigProvider-CB94jlZd.js";import"./ohash.D__AXeF1-Cq3NGnZa.js";import"./usePrimitiveElement-JmSCNQYd.js";import"./useId-DKCHXeQR.js";function we(a,r){const e=w(),o=(t,h)=>{if(r.multiple&&Array.isArray(a.value))if(r.selectionBehavior==="replace")a.value=[t],e.value=t;else{const f=a.value.findIndex(s=>h(s));f!==-1?a.value=a.value.filter((s,x)=>x!==f):a.value=[...a.value,t]}else r.selectionBehavior==="replace"?a.value={...t}:!Array.isArray(a.value)&&h(a.value)?a.value=void 0:a.value={...t};return a.value};function T(t,h,f,s){var I;if(!(e!=null&&e.value)||!r.multiple||!Array.isArray(a.value))return;const _=(I=f().filter(C=>C.ref.dataset.disabled!=="").find(C=>C.ref===h))==null?void 0:I.value;if(!_)return;let b=null;switch(t){case"prev":case"next":{b=H(s,e.value,_);break}case"first":{b=H(s,e.value,s==null?void 0:s[0]);break}case"last":{b=H(s,e.value,s==null?void 0:s[s.length-1]);break}}a.value=b}return{firstValue:e,onSelectItem:o,handleMultipleReplace:T}}function O(a){return a.reduce((r,e)=>(r.push(e),e.children&&r.push(...O(e.children)),r),[])}const[Be,Re]=Ie("TreeRoot");var qe=z({__name:"TreeRoot",props:{modelValue:{type:null,required:!1},defaultValue:{type:null,required:!1},items:{type:Array,required:!1},expanded:{type:Array,required:!1},defaultExpanded:{type:Array,required:!1},getKey:{type:Function,required:!0},getChildren:{type:Function,required:!1,default:a=>a.children},selectionBehavior:{type:String,required:!1,default:"toggle"},multiple:{type:Boolean,required:!1,skipCheck:!0},dir:{type:String,required:!1},disabled:{type:Boolean,required:!1},propagateSelect:{type:Boolean,required:!1},bubbleSelect:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"ul"}},emits:["update:modelValue","update:expanded"],setup(a,{emit:r}){const e=a,o=r,{items:T,multiple:t,disabled:h,propagateSelect:f,dir:s,bubbleSelect:x}=fe(e),{handleTypeaheadSearch:_}=Ke(),b=Ce(s),I=w(),C=w(!1),N=_e(),d=X(e,"modelValue",o,{defaultValue:e.defaultValue??(t.value?[]:void 0),passive:!0,deep:!0}),g=X(e,"expanded",o,{defaultValue:e.defaultExpanded??[],passive:e.expanded===void 0,deep:!0}),{onSelectItem:l,handleMultipleReplace:i}=we(d,e),u=k(()=>t.value&&Array.isArray(d.value)?d.value.map(n=>e.getKey(n)):[e.getKey(d.value??{})]);function B(n,c=1,m){return n.reduce((y,p,S)=>{const P=e.getKey(p),j=e.getChildren(p),me=g.value.includes(P),pe={_id:P,value:p,index:S,level:c,parentItem:m,hasChildren:!!j,bind:{value:p,level:c,"aria-setsize":n.length,"aria-posinset":S+1}};return y.push(pe),j&&me&&y.push(...B(j,c+1,p)),y},[])}const E=k(()=>{const n=e.items;return g.value.map(c=>c),B(n??[])});function A(n){var c;if(C.value)N.trigger(n);else{const m=((c=I.value)==null?void 0:c.getItems())??[];_(n.key,m)}}function K(n){if(C.value)return;const c=Se[n.key];ve(()=>{var m;i(c,W(),(m=I.value)==null?void 0:m.getItems,E.value.map(y=>y.value))})}function J(n){var c;if(n.parentItem!=null&&Array.isArray(d.value)&&e.multiple){const m=E.value.find(y=>n.parentItem!=null&&e.getKey(y.value)===e.getKey(n.parentItem));m!=null&&(((c=e.getChildren(m.value))==null?void 0:c.every(p=>d.value.find(S=>e.getKey(S)===e.getKey(p))))?d.value=[...d.value,m.value]:d.value=d.value.filter(p=>e.getKey(p)!==e.getKey(m.value)),J(m))}}return Re({modelValue:d,selectedKeys:u,onSelect:n=>{var y;const c=p=>e.getKey(p??{})===e.getKey(n),m=e.multiple&&Array.isArray(d.value)?((y=d.value)==null?void 0:y.findIndex(c))!==-1:void 0;if(l(n,c),e.bubbleSelect&&e.multiple&&Array.isArray(d.value)){const p=E.value.find(S=>e.getKey(S.value)===e.getKey(n));p!=null&&J(p)}if(e.propagateSelect&&e.multiple&&Array.isArray(d.value)){const p=O(e.getChildren(n)??[]);m?d.value=[...d.value].filter(S=>!p.some(P=>e.getKey(S??{})===e.getKey(P))):d.value=[...d.value,...p]}},expanded:g,onToggle(n){if(!(n?e.getChildren(n):void 0))return;const m=e.getKey(n)??n;g.value.includes(m)?g.value=g.value.filter(y=>y!==m):g.value=[...g.value,m]},getKey:e.getKey,getChildren:e.getChildren,items:T,expandedItems:E,disabled:h,multiple:t,dir:b,propagateSelect:f,bubbleSelect:x,isVirtual:C,virtualKeydownHook:N,handleMultipleReplace:i}),(n,c)=>(q(),G(v(ke),{ref_key:"rovingFocusGroupRef",ref:I,"as-child":"",orientation:"vertical",dir:v(b)},{default:D(()=>[se(v(oe),{role:"tree",as:n.as,"as-child":n.asChild,"aria-multiselectable":v(t)?!0:void 0,onKeydown:[A,M(R(K,["shift"]),["up","down"])]},{default:D(()=>[L(n.$slots,"default",{flattenItems:E.value,modelValue:v(d),expanded:v(g)})]),_:3},8,["as","as-child","aria-multiselectable","onKeydown"])]),_:3},8,["dir"]))}}),De=qe;const Ne="tree.select",Pe="tree.toggle";var Fe=z({inheritAttrs:!1,__name:"TreeItem",props:{value:{type:null,required:!0},level:{type:Number,required:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"li"}},emits:["select","toggle"],setup(a,{expose:r,emit:e}){const o=a,T=e,t=Be(),{getItems:h}=Ee(),f=k(()=>!!t.getChildren(o.value)),s=k(()=>{const l=t.getKey(o.value);return t.expanded.value.includes(l)}),x=k(()=>{const l=t.getKey(o.value);return t.selectedKeys.value.includes(l)}),_=k(()=>{if(t.bubbleSelect.value&&f.value&&Array.isArray(t.modelValue.value)){const l=O(t.getChildren(o.value)||[]);return l.some(i=>t.modelValue.value.find(u=>t.getKey(u)===t.getKey(i)))&&!l.every(i=>t.modelValue.value.find(u=>t.getKey(u)===t.getKey(i)))}else return t.propagateSelect.value&&x.value&&f.value&&Array.isArray(t.modelValue.value)?!O(t.getChildren(o.value)||[]).every(i=>t.modelValue.value.find(u=>t.getKey(u)===t.getKey(i))):void 0});function b(l){if(f.value)if(s.value){const i=h().map(K=>K.ref),u=W(),B=i.indexOf(u),A=[...i].slice(B).find(K=>Number(K.getAttribute("data-indent"))===o.level+1);A&&A.focus()}else g(l)}function I(l){if(s.value)g(l);else{const i=h().map(K=>K.ref),u=W(),B=i.indexOf(u),A=[...i].slice(0,B).reverse().find(K=>Number(K.getAttribute("data-indent"))===o.level-1);A&&A.focus()}}async function C(l){T("select",l),!(l!=null&&l.defaultPrevented)&&t.onSelect(o.value)}async function N(l){T("toggle",l),!(l!=null&&l.defaultPrevented)&&t.onToggle(o.value)}async function d(l){if(!l)return;const i={originalEvent:l,value:o.value,isExpanded:s.value,isSelected:x.value};ee(Ne,C,i)}async function g(l){if(!l)return;const i={originalEvent:l,value:o.value,isExpanded:s.value,isSelected:x.value};ee(Pe,N,i)}return r({isExpanded:s,isSelected:x,isIndeterminate:_,handleToggle:()=>t.onToggle(o.value),handleSelect:()=>t.onSelect(o.value)}),(l,i)=>(q(),G(v(Ae),{"as-child":"",value:l.value,"allow-shift-key":""},{default:D(()=>[se(v(oe),de(l.$attrs,{role:"treeitem",as:l.as,"as-child":l.asChild,"aria-selected":x.value,"aria-expanded":f.value?s.value:void 0,"aria-level":l.level,"data-indent":l.level,"data-selected":x.value?"":void 0,"data-expanded":s.value?"":void 0,onKeydown:[M(R(d,["self","prevent"]),["enter","space"]),i[0]||(i[0]=M(R(u=>v(t).dir.value==="ltr"?b(u):I(u),["prevent"]),["right"])),i[1]||(i[1]=M(R(u=>v(t).dir.value==="ltr"?I(u):b(u),["prevent"]),["left"]))],onClick:i[2]||(i[2]=R(u=>{d(u),g(u)},["stop"]))}),{default:D(()=>[L(l.$slots,"default",{isExpanded:s.value,isSelected:x.value,isIndeterminate:_.value,handleSelect:()=>v(t).onSelect(l.value),handleToggle:()=>v(t).onToggle(l.value)})]),_:3},16,["as","as-child","aria-selected","aria-expanded","aria-level","data-indent","data-selected","data-expanded","onKeydown"])]),_:3},8,["value"]))}}),Ve=Fe;const Y=z({__name:"Tree",props:{modelValue:{},defaultValue:{},items:{},expanded:{},defaultExpanded:{},getKey:{type:Function},getChildren:{type:Function},selectionBehavior:{},multiple:{type:Boolean},dir:{},disabled:{type:Boolean},propagateSelect:{type:Boolean},bubbleSelect:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["update:modelValue","update:expanded"],setup(a,{emit:r}){const e=a,o=be(e,r),T=k(()=>ue(["flex flex-col gap-1","outline-none"],e.class));return(t,h)=>(q(),G(v(De),de(v(o),{class:T.value}),{default:D(f=>[L(t.$slots,"default",ge(ye(f)))]),_:3},16,["class"]))}}),Me=["onClick"],Oe={key:1,class:"size-4"},ce=z({__name:"TreeItem",props:{value:{},level:{},asChild:{type:Boolean},as:{},class:{},hasChildren:{type:Boolean}},emits:["select","toggle"],setup(a){const r=a,e=k(()=>ue(["flex items-center gap-1.5 py-1 px-2","text-sm","rounded-lg","outline-none transition-colors","hover:bg-accent/64","focus:bg-accent","data-[selected]:bg-accent data-[selected]:text-accent-foreground","data-[disabled]:pointer-events-none data-[disabled]:opacity-64"],r.class));return(o,T)=>(q(),G(v(Ve),{value:r.value,level:r.level,class:Z(e.value),style:Te({paddingLeft:`${(r.level??0)*12}px`})},{default:D(({isExpanded:t,isSelected:h,handleToggle:f})=>[r.hasChildren?(q(),U("button",{key:0,type:"button",class:Z(["flex size-4 items-center justify-center outline-none text-muted-foreground transition-transform duration-200",{"rotate-90":t}]),onClick:R(f,["stop"])},[...T[0]||(T[0]=[Q("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[Q("path",{d:"m9 18 6-6-6-6"})],-1)])],10,Me)):(q(),U("span",Oe)),L(o.$slots,"content",{isExpanded:t,isSelected:h},()=>[he(xe(r.value),1)])]),_:3},8,["value","level","class","style"]))}}),st={title:"Components/Tree",component:Y,tags:["autodocs"]},$=[{id:"1",name:"Documents",children:[{id:"1.1",name:"Work",children:[{id:"1.1.1",name:"Report.pdf"},{id:"1.1.2",name:"Presentation.pptx"}]},{id:"1.2",name:"Personal",children:[{id:"1.2.1",name:"Resume.docx"}]}]},{id:"2",name:"Images",children:[{id:"2.1",name:"vacation.jpg"},{id:"2.2",name:"profile.png"}]},{id:"3",name:"readme.md"}],F={args:{items:$,getKey:a=>a.id},render:()=>({components:{Tree:Y,TreeItem:ce},setup(){const a=w(),r=w(["1"]);return{selected:a,expanded:r,treeData:$}},template:`
      <Tree
        v-model="selected"
        v-model:expanded="expanded"
        :items="treeData"
        :get-key="(item) => item.id"
        :get-children="(item) => item.children"
        class="w-[300px] rounded-lg border border-input p-2"
      >
        <template #default="{ flattenItems }">
          <TreeItem
            v-for="item in flattenItems"
            :key="item._id"
            v-bind="item.bind"
            :level="item.level"
            :has-children="item.hasChildren"
          >
            <template #content>{{ item.value.name }}</template>
          </TreeItem>
        </template>
      </Tree>
    `})},V={args:{items:$,getKey:a=>a.id},render:()=>({components:{Tree:Y,TreeItem:ce},setup(){const a=w([]),r=w(["1","1.1"]);return{selected:a,expanded:r,treeData:$}},template:`
      <Tree
        v-model="selected"
        v-model:expanded="expanded"
        :items="treeData"
        :get-key="(item) => item.id"
        :get-children="(item) => item.children"
        multiple
        class="w-[300px] rounded-lg border border-input p-2"
      >
        <template #default="{ flattenItems }">
          <TreeItem
            v-for="item in flattenItems"
            :key="item._id"
            v-bind="item.bind"
            :level="item.level"
            :has-children="item.hasChildren"
          >
            <template #content>{{ item.value.name }}</template>
          </TreeItem>
        </template>
      </Tree>
    `})};var te,le,ae;F.parameters={...F.parameters,docs:{...(te=F.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    items: treeData,
    getKey: (item: TreeNode) => item.id
  },
  render: () => ({
    components: {
      Tree,
      TreeItem
    },
    setup() {
      const selected = ref<TreeNode | undefined>();
      const expanded = ref<string[]>(['1']);
      return {
        selected,
        expanded,
        treeData
      };
    },
    template: \`
      <Tree
        v-model="selected"
        v-model:expanded="expanded"
        :items="treeData"
        :get-key="(item) => item.id"
        :get-children="(item) => item.children"
        class="w-[300px] rounded-lg border border-input p-2"
      >
        <template #default="{ flattenItems }">
          <TreeItem
            v-for="item in flattenItems"
            :key="item._id"
            v-bind="item.bind"
            :level="item.level"
            :has-children="item.hasChildren"
          >
            <template #content>{{ item.value.name }}</template>
          </TreeItem>
        </template>
      </Tree>
    \`
  })
}`,...(ae=(le=F.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var ne,re,ie;V.parameters={...V.parameters,docs:{...(ne=V.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    items: treeData,
    getKey: (item: TreeNode) => item.id
  },
  render: () => ({
    components: {
      Tree,
      TreeItem
    },
    setup() {
      const selected = ref<TreeNode[]>([]);
      const expanded = ref<string[]>(['1', '1.1']);
      return {
        selected,
        expanded,
        treeData
      };
    },
    template: \`
      <Tree
        v-model="selected"
        v-model:expanded="expanded"
        :items="treeData"
        :get-key="(item) => item.id"
        :get-children="(item) => item.children"
        multiple
        class="w-[300px] rounded-lg border border-input p-2"
      >
        <template #default="{ flattenItems }">
          <TreeItem
            v-for="item in flattenItems"
            :key="item._id"
            v-bind="item.bind"
            :level="item.level"
            :has-children="item.hasChildren"
          >
            <template #content>{{ item.value.name }}</template>
          </TreeItem>
        </template>
      </Tree>
    \`
  })
}`,...(ie=(re=V.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};const dt=["Default","MultipleSelection"];export{F as Default,V as MultipleSelection,dt as __namedExportsOrder,st as default};
