(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{236:function(t,n,o){"use strict";o.r(n);o(12),o(1),o(19),o(31);var c={data:function(){return{cartForm:"cartForm",showForm:!1,isShowingCart:!1,products:[{id:"2062",name:"Aw-598",price:2900,thumb:"1.jpg",amount:0,amountShow:1,showingIcon:!1},{id:"832",name:"Dw-875",price:1350,thumb:"2.jpg",amount:0,amountShow:1,showingIcon:!1},{id:"16762",name:"WQ-474",price:850,thumb:"3.jpg",amount:0,amountShow:1,showingIcon:!1},{id:"145",name:"VD-475",price:2100,thumb:"4.jpg",amount:0,amountShow:1,showingIcon:!1},{id:"103",name:"AQ-774",price:2600,thumb:"5.jpg",amount:0,amountShow:1,showingIcon:!1}]}},computed:{productsInCart:function(){return this.products.filter((function(p){return p.amount})).map((function(p){return p.sum=p.amount*p.price,p}))},total:function(){return this.productsInCart.reduce((function(t,p){return t+p.sum}),0)}},mounted:function(){window.onload=function(){}},methods:{postData:function(){var form=document.getElementById("shit");form.addEventListener("submit",(function(t){t.preventDefault(),fetch(form.action,{method:"POST",body:new FormData(document.getElementById("shit"))}).then(console.log("hi"))}))},toggleTab:function(t){this.isShowingCart=t},minusOne:function(t){t.amountShow--,t.amountShow=t.amountShow<1?1:t.amountShow},addOne:function(t){t.amountShow++,t.amountShow=t.amountShow>9?9:t.amountShow},addToCart:function(t){t.amount+=t.amountShow,t.showingIcon=!0,setTimeout((function(){t.showingIcon=!1}),800)},remove:function(t){t.amount=0},checkoutCart:function(){this.showForm=!0}}},e=o(61),component=Object(e.a)(c,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("b-row",{staticClass:"wrappercontainer",staticStyle:{position:"relative",padding:"0",margin:"0"}},[o("div",{staticStyle:{width:"100%",display:"flex"}},[t.showForm?o("div",[o("div",{staticStyle:{position:"fixed",display:"flex",width:"90%",height:"90%","z-index":"999","background-color":"white",left:"5%",top:"5%",padding:"10vh 10vh","font-size":"24px"}},[o("button",{staticClass:"button-back",staticStyle:{position:"fixed","z-index":"9999",right:"15vh",top:"12vh"},on:{click:function(n){t.showForm=!1}}},[t._v("\n          ×\n        ")]),t._v(" "),o("form",{staticStyle:{width:"100%"},attrs:{method:"post",id:"shit",action:"https://sheetdb.io/api/v1/0k0f4du1rijf9"}},[o("p",[t._v("訂購人姓名：")]),t._v(" "),o("p",[o("input",{staticClass:"form-input",attrs:{type:"text",name:"data[name]",placeholder:"完整姓名"}})]),t._v(" "),o("p",[t._v("Email：")]),t._v(" "),o("p",[o("input",{staticClass:"form-input",attrs:{name:"data[email]",type:"text"}})]),t._v(" "),o("p",[t._v("手機號碼：")]),t._v(" "),o("p",[o("input",{staticClass:"form-input",attrs:{name:"data[phone]",type:"number"}})]),t._v(" "),o("p",[t._v("取件地址：")]),t._v(" "),o("p",[o("input",{staticClass:"form-input",attrs:{name:"data[address]"}})]),t._v(" "),o("p",[t._v("匯款帳號後五碼：")]),t._v(" "),o("p",[o("input",{staticClass:"form-input",attrs:{name:"data[account]",type:"number"}})]),t._v(" "),o("p",[t._v("備註：")]),t._v(" "),o("p",[o("textarea",{staticClass:"form-input",attrs:{name:"data[ps]",rows:"5",cols:"20"}})]),t._v(" "),o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(n){return t.postData()}}},[t._v("確認資料，送出")]),t._v(" "),(t.showmodal=!0)?o("b-modal",{attrs:{id:"modal-1","hide-backdrop":"","hide-footer":"",title:"感謝您的訂購！","no-close-on-backdrop":"false"}},[o("p",[t._v("\n              請於1小時內匯款至："),o("br"),t._v("國泰銀行013帳號1234567894"),o("br"),t._v("匯款後將會為您安排發貨"),o("br"),t._v('"建議截圖此畫面"\n            ')]),t._v(" "),o("b-button",{staticClass:"mt-3",attrs:{variant:"outline-danger",block:""},on:{click:function(n){t.showForm=!1}}},[t._v("了解")])],1):t._e()],1)])]):t._e(),t._v(" "),o("div",{staticStyle:{"background-color":"white"},attrs:{id:"pentagon"}},[o("div",{staticClass:"inbox container"},[o("div",{staticClass:"title_box",staticStyle:{"z-index":"999"}},[o("h1",{staticStyle:{"margin-bottom":"0"},attrs:{id:"myHeader"}},[o("img",{staticStyle:{width:"800px"},attrs:{src:"logo.png",alt:"Title 11"}})])]),t._v(" "),o("div",{staticClass:"phone",attrs:{id:"app"}},[o("nav",[o("ul",{staticClass:"nav__tab"},[o("li",{class:{active:!t.isShowingCart},on:{click:function(n){return t.toggleTab(!1)}}},[t._v("\n                products\n              ")]),t._v(" "),o("li",{class:{active:t.isShowingCart},on:{click:function(n){return t.toggleTab(!0)}}},[t._v("\n                shopping cart\n              ")])])]),t._v(" "),o("main",{class:{shift:t.isShowingCart}},[o("div",{staticClass:"content"},t._l(t.products,(function(n){return o("div",{key:n.id,staticClass:"product"},[o("div",{staticClass:"info-box"},[o("img",{attrs:{src:n.thumb}}),t._v(" "),o("div",[o("h2",[t._v(t._s(n.name))]),t._v(" "),o("p",[t._v(t._s(n.price))]),t._v(" "),o("div",{staticClass:"action-box"},[o("div",[o("button",{staticClass:"round",on:{click:function(o){return t.minusOne(n)}}},[t._v("\n                          -\n                        ")]),t._v(" "),o("span",[t._v(t._s(n.amountShow))]),t._v(" "),o("button",{staticClass:"round",on:{click:function(o){return t.addOne(n)}}},[t._v("\n                          +\n                        ")])]),t._v(" "),o("button",{on:{click:function(o){return t.addToCart(n)}}},[t._v("add to cart")])])])]),t._v(" "),o("div",{staticClass:"icon-container",class:{showing:n.showingIcon}},[o("svg",{staticClass:"icon",attrs:{viewBox:"0 0 100 100",width:"80",height:"80"}},[o("circle",{staticClass:"circle",attrs:{cx:"50",cy:"50",r:"48"}}),t._v(" "),o("polyline",{staticClass:"check",attrs:{points:"28,53 42,66 74,34"}})]),t._v(" "),o("p",[t._v("成功加入購物車")])])])})),0),t._v(" "),o("div",{staticClass:"content"},[o("table",[o("thead",[o("tr",[o("th",{attrs:{colspan:"5"}},[t._v("Order")])])]),t._v(" "),o("tbody",[o("tr",{staticClass:"table-title"},[o("td",[t._v("品項")]),t._v(" "),o("td",[t._v("數量")]),t._v(" "),o("td",[t._v("單價")]),t._v(" "),o("td",[t._v("小計")]),t._v(" "),o("td")]),t._v(" "),t._l(t.productsInCart,(function(n){return o("tr",{key:n.id},[o("td",[t._v(t._s(n.name))]),t._v(" "),o("td",[t._v(t._s(n.amount))]),t._v(" "),o("td",[t._v(t._s(n.price))]),t._v(" "),o("td",[t._v(t._s(n.sum))]),t._v(" "),o("td",[o("button",{staticClass:"button-del",on:{click:function(o){return t.remove(n)}}},[t._v("\n                        ×\n                      ")])])])}))],2),t._v(" "),o("tfoot",[o("tr",[o("td"),t._v(" "),o("td",{attrs:{colspan:"4"}},[t._v("\n                      Total "),o("span",{staticClass:"total-price"},[t._v("$ "+t._s(t.total))])])])])]),t._v(" "),o("button",{staticClass:"checkout",on:{click:t.checkoutCart}},[t._v("前往付款")])])])])])])])])}),[],!1,null,null,null);n.default=component.exports}}]);