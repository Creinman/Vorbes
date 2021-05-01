(function(){var n=projectb.define;(function(){function t(n){function t(t,r,e,u,i,o){for(;i>=0&&i<o;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=x(e,i,4);var o=!F(r)&&b.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function r(n){return function(t,r,e){r=_(r,e);for(var u=k(t),i=n>0?0:u-1;i>=0&&i<u;i+=n)if(r(t[i],i,t))return i;return-1}}function e(n,t,r){return function(e,u,i){var o=0,a=k(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(s.call(e,o,a),b.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&i<a;i+=n)if(e[i]===u)return i;return-1}}function u(n,t){var r=N.length,e=n.constructor,u=b.isFunction(e)&&e.prototype||c,i="constructor";for(b.has(n,i)&&!b.contains(t,i)&&t.push(i);r--;)i=N[r],i in n&&n[i]!==u[i]&&!b.contains(t,i)&&t.push(i)}var i=this,o=i._,a=Array.prototype,c=Object.prototype,f=Function.prototype,l=a.push,s=a.slice,p=c.toString,h=c.hasOwnProperty,v=Array.isArray,y=Object.keys,d=f.bind,g=Object.create,m=function(){},b=function(n){return n instanceof b?n:this instanceof b?void(this._wrapped=n):new b(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=b),exports._=b):i._=b,b.VERSION="1.8.3";var x=function(n,t,r){if(void 0===t)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},_=function(n,t,r){return null==n?b.identity:b.isFunction(n)?x(n,t,r):b.isObject(n)?b.matcher(n):b.property(n)};b.iteratee=function(n,t){return _(n,t,1/0)};var j=function(n,t){return function(r){var e=arguments.length;if(e<2||null==r)return r;for(var u=1;u<e;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;c<a;c++){var f=o[c];t&&void 0!==r[f]||(r[f]=i[f])}return r}},w=function(n){if(!b.isObject(n))return{};if(g)return g(n);m.prototype=n;var t=new m;return m.prototype=null,t},A=function(n){return function(t){return null==t?void 0:t[n]}},O=Math.pow(2,53)-1,k=A("length"),F=function(n){var t=k(n);return"number"==typeof t&&t>=0&&t<=O};b.each=b.forEach=function(n,t,r){t=x(t,r);var e,u;if(F(n))for(e=0,u=n.length;e<u;e++)t(n[e],e,n);else{var i=b.keys(n);for(e=0,u=i.length;e<u;e++)t(n[i[e]],i[e],n)}return n},b.map=b.collect=function(n,t,r){t=_(t,r);for(var e=!F(n)&&b.keys(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},b.reduce=b.foldl=b.inject=t(1),b.reduceRight=b.foldr=t(-1),b.find=b.detect=function(n,t,r){var e;if(e=F(n)?b.findIndex(n,t,r):b.findKey(n,t,r),void 0!==e&&e!==-1)return n[e]},b.filter=b.select=function(n,t,r){var e=[];return t=_(t,r),b.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},b.reject=function(n,t,r){return b.filter(n,b.negate(_(t)),r)},b.every=b.all=function(n,t,r){t=_(t,r);for(var e=!F(n)&&b.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},b.some=b.any=function(n,t,r){t=_(t,r);for(var e=!F(n)&&b.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},b.contains=b.includes=b.include=function(n,t,r,e){return F(n)||(n=b.values(n)),("number"!=typeof r||e)&&(r=0),b.indexOf(n,t,r)>=0},b.invoke=function(n,t){var r=s.call(arguments,2),e=b.isFunction(t);return b.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},b.pluck=function(n,t){return b.map(n,b.property(t))},b.where=function(n,t){return b.filter(n,b.matcher(t))},b.findWhere=function(n,t){return b.find(n,b.matcher(t))},b.max=function(n,t,r){var e,u,i=-(1/0),o=-(1/0);if(null==t&&null!=n){n=F(n)?n:b.values(n);for(var a=0,c=n.length;a<c;a++)e=n[a],e>i&&(i=e)}else t=_(t,r),b.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-(1/0)&&i===-(1/0))&&(i=n,o=u)});return i},b.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=F(n)?n:b.values(n);for(var a=0,c=n.length;a<c;a++)e=n[a],e<i&&(i=e)}else t=_(t,r),b.each(n,function(n,r,e){u=t(n,r,e),(u<o||u===1/0&&i===1/0)&&(i=n,o=u)});return i},b.shuffle=function(n){for(var t,r=F(n)?n:b.values(n),e=r.length,u=Array(e),i=0;i<e;i++)t=b.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},b.sample=function(n,t,r){return null==t||r?(F(n)||(n=b.values(n)),n[b.random(n.length-1)]):b.shuffle(n).slice(0,Math.max(0,t))},b.sortBy=function(n,t,r){return t=_(t,r),b.pluck(b.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(r<e||void 0===e)return-1}return n.index-t.index}),"value")};var S=function(n){return function(t,r,e){var u={};return r=_(r,e),b.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};b.groupBy=S(function(n,t,r){b.has(n,r)?n[r].push(t):n[r]=[t]}),b.indexBy=S(function(n,t,r){n[r]=t}),b.countBy=S(function(n,t,r){b.has(n,r)?n[r]++:n[r]=1}),b.toArray=function(n){return n?b.isArray(n)?s.call(n):F(n)?b.map(n,b.identity):b.values(n):[]},b.size=function(n){return null==n?0:F(n)?n.length:b.keys(n).length},b.partition=function(n,t,r){t=_(t,r);var e=[],u=[];return b.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},b.first=b.head=b.take=function(n,t,r){if(null!=n)return null==t||r?n[0]:b.initial(n,n.length-t)},b.initial=function(n,t,r){return s.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},b.last=function(n,t,r){if(null!=n)return null==t||r?n[n.length-1]:b.rest(n,Math.max(0,n.length-t))},b.rest=b.tail=b.drop=function(n,t,r){return s.call(n,null==t||r?1:t)},b.compact=function(n){return b.filter(n,b.identity)};var E=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=k(n);o<a;o++){var c=n[o];if(F(c)&&(b.isArray(c)||b.isArguments(c))){t||(c=E(c,t,r));var f=0,l=c.length;for(u.length+=l;f<l;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};b.flatten=function(n,t){return E(n,t,!1)},b.without=function(n){return b.difference(n,s.call(arguments,1))},b.uniq=b.unique=function(n,t,r,e){b.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=_(r,e));for(var u=[],i=[],o=0,a=k(n);o<a;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?b.contains(i,f)||(i.push(f),u.push(c)):b.contains(u,c)||u.push(c)}return u},b.union=function(){return b.uniq(E(arguments,!0,!0))},b.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=k(n);e<u;e++){var i=n[e];if(!b.contains(t,i)){for(var o=1;o<r&&b.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},b.difference=function(n){var t=E(arguments,!0,!0,1);return b.filter(n,function(n){return!b.contains(t,n)})},b.zip=function(){return b.unzip(arguments)},b.unzip=function(n){for(var t=n&&b.max(n,k).length||0,r=Array(t),e=0;e<t;e++)r[e]=b.pluck(n,e);return r},b.object=function(n,t){for(var r={},e=0,u=k(n);e<u;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},b.findIndex=r(1),b.findLastIndex=r(-1),b.sortedIndex=function(n,t,r,e){r=_(r,e,1);for(var u=r(t),i=0,o=k(n);i<o;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},b.indexOf=e(1,b.findIndex,b.sortedIndex),b.lastIndexOf=e(-1,b.findLastIndex),b.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;i<e;i++,n+=r)u[i]=n;return u};var M=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=w(n.prototype),o=n.apply(i,u);return b.isObject(o)?o:i};b.bind=function(n,t){if(d&&n.bind===d)return d.apply(n,s.call(arguments,1));if(!b.isFunction(n))throw new TypeError("Bind must be called on a function");var r=s.call(arguments,2),e=function(){return M(n,e,t,this,r.concat(s.call(arguments)))};return e},b.partial=function(n){var t=s.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;o<u;o++)i[o]=t[o]===b?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return M(n,r,this,this,i)};return r},b.bindAll=function(n){var t,r,e=arguments.length;if(e<=1)throw new Error("bindAll must be passed function names");for(t=1;t<e;t++)r=arguments[t],n[r]=b.bind(n[r],n);return n},b.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return b.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},b.delay=function(n,t){var r=s.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},b.defer=b.partial(b.delay,b,1),b.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:b.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=b.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,l<=0||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},b.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=b.now()-o;f<t&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=b.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},b.wrap=function(n,t){return b.partial(t,n)},b.negate=function(n){return function(){return!n.apply(this,arguments)}},b.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},b.after=function(n,t){return function(){if(--n<1)return t.apply(this,arguments)}},b.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=null),r}},b.once=b.partial(b.before,2);var I=!{toString:null}.propertyIsEnumerable("toString"),N=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];b.keys=function(n){if(!b.isObject(n))return[];if(y)return y(n);var t=[];for(var r in n)b.has(n,r)&&t.push(r);return I&&u(n,t),t},b.allKeys=function(n){if(!b.isObject(n))return[];var t=[];for(var r in n)t.push(r);return I&&u(n,t),t},b.values=function(n){for(var t=b.keys(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=n[t[u]];return e},b.mapObject=function(n,t,r){t=_(t,r);for(var e,u=b.keys(n),i=u.length,o={},a=0;a<i;a++)e=u[a],o[e]=t(n[e],e,n);return o},b.pairs=function(n){for(var t=b.keys(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=[t[u],n[t[u]]];return e},b.invert=function(n){for(var t={},r=b.keys(n),e=0,u=r.length;e<u;e++)t[n[r[e]]]=r[e];return t},b.functions=b.methods=function(n){var t=[];for(var r in n)b.isFunction(n[r])&&t.push(r);return t.sort()},b.extend=j(b.allKeys),b.extendOwn=b.assign=j(b.keys),b.findKey=function(n,t,r){t=_(t,r);for(var e,u=b.keys(n),i=0,o=u.length;i<o;i++)if(e=u[i],t(n[e],e,n))return e},b.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;b.isFunction(t)?(u=b.allKeys(o),e=x(t,r)):(u=E(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;a<c;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},b.omit=function(n,t,r){if(b.isFunction(t))t=b.negate(t);else{var e=b.map(E(arguments,!1,!1,1),String);t=function(n,t){return!b.contains(e,t)}}return b.pick(n,t,r)},b.defaults=j(b.allKeys,!0),b.create=function(n,t){var r=w(n);return t&&b.extendOwn(r,t),r},b.clone=function(n){return b.isObject(n)?b.isArray(n)?n.slice():b.extend({},n):n},b.tap=function(n,t){return t(n),n},b.isMatch=function(n,t){var r=b.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var B=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof b&&(n=n._wrapped),t instanceof b&&(t=t._wrapped);var u=p.call(n);if(u!==p.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(b.isFunction(o)&&o instanceof o&&b.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!B(n[c],t[c],r,e))return!1}else{var f,l=b.keys(n);if(c=l.length,b.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!b.has(t,f)||!B(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};b.isEqual=function(n,t){return B(n,t)},b.isEmpty=function(n){return null==n||(F(n)&&(b.isArray(n)||b.isString(n)||b.isArguments(n))?0===n.length:0===b.keys(n).length)},b.isElement=function(n){return!(!n||1!==n.nodeType)},b.isArray=v||function(n){return"[object Array]"===p.call(n)},b.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},b.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){b["is"+n]=function(t){return p.call(t)==="[object "+n+"]"}}),b.isArguments(arguments)||(b.isArguments=function(n){return b.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(b.isFunction=function(n){return"function"==typeof n||!1}),b.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},b.isNaN=function(n){return b.isNumber(n)&&n!==+n},b.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===p.call(n)},b.isNull=function(n){return null===n},b.isUndefined=function(n){return void 0===n},b.has=function(n,t){return null!=n&&h.call(n,t)},b.noConflict=function(){return i._=o,this},b.identity=function(n){return n},b.constant=function(n){return function(){return n}},b.noop=function(){},b.property=A,b.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},b.matcher=b.matches=function(n){return n=b.extendOwn({},n),function(t){return b.isMatch(t,n)}},b.times=function(n,t,r){var e=Array(Math.max(0,n));t=x(t,r,1);for(var u=0;u<n;u++)e[u]=t(u);return e},b.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},b.now=Date.now||function(){return(new Date).getTime()};var T={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},R=b.invert(T),q=function(n){var t=function(t){return n[t]},r="(?:"+b.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};b.escape=q(T),b.unescape=q(R),b.result=function(n,t,r){var e=null==n?void 0:n[t];return void 0===e&&(e=r),b.isFunction(e)?e.call(n):e};var K=0;b.uniqueId=function(n){var t=++K+"";return n?n+t:t},b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var z=/(.)^/,D={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},L=/\\|'|\r|\n|\u2028|\u2029/g,P=function(n){return"\\"+D[n]};b.template=function(n,t,r){!t&&r&&(t=r),t=b.defaults({},t,b.templateSettings);var e=RegExp([(t.escape||z).source,(t.interpolate||z).source,(t.evaluate||z).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(L,P),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,b)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},b.chain=function(n){var t=b(n);return t._chain=!0,t};var C=function(n,t){return n._chain?b(t).chain():t};b.mixin=function(n){b.each(b.functions(n),function(t){var r=b[t]=n[t];b.prototype[t]=function(){var n=[this._wrapped];return l.apply(n,arguments),C(this,r.apply(b,n))}})},b.mixin(b),b.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=a[n];b.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],C(this,r)}}),b.each(["concat","join","slice"],function(n){var t=a[n];b.prototype[n]=function(){return C(this,t.apply(this._wrapped,arguments))}}),b.prototype.value=function(){return this._wrapped},b.prototype.valueOf=b.prototype.toJSON=b.prototype.value,b.prototype.toString=function(){return""+this._wrapped},"function"==typeof n&&n.amd&&n("underscore",[],function(){return b})}).call(this)}).call({});