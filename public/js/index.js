webpackJsonp([1],{0:function(t,e,n){n("vGYV"),t.exports=n("a1sC")},a1sC:function(t,e){},vGYV:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("I3G/"),a=n.n(o),s=n("mtWM"),c=n.n(s);new a.a({delimiters:["${","}"],el:"#app",data:{post:{}},created:function(){var t=this;c.a.get("https://jsonplaceholder.typicode.com/posts/1").then(function(e){t.post=e.data})}})}},[0]);