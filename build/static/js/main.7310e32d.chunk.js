(this.webpackJsonpzomato=this.webpackJsonpzomato||[]).push([[0],{44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},65:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(31),r=s.n(n),i=s(8),l=s(2),o=s(0),d=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-inverse",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("div",{className:"navbar-header",children:Object(o.jsx)(i.b,{className:"navbar-brand",to:"/",children:"Edumato"})}),Object(o.jsxs)("ul",{class:"nav navbar-nav",children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/vieworder",children:"Booking"})})]})]})})})},j=s(4),h=s(5),m=s(7),b=s(6),u=(s(44),function(e){Object(m.a)(s,e);var t=Object(b.a)(s);function s(){var e;return Object(j.a)(this,s),(e=t.call(this)).renderCity=function(e){if(e)return e.map((function(e){return Object(o.jsxs)("option",{value:e.city,children:[e.city_name," - ",e.name]})}))},e.handleCity=function(t){console.log(t.target.value),fetch("".concat("https://zomato-like-rest.herokuapp.com/restaurant?city=").concat(t.target.value),{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({restaurants:t})}))},e.restValue=function(t){e.props.rid(t.target.value)},e.renderRestaurant=function(e){if(e)return e.map((function(e){return Object(o.jsxs)("option",{value:e._id,children:[e.name," - ",e.locality]})}))},e.state={location:"",restaurants:""},e}return Object(h.a)(s,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"imageContainer",children:[Object(o.jsx)("div",{id:"logo",children:Object(o.jsx)("b",{children:"e!"})}),Object(o.jsx)("div",{className:"hey"}),Object(o.jsxs)("div",{class:"locationSelector",children:[Object(o.jsxs)("select",{class:"locationDropDown",onChange:this.handleCity,children:[Object(o.jsx)("option",{children:" ------Select City------- "}),this.renderCity(this.state.location)]}),"\xa0 \xa0 \xa0 \xa0",Object(o.jsxs)("select",{className:"locationDropDown",onChange:this.restValue,children:[Object(o.jsx)("option",{children:"-----Get The Restaurants-----"}),this.renderRestaurant(this.state.restaurants)]})]})]})})})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://zomato-like-rest.herokuapp.com/location",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({location:t})}))}}]),s}(a.Component)),O=(s(45),function(e){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{className:"heading",children:" Quick Search "}),Object(o.jsxs)("p",{className:"des",children:[" ",Object(o.jsx)("h4",{children:"Discover restaurants by type of meal..!"}),"  "]}),Object(o.jsx)("div",{className:"row",children:function(e){var t=e.mealData;if(t)return t.map((function(e){return Object(o.jsx)(i.b,{to:"/list/".concat(e.mealtype),children:Object(o.jsxs)("div",{className:"col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3 ",children:[Object(o.jsx)("div",{className:"img mr-2",children:Object(o.jsx)("img",{className:"bf img-responsive",src:"./img/".concat(e.name,".jpg"),alt:""})}),Object(o.jsxs)("div",{className:"imgcon p-3",children:[Object(o.jsxs)("h5",{className:"heading",children:[" ",e.name," "]}),Object(o.jsx)("p",{className:"des",children:" Try our satisfying meal options "})]})]})})}))}(e)})]})}),x=function(e){Object(m.a)(s,e);var t=Object(b.a)(s);function s(){var e;return Object(j.a)(this,s),(e=t.call(this)).state={mealtype:""},e}return Object(h.a)(s,[{key:"render",value:function(){return Object(o.jsx)(O,{mealData:this.state.mealtype})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://zomato-like-rest.herokuapp.com/mealtype",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({mealtype:t})}))}}]),s}(a.Component),p=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)(u,{rid:function(t){!function(t){e.history.push("/rest/".concat(t))}(t)}}),Object(o.jsx)(x,{})]})},v=(s(46),function(e){return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"main-heading",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-md-1",children:function(e){var t=e.restListData;return t?t.length>0?t.map((function(e){return Object(o.jsxs)("div",{className:"Item",id:e._id,children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-md-3",children:Object(o.jsx)("img",{className:"Image",alt:"Picture_of_restaurant",src:e.thumb})}),Object(o.jsx)("div",{className:"col-md-9",children:Object(o.jsxs)("div",{className:"rest_name",children:[Object(o.jsx)(i.b,{to:"/rest/".concat(e._id),children:e.name}),Object(o.jsxs)("div",{className:"city_name",children:[" ",e.city_name," "]}),Object(o.jsxs)("div",{className:"address-text",children:[e.locality," "]}),Object(o.jsxs)("div",{className:"address-text",children:[e.address," "]})]})})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-md-3",children:[Object(o.jsx)("div",{className:"CUISINES-COST-FOR-TWO",children:" Cuisine Type:"}),Object(o.jsx)("div",{className:"CUISINES-COST-FOR-TWO",children:" Cost For Two:"})]}),Object(o.jsxs)("div",{className:"col-md-9",children:[Object(o.jsxs)("div",{className:"Bakery-700",children:[e.Cuisine[0].name,", ",e.Cuisine[1].name]}),Object(o.jsxs)("div",{className:"Bakery-700",children:[" ",e.cost," "]})]})]})]})})):Object(o.jsx)("div",{children:Object(o.jsxs)("center",{children:[" ",Object(o.jsx)("h4",{children:" No Data Present "})," "]})}):Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:"/img/Spinner-1s-200px.gif",alt:"LoaderGif"})})}(e)})})})})})}),f=s(12),N=s.n(f),g="https://zomato-like-rest.herokuapp.com/restaurantlist",y=function(e){Object(m.a)(s,e);var t=Object(b.a)(s);function s(){var e;return Object(j.a)(this,s),(e=t.call(this)).cuisineHandle=function(t){var s,a=t.target.value,c=sessionStorage.getItem("address");s=""===a?"".concat(g,"/").concat(c):"".concat(g,"/").concat(c,"?cuisine=").concat(a),N.a.get(s).then((function(t){e.props.result(t.data)}))},e.state={cuisine:""},e}return Object(h.a)(s,[{key:"render",value:function(){return Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsxs)("center",{children:[" ",Object(o.jsx)("h4",{children:"Cuisine Filter"})," "]}),Object(o.jsxs)("div",{onChange:this.cuisineHandle,children:[Object(o.jsxs)("label",{className:"radio",children:[Object(o.jsx)("input",{type:"radio",value:"",name:"cuisine"})," All"]}),Object(o.jsxs)("label",{className:"radio",children:[Object(o.jsx)("input",{type:"radio",value:"1",name:"cuisine"})," North Indian"]}),Object(o.jsxs)("label",{className:"radio",children:[Object(o.jsx)("input",{type:"radio",value:"2",name:"cuisine"})," South Indian"]}),Object(o.jsxs)("label",{className:"radio",children:[Object(o.jsx)("input",{type:"radio",value:"3",name:"cuisine"})," Chinese"]}),Object(o.jsxs)("label",{className:"radio",children:[Object(o.jsx)("input",{type:"radio",value:"4",name:"cuisine"})," Fast Food"]}),Object(o.jsxs)("label",{className:"radio",children:[Object(o.jsx)("input",{type:"radio",value:"5",name:"cuisine"})," Street Food"]})]})]})}}]),s}(a.Component),k="https://zomato-like-rest.herokuapp.com/restaurantlist",C=(a.Component,function(e){Object(m.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(j.a)(this,s),(a=t.call(this,e)).state={restaurantsLists:""},a}return Object(h.a)(s,[{key:"setFilterPervalue",value:function(e){this.setState({restaurantsLists:e})}},{key:"render",value:function(){var e=this;return console.log(this.props.match.params.id),Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-md-2",children:[Object(o.jsx)(y,{result:function(t){e.setFilterPervalue(t)}}),Object(o.jsx)("br",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("br",{})]}),Object(o.jsx)("div",{className:"col-md-10",children:Object(o.jsx)(v,{restListData:this.state.restaurantsLists})})]})})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;sessionStorage.setItem("address",t),N.a.get("".concat("https://zomato-like-rest.herokuapp.com/restaurant?mealtype=").concat(t)).then((function(t){e.setState({restaurantsLists:t.data})}))}}]),s}(a.Component)),S=(s(65),s(16)),P=(s(66),function(e){Object(m.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(j.a)(this,s),(a=t.call(this,e)).onBack=function(){var e=sessionStorage.getItem("address");a.props.history.push("/list/".concat(e))},a.state={rest:{Cuisine:[{name:""},{name:""}]}},a}return Object(h.a)(s,[{key:"render",value:function(){console.log(this.props.match.params.id);var e=this.state.rest;return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"panel panel-primary",children:[Object(o.jsx)("div",{className:"panel-heading",children:Object(o.jsx)("h2",{children:e.name})}),Object(o.jsx)("div",{className:"panel-body",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-md-12",children:Object(o.jsx)("img",{className:"img-responsive",src:e.thumb,style:{height:430},alt:"restImage"})}),Object(o.jsxs)("div",{className:"col-md-12",children:[Object(o.jsxs)("h3",{children:[" ",e.name," "]}),Object(o.jsxs)("h4",{children:[" ",e.locality," "]}),Object(o.jsxs)("h4",{children:[" ",e.address," "]})]})]})}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{children:[Object(o.jsxs)(S.d,{children:[Object(o.jsxs)(S.b,{children:[Object(o.jsx)(S.a,{children:"Overview"}),Object(o.jsx)(S.a,{children:"Contact"})]}),Object(o.jsx)(S.c,{children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{children:"About this Place"}),Object(o.jsxs)("div",{children:[" ",e.Cuisine[0].name,", ",e.Cuisine[1].name," "]}),Object(o.jsxs)("h5",{children:["Locality : ",e.locality," "]}),Object(o.jsxs)("h5",{children:["Cost for 2 : ",e.cost," "]}),Object(o.jsxs)("h5",{children:["Address: ",e.address," "]})]})}),Object(o.jsx)(S.c,{children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h5",{children:"Contact Number : 7349337775 "}),Object(o.jsxs)("h5",{children:["Locality : ",e.locality," "]}),Object(o.jsx)("h5",{children:"E-mail: mohammed007aliyan@gmail.com "})]})})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"btn btn-danger btn-lg",onClick:this.onBack,children:" Back "}),"\xa0 \xa0",Object(o.jsx)(i.b,{className:"btn btn-success btn-lg",to:"/orders/".concat(this.props.match.params.id),children:" Placeorder "})]})]})]})})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;N.a.get("".concat("https://zomato-like-rest.herokuapp.com/restaurantDetails/").concat(t)).then((function(t){e.setState({rest:t.data[0]})}))}}]),s}(a.Component)),D=function(e){Object(m.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(j.a)(this,s),(a=t.call(this,e)).handleName=function(e){a.setState({name:e.target.value})},a.handlePhone=function(e){a.setState({phone:e.target.value})},a.handleAddress=function(e){a.setState({address:e.target.value})},a.handlePersons=function(e){a.setState({noOfPerson:e.target.value})},a.handleEmail=function(e){a.setState({email:e.target.value})},a.handleSubmit=function(){var e={_id:a.state.order_id,rest_id:a.state.restName,name:a.state.name,phone:a.state.phone,address:a.state.address,email:a.state.email,persons:a.state.noOfPerson};fetch("https://zomato-like-rest.herokuapp.com/placeorder",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(a.props.history.push("/vieworder"))},a.state={order_id:Math.floor(1e4*Math.random()),restName:"",name:"",phone:"",address:"",email:"",noOfPerson:""},a}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;N.a.get("".concat("https://zomato-like-rest.herokuapp.com/restaurantdetails/").concat(t)).then((function(t){e.setState({restName:t.data[0].name})}))}},{key:"render",value:function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"panel panel-primary",children:[Object(o.jsx)("div",{className:"panel-heading",children:"Restaurant Booking"}),Object(o.jsx)("div",{className:"panel-body",children:Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{className:"control-lable",children:" Order Id "}),Object(o.jsx)("input",{className:"form-control",type:"text",name:"orderId",value:this.state.order_id,readOnly:!0})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{className:"control-label",children:" Restaurant Name "}),Object(o.jsx)("input",{className:"form-control",type:"text",name:"restName",readOnly:!0,value:this.state.restName})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{className:"control-label",children:" Name "}),Object(o.jsx)("input",{type:"text",name:"user_name",required:!0,className:"form-control",placeholder:"Name",onChange:this.handleName,value:this.state.name})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{className:"control-label",children:" Phone "}),Object(o.jsx)("input",{type:"number",name:"phone",className:"form-control",placeholder:"phone",onChange:this.handlePhone,value:this.state.phone})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{className:"control-label",children:" Address "}),Object(o.jsx)("input",{type:"text",name:"address",placeholder:"Address",className:"form-control",onChange:this.handleAddress,value:this.state.address})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{className:"control-label",children:" E-mail "}),Object(o.jsx)("input",{type:"email",name:"address",className:"form-control",placeholder:"E-mail",onChange:this.handleEmail,value:this.state.email})]}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsxs)("select",{className:"form-group",name:"noOfPersons",onChange:this.handlePersons,value:this.state.noOfPerson,children:[Object(o.jsx)("option",{children:"Persons"}),Object(o.jsx)("option",{children:"1"}),Object(o.jsx)("option",{children:"2"}),Object(o.jsx)("option",{children:"4"}),Object(o.jsx)("option",{children:"5"}),Object(o.jsx)("option",{children:"6"}),Object(o.jsx)("option",{children:"7"})]})}),Object(o.jsx)(i.b,{to:"/rest/".concat(this.props.match.params.id),className:"btn btn-danger ",children:"Cancel"}),"\xa0 \xa0",Object(o.jsx)("div",{className:"btn btn-success",onClick:this.handleSubmit,children:"Book"})]})})]})})}}]),s}(a.Component),w=s(21),_=s.n(w),I=s(33),E=function(e){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("center",{children:[" ",Object(o.jsx)("h3",{children:" Booking List "})," "]}),Object(o.jsxs)("div",{className:"table ",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:" Order ID "}),Object(o.jsx)("th",{children:" Rest Name "}),Object(o.jsx)("th",{children:" Name "}),Object(o.jsx)("th",{children:" Phone "}),Object(o.jsx)("th",{children:" Person "}),Object(o.jsx)("th",{children:" Address "}),Object(o.jsx)("th",{children:" E-mail "}),Object(o.jsx)("th",{children:" Status "})]})}),Object(o.jsx)("tbody",{children:function(e){var t=e.orderData;if(t)return t.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsxs)("td",{children:[" ",e._id," "]}),Object(o.jsxs)("td",{children:[" ",e.rest_id," "]}),Object(o.jsxs)("td",{children:[" ",e.name," "]}),Object(o.jsxs)("td",{children:[" ",e.phone," "]}),Object(o.jsxs)("td",{children:[" ",e.persons," "]}),Object(o.jsxs)("td",{children:[" ",e.address," "]}),Object(o.jsxs)("td",{children:[" ",e.email," "]}),Object(o.jsx)("td",{children:" Placed "})]})}))}(e)})]})]})},T=function(e){Object(m.a)(s,e);var t=Object(b.a)(s);function s(){var e;return Object(j.a)(this,s),(e=t.call(this)).state={order:""},e}return Object(h.a)(s,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsx)(E,{orderData:this.state.order})})}},{key:"componentDidMount",value:function(){var e=Object(I.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("".concat("https://zomato-like-rest.herokuapp.com/orders"));case 2:t=e.sent,this.setState({order:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),s}(a.Component),z=function(){return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(d,{}),Object(o.jsx)(l.a,{exact:!0,path:"/",component:p}),Object(o.jsx)(l.a,{exact:!0,path:"/list/:id",component:C}),Object(o.jsx)(l.a,{exact:!0,path:"/rest/:id",component:P}),Object(o.jsx)(l.a,{exact:!0,path:"/orders/:id",component:D}),Object(o.jsx)(l.a,{exact:!0,path:"/vieworder/",component:T})]})};r.a.render(Object(o.jsx)(z,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.7310e32d.chunk.js.map