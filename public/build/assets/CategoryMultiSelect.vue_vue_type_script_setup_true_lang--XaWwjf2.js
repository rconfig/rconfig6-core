import{d as B,b as d,V as S,K as L,x as M,f as F,g as P,o as u,v as T,w as i,l,h as o,u as r,H as _,j as y,t as g,c as f,O as b,P as h,n as w,N as q,F as A}from"./app-Crb4C5ld.js";import{_ as D,a as E,b as H}from"./PopoverContent-B6vJiH8K.js";import{_ as C,a as K}from"./Separator-COwxiLnU.js";const O={class:"relative items-center w-full"},U={class:"absolute inset-y-0 flex items-center justify-center px-2 start-0"},G={class:"py-1"},J=["onClick"],Q={"data-size":"20"},R={class:"p-1 border-5"},Z=B({__name:"CategoryMultiSelect",props:{modelValue:{type:Array,required:!0}},emits:["update:modelValue"],setup(V,{emit:k}){const v=k,x=d([]);d([]);const N=d(!1),c=d(""),s=d([]),m=V,p=S(()=>x.value.filter(a=>a.categoryName.toLowerCase().includes(c.value.toLowerCase())&&!s.value.some(e=>e.id===a.id)));L(()=>m.modelValue,a=>{s.value=a}),M(()=>{j(),m.modelValue&&m.modelValue.length>0&&(s.value=m.modelValue)});function $(a){s.value.push(a),N.value=!1,c.value="";const e=p.value.findIndex(n=>n.categoryName===a.categoryName);e!==-1&&p.value.splice(e,1),v("update:modelValue",s.value)}function I(a){const e=s.value.findIndex(n=>n.categoryName===a);e!==-1&&s.value.splice(e,1),v("update:modelValue",s.value)}function j(){F.get("/api/categories/?perPage=10000").then(a=>{x.value=a.data.data})}return(a,e)=>{const n=P("Icon");return u(),T(r(H),null,{default:i(()=>[e[2]||(e[2]=l("div",{class:"hidden text-yellow-200 text-teal-100 bg-yellow-700 bg-teal-700 border-yellow-500 border-teal-500 bg-stone-700 text-stone-200 border-stone-500 bg-lime-700 text-lime-200 border-lime-500 bg-sky-700 text-sky-100 border-sky-500 bg-violet-700 text-violet-200 border-violet-500 bg-fuchsia-700 text-fuchsia-200 border-fuchsia-500"},null,-1)),o(r(D),{class:"col-span-3"},{default:i(()=>[o(r(_),{variant:"ghost",class:"flex flex-wrap items-start justify-start w-full p-1 pl-2 whitespace-normal border h-fit"},{default:i(()=>[y(g(s.value&&s.value.length===0?"Select categories":"")+" ",1),(u(!0),f(b,null,h(s.value,t=>(u(),f("span",{key:t.id,class:"relative my-1 group"},[l("span",{class:w([t.badgeColor?t.badgeColor:"bg-gray-600 text-gray-200 border-gray-500","flex items-center text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl border"])},[y(g(t.categoryName)+" ",1),o(n,{icon:"si:close-line",class:"ml-1 cursor-pointer hover:text-white",onClick:q(z=>I(t.categoryName),["stop"])},null,8,["onClick"])],2)]))),128))]),_:1})]),_:1}),o(r(E),{side:"bottom",align:"start",class:"col-span-3 p-0"},{default:i(()=>[l("div",O,[o(r(A),{id:"search",type:"text",modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=t=>c.value=t),placeholder:"Search...",class:"pl-10 border-none focus:outline-none focus-visible:ring-0 text-muted-foreground font-inter"},null,8,["modelValue"]),l("span",U,[o(n,{icon:"weui:search-outlined",class:"size-6 text-muted-foreground"})])]),o(r(C)),o(r(K),{class:"h-64"},{default:i(()=>[l("div",G,[(u(!0),f(b,null,h(p.value,t=>(u(),f("div",{key:t.id,class:"w-full p-1 pl-2 my-1 text-sm rounded-lg hover:bg-rcgray-600",onClick:z=>$(t)},[l("span",{"data-size":"20",class:w(["cursor-default text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl border",t.badgeColor?t.badgeColor:"bg-gray-600 text-gray-200 border-gray-500"])},[l("span",Q,g(t.categoryName),1)],2)],8,J))),128))])]),_:1}),o(r(C)),l("div",R,[o(r(_),{variant:"ghost",class:"justify-start w-full p-1"},{default:i(()=>[o(n,{icon:"octicon:plus-16",class:"w-3 h-3 mt-1 mr-2 text-muted-foreground"}),e[1]||(e[1]=l("span",null,"Create new record",-1))]),_:1})])]),_:1})]),_:1})}}});export{Z as _};
