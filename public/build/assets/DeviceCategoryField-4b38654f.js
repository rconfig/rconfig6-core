import{_ as S,f as m,m as V,e as y,y as O,o as c,c as s,a as e,q as u,p as h,E as x,t as _,F as C,k as j,j as E,h as n}from"./app-7d21ea7c.js";import{u as L}from"./ViewFunctions-9f8fec9d.js";const D={props:{modelValue:{type:Object},errors:""},setup(l,{emit:r}){const i=m(!1),t=m(null);V(t,p=>g());const o=y({id:"",categoryName:""}),d=y({modelName:"categories",pageOptionsState:{page:1,per_page:1e3},modelObject:{categoryName:""}}),{models:a,isLoading:f,dataTablePageChanged:v}=L(d,d.modelName,d.modelObject);function b(p){Object.assign(o,a.data.find(N=>N.id===p)),r("update:updateValue",p),g()}function k(){i.value===!1&&v(d.pageOptionsState),i.value=!i.value}function w(){g()}function g(){i.value=!1}return O(()=>{l.modelValue.hasOwnProperty("category")&&l.modelValue.category.length>0?(o.id=l.modelValue.category[0].id,o.categoryName=l.modelValue.category[0].categoryName):(o.id="",o.categoryName="Select a category")}),l.modelValue.hasOwnProperty("category")&&l.modelValue.category.length>0?(o.id=l.modelValue.category[0].id,o.categoryName=l.modelValue.category[0].categoryName):(o.id="",o.categoryName="Select a category"),{clickOutsidetarget:t,selected:o,makeSelection:b,toggleSelect:k,showSelect:i,models:a,isLoading:f,onEsc:w}}},F={class:"pf-c-form__group"},B=e("div",{class:"pf-c-form__group-label"},[e("label",{class:"pf-c-form__label",for:"device_category"},[e("span",{class:"pf-c-form__label-text"},"Category "),e("span",{class:"pf-c-form__label-required","aria-hidden":"true"},"*")])],-1),P={class:"pf-c-input-group"},T={class:"pf-c-select__toggle-wrapper"},q={key:0,class:"pf-c-select__toggle-text"},K={key:1,class:"pf-c-select__toggle-text"},z=e("span",{class:"pf-c-select__toggle-arrow"},[e("i",{class:"fas fa-caret-down","aria-hidden":"true"})],-1),M={key:0,class:"pf-c-select__menu multi-select-dropdown-overflow",role:"listbox","aria-labelledby":"device_category-label",style:{width:"auto"}},A=e("div",{class:"pf-c-select__menu-group-title","aria-hidden":"true",id:"select-checkbox-expanded-selected-group-category"}," Select Category ",-1),G={key:0},H=["onClick"],I={key:0,class:"pf-c-select__menu-item-icon"},J=e("i",{class:"fas fa-check","aria-hidden":"true"},null,-1),Q=[J],R={key:1,class:"pf-c-select__menu-item-description"},U={class:"pf-c-select__menu-item-description"},W={key:1,role:"presentation",class:"pf-c-select__list-item pf-m-loading"},X=e("span",{class:"pf-c-spinner pf-m-lg",role:"progressbar","aria-label":"Loading item"},[e("span",{class:"pf-c-spinner__clipper"}),e("span",{class:"pf-c-spinner__lead-ball"}),e("span",{class:"pf-c-spinner__tail-ball"})],-1),Y=[X],Z={key:0,class:"pf-c-form__helper-text pf-m-error",id:"device_category_id_error","aria-live":"polite"};function $(l,r,i,t,o,d){return c(),s("div",F,[B,e("div",P,[e("div",{class:u(["pf-c-select",i.errors.device_category_id?"pf-m-invalid":""]),ref:"clickOutsidetarget"},[e("button",{class:"pf-c-select__toggle",type:"button",id:"device_category-toggle","aria-haspopup":"true","aria-expanded":"false","aria-labelledby":"device_category-label device_category-toggle",onClick:r[0]||(r[0]=h((...a)=>t.toggleSelect&&t.toggleSelect(...a),["prevent"])),onKeydown:r[1]||(r[1]=x((...a)=>t.onEsc&&t.onEsc(...a),["esc"]))},[e("div",T,[t.selected.id?(c(),s("span",K,_(t.selected.categoryName),1)):(c(),s("span",q,"Select a category"))]),z],32),t.showSelect||""?(c(),s("ul",M,[A,t.isLoading?n("",!0):(c(),s("div",G,[(c(!0),s(C,null,j(t.models.data,a=>(c(),s("li",{role:"presentation",key:a.id},[e("button",{class:u(["pf-c-select__menu-item",Object.keys(a.command).length>0?"":"pf-m-disabled"]),role:"option",onClick:h(f=>t.makeSelection(a.id),["prevent"])},[E(_(a.categoryName)+" ",1),a.id===t.selected.id?(c(),s("span",I,Q)):n("",!0),Object.keys(a.command).length===0?(c(),s("span",R,"The "+_(a.categoryName)+" category does not have commands",1)):n("",!0),e("span",U,_(a.categoryDescription),1)],10,H)]))),128))])),t.isLoading?(c(),s("li",W,Y)):n("",!0)])):n("",!0)],2)]),i.errors.device_category_id?(c(),s("p",Z,_(i.errors.device_category_id[0]),1)):n("",!0)])}const ae=S(D,[["render",$]]);export{ae as D};
