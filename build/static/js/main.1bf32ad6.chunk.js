(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e){e.exports=[{id:"image1",name:"Iron Man",image:"https://i.pinimg.com/564x/ef/2e/86/ef2e86bbe790ce4bcc387f110c96b092.jpg",clicked:!1},{id:"Captain America",name:"Mr. Krabs",image:"https://i.pinimg.com/564x/c9/e7/02/c9e702ebdb3a00737f308820c711e4f9.jpg",clicked:!1},{id:"image3",name:"SpiderMan",image:"https://i.pinimg.com/564x/71/f2/90/71f290397f19ec44311d227f170a0e98.jpg",clicked:!1},{id:"image4",name:"Thor",image:"https://tvmedia.ign.com/tv/image/object/142/14298774/ThorAniOb.jpg",clicked:!1},{id:"image5",name:"Hulk",image:"https://i.pinimg.com/564x/7d/52/1f/7d521f48894d9bd76ed5fc87d852d557.jpg",clicked:!1},{id:"image6",name:"Dr Strange",image:"https://i.pinimg.com/236x/9f/61/f6/9f61f65f6258a56b2288c4aa3822dbe3.jpg",clicked:!1},{id:"image7",name:"Hawk Eye",image:"https://i.pinimg.com/564x/52/cd/d8/52cdd89f3f5bd692460db635691fd1d8.jpg",clicked:!1},{id:"image8",name:"Black panther",image:"https://i.pinimg.com/564x/09/73/05/097305e87826287fb9f6acb40021a5f0.jpg",clicked:!1},{id:"image9",name:"Ant Man",image:"https://cdn10.bigcommerce.com/s-k9r94cx2is/products/3082/images/6277/4845__96494.1536793496.1280.1280.JPG?c=2",clicked:!1},{id:"image10",name:"Drax",image:"https://i.pinimg.com/564x/36/5e/ca/365ecafe27500f8afa07822d6b675e24.jpg",clicked:!1},{id:"image11",name:"Rocket",image:"https://i.pinimg.com/564x/bf/dd/3a/bfdd3a2c1cebf560ba2db2f2b16111b1.jpg",clicked:!1},{id:"image12",name:"Black Widow",image:"https://i.pinimg.com/564x/0d/d1/3e/0dd13eeceee0ff823cb0c6f8cdc8f22c.jpg",clicked:!1}]},39:function(e,t,a){e.exports=a(86)},45:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(3),o=a.n(c),r=(a(45),a(23)),s=a(13),d=a(14),l=a(16),m=a(15),g=a(17),h=a(38),f={display:"inline-block",margin:10},u={height:200,width:150},b=function(e){return i.a.createElement("div",{className:"card-deck",style:f},i.a.createElement("div",{className:"card"},i.a.createElement("img",{src:e.image,class:"card-img-top",alt:e.name,"data-index":e.id,onClick:e.function,style:u})))},p={fontSize:20,fontWeight:"bold",color:"white",paddingLeft:100,paddingRight:100},k={marginRight:100},w=function(e){return i.a.createElement("div",null,i.a.createElement("nav",{className:"navbar navbar-light  justify-content-between navbar-dark bg-primary",style:p},i.a.createElement("p",null,"Clicky Game"),i.a.createElement("form",{className:"form-inline"},i.a.createElement("p",{style:k},"Score : ",e.score),i.a.createElement("p",null,"Highest Score : ",e.highScore))))},y={fontSize:20,textAlign:"center",height:40,fontWeight:"bold",marginBottom:65,padding:20},j=function(e){return i.a.createElement("div",{style:y},"Help Avengers fight against Thanos. Send them in a secret mission. If you send same avenger twice, Thanos will find out and be victorous.")},v=a(9),S=a(10),E=a.n(S),x=function(e){function t(e,a){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e,a))).handleClose=n.handleClose.bind(Object(v.a)(n)),n.handleShow=n.handleShow.bind(Object(v.a)(n)),n.state={show:!0},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(E.a,{show:this.state.show,onHide:this.handleClose},i.a.createElement(E.a.Header,{closeButton:!0,onHide:this.handleShow},i.a.createElement(E.a.Title,null,"Modal heading")),i.a.createElement(E.a.Body,null,"Woohoo, you're reading this text in a modal!")))}}]),t}(i.a.Component),A={backgroundColor:"rgb(120, 132, 30)"},O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={score:0,hightestScore:0,List:h,shuffledArray:[],showModal:!1},a.showModal=function(){i.a.createElement(x,null)},a.ClickHandler=function(e){return a.setState({List:a.state.List.sort(function(){return Math.random()-.5})}),console.log(e.target.getAttribute("data-index")),a.setState({shuffledArray:[].concat(Object(r.a)(a.state.shuffledArray),[e.target.getAttribute("data-index")])}),console.log(a.state.shuffledArray.includes(e.target.getAttribute("data-index"))),a.state.shuffledArray.includes(e.target.getAttribute("data-index"))?(a.setState({showModal:!0}),a.setState({score:0}),a.setState({shuffledArray:[]}),a.state.hightestScore<a.state.score?a.setState({hightestScore:a.state.score}):console.log("score not updated")):(a.setState({shuffledArray:[].concat(Object(r.a)(a.state.shuffledArray),[e.target.getAttribute("data-index")])}),a.setState({score:a.state.score+1})),console.log(a.state)},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:A},i.a.createElement(w,{score:this.state.score,highScore:this.state.hightestScore}),i.a.createElement(j,null),this.state.List.map(function(t){return i.a.createElement(b,{name:t.name,image:t.image,function:e.ClickHandler,id:t.id,key:t.id})}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.1bf32ad6.chunk.js.map