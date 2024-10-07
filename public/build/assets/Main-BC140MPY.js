import{o as d,c as h,a as c,e as ae,f as b,w as s,r as V,n as le,g as ne,u as e,h as Me,i as R,j as B,k as z,d as m,b as t,x as oe,l as Le,m as W,D as Oe,P as je,p as Y,E as ze,B as Ke,I as Re,q as be,T as Ue,$ as Je,s as $,t as ge,_ as N,v as ve,y as U,z as O,A as He,C as ye,F as P,G as A,H as We,J as Ye,K as Ge,L as X,M as Ze,N as Qe,O as Xe,Q as et,R as re,S as H,U as ue,V as xe,W as $e,X as we,Y as ke,Z as he,a0 as De,a1 as Ce,a2 as tt,a3 as st,a4 as G,a5 as Pe,a6 as _e,a7 as ee,a8 as te,a9 as ie,aa as at,ab as lt,ac as nt,ad as ot,ae as rt,af as it,ag as dt,ah as ut,ai as ct}from"./app-v4ilaWqS.js";/* empty css               */function pt(l,n){return d(),h("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[c("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",fill:"currentColor"})])}const qe=ae({__name:"DropdownMenuGroup",props:{asChild:{type:Boolean},as:{}},setup(l){const n=l;return(a,r)=>(d(),b(e(Me),le(ne(n)),{default:s(()=>[V(a.$slots,"default")]),_:3},16))}}),J=ae({__name:"DropdownMenuShortcut",props:{class:{}},setup(l){const n=l;return(a,r)=>(d(),h("span",{class:R(e(B)("ml-auto text-xs tracking-widest opacity-60",n.class))},[V(a.$slots,"default")],2))}}),ft={class:"flex flex-col items-center justify-center h-screen gap-1 text-center"},mt={class:"flex items-center gap-2 dark:text-gray-400"},gt={__name:"Main",props:{},setup(l){return(n,a)=>{const r=z("Icon");return d(),h("div",ft,[c("div",mt,[a[0]||(a[0]=m(" Loading ")),t(r,{icon:"eos-icons:three-dots-loading"})]),a[1]||(a[1]=c("h3",{class:"text-xl font-semibold tracking-tight"},"You have no devices",-1)),a[2]||(a[2]=c("p",{class:"text-sm text-muted-foreground"},"You can add a device.",-1)),a[3]||(a[3]=c("button",{class:"inline-flex items-center justify-center px-4 py-2 mt-4 text-sm font-medium transition-colors rounded-md shadow whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9"},"Add Device",-1))])}}},vt={class:"flex flex-col items-center justify-center h-screen gap-1 text-center"},yt={class:"flex items-center gap-2 dark:text-gray-400"},_t={__name:"Main",props:{},setup(l){return(n,a)=>{const r=z("Icon");return d(),h("div",vt,[c("div",yt,[a[0]||(a[0]=m(" Loading ")),t(r,{icon:"eos-icons:three-dots-loading"})]),a[1]||(a[1]=c("h3",{class:"text-xl font-semibold tracking-tight"},"You have no command groups",-1)),a[2]||(a[2]=c("p",{class:"text-sm text-muted-foreground"},"You can add a command groups.",-1)),a[3]||(a[3]=c("button",{class:"inline-flex items-center justify-center px-4 py-2 mt-4 text-sm font-medium transition-colors rounded-md shadow whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9"},"Add Device",-1))])}}},bt={__name:"AlertDialog",props:{open:{type:Boolean,required:!1},defaultOpen:{type:Boolean,required:!1}},emits:["update:open"],setup(l,{emit:n}){const p=oe(l,n);return(f,o)=>(d(),b(e(Le),le(ne(e(p))),{default:s(()=>[V(f.$slots,"default")]),_:3},16))}},xt={__name:"AlertDialogContent",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(l,{emit:n}){const a=l,r=n,p=W(()=>{const{class:o,...v}=a;return v}),f=oe(p,r);return(o,v)=>(d(),b(e(ze),null,{default:s(()=>[t(e(Oe),{class:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),t(e(je),Y(e(f),{class:e(B)("fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a.class)}),{default:s(()=>[V(o.$slots,"default")]),_:3},16,["class"])]),_:3}))}},$t={__name:"AlertDialogHeader",props:{class:{type:null,required:!1}},setup(l){const n=l;return(a,r)=>(d(),h("div",{class:R(e(B)("flex flex-col gap-y-2 text-center sm:text-left",n.class))},[V(a.$slots,"default")],2))}},wt={__name:"AlertDialogTitle",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(l){const n=l,a=W(()=>{const{class:r,...p}=n;return p});return(r,p)=>(d(),b(e(Ke),Y(a.value,{class:e(B)("text-lg font-semibold",n.class)}),{default:s(()=>[V(r.$slots,"default")]),_:3},16,["class"]))}},kt={__name:"AlertDialogDescription",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(l){const n=l,a=W(()=>{const{class:r,...p}=n;return p});return(r,p)=>(d(),b(e(Re),Y(a.value,{class:e(B)("text-sm text-muted-foreground",n.class)}),{default:s(()=>[V(r.$slots,"default")]),_:3},16,["class"]))}},ht={__name:"AlertDialogFooter",props:{class:{type:null,required:!1}},setup(l){const n=l;return(a,r)=>(d(),h("div",{class:R(e(B)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2",n.class))},[V(a.$slots,"default")],2))}},Dt={__name:"AlertDialogAction",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(l){const n=l,a=W(()=>{const{class:r,...p}=n;return p});return(r,p)=>(d(),b(e(Ue),Y({onClick:p[0]||(p[0]=f=>r.$emit("action"))},a.value,{class:e(B)(e(be)(),n.class)}),{default:s(()=>[V(r.$slots,"default")]),_:3},16,["class"]))}},Ct={__name:"AlertDialogCancel",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(l){const n=l,a=W(()=>{const{class:r,...p}=n;return p});return(r,p)=>(d(),b(e(Je),Y({onClick:p[0]||(p[0]=f=>r.$emit("cancel"))},a.value,{class:e(B)(e(be)({variant:"outline"}),"mt-2 sm:mt-0",n.class)}),{default:s(()=>[V(r.$slots,"default")]),_:3},16,["class"]))}},Ve=ae({__name:"ActionsMenu",props:{rowData:{type:Object,required:!0}},emits:["onEdit","onDelete"],setup(l,{emit:n}){const a=$(!1),r=n;function p(){r("onEdit")}function f(){a.value=!0}function o(){r("onDelete"),a.value=!1}return(v,x)=>(d(),h("div",null,[t(e(ye),null,{default:s(()=>[t(e(ge),{"as-child":""},{default:s(()=>[t(e(N),{variant:"ghost",class:"hover:animate-pulse"},{default:s(()=>x[2]||(x[2]=[m(" ... ")])),_:1})]),_:1}),t(e(ve),{class:"w-56",align:"end",side:"bottom"},{default:s(()=>[t(e(U),{class:"cursor-pointer hover:bg-rcgray-800",onClick:p},{default:s(()=>[x[3]||(x[3]=c("span",null,"Edit",-1)),t(e(J),null,{default:s(()=>[t(e(O),{icon:"fluent-color:text-edit-style-16"})]),_:1})]),_:1}),t(e(He)),t(e(U),{class:"cursor-pointer hover:bg-rcgray-800",onClick:f},{default:s(()=>[x[4]||(x[4]=c("span",{class:"text-red-400"},"Delete",-1)),t(e(J),null,{default:s(()=>[t(e(O),{icon:"flat-color-icons:full-trash"})]),_:1})]),_:1})]),_:1})]),_:1}),t(e(bt),{open:a.value},{default:s(()=>[t(e(xt),null,{default:s(()=>[t(e($t),null,{default:s(()=>[t(e(wt),null,{default:s(()=>x[5]||(x[5]=[m("Are you absolutely sure?")])),_:1}),t(e(kt),null,{default:s(()=>[m("This action cannot be undone. This will permanently delete the selected data (ID: "+P(l.rowData.id)+").",1)]),_:1})]),_:1}),t(e(ht),null,{default:s(()=>[t(e(Ct),{onCancel:x[0]||(x[0]=y=>a.value=!1)},{default:s(()=>x[6]||(x[6]=[m("Cancel")])),_:1}),t(e(Dt),{onAction:x[1]||(x[1]=y=>o())},{default:s(()=>x[7]||(x[7]=[m("Continue")])),_:1})]),_:1})]),_:1})]),_:1},8,["open"])]))}}),Pt={class:"relative w-full overflow-auto"},Ie={__name:"Table",props:{class:{type:null,required:!1}},setup(l){const n=l;return(a,r)=>(d(),h("div",Pt,[c("table",{class:R(e(B)("w-full caption-bottom text-sm",n.class))},[V(a.$slots,"default")],2)]))}},Te={__name:"TableBody",props:{class:{type:null,required:!1}},setup(l){const n=l;return(a,r)=>(d(),h("tbody",{class:R(e(B)("[&_tr:last-child]:border-0",n.class))},[V(a.$slots,"default")],2))}},j={__name:"TableCell",props:{class:{type:null,required:!1}},setup(l){const n=l;return(a,r)=>(d(),h("td",{class:R(e(B)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",n.class))},[V(a.$slots,"default")],2))}},K={__name:"TableHead",props:{class:{type:null,required:!1}},setup(l){const n=l;return(a,r)=>(d(),h("th",{class:R(e(B)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",n.class))},[V(a.$slots,"default")],2))}},Ne={__name:"TableHeader",props:{class:{type:null,required:!1}},setup(l){const n=l;return(a,r)=>(d(),h("thead",{class:R(e(B)("[&_tr]:border-b",n.class))},[V(a.$slots,"default")],2))}},Z={__name:"TableRow",props:{class:{type:null,required:!1}},setup(l){const n=l;return(a,r)=>(d(),h("tr",{class:R(e(B)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",n.class))},[V(a.$slots,"default")],2))}},qt={class:"flex items-center justify-center text-sm text-muted-foreground"},Se={__name:"Loading",props:{},setup(l){return(n,a)=>{const r=z("Icon");return d(),b(e(Z),null,{default:s(()=>[t(e(j),{colspan:12,class:"h-24 text-center"},{default:s(()=>[c("div",qt,[a[0]||(a[0]=c("span",null,"Loading",-1)),t(r,{icon:"eos-icons:three-dots-loading",class:"ml-2"})])]),_:1})]),_:1})}}},Ee={__name:"NoResults",props:{},setup(l){return(n,a)=>(d(),b(e(Z),null,{default:s(()=>[t(e(j),{colspan:12,class:"h-24 text-center"},{default:s(()=>a[0]||(a[0]=[m(" No results. ")])),_:1})]),_:1}))}},Vt={class:"flex items-center justify-end py-4 space-x-2"},It={class:"flex items-center gap-2"},Tt={class:"flex items-center gap-2"},Nt={class:"flex items-center gap-2"},St={class:"flex items-center gap-2"},Et={class:"flex items-center gap-2"},At={class:"flex items-center gap-2"},Bt={class:"flex-1 text-sm text-muted-foreground"},Ft={class:"space-x-2"},Ae=ae({__name:"Pagination",props:{currentPage:Number,lastPage:Number,perPage:Number},emits:["update:currentPage","update:perPage"],setup(l,{emit:n}){const a=n,r=f=>{a("update:currentPage",f)},p=f=>{a("update:perPage",f)};return(f,o)=>(d(),h("div",Vt,[t(e(ye),null,{default:s(()=>[t(e(ge),{"as-child":""},{default:s(()=>[t(e(N),{variant:"outline"},{default:s(()=>[c("span",It,[t(e(O),{icon:"fluent-color:pin-16"}),m(" "+P(l.perPage===1e5?"All":l.perPage+" per page"),1)])]),_:1})]),_:1}),t(e(ve),{class:"w-56",align:"start"},{default:s(()=>[t(e(qe),null,{default:s(()=>[t(e(U),{onClick:o[0]||(o[0]=v=>p(5))},{default:s(()=>[c("span",Tt,[t(e(O),{icon:"fluent-color:pin-16"}),o[7]||(o[7]=m(" 5 per page "))]),t(e(J),null,{default:s(()=>[l.perPage===5?(d(),b(e(O),{key:0,icon:"flat-color-icons:checkmark",class:"ml-auto"})):A("",!0)]),_:1})]),_:1}),t(e(U),{onClick:o[1]||(o[1]=v=>p(10))},{default:s(()=>[c("span",Nt,[t(e(O),{icon:"fluent-color:pin-16"}),o[8]||(o[8]=m(" 10 per page "))]),t(e(J),null,{default:s(()=>[l.perPage===10?(d(),b(e(O),{key:0,icon:"flat-color-icons:checkmark",class:"ml-auto"})):A("",!0)]),_:1})]),_:1}),t(e(U),{onClick:o[2]||(o[2]=v=>p(20))},{default:s(()=>[c("span",St,[t(e(O),{icon:"fluent-color:pin-16"}),o[9]||(o[9]=m(" 20 per page "))]),t(e(J),null,{default:s(()=>[l.perPage===20?(d(),b(e(O),{key:0,icon:"flat-color-icons:checkmark",class:"ml-auto"})):A("",!0)]),_:1})]),_:1}),t(e(U),{onClick:o[3]||(o[3]=v=>p(50))},{default:s(()=>[c("span",Et,[t(e(O),{icon:"fluent-color:pin-16"}),o[10]||(o[10]=m(" 50 per page "))]),t(e(J),null,{default:s(()=>[l.perPage===50?(d(),b(e(O),{key:0,icon:"flat-color-icons:checkmark",class:"ml-auto"})):A("",!0)]),_:1})]),_:1}),t(e(U),{onClick:o[4]||(o[4]=v=>p(1e5))},{default:s(()=>[c("span",At,[t(e(O),{icon:"fluent-color:pin-16"}),o[11]||(o[11]=m(" All "))]),t(e(J),null,{default:s(()=>[l.perPage===1e5?(d(),b(e(O),{key:0,icon:"flat-color-icons:checkmark",class:"ml-auto"})):A("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),c("div",Bt,"Page "+P(l.currentPage)+" of "+P(l.lastPage),1),c("div",Ft,[t(e(N),{onClick:o[5]||(o[5]=v=>r(Math.max(l.currentPage-1,1))),disabled:l.currentPage===1,variant:"outline",size:"sm",class:"py-1"},{default:s(()=>o[12]||(o[12]=[m(" Previous ")])),_:1},8,["disabled"]),t(e(N),{variant:"outline",size:"sm",class:"py-1",onClick:o[6]||(o[6]=v=>r(l.currentPage+1)),disabled:l.currentPage>=l.lastPage},{default:s(()=>o[13]||(o[13]=[m(" Next ")])),_:1},8,["disabled"])])]))}}),se=ae({__name:"Input",props:{defaultValue:{},modelValue:{},class:{}},emits:["update:modelValue"],setup(l,{emit:n}){const a=l,p=We(a,"modelValue",n,{passive:!0,defaultValue:a.defaultValue});return(f,o)=>Ye((d(),h("input",{"onUpdate:modelValue":o[0]||(o[0]=v=>X(p)?p.value=v:null),class:R(e(B)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",a.class))},null,2)),[[Ge,e(p)]])}}),me={__name:"Label",props:{for:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(l){const n=l,a=W(()=>{const{class:r,...p}=n;return p});return(r,p)=>(d(),b(e(Ze),Y(a.value,{class:e(B)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",n.class)}),{default:s(()=>[V(r.$slots,"default")]),_:3},16,["class"]))}},ce=Qe("dialog",()=>{const l=Xe({});function n(f){l[f]=!0}function a(f){l[f]=!1}function r(f){l[f]=!l[f]}function p(f){return l[f]||!1}return{dialogs:l,openDialog:n,closeDialog:a,toggleDialog:r,isDialogOpen:p}});function pe(){const{toast:l}=et();function n(o,v){l({title:o,description:v})}function a(o,v){l({title:o,description:v,variant:"success"})}function r(o,v){l({title:o,description:v,variant:"destructive"})}function p(o,v){l({title:o,description:v,variant:"info"})}function f(o,v){l({title:o,description:v,variant:"warning"})}return{toastDefault:n,toastSuccess:a,toastError:r,toastInfo:p,toastWarning:f}}const Mt={class:"grid gap-2 py-4"},Lt={class:"grid items-center grid-cols-4 gap-4"},Ot={class:"grid items-center grid-cols-4 gap-4"},jt={class:"flex flex-col w-full space-y-2"},zt={key:0,class:"text-red-400"},Kt={key:1,class:"text-red-400"},Rt={class:"pl-2 ml-auto"},Ut={class:"bxnAJf2"},Jt={class:"pl-2 ml-auto"},Ht={class:"bxnAJf2"},Wt={__name:"TagAddEditDialog",props:{editId:Number},emits:["save"],setup(l,{emit:n}){const{toastSuccess:a,toastError:r,toastInfo:p,toastWarning:f,toastDefault:o}=pe(),v=ce(),{openDialog:x,closeDialog:y,isDialogOpen:S}=v,q=n;$([]);const E=$([]),w=$({tagname:"",tagDescription:""}),k=l;function M(D){D.ctrlKey&&D.key==="Enter"&&I()}re(()=>{k.editId>0&&H.get(`/api/tags/${k.editId}`).then(D=>{w.value=D.data}),window.addEventListener("keydown",M)}),ue(()=>{window.removeEventListener("keydown",M)});function I(){let D=k.editId>0?`/${k.editId}`:"",i=k.editId>0?"patch":"post";H[i]("/api/tags"+D,w.value).then(T=>{q("save",T.data),a("Tag created","The tag has been created successfully."),y("DialogNewTag")}).catch(T=>{E.value=T.response.data.errors})}return(D,i)=>{const T=z("Icon");return d(),b(e(Ce),{open:e(S)("DialogNewTag")},{default:s(()=>[t(e(xe),{"as-child":""}),t(e($e),{class:"sm:max-w-[425px]",onEscapeKeyDown:i[5]||(i[5]=C=>e(y)("DialogNewTag")),onPointerDownOutside:i[6]||(i[6]=C=>e(y)("DialogNewTag")),onCloseClicked:i[7]||(i[7]=C=>e(y)("DialogNewTag"))},{default:s(()=>[t(e(we),null,{default:s(()=>[t(e(ke),null,{default:s(()=>[m(P(l.editId>0?"Edit":"Add")+" Tag "+P(l.editId>0?"(ID: "+l.editId+")":""),1)]),_:1}),t(e(he),null,{default:s(()=>[m("Make changes to your tag here. Click "+P(l.editId>0?"update":"save")+" when you're done.",1)]),_:1})]),_:1}),c("div",Mt,[c("div",Lt,[t(e(me),{for:"tagname",class:"text-right"},{default:s(()=>i[8]||(i[8]=[m(" Tag Name ")])),_:1}),t(e(se),{modelValue:w.value.tagname,"onUpdate:modelValue":i[0]||(i[0]=C=>w.value.tagname=C),id:"tagname",class:"col-span-3"},null,8,["modelValue"])]),c("div",Ot,[t(e(me),{for:"tagDescription",class:"text-right"},{default:s(()=>i[9]||(i[9]=[m(" Description ")])),_:1}),t(e(se),{modelValue:w.value.tagDescription,"onUpdate:modelValue":i[1]||(i[1]=C=>w.value.tagDescription=C),id:"tagDescription",class:"col-span-3"},null,8,["modelValue"])])]),c("div",jt,[E.value.tagDescription?(d(),h("span",zt,P(E.value.tagDescription[0]),1)):A("",!0),E.value.tagname?(d(),h("span",Kt,P(E.value.tagname[0]),1)):A("",!0)]),t(e(De),null,{default:s(()=>[t(e(N),{type:"close",variant:"outline",class:"px-2 py-1 ml-2 text-sm hover:bg-gray-700 hover:animate-pulse",onClick:i[2]||(i[2]=C=>e(y)("DialogNewTag")),size:"sm"},{default:s(()=>i[10]||(i[10]=[m(" Cancel "),c("div",{class:"pl-2 ml-auto"},[c("kbd",{class:"bxnAJf"},"ESC")],-1)])),_:1}),k.editId===0?(d(),b(e(N),{key:0,type:"submit",class:"px-2 py-1 ml-2 text-sm bg-blue-600 hover:bg-blue-700 hover:animate-pulse",size:"sm",onClick:i[3]||(i[3]=C=>I()),variant:"primary"},{default:s(()=>[i[12]||(i[12]=m(" Save ")),c("div",Rt,[c("kbd",Ut,[i[11]||(i[11]=m(" Ctrl  ")),t(T,{icon:"uil:enter",class:""})])])]),_:1})):A("",!0),k.editId>0?(d(),b(e(N),{key:1,type:"submit",class:"px-2 py-1 ml-2 text-sm bg-blue-600 hover:bg-blue-700 hover:animate-pulse",size:"sm",onClick:i[4]||(i[4]=C=>I()),variant:"primary"},{default:s(()=>[i[14]||(i[14]=m(" Update ")),c("div",Jt,[c("kbd",Ht,[i[13]||(i[13]=m(" Ctrl  ")),t(T,{icon:"uil:enter",class:""})])])]),_:1})):A("",!0)]),_:1})]),_:1})]),_:1},8,["open"])}}},de={__name:"Checkbox",props:{defaultChecked:{type:Boolean,required:!1},checked:{type:[Boolean,String],required:!1},disabled:{type:Boolean,required:!1},required:{type:Boolean,required:!1},name:{type:String,required:!1},value:{type:String,required:!1},id:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},emits:["update:checked"],setup(l,{emit:n}){const a=l,r=n,p=W(()=>{const{class:o,...v}=a;return v}),f=oe(p,r);return(o,v)=>(d(),b(e(st),Y(e(f),{class:e(B)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",a.class)}),{default:s(()=>[t(e(tt),{class:"flex h-full w-full items-center justify-center text-current"},{default:s(()=>[V(o.$slots,"default",{},()=>[t(e(pt),{class:"h-4 w-4"})])]),_:3})]),_:3},16,["class"]))}};function Be(l){const n=$([]),a=$(!1);return{selectedRows:n,selectAll:a,toggleSelectAll:()=>{a.value=!a.value,a.value?n.value=l.value.data.map(f=>f.id):n.value=[]},toggleSelectRow:f=>{n.value.includes(f)?n.value=n.value.filter(o=>o!==f):n.value.push(f)}}}function Yt(){const l=$(1),n=$(parseInt(localStorage.getItem("perPage")||"10")),a=$("-id"),r=$(""),p=$({}),f=ce(),o=$(0),v=$(!1),x=$(1),y=$(1),S=$([]),{openDialog:q}=f,{toastSuccess:E,toastError:w}=pe();async function k(_={}){v.value=!0;try{const F=await H.get("/api/tags",{params:{page:l.value,perPage:n.value,sort:a.value,...p.value}});S.value=F.data,x.value=F.data.last_page}catch(F){console.error("Error fetching tags:",F),w("Error","Failed to fetch tags.")}finally{v.value=!1}}const M=_=>{o.value=0,y.value=Math.random(),q("DialogNewTag")};function I(_){o.value=_,y.value=Math.random(),q("DialogNewTag")}const D=async _=>{try{await H.delete(`/api/tags/${_}`),k(),E("Tag Deleted","The tag has been deleted successfully.")}catch(F){console.error("Error deleting tag:",F),w("Error","Failed to delete tag.")}},i=_=>{o.value=_,y.value=Math.random(),q("DialogNewTag")},T=()=>{k(),y.value=Math.random()};function C(_){_.altKey&&_.key==="n"&&(_.preventDefault(),q("DialogNewTag"))}const Q=Pe(()=>{p.value["filter[tagname]"]=r.value,l.value=1,k()},500);G([l,n],()=>{k()}),G(r,()=>{Q()}),G(n,_=>{localStorage.setItem("perPage",_.toString())});function u(_){a.value===_?a.value=`-${_}`:a.value=_,k()}return{tags:S,isLoading:v,currentPage:l,perPage:n,lastPage:x,editId:o,newTagModalKey:y,searchTerm:r,openDialog:q,fetchTags:k,createTag:M,updateTag:I,deleteTag:D,handleSave:T,handleKeyDown:C,viewEditDialog:i,toggleSort:u,sortParam:a}}const Gt={class:"flex flex-col h-full gap-1 text-center"},Zt={class:"flex items-center justify-between p-4"},Qt={class:"flex items-center"},Xt={class:"flex"},es={class:"px-6"},ts={key:0,class:"mr-2"},ss={__name:"Main",setup(l){const{editId:n,tags:a,currentPage:r,perPage:p,searchTerm:f,lastPage:o,isLoading:v,fetchTags:x,viewEditDialog:y,createTag:S,deleteTag:q,handleSave:E,handleKeyDown:w,newTagModalKey:k,toggleSort:M,sortParam:I}=Yt(),{selectedRows:D,selectAll:i,toggleSelectAll:T,toggleSelectRow:C}=Be(a);return re(()=>{x(),window.addEventListener("keydown",w)}),ue(()=>{window.removeEventListener("keydown",w)}),(Q,u)=>{const _=z("Icon"),F=z("router-link"),fe=z("Toaster");return d(),h("div",Gt,[c("div",Zt,[c("div",Qt,[t(e(se),{class:"max-w-sm ml-4",autocomplete:"off","data-1p-ignore":"","data-lpignore":"true",placeholder:"Filter tags...",modelValue:e(f),"onUpdate:modelValue":u[0]||(u[0]=g=>X(f)?f.value=g:null)},null,8,["modelValue"]),t(e(N),{class:"ml-2 hover:bg-gray-800",variant:"outline",onClick:u[1]||(u[1]=g=>f.value="")},{default:s(()=>u[9]||(u[9]=[m(" Clear Filter ")])),_:1})]),c("div",Xt,[e(D).length?(d(),b(e(N),{key:0,class:"px-2 py-1 bg-red-600 hover:bg-red-700 hover:animate-pulse",size:"md",variant:"primary"},{default:s(()=>[m(" Delete Selected "+P(e(D).length)+" Tag(s) ",1)]),_:1})):A("",!0),t(e(N),{type:"submit",class:"px-2 py-1 ml-2 text-sm bg-blue-600 hover:bg-blue-700 hover:animate-pulse",size:"sm",onClick:_e(e(S),["prevent"]),variant:"primary"},{default:s(()=>u[10]||(u[10]=[m(" New Tag "),c("div",{class:"pl-2 ml-auto"},[c("kbd",{class:"bxnAJf2"},"ALT N")],-1)])),_:1},8,["onClick"])])]),c("div",es,[t(e(Ie),null,{default:s(()=>[t(e(Ne),null,{default:s(()=>[t(e(Z),null,{default:s(()=>[t(e(K),{class:"w-[2%]"},{default:s(()=>[t(e(de),{id:"selectAll",modelValue:e(i),"onUpdate:modelValue":u[2]||(u[2]=g=>X(i)?i.value=g:null),onClick:u[3]||(u[3]=g=>e(T)())},null,8,["modelValue"])]),_:1}),t(e(K),{class:"w-[5%]"},{default:s(()=>[t(e(N),{class:"flex justify-between w-full p-0 hover:bg-rcgray-800",variant:"ghost",onClick:u[4]||(u[4]=g=>e(M)("id"))},{default:s(()=>[u[11]||(u[11]=c("span",null,"ID",-1)),t(_,{icon:e(I)==="id"?"lucide:sort-asc":e(I)==="-id"?"lucide:sort-desc":"hugeicons:sorting-05"},null,8,["icon"])]),_:1})]),_:1}),t(e(K),{class:"w-[20%]"},{default:s(()=>[t(e(N),{class:"flex justify-between w-full p-0 hover:bg-rcgray-800",variant:"ghost",onClick:u[5]||(u[5]=g=>e(M)("tagname"))},{default:s(()=>[u[12]||(u[12]=c("span",null,"Name",-1)),t(_,{icon:e(I)==="tagname"?"lucide:sort-asc":e(I)==="-tagname"?"lucide:sort-desc":"hugeicons:sorting-05"},null,8,["icon"])]),_:1})]),_:1}),t(e(K),{class:"w-[20%]"},{default:s(()=>u[13]||(u[13]=[m("Description")])),_:1}),t(e(K),{class:"w-[40%]"},{default:s(()=>u[14]||(u[14]=[m("Devices")])),_:1}),t(e(K),{class:"w-[10%]"},{default:s(()=>u[15]||(u[15]=[m("Actions")])),_:1})]),_:1})]),_:1}),t(e(Te),null,{default:s(()=>[e(v)?(d(),b(Se,{key:0})):e(v)?(d(),b(Ee,{key:2})):(d(!0),h(ee,{key:1},te(e(a).data,g=>(d(),b(e(Z),{key:g.id},{default:s(()=>[t(e(j),{class:"text-start"},{default:s(()=>[t(e(de),{class:"cursor-pointer",id:"select-"+g.id,checked:!!e(D).includes(g.id),onClick:L=>e(C)(g.id)},null,8,["id","checked","onClick"])]),_:2},1024),t(e(j),{class:"text-start"},{default:s(()=>[m(P(g.id),1)]),_:2},1024),t(e(j),{class:"text-start"},{default:s(()=>[m(P(g.tagname),1)]),_:2},1024),t(e(j),{class:"text-start"},{default:s(()=>[m(P(g.tagDescription),1)]),_:2},1024),t(e(j),{class:"text-start"},{default:s(()=>[(d(!0),h(ee,null,te(g.device.slice(0,8),(L,Fe)=>(d(),h("span",{key:L.device_name,class:"mr-2"},[t(e(ie),{variant:"outline",class:"py-1 hover:bg-rcgray-800"},{default:s(()=>[t(F,{to:L.view_url},{default:s(()=>[m(P(L.device_name),1)]),_:2},1032,["to"])]),_:2},1024)]))),128)),g.device.length>8?(d(),h("span",ts,[t(e(ie),{variant:"outline"},{default:s(()=>u[16]||(u[16]=[m("...")])),_:1})])):A("",!0)]),_:2},1024),t(e(j),{class:"text-start"},{default:s(()=>[t(Ve,{rowData:g,onOnEdit:L=>e(y)(g.id),onOnDelete:L=>e(q)(g.id)},null,8,["rowData","onOnEdit","onOnDelete"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(Ae,{currentPage:e(r),lastPage:e(o),perPage:e(p),"onUpdate:currentPage":u[6]||(u[6]=g=>r.value=g),"onUpdate:perPage":u[7]||(u[7]=g=>p.value=g)},null,8,["currentPage","lastPage","perPage"]),(d(),b(Wt,{onSave:u[8]||(u[8]=g=>e(E)()),key:e(k),editId:e(n)},null,8,["editId"])),t(fe)])])}}},as={class:"grid gap-2 py-4"},ls={class:"grid items-center grid-cols-4 gap-4"},ns={class:"flex flex-col w-full space-y-2"},os={key:0,class:"text-red-400"},rs={class:"pl-2 ml-auto"},is={class:"bxnAJf2"},ds={class:"pl-2 ml-auto"},us={class:"bxnAJf2"},cs={__name:"VendorAddEditDialog",props:{editId:Number},emits:["save"],setup(l,{emit:n}){const{toastSuccess:a,toastError:r,toastInfo:p,toastWarning:f,toastDefault:o}=pe(),v=ce(),{openDialog:x,closeDialog:y,isDialogOpen:S}=v,q=n;$([]);const E=$([]),w=$({vendorName:""}),k=l;function M(D){D.ctrlKey&&D.key==="Enter"&&I()}re(()=>{k.editId>0&&H.get(`/api/vendors/${k.editId}`).then(D=>{w.value=D.data}),window.addEventListener("keydown",M)}),ue(()=>{window.removeEventListener("keydown",M)});function I(){let D=k.editId>0?`/${k.editId}`:"",i=k.editId>0?"patch":"post";H[i]("/api/vendors"+D,w.value).then(T=>{q("save",T.data),a("Vendor created","The vendor has been created successfully."),y("DialogNewVendor")}).catch(T=>{E.value=T.response.data.errors})}return(D,i)=>{const T=z("Icon");return d(),b(e(Ce),{open:e(S)("DialogNewVendor")},{default:s(()=>[t(e(xe),{"as-child":""}),t(e($e),{class:"sm:max-w-[425px]",onEscapeKeyDown:i[4]||(i[4]=C=>e(y)("DialogNewVendor")),onPointerDownOutside:i[5]||(i[5]=C=>e(y)("DialogNewVendor")),onCloseClicked:i[6]||(i[6]=C=>e(y)("DialogNewVendor"))},{default:s(()=>[t(e(we),null,{default:s(()=>[t(e(ke),null,{default:s(()=>[m(P(l.editId>0?"Edit":"Add")+" Vendor "+P(l.editId>0?"(ID: "+l.editId+")":""),1)]),_:1}),t(e(he),null,{default:s(()=>[m("Make changes to your vendor here. Click "+P(l.editId>0?"update":"save")+" when you're done.",1)]),_:1})]),_:1}),c("div",as,[c("div",ls,[t(e(me),{for:"vendorName",class:"text-right"},{default:s(()=>i[7]||(i[7]=[m(" Vendor Name ")])),_:1}),t(e(se),{modelValue:w.value.vendorName,"onUpdate:modelValue":i[0]||(i[0]=C=>w.value.vendorName=C),id:"vendorName",class:"col-span-3"},null,8,["modelValue"])])]),c("div",ns,[E.value.vendorName?(d(),h("span",os,P(E.value.vendorName[0]),1)):A("",!0)]),t(e(De),null,{default:s(()=>[t(e(N),{type:"close",variant:"outline",class:"px-2 py-1 ml-2 text-sm hover:bg-gray-700 hover:animate-pulse",onClick:i[1]||(i[1]=C=>e(y)("DialogNewVendor")),size:"sm"},{default:s(()=>i[8]||(i[8]=[m(" Cancel "),c("div",{class:"pl-2 ml-auto"},[c("kbd",{class:"bxnAJf"},"ESC")],-1)])),_:1}),k.editId===0?(d(),b(e(N),{key:0,type:"submit",class:"px-2 py-1 ml-2 text-sm bg-blue-600 hover:bg-blue-700 hover:animate-pulse",size:"sm",onClick:i[2]||(i[2]=C=>I()),variant:"primary"},{default:s(()=>[i[10]||(i[10]=m(" Save ")),c("div",rs,[c("kbd",is,[i[9]||(i[9]=m(" Ctrl  ")),t(T,{icon:"uil:enter",class:""})])])]),_:1})):A("",!0),k.editId>0?(d(),b(e(N),{key:1,type:"submit",class:"px-2 py-1 ml-2 text-sm bg-blue-600 hover:bg-blue-700 hover:animate-pulse",size:"sm",onClick:i[3]||(i[3]=C=>I()),variant:"primary"},{default:s(()=>[i[12]||(i[12]=m(" Update ")),c("div",ds,[c("kbd",us,[i[11]||(i[11]=m(" Ctrl  ")),t(T,{icon:"uil:enter",class:""})])])]),_:1})):A("",!0)]),_:1})]),_:1})]),_:1},8,["open"])}}};function ps(){const l=$(1),n=$(parseInt(localStorage.getItem("perPage")||"10")),a=$("-id"),r=$(""),p=$({}),f=ce(),o=$(0),v=$(!1),x=$(1),y=$(1),S=$([]),{openDialog:q}=f,{toastSuccess:E,toastError:w}=pe();async function k(_={}){v.value=!0;try{const F=await H.get("/api/vendors",{params:{page:l.value,perPage:n.value,sort:a.value,...p.value}});S.value=F.data,x.value=F.data.last_page}catch(F){console.error("Error fetching vendors:",F),w("Error","Failed to fetch vendors.")}finally{v.value=!1}}const M=_=>{o.value=0,y.value=Math.random(),q("DialogNewVendor")};function I(_){o.value=_,y.value=Math.random(),q("DialogNewVendor")}const D=async _=>{try{await H.delete(`/api/vendors/${_}`),k(),E("Vendor Deleted","The vendor has been deleted successfully.")}catch(F){console.error("Error deleting vendor:",F),w("Error","Failed to delete vendor.")}},i=_=>{o.value=_,y.value=Math.random(),q("DialogNewVendor")},T=()=>{k(),y.value=Math.random()};function C(_){_.altKey&&_.key==="n"&&(_.preventDefault(),q("DialogNewVendor"))}const Q=Pe(()=>{p.value["filter[vendorName]"]=r.value,l.value=1,k()},500);G([l,n],()=>{k()}),G(r,()=>{Q()}),G(n,_=>{localStorage.setItem("perPage",_.toString())});function u(_){a.value===_?a.value=`-${_}`:a.value=_,k()}return{vendors:S,isLoading:v,currentPage:l,perPage:n,lastPage:x,editId:o,newVendorModalKey:y,searchTerm:r,openDialog:q,fetchVendors:k,createVendor:M,updateVendor:I,deleteVendor:D,handleSave:T,handleKeyDown:C,viewEditDialog:i,toggleSort:u,sortParam:a}}const fs={class:"flex flex-col h-full gap-1 text-center"},ms={class:"flex items-center justify-between p-4"},gs={class:"flex items-center"},vs={class:"flex"},ys={class:"px-6"},_s={key:0,class:"mr-2"},bs={__name:"Main",setup(l){const{editId:n,vendors:a,currentPage:r,perPage:p,searchTerm:f,lastPage:o,isLoading:v,fetchVendors:x,viewEditDialog:y,createVendor:S,deleteVendor:q,handleSave:E,handleKeyDown:w,newVendorModalKey:k,toggleSort:M,sortParam:I}=ps(),{selectedRows:D,selectAll:i,toggleSelectAll:T,toggleSelectRow:C}=Be(a);return re(()=>{x(),window.addEventListener("keydown",w)}),ue(()=>{window.removeEventListener("keydown",w)}),(Q,u)=>{const _=z("Icon"),F=z("router-link"),fe=z("Toaster");return d(),h("div",fs,[c("div",ms,[c("div",gs,[t(e(se),{class:"max-w-sm ml-4",autocomplete:"off","data-1p-ignore":"","data-lpignore":"true",placeholder:"Filter vendors...",modelValue:e(f),"onUpdate:modelValue":u[0]||(u[0]=g=>X(f)?f.value=g:null)},null,8,["modelValue"]),t(e(N),{class:"ml-2 hover:bg-gray-800",variant:"outline",onClick:u[1]||(u[1]=g=>f.value="")},{default:s(()=>u[9]||(u[9]=[m(" Clear Filter ")])),_:1})]),c("div",vs,[e(D).length?(d(),b(e(N),{key:0,class:"px-2 py-1 bg-red-600 hover:bg-red-700 hover:animate-pulse",size:"md",variant:"primary"},{default:s(()=>[m(" Delete Selected "+P(e(D).length)+" Vendor(s) ",1)]),_:1})):A("",!0),t(e(N),{type:"submit",class:"px-2 py-1 ml-2 text-sm bg-blue-600 hover:bg-blue-700 hover:animate-pulse",size:"sm",onClick:_e(e(S),["prevent"]),variant:"primary"},{default:s(()=>u[10]||(u[10]=[m(" New Vendor "),c("div",{class:"pl-2 ml-auto"},[c("kbd",{class:"bxnAJf2"},"ALT N")],-1)])),_:1},8,["onClick"])])]),c("div",ys,[t(e(Ie),null,{default:s(()=>[t(e(Ne),null,{default:s(()=>[t(e(Z),null,{default:s(()=>[t(e(K),{class:"w-[2%]"},{default:s(()=>[t(e(de),{id:"selectAll",modelValue:e(i),"onUpdate:modelValue":u[2]||(u[2]=g=>X(i)?i.value=g:null),onClick:u[3]||(u[3]=g=>e(T)())},null,8,["modelValue"])]),_:1}),t(e(K),{class:"w-[5%]"},{default:s(()=>[t(e(N),{class:"flex justify-between w-full p-0 hover:bg-rcgray-800",variant:"ghost",onClick:u[4]||(u[4]=g=>e(M)("id"))},{default:s(()=>[u[11]||(u[11]=c("span",null,"ID",-1)),t(_,{icon:e(I)==="id"?"lucide:sort-asc":e(I)==="-id"?"lucide:sort-desc":"hugeicons:sorting-05"},null,8,["icon"])]),_:1})]),_:1}),t(e(K),{class:"w-[20%]"},{default:s(()=>[t(e(N),{class:"flex justify-between w-full p-0 hover:bg-rcgray-800",variant:"ghost",onClick:u[5]||(u[5]=g=>e(M)("vendorName"))},{default:s(()=>[u[12]||(u[12]=c("span",null,"Name",-1)),t(_,{icon:e(I)==="vendorName"?"lucide:sort-asc":e(I)==="-vendorName"?"lucide:sort-desc":"hugeicons:sorting-05"},null,8,["icon"])]),_:1})]),_:1}),t(e(K),{class:"w-[50%]"},{default:s(()=>u[13]||(u[13]=[m("Devices")])),_:1}),t(e(K),{class:"w-[10%]"},{default:s(()=>u[14]||(u[14]=[m("Actions")])),_:1})]),_:1})]),_:1}),t(e(Te),null,{default:s(()=>[e(v)?(d(),b(Se,{key:0})):e(v)?(d(),b(Ee,{key:2})):(d(!0),h(ee,{key:1},te(e(a).data,g=>(d(),b(e(Z),{key:g.id},{default:s(()=>[t(e(j),{class:"text-start"},{default:s(()=>[t(e(de),{class:"cursor-pointer",id:"select-"+g.id,checked:!!e(D).includes(g.id),onClick:L=>e(C)(g.id)},null,8,["id","checked","onClick"])]),_:2},1024),t(e(j),{class:"text-start"},{default:s(()=>[m(P(g.id),1)]),_:2},1024),t(e(j),{class:"text-start"},{default:s(()=>[m(P(g.vendorName),1)]),_:2},1024),t(e(j),{class:"text-start"},{default:s(()=>[(d(!0),h(ee,null,te(g.device.slice(0,8),(L,Fe)=>(d(),h("span",{key:L.device_name,class:"mr-2"},[t(e(ie),{variant:"outline",class:"py-1 hover:bg-rcgray-800"},{default:s(()=>[t(F,{to:L.view_url},{default:s(()=>[m(P(L.device_name),1)]),_:2},1032,["to"])]),_:2},1024)]))),128)),g.device.length>8?(d(),h("span",_s,[t(e(ie),{variant:"outline"},{default:s(()=>u[15]||(u[15]=[m("...")])),_:1})])):A("",!0)]),_:2},1024),t(e(j),{class:"text-start"},{default:s(()=>[t(Ve,{rowData:g,onOnEdit:L=>e(y)(g.id),onOnDelete:L=>e(q)(g.id)},null,8,["rowData","onOnEdit","onOnDelete"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(Ae,{currentPage:e(r),lastPage:e(o),perPage:e(p),"onUpdate:currentPage":u[6]||(u[6]=g=>r.value=g),"onUpdate:perPage":u[7]||(u[7]=g=>p.value=g)},null,8,["currentPage","lastPage","perPage"]),(d(),b(cs,{onSave:u[8]||(u[8]=g=>e(E)()),key:e(k),editId:e(n)},null,8,["editId"])),t(fe)])])}}},xs={__name:"Tooltip",props:{defaultOpen:{type:Boolean,required:!1},open:{type:Boolean,required:!1},delayDuration:{type:Number,required:!1},disableHoverableContent:{type:Boolean,required:!1},disableClosingTrigger:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},ignoreNonKeyboardFocus:{type:Boolean,required:!1}},emits:["update:open"],setup(l,{emit:n}){const p=oe(l,n);return(f,o)=>(d(),b(e(at),le(ne(e(p))),{default:s(()=>[V(f.$slots,"default")]),_:3},16))}},$s=Object.assign({inheritAttrs:!1},{__name:"TooltipContent",props:{forceMount:{type:Boolean,required:!1},ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1,default:4},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},class:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside"],setup(l,{emit:n}){const a=l,r=n,p=W(()=>{const{class:o,...v}=a;return v}),f=oe(p,r);return(o,v)=>(d(),b(e(nt),null,{default:s(()=>[t(e(lt),Y({...e(f),...o.$attrs},{class:e(B)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a.class)}),{default:s(()=>[V(o.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),ws={__name:"TooltipTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(l){const n=l;return(a,r)=>(d(),b(e(ot),le(ne(n)),{default:s(()=>[V(a.$slots,"default")]),_:3},16))}},ks={__name:"TooltipProvider",props:{delayDuration:{type:Number,required:!1},skipDelayDuration:{type:Number,required:!1},disableHoverableContent:{type:Boolean,required:!1},disableClosingTrigger:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},ignoreNonKeyboardFocus:{type:Boolean,required:!1}},setup(l){const n=l;return(a,r)=>(d(),b(e(rt),le(ne(n)),{default:s(()=>[V(a.$slots,"default")]),_:3},16))}},hs={class:"flex flex-col flex-1 gap-2 dark:bg-rcgray-900"},Ds={class:"border-t border-b topRow"},Cs={class:"flex items-center gap-2"},Ps={class:"flex items-center gap-2 mr-4"},qs={class:"flex items-center gap-2"},Vs={key:2,class:"flex items-center justify-center flex-1 border border-dashed rounded-lg shadow-sm"},Is={key:3,class:"flex items-center justify-center flex-1 border border-dashed rounded-lg shadow-sm"},Ts={__name:"Main",props:{},setup(l){const n=dt(),a=$(localStorage.getItem("inventorySelectedView")||"devices"),r=ut(),p=ct(),f=[{id:"devices",label:"Devices",icon:"fluent-color:org-16",isFavorite:$(!1),route:"devices"},{id:"commandgroups",label:"Command Groups",icon:"fluent-color:search-visual-24",isFavorite:$(!1),route:"commandgroups"},{id:"commands",label:"Commands",icon:"fluent-color:text-edit-style-16",isFavorite:$(!1),route:"commands"},{id:"templates",label:"Templates",icon:"fluent-color:code-block-32",isFavorite:$(!1),route:"templates"},{id:"vendors",label:"Vendors",icon:"fluent-color:apps-16",isFavorite:$(!1),route:"vendors"},{id:"tags",label:"Tags",icon:"fluent-emoji:keycap-hashtag",isFavorite:$(!1),route:"tags"}];re(()=>{r.path.includes("inventory")||o(r.name),f.forEach(x=>{x.isFavorite.value=n.isFavorite(x.id)})});function o(x){localStorage.setItem("inventorySelectedView",x),a.value=x,p.push({name:x})}function v(x){const y=f.find(S=>S.id===x);y&&(y.isFavorite.value=!y.isFavorite.value,n.toggleFavorite(y))}return(x,y)=>{const S=z("Icon");return d(),h("main",hs,[c("div",Ds,[t(e(ye),null,{default:s(()=>{var q,E;return[t(e(ge),{"as-child":"",class:"p-4 ml-2"},{default:s(()=>[t(e(N),{variant:"outline"},{default:s(()=>[c("span",Cs,[t(S,{icon:"fluent-color:pin-16"}),y[0]||(y[0]=m(" Select View "))])]),_:1})]),_:1}),c("div",Ps,[t(S,{icon:((q=f.find(w=>w.id===a.value))==null?void 0:q.icon)||""},null,8,["icon"]),m(" "+P(((E=f.find(w=>w.id===a.value))==null?void 0:E.label)||""),1)]),t(e(ve),{class:"w-56",align:"start"},{default:s(()=>[t(e(qe),null,{default:s(()=>[(d(),h(ee,null,te(f,w=>t(e(U),{key:w.id,onClick:k=>o(w.id)},{default:s(()=>[c("span",qs,[t(S,{icon:w.icon},null,8,["icon"]),m(" "+P(w.label),1)]),t(e(ks),null,{default:s(()=>[t(e(xs),null,{default:s(()=>[t(e(ws),{"as-child":""},{default:s(()=>[t(e(J),{onClick:_e(k=>v(w.id),["stop","prevent"])},{default:s(()=>[t(S,{icon:w.isFavorite.value?"fluent-emoji:star":"ph:star-bold"},null,8,["icon"])]),_:2},1032,["onClick"])]),_:2},1024),t(e($s),null,{default:s(()=>[c("p",null,P(w.isFavorite.value?"Remove from favorites":"Add to favorites"),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1})]}),_:1})]),a.value==="devices"?(d(),b(gt,{key:0})):A("",!0),a.value==="commandgroups"?(d(),b(_t,{key:1})):a.value==="commands"?(d(),h("div",Vs,y[1]||(y[1]=[c("div",{class:"flex flex-col items-center gap-1 text-center"},[c("h3",{class:"text-2xl font-bold tracking-tight"},"Commands View"),c("p",{class:"text-sm text-muted-foreground"},"Details for commands will be shown here.")],-1)]))):a.value==="templates"?(d(),h("div",Is,y[2]||(y[2]=[c("div",{class:"flex flex-col items-center gap-1 text-center"},[c("h3",{class:"text-2xl font-bold tracking-tight"},"Templates View"),c("p",{class:"text-sm text-muted-foreground"},"Details for templates will be shown here.")],-1)]))):A("",!0),a.value==="vendors"?(d(),b(bs,{key:4})):A("",!0),a.value==="tags"?(d(),b(ss,{key:5})):A("",!0)])}}},Es=it(Ts,[["__scopeId","data-v-60867fb7"]]);export{Es as default};
