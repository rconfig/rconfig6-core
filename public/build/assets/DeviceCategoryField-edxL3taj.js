import{T as S,E as m,a2 as V,a0 as y,a1 as O,o as l,c,a as e,i as u,Y as v,a3 as x,t as g,J as C,K as j,d as E,v as n}from"./app-DPEN0t_k.js";import{u as L}from"./ViewFunctions-BS2UTVoE.js";const D={props:{modelValue:{type:Object},errors:""},setup(r,{emit:t}){const i=m(!1),a=m(null);V(a,p=>_());const s=y({id:"",categoryName:""}),d=y({modelName:"categories",pageOptionsState:{page:1,per_page:1e3},modelObject:{categoryName:""}}),{models:o,isLoading:f,dataTablePageChanged:b}=L(d,d.modelName,d.modelObject);function h(p){Object.assign(s,o.data.find(N=>N.id===p)),t("update:updateValue",p),_()}function k(){i.value===!1&&b(d.pageOptionsState),i.value=!i.value}function w(){_()}function _(){i.value=!1}return O(()=>{r.modelValue.hasOwnProperty("category")&&r.modelValue.category.length>0?(s.id=r.modelValue.category[0].id,s.categoryName=r.modelValue.category[0].categoryName):(s.id="",s.categoryName="Select a category")}),r.modelValue.hasOwnProperty("category")&&r.modelValue.category.length>0?(s.id=r.modelValue.category[0].id,s.categoryName=r.modelValue.category[0].categoryName):(s.id="",s.categoryName="Select a category"),{clickOutsidetarget:a,selected:s,makeSelection:h,toggleSelect:k,showSelect:i,models:o,isLoading:f,onEsc:w}}},T={class:"pf-c-form__group"},B={class:"pf-c-input-group"},F={class:"pf-c-select__toggle-wrapper"},K={key:0,class:"pf-c-select__toggle-text"},P={key:1,class:"pf-c-select__toggle-text"},q={key:0,class:"pf-c-select__menu multi-select-dropdown-overflow",role:"listbox","aria-labelledby":"device_category-label",style:{width:"auto"}},z={key:0},J=["onClick"],M={key:0,class:"pf-c-select__menu-item-icon"},Y={key:1,class:"pf-c-select__menu-item-description"},A={class:"pf-c-select__menu-item-description"},G={key:1,role:"presentation",class:"pf-c-select__list-item pf-m-loading"},H={key:0,class:"pf-c-form__helper-text pf-m-error",id:"device_category_id_error","aria-live":"polite"};function I(r,t,i,a,s,d){return l(),c("div",T,[t[6]||(t[6]=e("div",{class:"pf-c-form__group-label"},[e("label",{class:"pf-c-form__label",for:"device_category"},[e("span",{class:"pf-c-form__label-text"},"Category "),e("span",{class:"pf-c-form__label-required","aria-hidden":"true"},"*")])],-1)),e("div",B,[e("div",{class:u(["pf-c-select",i.errors.device_category_id?"pf-m-invalid":""]),ref:"clickOutsidetarget"},[e("button",{class:"pf-c-select__toggle",type:"button",id:"device_category-toggle","aria-haspopup":"true","aria-expanded":"false","aria-labelledby":"device_category-label device_category-toggle",onClick:t[0]||(t[0]=v((...o)=>a.toggleSelect&&a.toggleSelect(...o),["prevent"])),onKeydown:t[1]||(t[1]=x((...o)=>a.onEsc&&a.onEsc(...o),["esc"]))},[e("div",F,[a.selected.id?(l(),c("span",P,g(a.selected.categoryName),1)):(l(),c("span",K,"Select a category"))]),t[2]||(t[2]=e("span",{class:"pf-c-select__toggle-arrow"},[e("i",{class:"fas fa-caret-down","aria-hidden":"true"})],-1))],32),a.showSelect||!1?(l(),c("ul",q,[t[5]||(t[5]=e("div",{class:"pf-c-select__menu-group-title","aria-hidden":"true",id:"select-checkbox-expanded-selected-group-category"}," Select Category ",-1)),a.isLoading?n("",!0):(l(),c("div",z,[(l(!0),c(C,null,j(a.models.data,o=>(l(),c("li",{role:"presentation",key:o.id},[e("button",{class:u(["pf-c-select__menu-item",Object.keys(o.command).length>0?"":"pf-m-disabled"]),role:"option",onClick:v(f=>a.makeSelection(o.id),["prevent"])},[E(g(o.categoryName)+" ",1),o.id===a.selected.id?(l(),c("span",M,t[3]||(t[3]=[e("i",{class:"fas fa-check","aria-hidden":"true"},null,-1)]))):n("",!0),Object.keys(o.command).length===0?(l(),c("span",Y,"The "+g(o.categoryName)+" category does not have commands",1)):n("",!0),e("span",A,g(o.categoryDescription),1)],10,J)]))),128))])),a.isLoading?(l(),c("li",G,t[4]||(t[4]=[e("span",{class:"pf-c-spinner pf-m-lg",role:"progressbar","aria-label":"Loading item"},[e("span",{class:"pf-c-spinner__clipper"}),e("span",{class:"pf-c-spinner__lead-ball"}),e("span",{class:"pf-c-spinner__tail-ball"})],-1)]))):n("",!0)])):n("",!0)],2)]),i.errors.device_category_id?(l(),c("p",H,g(i.errors.device_category_id[0]),1)):n("",!0)])}const U=S(D,[["render",I]]);export{U as D};
