(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{GgLZ:function(e,t,o){"use strict";var n=o("q1tI"),i=o.n(n),s=function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)};var r=function(){return(r=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};var a={Pixel:"Pixel",Percent:"Percent"},l={unit:a.Percent,value:.8};var c=function(e){function t(t){var o=e.call(this,t)||this;return o.lastScrollTop=0,o.actionTriggered=!1,o.startY=0,o.currentY=0,o.dragging=!1,o.maxPullDownDistance=0,o.getScrollableTarget=function(){return o.props.scrollableTarget instanceof HTMLElement?o.props.scrollableTarget:"string"===typeof o.props.scrollableTarget?document.getElementById(o.props.scrollableTarget):(null===o.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},o.onStart=function(e){o.lastScrollTop||(o.dragging=!0,e instanceof MouseEvent?o.startY=e.pageY:e instanceof TouchEvent&&(o.startY=e.touches[0].pageY),o.currentY=o.startY,o._infScroll&&(o._infScroll.style.willChange="transform",o._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},o.onMove=function(e){o.dragging&&(e instanceof MouseEvent?o.currentY=e.pageY:e instanceof TouchEvent&&(o.currentY=e.touches[0].pageY),o.currentY<o.startY||(o.currentY-o.startY>=Number(o.props.pullDownToRefreshThreshold)&&o.setState({pullToRefreshThresholdBreached:!0}),o.currentY-o.startY>1.5*o.maxPullDownDistance||o._infScroll&&(o._infScroll.style.overflow="visible",o._infScroll.style.transform="translate3d(0px, "+(o.currentY-o.startY)+"px, 0px)")))},o.onEnd=function(){o.startY=0,o.currentY=0,o.dragging=!1,o.state.pullToRefreshThresholdBreached&&o.props.refreshFunction&&o.props.refreshFunction(),requestAnimationFrame((function(){o._infScroll&&(o._infScroll.style.overflow="auto",o._infScroll.style.transform="none",o._infScroll.style.willChange="none")}))},o.onScrollListener=function(e){"function"===typeof o.props.onScroll&&setTimeout((function(){return o.props.onScroll&&o.props.onScroll(e)}),0);var t=o.props.height||o._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;o.actionTriggered||(o.isElementAtBottom(t,o.props.scrollThreshold)&&o.props.hasMore&&(o.actionTriggered=!0,o.setState({showLoader:!0}),o.props.next&&o.props.next()),o.lastScrollTop=t.scrollTop)},o.state={showLoader:!1,pullToRefreshThresholdBreached:!1},o.throttledOnScrollListener=function(e,t,o,n){var i,s=!1,r=0;function a(){i&&clearTimeout(i)}function l(){var l=this,c=Date.now()-r,p=arguments;function d(){r=Date.now(),o.apply(l,p)}s||(n&&!i&&d(),a(),void 0===n&&c>e?d():!0!==t&&(i=setTimeout(n?function(){i=void 0}:d,void 0===n?e-c:e)))}return"boolean"!==typeof t&&(n=o,o=t,t=void 0),l.cancel=function(){a(),s=!0},l}(150,o.onScrollListener).bind(o),o.onStart=o.onStart.bind(o),o.onMove=o.onMove.bind(o),o.onEnd=o.onEnd.bind(o),o}return function(e,t){function o(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.UNSAFE_componentWillReceiveProps=function(e){this.props.key===e.key&&this.props.dataLength===e.dataLength||(this.actionTriggered=!1,this.setState({showLoader:!1,pullToRefreshThresholdBreached:!1}))},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var o=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,n=function(e){return"number"===typeof e?{unit:a.Percent,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:a.Pixel,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:a.Percent,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),l):(console.warn("scrollThreshold should be string or number"),l)}(t);return n.unit===a.Pixel?e.scrollTop+o>=e.scrollHeight-n.value:e.scrollTop+o>=n.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=r({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),o=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),n=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return i.a.createElement("div",{style:n,className:"infinite-scroll-component__outerdiv"},i.a.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&i.a.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},i.a.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!o&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(n.Component);t.a=c},Y4s9:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/locations/[id]",function(){return o("j+24")}])},daXb:function(e,t,o){"use strict";var n=o("MX0m"),i=o.n(n),s=o("q1tI"),r=o.n(s),a=o("nOHt"),l=o.n(a),c=r.a.createElement;t.a=function(){return c("div",{onClick:function(){return l.a.back()},className:"jsx-763398632 ArrowBackBtn-root"},c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 58 53",fill:"none",className:"jsx-763398632"},c("path",{d:"M32.7686 49.3397L29.9441 52.0279C28.7481 53.1662 26.8142 53.1662 25.6309 52.0279L0.896987 28.4994C-0.298995 27.3611 -0.298995 25.5205 0.896987 24.3943L25.6309 0.853711C26.8269 -0.28457 28.7608 -0.28457 29.9441 0.853711L32.7686 3.54199C33.9773 4.69238 33.9519 6.56934 32.7177 7.69551L17.3863 21.5971H53.9528C55.645 21.5971 57.0064 22.8928 57.0064 24.5033V28.3783C57.0064 29.9889 55.645 31.2846 53.9528 31.2846H17.3863L32.7177 45.1861C33.9646 46.3123 33.9901 48.1893 32.7686 49.3397Z",fill:"white",className:"jsx-763398632"})),c(i.a,{id:"763398632"},["svg.jsx-763398632{width:100%;height:100%;}",".ArrowBackBtn-root.jsx-763398632{width:58px;height:53px;cursor:pointer;}"]))}},"j+24":function(e,t,o){"use strict";o.r(t);var n=o("MX0m"),i=o.n(n),s=o("q1tI"),r=o.n(s),a=o("nOHt"),l=o("5Yp1"),c=o("ttZb"),p=o("UOKh"),d=o("sa+W"),h=o("daXb"),u=r.a.createElement,m=function(e){var t=e.name,o=e.type;return u("div",{className:"jsx-2474535766 LocationHeader-root"},u("div",{className:"jsx-2474535766 LocationHeader-arrowBack"},u(h.a,null)),u("div",{className:"jsx-2474535766 LocationHeader-img"},u("div",{className:"jsx-2474535766 LocationHeaderImg-root"},u(d.a,{locationType:o}))),u("div",{className:"jsx-2474535766 Location-header"},u("div",{className:"jsx-2474535766 LocationHeader-name"},t),u("div",{className:"jsx-2474535766 LocationHeader-type"},o)),u(i.a,{id:"2474535766"},[".LocationHeader-root.jsx-2474535766{max-width:414px;margin:0 auto 50px;}",".LocationHeader-arrowBack.jsx-2474535766{position:absolute;top:10px;left:14px;}",".Location-header.jsx-2474535766{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:13px;}",".LocationHeader-img.jsx-2474535766{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".LocationHeaderImg-root.jsx-2474535766{width:414px;height:414px;}",".LocationHeader-name.jsx-2474535766{font-style:normal;font-weight:bold;font-size:24px;line-height:28px;color:#ffffff;margin-bottom:7px;}",".LocationHeader-type.jsx-2474535766{font-style:normal;font-weight:normal;font-size:18px;line-height:21px;color:#dcdcdc;}"]))},f=o("HQGO"),g=r.a.createElement,x=function(e){var t=e.id,o=Object(c.b)(p.b,{variables:{id:t},fetchPolicy:"cache-and-network",notifyOnNetworkStatusChange:!0}),n=o.data,i=o.loading,s=o.error;return!n&&i?g(f.a,null):s?g("p",null,"Error: ",JSON.stringify(s)):g(r.a.Fragment,null,n&&g(m,{name:n.location.name,type:n.location.type}))},v=o("GgLZ"),w=o("YFqc"),y=o.n(w),b=r.a.createElement,L=function(e){var t=e.resident,o=e.locationName;return b("div",{className:"jsx-1166643671 ResidentBlock-root"},b(y.a,{href:"/residents/[id]",as:"/residents/".concat(t.id)},b("a",{className:"jsx-1166643671 ResidentBlock-link"},b("div",{className:"jsx-1166643671 ResidentBlock-img"},b("img",{src:t.image,alt:"resident",className:"jsx-1166643671"})),b("div",{className:"jsx-1166643671 ResidentBlock-body"},b("div",{className:"jsx-1166643671 ResidentBlock-name"},t.name),b("div",{className:"jsx-1166643671 ResidentBlock-location"},o),b("div",{className:"jsx-1166643671 ResidentBlock-species"},t.species)))),b(i.a,{id:"1166643671"},["img.jsx-1166643671{width:100%;}",".ResidentBlock-root.jsx-1166643671{width:100%;height:145px;background:#073955;box-shadow:2px 2px 10px rgba(29,99,234,0.48);margin-bottom:8px;}",".ResidentBlock-link.jsx-1166643671{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".ResidentBlock-img.jsx-1166643671{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:145px;height:145px;}",".ResidentBlock-body.jsx-1166643671{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:29px 17px;overflow:hidden;}",".ResidentBlock-name.jsx-1166643671{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-weight:bold;font-size:24px;line-height:28px;margin-bottom:7px;}",".ResidentBlock-location.jsx-1166643671,.ResidentBlock-species.jsx-1166643671{font-style:normal;font-weight:normal;font-size:18px;line-height:21px;margin-bottom:7px;color:#dcdcdc;}",".ResidentBlock-species.jsx-1166643671{margin-bottom:0;}"]))},j=r.a.createElement,k=function(e){var t=e.location,o=Object(s.useState)(19),n=o[0],r=o[1];return j("div",{className:"jsx-1451546818 ResidentList-root"},j("h2",{className:"jsx-1451546818 ResidentList-header"},"Residents"),j("div",{className:"jsx-1451546818 ResidentList-list"},j(v.a,{dataLength:n,next:function(){r(n+20)},hasMore:t.residents.length>n,loader:j(f.a,null)},t.residents.slice(0,n).map((function(e){return e.id?j(L,{key:e.id,resident:e,locationName:t.name}):j("p",{style:{textAlign:"center"},className:"jsx-1451546818"},j("b",{className:"jsx-1451546818"},"No residents!"))})))),j(i.a,{id:"1451546818"},[".ResidentList-root.jsx-1451546818{min-width:398px;margin:0 auto;}",".ResidentList-header.jsx-1451546818{text-align:center;font-style:normal;font-weight:bold;font-size:24px;line-height:28px;margin-bottom:14px;}"]))},T=r.a.createElement,E=function(e){var t=e.id,o=Object(c.b)(p.c,{variables:{id:t},fetchPolicy:"cache-and-network",notifyOnNetworkStatusChange:!0}),n=o.data,i=o.loading,s=o.error;if(!n&&i)return T(f.a,null);if(s)return T("p",null,"Error: ",JSON.stringify(s));return T(r.a.Fragment,null,n&&T(k,{location:n.location,onLoadMore:function(){},loading:i}))},S=r.a.createElement;t.default=function(){var e=Object(a.useRouter)();return S(l.a,null,S("div",{className:"jsx-1620004299 Location-root"},S(x,{id:+e.query.id}),S(E,{id:+e.query.id})),S(i.a,{id:"1620004299"},[".Location-root.jsx-1620004299{position:relative;display:block;min-width:398px;margin:0 auto;padding:0 10px;}"]))}},"sa+W":function(e,t,o){"use strict";var n=o("MX0m"),i=o.n(n),s=o("q1tI"),r=["Unknown","TV","Space station","Resort","Planet","Microverse","Fantasy town","Dream","Cluster"],a=o.n(s).a.createElement;t.a=function(e){var t,o=e.locationType,n=e.size,s=r.includes(t=o)?t:"Unknown",l=n?"_small":"";return a("div",{className:"jsx-985989053 LocationTypeImage-root"},a("img",{src:"/Type_".concat(s).concat(l,".png"),alt:s,className:"jsx-985989053 LocationTypeImage-img"}),a(i.a,{id:"985989053"},[".LocationTypeImage-root.jsx-985989053{width:100%;height:100%;}",".LocationTypeImage-img.jsx-985989053{width:100%;}"]))}}},[["Y4s9",1,2,0,3,4]]]);