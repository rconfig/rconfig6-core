import{_ as U,A as I,i as H,e as v,f as C,u as O,g as z,I as K,r as y,c as l,b as h,a as e,q as V,n as w,v as E,E as P,L as q,p as S,h as r,t as d,F as A,k as G,j as p,C as J,o as i}from"./app-7d21ea7c.js";import{P as Q}from"./PageHeader-25af4a11.js";import{L as W}from"./LoadingSpinner-bbc4493f.js";import{u as X}from"./scrollToBottom-3824f9a7.js";import{D as Y}from"./DeviceCategoryField-4b38654f.js";import{C as R}from"./CopyLogo-2560ce4f.js";/* empty css            */import"./ViewFunctions-9f8fec9d.js";const Z={components:{PageHeader:Q,LoadingSpinner:W,DeviceCategoryField:Y,CopyIcon:R},setup(){I();const m=H("create-notification"),t=v({editid:0,pagename:"Config Search",pagedesc:"Search config files",pagenamesingle:"Search",modelName:"searches"}),c=v({device_category_id:"",line_count:0,search_string:"",search_latest_only:!0,category:[]}),s=v({device_category_id:"",line_count:""}),b=C(!1),g=v({}),{toClipboard:k}=O(),u=C(!1),{scrollToBottom:x}=X(),_=C(!1);function o(){J.post("/api/configs/search",{category:c.device_category_id,line_count:c.line_count,search_string:c.search_string,latestOnly:c.search_latest_only}).then(a=>{Object.assign(g,a.data),m({type:"success",message:`Searched for '${c.search_string}' in ${a.data.fileCount} configs...`}),b.value=!1}).catch(a=>{m({type:"error",message:a.response.data.message})})}const f=async a=>{try{await k(a),u.value=!0,setTimeout(()=>{u.value=!1},3e3),m({type:"success",title:"Copy Successful",message:"Configuration copied to clipboard"})}catch(n){m({type:"danger",title:"Error",message:n.response})}};function T(a){a.expanded===!0?a.expanded=!1:a.expanded=!0}function L(a){var n=a.slice(1);return n=n.join(`\r
`),n=n.replace(/model.search_string/g,'<span class="pf-u-warning-color-100">'+c.search_string+"</span>"),n}function B(a){var n=L(a),F=new RegExp(`\\b${c.search_string}\\b`,"gi");return c.search_string=M(c.search_string),n=n.replace(F,'<span class="pf-u-warning-color-200 pf-u-background-color-warning">'+c.search_string+"</span>"),n}function M(a){return a.replace(/[.*+?^${}()|[\]\\]/g,"")}function N(){c.device_category_id="",c.category=[],c.line_count=0,c.search_string="",c.search_latest_only=!0,Object.assign(g,{matchCount:0,search_results:{}})}function j(){document.getElementById("top_div").scrollIntoView({behavior:"smooth"})}const D=a=>{document.getElementById("top_div").getBoundingClientRect().top<0?_.value=!0:_.value=!1};return z(()=>{window.addEventListener("wheel",D,{passive:!0})}),K(()=>{window.removeEventListener("wheel",D)}),{viewstate:t,model:c,errors:s,search:o,clear:N,scrollToBottom:x,isLoading:b,results:g,toggleExpandResults:T,stringifyResult:L,displayResult:B,copy:f,CopyIcon:R,scrollToTop:j,showScrollBtn:_,copied:u}}},$={class:"pf-c-page__main",tabindex:"-1"},ee=e("div",{class:"pf-c-divider",role:"separator"},null,-1),se={class:"pf-c-page__main-section pf-m-no-padding"},oe={class:"pf-c-drawer__main"},te={class:"pf-c-drawer__content pf-m-no-background"},ce={class:"pf-c-drawer__body pf-m-padding"},ae={class:"pf-c-card"},ne=e("div",{class:"pf-c-card__header pf-l-flex"},[e("div",{class:"pf-c-check pf-l-flex__item pf-m-align-right"})],-1),le={class:"pf-c-card__body"},ie={novalidate:"",class:"pf-c-form pf-m-horizontal"},de={class:"pf-c-form__group"},re=e("div",{class:"pf-c-form__group-label"},[e("label",{class:"pf-c-form__label",for:"line_count"},[e("span",{class:"pf-c-form__label-text"},"Line Count")]),e("button",{class:"pf-c-form__group-label-help","aria-label":"More info",tabindex:"-1"})],-1),_e={class:"pf-c-form__group-control"},pe=e("small",null,"Number of output lines before and after search match.",-1),fe={class:"pf-c-form__group"},he=e("div",{class:"pf-c-form__group-label"},[e("label",{class:"pf-c-form__label",for:"search_string"},[e("span",{class:"pf-c-form__label-text"},"Search String")]),e("button",{class:"pf-c-form__group-label-help","aria-label":"More info",tabindex:"-1"})],-1),me={class:"pf-c-form__group-control"},ue={class:"pf-c-search-input"},ge={class:"pf-c-search-input__bar"},ve={class:"pf-c-search-input__text"},ye=e("span",{class:"pf-c-search-input__icon"},[e("i",{class:"fas fa-search fa-fw","aria-hidden":"true"})],-1),be=e("small",null,[p("Full or partial string to search for. RegExp character classes can be also be used. See here for a RegExp cheat sheet "),e("a",{href:"https://devhints.io/regexp",target:"_blank"},"https://devhints.io/regexp")],-1),ke={class:"pf-c-switch pf-m-reverse",for:"search_latest_only"},xe=e("span",{class:"pf-c-switch__toggle"},null,-1),Ce=e("span",{class:"pf-c-switch__label pf-m-on",id:"search_latest_only-on","aria-hidden":"true"},"Search latest only on",-1),we=e("span",{class:"pf-c-switch__label pf-m-off",id:"search_latest_only-off","aria-hidden":"true"},"Search latest only off",-1),Se={class:"pf-c-wizard__footer"},Le={key:0,class:"pf-c-card pf-u-mt-lg",id:"summary_card"},De=e("div",{class:"pf-c-card__header"},[e("h2",{class:"pf-c-title pf-m-lg"},"Summary")],-1),Ve={class:"pf-c-card__body"},Ee={key:0,class:"pf-c-skeleton"},Re={key:1,class:"pf-l-grid pf-m-all-6-col-on-sm pf-m-all-3-col-on-lg pf-m-gutter"},Te={class:"pf-l-grid__item"},Be={class:"pf-l-flex pf-m-space-items-sm"},Me=e("div",{class:"pf-l-flex__item"},[e("i",{class:"fas fa-check-circle pf-u-success-color-100"})],-1),Ne={class:"pf-l-flex__item"},je=e("div",{class:"pf-l-flex__item"},[e("span",{class:"pf-u-color-400"},"Search Duration ")],-1),Fe={class:"pf-l-grid__item"},Ue={class:"pf-l-flex pf-m-space-items-sm"},Ie=e("div",{class:"pf-l-flex__item"},[e("i",{class:"fas fa-check-circle pf-u-success-color-100"})],-1),He={class:"pf-l-flex__item"},Oe=e("div",{class:"pf-l-flex__item"},[e("span",{class:"pf-u-color-400"}," Files Searched")],-1),ze={class:"pf-l-grid__item"},Ke={class:"pf-l-flex pf-m-space-items-sm"},Pe=e("div",{class:"pf-l-flex__item"},[e("i",{class:"fas fa-check-circle pf-u-success-color-100"})],-1),qe={class:"pf-l-flex__item"},Ae=e("div",{class:"pf-l-flex__item"},[e("span",{class:"pf-u-color-400"}," Lines Searched")],-1),Ge={class:"pf-l-grid__item"},Je={class:"pf-l-flex pf-m-space-items-sm"},Qe=e("div",{class:"pf-l-flex__item"},[e("i",{class:"fas fa-check-circle pf-u-success-color-100"})],-1),We={class:"pf-l-flex__item"},Xe=e("div",{class:"pf-l-flex__item"},[e("span",{class:"pf-u-color-400"},"Matches ")],-1),Ye={key:1,class:"pf-c-card pf-u-mt-lg"},Ze=e("div",{class:"pf-c-card__header"},[e("h2",{class:"pf-c-title pf-m-lg"},"Results")],-1),$e={class:"pf-c-card__body"},es={key:0,class:"pf-c-skeleton"},ss={key:1},os={class:"pf-l-grid pf-m-gutter pf-u-mb-md"},ts={class:"pf-l-grid__item pf-m-3-col copyLinkDD"},cs=e("b",null,"Device Name:",-1),as=["onClick"],ns={class:"pf-l-grid__item pf-m-3-col copyLinkDD"},ls=e("b",null,"Category:",-1),is=["onClick"],ds={class:"pf-l-grid__item pf-m-3-col copyLinkDD"},rs=e("b",null,"Date: ",-1),_s=["onClick"],ps={class:"pf-l-grid__item pf-m-3-col copyLinkDD"},fs=e("b",null,"Filename:",-1),hs=["onClick"],ms=["onClick"],us=e("span",{class:"pf-c-expandable-section__toggle-icon"},[e("i",{class:"fas fa-angle-right","aria-hidden":"true"})],-1),gs={class:"pf-c-expandable-section__toggle-text"},vs={key:0},ys={key:1},bs=["hidden"],ks={class:"pf-c-code-block"},xs={class:"pf-c-code-block__header"},Cs={class:"pf-c-code-block__actions"},ws={class:"pf-c-code-block__actions-item"},Ss=["onClick"],Ls=e("i",{class:"fas fa-copy","aria-hidden":"true"},null,-1),Ds=[Ls],Vs={class:"pf-c-code-block__content"},Es={class:"pf-c-code-block__pre"},Rs={class:"pf-c-code-block__code"},Ts=["innerHTML"],Bs={key:2,class:"pf-c-back-to-top"},Ms=e("span",{class:"pf-c-button__icon pf-m-end"},[e("i",{class:"fas fa-angle-up","aria-hidden":"true"})],-1);function Ns(m,t,c,s,b,g){const k=y("page-header"),u=y("device-category-field"),x=y("loading-spinner"),_=y("copy-icon");return i(),l("main",$,[h(k,{pagename:s.viewstate.pagename,desc:s.viewstate.pagedesc},null,8,["pagename","desc"]),ee,e("section",se,[e("div",{class:V(["pf-c-drawer",{"pf-m-expanded":s.viewstate.openDrawerState}]),id:"top_div"},[e("div",oe,[e("div",te,[e("div",ce,[e("div",ae,[ne,e("div",le,[e("form",ie,[h(u,{modelValue:s.model,"onUpdate:modelValue":t[0]||(t[0]=o=>s.model=o),updateValue:s.model.device_category_id,"onUpdate:updateValue":t[1]||(t[1]=o=>s.model.device_category_id=o),errors:s.errors},null,8,["modelValue","updateValue","errors"]),e("div",de,[re,e("div",_e,[w(e("input",{type:"number",id:"line_count",class:"pf-c-form-control","onUpdate:modelValue":t[2]||(t[2]=o=>s.model.line_count=o),autocomplete:"nope"},null,512),[[E,s.model.line_count]]),pe])]),e("div",fe,[he,e("div",me,[e("div",ue,[e("div",ge,[e("span",ve,[ye,w(e("input",{class:"pf-c-search-input__text-input",type:"text",placeholder:"Search string","aria-label":"Search string","onUpdate:modelValue":t[3]||(t[3]=o=>s.model.search_string=o),autocomplete:"off",onKeydown:t[4]||(t[4]=P(S(o=>s.search(),["prevent"]),["enter"]))},null,544),[[E,s.model.search_string]])])])]),be])]),e("label",ke,[w(e("input",{class:"pf-c-switch__input",type:"checkbox",id:"search_latest_only","aria-labelledby":"search_latest_only-on",name:"switchExample1","onUpdate:modelValue":t[5]||(t[5]=o=>s.model.search_latest_only=o)},null,512),[[q,s.model.search_latest_only]]),xe,Ce,we]),e("footer",Se,[e("button",{class:"pf-c-button pf-m-primary",type:"button",onClick:t[6]||(t[6]=S(o=>s.search(),["prevent"]))},"Search"),e("button",{"aria-disabled":"false",class:"pf-c-button pf-m-link",type:"button",onClick:t[7]||(t[7]=S((...o)=>s.clear&&s.clear(...o),["prevent"]))},"Clear")])])])]),h(x,{showSpinner:s.isLoading},null,8,["showSpinner"]),s.results.search_results&&Object.keys(s.results.search_results).length>0?(i(),l("div",Le,[De,e("div",Ve,[s.isLoading?(i(),l("div",Ee)):r("",!0),s.isLoading?r("",!0):(i(),l("div",Re,[e("div",Te,[e("div",Be,[Me,e("div",Ne,[e("span",null,d(s.results.duration),1)]),je])]),e("div",Fe,[e("div",Ue,[Ie,e("div",He,[e("span",null,d(s.results.fileCount),1)]),Oe])]),e("div",ze,[e("div",Ke,[Pe,e("div",qe,[e("span",null,d(s.results.lineCount),1)]),Ae])]),e("div",Ge,[e("div",Je,[Qe,e("div",We,[e("span",null,d(s.results.matchCount),1)]),Xe])])]))])])):r("",!0),s.results.matchCount>0?(i(),l("div",Ye,[Ze,e("div",$e,[s.isLoading?(i(),l("div",es)):r("",!0),s.isLoading?r("",!0):(i(),l("div",ss,[(i(!0),l(A,null,G(s.results.search_results,o=>(i(),l("div",{class:V(["pf-c-expandable-section pf-m-display-lg pf-m-limit-width pf-u-mb-md",{"pf-m-expanded":o.expanded}]),style:{padding:"1rem","background-color":"white","border-bottom":"1px solid #f8f8f8",transition:"width 0.2s ease-in-out"},key:o},[e("div",os,[e("div",ts,[cs,p(),e("span",null,d(o[0][4]),1),e("button",{class:"pf-c-button pf-m-inline pf-m-link pf-u-color-100 copyLink",type:"button",alt:"copy",title:"copy",onClick:f=>s.copy(o[0][4])},[h(_)],8,as)]),e("div",ns,[ls,p(),e("span",null,d(o[0][5]),1),e("button",{class:"pf-c-button pf-m-inline pf-m-link pf-u-color-100 copyLink",type:"button",alt:"copy",title:"copy",onClick:f=>s.copy(o[0][5])},[h(_)],8,is)]),e("div",ds,[rs,p(),e("span",null,d(o[0][1])+" "+d(o[0][2])+" "+d(o[0][3]),1),e("button",{class:"pf-c-button pf-m-inline pf-m-link pf-u-color-100 copyLink",type:"button",alt:"copy",title:"copy",onClick:f=>s.copy(o[0][1]+" "+o[0][2]+" "+o[0][3])},[h(_)],8,_s)]),e("div",ps,[fs,p(),e("span",null,d(o[0][0]),1),e("button",{class:"pf-c-button pf-m-inline pf-m-link pf-u-color-100 copyLink",type:"button",alt:"copy",title:"copy",onClick:f=>s.copy(o[0][0])},[h(_)],8,hs)])]),e("div",null,[e("button",{type:"button",class:"pf-c-expandable-section__toggle","aria-expanded":"false",onClick:f=>s.toggleExpandResults(o)},[us,e("span",gs,[o.expanded?r("",!0):(i(),l("span",vs,"Show")),p(),o.expanded?(i(),l("span",ys,"Hide")):r("",!0),p(" search results")])],8,ms),e("div",{class:"pf-c-expandable-section__content",hidden:!o.expanded},[e("div",ks,[e("div",xs,[e("div",Cs,[e("div",ws,[e("button",{class:"pf-c-button pf-m-plain",type:"button",alt:"Copy to clipboard",title:"Copy to clipboard",onClick:f=>s.copy(s.stringifyResult(o))},Ds,8,Ss)])])]),e("div",Vs,[e("pre",Es,[e("code",Rs,[e("div",{innerHTML:s.displayResult(o)},null,8,Ts)])])])])],8,bs)])],2))),128))]))])])):r("",!0),s.results.matchCount>0&&s.showScrollBtn?(i(),l("div",Bs,[e("button",{class:"pf-c-button pf-m-primary",onClick:t[8]||(t[8]=(...o)=>s.scrollToTop&&s.scrollToTop(...o))},[p(" Back to top "),Ms])])):r("",!0)])])])],2)])])}const Ps=U(Z,[["render",Ns]]);export{Ps as default};
