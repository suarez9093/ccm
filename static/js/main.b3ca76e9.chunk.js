(this.webpackJsonpccm_challenge=this.webpackJsonpccm_challenge||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),l=a.n(r),s=a(1),i=a.n(s),m=a(5),o=a(2),u=c.a.createContext();function d(e){var t=e.children,a=Object(n.useState)(),r=Object(o.a)(a,2),l=r[0],s=r[1],d=Object(n.useState)(1),p=Object(o.a)(d,2),g=p[0],E=p[1];function b(){return(b=Object(m.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://track.clickbooth.com/i?lid=11851&ua=".concat(navigator.userAgent,"&ip=").concat("192.168.3.147","&subid1=&subid2=&subid3=&subid4=&subid5="),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,s(n.data);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){b.apply(this,arguments)}()}),[]),c.a.createElement(u.Provider,{value:{product:l,setProduct:s,quantity:g,setQuantity:E}},t)}a(12);var p=function(){var e=Object(n.useContext)(u),t=e.product,a=e.quantity;return console.log(t),c.a.createElement(c.a.Fragment,null,!t&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"product-loading-container"},c.a.createElement("h1",{className:"product-loading-title"},"Loading..."),c.a.createElement("div",{className:"lds-dual-ring"}),c.a.createElement("p",{className:"product-loading-description"},"Product is loading"))),t&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"product-container"},c.a.createElement("img",{className:"product-img",src:t.image_url,alt:t.name}),c.a.createElement("img",{className:"product-img",src:"https://images-na.ssl-images-amazon.com/images/I/81dNaXXxN%2BL._AC_SL1500_.jpg",alt:t.name}),c.a.createElement("div",{className:"product-text-container"},c.a.createElement("h1",{className:"product-title"},t.name),c.a.createElement("p",{className:"product-brand"},"Brand:",c.a.createElement("a",{className:"product-brand-link",href:"https://primepotence.wixsite.com/primepotence"},"Prime Potence")),c.a.createElement("p",{className:"product-price"},t.shipping_and_handling.currency,t.shipping_and_handling.price),c.a.createElement("ul",{className:"product-benefits"},c.a.createElement("li",{className:"product-benefit"},"Big man"),c.a.createElement("li",{className:"product-benefit"},"Strong man"),c.a.createElement("li",{className:"product-benefit"},"Good man"),c.a.createElement("li",{className:"product-benefit"},"Alpha man"))),c.a.createElement("div",{className:"product-btn-container"},c.a.createElement("input",{className:"product-quantity",type:"text",placeholder:a}),c.a.createElement("a",{className:"btn",href:t.click_url},"Buy now")))))};a(13);var g=function(){return c.a.createElement(p,null)};l.a.render(c.a.createElement(d,null,c.a.createElement(g,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.b3ca76e9.chunk.js.map