(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{JwXA:function(e,t,r){"use strict";r.r(t);var o=r("tRbT"),n=r("R/WZ"),a=r("qhky"),i=r("XL/s"),c=r("fBXE"),s=r("q1tI"),p=r.n(s);function l(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function u(e,t){return e(t={exports:{}},t.exports),t.exports}var m=u((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,p=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,u=r?Symbol.for("react.concurrent_mode"):60111,m=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.memo"):60115,d=r?Symbol.for("react.lazy"):60116;function h(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case l:case u:case a:case c:case i:case f:return e;default:switch(e=e&&e.$$typeof){case p:case m:case s:return e;default:return t}}case d:case y:case n:return t}}}function b(e){return h(e)===u}t.typeOf=h,t.AsyncMode=l,t.ConcurrentMode=u,t.ContextConsumer=p,t.ContextProvider=s,t.Element=o,t.ForwardRef=m,t.Fragment=a,t.Lazy=d,t.Memo=y,t.Portal=n,t.Profiler=c,t.StrictMode=i,t.Suspense=f,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===u||e===c||e===i||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===y||e.$$typeof===s||e.$$typeof===p||e.$$typeof===m)},t.isAsyncMode=function(e){return b(e)||h(e)===l},t.isConcurrentMode=b,t.isContextConsumer=function(e){return h(e)===p},t.isContextProvider=function(e){return h(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return h(e)===m},t.isFragment=function(e){return h(e)===a},t.isLazy=function(e){return h(e)===d},t.isMemo=function(e){return h(e)===y},t.isPortal=function(e){return h(e)===n},t.isProfiler=function(e){return h(e)===c},t.isStrictMode=function(e){return h(e)===i},t.isSuspense=function(e){return h(e)===f}}));l(m),l(u((function(e,t){})));u((function(e){e.exports=m}));var f=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;function h(e,t,r,o,n){}h.resetWarningCache=function(){};Function.call.bind(Object.prototype.hasOwnProperty);function b(){}function g(){}g.resetWarningCache=b;var w=u((function(e){e.exports=function(){function e(e,t,r,o,n,a){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:g,resetWarningCache:b};return r.PropTypes=r,r}()})),E=[],v=function(e){function t(){e.apply(this,arguments),this.state={isLoading:!0}}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.loadTweetForProps=function(e){var t=this,r=function(){window.twttr.ready().then((function(r){var o=r.widgets;t._div&&(t._div.innerHTML="");var n=e.onTweetLoadSuccess,a=e.onTweetLoadError;o.createTweetEmbed(t.props.id,t._div,e.options).then((function(e){t.setState({isLoading:!1}),n&&n(e)})).catch(a)}))},o=window.twttr;o&&o.ready?r():function(e,t){if(0===E.length){E.push(t);var r=document.createElement("script");r.setAttribute("src",e),r.onload=function(){return E.forEach((function(e){return e()}))},document.body.appendChild(r)}else E.push(t)}((window.location.protocol.indexOf("file")>=0?this.props.protocol:"")+"//platform.twitter.com/widgets.js",r)},t.prototype.componentDidMount=function(){this.loadTweetForProps(this.props)},t.prototype.shouldComponentUpdate=function(e,t){return this.props.id!==e.id||this.props.className!==e.className},t.prototype.componentWillUpdate=function(e,t){this.props.id!==e.id&&this.loadTweetForProps(e)},t.prototype.render=function(){var e=this;return p.a.createElement("div",{className:this.props.className,ref:function(t){e._div=t}},this.state.isLoading&&this.props.placeholder)},t}(p.a.Component);v.propTypes={id:w.string,options:w.object,protocol:w.string,onTweetLoadSuccess:w.func,onTweetLoadError:w.func,className:w.string},v.defaultProps={protocol:"https:",options:{},className:null};var S=v,j=r("ofer");var O=Object(n.a)({root:{marginTop:"5%"},pageHeader:{fontSize:30,fontFamily:"Playfair Display",marginBottom:"1%",color:"#78C257"},pageSubheader:{fontSize:20,fontWeight:"lighter",fontFamily:"Roboto"},issueTitle:{fontSize:20,fontFamily:"Playfair Display",marginBottom:"2%",marginTop:"5%"},footer:{marginTop:"2%",height:"20vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:"#000000",marginBottom:"0px",bottom:"0px"}});t.default=function(e){var t=O();return p.a.createElement(p.a.Fragment,null,p.a.createElement(a.a,null,p.a.createElement("title",null,"Jetpack Compose Quick Bites"),p.a.createElement("meta",{name:"description",content:"Learn Jetpack Compose with easy to consume bites of knowledge!"}),p.a.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),p.a.createElement("meta",{property:"twitter:url",content:"https://jetpackcompose.app/quick-bites"}),p.a.createElement("meta",{property:"twitter:title",content:"FJetpack Compose Quick Bites"}),p.a.createElement("meta",{property:"twitter:description",content:"Learn Jetpack Compose with easy to consume bites of knowledge!"}),p.a.createElement("meta",{property:"twitter:image",content:"https://jetpackcompose.app/quick_bites.png"})),p.a.createElement("main",null,p.a.createElement(c.a,null),p.a.createElement("div",{className:t.root},p.a.createElement(o.a,{container:!0,spacing:2},p.a.createElement(o.a,{item:!0,xs:12,md:12},p.a.createElement(o.a,{container:!0,justify:"center",spacing:2},p.a.createElement(o.a,{key:"header",item:!0,xs:12,md:4},p.a.createElement(j.a,{className:t.pageHeader,align:"center"},"Compose Quick Bites"),p.a.createElement(j.a,{className:t.pageSubheader,align:"center"},"Learn more about the core concepts of Jetpack Compose right from your Twitter feed!"))),p.a.createElement(o.a,{container:!0,justify:"center",spacing:2},p.a.createElement(o.a,{key:"issue1",item:!0,xs:12,md:4},p.a.createElement(j.a,{className:t.issueTitle,align:"center"},"Issue #1: What is declarative UI?"),p.a.createElement(S,{id:"1304904120868823040"})),p.a.createElement(o.a,{key:"issue2",item:!0,xs:12,md:4},p.a.createElement(j.a,{className:t.issueTitle,align:"center"},"Issue #2: What is this @Composable thing?"),p.a.createElement(S,{id:"1307528586174160896"}))),p.a.createElement(o.a,{container:!0,justify:"center",spacing:2},p.a.createElement(o.a,{key:"issue3",item:!0,xs:12,md:4},p.a.createElement(j.a,{className:t.issueTitle,align:"center"},"Issue #3: Why should you care about recomposition?"),p.a.createElement(S,{id:"1310042895546609664"}))))),p.a.createElement("div",{className:t.footer},p.a.createElement(i.a,null)))))}}}]);
//# sourceMappingURL=57b8b2130c4fe7c9088943da7bdfca5a5a29e72e-2940e1afdf243a2a6a10.js.map