import{o as r,c as m,l,m as C,g as p,x as g,w as o,h as a,u as d,j as u,t as c,F as x,D as y,E as _}from"./app-UL2vn8Ux.js";import{_ as v,a as w,b as h}from"./PopoverContent-B8K4jpxw.js";const b={key:0,"aria-hidden":"true",class:"inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},V={__name:"Spinner",props:{state:{type:Boolean,required:!0}},setup(t){return(n,e)=>t.state?(r(),m("svg",b,e[0]||(e[0]=[l("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"},null,-1),l("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"},null,-1)]))):C("",!0)}};function k(t){return{all:t=t||new Map,on:function(n,e){var s=t.get(n);s?s.push(e):t.set(n,[e])},off:function(n,e){var s=t.get(n);s&&(e?s.splice(s.indexOf(e)>>>0,1):t.set(n,[]))},emit:function(n,e){var s=t.get(n);s&&s.slice().map(function(i){i(e)}),(s=t.get("*"))&&s.slice().map(function(i){i(n,e)})}}}const L=k(),B={class:"space-y-2"},N={class:"mb-2 text-sm text-muted-foreground"},$={key:0,class:"text-xs text-muted-foreground"},M={__name:"DeviceListPopover",props:{recordName:{type:String,required:!0},items:{type:Array,required:!0},displayField:{type:String,default:"name"},displayCount:{type:Number,default:100}},setup(t){return(n,e)=>{const s=p("Button"),i=p("router-link");return r(),g(d(h),null,{default:o(()=>[a(d(v),{"as-child":""},{default:o(()=>[a(s,{variant:"outline",className:"mt-1 inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"},{default:o(()=>e[0]||(e[0]=[u(" ... ")])),_:1})]),_:1}),a(d(w),{class:"max-w-max",style:{width:"800px"}},{default:o(()=>[l("div",B,[l("p",N,"All devices associated with "+c(t.recordName)+". Showing "+c(t.displayCount)+" records.",1)]),(r(!0),m(x,null,y(t.items.slice(0,t.displayCount),f=>(r(),g(d(_),{key:f[t.displayField],variant:"outline",class:"py-1 mt-1 hover:bg-rcgray-900"},{default:o(()=>[a(i,{to:f.view_url},{default:o(()=>[u(c(f[t.displayField]),1)]),_:2},1032,["to"])]),_:2},1024))),128)),t.displayCount>t.displayCount-1?(r(),m("span",$,[e[2]||(e[2]=l("br",null,null,-1)),u(" Displaying only "+c(t.displayCount)+" records. Visit the ",1),a(i,{to:"/devices",class:"text-blue-500 hover:underline"},{default:o(()=>e[1]||(e[1]=[u(" Devices ")])),_:1}),e[3]||(e[3]=u(" page to view all devices. "))])):C("",!0)]),_:1})]),_:1})}}},F={class:"flex items-center justify-center text-sm text-muted-foreground"},q={__name:"Loading",props:{},setup(t){return(n,e)=>{const s=p("Icon");return r(),m("div",F,[e[0]||(e[0]=l("span",null,"Loading",-1)),a(s,{icon:"eos-icons:three-dots-loading",class:"ml-2"})])}}};export{V as _,M as a,q as b,L as e};
