import{T as h,o as n,c as i,a as s,t as d,v as c,a0 as x,E as y,G as z,s as u,$ as O,B as g,C as b,f as q,Y as w,a2 as U,J as V,K as D,d as k,b as v,a8 as j,i as M,N as E}from"./app-DPEN0t_k.js";import{u as N}from"./scrollToBottom-Cz-iWedv.js";/* empty css               */const A={props:{show:{type:Boolean,default:!1},message:{type:String,default:""}},setup(r){return{}}},P={key:0,class:"pf-c-helper-text__item pf-m-success pf-u-success-color-100"},H={class:"pf-c-helper-text__item-icon","aria-hidden":"true"},F={fill:"currentColor",height:"1em",width:"1em",viewBox:"0 0 512 512","aria-hidden":"true",role:"img",style:{"vertical-align":"-0.125em"}},R={key:0,class:"pf-c-helper-text__item-text",style:{"padding-left":"5px"}};function Y(r,e,o,t,m,a){return o.show?(n(),i("div",P,[s("span",H,[(n(),i("svg",F,e[0]||(e[0]=[s("path",{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1)])))]),o.show?(n(),i("span",R,d(o.message),1)):c("",!0)])):c("",!0)}const T=h(A,[["render",Y]]),$={props:{},components:{HelperSuccessText:T},setup(r){const e=x({isSuccess:!1,successMsg:""}),o=y("");z(()=>{t()});function t(){axios.get("/api/settings/banner/1").then(a=>{o.value=a.data.login_banner}).catch(a=>{console.log(a.response)})}function m(){axios.patch("/api/settings/banner/1",{login_banner:o.value}).then(a=>{e.isSuccess=!0,e.successMsg="Banner saved successfully",setTimeout(()=>{e.isSuccess=!1},3e3)}).catch(a=>{console.log(a)})}return{banner:o,bannerSuccess:e,saveBanner:m}}},G={class:"pf-c-panel pf-m-raised"},J={class:"pf-c-panel__main"},K={class:"pf-c-panel__main-body"},Z={novalidate:"",class:"pf-c-form pf-m-horizontal"},I={class:"pf-c-form__group"},Q={class:"pf-c-form__group-control"},W={class:"pf-c-form__group pf-m-action"},X={class:"pf-c-form__group-control"},ee={class:"pf-c-form__actions"};function se(r,e,o,t,m,a){const _=u("helper-success-text");return n(),i("div",G,[e[4]||(e[4]=s("div",{class:"pf-c-panel__header"},"Login Banner",-1)),e[5]||(e[5]=s("hr",{class:"pf-c-divider"},null,-1)),s("div",J,[s("div",K,[s("form",Z,[s("div",I,[e[3]||(e[3]=O('<div class="pf-c-form__group-label"><label class="pf-c-form__label" for="form-horizontal-info"><span class="pf-c-form__label-text">Banner</span></label><button class="pf-c-form__group-label-help" aria-label="More info" tabindex="-1"><i class="pficon pf-icon-help" aria-hidden="true"></i></button></div>',1)),s("div",Q,[g(s("textarea",{class:"pf-c-form-control",type:"text",id:"login_banner",name:"login_banner","aria-label":"System Banner",spellcheck:"false","data-ms-editor":"true","onUpdate:modelValue":e[0]||(e[0]=p=>t.banner=p),rows:"3",autocomplete:"off"},null,512),[[b,t.banner]]),(n(),q(_,{show:t.bannerSuccess.isSuccess,message:t.bannerSuccess.successMsg,key:1,style:{"margin-top":"10px"}},null,8,["show","message"]))])]),s("div",W,[s("div",X,[s("div",ee,[s("button",{class:"pf-c-button pf-m-primary",type:"submit",onClick:e[1]||(e[1]=w((...p)=>t.saveBanner&&t.saveBanner(...p),["prevent"]))},"Save"),s("button",{class:"pf-c-button pf-m-tertiary",type:"button",onClick:e[2]||(e[2]=w((...p)=>r.resetBanner&&r.resetBanner(...p),["prevent"]))},"Reset")])])])])])])])}const C=h($,[["render",se]]),te={props:{currentTimezone:{type:String,required:!0}},setup(r,{emit:e}){const o=y(!1),t=x({}),m=y(null);z(()=>{p()});function a(){o.value=!o.value}function _(l){axios.patch("/api/settings/timezone/1",{timezone:l}).then(f=>{var S="Timezone offset set to "+l;e("timezoneSetSuccess",{msg:S,timezone:l})}).catch(f=>{console.log(f),this.$emit("timezoneSetError",f)})}function p(){axios.get("/api/settings/get-timezone-list").then(l=>{Object.assign(t,l.data)}).catch(l=>[])}return U(m,l=>o.value=!1),{changeTimezone:_,clickOutsideSelect:m,timezones:t,showSelect:o,toggleSelect:a}}},oe={class:"pf-c-select pf-m-expanded"},le={key:0,id:"select-single-expanded-label",ref:"clickOutsideSelect"},ne={class:"pf-c-select__toggle-wrapper"},ie={class:"pf-c-select__toggle-text"},ae={key:1,class:"pf-c-select__menu multi-select-dropdown-overflow",role:"listbox","aria-labelledby":"select-single-expanded-label",style:{"z-index":"1000",position:"relative"}},re=["onClick"],ce={key:0,class:"pf-c-select__menu-item-icon"};function pe(r,e,o,t,m,a){return n(),i("div",oe,[t.showSelect||!1?(n(),i("span",le,"Choose one",512)):c("",!0),s("button",{class:"pf-c-select__toggle",type:"button",onClick:e[0]||(e[0]=(..._)=>t.toggleSelect&&t.toggleSelect(..._))},[s("div",ne,[s("span",ie,d(o.currentTimezone),1)]),e[1]||(e[1]=s("span",{class:"pf-c-select__toggle-arrow"},[s("i",{class:"fas fa-caret-down","aria-hidden":"true"})],-1))]),t.showSelect||!1?(n(),i("ul",ae,[(n(!0),i(V,null,D(t.timezones,(_,p)=>(n(),i("li",{role:"presentation",key:_},[s("button",{class:"pf-c-select__menu-item",role:"option",onClick:l=>t.changeTimezone(p)},[k(d(_)+" ",1),p===o.currentTimezone?(n(),i("span",ce,e[2]||(e[2]=[s("i",{class:"fas fa-check","aria-hidden":"true"},null,-1)]))):c("",!0)],8,re)]))),128))])):c("",!0)])}const me=h(te,[["render",pe]]),_e={props:{show:{type:Boolean,default:!1},message:{type:String,default:""}},setup(r){return{}}},fe={key:0,class:"pf-c-helper-text"},de={class:"pf-c-helper-text__item"},ue={class:"pf-c-helper-text__item-text",style:{"padding-left":"5px"}};function ge(r,e,o,t,m,a){return o.show?(n(),i("div",fe,[s("div",de,[s("span",ue,d(o.message),1)])])):c("",!0)}const he=h(_e,[["render",ge]]),be={props:{},components:{TimezoneSelect:me,HelperSuccessText:T,HelperDefaultText:he},setup(r){const e=x({isSuccess:!1,isDefault:!0,successMsg:""}),o=y("");z(()=>{t()});function t(){axios.get("/api/settings/timezone/1",{}).then(a=>{o.value=a.data.timezone}).catch(a=>{console.log(a)})}function m(a){o.value=a.timezone,e.isDefault=!1,e.isSuccess=!0,e.successMsg=a.msg,setTimeout(()=>{e.isSuccess=!1,e.isDefault=!0},3e3)}return{timezoneSuccess:e,timezone:o,timezoneUpdated:m}}},ve={class:"pf-c-panel pf-m-raised",style:{"margin-top":"10px"}},xe={class:"pf-c-panel__main"},ye={class:"pf-c-panel__main-body"},Se={novalidate:"",class:"pf-c-form pf-m-horizontal"},ke={class:"pf-c-form__group"},we={class:"pf-c-form__group-control"},ze={class:"pf-c-form__group pf-m-action",style:{"margin-top":"0px"}},Te={class:"pf-c-form__group-control"},Me={class:"pf-c-form__actions"};function Ee(r,e,o,t,m,a){const _=u("timezone-select"),p=u("helper-default-text"),l=u("helper-success-text");return n(),i("div",ve,[e[2]||(e[2]=s("div",{class:"pf-c-panel__header"},"System Timezone",-1)),e[3]||(e[3]=s("hr",{class:"pf-c-divider"},null,-1)),s("div",xe,[s("div",ye,[s("form",Se,[s("div",ke,[e[1]||(e[1]=O('<div class="pf-c-form__group-label"><label class="pf-c-form__label" for="form-horizontal-info"><span class="pf-c-form__label-text">Timezone</span></label><button class="pf-c-form__group-label-help" aria-label="More info" tabindex="-1"><i class="pficon pf-icon-help" aria-hidden="true"></i></button></div>',1)),s("div",we,[v(_,{currentTimezone:t.timezone,onTimezoneSetSuccess:e[0]||(e[0]=f=>t.timezoneUpdated(f))},null,8,["currentTimezone"])])]),s("div",ze,[s("div",Te,[s("div",Me,[v(p,{show:t.timezoneSuccess.isDefault,message:"Current system timezone is set to "+t.timezone},null,8,["show","message"]),(n(),q(l,{show:t.timezoneSuccess.isSuccess,message:t.timezoneSuccess.successMsg,key:2},null,8,["show","message"]))])])])])])])])}const B=h(be,[["render",Ee]]),Ce={props:{show:{type:Boolean,default:!1},message:{type:String,default:""}},setup(r){return{}}},Be={key:0,class:"pf-c-helper-text__item pf-m-error pf-u-danger-color-100"},Le={key:0,class:"pf-c-helper-text__item-text",style:{"padding-left":"5px"}};function Oe(r,e,o,t,m,a){return o.show?(n(),i("div",Be,[e[0]||(e[0]=s("span",{class:"pf-c-helper-text__item-icon"},[s("i",{class:"fas fa-fw fa-exclamation-circle","aria-hidden":"true"})],-1)),o.show?(n(),i("span",Le,d(o.message),1)):c("",!0)])):c("",!0)}const qe=h(Ce,[["render",Oe]]),Ve={props:{settings:{type:Object}},components:{HelperSuccessText:T,HelperErrorText:qe},setup(r){const e=y(!1),o=x({isSuccess:!1,isError:!1,isDefault:!0,successMsg:"",errorMsg:"",errors:{},test1Loading:!1,test2Loading:!1}),t=x({isSuccess:!1,isError:!1,isDefault:!0,successMsg:"",errorMsg:"",errors:{},test1Loading:!1,test2Loading:!1}),m=y(!1),{scrollToBottom:a}=N();z(()=>{});function _(f){r.settings.mail_encryption=f,e.value=!1}function p(){Object.assign(t,o),E.patch("/api/settings/email/1",{mail_driver:"smtp",mail_host:r.settings.mail_host,mail_port:r.settings.mail_port,mail_username:r.settings.mail_username,mail_password:r.settings.mail_password,mail_from_email:r.settings.mail_from_email,mail_to_email:r.settings.mail_to_email,mail_authcheck:r.settings.mail_authcheck,mail_encryption:r.settings.mail_encryption}).then(f=>{t.isSuccess=!0,t.successMsg="Email settings saved successfully",a(),setTimeout(()=>{Object.assign(t,o)},1e4)}).catch(f=>{t.isError=!0,t.errorMsg=f.response.data.message,a(),setTimeout(()=>{Object.assign(t,o)},5e3)})}function l(f){switch(Object.assign(t,o),f){case"email":t.test1Loading=!0;break;case"notification":t.test2Loading=!0;break}E.get("/api/settings/test-"+f).then(S=>{t.test1Loading=!1,t.test2Loading=!1,t.isSuccess=!0,t.successMsg=S.data.message,a(),setTimeout(()=>{Object.assign(t,o)},5e3)}).catch(S=>{t.test1Loading=!1,t.test2Loading=!1,t.isError=!0,t.errorMsg=S.response.data.message,a(),setTimeout(()=>{Object.assign(t,o)},5e3)})}return{emailSettings:t,scrollToBottom:a,showEncrytionOptions:e,selectEncryption:_,testEmail:l,updateEmail:p,mailToTooltip:m}}},Ue={class:"pf-c-panel pf-m-raised",style:{"margin-top":"10px"}},De={class:"pf-c-panel__main"},je={class:"pf-c-panel__main-body"},Ne={novalidate:"",class:"pf-c-form pf-m-horizontal"},Ae={class:"pf-c-form__group"},Pe={class:"pf-c-form__group-control"},He={key:0,class:"pf-c-form__helper-text pf-m-error",id:"form-help-text-address-helper","aria-live":"polite"},Fe={class:"pf-c-form__group"},Re={class:"pf-c-form__group-control"},Ye={key:0,class:"pf-c-form__helper-text pf-m-error",id:"form-help-text-address-helper","aria-live":"polite"},$e={class:"pf-c-form__group"},Ge={class:"pf-c-form__group-control"},Je={key:0,class:"pf-c-form__helper-text pf-m-error",id:"form-help-text-address-helper","aria-live":"polite"},Ke={class:"pf-c-form__group"},Ze={class:"pf-c-form__group-label",style:{position:"relative"}},Ie={key:0,class:"pf-c-tooltip pf-m-bottom",role:"tooltip",style:{position:"absolute"}},Qe={class:"pf-c-form__group-control"},We={key:0,class:"pf-c-form__helper-text pf-m-error",id:"form-help-text-address-helper","aria-live":"polite"},Xe={class:"pf-c-form__group"},es={class:"pf-c-form__group-control"},ss={class:"pf-c-switch",style:{"margin-top":"20px"}},ts=["checked"],os={key:0,class:"pf-c-form__helper-text pf-m-error",id:"form-help-text-address-helper","aria-live":"polite"},ls={key:0,class:"pf-c-form__group"},ns={class:"pf-c-form__group-control"},is={class:"pf-c-select pf-m-expanded"},as={class:"pf-c-select__toggle-wrapper"},rs=["textContent"],cs={key:0},ps={class:"pf-c-select__menu multi-select-dropdown-overflow",role:"listbox","aria-labelledby":"select-single-expanded-label",tabindex:"6"},ms={role:"presentation"},_s={key:0,class:"pf-c-select__menu-item-icon"},fs={role:"presentation"},ds={key:0,class:"pf-c-select__menu-item-icon"},us={key:1,class:"pf-c-form__group"},gs={class:"pf-c-form__group-control"},hs={key:0,class:"pf-c-form__helper-text pf-m-error",id:"form-help-text-address-helper","aria-live":"polite"},bs={key:2,class:"pf-c-form__group"},vs={class:"pf-c-form__group-control"},xs={key:0,class:"pf-c-form__helper-text pf-m-error",id:"form-help-text-address-helper","aria-live":"polite"},ys={class:"pf-c-form__group pf-m-action"},Ss={class:"pf-c-form__group-control"},ks={class:"pf-c-form__actions"},ws={key:0,class:"pf-c-button__progress"},zs={key:0,class:"pf-c-button__progress"};function Ts(r,e,o,t,m,a){const _=u("helper-success-text"),p=u("helper-error-text");return n(),i("div",Ue,[e[39]||(e[39]=s("div",{class:"pf-c-panel__header"},"Email Settings",-1)),e[40]||(e[40]=s("hr",{class:"pf-c-divider"},null,-1)),s("div",De,[s("div",je,[s("form",Ne,[s("div",Ae,[e[16]||(e[16]=s("div",{class:"pf-c-form__group-label"},[s("label",{class:"pf-c-form__label",tabindex:"-1"},[s("span",{class:"pf-c-form__label-text"},"Mail Host"),s("span",{class:"pf-c-form__label-required","aria-hidden":"true"}," * ")])],-1)),s("div",Pe,[g(s("input",{class:"pf-c-form-control",type:"text",id:"mail_host",name:"mail_host",required:"",spellcheck:"false","data-ms-editor":"true","onUpdate:modelValue":e[0]||(e[0]=l=>o.settings.mail_host=l),autocomplete:"off",tabindex:"1"},null,512),[[b,o.settings.mail_host]]),t.emailSettings.errors.mail_host?(n(),i("p",He,d(t.emailSettings.errors.mail_host[0]),1)):c("",!0)])]),s("div",Fe,[e[17]||(e[17]=s("div",{class:"pf-c-form__group-label"},[s("label",{class:"pf-c-form__label"},[s("span",{class:"pf-c-form__label-text"},"SMTP Port")]),s("span",{class:"pf-c-form__label-required","aria-hidden":"true"}," * ")],-1)),s("div",Re,[g(s("input",{class:"pf-c-form-control",type:"number",id:"mail_port",name:"mail_port",required:"",spellcheck:"false","data-ms-editor":"true","onUpdate:modelValue":e[1]||(e[1]=l=>o.settings.mail_port=l),autocomplete:"off",tabindex:"1"},null,512),[[b,o.settings.mail_port]]),t.emailSettings.errors.mail_port?(n(),i("p",Ye,d(t.emailSettings.errors.mail_port[0]),1)):c("",!0)])]),s("div",$e,[e[18]||(e[18]=s("div",{class:"pf-c-form__group-label"},[s("label",{class:"pf-c-form__label"},[s("span",{class:"pf-c-form__label-text"},"From Address"),s("span",{class:"pf-c-form__label-required","aria-hidden":"true"}," * ")])],-1)),s("div",Ge,[g(s("input",{class:"pf-c-form-control",type:"email",id:"mail_from_email",name:"mail_from_email",required:"",spellcheck:"false","data-ms-editor":"true","onUpdate:modelValue":e[2]||(e[2]=l=>o.settings.mail_from_email=l),autocomplete:"off",tabindex:"2"},null,512),[[b,o.settings.mail_from_email]]),t.emailSettings.errors.mail_from_email?(n(),i("p",Je,d(t.emailSettings.errors.mail_from_email[0]),1)):c("",!0)])]),s("div",Ke,[s("div",Ze,[e[21]||(e[21]=s("label",{class:"pf-c-form__label"},[s("span",{class:"pf-c-form__label-text"},"Recipients"),s("span",{class:"pf-c-form__label-required","aria-hidden":"true"}," * ")],-1)),s("button",{class:"pf-c-form__group-label-help",onMouseover:e[3]||(e[3]=l=>t.mailToTooltip=!0),onMouseleave:e[4]||(e[4]=l=>t.mailToTooltip=!1),tabindex:"-1"},e[19]||(e[19]=[s("i",{class:"pficon pf-icon-help","aria-hidden":"true"},null,-1)]),32),t.mailToTooltip?(n(),i("div",Ie,e[20]||(e[20]=[s("div",{class:"pf-c-tooltip__arrow"},null,-1),s("div",{class:"pf-c-tooltip__content",id:"tooltip-top-content"}," You may enter multiple emails separated by a semi-colon (;). At least one is required for testing, and can be an existing users email address. ",-1)]))):c("",!0)]),s("div",Qe,[g(s("input",{class:"pf-c-form-control",type:"text",id:"mail_to_email",name:"mail_to_email",required:"",spellcheck:"false","data-ms-editor":"true","onUpdate:modelValue":e[5]||(e[5]=l=>o.settings.mail_to_email=l),autocomplete:"off",tabindex:"3"},null,512),[[b,o.settings.mail_to_email]]),t.emailSettings.errors.mail_to_email?(n(),i("p",We,d(t.emailSettings.errors.mail_to_email[0]),1)):c("",!0)])]),s("div",Xe,[e[25]||(e[25]=s("div",{class:"pf-c-form__group-label"},[s("label",{class:"pf-c-form__label"},[s("span",{class:"pf-c-form__label-text"},"Authentication"),s("span",{class:"pf-c-form__label-required","aria-hidden":"true"}," * ")])],-1)),s("div",es,[s("label",ss,[g(s("input",{class:"pf-c-switch__input",type:"checkbox",id:"mail_authcheck","aria-labelledby":"mail_authcheck-on",name:"switchExample1",checked:o.settings.mail_authcheck,"onUpdate:modelValue":e[6]||(e[6]=l=>o.settings.mail_authcheck=l),onChange:e[7]||(e[7]=(...l)=>t.scrollToBottom&&t.scrollToBottom(...l)),tabindex:"4"},null,40,ts),[[j,o.settings.mail_authcheck]]),t.emailSettings.errors.mail_authcheck?(n(),i("p",os,d(t.emailSettings.errors.mail_authcheck[0]),1)):c("",!0),e[22]||(e[22]=s("span",{class:"pf-c-switch__toggle"},null,-1)),e[23]||(e[23]=s("span",{class:"pf-c-switch__label pf-m-on",id:"mail_authcheck-on","aria-hidden":"true"}," Authentication enabled ",-1)),e[24]||(e[24]=s("span",{class:"pf-c-switch__label pf-m-off",id:"mail_authcheck-off","aria-hidden":"true"}," Authentication disabled ",-1))])])]),o.settings.mail_authcheck?(n(),i("div",ls,[e[32]||(e[32]=s("div",{class:"pf-c-form__group-label"},[s("label",{class:"pf-c-form__label"},[s("span",{class:"pf-c-form__label-text"},"Encryption")]),s("button",{class:"pf-c-form__group-label-help","aria-label":"More info",tabindex:"-1"})],-1)),s("div",ns,[s("div",is,[e[31]||(e[31]=s("span",{hidden:""},"Choose an option",-1)),s("button",{class:"pf-c-select__toggle",type:"button",onClick:e[8]||(e[8]=l=>t.showEncrytionOptions=!t.showEncrytionOptions),tabindex:"5"},[s("div",as,[s("span",{class:"pf-c-select__toggle-text",textContent:d(o.settings.mail_encryption?o.settings.mail_encryption.toUpperCase():"Choose an option")},null,8,rs)]),e[26]||(e[26]=s("span",{class:"pf-c-select__toggle-arrow"},[s("i",{class:"fas fa-caret-down","aria-hidden":"true"})],-1))]),t.showEncrytionOptions||!1?(n(),i("div",cs,[s("ul",ps,[s("li",ms,[s("button",{class:"pf-c-select__menu-item",role:"option",onClick:e[9]||(e[9]=l=>t.selectEncryption("tls"))},[e[28]||(e[28]=k(" TLS ")),o.settings.mail_encryption==="tls"?(n(),i("span",_s,e[27]||(e[27]=[s("i",{class:"fas fa-check","aria-hidden":"true"},null,-1)]))):c("",!0)])]),s("li",fs,[s("button",{class:"pf-c-select__menu-item",role:"option",onClick:e[10]||(e[10]=l=>t.selectEncryption("ssl"))},[e[30]||(e[30]=k(" SSL ")),o.settings.mail_encryption==="ssl"?(n(),i("span",ds,e[29]||(e[29]=[s("i",{class:"fas fa-check","aria-hidden":"true"},null,-1)]))):c("",!0)])])])])):c("",!0)])])])):c("",!0),o.settings.mail_authcheck?(n(),i("div",us,[e[33]||(e[33]=s("div",{class:"pf-c-form__group-label"},[s("label",{class:"pf-c-form__label"},[s("span",{class:"pf-c-form__label-text"},"SMTP Username")])],-1)),s("div",gs,[g(s("input",{class:"pf-c-form-control",type:"text",id:"mail_username",name:"mail_username",required:"",spellcheck:"false","data-ms-editor":"true","onUpdate:modelValue":e[11]||(e[11]=l=>o.settings.mail_username=l),autocomplete:"off",tabindex:"7"},null,512),[[b,o.settings.mail_username]]),t.emailSettings.errors.mail_username?(n(),i("p",hs,d(t.emailSettings.errors.mail_username[0]),1)):c("",!0)])])):c("",!0),o.settings.mail_authcheck?(n(),i("div",bs,[e[34]||(e[34]=s("div",{class:"pf-c-form__group-label"},[s("label",{class:"pf-c-form__label"},[s("span",{class:"pf-c-form__label-text"},"SMTP Password")])],-1)),s("div",vs,[g(s("input",{class:"pf-c-form-control",type:"password",id:"mail_password",name:"mail_password",required:"",spellcheck:"false","data-ms-editor":"true","onUpdate:modelValue":e[12]||(e[12]=l=>o.settings.mail_password=l),autocomplete:"off",tabindex:"8"},null,512),[[b,o.settings.mail_password]]),t.emailSettings.errors.mail_password?(n(),i("p",xs,d(t.emailSettings.errors.mail_password[0]),1)):c("",!0)])])):c("",!0),s("div",ys,[s("div",Ss,[s("div",ks,[s("button",{class:"pf-c-button pf-m-primary",type:"submit",onClick:e[13]||(e[13]=w((...l)=>t.updateEmail&&t.updateEmail(...l),["prevent"])),tabindex:"9"}," Save "),s("button",{class:M(["pf-c-button pf-m-progress pf-m-secondary",t.emailSettings.test1Loading?"pf-m-in-progress":""]),type:"button",onClick:e[14]||(e[14]=w(l=>t.testEmail("email"),["prevent"])),tabindex:"10"},[t.emailSettings.test1Loading?(n(),i("span",ws,e[35]||(e[35]=[s("span",{class:"pf-c-spinner pf-m-md",role:"progressbar","aria-label":"Loading..."},[s("span",{class:"pf-c-spinner__clipper"}),s("span",{class:"pf-c-spinner__lead-ball"}),s("span",{class:"pf-c-spinner__tail-ball"})],-1)]))):c("",!0),e[36]||(e[36]=k(" Test Email "))],2),s("button",{class:M(["pf-c-button pf-m-progress pf-m-secondary",t.emailSettings.test2Loading?"pf-m-in-progress":""]),type:"button",onClick:e[15]||(e[15]=w(l=>t.testEmail("notification"),["prevent"])),tabindex:"11"},[t.emailSettings.test2Loading?(n(),i("span",zs,e[37]||(e[37]=[s("span",{class:"pf-c-spinner pf-m-md",role:"progressbar","aria-label":"Loading..."},[s("span",{class:"pf-c-spinner__clipper"}),s("span",{class:"pf-c-spinner__lead-ball"}),s("span",{class:"pf-c-spinner__tail-ball"})],-1)]))):c("",!0),e[38]||(e[38]=k(" Test Notifications "))],2)]),v(_,{show:t.emailSettings.isSuccess,message:t.emailSettings.successMsg,style:{"margin-top":"10px"}},null,8,["show","message"]),v(p,{show:t.emailSettings.isError,message:t.emailSettings.errorMsg,style:{"margin-top":"10px"}},null,8,["show","message"])])])])])])])}const L=h(Ve,[["render",Ts]]),Ms={props:{},components:{SystemBanner:C,SystemTimeZone:B,SystemEmail:L},setup(r){const e=x({});z(()=>{o()});function o(){axios.get("/api/settings/settings/1",{}).then(t=>{Object.assign(e,t.data)}).catch(t=>{console.log(t)})}return{SystemBanner:C,SystemTimeZone:B,SystemEmail:L,allSettings:e}}};function Es(r,e,o,t,m,a){const _=u("system-banner"),p=u("system-time-zone"),l=u("system-email");return n(),i(V,null,[v(_,{settings:t.allSettings},null,8,["settings"]),v(p,{settings:t.allSettings},null,8,["settings"]),v(l,{settings:t.allSettings},null,8,["settings"])],64)}const Os=h(Ms,[["render",Es]]);export{Os as default};
