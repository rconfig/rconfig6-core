import{W as c,o as n,v as u,w as r,r as p,a2 as m,a3 as y,u as e,av as q,aw as _,V as g,h,ax as B,X as b,a as P,ay as v}from"./app-DchtY-Q5.js";const O={__name:"Popover",props:{defaultOpen:{type:Boolean,required:!1},open:{type:Boolean,required:!1},modal:{type:Boolean,required:!1}},emits:["update:open"],setup(t,{emit:a}){const d=c(t,a);return(i,o)=>(n(),u(e(q),m(y(e(d))),{default:r(()=>[p(i.$slots,"default")]),_:3},16))}},$={__name:"PopoverTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const a=t;return(s,l)=>(n(),u(e(_),m(y(a)),{default:r(()=>[p(s.$slots,"default")]),_:3},16))}},z=Object.assign({inheritAttrs:!1},{__name:"PopoverContent",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1,default:4},align:{type:null,required:!1,default:"center"},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},updatePositionStrategy:{type:String,required:!1},prioritizePosition:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},class:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(t,{emit:a}){const s=t,l=a,d=g(()=>{const{class:o,...f}=s;return f}),i=c(d,l);return(o,f)=>(n(),u(e(v),null,{default:r(()=>[h(e(B),b({...e(i),...o.$attrs},{class:e(P)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",s.class)}),{default:r(()=>[p(o.$slots,"default")]),_:3},16,["class"])]),_:3}))}});export{$ as _,z as a,O as b};
