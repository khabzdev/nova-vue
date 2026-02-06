import{y as ce,d as ee,B as Ce,r as G,w as $e,C as J,D as te,E as ne,G as me,f as E,R as mt,c as q,o as Bt,a as jt,K as De,Y as Gt,Z as qt,I as Ft,H as Tt,F as Vt}from"./vue.esm-bundler-BitZzlT5.js";import{u as Be}from"./useForwardPropsEmits-DQ7cY2da.js";import{a as Ot}from"./arrays-B6bjiBgC.js";import{c as Kt}from"./createContext-Fl0g0pNq.js";import{u as Wt}from"./useDirection-C1R3tBjc.js";import{u as gt}from"./useForwardExpose-ClhNePUc.js";import{u as je}from"./useId-DKCHXeQR.js";import{P as Ge}from"./Primitive-B5VkAsKh.js";import{u as Xt}from"./useNonce-BF5xypHA.js";import{W as Re}from"./cn-gWiv5-6R-CwNMvQqb.js";import{j as Ut}from"./index-I_2vzNuA-BfX5bdph.js";import"./ohash.D__AXeF1-Cq3NGnZa.js";import"./ConfigProvider-CB94jlZd.js";import"./index-BGV6KQZa.js";import"./index-CvzWs3kq.js";const ge=typeof document<"u";function x(e,t="Assertion failed!"){if(!e)throw console.error(t),new Error(t)}function St(e,t=document){var a;if(!ge)return null;if(t instanceof HTMLElement&&((a=t==null?void 0:t.dataset)==null?void 0:a.panelGroupId)===e)return t;const n=t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return n||null}function He(e,t=document){if(!ge)return null;const n=t.querySelector(`[data-panel-resize-handle-id="${e}"]`);return n||null}function zt(e,t,n=document){return ge?de(e,n).findIndex(l=>l.getAttribute("data-panel-resize-handle-id")===t)??null:null}function de(e,t=document){return ge?Array.from(t.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`)):[]}function Yt(e,t,n,a=document){var f,m;const i=He(t,a),l=de(e,a),r=i?l.indexOf(i):-1,s=((f=n[r])==null?void 0:f.id)??null,u=((m=n[r+1])==null?void 0:m.id)??null;return[s,u]}function vt(e){return e.type==="keydown"}function ht(e){return e.type.startsWith("mouse")}function yt(e){return e.type.startsWith("touch")}function Le(e){if(ht(e))return{x:e.clientX,y:e.clientY};if(yt(e)){const t=e.touches[0];if(t&&t.clientX&&t.clientY)return{x:t.clientX,y:t.clientY}}return{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY}}function xt(e,t){const n=e==="horizontal",{x:a,y:i}=Le(t);return n?a:i}function Jt(e,t,n,a,i){const l=n==="horizontal",r=He(t,i);x(r);const s=r.getAttribute("data-panel-group-id");x(s);const{initialCursorPosition:u}=a,f=xt(n,e),m=St(s,i);x(m);const c=m.getBoundingClientRect(),g=l?c.width:c.height;return(f-u)/g*100}function Zt(e,t,n,a,i,l){if(vt(e)){const r=n==="horizontal";let s=0;e.shiftKey?s=100:s=i??10;let u=0;switch(e.key){case"ArrowDown":u=r?0:s;break;case"ArrowLeft":u=r?-s:0;break;case"ArrowRight":u=r?s:0;break;case"ArrowUp":u=r?0:-s;break;case"End":u=100;break;case"Home":u=-100;break}return u}else return a==null?0:Jt(e,t,n,a,l)}function Qt({layout:e,panelsArray:t,pivotIndices:n}){let a=0,i=100,l=0,r=0;const s=n[0];x(s!=null),t.forEach((c,g)=>{const{constraints:S}=c,{maxSize:z=100,minSize:P=0}=S;g===s?(a=P,i=z):(l+=P,r+=z)});const u=Math.min(i,100-l),f=Math.max(a,100-r),m=e[s];return{valueMax:u,valueMin:f,valueNow:m}}function en({panelDataArray:e}){const t=Array.from({length:e.length}),n=e.map(l=>l.constraints);let a=0,i=100;for(let l=0;l<e.length;l++){const r=n[l];x(r);const{defaultSize:s}=r;s!=null&&(a++,t[l]=s,i-=s)}for(let l=0;l<e.length;l++){const r=n[l];x(r);const{defaultSize:s}=r;if(s!=null)continue;const u=e.length-a,f=i/u;a++,t[l]=f,i-=f}return t}function se(e,t,n){t.forEach((a,i)=>{const l=e[i];x(l);const{callbacks:r,constraints:s,id:u}=l,{collapsedSize:f=0,collapsible:m}=s,c=n[u];if(c==null||a!==c){n[u]=a;const{onCollapse:g,onExpand:S,onResize:z}=r;z&&z(a,c),m&&(g||S)&&(S&&(c==null||c===f)&&a!==f&&S(),g&&(c==null||c!==f)&&a===f&&g())}})}function tn(e,t=10){let n=null;return(...i)=>{n!==null&&clearTimeout(n),n=setTimeout(()=>{e(...i)},t)}}const qe=10;function pe(e,t,n=qe){e=Number.parseFloat(e.toFixed(n)),t=Number.parseFloat(t.toFixed(n));const a=e-t;return a===0?0:a>0?1:-1}function N(e,t,n){return pe(e,t,n)===0}function Q({panelConstraints:e,panelIndex:t,size:n}){const a=e[t];x(a!=null);const{collapsedSize:i=0,collapsible:l,maxSize:r=100,minSize:s=0}=a;if(pe(n,s)<0)if(l){const u=(i+s)/2;pe(n,u)<0?n=i:n=s}else n=s;return n=Math.min(r,n),n=Number.parseFloat(n.toFixed(qe)),n}function ve(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function oe({delta:e,layout:t,panelConstraints:n,pivotIndices:a,trigger:i}){if(N(e,0))return t;const l=[...t],[r,s]=a;x(r!=null),x(s!=null);let u=0;if(i==="keyboard"){{const m=e<0?s:r,c=n[m];if(x(c),c.collapsible){const g=t[m];x(g!=null);const S=n[m];x(S);const{collapsedSize:z=0,minSize:P=0}=S;if(N(g,z)){const d=P-g;pe(d,Math.abs(e))>0&&(e=e<0?0-d:d)}}}{const m=e<0?r:s,c=n[m];x(c);const{collapsible:g}=c;if(g){const S=t[m];x(S!=null);const z=n[m];x(z);const{collapsedSize:P=0,minSize:d=0}=z;if(N(S,d)){const b=S-P;pe(b,Math.abs(e))>0&&(e=e<0?0-b:b)}}}}{const m=e<0?1:-1;let c=e<0?s:r,g=0;for(;;){const z=t[c];x(z!=null);const d=Q({panelConstraints:n,panelIndex:c,size:100})-z;if(g+=d,c+=m,c<0||c>=n.length)break}const S=Math.min(Math.abs(e),Math.abs(g));e=e<0?0-S:S}{let c=e<0?r:s;for(;c>=0&&c<n.length;){const g=Math.abs(e)-Math.abs(u),S=t[c];x(S!=null);const z=S-g,P=Q({panelConstraints:n,panelIndex:c,size:z});if(!N(S,P)&&(u+=S-P,l[c]=P,u.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?c--:c++}}if(N(u,0))return t;{const m=e<0?s:r,c=t[m];x(c!=null);const g=c+u,S=Q({panelConstraints:n,panelIndex:m,size:g});if(l[m]=S,!N(S,g)){let z=g-S,d=e<0?s:r;for(;d>=0&&d<n.length;){const b=l[d];x(b!=null);const $=b+z,L=Q({panelConstraints:n,panelIndex:d,size:$});if(N(b,L)||(z-=L-b,l[d]=L),N(z,0))break;e>0?d--:d++}}}const f=l.reduce((m,c)=>c+m,0);return N(f,100)?l:t}function bt(e,t,n){const a=zt(e,t,n);return a!=null?[a,a+1]:[-1,-1]}function nn(e,t,n){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.y+e.height>t.y}function an(e,t){if(e===t)throw new Error("Cannot compare node with itself");const n={a:Xe(e),b:Xe(t)};let a;for(;n.a.at(-1)===n.b.at(-1);)e=n.a.pop(),t=n.b.pop(),a=e;x(a);const i={a:We(Ke(n.a)),b:We(Ke(n.b))};if(i.a===i.b){const l=a.childNodes,r={a:n.a.at(-1),b:n.b.at(-1)};let s=l.length;for(;s--;){const u=l[s];if(u===r.a)return 1;if(u===r.b)return-1}}return Math.sign(i.a-i.b)}const ln=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function rn(e){const t=getComputedStyle(Pt(e)).display;return t==="flex"||t==="inline-flex"}function sn(e){const t=getComputedStyle(e);return!!(t.position==="fixed"||t.zIndex!=="auto"&&(t.position!=="static"||rn(e))||+t.opacity<1||"transform"in t&&t.transform!=="none"||"webkitTransform"in t&&t.webkitTransform!=="none"||"mixBlendMode"in t&&t.mixBlendMode!=="normal"||"filter"in t&&t.filter!=="none"||"webkitFilter"in t&&t.webkitFilter!=="none"||"isolation"in t&&t.isolation==="isolate"||ln.test(t.willChange)||t.webkitOverflowScrolling==="touch")}function Ke(e){let t=e.length;for(;t--;){const n=e[t];if(x(n),sn(n))return n}return null}function We(e){return e&&Number(getComputedStyle(e).zIndex)||0}function Xe(e){const t=[];for(;e;)t.push(e),e=Pt(e);return t}function Pt(e){var t;return e.parentNode instanceof DocumentFragment&&((t=e.parentNode)==null?void 0:t.host)||e.parentNode}const wt=1,Et=2,Ct=4,Rt=8;function on(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}const un=on()==="coarse",W=[];let Ae=!1;const O=new Map,_e=new Map,fe=new Set;function cn(e,t,n,a,i,l){const{ownerDocument:r}=t,s={direction:n,element:t,hitAreaMargins:a,nonce:i,setResizeHandlerState:l},u=O.get(r)??0;return O.set(r,u+1),fe.add(s),Ie(),function(){_e.delete(e),fe.delete(s);const m=O.get(r)??1;O.set(r,m-1),Ie(),Ht(),m===1&&O.delete(r)}}function he(e){const{target:t}=e,{x:n,y:a}=Le(e);Ae=!0,Fe({target:t,x:n,y:a}),Ie(),W.length>0&&(Te("down",e),e.preventDefault())}function T(e){const{x:t,y:n}=Le(e);if(!Ae){const{target:a}=e;Fe({target:a,x:t,y:n})}Te("move",e),It(),W.length>0&&e.preventDefault()}function V(e){const{target:t}=e,{x:n,y:a}=Le(e);_e.clear(),Ae=!1,W.length>0&&e.preventDefault(),Te("up",e),Fe({target:t,x:n,y:a}),It(),Ie()}function Fe({target:e,x:t,y:n}){W.splice(0);let a=null;e instanceof HTMLElement&&(a=e),fe.forEach(i=>{const{element:l,hitAreaMargins:r}=i,s=l.getBoundingClientRect(),{bottom:u,left:f,right:m,top:c}=s,g=un?r.coarse:r.fine;if(t>=f-g&&t<=m+g&&n>=c-g&&n<=u+g){if(a!==null&&l!==a&&!l.contains(a)&&!a.contains(l)&&an(a,l)>0){let z=a,P=!1;for(;z&&!z.contains(l);){if(nn(z.getBoundingClientRect(),s)){P=!0;break}z=z.parentElement}if(P)return}W.push(i)}})}function ke(e,t){_e.set(e,t)}function It(){let e=!1,t=!1,n;W.forEach(i=>{const{direction:l,nonce:r}=i;l.value==="horizontal"?e=!0:t=!0,n=r.value});let a=0;_e.forEach(i=>{a|=i}),e&&t?Me("intersection",a,n):e?Me("horizontal",a,n):t?Me("vertical",a,n):Ht()}function Ie(){O.forEach((e,t)=>{const{body:n}=t;n.removeEventListener("contextmenu",V),n.removeEventListener("mousedown",he),n.removeEventListener("mouseleave",T),n.removeEventListener("mousemove",T),n.removeEventListener("touchmove",T),n.removeEventListener("touchstart",he)}),window.removeEventListener("mouseup",V),window.removeEventListener("touchcancel",V),window.removeEventListener("touchend",V),fe.size>0&&(Ae?(W.length>0&&O.forEach((e,t)=>{const{body:n}=t;e>0&&(n.addEventListener("contextmenu",V),n.addEventListener("mouseleave",T),n.addEventListener("mousemove",T),n.addEventListener("touchmove",T,{passive:!1}))}),window.addEventListener("mouseup",V),window.addEventListener("touchcancel",V),window.addEventListener("touchend",V)):O.forEach((e,t)=>{const{body:n}=t;e>0&&(n.addEventListener("mousedown",he),n.addEventListener("mousemove",T),n.addEventListener("touchmove",T,{passive:!1}),n.addEventListener("touchstart",he))}))}function Te(e,t){fe.forEach(n=>{const{setResizeHandlerState:a}=n,i=W.includes(n);a(e,i,t)})}let Ne=null,K=null;function dn(e,t){if(t){const n=(t&wt)!==0,a=(t&Et)!==0,i=(t&Ct)!==0,l=(t&Rt)!==0;if(n)return i?"se-resize":l?"ne-resize":"e-resize";if(a)return i?"sw-resize":l?"nw-resize":"w-resize";if(i)return"s-resize";if(l)return"n-resize"}switch(e){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function Ht(){K!==null&&(document.head.removeChild(K),Ne=null,K=null)}function Me(e,t,n){const a=dn(e,t);Ne!==a&&(Ne=a,K===null&&(K=document.createElement("style"),n&&(K.nonce=n),document.head.appendChild(K)),K.innerHTML=`*{cursor: ${a}!important;}`)}function pn({defaultSize:e,dragState:t,layout:n,panelData:a,panelIndex:i,precision:l=3}){const r=n[i];let s;return r==null?s=e!==void 0?e.toPrecision(l):"1":a.length===1?s="1":s=r.toPrecision(l),{flexBasis:0,flexGrow:s,flexShrink:1,overflow:"hidden",pointerEvents:t!==null?"none":void 0}}function fn({layout:e,panelConstraints:t}){const n=[...e],a=n.reduce((l,r)=>l+r,0);if(n.length!==t.length)throw new Error(`Invalid ${t.length} panel layout: ${n.map(l=>`${l}%`).join(", ")}`);if(!N(a,100)){console.warn(`WARNING: Invalid layout total size: ${n.map(l=>`${l}%`).join(", ")}. Layout normalization will be applied.`);for(let l=0;l<t.length;l++){const r=n[l];x(r!=null);const s=100/a*r;n[l]=s}}let i=0;for(let l=0;l<t.length;l++){const r=n[l];x(r!=null);const s=Q({panelConstraints:t,panelIndex:l,size:r});r!==s&&(i+=r-s,n[l]=s)}if(!N(i,0))for(let l=0;l<t.length;l++){const r=n[l];x(r!=null);const s=r+i,u=Q({panelConstraints:t,panelIndex:l,size:s});if(r!==u&&(i-=u-r,n[l]=u,N(i,0)))break}return n}function mn({eagerValuesRef:e,groupId:t,layout:n,panelDataArray:a,panelGroupElement:i,setLayout:l}){ce(r=>{const s=i.value;if(!s)return;const u=de(t,s);for(let f=0;f<a.length-1;f++){const{valueMax:m,valueMin:c,valueNow:g}=Qt({layout:n.value,panelsArray:a,pivotIndices:[f,f+1]}),S=u[f];if(S!=null){const z=a[f];x(z),S.setAttribute("aria-controls",z.id),S.setAttribute("aria-valuemax",`${Math.round(m)}`),S.setAttribute("aria-valuemin",`${Math.round(c)}`),S.setAttribute("aria-valuenow",g!=null?`${Math.round(g)}`:"")}}r(()=>{u.forEach(f=>{f.removeAttribute("aria-controls"),f.removeAttribute("aria-valuemax"),f.removeAttribute("aria-valuemin"),f.removeAttribute("aria-valuenow")})})}),ce(r=>{const s=i.value;if(!s)return;const u=e.value;x(u);const{panelDataArray:f}=u,m=St(t,s);x(m!=null,`No group found for id "${t}"`);const c=de(t,s);x(c);const g=c.map(S=>{const z=S.getAttribute("data-panel-resize-handle-id");x(z);const[P,d]=Yt(t,z,f,s);if(P==null||d==null)return()=>{};const b=$=>{if(!$.defaultPrevented)switch($.key){case"Enter":{$.preventDefault();const L=f.findIndex(A=>A.id===P);if(L>=0){const A=f[L];x(A);const R=n.value[L],{collapsedSize:D=0,collapsible:j,minSize:C=0}=A.constraints;if(R!=null&&j){const M=oe({delta:N(R,D)?C-D:D-R,layout:n.value,panelConstraints:f.map(re=>re.constraints),pivotIndices:bt(t,z,s),trigger:"keyboard"});n.value!==M&&l(M)}}break}}};return S.addEventListener("keydown",b),()=>{S.removeEventListener("keydown",b)}});r(()=>{g.forEach(S=>S())})})}function Ue(e){try{if(typeof localStorage<"u")e.getItem=t=>localStorage.getItem(t),e.setItem=(t,n)=>{localStorage.setItem(t,n)};else throw new TypeError("localStorage not supported in this environment")}catch(t){console.error(t),e.getItem=()=>null,e.setItem=()=>{}}}function Lt(e){return`reka:${e}`}function At(e){return e.map(t=>{const{constraints:n,id:a,idIsFromProps:i,order:l}=t;return i?a:l?`${l}:${JSON.stringify(n)}`:JSON.stringify(n)}).sort((t,n)=>t.localeCompare(n)).join(",")}function _t(e,t){try{const n=Lt(e),a=t.getItem(n);if(a){const i=JSON.parse(a);if(typeof i=="object"&&i!=null)return i}}catch{}return null}function gn(e,t,n){const a=_t(e,n)??{},i=At(t);return a[i]??null}function Sn(e,t,n,a,i){const l=Lt(e),r=At(t),s=_t(e,i)??{};s[r]={expandToSizes:Object.fromEntries(n.entries()),layout:a};try{i.setItem(l,JSON.stringify(s))}catch(u){console.error(u)}}const zn=100,ue={getItem:e=>(Ue(ue),ue.getItem(e)),setItem:(e,t)=>{Ue(ue),ue.setItem(e,t)}},[kt,vn]=Kt("PanelGroup");var hn=ee({__name:"SplitterGroup",props:{id:{type:[String,null],required:!1},autoSaveId:{type:[String,null],required:!1,default:null},direction:{type:String,required:!0},keyboardResizeBy:{type:[Number,null],required:!1,default:10},storage:{type:Object,required:!1,default:()=>ue},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["layout"],setup(e,{emit:t}){const n=e,a=t,i={},{direction:l}=Ce(n),r=je(n.id,"reka-splitter-group"),s=Wt(),{forwardRef:u,currentElement:f}=gt(),m=G(null),c=G([]),g=G({}),S=G(new Map),z=G(0),P=q(()=>({autoSaveId:n.autoSaveId,direction:n.direction,dragState:m.value,id:r,keyboardResizeBy:n.keyboardResizeBy,storage:n.storage})),d=G({layout:c.value,panelDataArray:[],panelDataArrayChanged:!1}),b=o=>c.value=o;mn({eagerValuesRef:d,groupId:r,layout:c,panelDataArray:d.value.panelDataArray,setLayout:b,panelGroupElement:f}),ce(()=>{const{panelDataArray:o}=d.value,{autoSaveId:h}=n;if(h){if(c.value.length===0||c.value.length!==o.length)return;let p=i[h];p||(p=tn(Sn,zn),i[h]=p);const v=[...o],w=new Map(S.value);p(h,v,w,c.value,n.storage)}});function $(o,h){const{panelDataArray:p}=d.value,v=X(p,o);return pn({defaultSize:h,dragState:m.value,layout:c.value,panelData:p,panelIndex:v})}function L(o){const{panelDataArray:h}=d.value;h.push(o),h.sort((p,v)=>{const w=p.order,y=v.order;return w==null&&y==null?0:w==null?-1:y==null?1:w-y}),d.value.panelDataArrayChanged=!0}$e(()=>d.value.panelDataArrayChanged,()=>{if(d.value.panelDataArrayChanged){d.value.panelDataArrayChanged=!1;const{autoSaveId:o,storage:h}=P.value,{layout:p,panelDataArray:v}=d.value;let w=null;if(o){const H=gn(o,v,h);H&&(S.value=new Map(Object.entries(H.expandToSizes)),w=H.layout)}w===null&&(w=en({panelDataArray:v}));const y=fn({layout:w,panelConstraints:v.map(H=>H.constraints)});Ot(p,y)||(b(y),d.value.layout=y,a("layout",y),se(v,y,g.value))}});function A(o){return function(p){p.preventDefault();const v=f.value;if(!v)return()=>null;const{direction:w,dragState:y,id:H,keyboardResizeBy:B}=P.value,{layout:_,panelDataArray:I}=d.value,{initialLayout:Y}=y??{},F=bt(H,o,v);let k=Zt(p,o,w,y,B,v);if(k===0)return;const Ve=w==="horizontal";s.value==="rtl"&&Ve&&(k=-k);const $t=I.map(Dt=>Dt.constraints),ie=oe({delta:k,layout:Y??_,panelConstraints:$t,pivotIndices:F,trigger:vt(p)?"keyboard":"mouse-or-touch"}),Oe=!ve(_,ie);(ht(p)||yt(p))&&z.value!==k&&(z.value=k,Oe?ke(o,0):Ve?ke(o,k<0?wt:Et):ke(o,k<0?Ct:Rt)),Oe&&(b(ie),d.value.layout=ie,a("layout",ie),se(I,ie,g.value))}}function R(o,h){const{layout:p,panelDataArray:v}=d.value,w=v.map(Y=>Y.constraints),{panelSize:y,pivotIndices:H}=U(v,o,p);x(y!=null);const _=X(v,o)===v.length-1?y-h:h-y,I=oe({delta:_,layout:p,panelConstraints:w,pivotIndices:H,trigger:"imperative-api"});ve(p,I)||(b(I),d.value.layout=I,a("layout",I),se(v,I,g.value))}function D(o,h){const{layout:p,panelDataArray:v}=d.value,w=X(v,o);v[w]=o,d.value.panelDataArrayChanged=!0;const{collapsedSize:y=0,collapsible:H}=h,{collapsedSize:B=0,collapsible:_,maxSize:I=100,minSize:Y=0}=o.constraints,{panelSize:F}=U(v,o,p);F!==null&&(H&&_&&F===y?y!==B&&R(o,B):F<Y?R(o,Y):F>I&&R(o,I))}function j(o,h){const{direction:p}=P.value,{layout:v}=d.value;if(!f.value)return;const w=He(o,f.value);x(w);const y=xt(p,h);m.value={dragHandleId:o,dragHandleRect:w.getBoundingClientRect(),initialCursorPosition:y,initialLayout:v}}function C(){m.value=null}function M(o){const{panelDataArray:h}=d.value,p=X(h,o);p>=0&&(h.splice(p,1),delete g.value[o.id],d.value.panelDataArrayChanged=!0)}function re(o){const{layout:h,panelDataArray:p}=d.value;if(o.constraints.collapsible){const v=p.map(B=>B.constraints),{collapsedSize:w=0,panelSize:y,pivotIndices:H}=U(p,o,h);if(x(y!=null,`Panel size not found for panel "${o.id}"`),y!==w){S.value.set(o.id,y);const _=X(p,o)===p.length-1?y-w:w-y,I=oe({delta:_,layout:h,panelConstraints:v,pivotIndices:H,trigger:"imperative-api"});ve(h,I)||(b(I),d.value.layout=I,a("layout",I),se(p,I,g.value))}}}function Se(o){const{layout:h,panelDataArray:p}=d.value;if(o.constraints.collapsible){const v=p.map(_=>_.constraints),{collapsedSize:w=0,panelSize:y,minSize:H=0,pivotIndices:B}=U(p,o,h);if(y===w){const _=S.value.get(o.id),I=_!=null&&_>=H?_:H,F=X(p,o)===p.length-1?y-I:I-y,k=oe({delta:F,layout:h,panelConstraints:v,pivotIndices:B,trigger:"imperative-api"});ve(h,k)||(b(k),d.value.layout=k,a("layout",k),se(p,k,g.value))}}}function ze(o){const{layout:h,panelDataArray:p}=d.value,{panelSize:v}=U(p,o,h);return x(v!=null,`Panel size not found for panel "${o.id}"`),v}function Mt(o){const{layout:h,panelDataArray:p}=d.value,{collapsedSize:v=0,collapsible:w,panelSize:y}=U(p,o,h);return w?y===void 0?o.constraints.defaultSize===o.constraints.collapsedSize:y===v:!1}function Nt(o){const{layout:h,panelDataArray:p}=d.value,{collapsedSize:v=0,collapsible:w,panelSize:y}=U(p,o,h);return x(y!=null,`Panel size not found for panel "${o.id}"`),!w||y>v}vn({direction:l,dragState:m.value,groupId:r,reevaluatePanelConstraints:D,registerPanel:L,registerResizeHandle:A,resizePanel:R,startDragging:j,stopDragging:C,unregisterPanel:M,panelGroupElement:f,collapsePanel:re,expandPanel:Se,isPanelCollapsed:Mt,isPanelExpanded:Nt,getPanelSize:ze,getPanelStyle:$});function X(o,h){return o.findIndex(p=>p===h||p.id===h.id)}function U(o,h,p){const v=X(o,h),y=v===o.length-1?[v-1,v]:[v,v+1],H=p[v];return{...h.constraints,panelSize:H,pivotIndices:y}}return(o,h)=>(J(),te(E(Ge),{ref:E(u),as:o.as,"as-child":o.asChild,style:mt({display:"flex",flexDirection:E(l)==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"}),"data-panel-group":"","data-orientation":E(l),"data-panel-group-id":E(r)},{default:ne(()=>[me(o.$slots,"default",{layout:c.value})]),_:3},8,["as","as-child","style","data-orientation","data-panel-group-id"]))}}),yn=hn,xn=ee({__name:"SplitterPanel",props:{collapsedSize:{type:Number,required:!1},collapsible:{type:Boolean,required:!1},defaultSize:{type:Number,required:!1},id:{type:String,required:!1},maxSize:{type:Number,required:!1},minSize:{type:Number,required:!1},order:{type:Number,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["collapse","expand","resize"],setup(e,{expose:t,emit:n}){const a=e,i=n,l=kt();if(l===null)throw new Error("SplitterPanel components must be rendered within a SplitterGroup container");const{collapsePanel:r,expandPanel:s,getPanelSize:u,getPanelStyle:f,isPanelCollapsed:m,resizePanel:c,groupId:g,reevaluatePanelConstraints:S,registerPanel:z,unregisterPanel:P}=l,d=je(a.id,"reka-splitter-panel"),b=q(()=>({callbacks:{onCollapse:()=>i("collapse"),onExpand:()=>i("expand"),onResize:(...C)=>i("resize",...C)},constraints:{collapsedSize:a.collapsedSize&&Number.parseFloat(a.collapsedSize.toFixed(qe)),collapsible:a.collapsible,defaultSize:a.defaultSize,maxSize:a.maxSize,minSize:a.minSize},id:d,idIsFromProps:a.id!==void 0,order:a.order}));$e(()=>b.value.constraints,(C,M)=>{(M.collapsedSize!==C.collapsedSize||M.collapsible!==C.collapsible||M.maxSize!==C.maxSize||M.minSize!==C.minSize)&&S(b.value,M)},{deep:!0}),Bt(()=>{z(b.value)}),jt(()=>{P(b.value)});const $=q(()=>f(b.value,a.defaultSize)),L=q(()=>m(b.value)),A=q(()=>!L.value);function R(){r(b.value)}function D(){s(b.value)}function j(C){c(b.value,C)}return t({collapse:R,expand:D,getSize(){return u(b.value)},resize:j,isCollapsed:L,isExpanded:A}),(C,M)=>(J(),te(E(Ge),{id:E(d),style:mt($.value),as:C.as,"as-child":C.asChild,"data-panel":"","data-panel-collapsible":C.collapsible||void 0,"data-panel-group-id":E(g),"data-panel-id":E(d),"data-panel-size":Number.parseFloat(`${$.value.flexGrow}`).toFixed(1),"data-state":C.collapsible?L.value?"collapsed":"expanded":void 0},{default:ne(()=>[me(C.$slots,"default",{isCollapsed:L.value,isExpanded:A.value,expand:D,collapse:R,resize:j})]),_:3},8,["id","style","as","as-child","data-panel-collapsible","data-panel-group-id","data-panel-id","data-panel-size","data-state"]))}}),bn=xn;function Pn({disabled:e,handleId:t,resizeHandler:n,panelGroupElement:a}){ce(i=>{const l=a.value;if(e.value||n.value===null||l===null)return;const r=He(t,l);if(r==null)return;const s=u=>{var f;if(!u.defaultPrevented)switch(u.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{u.preventDefault(),(f=n.value)==null||f.call(n,u);break}case"F6":{u.preventDefault();const m=r.getAttribute("data-panel-group-id");x(m);const c=de(m,l),g=zt(m,t,l);x(g!==null);const S=u.shiftKey?g>0?g-1:c.length-1:g+1<c.length?g+1:0;c[S].focus();break}}};r.addEventListener("keydown",s),i(()=>{r.removeEventListener("keydown",s)})})}var wn=ee({__name:"SplitterResizeHandle",props:{id:{type:String,required:!1},hitAreaMargins:{type:Object,required:!1},tabindex:{type:Number,required:!1,default:0},disabled:{type:Boolean,required:!1},nonce:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["dragging"],setup(e,{emit:t}){const n=e,a=t,{forwardRef:i,currentElement:l}=gt(),{disabled:r}=Ce(n),s=kt();if(s===null)throw new Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:u,groupId:f,registerResizeHandle:m,startDragging:c,stopDragging:g,panelGroupElement:S}=s,z=je(n.id,"reka-splitter-resize-handle"),P=G("inactive"),d=G(!1),b=G(null),{nonce:$}=Ce(n),L=Xt($);return $e(r,()=>{ge&&(r.value?b.value=null:b.value=m(z))},{immediate:!0}),ce(A=>{var j,C;if(r.value||b.value===null)return;const R=l.value;if(!R)return;x(R);const D=(M,re,Se)=>{var ze;if(re)switch(M){case"down":{P.value="drag",c(z,Se),a("dragging",!0);break}case"move":{P.value!=="drag"&&(P.value="hover"),(ze=b.value)==null||ze.call(b,Se);break}case"up":{P.value="hover",g(),a("dragging",!1);break}}else P.value="inactive"};A(cn(z,R,u,{coarse:((j=n.hitAreaMargins)==null?void 0:j.coarse)??15,fine:((C=n.hitAreaMargins)==null?void 0:C.fine)??5},L,D))}),Pn({disabled:r,resizeHandler:b,handleId:z,panelGroupElement:S}),(A,R)=>(J(),te(E(Ge),{id:E(z),ref:E(i),style:{touchAction:"none",userSelect:"none"},as:A.as,"as-child":A.asChild,role:"separator","data-resize-handle":"",tabindex:A.tabindex,"data-state":P.value,"data-disabled":E(r)?"":void 0,"data-orientation":E(u),"data-panel-group-id":E(f),"data-resize-handle-active":P.value==="drag"?"pointer":d.value?"keyboard":void 0,"data-resize-handle-state":P.value,"data-panel-resize-handle-enabled":!E(r),"data-panel-resize-handle-id":E(z),onBlur:R[0]||(R[0]=D=>d.value=!1),onFocus:R[1]||(R[1]=D=>d.value=!1)},{default:ne(()=>[me(A.$slots,"default")]),_:3},8,["id","as","as-child","tabindex","data-state","data-disabled","data-orientation","data-panel-group-id","data-resize-handle-active","data-resize-handle-state","data-panel-resize-handle-enabled","data-panel-resize-handle-id"]))}}),En=wn;const Z=ee({__name:"Splitter",props:{class:{},id:{},autoSaveId:{},direction:{},keyboardResizeBy:{},storage:{},asChild:{type:Boolean},as:{}},emits:["layout"],setup(e,{emit:t}){const n=e,a=Be(n,t),i=q(()=>Re(["flex h-full w-full","data-[orientation=horizontal]:flex-row","data-[orientation=vertical]:flex-col"],n.class));return(l,r)=>(J(),te(E(yn),De(E(a),{class:i.value}),{default:ne(()=>[me(l.$slots,"default")]),_:3},16,["class"]))}}),ae=ee({__name:"SplitterPanel",props:{class:{},collapsedSize:{},collapsible:{type:Boolean},defaultSize:{},id:{},maxSize:{},minSize:{},order:{},asChild:{type:Boolean},as:{}},emits:["collapse","expand","resize"],setup(e,{emit:t}){const n=e,a=Be(n,t),i=q(()=>Re("overflow-hidden",n.class));return(l,r)=>(J(),te(E(bn),De(E(a),{class:i.value}),{default:ne(s=>[me(l.$slots,"default",Gt(qt(s)))]),_:3},16,["class"]))}}),le=ee({__name:"SplitterResizeHandle",props:{class:{},withHandle:{type:Boolean,default:!0},id:{},hitAreaMargins:{},tabindex:{},disabled:{type:Boolean},nonce:{},asChild:{type:Boolean},as:{}},emits:["dragging"],setup(e,{emit:t}){const n=Ut(["relative flex items-center justify-center","outline-none","focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background","data-[state=hover]:bg-accent/50","data-[state=drag]:bg-accent","after:absolute after:inset-0"],{variants:{withHandle:{true:"",false:""}},defaultVariants:{withHandle:!0}}),a=e,i=Be(a,t),{withHandle:l,class:r}=Ce(a),s=q(()=>Re(n({withHandle:l.value}),r.value)),u=q(()=>Re("z-10 flex items-center justify-center rounded-sm bg-border transition-colors","group-data-[orientation=horizontal]/handle:h-4 group-data-[orientation=horizontal]/handle:w-[3px]","group-data-[orientation=vertical]/handle:h-[3px] group-data-[orientation=vertical]/handle:w-4"));return(f,m)=>(J(),te(E(En),De(E(i),{class:[s.value,"group/handle data-[orientation=horizontal]:w-px data-[orientation=horizontal]:after:-left-1 data-[orientation=horizontal]:after:-right-1 data-[orientation=vertical]:h-px data-[orientation=vertical]:after:-top-1 data-[orientation=vertical]:after:-bottom-1"]}),{default:ne(()=>[E(l)?(J(),Ft("div",{key:0,class:Tt(u.value)},null,2)):Vt("",!0)]),_:1},16,["class"]))}}),qn={title:"Components/Splitter",component:Z,tags:["autodocs"]},ye={args:{direction:"horizontal"},render:e=>({components:{Splitter:Z,SplitterPanel:ae,SplitterResizeHandle:le},setup(){return{args:e}},template:`
      <Splitter v-bind="args" class="h-[300px] w-full rounded-lg border border-input">
        <SplitterPanel :default-size="25" :min-size="20" class="flex items-center justify-center bg-muted/30">
          <span class="font-medium text-muted-foreground">Sidebar</span>
        </SplitterPanel>
        <SplitterResizeHandle />
        <SplitterPanel :default-size="75" class="flex items-center justify-center">
          <span class="font-medium text-muted-foreground">Content</span>
        </SplitterPanel>
      </Splitter>
    `})},xe={args:{direction:"vertical"},render:e=>({components:{Splitter:Z,SplitterPanel:ae,SplitterResizeHandle:le},setup(){return{args:e}},template:`
      <Splitter v-bind="args" class="h-[400px] w-full rounded-lg border border-input">
        <SplitterPanel :default-size="30" :min-size="20" class="flex items-center justify-center bg-muted/30">
          <span class="font-medium text-muted-foreground">Header</span>
        </SplitterPanel>
        <SplitterResizeHandle />
        <SplitterPanel :default-size="70" class="flex items-center justify-center">
          <span class="font-medium text-muted-foreground">Content</span>
        </SplitterPanel>
      </Splitter>
    `})},be={args:{direction:"horizontal"},render:e=>({components:{Splitter:Z,SplitterPanel:ae,SplitterResizeHandle:le},setup(){return{args:e}},template:`
      <Splitter v-bind="args" class="h-[300px] w-full rounded-lg border border-input">
        <SplitterPanel :default-size="20" :min-size="15" class="flex items-center justify-center bg-muted/30">
          <span class="font-medium text-muted-foreground">Left</span>
        </SplitterPanel>
        <SplitterResizeHandle />
        <SplitterPanel :default-size="60" class="flex items-center justify-center">
          <span class="font-medium text-muted-foreground">Center</span>
        </SplitterPanel>
        <SplitterResizeHandle />
        <SplitterPanel :default-size="20" :min-size="15" class="flex items-center justify-center bg-muted/30">
          <span class="font-medium text-muted-foreground">Right</span>
        </SplitterPanel>
      </Splitter>
    `})},Pe={args:{direction:"horizontal"},render:e=>({components:{Splitter:Z,SplitterPanel:ae,SplitterResizeHandle:le},setup(){return{args:e}},template:`
      <Splitter v-bind="args" class="h-[400px] w-full rounded-lg border border-input">
        <SplitterPanel :default-size="25" :min-size="20" class="flex items-center justify-center bg-muted/30">
          <span class="font-medium text-muted-foreground">Sidebar</span>
        </SplitterPanel>
        <SplitterResizeHandle />
        <SplitterPanel :default-size="75">
          <Splitter direction="vertical" class="h-full">
            <SplitterPanel :default-size="30" class="flex items-center justify-center bg-muted/20">
              <span class="font-medium text-muted-foreground">Top</span>
            </SplitterPanel>
            <SplitterResizeHandle />
            <SplitterPanel :default-size="70" class="flex items-center justify-center">
              <span class="font-medium text-muted-foreground">Main Content</span>
            </SplitterPanel>
          </Splitter>
        </SplitterPanel>
      </Splitter>
    `})},we={args:{direction:"horizontal"},render:e=>({components:{Splitter:Z,SplitterPanel:ae,SplitterResizeHandle:le},setup(){return{args:e}},template:`
      <Splitter v-bind="args" class="h-[300px] w-full rounded-lg border border-input">
        <SplitterPanel
          :default-size="25"
          :min-size="15"
          collapsible
          :collapsed-size="5"
          class="flex items-center justify-center bg-muted/30"
        >
          <span class="font-medium text-muted-foreground">Collapsible</span>
        </SplitterPanel>
        <SplitterResizeHandle />
        <SplitterPanel :default-size="75" class="flex items-center justify-center">
          <span class="font-medium text-muted-foreground">Content</span>
        </SplitterPanel>
      </Splitter>
    `})},Ee={args:{direction:"horizontal"},render:e=>({components:{Splitter:Z,SplitterPanel:ae,SplitterResizeHandle:le},setup(){return{args:e}},template:`
      <Splitter v-bind="args" class="h-[300px] w-full rounded-lg border border-input">
        <SplitterPanel :default-size="50" class="flex items-center justify-center bg-muted/30">
          <span class="font-medium text-muted-foreground">Left</span>
        </SplitterPanel>
        <SplitterResizeHandle :with-handle="false" class="bg-border" />
        <SplitterPanel :default-size="50" class="flex items-center justify-center">
          <span class="font-medium text-muted-foreground">Right</span>
        </SplitterPanel>
      </Splitter>
    `})};var Ye,Je,Ze;ye.parameters={...ye.parameters,docs:{...(Ye=ye.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal'
  },
  render: args => ({
    components: {
      Splitter,
      SplitterPanel,
      SplitterResizeHandle
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Splitter v-bind="args" class="h-[300px] w-full rounded-lg border border-input">
        <SplitterPanel :default-size="25" :min-size="20" class="flex items-center justify-center bg-muted/30">
          <span class="font-medium text-muted-foreground">Sidebar</span>
        </SplitterPanel>
        <SplitterResizeHandle />
        <SplitterPanel :default-size="75" class="flex items-center justify-center">
          <span class="font-medium text-muted-foreground">Content</span>
        </SplitterPanel>
      </Splitter>
    \`
  })
}`,...(Ze=(Je=ye.parameters)==null?void 0:Je.docs)==null?void 0:Ze.source}}};var Qe,et,tt;xe.parameters={...xe.parameters,docs:{...(Qe=xe.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    direction: 'vertical'
  },
  render: args => ({
    components: {
      Splitter,
      SplitterPanel,
      SplitterResizeHandle
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Splitter v-bind="args" class="h-[400px] w-full rounded-lg border border-input">
        <SplitterPanel :default-size="30" :min-size="20" class="flex items-center justify-center bg-muted/30">
          <span class="font-medium text-muted-foreground">Header</span>
        </SplitterPanel>
        <SplitterResizeHandle />
        <SplitterPanel :default-size="70" class="flex items-center justify-center">
          <span class="font-medium text-muted-foreground">Content</span>
        </SplitterPanel>
      </Splitter>
    \`
  })
}`,...(tt=(et=xe.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,at,lt;be.parameters={...be.parameters,docs:{...(nt=be.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal'
  },
  render: args => ({
    components: {
      Splitter,
      SplitterPanel,
      SplitterResizeHandle
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Splitter v-bind="args" class="h-[300px] w-full rounded-lg border border-input">
        <SplitterPanel :default-size="20" :min-size="15" class="flex items-center justify-center bg-muted/30">
          <span class="font-medium text-muted-foreground">Left</span>
        </SplitterPanel>
        <SplitterResizeHandle />
        <SplitterPanel :default-size="60" class="flex items-center justify-center">
          <span class="font-medium text-muted-foreground">Center</span>
        </SplitterPanel>
        <SplitterResizeHandle />
        <SplitterPanel :default-size="20" :min-size="15" class="flex items-center justify-center bg-muted/30">
          <span class="font-medium text-muted-foreground">Right</span>
        </SplitterPanel>
      </Splitter>
    \`
  })
}`,...(lt=(at=be.parameters)==null?void 0:at.docs)==null?void 0:lt.source}}};var rt,it,st;Pe.parameters={...Pe.parameters,docs:{...(rt=Pe.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal'
  },
  render: args => ({
    components: {
      Splitter,
      SplitterPanel,
      SplitterResizeHandle
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Splitter v-bind="args" class="h-[400px] w-full rounded-lg border border-input">
        <SplitterPanel :default-size="25" :min-size="20" class="flex items-center justify-center bg-muted/30">
          <span class="font-medium text-muted-foreground">Sidebar</span>
        </SplitterPanel>
        <SplitterResizeHandle />
        <SplitterPanel :default-size="75">
          <Splitter direction="vertical" class="h-full">
            <SplitterPanel :default-size="30" class="flex items-center justify-center bg-muted/20">
              <span class="font-medium text-muted-foreground">Top</span>
            </SplitterPanel>
            <SplitterResizeHandle />
            <SplitterPanel :default-size="70" class="flex items-center justify-center">
              <span class="font-medium text-muted-foreground">Main Content</span>
            </SplitterPanel>
          </Splitter>
        </SplitterPanel>
      </Splitter>
    \`
  })
}`,...(st=(it=Pe.parameters)==null?void 0:it.docs)==null?void 0:st.source}}};var ot,ut,ct;we.parameters={...we.parameters,docs:{...(ot=we.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal'
  },
  render: args => ({
    components: {
      Splitter,
      SplitterPanel,
      SplitterResizeHandle
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Splitter v-bind="args" class="h-[300px] w-full rounded-lg border border-input">
        <SplitterPanel
          :default-size="25"
          :min-size="15"
          collapsible
          :collapsed-size="5"
          class="flex items-center justify-center bg-muted/30"
        >
          <span class="font-medium text-muted-foreground">Collapsible</span>
        </SplitterPanel>
        <SplitterResizeHandle />
        <SplitterPanel :default-size="75" class="flex items-center justify-center">
          <span class="font-medium text-muted-foreground">Content</span>
        </SplitterPanel>
      </Splitter>
    \`
  })
}`,...(ct=(ut=we.parameters)==null?void 0:ut.docs)==null?void 0:ct.source}}};var dt,pt,ft;Ee.parameters={...Ee.parameters,docs:{...(dt=Ee.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal'
  },
  render: args => ({
    components: {
      Splitter,
      SplitterPanel,
      SplitterResizeHandle
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Splitter v-bind="args" class="h-[300px] w-full rounded-lg border border-input">
        <SplitterPanel :default-size="50" class="flex items-center justify-center bg-muted/30">
          <span class="font-medium text-muted-foreground">Left</span>
        </SplitterPanel>
        <SplitterResizeHandle :with-handle="false" class="bg-border" />
        <SplitterPanel :default-size="50" class="flex items-center justify-center">
          <span class="font-medium text-muted-foreground">Right</span>
        </SplitterPanel>
      </Splitter>
    \`
  })
}`,...(ft=(pt=Ee.parameters)==null?void 0:pt.docs)==null?void 0:ft.source}}};const Fn=["Horizontal","Vertical","ThreePanels","NestedPanels","Collapsible","WithoutHandle"];export{we as Collapsible,ye as Horizontal,Pe as NestedPanels,be as ThreePanels,xe as Vertical,Ee as WithoutHandle,Fn as __namedExportsOrder,qn as default};
