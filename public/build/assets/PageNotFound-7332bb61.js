import{_ as c,r as o,c as r,l as i,h as p,a as e,t as d,b as _,w as f,o as a,j as h}from"./app-7d21ea7c.js";/* empty css            */const m={data:()=>({openAlert:!1,alertType:null,alertMsg:null}),components:{},methods:{},mounted(){},filters:{}},u={class:"pf-c-page__main",tabindex:"-1"},y=e("section",{class:"pf-c-page__main-section pf-m-light"},[e("div",{class:"pf-c-content"},[e("h1",null,"404 - Page not found!")])],-1),g=e("div",{class:"pf-c-divider",role:"separator"},null,-1),v={class:"pf-c-page__main-section pf-m-no-padding"},k={class:"pf-c-card",style:{height:"50vh"}},b={class:"pf-l-bullseye"},T={class:"pf-c-empty-state pf-m-sm"},$={class:"pf-c-empty-state__content"},N=e("i",{class:"fas fa- fa-search pf-c-empty-state__icon","aria-hidden":"true"},null,-1),A=e("h2",{class:"pf-c-title pf-m-lg"},"404, that's an error!",-1),B={class:"pf-c-empty-state__body"},C={class:"pf-c-empty-state__primary"};function M(t,s,V,x,w,D){const n=o("alert"),l=o("router-link");return a(),r("main",u,[t.openAlert?(a(),i(n,{key:0,alertType:t.alertType,alertMsg:t.alertMsg,onCloseAlert:s[0]||(s[0]=P=>t.openAlert=!1)},null,8,["alertType","alertMsg"])):p("",!0),y,g,e("section",v,[e("div",k,[e("div",b,[e("div",T,[e("div",$,[N,A,e("div",B,"The url "+d(this.$route.path)+" does not exist on this server.",1),e("div",C,[_(l,{to:"/dashboard",class:"alink"},{default:f(()=>[h("Go to Dashboard")]),_:1})])])])])])])])}const F=c(m,[["render",M]]);export{F as default};
