(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{GgLZ:function(e,t,o){"use strict";var n=o("q1tI"),r=o.n(n),i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)};var s=function(){return(s=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var l={Pixel:"Pixel",Percent:"Percent"},a={unit:l.Percent,value:.8};var c=function(e){function t(t){var o=e.call(this,t)||this;return o.lastScrollTop=0,o.actionTriggered=!1,o.startY=0,o.currentY=0,o.dragging=!1,o.maxPullDownDistance=0,o.getScrollableTarget=function(){return o.props.scrollableTarget instanceof HTMLElement?o.props.scrollableTarget:"string"===typeof o.props.scrollableTarget?document.getElementById(o.props.scrollableTarget):(null===o.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},o.onStart=function(e){o.lastScrollTop||(o.dragging=!0,e instanceof MouseEvent?o.startY=e.pageY:e instanceof TouchEvent&&(o.startY=e.touches[0].pageY),o.currentY=o.startY,o._infScroll&&(o._infScroll.style.willChange="transform",o._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},o.onMove=function(e){o.dragging&&(e instanceof MouseEvent?o.currentY=e.pageY:e instanceof TouchEvent&&(o.currentY=e.touches[0].pageY),o.currentY<o.startY||(o.currentY-o.startY>=Number(o.props.pullDownToRefreshThreshold)&&o.setState({pullToRefreshThresholdBreached:!0}),o.currentY-o.startY>1.5*o.maxPullDownDistance||o._infScroll&&(o._infScroll.style.overflow="visible",o._infScroll.style.transform="translate3d(0px, "+(o.currentY-o.startY)+"px, 0px)")))},o.onEnd=function(){o.startY=0,o.currentY=0,o.dragging=!1,o.state.pullToRefreshThresholdBreached&&o.props.refreshFunction&&o.props.refreshFunction(),requestAnimationFrame((function(){o._infScroll&&(o._infScroll.style.overflow="auto",o._infScroll.style.transform="none",o._infScroll.style.willChange="none")}))},o.onScrollListener=function(e){"function"===typeof o.props.onScroll&&setTimeout((function(){return o.props.onScroll&&o.props.onScroll(e)}),0);var t=o.props.height||o._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;o.actionTriggered||(o.isElementAtBottom(t,o.props.scrollThreshold)&&o.props.hasMore&&(o.actionTriggered=!0,o.setState({showLoader:!0}),o.props.next&&o.props.next()),o.lastScrollTop=t.scrollTop)},o.state={showLoader:!1,pullToRefreshThresholdBreached:!1},o.throttledOnScrollListener=function(e,t,o,n){var r,i=!1,s=0;function l(){r&&clearTimeout(r)}function a(){var a=this,c=Date.now()-s,p=arguments;function h(){s=Date.now(),o.apply(a,p)}i||(n&&!r&&h(),l(),void 0===n&&c>e?h():!0!==t&&(r=setTimeout(n?function(){r=void 0}:h,void 0===n?e-c:e)))}return"boolean"!==typeof t&&(n=o,o=t,t=void 0),a.cancel=function(){l(),i=!0},a}(150,o.onScrollListener).bind(o),o.onStart=o.onStart.bind(o),o.onMove=o.onMove.bind(o),o.onEnd=o.onEnd.bind(o),o}return function(e,t){function o(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.UNSAFE_componentWillReceiveProps=function(e){this.props.key===e.key&&this.props.dataLength===e.dataLength||(this.actionTriggered=!1,this.setState({showLoader:!1,pullToRefreshThresholdBreached:!1}))},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var o=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,n=function(e){return"number"===typeof e?{unit:l.Percent,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:l.Pixel,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:l.Percent,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),a):(console.warn("scrollThreshold should be string or number"),a)}(t);return n.unit===l.Pixel?e.scrollTop+o>=e.scrollHeight-n.value:e.scrollTop+o>=n.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=s({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),o=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),n=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return r.a.createElement("div",{style:n,className:"infinite-scroll-component__outerdiv"},r.a.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&r.a.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},r.a.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!o&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(n.Component);t.a=c},RNiq:function(e,t,o){"use strict";o.r(t);var n=o("q1tI"),r=o.n(n),i=o("5Yp1");function s(e){return function(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var a=o("ttZb"),c=o("UOKh"),p=o("MX0m"),h=o.n(p),u=o("GgLZ"),d=o("HQGO"),f=o("YFqc"),m=o.n(f),g=o("sa+W"),v=r.a.createElement,y=function(e){var t=e.residents;return v("div",{className:"jsx-2468166499 LocationBlockResidents-root"},t.map((function(e){return e.id?v("div",{key:e.id,className:"jsx-2468166499 LocationBlockResidents-resident"},v("div",{className:"jsx-2468166499 LocationBlockResident-root"},v("img",{src:e.image,alt:"resident",className:"jsx-2468166499"}))):null})),v(h.a,{id:"2468166499"},[".LocationBlockResidents-root.jsx-2468166499{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".LocationBlockResidents-resident.jsx-2468166499{margin-right:20px;}",".LocationBlockResident-root.jsx-2468166499{width:50px;height:50px;}",".LocationBlockResidents-resident.jsx-2468166499:last-child{margin-right:0;}"]))},w=r.a.createElement,b=function(e){var t=e.location;return w("div",{key:t.id,className:"jsx-932056395 LocationBlock-root"},w(m.a,{href:"/locations/[id]",as:"/locations/".concat(t.id)},w("a",{className:"jsx-932056395 LocationBlock-link"},w("div",{className:"jsx-932056395 LocationBlock-img"},w(g.a,{locationType:t.type,size:"small"})),w("div",{className:"jsx-932056395 LocationBlock-body"},w("div",{className:"jsx-932056395 LocationBlock-name"},t.name),w("div",{className:"jsx-932056395 LocationBlock-type"},t.type),w("div",{className:"jsx-932056395 LocationBlock-residents"},w(y,{residents:t.residents.slice(0,3)}))))),w(h.a,{id:"932056395"},[".LocationBlock-root.jsx-932056395{width:100%;height:145px;margin-bottom:8px;background:#312a2a;box-shadow:2px 2px 10px rgba(29,99,234,0.48);}",".LocationBlock-link.jsx-932056395{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;}",".LocationBlock-img.jsx-932056395{width:145px;height:145px;}",".LocationBlock-body.jsx-932056395{-webkit-flex:1;-ms-flex:1;flex:1;padding:16px 16px 11px 16px;overflow:hidden;}",".LocationBlock-name.jsx-932056395{font-weight:bold;font-size:24px;line-height:28px;margin-bottom:7px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}",".LocationBlock-type.jsx-932056395{color:#dcdcdc;margin-bottom:11px;}"]))},x=r.a.createElement,T=function(e){var t=e.locations,o=e.onLoadMore,n=e.hasMore;return x("div",{className:"jsx-677721766 Locations-root"},x(u.a,{dataLength:t.results.length,next:function(){o()},hasMore:n,loader:x(d.a,null)},t.results.map((function(e){return x(b,{key:e.id,location:e})}))),x(h.a,{id:"677721766"},[".jsx-677721766{display:block;min-width:398px;margin:0 auto;padding:0 10px;}"]))},L=r.a.createElement;function E(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function S(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?E(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):E(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var j=function(){var e=Object(a.b)(c.a,{notifyOnNetworkStatusChange:!0}),t=e.data,o=e.loading,i=e.error,l=e.fetchMore,p=Object(n.useState)(!0),h=p[0],u=p[1];if(!t&&o)return L(d.a,null);if(i)return L("p",null,"Error: ",JSON.stringify(i));return L(r.a.Fragment,null,t&&L(T,{locations:t.locations,onLoadMore:function(){l({variables:{cursor:t.locations.info.next},updateQuery:function(e,t){var o=t.fetchMoreResult;return u(!!e.locations.info.next),e.locations.info.next?{locations:S({},e.locations,{results:[].concat(s(e.locations.results),s(o.locations.results)),info:o.locations.info})}:e}})},hasMore:h}))},k=r.a.createElement;t.default=function(){return k(i.a,null,k(j,null))}},"sa+W":function(e,t,o){"use strict";var n=o("MX0m"),r=o.n(n),i=o("q1tI"),s=["Unknown","TV","Space station","Resort","Planet","Microverse","Fantasy town","Dream","Cluster"],l=o.n(i).a.createElement;t.a=function(e){var t,o=e.locationType,n=e.size,i=s.includes(t=o)?t:"Unknown",a=n?"_small":"";return l("div",{className:"jsx-985989053 LocationTypeImage-root"},l("img",{src:"/Type_".concat(i).concat(a,".png"),alt:i,className:"jsx-985989053 LocationTypeImage-img"}),l(r.a,{id:"985989053"},[".LocationTypeImage-root.jsx-985989053{width:100%;height:100%;}",".LocationTypeImage-img.jsx-985989053{width:100%;}"]))}},vlRD:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o("RNiq")}])}},[["vlRD",1,2,0,3,4]]]);