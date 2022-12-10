import{_ as g,h as f,l as h,s as y,o as c,c as p,b as e,i as a,v as l,y as x,F as k,x as U,j as m,t as V,u,p as S,a as N,d as i}from"./index.bab77bf1.js";import{u as w}from"./useProduct.bac3adc7.js";import{u as A}from"./useCategory.95ac638b.js";const n=d=>(S("data-v-6903782d"),d=d(),N(),d),D={class:"section__adduser"},M=n(()=>e("div",{class:"categorys"},[e("span",{class:"categorys__title"},"Nuevo producto")],-1)),P={class:"form__inputs"},C={class:"input__item"},I=n(()=>e("label",{for:"name"},[i("Nombre "),e("span",null,"*")],-1)),L={class:"input__item"},B=n(()=>e("label",{for:"precio"},[i("Precio "),e("span",null,"*")],-1)),F={class:"input__item"},T=n(()=>e("label",{for:"descripcion"},[i("Descripci\xF3n del producto "),e("span",null,"*")],-1)),j={class:"input__item"},E=n(()=>e("label",{for:"laboratorio"},[i("Laboratorio "),e("span",null,"*")],-1)),R={class:"input__item"},$=n(()=>e("label",{for:"stock"},[i("Stock "),e("span",null,"*")],-1)),q={class:"input__item"},z=n(()=>e("label",{for:"vencimiento"},[i("Fecha de vencimiento "),e("span",null,"*")],-1)),G={class:"input__item"},H=n(()=>e("label",{for:"imagen"},[i("Imagen "),e("span",null,"*")],-1)),J={class:"input__item"},K=n(()=>e("label",{for:"category-select"},[i("Categor\xEDa "),e("span",null,"*")],-1)),O=n(()=>e("option",{value:"",disabled:"",selected:""},"Seleccione una categor\xEDa",-1)),Q=["value"],W={class:"form__actions"},X=n(()=>e("button",{type:"submit",class:"action__save"}," Agregar producto ",-1)),Y={__name:"NewProduct",setup(d){const{addProduct:v,cancelActions:_}=w(),{getCategories:b}=A(),s=f({nombre:"",precio:0,descripcion:"",laboratorio:"",stock:0,vencimiento:"",imagen:"",categoria:""}),r=h([]);return y(async()=>{r.value=await b(),console.log(r.value)}),(Z,t)=>(c(),p("section",D,[M,e("form",{class:"form",onSubmit:t[9]||(t[9]=m(o=>u(v)(s),["prevent"]))},[e("div",P,[e("div",C,[I,a(e("input",{type:"text",name:"nombre",placeholder:"Nombre del producto","onUpdate:modelValue":t[0]||(t[0]=o=>s.nombre=o)},null,512),[[l,s.nombre]])]),e("div",L,[B,a(e("input",{type:"number",placeholder:"S/.","onUpdate:modelValue":t[1]||(t[1]=o=>s.precio=o)},null,512),[[l,s.precio]])]),e("div",F,[T,a(e("input",{type:"text",name:"descripcion",placeholder:"Descripci\xF3n...","onUpdate:modelValue":t[2]||(t[2]=o=>s.descripcion=o)},null,512),[[l,s.descripcion]])]),e("div",j,[E,a(e("input",{type:"text",name:"laboratorio",placeholder:"Laboratorio de origen","onUpdate:modelValue":t[3]||(t[3]=o=>s.laboratorio=o)},null,512),[[l,s.laboratorio]])]),e("div",R,[$,a(e("input",{type:"number",name:"stock",placeholder:"Unidades en stock","onUpdate:modelValue":t[4]||(t[4]=o=>s.stock=o)},null,512),[[l,s.stock]])]),e("div",q,[z,a(e("input",{type:"text",name:"vencimiento",placeholder:"DD/MM/AAAA","onUpdate:modelValue":t[5]||(t[5]=o=>s.vencimiento=o)},null,512),[[l,s.vencimiento]])]),e("div",G,[H,a(e("input",{type:"text",name:"imagen",placeholder:"URL de imagen del producto","onUpdate:modelValue":t[6]||(t[6]=o=>s.imagen=o)},null,512),[[l,s.imagen]])]),e("div",J,[K,a(e("select",{name:"categories",id:"category-select","onUpdate:modelValue":t[7]||(t[7]=o=>s.categoria=o)},[O,(c(!0),p(k,null,U(r.value,o=>(c(),p("option",{key:o._id,value:o._id},V(o.name),9,Q))),128))],512),[[x,s.categoria]])])]),e("div",W,[e("button",{class:"action__cancel",onClick:t[8]||(t[8]=m((...o)=>u(_)&&u(_)(...o),["prevent"]))}," Cancelar "),X])],32)]))}},se=g(Y,[["__scopeId","data-v-6903782d"]]);export{se as default};
