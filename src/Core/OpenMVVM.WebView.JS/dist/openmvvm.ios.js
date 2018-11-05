!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(module,__webpack_exports__,__webpack_require__){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var ParserService=function(){function ParserService(e,t){_classCallCheck(this,ParserService),this.elementCache=t.elementCache,this.collectionCache=t.collectionCache,this.bridgeMapper=e}return _createClass(ParserService,[{key:"analyzeThis",value:function(e,t,n){this.parseBind(e,t,n),this.parseActions(e,t,n),e.getAttribute("data-repeat")?this.parseForeach(e,t,n):this.analyzeNode(e,t,n)}},{key:"analyzeNode",value:function(e,t,n){for(var i=e.children,r=0;r<i.length;r++){var a=i[r];this.analyzeThis(a,t,n)}}},{key:"globalizePath",value:function(e,t){var n=t;for(".."===e.slice(0,2)&&(e=e.slice(2),n=n.slice(0,n.lastIndexOf(".")));"."===e[0];)e=e.slice(1),n=n.slice(0,n.lastIndexOf("."));return n+"."+e}},{key:"createHandler",value:function(e,t){var n=this;return function(i){i.stopImmediatePropagation(),n.bridgeMapper.fireCommand(e,t)}}},{key:"createBindingInfo",value:function(e,t,n,i,r){return{element:e,key:t,insideTemplate:n,converter:i,parameter:r}}},{key:"saveBinding",value:function(e,t){this.elementCache[e]?this.elementCache[e].push(t):this.elementCache[e]=[t]}},{key:"parseActions",value:function parseActions(child,dataContext,insideTemplate){var actionsAttributeValue=child.getAttribute("data-actions");if(actionsAttributeValue){var context=dataContext,bindingDescriptor=eval("("+actionsAttributeValue+")");for(var key in bindingDescriptor)if(bindingDescriptor.hasOwnProperty(key)){var descriptor=bindingDescriptor[key],path=null,parameter=null;"string"==typeof descriptor||descriptor instanceof String?(path=descriptor,parameter=null):(path=descriptor.command,parameter=descriptor.parameter);var binding=this.createBindingInfo(child,key,insideTemplate,null,parameter),overridenDataContext=child.getAttribute("data-context");overridenDataContext&&(dataContext=overridenDataContext);var bindingPath=this.globalizePath(path,dataContext);this.saveBinding(bindingPath,binding);var value=this.createHandler(bindingPath,parameter);child.addEventListener(key,value)}}}},{key:"parseBind",value:function parseBind(child,dataContext,insideTemplate){var bindAttributeValue=child.getAttribute("data-bind");if(bindAttributeValue){var that=this,context=dataContext,bindingDescriptor=eval("("+bindAttributeValue+")");for(var key in bindingDescriptor)if(bindingDescriptor.hasOwnProperty(key)){var descriptor=bindingDescriptor[key],path=null,converter=function(e){return e};"string"==typeof descriptor||descriptor instanceof String?path=descriptor:(path=descriptor.path,converter=descriptor.converter);var binding=this.createBindingInfo(child,key,insideTemplate,converter),overridenDataContext=child.getAttribute("data-context");overridenDataContext&&(dataContext=overridenDataContext);var bindingPath=this.globalizePath(path,dataContext);if(this.saveBinding(bindingPath,binding),"value"===key)if("radio"===child.type){var bpath=bindingPath;child.addEventListener("change",function(){if(child.checked){var e=child.value,t=child.getAttribute("data-selected-bind"),n=t?that.globalizePath(t,bpath):bpath;that.bridgeMapper.propertySet(n,e)}})}else{var bpath=bindingPath;child.addEventListener("input",function(){var e=child.value;that.bridgeMapper.propertySet(bpath,e)})}if("checked"===key&&"checkbox"===child.type){var bpath=bindingPath;child.addEventListener("change",function(){var e=child.checked;that.bridgeMapper.propertySet(bpath,e)})}this.bridgeMapper.registerBinding(bindingPath,insideTemplate)}}}},{key:"parseForeach",value:function(e,t,n){var i=e.getAttribute("data-repeat");if(i){var r=t+"."+i,a=e.children[0];this.collectionCache[r]={rootElement:e,template:a},e.removeChild(a),this.bridgeMapper.registerBinding(r,n)}}}]),ParserService}();__webpack_exports__.a=ParserService},function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parserService=t,this.elementCache=n.elementCache}return function(e,t,n){t&&i(e.prototype,t),n&&i(e,n)}(e,[{key:"getNextPath",value:function(e,t,n){var i=t,r=e.length+1,a=i.substring(r),o=a.indexOf("]"),s=i.substr(0,r),c=a.substr(o),l=i.substr(e.length+1,o),d=parseInt(l),h=n(d);return{nextPath:s+h+c,index:d,newIndex:h}}},{key:"renderCollectionItemFromTemplate",value:function(e,t,n,i){var r=this,a=t.cloneNode(!0);if(i<n.children.length){n.insertBefore(a,n.children[i]);var o=Object.keys(this.elementCache).filter(function(t){return 0===t.indexOf(e+"[")}).reduce(function(e,t){return e[t]=r.elementCache[t],e},{}),s={};for(var c in o)if(o.hasOwnProperty(c)){var l=this.getNextPath(e,c,function(e){return e+1});l.index>=i&&(s[l.nextPath]=this.elementCache[c],delete this.elementCache[c])}for(var d in s)s.hasOwnProperty(d)&&(this.elementCache[d]=s[d])}else n.appendChild(a);this.parserService.analyzeThis(a,e+"["+i+"]",!0)}},{key:"renderForeach",value:function(e,t,n,i){for(;i.firstChild;)i.removeChild(i.firstChild);for(var r=0;r<e.length;r++)this.renderCollectionItemFromTemplate(t,n,i,r)}}]),e}();t.a=r},function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bridge=t,this.registerBinding=this.registerBinding.bind(this),this.propertySet=this.propertySet.bind(this),this.fireCommand=this.fireCommand.bind(this),this.appReady=this.appReady.bind(this)}return function(e,t,n){t&&i(e.prototype,t),n&&i(e,n)}(e,[{key:"registerBinding",value:function(e,t){t?this.bridge.sendMessage({functionName:"RegisterBindingCollection",params:[e]}):this.bridge.sendMessage({functionName:"RegisterBinding",params:[e,!1]})}},{key:"propertySet",value:function(e,t){this.bridge.sendMessage({functionName:"PropertySet",params:[e,t]})}},{key:"fireCommand",value:function(e,t){var n=t||"";this.bridge.sendMessage({functionName:"FireCommand",params:[e,n]})}},{key:"appReady",value:function(){this.bridge.sendMessage({functionName:"Init",params:[]})}}]),e}();t.a=r},function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r=function(){function e(t,n,i,r,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.viewCache={},this.eventListeners={},this.collectionCache=a.collectionCache,this.elementCache=a.elementCache,this.bridgeMapper=t,this.viewLoaderService=n,this.parserService=i,this.rendererService=r,this.jsbind=this.jsbind.bind(this),this.navigateTo=this.navigateTo.bind(this),this.handleCollectionChange=this.handleCollectionChange.bind(this),this.setValue=this.setValue.bind(this)}return function(e,t,n){t&&i(e.prototype,t),n&&i(e,n)}(e,[{key:"on",value:function(e,t){void 0===this.eventListeners[e]&&(this.eventListeners[e]=[]),this.eventListeners[e].push(t)}},{key:"jsbind",value:function(){this.frame=document.querySelector("[data-mvvmstart]");for(var e=document.querySelectorAll("[data-view]"),t=0;t<e.length;t++){var n=e[t],i=n.getAttribute("data-view");this.viewCache[i]={element:n,initialized:!1},n.parentElement.removeChild(n)}this.bridgeMapper.appReady()}},{key:"navigateTo",value:function(e){var t=this;if(this.viewCache[e]){var n=this.viewCache[e].element;if(!this.viewCache[e].initialized){var i=n,r=i.getAttribute("data-context");this.parserService.analyzeNode(i,r),this.viewCache[e].initialized=!0}for(;this.frame.firstChild;)this.frame.removeChild(this.frame.firstChild);this.frame.appendChild(n),this.broadcast("ViewChange",{prev:this.currentView,next:e}),this.currentView=e}else this.viewLoaderService.loadView(e,function(n){t.viewCache[e]={element:n,initialized:!1},t.navigateTo(e)})}},{key:"handleCollectionChange",value:function(e,t){var n=this,i=this.collectionCache[e],r=i.rootElement,a=i.template;switch(t.Action){case 0:this.rendererService.renderCollectionItemFromTemplate(e,a,r,t.NewStartingIndex);break;case 4:var o=Object.keys(this.elementCache).filter(function(e){return 0===e.indexOf(i+"[")}).reduce(function(e,t){return e[t]=n.elementCache[t],e},{});for(var s in o)if(o.hasOwnProperty(s))for(var c=o[s],l=0;l<c.length;l++){c[l].insideTemplate&&delete this.elementCache[s]}}}},{key:"setValue",value:function(e,t){var n=this,i=this.elementCache[e];if(i)for(var r=0;r<i.length;r++){var a=i[r],o=a.key,s=a.element;switch(o){case"mvvmvisible":s.style.display=a.converter(t);break;case"mvvmbgcolor":s.style.backgroundColor=a.converter(t);break;case"mvvmbgimage":s.style.backgroundImage=a.converter(t);break;case"mvvmsubview":s[o]?s[o]!==t&&this.broadcast("SubviewChange",{el:s,oldVal:s[o],newVal:t}):this.broadcast("SubviewChange",{el:s,oldVal:null,newVal:t}),s[o]=t;break;default:s[o]=a.converter(t)}}var c=this.collectionCache[e];if(c){var l=c.template;this.rendererService.renderForeach(t,e,l,c.rootElement)}var d=Object.keys(this.elementCache).filter(function(t){return 0===t.indexOf(e+".")}).reduce(function(e,t){return e[t]=n.elementCache[t],e},{});if(d)for(var h in d)if(d.hasOwnProperty(h)){var u=h;this.bridgeMapper.registerBinding(u,!1)}}},{key:"broadcast",value:function(e,t){for(var n in this.eventListeners)if(n===e){for(var i=0;i<this.eventListeners[n].length;i++)this.eventListeners[n][i](t);break}}}]),e}();t.a=r},,,function(e,t){!function(e){var t=e.setTimeout,n=e.document,i=0;e.jXHR=function(){var r,a,o,s=null;function c(){try{o.parentNode.removeChild(o)}catch(e){}}function l(){a=!1,r="",c(),o=null,h(0)}function d(e){try{s.onerror.call(s,e,r)}catch(t){throw new Error(e)}}function h(e,t){t=t||[],s.readyState=e,"function"==typeof s.onreadystatechange&&s.onreadystatechange.apply(s,t)}return s={onerror:null,onreadystatechange:null,readyState:0,open:function(t,n){l(),internal_callback="cb"+i++,function(t){e.jXHR[t]=function(){try{h.call(s,4,arguments)}catch(e){s.readyState=-1,d("Script failed to run ["+r+"].")}e.jXHR[t]=null}}(internal_callback),r=n.replace(/=\?/,"=jXHR."+internal_callback),h(1)},send:function(){t(function(){(o=n.createElement("script")).setAttribute("type","text/javascript"),o.onload=o.onreadystatechange=function(){(function(){this.readyState&&"complete"!==this.readyState&&"loaded"!==this.readyState||a||(this.onload=this.onreadystatechange=null,a=!0,4!==s.readyState&&d("Script failed to load ["+r+"]."),c())}).call(o)},o.setAttribute("src",r),n.getElementsByTagName("head")[0].appendChild(o)},0),h(2)},setRequestHeader:function(){},getResponseHeader:function(){return""},getAllResponseHeaders:function(){return[]}},l(),s}}(window),Mt={},Mt.appId="jsbridge",Mt.pageToken="index",Mt.App={},Mt.API={},Mt.App._listeners={},Mt.App._listener_id=1,Mt.App.id=Mt.appId,Mt.App._xhr=jXHR,Mt._broker=function(e,t,n){var i=new Mt.App._xhr;i.onerror=function(e){console.log("XHR error:"+JSON.stringify(e))};var r="app://"+e+"/"+t+"?callback=?&data="+encodeURIComponent(JSON.stringify(n))+"&_="+Math.random();i.open("GET",r),i.send()},Mt._hexish=function(e){for(var t,n="",i=e.length,r=0;r<i;){n+="\\\\u";for(var a=4-(t=e.charCodeAt(r++).toString(16)).length;a-- >0;)n+="0";n+=t}return n},Mt._bridgeEnc=function(e){return"<"+Mt._hexish(e)+">"},Mt.App._JSON=function(e,t){switch(typeof e){case"undefined":case"function":case"unknown":return;case"number":case"boolean":return e;case"string":return 1===t?Mt._bridgeEnc(e):'""'+e.replace(/""/g,'\\\\""').replace(/\\n/g,"\\\\n").replace(/\\r/g,"\\\\r")+'""'}if(null===e||1==e.nodeType)return"null";if(-1!=e.constructor.toString().indexOf("Date"))return"new Date("+e.getTime()+")";if(-1!=e.constructor.toString().indexOf("Array")){for(var n="[",i="",r=e.length,a=0;a<r;a++){void 0!==(c=e[a])&&(c=Mt.App._JSON(c,t)),void 0!==c&&(n+=i+c,i=", ")}return n+"]"}var o=[];for(var s in e){var c;void 0!==(c=e[s])&&(c=Mt.App._JSON(c,t)),void 0!==c&&o.push(Mt.App._JSON(s,t)+": "+c)}return"{"+o.join(",")+"}"},Mt.App._dispatchEvent=function(e,t){var n=Mt.App._listeners[e];if(n)for(var i=0;i<n.length;i++){var r=n[i];r.callback.call(r.callback,t)}},Mt.App.fireEvent=function(e,t){Mt._broker("App","fireEvent",{name:e,event:t})},Mt.API.log=function(e,t){Mt._broker("API","log",{level:e,message:t})},Mt.API.debug=function(e){Mt._broker("API","log",{level:"debug",message:e})},Mt.API.error=function(e){Mt._broker("API","log",{level:"error",message:e})},Mt.API.info=function(e){Mt._broker("API","log",{level:"info",message:e})},Mt.API.fatal=function(e){Mt._broker("API","log",{level:"fatal",message:e})},Mt.API.warn=function(e){Mt._broker("API","log",{level:"warn",message:e})},Mt.App.addEventListener=function(e,t){var n=Mt.App._listeners[e];void 0===n&&(n=[],Mt.App._listeners[e]=n);var i=Mt.pageToken+Mt.App._listener_id++;n.push({callback:t,id:i})},Mt.App.removeEventListener=function(e,t){var n=Mt.App._listeners[e];if(n)for(var i=0;i<n.length;i++){if(n[i].callback==t){n.splice(i,1);break}}}},,,function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t);var r=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){t&&i(e.prototype,t),n&&i(e,n)}(e,[{key:"loadView",value:function(e,t){var n=new XMLHttpRequest;n.open("GET","Views/"+e+".html",!0),n.onreadystatechange=function(){var e=document.createElement("div");e.innerHTML=this.responseText;var n=e.firstChild;t(n)},n.send()}}]),e}());n(6);function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=new(function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.start=this.start.bind(this),this.receiveMessage=this.receiveMessage.bind(this),this.sendMessage=this.sendMessage.bind(this),window.Mt.App.addEventListener("receiveMessage",function(e){t.receiveMessage(e[0],e[1])})}return function(e,t,n){t&&a(e.prototype,t),n&&a(e,n)}(e,[{key:"start",value:function(e){this.service=e,this.service.jsbind()}},{key:"receiveMessage",value:function(e,t){var n=JSON.parse(t);this.service[n.FunctionName].apply(this,n.Params)}},{key:"sendMessage",value:function(e){window.Mt.App.fireEvent("doNativeStuff",e)}}]),e}()),s=n(0),c=n(1),l=n(2),d=n(3),h={elementCache:{},collectionCache:{}},u=new l.a(o),f=new s.a(u,h),p=new c.a(f,h),v=new d.a(u,r,f,p,h);o.start(v)}]);