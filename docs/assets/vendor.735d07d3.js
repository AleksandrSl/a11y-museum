/*!
* tabbable 5.2.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Y=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],L=Y.join(","),S=typeof Element=="undefined"?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,V=function(e,t,a){var c=Array.prototype.slice.apply(e.querySelectorAll(L));return t&&S.call(e,L)&&c.unshift(e),c=c.filter(a),c},Z=function(e){return e.contentEditable==="true"},W=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?Z(e)||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t},$=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},O=function(e){return e.tagName==="INPUT"},_=function(e){return O(e)&&e.type==="hidden"},ee=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(a){return a.tagName==="SUMMARY"});return t},te=function(e,t){for(var a=0;a<e.length;a++)if(e[a].checked&&e[a].form===t)return e[a]},re=function(e){if(!e.name)return!0;var t=e.form||e.ownerDocument,a=function(f){return t.querySelectorAll('input[type="radio"][name="'+f+'"]')},c;if(typeof window!="undefined"&&typeof window.CSS!="undefined"&&typeof window.CSS.escape=="function")c=a(window.CSS.escape(e.name));else try{c=a(e.name)}catch(b){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",b.message),!1}var u=te(c,e.form);return!u||u===e},ae=function(e){return O(e)&&e.type==="radio"},ne=function(e){return ae(e)&&!re(e)},ie=function(e,t){if(getComputedStyle(e).visibility==="hidden")return!0;var a=S.call(e,"details>summary:first-of-type"),c=a?e.parentElement:e;if(S.call(c,"details:not([open]) *"))return!0;if(!t||t==="full")for(;e;){if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}else if(t==="non-zero-area"){var u=e.getBoundingClientRect(),b=u.width,f=u.height;return b===0&&f===0}return!1},ue=function(e){if(O(e)||e.tagName==="SELECT"||e.tagName==="TEXTAREA"||e.tagName==="BUTTON")for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var a=0;a<t.children.length;a++){var c=t.children.item(a);if(c.tagName==="LEGEND")return!c.contains(e)}return!0}t=t.parentElement}return!1},P=function(e,t){return!(t.disabled||_(t)||ie(t,e.displayCheck)||ee(t)||ue(t))},z=function(e,t){return!(!P(e,t)||ne(t)||W(t)<0)},ce=function(e,t){t=t||{};var a=[],c=[],u=V(e,t.includeContainer,z.bind(null,t));u.forEach(function(f,m){var p=W(f);p===0?a.push(f):c.push({documentOrder:m,tabIndex:p,node:f})});var b=c.sort($).map(function(f){return f.node}).concat(a);return b},oe=function(e,t){t=t||{};var a=V(e,t.includeContainer,P.bind(null,t));return a},k=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return S.call(e,L)===!1?!1:z(t,e)},se=Y.concat("iframe").join(","),I=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return S.call(e,se)===!1?!1:P(t,e)};/*!
* focus-trap 6.7.3
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function G(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(i);e&&(a=a.filter(function(c){return Object.getOwnPropertyDescriptor(i,c).enumerable})),t.push.apply(t,a)}return t}function le(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?G(Object(t),!0).forEach(function(a){fe(i,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach(function(a){Object.defineProperty(i,a,Object.getOwnPropertyDescriptor(t,a))})}return i}function fe(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var K=function(){var i=[];return{activateTrap:function(t){if(i.length>0){var a=i[i.length-1];a!==t&&a.pause()}var c=i.indexOf(t);c===-1||i.splice(c,1),i.push(t)},deactivateTrap:function(t){var a=i.indexOf(t);a!==-1&&i.splice(a,1),i.length>0&&i[i.length-1].unpause()}}}(),de=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},be=function(e){return e.key==="Escape"||e.key==="Esc"||e.keyCode===27},ve=function(e){return e.key==="Tab"||e.keyCode===9},U=function(e){return setTimeout(e,0)},R=function(e,t){var a=-1;return e.every(function(c,u){return t(c)?(a=u,!1):!0}),a},N=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),c=1;c<t;c++)a[c-1]=arguments[c];return typeof e=="function"?e.apply(void 0,a):e},A=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},pe=function(e,t){var a=(t==null?void 0:t.document)||document,c=le({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),u={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},b,f=function(r,n,o){return r&&r[n]!==void 0?r[n]:c[o||n]},m=function(r){return!!(r&&u.containers.some(function(n){return n.contains(r)}))},p=function(r){var n=c[r];if(typeof n=="function"){for(var o=arguments.length,d=new Array(o>1?o-1:0),l=1;l<o;l++)d[l-1]=arguments[l];n=n.apply(void 0,d)}if(!n){if(n===void 0||n===!1)return n;throw new Error("`".concat(r,"` was specified but was not a node, or did not return a node"))}var v=n;if(typeof n=="string"&&(v=a.querySelector(n),!v))throw new Error("`".concat(r,"` as selector refers to no known node"));return v},D=function(){var r=p("initialFocus");if(r===!1)return!1;if(r===void 0)if(m(a.activeElement))r=a.activeElement;else{var n=u.tabbableGroups[0],o=n&&n.firstTabbableNode;r=o||p("fallbackFocus")}if(!r)throw new Error("Your focus-trap needs to have at least one focusable element");return r},g=function(){if(u.tabbableGroups=u.containers.map(function(r){var n=ce(r),o=oe(r);if(n.length>0)return{container:r,firstTabbableNode:n[0],lastTabbableNode:n[n.length-1],nextTabbableNode:function(l){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,T=o.findIndex(function(h){return h===l});return v?o.slice(T+1).find(function(h){return k(h)}):o.slice(0,T).reverse().find(function(h){return k(h)})}}}).filter(function(r){return!!r}),u.tabbableGroups.length<=0&&!p("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},y=function s(r){if(r!==!1&&r!==a.activeElement){if(!r||!r.focus){s(D());return}r.focus({preventScroll:!!c.preventScroll}),u.mostRecentlyFocusedNode=r,de(r)&&r.select()}},x=function(r){var n=p("setReturnFocus",r);return n||(n===!1?!1:r)},C=function(r){var n=A(r);if(!m(n)){if(N(c.clickOutsideDeactivates,r)){b.deactivate({returnFocus:c.returnFocusOnDeactivate&&!I(n)});return}N(c.allowOutsideClick,r)||r.preventDefault()}},j=function(r){var n=A(r),o=m(n);o||n instanceof Document?o&&(u.mostRecentlyFocusedNode=n):(r.stopImmediatePropagation(),y(u.mostRecentlyFocusedNode||D()))},Q=function(r){var n=A(r);g();var o=null;if(u.tabbableGroups.length>0){var d=R(u.tabbableGroups,function(w){var F=w.container;return F.contains(n)}),l=d>=0?u.tabbableGroups[d]:void 0;if(d<0)r.shiftKey?o=u.tabbableGroups[u.tabbableGroups.length-1].lastTabbableNode:o=u.tabbableGroups[0].firstTabbableNode;else if(r.shiftKey){var v=R(u.tabbableGroups,function(w){var F=w.firstTabbableNode;return n===F});if(v<0&&(l.container===n||I(n)&&!k(n)&&!l.nextTabbableNode(n,!1))&&(v=d),v>=0){var T=v===0?u.tabbableGroups.length-1:v-1,h=u.tabbableGroups[T];o=h.lastTabbableNode}}else{var E=R(u.tabbableGroups,function(w){var F=w.lastTabbableNode;return n===F});if(E<0&&(l.container===n||I(n)&&!k(n)&&!l.nextTabbableNode(n))&&(E=d),E>=0){var X=E===u.tabbableGroups.length-1?0:E+1,J=u.tabbableGroups[X];o=J.firstTabbableNode}}}else o=p("fallbackFocus");o&&(r.preventDefault(),y(o))},M=function(r){if(be(r)&&N(c.escapeDeactivates,r)!==!1){r.preventDefault(),b.deactivate();return}if(ve(r)){Q(r);return}},q=function(r){if(!N(c.clickOutsideDeactivates,r)){var n=A(r);m(n)||N(c.allowOutsideClick,r)||(r.preventDefault(),r.stopImmediatePropagation())}},B=function(){if(!!u.active)return K.activateTrap(b),u.delayInitialFocusTimer=c.delayInitialFocus?U(function(){y(D())}):y(D()),a.addEventListener("focusin",j,!0),a.addEventListener("mousedown",C,{capture:!0,passive:!1}),a.addEventListener("touchstart",C,{capture:!0,passive:!1}),a.addEventListener("click",q,{capture:!0,passive:!1}),a.addEventListener("keydown",M,{capture:!0,passive:!1}),b},H=function(){if(!!u.active)return a.removeEventListener("focusin",j,!0),a.removeEventListener("mousedown",C,!0),a.removeEventListener("touchstart",C,!0),a.removeEventListener("click",q,!0),a.removeEventListener("keydown",M,!0),b};return b={activate:function(r){if(u.active)return this;var n=f(r,"onActivate"),o=f(r,"onPostActivate"),d=f(r,"checkCanFocusTrap");d||g(),u.active=!0,u.paused=!1,u.nodeFocusedBeforeActivation=a.activeElement,n&&n();var l=function(){d&&g(),B(),o&&o()};return d?(d(u.containers.concat()).then(l,l),this):(l(),this)},deactivate:function(r){if(!u.active)return this;clearTimeout(u.delayInitialFocusTimer),u.delayInitialFocusTimer=void 0,H(),u.active=!1,u.paused=!1,K.deactivateTrap(b);var n=f(r,"onDeactivate"),o=f(r,"onPostDeactivate"),d=f(r,"checkCanReturnFocus");n&&n();var l=f(r,"returnFocus","returnFocusOnDeactivate"),v=function(){U(function(){l&&y(x(u.nodeFocusedBeforeActivation)),o&&o()})};return l&&d?(d(x(u.nodeFocusedBeforeActivation)).then(v,v),this):(v(),this)},pause:function(){return u.paused||!u.active?this:(u.paused=!0,H(),this)},unpause:function(){return!u.paused||!u.active?this:(u.paused=!1,g(),B(),this)},updateContainerElements:function(r){var n=[].concat(r).filter(Boolean);return u.containers=n.map(function(o){return typeof o=="string"?a.querySelector(o):o}),u.active&&g(),this}},b.updateContainerElements(e),b};export{pe as c};
