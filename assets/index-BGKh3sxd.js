function OM(a,e){for(var i=0;i<e.length;i++){const s=e[i];if(typeof s!="string"&&!Array.isArray(s)){for(const l in s)if(l!=="default"&&!(l in a)){const u=Object.getOwnPropertyDescriptor(s,l);u&&Object.defineProperty(a,l,u.get?u:{enumerable:!0,get:()=>s[l]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function PM(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Hd={exports:{}},Jo={};var Lv;function FM(){if(Lv)return Jo;Lv=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var c=null;if(u!==void 0&&(c=""+u),l.key!==void 0&&(c=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:a,type:s,key:c,ref:l!==void 0?l:null,props:u}}return Jo.Fragment=e,Jo.jsx=i,Jo.jsxs=i,Jo}var Nv;function zM(){return Nv||(Nv=1,Hd.exports=FM()),Hd.exports}var Me=zM(),Gd={exports:{}},St={};var Ov;function IM(){if(Ov)return St;Ov=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),_=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function x(N,ee,ge){this.props=N,this.context=ee,this.refs=M,this.updater=ge||E}x.prototype.isReactComponent={},x.prototype.setState=function(N,ee){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ee,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function D(){}D.prototype=x.prototype;function L(N,ee,ge){this.props=N,this.context=ee,this.refs=M,this.updater=ge||E}var O=L.prototype=new D;O.constructor=L,T(O,x.prototype),O.isPureReactComponent=!0;var z=Array.isArray;function I(){}var R={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function A(N,ee,ge){var Ce=ge.ref;return{$$typeof:a,type:N,key:ee,ref:Ce!==void 0?Ce:null,props:ge}}function U(N,ee){return A(N.type,ee,N.props)}function B(N){return typeof N=="object"&&N!==null&&N.$$typeof===a}function J(N){var ee={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ge){return ee[ge]})}var te=/\/+/g;function fe(N,ee){return typeof N=="object"&&N!==null&&N.key!=null?J(""+N.key):ee.toString(36)}function ne(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(I,I):(N.status="pending",N.then(function(ee){N.status==="pending"&&(N.status="fulfilled",N.value=ee)},function(ee){N.status==="pending"&&(N.status="rejected",N.reason=ee)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function P(N,ee,ge,Ce,Fe){var ie=typeof N;(ie==="undefined"||ie==="boolean")&&(N=null);var me=!1;if(N===null)me=!0;else switch(ie){case"bigint":case"string":case"number":me=!0;break;case"object":switch(N.$$typeof){case a:case e:me=!0;break;case v:return me=N._init,P(me(N._payload),ee,ge,Ce,Fe)}}if(me)return Fe=Fe(N),me=Ce===""?"."+fe(N,0):Ce,z(Fe)?(ge="",me!=null&&(ge=me.replace(te,"$&/")+"/"),P(Fe,ee,ge,"",function(Ve){return Ve})):Fe!=null&&(B(Fe)&&(Fe=U(Fe,ge+(Fe.key==null||N&&N.key===Fe.key?"":(""+Fe.key).replace(te,"$&/")+"/")+me)),ee.push(Fe)),1;me=0;var Ne=Ce===""?".":Ce+":";if(z(N))for(var We=0;We<N.length;We++)Ce=N[We],ie=Ne+fe(Ce,We),me+=P(Ce,ee,ge,ie,Fe);else if(We=y(N),typeof We=="function")for(N=We.call(N),We=0;!(Ce=N.next()).done;)Ce=Ce.value,ie=Ne+fe(Ce,We++),me+=P(Ce,ee,ge,ie,Fe);else if(ie==="object"){if(typeof N.then=="function")return P(ne(N),ee,ge,Ce,Fe);throw ee=String(N),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return me}function H(N,ee,ge){if(N==null)return N;var Ce=[],Fe=0;return P(N,Ce,"","",function(ie){return ee.call(ge,ie,Fe++)}),Ce}function Y(N){if(N._status===-1){var ee=N._result;ee=ee(),ee.then(function(ge){(N._status===0||N._status===-1)&&(N._status=1,N._result=ge)},function(ge){(N._status===0||N._status===-1)&&(N._status=2,N._result=ge)}),N._status===-1&&(N._status=0,N._result=ee)}if(N._status===1)return N._result.default;throw N._result}var xe=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},ye={map:H,forEach:function(N,ee,ge){H(N,function(){ee.apply(this,arguments)},ge)},count:function(N){var ee=0;return H(N,function(){ee++}),ee},toArray:function(N){return H(N,function(ee){return ee})||[]},only:function(N){if(!B(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return St.Activity=g,St.Children=ye,St.Component=x,St.Fragment=i,St.Profiler=l,St.PureComponent=L,St.StrictMode=s,St.Suspense=m,St.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R,St.__COMPILER_RUNTIME={__proto__:null,c:function(N){return R.H.useMemoCache(N)}},St.cache=function(N){return function(){return N.apply(null,arguments)}},St.cacheSignal=function(){return null},St.cloneElement=function(N,ee,ge){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Ce=T({},N.props),Fe=N.key;if(ee!=null)for(ie in ee.key!==void 0&&(Fe=""+ee.key),ee)!k.call(ee,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&ee.ref===void 0||(Ce[ie]=ee[ie]);var ie=arguments.length-2;if(ie===1)Ce.children=ge;else if(1<ie){for(var me=Array(ie),Ne=0;Ne<ie;Ne++)me[Ne]=arguments[Ne+2];Ce.children=me}return A(N.type,Fe,Ce)},St.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},St.createElement=function(N,ee,ge){var Ce,Fe={},ie=null;if(ee!=null)for(Ce in ee.key!==void 0&&(ie=""+ee.key),ee)k.call(ee,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Fe[Ce]=ee[Ce]);var me=arguments.length-2;if(me===1)Fe.children=ge;else if(1<me){for(var Ne=Array(me),We=0;We<me;We++)Ne[We]=arguments[We+2];Fe.children=Ne}if(N&&N.defaultProps)for(Ce in me=N.defaultProps,me)Fe[Ce]===void 0&&(Fe[Ce]=me[Ce]);return A(N,ie,Fe)},St.createRef=function(){return{current:null}},St.forwardRef=function(N){return{$$typeof:d,render:N}},St.isValidElement=B,St.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:Y}},St.memo=function(N,ee){return{$$typeof:p,type:N,compare:ee===void 0?null:ee}},St.startTransition=function(N){var ee=R.T,ge={};R.T=ge;try{var Ce=N(),Fe=R.S;Fe!==null&&Fe(ge,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(I,xe)}catch(ie){xe(ie)}finally{ee!==null&&ge.types!==null&&(ee.types=ge.types),R.T=ee}},St.unstable_useCacheRefresh=function(){return R.H.useCacheRefresh()},St.use=function(N){return R.H.use(N)},St.useActionState=function(N,ee,ge){return R.H.useActionState(N,ee,ge)},St.useCallback=function(N,ee){return R.H.useCallback(N,ee)},St.useContext=function(N){return R.H.useContext(N)},St.useDebugValue=function(){},St.useDeferredValue=function(N,ee){return R.H.useDeferredValue(N,ee)},St.useEffect=function(N,ee){return R.H.useEffect(N,ee)},St.useEffectEvent=function(N){return R.H.useEffectEvent(N)},St.useId=function(){return R.H.useId()},St.useImperativeHandle=function(N,ee,ge){return R.H.useImperativeHandle(N,ee,ge)},St.useInsertionEffect=function(N,ee){return R.H.useInsertionEffect(N,ee)},St.useLayoutEffect=function(N,ee){return R.H.useLayoutEffect(N,ee)},St.useMemo=function(N,ee){return R.H.useMemo(N,ee)},St.useOptimistic=function(N,ee){return R.H.useOptimistic(N,ee)},St.useReducer=function(N,ee,ge){return R.H.useReducer(N,ee,ge)},St.useRef=function(N){return R.H.useRef(N)},St.useState=function(N){return R.H.useState(N)},St.useSyncExternalStore=function(N,ee,ge){return R.H.useSyncExternalStore(N,ee,ge)},St.useTransition=function(){return R.H.useTransition()},St.version="19.2.3",St}var Pv;function Cc(){return Pv||(Pv=1,Gd.exports=IM()),Gd.exports}var oe=Cc();const BM=PM(oe),HM=OM({__proto__:null,default:BM},[oe]);var Vd={exports:{}},$o={},kd={exports:{}},Xd={};var Fv;function GM(){return Fv||(Fv=1,(function(a){function e(P,H){var Y=P.length;P.push(H);e:for(;0<Y;){var xe=Y-1>>>1,ye=P[xe];if(0<l(ye,H))P[xe]=H,P[Y]=ye,Y=xe;else break e}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var H=P[0],Y=P.pop();if(Y!==H){P[0]=Y;e:for(var xe=0,ye=P.length,N=ye>>>1;xe<N;){var ee=2*(xe+1)-1,ge=P[ee],Ce=ee+1,Fe=P[Ce];if(0>l(ge,Y))Ce<ye&&0>l(Fe,ge)?(P[xe]=Fe,P[Ce]=Y,xe=Ce):(P[xe]=ge,P[ee]=Y,xe=ee);else if(Ce<ye&&0>l(Fe,Y))P[xe]=Fe,P[Ce]=Y,xe=Ce;else break e}}return H}function l(P,H){var Y=P.sortIndex-H.sortIndex;return Y!==0?Y:P.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var c=Date,d=c.now();a.unstable_now=function(){return c.now()-d}}var m=[],p=[],v=1,g=null,_=3,y=!1,E=!1,T=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function O(P){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=P)s(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function z(P){if(T=!1,O(P),!E)if(i(m)!==null)E=!0,I||(I=!0,J());else{var H=i(p);H!==null&&ne(z,H.startTime-P)}}var I=!1,R=-1,k=5,A=-1;function U(){return M?!0:!(a.unstable_now()-A<k)}function B(){if(M=!1,I){var P=a.unstable_now();A=P;var H=!0;try{e:{E=!1,T&&(T=!1,D(R),R=-1),y=!0;var Y=_;try{t:{for(O(P),g=i(m);g!==null&&!(g.expirationTime>P&&U());){var xe=g.callback;if(typeof xe=="function"){g.callback=null,_=g.priorityLevel;var ye=xe(g.expirationTime<=P);if(P=a.unstable_now(),typeof ye=="function"){g.callback=ye,O(P),H=!0;break t}g===i(m)&&s(m),O(P)}else s(m);g=i(m)}if(g!==null)H=!0;else{var N=i(p);N!==null&&ne(z,N.startTime-P),H=!1}}break e}finally{g=null,_=Y,y=!1}H=void 0}}finally{H?J():I=!1}}}var J;if(typeof L=="function")J=function(){L(B)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,fe=te.port2;te.port1.onmessage=B,J=function(){fe.postMessage(null)}}else J=function(){x(B,0)};function ne(P,H){R=x(function(){P(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(P){P.callback=null},a.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<P?Math.floor(1e3/P):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(P){switch(_){case 1:case 2:case 3:var H=3;break;default:H=_}var Y=_;_=H;try{return P()}finally{_=Y}},a.unstable_requestPaint=function(){M=!0},a.unstable_runWithPriority=function(P,H){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Y=_;_=P;try{return H()}finally{_=Y}},a.unstable_scheduleCallback=function(P,H,Y){var xe=a.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?xe+Y:xe):Y=xe,P){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=Y+ye,P={id:v++,callback:H,priorityLevel:P,startTime:Y,expirationTime:ye,sortIndex:-1},Y>xe?(P.sortIndex=Y,e(p,P),i(m)===null&&P===i(p)&&(T?(D(R),R=-1):T=!0,ne(z,Y-xe))):(P.sortIndex=ye,e(m,P),E||y||(E=!0,I||(I=!0,J()))),P},a.unstable_shouldYield=U,a.unstable_wrapCallback=function(P){var H=_;return function(){var Y=_;_=H;try{return P.apply(this,arguments)}finally{_=Y}}}})(Xd)),Xd}var zv;function VM(){return zv||(zv=1,kd.exports=GM()),kd.exports}var Wd={exports:{}},Kn={};var Iv;function kM(){if(Iv)return Kn;Iv=1;var a=Cc();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var c=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Kn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,v)},Kn.flushSync=function(m){var p=c.T,v=s.p;try{if(c.T=null,s.p=2,m)return m()}finally{c.T=p,s.p=v,s.d.f()}},Kn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Kn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Kn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:_,fetchPriority:y}):v==="script"&&s.d.X(m,{crossOrigin:g,integrity:_,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Kn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Kn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Kn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Kn.requestFormReset=function(m){s.d.r(m)},Kn.unstable_batchedUpdates=function(m,p){return m(p)},Kn.useFormState=function(m,p,v){return c.H.useFormState(m,p,v)},Kn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Kn.version="19.2.3",Kn}var Bv;function gx(){if(Bv)return Wd.exports;Bv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Wd.exports=kM(),Wd.exports}var Hv;function XM(){if(Hv)return $o;Hv=1;var a=VM(),e=Cc(),i=gx();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function c(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var r=t,o=n;;){var f=r.return;if(f===null)break;var h=f.alternate;if(h===null){if(o=f.return,o!==null){r=o;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===r)return m(f),t;if(h===o)return m(f),n;h=h.sibling}throw Error(s(188))}if(r.return!==o.return)r=f,o=h;else{for(var S=!1,w=f.child;w;){if(w===r){S=!0,r=f,o=h;break}if(w===o){S=!0,o=f,r=h;break}w=w.sibling}if(!S){for(w=h.child;w;){if(w===r){S=!0,r=h,o=f;break}if(w===o){S=!0,o=h,r=f;break}w=w.sibling}if(!S)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),L=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var te=Symbol.for("react.client.reference");function fe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===te?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case I:return"SuspenseList";case A:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case L:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case R:return n=t.displayName||null,n!==null?n:fe(t.type)||"Memo";case k:n=t._payload,t=t._init;try{return fe(t(n))}catch{}}return null}var ne=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},xe=[],ye=-1;function N(t){return{current:t}}function ee(t){0>ye||(t.current=xe[ye],xe[ye]=null,ye--)}function ge(t,n){ye++,xe[ye]=t.current,t.current=n}var Ce=N(null),Fe=N(null),ie=N(null),me=N(null);function Ne(t,n){switch(ge(ie,n),ge(Fe,t),ge(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?tv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=tv(n),t=nv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ee(Ce),ge(Ce,t)}function We(){ee(Ce),ee(Fe),ee(ie)}function Ve(t){t.memoizedState!==null&&ge(me,t);var n=Ce.current,r=nv(n,t.type);n!==r&&(ge(Fe,t),ge(Ce,r))}function yt(t){Fe.current===t&&(ee(Ce),ee(Fe)),me.current===t&&(ee(me),jo._currentValue=Y)}var _t,gt;function bt(t){if(_t===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);_t=n&&n[1]||"",gt=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_t+t+gt}var Ht=!1;function pt(t,n){if(!t||Ht)return"";Ht=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var be=function(){throw Error()};if(Object.defineProperty(be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(be,[])}catch(pe){var ue=pe}Reflect.construct(t,[],be)}else{try{be.call()}catch(pe){ue=pe}t.call(be.prototype)}}else{try{throw Error()}catch(pe){ue=pe}(be=t())&&typeof be.catch=="function"&&be.catch(function(){})}}catch(pe){if(pe&&ue&&typeof pe.stack=="string")return[pe.stack,ue.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],w=h[1];if(S&&w){var V=S.split(`
`),re=w.split(`
`);for(f=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;f<re.length&&!re[f].includes("DetermineComponentFrameRoot");)f++;if(o===V.length||f===re.length)for(o=V.length-1,f=re.length-1;1<=o&&0<=f&&V[o]!==re[f];)f--;for(;1<=o&&0<=f;o--,f--)if(V[o]!==re[f]){if(o!==1||f!==1)do if(o--,f--,0>f||V[o]!==re[f]){var ve=`
`+V[o].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=o&&0<=f);break}}}finally{Ht=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?bt(r):""}function mn(t,n){switch(t.tag){case 26:case 27:case 5:return bt(t.type);case 16:return bt("Lazy");case 13:return t.child!==n&&n!==null?bt("Suspense Fallback"):bt("Suspense");case 19:return bt("SuspenseList");case 0:case 15:return pt(t.type,!1);case 11:return pt(t.type.render,!1);case 1:return pt(t.type,!0);case 31:return bt("Activity");default:return""}}function X(t){try{var n="",r=null;do n+=mn(t,r),r=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var un=Object.prototype.hasOwnProperty,Ft=a.unstable_scheduleCallback,Wt=a.unstable_cancelCallback,st=a.unstable_shouldYield,F=a.unstable_requestPaint,b=a.unstable_now,j=a.unstable_getCurrentPriorityLevel,_e=a.unstable_ImmediatePriority,Te=a.unstable_UserBlockingPriority,he=a.unstable_NormalPriority,et=a.unstable_LowPriority,Ie=a.unstable_IdlePriority,rt=a.log,ht=a.unstable_setDisableYieldValue,De=null,we=null;function Ke(t){if(typeof rt=="function"&&ht(t),we&&typeof we.setStrictMode=="function")try{we.setStrictMode(De,t)}catch{}}var je=Math.clz32?Math.clz32:q,Be=Math.log,Et=Math.LN2;function q(t){return t>>>=0,t===0?32:31-(Be(t)/Et|0)|0}var He=256,Le=262144,qe=4194304;function Ae(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ee(t,n,r){var o=t.pendingLanes;if(o===0)return 0;var f=0,h=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~h,o!==0?f=Ae(o):(S&=w,S!==0?f=Ae(S):r||(r=w&~t,r!==0&&(f=Ae(r))))):(w=o&~h,w!==0?f=Ae(w):S!==0?f=Ae(S):r||(r=o&~t,r!==0&&(f=Ae(r)))),f===0?0:n!==0&&n!==f&&(n&h)===0&&(h=f&-f,r=n&-n,h>=r||h===32&&(r&4194048)!==0)?n:f}function Pe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function vt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kt(){var t=qe;return qe<<=1,(qe&62914560)===0&&(qe=4194304),t}function Dt(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function Ln(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function hi(t,n,r,o,f,h){var S=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var w=t.entanglements,V=t.expirationTimes,re=t.hiddenUpdates;for(r=S&~r;0<r;){var ve=31-je(r),be=1<<ve;w[ve]=0,V[ve]=-1;var ue=re[ve];if(ue!==null)for(re[ve]=null,ve=0;ve<ue.length;ve++){var pe=ue[ve];pe!==null&&(pe.lane&=-536870913)}r&=~be}o!==0&&rs(t,o,0),h!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=h&~(S&~n))}function rs(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-je(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|r&261930}function G(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var o=31-je(r),f=1<<o;f&n|t[o]&n&&(t[o]|=n),r&=~f}}function K(t,n){var r=n&-n;return r=(r&42)!==0?1:ce(r),(r&(t.suspendedLanes|n))!==0?0:r}function ce(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Re(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Oe(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:Tv(t.type))}function nt(t,n){var r=H.p;try{return H.p=t,n()}finally{H.p=r}}var Ye=Math.random().toString(36).slice(2),ke="__reactFiber$"+Ye,Qe="__reactProps$"+Ye,it="__reactContainer$"+Ye,ft="__reactEvents$"+Ye,ot="__reactListeners$"+Ye,Lt="__reactHandles$"+Ye,Ut="__reactResources$"+Ye,dn="__reactMarker$"+Ye;function gn(t){delete t[ke],delete t[Qe],delete t[ft],delete t[ot],delete t[Lt]}function vn(t){var n=t[ke];if(n)return n;for(var r=t.parentNode;r;){if(n=r[it]||r[ke]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=uv(t);t!==null;){if(r=t[ke])return r;t=uv(t)}return n}t=r,r=t.parentNode}return null}function Nt(t){if(t=t[ke]||t[it]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Tn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Zn(t){var n=t[Ut];return n||(n=t[Ut]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(t){t[dn]=!0}var Z=new Set,le={};function se(t,n){$(t,n),$(t+"Capture",n)}function $(t,n){for(le[t]=n,t=0;t<n.length;t++)Z.add(n[t])}var ze=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Je={},Ge={};function Ue(t){return un.call(Ge,t)?!0:un.call(Je,t)?!1:ze.test(t)?Ge[t]=!0:(Je[t]=!0,!1)}function Xe(t,n,r){if(Ue(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function ut(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function tt(t,n,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+o)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function cn(t,n,r){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,h=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(S){r=""+S,h.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function an(t){if(!t._valueTracker){var n=zt(t)?"checked":"value";t._valueTracker=cn(t,n,""+t[n])}}function Qt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return t&&(o=zt(t)?t.checked?"true":"false":t.value),t=o,t!==r?(n.setValue(t),!0):!1}function ct(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Zt=/[\n"\\]/g;function xt(t){return t.replace(Zt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Hn(t,n,r,o,f,h,S,w){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$e(n)):t.value!==""+$e(n)&&(t.value=""+$e(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?Gn(t,S,$e(n)):r!=null?Gn(t,S,$e(r)):o!=null&&t.removeAttribute("value"),f==null&&h!=null&&(t.defaultChecked=!!h),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+$e(w):t.removeAttribute("name")}function ha(t,n,r,o,f,h,S,w){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||r!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){an(t);return}r=r!=null?""+$e(r):"",n=n!=null?""+$e(n):r,w||n===t.value||(t.value=n),t.defaultValue=n}o=o??f,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),an(t)}function Gn(t,n,r){n==="number"&&ct(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Ti(t,n,r,o){if(t=t.options,n){n={};for(var f=0;f<r.length;f++)n["$"+r[f]]=!0;for(r=0;r<t.length;r++)f=n.hasOwnProperty("$"+t[r].value),t[r].selected!==f&&(t[r].selected=f),f&&o&&(t[r].defaultSelected=!0)}else{for(r=""+$e(r),n=null,f=0;f<t.length;f++){if(t[f].value===r){t[f].selected=!0,o&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function Jt(t,n,r){if(n!=null&&(n=""+$e(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+$e(r):""}function Vn(t,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(s(92));if(ne(o)){if(1<o.length)throw Error(s(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=$e(n),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o),an(t)}function Nn(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var kn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xn(t,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,r):typeof r!="number"||r===0||kn.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function ss(t,n,r){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var f in n)o=n[f],n.hasOwnProperty(f)&&r[f]!==o&&Xn(t,f,o)}else for(var h in n)n.hasOwnProperty(h)&&Xn(t,h,n[h])}function ki(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Uy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ol(t){return Uy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function pa(){}var Fc=null;function zc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var os=null,ls=null;function em(t){var n=Nt(t);if(n&&(t=n.stateNode)){var r=t[Qe]||null;e:switch(t=n.stateNode,n.type){case"input":if(Hn(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+xt(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==t&&o.form===t.form){var f=o[Qe]||null;if(!f)throw Error(s(90));Hn(o,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===t.form&&Qt(o)}break e;case"textarea":Jt(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&Ti(t,!!r.multiple,n,!1)}}}var Ic=!1;function tm(t,n,r){if(Ic)return t(n,r);Ic=!0;try{var o=t(n);return o}finally{if(Ic=!1,(os!==null||ls!==null)&&(Su(),os&&(n=os,t=ls,ls=os=null,em(n),t)))for(n=0;n<t.length;n++)em(t[n])}}function co(t,n){var r=t.stateNode;if(r===null)return null;var o=r[Qe]||null;if(o===null)return null;r=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(s(231,n,typeof r));return r}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=!1;if(ma)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){Bc=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{Bc=!1}var qa=null,Hc=null,Pl=null;function nm(){if(Pl)return Pl;var t,n=Hc,r=n.length,o,f="value"in qa?qa.value:qa.textContent,h=f.length;for(t=0;t<r&&n[t]===f[t];t++);var S=r-t;for(o=1;o<=S&&n[r-o]===f[h-o];o++);return Pl=f.slice(t,1<o?1-o:void 0)}function Fl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function zl(){return!0}function im(){return!1}function ai(t){function n(r,o,f,h,S){this._reactName=r,this._targetInst=f,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(r=t[w],this[w]=r?r(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?zl:im,this.isPropagationStopped=im,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),n}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=ai(Cr),ho=g({},Cr,{view:0,detail:0}),Ly=ai(ho),Gc,Vc,po,Bl=g({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(Gc=t.screenX-po.screenX,Vc=t.screenY-po.screenY):Vc=Gc=0,po=t),Gc)},movementY:function(t){return"movementY"in t?t.movementY:Vc}}),am=ai(Bl),Ny=g({},Bl,{dataTransfer:0}),Oy=ai(Ny),Py=g({},ho,{relatedTarget:0}),kc=ai(Py),Fy=g({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),zy=ai(Fy),Iy=g({},Cr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),By=ai(Iy),Hy=g({},Cr,{data:0}),rm=ai(Hy),Gy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ky={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xy(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=ky[t])?!!n[t]:!1}function Xc(){return Xy}var Wy=g({},ho,{key:function(t){if(t.key){var n=Gy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xc,charCode:function(t){return t.type==="keypress"?Fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qy=ai(Wy),Yy=g({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sm=ai(Yy),jy=g({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xc}),Zy=ai(jy),Ky=g({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qy=ai(Ky),Jy=g({},Bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$y=ai(Jy),eS=g({},Cr,{newState:0,oldState:0}),tS=ai(eS),nS=[9,13,27,32],Wc=ma&&"CompositionEvent"in window,mo=null;ma&&"documentMode"in document&&(mo=document.documentMode);var iS=ma&&"TextEvent"in window&&!mo,om=ma&&(!Wc||mo&&8<mo&&11>=mo),lm=" ",um=!1;function cm(t,n){switch(t){case"keyup":return nS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function aS(t,n){switch(t){case"compositionend":return fm(n);case"keypress":return n.which!==32?null:(um=!0,lm);case"textInput":return t=n.data,t===lm&&um?null:t;default:return null}}function rS(t,n){if(us)return t==="compositionend"||!Wc&&cm(t,n)?(t=nm(),Pl=Hc=qa=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return om&&n.locale!=="ko"?null:n.data;default:return null}}var sS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!sS[t.type]:n==="textarea"}function hm(t,n,r,o){os?ls?ls.push(o):ls=[o]:os=o,n=Cu(n,"onChange"),0<n.length&&(r=new Il("onChange","change",null,r,o),t.push({event:r,listeners:n}))}var go=null,vo=null;function oS(t){Z0(t,0)}function Hl(t){var n=Tn(t);if(Qt(n))return t}function pm(t,n){if(t==="change")return n}var mm=!1;if(ma){var qc;if(ma){var Yc="oninput"in document;if(!Yc){var gm=document.createElement("div");gm.setAttribute("oninput","return;"),Yc=typeof gm.oninput=="function"}qc=Yc}else qc=!1;mm=qc&&(!document.documentMode||9<document.documentMode)}function vm(){go&&(go.detachEvent("onpropertychange",_m),vo=go=null)}function _m(t){if(t.propertyName==="value"&&Hl(vo)){var n=[];hm(n,vo,t,zc(t)),tm(oS,n)}}function lS(t,n,r){t==="focusin"?(vm(),go=n,vo=r,go.attachEvent("onpropertychange",_m)):t==="focusout"&&vm()}function uS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(vo)}function cS(t,n){if(t==="click")return Hl(n)}function fS(t,n){if(t==="input"||t==="change")return Hl(n)}function dS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var pi=typeof Object.is=="function"?Object.is:dS;function _o(t,n){if(pi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var f=r[o];if(!un.call(n,f)||!pi(t[f],n[f]))return!1}return!0}function xm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ym(t,n){var r=xm(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=n&&o>=n)return{node:r,offset:n-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=xm(r)}}function Sm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Sm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Mm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ct(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=ct(t.document)}return n}function jc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var hS=ma&&"documentMode"in document&&11>=document.documentMode,cs=null,Zc=null,xo=null,Kc=!1;function Em(t,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Kc||cs==null||cs!==ct(o)||(o=cs,"selectionStart"in o&&jc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),xo&&_o(xo,o)||(xo=o,o=Cu(Zc,"onSelect"),0<o.length&&(n=new Il("onSelect","select",null,n,r),t.push({event:n,listeners:o}),n.target=cs)))}function wr(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var fs={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionrun:wr("Transition","TransitionRun"),transitionstart:wr("Transition","TransitionStart"),transitioncancel:wr("Transition","TransitionCancel"),transitionend:wr("Transition","TransitionEnd")},Qc={},bm={};ma&&(bm=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function Dr(t){if(Qc[t])return Qc[t];if(!fs[t])return t;var n=fs[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in bm)return Qc[t]=n[r];return t}var Tm=Dr("animationend"),Am=Dr("animationiteration"),Rm=Dr("animationstart"),pS=Dr("transitionrun"),mS=Dr("transitionstart"),gS=Dr("transitioncancel"),Cm=Dr("transitionend"),wm=new Map,Jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jc.push("scrollEnd");function Xi(t,n){wm.set(t,n),se(n,[t])}var Gl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ai=[],ds=0,$c=0;function Vl(){for(var t=ds,n=$c=ds=0;n<t;){var r=Ai[n];Ai[n++]=null;var o=Ai[n];Ai[n++]=null;var f=Ai[n];Ai[n++]=null;var h=Ai[n];if(Ai[n++]=null,o!==null&&f!==null){var S=o.pending;S===null?f.next=f:(f.next=S.next,S.next=f),o.pending=f}h!==0&&Dm(r,f,h)}}function kl(t,n,r,o){Ai[ds++]=t,Ai[ds++]=n,Ai[ds++]=r,Ai[ds++]=o,$c|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function ef(t,n,r,o){return kl(t,n,r,o),Xl(t)}function Ur(t,n){return kl(t,null,null,n),Xl(t)}function Dm(t,n,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var f=!1,h=t.return;h!==null;)h.childLanes|=r,o=h.alternate,o!==null&&(o.childLanes|=r),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(f=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,f&&n!==null&&(f=31-je(r),t=h.hiddenUpdates,o=t[f],o===null?t[f]=[n]:o.push(n),n.lane=r|536870912),h):null}function Xl(t){if(50<Go)throw Go=0,cd=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var hs={};function vS(t,n,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(t,n,r,o){return new vS(t,n,r,o)}function tf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ga(t,n){var r=t.alternate;return r===null?(r=mi(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Um(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Wl(t,n,r,o,f,h){var S=0;if(o=t,typeof t=="function")tf(t)&&(S=1);else if(typeof t=="string")S=MM(t,r,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case A:return t=mi(31,r,n,f),t.elementType=A,t.lanes=h,t;case T:return Lr(r.children,f,h,n);case M:S=8,f|=24;break;case x:return t=mi(12,r,n,f|2),t.elementType=x,t.lanes=h,t;case z:return t=mi(13,r,n,f),t.elementType=z,t.lanes=h,t;case I:return t=mi(19,r,n,f),t.elementType=I,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:S=10;break e;case D:S=9;break e;case O:S=11;break e;case R:S=14;break e;case k:S=16,o=null;break e}S=29,r=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=mi(S,r,n,f),n.elementType=t,n.type=o,n.lanes=h,n}function Lr(t,n,r,o){return t=mi(7,t,o,n),t.lanes=r,t}function nf(t,n,r){return t=mi(6,t,null,n),t.lanes=r,t}function Lm(t){var n=mi(18,null,null,0);return n.stateNode=t,n}function af(t,n,r){return n=mi(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Nm=new WeakMap;function Ri(t,n){if(typeof t=="object"&&t!==null){var r=Nm.get(t);return r!==void 0?r:(n={value:t,source:n,stack:X(n)},Nm.set(t,n),n)}return{value:t,source:n,stack:X(n)}}var ps=[],ms=0,ql=null,yo=0,Ci=[],wi=0,Ya=null,ea=1,ta="";function va(t,n){ps[ms++]=yo,ps[ms++]=ql,ql=t,yo=n}function Om(t,n,r){Ci[wi++]=ea,Ci[wi++]=ta,Ci[wi++]=Ya,Ya=t;var o=ea;t=ta;var f=32-je(o)-1;o&=~(1<<f),r+=1;var h=32-je(n)+f;if(30<h){var S=f-f%5;h=(o&(1<<S)-1).toString(32),o>>=S,f-=S,ea=1<<32-je(n)+f|r<<f|o,ta=h+t}else ea=1<<h|r<<f|o,ta=t}function rf(t){t.return!==null&&(va(t,1),Om(t,1,0))}function sf(t){for(;t===ql;)ql=ps[--ms],ps[ms]=null,yo=ps[--ms],ps[ms]=null;for(;t===Ya;)Ya=Ci[--wi],Ci[wi]=null,ta=Ci[--wi],Ci[wi]=null,ea=Ci[--wi],Ci[wi]=null}function Pm(t,n){Ci[wi++]=ea,Ci[wi++]=ta,Ci[wi++]=Ya,ea=n.id,ta=n.overflow,Ya=t}var Wn=null,hn=null,Gt=!1,ja=null,Di=!1,of=Error(s(519));function Za(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw So(Ri(n,t)),of}function Fm(t){var n=t.stateNode,r=t.type,o=t.memoizedProps;switch(n[ke]=t,n[Qe]=o,r){case"dialog":Pt("cancel",n),Pt("close",n);break;case"iframe":case"object":case"embed":Pt("load",n);break;case"video":case"audio":for(r=0;r<ko.length;r++)Pt(ko[r],n);break;case"source":Pt("error",n);break;case"img":case"image":case"link":Pt("error",n),Pt("load",n);break;case"details":Pt("toggle",n);break;case"input":Pt("invalid",n),ha(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Pt("invalid",n);break;case"textarea":Pt("invalid",n),Vn(n,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||$0(n.textContent,r)?(o.popover!=null&&(Pt("beforetoggle",n),Pt("toggle",n)),o.onScroll!=null&&Pt("scroll",n),o.onScrollEnd!=null&&Pt("scrollend",n),o.onClick!=null&&(n.onclick=pa),n=!0):n=!1,n||Za(t,!0)}function zm(t){for(Wn=t.return;Wn;)switch(Wn.tag){case 5:case 31:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:Wn=Wn.return}}function gs(t){if(t!==Wn)return!1;if(!Gt)return zm(t),Gt=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Td(t.type,t.memoizedProps)),r=!r),r&&hn&&Za(t),zm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));hn=lv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));hn=lv(t)}else n===27?(n=hn,ur(t.type)?(t=Dd,Dd=null,hn=t):hn=n):hn=Wn?Li(t.stateNode.nextSibling):null;return!0}function Nr(){hn=Wn=null,Gt=!1}function lf(){var t=ja;return t!==null&&(li===null?li=t:li.push.apply(li,t),ja=null),t}function So(t){ja===null?ja=[t]:ja.push(t)}var uf=N(null),Or=null,_a=null;function Ka(t,n,r){ge(uf,n._currentValue),n._currentValue=r}function xa(t){t._currentValue=uf.current,ee(uf)}function cf(t,n,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===r)break;t=t.return}}function ff(t,n,r,o){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var h=f.dependencies;if(h!==null){var S=f.child;h=h.firstContext;e:for(;h!==null;){var w=h;h=f;for(var V=0;V<n.length;V++)if(w.context===n[V]){h.lanes|=r,w=h.alternate,w!==null&&(w.lanes|=r),cf(h.return,r,t),o||(S=null);break e}h=w.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(s(341));S.lanes|=r,h=S.alternate,h!==null&&(h.lanes|=r),cf(S,r,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function vs(t,n,r,o){t=null;for(var f=n,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var w=f.type;pi(f.pendingProps.value,S.value)||(t!==null?t.push(w):t=[w])}}else if(f===me.current){if(S=f.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(jo):t=[jo])}f=f.return}t!==null&&ff(n,t,r,o),n.flags|=262144}function Yl(t){for(t=t.firstContext;t!==null;){if(!pi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Pr(t){Or=t,_a=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function qn(t){return Im(Or,t)}function jl(t,n){return Or===null&&Pr(t),Im(t,n)}function Im(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},_a===null){if(t===null)throw Error(s(308));_a=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else _a=_a.next=n;return r}var _S=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},xS=a.unstable_scheduleCallback,yS=a.unstable_NormalPriority,An={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function df(){return{controller:new _S,data:new Map,refCount:0}}function Mo(t){t.refCount--,t.refCount===0&&xS(yS,function(){t.controller.abort()})}var Eo=null,hf=0,_s=0,xs=null;function SS(t,n){if(Eo===null){var r=Eo=[];hf=0,_s=gd(),xs={status:"pending",value:void 0,then:function(o){r.push(o)}}}return hf++,n.then(Bm,Bm),n}function Bm(){if(--hf===0&&Eo!==null){xs!==null&&(xs.status="fulfilled");var t=Eo;Eo=null,_s=0,xs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function MS(t,n){var r=[],o={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var f=0;f<r.length;f++)(0,r[f])(n)},function(f){for(o.status="rejected",o.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),o}var Hm=P.S;P.S=function(t,n){E0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&SS(t,n),Hm!==null&&Hm(t,n)};var Fr=N(null);function pf(){var t=Fr.current;return t!==null?t:fn.pooledCache}function Zl(t,n){n===null?ge(Fr,Fr.current):ge(Fr,n.pool)}function Gm(){var t=pf();return t===null?null:{parent:An._currentValue,pool:t}}var ys=Error(s(460)),mf=Error(s(474)),Kl=Error(s(542)),Ql={then:function(){}};function Vm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function km(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(pa,pa),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Wm(t),t;default:if(typeof n.status=="string")n.then(pa,pa);else{if(t=fn,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=o}},function(o){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Wm(t),t}throw Ir=n,ys}}function zr(t){try{var n=t._init;return n(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Ir=r,ys):r}}var Ir=null;function Xm(){if(Ir===null)throw Error(s(459));var t=Ir;return Ir=null,t}function Wm(t){if(t===ys||t===Kl)throw Error(s(483))}var Ss=null,bo=0;function Jl(t){var n=bo;return bo+=1,Ss===null&&(Ss=[]),km(Ss,t,n)}function To(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function $l(t,n){throw n.$$typeof===_?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function qm(t){function n(Q,W){if(t){var ae=Q.deletions;ae===null?(Q.deletions=[W],Q.flags|=16):ae.push(W)}}function r(Q,W){if(!t)return null;for(;W!==null;)n(Q,W),W=W.sibling;return null}function o(Q){for(var W=new Map;Q!==null;)Q.key!==null?W.set(Q.key,Q):W.set(Q.index,Q),Q=Q.sibling;return W}function f(Q,W){return Q=ga(Q,W),Q.index=0,Q.sibling=null,Q}function h(Q,W,ae){return Q.index=ae,t?(ae=Q.alternate,ae!==null?(ae=ae.index,ae<W?(Q.flags|=67108866,W):ae):(Q.flags|=67108866,W)):(Q.flags|=1048576,W)}function S(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function w(Q,W,ae,Se){return W===null||W.tag!==6?(W=nf(ae,Q.mode,Se),W.return=Q,W):(W=f(W,ae),W.return=Q,W)}function V(Q,W,ae,Se){var dt=ae.type;return dt===T?ve(Q,W,ae.props.children,Se,ae.key):W!==null&&(W.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===k&&zr(dt)===W.type)?(W=f(W,ae.props),To(W,ae),W.return=Q,W):(W=Wl(ae.type,ae.key,ae.props,null,Q.mode,Se),To(W,ae),W.return=Q,W)}function re(Q,W,ae,Se){return W===null||W.tag!==4||W.stateNode.containerInfo!==ae.containerInfo||W.stateNode.implementation!==ae.implementation?(W=af(ae,Q.mode,Se),W.return=Q,W):(W=f(W,ae.children||[]),W.return=Q,W)}function ve(Q,W,ae,Se,dt){return W===null||W.tag!==7?(W=Lr(ae,Q.mode,Se,dt),W.return=Q,W):(W=f(W,ae),W.return=Q,W)}function be(Q,W,ae){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=nf(""+W,Q.mode,ae),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return ae=Wl(W.type,W.key,W.props,null,Q.mode,ae),To(ae,W),ae.return=Q,ae;case E:return W=af(W,Q.mode,ae),W.return=Q,W;case k:return W=zr(W),be(Q,W,ae)}if(ne(W)||J(W))return W=Lr(W,Q.mode,ae,null),W.return=Q,W;if(typeof W.then=="function")return be(Q,Jl(W),ae);if(W.$$typeof===L)return be(Q,jl(Q,W),ae);$l(Q,W)}return null}function ue(Q,W,ae,Se){var dt=W!==null?W.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return dt!==null?null:w(Q,W,""+ae,Se);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case y:return ae.key===dt?V(Q,W,ae,Se):null;case E:return ae.key===dt?re(Q,W,ae,Se):null;case k:return ae=zr(ae),ue(Q,W,ae,Se)}if(ne(ae)||J(ae))return dt!==null?null:ve(Q,W,ae,Se,null);if(typeof ae.then=="function")return ue(Q,W,Jl(ae),Se);if(ae.$$typeof===L)return ue(Q,W,jl(Q,ae),Se);$l(Q,ae)}return null}function pe(Q,W,ae,Se,dt){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return Q=Q.get(ae)||null,w(W,Q,""+Se,dt);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case y:return Q=Q.get(Se.key===null?ae:Se.key)||null,V(W,Q,Se,dt);case E:return Q=Q.get(Se.key===null?ae:Se.key)||null,re(W,Q,Se,dt);case k:return Se=zr(Se),pe(Q,W,ae,Se,dt)}if(ne(Se)||J(Se))return Q=Q.get(ae)||null,ve(W,Q,Se,dt,null);if(typeof Se.then=="function")return pe(Q,W,ae,Jl(Se),dt);if(Se.$$typeof===L)return pe(Q,W,ae,jl(W,Se),dt);$l(W,Se)}return null}function at(Q,W,ae,Se){for(var dt=null,qt=null,lt=W,At=W=0,Bt=null;lt!==null&&At<ae.length;At++){lt.index>At?(Bt=lt,lt=null):Bt=lt.sibling;var Yt=ue(Q,lt,ae[At],Se);if(Yt===null){lt===null&&(lt=Bt);break}t&&lt&&Yt.alternate===null&&n(Q,lt),W=h(Yt,W,At),qt===null?dt=Yt:qt.sibling=Yt,qt=Yt,lt=Bt}if(At===ae.length)return r(Q,lt),Gt&&va(Q,At),dt;if(lt===null){for(;At<ae.length;At++)lt=be(Q,ae[At],Se),lt!==null&&(W=h(lt,W,At),qt===null?dt=lt:qt.sibling=lt,qt=lt);return Gt&&va(Q,At),dt}for(lt=o(lt);At<ae.length;At++)Bt=pe(lt,Q,At,ae[At],Se),Bt!==null&&(t&&Bt.alternate!==null&&lt.delete(Bt.key===null?At:Bt.key),W=h(Bt,W,At),qt===null?dt=Bt:qt.sibling=Bt,qt=Bt);return t&&lt.forEach(function(pr){return n(Q,pr)}),Gt&&va(Q,At),dt}function mt(Q,W,ae,Se){if(ae==null)throw Error(s(151));for(var dt=null,qt=null,lt=W,At=W=0,Bt=null,Yt=ae.next();lt!==null&&!Yt.done;At++,Yt=ae.next()){lt.index>At?(Bt=lt,lt=null):Bt=lt.sibling;var pr=ue(Q,lt,Yt.value,Se);if(pr===null){lt===null&&(lt=Bt);break}t&&lt&&pr.alternate===null&&n(Q,lt),W=h(pr,W,At),qt===null?dt=pr:qt.sibling=pr,qt=pr,lt=Bt}if(Yt.done)return r(Q,lt),Gt&&va(Q,At),dt;if(lt===null){for(;!Yt.done;At++,Yt=ae.next())Yt=be(Q,Yt.value,Se),Yt!==null&&(W=h(Yt,W,At),qt===null?dt=Yt:qt.sibling=Yt,qt=Yt);return Gt&&va(Q,At),dt}for(lt=o(lt);!Yt.done;At++,Yt=ae.next())Yt=pe(lt,Q,At,Yt.value,Se),Yt!==null&&(t&&Yt.alternate!==null&&lt.delete(Yt.key===null?At:Yt.key),W=h(Yt,W,At),qt===null?dt=Yt:qt.sibling=Yt,qt=Yt);return t&&lt.forEach(function(NM){return n(Q,NM)}),Gt&&va(Q,At),dt}function on(Q,W,ae,Se){if(typeof ae=="object"&&ae!==null&&ae.type===T&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case y:e:{for(var dt=ae.key;W!==null;){if(W.key===dt){if(dt=ae.type,dt===T){if(W.tag===7){r(Q,W.sibling),Se=f(W,ae.props.children),Se.return=Q,Q=Se;break e}}else if(W.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===k&&zr(dt)===W.type){r(Q,W.sibling),Se=f(W,ae.props),To(Se,ae),Se.return=Q,Q=Se;break e}r(Q,W);break}else n(Q,W);W=W.sibling}ae.type===T?(Se=Lr(ae.props.children,Q.mode,Se,ae.key),Se.return=Q,Q=Se):(Se=Wl(ae.type,ae.key,ae.props,null,Q.mode,Se),To(Se,ae),Se.return=Q,Q=Se)}return S(Q);case E:e:{for(dt=ae.key;W!==null;){if(W.key===dt)if(W.tag===4&&W.stateNode.containerInfo===ae.containerInfo&&W.stateNode.implementation===ae.implementation){r(Q,W.sibling),Se=f(W,ae.children||[]),Se.return=Q,Q=Se;break e}else{r(Q,W);break}else n(Q,W);W=W.sibling}Se=af(ae,Q.mode,Se),Se.return=Q,Q=Se}return S(Q);case k:return ae=zr(ae),on(Q,W,ae,Se)}if(ne(ae))return at(Q,W,ae,Se);if(J(ae)){if(dt=J(ae),typeof dt!="function")throw Error(s(150));return ae=dt.call(ae),mt(Q,W,ae,Se)}if(typeof ae.then=="function")return on(Q,W,Jl(ae),Se);if(ae.$$typeof===L)return on(Q,W,jl(Q,ae),Se);$l(Q,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint"?(ae=""+ae,W!==null&&W.tag===6?(r(Q,W.sibling),Se=f(W,ae),Se.return=Q,Q=Se):(r(Q,W),Se=nf(ae,Q.mode,Se),Se.return=Q,Q=Se),S(Q)):r(Q,W)}return function(Q,W,ae,Se){try{bo=0;var dt=on(Q,W,ae,Se);return Ss=null,dt}catch(lt){if(lt===ys||lt===Kl)throw lt;var qt=mi(29,lt,null,Q.mode);return qt.lanes=Se,qt.return=Q,qt}}}var Br=qm(!0),Ym=qm(!1),Qa=!1;function gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ja(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function $a(t,n,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Kt&2)!==0){var f=o.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),o.pending=n,n=Xl(t),Dm(t,null,r),n}return kl(t,o,n,r),Xl(t)}function Ao(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,G(t,r)}}function _f(t,n){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var f=null,h=null;if(r=r.firstBaseUpdate,r!==null){do{var S={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};h===null?f=h=S:h=h.next=S,r=r.next}while(r!==null);h===null?f=h=n:h=h.next=n}else f=h=n;r={baseState:o.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var xf=!1;function Ro(){if(xf){var t=xs;if(t!==null)throw t}}function Co(t,n,r,o){xf=!1;var f=t.updateQueue;Qa=!1;var h=f.firstBaseUpdate,S=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var V=w,re=V.next;V.next=null,S===null?h=re:S.next=re,S=V;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,w=ve.lastBaseUpdate,w!==S&&(w===null?ve.firstBaseUpdate=re:w.next=re,ve.lastBaseUpdate=V))}if(h!==null){var be=f.baseState;S=0,ve=re=V=null,w=h;do{var ue=w.lane&-536870913,pe=ue!==w.lane;if(pe?(It&ue)===ue:(o&ue)===ue){ue!==0&&ue===_s&&(xf=!0),ve!==null&&(ve=ve.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var at=t,mt=w;ue=n;var on=r;switch(mt.tag){case 1:if(at=mt.payload,typeof at=="function"){be=at.call(on,be,ue);break e}be=at;break e;case 3:at.flags=at.flags&-65537|128;case 0:if(at=mt.payload,ue=typeof at=="function"?at.call(on,be,ue):at,ue==null)break e;be=g({},be,ue);break e;case 2:Qa=!0}}ue=w.callback,ue!==null&&(t.flags|=64,pe&&(t.flags|=8192),pe=f.callbacks,pe===null?f.callbacks=[ue]:pe.push(ue))}else pe={lane:ue,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ve===null?(re=ve=pe,V=be):ve=ve.next=pe,S|=ue;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;pe=w,w=pe.next,pe.next=null,f.lastBaseUpdate=pe,f.shared.pending=null}}while(!0);ve===null&&(V=be),f.baseState=V,f.firstBaseUpdate=re,f.lastBaseUpdate=ve,h===null&&(f.shared.lanes=0),ar|=S,t.lanes=S,t.memoizedState=be}}function jm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Zm(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)jm(r[t],n)}var Ms=N(null),eu=N(0);function Km(t,n){t=Ca,ge(eu,t),ge(Ms,n),Ca=t|n.baseLanes}function yf(){ge(eu,Ca),ge(Ms,Ms.current)}function Sf(){Ca=eu.current,ee(Ms),ee(eu)}var gi=N(null),Ui=null;function er(t){var n=t.alternate;ge(Sn,Sn.current&1),ge(gi,t),Ui===null&&(n===null||Ms.current!==null||n.memoizedState!==null)&&(Ui=t)}function Mf(t){ge(Sn,Sn.current),ge(gi,t),Ui===null&&(Ui=t)}function Qm(t){t.tag===22?(ge(Sn,Sn.current),ge(gi,t),Ui===null&&(Ui=t)):tr()}function tr(){ge(Sn,Sn.current),ge(gi,gi.current)}function vi(t){ee(gi),Ui===t&&(Ui=null),ee(Sn)}var Sn=N(0);function tu(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Cd(r)||wd(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ya=0,Tt=null,rn=null,Rn=null,nu=!1,Es=!1,Hr=!1,iu=0,wo=0,bs=null,ES=0;function xn(){throw Error(s(321))}function Ef(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!pi(t[r],n[r]))return!1;return!0}function bf(t,n,r,o,f,h){return ya=h,Tt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Og:Bf,Hr=!1,h=r(o,f),Hr=!1,Es&&(h=$m(n,r,o,f)),Jm(t),h}function Jm(t){P.H=Lo;var n=rn!==null&&rn.next!==null;if(ya=0,Rn=rn=Tt=null,nu=!1,wo=0,bs=null,n)throw Error(s(300));t===null||Cn||(t=t.dependencies,t!==null&&Yl(t)&&(Cn=!0))}function $m(t,n,r,o){Tt=t;var f=0;do{if(Es&&(bs=null),wo=0,Es=!1,25<=f)throw Error(s(301));if(f+=1,Rn=rn=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=Pg,h=n(r,o)}while(Es);return h}function bS(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?Do(n):n,t=t.useState()[0],(rn!==null?rn.memoizedState:null)!==t&&(Tt.flags|=1024),n}function Tf(){var t=iu!==0;return iu=0,t}function Af(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function Rf(t){if(nu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}nu=!1}ya=0,Rn=rn=Tt=null,Es=!1,wo=iu=0,bs=null}function ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rn===null?Tt.memoizedState=Rn=t:Rn=Rn.next=t,Rn}function Mn(){if(rn===null){var t=Tt.alternate;t=t!==null?t.memoizedState:null}else t=rn.next;var n=Rn===null?Tt.memoizedState:Rn.next;if(n!==null)Rn=n,rn=t;else{if(t===null)throw Tt.alternate===null?Error(s(467)):Error(s(310));rn=t,t={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},Rn===null?Tt.memoizedState=Rn=t:Rn=Rn.next=t}return Rn}function au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Do(t){var n=wo;return wo+=1,bs===null&&(bs=[]),t=km(bs,t,n),n=Tt,(Rn===null?n.memoizedState:Rn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Og:Bf),t}function ru(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Do(t);if(t.$$typeof===L)return qn(t)}throw Error(s(438,String(t)))}function Cf(t){var n=null,r=Tt.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=Tt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=au(),Tt.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),o=0;o<t;o++)r[o]=U;return n.index++,r}function Sa(t,n){return typeof n=="function"?n(t):n}function su(t){var n=Mn();return wf(n,rn,t)}function wf(t,n,r){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=r;var f=t.baseQueue,h=o.pending;if(h!==null){if(f!==null){var S=f.next;f.next=h.next,h.next=S}n.baseQueue=f=h,o.pending=null}if(h=t.baseState,f===null)t.memoizedState=h;else{n=f.next;var w=S=null,V=null,re=n,ve=!1;do{var be=re.lane&-536870913;if(be!==re.lane?(It&be)===be:(ya&be)===be){var ue=re.revertLane;if(ue===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),be===_s&&(ve=!0);else if((ya&ue)===ue){re=re.next,ue===_s&&(ve=!0);continue}else be={lane:0,revertLane:re.revertLane,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},V===null?(w=V=be,S=h):V=V.next=be,Tt.lanes|=ue,ar|=ue;be=re.action,Hr&&r(h,be),h=re.hasEagerState?re.eagerState:r(h,be)}else ue={lane:be,revertLane:re.revertLane,gesture:re.gesture,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},V===null?(w=V=ue,S=h):V=V.next=ue,Tt.lanes|=be,ar|=be;re=re.next}while(re!==null&&re!==n);if(V===null?S=h:V.next=w,!pi(h,t.memoizedState)&&(Cn=!0,ve&&(r=xs,r!==null)))throw r;t.memoizedState=h,t.baseState=S,t.baseQueue=V,o.lastRenderedState=h}return f===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Df(t){var n=Mn(),r=n.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=t;var o=r.dispatch,f=r.pending,h=n.memoizedState;if(f!==null){r.pending=null;var S=f=f.next;do h=t(h,S.action),S=S.next;while(S!==f);pi(h,n.memoizedState)||(Cn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),r.lastRenderedState=h}return[h,o]}function eg(t,n,r){var o=Tt,f=Mn(),h=Gt;if(h){if(r===void 0)throw Error(s(407));r=r()}else r=n();var S=!pi((rn||f).memoizedState,r);if(S&&(f.memoizedState=r,Cn=!0),f=f.queue,Nf(ig.bind(null,o,f,t),[t]),f.getSnapshot!==n||S||Rn!==null&&Rn.memoizedState.tag&1){if(o.flags|=2048,Ts(9,{destroy:void 0},ng.bind(null,o,f,r,n),null),fn===null)throw Error(s(349));h||(ya&127)!==0||tg(o,n,r)}return r}function tg(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=Tt.updateQueue,n===null?(n=au(),Tt.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function ng(t,n,r,o){n.value=r,n.getSnapshot=o,ag(n)&&rg(t)}function ig(t,n,r){return r(function(){ag(n)&&rg(t)})}function ag(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!pi(t,r)}catch{return!0}}function rg(t){var n=Ur(t,2);n!==null&&ui(n,t,2)}function Uf(t){var n=ti();if(typeof t=="function"){var r=t;if(t=r(),Hr){Ke(!0);try{r()}finally{Ke(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},n}function sg(t,n,r,o){return t.baseState=r,wf(t,rn,typeof o=="function"?o:Sa)}function TS(t,n,r,o,f){if(uu(t))throw Error(s(485));if(t=n.action,t!==null){var h={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};P.T!==null?r(!0):h.isTransition=!1,o(h),r=n.pending,r===null?(h.next=n.pending=h,og(n,h)):(h.next=r.next,n.pending=r.next=h)}}function og(t,n){var r=n.action,o=n.payload,f=t.state;if(n.isTransition){var h=P.T,S={};P.T=S;try{var w=r(f,o),V=P.S;V!==null&&V(S,w),lg(t,n,w)}catch(re){Lf(t,n,re)}finally{h!==null&&S.types!==null&&(h.types=S.types),P.T=h}}else try{h=r(f,o),lg(t,n,h)}catch(re){Lf(t,n,re)}}function lg(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){ug(t,n,o)},function(o){return Lf(t,n,o)}):ug(t,n,r)}function ug(t,n,r){n.status="fulfilled",n.value=r,cg(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,og(t,r)))}function Lf(t,n,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,cg(n),n=n.next;while(n!==o)}t.action=null}function cg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function fg(t,n){return n}function dg(t,n){if(Gt){var r=fn.formState;if(r!==null){e:{var o=Tt;if(Gt){if(hn){t:{for(var f=hn,h=Di;f.nodeType!==8;){if(!h){f=null;break t}if(f=Li(f.nextSibling),f===null){f=null;break t}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){hn=Li(f.nextSibling),o=f.data==="F!";break e}}Za(o)}o=!1}o&&(n=r[0])}}return r=ti(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fg,lastRenderedState:n},r.queue=o,r=Ug.bind(null,Tt,o),o.dispatch=r,o=Uf(!1),h=If.bind(null,Tt,!1,o.queue),o=ti(),f={state:n,dispatch:null,action:t,pending:null},o.queue=f,r=TS.bind(null,Tt,f,h,r),f.dispatch=r,o.memoizedState=t,[n,r,!1]}function hg(t){var n=Mn();return pg(n,rn,t)}function pg(t,n,r){if(n=wf(t,n,fg)[0],t=su(Sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Do(n)}catch(S){throw S===ys?Kl:S}else o=n;n=Mn();var f=n.queue,h=f.dispatch;return r!==n.memoizedState&&(Tt.flags|=2048,Ts(9,{destroy:void 0},AS.bind(null,f,r),null)),[o,h,t]}function AS(t,n){t.action=n}function mg(t){var n=Mn(),r=rn;if(r!==null)return pg(n,r,t);Mn(),n=n.memoizedState,r=Mn();var o=r.queue.dispatch;return r.memoizedState=t,[n,o,!1]}function Ts(t,n,r,o){return t={tag:t,create:r,deps:o,inst:n,next:null},n=Tt.updateQueue,n===null&&(n=au(),Tt.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,n.lastEffect=t),t}function gg(){return Mn().memoizedState}function ou(t,n,r,o){var f=ti();Tt.flags|=t,f.memoizedState=Ts(1|n,{destroy:void 0},r,o===void 0?null:o)}function lu(t,n,r,o){var f=Mn();o=o===void 0?null:o;var h=f.memoizedState.inst;rn!==null&&o!==null&&Ef(o,rn.memoizedState.deps)?f.memoizedState=Ts(n,h,r,o):(Tt.flags|=t,f.memoizedState=Ts(1|n,h,r,o))}function vg(t,n){ou(8390656,8,t,n)}function Nf(t,n){lu(2048,8,t,n)}function RS(t){Tt.flags|=4;var n=Tt.updateQueue;if(n===null)n=au(),Tt.updateQueue=n,n.events=[t];else{var r=n.events;r===null?n.events=[t]:r.push(t)}}function _g(t){var n=Mn().memoizedState;return RS({ref:n,nextImpl:t}),function(){if((Kt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function xg(t,n){return lu(4,2,t,n)}function yg(t,n){return lu(4,4,t,n)}function Sg(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Mg(t,n,r){r=r!=null?r.concat([t]):null,lu(4,4,Sg.bind(null,n,t),r)}function Of(){}function Eg(t,n){var r=Mn();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&Ef(n,o[1])?o[0]:(r.memoizedState=[t,n],t)}function bg(t,n){var r=Mn();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&Ef(n,o[1]))return o[0];if(o=t(),Hr){Ke(!0);try{t()}finally{Ke(!1)}}return r.memoizedState=[o,n],o}function Pf(t,n,r){return r===void 0||(ya&1073741824)!==0&&(It&261930)===0?t.memoizedState=n:(t.memoizedState=r,t=T0(),Tt.lanes|=t,ar|=t,r)}function Tg(t,n,r,o){return pi(r,n)?r:Ms.current!==null?(t=Pf(t,r,o),pi(t,n)||(Cn=!0),t):(ya&42)===0||(ya&1073741824)!==0&&(It&261930)===0?(Cn=!0,t.memoizedState=r):(t=T0(),Tt.lanes|=t,ar|=t,n)}function Ag(t,n,r,o,f){var h=H.p;H.p=h!==0&&8>h?h:8;var S=P.T,w={};P.T=w,If(t,!1,n,r);try{var V=f(),re=P.S;if(re!==null&&re(w,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var ve=MS(V,o);Uo(t,n,ve,yi(t))}else Uo(t,n,o,yi(t))}catch(be){Uo(t,n,{then:function(){},status:"rejected",reason:be},yi())}finally{H.p=h,S!==null&&w.types!==null&&(S.types=w.types),P.T=S}}function CS(){}function Ff(t,n,r,o){if(t.tag!==5)throw Error(s(476));var f=Rg(t).queue;Ag(t,f,n,Y,r===null?CS:function(){return Cg(t),r(o)})}function Rg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:Y},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Cg(t){var n=Rg(t);n.next===null&&(n=t.alternate.memoizedState),Uo(t,n.next.queue,{},yi())}function zf(){return qn(jo)}function wg(){return Mn().memoizedState}function Dg(){return Mn().memoizedState}function wS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=yi();t=Ja(r);var o=$a(n,t,r);o!==null&&(ui(o,n,r),Ao(o,n,r)),n={cache:df()},t.payload=n;return}n=n.return}}function DS(t,n,r){var o=yi();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},uu(t)?Lg(n,r):(r=ef(t,n,r,o),r!==null&&(ui(r,t,o),Ng(r,n,o)))}function Ug(t,n,r){var o=yi();Uo(t,n,r,o)}function Uo(t,n,r,o){var f={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(uu(t))Lg(n,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,w=h(S,r);if(f.hasEagerState=!0,f.eagerState=w,pi(w,S))return kl(t,n,f,0),fn===null&&Vl(),!1}catch{}if(r=ef(t,n,f,o),r!==null)return ui(r,t,o),Ng(r,n,o),!0}return!1}function If(t,n,r,o){if(o={lane:2,revertLane:gd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},uu(t)){if(n)throw Error(s(479))}else n=ef(t,r,o,2),n!==null&&ui(n,t,2)}function uu(t){var n=t.alternate;return t===Tt||n!==null&&n===Tt}function Lg(t,n){Es=nu=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function Ng(t,n,r){if((r&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,G(t,r)}}var Lo={readContext:qn,use:ru,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useLayoutEffect:xn,useInsertionEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useSyncExternalStore:xn,useId:xn,useHostTransitionStatus:xn,useFormState:xn,useActionState:xn,useOptimistic:xn,useMemoCache:xn,useCacheRefresh:xn};Lo.useEffectEvent=xn;var Og={readContext:qn,use:ru,useCallback:function(t,n){return ti().memoizedState=[t,n===void 0?null:n],t},useContext:qn,useEffect:vg,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,ou(4194308,4,Sg.bind(null,n,t),r)},useLayoutEffect:function(t,n){return ou(4194308,4,t,n)},useInsertionEffect:function(t,n){ou(4,2,t,n)},useMemo:function(t,n){var r=ti();n=n===void 0?null:n;var o=t();if(Hr){Ke(!0);try{t()}finally{Ke(!1)}}return r.memoizedState=[o,n],o},useReducer:function(t,n,r){var o=ti();if(r!==void 0){var f=r(n);if(Hr){Ke(!0);try{r(n)}finally{Ke(!1)}}}else f=n;return o.memoizedState=o.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},o.queue=t,t=t.dispatch=DS.bind(null,Tt,t),[o.memoizedState,t]},useRef:function(t){var n=ti();return t={current:t},n.memoizedState=t},useState:function(t){t=Uf(t);var n=t.queue,r=Ug.bind(null,Tt,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:Of,useDeferredValue:function(t,n){var r=ti();return Pf(r,t,n)},useTransition:function(){var t=Uf(!1);return t=Ag.bind(null,Tt,t.queue,!0,!1),ti().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var o=Tt,f=ti();if(Gt){if(r===void 0)throw Error(s(407));r=r()}else{if(r=n(),fn===null)throw Error(s(349));(It&127)!==0||tg(o,n,r)}f.memoizedState=r;var h={value:r,getSnapshot:n};return f.queue=h,vg(ig.bind(null,o,h,t),[t]),o.flags|=2048,Ts(9,{destroy:void 0},ng.bind(null,o,h,r,n),null),r},useId:function(){var t=ti(),n=fn.identifierPrefix;if(Gt){var r=ta,o=ea;r=(o&~(1<<32-je(o)-1)).toString(32)+r,n="_"+n+"R_"+r,r=iu++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=ES++,n="_"+n+"r_"+r.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:zf,useFormState:dg,useActionState:dg,useOptimistic:function(t){var n=ti();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=If.bind(null,Tt,!0,r),r.dispatch=n,[t,n]},useMemoCache:Cf,useCacheRefresh:function(){return ti().memoizedState=wS.bind(null,Tt)},useEffectEvent:function(t){var n=ti(),r={impl:t};return n.memoizedState=r,function(){if((Kt&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},Bf={readContext:qn,use:ru,useCallback:Eg,useContext:qn,useEffect:Nf,useImperativeHandle:Mg,useInsertionEffect:xg,useLayoutEffect:yg,useMemo:bg,useReducer:su,useRef:gg,useState:function(){return su(Sa)},useDebugValue:Of,useDeferredValue:function(t,n){var r=Mn();return Tg(r,rn.memoizedState,t,n)},useTransition:function(){var t=su(Sa)[0],n=Mn().memoizedState;return[typeof t=="boolean"?t:Do(t),n]},useSyncExternalStore:eg,useId:wg,useHostTransitionStatus:zf,useFormState:hg,useActionState:hg,useOptimistic:function(t,n){var r=Mn();return sg(r,rn,t,n)},useMemoCache:Cf,useCacheRefresh:Dg};Bf.useEffectEvent=_g;var Pg={readContext:qn,use:ru,useCallback:Eg,useContext:qn,useEffect:Nf,useImperativeHandle:Mg,useInsertionEffect:xg,useLayoutEffect:yg,useMemo:bg,useReducer:Df,useRef:gg,useState:function(){return Df(Sa)},useDebugValue:Of,useDeferredValue:function(t,n){var r=Mn();return rn===null?Pf(r,t,n):Tg(r,rn.memoizedState,t,n)},useTransition:function(){var t=Df(Sa)[0],n=Mn().memoizedState;return[typeof t=="boolean"?t:Do(t),n]},useSyncExternalStore:eg,useId:wg,useHostTransitionStatus:zf,useFormState:mg,useActionState:mg,useOptimistic:function(t,n){var r=Mn();return rn!==null?sg(r,rn,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Cf,useCacheRefresh:Dg};Pg.useEffectEvent=_g;function Hf(t,n,r,o){n=t.memoizedState,r=r(o,n),r=r==null?n:g({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Gf={enqueueSetState:function(t,n,r){t=t._reactInternals;var o=yi(),f=Ja(o);f.payload=n,r!=null&&(f.callback=r),n=$a(t,f,o),n!==null&&(ui(n,t,o),Ao(n,t,o))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var o=yi(),f=Ja(o);f.tag=1,f.payload=n,r!=null&&(f.callback=r),n=$a(t,f,o),n!==null&&(ui(n,t,o),Ao(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=yi(),o=Ja(r);o.tag=2,n!=null&&(o.callback=n),n=$a(t,o,r),n!==null&&(ui(n,t,r),Ao(n,t,r))}};function Fg(t,n,r,o,f,h,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!_o(r,o)||!_o(f,h):!0}function zg(t,n,r,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==t&&Gf.enqueueReplaceState(n,n.state,null)}function Gr(t,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(t=t.defaultProps){r===n&&(r=g({},r));for(var f in t)r[f]===void 0&&(r[f]=t[f])}return r}function Ig(t){Gl(t)}function Bg(t){console.error(t)}function Hg(t){Gl(t)}function cu(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Gg(t,n,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Vf(t,n,r){return r=Ja(r),r.tag=3,r.payload={element:null},r.callback=function(){cu(t,n)},r}function Vg(t){return t=Ja(t),t.tag=3,t}function kg(t,n,r,o){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var h=o.value;t.payload=function(){return f(h)},t.callback=function(){Gg(n,r,o)}}var S=r.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){Gg(n,r,o),typeof f!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function US(t,n,r,o,f){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&vs(n,r,f,!0),r=gi.current,r!==null){switch(r.tag){case 31:case 13:return Ui===null?Mu():r.alternate===null&&yn===0&&(yn=3),r.flags&=-257,r.flags|=65536,r.lanes=f,o===Ql?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),hd(t,o,f)),!1;case 22:return r.flags|=65536,o===Ql?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),hd(t,o,f)),!1}throw Error(s(435,r.tag))}return hd(t,o,f),Mu(),!1}if(Gt)return n=gi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,o!==of&&(t=Error(s(422),{cause:o}),So(Ri(t,r)))):(o!==of&&(n=Error(s(423),{cause:o}),So(Ri(n,r))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,o=Ri(o,r),f=Vf(t.stateNode,o,f),_f(t,f),yn!==4&&(yn=2)),!1;var h=Error(s(520),{cause:o});if(h=Ri(h,r),Ho===null?Ho=[h]:Ho.push(h),yn!==4&&(yn=2),n===null)return!0;o=Ri(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=f&-f,r.lanes|=t,t=Vf(r.stateNode,o,t),_f(r,t),!1;case 1:if(n=r.type,h=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(rr===null||!rr.has(h))))return r.flags|=65536,f&=-f,r.lanes|=f,f=Vg(f),kg(f,t,r,o),_f(r,f),!1}r=r.return}while(r!==null);return!1}var kf=Error(s(461)),Cn=!1;function Yn(t,n,r,o){n.child=t===null?Ym(n,null,r,o):Br(n,t.child,r,o)}function Xg(t,n,r,o,f){r=r.render;var h=n.ref;if("ref"in o){var S={};for(var w in o)w!=="ref"&&(S[w]=o[w])}else S=o;return Pr(n),o=bf(t,n,r,S,h,f),w=Tf(),t!==null&&!Cn?(Af(t,n,f),Ma(t,n,f)):(Gt&&w&&rf(n),n.flags|=1,Yn(t,n,o,f),n.child)}function Wg(t,n,r,o,f){if(t===null){var h=r.type;return typeof h=="function"&&!tf(h)&&h.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=h,qg(t,n,h,o,f)):(t=Wl(r.type,null,o,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Qf(t,f)){var S=h.memoizedProps;if(r=r.compare,r=r!==null?r:_o,r(S,o)&&t.ref===n.ref)return Ma(t,n,f)}return n.flags|=1,t=ga(h,o),t.ref=n.ref,t.return=n,n.child=t}function qg(t,n,r,o,f){if(t!==null){var h=t.memoizedProps;if(_o(h,o)&&t.ref===n.ref)if(Cn=!1,n.pendingProps=o=h,Qf(t,f))(t.flags&131072)!==0&&(Cn=!0);else return n.lanes=t.lanes,Ma(t,n,f)}return Xf(t,n,r,o,f)}function Yg(t,n,r,o){var f=o.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|r:r,t!==null){for(o=n.child=t.child,f=0;o!==null;)f=f|o.lanes|o.childLanes,o=o.sibling;o=f&~h}else o=0,n.child=null;return jg(t,n,h,r,o)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Zl(n,h!==null?h.cachePool:null),h!==null?Km(n,h):yf(),Qm(n);else return o=n.lanes=536870912,jg(t,n,h!==null?h.baseLanes|r:r,r,o)}else h!==null?(Zl(n,h.cachePool),Km(n,h),tr(),n.memoizedState=null):(t!==null&&Zl(n,null),yf(),tr());return Yn(t,n,f,r),n.child}function No(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function jg(t,n,r,o,f){var h=pf();return h=h===null?null:{parent:An._currentValue,pool:h},n.memoizedState={baseLanes:r,cachePool:h},t!==null&&Zl(n,null),yf(),Qm(n),t!==null&&vs(t,n,o,!0),n.childLanes=f,null}function fu(t,n){return n=hu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Zg(t,n,r){return Br(n,t.child,null,r),t=fu(n,n.pendingProps),t.flags|=2,vi(n),n.memoizedState=null,t}function LS(t,n,r){var o=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Gt){if(o.mode==="hidden")return t=fu(n,o),n.lanes=536870912,No(null,t);if(Mf(n),(t=hn)?(t=ov(t,Di),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ya!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},r=Lm(t),r.return=n,n.child=r,Wn=n,hn=null)):t=null,t===null)throw Za(n);return n.lanes=536870912,null}return fu(n,o)}var h=t.memoizedState;if(h!==null){var S=h.dehydrated;if(Mf(n),f)if(n.flags&256)n.flags&=-257,n=Zg(t,n,r);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(Cn||vs(t,n,r,!1),f=(r&t.childLanes)!==0,Cn||f){if(o=fn,o!==null&&(S=K(o,r),S!==0&&S!==h.retryLane))throw h.retryLane=S,Ur(t,S),ui(o,t,S),kf;Mu(),n=Zg(t,n,r)}else t=h.treeContext,hn=Li(S.nextSibling),Wn=n,Gt=!0,ja=null,Di=!1,t!==null&&Pm(n,t),n=fu(n,o),n.flags|=4096;return n}return t=ga(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function du(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function Xf(t,n,r,o,f){return Pr(n),r=bf(t,n,r,o,void 0,f),o=Tf(),t!==null&&!Cn?(Af(t,n,f),Ma(t,n,f)):(Gt&&o&&rf(n),n.flags|=1,Yn(t,n,r,f),n.child)}function Kg(t,n,r,o,f,h){return Pr(n),n.updateQueue=null,r=$m(n,o,r,f),Jm(t),o=Tf(),t!==null&&!Cn?(Af(t,n,h),Ma(t,n,h)):(Gt&&o&&rf(n),n.flags|=1,Yn(t,n,r,h),n.child)}function Qg(t,n,r,o,f){if(Pr(n),n.stateNode===null){var h=hs,S=r.contextType;typeof S=="object"&&S!==null&&(h=qn(S)),h=new r(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Gf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},gf(n),S=r.contextType,h.context=typeof S=="object"&&S!==null?qn(S):hs,h.state=n.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(Hf(n,r,S,o),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&Gf.enqueueReplaceState(h,h.state,null),Co(n,o,h,f),Ro(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var w=n.memoizedProps,V=Gr(r,w);h.props=V;var re=h.context,ve=r.contextType;S=hs,typeof ve=="object"&&ve!==null&&(S=qn(ve));var be=r.getDerivedStateFromProps;ve=typeof be=="function"||typeof h.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,ve||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w||re!==S)&&zg(n,h,o,S),Qa=!1;var ue=n.memoizedState;h.state=ue,Co(n,o,h,f),Ro(),re=n.memoizedState,w||ue!==re||Qa?(typeof be=="function"&&(Hf(n,r,be,o),re=n.memoizedState),(V=Qa||Fg(n,r,V,o,ue,re,S))?(ve||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=re),h.props=o,h.state=re,h.context=S,o=V):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,vf(t,n),S=n.memoizedProps,ve=Gr(r,S),h.props=ve,be=n.pendingProps,ue=h.context,re=r.contextType,V=hs,typeof re=="object"&&re!==null&&(V=qn(re)),w=r.getDerivedStateFromProps,(re=typeof w=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==be||ue!==V)&&zg(n,h,o,V),Qa=!1,ue=n.memoizedState,h.state=ue,Co(n,o,h,f),Ro();var pe=n.memoizedState;S!==be||ue!==pe||Qa||t!==null&&t.dependencies!==null&&Yl(t.dependencies)?(typeof w=="function"&&(Hf(n,r,w,o),pe=n.memoizedState),(ve=Qa||Fg(n,r,ve,o,ue,pe,V)||t!==null&&t.dependencies!==null&&Yl(t.dependencies))?(re||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,pe,V),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,pe,V)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=pe),h.props=o,h.state=pe,h.context=V,o=ve):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,du(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=Br(n,t.child,null,f),n.child=Br(n,null,r,f)):Yn(t,n,r,f),n.memoizedState=h.state,t=n.child):t=Ma(t,n,f),t}function Jg(t,n,r,o){return Nr(),n.flags|=256,Yn(t,n,r,o),n.child}var Wf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qf(t){return{baseLanes:t,cachePool:Gm()}}function Yf(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=xi),t}function $g(t,n,r){var o=n.pendingProps,f=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=t!==null&&t.memoizedState===null?!1:(Sn.current&2)!==0),S&&(f=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Gt){if(f?er(n):tr(),(t=hn)?(t=ov(t,Di),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ya!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},r=Lm(t),r.return=n,n.child=r,Wn=n,hn=null)):t=null,t===null)throw Za(n);return wd(t)?n.lanes=32:n.lanes=536870912,null}var w=o.children;return o=o.fallback,f?(tr(),f=n.mode,w=hu({mode:"hidden",children:w},f),o=Lr(o,f,r,null),w.return=n,o.return=n,w.sibling=o,n.child=w,o=n.child,o.memoizedState=qf(r),o.childLanes=Yf(t,S,r),n.memoizedState=Wf,No(null,o)):(er(n),jf(n,w))}var V=t.memoizedState;if(V!==null&&(w=V.dehydrated,w!==null)){if(h)n.flags&256?(er(n),n.flags&=-257,n=Zf(t,n,r)):n.memoizedState!==null?(tr(),n.child=t.child,n.flags|=128,n=null):(tr(),w=o.fallback,f=n.mode,o=hu({mode:"visible",children:o.children},f),w=Lr(w,f,r,null),w.flags|=2,o.return=n,w.return=n,o.sibling=w,n.child=o,Br(n,t.child,null,r),o=n.child,o.memoizedState=qf(r),o.childLanes=Yf(t,S,r),n.memoizedState=Wf,n=No(null,o));else if(er(n),wd(w)){if(S=w.nextSibling&&w.nextSibling.dataset,S)var re=S.dgst;S=re,o=Error(s(419)),o.stack="",o.digest=S,So({value:o,source:null,stack:null}),n=Zf(t,n,r)}else if(Cn||vs(t,n,r,!1),S=(r&t.childLanes)!==0,Cn||S){if(S=fn,S!==null&&(o=K(S,r),o!==0&&o!==V.retryLane))throw V.retryLane=o,Ur(t,o),ui(S,t,o),kf;Cd(w)||Mu(),n=Zf(t,n,r)}else Cd(w)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,hn=Li(w.nextSibling),Wn=n,Gt=!0,ja=null,Di=!1,t!==null&&Pm(n,t),n=jf(n,o.children),n.flags|=4096);return n}return f?(tr(),w=o.fallback,f=n.mode,V=t.child,re=V.sibling,o=ga(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,re!==null?w=ga(re,w):(w=Lr(w,f,r,null),w.flags|=2),w.return=n,o.return=n,o.sibling=w,n.child=o,No(null,o),o=n.child,w=t.child.memoizedState,w===null?w=qf(r):(f=w.cachePool,f!==null?(V=An._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=Gm(),w={baseLanes:w.baseLanes|r,cachePool:f}),o.memoizedState=w,o.childLanes=Yf(t,S,r),n.memoizedState=Wf,No(t.child,o)):(er(n),r=t.child,t=r.sibling,r=ga(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=r,n.memoizedState=null,r)}function jf(t,n){return n=hu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function hu(t,n){return t=mi(22,t,null,n),t.lanes=0,t}function Zf(t,n,r){return Br(n,t.child,null,r),t=jf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function e0(t,n,r){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),cf(t.return,n,r)}function Kf(t,n,r,o,f,h){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:f,treeForkCount:h}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=r,S.tailMode=f,S.treeForkCount=h)}function t0(t,n,r){var o=n.pendingProps,f=o.revealOrder,h=o.tail;o=o.children;var S=Sn.current,w=(S&2)!==0;if(w?(S=S&1|2,n.flags|=128):S&=1,ge(Sn,S),Yn(t,n,o,r),o=Gt?yo:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&e0(t,r,n);else if(t.tag===19)e0(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(r=n.child,f=null;r!==null;)t=r.alternate,t!==null&&tu(t)===null&&(f=r),r=r.sibling;r=f,r===null?(f=n.child,n.child=null):(f=r.sibling,r.sibling=null),Kf(n,!1,f,r,h,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&tu(t)===null){n.child=f;break}t=f.sibling,f.sibling=r,r=f,f=t}Kf(n,!0,r,null,h,o);break;case"together":Kf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ma(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),ar|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(vs(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,r=ga(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=ga(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function Qf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Yl(t)))}function NS(t,n,r){switch(n.tag){case 3:Ne(n,n.stateNode.containerInfo),Ka(n,An,t.memoizedState.cache),Nr();break;case 27:case 5:Ve(n);break;case 4:Ne(n,n.stateNode.containerInfo);break;case 10:Ka(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Mf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(er(n),n.flags|=128,null):(r&n.child.childLanes)!==0?$g(t,n,r):(er(n),t=Ma(t,n,r),t!==null?t.sibling:null);er(n);break;case 19:var f=(t.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(vs(t,n,r,!1),o=(r&n.childLanes)!==0),f){if(o)return t0(t,n,r);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ge(Sn,Sn.current),o)break;return null;case 22:return n.lanes=0,Yg(t,n,r,n.pendingProps);case 24:Ka(n,An,t.memoizedState.cache)}return Ma(t,n,r)}function n0(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)Cn=!0;else{if(!Qf(t,r)&&(n.flags&128)===0)return Cn=!1,NS(t,n,r);Cn=(t.flags&131072)!==0}else Cn=!1,Gt&&(n.flags&1048576)!==0&&Om(n,yo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=zr(n.elementType),n.type=t,typeof t=="function")tf(t)?(o=Gr(t,o),n.tag=1,n=Qg(null,n,t,o,r)):(n.tag=0,n=Xf(null,n,t,o,r));else{if(t!=null){var f=t.$$typeof;if(f===O){n.tag=11,n=Xg(null,n,t,o,r);break e}else if(f===R){n.tag=14,n=Wg(null,n,t,o,r);break e}}throw n=fe(t)||t,Error(s(306,n,""))}}return n;case 0:return Xf(t,n,n.type,n.pendingProps,r);case 1:return o=n.type,f=Gr(o,n.pendingProps),Qg(t,n,o,f,r);case 3:e:{if(Ne(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;f=h.element,vf(t,n),Co(n,o,null,r);var S=n.memoizedState;if(o=S.cache,Ka(n,An,o),o!==h.cache&&ff(n,[An],r,!0),Ro(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Jg(t,n,o,r);break e}else if(o!==f){f=Ri(Error(s(424)),n),So(f),n=Jg(t,n,o,r);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,hn=Li(t.firstChild),Wn=n,Gt=!0,ja=null,Di=!0,r=Ym(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Nr(),o===f){n=Ma(t,n,r);break e}Yn(t,n,o,r)}n=n.child}return n;case 26:return du(t,n),t===null?(r=hv(n.type,null,n.pendingProps,null))?n.memoizedState=r:Gt||(r=n.type,t=n.pendingProps,o=wu(ie.current).createElement(r),o[ke]=n,o[Qe]=t,jn(o,r,t),C(o),n.stateNode=o):n.memoizedState=hv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ve(n),t===null&&Gt&&(o=n.stateNode=cv(n.type,n.pendingProps,ie.current),Wn=n,Di=!0,f=hn,ur(n.type)?(Dd=f,hn=Li(o.firstChild)):hn=f),Yn(t,n,n.pendingProps.children,r),du(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Gt&&((f=o=hn)&&(o=uM(o,n.type,n.pendingProps,Di),o!==null?(n.stateNode=o,Wn=n,hn=Li(o.firstChild),Di=!1,f=!0):f=!1),f||Za(n)),Ve(n),f=n.type,h=n.pendingProps,S=t!==null?t.memoizedProps:null,o=h.children,Td(f,h)?o=null:S!==null&&Td(f,S)&&(n.flags|=32),n.memoizedState!==null&&(f=bf(t,n,bS,null,null,r),jo._currentValue=f),du(t,n),Yn(t,n,o,r),n.child;case 6:return t===null&&Gt&&((t=r=hn)&&(r=cM(r,n.pendingProps,Di),r!==null?(n.stateNode=r,Wn=n,hn=null,t=!0):t=!1),t||Za(n)),null;case 13:return $g(t,n,r);case 4:return Ne(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Br(n,null,o,r):Yn(t,n,o,r),n.child;case 11:return Xg(t,n,n.type,n.pendingProps,r);case 7:return Yn(t,n,n.pendingProps,r),n.child;case 8:return Yn(t,n,n.pendingProps.children,r),n.child;case 12:return Yn(t,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,Ka(n,n.type,o.value),Yn(t,n,o.children,r),n.child;case 9:return f=n.type._context,o=n.pendingProps.children,Pr(n),f=qn(f),o=o(f),n.flags|=1,Yn(t,n,o,r),n.child;case 14:return Wg(t,n,n.type,n.pendingProps,r);case 15:return qg(t,n,n.type,n.pendingProps,r);case 19:return t0(t,n,r);case 31:return LS(t,n,r);case 22:return Yg(t,n,r,n.pendingProps);case 24:return Pr(n),o=qn(An),t===null?(f=pf(),f===null&&(f=fn,h=df(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=r),f=h),n.memoizedState={parent:o,cache:f},gf(n),Ka(n,An,f)):((t.lanes&r)!==0&&(vf(t,n),Co(n,null,null,r),Ro()),f=t.memoizedState,h=n.memoizedState,f.parent!==o?(f={parent:o,cache:o},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),Ka(n,An,o)):(o=h.cache,Ka(n,An,o),o!==f.cache&&ff(n,[An],r,!0))),Yn(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ea(t){t.flags|=4}function Jf(t,n,r,o,f){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(w0())t.flags|=8192;else throw Ir=Ql,mf}else t.flags&=-16777217}function i0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!_v(n))if(w0())t.flags|=8192;else throw Ir=Ql,mf}function pu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?kt():536870912,t.lanes|=n,ws|=n)}function Oo(t,n){if(!Gt)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function pn(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(n)for(var f=t.child;f!==null;)r|=f.lanes|f.childLanes,o|=f.subtreeFlags&65011712,o|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)r|=f.lanes|f.childLanes,o|=f.subtreeFlags,o|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=o,t.childLanes=r,n}function OS(t,n,r){var o=n.pendingProps;switch(sf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(n),null;case 1:return pn(n),null;case 3:return r=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),xa(An),We(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(gs(n)?Ea(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,lf())),pn(n),null;case 26:var f=n.type,h=n.memoizedState;return t===null?(Ea(n),h!==null?(pn(n),i0(n,h)):(pn(n),Jf(n,f,null,o,r))):h?h!==t.memoizedState?(Ea(n),pn(n),i0(n,h)):(pn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Ea(n),pn(n),Jf(n,f,t,o,r)),null;case 27:if(yt(n),r=ie.current,f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ea(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return pn(n),null}t=Ce.current,gs(n)?Fm(n):(t=cv(f,o,r),n.stateNode=t,Ea(n))}return pn(n),null;case 5:if(yt(n),f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ea(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return pn(n),null}if(h=Ce.current,gs(n))Fm(n);else{var S=wu(ie.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?S.createElement(f,{is:o.is}):S.createElement(f)}}h[ke]=n,h[Qe]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=h;e:switch(jn(h,f,o),f){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Ea(n)}}return pn(n),Jf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,r),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Ea(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ie.current,gs(n)){if(t=n.stateNode,r=n.memoizedProps,o=null,f=Wn,f!==null)switch(f.tag){case 27:case 5:o=f.memoizedProps}t[ke]=n,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||$0(t.nodeValue,r)),t||Za(n,!0)}else t=wu(t).createTextNode(o),t[ke]=n,n.stateNode=t}return pn(n),null;case 31:if(r=n.memoizedState,t===null||t.memoizedState!==null){if(o=gs(n),r!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[ke]=n}else Nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;pn(n),t=!1}else r=lf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return n.flags&256?(vi(n),n):(vi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return pn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=gs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!f)throw Error(s(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[ke]=n}else Nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;pn(n),f=!1}else f=lf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(vi(n),n):(vi(n),null)}return vi(n),(n.flags&128)!==0?(n.lanes=r,n):(r=o!==null,t=t!==null&&t.memoizedState!==null,r&&(o=n.child,f=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(f=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==f&&(o.flags|=2048)),r!==t&&r&&(n.child.flags|=8192),pu(n,n.updateQueue),pn(n),null);case 4:return We(),t===null&&yd(n.stateNode.containerInfo),pn(n),null;case 10:return xa(n.type),pn(n),null;case 19:if(ee(Sn),o=n.memoizedState,o===null)return pn(n),null;if(f=(n.flags&128)!==0,h=o.rendering,h===null)if(f)Oo(o,!1);else{if(yn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=tu(t),h!==null){for(n.flags|=128,Oo(o,!1),t=h.updateQueue,n.updateQueue=t,pu(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)Um(r,t),r=r.sibling;return ge(Sn,Sn.current&1|2),Gt&&va(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&b()>xu&&(n.flags|=128,f=!0,Oo(o,!1),n.lanes=4194304)}else{if(!f)if(t=tu(h),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,pu(n,t),Oo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Gt)return pn(n),null}else 2*b()-o.renderingStartTime>xu&&r!==536870912&&(n.flags|=128,f=!0,Oo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(t=o.last,t!==null?t.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=b(),t.sibling=null,r=Sn.current,ge(Sn,f?r&1|2:r&1),Gt&&va(n,o.treeForkCount),t):(pn(n),null);case 22:case 23:return vi(n),Sf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(pn(n),n.subtreeFlags&6&&(n.flags|=8192)):pn(n),r=n.updateQueue,r!==null&&pu(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),t!==null&&ee(Fr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),xa(An),pn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function PS(t,n){switch(sf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return xa(An),We(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return yt(n),null;case 31:if(n.memoizedState!==null){if(vi(n),n.alternate===null)throw Error(s(340));Nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(vi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ee(Sn),null;case 4:return We(),null;case 10:return xa(n.type),null;case 22:case 23:return vi(n),Sf(),t!==null&&ee(Fr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return xa(An),null;case 25:return null;default:return null}}function a0(t,n){switch(sf(n),n.tag){case 3:xa(An),We();break;case 26:case 27:case 5:yt(n);break;case 4:We();break;case 31:n.memoizedState!==null&&vi(n);break;case 13:vi(n);break;case 19:ee(Sn);break;case 10:xa(n.type);break;case 22:case 23:vi(n),Sf(),t!==null&&ee(Fr);break;case 24:xa(An)}}function Po(t,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var f=o.next;r=f;do{if((r.tag&t)===t){o=void 0;var h=r.create,S=r.inst;o=h(),S.destroy=o}r=r.next}while(r!==f)}}catch(w){en(n,n.return,w)}}function nr(t,n,r){try{var o=n.updateQueue,f=o!==null?o.lastEffect:null;if(f!==null){var h=f.next;o=h;do{if((o.tag&t)===t){var S=o.inst,w=S.destroy;if(w!==void 0){S.destroy=void 0,f=n;var V=r,re=w;try{re()}catch(ve){en(f,V,ve)}}}o=o.next}while(o!==h)}}catch(ve){en(n,n.return,ve)}}function r0(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{Zm(n,r)}catch(o){en(t,t.return,o)}}}function s0(t,n,r){r.props=Gr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){en(t,n,o)}}function Fo(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(f){en(t,n,f)}}function na(t,n){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(f){en(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){en(t,n,f)}else r.current=null}function o0(t){var n=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(f){en(t,t.return,f)}}function $f(t,n,r){try{var o=t.stateNode;iM(o,t.type,r,n),o[Qe]=n}catch(f){en(t,t.return,f)}}function l0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ur(t.type)||t.tag===4}function ed(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||l0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ur(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function td(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=pa));else if(o!==4&&(o===27&&ur(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(td(t,n,r),t=t.sibling;t!==null;)td(t,n,r),t=t.sibling}function mu(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(o!==4&&(o===27&&ur(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(mu(t,n,r),t=t.sibling;t!==null;)mu(t,n,r),t=t.sibling}function u0(t){var n=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);jn(n,o,r),n[ke]=t,n[Qe]=r}catch(h){en(t,t.return,h)}}var ba=!1,wn=!1,nd=!1,c0=typeof WeakSet=="function"?WeakSet:Set,In=null;function FS(t,n){if(t=t.containerInfo,Ed=Fu,t=Mm(t),jc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var f=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{r.nodeType,h.nodeType}catch{r=null;break e}var S=0,w=-1,V=-1,re=0,ve=0,be=t,ue=null;t:for(;;){for(var pe;be!==r||f!==0&&be.nodeType!==3||(w=S+f),be!==h||o!==0&&be.nodeType!==3||(V=S+o),be.nodeType===3&&(S+=be.nodeValue.length),(pe=be.firstChild)!==null;)ue=be,be=pe;for(;;){if(be===t)break t;if(ue===r&&++re===f&&(w=S),ue===h&&++ve===o&&(V=S),(pe=be.nextSibling)!==null)break;be=ue,ue=be.parentNode}be=pe}r=w===-1||V===-1?null:{start:w,end:V}}else r=null}r=r||{start:0,end:0}}else r=null;for(bd={focusedElem:t,selectionRange:r},Fu=!1,In=n;In!==null;)if(n=In,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,In=t;else for(;In!==null;){switch(n=In,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)f=t[r],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,r=n,f=h.memoizedProps,h=h.memoizedState,o=r.stateNode;try{var at=Gr(r.type,f);t=o.getSnapshotBeforeUpdate(at,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(mt){en(r,r.return,mt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)Rd(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Rd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,In=t;break}In=n.return}}function f0(t,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Aa(t,r),o&4&&Po(5,r);break;case 1:if(Aa(t,r),o&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(S){en(r,r.return,S)}else{var f=Gr(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){en(r,r.return,S)}}o&64&&r0(r),o&512&&Fo(r,r.return);break;case 3:if(Aa(t,r),o&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{Zm(t,n)}catch(S){en(r,r.return,S)}}break;case 27:n===null&&o&4&&u0(r);case 26:case 5:Aa(t,r),n===null&&o&4&&o0(r),o&512&&Fo(r,r.return);break;case 12:Aa(t,r);break;case 31:Aa(t,r),o&4&&p0(t,r);break;case 13:Aa(t,r),o&4&&m0(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=WS.bind(null,r),fM(t,r))));break;case 22:if(o=r.memoizedState!==null||ba,!o){n=n!==null&&n.memoizedState!==null||wn,f=ba;var h=wn;ba=o,(wn=n)&&!h?Ra(t,r,(r.subtreeFlags&8772)!==0):Aa(t,r),ba=f,wn=h}break;case 30:break;default:Aa(t,r)}}function d0(t){var n=t.alternate;n!==null&&(t.alternate=null,d0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&gn(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var _n=null,ri=!1;function Ta(t,n,r){for(r=r.child;r!==null;)h0(t,n,r),r=r.sibling}function h0(t,n,r){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(De,r)}catch{}switch(r.tag){case 26:wn||na(r,n),Ta(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:wn||na(r,n);var o=_n,f=ri;ur(r.type)&&(_n=r.stateNode,ri=!1),Ta(t,n,r),Wo(r.stateNode),_n=o,ri=f;break;case 5:wn||na(r,n);case 6:if(o=_n,f=ri,_n=null,Ta(t,n,r),_n=o,ri=f,_n!==null)if(ri)try{(_n.nodeType===9?_n.body:_n.nodeName==="HTML"?_n.ownerDocument.body:_n).removeChild(r.stateNode)}catch(h){en(r,n,h)}else try{_n.removeChild(r.stateNode)}catch(h){en(r,n,h)}break;case 18:_n!==null&&(ri?(t=_n,rv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),zs(t)):rv(_n,r.stateNode));break;case 4:o=_n,f=ri,_n=r.stateNode.containerInfo,ri=!0,Ta(t,n,r),_n=o,ri=f;break;case 0:case 11:case 14:case 15:nr(2,r,n),wn||nr(4,r,n),Ta(t,n,r);break;case 1:wn||(na(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&s0(r,n,o)),Ta(t,n,r);break;case 21:Ta(t,n,r);break;case 22:wn=(o=wn)||r.memoizedState!==null,Ta(t,n,r),wn=o;break;default:Ta(t,n,r)}}function p0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{zs(t)}catch(r){en(n,n.return,r)}}}function m0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{zs(t)}catch(r){en(n,n.return,r)}}function zS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new c0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new c0),n;default:throw Error(s(435,t.tag))}}function gu(t,n){var r=zS(t);n.forEach(function(o){if(!r.has(o)){r.add(o);var f=qS.bind(null,t,o);o.then(f,f)}})}function si(t,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var f=r[o],h=t,S=n,w=S;e:for(;w!==null;){switch(w.tag){case 27:if(ur(w.type)){_n=w.stateNode,ri=!1;break e}break;case 5:_n=w.stateNode,ri=!1;break e;case 3:case 4:_n=w.stateNode.containerInfo,ri=!0;break e}w=w.return}if(_n===null)throw Error(s(160));h0(h,S,f),_n=null,ri=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)g0(n,t),n=n.sibling}var Wi=null;function g0(t,n){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:si(n,t),oi(t),o&4&&(nr(3,t,t.return),Po(3,t),nr(5,t,t.return));break;case 1:si(n,t),oi(t),o&512&&(wn||r===null||na(r,r.return)),o&64&&ba&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var f=Wi;if(si(n,t),oi(t),o&512&&(wn||r===null||na(r,r.return)),o&4){var h=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,f=f.ownerDocument||f;t:switch(o){case"title":h=f.getElementsByTagName("title")[0],(!h||h[dn]||h[ke]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(o),f.head.insertBefore(h,f.querySelector("head > title"))),jn(h,o,r),h[ke]=t,C(h),o=h;break e;case"link":var S=gv("link","href",f).get(o+(r.href||""));if(S){for(var w=0;w<S.length;w++)if(h=S[w],h.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&h.getAttribute("rel")===(r.rel==null?null:r.rel)&&h.getAttribute("title")===(r.title==null?null:r.title)&&h.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){S.splice(w,1);break t}}h=f.createElement(o),jn(h,o,r),f.head.appendChild(h);break;case"meta":if(S=gv("meta","content",f).get(o+(r.content||""))){for(w=0;w<S.length;w++)if(h=S[w],h.getAttribute("content")===(r.content==null?null:""+r.content)&&h.getAttribute("name")===(r.name==null?null:r.name)&&h.getAttribute("property")===(r.property==null?null:r.property)&&h.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&h.getAttribute("charset")===(r.charSet==null?null:r.charSet)){S.splice(w,1);break t}}h=f.createElement(o),jn(h,o,r),f.head.appendChild(h);break;default:throw Error(s(468,o))}h[ke]=t,C(h),o=h}t.stateNode=o}else vv(f,t.type,t.stateNode);else t.stateNode=mv(f,o,t.memoizedProps);else h!==o?(h===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):h.count--,o===null?vv(f,t.type,t.stateNode):mv(f,o,t.memoizedProps)):o===null&&t.stateNode!==null&&$f(t,t.memoizedProps,r.memoizedProps)}break;case 27:si(n,t),oi(t),o&512&&(wn||r===null||na(r,r.return)),r!==null&&o&4&&$f(t,t.memoizedProps,r.memoizedProps);break;case 5:if(si(n,t),oi(t),o&512&&(wn||r===null||na(r,r.return)),t.flags&32){f=t.stateNode;try{Nn(f,"")}catch(at){en(t,t.return,at)}}o&4&&t.stateNode!=null&&(f=t.memoizedProps,$f(t,f,r!==null?r.memoizedProps:f)),o&1024&&(nd=!0);break;case 6:if(si(n,t),oi(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(at){en(t,t.return,at)}}break;case 3:if(Lu=null,f=Wi,Wi=Du(n.containerInfo),si(n,t),Wi=f,oi(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{zs(n.containerInfo)}catch(at){en(t,t.return,at)}nd&&(nd=!1,v0(t));break;case 4:o=Wi,Wi=Du(t.stateNode.containerInfo),si(n,t),oi(t),Wi=o;break;case 12:si(n,t),oi(t);break;case 31:si(n,t),oi(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,gu(t,o)));break;case 13:si(n,t),oi(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(_u=b()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,gu(t,o)));break;case 22:f=t.memoizedState!==null;var V=r!==null&&r.memoizedState!==null,re=ba,ve=wn;if(ba=re||f,wn=ve||V,si(n,t),wn=ve,ba=re,oi(t),o&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(r===null||V||ba||wn||Vr(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){V=r=n;try{if(h=V.stateNode,f)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{w=V.stateNode;var be=V.memoizedProps.style,ue=be!=null&&be.hasOwnProperty("display")?be.display:null;w.style.display=ue==null||typeof ue=="boolean"?"":(""+ue).trim()}}catch(at){en(V,V.return,at)}}}else if(n.tag===6){if(r===null){V=n;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(at){en(V,V.return,at)}}}else if(n.tag===18){if(r===null){V=n;try{var pe=V.stateNode;f?sv(pe,!0):sv(V.stateNode,!1)}catch(at){en(V,V.return,at)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,gu(t,r))));break;case 19:si(n,t),oi(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,gu(t,o)));break;case 30:break;case 21:break;default:si(n,t),oi(t)}}function oi(t){var n=t.flags;if(n&2){try{for(var r,o=t.return;o!==null;){if(l0(o)){r=o;break}o=o.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var f=r.stateNode,h=ed(t);mu(t,h,f);break;case 5:var S=r.stateNode;r.flags&32&&(Nn(S,""),r.flags&=-33);var w=ed(t);mu(t,w,S);break;case 3:case 4:var V=r.stateNode.containerInfo,re=ed(t);td(t,re,V);break;default:throw Error(s(161))}}catch(ve){en(t,t.return,ve)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function v0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;v0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Aa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)f0(t,n.alternate,n),n=n.sibling}function Vr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:nr(4,n,n.return),Vr(n);break;case 1:na(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&s0(n,n.return,r),Vr(n);break;case 27:Wo(n.stateNode);case 26:case 5:na(n,n.return),Vr(n);break;case 22:n.memoizedState===null&&Vr(n);break;case 30:Vr(n);break;default:Vr(n)}t=t.sibling}}function Ra(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,f=t,h=n,S=h.flags;switch(h.tag){case 0:case 11:case 15:Ra(f,h,r),Po(4,h);break;case 1:if(Ra(f,h,r),o=h,f=o.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(re){en(o,o.return,re)}if(o=h,f=o.updateQueue,f!==null){var w=o.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)jm(V[f],w)}catch(re){en(o,o.return,re)}}r&&S&64&&r0(h),Fo(h,h.return);break;case 27:u0(h);case 26:case 5:Ra(f,h,r),r&&o===null&&S&4&&o0(h),Fo(h,h.return);break;case 12:Ra(f,h,r);break;case 31:Ra(f,h,r),r&&S&4&&p0(f,h);break;case 13:Ra(f,h,r),r&&S&4&&m0(f,h);break;case 22:h.memoizedState===null&&Ra(f,h,r),Fo(h,h.return);break;case 30:break;default:Ra(f,h,r)}n=n.sibling}}function id(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&Mo(r))}function ad(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Mo(t))}function qi(t,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)_0(t,n,r,o),n=n.sibling}function _0(t,n,r,o){var f=n.flags;switch(n.tag){case 0:case 11:case 15:qi(t,n,r,o),f&2048&&Po(9,n);break;case 1:qi(t,n,r,o);break;case 3:qi(t,n,r,o),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Mo(t)));break;case 12:if(f&2048){qi(t,n,r,o),t=n.stateNode;try{var h=n.memoizedProps,S=h.id,w=h.onPostCommit;typeof w=="function"&&w(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){en(n,n.return,V)}}else qi(t,n,r,o);break;case 31:qi(t,n,r,o);break;case 13:qi(t,n,r,o);break;case 23:break;case 22:h=n.stateNode,S=n.alternate,n.memoizedState!==null?h._visibility&2?qi(t,n,r,o):zo(t,n):h._visibility&2?qi(t,n,r,o):(h._visibility|=2,As(t,n,r,o,(n.subtreeFlags&10256)!==0||!1)),f&2048&&id(S,n);break;case 24:qi(t,n,r,o),f&2048&&ad(n.alternate,n);break;default:qi(t,n,r,o)}}function As(t,n,r,o,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,S=n,w=r,V=o,re=S.flags;switch(S.tag){case 0:case 11:case 15:As(h,S,w,V,f),Po(8,S);break;case 23:break;case 22:var ve=S.stateNode;S.memoizedState!==null?ve._visibility&2?As(h,S,w,V,f):zo(h,S):(ve._visibility|=2,As(h,S,w,V,f)),f&&re&2048&&id(S.alternate,S);break;case 24:As(h,S,w,V,f),f&&re&2048&&ad(S.alternate,S);break;default:As(h,S,w,V,f)}n=n.sibling}}function zo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,o=n,f=o.flags;switch(o.tag){case 22:zo(r,o),f&2048&&id(o.alternate,o);break;case 24:zo(r,o),f&2048&&ad(o.alternate,o);break;default:zo(r,o)}n=n.sibling}}var Io=8192;function Rs(t,n,r){if(t.subtreeFlags&Io)for(t=t.child;t!==null;)x0(t,n,r),t=t.sibling}function x0(t,n,r){switch(t.tag){case 26:Rs(t,n,r),t.flags&Io&&t.memoizedState!==null&&EM(r,Wi,t.memoizedState,t.memoizedProps);break;case 5:Rs(t,n,r);break;case 3:case 4:var o=Wi;Wi=Du(t.stateNode.containerInfo),Rs(t,n,r),Wi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Io,Io=16777216,Rs(t,n,r),Io=o):Rs(t,n,r));break;default:Rs(t,n,r)}}function y0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Bo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];In=o,M0(o,t)}y0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)S0(t),t=t.sibling}function S0(t){switch(t.tag){case 0:case 11:case 15:Bo(t),t.flags&2048&&nr(9,t,t.return);break;case 3:Bo(t);break;case 12:Bo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,vu(t)):Bo(t);break;default:Bo(t)}}function vu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];In=o,M0(o,t)}y0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:nr(8,n,n.return),vu(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,vu(n));break;default:vu(n)}t=t.sibling}}function M0(t,n){for(;In!==null;){var r=In;switch(r.tag){case 0:case 11:case 15:nr(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Mo(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,In=o;else e:for(r=t;In!==null;){o=In;var f=o.sibling,h=o.return;if(d0(o),o===r){In=null;break e}if(f!==null){f.return=h,In=f;break e}In=h}}}var IS={getCacheForType:function(t){var n=qn(An),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r},cacheSignal:function(){return qn(An).controller.signal}},BS=typeof WeakMap=="function"?WeakMap:Map,Kt=0,fn=null,Ot=null,It=0,$t=0,_i=null,ir=!1,Cs=!1,rd=!1,Ca=0,yn=0,ar=0,kr=0,sd=0,xi=0,ws=0,Ho=null,li=null,od=!1,_u=0,E0=0,xu=1/0,yu=null,rr=null,On=0,sr=null,Ds=null,wa=0,ld=0,ud=null,b0=null,Go=0,cd=null;function yi(){return(Kt&2)!==0&&It!==0?It&-It:P.T!==null?gd():Oe()}function T0(){if(xi===0)if((It&536870912)===0||Gt){var t=Le;Le<<=1,(Le&3932160)===0&&(Le=262144),xi=t}else xi=536870912;return t=gi.current,t!==null&&(t.flags|=32),xi}function ui(t,n,r){(t===fn&&($t===2||$t===9)||t.cancelPendingCommit!==null)&&(Us(t,0),or(t,It,xi,!1)),Ln(t,r),((Kt&2)===0||t!==fn)&&(t===fn&&((Kt&2)===0&&(kr|=r),yn===4&&or(t,It,xi,!1)),ia(t))}function A0(t,n,r){if((Kt&6)!==0)throw Error(s(327));var o=!r&&(n&127)===0&&(n&t.expiredLanes)===0||Pe(t,n),f=o?VS(t,n):dd(t,n,!0),h=o;do{if(f===0){Cs&&!o&&or(t,n,0,!1);break}else{if(r=t.current.alternate,h&&!HS(r)){f=dd(t,n,!1),h=!1;continue}if(f===2){if(h=n,t.errorRecoveryDisabledLanes&h)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var w=t;f=Ho;var V=w.current.memoizedState.isDehydrated;if(V&&(Us(w,S).flags|=256),S=dd(w,S,!1),S!==2){if(rd&&!V){w.errorRecoveryDisabledLanes|=h,kr|=h,f=4;break e}h=li,li=f,h!==null&&(li===null?li=h:li.push.apply(li,h))}f=S}if(h=!1,f!==2)continue}}if(f===1){Us(t,0),or(t,n,0,!0);break}e:{switch(o=t,h=f,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:or(o,n,xi,!ir);break e;case 2:li=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(f=_u+300-b(),10<f)){if(or(o,n,xi,!ir),Ee(o,0,!0)!==0)break e;wa=n,o.timeoutHandle=iv(R0.bind(null,o,r,li,yu,od,n,xi,kr,ws,ir,h,"Throttled",-0,0),f);break e}R0(o,r,li,yu,od,n,xi,kr,ws,ir,h,null,-0,0)}}break}while(!0);ia(t)}function R0(t,n,r,o,f,h,S,w,V,re,ve,be,ue,pe){if(t.timeoutHandle=-1,be=n.subtreeFlags,be&8192||(be&16785408)===16785408){be={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pa},x0(n,h,be);var at=(h&62914560)===h?_u-b():(h&4194048)===h?E0-b():0;if(at=bM(be,at),at!==null){wa=h,t.cancelPendingCommit=at(P0.bind(null,t,n,h,r,o,f,S,w,V,ve,be,null,ue,pe)),or(t,h,S,!re);return}}P0(t,n,h,r,o,f,S,w,V)}function HS(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var f=r[o],h=f.getSnapshot;f=f.value;try{if(!pi(h(),f))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function or(t,n,r,o){n&=~sd,n&=~kr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var f=n;0<f;){var h=31-je(f),S=1<<h;o[h]=-1,f&=~S}r!==0&&rs(t,r,n)}function Su(){return(Kt&6)===0?(Vo(0),!1):!0}function fd(){if(Ot!==null){if($t===0)var t=Ot.return;else t=Ot,_a=Or=null,Rf(t),Ss=null,bo=0,t=Ot;for(;t!==null;)a0(t.alternate,t),t=t.return;Ot=null}}function Us(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,sM(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),wa=0,fd(),fn=t,Ot=r=ga(t.current,null),It=n,$t=0,_i=null,ir=!1,Cs=Pe(t,n),rd=!1,ws=xi=sd=kr=ar=yn=0,li=Ho=null,od=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var f=31-je(o),h=1<<f;n|=t[f],o&=~h}return Ca=n,Vl(),r}function C0(t,n){Tt=null,P.H=Lo,n===ys||n===Kl?(n=Xm(),$t=3):n===mf?(n=Xm(),$t=4):$t=n===kf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,_i=n,Ot===null&&(yn=1,cu(t,Ri(n,t.current)))}function w0(){var t=gi.current;return t===null?!0:(It&4194048)===It?Ui===null:(It&62914560)===It||(It&536870912)!==0?t===Ui:!1}function D0(){var t=P.H;return P.H=Lo,t===null?Lo:t}function U0(){var t=P.A;return P.A=IS,t}function Mu(){yn=4,ir||(It&4194048)!==It&&gi.current!==null||(Cs=!0),(ar&134217727)===0&&(kr&134217727)===0||fn===null||or(fn,It,xi,!1)}function dd(t,n,r){var o=Kt;Kt|=2;var f=D0(),h=U0();(fn!==t||It!==n)&&(yu=null,Us(t,n)),n=!1;var S=yn;e:do try{if($t!==0&&Ot!==null){var w=Ot,V=_i;switch($t){case 8:fd(),S=6;break e;case 3:case 2:case 9:case 6:gi.current===null&&(n=!0);var re=$t;if($t=0,_i=null,Ls(t,w,V,re),r&&Cs){S=0;break e}break;default:re=$t,$t=0,_i=null,Ls(t,w,V,re)}}GS(),S=yn;break}catch(ve){C0(t,ve)}while(!0);return n&&t.shellSuspendCounter++,_a=Or=null,Kt=o,P.H=f,P.A=h,Ot===null&&(fn=null,It=0,Vl()),S}function GS(){for(;Ot!==null;)L0(Ot)}function VS(t,n){var r=Kt;Kt|=2;var o=D0(),f=U0();fn!==t||It!==n?(yu=null,xu=b()+500,Us(t,n)):Cs=Pe(t,n);e:do try{if($t!==0&&Ot!==null){n=Ot;var h=_i;t:switch($t){case 1:$t=0,_i=null,Ls(t,n,h,1);break;case 2:case 9:if(Vm(h)){$t=0,_i=null,N0(n);break}n=function(){$t!==2&&$t!==9||fn!==t||($t=7),ia(t)},h.then(n,n);break e;case 3:$t=7;break e;case 4:$t=5;break e;case 7:Vm(h)?($t=0,_i=null,N0(n)):($t=0,_i=null,Ls(t,n,h,7));break;case 5:var S=null;switch(Ot.tag){case 26:S=Ot.memoizedState;case 5:case 27:var w=Ot;if(S?_v(S):w.stateNode.complete){$t=0,_i=null;var V=w.sibling;if(V!==null)Ot=V;else{var re=w.return;re!==null?(Ot=re,Eu(re)):Ot=null}break t}}$t=0,_i=null,Ls(t,n,h,5);break;case 6:$t=0,_i=null,Ls(t,n,h,6);break;case 8:fd(),yn=6;break e;default:throw Error(s(462))}}kS();break}catch(ve){C0(t,ve)}while(!0);return _a=Or=null,P.H=o,P.A=f,Kt=r,Ot!==null?0:(fn=null,It=0,Vl(),yn)}function kS(){for(;Ot!==null&&!st();)L0(Ot)}function L0(t){var n=n0(t.alternate,t,Ca);t.memoizedProps=t.pendingProps,n===null?Eu(t):Ot=n}function N0(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=Kg(r,n,n.pendingProps,n.type,void 0,It);break;case 11:n=Kg(r,n,n.pendingProps,n.type.render,n.ref,It);break;case 5:Rf(n);default:a0(r,n),n=Ot=Um(n,Ca),n=n0(r,n,Ca)}t.memoizedProps=t.pendingProps,n===null?Eu(t):Ot=n}function Ls(t,n,r,o){_a=Or=null,Rf(n),Ss=null,bo=0;var f=n.return;try{if(US(t,f,n,r,It)){yn=1,cu(t,Ri(r,t.current)),Ot=null;return}}catch(h){if(f!==null)throw Ot=f,h;yn=1,cu(t,Ri(r,t.current)),Ot=null;return}n.flags&32768?(Gt||o===1?t=!0:Cs||(It&536870912)!==0?t=!1:(ir=t=!0,(o===2||o===9||o===3||o===6)&&(o=gi.current,o!==null&&o.tag===13&&(o.flags|=16384))),O0(n,t)):Eu(n)}function Eu(t){var n=t;do{if((n.flags&32768)!==0){O0(n,ir);return}t=n.return;var r=OS(n.alternate,n,Ca);if(r!==null){Ot=r;return}if(n=n.sibling,n!==null){Ot=n;return}Ot=n=t}while(n!==null);yn===0&&(yn=5)}function O0(t,n){do{var r=PS(t.alternate,t);if(r!==null){r.flags&=32767,Ot=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){Ot=t;return}Ot=t=r}while(t!==null);yn=6,Ot=null}function P0(t,n,r,o,f,h,S,w,V){t.cancelPendingCommit=null;do bu();while(On!==0);if((Kt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=$c,hi(t,r,h,S,w,V),t===fn&&(Ot=fn=null,It=0),Ds=n,sr=t,wa=r,ld=h,ud=f,b0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,YS(he,function(){return H0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,f=H.p,H.p=2,S=Kt,Kt|=4;try{FS(t,n,r)}finally{Kt=S,H.p=f,P.T=o}}On=1,F0(),z0(),I0()}}function F0(){if(On===1){On=0;var t=sr,n=Ds,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=P.T,P.T=null;var o=H.p;H.p=2;var f=Kt;Kt|=4;try{g0(n,t);var h=bd,S=Mm(t.containerInfo),w=h.focusedElem,V=h.selectionRange;if(S!==w&&w&&w.ownerDocument&&Sm(w.ownerDocument.documentElement,w)){if(V!==null&&jc(w)){var re=V.start,ve=V.end;if(ve===void 0&&(ve=re),"selectionStart"in w)w.selectionStart=re,w.selectionEnd=Math.min(ve,w.value.length);else{var be=w.ownerDocument||document,ue=be&&be.defaultView||window;if(ue.getSelection){var pe=ue.getSelection(),at=w.textContent.length,mt=Math.min(V.start,at),on=V.end===void 0?mt:Math.min(V.end,at);!pe.extend&&mt>on&&(S=on,on=mt,mt=S);var Q=ym(w,mt),W=ym(w,on);if(Q&&W&&(pe.rangeCount!==1||pe.anchorNode!==Q.node||pe.anchorOffset!==Q.offset||pe.focusNode!==W.node||pe.focusOffset!==W.offset)){var ae=be.createRange();ae.setStart(Q.node,Q.offset),pe.removeAllRanges(),mt>on?(pe.addRange(ae),pe.extend(W.node,W.offset)):(ae.setEnd(W.node,W.offset),pe.addRange(ae))}}}}for(be=[],pe=w;pe=pe.parentNode;)pe.nodeType===1&&be.push({element:pe,left:pe.scrollLeft,top:pe.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<be.length;w++){var Se=be[w];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}Fu=!!Ed,bd=Ed=null}finally{Kt=f,H.p=o,P.T=r}}t.current=n,On=2}}function z0(){if(On===2){On=0;var t=sr,n=Ds,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=P.T,P.T=null;var o=H.p;H.p=2;var f=Kt;Kt|=4;try{f0(t,n.alternate,n)}finally{Kt=f,H.p=o,P.T=r}}On=3}}function I0(){if(On===4||On===3){On=0,F();var t=sr,n=Ds,r=wa,o=b0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?On=5:(On=0,Ds=sr=null,B0(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(rr=null),Re(r),n=n.stateNode,we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(De,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,f=H.p,H.p=2,P.T=null;try{for(var h=t.onRecoverableError,S=0;S<o.length;S++){var w=o[S];h(w.value,{componentStack:w.stack})}}finally{P.T=n,H.p=f}}(wa&3)!==0&&bu(),ia(t),f=t.pendingLanes,(r&261930)!==0&&(f&42)!==0?t===cd?Go++:(Go=0,cd=t):Go=0,Vo(0)}}function B0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Mo(n)))}function bu(){return F0(),z0(),I0(),H0()}function H0(){if(On!==5)return!1;var t=sr,n=ld;ld=0;var r=Re(wa),o=P.T,f=H.p;try{H.p=32>r?32:r,P.T=null,r=ud,ud=null;var h=sr,S=wa;if(On=0,Ds=sr=null,wa=0,(Kt&6)!==0)throw Error(s(331));var w=Kt;if(Kt|=4,S0(h.current),_0(h,h.current,S,r),Kt=w,Vo(0,!1),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(De,h)}catch{}return!0}finally{H.p=f,P.T=o,B0(t,n)}}function G0(t,n,r){n=Ri(r,n),n=Vf(t.stateNode,n,2),t=$a(t,n,2),t!==null&&(Ln(t,2),ia(t))}function en(t,n,r){if(t.tag===3)G0(t,t,r);else for(;n!==null;){if(n.tag===3){G0(n,t,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(rr===null||!rr.has(o))){t=Ri(r,t),r=Vg(2),o=$a(n,r,2),o!==null&&(kg(r,o,n,t),Ln(o,2),ia(o));break}}n=n.return}}function hd(t,n,r){var o=t.pingCache;if(o===null){o=t.pingCache=new BS;var f=new Set;o.set(n,f)}else f=o.get(n),f===void 0&&(f=new Set,o.set(n,f));f.has(r)||(rd=!0,f.add(r),t=XS.bind(null,t,n,r),n.then(t,t))}function XS(t,n,r){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,fn===t&&(It&r)===r&&(yn===4||yn===3&&(It&62914560)===It&&300>b()-_u?(Kt&2)===0&&Us(t,0):sd|=r,ws===It&&(ws=0)),ia(t)}function V0(t,n){n===0&&(n=kt()),t=Ur(t,n),t!==null&&(Ln(t,n),ia(t))}function WS(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),V0(t,r)}function qS(t,n){var r=0;switch(t.tag){case 31:case 13:var o=t.stateNode,f=t.memoizedState;f!==null&&(r=f.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),V0(t,r)}function YS(t,n){return Ft(t,n)}var Tu=null,Ns=null,pd=!1,Au=!1,md=!1,lr=0;function ia(t){t!==Ns&&t.next===null&&(Ns===null?Tu=Ns=t:Ns=Ns.next=t),Au=!0,pd||(pd=!0,ZS())}function Vo(t,n){if(!md&&Au){md=!0;do for(var r=!1,o=Tu;o!==null;){if(t!==0){var f=o.pendingLanes;if(f===0)var h=0;else{var S=o.suspendedLanes,w=o.pingedLanes;h=(1<<31-je(42|t)+1)-1,h&=f&~(S&~w),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(r=!0,q0(o,h))}else h=It,h=Ee(o,o===fn?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Pe(o,h)||(r=!0,q0(o,h));o=o.next}while(r);md=!1}}function jS(){k0()}function k0(){Au=pd=!1;var t=0;lr!==0&&rM()&&(t=lr);for(var n=b(),r=null,o=Tu;o!==null;){var f=o.next,h=X0(o,n);h===0?(o.next=null,r===null?Tu=f:r.next=f,f===null&&(Ns=r)):(r=o,(t!==0||(h&3)!==0)&&(Au=!0)),o=f}On!==0&&On!==5||Vo(t),lr!==0&&(lr=0)}function X0(t,n){for(var r=t.suspendedLanes,o=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var S=31-je(h),w=1<<S,V=f[S];V===-1?((w&r)===0||(w&o)!==0)&&(f[S]=vt(w,n)):V<=n&&(t.expiredLanes|=w),h&=~w}if(n=fn,r=It,r=Ee(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===n&&($t===2||$t===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Wt(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Pe(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(o!==null&&Wt(o),Re(r)){case 2:case 8:r=Te;break;case 32:r=he;break;case 268435456:r=Ie;break;default:r=he}return o=W0.bind(null,t),r=Ft(r,o),t.callbackPriority=n,t.callbackNode=r,n}return o!==null&&o!==null&&Wt(o),t.callbackPriority=2,t.callbackNode=null,2}function W0(t,n){if(On!==0&&On!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(bu()&&t.callbackNode!==r)return null;var o=It;return o=Ee(t,t===fn?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(A0(t,o,n),X0(t,b()),t.callbackNode!=null&&t.callbackNode===r?W0.bind(null,t):null)}function q0(t,n){if(bu())return null;A0(t,n,!0)}function ZS(){oM(function(){(Kt&6)!==0?Ft(_e,jS):k0()})}function gd(){if(lr===0){var t=_s;t===0&&(t=He,He<<=1,(He&261888)===0&&(He=256)),lr=t}return lr}function Y0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ol(""+t)}function j0(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function KS(t,n,r,o,f){if(n==="submit"&&r&&r.stateNode===f){var h=Y0((f[Qe]||null).action),S=o.submitter;S&&(n=(n=S[Qe]||null)?Y0(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var w=new Il("action","action",null,o,f);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(lr!==0){var V=S?j0(f,S):new FormData(f);Ff(r,{pending:!0,data:V,method:f.method,action:h},null,V)}}else typeof h=="function"&&(w.preventDefault(),V=S?j0(f,S):new FormData(f),Ff(r,{pending:!0,data:V,method:f.method,action:h},h,V))},currentTarget:f}]})}}for(var vd=0;vd<Jc.length;vd++){var _d=Jc[vd],QS=_d.toLowerCase(),JS=_d[0].toUpperCase()+_d.slice(1);Xi(QS,"on"+JS)}Xi(Tm,"onAnimationEnd"),Xi(Am,"onAnimationIteration"),Xi(Rm,"onAnimationStart"),Xi("dblclick","onDoubleClick"),Xi("focusin","onFocus"),Xi("focusout","onBlur"),Xi(pS,"onTransitionRun"),Xi(mS,"onTransitionStart"),Xi(gS,"onTransitionCancel"),Xi(Cm,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),se("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),se("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),se("onBeforeInput",["compositionend","keypress","textInput","paste"]),se("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$S=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ko));function Z0(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],f=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var w=o[S],V=w.instance,re=w.currentTarget;if(w=w.listener,V!==h&&f.isPropagationStopped())break e;h=w,f.currentTarget=re;try{h(f)}catch(ve){Gl(ve)}f.currentTarget=null,h=V}else for(S=0;S<o.length;S++){if(w=o[S],V=w.instance,re=w.currentTarget,w=w.listener,V!==h&&f.isPropagationStopped())break e;h=w,f.currentTarget=re;try{h(f)}catch(ve){Gl(ve)}f.currentTarget=null,h=V}}}}function Pt(t,n){var r=n[ft];r===void 0&&(r=n[ft]=new Set);var o=t+"__bubble";r.has(o)||(K0(n,t,2,!1),r.add(o))}function xd(t,n,r){var o=0;n&&(o|=4),K0(r,t,o,n)}var Ru="_reactListening"+Math.random().toString(36).slice(2);function yd(t){if(!t[Ru]){t[Ru]=!0,Z.forEach(function(r){r!=="selectionchange"&&($S.has(r)||xd(r,!1,t),xd(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ru]||(n[Ru]=!0,xd("selectionchange",!1,n))}}function K0(t,n,r,o){switch(Tv(n)){case 2:var f=RM;break;case 8:f=CM;break;default:f=Pd}r=f.bind(null,n,r,t),f=void 0,!Bc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),o?f!==void 0?t.addEventListener(n,r,{capture:!0,passive:f}):t.addEventListener(n,r,!0):f!==void 0?t.addEventListener(n,r,{passive:f}):t.addEventListener(n,r,!1)}function Sd(t,n,r,o,f){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var w=o.stateNode.containerInfo;if(w===f)break;if(S===4)for(S=o.return;S!==null;){var V=S.tag;if((V===3||V===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;w!==null;){if(S=vn(w),S===null)return;if(V=S.tag,V===5||V===6||V===26||V===27){o=h=S;continue e}w=w.parentNode}}o=o.return}tm(function(){var re=h,ve=zc(r),be=[];e:{var ue=wm.get(t);if(ue!==void 0){var pe=Il,at=t;switch(t){case"keypress":if(Fl(r)===0)break e;case"keydown":case"keyup":pe=qy;break;case"focusin":at="focus",pe=kc;break;case"focusout":at="blur",pe=kc;break;case"beforeblur":case"afterblur":pe=kc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=Oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=Zy;break;case Tm:case Am:case Rm:pe=zy;break;case Cm:pe=Qy;break;case"scroll":case"scrollend":pe=Ly;break;case"wheel":pe=$y;break;case"copy":case"cut":case"paste":pe=By;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=sm;break;case"toggle":case"beforetoggle":pe=tS}var mt=(n&4)!==0,on=!mt&&(t==="scroll"||t==="scrollend"),Q=mt?ue!==null?ue+"Capture":null:ue;mt=[];for(var W=re,ae;W!==null;){var Se=W;if(ae=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||ae===null||Q===null||(Se=co(W,Q),Se!=null&&mt.push(Xo(W,Se,ae))),on)break;W=W.return}0<mt.length&&(ue=new pe(ue,at,null,r,ve),be.push({event:ue,listeners:mt}))}}if((n&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",pe=t==="mouseout"||t==="pointerout",ue&&r!==Fc&&(at=r.relatedTarget||r.fromElement)&&(vn(at)||at[it]))break e;if((pe||ue)&&(ue=ve.window===ve?ve:(ue=ve.ownerDocument)?ue.defaultView||ue.parentWindow:window,pe?(at=r.relatedTarget||r.toElement,pe=re,at=at?vn(at):null,at!==null&&(on=u(at),mt=at.tag,at!==on||mt!==5&&mt!==27&&mt!==6)&&(at=null)):(pe=null,at=re),pe!==at)){if(mt=am,Se="onMouseLeave",Q="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(mt=sm,Se="onPointerLeave",Q="onPointerEnter",W="pointer"),on=pe==null?ue:Tn(pe),ae=at==null?ue:Tn(at),ue=new mt(Se,W+"leave",pe,r,ve),ue.target=on,ue.relatedTarget=ae,Se=null,vn(ve)===re&&(mt=new mt(Q,W+"enter",at,r,ve),mt.target=ae,mt.relatedTarget=on,Se=mt),on=Se,pe&&at)t:{for(mt=eM,Q=pe,W=at,ae=0,Se=Q;Se;Se=mt(Se))ae++;Se=0;for(var dt=W;dt;dt=mt(dt))Se++;for(;0<ae-Se;)Q=mt(Q),ae--;for(;0<Se-ae;)W=mt(W),Se--;for(;ae--;){if(Q===W||W!==null&&Q===W.alternate){mt=Q;break t}Q=mt(Q),W=mt(W)}mt=null}else mt=null;pe!==null&&Q0(be,ue,pe,mt,!1),at!==null&&on!==null&&Q0(be,on,at,mt,!0)}}e:{if(ue=re?Tn(re):window,pe=ue.nodeName&&ue.nodeName.toLowerCase(),pe==="select"||pe==="input"&&ue.type==="file")var qt=pm;else if(dm(ue))if(mm)qt=fS;else{qt=uS;var lt=lS}else pe=ue.nodeName,!pe||pe.toLowerCase()!=="input"||ue.type!=="checkbox"&&ue.type!=="radio"?re&&ki(re.elementType)&&(qt=pm):qt=cS;if(qt&&(qt=qt(t,re))){hm(be,qt,r,ve);break e}lt&&lt(t,ue,re),t==="focusout"&&re&&ue.type==="number"&&re.memoizedProps.value!=null&&Gn(ue,"number",ue.value)}switch(lt=re?Tn(re):window,t){case"focusin":(dm(lt)||lt.contentEditable==="true")&&(cs=lt,Zc=re,xo=null);break;case"focusout":xo=Zc=cs=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,Em(be,r,ve);break;case"selectionchange":if(hS)break;case"keydown":case"keyup":Em(be,r,ve)}var At;if(Wc)e:{switch(t){case"compositionstart":var Bt="onCompositionStart";break e;case"compositionend":Bt="onCompositionEnd";break e;case"compositionupdate":Bt="onCompositionUpdate";break e}Bt=void 0}else us?cm(t,r)&&(Bt="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(Bt="onCompositionStart");Bt&&(om&&r.locale!=="ko"&&(us||Bt!=="onCompositionStart"?Bt==="onCompositionEnd"&&us&&(At=nm()):(qa=ve,Hc="value"in qa?qa.value:qa.textContent,us=!0)),lt=Cu(re,Bt),0<lt.length&&(Bt=new rm(Bt,t,null,r,ve),be.push({event:Bt,listeners:lt}),At?Bt.data=At:(At=fm(r),At!==null&&(Bt.data=At)))),(At=iS?aS(t,r):rS(t,r))&&(Bt=Cu(re,"onBeforeInput"),0<Bt.length&&(lt=new rm("onBeforeInput","beforeinput",null,r,ve),be.push({event:lt,listeners:Bt}),lt.data=At)),KS(be,t,re,r,ve)}Z0(be,n)})}function Xo(t,n,r){return{instance:t,listener:n,currentTarget:r}}function Cu(t,n){for(var r=n+"Capture",o=[];t!==null;){var f=t,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=co(t,r),f!=null&&o.unshift(Xo(t,f,h)),f=co(t,n),f!=null&&o.push(Xo(t,f,h))),t.tag===3)return o;t=t.return}return[]}function eM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Q0(t,n,r,o,f){for(var h=n._reactName,S=[];r!==null&&r!==o;){var w=r,V=w.alternate,re=w.stateNode;if(w=w.tag,V!==null&&V===o)break;w!==5&&w!==26&&w!==27||re===null||(V=re,f?(re=co(r,h),re!=null&&S.unshift(Xo(r,re,V))):f||(re=co(r,h),re!=null&&S.push(Xo(r,re,V)))),r=r.return}S.length!==0&&t.push({event:n,listeners:S})}var tM=/\r\n?/g,nM=/\u0000|\uFFFD/g;function J0(t){return(typeof t=="string"?t:""+t).replace(tM,`
`).replace(nM,"")}function $0(t,n){return n=J0(n),J0(t)===n}function sn(t,n,r,o,f,h){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Nn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Nn(t,""+o);break;case"className":ut(t,"class",o);break;case"tabIndex":ut(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ut(t,r,o);break;case"style":ss(t,o,h);break;case"data":if(n!=="object"){ut(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=Ol(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(r==="formAction"?(n!=="input"&&sn(t,n,"name",f.name,f,null),sn(t,n,"formEncType",f.formEncType,f,null),sn(t,n,"formMethod",f.formMethod,f,null),sn(t,n,"formTarget",f.formTarget,f,null)):(sn(t,n,"encType",f.encType,f,null),sn(t,n,"method",f.method,f,null),sn(t,n,"target",f.target,f,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=Ol(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=pa);break;case"onScroll":o!=null&&Pt("scroll",t);break;case"onScrollEnd":o!=null&&Pt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(f.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=Ol(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":Pt("beforetoggle",t),Pt("toggle",t),Xe(t,"popover",o);break;case"xlinkActuate":tt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":tt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":tt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":tt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":tt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":tt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":tt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":tt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":tt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Xe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Dy.get(r)||r,Xe(t,r,o))}}function Md(t,n,r,o,f,h){switch(r){case"style":ss(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(f.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"children":typeof o=="string"?Nn(t,o):(typeof o=="number"||typeof o=="bigint")&&Nn(t,""+o);break;case"onScroll":o!=null&&Pt("scroll",t);break;case"onScrollEnd":o!=null&&Pt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=pa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!le.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),n=r.slice(2,f?r.length-7:void 0),h=t[Qe]||null,h=h!=null?h[r]:null,typeof h=="function"&&t.removeEventListener(n,h,f),typeof o=="function")){typeof h!="function"&&h!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,o,f);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):Xe(t,r,o)}}}function jn(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pt("error",t),Pt("load",t);var o=!1,f=!1,h;for(h in r)if(r.hasOwnProperty(h)){var S=r[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:sn(t,n,h,S,r,null)}}f&&sn(t,n,"srcSet",r.srcSet,r,null),o&&sn(t,n,"src",r.src,r,null);return;case"input":Pt("invalid",t);var w=h=S=f=null,V=null,re=null;for(o in r)if(r.hasOwnProperty(o)){var ve=r[o];if(ve!=null)switch(o){case"name":f=ve;break;case"type":S=ve;break;case"checked":V=ve;break;case"defaultChecked":re=ve;break;case"value":h=ve;break;case"defaultValue":w=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(s(137,n));break;default:sn(t,n,o,ve,r,null)}}ha(t,h,w,V,re,S,f,!1);return;case"select":Pt("invalid",t),o=S=h=null;for(f in r)if(r.hasOwnProperty(f)&&(w=r[f],w!=null))switch(f){case"value":h=w;break;case"defaultValue":S=w;break;case"multiple":o=w;default:sn(t,n,f,w,r,null)}n=h,r=S,t.multiple=!!o,n!=null?Ti(t,!!o,n,!1):r!=null&&Ti(t,!!o,r,!0);return;case"textarea":Pt("invalid",t),h=f=o=null;for(S in r)if(r.hasOwnProperty(S)&&(w=r[S],w!=null))switch(S){case"value":o=w;break;case"defaultValue":f=w;break;case"children":h=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:sn(t,n,S,w,r,null)}Vn(t,o,f,h);return;case"option":for(V in r)r.hasOwnProperty(V)&&(o=r[V],o!=null)&&(V==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":sn(t,n,V,o,r,null));return;case"dialog":Pt("beforetoggle",t),Pt("toggle",t),Pt("cancel",t),Pt("close",t);break;case"iframe":case"object":Pt("load",t);break;case"video":case"audio":for(o=0;o<ko.length;o++)Pt(ko[o],t);break;case"image":Pt("error",t),Pt("load",t);break;case"details":Pt("toggle",t);break;case"embed":case"source":case"link":Pt("error",t),Pt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in r)if(r.hasOwnProperty(re)&&(o=r[re],o!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:sn(t,n,re,o,r,null)}return;default:if(ki(n)){for(ve in r)r.hasOwnProperty(ve)&&(o=r[ve],o!==void 0&&Md(t,n,ve,o,r,void 0));return}}for(w in r)r.hasOwnProperty(w)&&(o=r[w],o!=null&&sn(t,n,w,o,r,null))}function iM(t,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,S=null,w=null,V=null,re=null,ve=null;for(pe in r){var be=r[pe];if(r.hasOwnProperty(pe)&&be!=null)switch(pe){case"checked":break;case"value":break;case"defaultValue":V=be;default:o.hasOwnProperty(pe)||sn(t,n,pe,null,o,be)}}for(var ue in o){var pe=o[ue];if(be=r[ue],o.hasOwnProperty(ue)&&(pe!=null||be!=null))switch(ue){case"type":h=pe;break;case"name":f=pe;break;case"checked":re=pe;break;case"defaultChecked":ve=pe;break;case"value":S=pe;break;case"defaultValue":w=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,n));break;default:pe!==be&&sn(t,n,ue,pe,o,be)}}Hn(t,S,w,V,re,ve,h,f);return;case"select":pe=S=w=ue=null;for(h in r)if(V=r[h],r.hasOwnProperty(h)&&V!=null)switch(h){case"value":break;case"multiple":pe=V;default:o.hasOwnProperty(h)||sn(t,n,h,null,o,V)}for(f in o)if(h=o[f],V=r[f],o.hasOwnProperty(f)&&(h!=null||V!=null))switch(f){case"value":ue=h;break;case"defaultValue":w=h;break;case"multiple":S=h;default:h!==V&&sn(t,n,f,h,o,V)}n=w,r=S,o=pe,ue!=null?Ti(t,!!r,ue,!1):!!o!=!!r&&(n!=null?Ti(t,!!r,n,!0):Ti(t,!!r,r?[]:"",!1));return;case"textarea":pe=ue=null;for(w in r)if(f=r[w],r.hasOwnProperty(w)&&f!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:sn(t,n,w,null,o,f)}for(S in o)if(f=o[S],h=r[S],o.hasOwnProperty(S)&&(f!=null||h!=null))switch(S){case"value":ue=f;break;case"defaultValue":pe=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==h&&sn(t,n,S,f,o,h)}Jt(t,ue,pe);return;case"option":for(var at in r)ue=r[at],r.hasOwnProperty(at)&&ue!=null&&!o.hasOwnProperty(at)&&(at==="selected"?t.selected=!1:sn(t,n,at,null,o,ue));for(V in o)ue=o[V],pe=r[V],o.hasOwnProperty(V)&&ue!==pe&&(ue!=null||pe!=null)&&(V==="selected"?t.selected=ue&&typeof ue!="function"&&typeof ue!="symbol":sn(t,n,V,ue,o,pe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var mt in r)ue=r[mt],r.hasOwnProperty(mt)&&ue!=null&&!o.hasOwnProperty(mt)&&sn(t,n,mt,null,o,ue);for(re in o)if(ue=o[re],pe=r[re],o.hasOwnProperty(re)&&ue!==pe&&(ue!=null||pe!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:sn(t,n,re,ue,o,pe)}return;default:if(ki(n)){for(var on in r)ue=r[on],r.hasOwnProperty(on)&&ue!==void 0&&!o.hasOwnProperty(on)&&Md(t,n,on,void 0,o,ue);for(ve in o)ue=o[ve],pe=r[ve],!o.hasOwnProperty(ve)||ue===pe||ue===void 0&&pe===void 0||Md(t,n,ve,ue,o,pe);return}}for(var Q in r)ue=r[Q],r.hasOwnProperty(Q)&&ue!=null&&!o.hasOwnProperty(Q)&&sn(t,n,Q,null,o,ue);for(be in o)ue=o[be],pe=r[be],!o.hasOwnProperty(be)||ue===pe||ue==null&&pe==null||sn(t,n,be,ue,o,pe)}function ev(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function aM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var f=r[o],h=f.transferSize,S=f.initiatorType,w=f.duration;if(h&&w&&ev(S)){for(S=0,w=f.responseEnd,o+=1;o<r.length;o++){var V=r[o],re=V.startTime;if(re>w)break;var ve=V.transferSize,be=V.initiatorType;ve&&ev(be)&&(V=V.responseEnd,S+=ve*(V<w?1:(w-re)/(V-re)))}if(--o,n+=8*(h+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ed=null,bd=null;function wu(t){return t.nodeType===9?t:t.ownerDocument}function tv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Td(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ad=null;function rM(){var t=window.event;return t&&t.type==="popstate"?t===Ad?!1:(Ad=t,!0):(Ad=null,!1)}var iv=typeof setTimeout=="function"?setTimeout:void 0,sM=typeof clearTimeout=="function"?clearTimeout:void 0,av=typeof Promise=="function"?Promise:void 0,oM=typeof queueMicrotask=="function"?queueMicrotask:typeof av<"u"?function(t){return av.resolve(null).then(t).catch(lM)}:iv;function lM(t){setTimeout(function(){throw t})}function ur(t){return t==="head"}function rv(t,n){var r=n,o=0;do{var f=r.nextSibling;if(t.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(o===0){t.removeChild(f),zs(n);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")Wo(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Wo(r);for(var h=r.firstChild;h;){var S=h.nextSibling,w=h.nodeName;h[dn]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&h.rel.toLowerCase()==="stylesheet"||r.removeChild(h),h=S}}else r==="body"&&Wo(t.ownerDocument.body);r=f}while(r);zs(n)}function sv(t,n){var r=t;t=0;do{var o=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=o}while(r)}function Rd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Rd(r),gn(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function uM(t,n,r,o){for(;t.nodeType===1;){var f=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[dn])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Li(t.nextSibling),t===null)break}return null}function cM(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Li(t.nextSibling),t===null))return null;return t}function ov(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Li(t.nextSibling),t===null))return null;return t}function Cd(t){return t.data==="$?"||t.data==="$~"}function wd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function fM(t,n){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||r.readyState!=="loading")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Dd=null;function lv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(n===0)return Li(t.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}t=t.nextSibling}return null}function uv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return t;n--}else r!=="/$"&&r!=="/&"||n++}t=t.previousSibling}return null}function cv(t,n,r){switch(n=wu(r),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Wo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);gn(t)}var Ni=new Map,fv=new Set;function Du(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Da=H.d;H.d={f:dM,r:hM,D:pM,C:mM,L:gM,m:vM,X:xM,S:_M,M:yM};function dM(){var t=Da.f(),n=Su();return t||n}function hM(t){var n=Nt(t);n!==null&&n.tag===5&&n.type==="form"?Cg(n):Da.r(t)}var Os=typeof document>"u"?null:document;function dv(t,n,r){var o=Os;if(o&&typeof n=="string"&&n){var f=xt(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),fv.has(f)||(fv.add(f),t={rel:t,crossOrigin:r,href:n},o.querySelector(f)===null&&(n=o.createElement("link"),jn(n,"link",t),C(n),o.head.appendChild(n)))}}function pM(t){Da.D(t),dv("dns-prefetch",t,null)}function mM(t,n){Da.C(t,n),dv("preconnect",t,n)}function gM(t,n,r){Da.L(t,n,r);var o=Os;if(o&&t&&n){var f='link[rel="preload"][as="'+xt(n)+'"]';n==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+xt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+xt(r.imageSizes)+'"]')):f+='[href="'+xt(t)+'"]';var h=f;switch(n){case"style":h=Ps(t);break;case"script":h=Fs(t)}Ni.has(h)||(t=g({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),Ni.set(h,t),o.querySelector(f)!==null||n==="style"&&o.querySelector(qo(h))||n==="script"&&o.querySelector(Yo(h))||(n=o.createElement("link"),jn(n,"link",t),C(n),o.head.appendChild(n)))}}function vM(t,n){Da.m(t,n);var r=Os;if(r&&t){var o=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+xt(o)+'"][href="'+xt(t)+'"]',h=f;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Fs(t)}if(!Ni.has(h)&&(t=g({rel:"modulepreload",href:t},n),Ni.set(h,t),r.querySelector(f)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Yo(h)))return}o=r.createElement("link"),jn(o,"link",t),C(o),r.head.appendChild(o)}}}function _M(t,n,r){Da.S(t,n,r);var o=Os;if(o&&t){var f=Zn(o).hoistableStyles,h=Ps(t);n=n||"default";var S=f.get(h);if(!S){var w={loading:0,preload:null};if(S=o.querySelector(qo(h)))w.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},r),(r=Ni.get(h))&&Ud(t,r);var V=S=o.createElement("link");C(V),jn(V,"link",t),V._p=new Promise(function(re,ve){V.onload=re,V.onerror=ve}),V.addEventListener("load",function(){w.loading|=1}),V.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Uu(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:w},f.set(h,S)}}}function xM(t,n){Da.X(t,n);var r=Os;if(r&&t){var o=Zn(r).hoistableScripts,f=Fs(t),h=o.get(f);h||(h=r.querySelector(Yo(f)),h||(t=g({src:t,async:!0},n),(n=Ni.get(f))&&Ld(t,n),h=r.createElement("script"),C(h),jn(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(f,h))}}function yM(t,n){Da.M(t,n);var r=Os;if(r&&t){var o=Zn(r).hoistableScripts,f=Fs(t),h=o.get(f);h||(h=r.querySelector(Yo(f)),h||(t=g({src:t,async:!0,type:"module"},n),(n=Ni.get(f))&&Ld(t,n),h=r.createElement("script"),C(h),jn(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(f,h))}}function hv(t,n,r,o){var f=(f=ie.current)?Du(f):null;if(!f)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=Ps(r.href),r=Zn(f).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=Ps(r.href);var h=Zn(f).hoistableStyles,S=h.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,S),(h=f.querySelector(qo(t)))&&!h._p&&(S.instance=h,S.state.loading=5),Ni.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Ni.set(t,r),h||SM(f,t,r,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Fs(r),r=Zn(f).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ps(t){return'href="'+xt(t)+'"'}function qo(t){return'link[rel="stylesheet"]['+t+"]"}function pv(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function SM(t,n,r,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),jn(n,"link",r),C(n),t.head.appendChild(n))}function Fs(t){return'[src="'+xt(t)+'"]'}function Yo(t){return"script[async]"+t}function mv(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+xt(r.href)+'"]');if(o)return n.instance=o,C(o),o;var f=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),C(o),jn(o,"style",f),Uu(o,r.precedence,t),n.instance=o;case"stylesheet":f=Ps(r.href);var h=t.querySelector(qo(f));if(h)return n.state.loading|=4,n.instance=h,C(h),h;o=pv(r),(f=Ni.get(f))&&Ud(o,f),h=(t.ownerDocument||t).createElement("link"),C(h);var S=h;return S._p=new Promise(function(w,V){S.onload=w,S.onerror=V}),jn(h,"link",o),n.state.loading|=4,Uu(h,r.precedence,t),n.instance=h;case"script":return h=Fs(r.src),(f=t.querySelector(Yo(h)))?(n.instance=f,C(f),f):(o=r,(f=Ni.get(h))&&(o=g({},r),Ld(o,f)),t=t.ownerDocument||t,f=t.createElement("script"),C(f),jn(f,"link",o),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Uu(o,r.precedence,t));return n.instance}function Uu(t,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=o.length?o[o.length-1]:null,h=f,S=0;S<o.length;S++){var w=o[S];if(w.dataset.precedence===n)h=w;else if(h!==f)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function Ud(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ld(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Lu=null;function gv(t,n,r){if(Lu===null){var o=new Map,f=Lu=new Map;f.set(r,o)}else f=Lu,o=f.get(r),o||(o=new Map,f.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),f=0;f<r.length;f++){var h=r[f];if(!(h[dn]||h[ke]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=t+S;var w=o.get(S);w?w.push(h):o.set(S,[h])}}return o}function vv(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function MM(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function _v(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function EM(t,n,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Ps(o.href),h=n.querySelector(qo(f));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Nu.bind(t),n.then(t,t)),r.state.loading|=4,r.instance=h,C(h);return}h=n.ownerDocument||n,o=pv(o),(f=Ni.get(f))&&Ud(o,f),h=h.createElement("link"),C(h);var S=h;S._p=new Promise(function(w,V){S.onload=w,S.onerror=V}),jn(h,"link",o),r.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Nu.bind(t),n.addEventListener("load",r),n.addEventListener("error",r))}}var Nd=0;function bM(t,n){return t.stylesheets&&t.count===0&&Pu(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var o=setTimeout(function(){if(t.stylesheets&&Pu(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&Nd===0&&(Nd=62500*aM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Pu(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>Nd?50:800)+n);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(f)}}:null}function Nu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Pu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ou=null;function Pu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ou=new Map,n.forEach(TM,t),Ou=null,Nu.call(t))}function TM(t,n){if(!(n.state.loading&4)){var r=Ou.get(t);if(r)var o=r.get(null);else{r=new Map,Ou.set(t,r);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var S=f[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(r.set(S.dataset.precedence,S),o=S)}o&&r.set(null,o)}f=n.instance,S=f.getAttribute("data-precedence"),h=r.get(S)||o,h===o&&r.set(null,f),r.set(S,f),this.count++,o=Nu.bind(this),f.addEventListener("load",o),f.addEventListener("error",o),h?h.parentNode.insertBefore(f,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var jo={$$typeof:L,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function AM(t,n,r,o,f,h,S,w,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dt(0),this.hiddenUpdates=Dt(null),this.identifierPrefix=o,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function xv(t,n,r,o,f,h,S,w,V,re,ve,be){return t=new AM(t,n,r,S,V,re,ve,be,w),n=1,h===!0&&(n|=24),h=mi(3,null,null,n),t.current=h,h.stateNode=t,n=df(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:r,cache:n},gf(h),t}function yv(t){return t?(t=hs,t):hs}function Sv(t,n,r,o,f,h){f=yv(f),o.context===null?o.context=f:o.pendingContext=f,o=Ja(n),o.payload={element:r},h=h===void 0?null:h,h!==null&&(o.callback=h),r=$a(t,o,n),r!==null&&(ui(r,t,n),Ao(r,t,n))}function Mv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function Od(t,n){Mv(t,n),(t=t.alternate)&&Mv(t,n)}function Ev(t){if(t.tag===13||t.tag===31){var n=Ur(t,67108864);n!==null&&ui(n,t,67108864),Od(t,67108864)}}function bv(t){if(t.tag===13||t.tag===31){var n=yi();n=ce(n);var r=Ur(t,n);r!==null&&ui(r,t,n),Od(t,n)}}var Fu=!0;function RM(t,n,r,o){var f=P.T;P.T=null;var h=H.p;try{H.p=2,Pd(t,n,r,o)}finally{H.p=h,P.T=f}}function CM(t,n,r,o){var f=P.T;P.T=null;var h=H.p;try{H.p=8,Pd(t,n,r,o)}finally{H.p=h,P.T=f}}function Pd(t,n,r,o){if(Fu){var f=Fd(o);if(f===null)Sd(t,n,o,zu,r),Av(t,o);else if(DM(f,t,n,r,o))o.stopPropagation();else if(Av(t,o),n&4&&-1<wM.indexOf(t)){for(;f!==null;){var h=Nt(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Ae(h.pendingLanes);if(S!==0){var w=h;for(w.pendingLanes|=2,w.entangledLanes|=2;S;){var V=1<<31-je(S);w.entanglements[1]|=V,S&=~V}ia(h),(Kt&6)===0&&(xu=b()+500,Vo(0))}}break;case 31:case 13:w=Ur(h,2),w!==null&&ui(w,h,2),Su(),Od(h,2)}if(h=Fd(o),h===null&&Sd(t,n,o,zu,r),h===f)break;f=h}f!==null&&o.stopPropagation()}else Sd(t,n,o,null,r)}}function Fd(t){return t=zc(t),zd(t)}var zu=null;function zd(t){if(zu=null,t=vn(t),t!==null){var n=u(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=c(n),t!==null)return t;t=null}else if(r===31){if(t=d(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return zu=t,null}function Tv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case _e:return 2;case Te:return 8;case he:case et:return 32;case Ie:return 268435456;default:return 32}default:return 32}}var Id=!1,cr=null,fr=null,dr=null,Zo=new Map,Ko=new Map,hr=[],wM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Av(t,n){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":Zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(n.pointerId)}}function Qo(t,n,r,o,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:h,targetContainers:[f]},n!==null&&(n=Nt(n),n!==null&&Ev(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function DM(t,n,r,o,f){switch(n){case"focusin":return cr=Qo(cr,t,n,r,o,f),!0;case"dragenter":return fr=Qo(fr,t,n,r,o,f),!0;case"mouseover":return dr=Qo(dr,t,n,r,o,f),!0;case"pointerover":var h=f.pointerId;return Zo.set(h,Qo(Zo.get(h)||null,t,n,r,o,f)),!0;case"gotpointercapture":return h=f.pointerId,Ko.set(h,Qo(Ko.get(h)||null,t,n,r,o,f)),!0}return!1}function Rv(t){var n=vn(t.target);if(n!==null){var r=u(n);if(r!==null){if(n=r.tag,n===13){if(n=c(r),n!==null){t.blockedOn=n,nt(t.priority,function(){bv(r)});return}}else if(n===31){if(n=d(r),n!==null){t.blockedOn=n,nt(t.priority,function(){bv(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Iu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=Fd(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);Fc=o,r.target.dispatchEvent(o),Fc=null}else return n=Nt(r),n!==null&&Ev(n),t.blockedOn=r,!1;n.shift()}return!0}function Cv(t,n,r){Iu(t)&&r.delete(n)}function UM(){Id=!1,cr!==null&&Iu(cr)&&(cr=null),fr!==null&&Iu(fr)&&(fr=null),dr!==null&&Iu(dr)&&(dr=null),Zo.forEach(Cv),Ko.forEach(Cv)}function Bu(t,n){t.blockedOn===n&&(t.blockedOn=null,Id||(Id=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,UM)))}var Hu=null;function wv(t){Hu!==t&&(Hu=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Hu===t&&(Hu=null);for(var n=0;n<t.length;n+=3){var r=t[n],o=t[n+1],f=t[n+2];if(typeof o!="function"){if(zd(o||r)===null)continue;break}var h=Nt(r);h!==null&&(t.splice(n,3),n-=3,Ff(h,{pending:!0,data:f,method:r.method,action:o},o,f))}}))}function zs(t){function n(V){return Bu(V,t)}cr!==null&&Bu(cr,t),fr!==null&&Bu(fr,t),dr!==null&&Bu(dr,t),Zo.forEach(n),Ko.forEach(n);for(var r=0;r<hr.length;r++){var o=hr[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<hr.length&&(r=hr[0],r.blockedOn===null);)Rv(r),r.blockedOn===null&&hr.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var f=r[o],h=r[o+1],S=f[Qe]||null;if(typeof h=="function")S||wv(r);else if(S){var w=null;if(h&&h.hasAttribute("formAction")){if(f=h,S=h[Qe]||null)w=S.formAction;else if(zd(f)!==null)continue}else w=S.action;typeof w=="function"?r[o+1]=w:(r.splice(o,3),o-=3),wv(r)}}}function Dv(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function Bd(t){this._internalRoot=t}Gu.prototype.render=Bd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var r=n.current,o=yi();Sv(r,o,t,n,null,null)},Gu.prototype.unmount=Bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Sv(t.current,2,null,t,null,null),Su(),n[it]=null}};function Gu(t){this._internalRoot=t}Gu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Oe();t={blockedOn:null,target:t,priority:n};for(var r=0;r<hr.length&&n!==0&&n<hr[r].priority;r++);hr.splice(r,0,t),r===0&&Rv(t)}};var Uv=e.version;if(Uv!=="19.2.3")throw Error(s(527,Uv,"19.2.3"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var LM={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vu.isDisabled&&Vu.supportsFiber)try{De=Vu.inject(LM),we=Vu}catch{}}return $o.createRoot=function(t,n){if(!l(t))throw Error(s(299));var r=!1,o="",f=Ig,h=Bg,S=Hg;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=xv(t,1,!1,null,null,r,o,null,f,h,S,Dv),t[it]=n.current,yd(t),new Bd(n)},$o.hydrateRoot=function(t,n,r){if(!l(t))throw Error(s(299));var o=!1,f="",h=Ig,S=Bg,w=Hg,V=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(S=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.formState!==void 0&&(V=r.formState)),n=xv(t,1,!0,n,r??null,o,f,V,h,S,w,Dv),n.context=yv(null),r=n.current,o=yi(),o=ce(o),f=Ja(o),f.callback=null,$a(r,f,o),r=o,n.current.lanes=r,Ln(n,r),ia(n),t[it]=n.current,yd(t),new Gu(n)},$o.version="19.2.3",$o}var Gv;function WM(){if(Gv)return Vd.exports;Gv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Vd.exports=XM(),Vd.exports}var qM=WM(),qd={exports:{}},Yd={};var Vv;function YM(){if(Vv)return Yd;Vv=1;var a=Cc().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return Yd.c=function(e){return a.H.useMemoCache(e)},Yd}var kv;function jM(){return kv||(kv=1,qd.exports=YM()),qd.exports}var is=jM();var vx=a=>{throw TypeError(a)},ZM=(a,e,i)=>e.has(a)||vx("Cannot "+i),jd=(a,e,i)=>(ZM(a,e,"read from private field"),i?i.call(a):e.get(a)),KM=(a,e,i)=>e.has(a)?vx("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,i),Xv="popstate";function QM(a={}){function e(s,l){let{pathname:u,search:c,hash:d}=s.location;return gl("",{pathname:u,search:c,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:ua(l)}return $M(e,i,null,a)}function Ct(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function Un(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function JM(){return Math.random().toString(36).substring(2,10)}function Wv(a,e){return{usr:a.state,key:a.key,idx:e}}function gl(a,e,i=null,s){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?Rr(e):e,state:i,key:e&&e.key||s||JM()}}function ua({pathname:a="/",search:e="",hash:i=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(a+=i.charAt(0)==="#"?i:"#"+i),a}function Rr(a){let e={};if(a){let i=a.indexOf("#");i>=0&&(e.hash=a.substring(i),a=a.substring(0,i));let s=a.indexOf("?");s>=0&&(e.search=a.substring(s),a=a.substring(0,s)),a&&(e.pathname=a)}return e}function $M(a,e,i,s={}){let{window:l=document.defaultView,v5Compat:u=!1}=s,c=l.history,d="POP",m=null,p=v();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function v(){return(c.state||{idx:null}).idx}function g(){d="POP";let M=v(),x=M==null?null:M-p;p=M,m&&m({action:d,location:T.location,delta:x})}function _(M,x){d="PUSH";let D=gl(T.location,M,x);p=v()+1;let L=Wv(D,p),O=T.createHref(D);try{c.pushState(L,"",O)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;l.location.assign(O)}u&&m&&m({action:d,location:T.location,delta:1})}function y(M,x){d="REPLACE";let D=gl(T.location,M,x);p=v();let L=Wv(D,p),O=T.createHref(D);c.replaceState(L,"",O),u&&m&&m({action:d,location:T.location,delta:0})}function E(M){return _x(M)}let T={get action(){return d},get location(){return a(l,c)},listen(M){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Xv,g),m=M,()=>{l.removeEventListener(Xv,g),m=null}},createHref(M){return e(l,M)},createURL:E,encodeLocation(M){let x=E(M);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:_,replace:y,go(M){return c.go(M)}};return T}function _x(a,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Ct(i,"No window.location.(origin|href) available to create URL");let s=typeof a=="string"?a:ua(a);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}var cl,qv=class{constructor(a){if(KM(this,cl,new Map),a)for(let[e,i]of a)this.set(e,i)}get(a){if(jd(this,cl).has(a))return jd(this,cl).get(a);if(a.defaultValue!==void 0)return a.defaultValue;throw new Error("No value found for context")}set(a,e){jd(this,cl).set(a,e)}};cl=new WeakMap;var eE=new Set(["lazy","caseSensitive","path","id","index","children"]);function tE(a){return eE.has(a)}var nE=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function iE(a){return nE.has(a)}function aE(a){return a.index===!0}function vl(a,e,i=[],s={},l=!1){return a.map((u,c)=>{let d=[...i,String(c)],m=typeof u.id=="string"?u.id:d.join("-");if(Ct(u.index!==!0||!u.children,"Cannot specify children on an index route"),Ct(l||!s[m],`Found a route id collision on id "${m}".  Route id's must be globally unique within Data Router usages`),aE(u)){let p={...u,id:m};return s[m]=Yv(p,e(p)),p}else{let p={...u,id:m,children:void 0};return s[m]=Yv(p,e(p)),u.children&&(p.children=vl(u.children,e,d,s,l)),p}})}function Yv(a,e){return Object.assign(a,{...e,...typeof e.lazy=="object"&&e.lazy!=null?{lazy:{...a.lazy,...e.lazy}}:{}})}function Sr(a,e,i="/"){return fl(a,e,i,!1)}function fl(a,e,i,s){let l=typeof e=="string"?Rr(e):e,u=Hi(l.pathname||"/",i);if(u==null)return null;let c=xx(a);sE(c);let d=null;for(let m=0;d==null&&m<c.length;++m){let p=vE(u);d=mE(c[m],p,s)}return d}function rE(a,e){let{route:i,pathname:s,params:l}=a;return{id:i.id,pathname:s,params:l,data:e[i.id],loaderData:e[i.id],handle:i.handle}}function xx(a,e=[],i=[],s="",l=!1){let u=(c,d,m=l,p)=>{let v={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(s)&&m)return;Ct(v.relativePath.startsWith(s),`Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(s.length)}let g=oa([s,v.relativePath]),_=i.concat(v);c.children&&c.children.length>0&&(Ct(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),xx(c.children,e,_,g,m)),!(c.path==null&&!c.index)&&e.push({path:g,score:hE(g,c.index),routesMeta:_})};return a.forEach((c,d)=>{if(c.path===""||!c.path?.includes("?"))u(c,d);else for(let m of yx(c.path))u(c,d,!0,m)}),e}function yx(a){let e=a.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(s.length===0)return l?[u,""]:[u];let c=yx(s.join("/")),d=[];return d.push(...c.map(m=>m===""?u:[u,m].join("/"))),l&&d.push(...c),d.map(m=>a.startsWith("/")&&m===""?"/":m)}function sE(a){a.sort((e,i)=>e.score!==i.score?i.score-e.score:pE(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var oE=/^:[\w-]+$/,lE=3,uE=2,cE=1,fE=10,dE=-2,jv=a=>a==="*";function hE(a,e){let i=a.split("/"),s=i.length;return i.some(jv)&&(s+=dE),e&&(s+=uE),i.filter(l=>!jv(l)).reduce((l,u)=>l+(oE.test(u)?lE:u===""?cE:fE),s)}function pE(a,e){return a.length===e.length&&a.slice(0,-1).every((s,l)=>s===e[l])?a[a.length-1]-e[e.length-1]:0}function mE(a,e,i=!1){let{routesMeta:s}=a,l={},u="/",c=[];for(let d=0;d<s.length;++d){let m=s[d],p=d===s.length-1,v=u==="/"?e:e.slice(u.length)||"/",g=bc({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},v),_=m.route;if(!g&&p&&i&&!s[s.length-1].route.index&&(g=bc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!g)return null;Object.assign(l,g.params),c.push({params:l,pathname:oa([u,g.pathname]),pathnameBase:yE(oa([u,g.pathnameBase])),route:_}),g.pathnameBase!=="/"&&(u=oa([u,g.pathnameBase]))}return c}function bc(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[i,s]=gE(a.path,a.caseSensitive,a.end),l=e.match(i);if(!l)return null;let u=l[0],c=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:s.reduce((p,{paramName:v,isOptional:g},_)=>{if(v==="*"){let E=d[_]||"";c=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const y=d[_];return g&&!y?p[v]=void 0:p[v]=(y||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:c,pattern:a}}function gE(a,e=!1,i=!0){Un(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let s=[],l="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,m)=>(s.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(s.push({paramName:"*"}),l+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":a!==""&&a!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function vE(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Un(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function Hi(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=a.charAt(i);return s&&s!=="/"?null:a.slice(i)||"/"}function _E({basename:a,pathname:e}){return e==="/"?a:oa([a,e])}var Sx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Up=a=>Sx.test(a);function xE(a,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof a=="string"?Rr(a):a,u;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?u=Zv(i.substring(1),"/"):u=Zv(i,e)):u=e,{pathname:u,search:SE(s),hash:ME(l)}}function Zv(a,e){let i=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Zd(a,e,i,s){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Mx(a){return a.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Lp(a){let e=Mx(a);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function Np(a,e,i,s=!1){let l;typeof a=="string"?l=Rr(a):(l={...a},Ct(!l.pathname||!l.pathname.includes("?"),Zd("?","pathname","search",l)),Ct(!l.pathname||!l.pathname.includes("#"),Zd("#","pathname","hash",l)),Ct(!l.search||!l.search.includes("#"),Zd("#","search","hash",l)));let u=a===""||l.pathname==="",c=u?"/":l.pathname,d;if(c==null)d=i;else{let g=e.length-1;if(!s&&c.startsWith("..")){let _=c.split("/");for(;_[0]==="..";)_.shift(),g-=1;l.pathname=_.join("/")}d=g>=0?e[g]:"/"}let m=xE(l,d),p=c&&c!=="/"&&c.endsWith("/"),v=(u||c===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||v)&&(m.pathname+="/"),m}var oa=a=>a.join("/").replace(/\/\/+/g,"/"),yE=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),SE=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,ME=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,El=class{constructor(a,e,i,s=!1){this.status=a,this.statusText=e||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function _l(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function bl(a){return a.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Ex=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function bx(a,e){let i=a;if(typeof i!="string"||!Sx.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(Ex)try{let u=new URL(window.location.href),c=i.startsWith("//")?new URL(u.protocol+i):new URL(i),d=Hi(c.pathname,e);c.origin===u.origin&&d!=null?i=d+c.search+c.hash:l=!0}catch{Un(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}var br=Symbol("Uninstrumented");function EE(a,e){let i={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};a.forEach(l=>l({id:e.id,index:e.index,path:e.path,instrument(u){let c=Object.keys(i);for(let d of c)u[d]&&i[d].push(u[d])}}));let s={};if(typeof e.lazy=="function"&&i.lazy.length>0){let l=$s(i.lazy,e.lazy,()=>{});l&&(s.lazy=l)}if(typeof e.lazy=="object"){let l=e.lazy;["middleware","loader","action"].forEach(u=>{let c=l[u],d=i[`lazy.${u}`];if(typeof c=="function"&&d.length>0){let m=$s(d,c,()=>{});m&&(s.lazy=Object.assign(s.lazy||{},{[u]:m}))}})}return["loader","action"].forEach(l=>{let u=e[l];if(typeof u=="function"&&i[l].length>0){let c=u[br]??u,d=$s(i[l],c,(...m)=>Kv(m[0]));d&&(l==="loader"&&c.hydrate===!0&&(d.hydrate=!0),d[br]=c,s[l]=d)}}),e.middleware&&e.middleware.length>0&&i.middleware.length>0&&(s.middleware=e.middleware.map(l=>{let u=l[br]??l,c=$s(i.middleware,u,(...d)=>Kv(d[0]));return c?(c[br]=u,c):l})),s}function bE(a,e){let i={navigate:[],fetch:[]};if(e.forEach(s=>s({instrument(l){let u=Object.keys(l);for(let c of u)l[c]&&i[c].push(l[c])}})),i.navigate.length>0){let s=a.navigate[br]??a.navigate,l=$s(i.navigate,s,(...u)=>{let[c,d]=u;return{to:typeof c=="number"||typeof c=="string"?c:c?ua(c):".",...Qv(a,d??{})}});l&&(l[br]=s,a.navigate=l)}if(i.fetch.length>0){let s=a.fetch[br]??a.fetch,l=$s(i.fetch,s,(...u)=>{let[c,,d,m]=u;return{href:d??".",fetcherKey:c,...Qv(a,m??{})}});l&&(l[br]=s,a.fetch=l)}return a}function $s(a,e,i){return a.length===0?null:async(...s)=>{let l=await Tx(a,i(...s),()=>e(...s),a.length-1);if(l.type==="error")throw l.value;return l.value}}async function Tx(a,e,i,s){let l=a[s],u;if(l){let c,d=async()=>(c?console.error("You cannot call instrumented handlers more than once"):c=Tx(a,e,i,s-1),u=await c,Ct(u,"Expected a result"),u.type==="error"&&u.value instanceof Error?{status:"error",error:u.value}:{status:"success",error:void 0});try{await l(d,e)}catch(m){console.error("An instrumentation function threw an error:",m)}c||await d(),await c}else try{u={type:"success",value:await i()}}catch(c){u={type:"error",value:c}}return u||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function Kv(a){let{request:e,context:i,params:s,unstable_pattern:l}=a;return{request:TE(e),params:{...s},unstable_pattern:l,context:AE(i)}}function Qv(a,e){return{currentUrl:ua(a.state.location),..."formMethod"in e?{formMethod:e.formMethod}:{},..."formEncType"in e?{formEncType:e.formEncType}:{},..."formData"in e?{formData:e.formData}:{},..."body"in e?{body:e.body}:{}}}function TE(a){return{method:a.method,url:a.url,headers:{get:(...e)=>a.headers.get(...e)}}}function AE(a){if(CE(a)){let e={...a};return Object.freeze(e),e}else return{get:e=>a.get(e)}}var RE=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function CE(a){if(a===null||typeof a!="object")return!1;const e=Object.getPrototypeOf(a);return e===Object.prototype||e===null||Object.getOwnPropertyNames(e).sort().join("\0")===RE}var Ax=["POST","PUT","PATCH","DELETE"],wE=new Set(Ax),DE=["GET",...Ax],UE=new Set(DE),Rx=new Set([301,302,303,307,308]),LE=new Set([307,308]),Kd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},NE={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},el={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},OE=a=>({hasErrorBoundary:!!a.hasErrorBoundary}),Cx="remix-router-transitions",wx=Symbol("ResetLoaderData");function PE(a){const e=a.window?a.window:typeof window<"u"?window:void 0,i=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u";Ct(a.routes.length>0,"You must provide a non-empty routes array to createRouter");let s=a.hydrationRouteProperties||[],l=a.mapRouteProperties||OE,u=l;if(a.unstable_instrumentations){let G=a.unstable_instrumentations;u=K=>({...l(K),...EE(G.map(ce=>ce.route).filter(Boolean),K)})}let c={},d=vl(a.routes,u,void 0,c),m,p=a.basename||"/";p.startsWith("/")||(p=`/${p}`);let v=a.dataStrategy||HE,g={...a.future},_=null,y=new Set,E=null,T=null,M=null,x=a.hydrationData!=null,D=Sr(d,a.history.location,p),L=!1,O=null,z;if(D==null&&!a.patchRoutesOnNavigation){let G=Pi(404,{pathname:a.history.location.pathname}),{matches:K,route:ce}=ku(d);z=!0,D=K,O={[ce.id]:G}}else if(D&&!a.hydrationData&&kt(D,d,a.history.location.pathname).active&&(D=null),D)if(D.some(G=>G.route.lazy))z=!1;else if(!D.some(G=>Op(G.route)))z=!0;else{let G=a.hydrationData?a.hydrationData.loaderData:null,K=a.hydrationData?a.hydrationData.errors:null;if(K){let ce=D.findIndex(Re=>K[Re.route.id]!==void 0);z=D.slice(0,ce+1).every(Re=>!Lh(Re.route,G,K))}else z=D.every(ce=>!Lh(ce.route,G,K))}else{z=!1,D=[];let G=kt(null,d,a.history.location.pathname);G.active&&G.matches&&(L=!0,D=G.matches)}let I,R={historyAction:a.history.action,location:a.history.location,matches:D,initialized:z,navigation:Kd,restoreScrollPosition:a.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:a.hydrationData&&a.hydrationData.loaderData||{},actionData:a.hydrationData&&a.hydrationData.actionData||null,errors:a.hydrationData&&a.hydrationData.errors||O,fetchers:new Map,blockers:new Map},k="POP",A=null,U=!1,B,J=!1,te=new Map,fe=null,ne=!1,P=!1,H=new Set,Y=new Map,xe=0,ye=-1,N=new Map,ee=new Set,ge=new Map,Ce=new Map,Fe=new Set,ie=new Map,me,Ne=null;function We(){if(_=a.history.listen(({action:G,location:K,delta:ce})=>{if(me){me(),me=void 0;return}Un(ie.size===0||ce!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Re=Le({currentLocation:R.location,nextLocation:K,historyAction:G});if(Re&&ce!=null){let Oe=new Promise(nt=>{me=nt});a.history.go(ce*-1),He(Re,{state:"blocked",location:K,proceed(){He(Re,{state:"proceeding",proceed:void 0,reset:void 0,location:K}),Oe.then(()=>a.history.go(ce))},reset(){let nt=new Map(R.blockers);nt.set(Re,el),_t({blockers:nt})}}),A?.resolve(),A=null;return}return pt(G,K)}),i){ab(e,te);let G=()=>rb(e,te);e.addEventListener("pagehide",G),fe=()=>e.removeEventListener("pagehide",G)}return R.initialized||pt("POP",R.location,{initialHydration:!0}),I}function Ve(){_&&_(),fe&&fe(),y.clear(),B&&B.abort(),R.fetchers.forEach((G,K)=>ht(K)),R.blockers.forEach((G,K)=>q(K))}function yt(G){return y.add(G),()=>y.delete(G)}function _t(G,K={}){G.matches&&(G.matches=G.matches.map(Oe=>{let nt=c[Oe.route.id],Ye=Oe.route;return Ye.element!==nt.element||Ye.errorElement!==nt.errorElement||Ye.hydrateFallbackElement!==nt.hydrateFallbackElement?{...Oe,route:nt}:Oe})),R={...R,...G};let ce=[],Re=[];R.fetchers.forEach((Oe,nt)=>{Oe.state==="idle"&&(Fe.has(nt)?ce.push(nt):Re.push(nt))}),Fe.forEach(Oe=>{!R.fetchers.has(Oe)&&!Y.has(Oe)&&ce.push(Oe)}),[...y].forEach(Oe=>Oe(R,{deletedFetchers:ce,newErrors:G.errors??null,viewTransitionOpts:K.viewTransitionOpts,flushSync:K.flushSync===!0})),ce.forEach(Oe=>ht(Oe)),Re.forEach(Oe=>R.fetchers.delete(Oe))}function gt(G,K,{flushSync:ce}={}){let Re=R.actionData!=null&&R.navigation.formMethod!=null&&$n(R.navigation.formMethod)&&R.navigation.state==="loading"&&G.state?._isRedirect!==!0,Oe;K.actionData?Object.keys(K.actionData).length>0?Oe=K.actionData:Oe=null:Re?Oe=R.actionData:Oe=null;let nt=K.loaderData?o_(R.loaderData,K.loaderData,K.matches||[],K.errors):R.loaderData,Ye=R.blockers;Ye.size>0&&(Ye=new Map(Ye),Ye.forEach((ft,ot)=>Ye.set(ot,el)));let ke=ne?!1:vt(G,K.matches||R.matches),Qe=U===!0||R.navigation.formMethod!=null&&$n(R.navigation.formMethod)&&G.state?._isRedirect!==!0;m&&(d=m,m=void 0),ne||k==="POP"||(k==="PUSH"?a.history.push(G,G.state):k==="REPLACE"&&a.history.replace(G,G.state));let it;if(k==="POP"){let ft=te.get(R.location.pathname);ft&&ft.has(G.pathname)?it={currentLocation:R.location,nextLocation:G}:te.has(G.pathname)&&(it={currentLocation:G,nextLocation:R.location})}else if(J){let ft=te.get(R.location.pathname);ft?ft.add(G.pathname):(ft=new Set([G.pathname]),te.set(R.location.pathname,ft)),it={currentLocation:R.location,nextLocation:G}}_t({...K,actionData:Oe,loaderData:nt,historyAction:k,location:G,initialized:!0,navigation:Kd,revalidation:"idle",restoreScrollPosition:ke,preventScrollReset:Qe,blockers:Ye},{viewTransitionOpts:it,flushSync:ce===!0}),k="POP",U=!1,J=!1,ne=!1,P=!1,A?.resolve(),A=null,Ne?.resolve(),Ne=null}async function bt(G,K){if(A?.resolve(),A=null,typeof G=="number"){A||(A=f_());let Ut=A.promise;return a.history.go(G),Ut}let ce=Uh(R.location,R.matches,p,G,K?.fromRouteId,K?.relative),{path:Re,submission:Oe,error:nt}=Jv(!1,ce,K),Ye=R.location,ke=gl(R.location,Re,K&&K.state);ke={...ke,...a.history.encodeLocation(ke)};let Qe=K&&K.replace!=null?K.replace:void 0,it="PUSH";Qe===!0?it="REPLACE":Qe===!1||Oe!=null&&$n(Oe.formMethod)&&Oe.formAction===R.location.pathname+R.location.search&&(it="REPLACE");let ft=K&&"preventScrollReset"in K?K.preventScrollReset===!0:void 0,ot=(K&&K.flushSync)===!0,Lt=Le({currentLocation:Ye,nextLocation:ke,historyAction:it});if(Lt){He(Lt,{state:"blocked",location:ke,proceed(){He(Lt,{state:"proceeding",proceed:void 0,reset:void 0,location:ke}),bt(G,K)},reset(){let Ut=new Map(R.blockers);Ut.set(Lt,el),_t({blockers:Ut})}});return}await pt(it,ke,{submission:Oe,pendingError:nt,preventScrollReset:ft,replace:K&&K.replace,enableViewTransition:K&&K.viewTransition,flushSync:ot,callSiteDefaultShouldRevalidate:K&&K.unstable_defaultShouldRevalidate})}function Ht(){Ne||(Ne=f_()),Te(),_t({revalidation:"loading"});let G=Ne.promise;return R.navigation.state==="submitting"?G:R.navigation.state==="idle"?(pt(R.historyAction,R.location,{startUninterruptedRevalidation:!0}),G):(pt(k||R.historyAction,R.navigation.location,{overrideNavigation:R.navigation,enableViewTransition:J===!0}),G)}async function pt(G,K,ce){B&&B.abort(),B=null,k=G,ne=(ce&&ce.startUninterruptedRevalidation)===!0,Pe(R.location,R.matches),U=(ce&&ce.preventScrollReset)===!0,J=(ce&&ce.enableViewTransition)===!0;let Re=m||d,Oe=ce&&ce.overrideNavigation,nt=ce?.initialHydration&&R.matches&&R.matches.length>0&&!L?R.matches:Sr(Re,K,p),Ye=(ce&&ce.flushSync)===!0;if(nt&&R.initialized&&!P&&jE(R.location,K)&&!(ce&&ce.submission&&$n(ce.submission.formMethod))){gt(K,{matches:nt},{flushSync:Ye});return}let ke=kt(nt,Re,K.pathname);if(ke.active&&ke.matches&&(nt=ke.matches),!nt){let{error:gn,notFoundMatches:vn,route:Nt}=qe(K.pathname);gt(K,{matches:vn,loaderData:{},errors:{[Nt.id]:gn}},{flushSync:Ye});return}B=new AbortController;let Qe=Js(a.history,K,B.signal,ce&&ce.submission),it=a.getContext?await a.getContext():new qv,ft;if(ce&&ce.pendingError)ft=[Mr(nt).route.id,{type:"error",error:ce.pendingError}];else if(ce&&ce.submission&&$n(ce.submission.formMethod)){let gn=await mn(Qe,K,ce.submission,nt,it,ke.active,ce&&ce.initialHydration===!0,{replace:ce.replace,flushSync:Ye});if(gn.shortCircuited)return;if(gn.pendingActionResult){let[vn,Nt]=gn.pendingActionResult;if(Ei(Nt)&&_l(Nt.error)&&Nt.error.status===404){B=null,gt(K,{matches:gn.matches,loaderData:{},errors:{[vn]:Nt.error}});return}}nt=gn.matches||nt,ft=gn.pendingActionResult,Oe=Qd(K,ce.submission),Ye=!1,ke.active=!1,Qe=Js(a.history,Qe.url,Qe.signal)}let{shortCircuited:ot,matches:Lt,loaderData:Ut,errors:dn}=await X(Qe,K,nt,it,ke.active,Oe,ce&&ce.submission,ce&&ce.fetcherSubmission,ce&&ce.replace,ce&&ce.initialHydration===!0,Ye,ft,ce&&ce.callSiteDefaultShouldRevalidate);ot||(B=null,gt(K,{matches:Lt||nt,...l_(ft),loaderData:Ut,errors:dn}))}async function mn(G,K,ce,Re,Oe,nt,Ye,ke={}){Te();let Qe=nb(K,ce);if(_t({navigation:Qe},{flushSync:ke.flushSync===!0}),nt){let ot=await Dt(Re,K.pathname,G.signal);if(ot.type==="aborted")return{shortCircuited:!0};if(ot.type==="error"){if(ot.partialMatches.length===0){let{matches:Ut,route:dn}=ku(d);return{matches:Ut,pendingActionResult:[dn.id,{type:"error",error:ot.error}]}}let Lt=Mr(ot.partialMatches).route.id;return{matches:ot.partialMatches,pendingActionResult:[Lt,{type:"error",error:ot.error}]}}else if(ot.matches)Re=ot.matches;else{let{notFoundMatches:Lt,error:Ut,route:dn}=qe(K.pathname);return{matches:Lt,pendingActionResult:[dn.id,{type:"error",error:Ut}]}}}let it,ft=mc(Re,K);if(!ft.route.action&&!ft.route.lazy)it={type:"error",error:Pi(405,{method:G.method,pathname:K.pathname,routeId:ft.route.id})};else{let ot=eo(u,c,G,Re,ft,Ye?[]:s,Oe),Lt=await j(G,ot,Oe,null);if(it=Lt[ft.route.id],!it){for(let Ut of Re)if(Lt[Ut.route.id]){it=Lt[Ut.route.id];break}}if(G.signal.aborted)return{shortCircuited:!0}}if($r(it)){let ot;return ke&&ke.replace!=null?ot=ke.replace:ot=a_(it.response.headers.get("Location"),new URL(G.url),p,a.history)===R.location.pathname+R.location.search,await b(G,it,!0,{submission:ce,replace:ot}),{shortCircuited:!0}}if(Ei(it)){let ot=Mr(Re,ft.route.id);return(ke&&ke.replace)!==!0&&(k="PUSH"),{matches:Re,pendingActionResult:[ot.route.id,it,ft.route.id]}}return{matches:Re,pendingActionResult:[ft.route.id,it]}}async function X(G,K,ce,Re,Oe,nt,Ye,ke,Qe,it,ft,ot,Lt){let Ut=nt||Qd(K,Ye),dn=Ye||ke||c_(Ut),gn=!ne&&!it;if(Oe){if(gn){let Xe=un(ot);_t({navigation:Ut,...Xe!==void 0?{actionData:Xe}:{}},{flushSync:ft})}let Ue=await Dt(ce,K.pathname,G.signal);if(Ue.type==="aborted")return{shortCircuited:!0};if(Ue.type==="error"){if(Ue.partialMatches.length===0){let{matches:ut,route:tt}=ku(d);return{matches:ut,loaderData:{},errors:{[tt.id]:Ue.error}}}let Xe=Mr(Ue.partialMatches).route.id;return{matches:Ue.partialMatches,loaderData:{},errors:{[Xe]:Ue.error}}}else if(Ue.matches)ce=Ue.matches;else{let{error:Xe,notFoundMatches:ut,route:tt}=qe(K.pathname);return{matches:ut,loaderData:{},errors:{[tt.id]:Xe}}}}let vn=m||d,{dsMatches:Nt,revalidatingFetchers:Tn}=$v(G,Re,u,c,a.history,R,ce,dn,K,it?[]:s,it===!0,P,H,Fe,ge,ee,vn,p,a.patchRoutesOnNavigation!=null,ot,Lt);if(ye=++xe,!a.dataStrategy&&!Nt.some(Ue=>Ue.shouldLoad)&&!Nt.some(Ue=>Ue.route.middleware&&Ue.route.middleware.length>0)&&Tn.length===0){let Ue=je();return gt(K,{matches:ce,loaderData:{},errors:ot&&Ei(ot[1])?{[ot[0]]:ot[1].error}:null,...l_(ot),...Ue?{fetchers:new Map(R.fetchers)}:{}},{flushSync:ft}),{shortCircuited:!0}}if(gn){let Ue={};if(!Oe){Ue.navigation=Ut;let Xe=un(ot);Xe!==void 0&&(Ue.actionData=Xe)}Tn.length>0&&(Ue.fetchers=Ft(Tn)),_t(Ue,{flushSync:ft})}Tn.forEach(Ue=>{we(Ue.key),Ue.controller&&Y.set(Ue.key,Ue.controller)});let Zn=()=>Tn.forEach(Ue=>we(Ue.key));B&&B.signal.addEventListener("abort",Zn);let{loaderResults:C,fetcherResults:Z}=await _e(Nt,Tn,G,Re);if(G.signal.aborted)return{shortCircuited:!0};B&&B.signal.removeEventListener("abort",Zn),Tn.forEach(Ue=>Y.delete(Ue.key));let le=Xu(C);if(le)return await b(G,le.result,!0,{replace:Qe}),{shortCircuited:!0};if(le=Xu(Z),le)return ee.add(le.key),await b(G,le.result,!0,{replace:Qe}),{shortCircuited:!0};let{loaderData:se,errors:$}=s_(R,ce,C,ot,Tn,Z);it&&R.errors&&($={...R.errors,...$});let ze=je(),Je=Be(ye),Ge=ze||Je||Tn.length>0;return{matches:ce,loaderData:se,errors:$,...Ge?{fetchers:new Map(R.fetchers)}:{}}}function un(G){if(G&&!Ei(G[1]))return{[G[0]]:G[1].data};if(R.actionData)return Object.keys(R.actionData).length===0?null:R.actionData}function Ft(G){return G.forEach(K=>{let ce=R.fetchers.get(K.key),Re=tl(void 0,ce?ce.data:void 0);R.fetchers.set(K.key,Re)}),new Map(R.fetchers)}async function Wt(G,K,ce,Re){we(G);let Oe=(Re&&Re.flushSync)===!0,nt=m||d,Ye=Uh(R.location,R.matches,p,ce,K,Re?.relative),ke=Sr(nt,Ye,p),Qe=kt(ke,nt,Ye);if(Qe.active&&Qe.matches&&(ke=Qe.matches),!ke){et(G,K,Pi(404,{pathname:Ye}),{flushSync:Oe});return}let{path:it,submission:ft,error:ot}=Jv(!0,Ye,Re);if(ot){et(G,K,ot,{flushSync:Oe});return}let Lt=a.getContext?await a.getContext():new qv,Ut=(Re&&Re.preventScrollReset)===!0;if(ft&&$n(ft.formMethod)){await st(G,K,it,ke,Lt,Qe.active,Oe,Ut,ft,Re&&Re.unstable_defaultShouldRevalidate);return}ge.set(G,{routeId:K,path:it}),await F(G,K,it,ke,Lt,Qe.active,Oe,Ut,ft)}async function st(G,K,ce,Re,Oe,nt,Ye,ke,Qe,it){Te(),ge.delete(G);let ft=R.fetchers.get(G);he(G,ib(Qe,ft),{flushSync:Ye});let ot=new AbortController,Lt=Js(a.history,ce,ot.signal,Qe);if(nt){let $e=await Dt(Re,new URL(Lt.url).pathname,Lt.signal,G);if($e.type==="aborted")return;if($e.type==="error"){et(G,K,$e.error,{flushSync:Ye});return}else if($e.matches)Re=$e.matches;else{et(G,K,Pi(404,{pathname:ce}),{flushSync:Ye});return}}let Ut=mc(Re,ce);if(!Ut.route.action&&!Ut.route.lazy){let $e=Pi(405,{method:Qe.formMethod,pathname:ce,routeId:K});et(G,K,$e,{flushSync:Ye});return}Y.set(G,ot);let dn=xe,gn=eo(u,c,Lt,Re,Ut,s,Oe),vn=await j(Lt,gn,Oe,G),Nt=vn[Ut.route.id];if(!Nt){for(let $e of gn)if(vn[$e.route.id]){Nt=vn[$e.route.id];break}}if(Lt.signal.aborted){Y.get(G)===ot&&Y.delete(G);return}if(Fe.has(G)){if($r(Nt)||Ei(Nt)){he(G,Fa(void 0));return}}else{if($r(Nt))if(Y.delete(G),ye>dn){he(G,Fa(void 0));return}else return ee.add(G),he(G,tl(Qe)),b(Lt,Nt,!1,{fetcherSubmission:Qe,preventScrollReset:ke});if(Ei(Nt)){et(G,K,Nt.error);return}}let Tn=R.navigation.location||R.location,Zn=Js(a.history,Tn,ot.signal),C=m||d,Z=R.navigation.state!=="idle"?Sr(C,R.navigation.location,p):R.matches;Ct(Z,"Didn't find any matches after fetcher action");let le=++xe;N.set(G,le);let se=tl(Qe,Nt.data);R.fetchers.set(G,se);let{dsMatches:$,revalidatingFetchers:ze}=$v(Zn,Oe,u,c,a.history,R,Z,Qe,Tn,s,!1,P,H,Fe,ge,ee,C,p,a.patchRoutesOnNavigation!=null,[Ut.route.id,Nt],it);ze.filter($e=>$e.key!==G).forEach($e=>{let zt=$e.key,cn=R.fetchers.get(zt),an=tl(void 0,cn?cn.data:void 0);R.fetchers.set(zt,an),we(zt),$e.controller&&Y.set(zt,$e.controller)}),_t({fetchers:new Map(R.fetchers)});let Je=()=>ze.forEach($e=>we($e.key));ot.signal.addEventListener("abort",Je);let{loaderResults:Ge,fetcherResults:Ue}=await _e($,ze,Zn,Oe);if(ot.signal.aborted)return;if(ot.signal.removeEventListener("abort",Je),N.delete(G),Y.delete(G),ze.forEach($e=>Y.delete($e.key)),R.fetchers.has(G)){let $e=Fa(Nt.data);R.fetchers.set(G,$e)}let Xe=Xu(Ge);if(Xe)return b(Zn,Xe.result,!1,{preventScrollReset:ke});if(Xe=Xu(Ue),Xe)return ee.add(Xe.key),b(Zn,Xe.result,!1,{preventScrollReset:ke});let{loaderData:ut,errors:tt}=s_(R,Z,Ge,void 0,ze,Ue);Be(le),R.navigation.state==="loading"&&le>ye?(Ct(k,"Expected pending action"),B&&B.abort(),gt(R.navigation.location,{matches:Z,loaderData:ut,errors:tt,fetchers:new Map(R.fetchers)})):(_t({errors:tt,loaderData:o_(R.loaderData,ut,Z,tt),fetchers:new Map(R.fetchers)}),P=!1)}async function F(G,K,ce,Re,Oe,nt,Ye,ke,Qe){let it=R.fetchers.get(G);he(G,tl(Qe,it?it.data:void 0),{flushSync:Ye});let ft=new AbortController,ot=Js(a.history,ce,ft.signal);if(nt){let Nt=await Dt(Re,new URL(ot.url).pathname,ot.signal,G);if(Nt.type==="aborted")return;if(Nt.type==="error"){et(G,K,Nt.error,{flushSync:Ye});return}else if(Nt.matches)Re=Nt.matches;else{et(G,K,Pi(404,{pathname:ce}),{flushSync:Ye});return}}let Lt=mc(Re,ce);Y.set(G,ft);let Ut=xe,dn=eo(u,c,ot,Re,Lt,s,Oe),vn=(await j(ot,dn,Oe,G))[Lt.route.id];if(Y.get(G)===ft&&Y.delete(G),!ot.signal.aborted){if(Fe.has(G)){he(G,Fa(void 0));return}if($r(vn))if(ye>Ut){he(G,Fa(void 0));return}else{ee.add(G),await b(ot,vn,!1,{preventScrollReset:ke});return}if(Ei(vn)){et(G,K,vn.error);return}he(G,Fa(vn.data))}}async function b(G,K,ce,{submission:Re,fetcherSubmission:Oe,preventScrollReset:nt,replace:Ye}={}){ce||(A?.resolve(),A=null),K.response.headers.has("X-Remix-Revalidate")&&(P=!0);let ke=K.response.headers.get("Location");Ct(ke,"Expected a Location header on the redirect Response"),ke=a_(ke,new URL(G.url),p,a.history);let Qe=gl(R.location,ke,{_isRedirect:!0});if(i){let dn=!1;if(K.response.headers.has("X-Remix-Reload-Document"))dn=!0;else if(Up(ke)){const gn=_x(ke,!0);dn=gn.origin!==e.location.origin||Hi(gn.pathname,p)==null}if(dn){Ye?e.location.replace(ke):e.location.assign(ke);return}}B=null;let it=Ye===!0||K.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:ft,formAction:ot,formEncType:Lt}=R.navigation;!Re&&!Oe&&ft&&ot&&Lt&&(Re=c_(R.navigation));let Ut=Re||Oe;if(LE.has(K.response.status)&&Ut&&$n(Ut.formMethod))await pt(it,Qe,{submission:{...Ut,formAction:ke},preventScrollReset:nt||U,enableViewTransition:ce?J:void 0});else{let dn=Qd(Qe,Re);await pt(it,Qe,{overrideNavigation:dn,fetcherSubmission:Oe,preventScrollReset:nt||U,enableViewTransition:ce?J:void 0})}}async function j(G,K,ce,Re){let Oe,nt={};try{Oe=await VE(v,G,K,Re,ce,!1)}catch(Ye){return K.filter(ke=>ke.shouldLoad).forEach(ke=>{nt[ke.route.id]={type:"error",error:Ye}}),nt}if(G.signal.aborted)return nt;if(!$n(G.method))for(let Ye of K){if(Oe[Ye.route.id]?.type==="error")break;!Oe.hasOwnProperty(Ye.route.id)&&!R.loaderData.hasOwnProperty(Ye.route.id)&&(!R.errors||!R.errors.hasOwnProperty(Ye.route.id))&&Ye.shouldCallHandler()&&(Oe[Ye.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${Ye.route.id}`)})}for(let[Ye,ke]of Object.entries(Oe))if(JE(ke)){let Qe=ke.result;nt[Ye]={type:"redirect",response:qE(Qe,G,Ye,K,p)}}else nt[Ye]=await WE(ke);return nt}async function _e(G,K,ce,Re){let Oe=j(ce,G,Re,null),nt=Promise.all(K.map(async Qe=>{if(Qe.matches&&Qe.match&&Qe.request&&Qe.controller){let ft=(await j(Qe.request,Qe.matches,Re,Qe.key))[Qe.match.route.id];return{[Qe.key]:ft}}else return Promise.resolve({[Qe.key]:{type:"error",error:Pi(404,{pathname:Qe.path})}})})),Ye=await Oe,ke=(await nt).reduce((Qe,it)=>Object.assign(Qe,it),{});return{loaderResults:Ye,fetcherResults:ke}}function Te(){P=!0,ge.forEach((G,K)=>{Y.has(K)&&H.add(K),we(K)})}function he(G,K,ce={}){R.fetchers.set(G,K),_t({fetchers:new Map(R.fetchers)},{flushSync:(ce&&ce.flushSync)===!0})}function et(G,K,ce,Re={}){let Oe=Mr(R.matches,K);ht(G),_t({errors:{[Oe.route.id]:ce},fetchers:new Map(R.fetchers)},{flushSync:(Re&&Re.flushSync)===!0})}function Ie(G){return Ce.set(G,(Ce.get(G)||0)+1),Fe.has(G)&&Fe.delete(G),R.fetchers.get(G)||NE}function rt(G,K){we(G,K?.reason),he(G,Fa(null))}function ht(G){let K=R.fetchers.get(G);Y.has(G)&&!(K&&K.state==="loading"&&N.has(G))&&we(G),ge.delete(G),N.delete(G),ee.delete(G),Fe.delete(G),H.delete(G),R.fetchers.delete(G)}function De(G){let K=(Ce.get(G)||0)-1;K<=0?(Ce.delete(G),Fe.add(G)):Ce.set(G,K),_t({fetchers:new Map(R.fetchers)})}function we(G,K){let ce=Y.get(G);ce&&(ce.abort(K),Y.delete(G))}function Ke(G){for(let K of G){let ce=Ie(K),Re=Fa(ce.data);R.fetchers.set(K,Re)}}function je(){let G=[],K=!1;for(let ce of ee){let Re=R.fetchers.get(ce);Ct(Re,`Expected fetcher: ${ce}`),Re.state==="loading"&&(ee.delete(ce),G.push(ce),K=!0)}return Ke(G),K}function Be(G){let K=[];for(let[ce,Re]of N)if(Re<G){let Oe=R.fetchers.get(ce);Ct(Oe,`Expected fetcher: ${ce}`),Oe.state==="loading"&&(we(ce),N.delete(ce),K.push(ce))}return Ke(K),K.length>0}function Et(G,K){let ce=R.blockers.get(G)||el;return ie.get(G)!==K&&ie.set(G,K),ce}function q(G){R.blockers.delete(G),ie.delete(G)}function He(G,K){let ce=R.blockers.get(G)||el;Ct(ce.state==="unblocked"&&K.state==="blocked"||ce.state==="blocked"&&K.state==="blocked"||ce.state==="blocked"&&K.state==="proceeding"||ce.state==="blocked"&&K.state==="unblocked"||ce.state==="proceeding"&&K.state==="unblocked",`Invalid blocker state transition: ${ce.state} -> ${K.state}`);let Re=new Map(R.blockers);Re.set(G,K),_t({blockers:Re})}function Le({currentLocation:G,nextLocation:K,historyAction:ce}){if(ie.size===0)return;ie.size>1&&Un(!1,"A router only supports one blocker at a time");let Re=Array.from(ie.entries()),[Oe,nt]=Re[Re.length-1],Ye=R.blockers.get(Oe);if(!(Ye&&Ye.state==="proceeding")&&nt({currentLocation:G,nextLocation:K,historyAction:ce}))return Oe}function qe(G){let K=Pi(404,{pathname:G}),ce=m||d,{matches:Re,route:Oe}=ku(ce);return{notFoundMatches:Re,route:Oe,error:K}}function Ae(G,K,ce){if(E=G,M=K,T=ce||null,!x&&R.navigation===Kd){x=!0;let Re=vt(R.location,R.matches);Re!=null&&_t({restoreScrollPosition:Re})}return()=>{E=null,M=null,T=null}}function Ee(G,K){return T&&T(G,K.map(Re=>rE(Re,R.loaderData)))||G.key}function Pe(G,K){if(E&&M){let ce=Ee(G,K);E[ce]=M()}}function vt(G,K){if(E){let ce=Ee(G,K),Re=E[ce];if(typeof Re=="number")return Re}return null}function kt(G,K,ce){if(a.patchRoutesOnNavigation)if(G){if(Object.keys(G[0].params).length>0)return{active:!0,matches:fl(K,ce,p,!0)}}else return{active:!0,matches:fl(K,ce,p,!0)||[]};return{active:!1,matches:null}}async function Dt(G,K,ce,Re){if(!a.patchRoutesOnNavigation)return{type:"success",matches:G};let Oe=G;for(;;){let nt=m==null,Ye=m||d,ke=c;try{await a.patchRoutesOnNavigation({signal:ce,path:K,matches:Oe,fetcherKey:Re,patch:(ft,ot)=>{ce.aborted||e_(ft,ot,Ye,ke,u,!1)}})}catch(ft){return{type:"error",error:ft,partialMatches:Oe}}finally{nt&&!ce.aborted&&(d=[...d])}if(ce.aborted)return{type:"aborted"};let Qe=Sr(Ye,K,p),it=null;if(Qe){if(Object.keys(Qe[0].params).length===0)return{type:"success",matches:Qe};if(it=fl(Ye,K,p,!0),!(it&&Oe.length<it.length&&Ln(Oe,it.slice(0,Oe.length))))return{type:"success",matches:Qe}}if(it||(it=fl(Ye,K,p,!0)),!it||Ln(Oe,it))return{type:"success",matches:null};Oe=it}}function Ln(G,K){return G.length===K.length&&G.every((ce,Re)=>ce.route.id===K[Re].route.id)}function hi(G){c={},m=vl(G,u,void 0,c)}function rs(G,K,ce=!1){let Re=m==null;e_(G,K,m||d,c,u,ce),Re&&(d=[...d],_t({}))}return I={get basename(){return p},get future(){return g},get state(){return R},get routes(){return d},get window(){return e},initialize:We,subscribe:yt,enableScrollRestoration:Ae,navigate:bt,fetch:Wt,revalidate:Ht,createHref:G=>a.history.createHref(G),encodeLocation:G=>a.history.encodeLocation(G),getFetcher:Ie,resetFetcher:rt,deleteFetcher:De,dispose:Ve,getBlocker:Et,deleteBlocker:q,patchRoutes:rs,_internalFetchControllers:Y,_internalSetRoutes:hi,_internalSetStateDoNotUseOrYouWillBreakYourApp(G){_t(G)}},a.unstable_instrumentations&&(I=bE(I,a.unstable_instrumentations.map(G=>G.router).filter(Boolean))),I}function FE(a){return a!=null&&("formData"in a&&a.formData!=null||"body"in a&&a.body!==void 0)}function Uh(a,e,i,s,l,u){let c,d;if(l){c=[];for(let p of e)if(c.push(p),p.route.id===l){d=p;break}}else c=e,d=e[e.length-1];let m=Np(s||".",Lp(c),Hi(a.pathname,i)||a.pathname,u==="path");if(s==null&&(m.search=a.search,m.hash=a.hash),(s==null||s===""||s===".")&&d){let p=Fp(m.search);if(d.route.index&&!p)m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index";else if(!d.route.index&&p){let v=new URLSearchParams(m.search),g=v.getAll("index");v.delete("index"),g.filter(y=>y).forEach(y=>v.append("index",y));let _=v.toString();m.search=_?`?${_}`:""}}return i!=="/"&&(m.pathname=_E({basename:i,pathname:m.pathname})),ua(m)}function Jv(a,e,i){if(!i||!FE(i))return{path:e};if(i.formMethod&&!tb(i.formMethod))return{path:e,error:Pi(405,{method:i.formMethod})};let s=()=>({path:e,error:Pi(400,{type:"invalid-body"})}),u=(i.formMethod||"get").toUpperCase(),c=Px(e);if(i.body!==void 0){if(i.formEncType==="text/plain"){if(!$n(u))return s();let g=typeof i.body=="string"?i.body:i.body instanceof FormData||i.body instanceof URLSearchParams?Array.from(i.body.entries()).reduce((_,[y,E])=>`${_}${y}=${E}
`,""):String(i.body);return{path:e,submission:{formMethod:u,formAction:c,formEncType:i.formEncType,formData:void 0,json:void 0,text:g}}}else if(i.formEncType==="application/json"){if(!$n(u))return s();try{let g=typeof i.body=="string"?JSON.parse(i.body):i.body;return{path:e,submission:{formMethod:u,formAction:c,formEncType:i.formEncType,formData:void 0,json:g,text:void 0}}}catch{return s()}}}Ct(typeof FormData=="function","FormData is not available in this environment");let d,m;if(i.formData)d=Oh(i.formData),m=i.formData;else if(i.body instanceof FormData)d=Oh(i.body),m=i.body;else if(i.body instanceof URLSearchParams)d=i.body,m=r_(d);else if(i.body==null)d=new URLSearchParams,m=new FormData;else try{d=new URLSearchParams(i.body),m=r_(d)}catch{return s()}let p={formMethod:u,formAction:c,formEncType:i&&i.formEncType||"application/x-www-form-urlencoded",formData:m,json:void 0,text:void 0};if($n(p.formMethod))return{path:e,submission:p};let v=Rr(e);return a&&v.search&&Fp(v.search)&&d.append("index",""),v.search=`?${d}`,{path:ua(v),submission:p}}function $v(a,e,i,s,l,u,c,d,m,p,v,g,_,y,E,T,M,x,D,L,O){let z=L?Ei(L[1])?L[1].error:L[1].data:void 0,I=l.createURL(u.location),R=l.createURL(m),k;if(v&&u.errors){let ne=Object.keys(u.errors)[0];k=c.findIndex(P=>P.route.id===ne)}else if(L&&Ei(L[1])){let ne=L[0];k=c.findIndex(P=>P.route.id===ne)-1}let A=L?L[1].statusCode:void 0,U=A&&A>=400,B={currentUrl:I,currentParams:u.matches[0]?.params||{},nextUrl:R,nextParams:c[0].params,...d,actionResult:z,actionStatus:A},J=bl(c),te=c.map((ne,P)=>{let{route:H}=ne,Y=null;if(k!=null&&P>k?Y=!1:H.lazy?Y=!0:Op(H)?v?Y=Lh(H,u.loaderData,u.errors):zE(u.loaderData,u.matches[P],ne)&&(Y=!0):Y=!1,Y!==null)return Nh(i,s,a,J,ne,p,e,Y);let xe=!1;typeof O=="boolean"?xe=O:U?xe=!1:(g||I.pathname+I.search===R.pathname+R.search||I.search!==R.search||IE(u.matches[P],ne))&&(xe=!0);let ye={...B,defaultShouldRevalidate:xe},N=ml(ne,ye);return Nh(i,s,a,J,ne,p,e,N,ye,O)}),fe=[];return E.forEach((ne,P)=>{if(v||!c.some(Ce=>Ce.route.id===ne.routeId)||y.has(P))return;let H=u.fetchers.get(P),Y=H&&H.state!=="idle"&&H.data===void 0,xe=Sr(M,ne.path,x);if(!xe){if(D&&Y)return;fe.push({key:P,routeId:ne.routeId,path:ne.path,matches:null,match:null,request:null,controller:null});return}if(T.has(P))return;let ye=mc(xe,ne.path),N=new AbortController,ee=Js(l,ne.path,N.signal),ge=null;if(_.has(P))_.delete(P),ge=eo(i,s,ee,xe,ye,p,e);else if(Y)g&&(ge=eo(i,s,ee,xe,ye,p,e));else{let Ce;typeof O=="boolean"?Ce=O:U?Ce=!1:Ce=g;let Fe={...B,defaultShouldRevalidate:Ce};ml(ye,Fe)&&(ge=eo(i,s,ee,xe,ye,p,e,Fe))}ge&&fe.push({key:P,routeId:ne.routeId,path:ne.path,matches:ge,match:ye,request:ee,controller:N})}),{dsMatches:te,revalidatingFetchers:fe}}function Op(a){return a.loader!=null||a.middleware!=null&&a.middleware.length>0}function Lh(a,e,i){if(a.lazy)return!0;if(!Op(a))return!1;let s=e!=null&&a.id in e,l=i!=null&&i[a.id]!==void 0;return!s&&l?!1:typeof a.loader=="function"&&a.loader.hydrate===!0?!0:!s&&!l}function zE(a,e,i){let s=!e||i.route.id!==e.route.id,l=!a.hasOwnProperty(i.route.id);return s||l}function IE(a,e){let i=a.route.path;return a.pathname!==e.pathname||i!=null&&i.endsWith("*")&&a.params["*"]!==e.params["*"]}function ml(a,e){if(a.route.shouldRevalidate){let i=a.route.shouldRevalidate(e);if(typeof i=="boolean")return i}return e.defaultShouldRevalidate}function e_(a,e,i,s,l,u){let c;if(a){let p=s[a];Ct(p,`No route found to patch children into: routeId = ${a}`),p.children||(p.children=[]),c=p.children}else c=i;let d=[],m=[];if(e.forEach(p=>{let v=c.find(g=>Dx(p,g));v?m.push({existingRoute:v,newRoute:p}):d.push(p)}),d.length>0){let p=vl(d,l,[a||"_","patch",String(c?.length||"0")],s);c.push(...p)}if(u&&m.length>0)for(let p=0;p<m.length;p++){let{existingRoute:v,newRoute:g}=m[p],_=v,[y]=vl([g],l,[],{},!0);Object.assign(_,{element:y.element?y.element:_.element,errorElement:y.errorElement?y.errorElement:_.errorElement,hydrateFallbackElement:y.hydrateFallbackElement?y.hydrateFallbackElement:_.hydrateFallbackElement})}}function Dx(a,e){return"id"in a&&"id"in e&&a.id===e.id?!0:a.index===e.index&&a.path===e.path&&a.caseSensitive===e.caseSensitive?(!a.children||a.children.length===0)&&(!e.children||e.children.length===0)?!0:a.children.every((i,s)=>e.children?.some(l=>Dx(i,l))):!1}var t_=new WeakMap,Ux=({key:a,route:e,manifest:i,mapRouteProperties:s})=>{let l=i[e.id];if(Ct(l,"No route found in manifest"),!l.lazy||typeof l.lazy!="object")return;let u=l.lazy[a];if(!u)return;let c=t_.get(l);c||(c={},t_.set(l,c));let d=c[a];if(d)return d;let m=(async()=>{let p=tE(a),g=l[a]!==void 0&&a!=="hasErrorBoundary";if(p)Un(!p,"Route property "+a+" is not a supported lazy route property. This property will be ignored."),c[a]=Promise.resolve();else if(g)Un(!1,`Route "${l.id}" has a static property "${a}" defined. The lazy property will be ignored.`);else{let _=await u();_!=null&&(Object.assign(l,{[a]:_}),Object.assign(l,s(l)))}typeof l.lazy=="object"&&(l.lazy[a]=void 0,Object.values(l.lazy).every(_=>_===void 0)&&(l.lazy=void 0))})();return c[a]=m,m},n_=new WeakMap;function BE(a,e,i,s,l){let u=i[a.id];if(Ct(u,"No route found in manifest"),!a.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof a.lazy=="function"){let v=n_.get(u);if(v)return{lazyRoutePromise:v,lazyHandlerPromise:v};let g=(async()=>{Ct(typeof a.lazy=="function","No lazy route function found");let _=await a.lazy(),y={};for(let E in _){let T=_[E];if(T===void 0)continue;let M=iE(E),D=u[E]!==void 0&&E!=="hasErrorBoundary";M?Un(!M,"Route property "+E+" is not a supported property to be returned from a lazy route function. This property will be ignored."):D?Un(!D,`Route "${u.id}" has a static property "${E}" defined but its lazy function is also returning a value for this property. The lazy route property "${E}" will be ignored.`):y[E]=T}Object.assign(u,y),Object.assign(u,{...s(u),lazy:void 0})})();return n_.set(u,g),g.catch(()=>{}),{lazyRoutePromise:g,lazyHandlerPromise:g}}let c=Object.keys(a.lazy),d=[],m;for(let v of c){if(l&&l.includes(v))continue;let g=Ux({key:v,route:a,manifest:i,mapRouteProperties:s});g&&(d.push(g),v===e&&(m=g))}let p=d.length>0?Promise.all(d).then(()=>{}):void 0;return p?.catch(()=>{}),m?.catch(()=>{}),{lazyRoutePromise:p,lazyHandlerPromise:m}}async function i_(a){let e=a.matches.filter(l=>l.shouldLoad),i={};return(await Promise.all(e.map(l=>l.resolve()))).forEach((l,u)=>{i[e[u].route.id]=l}),i}async function HE(a){return a.matches.some(e=>e.route.middleware)?Lx(a,()=>i_(a)):i_(a)}function Lx(a,e){return GE(a,e,s=>{if(eb(s))throw s;return s},KE,i);function i(s,l,u){if(u)return Promise.resolve(Object.assign(u.value,{[l]:{type:"error",result:s}}));{let{matches:c}=a,d=Math.min(Math.max(c.findIndex(p=>p.route.id===l),0),Math.max(c.findIndex(p=>p.shouldCallHandler()),0)),m=Mr(c,c[d].route.id).route.id;return Promise.resolve({[m]:{type:"error",result:s}})}}}async function GE(a,e,i,s,l){let{matches:u,request:c,params:d,context:m,unstable_pattern:p}=a,v=u.flatMap(_=>_.route.middleware?_.route.middleware.map(y=>[_.route.id,y]):[]);return await Nx({request:c,params:d,context:m,unstable_pattern:p},v,e,i,s,l)}async function Nx(a,e,i,s,l,u,c=0){let{request:d}=a;if(d.signal.aborted)throw d.signal.reason??new Error(`Request aborted: ${d.method} ${d.url}`);let m=e[c];if(!m)return await i();let[p,v]=m,g,_=async()=>{if(g)throw new Error("You may only call `next()` once per middleware");try{return g={value:await Nx(a,e,i,s,l,u,c+1)},g.value}catch(y){return g={value:await u(y,p,g)},g.value}};try{let y=await v(a,_),E=y!=null?s(y):void 0;return l(E)?E:g?E??g.value:(g={value:await _()},g.value)}catch(y){return await u(y,p,g)}}function Ox(a,e,i,s,l){let u=Ux({key:"middleware",route:s.route,manifest:e,mapRouteProperties:a}),c=BE(s.route,$n(i.method)?"action":"loader",e,a,l);return{middleware:u,route:c.lazyRoutePromise,handler:c.lazyHandlerPromise}}function Nh(a,e,i,s,l,u,c,d,m=null,p){let v=!1,g=Ox(a,e,i,l,u);return{...l,_lazyPromises:g,shouldLoad:d,shouldRevalidateArgs:m,shouldCallHandler(_){return v=!0,m?typeof p=="boolean"?ml(l,{...m,defaultShouldRevalidate:p}):typeof _=="boolean"?ml(l,{...m,defaultShouldRevalidate:_}):ml(l,m):d},resolve(_){let{lazy:y,loader:E,middleware:T}=l.route,M=v||d||_&&!$n(i.method)&&(y||E),x=T&&T.length>0&&!E&&!y;return M&&($n(i.method)||!x)?kE({request:i,unstable_pattern:s,match:l,lazyHandlerPromise:g?.handler,lazyRoutePromise:g?.route,handlerOverride:_,scopedContext:c}):Promise.resolve({type:"data",result:void 0})}}}function eo(a,e,i,s,l,u,c,d=null){return s.map(m=>m.route.id!==l.route.id?{...m,shouldLoad:!1,shouldRevalidateArgs:d,shouldCallHandler:()=>!1,_lazyPromises:Ox(a,e,i,m,u),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Nh(a,e,i,bl(s),m,u,c,!0,d))}async function VE(a,e,i,s,l,u){i.some(p=>p._lazyPromises?.middleware)&&await Promise.all(i.map(p=>p._lazyPromises?.middleware));let c={request:e,unstable_pattern:bl(i),params:i[0].params,context:l,matches:i},m=await a({...c,fetcherKey:s,runClientMiddleware:p=>{let v=c;return Lx(v,()=>p({...v,fetcherKey:s,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(i.flatMap(p=>[p._lazyPromises?.handler,p._lazyPromises?.route]))}catch{}return m}async function kE({request:a,unstable_pattern:e,match:i,lazyHandlerPromise:s,lazyRoutePromise:l,handlerOverride:u,scopedContext:c}){let d,m,p=$n(a.method),v=p?"action":"loader",g=_=>{let y,E=new Promise((x,D)=>y=D);m=()=>y(),a.signal.addEventListener("abort",m);let T=x=>typeof _!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${v}" [routeId: ${i.route.id}]`)):_({request:a,unstable_pattern:e,params:i.params,context:c},...x!==void 0?[x]:[]),M=(async()=>{try{return{type:"data",result:await(u?u(D=>T(D)):T())}}catch(x){return{type:"error",result:x}}})();return Promise.race([M,E])};try{let _=p?i.route.action:i.route.loader;if(s||l)if(_){let y,[E]=await Promise.all([g(_).catch(T=>{y=T}),s,l]);if(y!==void 0)throw y;d=E}else{await s;let y=p?i.route.action:i.route.loader;if(y)[d]=await Promise.all([g(y),l]);else if(v==="action"){let E=new URL(a.url),T=E.pathname+E.search;throw Pi(405,{method:a.method,pathname:T,routeId:i.route.id})}else return{type:"data",result:void 0}}else if(_)d=await g(_);else{let y=new URL(a.url),E=y.pathname+y.search;throw Pi(404,{pathname:E})}}catch(_){return{type:"error",result:_}}finally{m&&a.signal.removeEventListener("abort",m)}return d}async function XE(a){let e=a.headers.get("Content-Type");return e&&/\bapplication\/json\b/.test(e)?a.body==null?null:a.json():a.text()}async function WE(a){let{result:e,type:i}=a;if(Pp(e)){let s;try{s=await XE(e)}catch(l){return{type:"error",error:l}}return i==="error"?{type:"error",error:new El(e.status,e.statusText,s),statusCode:e.status,headers:e.headers}:{type:"data",data:s,statusCode:e.status,headers:e.headers}}return i==="error"?u_(e)?e.data instanceof Error?{type:"error",error:e.data,statusCode:e.init?.status,headers:e.init?.headers?new Headers(e.init.headers):void 0}:{type:"error",error:ZE(e),statusCode:_l(e)?e.status:void 0,headers:e.init?.headers?new Headers(e.init.headers):void 0}:{type:"error",error:e,statusCode:_l(e)?e.status:void 0}:u_(e)?{type:"data",data:e.data,statusCode:e.init?.status,headers:e.init?.headers?new Headers(e.init.headers):void 0}:{type:"data",data:e}}function qE(a,e,i,s,l){let u=a.headers.get("Location");if(Ct(u,"Redirects returned/thrown from loaders/actions must have a Location header"),!Up(u)){let c=s.slice(0,s.findIndex(d=>d.route.id===i)+1);u=Uh(new URL(e.url),c,l,u),a.headers.set("Location",u)}return a}function a_(a,e,i,s){let l=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(Up(a)){let u=a,c=u.startsWith("//")?new URL(e.protocol+u):new URL(u);if(l.includes(c.protocol))throw new Error("Invalid redirect location");let d=Hi(c.pathname,i)!=null;if(c.origin===e.origin&&d)return c.pathname+c.search+c.hash}try{let u=s.createURL(a);if(l.includes(u.protocol))throw new Error("Invalid redirect location")}catch{}return a}function Js(a,e,i,s){let l=a.createURL(Px(e)).toString(),u={signal:i};if(s&&$n(s.formMethod)){let{formMethod:c,formEncType:d}=s;u.method=c.toUpperCase(),d==="application/json"?(u.headers=new Headers({"Content-Type":d}),u.body=JSON.stringify(s.json)):d==="text/plain"?u.body=s.text:d==="application/x-www-form-urlencoded"&&s.formData?u.body=Oh(s.formData):u.body=s.formData}return new Request(l,u)}function Oh(a){let e=new URLSearchParams;for(let[i,s]of a.entries())e.append(i,typeof s=="string"?s:s.name);return e}function r_(a){let e=new FormData;for(let[i,s]of a.entries())e.append(i,s);return e}function YE(a,e,i,s=!1,l=!1){let u={},c=null,d,m=!1,p={},v=i&&Ei(i[1])?i[1].error:void 0;return a.forEach(g=>{if(!(g.route.id in e))return;let _=g.route.id,y=e[_];if(Ct(!$r(y),"Cannot handle redirect results in processLoaderData"),Ei(y)){let E=y.error;if(v!==void 0&&(E=v,v=void 0),c=c||{},l)c[_]=E;else{let T=Mr(a,_);c[T.route.id]==null&&(c[T.route.id]=E)}s||(u[_]=wx),m||(m=!0,d=_l(y.error)?y.error.status:500),y.headers&&(p[_]=y.headers)}else u[_]=y.data,y.statusCode&&y.statusCode!==200&&!m&&(d=y.statusCode),y.headers&&(p[_]=y.headers)}),v!==void 0&&i&&(c={[i[0]]:v},i[2]&&(u[i[2]]=void 0)),{loaderData:u,errors:c,statusCode:d||200,loaderHeaders:p}}function s_(a,e,i,s,l,u){let{loaderData:c,errors:d}=YE(e,i,s);return l.filter(m=>!m.matches||m.matches.some(p=>p.shouldLoad)).forEach(m=>{let{key:p,match:v,controller:g}=m;if(g&&g.signal.aborted)return;let _=u[p];if(Ct(_,"Did not find corresponding fetcher result"),Ei(_)){let y=Mr(a.matches,v?.route.id);d&&d[y.route.id]||(d={...d,[y.route.id]:_.error}),a.fetchers.delete(p)}else if($r(_))Ct(!1,"Unhandled fetcher revalidation redirect");else{let y=Fa(_.data);a.fetchers.set(p,y)}}),{loaderData:c,errors:d}}function o_(a,e,i,s){let l=Object.entries(e).filter(([,u])=>u!==wx).reduce((u,[c,d])=>(u[c]=d,u),{});for(let u of i){let c=u.route.id;if(!e.hasOwnProperty(c)&&a.hasOwnProperty(c)&&u.route.loader&&(l[c]=a[c]),s&&s.hasOwnProperty(c))break}return l}function l_(a){return a?Ei(a[1])?{actionData:{}}:{actionData:{[a[0]]:a[1].data}}:{}}function Mr(a,e){return(e?a.slice(0,a.findIndex(s=>s.route.id===e)+1):[...a]).reverse().find(s=>s.route.hasErrorBoundary===!0)||a[0]}function ku(a){let e=a.length===1?a[0]:a.find(i=>i.index||!i.path||i.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Pi(a,{pathname:e,routeId:i,method:s,type:l,message:u}={}){let c="Unknown Server Error",d="Unknown @remix-run/router error";return a===400?(c="Bad Request",s&&e&&i?d=`You made a ${s} request to "${e}" but did not provide a \`loader\` for route "${i}", so there is no way to handle the request.`:l==="invalid-body"&&(d="Unable to encode submission body")):a===403?(c="Forbidden",d=`Route "${i}" does not match URL "${e}"`):a===404?(c="Not Found",d=`No route matches URL "${e}"`):a===405&&(c="Method Not Allowed",s&&e&&i?d=`You made a ${s.toUpperCase()} request to "${e}" but did not provide an \`action\` for route "${i}", so there is no way to handle the request.`:s&&(d=`Invalid request method "${s.toUpperCase()}"`)),new El(a||500,c,new Error(d),!0)}function Xu(a){let e=Object.entries(a);for(let i=e.length-1;i>=0;i--){let[s,l]=e[i];if($r(l))return{key:s,result:l}}}function Px(a){let e=typeof a=="string"?Rr(a):a;return ua({...e,hash:""})}function jE(a,e){return a.pathname!==e.pathname||a.search!==e.search?!1:a.hash===""?e.hash!=="":a.hash===e.hash?!0:e.hash!==""}function ZE(a){return new El(a.init?.status??500,a.init?.statusText??"Internal Server Error",a.data)}function KE(a){return a!=null&&typeof a=="object"&&Object.entries(a).every(([e,i])=>typeof e=="string"&&QE(i))}function QE(a){return a!=null&&typeof a=="object"&&"type"in a&&"result"in a&&(a.type==="data"||a.type==="error")}function JE(a){return Pp(a.result)&&Rx.has(a.result.status)}function Ei(a){return a.type==="error"}function $r(a){return(a&&a.type)==="redirect"}function u_(a){return typeof a=="object"&&a!=null&&"type"in a&&"data"in a&&"init"in a&&a.type==="DataWithResponseInit"}function Pp(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.headers=="object"&&typeof a.body<"u"}function $E(a){return Rx.has(a)}function eb(a){return Pp(a)&&$E(a.status)&&a.headers.has("Location")}function tb(a){return UE.has(a.toUpperCase())}function $n(a){return wE.has(a.toUpperCase())}function Fp(a){return new URLSearchParams(a).getAll("index").some(e=>e==="")}function mc(a,e){let i=typeof e=="string"?Rr(e).search:e.search;if(a[a.length-1].route.index&&Fp(i||""))return a[a.length-1];let s=Mx(a);return s[s.length-1]}function c_(a){let{formMethod:e,formAction:i,formEncType:s,text:l,formData:u,json:c}=a;if(!(!e||!i||!s)){if(l!=null)return{formMethod:e,formAction:i,formEncType:s,formData:void 0,json:void 0,text:l};if(u!=null)return{formMethod:e,formAction:i,formEncType:s,formData:u,json:void 0,text:void 0};if(c!==void 0)return{formMethod:e,formAction:i,formEncType:s,formData:void 0,json:c,text:void 0}}}function Qd(a,e){return e?{state:"loading",location:a,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:a,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function nb(a,e){return{state:"submitting",location:a,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function tl(a,e){return a?{state:"loading",formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function ib(a,e){return{state:"submitting",formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text,data:e?e.data:void 0}}function Fa(a){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:a}}function ab(a,e){try{let i=a.sessionStorage.getItem(Cx);if(i){let s=JSON.parse(i);for(let[l,u]of Object.entries(s||{}))u&&Array.isArray(u)&&e.set(l,new Set(u||[]))}}catch{}}function rb(a,e){if(e.size>0){let i={};for(let[s,l]of e)i[s]=[...l];try{a.sessionStorage.setItem(Cx,JSON.stringify(i))}catch(s){Un(!1,`Failed to save applied view transitions in sessionStorage (${s}).`)}}}function f_(){let a,e,i=new Promise((s,l)=>{a=async u=>{s(u);try{await i}catch{}},e=async u=>{l(u);try{await i}catch{}}});return{promise:i,resolve:a,reject:e}}var as=oe.createContext(null);as.displayName="DataRouter";var Tl=oe.createContext(null);Tl.displayName="DataRouterState";var Fx=oe.createContext(!1);function sb(){return oe.useContext(Fx)}var zp=oe.createContext({isTransitioning:!1});zp.displayName="ViewTransition";var zx=oe.createContext(new Map);zx.displayName="Fetchers";var ob=oe.createContext(null);ob.displayName="Await";var Vi=oe.createContext(null);Vi.displayName="Navigation";var wc=oe.createContext(null);wc.displayName="Location";var da=oe.createContext({outlet:null,matches:[],isDataRoute:!1});da.displayName="Route";var Ip=oe.createContext(null);Ip.displayName="RouteError";var Ix="REACT_ROUTER_ERROR",lb="REDIRECT",ub="ROUTE_ERROR_RESPONSE";function cb(a){if(a.startsWith(`${Ix}:${lb}:{`))try{let e=JSON.parse(a.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function fb(a){if(a.startsWith(`${Ix}:${ub}:{`))try{let e=JSON.parse(a.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new El(e.status,e.statusText,e.data)}catch{}}function db(a,{relative:e}={}){Ct(Al(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=oe.useContext(Vi),{hash:l,pathname:u,search:c}=Rl(a,{relative:e}),d=u;return i!=="/"&&(d=u==="/"?i:oa([i,u])),s.createHref({pathname:d,search:c,hash:l})}function Al(){return oe.useContext(wc)!=null}function Wa(){return Ct(Al(),"useLocation() may be used only in the context of a <Router> component."),oe.useContext(wc).location}var Bx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Hx(a){oe.useContext(Vi).static||oe.useLayoutEffect(a)}function Dc(){let{isDataRoute:a}=oe.useContext(da);return a?Rb():hb()}function hb(){Ct(Al(),"useNavigate() may be used only in the context of a <Router> component.");let a=oe.useContext(as),{basename:e,navigator:i}=oe.useContext(Vi),{matches:s}=oe.useContext(da),{pathname:l}=Wa(),u=JSON.stringify(Lp(s)),c=oe.useRef(!1);return Hx(()=>{c.current=!0}),oe.useCallback((m,p={})=>{if(Un(c.current,Bx),!c.current)return;if(typeof m=="number"){i.go(m);return}let v=Np(m,JSON.parse(u),l,p.relative==="path");a==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:oa([e,v.pathname])),(p.replace?i.replace:i.push)(v,p.state,p)},[e,i,u,l,a])}var pb=oe.createContext(null);function mb(a){let e=oe.useContext(da).outlet;return oe.useMemo(()=>e&&oe.createElement(pb.Provider,{value:a},e),[e,a])}function Rl(a,{relative:e}={}){let{matches:i}=oe.useContext(da),{pathname:s}=Wa(),l=JSON.stringify(Lp(i));return oe.useMemo(()=>Np(a,JSON.parse(l),s,e==="path"),[a,l,s,e])}function gb(a,e,i,s,l){Ct(Al(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=oe.useContext(Vi),{matches:c}=oe.useContext(da),d=c[c.length-1],m=d?d.params:{},p=d?d.pathname:"/",v=d?d.pathnameBase:"/",g=d&&d.route;{let D=g&&g.path||"";Vx(p,!g||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let _=Wa(),y;y=_;let E=y.pathname||"/",T=E;if(v!=="/"){let D=v.replace(/^\//,"").split("/");T="/"+E.replace(/^\//,"").split("/").slice(D.length).join("/")}let M=Sr(a,{pathname:T});return Un(g||M!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Un(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Sb(M&&M.map(D=>Object.assign({},D,{params:Object.assign({},m,D.params),pathname:oa([v,u.encodeLocation?u.encodeLocation(D.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?v:oa([v,u.encodeLocation?u.encodeLocation(D.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),c,i,s,l)}function vb(){let a=Ab(),e=_l(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),i=a instanceof Error?a.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",a),c=oe.createElement(oe.Fragment,null,oe.createElement("p",null,"💿 Hey developer 👋"),oe.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",oe.createElement("code",{style:u},"ErrorBoundary")," or"," ",oe.createElement("code",{style:u},"errorElement")," prop on your route.")),oe.createElement(oe.Fragment,null,oe.createElement("h2",null,"Unexpected Application Error!"),oe.createElement("h3",{style:{fontStyle:"italic"}},e),i?oe.createElement("pre",{style:l},i):null,c)}var _b=oe.createElement(vb,null),Gx=class extends oe.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){this.props.onError?this.props.onError(a,e):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const i=fb(a.digest);i&&(a=i)}let e=a!==void 0?oe.createElement(da.Provider,{value:this.props.routeContext},oe.createElement(Ip.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?oe.createElement(xb,{error:a},e):e}};Gx.contextType=Fx;var Jd=new WeakMap;function xb({children:a,error:e}){let{basename:i}=oe.useContext(Vi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=cb(e.digest);if(s){let l=Jd.get(e);if(l)throw l;let u=bx(s.location,i);if(Ex&&!Jd.get(e))if(u.isExternal||s.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:s.replace}));throw Jd.set(e,c),c}return oe.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return a}function yb({routeContext:a,match:e,children:i}){let s=oe.useContext(as);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),oe.createElement(da.Provider,{value:a},i)}function Sb(a,e=[],i=null,s=null,l=null){if(a==null){if(!i)return null;if(i.errors)a=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)a=i.matches;else return null}let u=a,c=i?.errors;if(c!=null){let v=u.findIndex(g=>g.route.id&&c?.[g.route.id]!==void 0);Ct(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),u=u.slice(0,Math.min(u.length,v+1))}let d=!1,m=-1;if(i)for(let v=0;v<u.length;v++){let g=u[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=v),g.route.id){let{loaderData:_,errors:y}=i,E=g.route.loader&&!_.hasOwnProperty(g.route.id)&&(!y||y[g.route.id]===void 0);if(g.route.lazy||E){d=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}let p=i&&s?(v,g)=>{s(v,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:bl(i.matches),errorInfo:g})}:void 0;return u.reduceRight((v,g,_)=>{let y,E=!1,T=null,M=null;i&&(y=c&&g.route.id?c[g.route.id]:void 0,T=g.route.errorElement||_b,d&&(m<0&&_===0?(Vx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,M=null):m===_&&(E=!0,M=g.route.hydrateFallbackElement||null)));let x=e.concat(u.slice(0,_+1)),D=()=>{let L;return y?L=T:E?L=M:g.route.Component?L=oe.createElement(g.route.Component,null):g.route.element?L=g.route.element:L=v,oe.createElement(yb,{match:g,routeContext:{outlet:v,matches:x,isDataRoute:i!=null},children:L})};return i&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?oe.createElement(Gx,{location:i.location,revalidation:i.revalidation,component:T,error:y,children:D(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:p}):D()},null)}function Bp(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mb(a){let e=oe.useContext(as);return Ct(e,Bp(a)),e}function Eb(a){let e=oe.useContext(Tl);return Ct(e,Bp(a)),e}function bb(a){let e=oe.useContext(da);return Ct(e,Bp(a)),e}function Hp(a){let e=bb(a),i=e.matches[e.matches.length-1];return Ct(i.route.id,`${a} can only be used on routes that contain a unique "id"`),i.route.id}function Tb(){return Hp("useRouteId")}function Ab(){let a=oe.useContext(Ip),e=Eb("useRouteError"),i=Hp("useRouteError");return a!==void 0?a:e.errors?.[i]}function Rb(){let{router:a}=Mb("useNavigate"),e=Hp("useNavigate"),i=oe.useRef(!1);return Hx(()=>{i.current=!0}),oe.useCallback(async(l,u={})=>{Un(i.current,Bx),i.current&&(typeof l=="number"?await a.navigate(l):await a.navigate(l,{fromRouteId:e,...u}))},[a,e])}var d_={};function Vx(a,e,i){!e&&!d_[a]&&(d_[a]=!0,Un(!1,i))}var h_={};function p_(a,e){!a&&!h_[e]&&(h_[e]=!0,console.warn(e))}var Cb="useOptimistic",m_=HM[Cb],wb=()=>{};function Db(a){return m_?m_(a):[a,wb]}function Ub(a){let e={hasErrorBoundary:a.hasErrorBoundary||a.ErrorBoundary!=null||a.errorElement!=null};return a.Component&&(a.element&&Un(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(e,{element:oe.createElement(a.Component),Component:void 0})),a.HydrateFallback&&(a.hydrateFallbackElement&&Un(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(e,{hydrateFallbackElement:oe.createElement(a.HydrateFallback),HydrateFallback:void 0})),a.ErrorBoundary&&(a.errorElement&&Un(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(e,{errorElement:oe.createElement(a.ErrorBoundary),ErrorBoundary:void 0})),e}var Lb=["HydrateFallback","hydrateFallbackElement"],Nb=class{constructor(){this.status="pending",this.promise=new Promise((a,e)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",a(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",e(i))}})}};function Ob({router:a,flushSync:e,onError:i,unstable_useTransitions:s}){s=sb()||s;let[u,c]=oe.useState(a.state),[d,m]=Db(u),[p,v]=oe.useState(),[g,_]=oe.useState({isTransitioning:!1}),[y,E]=oe.useState(),[T,M]=oe.useState(),[x,D]=oe.useState(),L=oe.useRef(new Map),O=oe.useCallback((k,{deletedFetchers:A,newErrors:U,flushSync:B,viewTransitionOpts:J})=>{U&&i&&Object.values(U).forEach(fe=>i(fe,{location:k.location,params:k.matches[0]?.params??{},unstable_pattern:bl(k.matches)})),k.fetchers.forEach((fe,ne)=>{fe.data!==void 0&&L.current.set(ne,fe.data)}),A.forEach(fe=>L.current.delete(fe)),p_(B===!1||e!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let te=a.window!=null&&a.window.document!=null&&typeof a.window.document.startViewTransition=="function";if(p_(J==null||te,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!J||!te){e&&B?e(()=>c(k)):s===!1?c(k):oe.startTransition(()=>{s===!0&&m(fe=>g_(fe,k)),c(k)});return}if(e&&B){e(()=>{T&&(y?.resolve(),T.skipTransition()),_({isTransitioning:!0,flushSync:!0,currentLocation:J.currentLocation,nextLocation:J.nextLocation})});let fe=a.window.document.startViewTransition(()=>{e(()=>c(k))});fe.finished.finally(()=>{e(()=>{E(void 0),M(void 0),v(void 0),_({isTransitioning:!1})})}),e(()=>M(fe));return}T?(y?.resolve(),T.skipTransition(),D({state:k,currentLocation:J.currentLocation,nextLocation:J.nextLocation})):(v(k),_({isTransitioning:!0,flushSync:!1,currentLocation:J.currentLocation,nextLocation:J.nextLocation}))},[a.window,e,T,y,s,m,i]);oe.useLayoutEffect(()=>a.subscribe(O),[a,O]),oe.useEffect(()=>{g.isTransitioning&&!g.flushSync&&E(new Nb)},[g]),oe.useEffect(()=>{if(y&&p&&a.window){let k=p,A=y.promise,U=a.window.document.startViewTransition(async()=>{s===!1?c(k):oe.startTransition(()=>{s===!0&&m(B=>g_(B,k)),c(k)}),await A});U.finished.finally(()=>{E(void 0),M(void 0),v(void 0),_({isTransitioning:!1})}),M(U)}},[p,y,a.window,s,m]),oe.useEffect(()=>{y&&p&&d.location.key===p.location.key&&y.resolve()},[y,T,d.location,p]),oe.useEffect(()=>{!g.isTransitioning&&x&&(v(x.state),_({isTransitioning:!0,flushSync:!1,currentLocation:x.currentLocation,nextLocation:x.nextLocation}),D(void 0))},[g.isTransitioning,x]);let z=oe.useMemo(()=>({createHref:a.createHref,encodeLocation:a.encodeLocation,go:k=>a.navigate(k),push:(k,A,U)=>a.navigate(k,{state:A,preventScrollReset:U?.preventScrollReset}),replace:(k,A,U)=>a.navigate(k,{replace:!0,state:A,preventScrollReset:U?.preventScrollReset})}),[a]),I=a.basename||"/",R=oe.useMemo(()=>({router:a,navigator:z,static:!1,basename:I,onError:i}),[a,z,I,i]);return oe.createElement(oe.Fragment,null,oe.createElement(as.Provider,{value:R},oe.createElement(Tl.Provider,{value:d},oe.createElement(zx.Provider,{value:L.current},oe.createElement(zp.Provider,{value:g},oe.createElement(Ib,{basename:I,location:d.location,navigationType:d.historyAction,navigator:z,unstable_useTransitions:s},oe.createElement(Pb,{routes:a.routes,future:a.future,state:d,onError:i})))))),null)}function g_(a,e){return{...a,navigation:e.navigation.state!=="idle"?e.navigation:a.navigation,revalidation:e.revalidation!=="idle"?e.revalidation:a.revalidation,actionData:e.navigation.state!=="submitting"?e.actionData:a.actionData,fetchers:e.fetchers}}var Pb=oe.memo(Fb);function Fb({routes:a,future:e,state:i,onError:s}){return gb(a,void 0,i,s,e)}function zb(a){return mb(a.context)}function dl(a){Ct(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ib({basename:a="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:u=!1,unstable_useTransitions:c}){Ct(!Al(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=a.replace(/^\/*/,"/"),m=oe.useMemo(()=>({basename:d,navigator:l,static:u,unstable_useTransitions:c,future:{}}),[d,l,u,c]);typeof i=="string"&&(i=Rr(i));let{pathname:p="/",search:v="",hash:g="",state:_=null,key:y="default"}=i,E=oe.useMemo(()=>{let T=Hi(p,d);return T==null?null:{location:{pathname:T,search:v,hash:g,state:_,key:y},navigationType:s}},[d,p,v,g,_,y,s]);return Un(E!=null,`<Router basename="${d}"> is not able to match the URL "${p}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:oe.createElement(Vi.Provider,{value:m},oe.createElement(wc.Provider,{children:e,value:E}))}function Ph(a,e=[]){let i=[];return oe.Children.forEach(a,(s,l)=>{if(!oe.isValidElement(s))return;let u=[...e,l];if(s.type===oe.Fragment){i.push.apply(i,Ph(s.props.children,u));return}Ct(s.type===dl,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ct(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Ph(s.props.children,u)),i.push(c)}),i}var Bb=Ph,gc="get",vc="application/x-www-form-urlencoded";function Uc(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function Hb(a){return Uc(a)&&a.tagName.toLowerCase()==="button"}function Gb(a){return Uc(a)&&a.tagName.toLowerCase()==="form"}function Vb(a){return Uc(a)&&a.tagName.toLowerCase()==="input"}function kb(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function Xb(a,e){return a.button===0&&(!e||e==="_self")&&!kb(a)}var Wu=null;function Wb(){if(Wu===null)try{new FormData(document.createElement("form"),0),Wu=!1}catch{Wu=!0}return Wu}var qb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function $d(a){return a!=null&&!qb.has(a)?(Un(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${vc}"`),null):a}function Yb(a,e){let i,s,l,u,c;if(Gb(a)){let d=a.getAttribute("action");s=d?Hi(d,e):null,i=a.getAttribute("method")||gc,l=$d(a.getAttribute("enctype"))||vc,u=new FormData(a)}else if(Hb(a)||Vb(a)&&(a.type==="submit"||a.type==="image")){let d=a.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||d.getAttribute("action");if(s=m?Hi(m,e):null,i=a.getAttribute("formmethod")||d.getAttribute("method")||gc,l=$d(a.getAttribute("formenctype"))||$d(d.getAttribute("enctype"))||vc,u=new FormData(d,a),!Wb()){let{name:p,type:v,value:g}=a;if(v==="image"){let _=p?`${p}.`:"";u.append(`${_}x`,"0"),u.append(`${_}y`,"0")}else p&&u.append(p,g)}}else{if(Uc(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=gc,s=null,l=vc,c=a}return u&&l==="text/plain"&&(c=u,u=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:u,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Gp(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function jb(a,e,i,s){let l=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:e&&Hi(l.pathname,e)==="/"?l.pathname=`${e.replace(/\/$/,"")}/_root.${s}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${s}`,l}async function Zb(a,e){if(a.id in e)return e[a.id];try{let i=await import(a.module);return e[a.id]=i,i}catch(i){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Kb(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Qb(a,e,i){let s=await Promise.all(a.map(async l=>{let u=e.routes[l.route.id];if(u){let c=await Zb(u,i);return c.links?c.links():[]}return[]}));return tT(s.flat(1).filter(Kb).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function v_(a,e,i,s,l,u){let c=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return u==="assets"?e.filter((m,p)=>c(m,p)||d(m,p)):u==="data"?e.filter((m,p)=>{let v=s.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(c(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function Jb(a,e,{includeHydrateFallback:i}={}){return $b(a.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function $b(a){return[...new Set(a)]}function eT(a){let e={},i=Object.keys(a).sort();for(let s of i)e[s]=a[s];return e}function tT(a,e){let i=new Set;return new Set(e),a.reduce((s,l)=>{let u=JSON.stringify(eT(l));return i.has(u)||(i.add(u),s.push({key:u,link:l})),s},[])}function kx(){let a=oe.useContext(as);return Gp(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function nT(){let a=oe.useContext(Tl);return Gp(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Vp=oe.createContext(void 0);Vp.displayName="FrameworkContext";function Xx(){let a=oe.useContext(Vp);return Gp(a,"You must render this element inside a <HydratedRouter> element"),a}function iT(a,e){let i=oe.useContext(Vp),[s,l]=oe.useState(!1),[u,c]=oe.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:v,onTouchStart:g}=e,_=oe.useRef(null);oe.useEffect(()=>{if(a==="render"&&c(!0),a==="viewport"){let T=x=>{x.forEach(D=>{c(D.isIntersecting)})},M=new IntersectionObserver(T,{threshold:.5});return _.current&&M.observe(_.current),()=>{M.disconnect()}}},[a]),oe.useEffect(()=>{if(s){let T=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(T)}}},[s]);let y=()=>{l(!0)},E=()=>{l(!1),c(!1)};return i?a!=="intent"?[u,_,{}]:[u,_,{onFocus:nl(d,y),onBlur:nl(m,E),onMouseEnter:nl(p,y),onMouseLeave:nl(v,E),onTouchStart:nl(g,y)}]:[!1,_,{}]}function nl(a,e){return i=>{a&&a(i),i.defaultPrevented||e(i)}}function aT({page:a,...e}){let{router:i}=kx(),s=oe.useMemo(()=>Sr(i.routes,a,i.basename),[i.routes,a,i.basename]);return s?oe.createElement(sT,{page:a,matches:s,...e}):null}function rT(a){let{manifest:e,routeModules:i}=Xx(),[s,l]=oe.useState([]);return oe.useEffect(()=>{let u=!1;return Qb(a,e,i).then(c=>{u||l(c)}),()=>{u=!0}},[a,e,i]),s}function sT({page:a,matches:e,...i}){let s=Wa(),{future:l,manifest:u,routeModules:c}=Xx(),{basename:d}=kx(),{loaderData:m,matches:p}=nT(),v=oe.useMemo(()=>v_(a,e,p,u,s,"data"),[a,e,p,u,s]),g=oe.useMemo(()=>v_(a,e,p,u,s,"assets"),[a,e,p,u,s]),_=oe.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let T=new Set,M=!1;if(e.forEach(D=>{let L=u.routes[D.route.id];!L||!L.hasLoader||(!v.some(O=>O.route.id===D.route.id)&&D.route.id in m&&c[D.route.id]?.shouldRevalidate||L.hasClientLoader?M=!0:T.add(D.route.id))}),T.size===0)return[];let x=jb(a,d,l.unstable_trailingSlashAwareDataRequests,"data");return M&&T.size>0&&x.searchParams.set("_routes",e.filter(D=>T.has(D.route.id)).map(D=>D.route.id).join(",")),[x.pathname+x.search]},[d,l.unstable_trailingSlashAwareDataRequests,m,s,u,v,e,a,c]),y=oe.useMemo(()=>Jb(g,u),[g,u]),E=rT(g);return oe.createElement(oe.Fragment,null,_.map(T=>oe.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...i})),y.map(T=>oe.createElement("link",{key:T,rel:"modulepreload",href:T,...i})),E.map(({key:T,link:M})=>oe.createElement("link",{key:T,nonce:i.nonce,...M,crossOrigin:M.crossOrigin??i.crossOrigin})))}function oT(...a){return e=>{a.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var lT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{lT&&(window.__reactRouterVersion="7.13.0")}catch{}function uT(a,e){return PE({basename:e?.basename,getContext:e?.getContext,future:e?.future,history:QM({window:e?.window}),hydrationData:cT(),routes:a,mapRouteProperties:Ub,hydrationRouteProperties:Lb,dataStrategy:e?.dataStrategy,patchRoutesOnNavigation:e?.patchRoutesOnNavigation,window:e?.window,unstable_instrumentations:e?.unstable_instrumentations}).initialize()}function cT(){let a=window?.__staticRouterHydrationData;return a&&a.errors&&(a={...a,errors:fT(a.errors)}),a}function fT(a){if(!a)return null;let e=Object.entries(a),i={};for(let[s,l]of e)if(l&&l.__type==="RouteErrorResponse")i[s]=new El(l.status,l.statusText,l.data,l.internal===!0);else if(l&&l.__type==="Error"){if(l.__subType){let u=window[l.__subType];if(typeof u=="function")try{let c=new u(l.message);c.stack="",i[s]=c}catch{}}if(i[s]==null){let u=new Error(l.message);u.stack="",i[s]=u}}else i[s]=l;return i}var Wx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qx=oe.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:u,replace:c,state:d,target:m,to:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:_,...y},E){let{basename:T,unstable_useTransitions:M}=oe.useContext(Vi),x=typeof p=="string"&&Wx.test(p),D=bx(p,T);p=D.to;let L=db(p,{relative:l}),[O,z,I]=iT(s,y),R=mT(p,{replace:c,state:d,target:m,preventScrollReset:v,relative:l,viewTransition:g,unstable_defaultShouldRevalidate:_,unstable_useTransitions:M});function k(U){e&&e(U),U.defaultPrevented||R(U)}let A=oe.createElement("a",{...y,...I,href:D.absoluteURL||L,onClick:D.isExternal||u?e:k,ref:oT(E,z),target:m,"data-discover":!x&&i==="render"?"true":void 0});return O&&!x?oe.createElement(oe.Fragment,null,A,oe.createElement(aT,{page:L})):A});qx.displayName="Link";var dT=oe.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:u,to:c,viewTransition:d,children:m,...p},v){let g=Rl(c,{relative:p.relative}),_=Wa(),y=oe.useContext(Tl),{navigator:E,basename:T}=oe.useContext(Vi),M=y!=null&&yT(g)&&d===!0,x=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,D=_.pathname,L=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(D=D.toLowerCase(),L=L?L.toLowerCase():null,x=x.toLowerCase()),L&&T&&(L=Hi(L,T)||L);const O=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let z=D===x||!l&&D.startsWith(x)&&D.charAt(O)==="/",I=L!=null&&(L===x||!l&&L.startsWith(x)&&L.charAt(x.length)==="/"),R={isActive:z,isPending:I,isTransitioning:M},k=z?e:void 0,A;typeof s=="function"?A=s(R):A=[s,z?"active":null,I?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let U=typeof u=="function"?u(R):u;return oe.createElement(qx,{...p,"aria-current":k,className:A,ref:v,style:U,to:c,viewTransition:d},typeof m=="function"?m(R):m)});dT.displayName="NavLink";var hT=oe.forwardRef(({discover:a="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:u,method:c=gc,action:d,onSubmit:m,relative:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:_,...y},E)=>{let{unstable_useTransitions:T}=oe.useContext(Vi),M=_T(),x=xT(d,{relative:p}),D=c.toLowerCase()==="get"?"get":"post",L=typeof d=="string"&&Wx.test(d),O=z=>{if(m&&m(z),z.defaultPrevented)return;z.preventDefault();let I=z.nativeEvent.submitter,R=I?.getAttribute("formmethod")||c,k=()=>M(I||z.currentTarget,{fetcherKey:e,method:R,navigate:i,replace:l,state:u,relative:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:_});T&&i!==!1?oe.startTransition(()=>k()):k()};return oe.createElement("form",{ref:E,method:D,action:x,onSubmit:s?m:O,...y,"data-discover":!L&&a==="render"?"true":void 0})});hT.displayName="Form";function pT(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yx(a){let e=oe.useContext(as);return Ct(e,pT(a)),e}function mT(a,{target:e,replace:i,state:s,preventScrollReset:l,relative:u,viewTransition:c,unstable_defaultShouldRevalidate:d,unstable_useTransitions:m}={}){let p=Dc(),v=Wa(),g=Rl(a,{relative:u});return oe.useCallback(_=>{if(Xb(_,e)){_.preventDefault();let y=i!==void 0?i:ua(v)===ua(g),E=()=>p(a,{replace:y,state:s,preventScrollReset:l,relative:u,viewTransition:c,unstable_defaultShouldRevalidate:d});m?oe.startTransition(()=>E()):E()}},[v,p,g,i,s,e,a,l,u,c,d,m])}var gT=0,vT=()=>`__${String(++gT)}__`;function _T(){let{router:a}=Yx("useSubmit"),{basename:e}=oe.useContext(Vi),i=Tb(),s=a.fetch,l=a.navigate;return oe.useCallback(async(u,c={})=>{let{action:d,method:m,encType:p,formData:v,body:g}=Yb(u,e);if(c.navigate===!1){let _=c.fetcherKey||vT();await s(_,i,c.action||d,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:v,body:g,formMethod:c.method||m,formEncType:c.encType||p,flushSync:c.flushSync})}else await l(c.action||d,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:v,body:g,formMethod:c.method||m,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:i,flushSync:c.flushSync,viewTransition:c.viewTransition})},[s,l,e,i])}function xT(a,{relative:e}={}){let{basename:i}=oe.useContext(Vi),s=oe.useContext(da);Ct(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),u={...Rl(a||".",{relative:e})},c=Wa();if(a==null){u.search=c.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(v=>v==="")){d.delete("index"),m.filter(g=>g).forEach(g=>d.append("index",g));let v=d.toString();u.search=v?`?${v}`:""}}return(!a||a===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:oa([i,u.pathname])),ua(u)}function yT(a,{relative:e}={}){let i=oe.useContext(zp);Ct(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Yx("useViewTransitionState"),l=Rl(a,{relative:e});if(!i.isTransitioning)return!1;let u=Hi(i.currentLocation.pathname,s)||i.currentLocation.pathname,c=Hi(i.nextLocation.pathname,s)||i.nextLocation.pathname;return bc(l.pathname,c)!=null||bc(l.pathname,u)!=null}var ST=gx();function MT(a){return oe.createElement(Ob,{flushSync:ST.flushSync,...a})}const ET=a=>{const e=is.c(36);let i,s,l,u,c,d,m,p,v;e[0]!==a?({children:i,className:l,blurAmount:u,bgOpacity:c,contentBgOpacity:d,borderOpacity:m,noiseOpacity:p,borderRadius:v,...s}=a,e[0]=a,e[1]=i,e[2]=s,e[3]=l,e[4]=u,e[5]=c,e[6]=d,e[7]=m,e[8]=p,e[9]=v):(i=e[1],s=e[2],l=e[3],u=e[4],c=e[5],d=e[6],m=e[7],p=e[8],v=e[9]);const g=l===void 0?"":l,_=u===void 0?5:u,y=c===void 0?0:c,E=d===void 0?0:d,T=m===void 0?.025:m,M=p===void 0?.08:p,x=v===void 0?18:v,D=`glass-card-wrapper ${g}`,L=`${x}px`;let O;e[10]!==L?(O={borderRadius:L},e[10]=L,e[11]=O):O=e[11];const z=`blur(${_}px)`,I=`blur(${_}px)`,R=`rgba(0, 0, 0, ${y})`,k=`${x}px`;let A;e[12]!==z||e[13]!==I||e[14]!==R||e[15]!==k?(A=Me.jsx("div",{className:"glass-card-backdrop",style:{backdropFilter:z,WebkitBackdropFilter:I,backgroundColor:R,borderRadius:k}}),e[12]=z,e[13]=I,e[14]=R,e[15]=k,e[16]=A):A=e[16];const U=`rgba(255, 255, 255, ${T})`,B=`${x}px`;let J;e[17]!==U||e[18]!==B?(J=Me.jsx("div",{className:"glass-card-border-glow",style:{borderColor:U,borderRadius:B}}),e[17]=U,e[18]=B,e[19]=J):J=e[19];let te;e[20]!==M?(te=Me.jsx("div",{className:"glass-card-noise",style:{opacity:M}}),e[20]=M,e[21]=te):te=e[21];const fe=`rgba(0, 0, 0, ${E})`,ne=`${x}px`;let P;e[22]!==fe||e[23]!==ne?(P={backgroundColor:fe,borderRadius:ne},e[22]=fe,e[23]=ne,e[24]=P):P=e[24];let H;e[25]!==i||e[26]!==P?(H=Me.jsx("div",{className:"glass-card-content",style:P,children:i}),e[25]=i,e[26]=P,e[27]=H):H=e[27];let Y;return e[28]!==s||e[29]!==O||e[30]!==A||e[31]!==J||e[32]!==te||e[33]!==H||e[34]!==D?(Y=Me.jsxs("div",{className:D,style:O,...s,children:[A,J,te,H]}),e[28]=s,e[29]=O,e[30]=A,e[31]=J,e[32]=te,e[33]=H,e[34]=D,e[35]=Y):Y=e[35],Y},bT="/assets/planeteerLogo-CKxXUtkp.png",TT=()=>{const a=is.c(1);let e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(e=Me.jsx(ET,{className:"navbarCont",blurAmount:0,bgOpacity:.15,contentBgOpacity:0,borderOpacity:0,noiseOpacity:0,borderRadius:18,children:Me.jsx("div",{className:"navbar",children:Me.jsxs("div",{className:"logo",children:[Me.jsx("img",{src:bT,alt:"PlaneTeer Logo",className:"logo-image"}),Me.jsx("h1",{children:"PlaneTeer"})]})})}),a[0]=e):e=a[0],e};const kp="182",AT=0,__=1,RT=2,_c=1,CT=2,hl=3,Ar=0,fi=1,za=2,Ba=0,to=1,x_=2,y_=3,S_=4,wT=5,Qr=100,DT=101,UT=102,LT=103,NT=104,OT=200,PT=201,FT=202,zT=203,Fh=204,zh=205,IT=206,BT=207,HT=208,GT=209,VT=210,kT=211,XT=212,WT=213,qT=214,Ih=0,Bh=1,Hh=2,io=3,Gh=4,Vh=5,kh=6,Xh=7,jx=0,YT=1,jT=2,la=0,Zx=1,Kx=2,Qx=3,Jx=4,$x=5,ey=6,ty=7,ny=300,ns=301,ao=302,Wh=303,qh=304,Lc=306,Yh=1e3,Ia=1001,jh=1002,Pn=1003,ZT=1004,qu=1005,ei=1006,eh=1007,es=1008,Ii=1009,iy=1010,ay=1011,xl=1012,Xp=1013,ca=1014,Bi=1015,Va=1016,Wp=1017,qp=1018,yl=1020,ry=35902,sy=35899,oy=1021,ly=1022,bi=1023,ka=1026,ts=1027,uy=1028,Yp=1029,ro=1030,jp=1031,Zp=1033,xc=33776,yc=33777,Sc=33778,Mc=33779,Zh=35840,Kh=35841,Qh=35842,Jh=35843,$h=36196,ep=37492,tp=37496,np=37488,ip=37489,ap=37490,rp=37491,sp=37808,op=37809,lp=37810,up=37811,cp=37812,fp=37813,dp=37814,hp=37815,pp=37816,mp=37817,gp=37818,vp=37819,_p=37820,xp=37821,yp=36492,Sp=36494,Mp=36495,Ep=36283,bp=36284,Tp=36285,Ap=36286,KT=3200,QT=0,JT=1,Er="",Fi="srgb",so="srgb-linear",Tc="linear",tn="srgb",Is=7680,M_=519,$T=512,e1=513,t1=514,Kp=515,n1=516,i1=517,Qp=518,a1=519,E_=35044,b_="300 es",sa=2e3,Ac=2001;function cy(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Rc(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function r1(){const a=Rc("canvas");return a.style.display="block",a}const T_={};function A_(...a){const e="THREE."+a.shift();console.log(e,...a)}function Mt(...a){const e="THREE."+a.shift();console.warn(e,...a)}function jt(...a){const e="THREE."+a.shift();console.error(e,...a)}function Sl(...a){const e=a.join(" ");e in T_||(T_[e]=!0,Mt(...a))}function s1(a,e,i){return new Promise(function(s,l){function u(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}class lo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,c=l.length;u<c;u++)l[u].call(this,e);e.target=null}}}const Qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],th=Math.PI/180,Rp=180/Math.PI;function Cl(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Qn[a&255]+Qn[a>>8&255]+Qn[a>>16&255]+Qn[a>>24&255]+"-"+Qn[e&255]+Qn[e>>8&255]+"-"+Qn[e>>16&15|64]+Qn[e>>24&255]+"-"+Qn[i&63|128]+Qn[i>>8&255]+"-"+Qn[i>>16&255]+Qn[i>>24&255]+Qn[s&255]+Qn[s>>8&255]+Qn[s>>16&255]+Qn[s>>24&255]).toLowerCase()}function Vt(a,e,i){return Math.max(e,Math.min(i,a))}function o1(a,e){return(a%e+e)%e}function nh(a,e,i){return(1-i)*a+i*e}function il(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function ci(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class ln{constructor(e=0,i=0){ln.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Vt(this.x,e.x,i.x),this.y=Vt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Vt(this.x,e,i),this.y=Vt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Vt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Vt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,c=this.y-e.y;return this.x=u*s-c*l+e.x,this.y=u*l+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wl{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,c,d){let m=s[l+0],p=s[l+1],v=s[l+2],g=s[l+3],_=u[c+0],y=u[c+1],E=u[c+2],T=u[c+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g;return}if(d>=1){e[i+0]=_,e[i+1]=y,e[i+2]=E,e[i+3]=T;return}if(g!==T||m!==_||p!==y||v!==E){let M=m*_+p*y+v*E+g*T;M<0&&(_=-_,y=-y,E=-E,T=-T,M=-M);let x=1-d;if(M<.9995){const D=Math.acos(M),L=Math.sin(D);x=Math.sin(x*D)/L,d=Math.sin(d*D)/L,m=m*x+_*d,p=p*x+y*d,v=v*x+E*d,g=g*x+T*d}else{m=m*x+_*d,p=p*x+y*d,v=v*x+E*d,g=g*x+T*d;const D=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=D,p*=D,v*=D,g*=D}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,u,c){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],g=u[c],_=u[c+1],y=u[c+2],E=u[c+3];return e[i]=d*E+v*g+m*y-p*_,e[i+1]=m*E+v*_+p*g-d*y,e[i+2]=p*E+v*y+d*_-m*g,e[i+3]=v*E-d*g-m*_-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,c=e._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),g=d(u/2),_=m(s/2),y=m(l/2),E=m(u/2);switch(c){case"XYZ":this._x=_*v*g+p*y*E,this._y=p*y*g-_*v*E,this._z=p*v*E+_*y*g,this._w=p*v*g-_*y*E;break;case"YXZ":this._x=_*v*g+p*y*E,this._y=p*y*g-_*v*E,this._z=p*v*E-_*y*g,this._w=p*v*g+_*y*E;break;case"ZXY":this._x=_*v*g-p*y*E,this._y=p*y*g+_*v*E,this._z=p*v*E+_*y*g,this._w=p*v*g-_*y*E;break;case"ZYX":this._x=_*v*g-p*y*E,this._y=p*y*g+_*v*E,this._z=p*v*E-_*y*g,this._w=p*v*g+_*y*E;break;case"YZX":this._x=_*v*g+p*y*E,this._y=p*y*g+_*v*E,this._z=p*v*E-_*y*g,this._w=p*v*g-_*y*E;break;case"XZY":this._x=_*v*g-p*y*E,this._y=p*y*g-_*v*E,this._z=p*v*E+_*y*g,this._w=p*v*g+_*y*E;break;default:Mt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],c=i[1],d=i[5],m=i[9],p=i[2],v=i[6],g=i[10],_=s+d+g;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(v-m)*y,this._y=(u-p)*y,this._z=(c-l)*y}else if(s>d&&s>g){const y=2*Math.sqrt(1+s-d-g);this._w=(v-m)/y,this._x=.25*y,this._y=(l+c)/y,this._z=(u+p)/y}else if(d>g){const y=2*Math.sqrt(1+d-s-g);this._w=(u-p)/y,this._x=(l+c)/y,this._y=.25*y,this._z=(m+v)/y}else{const y=2*Math.sqrt(1+g-s-d);this._w=(c-l)/y,this._x=(u+p)/y,this._y=(m+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,c=e._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+c*d+l*p-u*m,this._y=l*v+c*m+u*d-s*p,this._z=u*v+c*p+s*m-l*d,this._w=c*v-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,u=e._z,c=e._w,d=this.dot(e);d<0&&(s=-s,l=-l,u=-u,c=-c,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+c*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+c*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class de{constructor(e=0,i=0,s=0){de.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(R_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(R_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,c=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*c,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*c,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*c,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,c=e.y,d=e.z,m=e.w,p=2*(c*l-d*s),v=2*(d*i-u*l),g=2*(u*s-c*i);return this.x=i+m*p+c*g-d*v,this.y=s+m*v+d*p-u*g,this.z=l+m*g+u*v-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Vt(this.x,e.x,i.x),this.y=Vt(this.y,e.y,i.y),this.z=Vt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Vt(this.x,e,i),this.y=Vt(this.y,e,i),this.z=Vt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Vt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,c=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*c-s*m,this.z=s*d-l*c,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Vt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ih=new de,R_=new wl;class Rt{constructor(e,i,s,l,u,c,d,m,p){Rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,c,d,m,p)}set(e,i,s,l,u,c,d,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=m,v[6]=s,v[7]=c,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,c=s[0],d=s[3],m=s[6],p=s[1],v=s[4],g=s[7],_=s[2],y=s[5],E=s[8],T=l[0],M=l[3],x=l[6],D=l[1],L=l[4],O=l[7],z=l[2],I=l[5],R=l[8];return u[0]=c*T+d*D+m*z,u[3]=c*M+d*L+m*I,u[6]=c*x+d*O+m*R,u[1]=p*T+v*D+g*z,u[4]=p*M+v*L+g*I,u[7]=p*x+v*O+g*R,u[2]=_*T+y*D+E*z,u[5]=_*M+y*L+E*I,u[8]=_*x+y*O+E*R,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],c=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return i*c*v-i*d*p-s*u*v+s*d*m+l*u*p-l*c*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],c=e[4],d=e[5],m=e[6],p=e[7],v=e[8],g=v*c-d*p,_=d*m-v*u,y=p*u-c*m,E=i*g+s*_+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(l*p-v*s)*T,e[2]=(d*s-l*c)*T,e[3]=_*T,e[4]=(v*i-l*m)*T,e[5]=(l*u-d*i)*T,e[6]=y*T,e[7]=(s*m-p*i)*T,e[8]=(c*i-s*u)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,c,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*c+p*d)+c+e,-l*p,l*m,-l*(-p*c+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(ah.makeScale(e,i)),this}rotate(e){return this.premultiply(ah.makeRotation(-e)),this}translate(e,i){return this.premultiply(ah.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ah=new Rt,C_=new Rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),w_=new Rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function l1(){const a={enabled:!0,workingColorSpace:so,spaces:{},convert:function(l,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===tn&&(l.r=Ha(l.r),l.g=Ha(l.g),l.b=Ha(l.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===tn&&(l.r=no(l.r),l.g=no(l.g),l.b=no(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Er?Tc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,c){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Sl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Sl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return a.define({[so]:{primaries:e,whitePoint:s,transfer:Tc,toXYZ:C_,fromXYZ:w_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Fi},outputColorSpaceConfig:{drawingBufferColorSpace:Fi}},[Fi]:{primaries:e,whitePoint:s,transfer:tn,toXYZ:C_,fromXYZ:w_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Fi}}}),a}const Xt=l1();function Ha(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function no(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Bs;class u1{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Bs===void 0&&(Bs=Rc("canvas")),Bs.width=e.width,Bs.height=e.height;const l=Bs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Bs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Rc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let c=0;c<u.length;c++)u[c]=Ha(u[c]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ha(i[s]/255)*255):i[s]=Ha(i[s]);return{data:i,width:e.width,height:e.height}}else return Mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let c1=0;class Jp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=Cl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let c=0,d=l.length;c<d;c++)l[c].isDataTexture?u.push(rh(l[c].image)):u.push(rh(l[c]))}else u=rh(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function rh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?u1.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(Mt("Texture: Unable to serialize Texture."),{})}let f1=0;const sh=new de;class ii extends lo{constructor(e=ii.DEFAULT_IMAGE,i=ii.DEFAULT_MAPPING,s=Ia,l=Ia,u=ei,c=es,d=bi,m=Ii,p=ii.DEFAULT_ANISOTROPY,v=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f1++}),this.uuid=Cl(),this.name="",this.source=new Jp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ln(0,0),this.repeat=new ln(1,1),this.center=new ln(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){Mt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Mt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ny)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yh:e.x=e.x-Math.floor(e.x);break;case Ia:e.x=e.x<0?0:1;break;case jh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yh:e.y=e.y-Math.floor(e.y);break;case Ia:e.y=e.y<0?0:1;break;case jh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=ny;ii.DEFAULT_ANISOTROPY=1;class En{constructor(e=0,i=0,s=0,l=1){En.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l+c[12]*u,this.y=c[1]*i+c[5]*s+c[9]*l+c[13]*u,this.z=c[2]*i+c[6]*s+c[10]*l+c[14]*u,this.w=c[3]*i+c[7]*s+c[11]*l+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],v=m[4],g=m[8],_=m[1],y=m[5],E=m[9],T=m[2],M=m[6],x=m[10];if(Math.abs(v-_)<.01&&Math.abs(g-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+_)<.1&&Math.abs(g+T)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,O=(y+1)/2,z=(x+1)/2,I=(v+_)/4,R=(g+T)/4,k=(E+M)/4;return L>O&&L>z?L<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(L),l=I/s,u=R/s):O>z?O<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(O),s=I/l,u=k/l):z<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(z),s=R/u,l=k/u),this.set(s,l,u,i),this}let D=Math.sqrt((M-E)*(M-E)+(g-T)*(g-T)+(_-v)*(_-v));return Math.abs(D)<.001&&(D=1),this.x=(M-E)/D,this.y=(g-T)/D,this.z=(_-v)/D,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Vt(this.x,e.x,i.x),this.y=Vt(this.y,e.y,i.y),this.z=Vt(this.z,e.z,i.z),this.w=Vt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Vt(this.x,e,i),this.y=Vt(this.y,e,i),this.z=Vt(this.z,e,i),this.w=Vt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Vt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class d1 extends lo{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new En(0,0,e,i),this.scissorTest=!1,this.viewport=new En(0,0,e,i);const l={width:e,height:i,depth:s.depth},u=new ii(l);this.textures=[];const c=s.count;for(let d=0;d<c;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:ei,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Jp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends d1{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class fy extends ii{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ia,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class h1 extends ii{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ia,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dl{constructor(e=new de(1/0,1/0,1/0),i=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=u.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Yi):Yi.fromBufferAttribute(u,c),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Yu.copy(s.boundingBox)),Yu.applyMatrix4(e.matrixWorld),this.union(Yu)}const l=e.children;for(let u=0,c=l.length;u<c;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(al),ju.subVectors(this.max,al),Hs.subVectors(e.a,al),Gs.subVectors(e.b,al),Vs.subVectors(e.c,al),mr.subVectors(Gs,Hs),gr.subVectors(Vs,Gs),Xr.subVectors(Hs,Vs);let i=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Xr.z,Xr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Xr.z,0,-Xr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Xr.y,Xr.x,0];return!oh(i,Hs,Gs,Vs,ju)||(i=[1,0,0,0,1,0,0,0,1],!oh(i,Hs,Gs,Vs,ju))?!1:(Zu.crossVectors(mr,gr),i=[Zu.x,Zu.y,Zu.z],oh(i,Hs,Gs,Vs,ju))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ua),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ua=[new de,new de,new de,new de,new de,new de,new de,new de],Yi=new de,Yu=new Dl,Hs=new de,Gs=new de,Vs=new de,mr=new de,gr=new de,Xr=new de,al=new de,ju=new de,Zu=new de,Wr=new de;function oh(a,e,i,s,l){for(let u=0,c=a.length-3;u<=c;u+=3){Wr.fromArray(a,u);const d=l.x*Math.abs(Wr.x)+l.y*Math.abs(Wr.y)+l.z*Math.abs(Wr.z),m=e.dot(Wr),p=i.dot(Wr),v=s.dot(Wr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const p1=new Dl,rl=new de,lh=new de;class Nc{constructor(e=new de,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):p1.setFromPoints(e).getCenter(s);let l=0;for(let u=0,c=e.length;u<c;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rl.subVectors(e,this.center);const i=rl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(rl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rl.copy(e.center).add(lh)),this.expandByPoint(rl.copy(e.center).sub(lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const La=new de,uh=new de,Ku=new de,vr=new de,ch=new de,Qu=new de,fh=new de;class dy{constructor(e=new de,i=new de(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,La)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=La.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(La.copy(this.origin).addScaledVector(this.direction,i),La.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){uh.copy(e).add(i).multiplyScalar(.5),Ku.copy(i).sub(e).normalize(),vr.copy(this.origin).sub(uh);const u=e.distanceTo(i)*.5,c=-this.direction.dot(Ku),d=vr.dot(this.direction),m=-vr.dot(Ku),p=vr.lengthSq(),v=Math.abs(1-c*c);let g,_,y,E;if(v>0)if(g=c*m-d,_=c*d-m,E=u*v,g>=0)if(_>=-E)if(_<=E){const T=1/v;g*=T,_*=T,y=g*(g+c*_+2*d)+_*(c*g+_+2*m)+p}else _=u,g=Math.max(0,-(c*_+d)),y=-g*g+_*(_+2*m)+p;else _=-u,g=Math.max(0,-(c*_+d)),y=-g*g+_*(_+2*m)+p;else _<=-E?(g=Math.max(0,-(-c*u+d)),_=g>0?-u:Math.min(Math.max(-u,-m),u),y=-g*g+_*(_+2*m)+p):_<=E?(g=0,_=Math.min(Math.max(-u,-m),u),y=_*(_+2*m)+p):(g=Math.max(0,-(c*u+d)),_=g>0?u:Math.min(Math.max(-u,-m),u),y=-g*g+_*(_+2*m)+p);else _=c>0?-u:u,g=Math.max(0,-(c*_+d)),y=-g*g+_*(_+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(uh).addScaledVector(Ku,_),y}intersectSphere(e,i){La.subVectors(e.center,this.origin);const s=La.dot(this.direction),l=La.dot(La)-s*s,u=e.radius*e.radius;if(l>u)return null;const c=Math.sqrt(u-l),d=s-c,m=s+c;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,c,d,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,_=this.origin;return p>=0?(s=(e.min.x-_.x)*p,l=(e.max.x-_.x)*p):(s=(e.max.x-_.x)*p,l=(e.min.x-_.x)*p),v>=0?(u=(e.min.y-_.y)*v,c=(e.max.y-_.y)*v):(u=(e.max.y-_.y)*v,c=(e.min.y-_.y)*v),s>c||u>l||((u>s||isNaN(s))&&(s=u),(c<l||isNaN(l))&&(l=c),g>=0?(d=(e.min.z-_.z)*g,m=(e.max.z-_.z)*g):(d=(e.max.z-_.z)*g,m=(e.min.z-_.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,La)!==null}intersectTriangle(e,i,s,l,u){ch.subVectors(i,e),Qu.subVectors(s,e),fh.crossVectors(ch,Qu);let c=this.direction.dot(fh),d;if(c>0){if(l)return null;d=1}else if(c<0)d=-1,c=-c;else return null;vr.subVectors(this.origin,e);const m=d*this.direction.dot(Qu.crossVectors(vr,Qu));if(m<0)return null;const p=d*this.direction.dot(ch.cross(vr));if(p<0||m+p>c)return null;const v=-d*vr.dot(fh);return v<0?null:this.at(v/c,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bn{constructor(e,i,s,l,u,c,d,m,p,v,g,_,y,E,T,M){bn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,c,d,m,p,v,g,_,y,E,T,M)}set(e,i,s,l,u,c,d,m,p,v,g,_,y,E,T,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=u,x[5]=c,x[9]=d,x[13]=m,x[2]=p,x[6]=v,x[10]=g,x[14]=_,x[3]=y,x[7]=E,x[11]=T,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/ks.setFromMatrixColumn(e,0).length(),u=1/ks.setFromMatrixColumn(e,1).length(),c=1/ks.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*c,i[9]=s[9]*c,i[10]=s[10]*c,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,c=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const _=c*v,y=c*g,E=d*v,T=d*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=y+E*p,i[5]=_-T*p,i[9]=-d*m,i[2]=T-_*p,i[6]=E+y*p,i[10]=c*m}else if(e.order==="YXZ"){const _=m*v,y=m*g,E=p*v,T=p*g;i[0]=_+T*d,i[4]=E*d-y,i[8]=c*p,i[1]=c*g,i[5]=c*v,i[9]=-d,i[2]=y*d-E,i[6]=T+_*d,i[10]=c*m}else if(e.order==="ZXY"){const _=m*v,y=m*g,E=p*v,T=p*g;i[0]=_-T*d,i[4]=-c*g,i[8]=E+y*d,i[1]=y+E*d,i[5]=c*v,i[9]=T-_*d,i[2]=-c*p,i[6]=d,i[10]=c*m}else if(e.order==="ZYX"){const _=c*v,y=c*g,E=d*v,T=d*g;i[0]=m*v,i[4]=E*p-y,i[8]=_*p+T,i[1]=m*g,i[5]=T*p+_,i[9]=y*p-E,i[2]=-p,i[6]=d*m,i[10]=c*m}else if(e.order==="YZX"){const _=c*m,y=c*p,E=d*m,T=d*p;i[0]=m*v,i[4]=T-_*g,i[8]=E*g+y,i[1]=g,i[5]=c*v,i[9]=-d*v,i[2]=-p*v,i[6]=y*g+E,i[10]=_-T*g}else if(e.order==="XZY"){const _=c*m,y=c*p,E=d*m,T=d*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=_*g+T,i[5]=c*v,i[9]=y*g-E,i[2]=E*g-y,i[6]=d*v,i[10]=T*g+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(m1,e,g1)}lookAt(e,i,s){const l=this.elements;return Si.subVectors(e,i),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),_r.crossVectors(s,Si),_r.lengthSq()===0&&(Math.abs(s.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),_r.crossVectors(s,Si)),_r.normalize(),Ju.crossVectors(Si,_r),l[0]=_r.x,l[4]=Ju.x,l[8]=Si.x,l[1]=_r.y,l[5]=Ju.y,l[9]=Si.y,l[2]=_r.z,l[6]=Ju.z,l[10]=Si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,c=s[0],d=s[4],m=s[8],p=s[12],v=s[1],g=s[5],_=s[9],y=s[13],E=s[2],T=s[6],M=s[10],x=s[14],D=s[3],L=s[7],O=s[11],z=s[15],I=l[0],R=l[4],k=l[8],A=l[12],U=l[1],B=l[5],J=l[9],te=l[13],fe=l[2],ne=l[6],P=l[10],H=l[14],Y=l[3],xe=l[7],ye=l[11],N=l[15];return u[0]=c*I+d*U+m*fe+p*Y,u[4]=c*R+d*B+m*ne+p*xe,u[8]=c*k+d*J+m*P+p*ye,u[12]=c*A+d*te+m*H+p*N,u[1]=v*I+g*U+_*fe+y*Y,u[5]=v*R+g*B+_*ne+y*xe,u[9]=v*k+g*J+_*P+y*ye,u[13]=v*A+g*te+_*H+y*N,u[2]=E*I+T*U+M*fe+x*Y,u[6]=E*R+T*B+M*ne+x*xe,u[10]=E*k+T*J+M*P+x*ye,u[14]=E*A+T*te+M*H+x*N,u[3]=D*I+L*U+O*fe+z*Y,u[7]=D*R+L*B+O*ne+z*xe,u[11]=D*k+L*J+O*P+z*ye,u[15]=D*A+L*te+O*H+z*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],c=e[1],d=e[5],m=e[9],p=e[13],v=e[2],g=e[6],_=e[10],y=e[14],E=e[3],T=e[7],M=e[11],x=e[15],D=m*y-p*_,L=d*y-p*g,O=d*_-m*g,z=c*y-p*v,I=c*_-m*v,R=c*g-d*v;return i*(T*D-M*L+x*O)-s*(E*D-M*z+x*I)+l*(E*L-T*z+x*R)-u*(E*O-T*I+M*R)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],c=e[4],d=e[5],m=e[6],p=e[7],v=e[8],g=e[9],_=e[10],y=e[11],E=e[12],T=e[13],M=e[14],x=e[15],D=g*M*p-T*_*p+T*m*y-d*M*y-g*m*x+d*_*x,L=E*_*p-v*M*p-E*m*y+c*M*y+v*m*x-c*_*x,O=v*T*p-E*g*p+E*d*y-c*T*y-v*d*x+c*g*x,z=E*g*m-v*T*m-E*d*_+c*T*_+v*d*M-c*g*M,I=i*D+s*L+l*O+u*z;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return e[0]=D*R,e[1]=(T*_*u-g*M*u-T*l*y+s*M*y+g*l*x-s*_*x)*R,e[2]=(d*M*u-T*m*u+T*l*p-s*M*p-d*l*x+s*m*x)*R,e[3]=(g*m*u-d*_*u-g*l*p+s*_*p+d*l*y-s*m*y)*R,e[4]=L*R,e[5]=(v*M*u-E*_*u+E*l*y-i*M*y-v*l*x+i*_*x)*R,e[6]=(E*m*u-c*M*u-E*l*p+i*M*p+c*l*x-i*m*x)*R,e[7]=(c*_*u-v*m*u+v*l*p-i*_*p-c*l*y+i*m*y)*R,e[8]=O*R,e[9]=(E*g*u-v*T*u-E*s*y+i*T*y+v*s*x-i*g*x)*R,e[10]=(c*T*u-E*d*u+E*s*p-i*T*p-c*s*x+i*d*x)*R,e[11]=(v*d*u-c*g*u-v*s*p+i*g*p+c*s*y-i*d*y)*R,e[12]=z*R,e[13]=(v*T*l-E*g*l+E*s*_-i*T*_-v*s*M+i*g*M)*R,e[14]=(E*d*l-c*T*l-E*s*m+i*T*m+c*s*M-i*d*M)*R,e[15]=(c*g*l-v*d*l+v*s*m-i*g*m-c*s*_+i*d*_)*R,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,c=e.x,d=e.y,m=e.z,p=u*c,v=u*d;return this.set(p*c+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*c,0,p*m-l*d,v*m+l*c,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,c){return this.set(1,s,u,0,e,1,c,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,c=i._y,d=i._z,m=i._w,p=u+u,v=c+c,g=d+d,_=u*p,y=u*v,E=u*g,T=c*v,M=c*g,x=d*g,D=m*p,L=m*v,O=m*g,z=s.x,I=s.y,R=s.z;return l[0]=(1-(T+x))*z,l[1]=(y+O)*z,l[2]=(E-L)*z,l[3]=0,l[4]=(y-O)*I,l[5]=(1-(_+x))*I,l[6]=(M+D)*I,l[7]=0,l[8]=(E+L)*R,l[9]=(M-D)*R,l[10]=(1-(_+T))*R,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let u=ks.set(l[0],l[1],l[2]).length();const c=ks.set(l[4],l[5],l[6]).length(),d=ks.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),ji.copy(this);const p=1/u,v=1/c,g=1/d;return ji.elements[0]*=p,ji.elements[1]*=p,ji.elements[2]*=p,ji.elements[4]*=v,ji.elements[5]*=v,ji.elements[6]*=v,ji.elements[8]*=g,ji.elements[9]*=g,ji.elements[10]*=g,i.setFromRotationMatrix(ji),s.x=u,s.y=c,s.z=d,this}makePerspective(e,i,s,l,u,c,d=sa,m=!1){const p=this.elements,v=2*u/(i-e),g=2*u/(s-l),_=(i+e)/(i-e),y=(s+l)/(s-l);let E,T;if(m)E=u/(c-u),T=c*u/(c-u);else if(d===sa)E=-(c+u)/(c-u),T=-2*c*u/(c-u);else if(d===Ac)E=-c/(c-u),T=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,c,d=sa,m=!1){const p=this.elements,v=2/(i-e),g=2/(s-l),_=-(i+e)/(i-e),y=-(s+l)/(s-l);let E,T;if(m)E=1/(c-u),T=c/(c-u);else if(d===sa)E=-2/(c-u),T=-(c+u)/(c-u);else if(d===Ac)E=-1/(c-u),T=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const ks=new de,ji=new bn,m1=new de(0,0,0),g1=new de(1,1,1),_r=new de,Ju=new de,Si=new de,D_=new bn,U_=new wl;class Xa{constructor(e=0,i=0,s=0,l=Xa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],c=l[4],d=l[8],m=l[1],p=l[5],v=l[9],g=l[2],_=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Vt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Vt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,y),this._y=0);break;default:Mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return D_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(D_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return U_.setFromEuler(this),this.setFromQuaternion(U_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xa.DEFAULT_ORDER="XYZ";class hy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let v1=0;const L_=new de,Xs=new wl,Na=new bn,$u=new de,sl=new de,_1=new de,x1=new wl,N_=new de(1,0,0),O_=new de(0,1,0),P_=new de(0,0,1),F_={type:"added"},y1={type:"removed"},Ws={type:"childadded",child:null},dh={type:"childremoved",child:null};class di extends lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=Cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=di.DEFAULT_UP.clone();const e=new de,i=new Xa,s=new wl,l=new de(1,1,1);function u(){s.setFromEuler(i,!1)}function c(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new bn},normalMatrix:{value:new Rt}}),this.matrix=new bn,this.matrixWorld=new bn,this.matrixAutoUpdate=di.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Xs.setFromAxisAngle(e,i),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,i){return Xs.setFromAxisAngle(e,i),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(N_,e)}rotateY(e){return this.rotateOnAxis(O_,e)}rotateZ(e){return this.rotateOnAxis(P_,e)}translateOnAxis(e,i){return L_.copy(e).applyQuaternion(this.quaternion),this.position.add(L_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(N_,e)}translateY(e){return this.translateOnAxis(O_,e)}translateZ(e){return this.translateOnAxis(P_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Na.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?$u.copy(e):$u.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Na.lookAt(sl,$u,this.up):Na.lookAt($u,sl,this.up),this.quaternion.setFromRotationMatrix(Na),l&&(Na.extractRotation(l.matrixWorld),Xs.setFromRotationMatrix(Na),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(jt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(F_),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(y1),dh.child=e,this.dispatchEvent(dh),dh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Na.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Na.multiply(e.parent.matrixWorld)),e.applyMatrix4(Na),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(F_),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const c=this.children[s].getObjectByProperty(e,i);if(c!==void 0)return c}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,c=l.length;u<c;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,e,_1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,x1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,c=l.length;u<c;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];u(e.shapes,g)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=c(e.geometries),m=c(e.materials),p=c(e.textures),v=c(e.images),g=c(e.shapes),_=c(e.skeletons),y=c(e.animations),E=c(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),_.length>0&&(s.skeletons=_),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function c(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}di.DEFAULT_UP=new de(0,1,0);di.DEFAULT_MATRIX_AUTO_UPDATE=!0;di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zi=new de,Oa=new de,hh=new de,Pa=new de,qs=new de,Ys=new de,z_=new de,ph=new de,mh=new de,gh=new de,vh=new En,_h=new En,xh=new En;class Ki{constructor(e=new de,i=new de,s=new de){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Zi.subVectors(e,i),l.cross(Zi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Zi.subVectors(l,i),Oa.subVectors(s,i),hh.subVectors(e,i);const c=Zi.dot(Zi),d=Zi.dot(Oa),m=Zi.dot(hh),p=Oa.dot(Oa),v=Oa.dot(hh),g=c*p-d*d;if(g===0)return u.set(0,0,0),null;const _=1/g,y=(p*m-d*v)*_,E=(c*v-d*m)*_;return u.set(1-y-E,E,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Pa)===null?!1:Pa.x>=0&&Pa.y>=0&&Pa.x+Pa.y<=1}static getInterpolation(e,i,s,l,u,c,d,m){return this.getBarycoord(e,i,s,l,Pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Pa.x),m.addScaledVector(c,Pa.y),m.addScaledVector(d,Pa.z),m)}static getInterpolatedAttribute(e,i,s,l,u,c){return vh.setScalar(0),_h.setScalar(0),xh.setScalar(0),vh.fromBufferAttribute(e,i),_h.fromBufferAttribute(e,s),xh.fromBufferAttribute(e,l),c.setScalar(0),c.addScaledVector(vh,u.x),c.addScaledVector(_h,u.y),c.addScaledVector(xh,u.z),c}static isFrontFacing(e,i,s,l){return Zi.subVectors(s,i),Oa.subVectors(e,i),Zi.cross(Oa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zi.subVectors(this.c,this.b),Oa.subVectors(this.a,this.b),Zi.cross(Oa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ki.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ki.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Ki.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Ki.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ki.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let c,d;qs.subVectors(l,s),Ys.subVectors(u,s),ph.subVectors(e,s);const m=qs.dot(ph),p=Ys.dot(ph);if(m<=0&&p<=0)return i.copy(s);mh.subVectors(e,l);const v=qs.dot(mh),g=Ys.dot(mh);if(v>=0&&g<=v)return i.copy(l);const _=m*g-v*p;if(_<=0&&m>=0&&v<=0)return c=m/(m-v),i.copy(s).addScaledVector(qs,c);gh.subVectors(e,u);const y=qs.dot(gh),E=Ys.dot(gh);if(E>=0&&y<=E)return i.copy(u);const T=y*p-m*E;if(T<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(Ys,d);const M=v*E-y*g;if(M<=0&&g-v>=0&&y-E>=0)return z_.subVectors(u,l),d=(g-v)/(g-v+(y-E)),i.copy(l).addScaledVector(z_,d);const x=1/(M+T+_);return c=T*x,d=_*x,i.copy(s).addScaledVector(qs,c).addScaledVector(Ys,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const py={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},ec={h:0,s:0,l:0};function yh(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class nn{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Xt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Xt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Xt.workingColorSpace){if(e=o1(e,1),i=Vt(i,0,1),s=Vt(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,c=2*s-u;this.r=yh(c,u,e+1/3),this.g=yh(c,u,e),this.b=yh(c,u,e-1/3)}return Xt.colorSpaceToWorking(this,l),this}setStyle(e,i=Fi){function s(u){u!==void 0&&parseFloat(u)<1&&Mt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=l[1],d=l[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:Mt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(c===6)return this.setHex(parseInt(u,16),i);Mt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Fi){const s=py[e.toLowerCase()];return s!==void 0?this.setHex(s,i):Mt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fi){return Xt.workingToColorSpace(Jn.copy(this),e),Math.round(Vt(Jn.r*255,0,255))*65536+Math.round(Vt(Jn.g*255,0,255))*256+Math.round(Vt(Jn.b*255,0,255))}getHexString(e=Fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Xt.workingColorSpace){Xt.workingToColorSpace(Jn.copy(this),i);const s=Jn.r,l=Jn.g,u=Jn.b,c=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const v=(d+c)/2;if(d===c)m=0,p=0;else{const g=c-d;switch(p=v<=.5?g/(c+d):g/(2-c-d),c){case s:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-s)/g+2;break;case u:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Xt.workingColorSpace){return Xt.workingToColorSpace(Jn.copy(this),i),e.r=Jn.r,e.g=Jn.g,e.b=Jn.b,e}getStyle(e=Fi){Xt.workingToColorSpace(Jn.copy(this),e);const i=Jn.r,s=Jn.g,l=Jn.b;return e!==Fi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+i,xr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(xr),e.getHSL(ec);const s=nh(xr.h,ec.h,i),l=nh(xr.s,ec.s,i),u=nh(xr.l,ec.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new nn;nn.NAMES=py;let S1=0;class Ul extends lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S1++}),this.uuid=Cl(),this.name="",this.type="Material",this.blending=to,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=zh,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nn(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=M_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){Mt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Mt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(s.blending=this.blending),this.side!==Ar&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Fh&&(s.blendSrc=this.blendSrc),this.blendDst!==zh&&(s.blendDst=this.blendDst),this.blendEquation!==Qr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==io&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==M_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const c=[];for(const d in u){const m=u[d];delete m.metadata,c.push(m)}return c}if(i){const u=l(e.textures),c=l(e.images);u.length>0&&(s.textures=u),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class my extends Ul{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xa,this.combine=jx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dn=new de,tc=new ln;let M1=0;class Ji{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:M1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=E_,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)tc.fromBufferAttribute(this,i),tc.applyMatrix3(e),this.setXY(i,tc.x,tc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Dn.fromBufferAttribute(this,i),Dn.applyMatrix3(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Dn.fromBufferAttribute(this,i),Dn.applyMatrix4(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Dn.fromBufferAttribute(this,i),Dn.applyNormalMatrix(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Dn.fromBufferAttribute(this,i),Dn.transformDirection(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=il(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=ci(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=il(i,this.array)),i}setX(e,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=il(i,this.array)),i}setY(e,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=il(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=il(i,this.array)),i}setW(e,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=ci(i,this.array),s=ci(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=ci(i,this.array),s=ci(s,this.array),l=ci(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=ci(i,this.array),s=ci(s,this.array),l=ci(l,this.array),u=ci(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==E_&&(e.usage=this.usage),e}}class gy extends Ji{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class vy extends Ji{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ga extends Ji{constructor(e,i,s){super(new Float32Array(e),i,s)}}let E1=0;const Oi=new bn,Sh=new di,js=new de,Mi=new Dl,ol=new Dl,Bn=new de;class $i extends lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=Cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cy(e)?vy:gy)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new Rt().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,i,s){return Oi.makeTranslation(e,i,s),this.applyMatrix4(Oi),this}scale(e,i,s){return Oi.makeScale(e,i,s),this.applyMatrix4(Oi),this}lookAt(e){return Sh.lookAt(e),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const c=e[l];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ga(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&Mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];Mi.setFromBufferAttribute(u),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new de,1/0);return}if(e){const s=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),i)for(let u=0,c=i.length;u<c;u++){const d=i[u];ol.setFromBufferAttribute(d),this.morphTargetsRelative?(Bn.addVectors(Mi.min,ol.min),Mi.expandByPoint(Bn),Bn.addVectors(Mi.max,ol.max),Mi.expandByPoint(Bn)):(Mi.expandByPoint(ol.min),Mi.expandByPoint(ol.max))}Mi.getCenter(s);let l=0;for(let u=0,c=e.count;u<c;u++)Bn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(Bn));if(i)for(let u=0,c=i.length;u<c;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)Bn.fromBufferAttribute(d,p),m&&(js.fromBufferAttribute(e,p),Bn.add(js)),l=Math.max(l,s.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ji(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),d=[],m=[];for(let k=0;k<s.count;k++)d[k]=new de,m[k]=new de;const p=new de,v=new de,g=new de,_=new ln,y=new ln,E=new ln,T=new de,M=new de;function x(k,A,U){p.fromBufferAttribute(s,k),v.fromBufferAttribute(s,A),g.fromBufferAttribute(s,U),_.fromBufferAttribute(u,k),y.fromBufferAttribute(u,A),E.fromBufferAttribute(u,U),v.sub(p),g.sub(p),y.sub(_),E.sub(_);const B=1/(y.x*E.y-E.x*y.y);isFinite(B)&&(T.copy(v).multiplyScalar(E.y).addScaledVector(g,-y.y).multiplyScalar(B),M.copy(g).multiplyScalar(y.x).addScaledVector(v,-E.x).multiplyScalar(B),d[k].add(T),d[A].add(T),d[U].add(T),m[k].add(M),m[A].add(M),m[U].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let k=0,A=D.length;k<A;++k){const U=D[k],B=U.start,J=U.count;for(let te=B,fe=B+J;te<fe;te+=3)x(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const L=new de,O=new de,z=new de,I=new de;function R(k){z.fromBufferAttribute(l,k),I.copy(z);const A=d[k];L.copy(A),L.sub(z.multiplyScalar(z.dot(A))).normalize(),O.crossVectors(I,A);const B=O.dot(m[k])<0?-1:1;c.setXYZW(k,L.x,L.y,L.z,B)}for(let k=0,A=D.length;k<A;++k){const U=D[k],B=U.start,J=U.count;for(let te=B,fe=B+J;te<fe;te+=3)R(e.getX(te+0)),R(e.getX(te+1)),R(e.getX(te+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ji(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,y=s.count;_<y;_++)s.setXYZ(_,0,0,0);const l=new de,u=new de,c=new de,d=new de,m=new de,p=new de,v=new de,g=new de;if(e)for(let _=0,y=e.count;_<y;_+=3){const E=e.getX(_+0),T=e.getX(_+1),M=e.getX(_+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,T),c.fromBufferAttribute(i,M),v.subVectors(c,u),g.subVectors(l,u),v.cross(g),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,M),d.add(v),m.add(v),p.add(v),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let _=0,y=i.count;_<y;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),c.fromBufferAttribute(i,_+2),v.subVectors(c,u),g.subVectors(l,u),v.cross(g),s.setXYZ(_+0,v.x,v.y,v.z),s.setXYZ(_+1,v.x,v.y,v.z),s.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Bn.fromBufferAttribute(e,i),Bn.normalize(),e.setXYZ(i,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,g=d.normalized,_=new p.constructor(m.length*v);let y=0,E=0;for(let T=0,M=m.length;T<M;T++){d.isInterleavedBufferAttribute?y=m[T]*d.data.stride+d.offset:y=m[T]*v;for(let x=0;x<v;x++)_[E++]=p[y++]}return new Ji(_,v,g)}if(this.index===null)return Mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new $i,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let v=0,g=p.length;v<g;v++){const _=p[v],y=e(_,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,m=c.length;d<m;d++){const p=c[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,_=p.length;g<_;g++){const y=p[g];v.push(y.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=e.morphAttributes;for(const p in u){const v=[],g=u[p];for(let _=0,y=g.length;_<y;_++)v.push(g[_].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,v=c.length;p<v;p++){const g=c[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const I_=new bn,qr=new dy,nc=new Nc,B_=new de,ic=new de,ac=new de,rc=new de,Mh=new de,sc=new de,H_=new de,oc=new de;class fa extends di{constructor(e=new $i,i=new my){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=l.length;u<c;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,c=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){sc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=d[m],g=u[m];v!==0&&(Mh.fromBufferAttribute(g,e),c?sc.addScaledVector(Mh,v):sc.addScaledVector(Mh.sub(i),v))}i.add(sc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),nc.copy(s.boundingSphere),nc.applyMatrix4(u),qr.copy(e.ray).recast(e.near),!(nc.containsPoint(qr.origin)===!1&&(qr.intersectSphere(nc,B_)===null||qr.origin.distanceToSquared(B_)>(e.far-e.near)**2))&&(I_.copy(u).invert(),qr.copy(e.ray).applyMatrix4(I_),!(s.boundingBox!==null&&qr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,qr)))}_computeIntersections(e,i,s){let l;const u=this.geometry,c=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,_=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(c))for(let E=0,T=_.length;E<T;E++){const M=_[E],x=c[M.materialIndex],D=Math.max(M.start,y.start),L=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let O=D,z=L;O<z;O+=3){const I=d.getX(O),R=d.getX(O+1),k=d.getX(O+2);l=lc(this,x,e,s,p,v,g,I,R,k),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),T=Math.min(d.count,y.start+y.count);for(let M=E,x=T;M<x;M+=3){const D=d.getX(M),L=d.getX(M+1),O=d.getX(M+2);l=lc(this,c,e,s,p,v,g,D,L,O),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(c))for(let E=0,T=_.length;E<T;E++){const M=_[E],x=c[M.materialIndex],D=Math.max(M.start,y.start),L=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let O=D,z=L;O<z;O+=3){const I=O,R=O+1,k=O+2;l=lc(this,x,e,s,p,v,g,I,R,k),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let M=E,x=T;M<x;M+=3){const D=M,L=M+1,O=M+2;l=lc(this,c,e,s,p,v,g,D,L,O),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function b1(a,e,i,s,l,u,c,d){let m;if(e.side===fi?m=s.intersectTriangle(c,u,l,!0,d):m=s.intersectTriangle(l,u,c,e.side===Ar,d),m===null)return null;oc.copy(d),oc.applyMatrix4(a.matrixWorld);const p=i.ray.origin.distanceTo(oc);return p<i.near||p>i.far?null:{distance:p,point:oc.clone(),object:a}}function lc(a,e,i,s,l,u,c,d,m,p){a.getVertexPosition(d,ic),a.getVertexPosition(m,ac),a.getVertexPosition(p,rc);const v=b1(a,e,i,s,ic,ac,rc,H_);if(v){const g=new de;Ki.getBarycoord(H_,ic,ac,rc,g),l&&(v.uv=Ki.getInterpolatedAttribute(l,d,m,p,g,new ln)),u&&(v.uv1=Ki.getInterpolatedAttribute(u,d,m,p,g,new ln)),c&&(v.normal=Ki.getInterpolatedAttribute(c,d,m,p,g,new de),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new de,materialIndex:0};Ki.getNormal(ic,ac,rc,_.normal),v.face=_,v.barycoord=g}return v}class Ll extends $i{constructor(e=1,i=1,s=1,l=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:c};const d=this;l=Math.floor(l),u=Math.floor(u),c=Math.floor(c);const m=[],p=[],v=[],g=[];let _=0,y=0;E("z","y","x",-1,-1,s,i,e,c,u,0),E("z","y","x",1,-1,s,i,-e,c,u,1),E("x","z","y",1,1,e,s,i,l,c,2),E("x","z","y",1,-1,e,s,-i,l,c,3),E("x","y","z",1,-1,e,i,s,l,u,4),E("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Ga(p,3)),this.setAttribute("normal",new Ga(v,3)),this.setAttribute("uv",new Ga(g,2));function E(T,M,x,D,L,O,z,I,R,k,A){const U=O/R,B=z/k,J=O/2,te=z/2,fe=I/2,ne=R+1,P=k+1;let H=0,Y=0;const xe=new de;for(let ye=0;ye<P;ye++){const N=ye*B-te;for(let ee=0;ee<ne;ee++){const ge=ee*U-J;xe[T]=ge*D,xe[M]=N*L,xe[x]=fe,p.push(xe.x,xe.y,xe.z),xe[T]=0,xe[M]=0,xe[x]=I>0?1:-1,v.push(xe.x,xe.y,xe.z),g.push(ee/R),g.push(1-ye/k),H+=1}}for(let ye=0;ye<k;ye++)for(let N=0;N<R;N++){const ee=_+N+ne*ye,ge=_+N+ne*(ye+1),Ce=_+(N+1)+ne*(ye+1),Fe=_+(N+1)+ne*ye;m.push(ee,ge,Fe),m.push(ge,Ce,Fe),Y+=6}d.addGroup(y,Y,A),y+=Y,_+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oo(a){const e={};for(const i in a){e[i]={};for(const s in a[i]){const l=a[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(Mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function ni(a){const e={};for(let i=0;i<a.length;i++){const s=oo(a[i]);for(const l in s)e[l]=s[l]}return e}function T1(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function _y(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xt.workingColorSpace}const A1={clone:oo,merge:ni};var R1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends Ul{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R1,this.fragmentShader=C1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=T1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const c=this.uniforms[l].value;c&&c.isTexture?i.uniforms[l]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?i.uniforms[l]={type:"c",value:c.getHex()}:c&&c.isVector2?i.uniforms[l]={type:"v2",value:c.toArray()}:c&&c.isVector3?i.uniforms[l]={type:"v3",value:c.toArray()}:c&&c.isVector4?i.uniforms[l]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?i.uniforms[l]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?i.uniforms[l]={type:"m4",value:c.toArray()}:i.uniforms[l]={value:c}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class xy extends di{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bn,this.projectionMatrix=new bn,this.projectionMatrixInverse=new bn,this.coordinateSystem=sa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new de,G_=new ln,V_=new ln;class zi extends xy{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Rp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(th*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rp*2*Math.atan(Math.tan(th*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,i){return this.getViewBounds(e,G_,V_),i.subVectors(V_,G_)}setViewOffset(e,i,s,l,u,c){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(th*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const c=this.view;if(this.view!==null&&this.view.enabled){const m=c.fullWidth,p=c.fullHeight;u+=c.offsetX*l/m,i-=c.offsetY*s/p,l*=c.width/m,s*=c.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Zs=-90,Ks=1;class w1 extends di{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new zi(Zs,Ks,e,i);l.layers=this.layers,this.add(l);const u=new zi(Zs,Ks,e,i);u.layers=this.layers,this.add(u);const c=new zi(Zs,Ks,e,i);c.layers=this.layers,this.add(c);const d=new zi(Zs,Ks,e,i);d.layers=this.layers,this.add(d);const m=new zi(Zs,Ks,e,i);m.layers=this.layers,this.add(m);const p=new zi(Zs,Ks,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,c,d,m]=i;for(const p of i)this.remove(p);if(e===sa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Ac)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,d,m,p,v]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,c),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(g,_,y),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class yy extends ii{constructor(e=[],i=ns,s,l,u,c,d,m,p,v){super(e,i,s,l,u,c,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sy extends Qi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new yy(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ll(5,5,5),u=new Gi({name:"CubemapFromEquirect",uniforms:oo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:fi,blending:Ba});u.uniforms.tEquirect.value=i;const c=new fa(l,u),d=i.minFilter;return i.minFilter===es&&(i.minFilter=ei),new w1(1,10,this).update(e,c),i.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(i,s,l);e.setRenderTarget(u)}}class uc extends di{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D1={type:"move"};class Eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,c=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const T of e.hand.values()){const M=i.getJointPose(T,s),x=this._getHandJoint(p,T);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],_=v.position.distanceTo(g.position),y=.02,E=.005;p.inputState.pinching&&_>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(D1)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new uc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class k_ extends di{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xa,this.environmentIntensity=1,this.environmentRotation=new Xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class My extends ii{constructor(e=null,i=1,s=1,l,u,c,d,m,p=Pn,v=Pn,g,_){super(null,c,d,m,p,v,l,u,g,_),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bh=new de,U1=new de,L1=new Rt;class Kr{constructor(e=new de(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=bh.subVectors(s,i).cross(U1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(bh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||L1.getNormalMatrix(e),l=this.coplanarPoint(bh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new Nc,N1=new ln(.5,.5),cc=new de;class Ey{constructor(e=new Kr,i=new Kr,s=new Kr,l=new Kr,u=new Kr,c=new Kr){this.planes=[e,i,s,l,u,c]}set(e,i,s,l,u,c){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(c),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=sa,s=!1){const l=this.planes,u=e.elements,c=u[0],d=u[1],m=u[2],p=u[3],v=u[4],g=u[5],_=u[6],y=u[7],E=u[8],T=u[9],M=u[10],x=u[11],D=u[12],L=u[13],O=u[14],z=u[15];if(l[0].setComponents(p-c,y-v,x-E,z-D).normalize(),l[1].setComponents(p+c,y+v,x+E,z+D).normalize(),l[2].setComponents(p+d,y+g,x+T,z+L).normalize(),l[3].setComponents(p-d,y-g,x-T,z-L).normalize(),s)l[4].setComponents(m,_,M,O).normalize(),l[5].setComponents(p-m,y-_,x-M,z-O).normalize();else if(l[4].setComponents(p-m,y-_,x-M,z-O).normalize(),i===sa)l[5].setComponents(p+m,y+_,x+M,z+O).normalize();else if(i===Ac)l[5].setComponents(m,_,M,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){Yr.center.set(0,0,0);const i=N1.distanceTo(e.center);return Yr.radius=.7071067811865476+i,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(cc.x=l.normal.x>0?e.max.x:e.min.x,cc.y=l.normal.y>0?e.max.y:e.min.y,cc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class O1 extends Ul{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nn(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const X_=new bn,Cp=new dy,fc=new Nc,dc=new de;class P1 extends di{constructor(e=new $i,i=new O1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),fc.copy(s.boundingSphere),fc.applyMatrix4(l),fc.radius+=u,e.ray.intersectsSphere(fc)===!1)return;X_.copy(l).invert(),Cp.copy(e.ray).applyMatrix4(X_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,g=s.attributes.position;if(p!==null){const _=Math.max(0,c.start),y=Math.min(p.count,c.start+c.count);for(let E=_,T=y;E<T;E++){const M=p.getX(E);dc.fromBufferAttribute(g,M),W_(dc,M,m,l,e,i,this)}}else{const _=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let E=_,T=y;E<T;E++)dc.fromBufferAttribute(g,E),W_(dc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=l.length;u<c;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function W_(a,e,i,s,l,u,c){const d=Cp.distanceSqToPoint(a);if(d<i){const m=new de;Cp.closestPointToPoint(a,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Ml extends ii{constructor(e,i,s=ca,l,u,c,d=Pn,m=Pn,p,v=ka,g=1){if(v!==ka&&v!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:g};super(_,l,u,c,d,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class F1 extends Ml{constructor(e,i=ca,s=ns,l,u,c=Pn,d=Pn,m,p=ka){const v={width:e,height:e,depth:1},g=[v,v,v,v,v,v];super(e,e,i,s,l,u,c,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class by extends ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nl extends $i{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,c=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,g=e/d,_=i/m,y=[],E=[],T=[],M=[];for(let x=0;x<v;x++){const D=x*_-c;for(let L=0;L<p;L++){const O=L*g-u;E.push(O,-D,0),T.push(0,0,1),M.push(L/d),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let D=0;D<d;D++){const L=D+p*x,O=D+p*(x+1),z=D+1+p*(x+1),I=D+1+p*x;y.push(L,O,I),y.push(O,z,I)}this.setIndex(y),this.setAttribute("position",new Ga(E,3)),this.setAttribute("normal",new Ga(T,3)),this.setAttribute("uv",new Ga(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.width,e.height,e.widthSegments,e.heightSegments)}}class z1 extends Gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class I1 extends Ul{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=KT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class B1 extends Ul{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $p extends xy{constructor(e=-1,i=1,s=1,l=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,c=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,c=u+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,c,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class H1 extends zi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class G1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function q_(a,e,i,s){const l=V1(s);switch(i){case oy:return a*e;case uy:return a*e/l.components*l.byteLength;case Yp:return a*e/l.components*l.byteLength;case ro:return a*e*2/l.components*l.byteLength;case jp:return a*e*2/l.components*l.byteLength;case ly:return a*e*3/l.components*l.byteLength;case bi:return a*e*4/l.components*l.byteLength;case Zp:return a*e*4/l.components*l.byteLength;case xc:case yc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Sc:case Mc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Kh:case Jh:return Math.max(a,16)*Math.max(e,8)/4;case Zh:case Qh:return Math.max(a,8)*Math.max(e,8)/2;case $h:case ep:case np:case ip:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case tp:case ap:case rp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case sp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case op:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case lp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case up:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case cp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case fp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case dp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case hp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case pp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case mp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case gp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case vp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case _p:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case xp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case yp:case Sp:case Mp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Ep:case bp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Tp:case Ap:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function V1(a){switch(a){case Ii:case iy:return{byteLength:1,components:1};case xl:case ay:case Va:return{byteLength:2,components:1};case Wp:case qp:return{byteLength:2,components:4};case ca:case Xp:case Bi:return{byteLength:4,components:1};case ry:case sy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kp}}));typeof window<"u"&&(window.__THREE__?Mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kp);function Ty(){let a=null,e=!1,i=null,s=null;function l(u,c){i(u,c),s=a.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=a.requestAnimationFrame(l),e=!0)},stop:function(){a.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){a=u}}}function k1(a){const e=new WeakMap;function i(d,m){const p=d.array,v=d.usage,g=p.byteLength,_=a.createBuffer();a.bindBuffer(m,_),a.bufferData(m,p,v),d.onUploadCallback();let y;if(p instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=a.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=a.SHORT;else if(p instanceof Uint32Array)y=a.UNSIGNED_INT;else if(p instanceof Int32Array)y=a.INT;else if(p instanceof Int8Array)y=a.BYTE;else if(p instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const v=m.array,g=m.updateRanges;if(a.bindBuffer(p,d),g.length===0)a.bufferSubData(p,0,v);else{g.sort((y,E)=>y.start-E.start);let _=0;for(let y=1;y<g.length;y++){const E=g[_],T=g[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++_,g[_]=T)}g.length=_+1;for(let y=0,E=g.length;y<E;y++){const T=g[y];a.bufferSubData(p,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(a.deleteBuffer(m.buffer),e.delete(d))}function c(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:c}}var X1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,q1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Q1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_A=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yA="gl_FragColor = linearToOutputTexel( gl_FragColor );",SA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,EA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,LA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,FA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$A=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_R=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ER=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,AR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,CR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,UR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,NR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,KR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,JR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$R=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_C=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,SC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wt={alphahash_fragment:X1,alphahash_pars_fragment:W1,alphamap_fragment:q1,alphamap_pars_fragment:Y1,alphatest_fragment:j1,alphatest_pars_fragment:Z1,aomap_fragment:K1,aomap_pars_fragment:Q1,batching_pars_vertex:J1,batching_vertex:$1,begin_vertex:eA,beginnormal_vertex:tA,bsdfs:nA,iridescence_fragment:iA,bumpmap_pars_fragment:aA,clipping_planes_fragment:rA,clipping_planes_pars_fragment:sA,clipping_planes_pars_vertex:oA,clipping_planes_vertex:lA,color_fragment:uA,color_pars_fragment:cA,color_pars_vertex:fA,color_vertex:dA,common:hA,cube_uv_reflection_fragment:pA,defaultnormal_vertex:mA,displacementmap_pars_vertex:gA,displacementmap_vertex:vA,emissivemap_fragment:_A,emissivemap_pars_fragment:xA,colorspace_fragment:yA,colorspace_pars_fragment:SA,envmap_fragment:MA,envmap_common_pars_fragment:EA,envmap_pars_fragment:bA,envmap_pars_vertex:TA,envmap_physical_pars_fragment:FA,envmap_vertex:AA,fog_vertex:RA,fog_pars_vertex:CA,fog_fragment:wA,fog_pars_fragment:DA,gradientmap_pars_fragment:UA,lightmap_pars_fragment:LA,lights_lambert_fragment:NA,lights_lambert_pars_fragment:OA,lights_pars_begin:PA,lights_toon_fragment:zA,lights_toon_pars_fragment:IA,lights_phong_fragment:BA,lights_phong_pars_fragment:HA,lights_physical_fragment:GA,lights_physical_pars_fragment:VA,lights_fragment_begin:kA,lights_fragment_maps:XA,lights_fragment_end:WA,logdepthbuf_fragment:qA,logdepthbuf_pars_fragment:YA,logdepthbuf_pars_vertex:jA,logdepthbuf_vertex:ZA,map_fragment:KA,map_pars_fragment:QA,map_particle_fragment:JA,map_particle_pars_fragment:$A,metalnessmap_fragment:eR,metalnessmap_pars_fragment:tR,morphinstance_vertex:nR,morphcolor_vertex:iR,morphnormal_vertex:aR,morphtarget_pars_vertex:rR,morphtarget_vertex:sR,normal_fragment_begin:oR,normal_fragment_maps:lR,normal_pars_fragment:uR,normal_pars_vertex:cR,normal_vertex:fR,normalmap_pars_fragment:dR,clearcoat_normal_fragment_begin:hR,clearcoat_normal_fragment_maps:pR,clearcoat_pars_fragment:mR,iridescence_pars_fragment:gR,opaque_fragment:vR,packing:_R,premultiplied_alpha_fragment:xR,project_vertex:yR,dithering_fragment:SR,dithering_pars_fragment:MR,roughnessmap_fragment:ER,roughnessmap_pars_fragment:bR,shadowmap_pars_fragment:TR,shadowmap_pars_vertex:AR,shadowmap_vertex:RR,shadowmask_pars_fragment:CR,skinbase_vertex:wR,skinning_pars_vertex:DR,skinning_vertex:UR,skinnormal_vertex:LR,specularmap_fragment:NR,specularmap_pars_fragment:OR,tonemapping_fragment:PR,tonemapping_pars_fragment:FR,transmission_fragment:zR,transmission_pars_fragment:IR,uv_pars_fragment:BR,uv_pars_vertex:HR,uv_vertex:GR,worldpos_vertex:VR,background_vert:kR,background_frag:XR,backgroundCube_vert:WR,backgroundCube_frag:qR,cube_vert:YR,cube_frag:jR,depth_vert:ZR,depth_frag:KR,distance_vert:QR,distance_frag:JR,equirect_vert:$R,equirect_frag:eC,linedashed_vert:tC,linedashed_frag:nC,meshbasic_vert:iC,meshbasic_frag:aC,meshlambert_vert:rC,meshlambert_frag:sC,meshmatcap_vert:oC,meshmatcap_frag:lC,meshnormal_vert:uC,meshnormal_frag:cC,meshphong_vert:fC,meshphong_frag:dC,meshphysical_vert:hC,meshphysical_frag:pC,meshtoon_vert:mC,meshtoon_frag:gC,points_vert:vC,points_frag:_C,shadow_vert:xC,shadow_frag:yC,sprite_vert:SC,sprite_frag:MC},Ze={common:{diffuse:{value:new nn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new ln(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new nn(16777215)},opacity:{value:1},center:{value:new ln(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},ra={basic:{uniforms:ni([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:ni([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new nn(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:ni([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new nn(0)},specular:{value:new nn(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:ni([Ze.common,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.roughnessmap,Ze.metalnessmap,Ze.fog,Ze.lights,{emissive:{value:new nn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:ni([Ze.common,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.gradientmap,Ze.fog,Ze.lights,{emissive:{value:new nn(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:ni([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:ni([Ze.points,Ze.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:ni([Ze.common,Ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:ni([Ze.common,Ze.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:ni([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:ni([Ze.sprite,Ze.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:ni([Ze.common,Ze.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:ni([Ze.lights,Ze.fog,{color:{value:new nn(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};ra.physical={uniforms:ni([ra.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new ln(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new nn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new ln},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new nn(0)},specularColor:{value:new nn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new ln},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const hc={r:0,b:0,g:0},jr=new Xa,EC=new bn;function bC(a,e,i,s,l,u,c){const d=new nn(0);let m=u===!0?0:1,p,v,g=null,_=0,y=null;function E(L){let O=L.isScene===!0?L.background:null;return O&&O.isTexture&&(O=(L.backgroundBlurriness>0?i:e).get(O)),O}function T(L){let O=!1;const z=E(L);z===null?x(d,m):z&&z.isColor&&(x(z,1),O=!0);const I=a.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(a.autoClear||O)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function M(L,O){const z=E(O);z&&(z.isCubeTexture||z.mapping===Lc)?(v===void 0&&(v=new fa(new Ll(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:oo(ra.backgroundCube.uniforms),vertexShader:ra.backgroundCube.vertexShader,fragmentShader:ra.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(I,R,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),jr.copy(O.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),v.material.uniforms.envMap.value=z,v.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(EC.makeRotationFromEuler(jr)),v.material.toneMapped=Xt.getTransfer(z.colorSpace)!==tn,(g!==z||_!==z.version||y!==a.toneMapping)&&(v.material.needsUpdate=!0,g=z,_=z.version,y=a.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new fa(new Nl(2,2),new Gi({name:"BackgroundMaterial",uniforms:oo(ra.background.uniforms),vertexShader:ra.background.vertexShader,fragmentShader:ra.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=Xt.getTransfer(z.colorSpace)!==tn,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||_!==z.version||y!==a.toneMapping)&&(p.material.needsUpdate=!0,g=z,_=z.version,y=a.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,O){L.getRGB(hc,_y(a)),s.buffers.color.setClear(hc.r,hc.g,hc.b,O,c)}function D(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,O=1){d.set(L),m=O,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,x(d,m)},render:T,addToRenderList:M,dispose:D}}function TC(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),s={},l=_(null);let u=l,c=!1;function d(U,B,J,te,fe){let ne=!1;const P=g(te,J,B);u!==P&&(u=P,p(u.object)),ne=y(U,te,J,fe),ne&&E(U,te,J,fe),fe!==null&&e.update(fe,a.ELEMENT_ARRAY_BUFFER),(ne||c)&&(c=!1,O(U,B,J,te),fe!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function m(){return a.createVertexArray()}function p(U){return a.bindVertexArray(U)}function v(U){return a.deleteVertexArray(U)}function g(U,B,J){const te=J.wireframe===!0;let fe=s[U.id];fe===void 0&&(fe={},s[U.id]=fe);let ne=fe[B.id];ne===void 0&&(ne={},fe[B.id]=ne);let P=ne[te];return P===void 0&&(P=_(m()),ne[te]=P),P}function _(U){const B=[],J=[],te=[];for(let fe=0;fe<i;fe++)B[fe]=0,J[fe]=0,te[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:J,attributeDivisors:te,object:U,attributes:{},index:null}}function y(U,B,J,te){const fe=u.attributes,ne=B.attributes;let P=0;const H=J.getAttributes();for(const Y in H)if(H[Y].location>=0){const ye=fe[Y];let N=ne[Y];if(N===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(N=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(N=U.instanceColor)),ye===void 0||ye.attribute!==N||N&&ye.data!==N.data)return!0;P++}return u.attributesNum!==P||u.index!==te}function E(U,B,J,te){const fe={},ne=B.attributes;let P=0;const H=J.getAttributes();for(const Y in H)if(H[Y].location>=0){let ye=ne[Y];ye===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(ye=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(ye=U.instanceColor));const N={};N.attribute=ye,ye&&ye.data&&(N.data=ye.data),fe[Y]=N,P++}u.attributes=fe,u.attributesNum=P,u.index=te}function T(){const U=u.newAttributes;for(let B=0,J=U.length;B<J;B++)U[B]=0}function M(U){x(U,0)}function x(U,B){const J=u.newAttributes,te=u.enabledAttributes,fe=u.attributeDivisors;J[U]=1,te[U]===0&&(a.enableVertexAttribArray(U),te[U]=1),fe[U]!==B&&(a.vertexAttribDivisor(U,B),fe[U]=B)}function D(){const U=u.newAttributes,B=u.enabledAttributes;for(let J=0,te=B.length;J<te;J++)B[J]!==U[J]&&(a.disableVertexAttribArray(J),B[J]=0)}function L(U,B,J,te,fe,ne,P){P===!0?a.vertexAttribIPointer(U,B,J,fe,ne):a.vertexAttribPointer(U,B,J,te,fe,ne)}function O(U,B,J,te){T();const fe=te.attributes,ne=J.getAttributes(),P=B.defaultAttributeValues;for(const H in ne){const Y=ne[H];if(Y.location>=0){let xe=fe[H];if(xe===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(xe=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(xe=U.instanceColor)),xe!==void 0){const ye=xe.normalized,N=xe.itemSize,ee=e.get(xe);if(ee===void 0)continue;const ge=ee.buffer,Ce=ee.type,Fe=ee.bytesPerElement,ie=Ce===a.INT||Ce===a.UNSIGNED_INT||xe.gpuType===Xp;if(xe.isInterleavedBufferAttribute){const me=xe.data,Ne=me.stride,We=xe.offset;if(me.isInstancedInterleavedBuffer){for(let Ve=0;Ve<Y.locationSize;Ve++)x(Y.location+Ve,me.meshPerAttribute);U.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ve=0;Ve<Y.locationSize;Ve++)M(Y.location+Ve);a.bindBuffer(a.ARRAY_BUFFER,ge);for(let Ve=0;Ve<Y.locationSize;Ve++)L(Y.location+Ve,N/Y.locationSize,Ce,ye,Ne*Fe,(We+N/Y.locationSize*Ve)*Fe,ie)}else{if(xe.isInstancedBufferAttribute){for(let me=0;me<Y.locationSize;me++)x(Y.location+me,xe.meshPerAttribute);U.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let me=0;me<Y.locationSize;me++)M(Y.location+me);a.bindBuffer(a.ARRAY_BUFFER,ge);for(let me=0;me<Y.locationSize;me++)L(Y.location+me,N/Y.locationSize,Ce,ye,N*Fe,N/Y.locationSize*me*Fe,ie)}}else if(P!==void 0){const ye=P[H];if(ye!==void 0)switch(ye.length){case 2:a.vertexAttrib2fv(Y.location,ye);break;case 3:a.vertexAttrib3fv(Y.location,ye);break;case 4:a.vertexAttrib4fv(Y.location,ye);break;default:a.vertexAttrib1fv(Y.location,ye)}}}}D()}function z(){k();for(const U in s){const B=s[U];for(const J in B){const te=B[J];for(const fe in te)v(te[fe].object),delete te[fe];delete B[J]}delete s[U]}}function I(U){if(s[U.id]===void 0)return;const B=s[U.id];for(const J in B){const te=B[J];for(const fe in te)v(te[fe].object),delete te[fe];delete B[J]}delete s[U.id]}function R(U){for(const B in s){const J=s[B];if(J[U.id]===void 0)continue;const te=J[U.id];for(const fe in te)v(te[fe].object),delete te[fe];delete J[U.id]}}function k(){A(),c=!0,u!==l&&(u=l,p(u.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:A,dispose:z,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:T,enableAttribute:M,disableUnusedAttributes:D}}function AC(a,e,i){let s;function l(p){s=p}function u(p,v){a.drawArrays(s,p,v),i.update(v,s,1)}function c(p,v,g){g!==0&&(a.drawArraysInstanced(s,p,v,g),i.update(v,s,g))}function d(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,g);let y=0;for(let E=0;E<g;E++)y+=v[E];i.update(y,s,1)}function m(p,v,g,_){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)c(p[E],v[E],_[E]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,v,0,_,0,g);let E=0;for(let T=0;T<g;T++)E+=v[T]*_[T];i.update(E,s,1)}}this.setMode=l,this.render=u,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function RC(a,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");l=a.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function c(R){return!(R!==bi&&s.convert(R)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(R){const k=R===Va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ii&&s.convert(R)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Bi&&!k)}function m(R){if(R==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(Mt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_TEXTURE_SIZE),M=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),x=a.getParameter(a.MAX_VERTEX_ATTRIBS),D=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),L=a.getParameter(a.MAX_VARYING_VECTORS),O=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),z=a.getParameter(a.MAX_SAMPLES),I=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:c,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:O,maxSamples:z,samples:I}}function CC(a){const e=this;let i=null,s=0,l=!1,u=!1;const c=new Kr,d=new Rt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const y=g.length!==0||_||s!==0||l;return l=_,s=g.length,y},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,_){i=v(g,_,0)},this.setState=function(g,_,y){const E=g.clippingPlanes,T=g.clipIntersection,M=g.clipShadows,x=a.get(g);if(!l||E===null||E.length===0||u&&!M)u?v(null):p();else{const D=u?0:s,L=D*4;let O=x.clippingState||null;m.value=O,O=v(E,_,L,y);for(let z=0;z!==L;++z)O[z]=i[z];x.clippingState=O,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(g,_,y,E){const T=g!==null?g.length:0;let M=null;if(T!==0){if(M=m.value,E!==!0||M===null){const x=y+T*4,D=_.matrixWorldInverse;d.getNormalMatrix(D),(M===null||M.length<x)&&(M=new Float32Array(x));for(let L=0,O=y;L!==T;++L,O+=4)c.copy(g[L]).applyMatrix4(D,d),c.normal.toArray(M,O),M[O+3]=c.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,M}}function wC(a){let e=new WeakMap;function i(c,d){return d===Wh?c.mapping=ns:d===qh&&(c.mapping=ao),c}function s(c){if(c&&c.isTexture){const d=c.mapping;if(d===Wh||d===qh)if(e.has(c)){const m=e.get(c).texture;return i(m,c.mapping)}else{const m=c.image;if(m&&m.height>0){const p=new Sy(m.height);return p.fromEquirectangularTexture(a,c),e.set(c,p),c.addEventListener("dispose",l),i(p.texture,c.mapping)}else return null}}return c}function l(c){const d=c.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const Tr=4,Y_=[.125,.215,.35,.446,.526,.582],Jr=20,DC=256,ll=new $p,j_=new nn;let Th=null,Ah=0,Rh=0,Ch=!1;const UC=new de;class Z_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,u={}){const{size:c=256,position:d=UC}=u;Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Th,Ah,Rh),this._renderer.xr.enabled=Ch,e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ns||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:Va,format:bi,colorSpace:so,depthBuffer:!1},l=K_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=K_(e,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=LC(u)),this._blurMaterial=OC(u,e,i),this._ggxMaterial=NC(u,e,i)}return l}_compileMaterial(e){const i=new fa(new $i,e);this._renderer.compile(i,ll)}_sceneToCubeUV(e,i,s,l,u){const m=new zi(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,y=g.toneMapping;g.getClearColor(j_),g.toneMapping=la,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fa(new Ll,new my({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let x=!1;const D=e.background;D?D.isColor&&(M.color.copy(D),e.background=null,x=!0):(M.color.copy(j_),x=!0);for(let L=0;L<6;L++){const O=L%3;O===0?(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[L],u.y,u.z)):O===1?(m.up.set(0,0,p[L]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[L],u.z)):(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[L]));const z=this._cubeSize;Qs(l,O*z,L>2?z:0,z,z),g.setRenderTarget(l),x&&g.render(T,m),g.render(e,m)}g.toneMapping=y,g.autoClear=_,e.background=D}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===ns||e.mapping===ao;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=J_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q_());const u=l?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=u;const d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Qs(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(c,ll)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,u=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[s];d.material=c;const m=c.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),_=0+p*1.25,y=g*_,{_lodMax:E}=this,T=this._sizeLods[s],M=3*T*(s>E-Tr?s-E+Tr:0),x=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=E-i,Qs(u,M,x,3*T,2*T),l.setRenderTarget(u),l.render(d,ll),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=E-s,Qs(e,M,x,3*T,2*T),l.setRenderTarget(e),l.render(d,ll)}_blur(e,i,s,l,u){const c=this._pingPongRenderTarget;this._halfBlur(e,c,i,s,l,"latitudinal",u),this._halfBlur(c,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,c,d){const m=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&jt("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[l];g.material=p;const _=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Jr-1),T=u/E,M=isFinite(u)?1+Math.floor(v*T):Jr;M>Jr&&Mt(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Jr}`);const x=[];let D=0;for(let R=0;R<Jr;++R){const k=R/T,A=Math.exp(-k*k/2);x.push(A),R===0?D+=A:R<M&&(D+=2*A)}for(let R=0;R<x.length;R++)x[R]=x[R]/D;_.envMap.value=e.texture,_.samples.value=M,_.weights.value=x,_.latitudinal.value=c==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:L}=this;_.dTheta.value=E,_.mipInt.value=L-s;const O=this._sizeLods[l],z=3*O*(l>L-Tr?l-L+Tr:0),I=4*(this._cubeSize-O);Qs(i,z,I,3*O,2*O),m.setRenderTarget(i),m.render(g,ll)}}function LC(a){const e=[],i=[],s=[];let l=a;const u=a-Tr+1+Y_.length;for(let c=0;c<u;c++){const d=Math.pow(2,l);e.push(d);let m=1/d;c>a-Tr?m=Y_[c-a+Tr-1]:c===0&&(m=0),i.push(m);const p=1/(d-2),v=-p,g=1+p,_=[v,v,g,v,g,g,v,v,g,g,v,g],y=6,E=6,T=3,M=2,x=1,D=new Float32Array(T*E*y),L=new Float32Array(M*E*y),O=new Float32Array(x*E*y);for(let I=0;I<y;I++){const R=I%3*2/3-1,k=I>2?0:-1,A=[R,k,0,R+2/3,k,0,R+2/3,k+1,0,R,k,0,R+2/3,k+1,0,R,k+1,0];D.set(A,T*E*I),L.set(_,M*E*I);const U=[I,I,I,I,I,I];O.set(U,x*E*I)}const z=new $i;z.setAttribute("position",new Ji(D,T)),z.setAttribute("uv",new Ji(L,M)),z.setAttribute("faceIndex",new Ji(O,x)),s.push(new fa(z,null)),l>Tr&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function K_(a,e,i){const s=new Qi(a,e,i);return s.texture.mapping=Lc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Qs(a,e,i,s,l){a.viewport.set(e,i,s,l),a.scissor.set(e,i,s,l)}function NC(a,e,i){return new Gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:DC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function OC(a,e,i){const s=new Float32Array(Jr),l=new de(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function Q_(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function J_(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function Oc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function PC(a){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Wh||m===qh,v=m===ns||m===ao;if(p||v){let g=e.get(d);const _=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return i===null&&(i=new Z_(a)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return p&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new Z_(a)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function c(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:c}}function FC(a){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=a.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Sl("WebGLRenderer: "+s+" extension not supported."),l}}}function zC(a,e,i,s){const l={},u=new WeakMap;function c(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",c),delete l[_.id];const y=u.get(_);y&&(e.remove(y),u.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(g,_){return l[_.id]===!0||(_.addEventListener("dispose",c),l[_.id]=!0,i.memory.geometries++),_}function m(g){const _=g.attributes;for(const y in _)e.update(_[y],a.ARRAY_BUFFER)}function p(g){const _=[],y=g.index,E=g.attributes.position;let T=0;if(y!==null){const D=y.array;T=y.version;for(let L=0,O=D.length;L<O;L+=3){const z=D[L+0],I=D[L+1],R=D[L+2];_.push(z,I,I,R,R,z)}}else if(E!==void 0){const D=E.array;T=E.version;for(let L=0,O=D.length/3-1;L<O;L+=3){const z=L+0,I=L+1,R=L+2;_.push(z,I,I,R,R,z)}}else return;const M=new(cy(_)?vy:gy)(_,1);M.version=T;const x=u.get(g);x&&e.remove(x),u.set(g,M)}function v(g){const _=u.get(g);if(_){const y=g.index;y!==null&&_.version<y.version&&p(g)}else p(g);return u.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function IC(a,e,i){let s;function l(_){s=_}let u,c;function d(_){u=_.type,c=_.bytesPerElement}function m(_,y){a.drawElements(s,y,u,_*c),i.update(y,s,1)}function p(_,y,E){E!==0&&(a.drawElementsInstanced(s,y,u,_*c,E),i.update(y,s,E))}function v(_,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,u,_,0,E);let M=0;for(let x=0;x<E;x++)M+=y[x];i.update(M,s,1)}function g(_,y,E,T){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<_.length;x++)p(_[x]/c,y[x],T[x]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,u,_,0,T,0,E);let x=0;for(let D=0;D<E;D++)x+=y[D]*T[D];i.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function BC(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,c,d){switch(i.calls++,c){case a.TRIANGLES:i.triangles+=d*(u/3);break;case a.LINES:i.lines+=d*(u/2);break;case a.LINE_STRIP:i.lines+=d*(u-1);break;case a.LINE_LOOP:i.lines+=d*u;break;case a.POINTS:i.points+=d*u;break;default:jt("WebGLInfo: Unknown draw mode:",c);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function HC(a,e,i){const s=new WeakMap,l=new En;function u(c,d,m){const p=c.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let _=s.get(d);if(_===void 0||_.count!==g){let U=function(){k.dispose(),s.delete(d),d.removeEventListener("dispose",U)};var y=U;_!==void 0&&_.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let O=0;E===!0&&(O=1),T===!0&&(O=2),M===!0&&(O=3);let z=d.attributes.position.count*O,I=1;z>e.maxTextureSize&&(I=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const R=new Float32Array(z*I*4*g),k=new fy(R,z,I,g);k.type=Bi,k.needsUpdate=!0;const A=O*4;for(let B=0;B<g;B++){const J=x[B],te=D[B],fe=L[B],ne=z*I*4*B;for(let P=0;P<J.count;P++){const H=P*A;E===!0&&(l.fromBufferAttribute(J,P),R[ne+H+0]=l.x,R[ne+H+1]=l.y,R[ne+H+2]=l.z,R[ne+H+3]=0),T===!0&&(l.fromBufferAttribute(te,P),R[ne+H+4]=l.x,R[ne+H+5]=l.y,R[ne+H+6]=l.z,R[ne+H+7]=0),M===!0&&(l.fromBufferAttribute(fe,P),R[ne+H+8]=l.x,R[ne+H+9]=l.y,R[ne+H+10]=l.z,R[ne+H+11]=fe.itemSize===4?l.w:1)}}_={count:g,texture:k,size:new ln(z,I)},s.set(d,_),d.addEventListener("dispose",U)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",c.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const T=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(a,"morphTargetBaseInfluence",T),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}return{update:u}}function GC(a,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,v=m.geometry,g=e.get(m,v);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,a.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return g}function c(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:c}}const VC={[Zx]:"LINEAR_TONE_MAPPING",[Kx]:"REINHARD_TONE_MAPPING",[Qx]:"CINEON_TONE_MAPPING",[Jx]:"ACES_FILMIC_TONE_MAPPING",[ey]:"AGX_TONE_MAPPING",[ty]:"NEUTRAL_TONE_MAPPING",[$x]:"CUSTOM_TONE_MAPPING"};function kC(a,e,i,s,l){const u=new Qi(e,i,{type:a,depthBuffer:s,stencilBuffer:l}),c=new Qi(e,i,{type:Va,depthBuffer:!1,stencilBuffer:!1}),d=new $i;d.setAttribute("position",new Ga([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ga([0,2,0,0,2,0],2));const m=new z1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new fa(d,m),v=new $p(-1,1,1,-1,0,1);let g=null,_=null,y=!1,E,T=null,M=[],x=!1;this.setSize=function(D,L){u.setSize(D,L),c.setSize(D,L);for(let O=0;O<M.length;O++){const z=M[O];z.setSize&&z.setSize(D,L)}},this.setEffects=function(D){M=D,x=M.length>0&&M[0].isRenderPass===!0;const L=u.width,O=u.height;for(let z=0;z<M.length;z++){const I=M[z];I.setSize&&I.setSize(L,O)}},this.begin=function(D,L){if(y||D.toneMapping===la&&M.length===0)return!1;if(T=L,L!==null){const O=L.width,z=L.height;(u.width!==O||u.height!==z)&&this.setSize(O,z)}return x===!1&&D.setRenderTarget(u),E=D.toneMapping,D.toneMapping=la,!0},this.hasRenderPass=function(){return x},this.end=function(D,L){D.toneMapping=E,y=!0;let O=u,z=c;for(let I=0;I<M.length;I++){const R=M[I];if(R.enabled!==!1&&(R.render(D,z,O,L),R.needsSwap!==!1)){const k=O;O=z,z=k}}if(g!==D.outputColorSpace||_!==D.toneMapping){g=D.outputColorSpace,_=D.toneMapping,m.defines={},Xt.getTransfer(g)===tn&&(m.defines.SRGB_TRANSFER="");const I=VC[_];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,D.setRenderTarget(T),D.render(p,v),T=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),c.dispose(),d.dispose(),m.dispose()}}const Ay=new ii,wp=new Ml(1,1),Ry=new fy,Cy=new h1,wy=new yy,$_=[],ex=[],tx=new Float32Array(16),nx=new Float32Array(9),ix=new Float32Array(4);function uo(a,e,i){const s=a[0];if(s<=0||s>0)return a;const l=e*i;let u=$_[l];if(u===void 0&&(u=new Float32Array(l),$_[l]=u),e!==0){s.toArray(u,0);for(let c=1,d=0;c!==e;++c)d+=i,a[c].toArray(u,d)}return u}function Fn(a,e){if(a.length!==e.length)return!1;for(let i=0,s=a.length;i<s;i++)if(a[i]!==e[i])return!1;return!0}function zn(a,e){for(let i=0,s=e.length;i<s;i++)a[i]=e[i]}function Pc(a,e){let i=ex[e];i===void 0&&(i=new Int32Array(e),ex[e]=i);for(let s=0;s!==e;++s)i[s]=a.allocateTextureUnit();return i}function XC(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function WC(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Fn(i,e))return;a.uniform2fv(this.addr,e),zn(i,e)}}function qC(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Fn(i,e))return;a.uniform3fv(this.addr,e),zn(i,e)}}function YC(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Fn(i,e))return;a.uniform4fv(this.addr,e),zn(i,e)}}function jC(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(Fn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),zn(i,e)}else{if(Fn(i,s))return;ix.set(s),a.uniformMatrix2fv(this.addr,!1,ix),zn(i,s)}}function ZC(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(Fn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),zn(i,e)}else{if(Fn(i,s))return;nx.set(s),a.uniformMatrix3fv(this.addr,!1,nx),zn(i,s)}}function KC(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(Fn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),zn(i,e)}else{if(Fn(i,s))return;tx.set(s),a.uniformMatrix4fv(this.addr,!1,tx),zn(i,s)}}function QC(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function JC(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Fn(i,e))return;a.uniform2iv(this.addr,e),zn(i,e)}}function $C(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Fn(i,e))return;a.uniform3iv(this.addr,e),zn(i,e)}}function e3(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Fn(i,e))return;a.uniform4iv(this.addr,e),zn(i,e)}}function t3(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function n3(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Fn(i,e))return;a.uniform2uiv(this.addr,e),zn(i,e)}}function i3(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Fn(i,e))return;a.uniform3uiv(this.addr,e),zn(i,e)}}function a3(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Fn(i,e))return;a.uniform4uiv(this.addr,e),zn(i,e)}}function r3(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l);let u;this.type===a.SAMPLER_2D_SHADOW?(wp.compareFunction=i.isReversedDepthBuffer()?Qp:Kp,u=wp):u=Ay,i.setTexture2D(e||u,l)}function s3(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Cy,l)}function o3(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||wy,l)}function l3(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Ry,l)}function u3(a){switch(a){case 5126:return XC;case 35664:return WC;case 35665:return qC;case 35666:return YC;case 35674:return jC;case 35675:return ZC;case 35676:return KC;case 5124:case 35670:return QC;case 35667:case 35671:return JC;case 35668:case 35672:return $C;case 35669:case 35673:return e3;case 5125:return t3;case 36294:return n3;case 36295:return i3;case 36296:return a3;case 35678:case 36198:case 36298:case 36306:case 35682:return r3;case 35679:case 36299:case 36307:return s3;case 35680:case 36300:case 36308:case 36293:return o3;case 36289:case 36303:case 36311:case 36292:return l3}}function c3(a,e){a.uniform1fv(this.addr,e)}function f3(a,e){const i=uo(e,this.size,2);a.uniform2fv(this.addr,i)}function d3(a,e){const i=uo(e,this.size,3);a.uniform3fv(this.addr,i)}function h3(a,e){const i=uo(e,this.size,4);a.uniform4fv(this.addr,i)}function p3(a,e){const i=uo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function m3(a,e){const i=uo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function g3(a,e){const i=uo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function v3(a,e){a.uniform1iv(this.addr,e)}function _3(a,e){a.uniform2iv(this.addr,e)}function x3(a,e){a.uniform3iv(this.addr,e)}function y3(a,e){a.uniform4iv(this.addr,e)}function S3(a,e){a.uniform1uiv(this.addr,e)}function M3(a,e){a.uniform2uiv(this.addr,e)}function E3(a,e){a.uniform3uiv(this.addr,e)}function b3(a,e){a.uniform4uiv(this.addr,e)}function T3(a,e,i){const s=this.cache,l=e.length,u=Pc(i,l);Fn(s,u)||(a.uniform1iv(this.addr,u),zn(s,u));let c;this.type===a.SAMPLER_2D_SHADOW?c=wp:c=Ay;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||c,u[d])}function A3(a,e,i){const s=this.cache,l=e.length,u=Pc(i,l);Fn(s,u)||(a.uniform1iv(this.addr,u),zn(s,u));for(let c=0;c!==l;++c)i.setTexture3D(e[c]||Cy,u[c])}function R3(a,e,i){const s=this.cache,l=e.length,u=Pc(i,l);Fn(s,u)||(a.uniform1iv(this.addr,u),zn(s,u));for(let c=0;c!==l;++c)i.setTextureCube(e[c]||wy,u[c])}function C3(a,e,i){const s=this.cache,l=e.length,u=Pc(i,l);Fn(s,u)||(a.uniform1iv(this.addr,u),zn(s,u));for(let c=0;c!==l;++c)i.setTexture2DArray(e[c]||Ry,u[c])}function w3(a){switch(a){case 5126:return c3;case 35664:return f3;case 35665:return d3;case 35666:return h3;case 35674:return p3;case 35675:return m3;case 35676:return g3;case 5124:case 35670:return v3;case 35667:case 35671:return _3;case 35668:case 35672:return x3;case 35669:case 35673:return y3;case 5125:return S3;case 36294:return M3;case 36295:return E3;case 36296:return b3;case 35678:case 36198:case 36298:case 36306:case 35682:return T3;case 35679:case 36299:case 36307:return A3;case 35680:case 36300:case 36308:case 36293:return R3;case 36289:case 36303:case 36311:case 36292:return C3}}class D3{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=u3(i.type)}}class U3{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=w3(i.type)}}class L3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,c=l.length;u!==c;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const wh=/(\w+)(\])?(\[|\.)?/g;function ax(a,e){a.seq.push(e),a.map[e.id]=e}function N3(a,e,i){const s=a.name,l=s.length;for(wh.lastIndex=0;;){const u=wh.exec(s),c=wh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&c+2===l){ax(i,p===void 0?new D3(d,a,e):new U3(d,a,e));break}else{let g=i.map[d];g===void 0&&(g=new L3(d),ax(i,g)),i=g}}}class Ec{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let c=0;c<s;++c){const d=e.getActiveUniform(i,c),m=e.getUniformLocation(i,d.name);N3(d,m,this)}const l=[],u=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(c):u.push(c);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,c=i.length;u!==c;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const c=e[l];c.id in i&&s.push(c)}return s}}function rx(a,e,i){const s=a.createShader(e);return a.shaderSource(s,i),a.compileShader(s),s}const O3=37297;let P3=0;function F3(a,e){const i=a.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let c=l;c<u;c++){const d=c+1;s.push(`${d===e?">":" "} ${d}: ${i[c]}`)}return s.join(`
`)}const sx=new Rt;function z3(a){Xt._getMatrix(sx,Xt.workingColorSpace,a);const e=`mat3( ${sx.elements.map(i=>i.toFixed(4))} )`;switch(Xt.getTransfer(a)){case Tc:return[e,"LinearTransferOETF"];case tn:return[e,"sRGBTransferOETF"];default:return Mt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function ox(a,e,i){const s=a.getShaderParameter(e,a.COMPILE_STATUS),u=(a.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const d=parseInt(c[1]);return i.toUpperCase()+`

`+u+`

`+F3(a.getShaderSource(e),d)}else return u}function I3(a,e){const i=z3(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const B3={[Zx]:"Linear",[Kx]:"Reinhard",[Qx]:"Cineon",[Jx]:"ACESFilmic",[ey]:"AgX",[ty]:"Neutral",[$x]:"Custom"};function H3(a,e){const i=B3[e];return i===void 0?(Mt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const pc=new de;function G3(){Xt.getLuminanceCoefficients(pc);const a=pc.x.toFixed(4),e=pc.y.toFixed(4),i=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V3(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pl).join(`
`)}function k3(a){const e=[];for(const i in a){const s=a[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function X3(a,e){const i={},s=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=a.getActiveAttrib(e,l),c=u.name;let d=1;u.type===a.FLOAT_MAT2&&(d=2),u.type===a.FLOAT_MAT3&&(d=3),u.type===a.FLOAT_MAT4&&(d=4),i[c]={type:u.type,location:a.getAttribLocation(e,c),locationSize:d}}return i}function pl(a){return a!==""}function lx(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ux(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const W3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dp(a){return a.replace(W3,Y3)}const q3=new Map;function Y3(a,e){let i=wt[e];if(i===void 0){const s=q3.get(e);if(s!==void 0)i=wt[s],Mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Dp(i)}const j3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cx(a){return a.replace(j3,Z3)}function Z3(a,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function fx(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const K3={[_c]:"SHADOWMAP_TYPE_PCF",[hl]:"SHADOWMAP_TYPE_VSM"};function Q3(a){return K3[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const J3={[ns]:"ENVMAP_TYPE_CUBE",[ao]:"ENVMAP_TYPE_CUBE",[Lc]:"ENVMAP_TYPE_CUBE_UV"};function $3(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":J3[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const ew={[ao]:"ENVMAP_MODE_REFRACTION"};function tw(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":ew[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nw={[jx]:"ENVMAP_BLENDING_MULTIPLY",[YT]:"ENVMAP_BLENDING_MIX",[jT]:"ENVMAP_BLENDING_ADD"};function iw(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":nw[a.combine]||"ENVMAP_BLENDING_NONE"}function aw(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function rw(a,e,i,s){const l=a.getContext(),u=i.defines;let c=i.vertexShader,d=i.fragmentShader;const m=Q3(i),p=$3(i),v=tw(i),g=iw(i),_=aw(i),y=V3(i),E=k3(u),T=l.createProgram();let M,x,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(pl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(pl).join(`
`),x.length>0&&(x+=`
`)):(M=[fx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pl).join(`
`),x=[fx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==la?"#define TONE_MAPPING":"",i.toneMapping!==la?wt.tonemapping_pars_fragment:"",i.toneMapping!==la?H3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,I3("linearToOutputTexel",i.outputColorSpace),G3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(pl).join(`
`)),c=Dp(c),c=lx(c,i),c=ux(c,i),d=Dp(d),d=lx(d,i),d=ux(d,i),c=cx(c),d=cx(d),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===b_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===b_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=D+M+c,O=D+x+d,z=rx(l,l.VERTEX_SHADER,L),I=rx(l,l.FRAGMENT_SHADER,O);l.attachShader(T,z),l.attachShader(T,I),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function R(B){if(a.debug.checkShaderErrors){const J=l.getProgramInfoLog(T)||"",te=l.getShaderInfoLog(z)||"",fe=l.getShaderInfoLog(I)||"",ne=J.trim(),P=te.trim(),H=fe.trim();let Y=!0,xe=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(Y=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,T,z,I);else{const ye=ox(l,z,"vertex"),N=ox(l,I,"fragment");jt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ne+`
`+ye+`
`+N)}else ne!==""?Mt("WebGLProgram: Program Info Log:",ne):(P===""||H==="")&&(xe=!1);xe&&(B.diagnostics={runnable:Y,programLog:ne,vertexShader:{log:P,prefix:M},fragmentShader:{log:H,prefix:x}})}l.deleteShader(z),l.deleteShader(I),k=new Ec(l,T),A=X3(l,T)}let k;this.getUniforms=function(){return k===void 0&&R(this),k};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=l.getProgramParameter(T,O3)),U},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=P3++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=z,this.fragmentShader=I,this}let sw=0;class ow{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(l)===!1&&(c.add(l),l.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new lw(e),i.set(e,s)),s}}class lw{constructor(e){this.id=sw++,this.code=e,this.usedTimes=0}}function uw(a,e,i,s,l,u,c){const d=new hy,m=new ow,p=new Set,v=[],g=new Map,_=l.logarithmicDepthBuffer;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return p.add(A),A===0?"uv":`uv${A}`}function M(A,U,B,J,te){const fe=J.fog,ne=te.geometry,P=A.isMeshStandardMaterial?J.environment:null,H=(A.isMeshStandardMaterial?i:e).get(A.envMap||P),Y=H&&H.mapping===Lc?H.image.height:null,xe=E[A.type];A.precision!==null&&(y=l.getMaxPrecision(A.precision),y!==A.precision&&Mt("WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const ye=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,N=ye!==void 0?ye.length:0;let ee=0;ne.morphAttributes.position!==void 0&&(ee=1),ne.morphAttributes.normal!==void 0&&(ee=2),ne.morphAttributes.color!==void 0&&(ee=3);let ge,Ce,Fe,ie;if(xe){const Dt=ra[xe];ge=Dt.vertexShader,Ce=Dt.fragmentShader}else ge=A.vertexShader,Ce=A.fragmentShader,m.update(A),Fe=m.getVertexShaderID(A),ie=m.getFragmentShaderID(A);const me=a.getRenderTarget(),Ne=a.state.buffers.depth.getReversed(),We=te.isInstancedMesh===!0,Ve=te.isBatchedMesh===!0,yt=!!A.map,_t=!!A.matcap,gt=!!H,bt=!!A.aoMap,Ht=!!A.lightMap,pt=!!A.bumpMap,mn=!!A.normalMap,X=!!A.displacementMap,un=!!A.emissiveMap,Ft=!!A.metalnessMap,Wt=!!A.roughnessMap,st=A.anisotropy>0,F=A.clearcoat>0,b=A.dispersion>0,j=A.iridescence>0,_e=A.sheen>0,Te=A.transmission>0,he=st&&!!A.anisotropyMap,et=F&&!!A.clearcoatMap,Ie=F&&!!A.clearcoatNormalMap,rt=F&&!!A.clearcoatRoughnessMap,ht=j&&!!A.iridescenceMap,De=j&&!!A.iridescenceThicknessMap,we=_e&&!!A.sheenColorMap,Ke=_e&&!!A.sheenRoughnessMap,je=!!A.specularMap,Be=!!A.specularColorMap,Et=!!A.specularIntensityMap,q=Te&&!!A.transmissionMap,He=Te&&!!A.thicknessMap,Le=!!A.gradientMap,qe=!!A.alphaMap,Ae=A.alphaTest>0,Ee=!!A.alphaHash,Pe=!!A.extensions;let vt=la;A.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(vt=a.toneMapping);const kt={shaderID:xe,shaderType:A.type,shaderName:A.name,vertexShader:ge,fragmentShader:Ce,defines:A.defines,customVertexShaderID:Fe,customFragmentShaderID:ie,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:Ve,batchingColor:Ve&&te._colorsTexture!==null,instancing:We,instancingColor:We&&te.instanceColor!==null,instancingMorph:We&&te.morphTexture!==null,outputColorSpace:me===null?a.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:so,alphaToCoverage:!!A.alphaToCoverage,map:yt,matcap:_t,envMap:gt,envMapMode:gt&&H.mapping,envMapCubeUVHeight:Y,aoMap:bt,lightMap:Ht,bumpMap:pt,normalMap:mn,displacementMap:X,emissiveMap:un,normalMapObjectSpace:mn&&A.normalMapType===JT,normalMapTangentSpace:mn&&A.normalMapType===QT,metalnessMap:Ft,roughnessMap:Wt,anisotropy:st,anisotropyMap:he,clearcoat:F,clearcoatMap:et,clearcoatNormalMap:Ie,clearcoatRoughnessMap:rt,dispersion:b,iridescence:j,iridescenceMap:ht,iridescenceThicknessMap:De,sheen:_e,sheenColorMap:we,sheenRoughnessMap:Ke,specularMap:je,specularColorMap:Be,specularIntensityMap:Et,transmission:Te,transmissionMap:q,thicknessMap:He,gradientMap:Le,opaque:A.transparent===!1&&A.blending===to&&A.alphaToCoverage===!1,alphaMap:qe,alphaTest:Ae,alphaHash:Ee,combine:A.combine,mapUv:yt&&T(A.map.channel),aoMapUv:bt&&T(A.aoMap.channel),lightMapUv:Ht&&T(A.lightMap.channel),bumpMapUv:pt&&T(A.bumpMap.channel),normalMapUv:mn&&T(A.normalMap.channel),displacementMapUv:X&&T(A.displacementMap.channel),emissiveMapUv:un&&T(A.emissiveMap.channel),metalnessMapUv:Ft&&T(A.metalnessMap.channel),roughnessMapUv:Wt&&T(A.roughnessMap.channel),anisotropyMapUv:he&&T(A.anisotropyMap.channel),clearcoatMapUv:et&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:De&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:we&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&T(A.sheenRoughnessMap.channel),specularMapUv:je&&T(A.specularMap.channel),specularColorMapUv:Be&&T(A.specularColorMap.channel),specularIntensityMapUv:Et&&T(A.specularIntensityMap.channel),transmissionMapUv:q&&T(A.transmissionMap.channel),thicknessMapUv:He&&T(A.thicknessMap.channel),alphaMapUv:qe&&T(A.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(mn||st),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!ne.attributes.uv&&(yt||qe),fog:!!fe,useFog:A.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ne,skinning:te.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ee,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:a.shadowMap.enabled&&B.length>0,shadowMapType:a.shadowMap.type,toneMapping:vt,decodeVideoTexture:yt&&A.map.isVideoTexture===!0&&Xt.getTransfer(A.map.colorSpace)===tn,decodeVideoTextureEmissive:un&&A.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(A.emissiveMap.colorSpace)===tn,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===za,flipSided:A.side===fi,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Pe&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&A.extensions.multiDraw===!0||Ve)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return kt.vertexUv1s=p.has(1),kt.vertexUv2s=p.has(2),kt.vertexUv3s=p.has(3),p.clear(),kt}function x(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const B in A.defines)U.push(B),U.push(A.defines[B]);return A.isRawShaderMaterial===!1&&(D(U,A),L(U,A),U.push(a.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function D(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function L(A,U){d.disableAll(),U.instancing&&d.enable(0),U.instancingColor&&d.enable(1),U.instancingMorph&&d.enable(2),U.matcap&&d.enable(3),U.envMap&&d.enable(4),U.normalMapObjectSpace&&d.enable(5),U.normalMapTangentSpace&&d.enable(6),U.clearcoat&&d.enable(7),U.iridescence&&d.enable(8),U.alphaTest&&d.enable(9),U.vertexColors&&d.enable(10),U.vertexAlphas&&d.enable(11),U.vertexUv1s&&d.enable(12),U.vertexUv2s&&d.enable(13),U.vertexUv3s&&d.enable(14),U.vertexTangents&&d.enable(15),U.anisotropy&&d.enable(16),U.alphaHash&&d.enable(17),U.batching&&d.enable(18),U.dispersion&&d.enable(19),U.batchingColor&&d.enable(20),U.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),A.push(d.mask)}function O(A){const U=E[A.type];let B;if(U){const J=ra[U];B=A1.clone(J.uniforms)}else B=A.uniforms;return B}function z(A,U){let B=g.get(U);return B!==void 0?++B.usedTimes:(B=new rw(a,U,A,u),v.push(B),g.set(U,B)),B}function I(A){if(--A.usedTimes===0){const U=v.indexOf(A);v[U]=v[v.length-1],v.pop(),g.delete(A.cacheKey),A.destroy()}}function R(A){m.remove(A)}function k(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:O,acquireProgram:z,releaseProgram:I,releaseShaderCache:R,programs:v,dispose:k}}function cw(){let a=new WeakMap;function e(c){return a.has(c)}function i(c){let d=a.get(c);return d===void 0&&(d={},a.set(c,d)),d}function s(c){a.delete(c)}function l(c,d,m){a.get(c)[d]=m}function u(){a=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function fw(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function dx(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function hx(){const a=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function c(g,_,y,E,T,M){let x=a[e];return x===void 0?(x={id:g.id,object:g,geometry:_,material:y,groupOrder:E,renderOrder:g.renderOrder,z:T,group:M},a[e]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=y,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=T,x.group=M),e++,x}function d(g,_,y,E,T,M){const x=c(g,_,y,E,T,M);y.transmission>0?s.push(x):y.transparent===!0?l.push(x):i.push(x)}function m(g,_,y,E,T,M){const x=c(g,_,y,E,T,M);y.transmission>0?s.unshift(x):y.transparent===!0?l.unshift(x):i.unshift(x)}function p(g,_){i.length>1&&i.sort(g||fw),s.length>1&&s.sort(_||dx),l.length>1&&l.sort(_||dx)}function v(){for(let g=e,_=a.length;g<_;g++){const y=a[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:v,sort:p}}function dw(){let a=new WeakMap;function e(s,l){const u=a.get(s);let c;return u===void 0?(c=new hx,a.set(s,[c])):l>=u.length?(c=new hx,u.push(c)):c=u[l],c}function i(){a=new WeakMap}return{get:e,dispose:i}}function hw(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new de,color:new nn};break;case"SpotLight":i={position:new de,direction:new de,color:new nn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new de,color:new nn,distance:0,decay:0};break;case"HemisphereLight":i={direction:new de,skyColor:new nn,groundColor:new nn};break;case"RectAreaLight":i={color:new nn,position:new de,halfWidth:new de,halfHeight:new de};break}return a[e.id]=i,i}}}function pw(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ln};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ln};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ln,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let mw=0;function gw(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function vw(a){const e=new hw,i=pw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new de);const l=new de,u=new bn,c=new bn;function d(p){let v=0,g=0,_=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let y=0,E=0,T=0,M=0,x=0,D=0,L=0,O=0,z=0,I=0,R=0;p.sort(gw);for(let A=0,U=p.length;A<U;A++){const B=p[A],J=B.color,te=B.intensity,fe=B.distance;let ne=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===ro?ne=B.shadow.map.texture:ne=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)v+=J.r*te,g+=J.g*te,_+=J.b*te;else if(B.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(B.sh.coefficients[P],te);R++}else if(B.isDirectionalLight){const P=e.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const H=B.shadow,Y=i.get(B);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,s.directionalShadow[y]=Y,s.directionalShadowMap[y]=ne,s.directionalShadowMatrix[y]=B.shadow.matrix,D++}s.directional[y]=P,y++}else if(B.isSpotLight){const P=e.get(B);P.position.setFromMatrixPosition(B.matrixWorld),P.color.copy(J).multiplyScalar(te),P.distance=fe,P.coneCos=Math.cos(B.angle),P.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),P.decay=B.decay,s.spot[T]=P;const H=B.shadow;if(B.map&&(s.spotLightMap[z]=B.map,z++,H.updateMatrices(B),B.castShadow&&I++),s.spotLightMatrix[T]=H.matrix,B.castShadow){const Y=i.get(B);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,s.spotShadow[T]=Y,s.spotShadowMap[T]=ne,O++}T++}else if(B.isRectAreaLight){const P=e.get(B);P.color.copy(J).multiplyScalar(te),P.halfWidth.set(B.width*.5,0,0),P.halfHeight.set(0,B.height*.5,0),s.rectArea[M]=P,M++}else if(B.isPointLight){const P=e.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),P.distance=B.distance,P.decay=B.decay,B.castShadow){const H=B.shadow,Y=i.get(B);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,Y.shadowCameraNear=H.camera.near,Y.shadowCameraFar=H.camera.far,s.pointShadow[E]=Y,s.pointShadowMap[E]=ne,s.pointShadowMatrix[E]=B.shadow.matrix,L++}s.point[E]=P,E++}else if(B.isHemisphereLight){const P=e.get(B);P.skyColor.copy(B.color).multiplyScalar(te),P.groundColor.copy(B.groundColor).multiplyScalar(te),s.hemi[x]=P,x++}}M>0&&(a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ze.LTC_FLOAT_1,s.rectAreaLTC2=Ze.LTC_FLOAT_2):(s.rectAreaLTC1=Ze.LTC_HALF_1,s.rectAreaLTC2=Ze.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=_;const k=s.hash;(k.directionalLength!==y||k.pointLength!==E||k.spotLength!==T||k.rectAreaLength!==M||k.hemiLength!==x||k.numDirectionalShadows!==D||k.numPointShadows!==L||k.numSpotShadows!==O||k.numSpotMaps!==z||k.numLightProbes!==R)&&(s.directional.length=y,s.spot.length=T,s.rectArea.length=M,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=O,s.spotShadowMap.length=O,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=O+z-I,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=R,k.directionalLength=y,k.pointLength=E,k.spotLength=T,k.rectAreaLength=M,k.hemiLength=x,k.numDirectionalShadows=D,k.numPointShadows=L,k.numSpotShadows=O,k.numSpotMaps=z,k.numLightProbes=R,s.version=mw++)}function m(p,v){let g=0,_=0,y=0,E=0,T=0;const M=v.matrixWorldInverse;for(let x=0,D=p.length;x<D;x++){const L=p[x];if(L.isDirectionalLight){const O=s.directional[g];O.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(M),g++}else if(L.isSpotLight){const O=s.spot[y];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(M),O.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const O=s.rectArea[E];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(M),c.identity(),u.copy(L.matrixWorld),u.premultiply(M),c.extractRotation(u),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),O.halfWidth.applyMatrix4(c),O.halfHeight.applyMatrix4(c),E++}else if(L.isPointLight){const O=s.point[_];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(M),_++}else if(L.isHemisphereLight){const O=s.hemi[T];O.direction.setFromMatrixPosition(L.matrixWorld),O.direction.transformDirection(M),T++}}}return{setup:d,setupView:m,state:s}}function px(a){const e=new vw(a),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function c(v){s.push(v)}function d(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:c}}function _w(a){let e=new WeakMap;function i(l,u=0){const c=e.get(l);let d;return c===void 0?(d=new px(a),e.set(l,[d])):u>=c.length?(d=new px(a),c.push(d)):d=c[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const xw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Sw=[new de(1,0,0),new de(-1,0,0),new de(0,1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1)],Mw=[new de(0,-1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1),new de(0,-1,0),new de(0,-1,0)],mx=new bn,ul=new de,Dh=new de;function Ew(a,e,i){let s=new Ey;const l=new ln,u=new ln,c=new En,d=new I1,m=new B1,p={},v=i.maxTextureSize,g={[Ar]:fi,[fi]:Ar,[za]:za},_=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ln},radius:{value:4}},vertexShader:xw,fragmentShader:yw}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const E=new $i;E.setAttribute("position",new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new fa(E,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_c;let x=this.type;this.render=function(I,R,k){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;I.type===CT&&(Mt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=_c);const A=a.getRenderTarget(),U=a.getActiveCubeFace(),B=a.getActiveMipmapLevel(),J=a.state;J.setBlending(Ba),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const te=x!==this.type;te&&R.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(ne=>ne.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,ne=I.length;fe<ne;fe++){const P=I[fe],H=P.shadow;if(H===void 0){Mt("WebGLShadowMap:",P,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const Y=H.getFrameExtents();if(l.multiply(Y),u.copy(H.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/Y.x),l.x=u.x*Y.x,H.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/Y.y),l.y=u.y*Y.y,H.mapSize.y=u.y)),H.map===null||te===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===hl){if(P.isPointLight){Mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Qi(l.x,l.y,{format:ro,type:Va,minFilter:ei,magFilter:ei,generateMipmaps:!1}),H.map.texture.name=P.name+".shadowMap",H.map.depthTexture=new Ml(l.x,l.y,Bi),H.map.depthTexture.name=P.name+".shadowMapDepth",H.map.depthTexture.format=ka,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn}else{P.isPointLight?(H.map=new Sy(l.x),H.map.depthTexture=new F1(l.x,ca)):(H.map=new Qi(l.x,l.y),H.map.depthTexture=new Ml(l.x,l.y,ca)),H.map.depthTexture.name=P.name+".shadowMap",H.map.depthTexture.format=ka;const ye=a.state.buffers.depth.getReversed();this.type===_c?(H.map.depthTexture.compareFunction=ye?Qp:Kp,H.map.depthTexture.minFilter=ei,H.map.depthTexture.magFilter=ei):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn)}H.camera.updateProjectionMatrix()}const xe=H.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<xe;ye++){if(H.map.isWebGLCubeRenderTarget)a.setRenderTarget(H.map,ye),a.clear();else{ye===0&&(a.setRenderTarget(H.map),a.clear());const N=H.getViewport(ye);c.set(u.x*N.x,u.y*N.y,u.x*N.z,u.y*N.w),J.viewport(c)}if(P.isPointLight){const N=H.camera,ee=H.matrix,ge=P.distance||N.far;ge!==N.far&&(N.far=ge,N.updateProjectionMatrix()),ul.setFromMatrixPosition(P.matrixWorld),N.position.copy(ul),Dh.copy(N.position),Dh.add(Sw[ye]),N.up.copy(Mw[ye]),N.lookAt(Dh),N.updateMatrixWorld(),ee.makeTranslation(-ul.x,-ul.y,-ul.z),mx.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),H._frustum.setFromProjectionMatrix(mx,N.coordinateSystem,N.reversedDepth)}else H.updateMatrices(P);s=H.getFrustum(),O(R,k,H.camera,P,this.type)}H.isPointLightShadow!==!0&&this.type===hl&&D(H,k),H.needsUpdate=!1}x=this.type,M.needsUpdate=!1,a.setRenderTarget(A,U,B)};function D(I,R){const k=e.update(T);_.defines.VSM_SAMPLES!==I.blurSamples&&(_.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Qi(l.x,l.y,{format:ro,type:Va})),_.uniforms.shadow_pass.value=I.map.depthTexture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,a.setRenderTarget(I.mapPass),a.clear(),a.renderBufferDirect(R,null,k,_,T,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,a.setRenderTarget(I.map),a.clear(),a.renderBufferDirect(R,null,k,y,T,null)}function L(I,R,k,A){let U=null;const B=k.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)U=B;else if(U=k.isPointLight===!0?m:d,a.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const J=U.uuid,te=R.uuid;let fe=p[J];fe===void 0&&(fe={},p[J]=fe);let ne=fe[te];ne===void 0&&(ne=U.clone(),fe[te]=ne,R.addEventListener("dispose",z)),U=ne}if(U.visible=R.visible,U.wireframe=R.wireframe,A===hl?U.side=R.shadowSide!==null?R.shadowSide:R.side:U.side=R.shadowSide!==null?R.shadowSide:g[R.side],U.alphaMap=R.alphaMap,U.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,U.map=R.map,U.clipShadows=R.clipShadows,U.clippingPlanes=R.clippingPlanes,U.clipIntersection=R.clipIntersection,U.displacementMap=R.displacementMap,U.displacementScale=R.displacementScale,U.displacementBias=R.displacementBias,U.wireframeLinewidth=R.wireframeLinewidth,U.linewidth=R.linewidth,k.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const J=a.properties.get(U);J.light=k}return U}function O(I,R,k,A,U){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&U===hl)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,I.matrixWorld);const te=e.update(I),fe=I.material;if(Array.isArray(fe)){const ne=te.groups;for(let P=0,H=ne.length;P<H;P++){const Y=ne[P],xe=fe[Y.materialIndex];if(xe&&xe.visible){const ye=L(I,xe,A,U);I.onBeforeShadow(a,I,R,k,te,ye,Y),a.renderBufferDirect(k,null,te,ye,I,Y),I.onAfterShadow(a,I,R,k,te,ye,Y)}}}else if(fe.visible){const ne=L(I,fe,A,U);I.onBeforeShadow(a,I,R,k,te,ne,null),a.renderBufferDirect(k,null,te,ne,I,null),I.onAfterShadow(a,I,R,k,te,ne,null)}}const J=I.children;for(let te=0,fe=J.length;te<fe;te++)O(J[te],R,k,A,U)}function z(I){I.target.removeEventListener("dispose",z);for(const k in p){const A=p[k],U=I.target.uuid;U in A&&(A[U].dispose(),delete A[U])}}}const bw={[Ih]:Bh,[Hh]:kh,[Gh]:Xh,[io]:Vh,[Bh]:Ih,[kh]:Hh,[Xh]:Gh,[Vh]:io};function Tw(a,e){function i(){let q=!1;const He=new En;let Le=null;const qe=new En(0,0,0,0);return{setMask:function(Ae){Le!==Ae&&!q&&(a.colorMask(Ae,Ae,Ae,Ae),Le=Ae)},setLocked:function(Ae){q=Ae},setClear:function(Ae,Ee,Pe,vt,kt){kt===!0&&(Ae*=vt,Ee*=vt,Pe*=vt),He.set(Ae,Ee,Pe,vt),qe.equals(He)===!1&&(a.clearColor(Ae,Ee,Pe,vt),qe.copy(He))},reset:function(){q=!1,Le=null,qe.set(-1,0,0,0)}}}function s(){let q=!1,He=!1,Le=null,qe=null,Ae=null;return{setReversed:function(Ee){if(He!==Ee){const Pe=e.get("EXT_clip_control");Ee?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),He=Ee;const vt=Ae;Ae=null,this.setClear(vt)}},getReversed:function(){return He},setTest:function(Ee){Ee?me(a.DEPTH_TEST):Ne(a.DEPTH_TEST)},setMask:function(Ee){Le!==Ee&&!q&&(a.depthMask(Ee),Le=Ee)},setFunc:function(Ee){if(He&&(Ee=bw[Ee]),qe!==Ee){switch(Ee){case Ih:a.depthFunc(a.NEVER);break;case Bh:a.depthFunc(a.ALWAYS);break;case Hh:a.depthFunc(a.LESS);break;case io:a.depthFunc(a.LEQUAL);break;case Gh:a.depthFunc(a.EQUAL);break;case Vh:a.depthFunc(a.GEQUAL);break;case kh:a.depthFunc(a.GREATER);break;case Xh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}qe=Ee}},setLocked:function(Ee){q=Ee},setClear:function(Ee){Ae!==Ee&&(He&&(Ee=1-Ee),a.clearDepth(Ee),Ae=Ee)},reset:function(){q=!1,Le=null,qe=null,Ae=null,He=!1}}}function l(){let q=!1,He=null,Le=null,qe=null,Ae=null,Ee=null,Pe=null,vt=null,kt=null;return{setTest:function(Dt){q||(Dt?me(a.STENCIL_TEST):Ne(a.STENCIL_TEST))},setMask:function(Dt){He!==Dt&&!q&&(a.stencilMask(Dt),He=Dt)},setFunc:function(Dt,Ln,hi){(Le!==Dt||qe!==Ln||Ae!==hi)&&(a.stencilFunc(Dt,Ln,hi),Le=Dt,qe=Ln,Ae=hi)},setOp:function(Dt,Ln,hi){(Ee!==Dt||Pe!==Ln||vt!==hi)&&(a.stencilOp(Dt,Ln,hi),Ee=Dt,Pe=Ln,vt=hi)},setLocked:function(Dt){q=Dt},setClear:function(Dt){kt!==Dt&&(a.clearStencil(Dt),kt=Dt)},reset:function(){q=!1,He=null,Le=null,qe=null,Ae=null,Ee=null,Pe=null,vt=null,kt=null}}}const u=new i,c=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},g={},_=new WeakMap,y=[],E=null,T=!1,M=null,x=null,D=null,L=null,O=null,z=null,I=null,R=new nn(0,0,0),k=0,A=!1,U=null,B=null,J=null,te=null,fe=null;const ne=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,H=0;const Y=a.getParameter(a.VERSION);Y.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Y)[1]),P=H>=1):Y.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),P=H>=2);let xe=null,ye={};const N=a.getParameter(a.SCISSOR_BOX),ee=a.getParameter(a.VIEWPORT),ge=new En().fromArray(N),Ce=new En().fromArray(ee);function Fe(q,He,Le,qe){const Ae=new Uint8Array(4),Ee=a.createTexture();a.bindTexture(q,Ee),a.texParameteri(q,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(q,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Pe=0;Pe<Le;Pe++)q===a.TEXTURE_3D||q===a.TEXTURE_2D_ARRAY?a.texImage3D(He,0,a.RGBA,1,1,qe,0,a.RGBA,a.UNSIGNED_BYTE,Ae):a.texImage2D(He+Pe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ae);return Ee}const ie={};ie[a.TEXTURE_2D]=Fe(a.TEXTURE_2D,a.TEXTURE_2D,1),ie[a.TEXTURE_CUBE_MAP]=Fe(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[a.TEXTURE_2D_ARRAY]=Fe(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ie[a.TEXTURE_3D]=Fe(a.TEXTURE_3D,a.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),d.setClear(0),me(a.DEPTH_TEST),c.setFunc(io),pt(!1),mn(__),me(a.CULL_FACE),bt(Ba);function me(q){v[q]!==!0&&(a.enable(q),v[q]=!0)}function Ne(q){v[q]!==!1&&(a.disable(q),v[q]=!1)}function We(q,He){return g[q]!==He?(a.bindFramebuffer(q,He),g[q]=He,q===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=He),q===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=He),!0):!1}function Ve(q,He){let Le=y,qe=!1;if(q){Le=_.get(He),Le===void 0&&(Le=[],_.set(He,Le));const Ae=q.textures;if(Le.length!==Ae.length||Le[0]!==a.COLOR_ATTACHMENT0){for(let Ee=0,Pe=Ae.length;Ee<Pe;Ee++)Le[Ee]=a.COLOR_ATTACHMENT0+Ee;Le.length=Ae.length,qe=!0}}else Le[0]!==a.BACK&&(Le[0]=a.BACK,qe=!0);qe&&a.drawBuffers(Le)}function yt(q){return E!==q?(a.useProgram(q),E=q,!0):!1}const _t={[Qr]:a.FUNC_ADD,[DT]:a.FUNC_SUBTRACT,[UT]:a.FUNC_REVERSE_SUBTRACT};_t[LT]=a.MIN,_t[NT]=a.MAX;const gt={[OT]:a.ZERO,[PT]:a.ONE,[FT]:a.SRC_COLOR,[Fh]:a.SRC_ALPHA,[VT]:a.SRC_ALPHA_SATURATE,[HT]:a.DST_COLOR,[IT]:a.DST_ALPHA,[zT]:a.ONE_MINUS_SRC_COLOR,[zh]:a.ONE_MINUS_SRC_ALPHA,[GT]:a.ONE_MINUS_DST_COLOR,[BT]:a.ONE_MINUS_DST_ALPHA,[kT]:a.CONSTANT_COLOR,[XT]:a.ONE_MINUS_CONSTANT_COLOR,[WT]:a.CONSTANT_ALPHA,[qT]:a.ONE_MINUS_CONSTANT_ALPHA};function bt(q,He,Le,qe,Ae,Ee,Pe,vt,kt,Dt){if(q===Ba){T===!0&&(Ne(a.BLEND),T=!1);return}if(T===!1&&(me(a.BLEND),T=!0),q!==wT){if(q!==M||Dt!==A){if((x!==Qr||O!==Qr)&&(a.blendEquation(a.FUNC_ADD),x=Qr,O=Qr),Dt)switch(q){case to:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case x_:a.blendFunc(a.ONE,a.ONE);break;case y_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case S_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:jt("WebGLState: Invalid blending: ",q);break}else switch(q){case to:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case x_:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case y_:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case S_:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",q);break}D=null,L=null,z=null,I=null,R.set(0,0,0),k=0,M=q,A=Dt}return}Ae=Ae||He,Ee=Ee||Le,Pe=Pe||qe,(He!==x||Ae!==O)&&(a.blendEquationSeparate(_t[He],_t[Ae]),x=He,O=Ae),(Le!==D||qe!==L||Ee!==z||Pe!==I)&&(a.blendFuncSeparate(gt[Le],gt[qe],gt[Ee],gt[Pe]),D=Le,L=qe,z=Ee,I=Pe),(vt.equals(R)===!1||kt!==k)&&(a.blendColor(vt.r,vt.g,vt.b,kt),R.copy(vt),k=kt),M=q,A=!1}function Ht(q,He){q.side===za?Ne(a.CULL_FACE):me(a.CULL_FACE);let Le=q.side===fi;He&&(Le=!Le),pt(Le),q.blending===to&&q.transparent===!1?bt(Ba):bt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),u.setMask(q.colorWrite);const qe=q.stencilWrite;d.setTest(qe),qe&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),un(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?me(a.SAMPLE_ALPHA_TO_COVERAGE):Ne(a.SAMPLE_ALPHA_TO_COVERAGE)}function pt(q){U!==q&&(q?a.frontFace(a.CW):a.frontFace(a.CCW),U=q)}function mn(q){q!==AT?(me(a.CULL_FACE),q!==B&&(q===__?a.cullFace(a.BACK):q===RT?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ne(a.CULL_FACE),B=q}function X(q){q!==J&&(P&&a.lineWidth(q),J=q)}function un(q,He,Le){q?(me(a.POLYGON_OFFSET_FILL),(te!==He||fe!==Le)&&(a.polygonOffset(He,Le),te=He,fe=Le)):Ne(a.POLYGON_OFFSET_FILL)}function Ft(q){q?me(a.SCISSOR_TEST):Ne(a.SCISSOR_TEST)}function Wt(q){q===void 0&&(q=a.TEXTURE0+ne-1),xe!==q&&(a.activeTexture(q),xe=q)}function st(q,He,Le){Le===void 0&&(xe===null?Le=a.TEXTURE0+ne-1:Le=xe);let qe=ye[Le];qe===void 0&&(qe={type:void 0,texture:void 0},ye[Le]=qe),(qe.type!==q||qe.texture!==He)&&(xe!==Le&&(a.activeTexture(Le),xe=Le),a.bindTexture(q,He||ie[q]),qe.type=q,qe.texture=He)}function F(){const q=ye[xe];q!==void 0&&q.type!==void 0&&(a.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function b(){try{a.compressedTexImage2D(...arguments)}catch(q){jt("WebGLState:",q)}}function j(){try{a.compressedTexImage3D(...arguments)}catch(q){jt("WebGLState:",q)}}function _e(){try{a.texSubImage2D(...arguments)}catch(q){jt("WebGLState:",q)}}function Te(){try{a.texSubImage3D(...arguments)}catch(q){jt("WebGLState:",q)}}function he(){try{a.compressedTexSubImage2D(...arguments)}catch(q){jt("WebGLState:",q)}}function et(){try{a.compressedTexSubImage3D(...arguments)}catch(q){jt("WebGLState:",q)}}function Ie(){try{a.texStorage2D(...arguments)}catch(q){jt("WebGLState:",q)}}function rt(){try{a.texStorage3D(...arguments)}catch(q){jt("WebGLState:",q)}}function ht(){try{a.texImage2D(...arguments)}catch(q){jt("WebGLState:",q)}}function De(){try{a.texImage3D(...arguments)}catch(q){jt("WebGLState:",q)}}function we(q){ge.equals(q)===!1&&(a.scissor(q.x,q.y,q.z,q.w),ge.copy(q))}function Ke(q){Ce.equals(q)===!1&&(a.viewport(q.x,q.y,q.z,q.w),Ce.copy(q))}function je(q,He){let Le=p.get(He);Le===void 0&&(Le=new WeakMap,p.set(He,Le));let qe=Le.get(q);qe===void 0&&(qe=a.getUniformBlockIndex(He,q.name),Le.set(q,qe))}function Be(q,He){const qe=p.get(He).get(q);m.get(He)!==qe&&(a.uniformBlockBinding(He,qe,q.__bindingPointIndex),m.set(He,qe))}function Et(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),c.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),v={},xe=null,ye={},g={},_=new WeakMap,y=[],E=null,T=!1,M=null,x=null,D=null,L=null,O=null,z=null,I=null,R=new nn(0,0,0),k=0,A=!1,U=null,B=null,J=null,te=null,fe=null,ge.set(0,0,a.canvas.width,a.canvas.height),Ce.set(0,0,a.canvas.width,a.canvas.height),u.reset(),c.reset(),d.reset()}return{buffers:{color:u,depth:c,stencil:d},enable:me,disable:Ne,bindFramebuffer:We,drawBuffers:Ve,useProgram:yt,setBlending:bt,setMaterial:Ht,setFlipSided:pt,setCullFace:mn,setLineWidth:X,setPolygonOffset:un,setScissorTest:Ft,activeTexture:Wt,bindTexture:st,unbindTexture:F,compressedTexImage2D:b,compressedTexImage3D:j,texImage2D:ht,texImage3D:De,updateUBOMapping:je,uniformBlockBinding:Be,texStorage2D:Ie,texStorage3D:rt,texSubImage2D:_e,texSubImage3D:Te,compressedTexSubImage2D:he,compressedTexSubImage3D:et,scissor:we,viewport:Ke,reset:Et}}function Aw(a,e,i,s,l,u,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ln,v=new WeakMap;let g;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,b){return y?new OffscreenCanvas(F,b):Rc("canvas")}function T(F,b,j){let _e=1;const Te=st(F);if((Te.width>j||Te.height>j)&&(_e=j/Math.max(Te.width,Te.height)),_e<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const he=Math.floor(_e*Te.width),et=Math.floor(_e*Te.height);g===void 0&&(g=E(he,et));const Ie=b?E(he,et):g;return Ie.width=he,Ie.height=et,Ie.getContext("2d").drawImage(F,0,0,he,et),Mt("WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+he+"x"+et+")."),Ie}else return"data"in F&&Mt("WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),F;return F}function M(F){return F.generateMipmaps}function x(F){a.generateMipmap(F)}function D(F){return F.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?a.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function L(F,b,j,_e,Te=!1){if(F!==null){if(a[F]!==void 0)return a[F];Mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let he=b;if(b===a.RED&&(j===a.FLOAT&&(he=a.R32F),j===a.HALF_FLOAT&&(he=a.R16F),j===a.UNSIGNED_BYTE&&(he=a.R8)),b===a.RED_INTEGER&&(j===a.UNSIGNED_BYTE&&(he=a.R8UI),j===a.UNSIGNED_SHORT&&(he=a.R16UI),j===a.UNSIGNED_INT&&(he=a.R32UI),j===a.BYTE&&(he=a.R8I),j===a.SHORT&&(he=a.R16I),j===a.INT&&(he=a.R32I)),b===a.RG&&(j===a.FLOAT&&(he=a.RG32F),j===a.HALF_FLOAT&&(he=a.RG16F),j===a.UNSIGNED_BYTE&&(he=a.RG8)),b===a.RG_INTEGER&&(j===a.UNSIGNED_BYTE&&(he=a.RG8UI),j===a.UNSIGNED_SHORT&&(he=a.RG16UI),j===a.UNSIGNED_INT&&(he=a.RG32UI),j===a.BYTE&&(he=a.RG8I),j===a.SHORT&&(he=a.RG16I),j===a.INT&&(he=a.RG32I)),b===a.RGB_INTEGER&&(j===a.UNSIGNED_BYTE&&(he=a.RGB8UI),j===a.UNSIGNED_SHORT&&(he=a.RGB16UI),j===a.UNSIGNED_INT&&(he=a.RGB32UI),j===a.BYTE&&(he=a.RGB8I),j===a.SHORT&&(he=a.RGB16I),j===a.INT&&(he=a.RGB32I)),b===a.RGBA_INTEGER&&(j===a.UNSIGNED_BYTE&&(he=a.RGBA8UI),j===a.UNSIGNED_SHORT&&(he=a.RGBA16UI),j===a.UNSIGNED_INT&&(he=a.RGBA32UI),j===a.BYTE&&(he=a.RGBA8I),j===a.SHORT&&(he=a.RGBA16I),j===a.INT&&(he=a.RGBA32I)),b===a.RGB&&(j===a.UNSIGNED_INT_5_9_9_9_REV&&(he=a.RGB9_E5),j===a.UNSIGNED_INT_10F_11F_11F_REV&&(he=a.R11F_G11F_B10F)),b===a.RGBA){const et=Te?Tc:Xt.getTransfer(_e);j===a.FLOAT&&(he=a.RGBA32F),j===a.HALF_FLOAT&&(he=a.RGBA16F),j===a.UNSIGNED_BYTE&&(he=et===tn?a.SRGB8_ALPHA8:a.RGBA8),j===a.UNSIGNED_SHORT_4_4_4_4&&(he=a.RGBA4),j===a.UNSIGNED_SHORT_5_5_5_1&&(he=a.RGB5_A1)}return(he===a.R16F||he===a.R32F||he===a.RG16F||he===a.RG32F||he===a.RGBA16F||he===a.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function O(F,b){let j;return F?b===null||b===ca||b===yl?j=a.DEPTH24_STENCIL8:b===Bi?j=a.DEPTH32F_STENCIL8:b===xl&&(j=a.DEPTH24_STENCIL8,Mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ca||b===yl?j=a.DEPTH_COMPONENT24:b===Bi?j=a.DEPTH_COMPONENT32F:b===xl&&(j=a.DEPTH_COMPONENT16),j}function z(F,b){return M(F)===!0||F.isFramebufferTexture&&F.minFilter!==Pn&&F.minFilter!==ei?Math.log2(Math.max(b.width,b.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?b.mipmaps.length:1}function I(F){const b=F.target;b.removeEventListener("dispose",I),k(b),b.isVideoTexture&&v.delete(b)}function R(F){const b=F.target;b.removeEventListener("dispose",R),U(b)}function k(F){const b=s.get(F);if(b.__webglInit===void 0)return;const j=F.source,_e=_.get(j);if(_e){const Te=_e[b.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&A(F),Object.keys(_e).length===0&&_.delete(j)}s.remove(F)}function A(F){const b=s.get(F);a.deleteTexture(b.__webglTexture);const j=F.source,_e=_.get(j);delete _e[b.__cacheKey],c.memory.textures--}function U(F){const b=s.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),s.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(b.__webglFramebuffer[_e]))for(let Te=0;Te<b.__webglFramebuffer[_e].length;Te++)a.deleteFramebuffer(b.__webglFramebuffer[_e][Te]);else a.deleteFramebuffer(b.__webglFramebuffer[_e]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[_e])}else{if(Array.isArray(b.__webglFramebuffer))for(let _e=0;_e<b.__webglFramebuffer.length;_e++)a.deleteFramebuffer(b.__webglFramebuffer[_e]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let _e=0;_e<b.__webglColorRenderbuffer.length;_e++)b.__webglColorRenderbuffer[_e]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[_e]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=F.textures;for(let _e=0,Te=j.length;_e<Te;_e++){const he=s.get(j[_e]);he.__webglTexture&&(a.deleteTexture(he.__webglTexture),c.memory.textures--),s.remove(j[_e])}s.remove(F)}let B=0;function J(){B=0}function te(){const F=B;return F>=l.maxTextures&&Mt("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+l.maxTextures),B+=1,F}function fe(F){const b=[];return b.push(F.wrapS),b.push(F.wrapT),b.push(F.wrapR||0),b.push(F.magFilter),b.push(F.minFilter),b.push(F.anisotropy),b.push(F.internalFormat),b.push(F.format),b.push(F.type),b.push(F.generateMipmaps),b.push(F.premultiplyAlpha),b.push(F.flipY),b.push(F.unpackAlignment),b.push(F.colorSpace),b.join()}function ne(F,b){const j=s.get(F);if(F.isVideoTexture&&Ft(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&j.__version!==F.version){const _e=F.image;if(_e===null)Mt("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)Mt("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(j,F,b);return}}else F.isExternalTexture&&(j.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,j.__webglTexture,a.TEXTURE0+b)}function P(F,b){const j=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&j.__version!==F.version){ie(j,F,b);return}else F.isExternalTexture&&(j.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,j.__webglTexture,a.TEXTURE0+b)}function H(F,b){const j=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&j.__version!==F.version){ie(j,F,b);return}i.bindTexture(a.TEXTURE_3D,j.__webglTexture,a.TEXTURE0+b)}function Y(F,b){const j=s.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&j.__version!==F.version){me(j,F,b);return}i.bindTexture(a.TEXTURE_CUBE_MAP,j.__webglTexture,a.TEXTURE0+b)}const xe={[Yh]:a.REPEAT,[Ia]:a.CLAMP_TO_EDGE,[jh]:a.MIRRORED_REPEAT},ye={[Pn]:a.NEAREST,[ZT]:a.NEAREST_MIPMAP_NEAREST,[qu]:a.NEAREST_MIPMAP_LINEAR,[ei]:a.LINEAR,[eh]:a.LINEAR_MIPMAP_NEAREST,[es]:a.LINEAR_MIPMAP_LINEAR},N={[$T]:a.NEVER,[a1]:a.ALWAYS,[e1]:a.LESS,[Kp]:a.LEQUAL,[t1]:a.EQUAL,[Qp]:a.GEQUAL,[n1]:a.GREATER,[i1]:a.NOTEQUAL};function ee(F,b){if(b.type===Bi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===ei||b.magFilter===eh||b.magFilter===qu||b.magFilter===es||b.minFilter===ei||b.minFilter===eh||b.minFilter===qu||b.minFilter===es)&&Mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(F,a.TEXTURE_WRAP_S,xe[b.wrapS]),a.texParameteri(F,a.TEXTURE_WRAP_T,xe[b.wrapT]),(F===a.TEXTURE_3D||F===a.TEXTURE_2D_ARRAY)&&a.texParameteri(F,a.TEXTURE_WRAP_R,xe[b.wrapR]),a.texParameteri(F,a.TEXTURE_MAG_FILTER,ye[b.magFilter]),a.texParameteri(F,a.TEXTURE_MIN_FILTER,ye[b.minFilter]),b.compareFunction&&(a.texParameteri(F,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(F,a.TEXTURE_COMPARE_FUNC,N[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Pn||b.minFilter!==qu&&b.minFilter!==es||b.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");a.texParameterf(F,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function ge(F,b){let j=!1;F.__webglInit===void 0&&(F.__webglInit=!0,b.addEventListener("dispose",I));const _e=b.source;let Te=_.get(_e);Te===void 0&&(Te={},_.set(_e,Te));const he=fe(b);if(he!==F.__cacheKey){Te[he]===void 0&&(Te[he]={texture:a.createTexture(),usedTimes:0},c.memory.textures++,j=!0),Te[he].usedTimes++;const et=Te[F.__cacheKey];et!==void 0&&(Te[F.__cacheKey].usedTimes--,et.usedTimes===0&&A(b)),F.__cacheKey=he,F.__webglTexture=Te[he].texture}return j}function Ce(F,b,j){return Math.floor(Math.floor(F/j)/b)}function Fe(F,b,j,_e){const he=F.updateRanges;if(he.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,b.width,b.height,j,_e,b.data);else{he.sort((De,we)=>De.start-we.start);let et=0;for(let De=1;De<he.length;De++){const we=he[et],Ke=he[De],je=we.start+we.count,Be=Ce(Ke.start,b.width,4),Et=Ce(we.start,b.width,4);Ke.start<=je+1&&Be===Et&&Ce(Ke.start+Ke.count-1,b.width,4)===Be?we.count=Math.max(we.count,Ke.start+Ke.count-we.start):(++et,he[et]=Ke)}he.length=et+1;const Ie=a.getParameter(a.UNPACK_ROW_LENGTH),rt=a.getParameter(a.UNPACK_SKIP_PIXELS),ht=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,b.width);for(let De=0,we=he.length;De<we;De++){const Ke=he[De],je=Math.floor(Ke.start/4),Be=Math.ceil(Ke.count/4),Et=je%b.width,q=Math.floor(je/b.width),He=Be,Le=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,Et),a.pixelStorei(a.UNPACK_SKIP_ROWS,q),i.texSubImage2D(a.TEXTURE_2D,0,Et,q,He,Le,j,_e,b.data)}F.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Ie),a.pixelStorei(a.UNPACK_SKIP_PIXELS,rt),a.pixelStorei(a.UNPACK_SKIP_ROWS,ht)}}function ie(F,b,j){let _e=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(_e=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(_e=a.TEXTURE_3D);const Te=ge(F,b),he=b.source;i.bindTexture(_e,F.__webglTexture,a.TEXTURE0+j);const et=s.get(he);if(he.version!==et.__version||Te===!0){i.activeTexture(a.TEXTURE0+j);const Ie=Xt.getPrimaries(Xt.workingColorSpace),rt=b.colorSpace===Er?null:Xt.getPrimaries(b.colorSpace),ht=b.colorSpace===Er||Ie===rt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let De=T(b.image,!1,l.maxTextureSize);De=Wt(b,De);const we=u.convert(b.format,b.colorSpace),Ke=u.convert(b.type);let je=L(b.internalFormat,we,Ke,b.colorSpace,b.isVideoTexture);ee(_e,b);let Be;const Et=b.mipmaps,q=b.isVideoTexture!==!0,He=et.__version===void 0||Te===!0,Le=he.dataReady,qe=z(b,De);if(b.isDepthTexture)je=O(b.format===ts,b.type),He&&(q?i.texStorage2D(a.TEXTURE_2D,1,je,De.width,De.height):i.texImage2D(a.TEXTURE_2D,0,je,De.width,De.height,0,we,Ke,null));else if(b.isDataTexture)if(Et.length>0){q&&He&&i.texStorage2D(a.TEXTURE_2D,qe,je,Et[0].width,Et[0].height);for(let Ae=0,Ee=Et.length;Ae<Ee;Ae++)Be=Et[Ae],q?Le&&i.texSubImage2D(a.TEXTURE_2D,Ae,0,0,Be.width,Be.height,we,Ke,Be.data):i.texImage2D(a.TEXTURE_2D,Ae,je,Be.width,Be.height,0,we,Ke,Be.data);b.generateMipmaps=!1}else q?(He&&i.texStorage2D(a.TEXTURE_2D,qe,je,De.width,De.height),Le&&Fe(b,De,we,Ke)):i.texImage2D(a.TEXTURE_2D,0,je,De.width,De.height,0,we,Ke,De.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){q&&He&&i.texStorage3D(a.TEXTURE_2D_ARRAY,qe,je,Et[0].width,Et[0].height,De.depth);for(let Ae=0,Ee=Et.length;Ae<Ee;Ae++)if(Be=Et[Ae],b.format!==bi)if(we!==null)if(q){if(Le)if(b.layerUpdates.size>0){const Pe=q_(Be.width,Be.height,b.format,b.type);for(const vt of b.layerUpdates){const kt=Be.data.subarray(vt*Pe/Be.data.BYTES_PER_ELEMENT,(vt+1)*Pe/Be.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Ae,0,0,vt,Be.width,Be.height,1,we,kt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Ae,0,0,0,Be.width,Be.height,De.depth,we,Be.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Ae,je,Be.width,Be.height,De.depth,0,Be.data,0,0);else Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Le&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,Ae,0,0,0,Be.width,Be.height,De.depth,we,Ke,Be.data):i.texImage3D(a.TEXTURE_2D_ARRAY,Ae,je,Be.width,Be.height,De.depth,0,we,Ke,Be.data)}else{q&&He&&i.texStorage2D(a.TEXTURE_2D,qe,je,Et[0].width,Et[0].height);for(let Ae=0,Ee=Et.length;Ae<Ee;Ae++)Be=Et[Ae],b.format!==bi?we!==null?q?Le&&i.compressedTexSubImage2D(a.TEXTURE_2D,Ae,0,0,Be.width,Be.height,we,Be.data):i.compressedTexImage2D(a.TEXTURE_2D,Ae,je,Be.width,Be.height,0,Be.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Le&&i.texSubImage2D(a.TEXTURE_2D,Ae,0,0,Be.width,Be.height,we,Ke,Be.data):i.texImage2D(a.TEXTURE_2D,Ae,je,Be.width,Be.height,0,we,Ke,Be.data)}else if(b.isDataArrayTexture)if(q){if(He&&i.texStorage3D(a.TEXTURE_2D_ARRAY,qe,je,De.width,De.height,De.depth),Le)if(b.layerUpdates.size>0){const Ae=q_(De.width,De.height,b.format,b.type);for(const Ee of b.layerUpdates){const Pe=De.data.subarray(Ee*Ae/De.data.BYTES_PER_ELEMENT,(Ee+1)*Ae/De.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ee,De.width,De.height,1,we,Ke,Pe)}b.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,De.width,De.height,De.depth,we,Ke,De.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,je,De.width,De.height,De.depth,0,we,Ke,De.data);else if(b.isData3DTexture)q?(He&&i.texStorage3D(a.TEXTURE_3D,qe,je,De.width,De.height,De.depth),Le&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,De.width,De.height,De.depth,we,Ke,De.data)):i.texImage3D(a.TEXTURE_3D,0,je,De.width,De.height,De.depth,0,we,Ke,De.data);else if(b.isFramebufferTexture){if(He)if(q)i.texStorage2D(a.TEXTURE_2D,qe,je,De.width,De.height);else{let Ae=De.width,Ee=De.height;for(let Pe=0;Pe<qe;Pe++)i.texImage2D(a.TEXTURE_2D,Pe,je,Ae,Ee,0,we,Ke,null),Ae>>=1,Ee>>=1}}else if(Et.length>0){if(q&&He){const Ae=st(Et[0]);i.texStorage2D(a.TEXTURE_2D,qe,je,Ae.width,Ae.height)}for(let Ae=0,Ee=Et.length;Ae<Ee;Ae++)Be=Et[Ae],q?Le&&i.texSubImage2D(a.TEXTURE_2D,Ae,0,0,we,Ke,Be):i.texImage2D(a.TEXTURE_2D,Ae,je,we,Ke,Be);b.generateMipmaps=!1}else if(q){if(He){const Ae=st(De);i.texStorage2D(a.TEXTURE_2D,qe,je,Ae.width,Ae.height)}Le&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,we,Ke,De)}else i.texImage2D(a.TEXTURE_2D,0,je,we,Ke,De);M(b)&&x(_e),et.__version=he.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function me(F,b,j){if(b.image.length!==6)return;const _e=ge(F,b),Te=b.source;i.bindTexture(a.TEXTURE_CUBE_MAP,F.__webglTexture,a.TEXTURE0+j);const he=s.get(Te);if(Te.version!==he.__version||_e===!0){i.activeTexture(a.TEXTURE0+j);const et=Xt.getPrimaries(Xt.workingColorSpace),Ie=b.colorSpace===Er?null:Xt.getPrimaries(b.colorSpace),rt=b.colorSpace===Er||et===Ie?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const ht=b.isCompressedTexture||b.image[0].isCompressedTexture,De=b.image[0]&&b.image[0].isDataTexture,we=[];for(let Ee=0;Ee<6;Ee++)!ht&&!De?we[Ee]=T(b.image[Ee],!0,l.maxCubemapSize):we[Ee]=De?b.image[Ee].image:b.image[Ee],we[Ee]=Wt(b,we[Ee]);const Ke=we[0],je=u.convert(b.format,b.colorSpace),Be=u.convert(b.type),Et=L(b.internalFormat,je,Be,b.colorSpace),q=b.isVideoTexture!==!0,He=he.__version===void 0||_e===!0,Le=Te.dataReady;let qe=z(b,Ke);ee(a.TEXTURE_CUBE_MAP,b);let Ae;if(ht){q&&He&&i.texStorage2D(a.TEXTURE_CUBE_MAP,qe,Et,Ke.width,Ke.height);for(let Ee=0;Ee<6;Ee++){Ae=we[Ee].mipmaps;for(let Pe=0;Pe<Ae.length;Pe++){const vt=Ae[Pe];b.format!==bi?je!==null?q?Le&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe,0,0,vt.width,vt.height,je,vt.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe,Et,vt.width,vt.height,0,vt.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Le&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe,0,0,vt.width,vt.height,je,Be,vt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe,Et,vt.width,vt.height,0,je,Be,vt.data)}}}else{if(Ae=b.mipmaps,q&&He){Ae.length>0&&qe++;const Ee=st(we[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,qe,Et,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(De){q?Le&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,we[Ee].width,we[Ee].height,je,Be,we[Ee].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Et,we[Ee].width,we[Ee].height,0,je,Be,we[Ee].data);for(let Pe=0;Pe<Ae.length;Pe++){const kt=Ae[Pe].image[Ee].image;q?Le&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe+1,0,0,kt.width,kt.height,je,Be,kt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe+1,Et,kt.width,kt.height,0,je,Be,kt.data)}}else{q?Le&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,je,Be,we[Ee]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Et,je,Be,we[Ee]);for(let Pe=0;Pe<Ae.length;Pe++){const vt=Ae[Pe];q?Le&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe+1,0,0,je,Be,vt.image[Ee]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe+1,Et,je,Be,vt.image[Ee])}}}M(b)&&x(a.TEXTURE_CUBE_MAP),he.__version=Te.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function Ne(F,b,j,_e,Te,he){const et=u.convert(j.format,j.colorSpace),Ie=u.convert(j.type),rt=L(j.internalFormat,et,Ie,j.colorSpace),ht=s.get(b),De=s.get(j);if(De.__renderTarget=b,!ht.__hasExternalTextures){const we=Math.max(1,b.width>>he),Ke=Math.max(1,b.height>>he);Te===a.TEXTURE_3D||Te===a.TEXTURE_2D_ARRAY?i.texImage3D(Te,he,rt,we,Ke,b.depth,0,et,Ie,null):i.texImage2D(Te,he,rt,we,Ke,0,et,Ie,null)}i.bindFramebuffer(a.FRAMEBUFFER,F),un(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,_e,Te,De.__webglTexture,0,X(b)):(Te===a.TEXTURE_2D||Te>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,_e,Te,De.__webglTexture,he),i.bindFramebuffer(a.FRAMEBUFFER,null)}function We(F,b,j){if(a.bindRenderbuffer(a.RENDERBUFFER,F),b.depthBuffer){const _e=b.depthTexture,Te=_e&&_e.isDepthTexture?_e.type:null,he=O(b.stencilBuffer,Te),et=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;un(b)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,X(b),he,b.width,b.height):j?a.renderbufferStorageMultisample(a.RENDERBUFFER,X(b),he,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,he,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,et,a.RENDERBUFFER,F)}else{const _e=b.textures;for(let Te=0;Te<_e.length;Te++){const he=_e[Te],et=u.convert(he.format,he.colorSpace),Ie=u.convert(he.type),rt=L(he.internalFormat,et,Ie,he.colorSpace);un(b)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,X(b),rt,b.width,b.height):j?a.renderbufferStorageMultisample(a.RENDERBUFFER,X(b),rt,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,rt,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ve(F,b,j){const _e=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,F),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Te=s.get(b.depthTexture);if(Te.__renderTarget=b,(!Te.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),_e){if(Te.__webglInit===void 0&&(Te.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),Te.__webglTexture===void 0){Te.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,Te.__webglTexture),ee(a.TEXTURE_CUBE_MAP,b.depthTexture);const ht=u.convert(b.depthTexture.format),De=u.convert(b.depthTexture.type);let we;b.depthTexture.format===ka?we=a.DEPTH_COMPONENT24:b.depthTexture.format===ts&&(we=a.DEPTH24_STENCIL8);for(let Ke=0;Ke<6;Ke++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,0,we,b.width,b.height,0,ht,De,null)}}else ne(b.depthTexture,0);const he=Te.__webglTexture,et=X(b),Ie=_e?a.TEXTURE_CUBE_MAP_POSITIVE_X+j:a.TEXTURE_2D,rt=b.depthTexture.format===ts?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(b.depthTexture.format===ka)un(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,rt,Ie,he,0,et):a.framebufferTexture2D(a.FRAMEBUFFER,rt,Ie,he,0);else if(b.depthTexture.format===ts)un(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,rt,Ie,he,0,et):a.framebufferTexture2D(a.FRAMEBUFFER,rt,Ie,he,0);else throw new Error("Unknown depthTexture format")}function yt(F){const b=s.get(F),j=F.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==F.depthTexture){const _e=F.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),_e){const Te=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,_e.removeEventListener("dispose",Te)};_e.addEventListener("dispose",Te),b.__depthDisposeCallback=Te}b.__boundDepthTexture=_e}if(F.depthTexture&&!b.__autoAllocateDepthBuffer)if(j)for(let _e=0;_e<6;_e++)Ve(b.__webglFramebuffer[_e],F,_e);else{const _e=F.texture.mipmaps;_e&&_e.length>0?Ve(b.__webglFramebuffer[0],F,0):Ve(b.__webglFramebuffer,F,0)}else if(j){b.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[_e]),b.__webglDepthbuffer[_e]===void 0)b.__webglDepthbuffer[_e]=a.createRenderbuffer(),We(b.__webglDepthbuffer[_e],F,!1);else{const Te=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,he=b.__webglDepthbuffer[_e];a.bindRenderbuffer(a.RENDERBUFFER,he),a.framebufferRenderbuffer(a.FRAMEBUFFER,Te,a.RENDERBUFFER,he)}}else{const _e=F.texture.mipmaps;if(_e&&_e.length>0?i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),We(b.__webglDepthbuffer,F,!1);else{const Te=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,he=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,he),a.framebufferRenderbuffer(a.FRAMEBUFFER,Te,a.RENDERBUFFER,he)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function _t(F,b,j){const _e=s.get(F);b!==void 0&&Ne(_e.__webglFramebuffer,F,F.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),j!==void 0&&yt(F)}function gt(F){const b=F.texture,j=s.get(F),_e=s.get(b);F.addEventListener("dispose",R);const Te=F.textures,he=F.isWebGLCubeRenderTarget===!0,et=Te.length>1;if(et||(_e.__webglTexture===void 0&&(_e.__webglTexture=a.createTexture()),_e.__version=b.version,c.memory.textures++),he){j.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[Ie]=[];for(let rt=0;rt<b.mipmaps.length;rt++)j.__webglFramebuffer[Ie][rt]=a.createFramebuffer()}else j.__webglFramebuffer[Ie]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ie=0;Ie<b.mipmaps.length;Ie++)j.__webglFramebuffer[Ie]=a.createFramebuffer()}else j.__webglFramebuffer=a.createFramebuffer();if(et)for(let Ie=0,rt=Te.length;Ie<rt;Ie++){const ht=s.get(Te[Ie]);ht.__webglTexture===void 0&&(ht.__webglTexture=a.createTexture(),c.memory.textures++)}if(F.samples>0&&un(F)===!1){j.__webglMultisampledFramebuffer=a.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Te.length;Ie++){const rt=Te[Ie];j.__webglColorRenderbuffer[Ie]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,j.__webglColorRenderbuffer[Ie]);const ht=u.convert(rt.format,rt.colorSpace),De=u.convert(rt.type),we=L(rt.internalFormat,ht,De,rt.colorSpace,F.isXRRenderTarget===!0),Ke=X(F);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ke,we,F.width,F.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ie,a.RENDERBUFFER,j.__webglColorRenderbuffer[Ie])}a.bindRenderbuffer(a.RENDERBUFFER,null),F.depthBuffer&&(j.__webglDepthRenderbuffer=a.createRenderbuffer(),We(j.__webglDepthRenderbuffer,F,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(he){i.bindTexture(a.TEXTURE_CUBE_MAP,_e.__webglTexture),ee(a.TEXTURE_CUBE_MAP,b);for(let Ie=0;Ie<6;Ie++)if(b.mipmaps&&b.mipmaps.length>0)for(let rt=0;rt<b.mipmaps.length;rt++)Ne(j.__webglFramebuffer[Ie][rt],F,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,rt);else Ne(j.__webglFramebuffer[Ie],F,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);M(b)&&x(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(et){for(let Ie=0,rt=Te.length;Ie<rt;Ie++){const ht=Te[Ie],De=s.get(ht);let we=a.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(we=F.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(we,De.__webglTexture),ee(we,ht),Ne(j.__webglFramebuffer,F,ht,a.COLOR_ATTACHMENT0+Ie,we,0),M(ht)&&x(we)}i.unbindTexture()}else{let Ie=a.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ie=F.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Ie,_e.__webglTexture),ee(Ie,b),b.mipmaps&&b.mipmaps.length>0)for(let rt=0;rt<b.mipmaps.length;rt++)Ne(j.__webglFramebuffer[rt],F,b,a.COLOR_ATTACHMENT0,Ie,rt);else Ne(j.__webglFramebuffer,F,b,a.COLOR_ATTACHMENT0,Ie,0);M(b)&&x(Ie),i.unbindTexture()}F.depthBuffer&&yt(F)}function bt(F){const b=F.textures;for(let j=0,_e=b.length;j<_e;j++){const Te=b[j];if(M(Te)){const he=D(F),et=s.get(Te).__webglTexture;i.bindTexture(he,et),x(he),i.unbindTexture()}}}const Ht=[],pt=[];function mn(F){if(F.samples>0){if(un(F)===!1){const b=F.textures,j=F.width,_e=F.height;let Te=a.COLOR_BUFFER_BIT;const he=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,et=s.get(F),Ie=b.length>1;if(Ie)for(let ht=0;ht<b.length;ht++)i.bindFramebuffer(a.FRAMEBUFFER,et.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ht,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,et.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ht,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer);const rt=F.texture.mipmaps;rt&&rt.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,et.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let ht=0;ht<b.length;ht++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(Te|=a.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(Te|=a.STENCIL_BUFFER_BIT)),Ie){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,et.__webglColorRenderbuffer[ht]);const De=s.get(b[ht]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,De,0)}a.blitFramebuffer(0,0,j,_e,0,0,j,_e,Te,a.NEAREST),m===!0&&(Ht.length=0,pt.length=0,Ht.push(a.COLOR_ATTACHMENT0+ht),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Ht.push(he),pt.push(he),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,pt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Ht))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ie)for(let ht=0;ht<b.length;ht++){i.bindFramebuffer(a.FRAMEBUFFER,et.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ht,a.RENDERBUFFER,et.__webglColorRenderbuffer[ht]);const De=s.get(b[ht]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,et.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ht,a.TEXTURE_2D,De,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&m){const b=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function X(F){return Math.min(l.maxSamples,F.samples)}function un(F){const b=s.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ft(F){const b=c.render.frame;v.get(F)!==b&&(v.set(F,b),F.update())}function Wt(F,b){const j=F.colorSpace,_e=F.format,Te=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||j!==so&&j!==Er&&(Xt.getTransfer(j)===tn?(_e!==bi||Te!==Ii)&&Mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",j)),b}function st(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(p.width=F.naturalWidth||F.width,p.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(p.width=F.displayWidth,p.height=F.displayHeight):(p.width=F.width,p.height=F.height),p}this.allocateTextureUnit=te,this.resetTextureUnits=J,this.setTexture2D=ne,this.setTexture2DArray=P,this.setTexture3D=H,this.setTextureCube=Y,this.rebindTextures=_t,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=un,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Rw(a,e){function i(s,l=Er){let u;const c=Xt.getTransfer(l);if(s===Ii)return a.UNSIGNED_BYTE;if(s===Wp)return a.UNSIGNED_SHORT_4_4_4_4;if(s===qp)return a.UNSIGNED_SHORT_5_5_5_1;if(s===ry)return a.UNSIGNED_INT_5_9_9_9_REV;if(s===sy)return a.UNSIGNED_INT_10F_11F_11F_REV;if(s===iy)return a.BYTE;if(s===ay)return a.SHORT;if(s===xl)return a.UNSIGNED_SHORT;if(s===Xp)return a.INT;if(s===ca)return a.UNSIGNED_INT;if(s===Bi)return a.FLOAT;if(s===Va)return a.HALF_FLOAT;if(s===oy)return a.ALPHA;if(s===ly)return a.RGB;if(s===bi)return a.RGBA;if(s===ka)return a.DEPTH_COMPONENT;if(s===ts)return a.DEPTH_STENCIL;if(s===uy)return a.RED;if(s===Yp)return a.RED_INTEGER;if(s===ro)return a.RG;if(s===jp)return a.RG_INTEGER;if(s===Zp)return a.RGBA_INTEGER;if(s===xc||s===yc||s===Sc||s===Mc)if(c===tn)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===xc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===xc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Sc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Mc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zh||s===Kh||s===Qh||s===Jh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Zh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$h||s===ep||s===tp||s===np||s===ip||s===ap||s===rp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===$h||s===ep)return c===tn?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===tp)return c===tn?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===np)return u.COMPRESSED_R11_EAC;if(s===ip)return u.COMPRESSED_SIGNED_R11_EAC;if(s===ap)return u.COMPRESSED_RG11_EAC;if(s===rp)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===sp||s===op||s===lp||s===up||s===cp||s===fp||s===dp||s===hp||s===pp||s===mp||s===gp||s===vp||s===_p||s===xp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===sp)return c===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===op)return c===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===lp)return c===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===up)return c===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===cp)return c===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fp)return c===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===dp)return c===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hp)return c===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pp)return c===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===mp)return c===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gp)return c===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===vp)return c===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_p)return c===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xp)return c===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yp||s===Sp||s===Mp)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===yp)return c===tn?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Sp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Mp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ep||s===bp||s===Tp||s===Ap)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Ep)return u.COMPRESSED_RED_RGTC1_EXT;if(s===bp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Tp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ap)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===yl?a.UNSIGNED_INT_24_8:a[s]!==void 0?a[s]:null}return{convert:i}}const Cw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ww=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new by(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Gi({vertexShader:Cw,fragmentShader:ww,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fa(new Nl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Uw extends lo{constructor(e,i){super();const s=this;let l=null,u=1,c=null,d="local-floor",m=1,p=null,v=null,g=null,_=null,y=null,E=null;const T=typeof XRWebGLBinding<"u",M=new Dw,x={},D=i.getContextAttributes();let L=null,O=null;const z=[],I=[],R=new ln;let k=null;const A=new zi;A.viewport=new En;const U=new zi;U.viewport=new En;const B=[A,U],J=new H1;let te=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let me=z[ie];return me===void 0&&(me=new Eh,z[ie]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ie){let me=z[ie];return me===void 0&&(me=new Eh,z[ie]=me),me.getGripSpace()},this.getHand=function(ie){let me=z[ie];return me===void 0&&(me=new Eh,z[ie]=me),me.getHandSpace()};function ne(ie){const me=I.indexOf(ie.inputSource);if(me===-1)return;const Ne=z[me];Ne!==void 0&&(Ne.update(ie.inputSource,ie.frame,p||c),Ne.dispatchEvent({type:ie.type,data:ie.inputSource}))}function P(){l.removeEventListener("select",ne),l.removeEventListener("selectstart",ne),l.removeEventListener("selectend",ne),l.removeEventListener("squeeze",ne),l.removeEventListener("squeezestart",ne),l.removeEventListener("squeezeend",ne),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",H);for(let ie=0;ie<z.length;ie++){const me=I[ie];me!==null&&(I[ie]=null,z[ie].disconnect(me))}te=null,fe=null,M.reset();for(const ie in x)delete x[ie];e.setRenderTarget(L),y=null,_=null,g=null,l=null,O=null,Fe.stop(),s.isPresenting=!1,e.setPixelRatio(k),e.setSize(R.width,R.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){u=ie,s.isPresenting===!0&&Mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){d=ie,s.isPresenting===!0&&Mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(ie){p=ie},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ie){if(l=ie,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",ne),l.addEventListener("selectstart",ne),l.addEventListener("selectend",ne),l.addEventListener("squeeze",ne),l.addEventListener("squeezestart",ne),l.addEventListener("squeezeend",ne),l.addEventListener("end",P),l.addEventListener("inputsourceschange",H),D.xrCompatible!==!0&&await i.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(R),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ne=null,We=null,Ve=null;D.depth&&(Ve=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ne=D.stencil?ts:ka,We=D.stencil?yl:ca);const yt={colorFormat:i.RGBA8,depthFormat:Ve,scaleFactor:u};g=this.getBinding(),_=g.createProjectionLayer(yt),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),O=new Qi(_.textureWidth,_.textureHeight,{format:bi,type:Ii,depthTexture:new Ml(_.textureWidth,_.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,Ne),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Ne={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,Ne),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new Qi(y.framebufferWidth,y.framebufferHeight,{format:bi,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,c=await l.requestReferenceSpace(d),Fe.setContext(l),Fe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(ie){for(let me=0;me<ie.removed.length;me++){const Ne=ie.removed[me],We=I.indexOf(Ne);We>=0&&(I[We]=null,z[We].disconnect(Ne))}for(let me=0;me<ie.added.length;me++){const Ne=ie.added[me];let We=I.indexOf(Ne);if(We===-1){for(let yt=0;yt<z.length;yt++)if(yt>=I.length){I.push(Ne),We=yt;break}else if(I[yt]===null){I[yt]=Ne,We=yt;break}if(We===-1)break}const Ve=z[We];Ve&&Ve.connect(Ne)}}const Y=new de,xe=new de;function ye(ie,me,Ne){Y.setFromMatrixPosition(me.matrixWorld),xe.setFromMatrixPosition(Ne.matrixWorld);const We=Y.distanceTo(xe),Ve=me.projectionMatrix.elements,yt=Ne.projectionMatrix.elements,_t=Ve[14]/(Ve[10]-1),gt=Ve[14]/(Ve[10]+1),bt=(Ve[9]+1)/Ve[5],Ht=(Ve[9]-1)/Ve[5],pt=(Ve[8]-1)/Ve[0],mn=(yt[8]+1)/yt[0],X=_t*pt,un=_t*mn,Ft=We/(-pt+mn),Wt=Ft*-pt;if(me.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Wt),ie.translateZ(Ft),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Ve[10]===-1)ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const st=_t+Ft,F=gt+Ft,b=X-Wt,j=un+(We-Wt),_e=bt*gt/F*st,Te=Ht*gt/F*st;ie.projectionMatrix.makePerspective(b,j,_e,Te,st,F),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function N(ie,me){me===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(me.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(l===null)return;let me=ie.near,Ne=ie.far;M.texture!==null&&(M.depthNear>0&&(me=M.depthNear),M.depthFar>0&&(Ne=M.depthFar)),J.near=U.near=A.near=me,J.far=U.far=A.far=Ne,(te!==J.near||fe!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),te=J.near,fe=J.far),J.layers.mask=ie.layers.mask|6,A.layers.mask=J.layers.mask&3,U.layers.mask=J.layers.mask&5;const We=ie.parent,Ve=J.cameras;N(J,We);for(let yt=0;yt<Ve.length;yt++)N(Ve[yt],We);Ve.length===2?ye(J,A,U):J.projectionMatrix.copy(A.projectionMatrix),ee(ie,J,We)};function ee(ie,me,Ne){Ne===null?ie.matrix.copy(me.matrixWorld):(ie.matrix.copy(Ne.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(me.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Rp*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(_===null&&y===null))return m},this.setFoveation=function(ie){m=ie,_!==null&&(_.fixedFoveation=ie),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ie)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(J)},this.getCameraTexture=function(ie){return x[ie]};let ge=null;function Ce(ie,me){if(v=me.getViewerPose(p||c),E=me,v!==null){const Ne=v.views;y!==null&&(e.setRenderTargetFramebuffer(O,y.framebuffer),e.setRenderTarget(O));let We=!1;Ne.length!==J.cameras.length&&(J.cameras.length=0,We=!0);for(let gt=0;gt<Ne.length;gt++){const bt=Ne[gt];let Ht=null;if(y!==null)Ht=y.getViewport(bt);else{const mn=g.getViewSubImage(_,bt);Ht=mn.viewport,gt===0&&(e.setRenderTargetTextures(O,mn.colorTexture,mn.depthStencilTexture),e.setRenderTarget(O))}let pt=B[gt];pt===void 0&&(pt=new zi,pt.layers.enable(gt),pt.viewport=new En,B[gt]=pt),pt.matrix.fromArray(bt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(bt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),gt===0&&(J.matrix.copy(pt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),We===!0&&J.cameras.push(pt)}const Ve=l.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=s.getBinding();const gt=g.getDepthInformation(Ne[0]);gt&&gt.isValid&&gt.texture&&M.init(gt,l.renderState)}if(Ve&&Ve.includes("camera-access")&&T){e.state.unbindTexture(),g=s.getBinding();for(let gt=0;gt<Ne.length;gt++){const bt=Ne[gt].camera;if(bt){let Ht=x[bt];Ht||(Ht=new by,x[bt]=Ht);const pt=g.getCameraImage(bt);Ht.sourceTexture=pt}}}}for(let Ne=0;Ne<z.length;Ne++){const We=I[Ne],Ve=z[Ne];We!==null&&Ve!==void 0&&Ve.update(We,me,p||c)}ge&&ge(ie,me),me.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:me}),E=null}const Fe=new Ty;Fe.setAnimationLoop(Ce),this.setAnimationLoop=function(ie){ge=ie},this.dispose=function(){}}}const Zr=new Xa,Lw=new bn;function Nw(a,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,_y(a)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,D,L,O){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(M,x):x.isMeshToonMaterial?(u(M,x),g(M,x)):x.isMeshPhongMaterial?(u(M,x),v(M,x)):x.isMeshStandardMaterial?(u(M,x),_(M,x),x.isMeshPhysicalMaterial&&y(M,x,O)):x.isMeshMatcapMaterial?(u(M,x),E(M,x)):x.isMeshDepthMaterial?u(M,x):x.isMeshDistanceMaterial?(u(M,x),T(M,x)):x.isMeshNormalMaterial?u(M,x):x.isLineBasicMaterial?(c(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?m(M,x,D,L):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===fi&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===fi&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const D=e.get(x),L=D.envMap,O=D.envMapRotation;L&&(M.envMap.value=L,Zr.copy(O),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),M.envMapRotation.value.setFromMatrix4(Lw.makeRotationFromEuler(Zr)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function c(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,D,L){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*D,M.scale.value=L*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function _(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,D){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===fi&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function T(M,x){const D=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function Ow(a,e,i,s){let l={},u={},c=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,L){const O=L.program;s.uniformBlockBinding(D,O)}function p(D,L){let O=l[D.id];O===void 0&&(E(D),O=v(D),l[D.id]=O,D.addEventListener("dispose",M));const z=L.program;s.updateUBOMapping(D,z);const I=e.render.frame;u[D.id]!==I&&(_(D),u[D.id]=I)}function v(D){const L=g();D.__bindingPointIndex=L;const O=a.createBuffer(),z=D.__size,I=D.usage;return a.bindBuffer(a.UNIFORM_BUFFER,O),a.bufferData(a.UNIFORM_BUFFER,z,I),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,L,O),O}function g(){for(let D=0;D<d;D++)if(c.indexOf(D)===-1)return c.push(D),D;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const L=l[D.id],O=D.uniforms,z=D.__cache;a.bindBuffer(a.UNIFORM_BUFFER,L);for(let I=0,R=O.length;I<R;I++){const k=Array.isArray(O[I])?O[I]:[O[I]];for(let A=0,U=k.length;A<U;A++){const B=k[A];if(y(B,I,A,z)===!0){const J=B.__offset,te=Array.isArray(B.value)?B.value:[B.value];let fe=0;for(let ne=0;ne<te.length;ne++){const P=te[ne],H=T(P);typeof P=="number"||typeof P=="boolean"?(B.__data[0]=P,a.bufferSubData(a.UNIFORM_BUFFER,J+fe,B.__data)):P.isMatrix3?(B.__data[0]=P.elements[0],B.__data[1]=P.elements[1],B.__data[2]=P.elements[2],B.__data[3]=0,B.__data[4]=P.elements[3],B.__data[5]=P.elements[4],B.__data[6]=P.elements[5],B.__data[7]=0,B.__data[8]=P.elements[6],B.__data[9]=P.elements[7],B.__data[10]=P.elements[8],B.__data[11]=0):(P.toArray(B.__data,fe),fe+=H.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,J,B.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(D,L,O,z){const I=D.value,R=L+"_"+O;if(z[R]===void 0)return typeof I=="number"||typeof I=="boolean"?z[R]=I:z[R]=I.clone(),!0;{const k=z[R];if(typeof I=="number"||typeof I=="boolean"){if(k!==I)return z[R]=I,!0}else if(k.equals(I)===!1)return k.copy(I),!0}return!1}function E(D){const L=D.uniforms;let O=0;const z=16;for(let R=0,k=L.length;R<k;R++){const A=Array.isArray(L[R])?L[R]:[L[R]];for(let U=0,B=A.length;U<B;U++){const J=A[U],te=Array.isArray(J.value)?J.value:[J.value];for(let fe=0,ne=te.length;fe<ne;fe++){const P=te[fe],H=T(P),Y=O%z,xe=Y%H.boundary,ye=Y+xe;O+=xe,ye!==0&&z-ye<H.storage&&(O+=z-ye),J.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=O,O+=H.storage}}}const I=O%z;return I>0&&(O+=z-I),D.__size=O,D.__cache={},this}function T(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?Mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Mt("WebGLRenderer: Unsupported uniform value type.",D),L}function M(D){const L=D.target;L.removeEventListener("dispose",M);const O=c.indexOf(L.__bindingPointIndex);c.splice(O,1),a.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function x(){for(const D in l)a.deleteBuffer(l[D]);c=[],l={},u={}}return{bind:m,update:p,dispose:x}}const Pw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let aa=null;function Fw(){return aa===null&&(aa=new My(Pw,16,16,ro,Va),aa.name="DFG_LUT",aa.minFilter=ei,aa.magFilter=ei,aa.wrapS=Ia,aa.wrapT=Ia,aa.generateMipmaps=!1,aa.needsUpdate=!0),aa}class zw{constructor(e={}){const{canvas:i=r1(),context:s=null,depth:l=!0,stencil:u=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1,outputBufferType:y=Ii}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=c;const T=y,M=new Set([Zp,jp,Yp]),x=new Set([Ii,ca,xl,yl,Wp,qp]),D=new Uint32Array(4),L=new Int32Array(4);let O=null,z=null;const I=[],R=[];let k=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=la,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let U=!1;this._outputColorSpace=Fi;let B=0,J=0,te=null,fe=-1,ne=null;const P=new En,H=new En;let Y=null;const xe=new nn(0);let ye=0,N=i.width,ee=i.height,ge=1,Ce=null,Fe=null;const ie=new En(0,0,N,ee),me=new En(0,0,N,ee);let Ne=!1;const We=new Ey;let Ve=!1,yt=!1;const _t=new bn,gt=new de,bt=new En,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function mn(){return te===null?ge:1}let X=s;function un(C,Z){return i.getContext(C,Z)}try{const C={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${kp}`),i.addEventListener("webglcontextlost",vt,!1),i.addEventListener("webglcontextrestored",kt,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),X===null){const Z="webgl2";if(X=un(Z,C),X===null)throw un(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw jt("WebGLRenderer: "+C.message),C}let Ft,Wt,st,F,b,j,_e,Te,he,et,Ie,rt,ht,De,we,Ke,je,Be,Et,q,He,Le,qe,Ae;function Ee(){Ft=new FC(X),Ft.init(),Le=new Rw(X,Ft),Wt=new RC(X,Ft,e,Le),st=new Tw(X,Ft),Wt.reversedDepthBuffer&&_&&st.buffers.depth.setReversed(!0),F=new BC(X),b=new cw,j=new Aw(X,Ft,st,b,Wt,Le,F),_e=new wC(A),Te=new PC(A),he=new k1(X),qe=new TC(X,he),et=new zC(X,he,F,qe),Ie=new GC(X,et,he,F),Et=new HC(X,Wt,j),Ke=new CC(b),rt=new uw(A,_e,Te,Ft,Wt,qe,Ke),ht=new Nw(A,b),De=new dw,we=new _w(Ft),Be=new bC(A,_e,Te,st,Ie,E,m),je=new Ew(A,Ie,Wt),Ae=new Ow(X,F,Wt,st),q=new AC(X,Ft,F),He=new IC(X,Ft,F),F.programs=rt.programs,A.capabilities=Wt,A.extensions=Ft,A.properties=b,A.renderLists=De,A.shadowMap=je,A.state=st,A.info=F}Ee(),T!==Ii&&(k=new kC(T,i.width,i.height,l,u));const Pe=new Uw(A,X);this.xr=Pe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=Ft.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ft.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(C){C!==void 0&&(ge=C,this.setSize(N,ee,!1))},this.getSize=function(C){return C.set(N,ee)},this.setSize=function(C,Z,le=!0){if(Pe.isPresenting){Mt("WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,ee=Z,i.width=Math.floor(C*ge),i.height=Math.floor(Z*ge),le===!0&&(i.style.width=C+"px",i.style.height=Z+"px"),k!==null&&k.setSize(i.width,i.height),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(N*ge,ee*ge).floor()},this.setDrawingBufferSize=function(C,Z,le){N=C,ee=Z,ge=le,i.width=Math.floor(C*le),i.height=Math.floor(Z*le),this.setViewport(0,0,C,Z)},this.setEffects=function(C){if(T===Ii){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Z=0;Z<C.length;Z++)if(C[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(ie)},this.setViewport=function(C,Z,le,se){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,Z,le,se),st.viewport(P.copy(ie).multiplyScalar(ge).round())},this.getScissor=function(C){return C.copy(me)},this.setScissor=function(C,Z,le,se){C.isVector4?me.set(C.x,C.y,C.z,C.w):me.set(C,Z,le,se),st.scissor(H.copy(me).multiplyScalar(ge).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(C){st.setScissorTest(Ne=C)},this.setOpaqueSort=function(C){Ce=C},this.setTransparentSort=function(C){Fe=C},this.getClearColor=function(C){return C.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,le=!0){let se=0;if(C){let $=!1;if(te!==null){const ze=te.texture.format;$=M.has(ze)}if($){const ze=te.texture.type,Je=x.has(ze),Ge=Be.getClearColor(),Ue=Be.getClearAlpha(),Xe=Ge.r,ut=Ge.g,tt=Ge.b;Je?(D[0]=Xe,D[1]=ut,D[2]=tt,D[3]=Ue,X.clearBufferuiv(X.COLOR,0,D)):(L[0]=Xe,L[1]=ut,L[2]=tt,L[3]=Ue,X.clearBufferiv(X.COLOR,0,L))}else se|=X.COLOR_BUFFER_BIT}Z&&(se|=X.DEPTH_BUFFER_BIT),le&&(se|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",vt,!1),i.removeEventListener("webglcontextrestored",kt,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),Be.dispose(),De.dispose(),we.dispose(),b.dispose(),_e.dispose(),Te.dispose(),Ie.dispose(),qe.dispose(),Ae.dispose(),rt.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",Re),Pe.removeEventListener("sessionend",Oe),nt.stop()};function vt(C){C.preventDefault(),A_("WebGLRenderer: Context Lost."),U=!0}function kt(){A_("WebGLRenderer: Context Restored."),U=!1;const C=F.autoReset,Z=je.enabled,le=je.autoUpdate,se=je.needsUpdate,$=je.type;Ee(),F.autoReset=C,je.enabled=Z,je.autoUpdate=le,je.needsUpdate=se,je.type=$}function Dt(C){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ln(C){const Z=C.target;Z.removeEventListener("dispose",Ln),hi(Z)}function hi(C){rs(C),b.remove(C)}function rs(C){const Z=b.get(C).programs;Z!==void 0&&(Z.forEach(function(le){rt.releaseProgram(le)}),C.isShaderMaterial&&rt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,le,se,$,ze){Z===null&&(Z=Ht);const Je=$.isMesh&&$.matrixWorld.determinant()<0,Ge=dn(C,Z,le,se,$);st.setMaterial(se,Je);let Ue=le.index,Xe=1;if(se.wireframe===!0){if(Ue=et.getWireframeAttribute(le),Ue===void 0)return;Xe=2}const ut=le.drawRange,tt=le.attributes.position;let $e=ut.start*Xe,zt=(ut.start+ut.count)*Xe;ze!==null&&($e=Math.max($e,ze.start*Xe),zt=Math.min(zt,(ze.start+ze.count)*Xe)),Ue!==null?($e=Math.max($e,0),zt=Math.min(zt,Ue.count)):tt!=null&&($e=Math.max($e,0),zt=Math.min(zt,tt.count));const cn=zt-$e;if(cn<0||cn===1/0)return;qe.setup($,se,Ge,le,Ue);let an,Qt=q;if(Ue!==null&&(an=he.get(Ue),Qt=He,Qt.setIndex(an)),$.isMesh)se.wireframe===!0?(st.setLineWidth(se.wireframeLinewidth*mn()),Qt.setMode(X.LINES)):Qt.setMode(X.TRIANGLES);else if($.isLine){let ct=se.linewidth;ct===void 0&&(ct=1),st.setLineWidth(ct*mn()),$.isLineSegments?Qt.setMode(X.LINES):$.isLineLoop?Qt.setMode(X.LINE_LOOP):Qt.setMode(X.LINE_STRIP)}else $.isPoints?Qt.setMode(X.POINTS):$.isSprite&&Qt.setMode(X.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Sl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))Qt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const ct=$._multiDrawStarts,Zt=$._multiDrawCounts,xt=$._multiDrawCount,Hn=Ue?he.get(Ue).bytesPerElement:1,ha=b.get(se).currentProgram.getUniforms();for(let Gn=0;Gn<xt;Gn++)ha.setValue(X,"_gl_DrawID",Gn),Qt.render(ct[Gn]/Hn,Zt[Gn])}else if($.isInstancedMesh)Qt.renderInstances($e,cn,$.count);else if(le.isInstancedBufferGeometry){const ct=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Zt=Math.min(le.instanceCount,ct);Qt.renderInstances($e,cn,Zt)}else Qt.render($e,cn)};function G(C,Z,le){C.transparent===!0&&C.side===za&&C.forceSinglePass===!1?(C.side=fi,C.needsUpdate=!0,ot(C,Z,le),C.side=Ar,C.needsUpdate=!0,ot(C,Z,le),C.side=za):ot(C,Z,le)}this.compile=function(C,Z,le=null){le===null&&(le=C),z=we.get(le),z.init(Z),R.push(z),le.traverseVisible(function($){$.isLight&&$.layers.test(Z.layers)&&(z.pushLight($),$.castShadow&&z.pushShadow($))}),C!==le&&C.traverseVisible(function($){$.isLight&&$.layers.test(Z.layers)&&(z.pushLight($),$.castShadow&&z.pushShadow($))}),z.setupLights();const se=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const ze=$.material;if(ze)if(Array.isArray(ze))for(let Je=0;Je<ze.length;Je++){const Ge=ze[Je];G(Ge,le,$),se.add(Ge)}else G(ze,le,$),se.add(ze)}),z=R.pop(),se},this.compileAsync=function(C,Z,le=null){const se=this.compile(C,Z,le);return new Promise($=>{function ze(){if(se.forEach(function(Je){b.get(Je).currentProgram.isReady()&&se.delete(Je)}),se.size===0){$(C);return}setTimeout(ze,10)}Ft.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let K=null;function ce(C){K&&K(C)}function Re(){nt.stop()}function Oe(){nt.start()}const nt=new Ty;nt.setAnimationLoop(ce),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(C){K=C,Pe.setAnimationLoop(C),C===null?nt.stop():nt.start()},Pe.addEventListener("sessionstart",Re),Pe.addEventListener("sessionend",Oe),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const le=Pe.enabled===!0&&Pe.isPresenting===!0,se=k!==null&&(te===null||le)&&k.begin(A,te);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(Z),Z=Pe.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,Z,te),z=we.get(C,R.length),z.init(Z),R.push(z),_t.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),We.setFromProjectionMatrix(_t,sa,Z.reversedDepth),yt=this.localClippingEnabled,Ve=Ke.init(this.clippingPlanes,yt),O=De.get(C,I.length),O.init(),I.push(O),Pe.enabled===!0&&Pe.isPresenting===!0){const Je=A.xr.getDepthSensingMesh();Je!==null&&Ye(Je,Z,-1/0,A.sortObjects)}Ye(C,Z,0,A.sortObjects),O.finish(),A.sortObjects===!0&&O.sort(Ce,Fe),pt=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,pt&&Be.addToRenderList(O,C),this.info.render.frame++,Ve===!0&&Ke.beginShadows();const $=z.state.shadowsArray;if(je.render($,C,Z),Ve===!0&&Ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&k.hasRenderPass())===!1){const Je=O.opaque,Ge=O.transmissive;if(z.setupLights(),Z.isArrayCamera){const Ue=Z.cameras;if(Ge.length>0)for(let Xe=0,ut=Ue.length;Xe<ut;Xe++){const tt=Ue[Xe];Qe(Je,Ge,C,tt)}pt&&Be.render(C);for(let Xe=0,ut=Ue.length;Xe<ut;Xe++){const tt=Ue[Xe];ke(O,C,tt,tt.viewport)}}else Ge.length>0&&Qe(Je,Ge,C,Z),pt&&Be.render(C),ke(O,C,Z)}te!==null&&J===0&&(j.updateMultisampleRenderTarget(te),j.updateRenderTargetMipmap(te)),se&&k.end(A),C.isScene===!0&&C.onAfterRender(A,C,Z),qe.resetDefaultState(),fe=-1,ne=null,R.pop(),R.length>0?(z=R[R.length-1],Ve===!0&&Ke.setGlobalState(A.clippingPlanes,z.state.camera)):z=null,I.pop(),I.length>0?O=I[I.length-1]:O=null};function Ye(C,Z,le,se){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)le=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)z.pushLight(C),C.castShadow&&z.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||We.intersectsSprite(C)){se&&bt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(_t);const Je=Ie.update(C),Ge=C.material;Ge.visible&&O.push(C,Je,Ge,le,bt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||We.intersectsObject(C))){const Je=Ie.update(C),Ge=C.material;if(se&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),bt.copy(C.boundingSphere.center)):(Je.boundingSphere===null&&Je.computeBoundingSphere(),bt.copy(Je.boundingSphere.center)),bt.applyMatrix4(C.matrixWorld).applyMatrix4(_t)),Array.isArray(Ge)){const Ue=Je.groups;for(let Xe=0,ut=Ue.length;Xe<ut;Xe++){const tt=Ue[Xe],$e=Ge[tt.materialIndex];$e&&$e.visible&&O.push(C,Je,$e,le,bt.z,tt)}}else Ge.visible&&O.push(C,Je,Ge,le,bt.z,null)}}const ze=C.children;for(let Je=0,Ge=ze.length;Je<Ge;Je++)Ye(ze[Je],Z,le,se)}function ke(C,Z,le,se){const{opaque:$,transmissive:ze,transparent:Je}=C;z.setupLightsView(le),Ve===!0&&Ke.setGlobalState(A.clippingPlanes,le),se&&st.viewport(P.copy(se)),$.length>0&&it($,Z,le),ze.length>0&&it(ze,Z,le),Je.length>0&&it(Je,Z,le),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Qe(C,Z,le,se){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[se.id]===void 0){const $e=Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[se.id]=new Qi(1,1,{generateMipmaps:!0,type:$e?Va:Ii,minFilter:es,samples:Wt.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace})}const ze=z.state.transmissionRenderTarget[se.id],Je=se.viewport||P;ze.setSize(Je.z*A.transmissionResolutionScale,Je.w*A.transmissionResolutionScale);const Ge=A.getRenderTarget(),Ue=A.getActiveCubeFace(),Xe=A.getActiveMipmapLevel();A.setRenderTarget(ze),A.getClearColor(xe),ye=A.getClearAlpha(),ye<1&&A.setClearColor(16777215,.5),A.clear(),pt&&Be.render(le);const ut=A.toneMapping;A.toneMapping=la;const tt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),z.setupLightsView(se),Ve===!0&&Ke.setGlobalState(A.clippingPlanes,se),it(C,le,se),j.updateMultisampleRenderTarget(ze),j.updateRenderTargetMipmap(ze),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let zt=0,cn=Z.length;zt<cn;zt++){const an=Z[zt],{object:Qt,geometry:ct,material:Zt,group:xt}=an;if(Zt.side===za&&Qt.layers.test(se.layers)){const Hn=Zt.side;Zt.side=fi,Zt.needsUpdate=!0,ft(Qt,le,se,ct,Zt,xt),Zt.side=Hn,Zt.needsUpdate=!0,$e=!0}}$e===!0&&(j.updateMultisampleRenderTarget(ze),j.updateRenderTargetMipmap(ze))}A.setRenderTarget(Ge,Ue,Xe),A.setClearColor(xe,ye),tt!==void 0&&(se.viewport=tt),A.toneMapping=ut}function it(C,Z,le){const se=Z.isScene===!0?Z.overrideMaterial:null;for(let $=0,ze=C.length;$<ze;$++){const Je=C[$],{object:Ge,geometry:Ue,group:Xe}=Je;let ut=Je.material;ut.allowOverride===!0&&se!==null&&(ut=se),Ge.layers.test(le.layers)&&ft(Ge,Z,le,Ue,ut,Xe)}}function ft(C,Z,le,se,$,ze){C.onBeforeRender(A,Z,le,se,$,ze),C.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(A,Z,le,se,C,ze),$.transparent===!0&&$.side===za&&$.forceSinglePass===!1?($.side=fi,$.needsUpdate=!0,A.renderBufferDirect(le,Z,se,$,C,ze),$.side=Ar,$.needsUpdate=!0,A.renderBufferDirect(le,Z,se,$,C,ze),$.side=za):A.renderBufferDirect(le,Z,se,$,C,ze),C.onAfterRender(A,Z,le,se,$,ze)}function ot(C,Z,le){Z.isScene!==!0&&(Z=Ht);const se=b.get(C),$=z.state.lights,ze=z.state.shadowsArray,Je=$.state.version,Ge=rt.getParameters(C,$.state,ze,Z,le),Ue=rt.getProgramCacheKey(Ge);let Xe=se.programs;se.environment=C.isMeshStandardMaterial?Z.environment:null,se.fog=Z.fog,se.envMap=(C.isMeshStandardMaterial?Te:_e).get(C.envMap||se.environment),se.envMapRotation=se.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,Xe===void 0&&(C.addEventListener("dispose",Ln),Xe=new Map,se.programs=Xe);let ut=Xe.get(Ue);if(ut!==void 0){if(se.currentProgram===ut&&se.lightsStateVersion===Je)return Ut(C,Ge),ut}else Ge.uniforms=rt.getUniforms(C),C.onBeforeCompile(Ge,A),ut=rt.acquireProgram(Ge,Ue),Xe.set(Ue,ut),se.uniforms=Ge.uniforms;const tt=se.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(tt.clippingPlanes=Ke.uniform),Ut(C,Ge),se.needsLights=vn(C),se.lightsStateVersion=Je,se.needsLights&&(tt.ambientLightColor.value=$.state.ambient,tt.lightProbe.value=$.state.probe,tt.directionalLights.value=$.state.directional,tt.directionalLightShadows.value=$.state.directionalShadow,tt.spotLights.value=$.state.spot,tt.spotLightShadows.value=$.state.spotShadow,tt.rectAreaLights.value=$.state.rectArea,tt.ltc_1.value=$.state.rectAreaLTC1,tt.ltc_2.value=$.state.rectAreaLTC2,tt.pointLights.value=$.state.point,tt.pointLightShadows.value=$.state.pointShadow,tt.hemisphereLights.value=$.state.hemi,tt.directionalShadowMap.value=$.state.directionalShadowMap,tt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,tt.spotShadowMap.value=$.state.spotShadowMap,tt.spotLightMatrix.value=$.state.spotLightMatrix,tt.spotLightMap.value=$.state.spotLightMap,tt.pointShadowMap.value=$.state.pointShadowMap,tt.pointShadowMatrix.value=$.state.pointShadowMatrix),se.currentProgram=ut,se.uniformsList=null,ut}function Lt(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=Ec.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function Ut(C,Z){const le=b.get(C);le.outputColorSpace=Z.outputColorSpace,le.batching=Z.batching,le.batchingColor=Z.batchingColor,le.instancing=Z.instancing,le.instancingColor=Z.instancingColor,le.instancingMorph=Z.instancingMorph,le.skinning=Z.skinning,le.morphTargets=Z.morphTargets,le.morphNormals=Z.morphNormals,le.morphColors=Z.morphColors,le.morphTargetsCount=Z.morphTargetsCount,le.numClippingPlanes=Z.numClippingPlanes,le.numIntersection=Z.numClipIntersection,le.vertexAlphas=Z.vertexAlphas,le.vertexTangents=Z.vertexTangents,le.toneMapping=Z.toneMapping}function dn(C,Z,le,se,$){Z.isScene!==!0&&(Z=Ht),j.resetTextureUnits();const ze=Z.fog,Je=se.isMeshStandardMaterial?Z.environment:null,Ge=te===null?A.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:so,Ue=(se.isMeshStandardMaterial?Te:_e).get(se.envMap||Je),Xe=se.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,ut=!!le.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),tt=!!le.morphAttributes.position,$e=!!le.morphAttributes.normal,zt=!!le.morphAttributes.color;let cn=la;se.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(cn=A.toneMapping);const an=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Qt=an!==void 0?an.length:0,ct=b.get(se),Zt=z.state.lights;if(Ve===!0&&(yt===!0||C!==ne)){const kn=C===ne&&se.id===fe;Ke.setState(se,C,kn)}let xt=!1;se.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==Zt.state.version||ct.outputColorSpace!==Ge||$.isBatchedMesh&&ct.batching===!1||!$.isBatchedMesh&&ct.batching===!0||$.isBatchedMesh&&ct.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ct.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ct.instancing===!1||!$.isInstancedMesh&&ct.instancing===!0||$.isSkinnedMesh&&ct.skinning===!1||!$.isSkinnedMesh&&ct.skinning===!0||$.isInstancedMesh&&ct.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ct.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ct.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ct.instancingMorph===!1&&$.morphTexture!==null||ct.envMap!==Ue||se.fog===!0&&ct.fog!==ze||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==Ke.numPlanes||ct.numIntersection!==Ke.numIntersection)||ct.vertexAlphas!==Xe||ct.vertexTangents!==ut||ct.morphTargets!==tt||ct.morphNormals!==$e||ct.morphColors!==zt||ct.toneMapping!==cn||ct.morphTargetsCount!==Qt)&&(xt=!0):(xt=!0,ct.__version=se.version);let Hn=ct.currentProgram;xt===!0&&(Hn=ot(se,Z,$));let ha=!1,Gn=!1,Ti=!1;const Jt=Hn.getUniforms(),Vn=ct.uniforms;if(st.useProgram(Hn.program)&&(ha=!0,Gn=!0,Ti=!0),se.id!==fe&&(fe=se.id,Gn=!0),ha||ne!==C){st.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Jt.setValue(X,"projectionMatrix",C.projectionMatrix),Jt.setValue(X,"viewMatrix",C.matrixWorldInverse);const Xn=Jt.map.cameraPosition;Xn!==void 0&&Xn.setValue(X,gt.setFromMatrixPosition(C.matrixWorld)),Wt.logarithmicDepthBuffer&&Jt.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Jt.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),ne!==C&&(ne=C,Gn=!0,Ti=!0)}if(ct.needsLights&&(Zt.state.directionalShadowMap.length>0&&Jt.setValue(X,"directionalShadowMap",Zt.state.directionalShadowMap,j),Zt.state.spotShadowMap.length>0&&Jt.setValue(X,"spotShadowMap",Zt.state.spotShadowMap,j),Zt.state.pointShadowMap.length>0&&Jt.setValue(X,"pointShadowMap",Zt.state.pointShadowMap,j)),$.isSkinnedMesh){Jt.setOptional(X,$,"bindMatrix"),Jt.setOptional(X,$,"bindMatrixInverse");const kn=$.skeleton;kn&&(kn.boneTexture===null&&kn.computeBoneTexture(),Jt.setValue(X,"boneTexture",kn.boneTexture,j))}$.isBatchedMesh&&(Jt.setOptional(X,$,"batchingTexture"),Jt.setValue(X,"batchingTexture",$._matricesTexture,j),Jt.setOptional(X,$,"batchingIdTexture"),Jt.setValue(X,"batchingIdTexture",$._indirectTexture,j),Jt.setOptional(X,$,"batchingColorTexture"),$._colorsTexture!==null&&Jt.setValue(X,"batchingColorTexture",$._colorsTexture,j));const Nn=le.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&Et.update($,le,Hn),(Gn||ct.receiveShadow!==$.receiveShadow)&&(ct.receiveShadow=$.receiveShadow,Jt.setValue(X,"receiveShadow",$.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Vn.envMap.value=Ue,Vn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Z.environment!==null&&(Vn.envMapIntensity.value=Z.environmentIntensity),Vn.dfgLUT!==void 0&&(Vn.dfgLUT.value=Fw()),Gn&&(Jt.setValue(X,"toneMappingExposure",A.toneMappingExposure),ct.needsLights&&gn(Vn,Ti),ze&&se.fog===!0&&ht.refreshFogUniforms(Vn,ze),ht.refreshMaterialUniforms(Vn,se,ge,ee,z.state.transmissionRenderTarget[C.id]),Ec.upload(X,Lt(ct),Vn,j)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Ec.upload(X,Lt(ct),Vn,j),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Jt.setValue(X,"center",$.center),Jt.setValue(X,"modelViewMatrix",$.modelViewMatrix),Jt.setValue(X,"normalMatrix",$.normalMatrix),Jt.setValue(X,"modelMatrix",$.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const kn=se.uniformsGroups;for(let Xn=0,ss=kn.length;Xn<ss;Xn++){const ki=kn[Xn];Ae.update(ki,Hn),Ae.bind(ki,Hn)}}return Hn}function gn(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function vn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(C,Z,le){const se=b.get(C);se.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=Z,b.get(C.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:le,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const le=b.get(C);le.__webglFramebuffer=Z,le.__useDefaultFramebuffer=Z===void 0};const Nt=X.createFramebuffer();this.setRenderTarget=function(C,Z=0,le=0){te=C,B=Z,J=le;let se=null,$=!1,ze=!1;if(C){const Ge=b.get(C);if(Ge.__useDefaultFramebuffer!==void 0){st.bindFramebuffer(X.FRAMEBUFFER,Ge.__webglFramebuffer),P.copy(C.viewport),H.copy(C.scissor),Y=C.scissorTest,st.viewport(P),st.scissor(H),st.setScissorTest(Y),fe=-1;return}else if(Ge.__webglFramebuffer===void 0)j.setupRenderTarget(C);else if(Ge.__hasExternalTextures)j.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ut=C.depthTexture;if(Ge.__boundDepthTexture!==ut){if(ut!==null&&b.has(ut)&&(C.width!==ut.image.width||C.height!==ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(C)}}const Ue=C.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ze=!0);const Xe=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xe[Z])?se=Xe[Z][le]:se=Xe[Z],$=!0):C.samples>0&&j.useMultisampledRTT(C)===!1?se=b.get(C).__webglMultisampledFramebuffer:Array.isArray(Xe)?se=Xe[le]:se=Xe,P.copy(C.viewport),H.copy(C.scissor),Y=C.scissorTest}else P.copy(ie).multiplyScalar(ge).floor(),H.copy(me).multiplyScalar(ge).floor(),Y=Ne;if(le!==0&&(se=Nt),st.bindFramebuffer(X.FRAMEBUFFER,se)&&st.drawBuffers(C,se),st.viewport(P),st.scissor(H),st.setScissorTest(Y),$){const Ge=b.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ge.__webglTexture,le)}else if(ze){const Ge=Z;for(let Ue=0;Ue<C.textures.length;Ue++){const Xe=b.get(C.textures[Ue]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Ue,Xe.__webglTexture,le,Ge)}}else if(C!==null&&le!==0){const Ge=b.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ge.__webglTexture,le)}fe=-1},this.readRenderTargetPixels=function(C,Z,le,se,$,ze,Je,Ge=0){if(!(C&&C.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Je!==void 0&&(Ue=Ue[Je]),Ue){st.bindFramebuffer(X.FRAMEBUFFER,Ue);try{const Xe=C.textures[Ge],ut=Xe.format,tt=Xe.type;if(!Wt.textureFormatReadable(ut)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(tt)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-se&&le>=0&&le<=C.height-$&&(C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ge),X.readPixels(Z,le,se,$,Le.convert(ut),Le.convert(tt),ze))}finally{const Xe=te!==null?b.get(te).__webglFramebuffer:null;st.bindFramebuffer(X.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(C,Z,le,se,$,ze,Je,Ge=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Je!==void 0&&(Ue=Ue[Je]),Ue)if(Z>=0&&Z<=C.width-se&&le>=0&&le<=C.height-$){st.bindFramebuffer(X.FRAMEBUFFER,Ue);const Xe=C.textures[Ge],ut=Xe.format,tt=Xe.type;if(!Wt.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,$e),X.bufferData(X.PIXEL_PACK_BUFFER,ze.byteLength,X.STREAM_READ),C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ge),X.readPixels(Z,le,se,$,Le.convert(ut),Le.convert(tt),0);const zt=te!==null?b.get(te).__webglFramebuffer:null;st.bindFramebuffer(X.FRAMEBUFFER,zt);const cn=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await s1(X,cn,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,$e),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,ze),X.deleteBuffer($e),X.deleteSync(cn),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,le=0){const se=Math.pow(2,-le),$=Math.floor(C.image.width*se),ze=Math.floor(C.image.height*se),Je=Z!==null?Z.x:0,Ge=Z!==null?Z.y:0;j.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,le,0,0,Je,Ge,$,ze),st.unbindTexture()};const Tn=X.createFramebuffer(),Zn=X.createFramebuffer();this.copyTextureToTexture=function(C,Z,le=null,se=null,$=0,ze=null){ze===null&&($!==0?(Sl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ze=$,$=0):ze=0);let Je,Ge,Ue,Xe,ut,tt,$e,zt,cn;const an=C.isCompressedTexture?C.mipmaps[ze]:C.image;if(le!==null)Je=le.max.x-le.min.x,Ge=le.max.y-le.min.y,Ue=le.isBox3?le.max.z-le.min.z:1,Xe=le.min.x,ut=le.min.y,tt=le.isBox3?le.min.z:0;else{const Nn=Math.pow(2,-$);Je=Math.floor(an.width*Nn),Ge=Math.floor(an.height*Nn),C.isDataArrayTexture?Ue=an.depth:C.isData3DTexture?Ue=Math.floor(an.depth*Nn):Ue=1,Xe=0,ut=0,tt=0}se!==null?($e=se.x,zt=se.y,cn=se.z):($e=0,zt=0,cn=0);const Qt=Le.convert(Z.format),ct=Le.convert(Z.type);let Zt;Z.isData3DTexture?(j.setTexture3D(Z,0),Zt=X.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(j.setTexture2DArray(Z,0),Zt=X.TEXTURE_2D_ARRAY):(j.setTexture2D(Z,0),Zt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Z.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Z.unpackAlignment);const xt=X.getParameter(X.UNPACK_ROW_LENGTH),Hn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),ha=X.getParameter(X.UNPACK_SKIP_PIXELS),Gn=X.getParameter(X.UNPACK_SKIP_ROWS),Ti=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,an.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,an.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Xe),X.pixelStorei(X.UNPACK_SKIP_ROWS,ut),X.pixelStorei(X.UNPACK_SKIP_IMAGES,tt);const Jt=C.isDataArrayTexture||C.isData3DTexture,Vn=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const Nn=b.get(C),kn=b.get(Z),Xn=b.get(Nn.__renderTarget),ss=b.get(kn.__renderTarget);st.bindFramebuffer(X.READ_FRAMEBUFFER,Xn.__webglFramebuffer),st.bindFramebuffer(X.DRAW_FRAMEBUFFER,ss.__webglFramebuffer);for(let ki=0;ki<Ue;ki++)Jt&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,b.get(C).__webglTexture,$,tt+ki),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,b.get(Z).__webglTexture,ze,cn+ki)),X.blitFramebuffer(Xe,ut,Je,Ge,$e,zt,Je,Ge,X.DEPTH_BUFFER_BIT,X.NEAREST);st.bindFramebuffer(X.READ_FRAMEBUFFER,null),st.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||b.has(C)){const Nn=b.get(C),kn=b.get(Z);st.bindFramebuffer(X.READ_FRAMEBUFFER,Tn),st.bindFramebuffer(X.DRAW_FRAMEBUFFER,Zn);for(let Xn=0;Xn<Ue;Xn++)Jt?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Nn.__webglTexture,$,tt+Xn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Nn.__webglTexture,$),Vn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,kn.__webglTexture,ze,cn+Xn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,kn.__webglTexture,ze),$!==0?X.blitFramebuffer(Xe,ut,Je,Ge,$e,zt,Je,Ge,X.COLOR_BUFFER_BIT,X.NEAREST):Vn?X.copyTexSubImage3D(Zt,ze,$e,zt,cn+Xn,Xe,ut,Je,Ge):X.copyTexSubImage2D(Zt,ze,$e,zt,Xe,ut,Je,Ge);st.bindFramebuffer(X.READ_FRAMEBUFFER,null),st.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Vn?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(Zt,ze,$e,zt,cn,Je,Ge,Ue,Qt,ct,an.data):Z.isCompressedArrayTexture?X.compressedTexSubImage3D(Zt,ze,$e,zt,cn,Je,Ge,Ue,Qt,an.data):X.texSubImage3D(Zt,ze,$e,zt,cn,Je,Ge,Ue,Qt,ct,an):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,ze,$e,zt,Je,Ge,Qt,ct,an.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,ze,$e,zt,an.width,an.height,Qt,an.data):X.texSubImage2D(X.TEXTURE_2D,ze,$e,zt,Je,Ge,Qt,ct,an);X.pixelStorei(X.UNPACK_ROW_LENGTH,xt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Hn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ha),X.pixelStorei(X.UNPACK_SKIP_ROWS,Gn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ti),ze===0&&Z.generateMipmaps&&X.generateMipmap(Zt),st.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&j.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?j.setTextureCube(C,0):C.isData3DTexture?j.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?j.setTexture2DArray(C,0):j.setTexture2D(C,0),st.unbindTexture()},this.resetState=function(){B=0,J=0,te=null,st.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Xt._getUnpackColorSpace()}}const Iw=a=>{const e=is.c(20),{children:i}=a,s=oe.useRef(null),l=oe.useRef(null),u=oe.useRef(null);let c;e[0]===Symbol.for("react.memo_cache_sentinel")?(c={},e[0]=c):c=e[0];const d=oe.useRef(c),[m,p]=oe.useState(!1),[v]=oe.useState(!1);let g;e[1]===Symbol.for("react.memo_cache_sentinel")?(g={speed:.4,noiseScale:.6,noiseIntensity:.52,timeScale:1,focus:3.8,aperture:1.79,pointSize:10,opacity:.8,planeScale:10,vignetteDarkness:1.5,vignetteOffset:.4},e[1]=g):g=e[1];const[_,y]=oe.useState(g);let E;e[2]===Symbol.for("react.memo_cache_sentinel")?(E=(A,U)=>{y(B=>({...B,[A]:parseFloat(U)}))},e[2]=E):E=e[2];const T=E;let M;e[3]!==_||e[4]!==m?(M=()=>{if(!s.current)return;const A=new k_,U=new zi(50,window.innerWidth/window.innerHeight,.01,300);U.position.set(1.2629783123314589,2.664606471394044,-1.8178993743288914),U.lookAt(0,0,0);const B=new zw({canvas:s.current,antialias:!0,alpha:!1});B.setClearColor(0,1),B.setSize(window.innerWidth,window.innerHeight),B.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.current=B;const J=_.planeScale,fe=function(){const Ve=new Float32Array(1048576);for(let _t=0;_t<262144;_t++){const gt=_t*4,bt=_t%512/511,Ht=Math.floor(_t/512)/511;Ve[gt+0]=(bt-.5)*2*J,Ve[gt+1]=0,Ve[gt+2]=(Ht-.5)*2*J,Ve[gt+3]=1}const yt=new My(Ve,512,512,bi,Bi);return yt.needsUpdate=!0,yt}(),ne=new Qi(512,512,{minFilter:Pn,magFilter:Pn,format:bi,type:Bi}),P=new k_,H=new $p(-1,1,1,-1,0,1),Y=new Gi({vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D positions;
      uniform float uTime;
      uniform float uNoiseScale;
      uniform float uNoiseIntensity;
      uniform float uTimeScale;
      
      varying vec2 vUv;
      
      float periodicNoise(vec3 p, float time) {
        float noise = 0.0;
        noise += sin(p.x * 2.0 + time) * cos(p.z * 1.5 + time);
        noise += sin(p.x * 3.2 + time * 2.0) * cos(p.z * 2.1 + time) * 0.6;
        noise += sin(p.x * 1.7 + time) * cos(p.z * 2.8 + time * 3.0) * 0.4;
        noise += sin(p.x * p.z * 0.5 + time * 2.0) * 0.3;
        return noise * 0.3;
      }
      
      void main() {
        vec3 originalPos = texture2D(positions, vUv).rgb;
        float continuousTime = uTime * uTimeScale;
        
        vec3 noiseInput = originalPos * uNoiseScale;
        
        float displacementX = periodicNoise(noiseInput + vec3(0.0, 0.0, 0.0), continuousTime);
        float displacementY = periodicNoise(noiseInput + vec3(50.0, 0.0, 0.0), continuousTime + 2.094);
        float displacementZ = periodicNoise(noiseInput + vec3(0.0, 50.0, 0.0), continuousTime + 4.188);
        
        vec3 distortion = vec3(displacementX, displacementY, displacementZ) * uNoiseIntensity;
        vec3 finalPos = originalPos + distortion;
        
        gl_FragColor = vec4(finalPos, 1.0);
      }
    `,uniforms:{positions:{value:fe},uTime:{value:0},uNoiseScale:{value:_.noiseScale},uNoiseIntensity:{value:_.noiseIntensity},uTimeScale:{value:_.timeScale}}}),xe=new Nl(2,2),ye=new fa(xe,Y);P.add(ye);const N=new Float32Array(786432);for(let We=0;We<262144;We++){const Ve=We*3;N[Ve+0]=We%512/512,N[Ve+1]=We/512/512,N[Ve+2]=0}const ee=new Gi({vertexShader:`
      uniform sampler2D positionsTexture;
      uniform sampler2D initialPositionsTexture;
      uniform float uTime;
      uniform float uFocus;
      uniform float uBlur;
      uniform float uPointSize;
      
      varying float vDistance;
      varying float vPosY;
      varying vec3 vInitialPosition;
      
      void main() {
        vec2 uv = position.xy;
        vec3 pos = texture2D(positionsTexture, uv).xyz;
        vec3 initialPos = texture2D(initialPositionsTexture, uv).xyz;
        
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        
        vDistance = abs(uFocus - (-mvPosition.z));
        vPosY = pos.y;
        vInitialPosition = initialPos;
        
        gl_PointSize = max(vDistance * uBlur * uPointSize, 2.0);
      }
    `,fragmentShader:`
      uniform float uOpacity;
      uniform float uRevealFactor;
      uniform float uTime;
      
      varying float vDistance;
      varying float vPosY;
      varying vec3 vInitialPosition;
      
      float periodicNoise(vec3 p, float time) {
        float noise = 0.0;
        noise += sin(p.x * 2.0 + time) * cos(p.z * 1.5 + time);
        noise += sin(p.x * 3.2 + time * 2.0) * cos(p.z * 2.1 + time) * 0.6;
        noise += sin(p.x * 1.7 + time) * cos(p.z * 2.8 + time * 3.0) * 0.4;
        noise += sin(p.x * p.z * 0.5 + time * 2.0) * 0.3;
        return noise * 0.3;
      }
      
      float sparkleNoise(vec3 seed, float time) {
        float hash = sin(seed.x * 127.1 + seed.y * 311.7 + seed.z * 74.7) * 43758.5453;
        hash = fract(hash);
        
        float sparkle = 0.0;
        sparkle += sin(time + hash * 6.28318) * 0.5;
        sparkle += sin(time * 1.7 + hash * 12.56636) * 0.3;
        
        float normalizedSparkle = (sparkle + 1.0) * 0.5;
        float smoothCurve = pow(normalizedSparkle, 4.0);
        float blendFactor = normalizedSparkle * normalizedSparkle;
        float finalBrightness = mix(normalizedSparkle, smoothCurve, blendFactor);
        
        return 0.7 + finalBrightness * 1.3;
      }
      
      void main() {
        vec2 cxy = 2.0 * gl_PointCoord - 1.0;
        float sdf = length(cxy) - 0.5;
        
        if (sdf > 0.0) discard;
        
        float distanceFromCenter = length(vInitialPosition.xz);
        float noiseValue = periodicNoise(vInitialPosition * 4.0, 0.0);
        float revealThreshold = uRevealFactor + noiseValue * 0.3;
        float revealMask = 1.0 - smoothstep(revealThreshold - 0.2, revealThreshold + 0.1, distanceFromCenter);
        
        float sparkleBrightness = sparkleNoise(vInitialPosition, uTime);
        
        float alpha = (1.04 - clamp(vDistance, 0.0, 1.0)) * 
                     clamp(smoothstep(-0.5, 0.25, vPosY), 0.0, 1.0) * 
                     uOpacity * revealMask * sparkleBrightness;
        
        gl_FragColor = vec4(vec3(1.0), alpha);
      }
    `,uniforms:{positionsTexture:{value:ne.texture},initialPositionsTexture:{value:fe},uTime:{value:0},uFocus:{value:_.focus},uBlur:{value:_.aperture},uPointSize:{value:_.pointSize},uOpacity:{value:_.opacity},uRevealFactor:{value:0}},transparent:!0,depthWrite:!1});d.current={simulationMaterial:Y,particleMaterial:ee};const ge=new $i;ge.setAttribute("position",new Ji(N,3));const Ce=new P1(ge,ee);A.add(Ce);let Fe=null;const ie=new G1;function me(){u.current=requestAnimationFrame(me);const We=ie.getElapsedTime();Fe===null&&(Fe=We);const Ve=We-Fe,yt=Math.min(Ve/3.5,1),gt=(1-Math.pow(1-yt,3))*4;Y.uniforms.uTime.value=We,Y.uniforms.uTimeScale.value=_.timeScale*_.speed,B.setRenderTarget(ne),B.render(P,H),B.setRenderTarget(null),ee.uniforms.uTime.value=We,ee.uniforms.uRevealFactor.value=gt,B.render(A,U),m||p(!0)}me();const Ne=()=>{U.aspect=window.innerWidth/window.innerHeight,U.updateProjectionMatrix(),B.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",Ne),()=>{window.removeEventListener("resize",Ne),u.current&&cancelAnimationFrame(u.current),l.current&&l.current.dispose(),ge.dispose(),ee.dispose(),xe.dispose(),Y.dispose(),ne.dispose(),fe.dispose()}},e[3]=_,e[4]=m,e[5]=M):M=e[5];let x;e[6]===Symbol.for("react.memo_cache_sentinel")?(x=[],e[6]=x):x=e[6],oe.useEffect(M,x);let D,L;e[7]!==_?(D=()=>{d.current.simulationMaterial&&(d.current.simulationMaterial.uniforms.uNoiseScale.value=_.noiseScale,d.current.simulationMaterial.uniforms.uNoiseIntensity.value=_.noiseIntensity,d.current.simulationMaterial.uniforms.uTimeScale.value=_.timeScale),d.current.particleMaterial&&(d.current.particleMaterial.uniforms.uFocus.value=_.focus,d.current.particleMaterial.uniforms.uBlur.value=_.aperture,d.current.particleMaterial.uniforms.uPointSize.value=_.pointSize,d.current.particleMaterial.uniforms.uOpacity.value=_.opacity)},L=[_],e[7]=_,e[8]=D,e[9]=L):(D=e[8],L=e[9]),oe.useEffect(D,L);let O;e[10]===Symbol.for("react.memo_cache_sentinel")?(O=Me.jsx("canvas",{ref:s,className:"particle-canvas"}),e[10]=O):O=e[10];let z;e[11]!==_||e[12]!==v?(z=v&&Me.jsxs("div",{className:"particle-controls",children:[Me.jsx("h3",{children:"Particle Controls"}),Me.jsxs("div",{className:"control-group",children:[Me.jsxs("label",{children:["Speed: ",Me.jsx("span",{className:"value",children:_.speed.toFixed(2)})]}),Me.jsx("input",{type:"range",min:"0",max:"2",step:"0.01",value:_.speed,onChange:A=>T("speed",A.target.value)})]}),Me.jsxs("div",{className:"control-group",children:[Me.jsxs("label",{children:["Noise Scale: ",Me.jsx("span",{className:"value",children:_.noiseScale.toFixed(1)})]}),Me.jsx("input",{type:"range",min:"0.1",max:"5",step:"0.1",value:_.noiseScale,onChange:A=>T("noiseScale",A.target.value)})]}),Me.jsxs("div",{className:"control-group",children:[Me.jsxs("label",{children:["Noise Intensity: ",Me.jsx("span",{className:"value",children:_.noiseIntensity.toFixed(2)})]}),Me.jsx("input",{type:"range",min:"0",max:"2",step:"0.01",value:_.noiseIntensity,onChange:A=>T("noiseIntensity",A.target.value)})]}),Me.jsxs("div",{className:"control-group",children:[Me.jsxs("label",{children:["Time Scale: ",Me.jsx("span",{className:"value",children:_.timeScale.toFixed(2)})]}),Me.jsx("input",{type:"range",min:"0",max:"2",step:"0.01",value:_.timeScale,onChange:A=>T("timeScale",A.target.value)})]}),Me.jsxs("div",{className:"control-group",children:[Me.jsxs("label",{children:["Focus: ",Me.jsx("span",{className:"value",children:_.focus.toFixed(1)})]}),Me.jsx("input",{type:"range",min:"0.1",max:"20",step:"0.1",value:_.focus,onChange:A=>T("focus",A.target.value)})]}),Me.jsxs("div",{className:"control-group",children:[Me.jsxs("label",{children:["Aperture (Blur): ",Me.jsx("span",{className:"value",children:_.aperture.toFixed(2)})]}),Me.jsx("input",{type:"range",min:"0",max:"2",step:"0.01",value:_.aperture,onChange:A=>T("aperture",A.target.value)})]}),Me.jsxs("div",{className:"control-group",children:[Me.jsxs("label",{children:["Point Size: ",Me.jsx("span",{className:"value",children:_.pointSize.toFixed(1)})]}),Me.jsx("input",{type:"range",min:"0.1",max:"10",step:"0.1",value:_.pointSize,onChange:A=>T("pointSize",A.target.value)})]}),Me.jsxs("div",{className:"control-group",children:[Me.jsxs("label",{children:["Opacity: ",Me.jsx("span",{className:"value",children:_.opacity.toFixed(2)})]}),Me.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:_.opacity,onChange:A=>T("opacity",A.target.value)})]}),Me.jsxs("div",{className:"control-group",children:[Me.jsxs("label",{children:["Plane Scale: ",Me.jsx("span",{className:"value",children:_.planeScale.toFixed(1)})]}),Me.jsx("input",{type:"range",min:"0.1",max:"20",step:"0.1",value:_.planeScale,onChange:A=>T("planeScale",A.target.value)})]}),Me.jsxs("div",{className:"control-group",children:[Me.jsxs("label",{children:["Vignette Darkness: ",Me.jsx("span",{className:"value",children:_.vignetteDarkness.toFixed(1)})]}),Me.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:_.vignetteDarkness,onChange:A=>T("vignetteDarkness",A.target.value)})]}),Me.jsxs("div",{className:"control-group",children:[Me.jsxs("label",{children:["Vignette Offset: ",Me.jsx("span",{className:"value",children:_.vignetteOffset.toFixed(1)})]}),Me.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:_.vignetteOffset,onChange:A=>T("vignetteOffset",A.target.value)})]})]}),e[11]=_,e[12]=v,e[13]=z):z=e[13];const I=`particle-content ${m?"fade-in":"hidden"}`;let R;e[14]!==i||e[15]!==I?(R=Me.jsx("div",{className:I,children:i}),e[14]=i,e[15]=I,e[16]=R):R=e[16];let k;return e[17]!==R||e[18]!==z?(k=Me.jsxs("div",{className:"particle-background-container",children:[O,z,R]}),e[17]=R,e[18]=z,e[19]=k):k=e[19],k},Bw=()=>{const a=is.c(6),e=Wa();let i;a[0]===Symbol.for("react.memo_cache_sentinel")?(i=["/upload","/results"],a[0]=i):i=a[0];const l=i.includes(e.pathname);let u;a[1]!==l?(u=!l&&Me.jsx(TT,{}),a[1]=l,a[2]=u):u=a[2];let c;a[3]===Symbol.for("react.memo_cache_sentinel")?(c=Me.jsx(zb,{}),a[3]=c):c=a[3];let d;return a[4]!==u?(d=Me.jsxs(Iw,{children:[u,c]}),a[4]=u,a[5]=d):d=a[5],d},Hw=()=>{const a=is.c(6),e=Dc();let i;a[0]!==e?(i=()=>{e("/upload")},a[0]=e,a[1]=i):i=a[1];const s=i;let l,u;a[2]===Symbol.for("react.memo_cache_sentinel")?(l=Me.jsxs("h1",{children:["Plane",Me.jsx("span",{children:"Teer"})]}),u=Me.jsx("p",{children:"Your road to safer and healther crops starts here"}),a[2]=l,a[3]=u):(l=a[2],u=a[3]);let c;return a[4]!==s?(c=Me.jsxs("div",{className:"homePageMainCont",children:[l,u,Me.jsx("button",{onClick:s,children:"GET STARTED"})]}),a[4]=s,a[5]=c):c=a[5],c},Gw=()=>{const[a,e]=oe.useState(null),[i,s]=oe.useState(!1),l=oe.useRef(null),u=Dc(),c=y=>{const E=y.target.files?.[0];if(E&&E.type.startsWith("image/")){if(E.size>100*1024*1024){alert("File exceeds 100MB limit."),y.target.value=null;return}e(E)}else alert("Only image files are allowed."),y.target.value=null},d=y=>{y.preventDefault(),s(!0)},m=y=>{y.preventDefault(),s(!1)},p=y=>{y.preventDefault(),s(!1);const E=y.dataTransfer.files?.[0];if(E&&E.type.startsWith("image/")){if(E.size>20*1024*1024){alert("File exceeds 20MB limit.");return}e(E)}else alert("Only image files are allowed.")},v=()=>{e(null),l.current&&(l.current.value="")},g=y=>y<1024?y+" B":y<1024*1024?(y/1024).toFixed(1)+" KB":(y/(1024*1024)).toFixed(1)+" MB",_=async y=>{if(y.preventDefault(),!a){alert("Please upload an image.");return}const E="https://uninstructible-matronly-fredricka.ngrok-free.dev",T=new FormData;T.append("image",a);try{const M=await fetch(`${E}/analyze`,{method:"POST",headers:{"ngrok-skip-browser-warning":"true"},body:T}),x=await M.text();console.log("Raw response:",x);let D;try{D=JSON.parse(x)}catch{alert("Backend did not return JSON. Check console Raw response.");return}if(!M.ok){alert(D.message||"Backend error");return}u("/results",{state:{disease:D.disease,causes:D.causes,elimination:D.elimination,prevention:D.prevention,annotatedImageB64:D.annotated_image_b64}})}catch(M){console.error("Error:",M),alert("Failed to connect to Colab.")}};return Me.jsx("div",{className:"userDataForm",children:Me.jsxs("form",{className:"userformcont",onSubmit:_,children:[Me.jsx("div",{className:"userformtitle",children:Me.jsxs("h1",{children:["Share Your Information to ",Me.jsx("span",{children:"Get Started"})]})}),Me.jsxs("div",{className:"form-section",children:[Me.jsx("div",{className:"file-upload-header",children:Me.jsx("h2",{className:"file-upload-title",children:"Upload Image"})}),!a&&Me.jsxs("div",{onDragOver:d,onDragLeave:m,onDrop:p,onClick:()=>l.current?.click(),className:`upload-area ${i?"upload-area-dragging":""}`,children:[Me.jsx("svg",{className:"upload-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Me.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})}),Me.jsx("p",{className:"upload-text",children:"Upload your image here"}),Me.jsx("input",{ref:l,type:"file",accept:"image/*",onChange:c,className:"file-input-hidden"})]}),!a&&Me.jsx("p",{className:"file-size-info",children:"Maximum size: 100MB"}),a&&Me.jsxs("div",{className:"file-card",children:[Me.jsx("div",{className:"file-icon-container",children:Me.jsx("svg",{className:"file-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Me.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),Me.jsxs("div",{className:"file-info",children:[Me.jsx("p",{className:"file-name",children:a.name}),Me.jsx("p",{className:"file-size",children:g(a.size)})]}),Me.jsxs("button",{type:"button",onClick:v,className:"delete-button",children:[Me.jsx("svg",{className:"delete-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Me.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})}),Me.jsx("span",{className:"sr-only",children:"Remove file"})]})]})]}),Me.jsx("button",{type:"submit",className:"useformsubmit",children:"Submit"})]})})},Vw=()=>{const a=is.c(22),{state:e}=Wa(),i=Dc(),{disease:s,causes:l,elimination:u,prevention:c,annotatedImageB64:d}=e;console.log("Received state in ResultsPage:",e);let m;a[0]!==s?(m=Me.jsx("h1",{children:s}),a[0]=s,a[1]=m):m=a[1];let p;a[2]!==d?(p=d&&Me.jsx("div",{className:"annotated-image-wrapper",style:{display:"flex",justifyContent:"center",margin:"20px 0"},children:Me.jsx("img",{className:"annotated-image",src:`data:image/jpeg;base64,${d}`,alt:"Annotated disease",style:{maxWidth:"480px",width:"100%",borderRadius:"12px"}})}),a[2]=d,a[3]=p):p=a[3];let v;a[4]===Symbol.for("react.memo_cache_sentinel")?(v=Me.jsx("p",{className:"titles",children:"Causes:"}),a[4]=v):v=a[4];let g;a[5]!==l?(g=Me.jsx("p",{className:"information",children:l}),a[5]=l,a[6]=g):g=a[6];let _;a[7]===Symbol.for("react.memo_cache_sentinel")?(_=Me.jsx("p",{className:"titles",children:"Removing Disease:"}),a[7]=_):_=a[7];let y;a[8]!==u?(y=Me.jsx("p",{className:"information",children:u}),a[8]=u,a[9]=y):y=a[9];let E;a[10]===Symbol.for("react.memo_cache_sentinel")?(E=Me.jsx("p",{className:"titles",children:"Prevention:"}),a[10]=E):E=a[10];let T;a[11]!==c?(T=Me.jsx("p",{className:"information",children:c}),a[11]=c,a[12]=T):T=a[12];let M;a[13]!==i?(M=Me.jsx("button",{onClick:()=>i("/upload"),children:"Analyze Another Image"}),a[13]=i,a[14]=M):M=a[14];let x;return a[15]!==m||a[16]!==p||a[17]!==g||a[18]!==y||a[19]!==T||a[20]!==M?(x=Me.jsx(Me.Fragment,{children:Me.jsx("div",{className:"results-page-cont",children:Me.jsxs("div",{className:"results-page",children:[m,p,v,g,_,y,E,T,M]})})}),a[15]=m,a[16]=p,a[17]=g,a[18]=y,a[19]=T,a[20]=M,a[21]=x):x=a[21],x};function kw(){const a=is.c(1);let e;if(a[0]===Symbol.for("react.memo_cache_sentinel")){const i=uT(Bb(Me.jsxs(dl,{path:"/",element:Me.jsx(Bw,{}),children:[Me.jsx(dl,{index:!0,element:Me.jsx(Hw,{})}),Me.jsx(dl,{path:"/upload",element:Me.jsx(Gw,{})}),Me.jsx(dl,{path:"/results",element:Me.jsx(Vw,{})})]})));e=Me.jsx(MT,{router:i}),a[0]=e}else e=a[0];return e}qM.createRoot(document.getElementById("root")).render(Me.jsx(oe.StrictMode,{children:Me.jsx(kw,{})}));
