(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();function ln(e,t){const s=Object.create(null),i=e.split(",");for(let n=0;n<i.length;n++)s[i[n]]=!0;return t?n=>!!s[n.toLowerCase()]:n=>!!s[n]}const kr="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tr=ln(kr);function zo(e){return!!e||e===""}function et(e){if(D(e)){const t={};for(let s=0;s<e.length;s++){const i=e[s],n=pe(i)?Sr(i):et(i);if(n)for(const o in n)t[o]=n[o]}return t}else{if(pe(e))return e;if(ne(e))return e}}const $r=/;(?![^(]*\))/g,Cr=/:(.+)/;function Sr(e){const t={};return e.split($r).forEach(s=>{if(s){const i=s.split(Cr);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ye(e){let t="";if(pe(e))t=e;else if(D(e))for(let s=0;s<e.length;s++){const i=ye(e[s]);i&&(t+=i+" ")}else if(ne(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}function Do(e){if(!e)return null;let{class:t,style:s}=e;return t&&!pe(t)&&(e.class=ye(t)),s&&(e.style=et(s)),e}const U=e=>pe(e)?e:e==null?"":D(e)||ne(e)&&(e.toString===Uo||!q(e.toString))?JSON.stringify(e,Bo,2):String(e),Bo=(e,t)=>t&&t.__v_isRef?Bo(e,t.value):qt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[i,n])=>(s[`${i} =>`]=n,s),{})}:qo(t)?{[`Set(${t.size})`]:[...t.values()]}:ne(t)&&!D(t)&&!Yo(t)?String(t):t,Z={},Bt=[],De=()=>{},Pr=()=>!1,Lr=/^on[^a-z]/,ti=e=>Lr.test(e),cn=e=>e.startsWith("onUpdate:"),$e=Object.assign,dn=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},Ar=Object.prototype.hasOwnProperty,Y=(e,t)=>Ar.call(e,t),D=Array.isArray,qt=e=>si(e)==="[object Map]",qo=e=>si(e)==="[object Set]",q=e=>typeof e=="function",pe=e=>typeof e=="string",pn=e=>typeof e=="symbol",ne=e=>e!==null&&typeof e=="object",Wo=e=>ne(e)&&q(e.then)&&q(e.catch),Uo=Object.prototype.toString,si=e=>Uo.call(e),Rr=e=>si(e).slice(8,-1),Yo=e=>si(e)==="[object Object]",hn=e=>pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Fs=ln(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ii=e=>{const t=Object.create(null);return s=>t[s]||(t[s]=e(s))},Ir=/-(\w)/g,Ve=ii(e=>e.replace(Ir,(t,s)=>s?s.toUpperCase():"")),Or=/\B([A-Z])/g,Ht=ii(e=>e.replace(Or,"-$1").toLowerCase()),ni=ii(e=>e.charAt(0).toUpperCase()+e.slice(1)),$i=ii(e=>e?`on${ni(e)}`:""),ms=(e,t)=>!Object.is(e,t),zs=(e,t)=>{for(let s=0;s<e.length;s++)e[s](t)},qs=(e,t,s)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:s})},Mi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let zn;const Er=()=>zn||(zn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ie;class Mr{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ie&&(this.parent=Ie,this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}run(t){if(this.active){const s=Ie;try{return Ie=this,t()}finally{Ie=s}}}on(){Ie=this}off(){Ie=this.parent}stop(t){if(this.active){let s,i;for(s=0,i=this.effects.length;s<i;s++)this.effects[s].stop();for(s=0,i=this.cleanups.length;s<i;s++)this.cleanups[s]();if(this.scopes)for(s=0,i=this.scopes.length;s<i;s++)this.scopes[s].stop(!0);if(this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function Hr(e,t=Ie){t&&t.active&&t.effects.push(e)}function Nr(){return Ie}function jr(e){Ie&&Ie.cleanups.push(e)}const un=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ko=e=>(e.w&bt)>0,Vo=e=>(e.n&bt)>0,Fr=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=bt},zr=e=>{const{deps:t}=e;if(t.length){let s=0;for(let i=0;i<t.length;i++){const n=t[i];Ko(n)&&!Vo(n)?n.delete(e):t[s++]=n,n.w&=~bt,n.n&=~bt}t.length=s}},Hi=new WeakMap;let rs=0,bt=1;const Ni=30;let Fe;const Ot=Symbol(""),ji=Symbol("");class fn{constructor(t,s=null,i){this.fn=t,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Hr(this,i)}run(){if(!this.active)return this.fn();let t=Fe,s=ft;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Fe,Fe=this,ft=!0,bt=1<<++rs,rs<=Ni?Fr(this):Dn(this),this.fn()}finally{rs<=Ni&&zr(this),bt=1<<--rs,Fe=this.parent,ft=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Fe===this?this.deferStop=!0:this.active&&(Dn(this),this.onStop&&this.onStop(),this.active=!1)}}function Dn(e){const{deps:t}=e;if(t.length){for(let s=0;s<t.length;s++)t[s].delete(e);t.length=0}}let ft=!0;const Go=[];function es(){Go.push(ft),ft=!1}function ts(){const e=Go.pop();ft=e===void 0?!0:e}function Me(e,t,s){if(ft&&Fe){let i=Hi.get(e);i||Hi.set(e,i=new Map);let n=i.get(s);n||i.set(s,n=un()),Xo(n)}}function Xo(e,t){let s=!1;rs<=Ni?Vo(e)||(e.n|=bt,s=!Ko(e)):s=!e.has(Fe),s&&(e.add(Fe),Fe.deps.push(e))}function st(e,t,s,i,n,o){const a=Hi.get(e);if(!a)return;let r=[];if(t==="clear")r=[...a.values()];else if(s==="length"&&D(e))a.forEach((l,d)=>{(d==="length"||d>=i)&&r.push(l)});else switch(s!==void 0&&r.push(a.get(s)),t){case"add":D(e)?hn(s)&&r.push(a.get("length")):(r.push(a.get(Ot)),qt(e)&&r.push(a.get(ji)));break;case"delete":D(e)||(r.push(a.get(Ot)),qt(e)&&r.push(a.get(ji)));break;case"set":qt(e)&&r.push(a.get(Ot));break}if(r.length===1)r[0]&&Fi(r[0]);else{const l=[];for(const d of r)d&&l.push(...d);Fi(un(l))}}function Fi(e,t){const s=D(e)?e:[...e];for(const i of s)i.computed&&Bn(i);for(const i of s)i.computed||Bn(i)}function Bn(e,t){(e!==Fe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Dr=ln("__proto__,__v_isRef,__isVue"),Jo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(pn)),Br=gn(),qr=gn(!1,!0),Wr=gn(!0),qn=Ur();function Ur(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...s){const i=G(this);for(let o=0,a=this.length;o<a;o++)Me(i,"get",o+"");const n=i[t](...s);return n===-1||n===!1?i[t](...s.map(G)):n}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...s){es();const i=G(this)[t].apply(this,s);return ts(),i}}),e}function gn(e=!1,t=!1){return function(i,n,o){if(n==="__v_isReactive")return!e;if(n==="__v_isReadonly")return e;if(n==="__v_isShallow")return t;if(n==="__v_raw"&&o===(e?t?rl:sa:t?ta:ea).get(i))return i;const a=D(i);if(!e&&a&&Y(qn,n))return Reflect.get(qn,n,o);const r=Reflect.get(i,n,o);return(pn(n)?Jo.has(n):Dr(n))||(e||Me(i,"get",n),t)?r:we(r)?a&&hn(n)?r:r.value:ne(r)?e?ia(r):ai(r):r}}const Yr=Qo(),Kr=Qo(!0);function Qo(e=!1){return function(s,i,n,o){let a=s[i];if(Vt(a)&&we(a)&&!we(n))return!1;if(!e&&(!Ws(n)&&!Vt(n)&&(a=G(a),n=G(n)),!D(s)&&we(a)&&!we(n)))return a.value=n,!0;const r=D(s)&&hn(i)?Number(i)<s.length:Y(s,i),l=Reflect.set(s,i,n,o);return s===G(o)&&(r?ms(n,a)&&st(s,"set",i,n):st(s,"add",i,n)),l}}function Vr(e,t){const s=Y(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&s&&st(e,"delete",t,void 0),i}function Gr(e,t){const s=Reflect.has(e,t);return(!pn(t)||!Jo.has(t))&&Me(e,"has",t),s}function Xr(e){return Me(e,"iterate",D(e)?"length":Ot),Reflect.ownKeys(e)}const Zo={get:Br,set:Yr,deleteProperty:Vr,has:Gr,ownKeys:Xr},Jr={get:Wr,set(e,t){return!0},deleteProperty(e,t){return!0}},Qr=$e({},Zo,{get:qr,set:Kr}),mn=e=>e,oi=e=>Reflect.getPrototypeOf(e);function Is(e,t,s=!1,i=!1){e=e.__v_raw;const n=G(e),o=G(t);s||(t!==o&&Me(n,"get",t),Me(n,"get",o));const{has:a}=oi(n),r=i?mn:s?vn:bs;if(a.call(n,t))return r(e.get(t));if(a.call(n,o))return r(e.get(o));e!==n&&e.get(t)}function Os(e,t=!1){const s=this.__v_raw,i=G(s),n=G(e);return t||(e!==n&&Me(i,"has",e),Me(i,"has",n)),e===n?s.has(e):s.has(e)||s.has(n)}function Es(e,t=!1){return e=e.__v_raw,!t&&Me(G(e),"iterate",Ot),Reflect.get(e,"size",e)}function Wn(e){e=G(e);const t=G(this);return oi(t).has.call(t,e)||(t.add(e),st(t,"add",e,e)),this}function Un(e,t){t=G(t);const s=G(this),{has:i,get:n}=oi(s);let o=i.call(s,e);o||(e=G(e),o=i.call(s,e));const a=n.call(s,e);return s.set(e,t),o?ms(t,a)&&st(s,"set",e,t):st(s,"add",e,t),this}function Yn(e){const t=G(this),{has:s,get:i}=oi(t);let n=s.call(t,e);n||(e=G(e),n=s.call(t,e)),i&&i.call(t,e);const o=t.delete(e);return n&&st(t,"delete",e,void 0),o}function Kn(){const e=G(this),t=e.size!==0,s=e.clear();return t&&st(e,"clear",void 0,void 0),s}function Ms(e,t){return function(i,n){const o=this,a=o.__v_raw,r=G(a),l=t?mn:e?vn:bs;return!e&&Me(r,"iterate",Ot),a.forEach((d,h)=>i.call(n,l(d),l(h),o))}}function Hs(e,t,s){return function(...i){const n=this.__v_raw,o=G(n),a=qt(o),r=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,d=n[e](...i),h=s?mn:t?vn:bs;return!t&&Me(o,"iterate",l?ji:Ot),{next(){const{value:u,done:f}=d.next();return f?{value:u,done:f}:{value:r?[h(u[0]),h(u[1])]:h(u),done:f}},[Symbol.iterator](){return this}}}}function dt(e){return function(...t){return e==="delete"?!1:this}}function Zr(){const e={get(o){return Is(this,o)},get size(){return Es(this)},has:Os,add:Wn,set:Un,delete:Yn,clear:Kn,forEach:Ms(!1,!1)},t={get(o){return Is(this,o,!1,!0)},get size(){return Es(this)},has:Os,add:Wn,set:Un,delete:Yn,clear:Kn,forEach:Ms(!1,!0)},s={get(o){return Is(this,o,!0)},get size(){return Es(this,!0)},has(o){return Os.call(this,o,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:Ms(!0,!1)},i={get(o){return Is(this,o,!0,!0)},get size(){return Es(this,!0)},has(o){return Os.call(this,o,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:Ms(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Hs(o,!1,!1),s[o]=Hs(o,!0,!1),t[o]=Hs(o,!1,!0),i[o]=Hs(o,!0,!0)}),[e,s,t,i]}const[el,tl,sl,il]=Zr();function bn(e,t){const s=t?e?il:sl:e?tl:el;return(i,n,o)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?i:Reflect.get(Y(s,n)&&n in i?s:i,n,o)}const nl={get:bn(!1,!1)},ol={get:bn(!1,!0)},al={get:bn(!0,!1)},ea=new WeakMap,ta=new WeakMap,sa=new WeakMap,rl=new WeakMap;function ll(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cl(e){return e.__v_skip||!Object.isExtensible(e)?0:ll(Rr(e))}function ai(e){return Vt(e)?e:yn(e,!1,Zo,nl,ea)}function dl(e){return yn(e,!1,Qr,ol,ta)}function ia(e){return yn(e,!0,Jr,al,sa)}function yn(e,t,s,i,n){if(!ne(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=n.get(e);if(o)return o;const a=cl(e);if(a===0)return e;const r=new Proxy(e,a===2?i:s);return n.set(e,r),r}function Wt(e){return Vt(e)?Wt(e.__v_raw):!!(e&&e.__v_isReactive)}function Vt(e){return!!(e&&e.__v_isReadonly)}function Ws(e){return!!(e&&e.__v_isShallow)}function na(e){return Wt(e)||Vt(e)}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function oa(e){return qs(e,"__v_skip",!0),e}const bs=e=>ne(e)?ai(e):e,vn=e=>ne(e)?ia(e):e;function aa(e){ft&&Fe&&(e=G(e),Xo(e.dep||(e.dep=un())))}function ra(e,t){e=G(e),e.dep&&Fi(e.dep)}function we(e){return!!(e&&e.__v_isRef===!0)}function Ee(e){return pl(e,!1)}function pl(e,t){return we(e)?e:new hl(e,t)}class hl{constructor(t,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?t:G(t),this._value=s?t:bs(t)}get value(){return aa(this),this._value}set value(t){const s=this.__v_isShallow||Ws(t)||Vt(t);t=s?t:G(t),ms(t,this._rawValue)&&(this._rawValue=t,this._value=s?t:bs(t),ra(this))}}function w(e){return we(e)?e.value:e}const ul={get:(e,t,s)=>w(Reflect.get(e,t,s)),set:(e,t,s,i)=>{const n=e[t];return we(n)&&!we(s)?(n.value=s,!0):Reflect.set(e,t,s,i)}};function la(e){return Wt(e)?e:new Proxy(e,ul)}var ca;class fl{constructor(t,s,i,n){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[ca]=!1,this._dirty=!0,this.effect=new fn(t,()=>{this._dirty||(this._dirty=!0,ra(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=i}get value(){const t=G(this);return aa(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}ca="__v_isReadonly";function gl(e,t,s=!1){let i,n;const o=q(e);return o?(i=e,n=De):(i=e.get,n=e.set),new fl(i,n,o||!n,s)}function gt(e,t,s,i){let n;try{n=i?e(...i):e()}catch(o){ri(o,t,s)}return n}function Be(e,t,s,i){if(q(e)){const o=gt(e,t,s,i);return o&&Wo(o)&&o.catch(a=>{ri(a,t,s)}),o}const n=[];for(let o=0;o<e.length;o++)n.push(Be(e[o],t,s,i));return n}function ri(e,t,s,i=!0){const n=t?t.vnode:null;if(t){let o=t.parent;const a=t.proxy,r=s;for(;o;){const d=o.ec;if(d){for(let h=0;h<d.length;h++)if(d[h](e,a,r)===!1)return}o=o.parent}const l=t.appContext.config.errorHandler;if(l){gt(l,null,10,[e,a,r]);return}}ml(e,s,n,i)}function ml(e,t,s,i=!0){console.error(e)}let ys=!1,zi=!1;const ve=[];let Ke=0;const Ut=[];let Qe=null,At=0;const da=Promise.resolve();let wn=null;function ot(e){const t=wn||da;return e?t.then(this?e.bind(this):e):t}function bl(e){let t=Ke+1,s=ve.length;for(;t<s;){const i=t+s>>>1;vs(ve[i])<e?t=i+1:s=i}return t}function xn(e){(!ve.length||!ve.includes(e,ys&&e.allowRecurse?Ke+1:Ke))&&(e.id==null?ve.push(e):ve.splice(bl(e.id),0,e),pa())}function pa(){!ys&&!zi&&(zi=!0,wn=da.then(ua))}function yl(e){const t=ve.indexOf(e);t>Ke&&ve.splice(t,1)}function vl(e){D(e)?Ut.push(...e):(!Qe||!Qe.includes(e,e.allowRecurse?At+1:At))&&Ut.push(e),pa()}function Vn(e,t=ys?Ke+1:0){for(;t<ve.length;t++){const s=ve[t];s&&s.pre&&(ve.splice(t,1),t--,s())}}function ha(e){if(Ut.length){const t=[...new Set(Ut)];if(Ut.length=0,Qe){Qe.push(...t);return}for(Qe=t,Qe.sort((s,i)=>vs(s)-vs(i)),At=0;At<Qe.length;At++)Qe[At]();Qe=null,At=0}}const vs=e=>e.id==null?1/0:e.id,wl=(e,t)=>{const s=vs(e)-vs(t);if(s===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return s};function ua(e){zi=!1,ys=!0,ve.sort(wl);const t=De;try{for(Ke=0;Ke<ve.length;Ke++){const s=ve[Ke];s&&s.active!==!1&&gt(s,null,14)}}finally{Ke=0,ve.length=0,ha(),ys=!1,wn=null,(ve.length||Ut.length)&&ua()}}function xl(e,t,...s){if(e.isUnmounted)return;const i=e.vnode.props||Z;let n=s;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in i){const h=`${a==="modelValue"?"model":a}Modifiers`,{number:u,trim:f}=i[h]||Z;f&&(n=s.map(T=>T.trim())),u&&(n=s.map(Mi))}let r,l=i[r=$i(t)]||i[r=$i(Ve(t))];!l&&o&&(l=i[r=$i(Ht(t))]),l&&Be(l,e,6,n);const d=i[r+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,Be(d,e,6,n)}}function fa(e,t,s=!1){const i=t.emitsCache,n=i.get(e);if(n!==void 0)return n;const o=e.emits;let a={},r=!1;if(!q(e)){const l=d=>{const h=fa(d,t,!0);h&&(r=!0,$e(a,h))};!s&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!r?(ne(e)&&i.set(e,null),null):(D(o)?o.forEach(l=>a[l]=null):$e(a,o),ne(e)&&i.set(e,a),a)}function li(e,t){return!e||!ti(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,Ht(t))||Y(e,t))}let Te=null,ci=null;function Us(e){const t=Te;return Te=e,ci=e&&e.type.__scopeId||null,t}function He(e){ci=e}function Ne(){ci=null}const _l=e=>Le;function Le(e,t=Te,s){if(!t||e._n)return e;const i=(...n)=>{i._d&&no(-1);const o=Us(t),a=e(...n);return Us(o),i._d&&no(1),a};return i._n=!0,i._c=!0,i._d=!0,i}function Ci(e){const{type:t,vnode:s,proxy:i,withProxy:n,props:o,propsOptions:[a],slots:r,attrs:l,emit:d,render:h,renderCache:u,data:f,setupState:T,ctx:L,inheritAttrs:A}=e;let R,I;const E=Us(e);try{if(s.shapeFlag&4){const z=n||i;R=Ye(h.call(z,z,u,o,T,f,L)),I=l}else{const z=t;R=Ye(z.length>1?z(o,{attrs:l,slots:r,emit:d}):z(o,null)),I=t.props?l:kl(l)}}catch(z){ds.length=0,ri(z,e,1),R=W(vt)}let M=R;if(I&&A!==!1){const z=Object.keys(I),{shapeFlag:oe}=M;z.length&&oe&7&&(a&&z.some(cn)&&(I=Tl(I,a)),M=Gt(M,I))}return s.dirs&&(M=Gt(M),M.dirs=M.dirs?M.dirs.concat(s.dirs):s.dirs),s.transition&&(M.transition=s.transition),R=M,Us(E),R}const kl=e=>{let t;for(const s in e)(s==="class"||s==="style"||ti(s))&&((t||(t={}))[s]=e[s]);return t},Tl=(e,t)=>{const s={};for(const i in e)(!cn(i)||!(i.slice(9)in t))&&(s[i]=e[i]);return s};function $l(e,t,s){const{props:i,children:n,component:o}=e,{props:a,children:r,patchFlag:l}=t,d=o.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&l>=0){if(l&1024)return!0;if(l&16)return i?Gn(i,a,d):!!a;if(l&8){const h=t.dynamicProps;for(let u=0;u<h.length;u++){const f=h[u];if(a[f]!==i[f]&&!li(d,f))return!0}}}else return(n||r)&&(!r||!r.$stable)?!0:i===a?!1:i?a?Gn(i,a,d):!0:!!a;return!1}function Gn(e,t,s){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let n=0;n<i.length;n++){const o=i[n];if(t[o]!==e[o]&&!li(s,o))return!0}return!1}function Cl({vnode:e,parent:t},s){for(;t&&t.subTree===e;)(e=t.vnode).el=s,t=t.parent}const Sl=e=>e.__isSuspense;function Pl(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):vl(e)}function Ll(e,t){if(be){let s=be.provides;const i=be.parent&&be.parent.provides;i===s&&(s=be.provides=Object.create(i)),s[e]=t}}function Si(e,t,s=!1){const i=be||Te;if(i){const n=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(n&&e in n)return n[e];if(arguments.length>1)return s&&q(t)?t.call(i.proxy):t}}const Xn={};function mt(e,t,s){return ga(e,t,s)}function ga(e,t,{immediate:s,deep:i,flush:n,onTrack:o,onTrigger:a}=Z){const r=be;let l,d=!1,h=!1;if(we(e)?(l=()=>e.value,d=Ws(e)):Wt(e)?(l=()=>e,i=!0):D(e)?(h=!0,d=e.some(I=>Wt(I)||Ws(I)),l=()=>e.map(I=>{if(we(I))return I.value;if(Wt(I))return It(I);if(q(I))return gt(I,r,2)})):q(e)?t?l=()=>gt(e,r,2):l=()=>{if(!(r&&r.isUnmounted))return u&&u(),Be(e,r,3,[f])}:l=De,t&&i){const I=l;l=()=>It(I())}let u,f=I=>{u=R.onStop=()=>{gt(I,r,4)}};if(_s)return f=De,t?s&&Be(t,r,3,[l(),h?[]:void 0,f]):l(),De;let T=h?[]:Xn;const L=()=>{if(!!R.active)if(t){const I=R.run();(i||d||(h?I.some((E,M)=>ms(E,T[M])):ms(I,T)))&&(u&&u(),Be(t,r,3,[I,T===Xn?void 0:T,f]),T=I)}else R.run()};L.allowRecurse=!!t;let A;n==="sync"?A=L:n==="post"?A=()=>Se(L,r&&r.suspense):(L.pre=!0,r&&(L.id=r.uid),A=()=>xn(L));const R=new fn(l,A);return t?s?L():T=R.run():n==="post"?Se(R.run.bind(R),r&&r.suspense):R.run(),()=>{R.stop(),r&&r.scope&&dn(r.scope.effects,R)}}function Al(e,t,s){const i=this.proxy,n=pe(e)?e.includes(".")?ma(i,e):()=>i[e]:e.bind(i,i);let o;q(t)?o=t:(o=t.handler,s=t);const a=be;Xt(this);const r=ga(n,o.bind(i),s);return a?Xt(a):Et(),r}function ma(e,t){const s=t.split(".");return()=>{let i=e;for(let n=0;n<s.length&&i;n++)i=i[s[n]];return i}}function It(e,t){if(!ne(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),we(e))It(e.value,t);else if(D(e))for(let s=0;s<e.length;s++)It(e[s],t);else if(qo(e)||qt(e))e.forEach(s=>{It(s,t)});else if(Yo(e))for(const s in e)It(e[s],t);return e}function ee(e){return q(e)?{setup:e,name:e.name}:e}const cs=e=>!!e.type.__asyncLoader,ba=e=>e.type.__isKeepAlive;function Rl(e,t){ya(e,"a",t)}function Il(e,t){ya(e,"da",t)}function ya(e,t,s=be){const i=e.__wdc||(e.__wdc=()=>{let n=s;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(di(t,i,s),s){let n=s.parent;for(;n&&n.parent;)ba(n.parent.vnode)&&Ol(i,t,s,n),n=n.parent}}function Ol(e,t,s,i){const n=di(t,e,i,!0);wa(()=>{dn(i[t],n)},s)}function di(e,t,s=be,i=!1){if(s){const n=s[e]||(s[e]=[]),o=t.__weh||(t.__weh=(...a)=>{if(s.isUnmounted)return;es(),Xt(s);const r=Be(t,s,e,a);return Et(),ts(),r});return i?n.unshift(o):n.push(o),o}}const at=e=>(t,s=be)=>(!_s||e==="sp")&&di(e,t,s),El=at("bm"),va=at("m"),Ml=at("bu"),Hl=at("u"),Nl=at("bum"),wa=at("um"),jl=at("sp"),Fl=at("rtg"),zl=at("rtc");function Dl(e,t=be){di("ec",e,t)}function Bl(e,t){const s=Te;if(s===null)return e;const i=hi(s)||s.proxy,n=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[a,r,l,d=Z]=t[o];q(a)&&(a={mounted:a,updated:a}),a.deep&&It(r),n.push({dir:a,instance:i,value:r,oldValue:void 0,arg:l,modifiers:d})}return e}function Tt(e,t,s,i){const n=e.dirs,o=t&&t.dirs;for(let a=0;a<n.length;a++){const r=n[a];o&&(r.oldValue=o[a].value);let l=r.dir[i];l&&(es(),Be(l,s,8,[e.el,r,e,t]),ts())}}const _n="components";function ws(e,t){return ka(_n,e,!0,t)||e}const xa=Symbol();function _a(e){return pe(e)?ka(_n,e,!1)||e:e||xa}function ka(e,t,s=!0,i=!1){const n=Te||be;if(n){const o=n.type;if(e===_n){const r=gc(o,!1);if(r&&(r===t||r===Ve(t)||r===ni(Ve(t))))return o}const a=Jn(n[e]||o[e],t)||Jn(n.appContext[e],t);return!a&&i?o:a}}function Jn(e,t){return e&&(e[t]||e[Ve(t)]||e[ni(Ve(t))])}function Pe(e,t,s,i){let n;const o=s&&s[i];if(D(e)||pe(e)){n=new Array(e.length);for(let a=0,r=e.length;a<r;a++)n[a]=t(e[a],a,void 0,o&&o[a])}else if(typeof e=="number"){n=new Array(e);for(let a=0;a<e;a++)n[a]=t(a+1,a,void 0,o&&o[a])}else if(ne(e))if(e[Symbol.iterator])n=Array.from(e,(a,r)=>t(a,r,void 0,o&&o[r]));else{const a=Object.keys(e);n=new Array(a.length);for(let r=0,l=a.length;r<l;r++){const d=a[r];n[r]=t(e[d],d,r,o&&o[r])}}else n=[];return s&&(s[i]=n),n}function yt(e,t,s={},i,n){if(Te.isCE||Te.parent&&cs(Te.parent)&&Te.parent.isCE)return W("slot",t==="default"?null:{name:t},i&&i());let o=e[t];o&&o._c&&(o._d=!1),k();const a=o&&Ta(o(s)),r=Ge(F,{key:s.key||a&&a.key||`_${t}`},a||(i?i():[]),a&&e._===1?64:-2);return!n&&r.scopeId&&(r.slotScopeIds=[r.scopeId+"-s"]),o&&o._c&&(o._d=!0),r}function Ta(e){return e.some(t=>Vs(t)?!(t.type===vt||t.type===F&&!Ta(t.children)):!0)?e:null}const Di=e=>e?Ha(e)?hi(e)||e.proxy:Di(e.parent):null,Ys=$e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Di(e.parent),$root:e=>Di(e.root),$emit:e=>e.emit,$options:e=>kn(e),$forceUpdate:e=>e.f||(e.f=()=>xn(e.update)),$nextTick:e=>e.n||(e.n=ot.bind(e.proxy)),$watch:e=>Al.bind(e)}),ql={get({_:e},t){const{ctx:s,setupState:i,data:n,props:o,accessCache:a,type:r,appContext:l}=e;let d;if(t[0]!=="$"){const T=a[t];if(T!==void 0)switch(T){case 1:return i[t];case 2:return n[t];case 4:return s[t];case 3:return o[t]}else{if(i!==Z&&Y(i,t))return a[t]=1,i[t];if(n!==Z&&Y(n,t))return a[t]=2,n[t];if((d=e.propsOptions[0])&&Y(d,t))return a[t]=3,o[t];if(s!==Z&&Y(s,t))return a[t]=4,s[t];Bi&&(a[t]=0)}}const h=Ys[t];let u,f;if(h)return t==="$attrs"&&Me(e,"get",t),h(e);if((u=r.__cssModules)&&(u=u[t]))return u;if(s!==Z&&Y(s,t))return a[t]=4,s[t];if(f=l.config.globalProperties,Y(f,t))return f[t]},set({_:e},t,s){const{data:i,setupState:n,ctx:o}=e;return n!==Z&&Y(n,t)?(n[t]=s,!0):i!==Z&&Y(i,t)?(i[t]=s,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:i,appContext:n,propsOptions:o}},a){let r;return!!s[a]||e!==Z&&Y(e,a)||t!==Z&&Y(t,a)||(r=o[0])&&Y(r,a)||Y(i,a)||Y(Ys,a)||Y(n.config.globalProperties,a)},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:Y(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};let Bi=!0;function Wl(e){const t=kn(e),s=e.proxy,i=e.ctx;Bi=!1,t.beforeCreate&&Qn(t.beforeCreate,e,"bc");const{data:n,computed:o,methods:a,watch:r,provide:l,inject:d,created:h,beforeMount:u,mounted:f,beforeUpdate:T,updated:L,activated:A,deactivated:R,beforeDestroy:I,beforeUnmount:E,destroyed:M,unmounted:z,render:oe,renderTracked:ue,renderTriggered:fe,errorCaptured:ie,serverPrefetch:B,expose:re,inheritAttrs:ae,components:ce,directives:_e,filters:ge}=t;if(d&&Ul(d,i,null,e.appContext.config.unwrapInjectedRef),a)for(const le in a){const te=a[le];q(te)&&(i[le]=te.bind(s))}if(n){const le=n.call(s,s);ne(le)&&(e.data=ai(le))}if(Bi=!0,o)for(const le in o){const te=o[le],Xe=q(te)?te.bind(s,s):q(te.get)?te.get.bind(s,s):De,_i=!q(te)&&q(te.set)?te.set.bind(s):De,ss=de({get:Xe,set:_i});Object.defineProperty(i,le,{enumerable:!0,configurable:!0,get:()=>ss.value,set:jt=>ss.value=jt})}if(r)for(const le in r)$a(r[le],i,s,le);if(l){const le=q(l)?l.call(s):l;Reflect.ownKeys(le).forEach(te=>{Ll(te,le[te])})}h&&Qn(h,e,"c");function Ce(le,te){D(te)?te.forEach(Xe=>le(Xe.bind(s))):te&&le(te.bind(s))}if(Ce(El,u),Ce(va,f),Ce(Ml,T),Ce(Hl,L),Ce(Rl,A),Ce(Il,R),Ce(Dl,ie),Ce(zl,ue),Ce(Fl,fe),Ce(Nl,E),Ce(wa,z),Ce(jl,B),D(re))if(re.length){const le=e.exposed||(e.exposed={});re.forEach(te=>{Object.defineProperty(le,te,{get:()=>s[te],set:Xe=>s[te]=Xe})})}else e.exposed||(e.exposed={});oe&&e.render===De&&(e.render=oe),ae!=null&&(e.inheritAttrs=ae),ce&&(e.components=ce),_e&&(e.directives=_e)}function Ul(e,t,s=De,i=!1){D(e)&&(e=qi(e));for(const n in e){const o=e[n];let a;ne(o)?"default"in o?a=Si(o.from||n,o.default,!0):a=Si(o.from||n):a=Si(o),we(a)&&i?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>a.value,set:r=>a.value=r}):t[n]=a}}function Qn(e,t,s){Be(D(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,s)}function $a(e,t,s,i){const n=i.includes(".")?ma(s,i):()=>s[i];if(pe(e)){const o=t[e];q(o)&&mt(n,o)}else if(q(e))mt(n,e.bind(s));else if(ne(e))if(D(e))e.forEach(o=>$a(o,t,s,i));else{const o=q(e.handler)?e.handler.bind(s):t[e.handler];q(o)&&mt(n,o,e)}}function kn(e){const t=e.type,{mixins:s,extends:i}=t,{mixins:n,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,r=o.get(t);let l;return r?l=r:!n.length&&!s&&!i?l=t:(l={},n.length&&n.forEach(d=>Ks(l,d,a,!0)),Ks(l,t,a)),ne(t)&&o.set(t,l),l}function Ks(e,t,s,i=!1){const{mixins:n,extends:o}=t;o&&Ks(e,o,s,!0),n&&n.forEach(a=>Ks(e,a,s,!0));for(const a in t)if(!(i&&a==="expose")){const r=Yl[a]||s&&s[a];e[a]=r?r(e[a],t[a]):t[a]}return e}const Yl={data:Zn,props:Pt,emits:Pt,methods:Pt,computed:Pt,beforeCreate:ke,created:ke,beforeMount:ke,mounted:ke,beforeUpdate:ke,updated:ke,beforeDestroy:ke,beforeUnmount:ke,destroyed:ke,unmounted:ke,activated:ke,deactivated:ke,errorCaptured:ke,serverPrefetch:ke,components:Pt,directives:Pt,watch:Vl,provide:Zn,inject:Kl};function Zn(e,t){return t?e?function(){return $e(q(e)?e.call(this,this):e,q(t)?t.call(this,this):t)}:t:e}function Kl(e,t){return Pt(qi(e),qi(t))}function qi(e){if(D(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function ke(e,t){return e?[...new Set([].concat(e,t))]:t}function Pt(e,t){return e?$e($e(Object.create(null),e),t):t}function Vl(e,t){if(!e)return t;if(!t)return e;const s=$e(Object.create(null),e);for(const i in t)s[i]=ke(e[i],t[i]);return s}function Gl(e,t,s,i=!1){const n={},o={};qs(o,pi,1),e.propsDefaults=Object.create(null),Ca(e,t,n,o);for(const a in e.propsOptions[0])a in n||(n[a]=void 0);s?e.props=i?n:dl(n):e.type.props?e.props=n:e.props=o,e.attrs=o}function Xl(e,t,s,i){const{props:n,attrs:o,vnode:{patchFlag:a}}=e,r=G(n),[l]=e.propsOptions;let d=!1;if((i||a>0)&&!(a&16)){if(a&8){const h=e.vnode.dynamicProps;for(let u=0;u<h.length;u++){let f=h[u];if(li(e.emitsOptions,f))continue;const T=t[f];if(l)if(Y(o,f))T!==o[f]&&(o[f]=T,d=!0);else{const L=Ve(f);n[L]=Wi(l,r,L,T,e,!1)}else T!==o[f]&&(o[f]=T,d=!0)}}}else{Ca(e,t,n,o)&&(d=!0);let h;for(const u in r)(!t||!Y(t,u)&&((h=Ht(u))===u||!Y(t,h)))&&(l?s&&(s[u]!==void 0||s[h]!==void 0)&&(n[u]=Wi(l,r,u,void 0,e,!0)):delete n[u]);if(o!==r)for(const u in o)(!t||!Y(t,u)&&!0)&&(delete o[u],d=!0)}d&&st(e,"set","$attrs")}function Ca(e,t,s,i){const[n,o]=e.propsOptions;let a=!1,r;if(t)for(let l in t){if(Fs(l))continue;const d=t[l];let h;n&&Y(n,h=Ve(l))?!o||!o.includes(h)?s[h]=d:(r||(r={}))[h]=d:li(e.emitsOptions,l)||(!(l in i)||d!==i[l])&&(i[l]=d,a=!0)}if(o){const l=G(s),d=r||Z;for(let h=0;h<o.length;h++){const u=o[h];s[u]=Wi(n,l,u,d[u],e,!Y(d,u))}}return a}function Wi(e,t,s,i,n,o){const a=e[s];if(a!=null){const r=Y(a,"default");if(r&&i===void 0){const l=a.default;if(a.type!==Function&&q(l)){const{propsDefaults:d}=n;s in d?i=d[s]:(Xt(n),i=d[s]=l.call(null,t),Et())}else i=l}a[0]&&(o&&!r?i=!1:a[1]&&(i===""||i===Ht(s))&&(i=!0))}return i}function Sa(e,t,s=!1){const i=t.propsCache,n=i.get(e);if(n)return n;const o=e.props,a={},r=[];let l=!1;if(!q(e)){const h=u=>{l=!0;const[f,T]=Sa(u,t,!0);$e(a,f),T&&r.push(...T)};!s&&t.mixins.length&&t.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!o&&!l)return ne(e)&&i.set(e,Bt),Bt;if(D(o))for(let h=0;h<o.length;h++){const u=Ve(o[h]);eo(u)&&(a[u]=Z)}else if(o)for(const h in o){const u=Ve(h);if(eo(u)){const f=o[h],T=a[u]=D(f)||q(f)?{type:f}:f;if(T){const L=io(Boolean,T.type),A=io(String,T.type);T[0]=L>-1,T[1]=A<0||L<A,(L>-1||Y(T,"default"))&&r.push(u)}}}const d=[a,r];return ne(e)&&i.set(e,d),d}function eo(e){return e[0]!=="$"}function to(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function so(e,t){return to(e)===to(t)}function io(e,t){return D(t)?t.findIndex(s=>so(s,e)):q(t)&&so(t,e)?0:-1}const Pa=e=>e[0]==="_"||e==="$stable",Tn=e=>D(e)?e.map(Ye):[Ye(e)],Jl=(e,t,s)=>{if(t._n)return t;const i=Le((...n)=>Tn(t(...n)),s);return i._c=!1,i},La=(e,t,s)=>{const i=e._ctx;for(const n in e){if(Pa(n))continue;const o=e[n];if(q(o))t[n]=Jl(n,o,i);else if(o!=null){const a=Tn(o);t[n]=()=>a}}},Aa=(e,t)=>{const s=Tn(t);e.slots.default=()=>s},Ql=(e,t)=>{if(e.vnode.shapeFlag&32){const s=t._;s?(e.slots=G(t),qs(t,"_",s)):La(t,e.slots={})}else e.slots={},t&&Aa(e,t);qs(e.slots,pi,1)},Zl=(e,t,s)=>{const{vnode:i,slots:n}=e;let o=!0,a=Z;if(i.shapeFlag&32){const r=t._;r?s&&r===1?o=!1:($e(n,t),!s&&r===1&&delete n._):(o=!t.$stable,La(t,n)),a=t}else t&&(Aa(e,t),a={default:1});if(o)for(const r in n)!Pa(r)&&!(r in a)&&delete n[r]};function Ra(){return{app:null,config:{isNativeTag:Pr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ec=0;function tc(e,t){return function(i,n=null){q(i)||(i=Object.assign({},i)),n!=null&&!ne(n)&&(n=null);const o=Ra(),a=new Set;let r=!1;const l=o.app={_uid:ec++,_component:i,_props:n,_container:null,_context:o,_instance:null,version:yc,get config(){return o.config},set config(d){},use(d,...h){return a.has(d)||(d&&q(d.install)?(a.add(d),d.install(l,...h)):q(d)&&(a.add(d),d(l,...h))),l},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),l},component(d,h){return h?(o.components[d]=h,l):o.components[d]},directive(d,h){return h?(o.directives[d]=h,l):o.directives[d]},mount(d,h,u){if(!r){const f=W(i,n);return f.appContext=o,h&&t?t(f,d):e(f,d,u),r=!0,l._container=d,d.__vue_app__=l,hi(f.component)||f.component.proxy}},unmount(){r&&(e(null,l._container),delete l._container.__vue_app__)},provide(d,h){return o.provides[d]=h,l}};return l}}function Ui(e,t,s,i,n=!1){if(D(e)){e.forEach((f,T)=>Ui(f,t&&(D(t)?t[T]:t),s,i,n));return}if(cs(i)&&!n)return;const o=i.shapeFlag&4?hi(i.component)||i.component.proxy:i.el,a=n?null:o,{i:r,r:l}=e,d=t&&t.r,h=r.refs===Z?r.refs={}:r.refs,u=r.setupState;if(d!=null&&d!==l&&(pe(d)?(h[d]=null,Y(u,d)&&(u[d]=null)):we(d)&&(d.value=null)),q(l))gt(l,r,12,[a,h]);else{const f=pe(l),T=we(l);if(f||T){const L=()=>{if(e.f){const A=f?h[l]:l.value;n?D(A)&&dn(A,o):D(A)?A.includes(o)||A.push(o):f?(h[l]=[o],Y(u,l)&&(u[l]=h[l])):(l.value=[o],e.k&&(h[e.k]=l.value))}else f?(h[l]=a,Y(u,l)&&(u[l]=a)):T&&(l.value=a,e.k&&(h[e.k]=a))};a?(L.id=-1,Se(L,s)):L()}}}const Se=Pl;function sc(e){return ic(e)}function ic(e,t){const s=Er();s.__VUE__=!0;const{insert:i,remove:n,patchProp:o,createElement:a,createText:r,createComment:l,setText:d,setElementText:h,parentNode:u,nextSibling:f,setScopeId:T=De,cloneNode:L,insertStaticContent:A}=e,R=(c,p,g,y=null,b=null,_=null,P=!1,x=null,$=!!p.dynamicChildren)=>{if(c===p)return;c&&!ns(c,p)&&(y=Rs(c),ct(c,b,_,!0),c=null),p.patchFlag===-2&&($=!1,p.dynamicChildren=null);const{type:v,ref:H,shapeFlag:O}=p;switch(v){case $n:I(c,p,g,y);break;case vt:E(c,p,g,y);break;case Pi:c==null&&M(p,g,y,P);break;case F:_e(c,p,g,y,b,_,P,x,$);break;default:O&1?ue(c,p,g,y,b,_,P,x,$):O&6?ge(c,p,g,y,b,_,P,x,$):(O&64||O&128)&&v.process(c,p,g,y,b,_,P,x,$,Ft)}H!=null&&b&&Ui(H,c&&c.ref,_,p||c,!p)},I=(c,p,g,y)=>{if(c==null)i(p.el=r(p.children),g,y);else{const b=p.el=c.el;p.children!==c.children&&d(b,p.children)}},E=(c,p,g,y)=>{c==null?i(p.el=l(p.children||""),g,y):p.el=c.el},M=(c,p,g,y)=>{[c.el,c.anchor]=A(c.children,p,g,y,c.el,c.anchor)},z=({el:c,anchor:p},g,y)=>{let b;for(;c&&c!==p;)b=f(c),i(c,g,y),c=b;i(p,g,y)},oe=({el:c,anchor:p})=>{let g;for(;c&&c!==p;)g=f(c),n(c),c=g;n(p)},ue=(c,p,g,y,b,_,P,x,$)=>{P=P||p.type==="svg",c==null?fe(p,g,y,b,_,P,x,$):re(c,p,b,_,P,x,$)},fe=(c,p,g,y,b,_,P,x)=>{let $,v;const{type:H,props:O,shapeFlag:N,transition:j,patchFlag:K,dirs:J}=c;if(c.el&&L!==void 0&&K===-1)$=c.el=L(c.el);else{if($=c.el=a(c.type,_,O&&O.is,O),N&8?h($,c.children):N&16&&B(c.children,$,null,y,b,_&&H!=="foreignObject",P,x),J&&Tt(c,null,y,"created"),O){for(const se in O)se!=="value"&&!Fs(se)&&o($,se,null,O[se],_,c.children,y,b,Je);"value"in O&&o($,"value",null,O.value),(v=O.onVnodeBeforeMount)&&We(v,y,c)}ie($,c,c.scopeId,P,y)}J&&Tt(c,null,y,"beforeMount");const Q=(!b||b&&!b.pendingBranch)&&j&&!j.persisted;Q&&j.beforeEnter($),i($,p,g),((v=O&&O.onVnodeMounted)||Q||J)&&Se(()=>{v&&We(v,y,c),Q&&j.enter($),J&&Tt(c,null,y,"mounted")},b)},ie=(c,p,g,y,b)=>{if(g&&T(c,g),y)for(let _=0;_<y.length;_++)T(c,y[_]);if(b){let _=b.subTree;if(p===_){const P=b.vnode;ie(c,P,P.scopeId,P.slotScopeIds,b.parent)}}},B=(c,p,g,y,b,_,P,x,$=0)=>{for(let v=$;v<c.length;v++){const H=c[v]=x?ut(c[v]):Ye(c[v]);R(null,H,p,g,y,b,_,P,x)}},re=(c,p,g,y,b,_,P)=>{const x=p.el=c.el;let{patchFlag:$,dynamicChildren:v,dirs:H}=p;$|=c.patchFlag&16;const O=c.props||Z,N=p.props||Z;let j;g&&$t(g,!1),(j=N.onVnodeBeforeUpdate)&&We(j,g,p,c),H&&Tt(p,c,g,"beforeUpdate"),g&&$t(g,!0);const K=b&&p.type!=="foreignObject";if(v?ae(c.dynamicChildren,v,x,g,y,K,_):P||Xe(c,p,x,null,g,y,K,_,!1),$>0){if($&16)ce(x,p,O,N,g,y,b);else if($&2&&O.class!==N.class&&o(x,"class",null,N.class,b),$&4&&o(x,"style",O.style,N.style,b),$&8){const J=p.dynamicProps;for(let Q=0;Q<J.length;Q++){const se=J[Q],je=O[se],zt=N[se];(zt!==je||se==="value")&&o(x,se,je,zt,b,c.children,g,y,Je)}}$&1&&c.children!==p.children&&h(x,p.children)}else!P&&v==null&&ce(x,p,O,N,g,y,b);((j=N.onVnodeUpdated)||H)&&Se(()=>{j&&We(j,g,p,c),H&&Tt(p,c,g,"updated")},y)},ae=(c,p,g,y,b,_,P)=>{for(let x=0;x<p.length;x++){const $=c[x],v=p[x],H=$.el&&($.type===F||!ns($,v)||$.shapeFlag&70)?u($.el):g;R($,v,H,null,y,b,_,P,!0)}},ce=(c,p,g,y,b,_,P)=>{if(g!==y){for(const x in y){if(Fs(x))continue;const $=y[x],v=g[x];$!==v&&x!=="value"&&o(c,x,v,$,P,p.children,b,_,Je)}if(g!==Z)for(const x in g)!Fs(x)&&!(x in y)&&o(c,x,g[x],null,P,p.children,b,_,Je);"value"in y&&o(c,"value",g.value,y.value)}},_e=(c,p,g,y,b,_,P,x,$)=>{const v=p.el=c?c.el:r(""),H=p.anchor=c?c.anchor:r("");let{patchFlag:O,dynamicChildren:N,slotScopeIds:j}=p;j&&(x=x?x.concat(j):j),c==null?(i(v,g,y),i(H,g,y),B(p.children,g,H,b,_,P,x,$)):O>0&&O&64&&N&&c.dynamicChildren?(ae(c.dynamicChildren,N,g,b,_,P,x),(p.key!=null||b&&p===b.subTree)&&Ia(c,p,!0)):Xe(c,p,g,H,b,_,P,x,$)},ge=(c,p,g,y,b,_,P,x,$)=>{p.slotScopeIds=x,c==null?p.shapeFlag&512?b.ctx.activate(p,g,y,P,$):kt(p,g,y,b,_,P,$):Ce(c,p,$)},kt=(c,p,g,y,b,_,P)=>{const x=c.component=dc(c,y,b);if(ba(c)&&(x.ctx.renderer=Ft),pc(x),x.asyncDep){if(b&&b.registerDep(x,le),!c.el){const $=x.subTree=W(vt);E(null,$,p,g)}return}le(x,c,p,g,b,_,P)},Ce=(c,p,g)=>{const y=p.component=c.component;if($l(c,p,g))if(y.asyncDep&&!y.asyncResolved){te(y,p,g);return}else y.next=p,yl(y.update),y.update();else p.el=c.el,y.vnode=p},le=(c,p,g,y,b,_,P)=>{const x=()=>{if(c.isMounted){let{next:H,bu:O,u:N,parent:j,vnode:K}=c,J=H,Q;$t(c,!1),H?(H.el=K.el,te(c,H,P)):H=K,O&&zs(O),(Q=H.props&&H.props.onVnodeBeforeUpdate)&&We(Q,j,H,K),$t(c,!0);const se=Ci(c),je=c.subTree;c.subTree=se,R(je,se,u(je.el),Rs(je),c,b,_),H.el=se.el,J===null&&Cl(c,se.el),N&&Se(N,b),(Q=H.props&&H.props.onVnodeUpdated)&&Se(()=>We(Q,j,H,K),b)}else{let H;const{el:O,props:N}=p,{bm:j,m:K,parent:J}=c,Q=cs(p);if($t(c,!1),j&&zs(j),!Q&&(H=N&&N.onVnodeBeforeMount)&&We(H,J,p),$t(c,!0),O&&Ti){const se=()=>{c.subTree=Ci(c),Ti(O,c.subTree,c,b,null)};Q?p.type.__asyncLoader().then(()=>!c.isUnmounted&&se()):se()}else{const se=c.subTree=Ci(c);R(null,se,g,y,c,b,_),p.el=se.el}if(K&&Se(K,b),!Q&&(H=N&&N.onVnodeMounted)){const se=p;Se(()=>We(H,J,se),b)}(p.shapeFlag&256||J&&cs(J.vnode)&&J.vnode.shapeFlag&256)&&c.a&&Se(c.a,b),c.isMounted=!0,p=g=y=null}},$=c.effect=new fn(x,()=>xn(v),c.scope),v=c.update=()=>$.run();v.id=c.uid,$t(c,!0),v()},te=(c,p,g)=>{p.component=c;const y=c.vnode.props;c.vnode=p,c.next=null,Xl(c,p.props,y,g),Zl(c,p.children,g),es(),Vn(),ts()},Xe=(c,p,g,y,b,_,P,x,$=!1)=>{const v=c&&c.children,H=c?c.shapeFlag:0,O=p.children,{patchFlag:N,shapeFlag:j}=p;if(N>0){if(N&128){ss(v,O,g,y,b,_,P,x,$);return}else if(N&256){_i(v,O,g,y,b,_,P,x,$);return}}j&8?(H&16&&Je(v,b,_),O!==v&&h(g,O)):H&16?j&16?ss(v,O,g,y,b,_,P,x,$):Je(v,b,_,!0):(H&8&&h(g,""),j&16&&B(O,g,y,b,_,P,x,$))},_i=(c,p,g,y,b,_,P,x,$)=>{c=c||Bt,p=p||Bt;const v=c.length,H=p.length,O=Math.min(v,H);let N;for(N=0;N<O;N++){const j=p[N]=$?ut(p[N]):Ye(p[N]);R(c[N],j,g,null,b,_,P,x,$)}v>H?Je(c,b,_,!0,!1,O):B(p,g,y,b,_,P,x,$,O)},ss=(c,p,g,y,b,_,P,x,$)=>{let v=0;const H=p.length;let O=c.length-1,N=H-1;for(;v<=O&&v<=N;){const j=c[v],K=p[v]=$?ut(p[v]):Ye(p[v]);if(ns(j,K))R(j,K,g,null,b,_,P,x,$);else break;v++}for(;v<=O&&v<=N;){const j=c[O],K=p[N]=$?ut(p[N]):Ye(p[N]);if(ns(j,K))R(j,K,g,null,b,_,P,x,$);else break;O--,N--}if(v>O){if(v<=N){const j=N+1,K=j<H?p[j].el:y;for(;v<=N;)R(null,p[v]=$?ut(p[v]):Ye(p[v]),g,K,b,_,P,x,$),v++}}else if(v>N)for(;v<=O;)ct(c[v],b,_,!0),v++;else{const j=v,K=v,J=new Map;for(v=K;v<=N;v++){const Re=p[v]=$?ut(p[v]):Ye(p[v]);Re.key!=null&&J.set(Re.key,v)}let Q,se=0;const je=N-K+1;let zt=!1,Nn=0;const is=new Array(je);for(v=0;v<je;v++)is[v]=0;for(v=j;v<=O;v++){const Re=c[v];if(se>=je){ct(Re,b,_,!0);continue}let qe;if(Re.key!=null)qe=J.get(Re.key);else for(Q=K;Q<=N;Q++)if(is[Q-K]===0&&ns(Re,p[Q])){qe=Q;break}qe===void 0?ct(Re,b,_,!0):(is[qe-K]=v+1,qe>=Nn?Nn=qe:zt=!0,R(Re,p[qe],g,null,b,_,P,x,$),se++)}const jn=zt?nc(is):Bt;for(Q=jn.length-1,v=je-1;v>=0;v--){const Re=K+v,qe=p[Re],Fn=Re+1<H?p[Re+1].el:y;is[v]===0?R(null,qe,g,Fn,b,_,P,x,$):zt&&(Q<0||v!==jn[Q]?jt(qe,g,Fn,2):Q--)}}},jt=(c,p,g,y,b=null)=>{const{el:_,type:P,transition:x,children:$,shapeFlag:v}=c;if(v&6){jt(c.component.subTree,p,g,y);return}if(v&128){c.suspense.move(p,g,y);return}if(v&64){P.move(c,p,g,Ft);return}if(P===F){i(_,p,g);for(let O=0;O<$.length;O++)jt($[O],p,g,y);i(c.anchor,p,g);return}if(P===Pi){z(c,p,g);return}if(y!==2&&v&1&&x)if(y===0)x.beforeEnter(_),i(_,p,g),Se(()=>x.enter(_),b);else{const{leave:O,delayLeave:N,afterLeave:j}=x,K=()=>i(_,p,g),J=()=>{O(_,()=>{K(),j&&j()})};N?N(_,K,J):J()}else i(_,p,g)},ct=(c,p,g,y=!1,b=!1)=>{const{type:_,props:P,ref:x,children:$,dynamicChildren:v,shapeFlag:H,patchFlag:O,dirs:N}=c;if(x!=null&&Ui(x,null,g,c,!0),H&256){p.ctx.deactivate(c);return}const j=H&1&&N,K=!cs(c);let J;if(K&&(J=P&&P.onVnodeBeforeUnmount)&&We(J,p,c),H&6)_r(c.component,g,y);else{if(H&128){c.suspense.unmount(g,y);return}j&&Tt(c,null,p,"beforeUnmount"),H&64?c.type.remove(c,p,g,b,Ft,y):v&&(_!==F||O>0&&O&64)?Je(v,p,g,!1,!0):(_===F&&O&384||!b&&H&16)&&Je($,p,g),y&&Mn(c)}(K&&(J=P&&P.onVnodeUnmounted)||j)&&Se(()=>{J&&We(J,p,c),j&&Tt(c,null,p,"unmounted")},g)},Mn=c=>{const{type:p,el:g,anchor:y,transition:b}=c;if(p===F){xr(g,y);return}if(p===Pi){oe(c);return}const _=()=>{n(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(c.shapeFlag&1&&b&&!b.persisted){const{leave:P,delayLeave:x}=b,$=()=>P(g,_);x?x(c.el,_,$):$()}else _()},xr=(c,p)=>{let g;for(;c!==p;)g=f(c),n(c),c=g;n(p)},_r=(c,p,g)=>{const{bum:y,scope:b,update:_,subTree:P,um:x}=c;y&&zs(y),b.stop(),_&&(_.active=!1,ct(P,c,p,g)),x&&Se(x,p),Se(()=>{c.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Je=(c,p,g,y=!1,b=!1,_=0)=>{for(let P=_;P<c.length;P++)ct(c[P],p,g,y,b)},Rs=c=>c.shapeFlag&6?Rs(c.component.subTree):c.shapeFlag&128?c.suspense.next():f(c.anchor||c.el),Hn=(c,p,g)=>{c==null?p._vnode&&ct(p._vnode,null,null,!0):R(p._vnode||null,c,p,null,null,null,g),Vn(),ha(),p._vnode=c},Ft={p:R,um:ct,m:jt,r:Mn,mt:kt,mc:B,pc:Xe,pbc:ae,n:Rs,o:e};let ki,Ti;return t&&([ki,Ti]=t(Ft)),{render:Hn,hydrate:ki,createApp:tc(Hn,ki)}}function $t({effect:e,update:t},s){e.allowRecurse=t.allowRecurse=s}function Ia(e,t,s=!1){const i=e.children,n=t.children;if(D(i)&&D(n))for(let o=0;o<i.length;o++){const a=i[o];let r=n[o];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=n[o]=ut(n[o]),r.el=a.el),s||Ia(a,r))}}function nc(e){const t=e.slice(),s=[0];let i,n,o,a,r;const l=e.length;for(i=0;i<l;i++){const d=e[i];if(d!==0){if(n=s[s.length-1],e[n]<d){t[i]=n,s.push(i);continue}for(o=0,a=s.length-1;o<a;)r=o+a>>1,e[s[r]]<d?o=r+1:a=r;d<e[s[o]]&&(o>0&&(t[i]=s[o-1]),s[o]=i)}}for(o=s.length,a=s[o-1];o-- >0;)s[o]=a,a=t[a];return s}const oc=e=>e.__isTeleport,F=Symbol(void 0),$n=Symbol(void 0),vt=Symbol(void 0),Pi=Symbol(void 0),ds=[];let ze=null;function k(e=!1){ds.push(ze=e?null:[])}function ac(){ds.pop(),ze=ds[ds.length-1]||null}let xs=1;function no(e){xs+=e}function Oa(e){return e.dynamicChildren=xs>0?ze||Bt:null,ac(),xs>0&&ze&&ze.push(e),e}function C(e,t,s,i,n,o){return Oa(m(e,t,s,i,n,o,!0))}function Ge(e,t,s,i,n){return Oa(W(e,t,s,i,n,!0))}function Vs(e){return e?e.__v_isVNode===!0:!1}function ns(e,t){return e.type===t.type&&e.key===t.key}const pi="__vInternal",Ea=({key:e})=>e!=null?e:null,Ds=({ref:e,ref_key:t,ref_for:s})=>e!=null?pe(e)||we(e)||q(e)?{i:Te,r:e,k:t,f:!!s}:e:null;function m(e,t=null,s=null,i=0,n=null,o=e===F?0:1,a=!1,r=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ea(t),ref:t&&Ds(t),scopeId:ci,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:n,dynamicChildren:null,appContext:null};return r?(Sn(l,s),o&128&&e.normalize(l)):s&&(l.shapeFlag|=pe(s)?8:16),xs>0&&!a&&ze&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&ze.push(l),l}const W=rc;function rc(e,t=null,s=null,i=0,n=null,o=!1){if((!e||e===xa)&&(e=vt),Vs(e)){const r=Gt(e,t,!0);return s&&Sn(r,s),xs>0&&!o&&ze&&(r.shapeFlag&6?ze[ze.indexOf(e)]=r:ze.push(r)),r.patchFlag|=-2,r}if(mc(e)&&(e=e.__vccOpts),t){t=Cn(t);let{class:r,style:l}=t;r&&!pe(r)&&(t.class=ye(r)),ne(l)&&(na(l)&&!D(l)&&(l=$e({},l)),t.style=et(l))}const a=pe(e)?1:Sl(e)?128:oc(e)?64:ne(e)?4:q(e)?2:0;return m(e,t,s,i,n,a,o,!0)}function Cn(e){return e?na(e)||pi in e?$e({},e):e:null}function Gt(e,t,s=!1){const{props:i,ref:n,patchFlag:o,children:a}=e,r=t?Ma(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:r,key:r&&Ea(r),ref:t&&t.ref?s&&n?D(n)?n.concat(Ds(t)):[n,Ds(t)]:Ds(t):n,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==F?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Gt(e.ssContent),ssFallback:e.ssFallback&&Gt(e.ssFallback),el:e.el,anchor:e.anchor}}function X(e=" ",t=0){return W($n,null,e,t)}function xe(e="",t=!1){return t?(k(),Ge(vt,null,e)):W(vt,null,e)}function Ye(e){return e==null||typeof e=="boolean"?W(vt):D(e)?W(F,null,e.slice()):typeof e=="object"?ut(e):W($n,null,String(e))}function ut(e){return e.el===null||e.memo?e:Gt(e)}function Sn(e,t){let s=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(D(t))s=16;else if(typeof t=="object")if(i&65){const n=t.default;n&&(n._c&&(n._d=!1),Sn(e,n()),n._c&&(n._d=!0));return}else{s=32;const n=t._;!n&&!(pi in t)?t._ctx=Te:n===3&&Te&&(Te.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else q(t)?(t={default:t,_ctx:Te},s=32):(t=String(t),i&64?(s=16,t=[X(t)]):s=8);e.children=t,e.shapeFlag|=s}function Ma(...e){const t={};for(let s=0;s<e.length;s++){const i=e[s];for(const n in i)if(n==="class")t.class!==i.class&&(t.class=ye([t.class,i.class]));else if(n==="style")t.style=et([t.style,i.style]);else if(ti(n)){const o=t[n],a=i[n];a&&o!==a&&!(D(o)&&o.includes(a))&&(t[n]=o?[].concat(o,a):a)}else n!==""&&(t[n]=i[n])}return t}function We(e,t,s,i=null){Be(e,t,7,[s,i])}const lc=Ra();let cc=0;function dc(e,t,s){const i=e.type,n=(t?t.appContext:e.appContext)||lc,o={uid:cc++,vnode:e,type:i,parent:t,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sa(i,n),emitsOptions:fa(i,n),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:i.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=xl.bind(null,o),e.ce&&e.ce(o),o}let be=null;const Xt=e=>{be=e,e.scope.on()},Et=()=>{be&&be.scope.off(),be=null};function Ha(e){return e.vnode.shapeFlag&4}let _s=!1;function pc(e,t=!1){_s=t;const{props:s,children:i}=e.vnode,n=Ha(e);Gl(e,s,n,t),Ql(e,i);const o=n?hc(e,t):void 0;return _s=!1,o}function hc(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=oa(new Proxy(e.ctx,ql));const{setup:i}=s;if(i){const n=e.setupContext=i.length>1?fc(e):null;Xt(e),es();const o=gt(i,e,0,[e.props,n]);if(ts(),Et(),Wo(o)){if(o.then(Et,Et),t)return o.then(a=>{oo(e,a,t)}).catch(a=>{ri(a,e,0)});e.asyncDep=o}else oo(e,o,t)}else Na(e,t)}function oo(e,t,s){q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ne(t)&&(e.setupState=la(t)),Na(e,s)}let ao;function Na(e,t,s){const i=e.type;if(!e.render){if(!t&&ao&&!i.render){const n=i.template||kn(e).template;if(n){const{isCustomElement:o,compilerOptions:a}=e.appContext.config,{delimiters:r,compilerOptions:l}=i,d=$e($e({isCustomElement:o,delimiters:r},a),l);i.render=ao(n,d)}}e.render=i.render||De}Xt(e),es(),Wl(e),ts(),Et()}function uc(e){return new Proxy(e.attrs,{get(t,s){return Me(e,"get","$attrs"),t[s]}})}function fc(e){const t=i=>{e.exposed=i||{}};let s;return{get attrs(){return s||(s=uc(e))},slots:e.slots,emit:e.emit,expose:t}}function hi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(la(oa(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in Ys)return Ys[s](e)}}))}function gc(e,t=!0){return q(e)?e.displayName||e.name:e.name||t&&e.__name}function mc(e){return q(e)&&"__vccOpts"in e}const de=(e,t)=>gl(e,t,_s);function bc(e,t,s){const i=arguments.length;return i===2?ne(t)&&!D(t)?Vs(t)?W(e,null,[t]):W(e,t):W(e,null,t):(i>3?s=Array.prototype.slice.call(arguments,2):i===3&&Vs(s)&&(s=[s]),W(e,t,s))}const yc="3.2.39",vc="http://www.w3.org/2000/svg",Rt=typeof document<"u"?document:null,ro=Rt&&Rt.createElement("template"),wc={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,i)=>{const n=t?Rt.createElementNS(vc,e):Rt.createElement(e,s?{is:s}:void 0);return e==="select"&&i&&i.multiple!=null&&n.setAttribute("multiple",i.multiple),n},createText:e=>Rt.createTextNode(e),createComment:e=>Rt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Rt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,s,i,n,o){const a=s?s.previousSibling:t.lastChild;if(n&&(n===o||n.nextSibling))for(;t.insertBefore(n.cloneNode(!0),s),!(n===o||!(n=n.nextSibling)););else{ro.innerHTML=i?`<svg>${e}</svg>`:e;const r=ro.content;if(i){const l=r.firstChild;for(;l.firstChild;)r.appendChild(l.firstChild);r.removeChild(l)}t.insertBefore(r,s)}return[a?a.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}};function xc(e,t,s){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}function _c(e,t,s){const i=e.style,n=pe(s);if(s&&!n){for(const o in s)Yi(i,o,s[o]);if(t&&!pe(t))for(const o in t)s[o]==null&&Yi(i,o,"")}else{const o=i.display;n?t!==s&&(i.cssText=s):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=o)}}const lo=/\s*!important$/;function Yi(e,t,s){if(D(s))s.forEach(i=>Yi(e,t,i));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const i=kc(e,t);lo.test(s)?e.setProperty(Ht(i),s.replace(lo,""),"important"):e[i]=s}}const co=["Webkit","Moz","ms"],Li={};function kc(e,t){const s=Li[t];if(s)return s;let i=Ve(t);if(i!=="filter"&&i in e)return Li[t]=i;i=ni(i);for(let n=0;n<co.length;n++){const o=co[n]+i;if(o in e)return Li[t]=o}return t}const po="http://www.w3.org/1999/xlink";function Tc(e,t,s,i,n){if(i&&t.startsWith("xlink:"))s==null?e.removeAttributeNS(po,t.slice(6,t.length)):e.setAttributeNS(po,t,s);else{const o=Tr(t);s==null||o&&!zo(s)?e.removeAttribute(t):e.setAttribute(t,o?"":s)}}function $c(e,t,s,i,n,o,a){if(t==="innerHTML"||t==="textContent"){i&&a(i,n,o),e[t]=s==null?"":s;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=s;const l=s==null?"":s;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),s==null&&e.removeAttribute(t);return}let r=!1;if(s===""||s==null){const l=typeof e[t];l==="boolean"?s=zo(s):s==null&&l==="string"?(s="",r=!0):l==="number"&&(s=0,r=!0)}try{e[t]=s}catch{}r&&e.removeAttribute(t)}const[ja,Cc]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const s=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(s&&Number(s[1])<=53)}return[e,t]})();let Ki=0;const Sc=Promise.resolve(),Pc=()=>{Ki=0},Lc=()=>Ki||(Sc.then(Pc),Ki=ja());function Dt(e,t,s,i){e.addEventListener(t,s,i)}function Ac(e,t,s,i){e.removeEventListener(t,s,i)}function Rc(e,t,s,i,n=null){const o=e._vei||(e._vei={}),a=o[t];if(i&&a)a.value=i;else{const[r,l]=Ic(t);if(i){const d=o[t]=Oc(i,n);Dt(e,r,d,l)}else a&&(Ac(e,r,a,l),o[t]=void 0)}}const ho=/(?:Once|Passive|Capture)$/;function Ic(e){let t;if(ho.test(e)){t={};let i;for(;i=e.match(ho);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ht(e.slice(2)),t]}function Oc(e,t){const s=i=>{const n=i.timeStamp||ja();(Cc||n>=s.attached-1)&&Be(Ec(i,s.value),t,5,[i])};return s.value=e,s.attached=Lc(),s}function Ec(e,t){if(D(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(i=>n=>!n._stopped&&i&&i(n))}else return t}const uo=/^on[a-z]/,Mc=(e,t,s,i,n=!1,o,a,r,l)=>{t==="class"?xc(e,i,n):t==="style"?_c(e,s,i):ti(t)?cn(t)||Rc(e,t,s,i,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Hc(e,t,i,n))?$c(e,t,i,o,a,r,l):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),Tc(e,t,i,n))};function Hc(e,t,s,i){return i?!!(t==="innerHTML"||t==="textContent"||t in e&&uo.test(t)&&q(s)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||uo.test(t)&&pe(s)?!1:t in e}const fo=e=>{const t=e.props["onUpdate:modelValue"]||!1;return D(t)?s=>zs(t,s):t};function Nc(e){e.target.composing=!0}function go(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const jc={created(e,{modifiers:{lazy:t,trim:s,number:i}},n){e._assign=fo(n);const o=i||n.props&&n.props.type==="number";Dt(e,t?"change":"input",a=>{if(a.target.composing)return;let r=e.value;s&&(r=r.trim()),o&&(r=Mi(r)),e._assign(r)}),s&&Dt(e,"change",()=>{e.value=e.value.trim()}),t||(Dt(e,"compositionstart",Nc),Dt(e,"compositionend",go),Dt(e,"change",go))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:s,trim:i,number:n}},o){if(e._assign=fo(o),e.composing||document.activeElement===e&&e.type!=="range"&&(s||i&&e.value.trim()===t||(n||e.type==="number")&&Mi(e.value)===t))return;const a=t==null?"":t;e.value!==a&&(e.value=a)}},Fc=["ctrl","shift","alt","meta"],zc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Fc.some(s=>e[`${s}Key`]&&!t.includes(s))},Gs=(e,t)=>(s,...i)=>{for(let n=0;n<t.length;n++){const o=zc[t[n]];if(o&&o(s,t))return}return e(s,...i)},Dc={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Fa=(e,t)=>s=>{if(!("key"in s))return;const i=Ht(s.key);if(t.some(n=>n===i||Dc[n]===i))return e(s)},Bc=$e({patchProp:Mc},wc);let mo;function qc(){return mo||(mo=sc(Bc))}const za=(...e)=>{const t=qc().createApp(...e),{mount:s}=t;return t.mount=i=>{const n=Wc(i);if(!n)return;const o=t._component;!q(o)&&!o.render&&!o.template&&(o.template=n.innerHTML),n.innerHTML="";const a=s(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),a},t};function Wc(e){return pe(e)?document.querySelector(e):e}function Uc(e,t){return(!t.tag||e.tag===t.tag)&&(!t.type||e.type===t.type)}const Da=[{name:"HTML and the DOM",skippable:!0,instructions:`<img src="img/chef.png" style="width: 88px; margin: 0 auto"/>
        <p>During this training, we will be working on the website of Chef Nakamura's brand new restaurant.</p>
        <p>You can see the homepage on the left. It's basic, but it's a start !</p>
        <p>All the content on this page is actually composed of HTML elements grouped in a tree structure called the <strong>DOM</strong>, for Document Object Model</p>
        <p>Click on the <b>3D</b> button on top right to see a 3D representation of this tree structure.</p>
        <p>Move the mouse around to observe the structure. Holding the <b>Ctrl</b> key stops the camera movement.</p>`},{name:"Main root tags",skippable:!0,instructions:`
        <p>HTML5 has around <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank">a hundred of different tags</a>. 
        Each tag has a specific purpose to describe something in a web document.</p>
        <h3 class="syntax">&lt;html&gt;</h3>
        <p>Root tag to describe a HTML document</p>
        <h3 class="syntax">&lt;body&gt;</h3>
        <p>Contains all the content of the document</p>
        <h3 class="syntax">&lt;head&gt;</h3>
        <p>Contains metadata associated to the document, like page title, styles, scripts</p>
        <hr>
        <p>Right click on the restaurant website background and select <b>Show frame source</b> to see the HTML source code of the document. 
        Find the <tag>head</tag> tag and note the different information put inside.</p>        
        `},{name:"Sectionning: <main>",order:"Click on a <main> element",tag:"main",instructions:`
        <p>Properly describing the different sections of a web document helps for accessibility tools and for the indexability by search engines crawlers.</p>
        <h3 class="syntax">&lt;main&gt;</h3>
        <p>Dominant section of content, related to the central topic of the document.</p>
        <p>Users with certain disabilities may use this tag to directly jump to the important content.</p>
        <hr>
        <p>Use the <b>3D</b> view and the <b>Ctrl</b> key to select elements in the DOM.</p>
        `},{name:"Sectionning: <aside>",order:"Click on a <aside> element",tag:"aside",instructions:`
        <p>Properly describing the different sections of a web document helps for accessibility tools and for the indexability by search engines crawlers.</p>

        <h3 class="syntax">&lt;aside&gt;</h3>
        <p>Content indirectly related to the main content of the document. Frequently used for side panels.</p>
        `},{name:"Sectionning: <header>",order:"Click on a <header> element",tag:"header",instructions:`
        <p>Properly describing the different sections of a web document helps for accessibility tools and for the indexability by search engines crawlers.</p>

        <h3 class="syntax">&lt;header&gt;</h3>
        <p>Content used to introduce the document. Typically contains a level one heading, a logo, a menu or some navigation links.</p>
        `},{name:"Sectionning: <nav>",order:"Click on a <nav> element",tag:"nav",instructions:`
        <p>Properly describing the different sections of a web document helps for accessibility tools and for the indexability by search engines crawlers.</p>

        <h3 class="syntax">&lt;nav&gt;</h3>
        <p>Section used to provide navigation links, either internal or external.</p>
        <p>This element is especially useful for screenreader users to quickly navigate through your website.</p>
        `},{name:"Sectionning: <article>",order:"Click on a <article> element",tag:"article",instructions:`
        <p>Properly describing the different sections of a web document helps for accessibility tools and for the indexability by search engines crawlers.</p>

        <h3 class="syntax">&lt;article&gt;</h3>
        <p>An <tag>article</tag> represents a section of the document which can be extracted to be reused independently without its parent context.</p>
        <p><b>Examples</b>: a forum post, a newspaper article, a blog entry, a product card, a user-submitted comment, an interactive widget...</p>
        <p>Web crawlers can use this tag to parse a piece of content independently of its parent document.</p>
        `},{name:"Sectionning: <section>",order:"Click on a <section> element",tag:"section",instructions:`
        <p>Properly describing the different sections of a web document helps for accessibility tools and for the indexability by search engines crawlers.</p>

        <h3 class="syntax">&lt;section&gt;</h3>
        <p>When a section of the document has no specific semantic element to describe it, use a <tag>section</tag> tag.</p>
        <p>Sections content often start with a heading element that describes it.</p>
        `},{name:"Sectionning: Headings",order:"Click on a <h1> element",tag:"h1",instructions:`
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;h1&gt;, &lt;h2&gt; ... &lt;h6&gt;</h3>
        <p>Headings are used as section titles to create a hierarchy in the content of the document.</p>
        <p>HTML documents can have up to 6 levels of section headings, <tag>h1</tag> being the highest level.</p>
        <p>Using only one <tag>h1</tag> per page or view is beneficial to screenreader users. It should concisely describe the overall purpose of the content.</p>        
        `},{name:"Sectionning: Headings #2",order:"Click on a <h2> element",tag:"h2",instructions:`
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;h1&gt;, &lt;h2&gt; ... &lt;h6&gt;</h3>
        <p>Headings are used as section titles to create a hierarchy in the content of the document.</p>
        <p>A <tag>h2</tag> must necessarily be preceded by an <tag>h1</tag> in the document, and so on.</p>
        `},{name:"Text semantics: Paragraphs",order:"Click on a <p> element",tag:"p",instructions:`
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;p&gt;</h3>
        <p>Split your text content in paragraphs so that it's easier to read.</p>
        <p>By default, paragraphs are displayed in a block and have margins.</p>
        <p>Users of screen readers can jump from one paragraph to another to quickly find what they are looking for.</p>
        `},{name:"Text semantics: Lists",order:"Click on a <ul> element",tag:"ul",instructions:`
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;ul&gt; or &lt;ol&gt;</h3>
        <p><tag>ol</tag> stands for <b>ordered list</b>.</p>
        <p><tag>ul</tag> stands for <b>unordered list</b>.</p>
        <p>By default, ordered list items are preceded by a number, and unordered list items by a bullet point.</p>
        `},{name:"Text semantics: Lists items",order:"Click on a <li> element",tag:"li",instructions:`
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;li&gt;</h3>
        <p>Both <tag>ol</tag> and <tag>ul</tag> must have <tag>li</tag> (<b>list item</b>) elements as direct descendants.</p>
        <p>By default, list items have a left margin.</p>
        <p>Users of screen readers can jump from one list item to another to quickly find what they are looking for.</p>
        `},{name:"Text semantics: Descriptions Lists",order:"Click on a <dl> element",tag:"dl",instructions:`
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;dl&gt;</h3>
        <p>Definitions lists are useful to describe a mapping between some key-value pairs, like a glossary with terms and definitions, or an index mapping a word to a page number.</p>
        <p>Listing definitions can help web crawlers to link information and build their metadata.</p>
        `},{name:"Text semantics: Description Term",order:"Click on a <dt> element",tag:"dt",instructions:`
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;dt&gt;</h3>
        <p><tag>dt</tag> stands for <b>description term</b>, and represents the term being described.</p>
        <p><tag>dt</tag> and <tag>dd</tag> must be consecutive tags and direct descendants of a <tag>dl</tag> element.</p>
        `},{name:"Text semantics: Description Details",order:"Click on a <dd> element",tag:"dd",instructions:`
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;dd&gt;</h3>
        <p><tag>dd</tag> stands for <b>description details</b>, and represents the description of the previous term.</p>
        <p><tag>dt</tag> and <tag>dd</tag> must be consecutive tags and direct descendants of a <tag>dl</tag> element.</p>
        `},{name:"Text semantics: Time and dates",order:"Click on a <time> element",tag:"time",instructions:`
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;time datetime="23:00"&gt;</h3>
        <p>Put your dates, hours and durations in a <tag>time</tag> tag with an associated <b>datetime</b> attribute so that the value is machine-readable.</p>
        <p>It allows adding custom features on browsers such as creating calendar events or reminders.</p>
        `},{name:"Text semantics: Address",order:"Click on a <address> element",tag:"address",instructions:`
        <p>Properly describing the different sections of a web document helps for accessibility tools and for the indexability by search engines crawlers.</p>

        <h3 class="syntax">&lt;address&gt;</h3>
        <p>Identifies the contact information relevant to the current document: <b>author, physical address, email, phone number</b>...</p>
        <p>It is mostly useful for web crawlers to build their metadata.</p>
        `},{name:"Interactions: Links",order:"Click on a <a> element",tag:"a",instructions:`
        <p>Some elements are used for user interaction on the document. Again, picking the right element can make these interactions more convenient for your users.</p>

        <h3 class="syntax">&lt;a href="url"&gt;</h3>
        <p>Links are represented by the tag <tag>a</tag> (anchor). They can be:
        <ul>
        <li><i>anchors</i>: links to a local section of the document by id, i.e. <b>"#contact"</b></li>
        <li><i>internal</i>: links to a page on the same domain</li>
        <li><i>external</i>: links to a page on another domain</li>
        </ul>
        </p>
        <p>Links can be shared, or opened in a new tab. It's the fundamental element that made the web what it is today.</p>
        <p>By default, they are blue and underlined. This can be changed to match your website colors, but you should still underline it on mouseover.</p>
        `},{name:"Interactions: Forms",order:"Click on a <form> element",tag:"form",instructions:`
        <p>Some elements are used for user interaction on the document. Again, picking the right element can make these interactions more convenient for your users.</p>

        <h3 class="syntax">&lt;form&gt;</h3>
        <p>Forms used to be the common way to send information through a website.</p>
        <p>When submitted, the browser sends a HTTP POST request containing the user input to the server at the adress specified by the <b>target</b> attribute.</p>
        <p>This default behavior of forms is less used today on modern websites with real-time interactions handled in JavaScript. But they are still useful for their semantic value, and all the standard APIs associated to them, such as form validation.</p>
        `},{name:"Interactions: Buttons",order:"Click on a <button> element",tag:"button",instructions:`
        <p>Some elements are used for user interaction on the document. Again, picking the right element can make these interactions more convenient for your users.</p>

        <h3 class="syntax">&lt;button&gt;</h3>
        <p>Buttons are used to submit forms or trigger some specific interactions on a web page, handled in JavaScript.</p>
        <p>If a link doesn't send you somewhere, it should probably be a <tag>button</tag> instead.</p>
        `},{name:"Interactions: Inputs",order:'Click on a <input type="tel"> element',tag:"input",type:"tel",instructions:`
        <p>Some elements are used for user interaction on the document. Again, picking the right element can make these interactions more convenient for your users.</p>

        <h3 class="syntax">&lt;input type="text"&gt;</h3>
        <p><tag>input</tag> elements cover a large amount of different input fields used to receive user input.</p>
        <p>Depending on their <b>type</b> attribute, their UI and behavior will change to receive various types of input: 
        <b>text</b>, <b>password</b>, <b>checkbox</b>, <b>color</b>...</p>
        <p>The complete list of standard input types can be found <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#input_types" target="_blank">here</a>.</p>
        <p>For example, an <tag>input type="datetime-local"</tag> will open a date and time picker UI that matches the device and operating system of the user. Try it on the restaurant website !</p>
        `}],Yc={name:"HTML - Semantics",description:"Why semantics matter",intro:`
    <p>HTML is the markup language that describes the <strong>content</strong> of web pages.</p>
    <p>In this chapter, we will look at the different elements available in HTML and why understanding the purpose of each of them is important for you and your visitors.</p>`,levels:Da};function rt(e){return e.split("-")[0]}function Yt(e){return e.split("-")[1]}function Cs(e){return["top","bottom"].includes(rt(e))?"x":"y"}function Pn(e){return e==="y"?"height":"width"}function bo(e){let{reference:t,floating:s,placement:i}=e;const n=t.x+t.width/2-s.width/2,o=t.y+t.height/2-s.height/2;let a;switch(rt(i)){case"top":a={x:n,y:t.y-s.height};break;case"bottom":a={x:n,y:t.y+t.height};break;case"right":a={x:t.x+t.width,y:o};break;case"left":a={x:t.x-s.width,y:o};break;default:a={x:t.x,y:t.y}}const r=Cs(i),l=Pn(r);switch(Yt(i)){case"start":a[r]=a[r]-(t[l]/2-s[l]/2);break;case"end":a[r]=a[r]+(t[l]/2-s[l]/2);break}return a}const Kc=async(e,t,s)=>{const{placement:i="bottom",strategy:n="absolute",middleware:o=[],platform:a}=s;let r=await a.getElementRects({reference:e,floating:t,strategy:n}),{x:l,y:d}=bo({...r,placement:i}),h=i,u={};for(let f=0;f<o.length;f++){const{name:T,fn:L}=o[f],{x:A,y:R,data:I,reset:E}=await L({x:l,y:d,initialPlacement:i,placement:h,strategy:n,middlewareData:u,rects:r,platform:a,elements:{reference:e,floating:t}});if(l=A!=null?A:l,d=R!=null?R:d,u={...u,[T]:I!=null?I:{}},E){typeof E=="object"&&(E.placement&&(h=E.placement),E.rects&&(r=E.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:n}):E.rects),{x:l,y:d}=bo({...r,placement:h})),f=-1;continue}}return{x:l,y:d,placement:h,strategy:n,middlewareData:u}};function Vc(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ba(e){return typeof e!="number"?Vc(e):{top:e,right:e,bottom:e,left:e}}function Vi(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function ui(e,t){t===void 0&&(t={});const{x:s,y:i,platform:n,rects:o,elements:a,strategy:r}=e,{boundary:l="clippingParents",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:u=!1,padding:f=0}=t,T=Ba(f),A=a[u?h==="floating"?"reference":"floating":h],R=await n.getClippingClientRect({element:await n.isElement(A)?A:A.contextElement||await n.getDocumentElement({element:a.floating}),boundary:l,rootBoundary:d}),I=Vi(await n.convertOffsetParentRelativeRectToViewportRelativeRect({rect:h==="floating"?{...o.floating,x:s,y:i}:o.reference,offsetParent:await n.getOffsetParent({element:a.floating}),strategy:r}));return{top:R.top-I.top+T.top,bottom:I.bottom-R.bottom+T.bottom,left:R.left-I.left+T.left,right:I.right-R.right+T.right}}const Gc=Math.min,Lt=Math.max;function Gi(e,t,s){return Lt(e,Gc(t,s))}const Xc=e=>({name:"arrow",options:e,async fn(t){const{element:s,padding:i=0}=e!=null?e:{},{x:n,y:o,placement:a,rects:r,platform:l}=t;if(s==null)return{};const d=Ba(i),h={x:n,y:o},u=rt(a),f=Cs(u),T=Pn(f),L=await l.getDimensions({element:s}),A=f==="y"?"top":"left",R=f==="y"?"bottom":"right",I=r.reference[T]+r.reference[f]-h[f]-r.floating[T],E=h[f]-r.reference[f],M=await l.getOffsetParent({element:s}),z=M?f==="y"?M.clientHeight||0:M.clientWidth||0:0,oe=I/2-E/2,ue=d[A],fe=z-L[T]-d[R],ie=z/2-L[T]/2+oe,B=Gi(ue,ie,fe);return{data:{[f]:B,centerOffset:ie-B}}}}),Jc={left:"right",right:"left",bottom:"top",top:"bottom"};function Xs(e){return e.replace(/left|right|bottom|top/g,t=>Jc[t])}function qa(e,t){const s=Yt(e)==="start",i=Cs(e),n=Pn(i);let o=i==="x"?s?"right":"left":s?"bottom":"top";return t.reference[n]>t.floating[n]&&(o=Xs(o)),{main:o,cross:Xs(o)}}const Qc={start:"end",end:"start"};function Xi(e){return e.replace(/start|end/g,t=>Qc[t])}const Zc=["top","right","bottom","left"],ed=Zc.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);function td(e,t,s){return(e?[...s.filter(n=>Yt(n)===e),...s.filter(n=>Yt(n)!==e)]:s.filter(n=>rt(n)===n)).filter(n=>e?Yt(n)===e||(t?Xi(n)!==n:!1):!0)}const sd=function(e){return e===void 0&&(e={}),{name:"autoPlacement",options:e,async fn(t){var s,i,n,o,a,r;const{x:l,y:d,rects:h,middlewareData:u,placement:f}=t,{alignment:T=null,allowedPlacements:L=ed,autoAlignment:A=!0,...R}=e;if((s=u.autoPlacement)!=null&&s.skip)return{};const I=td(T,A,L),E=await ui(t,R),M=(i=(n=u.autoPlacement)==null?void 0:n.index)!=null?i:0,z=I[M],{main:oe,cross:ue}=qa(z,h);if(f!==z)return{x:l,y:d,reset:{placement:I[0]}};const fe=[E[rt(z)],E[oe],E[ue]],ie=[...(o=(a=u.autoPlacement)==null?void 0:a.overflows)!=null?o:[],{placement:z,overflows:fe}],B=I[M+1];if(B)return{data:{index:M+1,overflows:ie},reset:{placement:B}};const re=ie.slice().sort((ce,_e)=>ce.overflows[0]-_e.overflows[0]),ae=(r=re.find(ce=>{let{overflows:_e}=ce;return _e.every(ge=>ge<=0)}))==null?void 0:r.placement;return{data:{skip:!0},reset:{placement:ae!=null?ae:re[0].placement}}}}};function id(e){const t=Xs(e);return[Xi(e),t,Xi(t)]}const nd=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,i;const{placement:n,middlewareData:o,rects:a,initialPlacement:r}=t;if((s=o.flip)!=null&&s.skip)return{};const{mainAxis:l=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:u="bestFit",flipAlignment:f=!0,...T}=e,L=rt(n),R=h||(L===r||!f?[Xs(r)]:id(r)),I=[r,...R],E=await ui(t,T),M=[];let z=((i=o.flip)==null?void 0:i.overflows)||[];if(l&&M.push(E[L]),d){const{main:ie,cross:B}=qa(n,a);M.push(E[ie],E[B])}if(z=[...z,{placement:n,overflows:M}],!M.every(ie=>ie<=0)){var oe,ue;const ie=((oe=(ue=o.flip)==null?void 0:ue.index)!=null?oe:0)+1,B=I[ie];if(B)return{data:{index:ie,overflows:z},reset:{placement:B}};let re="bottom";switch(u){case"bestFit":{var fe;const ae=(fe=z.slice().sort((ce,_e)=>ce.overflows.filter(ge=>ge>0).reduce((ge,kt)=>ge+kt,0)-_e.overflows.filter(ge=>ge>0).reduce((ge,kt)=>ge+kt,0))[0])==null?void 0:fe.placement;ae&&(re=ae);break}case"initialPlacement":re=r;break}return{data:{skip:!0},reset:{placement:re}}}return{}}}};function od(e){let{placement:t,rects:s,value:i}=e;const n=rt(t),o=["left","top"].includes(n)?-1:1,a=typeof i=="function"?i({...s,placement:t}):i,{mainAxis:r,crossAxis:l}=typeof a=="number"?{mainAxis:a,crossAxis:0}:{mainAxis:0,crossAxis:0,...a};return Cs(n)==="x"?{x:l,y:r*o}:{x:r*o,y:l}}const ad=function(e){return e===void 0&&(e=0),{name:"offset",options:e,fn(t){const{x:s,y:i,placement:n,rects:o}=t,a=od({placement:n,rects:o,value:e});return{x:s+a.x,y:i+a.y,data:a}}}};function rd(e){return e==="x"?"y":"x"}const ld=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:i,placement:n}=t,{mainAxis:o=!0,crossAxis:a=!1,limiter:r={fn:R=>{let{x:I,y:E}=R;return{x:I,y:E}}},...l}=e,d={x:s,y:i},h=await ui(t,l),u=Cs(rt(n)),f=rd(u);let T=d[u],L=d[f];if(o){const R=u==="y"?"top":"left",I=u==="y"?"bottom":"right",E=T+h[R],M=T-h[I];T=Gi(E,T,M)}if(a){const R=f==="y"?"top":"left",I=f==="y"?"bottom":"right",E=L+h[R],M=L-h[I];L=Gi(E,L,M)}const A=r.fn({...t,[u]:T,[f]:L});return{...A,data:{x:A.x-s,y:A.y-i}}}}},cd=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var s;const{placement:i,rects:n,middlewareData:o}=t,{apply:a,...r}=e;if((s=o.size)!=null&&s.skip)return{};const l=await ui(t,r),d=rt(i),h=Yt(i)==="end";let u,f;d==="top"||d==="bottom"?(u=d,f=h?"left":"right"):(f=d,u=h?"top":"bottom");const T=Lt(l.left,0),L=Lt(l.right,0),A=Lt(l.top,0),R=Lt(l.bottom,0),I={height:n.floating.height-(["left","right"].includes(i)?2*(A!==0||R!==0?A+R:Lt(l.top,l.bottom)):l[u]),width:n.floating.width-(["top","bottom"].includes(i)?2*(T!==0||L!==0?T+L:Lt(l.left,l.right)):l[f])};return a==null||a({...I,...n}),{data:{skip:!0},reset:{rects:!0}}}}};function Ln(e){return(e==null?void 0:e.toString())==="[object Window]"}function xt(e){if(e==null)return window;if(!Ln(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function fi(e){return xt(e).getComputedStyle(e)}function it(e){return Ln(e)?"":e?(e.nodeName||"").toLowerCase():""}function nt(e){return e instanceof xt(e).HTMLElement}function Js(e){return e instanceof xt(e).Element}function dd(e){return e instanceof xt(e).Node}function Wa(e){const t=xt(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function gi(e){const{overflow:t,overflowX:s,overflowY:i}=fi(e);return/auto|scroll|overlay|hidden/.test(t+i+s)}function pd(e){return["table","td","th"].includes(it(e))}function Ua(e){const t=navigator.userAgent.toLowerCase().includes("firefox"),s=fi(e);return s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].includes(s.willChange)||t&&s.willChange==="filter"||t&&(s.filter?s.filter!=="none":!1)}const yo=Math.min,ps=Math.max,Qs=Math.round;function Jt(e,t){t===void 0&&(t=!1);const s=e.getBoundingClientRect();let i=1,n=1;return t&&nt(e)&&(i=e.offsetWidth>0&&Qs(s.width)/e.offsetWidth||1,n=e.offsetHeight>0&&Qs(s.height)/e.offsetHeight||1),{width:s.width/i,height:s.height/n,top:s.top/n,right:s.right/i,bottom:s.bottom/n,left:s.left/i,x:s.left/i,y:s.top/n}}function _t(e){return((dd(e)?e.ownerDocument:e.document)||window.document).documentElement}function mi(e){return Ln(e)?{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}:{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Ya(e){return Jt(_t(e)).left+mi(e).scrollLeft}function hd(e){const t=Jt(e);return Qs(t.width)!==e.offsetWidth||Qs(t.height)!==e.offsetHeight}function ud(e,t,s){const i=nt(t),n=_t(t),o=Jt(e,i&&hd(t));let a={scrollLeft:0,scrollTop:0};const r={x:0,y:0};if(i||!i&&s!=="fixed")if((it(t)!=="body"||gi(n))&&(a=mi(t)),nt(t)){const l=Jt(t,!0);r.x=l.x+t.clientLeft,r.y=l.y+t.clientTop}else n&&(r.x=Ya(n));return{x:o.left+a.scrollLeft-r.x,y:o.top+a.scrollTop-r.y,width:o.width,height:o.height}}function bi(e){return it(e)==="html"?e:e.assignedSlot||e.parentNode||(Wa(e)?e.host:null)||_t(e)}function vo(e){return!nt(e)||getComputedStyle(e).position==="fixed"?null:e.offsetParent}function fd(e){let t=bi(e);for(;nt(t)&&!["html","body"].includes(it(t));){if(Ua(t))return t;t=t.parentNode}return null}function Ji(e){const t=xt(e);let s=vo(e);for(;s&&pd(s)&&getComputedStyle(s).position==="static";)s=vo(s);return s&&(it(s)==="html"||it(s)==="body"&&getComputedStyle(s).position==="static"&&!Ua(s))?t:s||fd(e)||t}function wo(e){return{width:e.offsetWidth,height:e.offsetHeight}}function gd(e){let{rect:t,offsetParent:s,strategy:i}=e;const n=nt(s),o=_t(s);if(s===o)return t;let a={scrollLeft:0,scrollTop:0};const r={x:0,y:0};if((n||!n&&i!=="fixed")&&((it(s)!=="body"||gi(o))&&(a=mi(s)),nt(s))){const l=Jt(s,!0);r.x=l.x+s.clientLeft,r.y=l.y+s.clientTop}return{...t,x:t.x-a.scrollLeft+r.x,y:t.y-a.scrollTop+r.y}}function md(e){const t=xt(e),s=_t(e),i=t.visualViewport;let n=s.clientWidth,o=s.clientHeight,a=0,r=0;return i&&(n=i.width,o=i.height,Math.abs(t.innerWidth/i.scale-i.width)<.01&&(a=i.offsetLeft,r=i.offsetTop)),{width:n,height:o,x:a,y:r}}function bd(e){var t;const s=_t(e),i=mi(e),n=(t=e.ownerDocument)==null?void 0:t.body,o=ps(s.scrollWidth,s.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),a=ps(s.scrollHeight,s.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0);let r=-i.scrollLeft+Ya(e);const l=-i.scrollTop;return fi(n||s).direction==="rtl"&&(r+=ps(s.clientWidth,n?n.clientWidth:0)-o),{width:o,height:a,x:r,y:l}}function Ka(e){return["html","body","#document"].includes(it(e))?e.ownerDocument.body:nt(e)&&gi(e)?e:Ka(bi(e))}function Zs(e,t){var s;t===void 0&&(t=[]);const i=Ka(e),n=i===((s=e.ownerDocument)==null?void 0:s.body),o=xt(i),a=n?[o].concat(o.visualViewport||[],gi(i)?i:[]):i,r=t.concat(a);return n?r:r.concat(Zs(bi(a)))}function yd(e,t){const s=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(s&&Wa(s)){let i=t;do{if(i&&e===i)return!0;i=i.parentNode||i.host}while(i)}return!1}function vd(e){const t=Jt(e),s=t.top+e.clientTop,i=t.left+e.clientLeft;return{top:s,left:i,x:i,y:s,right:i+e.clientWidth,bottom:s+e.clientHeight,width:e.clientWidth,height:e.clientHeight}}function xo(e,t){return t==="viewport"?Vi(md(e)):Js(t)?vd(t):Vi(bd(_t(e)))}function wd(e){const t=Zs(bi(e)),i=["absolute","fixed"].includes(fi(e).position)&&nt(e)?Ji(e):e;return Js(i)?t.filter(n=>Js(n)&&yd(n,i)&&it(n)!=="body"):[]}function xd(e){let{element:t,boundary:s,rootBoundary:i}=e;const o=[...s==="clippingParents"?wd(t):[].concat(s),i],a=o[0],r=o.reduce((l,d)=>{const h=xo(t,d);return l.top=ps(h.top,l.top),l.right=yo(h.right,l.right),l.bottom=yo(h.bottom,l.bottom),l.left=ps(h.left,l.left),l},xo(t,a));return r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}const _d={getElementRects:e=>{let{reference:t,floating:s,strategy:i}=e;return{reference:ud(t,Ji(s),i),floating:{...wo(s),x:0,y:0}}},convertOffsetParentRelativeRectToViewportRelativeRect:e=>gd(e),getOffsetParent:e=>{let{element:t}=e;return Ji(t)},isElement:e=>Js(e),getDocumentElement:e=>{let{element:t}=e;return _t(t)},getClippingClientRect:e=>xd(e),getDimensions:e=>{let{element:t}=e;return wo(t)},getClientRects:e=>{let{element:t}=e;return t.getClientRects()}},kd=(e,t,s)=>Kc(e,t,{platform:_d,...s});var Td=Object.defineProperty,$d=Object.defineProperties,Cd=Object.getOwnPropertyDescriptors,_o=Object.getOwnPropertySymbols,Sd=Object.prototype.hasOwnProperty,Pd=Object.prototype.propertyIsEnumerable,ko=(e,t,s)=>t in e?Td(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ze=(e,t)=>{for(var s in t||(t={}))Sd.call(t,s)&&ko(e,s,t[s]);if(_o)for(var s of _o(t))Pd.call(t,s)&&ko(e,s,t[s]);return e},Ss=(e,t)=>$d(e,Cd(t));function Va(e,t){for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(typeof t[s]=="object"&&e[s]?Va(e[s],t[s]):e[s]=t[s])}const tt={disabled:!1,distance:5,skidding:0,container:"body",boundary:void 0,instantMove:!1,disposeTimeout:5e3,popperTriggers:[],strategy:"absolute",preventOverflow:!0,flip:!0,shift:!0,overflowPadding:0,arrowPadding:0,arrowOverflow:!0,themes:{tooltip:{placement:"top",triggers:["hover","focus","touch"],hideTriggers:e=>[...e,"click"],delay:{show:200,hide:0},handleResize:!1,html:!1,loadingContent:"..."},dropdown:{placement:"bottom",triggers:["click"],delay:0,handleResize:!0,autoHide:!0},menu:{$extend:"dropdown",triggers:["hover","focus"],popperTriggers:["hover","focus"],delay:{show:0,hide:400}}}};function Qt(e,t){let s=tt.themes[e]||{},i;do i=s[t],typeof i>"u"?s.$extend?s=tt.themes[s.$extend]||{}:(s=null,i=tt[t]):s=null;while(s);return i}function Ld(e){const t=[e];let s=tt.themes[e]||{};do s.$extend&&!s.$resetCss?(t.push(s.$extend),s=tt.themes[s.$extend]||{}):s=null;while(s);return t.map(i=>`v-popper--theme-${i}`)}function To(e){const t=[e];let s=tt.themes[e]||{};do s.$extend?(t.push(s.$extend),s=tt.themes[s.$extend]||{}):s=null;while(s);return t}let Mt=!1;if(typeof window<"u"){Mt=!1;try{const e=Object.defineProperty({},"passive",{get(){Mt=!0}});window.addEventListener("test",null,e)}catch{}}let Ga=!1;typeof window<"u"&&typeof navigator<"u"&&(Ga=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream);const Xa=["auto","top","bottom","left","right"].reduce((e,t)=>e.concat([t,`${t}-start`,`${t}-end`]),[]),$o={hover:"mouseenter",focus:"focus",click:"click",touch:"touchstart"},Co={hover:"mouseleave",focus:"blur",click:"click",touch:"touchend"};function So(e,t){const s=e.indexOf(t);s!==-1&&e.splice(s,1)}function Ai(){return new Promise(e=>requestAnimationFrame(()=>{requestAnimationFrame(e)}))}const Oe=[];let Ct=null;const Po={};function Lo(e){let t=Po[e];return t||(t=Po[e]=[]),t}let Qi=function(){};typeof window<"u"&&(Qi=window.Element);function V(e){return function(t){return Qt(t.theme,e)}}const Ri="__floating-vue__popper";var Ja=()=>ee({name:"VPopper",provide(){return{[Ri]:{parentPopper:this}}},inject:{[Ri]:{default:null}},props:{theme:{type:String,required:!0},targetNodes:{type:Function,required:!0},referenceNode:{type:Function,default:null},popperNode:{type:Function,required:!0},shown:{type:Boolean,default:!1},showGroup:{type:String,default:null},ariaId:{default:null},disabled:{type:Boolean,default:V("disabled")},positioningDisabled:{type:Boolean,default:V("positioningDisabled")},placement:{type:String,default:V("placement"),validator:e=>Xa.includes(e)},delay:{type:[String,Number,Object],default:V("delay")},distance:{type:[Number,String],default:V("distance")},skidding:{type:[Number,String],default:V("skidding")},triggers:{type:Array,default:V("triggers")},showTriggers:{type:[Array,Function],default:V("showTriggers")},hideTriggers:{type:[Array,Function],default:V("hideTriggers")},popperTriggers:{type:Array,default:V("popperTriggers")},popperShowTriggers:{type:[Array,Function],default:V("popperShowTriggers")},popperHideTriggers:{type:[Array,Function],default:V("popperHideTriggers")},container:{type:[String,Object,Qi,Boolean],default:V("container")},boundary:{type:[String,Qi],default:V("boundary")},strategy:{type:String,validator:e=>["absolute","fixed"].includes(e),default:V("strategy")},autoHide:{type:[Boolean,Function],default:V("autoHide")},handleResize:{type:Boolean,default:V("handleResize")},instantMove:{type:Boolean,default:V("instantMove")},eagerMount:{type:Boolean,default:V("eagerMount")},popperClass:{type:[String,Array,Object],default:V("popperClass")},computeTransformOrigin:{type:Boolean,default:V("computeTransformOrigin")},autoMinSize:{type:Boolean,default:V("autoMinSize")},autoSize:{type:[Boolean,String],default:V("autoSize")},autoMaxSize:{type:Boolean,default:V("autoMaxSize")},autoBoundaryMaxSize:{type:Boolean,default:V("autoBoundaryMaxSize")},preventOverflow:{type:Boolean,default:V("preventOverflow")},overflowPadding:{type:[Number,String],default:V("overflowPadding")},arrowPadding:{type:[Number,String],default:V("arrowPadding")},arrowOverflow:{type:Boolean,default:V("arrowOverflow")},flip:{type:Boolean,default:V("flip")},shift:{type:Boolean,default:V("shift")},shiftCrossAxis:{type:Boolean,default:V("shiftCrossAxis")},noAutoFocus:{type:Boolean,default:V("noAutoFocus")}},emits:["show","hide","update:shown","apply-show","apply-hide","close-group","close-directive","auto-hide","resize","dispose"],data(){return{isShown:!1,isMounted:!1,skipTransition:!1,classes:{showFrom:!1,showTo:!1,hideFrom:!1,hideTo:!0},result:{x:0,y:0,placement:"",strategy:this.strategy,arrow:{x:0,y:0,centerOffset:0},transformOrigin:null},shownChildren:new Set,lastAutoHide:!0}},computed:{popperId(){return this.ariaId!=null?this.ariaId:this.randomId},shouldMountContent(){return this.eagerMount||this.isMounted},slotData(){return{popperId:this.popperId,isShown:this.isShown,shouldMountContent:this.shouldMountContent,skipTransition:this.skipTransition,autoHide:typeof this.autoHide=="function"?this.lastAutoHide:this.autoHide,show:this.show,hide:this.hide,handleResize:this.handleResize,onResize:this.onResize,classes:Ss(Ze({},this.classes),{popperClass:this.popperClass}),result:this.positioningDisabled?null:this.result,attrs:this.$attrs}},parentPopper(){var e;return(e=this[Ri])==null?void 0:e.parentPopper},hasPopperShowTriggerHover(){var e,t;return((e=this.popperTriggers)==null?void 0:e.includes("hover"))||((t=this.popperShowTriggers)==null?void 0:t.includes("hover"))}},watch:Ze(Ze({shown:"$_autoShowHide",disabled(e){e?this.dispose():this.init()},async container(){this.isShown&&(this.$_ensureTeleport(),await this.$_computePosition())}},["triggers","positioningDisabled"].reduce((e,t)=>(e[t]="$_refreshListeners",e),{})),["placement","distance","skidding","boundary","strategy","overflowPadding","arrowPadding","preventOverflow","shift","shiftCrossAxis","flip"].reduce((e,t)=>(e[t]="$_computePosition",e),{})),created(){this.$_isDisposed=!0,this.randomId=`popper_${[Math.random(),Date.now()].map(e=>e.toString(36).substring(2,10)).join("_")}`,this.autoMinSize&&console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'),this.autoMaxSize&&console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.")},mounted(){this.init(),this.$_detachPopperNode()},activated(){this.$_autoShowHide()},deactivated(){this.hide()},beforeUnmount(){this.dispose()},methods:{show({event:e=null,skipDelay:t=!1,force:s=!1}={}){var i,n;((i=this.parentPopper)==null?void 0:i.lockedChild)&&this.parentPopper.lockedChild!==this||(this.$_pendingHide=!1,(s||!this.disabled)&&(((n=this.parentPopper)==null?void 0:n.lockedChild)===this&&(this.parentPopper.lockedChild=null),this.$_scheduleShow(e,t),this.$emit("show"),this.$_showFrameLocked=!0,requestAnimationFrame(()=>{this.$_showFrameLocked=!1})),this.$emit("update:shown",!0))},hide({event:e=null,skipDelay:t=!1}={}){var s;if(!this.$_hideInProgress){if(this.shownChildren.size>0){this.$_pendingHide=!0;return}if(this.hasPopperShowTriggerHover&&this.$_isAimingPopper()){this.parentPopper&&(this.parentPopper.lockedChild=this,clearTimeout(this.parentPopper.lockedChildTimer),this.parentPopper.lockedChildTimer=setTimeout(()=>{this.parentPopper.lockedChild===this&&(this.parentPopper.lockedChild.hide({skipDelay:t}),this.parentPopper.lockedChild=null)},1e3));return}((s=this.parentPopper)==null?void 0:s.lockedChild)===this&&(this.parentPopper.lockedChild=null),this.$_pendingHide=!1,this.$_scheduleHide(e,t),this.$emit("hide"),this.$emit("update:shown",!1)}},init(){var e,t;!this.$_isDisposed||(this.$_isDisposed=!1,this.isMounted=!1,this.$_events=[],this.$_preventShow=!1,this.$_referenceNode=(t=(e=this.referenceNode)==null?void 0:e.call(this))!=null?t:this.$el,this.$_targetNodes=this.targetNodes().filter(s=>s.nodeType===s.ELEMENT_NODE),this.$_popperNode=this.popperNode(),this.$_innerNode=this.$_popperNode.querySelector(".v-popper__inner"),this.$_arrowNode=this.$_popperNode.querySelector(".v-popper__arrow-container"),this.$_swapTargetAttrs("title","data-original-title"),this.$_detachPopperNode(),this.triggers.length&&this.$_addEventListeners(),this.shown&&this.show())},dispose(){this.$_isDisposed||(this.$_isDisposed=!0,this.$_removeEventListeners(),this.hide({skipDelay:!0}),this.$_detachPopperNode(),this.isMounted=!1,this.isShown=!1,this.$_updateParentShownChildren(!1),this.$_swapTargetAttrs("data-original-title","title"),this.$emit("dispose"))},async onResize(){this.isShown&&(await this.$_computePosition(),this.$emit("resize"))},async $_computePosition(){var e;if(this.$_isDisposed||this.positioningDisabled)return;const t={strategy:this.strategy,middleware:[]};(this.distance||this.skidding)&&t.middleware.push(ad({mainAxis:this.distance,crossAxis:this.skidding}));const s=this.placement.startsWith("auto");if(s?t.middleware.push(sd({alignment:(e=this.placement.split("-")[1])!=null?e:""})):t.placement=this.placement,this.preventOverflow&&(this.shift&&t.middleware.push(ld({padding:this.overflowPadding,boundary:this.boundary,crossAxis:this.shiftCrossAxis})),!s&&this.flip&&t.middleware.push(nd({padding:this.overflowPadding,boundary:this.boundary}))),t.middleware.push(Xc({element:this.$_arrowNode,padding:this.arrowPadding})),this.arrowOverflow&&t.middleware.push({name:"arrowOverflow",fn:({placement:n,rects:o,middlewareData:a})=>{let r;const{centerOffset:l}=a.arrow;return n.startsWith("top")||n.startsWith("bottom")?r=Math.abs(l)>o.reference.width/2:r=Math.abs(l)>o.reference.height/2,{data:{overflow:r}}}}),this.autoMinSize||this.autoSize){const n=this.autoSize?this.autoSize:this.autoMinSize?"min":null;t.middleware.push({name:"autoSize",fn:({rects:o,placement:a,middlewareData:r})=>{var l;if((l=r.autoSize)!=null&&l.skip)return{};let d,h;return a.startsWith("top")||a.startsWith("bottom")?d=o.reference.width:h=o.reference.height,this.$_innerNode.style[n==="min"?"minWidth":n==="max"?"maxWidth":"width"]=d!=null?`${d}px`:null,this.$_innerNode.style[n==="min"?"minHeight":n==="max"?"maxHeight":"height"]=h!=null?`${h}px`:null,{data:{skip:!0},reset:{rects:!0}}}})}(this.autoMaxSize||this.autoBoundaryMaxSize)&&(this.$_innerNode.style.maxWidth=null,this.$_innerNode.style.maxHeight=null,t.middleware.push(cd({boundary:this.boundary,padding:this.overflowPadding,apply:({width:n,height:o})=>{this.$_innerNode.style.maxWidth=n!=null?`${n}px`:null,this.$_innerNode.style.maxHeight=o!=null?`${o}px`:null}})));const i=await kd(this.$_referenceNode,this.$_popperNode,t);Object.assign(this.result,{x:i.x,y:i.y,placement:i.placement,strategy:i.strategy,arrow:Ze(Ze({},i.middlewareData.arrow),i.middlewareData.arrowOverflow)})},$_scheduleShow(e=null,t=!1){if(this.$_updateParentShownChildren(!0),this.$_hideInProgress=!1,clearTimeout(this.$_scheduleTimer),Ct&&this.instantMove&&Ct.instantMove&&Ct!==this.parentPopper){Ct.$_applyHide(!0),this.$_applyShow(!0);return}t?this.$_applyShow():this.$_scheduleTimer=setTimeout(this.$_applyShow.bind(this),this.$_computeDelay("show"))},$_scheduleHide(e=null,t=!1){if(this.shownChildren.size>0){this.$_pendingHide=!0;return}this.$_updateParentShownChildren(!1),this.$_hideInProgress=!0,clearTimeout(this.$_scheduleTimer),this.isShown&&(Ct=this),t?this.$_applyHide():this.$_scheduleTimer=setTimeout(this.$_applyHide.bind(this),this.$_computeDelay("hide"))},$_computeDelay(e){const t=this.delay;return parseInt(t&&t[e]||t||0)},async $_applyShow(e=!1){clearTimeout(this.$_disposeTimer),clearTimeout(this.$_scheduleTimer),this.skipTransition=e,!this.isShown&&(this.$_ensureTeleport(),await Ai(),await this.$_computePosition(),await this.$_applyShowEffect(),this.positioningDisabled||this.$_registerEventListeners([...Zs(this.$_referenceNode),...Zs(this.$_popperNode)],"scroll",()=>{this.$_computePosition()}))},async $_applyShowEffect(){if(this.$_hideInProgress)return;if(this.computeTransformOrigin){const t=this.$_referenceNode.getBoundingClientRect(),s=this.$_popperNode.querySelector(".v-popper__wrapper"),i=s.parentNode.getBoundingClientRect(),n=t.x+t.width/2-(i.left+s.offsetLeft),o=t.y+t.height/2-(i.top+s.offsetTop);this.result.transformOrigin=`${n}px ${o}px`}this.isShown=!0,this.$_applyAttrsToTarget({"aria-describedby":this.popperId,"data-popper-shown":""});const e=this.showGroup;if(e){let t;for(let s=0;s<Oe.length;s++)t=Oe[s],t.showGroup!==e&&(t.hide(),t.$emit("close-group"))}Oe.push(this),document.body.classList.add("v-popper--some-open");for(const t of To(this.theme))Lo(t).push(this),document.body.classList.add(`v-popper--some-open--${t}`);this.$emit("apply-show"),this.classes.showFrom=!0,this.classes.showTo=!1,this.classes.hideFrom=!1,this.classes.hideTo=!1,await Ai(),this.classes.showFrom=!1,this.classes.showTo=!0,this.noAutoFocus||this.$_popperNode.focus()},async $_applyHide(e=!1){if(this.shownChildren.size>0){this.$_pendingHide=!0,this.$_hideInProgress=!1;return}if(clearTimeout(this.$_scheduleTimer),!this.isShown)return;this.skipTransition=e,So(Oe,this),Oe.length===0&&document.body.classList.remove("v-popper--some-open");for(const s of To(this.theme)){const i=Lo(s);So(i,this),i.length===0&&document.body.classList.remove(`v-popper--some-open--${s}`)}Ct===this&&(Ct=null),this.isShown=!1,this.$_applyAttrsToTarget({"aria-describedby":void 0,"data-popper-shown":void 0}),clearTimeout(this.$_disposeTimer);const t=Qt(this.theme,"disposeTimeout");t!==null&&(this.$_disposeTimer=setTimeout(()=>{this.$_popperNode&&(this.$_detachPopperNode(),this.isMounted=!1)},t)),this.$_removeEventListeners("scroll"),this.$emit("apply-hide"),this.classes.showFrom=!1,this.classes.showTo=!1,this.classes.hideFrom=!0,this.classes.hideTo=!1,await Ai(),this.classes.hideFrom=!1,this.classes.hideTo=!0},$_autoShowHide(){this.shown?this.show():this.hide()},$_ensureTeleport(){if(this.$_isDisposed)return;let e=this.container;if(typeof e=="string"?e=window.document.querySelector(e):e===!1&&(e=this.$_targetNodes[0].parentNode),!e)throw new Error("No container for popover: "+this.container);e.appendChild(this.$_popperNode),this.isMounted=!0},$_addEventListeners(){const e=s=>{this.isShown&&!this.$_hideInProgress||(s.usedByTooltip=!0,!this.$_preventShow&&this.show({event:s}))};this.$_registerTriggerListeners(this.$_targetNodes,$o,this.triggers,this.showTriggers,e),this.$_registerTriggerListeners([this.$_popperNode],$o,this.popperTriggers,this.popperShowTriggers,e);const t=s=>{s.usedByTooltip||this.hide({event:s})};this.$_registerTriggerListeners(this.$_targetNodes,Co,this.triggers,this.hideTriggers,t),this.$_registerTriggerListeners([this.$_popperNode],Co,this.popperTriggers,this.popperHideTriggers,t)},$_registerEventListeners(e,t,s){this.$_events.push({targetNodes:e,eventType:t,handler:s}),e.forEach(i=>i.addEventListener(t,s,Mt?{passive:!0}:void 0))},$_registerTriggerListeners(e,t,s,i,n){let o=s;i!=null&&(o=typeof i=="function"?i(o):i),o.forEach(a=>{const r=t[a];r&&this.$_registerEventListeners(e,r,n)})},$_removeEventListeners(e){const t=[];this.$_events.forEach(s=>{const{targetNodes:i,eventType:n,handler:o}=s;!e||e===n?i.forEach(a=>a.removeEventListener(n,o)):t.push(s)}),this.$_events=t},$_refreshListeners(){this.$_isDisposed||(this.$_removeEventListeners(),this.$_addEventListeners())},$_handleGlobalClose(e,t=!1){this.$_showFrameLocked||(this.hide({event:e}),e.closePopover?this.$emit("close-directive"):this.$emit("auto-hide"),t&&(this.$_preventShow=!0,setTimeout(()=>{this.$_preventShow=!1},300)))},$_detachPopperNode(){this.$_popperNode.parentNode&&this.$_popperNode.parentNode.removeChild(this.$_popperNode)},$_swapTargetAttrs(e,t){for(const s of this.$_targetNodes){const i=s.getAttribute(e);i&&(s.removeAttribute(e),s.setAttribute(t,i))}},$_applyAttrsToTarget(e){for(const t of this.$_targetNodes)for(const s in e){const i=e[s];i==null?t.removeAttribute(s):t.setAttribute(s,i)}},$_updateParentShownChildren(e){let t=this.parentPopper;for(;t;)e?t.shownChildren.add(this.randomId):(t.shownChildren.delete(this.randomId),t.$_pendingHide&&t.hide()),t=t.parentPopper},$_isAimingPopper(){const e=this.$_referenceNode.getBoundingClientRect();if(hs>=e.left&&hs<=e.right&&us>=e.top&&us<=e.bottom){const t=this.$_popperNode.getBoundingClientRect(),s=hs-pt,i=us-ht,o=t.left+t.width/2-pt+(t.top+t.height/2)-ht+t.width+t.height,a=pt+s*o,r=ht+i*o;return Ns(pt,ht,a,r,t.left,t.top,t.left,t.bottom)||Ns(pt,ht,a,r,t.left,t.top,t.right,t.top)||Ns(pt,ht,a,r,t.right,t.top,t.right,t.bottom)||Ns(pt,ht,a,r,t.left,t.bottom,t.right,t.bottom)}return!1}},render(){return this.$slots.default(this.slotData)}});typeof document<"u"&&typeof window<"u"&&(Ga?(document.addEventListener("touchstart",Ao,Mt?{passive:!0,capture:!0}:!0),document.addEventListener("touchend",Rd,Mt?{passive:!0,capture:!0}:!0)):(window.addEventListener("mousedown",Ao,!0),window.addEventListener("click",Ad,!0)),window.addEventListener("resize",Ed));function Ao(e){for(let t=0;t<Oe.length;t++){const s=Oe[t];try{const i=s.popperNode();s.$_mouseDownContains=i.contains(e.target)}catch{}}}function Ad(e){Qa(e)}function Rd(e){Qa(e,!0)}function Qa(e,t=!1){const s={};for(let i=Oe.length-1;i>=0;i--){const n=Oe[i];try{const o=n.$_containsGlobalTarget=Id(n,e);n.$_pendingHide=!1,requestAnimationFrame(()=>{if(n.$_pendingHide=!1,!s[n.randomId]&&Ro(n,o,e)){if(n.$_handleGlobalClose(e,t),!e.closeAllPopover&&e.closePopover&&o){let r=n.parentPopper;for(;r;)s[r.randomId]=!0,r=r.parentPopper;return}let a=n.parentPopper;for(;a&&Ro(a,a.$_containsGlobalTarget,e);){a.$_handleGlobalClose(e,t);a=a.parentPopper}}})}catch{}}}function Id(e,t){const s=e.popperNode();return e.$_mouseDownContains||s.contains(t.target)}function Ro(e,t,s){return s.closeAllPopover||s.closePopover&&t||Od(e,s)&&!t}function Od(e,t){if(typeof e.autoHide=="function"){const s=e.autoHide(t);return e.lastAutoHide=s,s}return e.autoHide}function Ed(e){for(let t=0;t<Oe.length;t++)Oe[t].$_computePosition(e)}function Zi(){for(let e=0;e<Oe.length;e++)Oe[e].hide()}let pt=0,ht=0,hs=0,us=0;typeof window<"u"&&window.addEventListener("mousemove",e=>{pt=hs,ht=us,hs=e.clientX,us=e.clientY},Mt?{passive:!0}:void 0);function Ns(e,t,s,i,n,o,a,r){const l=((a-n)*(t-o)-(r-o)*(e-n))/((r-o)*(s-e)-(a-n)*(i-t)),d=((s-e)*(t-o)-(i-t)*(e-n))/((r-o)*(s-e)-(a-n)*(i-t));return l>=0&&l<=1&&d>=0&&d<=1}var yi=(e,t)=>{const s=e.__vccOpts||e;for(const[i,n]of t)s[i]=n;return s};const Md={extends:Ja()};function Hd(e,t,s,i,n,o){return k(),C("div",{ref:"reference",class:ye(["v-popper",{"v-popper--shown":e.slotData.isShown}])},[yt(e.$slots,"default",Do(Cn(e.slotData)))],2)}var Nd=yi(Md,[["render",Hd]]);function jd(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);var s=e.indexOf("Trident/");if(s>0){var i=e.indexOf("rv:");return parseInt(e.substring(i+3,e.indexOf(".",i)),10)}var n=e.indexOf("Edge/");return n>0?parseInt(e.substring(n+5,e.indexOf(".",n)),10):-1}let Bs;function en(){en.init||(en.init=!0,Bs=jd()!==-1)}var vi={name:"ResizeObserver",props:{emitOnMount:{type:Boolean,default:!1},ignoreWidth:{type:Boolean,default:!1},ignoreHeight:{type:Boolean,default:!1}},emits:["notify"],mounted(){en(),ot(()=>{this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitOnMount&&this.emitSize()});const e=document.createElement("object");this._resizeObject=e,e.setAttribute("aria-hidden","true"),e.setAttribute("tabindex",-1),e.onload=this.addResizeHandlers,e.type="text/html",Bs&&this.$el.appendChild(e),e.data="about:blank",Bs||this.$el.appendChild(e)},beforeUnmount(){this.removeResizeHandlers()},methods:{compareAndNotify(){(!this.ignoreWidth&&this._w!==this.$el.offsetWidth||!this.ignoreHeight&&this._h!==this.$el.offsetHeight)&&(this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitSize())},emitSize(){this.$emit("notify",{width:this._w,height:this._h})},addResizeHandlers(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.compareAndNotify),this.compareAndNotify()},removeResizeHandlers(){this._resizeObject&&this._resizeObject.onload&&(!Bs&&this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.removeEventListener("resize",this.compareAndNotify),this.$el.removeChild(this._resizeObject),this._resizeObject.onload=null,this._resizeObject=null)}}};const Fd=_l();He("data-v-b329ee4c");const zd={class:"resize-observer",tabindex:"-1"};Ne();const Dd=Fd((e,t,s,i,n,o)=>(k(),Ge("div",zd)));vi.render=Dd;vi.__scopeId="data-v-b329ee4c";vi.__file="src/components/ResizeObserver.vue";var Za=(e="theme")=>({computed:{themeClass(){return Ld(this[e])}}});const Bd=ee({name:"VPopperContent",components:{ResizeObserver:vi},mixins:[Za()],props:{popperId:String,theme:String,shown:Boolean,mounted:Boolean,skipTransition:Boolean,autoHide:Boolean,handleResize:Boolean,classes:Object,result:Object},emits:["hide","resize"],methods:{toPx(e){return e!=null&&!isNaN(e)?`${e}px`:null}}}),qd=["id","aria-hidden","tabindex","data-popper-placement"],Wd={ref:"inner",class:"v-popper__inner"},Ud=m("div",{class:"v-popper__arrow-outer"},null,-1),Yd=m("div",{class:"v-popper__arrow-inner"},null,-1),Kd=[Ud,Yd];function Vd(e,t,s,i,n,o){const a=ws("ResizeObserver");return k(),C("div",{id:e.popperId,ref:"popover",class:ye(["v-popper__popper",[e.themeClass,e.classes.popperClass,{"v-popper__popper--shown":e.shown,"v-popper__popper--hidden":!e.shown,"v-popper__popper--show-from":e.classes.showFrom,"v-popper__popper--show-to":e.classes.showTo,"v-popper__popper--hide-from":e.classes.hideFrom,"v-popper__popper--hide-to":e.classes.hideTo,"v-popper__popper--skip-transition":e.skipTransition,"v-popper__popper--arrow-overflow":e.result&&e.result.arrow.overflow,"v-popper__popper--no-positioning":!e.result}]]),style:et(e.result?{position:e.result.strategy,transform:`translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`}:void 0),"aria-hidden":e.shown?"false":"true",tabindex:e.autoHide?0:void 0,"data-popper-placement":e.result?e.result.placement:void 0,onKeyup:t[2]||(t[2]=Fa(r=>e.autoHide&&e.$emit("hide"),["esc"]))},[m("div",{class:"v-popper__backdrop",onClick:t[0]||(t[0]=r=>e.autoHide&&e.$emit("hide"))}),m("div",{class:"v-popper__wrapper",style:et(e.result?{transformOrigin:e.result.transformOrigin}:void 0)},[m("div",Wd,[e.mounted?(k(),C(F,{key:0},[m("div",null,[yt(e.$slots,"default")]),e.handleResize?(k(),Ge(a,{key:0,onNotify:t[1]||(t[1]=r=>e.$emit("resize",r))})):xe("",!0)],64)):xe("",!0)],512),m("div",{ref:"arrow",class:"v-popper__arrow-container",style:et(e.result?{left:e.toPx(e.result.arrow.x),top:e.toPx(e.result.arrow.y)}:void 0)},Kd,4)],4)],46,qd)}var er=yi(Bd,[["render",Vd]]),tr={methods:{show(...e){return this.$refs.popper.show(...e)},hide(...e){return this.$refs.popper.hide(...e)},dispose(...e){return this.$refs.popper.dispose(...e)},onResize(...e){return this.$refs.popper.onResize(...e)}}};const Gd=ee({name:"VPopperWrapper",components:{Popper:Nd,PopperContent:er},mixins:[tr,Za("finalTheme")],props:{theme:{type:String,default:null}},computed:{finalTheme(){var e;return(e=this.theme)!=null?e:this.$options.vPopperTheme}},methods:{getTargetNodes(){return Array.from(this.$el.children).filter(e=>e!==this.$refs.popperContent.$el)}}});function Xd(e,t,s,i,n,o){const a=ws("PopperContent"),r=ws("Popper");return k(),Ge(r,{ref:"popper",theme:e.finalTheme,"target-nodes":e.getTargetNodes,"popper-node":()=>e.$refs.popperContent.$el,class:ye([e.themeClass])},{default:Le(({popperId:l,isShown:d,shouldMountContent:h,skipTransition:u,autoHide:f,show:T,hide:L,handleResize:A,onResize:R,classes:I,result:E})=>[yt(e.$slots,"default",{shown:d,show:T,hide:L}),W(a,{ref:"popperContent","popper-id":l,theme:e.finalTheme,shown:d,mounted:h,"skip-transition":u,"auto-hide":f,"handle-resize":A,classes:I,result:E,onHide:L,onResize:R},{default:Le(()=>[yt(e.$slots,"popper",{shown:d,hide:L})]),_:2},1032,["popper-id","theme","shown","mounted","skip-transition","auto-hide","handle-resize","classes","result","onHide","onResize"])]),_:3},8,["theme","target-nodes","popper-node","class"])}var An=yi(Gd,[["render",Xd]]);const Jd=ee(Ss(Ze({},An),{name:"VDropdown",vPopperTheme:"dropdown"})),Qd=ee(Ss(Ze({},An),{name:"VMenu",vPopperTheme:"menu"})),Zd=ee(Ss(Ze({},An),{name:"VTooltip",vPopperTheme:"tooltip"})),ep=ee({name:"VTooltipDirective",components:{Popper:Ja(),PopperContent:er},mixins:[tr],inheritAttrs:!1,props:{theme:{type:String,default:"tooltip"},html:{type:Boolean,default:e=>Qt(e.theme,"html")},content:{type:[String,Number,Function],default:null},loadingContent:{type:String,default:e=>Qt(e.theme,"loadingContent")}},data(){return{asyncContent:null}},computed:{isContentAsync(){return typeof this.content=="function"},loading(){return this.isContentAsync&&this.asyncContent==null},finalContent(){return this.isContentAsync?this.loading?this.loadingContent:this.asyncContent:this.content}},watch:{content:{handler(){this.fetchContent(!0)},immediate:!0},async finalContent(){await this.$nextTick(),this.$refs.popper.onResize()}},created(){this.$_fetchId=0},methods:{fetchContent(e){if(typeof this.content=="function"&&this.$_isShown&&(e||!this.$_loading&&this.asyncContent==null)){this.asyncContent=null,this.$_loading=!0;const t=++this.$_fetchId,s=this.content(this);s.then?s.then(i=>this.onResult(t,i)):this.onResult(t,s)}},onResult(e,t){e===this.$_fetchId&&(this.$_loading=!1,this.asyncContent=t)},onShow(){this.$_isShown=!0,this.fetchContent()},onHide(){this.$_isShown=!1}}}),tp=["innerHTML"],sp=["textContent"];function ip(e,t,s,i,n,o){const a=ws("PopperContent"),r=ws("Popper");return k(),Ge(r,Ma({ref:"popper"},e.$attrs,{theme:e.theme,"popper-node":()=>e.$refs.popperContent.$el,onApplyShow:e.onShow,onApplyHide:e.onHide}),{default:Le(({popperId:l,isShown:d,shouldMountContent:h,skipTransition:u,autoHide:f,hide:T,handleResize:L,onResize:A,classes:R,result:I})=>[W(a,{ref:"popperContent",class:ye({"v-popper--tooltip-loading":e.loading}),"popper-id":l,theme:e.theme,shown:d,mounted:h,"skip-transition":u,"auto-hide":f,"handle-resize":L,classes:R,result:I,onHide:T,onResize:A},{default:Le(()=>[e.html?(k(),C("div",{key:0,innerHTML:e.finalContent},null,8,tp)):(k(),C("div",{key:1,textContent:U(e.finalContent)},null,8,sp))]),_:2},1032,["class","popper-id","theme","shown","mounted","skip-transition","auto-hide","handle-resize","classes","result","onHide","onResize"])]),_:1},16,["theme","popper-node","onApplyShow","onApplyHide"])}var np=yi(ep,[["render",ip]]);const sr="v-popper--has-tooltip";function op(e,t){let s=e.placement;if(!s&&t)for(const i of Xa)t[i]&&(s=i);return s||(s=Qt(e.theme||"tooltip","placement")),s}function ir(e,t,s){let i;const n=typeof t;return n==="string"?i={content:t}:t&&n==="object"?i=t:i={content:!1},i.placement=op(i,s),i.targetNodes=()=>[e],i.referenceNode=()=>e,i}let Ii,ks,ap=0;function rp(){if(Ii)return;ks=Ee([]),Ii=za({name:"VTooltipDirectiveApp",setup(){return{directives:ks}},render(){return this.directives.map(t=>bc(np,Ss(Ze({},t.options),{shown:t.shown||t.options.shown,key:t.id})))},devtools:{hide:!0}});const e=document.createElement("div");document.body.appendChild(e),Ii.mount(e)}function nr(e,t,s){rp();const i=Ee(ir(e,t,s)),n=Ee(!1),o={id:ap++,options:i,shown:n};return ks.value.push(o),e.classList&&e.classList.add(sr),e.$_popper={options:i,item:o,show(){n.value=!0},hide(){n.value=!1}}}function or(e){if(e.$_popper){const t=ks.value.indexOf(e.$_popper.item);t!==-1&&ks.value.splice(t,1),delete e.$_popper,delete e.$_popperOldShown,delete e.$_popperMountTarget}e.classList&&e.classList.remove(sr)}function Io(e,{value:t,modifiers:s}){const i=ir(e,t,s);if(!i.content||Qt(i.theme||"tooltip","disabled"))or(e);else{let n;e.$_popper?(n=e.$_popper,n.options.value=i):n=nr(e,t,s),typeof t.shown<"u"&&t.shown!==e.$_popperOldShown&&(e.$_popperOldShown=t.shown,t.shown?n.show():n.hide())}}var lp={beforeMount:Io,updated:Io,beforeUnmount(e){or(e)}};function Oo(e){e.addEventListener("click",ar),e.addEventListener("touchstart",rr,Mt?{passive:!0}:!1)}function Eo(e){e.removeEventListener("click",ar),e.removeEventListener("touchstart",rr),e.removeEventListener("touchend",lr),e.removeEventListener("touchcancel",cr)}function ar(e){const t=e.currentTarget;e.closePopover=!t.$_vclosepopover_touch,e.closeAllPopover=t.$_closePopoverModifiers&&!!t.$_closePopoverModifiers.all}function rr(e){if(e.changedTouches.length===1){const t=e.currentTarget;t.$_vclosepopover_touch=!0;const s=e.changedTouches[0];t.$_vclosepopover_touchPoint=s,t.addEventListener("touchend",lr),t.addEventListener("touchcancel",cr)}}function lr(e){const t=e.currentTarget;if(t.$_vclosepopover_touch=!1,e.changedTouches.length===1){const s=e.changedTouches[0],i=t.$_vclosepopover_touchPoint;e.closePopover=Math.abs(s.screenY-i.screenY)<20&&Math.abs(s.screenX-i.screenX)<20,e.closeAllPopover=t.$_closePopoverModifiers&&!!t.$_closePopoverModifiers.all}}function cr(e){const t=e.currentTarget;t.$_vclosepopover_touch=!1}var cp={beforeMount(e,{value:t,modifiers:s}){e.$_closePopoverModifiers=s,(typeof t>"u"||t)&&Oo(e)},updated(e,{value:t,oldValue:s,modifiers:i}){e.$_closePopoverModifiers=i,t!==s&&(typeof t>"u"||t?Oo(e):Eo(e))},beforeUnmount(e){Eo(e)}};function dp(e,t={}){e.$_vTooltipInstalled||(e.$_vTooltipInstalled=!0,Va(tt,t),e.directive("tooltip",lp),e.directive("close-popper",cp),e.component("VTooltip",Zd),e.component("VDropdown",Jd),e.component("VMenu",Qd))}const pp={version:"2.0.0-beta.20",install:dp,options:tt};function Ps(){Array.from(document.querySelectorAll(".table *")).forEach(t=>{nr(t,{triggers:["hover"],content:hp(t),delay:0},null),t.addEventListener("mouseover",s=>{s.stopPropagation(),Zi()}),t.addEventListener("mouseenter",s=>{s.stopPropagation(),Zi()})})}function hp(e){const t=e.tagName.toLowerCase(),s=e.getAttribute("class"),i=e.getAttribute("id");return`<${t}${i?` id="${i}"`:""}${s?` class="${s}"`:""}>`}const up=[{name:"Type Selector",doThis:"Select the plates",selector:"plate",syntax:"tagname",helpTitle:"Select elements by their type",help:"Selects all elements of a type. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",examples:["<strong>div</strong> selects all <tag>div</tag> elements.","<strong>p</strong> selects all <tag>p</tag> elements."],markup:`
    <plate></plate>
    <bento><plate></plate></bento>
    <bento><sushi/></bento>
    <bento>
    <plate><sushi /></plate>
    </bento>
    `},{name:"ID Selector",doThis:"Select the fancy plate",selector:"#fancy",helpTitle:"Select elements with an ID",syntax:"#id",help:"Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.",examples:['<strong>#cool</strong> selects any element with <strong>id="cool"</strong>','<strong>ul#long</strong> selects <tag>ul id="long"</tag>'],markup:`
    <plate></plate>
    <plate id="fancy"></plate>
    <plate></plate>
    <bento></bento>
    `},{name:"Class Selector",doThis:"Select the small apples",selector:".small",helpTitle:"Select elements by their class",syntax:".classname",help:"The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.",examples:['<strong>.neato</strong> selects all elements with <strong>class="neato"</strong>'],markup:`
    <apple></apple>
    <apple class="small"></apple>
    <plate>
      <apple class="small" />
    </plate>
    <plate />
    `},{name:"Class Selector #2",doThis:"Select the small oranges",selector:"orange.small",helpTitle:"Combine the Class Selector",syntax:"tag.classname",help:"You can combine the class selector with other selectors, like the type selector.",examples:['<strong>ul.important</strong> selects all <tag>ul</tag> elements that have <strong>class="important"</strong>','<strong>#big.wide</strong> selects all elements with <strong>id="big"</strong> that also have <strong>class="wide"</strong>'],markup:`
    <apple></apple>
    <apple class="small"></apple>
    <bento>
      <orange class="small"/>
    </bento>
    <plate>
      <orange/>
    </plate>
    <plate>
      <orange class="small"/>
    </plate>`},{name:"Descendant Selector",helpTitle:"Select an element inside another element",doThis:"Select the sushi on the plate",selector:"plate sushi",syntax:"A B",help:"Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.",examples:["<strong>p  strong</strong> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>",'<strong>#fancy  span</strong> selects any <tag>span</tag> elements that are inside of the element with <strong>id="fancy"</strong>'],markup:`
    <bento></bento>
    <plate>
      <sushi />
    </plate>
    <sushi></sushi>
    `},{name:"Descendant & ID",doThis:"Select the sushi on the fancy plate",selector:"#fancy sushi",helpTitle:"Combine the Descendant & ID Selectors",syntax:"#id A",help:"You can combine any selector with the descendent selector.",examples:['<strong>#cool span</strong> selects all <tag>span</tag> elements that are inside of elements with <strong>id="cool"</strong>'],markup:`
    <bento>
    <sushi/>
    </bento>
    <plate id="fancy">
      <sushi/>
    </plate>
    <plate>
      <sushi/>
    </plate>
    `},{name:"Challenge #1",doThis:"Select the small oranges in the bentos",selector:"bento orange.small",helpTitle:"You can do it...",help:"Combine what you learned in the last few levels to solve this one!",markup:`
    <bento>
      <orange/>
    </bento>
    <orange class="small"></orange>
    <bento>
      <orange class="small"/>
    </bento>
    <bento>
      <apple class="small"/>
    </bento>
    <bento>
      <orange class="small"/>
    </bento>
    `},{doThis:"Select all the plates and bentos",selector:"plate,bento",name:"Comma Combinator",helpTitle:"Combine, selectors, with... commas!",syntax:"A, B, C",help:"Commas can be used to combine several selectors. You can combine any number of selectors this way.",examples:['<strong>p, .fun</strong> selects all <tag>p</tag> elements as well as all elements with <strong>class="fun"</strong>',"<strong>a, p, div</strong> selects all <tag>a</tag>, <tag>p</tag> and <tag>div</tag> elements"],markup:`
    <pickle class="small"></pickle>
    <orange></orange>
    <plate>
      <sushi />
    </plate>
    <bento>
      <sushi />
    </bento>
    <plate>
      <apple></apple>
    </plate>
    `},{doThis:"Select all the things!",selector:"*",name:"The Universal Selector",helpTitle:"You can select everything!",syntax:"*",help:"You can select all elements with the universal selector! ",examples:["<strong>p *</strong> selects any element inside all <tag>p</tag> elements."],markup:`
    <apple></apple>
    <plate>
      <orange class="small" />
    </plate>
    <bento></bento>
    <bento>
      <sushi />
    </bento>
    <plate id="fancy">
        <toast></toast>
    </plate>
    `},{name:"Universal Selector #2",doThis:"Select everything on a plate",selector:"plate *",syntax:"A  *",helpTitle:"Combine the Universal Selector",help:"This selects all elements inside of <strong>A</strong>.",examples:["<strong>p *</strong> selects every element inside all <tag>p</tag> elements.",'<strong>ul.fancy *</strong> selects every element inside all <tag>ul class="fancy"</tag> elements.'],markup:`
    <plate id="fancy">
      <orange class="small"/>
    </plate>
    <plate>
      <sushi />
    </plate>
    <apple class="small"></apple>
    <plate>
      <apple></apple>
    </plate>
    <bento>
      <sushi />
    </bento>`},{doThis:"Select every apple that are just to the right of a plate",selector:"plate + apple",helpTitle:"Select an element that directly follows another element",name:"Adjacent Sibling Selector",syntax:"A + B",help:"This selects all <strong>B</strong> elements that directly follow <strong>A</strong>. Elements that follow one another are called siblings. They're on the same level, or depth. <br/><br/>In the HTML markup for this level, elements that have the same indentation are siblings.",examples:['<strong>p + .intro</strong> selects every element with <strong>class="intro"</strong> that directly follows a <tag>p</tag>',"<strong>div + a</strong> selects every <tag>a</tag> element that directly follows a <tag>div</tag>"],markup:`
    <bento>
      <apple class="small"></apple>
    </bento>
    <plate></plate>
    <apple class="small"></apple>
    <plate><toast /></plate>
    <apple></apple>
    <apple class="small"></apple>
    <apple class="small"></apple>
    `},{name:"General Sibling Selector",helpTitle:"Select elements that follows another element",syntax:"A ~ B",doThis:"Select all the pickles to the right of the bento, not on a plate",selector:"bento ~ pickle",help:"You can select all siblings of an element that follow it. This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one.",examples:["<strong>A ~ B</strong> selects all <strong>B</strong> that follow a <strong>A</strong>"],markup:`
    <pickle></pickle>
    <bento>
      <sushi />
    </bento>
    <pickle class="small"></pickle>
    <pickle></pickle>
    <plate>
      <pickle></pickle>
    </plate>
    <plate>
      <pickle class="small"></pickle>
    </plate>
    `},{name:"Child Selector",syntax:"A > B ",doThis:"Select the apple directly on a plate",selector:"plate > apple",helpTitle:"Select direct children of an element",help:"You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element. <br><br>Elements that are nested deeper than that are called descendant elements.",examples:["<strong>A > B</strong> selects all <strong>B</strong> that are a direct children <strong>A</strong>"],markup:`
    <plate>
      <bento>
        <apple class="small"></apple>
      </bento>
    </plate>
    <plate>
      <apple></apple>
    </plate>
    <plate></plate>
    <apple></apple>
    <apple class="small"></apple>
    `},{name:"First Child Pseudo-selector",helpTitle:"Select a first child element inside of another element",doThis:"Select the top orange",selector:"plate :first-child",syntax:":first-child",help:"You can select the first child element. A child element is any element that is directly nested in another element. You can combine this pseudo-selector with other selectors.",examples:["<strong>:first-child</strong> selects all first child elements.","<strong>p:first-child</strong> selects all first child <tag>p</tag> elements.","<strong>div p:first-child</strong> selects all first child <tag>p</tag> elements that are in a <tag>div</tag>."],markup:`
    <bento></bento>
    <plate></plate>
    <plate>
      <orange></orange>
      <orange></orange>
      <orange></orange>
    </plate>
    <pickle class="small"></pickle>
    `},{name:"Only Child Pseudo-selector",helpTitle:"Select an element that are the only element inside of another one.",doThis:"Select the items alone on a plate",selector:"plate :only-child",syntax:":only-child",help:"You can select any element that is the only element inside of another one.",examples:["<strong>span:only-child</strong> selects the <tag>span</tag> elements that are the only child of some other element.","<strong>ul li:only-child</strong> selects the only <tag>li</tag> element that are in a <tag>ul</tag>."],markup:`
    <plate>
      <toast></toast>
    </plate>
    <plate>
      <sushi></sushi>
    </plate>
    <bento>
      <pickle></pickle>
    </bento>
    <plate>
      <orange class="small"></orange>
      <orange></orange>
    </plate>
    <pickle class="small"></pickle>
    `},{name:"Last Child Pseudo-selector",helpTitle:"Select the last element inside of another element",doThis:"Select the last pickle",selector:"pickle:last-child",syntax:":last-child",help:"You can use this selector to select an element that is the last child element inside of another element. <br><br>Pro Tip &rarr; In cases where there is only one element, that element counts as the first-child, only-child and last-child!",examples:["<strong>:last-child</strong> selects all last-child elements.","<strong>span:last-child</strong> selects all last-child <tag>span</tag> elements.","<strong>ul li:last-child</strong> selects the last <tag>li</tag> elements inside of any <tag>ul</tag>."],markup:`
    <plate id="fancy">
      <pickle></pickle>
      <apple class="small"></apple>
    </plate>
    <pickle class="small"></pickle>
    <plate>
      <orange></orange>
    </plate>
    <pickle class="small"></pickle>`},{name:"Nth Child Pseudo-selector",helpTitle:"Select an element by its order in another element",doThis:"Select the third plate, starting from the left",selector:":nth-child(3)",syntax:":nth-child(A)",help:"Selects the <strong>nth</strong> (Ex: 1st, 3rd, 12th etc.) child element in another element.",examples:["<strong>:nth-child(8)</strong> selects every element that is the 8th child of another element.","<strong>div p:nth-child(2)</strong> selects the second <strong>p</strong> in every <strong>div</strong>"],markup:`
    <plate><toast /></plate>
    <plate><toast /></plate>
    <plate><toast /></plate>
    <plate><toast /></plate>
    `},{name:"Nth Last Child Selector",helpTitle:"Select an element by its order in another element, counting from the back",doThis:"Select the third bento, starting from the right",selector:"bento:nth-last-child(3)",syntax:":nth-last-child(A)",help:"Selects the children from the bottom of the parent. This is like nth-child, but counting from the back!",examples:["<strong>:nth-last-child(2)</strong> selects all second-to-last child elements."],markup:`
    <bento></bento>
    <bento><sushi /></bento>
    <bento>
      <orange></orange>      
    </bento>
    <bento><sushi /></bento>
    `},{name:"First of Type Selector",helpTitle:"Select the first element of a specific type",doThis:"Select the first apple on the left",selector:"apple:first-of-type",syntax:":first-of-type",help:"Selects the first element of that type within another element.",examples:["<strong>span:first-of-type</strong> selects the first <tag>span</tag> in any element."],markup:`
    <orange class="small"></orange>
    <apple></apple>
    <apple class="small"></apple>
    <apple></apple>
    `},{name:"Nth of Type Selector",doThis:"Select all even plates",selector:"plate:nth-of-type(even)",syntax:":nth-of-type(A)",help:"Selects a specific element based on its type and order in another element - or even or odd instances of that element.",examples:["<strong>div:nth-of-type(2)</strong> selects the second instance of a div.","<strong>.example:nth-of-type(odd)</strong> selects all odd instances of a the example class."],markup:`
    <plate></plate>
    <plate></plate>
    <plate></plate>
    <plate></plate>
    <plate></plate>
    <plate></plate>
    `},{name:"Nth-of-type Selector with Formula",doThis:"Select every 2nd plate, starting from the 3rd",selector:"plate:nth-of-type(2n+3)",syntax:":nth-of-type(An+B)",help:"The nth-of-type formula selects every nth element, starting the count at a specific instance of that element.",examples:["<strong>span:nth-of-type(6n+2)</strong> selects every 6th instance of a <tag>span</tag>, starting from (and including) the second instance."],markup:`
    <plate></plate>
    <plate>
      <sushi />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate></plate>
    <plate>
      <apple />
    </plate>
    <plate></plate>
    <plate>
        <orange class="small"></orange>
    </plate>
    `},{name:"Only of Type Selector",helpTitle:"Select elements that are the only ones of their type within their parent element",selector:"plate *:only-of-type",syntax:":only-of-type",doThis:"Select one-of-a-kind items in a plate",help:"Selects the only element of its type within another element.",examples:["<strong>p span:only-of-type</strong> selects a <tag>span</tag> within any <tag>p</tag> if it is the only <tag>span</tag> in there."],markup:`
    <plate>
      <sushi />
    </plate>
    <plate>
      <apple class="small"></apple>
      <apple></apple>
    </plate>
    <plate>
      <apple class="small"></apple>
    </plate>
    <plate>
      <apple class="small"></apple>
      <orange></orange>
    </plate>
    <pickle />
    `},{name:"Last of Type Selector",helpTitle:"Select the last element of a specific type",doThis:"Select the last pickle",selector:"pickle:last-of-type",syntax:":last-of-type",help:"Selects each last element of that type within another element. Remember type refers the kind of tag, so <tag>p</tag> and <tag>span</tag> are different types. <br><br> I wonder if this is how the last dinosaur was selected before it went extinct.",examples:["<strong>div:last-of-type</strong> selects the last <tag>div</tag> in every element.","<strong>p span:last-of-type</strong> selects the last <tag>span</tag> in every <tag>p</tag>."],markup:`
    <orange class="small"></orange>
    <pickle></pickle>
    <apple class="small"></apple>
    <pickle></pickle>
    <orange class="small"></orange>
    <pickle></pickle>
    <apple class="small"></apple>
    `},{name:"Empty Selector",helpTitle:"Select elements that don't have children",doThis:"Select the empty bentos",selector:"bento:empty",syntax:":empty",help:"Selects elements that don't have any other elements inside of them.",examples:["<strong>div:empty</strong> selects all empty <tag>div</tag> elements."],markup:`
    <bento></bento>
    <bento>
      <sushi></sushi>
    </bento>
    <plate></plate>
    <bento></bento>`},{name:"Negation Pseudo-class",helpTitle:"Select all elements that don't match the negation selector",doThis:"Select the big apples",selector:"apple:not(.small)",syntax:":not(X)",help:'You can use this to select all elements that do not match selector <strong>"X"</strong>.',examples:['<strong>:not(#fancy)</strong> selects all elements that do not have <strong>id="fancy"</strong>.',"<strong>div:not(:first-child)</strong> selects every <tag>div</tag> that is not a first child.",'<strong>:not(.big, .medium)</strong> selects all elements that do not have <strong>class="big"</strong> or <strong>class="medium"</strong>.'],markup:`
    <plate id="fancy">
      <apple class="small"></apple>
    </plate>
    <plate>
      <apple></apple>
    </plate>
    <apple></apple>
    <plate>
      <orange class="small"></orange>
    </plate>
    <pickle class="small"></pickle>
    `},{name:"Attribute Selector",helpTitle:"Select all elements that have a specific attribute",doThis:"Select the items for someone",selector:"[for]",syntax:"[attribute]",help:'Attributes appear inside the opening tag of an element, like this: <tag>span attribute="value"</tag>. An attribute does not always have a value, it can be blank!',examples:['<strong>[value]</strong> selects all elements that have a <strong>value="anything"</strong> attribute.','<strong>[type]</strong> selects all elements that have a <strong>type="anything"</strong> attribute.'],markup:`
    <bento><apple class="small"/></bento>
    <apple for="Ethan"></apple>
    <plate for="Alice"><toast /></plate>
    <bento for="Clara"><sushi /></bento>
    <pickle></pickle>`},{name:"Attribute Selector",helpTitle:"Select all elements that have a specific attribute",doThis:"Select the plates for someone",selector:"plate[for]",syntax:"A[attribute]",help:"Combine the attribute selector with another selector (like the tag name selector) by adding it to the end.",examples:['<strong>a[href]</strong> selects all <tag>a</tag> elements that have a <strong>href="anything"</strong> attribute.',"<strong>input[disabled]</strong> selects all <tag>input</tag> elements with the <strong>disabled</strong> attribute"],markup:`
    <plate for="Sarah"><sushi/></plate>
    <plate for="Luke"><apple/></plate>
    <plate></plate>
    <bento for="Steve"><orange/></bento>
    `},{name:"Attribute Value Selector",helpTitle:"Select all elements that have a specific attribute value",doThis:"Select Vitaly's meal",selector:"[for=Vitaly]",syntax:'[attribute="value"]',help:"Attribute selectors are case sensitive, each character must match exactly.",examples:['<strong>input[type="checkbox"]</strong> selects all checkbox input elements.'],markup:`
    <apple for="Alexei"></apple>
    <bento for="Albina"><orange /></bento>
    <bento for="Vitaly"><sushi /></bento>
    <pickle></pickle>
    `},{name:"Attribute Starts With Selector",helpTitle:"Select all elements with an attribute value that starts with specific characters",doThis:"Select the items for names that start with 'Sa'",selector:'[for^="Sa"]',syntax:'[attribute^="value"]',examples:['<strong>.toy[category^="Swim"]</strong> selects elements with class <strong>toy</strong> and either <strong>category="Swimwear"</strong> or <strong>category="Swimming"</strong>.'],markup:`
    <plate for="Sam"><sushi /></plate>
    <bento for="Sarah"><apple class="small"/></bento>
    <bento for="Mary"><sushi/></bento>
    `},{name:"Attribute Ends With Selector",helpTitle:"Select all elements with an attribute value that ends with specific characters",doThis:"Select the items for names that end with 'ato'",selector:'[for$="ato"]',syntax:'[attribute$="value"]',help:"",examples:['<strong>img[src$=".jpg"]</strong> selects all images display a <strong>.jpg</strong> image.'],markup:`
    <apple class="small"></apple>
    <bento for="Hayato"><sushi /></bento>
    <apple for="Ryota"></apple>
    <plate for="Minato"><orange/></plate>
    <pickle class="small"></pickle>
    `},{name:"Attribute Wildcard Selector",helpTitle:"Select all elements with an attribute value that contains specific characters anywhere",syntax:'[attribute*="value"]',doThis:"Select the meals for names that contain 'obb'",selector:'[for*="obb"]',help:"A useful selector if you can identify a common pattern in things like <strong>class</strong>, <strong>href</strong> or <strong>src</strong> attributes.",examples:['<strong>img[src*="/thumbnails/"]</strong> selects all image elements that show images from the "thumbnails" folder.','<strong>[class*="heading"]</strong> selects all elements with "heading" in their class, like <strong>class="main-heading"</strong> and <strong>class="sub-heading"</strong>'],markup:`
    <bento for="Robbie"><apple /></bento>
    <bento for="Timmy"><sushi /></bento>
    <bento for="Bobby"><orange /></bento>
    `},{name:"Final Challenge",helpTitle:"You can do it...",help:"Combine all what you learned to solve this one!",doThis:"Select the empty plates except the one for Timmy",selector:'plate:empty:not([for="Timmy"])',markup:`
    <bento></bento>
    <plate><apple /></plate>
    <plate for="Timmy"></plate>
    <plate></plate>
    <plate></plate>
    `}],dr={name:"CSS Selectors",levels:up,wrapperClass:"selectors-chapter",credits:'Credits: <a href="http://www.twitter.com/flukeout">@flukeout</a> for his work on <a href="https://flukeout.github.io/" target="_blank">CSS diner</a> that served as the foundation for this website',intro:`
    <p>To apply CSS to an element you need to select this element with a <b>selector</b>.</p>
    <p>CSS provides you with a number of different ways to do this, and you can explore them in this chapter.</p>`,onLevelStart(){ot(()=>Ps())}},ei=(e,t,s)=>Math.min(Math.max(e,t),s);function fs(){Array.from(document.querySelectorAll(".shake, .strobe, .clean")).forEach(e=>e.classList.remove("shake","strobe","clean"))}const Ts=e=>{!e||(e.classList.add("shake"),setTimeout(()=>{e.classList.remove("shake")},500))};function pr(){S.menuOpened=!1}function Zt(){Pp(),$s()}function $s(){const{currentChapter:e,currentLevel:t}=S.progress;if(e<1)Kt(1,0);else if(t>=wt[e-1].levels.length){if(e>=wt.length)return;Kt(e+1,0)}else Kt(e,t+1)}function tn(){const{currentChapter:e,currentLevel:t}=S.progress;e<1||(t<1?Kt(e-1,wt[e-1].levels.length):Kt(e,t-1))}function Kt(e,t){const s=ei(e,0,wt.length),i=e===0?0:wt[e-1].levels.length,n=ei(t,0,i);(n!==S.progress.currentLevel||s!==S.progress.currentChapter)&&(S.progress.currentChapter=s,S.progress.currentLevel=n,Zi(),hr(),pr())}function hr(){const e=Ae.value,t=e.levels;S.progress.currentLevel=ei(S.progress.currentLevel,0,t.length),wi(),S.progress.currentLevel-1 in t&&(S.level=t[S.progress.currentLevel-1],e.onLevelStart&&e.onLevelStart(S.level))}function fp(e){const t=S.level,s=document.querySelector(".game-wrapper");fs();const i=document.querySelectorAll(".table-content plate");e.length===t.solution.length&&t.solution.every((o,a)=>e[a]===o)?(s.classList.add("win"),i.forEach(o=>{o.classList.add("clean")}),setTimeout(function(){s.classList.remove("win"),Zt()},1e3)):e.forEach((o,a)=>{if(t.solution[a]!==o){const r=i[a];Ts(r)}})}const gp=[{name:"ID vs tag",markup:`
            <bento><plate></plate></bento>
            <bento><plate id="fancy"></plate></bento>
            <bento><plate></plate></bento>
        `,customers:[{selector:"plate",meal:"sushi",request:"Put sushis on every plate"},{selector:"#fancy",meal:"apple",request:"Put an apple on the fancy plate"}],instructions:"Tag selectors have a <b>Level 1</b> specificity while ID selectors are <b>Level 3</b>.",solution:["sushi","apple","sushi"]},{name:"ID vs class vs tag",markup:`
            <bento><plate></plate></bento>
            <bento><plate class="square"></plate></bento>
            <bento><plate id="fancy" class="square"></plate></bento>
        `,customers:[{selector:"#fancy",meal:"pickle",request:"Put a pickle on the fancy plate"},{selector:"plate.square",meal:"toast",request:"Put toasts on square plates"},{selector:"plate",meal:"sushi",request:"Put sushis on every plate"}],instructions:"Class selectors have a <b>Level 2</b> specificity.",solution:["sushi","toast","pickle"]},{name:"Universal selector",markup:`
            <bento><plate></plate></bento>
            <bento><plate></plate></bento>
            <bento><plate class="square"></plate></bento>
        `,customers:[{selector:"plate",meal:"sushi",request:"Put sushis on all plates"},{selector:"plate.square",meal:"toast",request:"Put toasts on square plates"},{selector:"*",meal:"pickle",request:"Put pickles everywhere"}],instructions:"Universal selector has <b>Level 0</b> specificity, meaning it doesn't change specificity at all.",solution:["sushi","sushi","toast"]},{name:"Descendants calculation",markup:`
            <bento class="red"><plate></plate></bento>
            <bento class="green"><plate class="square"></plate></bento>
            <bento class="red"><plate class="square"></plate></bento>
            <bento class="green"><plate></plate></bento>
        `,customers:[{selector:".green plate",meal:"pickle",request:"Put pickles on plates in green bentos"},{selector:".red *",meal:"apple",request:"Put apples in red bentos"},{selector:".square",meal:"toast",request:"Put toasts on square plates"}],instructions:`<p>Descendant selectors specificity is calculated by summing the specificity of each part.</p>
        <p>When two selectors have the same specificity, the last one is overriding the previous one.</p>`,solution:["apple","pickle","toast","pickle"]},{name:"Attribute selectors",markup:`
            <bento><plate class="square"for="John"></plate></bento>
            <bento><plate class="square" for="Jim"></plate></bento>
            <bento><plate for="Jane"></plate></bento>
            <bento><plate for="Juliet"></plate></bento>
        `,customers:[{selector:'[for^="J"]',meal:"sushi",request:"Put sushis on plates for names starting with J"},{selector:".square",meal:"toast",request:"Put toasts on square plates"},{selector:'[for="John"]',meal:"pickle",request:"Put a pickle on John's plate"}],instructions:`<p>Attribute selectors are equally specific to class selectors: <b>Level 2</b>.</p>
        <p>When two selectors have the same specificity, the last one is overriding the previous one.</p>`,solution:["pickle","toast","sushi","sushi"]},{name:"Pseudo-classes specificity",markup:`
            <bento><plate></plate></bento>
            <bento><plate class="square" for="Bob"></plate></bento>
            <bento><plate class="square"></plate></bento>
            <bento><plate for="Bob"></plate></bento>
        `,customers:[{selector:"plate.square",meal:"toast",request:"Put a toast on square plates"},{selector:"plate:not(.square)",meal:"sushi",request:"Put sushis on all plates not square"},{selector:'plate[for="Bob"]',meal:"pickle",request:"Put a pickle on plates for Bob"},{selector:"plate:nth-child(2)",meal:"apple",request:"Put an apple on the second plate"}],instructions:`<p>Pseudo-classes selectors start with character <code>:</code> and are also <b>Level 2</b>.</p>
        <p>When a pseudo-class expects arguments, like <code>:has()</code> or <code>:not()</code>, you must add the specificity of the most specific argument.</p>`,solution:["sushi","apple","toast","sushi"]},{name:"Siblings calculation",markup:`
            <bento class="red">
                <plate></plate>
                <plate></plate>
                <plate></plate>
            </bento>
            <bento class="blue">
                <plate class="square"></plate>
                <plate class="square"></plate>
                <plate class="square"></plate>
            </bento>
        `,customers:[{selector:"plate:first-child",meal:"toast",request:"Put toasts on first plates of each bento"},{selector:".square + plate",meal:"apple",request:"Put apples on plates at the right of a square plate"},{selector:"plate ~ plate",meal:"sushi",request:"Put sushis on plates following another plate"}],instructions:"<p>Sibling selectors follow the same rule than descendant selectors: sum the specificity of each part.</p>",solution:["toast","sushi","sushi","toast","apple","apple"]},{name:"!important",markup:`
            <bento><plate class="square"></plate></bento>
            <bento class="blue"><plate class="square"></plate></bento>
            <bento class="blue"><plate class="square" for="James"></plate></bento>
        `,customers:[{selector:"plate.square",meal:"toast",request:"Put a toast on square plates"},{selector:'plate[for="James"]',meal:"apple!important",request:"It is CRUCIAL that James get an apple"},{selector:".blue plate.square",meal:"sushi",request:"Put sushis on square plates on blue bentos"}],instructions:`<p><code>!important</code> is a per-property modifier with the highest specificity: <b>Level 5</b>.</p>
        <p>It even overrides inline styles passed through the <code>style</code> attribute of an HTML element.</p>
        <p>You should not use this modifier except in very specific cases like utility classes or user stylesheets.</p>`,solution:["toast","sushi","apple"]},{name:"Final Challenge",markup:`
            <bento class="green">
                <plate class="square" id="fancy"></plate>
                <plate></plate>
                <plate class="square"></plate>
            </bento>
            <bento>
                <plate class="square"></plate>
                <plate></plate>
                <plate class="square"></plate>
            </bento>
        `,customers:[{selector:"bento.green *",meal:"pickle",request:"Put pickles in green bentos"},{selector:"#fancy",meal:"apple",request:"Put an apple on the fancy plate"},{selector:"plate:first-child",meal:"toast",request:"Put toasts on the first plate of each bento"},{selector:"plate:not(.square)",meal:"sushi",request:"Put sushis on plates not square"}],instructions:"<p>Combine all what you learned to solve this one!</p>",solution:["apple","sushi","pickle","toast","sushi",""]}],mp={name:"CSS Specificity",description:"When two properties override each other, the more specific selector wins",intro:`
    <p>Each selector in CSS has a certain level of specificity. For example, <code>div</code> has a low specificity because it targets any <tag>div</tag> in the document, while <code>#login-box</code> has a higher specificity because it only targets a element with a specific ID.</p>
    <p>The specificity matters when an element matches two selectors or more with conflicting properties assignment. The final property will be the one associated to the selector having the highest specificity.</p>
    <p>In this chapter, we will see how specificity is calculated and how you can use it to properly override styles.</p>`,instructions:`
    <p>Your customers have ordered a meal, but with conflicting instructions. The more specific the request, the higher the priority should be.</p>
    <p>Select the appropriate meal for each customer. You can change the meal by clicking on the plate.</p>
    <p>To help you, here is a <a target="_blank" href="img/specifishity.png">cheat sheet on specificity explained with fish</a>.</p>`,levels:gp,onLevelStart(){ot(()=>Ps())}},bp=[{name:"Inline display",doThis:"Set the display mode of apples to inline",selector:"apple",cssRulesHidden:{".table-content":["width: 800px","min-height: 360px"]},cssRules:{apple:["display: block"]},wrapperClass:"inline-layout",syntax:"display: inline",help:`<p>The <code>display</code> property does two things. The first thing it does is determine if the box it is applied to acts as <b>inline</b> or <b>block</b>. The second is to determine how the element's children should behave.</p>
    <p>Inline elements behave like words in a sentence. They sit next to each other in the inline direction (horizontal in plain English). Elements such as <tag>span</tag> or <tag>a</tag>, which typically contain text, are inline by default. They also preserve surrounding whitespace.</p>
    <p>Another property of inline elements if that you can't fix their dimensions with properties like <code>width</code> or <code>height</code>. Their size will be adjusted to fit the text and inline content they contain.</p>`,markup:`
    <p style="border: 2px solid red">
    This is a line of text including elements that we want to become inline. Here is an apple containing the letter "A":
    <apple>A</apple>
     ; here is another apple, but smaller, with the letter "B":
    <apple class="small">B</apple>.
    When changing display mode to inline, you shall notice that the elements vertically align so that their text content is aligned with the parent text line.
    Also, their size will match the size of their text content, directly related to the current font size.</p>
    `,check:[["display","inline"]]},{name:"Inline: text-align",doThis:"Align the content on the right",selector:"p",cssRulesHidden:{".table-content":["width: 800px","min-height: 360px"]},cssRules:{apple:["display: inline"]},syntax:"text-align: <dir>",wrapperClass:"inline-layout",help:`<p><code>text-align</code> change the inline text alignment for all the inline child elements or text content.</p>
    <p>It does not apply to block elements or other non-inline display modes.</p>
    <p>Accepted values are:</p>
    <ul>
    <li><b>left</b> (or <b>start</b>)</li>
    <li><b>right</b> (or <b>end</b>)</li>
    <li><b>center</b></li>
    <li><b>justify</b></li>
    <li><b>justify-all</b> (also justify the last line)</li>
    </ul>`,markup:`
    <p style="border: 2px solid red">
    This is a line of text including elements that we want to become inline. Here is an apple containing the letter "A":
    <apple>A</apple>
     ; here is another apple, but smaller, with the letter "B":
    <apple class="small">B</apple>.
    When changing display mode to inline, you shall notice that the elements vertically align so that their text content is aligned with the parent text line.
    Also, their size will match the size of their text content, directly related to the current font size.</p>
    `,check:[["text-align","right"]]},{name:"Block display",doThis:"Display the bentos vertically",selector:"bento",cssRulesHidden:{".table-content":["width: 800px","min-height: 360px"]},syntax:"display: block",help:`<p>Block is the default display mode of paragraphs and sectionning elements like <tag>div</tag>, <tag>main</tag>, <tag>article</tag> etc.</p>
    <p>If an element has a display type of <code>block</code>, then:
    <ul>
    <li><b>The box will break onto a new line.</b></li>
    <li>The box will, by default, extend in the inline direction to fill the space available in its container (<b>width: 100%</b>).</li>
    <li>...</li>
    </ul>
    </p>`,markup:`
    <bento>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
    </bento>
    `,check:[["display","block"]]},{name:"Box Model: margins",doThis:"Add a 20px bottom margin to bentos",selector:"bento",cssRulesHidden:{".table-content":["width: 800px","min-height: 360px"]},cssRules:{bento:["display: block"]},syntax:`margin: <val><unit>
margin-<dir>: <val><unit>`,examples:["<code>margin: 1em</code> adds a 1em margin on all sides of the element","<code>margin: 0 20px</code> adds a 20px horizontal margin and zero vertical margin","<code>margin-top: 10px</code> adds a 10px margin at the top of the element"],help:`<p>If an element has a display type of <code>block</code>, then:
    <ul>
    <li>It will break onto a new line.</li>
    <li>It will, by default, extend in the inline direction to fill the space available in its container (width: 100%).</li>
    <li>It will follow the <b>box model</b>: <img src="img/boxmodel.png" alt="Box Model" /></li>
    </ul>
    </p>    
    <p>Margins are used to add space <b>outside</b> the element.</p>
    `,markup:`
    <bento>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
    </bento>
    `,check:[["margin-bottom","20px"]]},{name:"Box Model: padding",doThis:"Add a 10px padding to bentos",selector:"bento",syntax:"padding: <val><unit>",cssRulesHidden:{".table-content":["width: 800px","min-height: 360px"]},cssRules:{bento:["display: block","margin-bottom: 20px"]},examples:["<code>padding: 1em</code> adds a 1em padding on all sides of the element","<code>padding: 0 20px</code> adds a 20px horizontal padding and zero vertical padding","<code>padding-top: 10px</code> adds a 10px padding at the top of the element"],help:`<p>Box model: <img src="img/boxmodel.png" alt="Box Model" /></p>
    <p>Padding is used to add internal margins and have space between the border of the element and its content.</p>`,markup:`
    <bento>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
    </bento>
    `,check:[["padding","10px"]]},{name:"Box Model: borders",doThis:"Set the top border width of bentos to 10px",selector:"bento",syntax:`border-width: <dimension>
border-<dir>-width: <dim>`,cssRulesHidden:{".table-content":["width: 800px","min-height: 360px"]},cssRules:{bento:["display: block","margin-bottom: 20px","padding: 10px"]},examples:["<code>border: 1px solid black</code> adds a 1 pixel width black solid border","<code>border-width: 20px</code> sets the border width to 20px while preserving existing border styles","<code>border-right-width: 1em</code> sets the right border width to 1em</code>"],help:`<p>Borders are the visual boundaries of an element's box. They can be styled in many ways.</p>
    <p>By default, the width and height of an element does not count the border width, but only the size of the content box. This behavior can be changed with the property <code>box-sizing: border-box</code> (initially <code>content-box</code>).</p>
    <img src="img/boxmodel.png" alt="Box Model" />`,markup:`
    <bento>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
    </bento>
    `,check:[["border-top-width","10px"]]},{name:"Width and height",helpTitle:"Dimensioning a block element",doThis:"Make all the bentos 200px wide",selector:"bento",cssRulesHidden:{".table-content":["width: 800px","min-height: 360px"]},cssRules:{bento:["display: block","margin-bottom: 20px","padding: 10px","border-top-width: 10px"]},syntax:"width: <value><unit>;",help:`<p>If an element has a display type of <code>block</code>, then:
    <ul>
    <li>The box will break onto a new line.</li>
    <li>Padding, margin and border will cause other elements to be pushed away from the box.</li>
    <li>You can set fixed <code>width</code> and <code>height</code> properties.</b></li>
    </ul>
    </p>`,markup:`
    <bento>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
    </bento>
    `,check:[["width","200px"]]},{name:"Auto margins",doThis:"Set all margins to auto",selector:"bento",cssRulesHidden:{".table-content":["width: 800px","min-height: 360px"]},cssRules:{bento:["display: block","margin-bottom: 20px","padding: 10px","border-top-width: 10px","width: 200px"]},syntax:"margin: auto;",help:`<p>For <b>block</b> elements, margins with <code>auto</code> value are computed differently between top/bottom and left/right.</p>
    <p>For <b>left and right margins</b>, auto makes the margin <b>fill all the available space</b>. This only works if the element has a specified width lower than its parent container width, so that there is space for margins.</p>
    <p>For <b>top and bottom margins</b>, auto is resolved as <b>zero</b>. In fact, the nature of document flow and element height calculation algorithms make it impossible to use margins for centering an element vertically inside its parent. Whenever a vertical margin's value is changed, it will trigger a parent element height re-calculation (re-flow), which would in turn trigger a re-center of the original element... making it an infinite loop.`,markup:`
    <bento>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
    </bento>
    `,check:[["margin","auto"]]},{name:"Margins with block elements",doThis:"Add a 20px vertical margin between bentos and center them horizontally",selector:"bento",cssRulesHidden:{".table-content":["width: 800px","min-height: 360px"]},cssRules:{bento:["display: block","margin-bottom: 20px","padding: 10px","border-top-width: 10px","width: 200px"]},syntax:`margin: <top and bottom> 
        <right and left>`,help:`<p>If an element has a display type of <code>block</code>, then:
    <ul>
    <li>The box will break onto a new line.</li>
    <li><b>Padding, margin and border will cause other elements to be pushed away from the box.</b></li>
    <li>...</li>
    </ul>
    </p>`,examples:["<strong>margin: 1em</strong> applies a 1em margin on all sides of the box","<strong>margin: 0 auto</strong> removes the vertical margin and make horizontal margins auto-fill the available space around the box.</strong>"],markup:`
    <bento>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
    </bento>
    `,check:[["margin","20px auto"]]},{name:"Inline block display",doThis:"Line up the bentos horizontally",selector:"bento",wrapperClass:"va-initial",cssRulesHidden:{".table-content":["width: 800px","min-height: 360px"]},cssRules:{bento:["display: block","padding: 10px","border-top-width: 10px","width: 200px","margin: 20px auto"]},syntax:"display: inline-block;",help:`<p>If an element has a display type of <code>inline-block</code>, then it has a behavior in between <code>inline</code> and <code>block</code>:
<ul>
  <li>The box does <b>not</b> break onto a new line, it will try to fit on the same line than its siblings elements.</li>
  <li>Padding, margin and border will cause other elements to be pushed away from the box.</li>
  <li>You can set fixed <code>width</code> and <code>height</code> properties. If not specified, the box will extend to be <b>as large as its content</b>.</li>
</ul>`,markup:`
    <bento>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
    </bento>
    `,check:[["display","inline-block"]]},{name:"Inline block horizontal align",doThis:"Change the text alignment of the table to the right",selector:".table",cssRulesHidden:{".table-content":["width: 800px","min-height: 360px"]},wrapperClass:"va-initial",cssRules:{bento:["display: inline-block","padding: 10px","border-top-width: 10px","width: 200px","margin: 20px auto"]},syntax:"text-align: <value>",help:`<p>Inline-block elements are affected by <code>text-align</code> as well.</p>
    <p>Note that text-align is an <b>inherited</b> property, and so affects the child elements as well.</p>`,markup:`
    <bento>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
    </bento>
    `,check:[["text-align","right"]]},{name:"Inline block: baseline",doThis:"Align the bentos on the top edge",selector:"plate",wrapperClass:"va-initial",cssRulesHidden:{".table-content":["width: 600px","min-height: 360px"]},cssRules:{bento:["display: inline-block"],plate:["display: block","width: 100px","height: 100px","margin-bottom: 20px"]},syntax:"display: inline-block;",help:`<p>By default, an <code>inline-block</code> box will be vertically aligned according to the current <b>baseline</b>.</p>
</p>
<img src="img/baseline1.png" alt="Baseline with inline-block elements with text" />
<p>When the element has no text or other inline content, the baseline is set to its bottom edge:</p>
<img src="img/baseline2.png" alt="Baseline with inline-block elements without text" />
<p>In this example, <tag>bento</tag> elements are already <code>inline-block</code>, but plates being <code>block</code> change the baseline to the bottom edge.`,markup:`
    <bento style="height: 150px;"><plate></plate></bento>
    <bento style="height: 280px;">
      <plate></plate>
      <plate></plate>
    </bento>
    <bento style="height: 200px;"><plate></plate></bento>
    `,check:[["display","inline-block"]]},{name:"Inline block vertical align",doThis:"Align vertically the bentos at the middle of the table",selector:"bento",wrapperClass:"va-initial",cssRulesHidden:{".table-content":["width: 600px","min-height: 360px"]},cssRules:{bento:["display: inline-block"]},syntax:"vertical-align: <align>;",help:`<p>The <code>vertical-align</code> changes the way an inline-block element is vertically aligned relatively to the baseline. It can take the following values:</p>    
<ul>
  <li><code>baseline</code> (default)</li>
  <li><code>sub</code> (used by subscript<sub>like that</sub>)</li>
  <li><code>super</code> (used by superscript<sup>like that</sup>)</li>
  <li><code>text-top</code> or <code>text-bottom</code>: top or bottom of the text line</li>
  <li><code>middle</code>: aligns the middle of the element with the middle of the line height added to the baseline</li>
  <li>a custom length or percentage</li>
</ul>
<p>It only works for <b>inline-block</b> elements !</p>
`,markup:`
    <bento style="height: 150px;"><plate></plate></bento>
    <bento style="height: 280px;">
      <plate></plate>
      <plate></plate>
    </bento>
    <bento style="height: 200px;"><plate></plate></bento>
    `,check:[["vertical-align","middle"]]}],yp={name:"Inline & Block Layout",description:"Basic display modes of HTML content",levels:bp,wrapperClass:"inline-block-chapter",intro:"<p>Let's learn the different ways to position elements in CSS !</p>",onLevelStart(){ot(()=>{Ps()})}},vp=[{name:"Flex display",doThis:"Put the sushis on the plates",selector:"bento",wrapperClass:"flex-game",cssRules:{},syntax:"display: flex;",help:`<p>Flex layout lets you control the sizing and positioning of its direct child elements, that we will refer to as <b>items</b>. By default, flex layout has this behavior:
    <ul>
    <li>The items display in a row: <code>flex-direction: row</code></li>
    <li>The items start from the start edge of the main axis: <code>justify-content: flex-start</code></li>
    <li>The items do not stretch on the main axis by default, but can shrink if necessary: <code>flex: 1 0 auto</code></li>
    <li>The items will, by default, stretch to fill the size of the cross axis: <code>align-items: stretch</code></li>
    </ul></p>`,markup:`
    <bento style="width: 700px; height: 360px">
      <sushi></sushi>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper">
      <plate></plate><plate></plate><plate></plate>
    </div>`,check:[["display","flex"]]},{name:"Flex: justify-content 1/4",doThis:"Put the sushis on the plates",selector:"bento",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:"justify-content: <value>;",help:`<p><code>justify-content</code> let you choose how items should be spread on the main axis (the horizontal axis by default in English language)</p>
    <p>It can take the following values:
    <ul>
    <li><code>flex-start</code> : items align on the start of the flex axis (left by default)</li>
    <li><code>flex-end</code> : items align on the end of the flex axis (right by default)</li>
    <li><code>center</code> : items align on the center of the container</li>
    <li><code>space-between</code> : items are displayed with equal space between them</li>
    <li><code>space-around</code> : items are displayed with equal margins around them.</li>
    <li><code>space-evenly</code> : items are displayed with equal space between and around them.</li>
    </ul></p>`,markup:`
    <bento style="width: 700px; height: 360px">
      <sushi></sushi>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="justify-content: flex-end">
      <plate></plate><plate></plate><plate></plate>
    </div>`,check:[["justify-content","flex-end","right","end"]]},{name:"Flex: justify-content 2/4",doThis:"Put the sushis on the plates",selector:"bento",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:"justify-content: <value>;",help:`<p><code>justify-content</code> let you choose how items should be spread on the main axis (the horizontal axis by default in English language)</p>
    <p>It can take the following values:
    <ul>
    <li><code>flex-start</code> : items align on the start of the flex axis (left by default)</li>
    <li><code>flex-end</code> : items align on the end of the flex axis (right by default)</li>
    <li><code>center</code> : items align on the center of the container</li>
    <li><code>space-between</code> : items are displayed with equal space between them</li>
    <li><code>space-around</code> : items are displayed with equal margins around them.</li>
    <li><code>space-evenly</code> : items are displayed with equal space between and around them.</li>
    </ul></p>`,markup:`
    <bento style="width: 700px; height: 360px">
      <sushi></sushi>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="justify-content: center">
      <plate></plate><plate></plate><plate></plate>
    </div>`,check:[["justify-content","center"]]},{name:"Flex: justify-content 3/4",doThis:"Put the sushis on the plates",selector:"bento",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:"justify-content: <value>;",help:`<p><code>justify-content</code> let you choose how items should be spread on the main axis (the horizontal axis by default in English language)</p>
    <p>It can take the following values:
    <ul>
    <li><code>flex-start</code> : items align on the start of the flex axis (left by default)</li>
    <li><code>flex-end</code> : items align on the end of the flex axis (right by default)</li>
    <li><code>center</code> : items align on the center of the container</li>
    <li><code>space-between</code> : items are displayed with equal space between them</li>
    <li><code>space-around</code> : items are displayed with equal margins around them.</li>
    <li><code>space-evenly</code> : items are displayed with equal space between and around them.</li>
    </ul></p>`,markup:`
    <bento style="width: 700px; height: 360px">
      <sushi></sushi>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="justify-content: space-around">
      <plate></plate><plate></plate><plate></plate>
    </div>`,check:[["justify-content","space-around"]]},{name:"Flex: justify-content 4/4",doThis:"Put the sushis on the plates",selector:"bento",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:"justify-content: <value>;",help:`<p><code>justify-content</code> let you choose how items should be spread on the main axis (the horizontal axis by default in English language)</p>
    <p>It can take the following values:
    <ul>
    <li><code>flex-start</code> : items align on the start of the flex axis (left by default)</li>
    <li><code>flex-end</code> : items align on the end of the flex axis (right by default)</li>
    <li><code>center</code> : items align on the center of the container</li>
    <li><code>space-between</code> : items are displayed with equal space between them</li>
    <li><code>space-around</code> : items are displayed with equal margins around them.</li>
    <li><code>space-evenly</code> : items are displayed with equal space between and around them.</li>
    </ul></p>`,markup:`
    <bento style="width: 700px; height: 360px">
      <sushi></sushi>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="justify-content: space-between">
      <plate></plate><plate></plate><plate></plate>
    </div>`,check:[["justify-content","space-between"]]},{name:"Flex: align-items 1/3",doThis:"Put the sushis on the plates",selector:"bento",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:"align-items: <value>;",help:`<p><code>align-items</code> let you choose how items are aligned relatively to the cross axis (the vertical axis by default in English language)</p>
    <p>It can take the following values:
    <ul>
    <li><code>flex-start</code> : items align on the start of the cross axis (top by default)</li>
    <li><code>flex-end</code> : items align on the end of the cross axis (bottom by default)</li>
    <li><code>center</code> : items align on the center of the container</li>
    <li><code>space-between</code> : items are displayed with equal space between them</li>
    <li><code>space-around</code> : items are displayed with equal margins around them.</li>
    <li><code>space-evenly</code> : items are displayed with equal space between and around them.</li>
    </ul></p>`,markup:`
    <bento style="width: 700px; height: 360px">
      <sushi></sushi>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="align-items: flex-end">
      <plate></plate><plate></plate><plate></plate>
    </div>`,check:[["align-items","flex-end","end"]]},{name:"Flex align-items 2/3",doThis:"Put the sushis on the plates",selector:"bento",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:`justify-content: <value>;
align-items: <value>;`,help:"<p>Combine <code>justify-content</code> and <code>align-items</code> properties to position your items !</p>",markup:`
    <bento style="width: 700px; height: 360px">
      <sushi></sushi>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="justify-content: center; align-items: center;">
      <plate></plate><plate></plate><plate></plate>
    </div>`,inputLinesNumber:2,check:[["justify-content","center"],["align-items","center"]]},{name:"Flex: align items 3/3",doThis:"Put the sushis on the plates",selector:"bento",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:`justify-content: <value>;
align-items: <value>;`,help:"<p>Combine <code>justify-content</code> and <code>align-items</code> properties to position your items !</p>",markup:`
    <bento style="width: 700px; height: 360px">
      <sushi></sushi>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="justify-content: space-between; align-items: flex-end;">
      <plate></plate><plate></plate><plate></plate>
    </div>`,inputLinesNumber:2,check:[["justify-content","space-between"],["align-items","flex-end","end"]]},{name:"Flex direction 1/5",doThis:"Put the sushis on the plates according to their color",selector:"bento",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:"flex-direction: <value>;",help:`<p><code>flex-direction</code> let you change the main axis of the flex layout, and its direction (left to right by default in English language)</p>
    <p>It can take the following values:
    <ul>
    <li><code>row</code> : same direction than text in the user language</li>
    <li><code>row-reverse</code> : opposite direction than text in the user language</li>
    <li><code>column</code> : perpendicular to text direction, following the reading direction</li>
    <li><code>column-reverse</code> : perpendicular to text direction, opposite to the reading direction</li>
    </ul></p>`,markup:`
    <bento style="width: 700px; height: 360px">
      <sushi class="salmon"></sushi>
      <sushi class="egg"></sushi>
      <sushi class="avocado"></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="flex-direction: row-reverse">
      <plate class="salmon"></plate>
      <plate class="egg"></plate>
      <plate class="avocado"></plate>
    </div>`,check:[["flex-direction","row-reverse"]]},{name:"Flex direction 2/5",doThis:"Put the sushis on the plates according to their color",selector:"bento",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:"flex-direction: <value>;",help:`<p><code>flex-direction</code> let you change the main axis of the flex layout, and its direction (left to right by default in English language)</p>
    <p>It can take the following values:
    <ul>
    <li><code>row</code> : same direction than text in the user language</li>
    <li><code>row-reverse</code> : opposite direction than text in the user language</li>
    <li><code>column</code> : perpendicular to text direction, following the reading direction</li>
    <li><code>column-reverse</code> : perpendicular to text direction, opposite to the reading direction</li>
    </ul></p>`,markup:`
    <bento style="width: 700px; height: 360px">
      <sushi class="salmon"></sushi>
      <sushi class="egg"></sushi>
      <sushi class="avocado"></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="flex-direction: column">
      <plate class="salmon"></plate>
      <plate class="egg"></plate>
      <plate class="avocado"></plate>
    </div>`,check:[["flex-direction","column"]]},{name:"Flex direction 3/5",doThis:"Put the sushis on the plates according to their color",selector:"bento",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:`flex-direction
justify-content`,help:"<p>Combine what you learned with <code>flex-direction</code> and <code>justify-content</code> to position the items !</p>",inputLinesNumber:2,markup:`
    <bento style="width: 700px; height: 360px">
      <sushi class="salmon"></sushi>
      <sushi class="egg"></sushi>
      <sushi class="avocado"></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="flex-direction: row-reverse; justify-content: flex-end;">
      <plate class="salmon"></plate>
      <plate class="egg"></plate>
      <plate class="avocado"></plate>
    </div>`,check:[["flex-direction","row-reverse"],["justify-content","flex-end","end"]]},{name:"Flex direction 4/5",doThis:"Put the sushis on the plates according to their color",selector:"bento",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:`flex-direction
justify-content
align-items`,help:"<p>Combine what you learned with <code>flex-direction</code>, <code>justify-content</code> and <code>align-items</code> to position the items !</p>",inputLinesNumber:3,markup:`
    <bento style="width: 700px; height: 400px">
      <sushi class="salmon"></sushi>
      <sushi class="egg"></sushi>
      <sushi class="avocado"></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="flex-direction: column-reverse; justify-content: space-between; align-items: center;">
      <plate class="salmon"></plate>
      <plate class="egg"></plate>
      <plate class="avocado"></plate>
    </div>`,check:[["flex-direction","column-reverse"],["justify-content","space-between"],["align-items","center"]]},{name:"Flex direction 5/5",doThis:"Put the sushis on the plates according to their color",selector:"bento",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:`flex-direction
justify-content
align-items`,help:"<p>Combine what you learned with <code>flex-direction</code>, <code>justify-content</code> and <code>align-items</code> to position the items !</p>",inputLinesNumber:3,markup:`
    <bento style="width: 700px; height: 400px">
      <sushi class="salmon"></sushi>
      <sushi class="egg"></sushi>
      <sushi class="avocado"></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="flex-direction: row-reverse; justify-content: center; align-items: flex-end;">
      <plate class="salmon"></plate>
      <plate class="egg"></plate>
      <plate class="avocado"></plate>
    </div>`,check:[["flex-direction","row-reverse"],["justify-content","center"],["align-items","flex-end","end"]]},{name:"Flex order 1/2",doThis:"Put the sushis on the plates according to their color",selector:"sushi.egg",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:"order: <number>",help:`<p>You can change the order of distribution of items in a flex layout by specifying the <code>order</code> property on a direct child element.</p>
    <p>Value must be an <b> integer number</b>, positive or negative. Items will then be distributed in ascending order.</p>`,markup:`
    <bento style="width: 700px; height: 400px">
      <sushi class="salmon"></sushi>
      <sushi class="egg"></sushi>
      <sushi class="avocado"></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper">
      <plate class="salmon"></plate>
      <plate class="egg" style="order:3"></plate>
      <plate class="avocado"></plate>
    </div>`,check:[["order",e=>Number(e)>0]]},{name:"Flex order 2/2",doThis:"Put the sushis on the plates according to their color",selector:"sushi.salmon",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:"order: <number>",help:`<p>You can change the order of distribution of items in a flex layout by specifying the <code>order</code> property on a direct child element.</p>
    <p>Value must be an <b> integer number</b>, positive or negative. Items will then be distributed in ascending order.</p>`,markup:`
    <bento style="width: 700px; height: 400px">
      <sushi class="avocado"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="salmon"></sushi>
      <sushi class="avocado"></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper">
      <plate class="salmon"></plate>
      <plate class="avocado"></plate>
      <plate class="avocado"></plate>
      <plate class="avocado"></plate>
      <plate class="avocado"></plate>
    </div>`,check:[["order",e=>Number(e)<0]]},{name:"Flex: self alignment",doThis:"Put the sushis on the plates according to their color",selector:"sushi.egg",wrapperClass:"flex-game",cssRules:{bento:["display: flex","justify-content: space-between"]},syntax:"align-self: <value>",help:"<p>You can change the alignment on cross axis for specific child elements too, by using the <code>align-self</code> property on the child element. It receive the same values than <code>align-items</code>.</p>",markup:`
    <bento style="width: 700px; height: 400px">
      <sushi class="avocado"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="egg"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="avocado"></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="justify-content: space-between">
      <plate class="avocado"></plate>
      <plate class="avocado"></plate>
      <plate class="egg" style="align-self: flex-end"></plate>
      <plate class="avocado"></plate>
      <plate class="avocado"></plate>
    </div>`,check:[["align-self","flex-end","end"]]},{name:"Flex: self align and order",doThis:"Put the sushis on the plates according to their color",selector:"sushi.salmon",wrapperClass:"flex-game",cssRules:{bento:["display: flex","justify-content: space-around"]},syntax:`align-self: <value>;
order: <number>;`,help:`<p>You can change the alignment on cross axis for specific child elements too, by using the <code>align-self</code> property on the child element. It receive the same values than <code>align-items</code>.</p>
    <p>Combine <code>order</code> and <code>align-self</code> properties to correctly place the items on their plate.</p>`,markup:`
    <bento style="width: 700px; height: 400px">
      <sushi class="salmon"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="salmon"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="avocado"></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="justify-content: space-around">
      <plate class="salmon" style="align-self: center; order: 2"></plate>
      <plate class="avocado"></plate>
      <plate class="salmon" style="align-self: center; order: 2"></plate>
      <plate class="avocado"></plate>
      <plate class="avocado"></plate>
    </div>`,inputLinesNumber:2,check:[["align-self","center"],["order",e=>Number(e)>0]]},{name:"Flex: wrapping",doThis:"Put the sushis on the plates",selector:"bento",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:"flex-wrap: <value>",help:`<p>By default, items will try to fit on one line in a flex layout. If there is not enough space, items will be compressed.</p>
    <p>You can change this behavior to wrap on a new line with the <code>flex-wrap</code> property that takes following values:</p>
    <ul>
    <li><code>nowrap</code>: all elements fit on a single line</li>
    <li><code>wrap</code>: items wrap across multiple lines as needed</li>
    <li><code>wrap-reverse</code>: items wrap accross multiple lines in reverse order</li>
    </ul>`,markup:`
    <bento style="width: 700px; height: 400px">
      <sushi></sushi><sushi></sushi><sushi></sushi>
      <sushi></sushi><sushi></sushi><sushi></sushi>
      <sushi></sushi><sushi></sushi><sushi></sushi>
      <sushi></sushi><sushi></sushi><sushi></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="flex-wrap: wrap">
      <plate></plate><plate></plate><plate></plate>
      <plate></plate><plate></plate><plate></plate>
      <plate></plate><plate></plate><plate></plate>
      <plate></plate><plate></plate><plate></plate>
    </div>`,check:[["flex-wrap","wrap"]]},{name:"Flex: wrapping and direction",doThis:"Put the sushis on the plates according to their color",selector:"bento",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:`flex-wrap: <value>;
flex-direction: <dir>;`,help:"<p>Line wrapping al works with other <code>flex-direction</code> as well.</p>",markup:`
    <bento style="width: 700px; height: 400px">
      <sushi class="avocado"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="salmon"></sushi>
      <sushi class="salmon"></sushi>
      <sushi class="salmon"></sushi>
      <sushi class="salmon"></sushi>
      <sushi class="egg"></sushi>
      <sushi class="egg"></sushi>
      <sushi class="egg"></sushi>
      <sushi class="egg"></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="flex-wrap: wrap; flex-direction: column">
      <plate class="avocado"></plate>
      <plate class="avocado"></plate>
      <plate class="avocado"></plate>
      <plate class="avocado"></plate>
      <plate class="salmon"></plate>
      <plate class="salmon"></plate>
      <plate class="salmon"></plate>
      <plate class="salmon"></plate>
      <plate class="egg"></plate>
      <plate class="egg"></plate>
      <plate class="egg"></plate>
      <plate class="egg"></plate>
    </div>`,inputLinesNumber:2,check:[["flex-wrap","wrap"],["flex-direction","column"]]},{name:"Flex: align-content 1/2",doThis:"Put the sushis on the plates",selector:"bento",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:"align-content: <value>",help:`<p>When items are wrapped on multiple lines, the alignment of the lignes relatively to the flex container can be controlled with the <code>align-content</code> property. It takes the following values:</p>
    <ul>
    <li><code>flex-start</code> : lines are stacked at the start of the cross axis.</li>
    <li><code>flex-end</code>: lines are stacked at the end of the cross axis.</li>
    <li><code>center</code> : lines are centered in the container.
    <li><code>space-between</code> : lines are displayed with equal space between them.
    <li><code>space-around</code> : items are displayed with equal margins around them.</li>
    <li><code>space-evenly</code> : items are displayed with equal space between and around them.</li>
    <li><code>stretch</code> : lines are stretched to fit the container.</li>
    </ul>
    <p>By default, lines are stretched, so two lines will occupy half of the height of the container each.</p>`,markup:`
    <bento style="width: 700px; height: 400px">
      <sushi></sushi><sushi></sushi><sushi></sushi>
      <sushi></sushi><sushi></sushi><sushi></sushi>
      <sushi></sushi><sushi></sushi><sushi></sushi>
      <sushi></sushi><sushi></sushi><sushi></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="flex-wrap: wrap; align-content: flex-start;">
      <plate></plate><plate></plate><plate></plate>
      <plate></plate><plate></plate><plate></plate>
      <plate></plate><plate></plate><plate></plate>
      <plate></plate><plate></plate><plate></plate>
    </div>`,inputLinesNumber:2,check:[["flex-wrap","wrap"],["align-content","flex-start","start"]]},{name:"Flex: align-content 2/2",doThis:"Put the sushis on the plates according to their color",selector:"bento",wrapperClass:"flex-game",cssRules:{bento:["display: flex","flex-wrap: wrap"]},syntax:`align-content: <value>
flex-direction: <dir>`,help:`<p>When items are wrapped on multiple lines, the alignment of the lignes relatively to the flex container can be controlled with the <code>align-content</code> property. It takes the following values:</p>
    <ul>
    <li><code>flex-start</code> : lines are stacked at the start of the cross axis.</li>
    <li><code>flex-end</code>: lines are stacked at the end of the cross axis.</li>
    <li><code>center</code> : lines are centered in the container.</li>
    <li><code>space-between</code> : lines are displayed with equal space between them.</li>
    <li><code>space-around</code> : items are displayed with equal margins around them.</li>
    <li><code>space-evenly</code> : items are displayed with equal space between and around them.</li>
    <li><code>stretch</code> : lines are stretched to fit the container.</li>
    </ul>
    <p>By default, lines are stretched, so two lines will occupy half of the height of the container each.</p>`,markup:`
    <bento style="width: 700px; height: 400px">
      <sushi class="salmon"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="egg"></sushi>
      <sushi class="salmon"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="egg"></sushi>
      <sushi class="salmon"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="egg"></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="flex-wrap: wrap; flex-direction: column-reverse; align-content: center">
    <plate class="salmon"></plate>
    <plate class="avocado"></plate>
    <plate class="avocado"></plate>
    <plate class="egg"></plate>
    <plate class="salmon"></plate>
    <plate class="avocado"></plate>
    <plate class="avocado"></plate>
    <plate class="egg"></plate>
    <plate class="salmon"></plate>
    <plate class="avocado"></plate>
    <plate class="avocado"></plate>
    <plate class="egg"></plate>
    </div>`,inputLinesNumber:2,check:[["align-content","center"],["flex-direction","column-reverse"]]},{name:"Flex: Final challenge",doThis:"Put the sushis on the plates according to their color",selector:"bento",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:`justify-content: <value>
align-items: <value>
flex-direction: <dir>
order: <number>
flex-wrap: <value>
align-content: <value>`,help:"<p>Combine all what you learned to place the items correctly !</p>",markup:`
    <bento style="width: 700px; height: 400px">
      <sushi class="avocado"></sushi>
      <sushi class="salmon"></sushi>
      <sushi class="salmon"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="egg"></sushi>     
      <sushi class="egg"></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="flex-wrap: wrap; flex-direction: column; align-content: space-evenly; justify-content: center;">
    <plate class="avocado"></plate>
    <plate class="salmon"></plate>
    <plate class="salmon"></plate>
    <plate class="avocado"></plate>
    <plate class="egg"></plate>
    <plate class="egg"></plate>
    </div>`,inputLinesNumber:4,check:[["flex-wrap","wrap"],["flex-direction","column"],["justify-content","center"],["align-content","space-evenly"]]}],wp={name:"Flex Layout",description:"One-directional content flow",levels:vp,credits:'Credits: <a href="https://github.com/thomaspark">Thomas Park</a> for its inspiring <a target="_blank" href="https://flexboxfroggy.com/">Flexbox Froggy</a> game.',intro:`<p>Let's learn the different ways to position elements in CSS !</p>
  <p><code>flex</code> is another display mode for elements that is more powerful than <b>block</b>. Flex is used to specify <b>how the children of an element should occupy the space </b> they have in that element.</p>
    <p>Flex layouts should be used when you want to distribute elements along one axis, be it horizontal or vertical.</p>`,onLevelStart(){ot(()=>{Ps()})}},xp=[{name:"Grid display",doThis:"Distribute the food in the correct areas of the bento",selector:"bento",wrapperClass:"grid-game",cssRules:{},syntax:"display: grid;",help:`<p>Grid layout lets you control the sizing and positioning of its <b>direct child elements</b>, that we will refer to as <b>items</b>. By default, grid elements have this behavior:
    <ul>
    <li>Items are placed in rows by default</li>
    <li>Rows evenly distribute the height of the container</li>
    <li>Items span the full width of the grid container</li>
    </ul></p>`,markup:`
    <bento style="width: 700px; height: 360px">
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid-template-rows: repeat(3, 1fr)">
      <div title="rice"></div>
      <div title="veggies"></div>
      <div title="fruits"></div>
    </div>`,check:[["display","grid"]]},{name:"Grid: Fixed template columns",doThis:"Distribute the food in the correct areas of the bento",selector:"bento",wrapperClass:"grid-game",cssRules:{bento:["display: grid"]},syntax:`grid-template-columns:
  <dim1> <dim2> <dim3...>;`,help:`<p>Grid is capable of handling fixed layouts (explicit) and automatic layouts (implicit). First we are going to focus on fixed templates, where items fill a predefined layout.</p>
    <p>The <code>grid-template-columns</code> let you specify the number and the size of columns in your grid layout. It takes a value the list of dimensions of each column from left to right, separated with white spaces.</p>`,markup:`
    <bento style="width: 700px; height: 360px">
      <div class="tile rice"></div>
      <div class="sushis">
        <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
        <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      </div>
      <div class="tile veggies"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid-template-columns: 20% 60% 20%">
      <div style="--section-color: rgba(255,255,255,0.5)" title="rice (20% width)"></div>
      <div style="--section-color: rgba(0,0,0,0.5)" title="sushis (60% width)"></div>
      <div style="--section-color: rgba(0,255,0,0.5)" title="veggies (20% width)"></div>
    </div>`,examples:["<code>grid-template-columns: 300px 300px;</code> defines a 2-column layout with each column being 300px wide"],check:[["grid-template-columns","20% 60% 20%"]]},{name:"Grid: Fixed template rows",doThis:"Distribute the food in the correct areas of the bento",selector:"bento",wrapperClass:"grid-game",cssRules:{bento:["display: grid"]},syntax:`grid-template-rows:
  <dim1> <dim2> <dim3...>;`,help:`<p>The <code>grid-template-rows</code> let you specify the number and the size of <b>rows</b> in your grid layout. It takes a value the list of dimensions of each column from top to bottom, separated with white spaces.</p>
    <p>The <code>fr</code> unit (free remaining) is a dimension used to specify a <b>fraction of the remaining space</b>.</p>`,markup:`
    <bento style="width: 700px; height: 360px">
      <div class="sushis">
        <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      </div>
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid-template-rows: 80px 2fr 1fr">
      <div style="--section-color: rgba(0,0,0,0.5)" title="sushis (80px height)"></div>
      <div style="--section-color: rgba(255,255,255,0.5)" title="rice (2/3 of remaining space)"></div>
      <div style="--section-color: rgba(0,255,0,0.5)" title="veggies (1/3 of remaining space)"></div>
    </div>`,examples:["<code>grid-template-rows: 2fr 1fr 1fr</code> defines a 3-rows layout with the first row being twice as wide as the other rows"],check:[["grid-template-rows","80px 2fr 1fr"]]},{name:"Grid: Fixed template cols + rows",doThis:"Distribute the food in the correct areas of the bento",selector:"bento",wrapperClass:"grid-game",cssRules:{bento:["display: grid"]},syntax:`grid-template-rows
grid-template-columns`,help:`<p>By combining <code>grid-template-rows</code> and <code>grid-template-columns</code>, you can start describing a 2-dimensions layout.</p>
    <p>The items will be spread from left to right, then from top to bottom ; following the same logic than the inline content flow for the current language.</p>`,markup:`
    <bento style="width: 700px; height: 360px">
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="sushis">
        <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      </div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid-template-rows: 1fr 100px; grid-template-columns: 2fr 1fr;">
      <div style="--section-color: rgba(255,255,255,0.5)" title="rice"></div>
      <div style="--section-color: rgba(0,255,0,0.5)" title="veggies (1/3 wide)"></div>
      <div style="--section-color: rgba(0,0,0,0.5)" title="sushis (100px high)"></div>
      <div style="--section-color: rgba(255,255,0,0.5)" title="fruits"></div>
    </div>`,inputLinesNumber:2,check:[["grid-template-rows","1fr 100px"],["grid-template-columns","2fr 1fr"]]},{name:"Grid template: grid shorthand",doThis:"Distribute the food in the correct areas of the bento",selector:"bento",wrapperClass:"grid-game",cssRules:{bento:["display: grid"]},syntax:"grid: <rows> / <columns>",help:`<p>The <code>grid</code> property is a <b>shorthand</b> to specify both the columns and the rows in a single instruction. The rows and columns dimensions must be separated with a <code>/</code> character.</p>
    <p>Try to reproduce the same layout than the previous exercise with a single instruction.</p>`,markup:`
    <bento style="width: 700px; height: 360px">
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="sushis">
        <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      </div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid: 1fr 100px / 2fr 1fr;">
      <div style="--section-color: rgba(255,255,255,0.5)" title="rice"></div>
      <div style="--section-color: rgba(0,255,0,0.5)" title="veggies (1/3 wide)"></div>
      <div style="--section-color: rgba(0,0,0,0.5)" title="sushis (100px high)"></div>
      <div style="--section-color: rgba(255,255,0,0.5)" title="fruits"></div>
    </div>`,inputLinesNumber:1,check:[["grid","1fr 100px / 2fr 1fr"]]},{name:"Grid gaps",doThis:"Add 50px gaps between the zones of the bento",selector:"bento",wrapperClass:"grid-game",cssRules:{bento:["display: grid","grid: 1fr 100px / 2fr 1fr;"]},syntax:`gap: <dimension>
gap: <row> <col>`,help:"<p>To add space between the items of the grid, use the <code>gap</code> property. You can pass two values if you want to specify different gaps between rows and columns.</p>",markup:`
    <bento style="width: 700px; height: 360px">
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="sushis">
        <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      </div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid: 1fr 100px / 2fr 1fr; gap: 50px;">
      <div style="--section-color: rgba(255,255,255,0.5)" title="rice"></div>
      <div style="--section-color: rgba(0,255,0,0.5)" title="veggies"></div>
      <div style="--section-color: rgba(0,0,0,0.5)" title="sushis"></div>
      <div style="--section-color: rgba(255,255,0,0.5)" title="fruits"></div>
    </div>`,inputLinesNumber:1,check:[["gap","50px","50px 50px"]]},{name:"Grid template: repeat()",doThis:"Use grid: repeat() to declare a 4x3 grid layout with equal size areas",selector:"bento",wrapperClass:"grid-game",cssRules:{bento:["display: grid"]},syntax:"repeat(<number>, <dim>)",help:`<p>The <code>repeat()</code> keyword is a utility to repeat the same dimension a certain number of times in a grid template declaration.</p>
    <p style="font-weight: bold">Try to use this keyword with the <code>grid</code> property to fill the bento with a 4x3 grid layout with equal size areas.</p>`,examples:["<code>grid-template-rows: repeat(5, 50px)</code> is equivalent to <code>grid-template-rows: 50px 50px 50px 50px 50px</code>","<code>grid: repeat(3, 100px) / repeat(2, 1fr)</code> is equivalent to <code>grid: 100px 100px 100px / 1fr 1fr</code>, which declares 3 rows of 100px height and 2 columns of equal size."],markup:`
    <bento style="width: 700px; height: 360px">
      <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid: repeat(3, 1fr) / repeat(4, 1fr);">
      <div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>
    </div>`,inputLinesNumber:1,check:[["grid","repeat(3, 1fr) / repeat(4, 1fr)","repeat(3, auto) / repeat(4, auto)"]]},{name:"Grid: items alignment",doThis:"Center the sushis in the areas of the bento",selector:"bento",wrapperClass:"grid-game",cssRules:{bento:["display: grid","grid: repeat(3, 1fr) / repeat(4, 1fr)"]},syntax:`justify-items: <value>
align-items: <value>`,help:`<p>After items are spread in the different areas of your grid layout, you can also change the way they are aligned in their area with the <code>justify-items</code> and <code>align-items</code> properties.</p>
    <p>These properties can take <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items">many different values</a>, notably:</p>
    <ul>
    <li><code>stretch</code>: stretch to fill the whole height/width of the area</li>
    <li><code>start</code>: pack near the starting edge of the area</li>
    <li><code>end</code>: pack near the end edge of the area</li>
    <li><code>center</code>: pack around the vertical/horizontal center of the area</li>
    <li><code>baseline</code>: align so that all the items share the same baseline</li>
    </ul>`,examples:["<code>justify-items: end</code> will align the items content on the right edge of the area</code>","<code>align-items: stretch</code> will stretch the items content so they fill the entire height of their area</code>"],markup:`
    <bento style="width: 700px; height: 360px">
      <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid: repeat(3, 1fr) / repeat(4, 1fr);">
      <div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>

    </div>`,inputLinesNumber:2,check:[["justify-items","center"],["align-items","center"]]},{name:"Grid: items alignment",doThis:"Stretch the tiles to fill their area of the bento",selector:".tile",wrapperClass:"grid-game",cssRules:{bento:["display: grid","grid: 150px 1fr / 1fr 1fr 1fr","align-items: center","justify-items: center"]},syntax:`justify-self: <value>
align-self: <value>`,help:`<p>You can also change the alignment of specific items by setting the <code>justify-self</code> and <code>align-self</code> properties of the item element.</p>
    <p>Values accepted are the same than for <code>justify-items</code> / <code>align-items</code>:</p>
    <ul>
    <li><code>stretch</code>: stretch to fill the whole height/width of the area</li>
    <li><code>start</code>: pack near the starting edge of the area</li>
    <li><code>end</code>: pack near the end edge of the area</li>
    <li><code>center</code>: pack around the vertical/horizontal center of the area</li>
    <li><code>baseline</code>: align so that all the items share the same baseline</li>
    </ul>`,markup:`
    <bento style="width: 700px; height: 360px">
      <sushi></sushi><sushi></sushi><sushi></sushi>
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid: 150px 1fr / 1fr 1fr 1fr">
      <div></div><div></div><div></div>
      <div></div><div></div><div></div>
    </div>`,inputLinesNumber:2,check:[["justify-self","stretch"],["align-self","stretch"]]},{name:"grid-column-start",doThis:"Distribute the food in the correct areas of the bento",selector:".rice",wrapperClass:"grid-game",cssRules:{bento:["display: grid","grid: repeat(3, 1fr) / repeat(4, 1fr)"]},syntax:"grid-column-start: <num>",help:`<p><code>grid-column-start</code> specifies the position of the starting edge of the item within the grid columns. If required, it can add a span or a new line.</p>
    <p>The first column starts at 1. If a negative integer is given, it counts in reverse, starting from the end edge.</p>`,markup:`
    <bento style="width: 700px; height: 360px">      
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid: repeat(3, 1fr) / repeat(4, 1fr)">
      <div title="rice" style="grid-column-start: 2"></div>      
      <div title="veggies"></div>
      <div title="fruits"></div>
    </div>`,check:[["grid-column-start","2"]]},{name:"grid-column-end",doThis:"Distribute the food in the correct areas of the bento",selector:".rice",wrapperClass:"grid-game",cssRules:{bento:["display: grid","grid: repeat(3, 1fr) / repeat(4, 1fr)"],".rice":["grid-column-start: 2"]},syntax:"grid-column-end: <num>",help:`<p><code>grid-column-end</code> specifies the position of the end edge of the item within the grid columns.</p>
    <p>The left edge of the first column has number 1, so the item will actually stop at column <code>num - 1</code>.</p>`,markup:`
    <bento style="width: 700px; height: 360px">      
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid: repeat(3, 1fr) / repeat(4, 1fr)">
      <div title="rice" style="grid-column-start: 2; grid-column-end: 4"></div>      
      <div title="veggies"></div>
      <div title="fruits"></div>
    </div>`,check:[["grid-column-end","4","-2"]]},{name:"grid-row-start",doThis:"Distribute the food in the correct areas of the bento",selector:".veggies",wrapperClass:"grid-game",cssRules:{bento:["display: grid","grid: repeat(3, 1fr) / repeat(4, 1fr)"],".rice":["grid-column-start: 2","grid-column-end: 4"]},syntax:"grid-row-start: <num>",help:`<p><code>grid-row-start</code> specifies the position of the start edge of the item within the grid rows.</p>
    <p>Note how the fruits tile fills the remaining space available on first row.</p>`,markup:`
    <bento style="width: 700px; height: 360px">      
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid: repeat(3, 1fr) / repeat(4, 1fr)">
      <div title="rice" style="grid-column-start: 2; grid-column-end: 4"></div>      
      <div title="veggies" style="grid-row-start: 2"></div>
      <div title="fruits"></div>
    </div>`,check:[["grid-row-start","2"]]},{name:"grid-row-end",doThis:"Distribute the food in the correct areas of the bento",selector:".veggies",wrapperClass:"grid-game",cssRules:{bento:["display: grid","grid: repeat(3, 1fr) / repeat(4, 1fr)"],".rice":["grid-column-start: 2","grid-column-end: 4"],".veggies":["grid-row-start: 2"]},syntax:"grid-row-end: <num>",help:"<p><code>grid-row-end</code> specifies the position of the end edge of the item within the grid rows.</p>",markup:`
    <bento style="width: 700px; height: 360px">      
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid: repeat(3, 1fr) / repeat(4, 1fr)">
      <div title="rice" style="grid-column-start: 2; grid-column-end: 4"></div>      
      <div title="veggies" style="grid-row-start: 2; grid-row-end: 4"></div>
      <div title="fruits"></div>
    </div>`,check:[["grid-row-end","4"]]},{name:"grid-row & grid-column",doThis:"Distribute the food in the correct areas of the bento",selector:".rice",wrapperClass:"grid-game",cssRules:{bento:["display: grid","grid: repeat(3, 1fr) / repeat(4, 1fr)"]},syntax:`grid-row: <start>/<end>
grid-column: <start>/<end>`,help:`<p><code>grid-row</code> and <code>grid-column</code> are shorthands to specify both the start and end positions within the grid rows and columns, separated with <code>/</code>.</p>
    <p>Items can be spread on multiple rows and columns at the same time. The following items will try to occupy the free spaces left behind.</p>`,markup:`
    <bento style="width: 700px; height: 360px">      
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid: repeat(3, 1fr) / repeat(4, 1fr)">
      <div title="rice" style="grid-column: 3/5; grid-row: 1/3;"></div>      
      <div title="veggies"></div>
      <div title="fruits"></div>
    </div>`,inputLinesNumber:2,check:[["grid-row","1/3"],["grid-column","3/5","3/-1"]]},{name:"Dense Packing",doThis:"Distribute the food in the correct areas of the bento",selector:"bento",wrapperClass:"grid-game",cssRules:{bento:["display: grid"],".rice":["grid-column: 1 / 3"]},syntax:"grid-auto-flow: row dense",help:`<p>The default behavior of grid layout is to place items along the rows while always progressing forward. The items will be placed according to the order they are in the source, or any modification with the <code>order</code> property. If there is not enough space to fit an item, grid will leave a gap and move to the next track.</p>
    <p>An auto-placed layout with some items spanning multiple tracks may result in a grid with some unfilled cells. You can change the automatic flow to make fill these gaps. This may mean that the display becomes disconnected from the logical order. This is called <b>dense packing</b>.</p>
    `,markup:`
    <bento style="width: 700px; height: 360px">      
      <div class="tile veggies"></div>
      <div class="tile rice"></div>
      <div class="tile fruits"></div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style='grid-auto-flow: row dense;'>      
      <div title="veggies"></div>  
      <div title="rice" style="grid-column: 1 / 3"></div>
      <div title="fruits"></div>
      <div title="fruits"></div>
    </div>`,check:[["grid-auto-flow","dense","row dense"]]},{name:"Grid Areas",doThis:"Distribute the food in the correct areas of the bento",selector:".veggies",wrapperClass:"grid-game",cssRules:{bento:["display: grid","grid: repeat(3, 1fr) / repeat(4, 1fr)"],".rice":["grid-column: 3/5","grid-row: 1/3"]},syntax:`grid-area: <row-start>
         / <col-start>
         / <row-end>
         / <col-end>`,help:`<p><code>grid-area</code> is even shorter because it let you specify the start and end positions for both row and column in a single instruction.</p>
    <p>The values are passed in this order: y1/x1/y2/x2 ; separated with character <code>/</code></p>`,markup:`
    <bento style="width: 700px; height: 360px">      
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid: repeat(3, 1fr) / repeat(4, 1fr)">
      <div title="rice" style="grid-column: 3/5; grid-row: 1/3;"></div>      
      <div title="veggies" style="grid-area: 3/2/4/4;"></div>
      <div title="fruits"></div>
    </div>`,check:[["grid-area"," 3/2/4/4"]]},{name:"Grid: Named Areas",doThis:"Distribute the food in the correct areas of the bento",selector:"bento",wrapperClass:"grid-game",cssRules:{bento:["display: grid","grid: repeat(2, 1fr) / repeat(3, 1fr)"],".sushis":["grid-area: sushis"],".rice":["grid-area: rice"],".veggies":["grid-area: veggies"],".fruits":["grid-area: fruits"]},syntax:`grid-template-areas:   
  <string>+`,examples:[`<pre><code>grid-template-areas:
    "header header"
    "menu   main"
    "menu   footer"</code></pre>
    <img src="img/grid-template-areas-example.png"/>
    `],help:`<p><code>grid-template-areas</code> let you define custom names for areas in your grid with a handy syntax.</p>
    <p>Items can then be assigned to these areas by their name using the <code>grid-area</code> property.</p>
    <p>Each string contains the area names for each column, separated by spaces. These string parts are then listed for each row, separated by spaces as well. Line breaks are not mandatory but can help to visualize the layout.</p>
    <p>Names can be repeated to spread areas on several rows/columns.</p>`,markup:`
    <bento style="width: 700px; height: 360px">      
      <div class="sushis">
        <sushi></sushi>
        <sushi></sushi>
        <sushi></sushi>
        <sushi></sushi>
      </div>
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style='grid: repeat(2, 1fr) / repeat(3, 1fr); grid-template-areas: "sushis sushis fruits" "rice veggies fruits"'>
      <div title="sushis" style="grid-area: sushis"></div>      
      <div title="rice" style="grid-area: rice"></div>
      <div title="veggies" style="grid-area: veggies"></div>
      <div title="fruits" style="grid-area: fruits"></div>
    </div>`,check:[["grid-template-areas",'"sushis sushis fruits" "rice veggies fruits"']]},{name:"Implicit Grid",doThis:"Distribute the food in the correct areas of the bento",selector:"bento",wrapperClass:"grid-game",cssRules:{bento:["display: grid","grid-auto-flow: column","grid-template-rows: 100%"]},syntax:`grid-auto-rows: <dims>...
grid-auto-columns: <dims>...`,examples:["<code>grid-auto-rows: minmax(100px, auto);</code> will automatically create rows at a minimum size of 100px.","<code>grid-auto-columns: 100px 200px</code> will automatically create columns alternating between 100px and 200px."],help:`<p>When you are not explicitely declaring a grid with <code>grid-template</code> properties, or when the explicit grid is full, the items are placed in new tracks, automatically created. These tracks are referred to as the <strong>implicit grid</strong>.</p>
    <p>You can change the sizing of these implicit new tracks with the <code>grid-auto-rows</code> and <code>grid-auto-columns</code> property.</p>`,markup:`
    <bento style="width: 700px; height: 360px">      
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile rice"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style='grid-auto-flow: column; grid-template-rows: 100%; grid-auto-columns: 100px 1fr'>
      <div title="rice (100px wide)"></div>
      <div title="veggies"></div>
      <div title="rice (100px wide)"></div>
      <div title="veggies"></div>
      <div title="rice (100px wide)"></div>
    </div>`,check:[["grid-auto-columns","100px 1fr","100px auto","100px 1fr 100px 1fr 100px"]]},{name:"Implicit Grid - auto-fit / auto-fill",doThis:"Fill the whole bento, but each area being not more than 200px wide.",selector:"bento",wrapperClass:"grid-game",cssRules:{bento:["display: grid"]},syntax:`repeat(
  auto-fit,
  minmax(100px, 1fr)
)`,examples:["<code>grid-template-columns: repeat(auto-fit, minmax(50px, 100px))</code> will make as many columns as needed between 50px and 100px wide, to fill the entire grid container."],help:`<p>Use the <code>auto-fit</code> keyword in a <code>repeat()</code> instruction to automatically pick the right number of columns or rows that can fit the grid depending on your content.</p>
    <p>This is especially useful for automatic responsive sizing of your grid, when combining it with variable sizing like <code>minmax(200px, 1fr)</code>.</p>
    <p><code>auto-fill</code> is a small variation of <code>auto-fit</code> that allows to create empty columns to fill the first row if needed. There is no difference between them once the first track is filled.</p>
    <p style="font-weight: bold">Find the right declaration for <code>grid-template-columns</code> to fill the whole bento, but each area not more than 200px wide.</p>
    `,markup:`
    <bento style="width: 700px; height: 360px">      
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile fruits"></div>      
      <div class="tile veggies"></div>
      <div class="tile fruits"></div>
      <div class="tile rice"></div>
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style='grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))'>      
      <div title="rice (>=200px)"></div>
      <div title="veggies (>=200px)"></div>
      <div title="fruits (>=200px)"></div>      
      <div title="veggies (>=200px)"></div>
      <div title="fruits (>=200px)"></div>
      <div title="rice (>=200px)"></div>
      <div title="rice (>=200px)"></div>
      <div title="veggies (>=200px)"></div>
      <div title="fruits (>=200px)"></div>
    </div>`,check:[["grid-template-columns","repeat(auto-fit, minmax(200px, 1fr))"]]}],_p={name:"Grid Layout",description:"Powerful 2D layouts",levels:xp,credits:'Credits: inspired from <a href="https://cssgridgarden.com/" target="_blank">CSS Grid Garden</a> by <a href="https://codepip.com" target="_blank">Codepip</a>',intro:`<p>Let's learn the different ways to position elements in CSS !</p>
  <p>While flexbox is a great layout tool for <b>one-directional</b> flow, we still need a solution for complex 2D placement.</p>
  <p>CSS Grid is this solution. It consists of around 24 new CSS properties that provides a powerful way to create two-dimensional layouts. Let's dig in !</p>`,onLevelStart(){ot(()=>{Ps()})}},me=`
<h1>Chef Nakamura's Restaurant</h1>
<main>
    <h2>Sushis</h2>
    <ul>
        <li>
            <span class="dish-name">Izumidai</span>
            <span class="dish-info">(tilapfish, seaweed)</span>
            <span class="price">$1.25</span>
        </li>
        <li>
            <span class="dish-name">Salmon</span>
            <span class="price">$1.25</span>
        </li>
        <li>
            <span class="dish-name">Unagi</span>
            <span class="dish-info">(eel, wasabi)</span>
            <span class="price">$1.50</span>
        </li>
        <li>
            <span class="dish-name">Shrimp</span>
            <span class="price">$1.25</span>
        </li>
    </ul>
    <p class="information">All our sushis are served with cooked rice and soy sauce served at will. 6 pieces minimum for deliveries and takeout orders. Allergens: fish, peanut</p>
</main>
`,kp=[{name:"Font Families",selector:"h1",cssImports:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRules:{},syntax:'font-family: "MyFontName"',help:`<p>Use the <code>font-family</code> property to change the typeface of the text in an element.</p>
    <p>This property accepts a comma-separated list of font names as quoted strings. You can also use generic font names like <code>serif</code>, <code>sans-serif</code> or <code>monospace</code> to display generic fonts specific to the user operating system.</p>
    <p>When passing several values, the first font that can be resolved by the browser will be used. Therefore, it's a good idea to put a generic font keyword after the specific font you want to use.</p>`,examples:[`<code>font-family: "Roboto", sans-serif;</code> will try to display Roboto font, or will fallback to the default sans-serif font of user's operating system`],markup:me,doThis:'Set h1 font to "Reggae One", or serif by default',expectedScreenshot:"img/reproduce/7-1.jpg",check:[["font-family",'"Reggae One", serif']]},{name:"Text Color",selector:"p.information",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"]},syntax:'color: <color>;"',help:`<p>Text color is changed with the <code>color</code> property</p>
    <p>Colors in CSS can expressed with several notations:</p>
    <dl>
    <dt>A color name</dt><dd>red, blue, transparent, or any of the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/named-color" target="_blank">145</a> official color names in CSS.</dd>
    <dt>Hexadecimal</dt><dd>#RGBA, with R, G, B, A be respectively red, green, blue and alpha values between 00 and FF, examples: #FF0000 for red, #CCC for gray</dd>
    <dt>RGBA</dt><dd>rgb(R,G,B,A) with R, G, B, A be respectively red, green, blue and alpha values between 0 and 255, examples: rgb(255,0,0) for red, rgba(128,128,128,0.5) for semi-opaque gray</dd>
    <dt>HSL</dt><dd>hsl(H,S,L,A) with H, S, L, A be respectively the hue between 0 and 360deg, and the saturation, luminosity and alpha between 0 and 100%</dd>
    </dl>`,markup:me,doThis:"Change information paragraph color to gray",expectedScreenshot:"img/reproduce/7-2.jpg",check:[["color","gray","grey"]]},{name:"Italic / Oblique",selector:"p.information",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"]},cssRules:{"p.information":["color: gray"]},syntax:`font-style: normal;
font-style: italic;
font-style: oblique;`,help:`<p>Fonts can have 3 styles: <code>normal</code>, <code>italic</code> or <code>oblique</code></p>
    <p>For fonts that support it, <code>oblique</code> shows a slanted version of the regular typeface without turning it into a cursive version like <code>italic</code> does.</p>`,markup:me,doThis:"Put the information paragraph in italic",expectedScreenshot:"img/reproduce/7-3.jpg",check:[["font-style","italic"]]},{name:"Font Weight",selector:".price",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],"p.information":["font-style: italic","color: gray"]},cssRules:{},syntax:`font-weight: normal;
font-weight: bold;
font-weight: 100;`,help:`<p>If the font supports several weights, you can change it with <code>font-weight</code> property.</p>
    <p>Most fonts only supports a normal weight (400) and a bold weight (700). But you can try other values in the 100s like <code>100</code>, <code>200</code>, <code>300</code>... up to <code>900</code>.</p>
    <p><a href="https://web.dev/learn/css/typography/#variable-fonts" target="_blank" rel="external">Variable fonts</a> are a specific kind of dynamic font that can handle any value between 0 and 900.</p>`,markup:me,doThis:"Put the prices in bold",expectedScreenshot:"img/reproduce/7-4.jpg",check:[["font-weight","bold"]]},{name:"Font Size",selector:"h2",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],"p.information":["font-style: italic","color: gray"],".price":["font-weight: bold"]},cssRules:{},syntax:"font-size: <dim>;",help:`<p>This property accepts all kinds of values: absolute dimensions like <code>24px</code>, relative dimensions like <code>120%</code> or <code>2.5em</code>, or keywords like <code>smaller</code>, <code>medium</code>, <code>large</code>, <code>x-large</code>...</p>
    <p>The relative values are always relative to the parent element's <code>font-size</code>, as this property is inherited by children elements.</p>`,markup:me,doThis:"Set font size of h2 to 36px",expectedScreenshot:"img/reproduce/7-5.jpg",check:[["font-size","36px"]]},{name:"Text Casing",selector:"h2",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px"],"p.information":["font-style: italic","color: gray"],".price":["font-weight: bold"]},cssRules:{},syntax:`text-transform: lowercase;
text-transform: uppercase;
text-transform: capitalize;`,help:`<p>Use the <code>text-transform</code> property to change the text casing of an element.</p>
    <p>Note that the casing in the HTML code will be the one that will be indexed by search engines, so use this property only if it is a visual change specific to this web page.</p>`,markup:me,doThis:"Put the h2 in uppercase",expectedScreenshot:"img/reproduce/7-6.jpg",check:[["text-transform","uppercase"]]},{name:"Font Variants",selector:".dish-name",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px","text-transform: uppercase"],"p.information":["font-style: italic","color: gray"],".price":["font-weight: bold"]},cssRules:{},syntax:"font-variant: normal;",help:`<p>Some fonts can be configured in several ways, for example to use alternate glyphs for capital letters, use traditional or simplified glyphs in East Asian languages, or display ligatures between some characters.</p>
    <p>These variants can be activated with the <code>font-variant</code> property, which takes a comma-separated list of variants to be used.</p>
    <p>You can find the complete list of variants on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant" target="_blank" rel="external">MDN</a>.</p>`,markup:me,doThis:"Use the small-caps variant for dish names",expectedScreenshot:"img/reproduce/7-7.jpg",check:[["font-variant","small-caps"]]},{name:"List styles",selector:"li",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px","text-transform: uppercase"],"p.information":["font-style: italic","color: gray"],".dish-name":["font-variant: small-caps"],".price":["font-weight: bold"]},cssRules:{},syntax:`list-style: none;
list-style: square;
list-style: "\u2714";
list-style: url('star.svg');`,help:`<p>Most browsers add small discs \u25CF in front of each list item (<code>&lt;li&gt;</code> elements). This character can be changed or removed with <code>list-style</code> property.</p>
    <p>You can even add custom images or define your own counters.</p>`,markup:me,doThis:'Use "upper-roman" style for the dishes list',expectedScreenshot:"img/reproduce/7-8.jpg",check:[["list-style","upper-roman"]]},{name:"Line Height",selector:"li",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px","text-transform: uppercase"],"p.information":["font-style: italic","color: gray"],".dish-name":["font-variant: small-caps"],".price":["font-weight: bold"]},cssRules:{li:["list-style: upper-roman"]},syntax:`line-height: <dim>;
line-height: 1.5;
line-height: 150%;
line-height: normal;`,help:"<p><code>line-height</code> controls the space between each line of text in an element. This does not apply to space between paragraphs.</p>",markup:me,doThis:"Set line height between dishes to 200%",expectedScreenshot:"img/reproduce/7-9.jpg",check:[["line-height","200%","2"]]},{name:"Letter Spacing",selector:"h2",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px","text-transform: uppercase"],"p.information":["font-style: italic","color: gray"],".dish-name":["font-variant: small-caps"],".price":["font-weight: bold"],li:["list-style: upper-roman","line-height: 200%"]},syntax:`letter-spacing: 150%;
letter-spacing: -2px;
letter-spacing: normal;`,help:`<p>Add or reduce space between letters with <code>letter-spacing</code>.</p>
    <p>This property controls the space between each letter in the text of an element.</p>`,markup:me,doThis:"Set letter-spacing for h2 to 1em",expectedScreenshot:"img/reproduce/7-10.jpg",check:[["letter-spacing","1em"]]},{name:"Word Spacing",selector:".dish-info",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px","text-transform: uppercase","letter-spacing: 1em"],"p.information":["font-style: italic","color: gray"],".dish-name":["font-variant: small-caps"],".price":["font-weight: bold"],li:["list-style: upper-roman","line-height: 200%"]},syntax:`word-spacing: <dim>;
word-spacing: normal;`,help:"<p>Add or reduce space between words with <code>word-spacing</code>.</p>",markup:me,doThis:"Set word-spacing for dish details to 5 pixels",expectedScreenshot:"img/reproduce/7-11.jpg",check:[["word-spacing","5px"]]},{name:"Underlines and overlines",selector:"h2",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px","text-transform: uppercase","letter-spacing: 1em"],"p.information":["font-style: italic","color: gray"],".dish-info":["word-spacing: 5px"],".dish-name":["font-variant: small-caps"],".price":["font-weight: bold"],li:["list-style: upper-roman","line-height: 200%"]},syntax:`text-decoration: underline;
text-decoration: line-through;
text-decoration: overline;`,help:`<p>Use <code>text-decoration</code> to add lines to your text.</p>
    <p>Underlines with <code>underline</code> keyword are most commonly used, but it\u2019s possible to add lines above your text with <code>overline</code> or right through it with <code>line-through</code>. You can also specify multiple keywords for multiple lines.</p>`,markup:me,doThis:"Add an underline to SUSHIS",expectedScreenshot:"img/reproduce/7-12.jpg",check:[["text-decoration","underline"]]},{name:"Text Alignment",selector:"p.information",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px","text-transform: uppercase","letter-spacing: 1em","text-decoration: underline"],"p.information":["font-style: italic","color: gray"],".dish-info":["word-spacing: 5px"],".dish-name":["font-variant: small-caps"],".price":["font-weight: bold"],li:["list-style: upper-roman","line-height: 200%"]},cssRules:{},syntax:`text-align: left;
text-align: right;
text-align: justify;`,help:`<p>Change the text alignment within a paragraph with the <code>text-align</code> property.</p>
    <p>Values accepted: <code>left</code> (or <code>start</code>), <code>right</code> (or <code>end</code>), <code>justify</code></p>`,markup:me,doThis:"Align text of information paragraph to the right",expectedScreenshot:"img/reproduce/7-13.jpg",check:[["text-align","right"]]},{name:"Floating elements",selector:".price",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px","text-transform: uppercase","letter-spacing: 1em","text-decoration: underline"],"p.information":["font-style: italic","color: gray","text-align: right"],".dish-info":["word-spacing: 5px"],".dish-name":["font-variant: small-caps"],".price":["font-weight: bold"],li:["list-style: upper-roman","line-height: 200%"]},syntax:"float: <dir>;",help:`<p>Use <code>float</code> property to make an element floating to a specific direction: <code>left</code> or <code>right</code></p>
    <p>Floating elements will no longer follow the classic inline layout. Instead, sibling elements will wrap around it. This is useful for displaying text that matches the outline of an image for example.</p>`,markup:me,doThis:"Align the prices with the right edge of the menu",expectedScreenshot:"img/reproduce/7-14.jpg",check:[["float","right"]]},{name:"Text Indentation",selector:"li",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px","text-transform: uppercase","letter-spacing: 1em","text-decoration: underline"],"p.information":["font-style: italic","color: gray","text-align: right"],".dish-info":["word-spacing: 5px"],".dish-name":["font-variant: small-caps"],".price":["font-weight: bold","float: right"],li:["list-style: upper-roman","line-height: 200%"]},syntax:"text-indent: <dim>;",help:"<p>Use <code>text-indent</code> to add an indent to your blocks of text. This property takes either a length (for example, 10px, 2em) or a percentage of the containing block\u2019s width.</p>",markup:me,doThis:"Add a 20px indent and a 50px left margin for each item",expectedScreenshot:"img/reproduce/7-15.jpg",inputLinesNumber:2,check:[["text-indent","20px"],["margin-left","50px"]]},{name:"Text Direction",selector:"h2",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px","text-transform: uppercase","letter-spacing: 1em","text-decoration: underline"],"p.information":["font-style: italic","color: gray","text-align: right"],".dish-info":["word-spacing: 5px"],".dish-name":["font-variant: small-caps"],".price":["font-weight: bold","float: right"],li:["list-style: upper-roman","line-height: 200%","text-indent: 20px","margin-left: 50px"]},syntax:"writing-mode: <mode>;",help:`<p>By default, in Western languages, text is read from left to right. Some languages like Arabic, Hebrew, or Persian are written right to left, and some like Japanese are written vertically.</p>
    <p>You can change the direction of text with <code>writing-mode</code> property. Values accepted are <code>ltr</code> (left to right), <code>rtl</code> (right to left), <code>vertical-lr</code> (top to bottom) and <code>vertical-rl</code> (bottom to top).</p>`,markup:me,doThis:"Display SUSHIS floating vertically on the left",expectedScreenshot:"img/reproduce/7-16.jpg",inputLinesNumber:2,check:[["writing-mode","vertical-lr"],["float","left"]]},{name:"Text Orientation",selector:"h2",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px","text-transform: uppercase","letter-spacing: 1em","text-decoration: underline"],"p.information":["font-style: italic","color: gray","text-align: right"],".dish-info":["word-spacing: 5px"],".dish-name":["font-variant: small-caps"],".price":["font-weight: bold","float: right"],li:["list-style: upper-roman","line-height: 200%","text-indent: 20px","margin-left: 50px"]},cssRules:{h2:["float: left","writing-mode: vertical-lr"]},syntax:"text-orientation: <mode>;",help:"<p>After changing the direction, you can also change the orientation of individual characters for styling purposes, with the <code>text-orientation</code> property. Values accepted are <code>mixed</code> (default), <code>upright</code> (rotate 90\xB0 characters of vertical text) or <code>sideways</code> (rotate 90\xB0 all characters)</p>",markup:me,doThis:"Change the characters orientation and line decoration of SUSHIS",expectedScreenshot:"img/reproduce/7-17.jpg",inputLinesNumber:2,check:[["text-orientation","upright"],["text-decoration","overline"]]}],Tp={name:"Typography",description:"The art of displaying text",levels:kp,wrapperClass:"menu-wrapper",intro:`<p>Time to work on the restaurant menu !</p>
  <img src="img/menu-logo.png" height="120" style="display:block; height: 120px; margin: 0 auto" />
  <p>Everyone knows that best restaurants all have nice fonts on their menu. Let's see how we can make beautiful text displays with CSS !</p>`},os=`
<h1>Chef Nakamura's Restaurant</h1>
<main>
  <h2>Special Sushi Platters</h2>
  <ul>
    <li>
      <img src="img/sushis/1.png" width="200" />
      <span class="dish-name">Sushi Mori</span>
      <span class="price">$21.90</span>
      <p class="dish-details">Served in a traditional wood boat platter, it is composed of 16 pieces of Sushi with cooked rice and wasabi. Served with Miso Soup and Cabbage Salad at demand. Quantity recommended for 4 persons.</p>
    </li>
    <li>
      <img src="img/sushis/2.png" width="200" />
      <span class="dish-name">Maki Mori</span>
      <span class="price">$23.90</span>
      <p class="dish-details">Served in a traditional wood boat platter, it is composed of 26 pieces of Maki with cooked rice and wasabi. Served with Miso Soup and Cabbage Salad at demand. Quantity recommended for 4 persons.</p>        
    </li>
  </ul>    
</main>`,as=`
<h1>Chef Nakamura's Restaurant</h1>
<main>
  <img src="img/picture.jpg" id="chef-picture" alt="Picture of Chef Nakamura" />
  <h2>Special Sushi Platters</h2>
  <ul>
    <li>
      <img src="img/sushis/1.png" width="200" />
      <span class="dish-name">Sushi Mori</span>
      <span class="price">$21.90</span>
      <p class="dish-details">Served in a traditional wood boat platter, it is composed of 16 pieces of Sushi with cooked rice and wasabi. Served with Miso Soup and Cabbage Salad at demand. Quantity recommended for 4 persons.</p>
    </li>
    <li>
      <img src="img/sushis/2.png" width="200" />
      <span class="dish-name">Maki Mori</span>
      <span class="price">$23.90</span>
      <p class="dish-details">Served in a traditional wood boat platter, it is composed of 26 pieces of Maki with cooked rice and wasabi. Served with Miso Soup and Cabbage Salad at demand. Quantity recommended for 4 persons.</p>        
    </li>
  </ul>    
</main>`,Ue={h1:["font-family: 'Reggae One', serif"],"img#chef-picture":["display: block","width: 100%"],".dish-name":["font-variant: small-caps","font-size: 140%"],".price":["font-weight: bold","margin-left: 1em"]},$p=[{name:"Background color",selector:"h2",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{...Ue},syntax:"background-color: <color>",help:`<p>Use <code>background-color</code> to fill the element box (content + padding) with a color</p>
    <p>Colors in CSS can expressed with several notations:</p>
    <dl>
    <dt>A color name</dt><dd>red, blue, transparent, or any of the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/named-color" target="_blank">145</a> official color names in CSS.</dd>
    <dt>Hexadecimal</dt><dd>#RGBA, with R, G, B, A be respectively red, green, blue and alpha values between 00 and FF, examples: #FF0000 for red, #CCC for gray</dd>
    <dt>RGBA</dt><dd>rgb(R,G,B,A) with R, G, B, A be respectively red, green, blue and alpha values between 0 and 255, examples: rgb(255,0,0) for red, rgba(128,128,128,0.5) for semi-opaque gray</dd>
    <dt>HSL</dt><dd>hsl(H,S,L,A) with H, S, L, A be respectively the hue between 0 and 360deg, and the saturation, luminosity and alpha between 0 and 100%</dd>
    </dl>
    `,examples:["<code>background-color: #FF0000</code> for a red background","<code>background-color: #CCC</code> for a light gray background","<code>background-color: rgb(0,0,128,0.5)</code> for semi-opaque dark blue background","<code>background-color: hsl(180deg, 100%, 100%)</code> for a cyan background"],markup:os,doThis:"Add a pure red background with 25% opacity for h2",expectedScreenshot:"img/reproduce/8-1.jpg",check:[["background-color","rgba(255,0,0,0.25)","rgba(255,0,0,.25)","rgba(255,0,0,25%)","rgb(255,0,0,0.25)","rgb(255,0,0,.25)","rgb(255,0,0,25%)","#ff000040","hsl(0,100%,100%,25%)","hsla(0,100%,100%,25%)"]]},{name:"Background images",selector:"h1",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{...Ue,h2:["background-color: #ff000040"]},cssRules:{h1:["color: white","text-shadow: 0 0 0.5em black"]},syntax:"background-image: <url>",help:`<p>Use <code>background-image</code> to use an image file as the background of an element.</p>
    <p>To specify the image file, use the <code>url()</code> keyword.</p>
    `,examples:['<code>background-image: url("path/to/image.jpg")</code>'],markup:os,doThis:"Use img/waves.svg as background image for h1",expectedScreenshot:"img/reproduce/8-2.jpg",check:[["background-image","url('img/waves.svg')"]]},{name:"Background properties",selector:"h1",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{...Ue,h1:["font-family: 'Reggae One', serif"],h2:["background-color: #ff000040"]},cssRules:{h1:["color: white","text-shadow: 0 0 0.5em black","background-image: url('img/waves.svg')"]},syntax:`background-size: <size>;
background-repeat: <mode>;
background-position: <x> <y>
`,help:`<p>Background can be tweaked in many ways. By default, when the image is not big enough to cover the entire element background, the image is being repeated.</p>
    <p>This behavior can be changed with <code>background-repeat: no-repeat;</code>. You can also decide to only repeat on one axis with <code>repeat-x</code> or <code>repeat-y</code>.</p>
    <p>You can also change the size of the background with <code>background-size</code>, or its starting position with <code>background-position</code>.</p>
    <p>All these properties can be specified at one with the shorthand <code>background</code> property</p>
    `,examples:["<code>background: url('image.jpg') cover no-repeat;</code> to stretch and fill the image to cover all the background","<code>background: url('pattern.svg') center 100px repeat</code> to repeat a 100x100px pattern"],markup:os,doThis:"Set the background size to 400px",expectedScreenshot:"img/reproduce/8-3.jpg",check:[["background-size","400px","400px 400px"]]},{name:"Linear gradients",selector:"h2",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{...Ue,h1:["font-family: 'Reggae One', serif","color: white","text-shadow: 0 0 0.5em black","background-image: url('img/waves.svg')","background-size: 400px"],h2:["background-color: #ff000040"]},cssRules:{},syntax:`background: linear-gradient(
  <angle>, 
  <startColor>,
  <endColor>
);`,help:`<p>CSS provides useful functions to make color gradients. Color gradients are considered as generated images, to be used with <code>background-image</code> property. To avoid overlapping with existing <code>background-color</code>, we recommend using the <code>background</code> shorthand property to reset everything.</p>
    <p>For linear gradients, going in any direction, use the <code>linear-gradient()</code> function.</p>`,examples:["<code>background: linear-gradient(45deg, blue, red)</code>","<code>background: linear-gradient(to right, #FFFFFF, transparent)</code>","<code>background: linear-gradient(red 40%, yellow 30%, blue 65%);</code>"],markup:os,doThis:"Make a linear gradient for h2, from pink on top to transparent on bottom",expectedScreenshot:"img/reproduce/8-4.jpg",check:[["background","linear-gradient(to bottom, pink, transparent)","linear-gradient(to top, transparent, pink)","linear-gradient(180deg, pink, transparent)","linear-gradient(0deg, transparent, pink)"]]},{name:"Radial gradients",selector:"main",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{...Ue,h1:["font-family: 'Reggae One', serif","color: white","text-shadow: 0 0 0.5em black","background-image: url('img/waves.svg')","background-size: 400px"],h2:["background: linear-gradient(to bottom, pink, transparent)"]},cssRules:{},syntax:`background: radial-gradient(
  <shape> / <size> /<position>,
  ...<colors>
);`,help:`<p>CSS provides useful functions to make color gradients. Color gradients are considered as generated images, to be used with <code>background-image</code> property. To avoid overlapping with existing <code>background-color</code>, we recommend using the <code>background</code> shorthand property to reset everything.</p>
    <p>Radial gradients can be made of circles or ellipses going through two colors or more.</p>`,examples:["<code>background: radial-gradient(red, blue);</code> makes a gradient red at center and blue at the edge",`<code>radial-gradient(circle at center, red 0, blue, green 100%)</code> makes a gradient at the center of its container,
      starting red, changing to blue, and finishing green`,`<code>radial-gradient(
        farthest-corner at 20% 20%,
        yellow 0%,
        cyan 100%
      );</code> makes a non centered gradient with a yellow circle at top left`],markup:os,doThis:"Make a radial gradient for main content, from #fff0e0 at center to #ffc0b0 at the edge",expectedScreenshot:"img/reproduce/8-5.jpg",check:[["background","radial-gradient(#fff0e0, #ffc0b0)","radial-gradient(circle, #fff0e0 0, #ffc0b0 100%)","radial-gradient(circle at center, #fff0e0 0, #ffc0b0 100%)"]]},{name:"Object fit",selector:"img#chef-picture",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{...Ue,h1:["font-family: 'Reggae One', serif","color: white","text-shadow: 0 0 0.5em black","background-image: url('img/waves.svg')","background-size: 400px"],h2:["background: linear-gradient(to bottom, pink, transparent)"],main:["background: radial-gradient(#fff0e0, #ffc0b0)"]},cssRules:{"img#chef-picture":["display: block","width: 100%","height: 200px"]},syntax:"object-fit: <mode>",help:`<p>The <code>object-fit</code> property changes how a media element like <code>&lt;img&gt;</code> or <code>&lt;video&gt;</code> is resized according to its container dimensions.</p>
    <p>Values accepted are:</p>
    <dl>
      <dt>fill (default)</dt>
      <dd>The object is stretched to fill the entire box</dd>
      <dt>contain</dt>
      <dd>The object is scaled to maintain its aspect ratio while fitting within the box. This can add blank space around the image.</dd>
      <dt>cover</dt>
      <dd>The object is scaled to maintain its aspect ratio while fitting within the box. This can add blank space around the image.</dd>
      <dt>none</dt>
      <dd>The object is not resized at all, preserving its original dimensions</dd>
      <dt>scale-down</dt>
      <dd>If the object original dimensions do not fit in the box, scale down like <code>contain</code>, otherwise preserve original dimensions.</dd>
    </dl>`,examples:[],markup:as,doThis:"Make the image cover the entire zone without stretching",expectedScreenshot:"img/reproduce/8-6.jpg",check:[["object-fit","cover"]]},{name:"Object position",selector:"img#chef-picture",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{...Ue,h1:["font-family: 'Reggae One', serif","color: white","text-shadow: 0 0 0.5em black","background-image: url('img/waves.svg')","background-size: 400px"],h2:["background: linear-gradient(to bottom, pink, transparent)"],main:["background: radial-gradient(#fff0e0, #ffc0b0)"]},cssRules:{"img#chef-picture":["display: block","width: 100%","height: 200px","object-fit: cover"]},syntax:"object-position: <x> <y>",help:`<p>The <code>object-position</code> property changes how a media element center is aligned with the center of its container box.</p>
    <p>You can use it to change the cropped part of an image that does not fit in its box.</p>`,examples:[],markup:as,doThis:"Change the picture position so we can see both the boat and the chef face.",expectedScreenshot:"img/reproduce/8-7.jpg",check:[["object-position",e=>{if(!e)return!1;const t=Number((e.split(" ")[1]||"").replace("px",""));return!isNaN(t)&&t>=-80&&t<=-20}]]},{name:"Image shapes",selector:"li img",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{...Ue,h1:["font-family: 'Reggae One', serif","color: white","text-shadow: 0 0 0.5em black","background-image: url('img/waves.svg')","background-size: 400px"],h2:["background: linear-gradient(to bottom, pink, transparent)"],main:["background: radial-gradient(#fff0e0, #ffc0b0)"],"img#chef-picture":["display: block","width: 100%","height: 200px","object-fit: cover","object-position: 0 -50px"]},cssRules:{},syntax:`shape-outside: <url>
shape-outside: <box>
shape-outside: <shape>`,help:"<p>The <code>shape-outside</code> property let you change the shape around which the adjacent inline content should wrap. By default, the shape is the rectangular margin box, but you may prefer a circle, a custom polygon or a zone defined by the transparent parts of a PNG file.</p>",examples:["<code>shape-outside: content-box;</code> will make adjacent inline content ignore the element margins and borders","<code>shape-outside: circle(50%);</code> will make the shape a circle of 50% radius","<code>shape-outside: polygon(50% 0, 100% 100%, 0 100%);</code> will make the shape a equilateral triangle","<code>shape-outside: url('shape.png');</code> will use the transparent parts of the image to define the shape"],markup:as,doThis:"Make the platter images float on the right and text follow their shape.",expectedScreenshot:"img/reproduce/8-8.jpg",inputLinesNumber:2,check:[["float","right"],["shape-outside","url('img/sushis/1.png')","url('img/sushis/2.png')"]]},{name:"Shape margins",selector:"li img",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{...Ue,h1:["font-family: 'Reggae One', serif","color: white","text-shadow: 0 0 0.5em black","background-image: url('img/waves.svg')","background-size: 400px"],h2:["background: linear-gradient(to bottom, pink, transparent)"],main:["background: radial-gradient(#fff0e0, #ffc0b0)"],"img#chef-picture":["display: block","width: 100%","height: 200px","object-fit: cover","object-position: 0 -50px"]},cssRules:{"li img":["float: right"],"li:nth-child(1) img":["shape-outside: url('img/sushis/1.png')"],"li:nth-child(2) img":["shape-outside: url('img/sushis/2.png')"]},syntax:"shape-margin: <dim>",help:`
    <p>As you can see, we had to declare custom shapes for each image. Ideally we would like to use <code>shape-outside: attr(src url);</code> to make each image element use the shape defined by its own image file; unfortunately this is not supported yet by browsers, despite being in the CSS specification.</p>
    <p>Now, you might want to add a margin to the shape you just defined. Use the <code>shape-margin</code> property to add a custom margin to the shape.</p>`,markup:as,doThis:"Add a 10px margin to platters images shapes.",expectedScreenshot:"img/reproduce/8-9.jpg",check:[["shape-margin","10px"]]},{name:"Image Filters",selector:"img#chef-picture",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{...Ue,h1:["font-family: 'Reggae One', serif","color: white","text-shadow: 0 0 0.5em black","background-image: url('img/waves.svg')","background-size: 400px"],h2:["background: linear-gradient(to bottom, pink, transparent)"],main:["background: radial-gradient(#fff0e0, #ffc0b0)"],"img#chef-picture":["display: block","width: 100%","height: 200px","object-fit: cover","object-position: 0 -50px"],"li img":["float: right","shape-margin: 10px"],"li:nth-child(1) img":["shape-outside: url('img/sushis/1.png')"],"li:nth-child(2) img":["shape-outside: url('img/sushis/2.png')"]},cssRules:{},syntax:`filter: ...<filters>
filter: blur(<dim>)
filter: brightness(<val>)
filter: contrast(<val>)
filter: drop-shadow(<x> <y> <dim> <color>)
filter: grayscale(<val>)
filter: hue-rotate(<angle>)
filter: invert(<val>)
filter: opacity(<val>)
filter: saturate(<val>)
filter: sepia(<val>)`,help:`
    <p>CSS has built-in functions to apply filters to images, for example to change its brightness, contrast, saturation, hue etc.</p>
    <p>You can add as many filters as you want in the <code>filter</code> property, separated by whitespaces.</p>`,examples:["<code>filter: blur(5px);</code>","<code>filter: brightness(0.4);</code>","<code>filter: contrast(200%);</code>","<code>filter: drop-shadow(16px 16px 20px blue);</code>","<code>filter: grayscale(50%);</code>","<code>filter: hue-rotate(90deg);</code>","<code>filter: invert(75%);</code>","<code>filter: opacity(25%);</code>","<code>filter: saturate(30%);</code>","<code>filter: sepia(60%);</code>"],markup:as,doThis:"Change the brightness and saturation of the picture to 120%",expectedScreenshot:"img/reproduce/8-10.jpg",check:[["filter","brightness(120%) saturate(120%)","brightness(1.2) saturate(1.2)","saturate(120%) brightness(120%)","saturate(1.2) brightness(1.2)"]]}],Cp={name:"Background & Images",description:"Illustrating text with pictures, vector graphics or colored backgrounds",levels:$p,wrapperClass:"menu-wrapper-part2",intro:`<p>The menu looks good, but it will be even better with colored backgrounds and images.</p>
  <p>We asked a photograph to take pictures of the special sushi platters. Looks delicious !</p>
  <img src="img/sushis/1.png" width="300" />
  <img src="img/sushis/2.png" width="300" />
  <img src="img/sushis/3.png" width="300" />
  <img src="img/sushis/4.png" width="300" />`},wt=[Yc,dr,mp,yp,wp,_p,Tp,Cp],Sp={name:"Welcome",intro:`
    <p>This website is a collection of exercises to learn HTML and CSS while having fun.</p>
    <p>It is a fork of <a href="https://flukeout.github.io/" target="_blank">CSS Diner</a> by <a href="http://www.twitter.com/flukeout" target="_blank">@flukeout</a>,
    and is heavily inspired by many other CSS Games in the open source community.</p>
    <p>Click on the Next button below or use <kbd>\u21DE</kbd> <kbd>\u21DF</kbd> keys to navigate between levels.</p>`,description:"Let's begin !",levels:[]},S=ai({progress:{completed:{},inputs:{},currentChapter:0,currentLevel:0},level:Da[0],menuOpened:!1});window.state=S;const Ae=de(()=>S.progress.currentChapter===0?Sp:wt[S.progress.currentChapter-1]),sn="html_css_training_progress";function Rn(e,t){return Array.isArray(S.progress.completed[e])&&S.progress.completed[e].includes(t)}function Pp(){const e=S.progress.currentChapter,t=S.progress.currentLevel;Rn(e,t)||(S.progress.completed.hasOwnProperty(e)||(S.progress.completed[e]=[]),S.progress.completed[e].push(t),wi())}function Lp(e){return Array.isArray(S.progress.completed[e])?ei(S.progress.completed[e].length/wt[e-1].levels.length*100,0,100):0}function Ap(){var e;try{Object.assign(S.progress,JSON.parse((e=localStorage.getItem(sn))!=null?e:"{}"))}catch{localStorage.removeItem(sn),nn()}}function wi(){localStorage.setItem(sn,JSON.stringify(S.progress))}function Rp(e){S.progress.currentChapter in S.progress.inputs||(S.progress.inputs[S.progress.currentChapter]={}),S.progress.inputs[S.progress.currentChapter][S.progress.currentLevel]=e,wi()}function nn(){S.progress={currentChapter:1,currentLevel:0,completed:{},inputs:{}},wi()}var Mo;const Ls=typeof window<"u",Ip=e=>typeof e=="string",Oi=()=>{};Ls&&((Mo=window==null?void 0:window.navigator)==null?void 0:Mo.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Op(e){return typeof e=="function"?e():w(e)}function Ep(e){return e}function Mp(e){return Nr()?(jr(e),!0):!1}function Hp(e){var t;const s=Op(e);return(t=s==null?void 0:s.$el)!=null?t:s}const ur=Ls?window:void 0;Ls&&window.document;Ls&&window.navigator;Ls&&window.location;function fr(...e){let t,s,i,n;if(Ip(e[0])?([s,i,n]=e,t=ur):[t,s,i,n]=e,!t)return Oi;let o=Oi;const a=mt(()=>Hp(t),l=>{o(),l&&(l.addEventListener(s,i,n),o=()=>{l.removeEventListener(s,i,n),o=Oi})},{immediate:!0,flush:"post"}),r=()=>{a(),o()};return Mp(r),r}const Np=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function Ei(e,t,s={}){const{target:i=ur,eventName:n="keydown",passive:o=!1}=s,a=Np(e);return fr(i,n,l=>{a(l)&&t(l)},o)}const on=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},an="__vueuse_ssr_handlers__";on[an]=on[an]||{};on[an];var Ho;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ho||(Ho={}));var jp=Object.defineProperty,No=Object.getOwnPropertySymbols,Fp=Object.prototype.hasOwnProperty,zp=Object.prototype.propertyIsEnumerable,jo=(e,t,s)=>t in e?jp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Dp=(e,t)=>{for(var s in t||(t={}))Fp.call(t,s)&&jo(e,s,t[s]);if(No)for(var s of No(t))zp.call(t,s)&&jo(e,s,t[s]);return e};const Bp={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Dp({linear:Ep},Bp);const qp={key:0,class:"credits"},Wp=["innerHTML"],Up=ee({__name:"About",setup(e){const t=de(()=>Ae.value.credits);return(s,i)=>w(t)?(k(),C("div",qp,[m("p",{innerHTML:w(t)},null,8,Wp)])):xe("",!0)}});const he=(e,t)=>{const s=e.__vccOpts||e;for(const[i,n]of t)s[i]=n;return s},Yp=he(Up,[["__scopeId","data-v-9c9636d8"]]);const Kp={},Vp=e=>(He("data-v-08112ff5"),e=e(),Ne(),e),Gp=X(" HTML/CSS Training "),Xp=Vp(()=>m("span",{class:"share-menu"},[X(" Repository "),m("a",{class:"share-github",target:"_blank",href:"https://github.com/worldline/html-css-training"})],-1)),Jp=[Gp,Xp];function Qp(e,t){return k(),C("header",null,Jp)}const Zp=he(Kp,[["render",Qp],["__scopeId","data-v-08112ff5"]]),eh=e=>(He("data-v-c2ea71ea"),e=e(),Ne(),e),th={class:"chapter-intro"},sh={key:0,class:"main-title"},ih={key:1},nh={class:"chapter-name"},oh=eh(()=>m("hr",null,null,-1)),ah=ee({__name:"ChapterIntro",setup(e){return(t,s)=>(k(),C("div",th,[w(S).progress.currentChapter===0?(k(),C("h1",sh,"HTML/CSS Training")):(k(),C("h1",ih,[X("Chapter "+U(w(S).progress.currentChapter)+": ",1),m("p",nh,U(w(Ae).name),1)])),oh,m("p",null,U(w(Ae).description),1)]))}});const rh=he(ah,[["__scopeId","data-v-c2ea71ea"]]);let lh=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,s)=>(s&=63,s<36?t+=s.toString(36):s<62?t+=(s-26).toString(36).toUpperCase():s>62?t+="-":t+="_",t),"");function ch(e){const t=e.contentDocument,s=e.contentWindow;((i,n)=>{const o="div",a=["#c33","#ea4c88","#639","#06c","#690","#fc3","#f90","#963"];function r(E){return a[E%(a.length-1)]}function l(E,M,z,oe,ue,fe,ie,B){const re=t.createElement(o);return re.dataset.faceFor=B,new Map().set("position","absolute").set("transform-origin",["left","top"]).set("background",ie).set("width",`${oe}px`).set("height",`${ue}px`).set("opacity","0.8").set("transform",`translate3d(${E}px, ${M}px, ${z}px) rotateX(270deg) rotateY(${fe}deg)`).forEach((ae,ce)=>re.style[ce]=Array.isArray(ae)?ae.join(" "):ae),re.outerHTML}const d=.001;let h="";function u(E,M,z,oe){const ue=E.childNodes,fe=ue.length;for(let ie=0;ie<fe;ie++){const B=ue[ie];if(B.nodeType===Node.ELEMENT_NODE){const re=lh();B.dataset.uid=re,B.style.overflow="visible",B.style.transformStyle="preserve-3d",B.style.transform=`translateZ(${(i+(fe-ie)*d).toFixed(3)}px)`;let ae=z,ce=oe;B.offsetParent===E&&(ae+=E.offsetLeft,ce+=E.offsetTop),u(B,M+1,ae,ce);const _e=(M+1)*i,ge=r(M);h+=l(ae+B.offsetLeft,ce+B.offsetTop,_e,B.offsetWidth,i,0,ge,re),h+=l(ae+B.offsetLeft+B.offsetWidth,ce+B.offsetTop,_e,B.offsetHeight,i,270,ge,re),h+=l(ae+B.offsetLeft,ce+B.offsetTop+B.offsetHeight,_e,B.offsetWidth,i,0,ge,re),h+=l(ae+B.offsetLeft,ce+B.offsetTop,_e,B.offsetHeight,i,270,ge,re)}}}const f=t.body;f.style.overflow="visible",f.style.transformStyle="preserve-3d",f.style.perspective=n.toString();const T=E=>(E/2).toFixed(2),L=`${T(s.innerWidth)}px ${T(s.innerHeight)}px`;f.style.perspectiveOrigin=L,f.style.transformOrigin=L,u(f,0,0,0),t.addEventListener("mousemove",E=>{if(!E.ctrlKey){const M=E.clientX/s.innerWidth,z=1-E.clientY/s.innerHeight,oe=120,ue=fe=>((fe-.5)*oe).toFixed(2);f.style.transform=`rotateX(${ue(z)}deg) rotateY(${ue(M)}deg)`}},!0),t.addEventListener("mouseover",E=>{if(E.ctrlKey){const M=E.target,z=M.dataset.uid||M.dataset.faceFor;M.dataset.faceFor&&Array.from(t.querySelectorAll(`[data-uid="${z}"], [data-face-for="${z}"]`)).forEach(oe=>oe.classList.add("hovered"))}}),t.addEventListener("mouseleave",E=>{t.querySelectorAll(".hovered").forEach(M=>M.classList.remove("hovered"))}),t.addEventListener("mouseout",E=>{const M=E.target,z=M.dataset.uid||M.dataset.faceFor;Array.from(t.querySelectorAll(`[data-uid="${z}"], [data-face-for="${z}"]`)).forEach(oe=>oe.classList.remove("hovered"))}),t.addEventListener("click",E=>{var z;let M=E.target;M.nodeName==="A"&&E.preventDefault(),M.dataset.faceFor&&(M=t.querySelector(`[data-uid="${M.dataset.faceFor}"]`)),M&&((z=s.top)==null||z.postMessage({event:"elementClick",tag:M.tagName.toLowerCase(),type:M.getAttribute("type")}))});const A=t.createElement(o);A.style.position="absolute",A.style.transformStyle="preserve-3d";const{marginTop:R,marginLeft:I}=getComputedStyle(f);A.style.top=`-${R}`,A.style.left=`-${I}`,A.innerHTML=h,f.appendChild(A),f.style.transition="transform 400ms ease-in-out",f.style.transform="rotateX(-22.5deg) rotateY(12.5deg)",setTimeout(()=>{f.style.transition=""},400)})(50,5e3)}const dh={},ph={id:"correct-animation"};function hh(e,t){return k(),C("div",ph," \u2714\uFE0F Correct ")}const As=he(dh,[["render",hh]]),gr=e=>(He("data-v-7c679098"),e=e(),Ne(),e),uh={key:0},fh=X("Use the "),gh=gr(()=>m("b",null,"3D",-1)),mh=X(" view and the "),bh=gr(()=>m("b",null,"Ctrl",-1)),yh=X(" key to select elements in the DOM."),vh=[fh,gh,mh,bh,yh],wh=ee({__name:"InteractiveDOM",setup(e){const t=de(()=>S.level),s=Ee(!1),i=Ee(null),n=Ee(!1);function o(){if(!i.value)return;const a=i.value;s.value===!0&&a.contentWindow?(a.contentWindow.location.reload(),s.value=!1):(ch(a),s.value=!0)}return fr("message",a=>{if(a.data.event==="elementClick"){const r=a.data,l=r.tag,d=S.level;if(l==null||!d.tag)return;Uc(r,d)?(n.value=!0,setTimeout(()=>{n.value=!1,Zt()},600)):Ts(document.querySelector("iframe"))}}),(a,r)=>(k(),C(F,null,[m("p",{class:"order",style:et({opacity:w(t).order&&!n.value?1:0})},U(w(t).order||"\xA0"),5),m("div",{class:ye(["game-wrapper",{win:n.value}])},[W(As),m("iframe",{src:"demo/chapter1.html",ref_key:"iframe",ref:i,scrolling:"no"},null,512)],2),w(t).order&&w(t).tag?(k(),C("p",uh,vh)):xe("",!0),m("button",{onClick:o,id:"button-3d"},U(s.value?"2D":"3D"),1)],64))}});const xh=he(wh,[["__scopeId","data-v-7c679098"]]);var St,js,gs=typeof Map=="function"?new Map:(St=[],js=[],{has:function(e){return St.indexOf(e)>-1},get:function(e){return js[St.indexOf(e)]},set:function(e,t){St.indexOf(e)===-1&&(St.push(e),js.push(t))},delete:function(e){var t=St.indexOf(e);t>-1&&(St.splice(t,1),js.splice(t,1))}}),mr=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch{mr=function(t){var s=document.createEvent("Event");return s.initEvent(t,!0,!1),s}}function _h(e){var t=gs.get(e);t&&t.destroy()}function kh(e){var t=gs.get(e);t&&t.update()}var ls=null;typeof window>"u"||typeof window.getComputedStyle!="function"?((ls=function(e){return e}).destroy=function(e){return e},ls.update=function(e){return e}):((ls=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(s){return function(i){if(i&&i.nodeName&&i.nodeName==="TEXTAREA"&&!gs.has(i)){var n,o=null,a=null,r=null,l=function(){i.clientWidth!==a&&f()},d=function(T){window.removeEventListener("resize",l,!1),i.removeEventListener("input",f,!1),i.removeEventListener("keyup",f,!1),i.removeEventListener("autosize:destroy",d,!1),i.removeEventListener("autosize:update",f,!1),Object.keys(T).forEach(function(L){i.style[L]=T[L]}),gs.delete(i)}.bind(i,{height:i.style.height,resize:i.style.resize,overflowY:i.style.overflowY,overflowX:i.style.overflowX,wordWrap:i.style.wordWrap});i.addEventListener("autosize:destroy",d,!1),"onpropertychange"in i&&"oninput"in i&&i.addEventListener("keyup",f,!1),window.addEventListener("resize",l,!1),i.addEventListener("input",f,!1),i.addEventListener("autosize:update",f,!1),i.style.overflowX="hidden",i.style.wordWrap="break-word",gs.set(i,{destroy:d,update:f}),(n=window.getComputedStyle(i,null)).resize==="vertical"?i.style.resize="none":n.resize==="both"&&(i.style.resize="horizontal"),o=n.boxSizing==="content-box"?-(parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)):parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),isNaN(o)&&(o=0),f()}function h(T){var L=i.style.width;i.style.width="0px",i.style.width=L,i.style.overflowY=T}function u(){if(i.scrollHeight!==0){var T=function(A){for(var R=[];A&&A.parentNode&&A.parentNode instanceof Element;)A.parentNode.scrollTop&&R.push({node:A.parentNode,scrollTop:A.parentNode.scrollTop}),A=A.parentNode;return R}(i),L=document.documentElement&&document.documentElement.scrollTop;i.style.height="",i.style.height=i.scrollHeight+o+"px",a=i.clientWidth,T.forEach(function(A){A.node.scrollTop=A.scrollTop}),L&&(document.documentElement.scrollTop=L)}}function f(){u();var T=Math.round(parseFloat(i.style.height)),L=window.getComputedStyle(i,null),A=L.boxSizing==="content-box"?Math.round(parseFloat(L.height)):i.offsetHeight;if(A<T?L.overflowY==="hidden"&&(h("scroll"),u(),A=L.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(i,null).height)):i.offsetHeight):L.overflowY!=="hidden"&&(h("hidden"),u(),A=L.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(i,null).height)):i.offsetHeight),r!==A){r=A;var R=mr("autosize:resized");try{i.dispatchEvent(R)}catch{}}}}(s)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],_h),e},ls.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],kh),e});var Th=ls;const $h={class:"input-header"},Ch={key:0,class:"file-name"},Sh={class:"file-window"},Ph={class:"line-numbers"},Lh=m("br",null,null,-1),rn=ee({__name:"EditorPane",props:{title:String,fileName:{type:String,required:!1},lang:String,nbLines:{type:Number,default:20}},setup(e){return(t,s)=>(k(),C("div",{class:ye(["editor-pane",e.lang+"-view"])},[m("div",$h,[e.fileName?(k(),C("div",Ch,U(e.fileName),1)):xe("",!0),X(" "+U(e.title),1)]),m("div",Sh,[m("div",Ph,[(k(!0),C(F,null,Pe(e.nbLines,i=>(k(),C(F,null,[X(U(i),1),Lh],64))),256))]),yt(t.$slots,"default")])],2))}});const Ah={class:"markup"},br=ee({__name:"HTMLMarkup",props:{markup:String},setup(e){const t=e,s=Ee(null);va(i),mt(()=>t.markup,i);function i(){var a;const o=document.createElement("div");o.innerHTML=(a=t.markup)!=null?a:"",s.value&&(s.value.innerHTML=n(o,!0).innerHTML)}function n(o,a){if(o instanceof HTMLElement){const r=document.createElement("div"),l=o.tagName.toLowerCase(),d=o.getAttributeNames().map(u=>`${u}="${o.getAttribute(u)}"`).join(" "),h=Array.from(o.childNodes);return h.length>0?(a||(r.textContent=`<${l}${d?" "+d:""}>`),h.forEach(u=>r.appendChild(n(u,!1))),a||r.appendChild(document.createTextNode(`</${l}>`))):r.textContent=`<${l}${d?" "+d:""} />`,r}else{const r=document.createElement("span");return r.textContent=o.textContent,r}}return(o,a)=>(k(),C("div",Ah,[m("div",{ref_key:"container",ref:s},null,512)]))}});function yr(e){var r,l,d,h;const t=S.level;if(!t)return;const s=t.wrapperClass||Ae.value.wrapperClass,i=s?`.${s}`:"",n=new Set([t.selector,...Object.keys((r=t.cssRules)!=null?r:{}),...Object.keys((l=t.cssRulesHidden)!=null?l:{})]);let o="";for(let u of n)o+=`
${i} ${u} {
${[...t.cssRules?(d=t.cssRules[u])!=null?d:[]:[],...t.cssRulesHidden?(h=t.cssRulesHidden[u])!=null?h:[]:[]].map(f=>`  ${f};`).join(`
`)}
}`;e&&e.length>0&&(o+=`
${i} ${t.selector} {
  ${e.join(`
`)}
}`);const a=document.getElementById("css-editor-stylesheet");a.innerHTML=o}function vr(e){const t=S.level;fs();const s=document.querySelector(".game-wrapper"),i=Array.from(s.querySelectorAll(t.selector));yr(e),Rh(e,t)?(s.classList.add("win"),i.forEach(o=>{o.classList.remove("strobe")}),setTimeout(function(){s.classList.remove("win"),Zt()},1500)):i.forEach(o=>{o.classList.remove("strobe"),Ts(document.querySelector(".table-content"))})}function Fo(e){return typeof e!="string"?e:e.replaceAll(/,\s+/g,",").replaceAll(/\s*\/\s*/g,"/").replaceAll(/'/g,'"').replace(/;$/,"").toLowerCase().trim()}function Rh(e,t){if(!t.check)return!0;const s=Object.fromEntries(e.map(i=>[i.split(":")[0],i.split(":")[1]]).map(([i,n])=>[i.trim(),Fo(n)]));return t.check.every(([i,...n])=>{const o=s[i];return n.some(a=>(a=Fo(a),typeof o=="string"&&o===a||typeof a=="function"&&a(o)?!0:(console.log(`Expected ${i} to be ${a}, got ${o}`),!1)))})}const Ih=e=>(He("data-v-9fa49e2e"),e=e(),Ne(),e),Oh=["onKeydown","onKeyup","placeholder"],Eh=Ih(()=>m("span",{class:"plus"},"+",-1)),Mh=ee({__name:"Editor",props:{placeholder:String},emits:["input"],setup(e,{emit:t}){const s=Ee(null),i=Ee(null),n=Ee(""),o=de(()=>S.level);mt(o,()=>{var d,h;n.value=(h=(d=S.progress.inputs[S.progress.currentChapter])==null?void 0:d[S.progress.currentLevel])!=null?h:"",ot(()=>{var u;return(u=i.value)==null?void 0:u.focus()}),yr(n.value.split(`
`))},{immediate:!0});const a=de(()=>o.value.inputLinesNumber&&o.value.inputLinesNumber>1?`CSS Editor (${o.value.inputLinesNumber} properties to set)`:"CSS Editor");mt(i,()=>Th(i.value));function r(d){var u;const h=n.value.split(`
`).map(f=>f.trim()).map(f=>Ae.value===dr||f.endsWith(";")?f:f+";");if(h.length>=((u=o.value.inputLinesNumber)!=null?u:1)){d.preventDefault();const f=s.value;f.classList.remove("enterhit"),setTimeout(()=>f.classList.add("enterhit"),0)}n.value&&(n.value=h.join(`
`)),t("input",h),Rp(n.value)}function l(){i.value.classList.toggle("input-strobe",n.value.length>0)}return(d,h)=>(k(),C("div",{class:"editor",onClick:h[1]||(h[1]=u=>{var f;return(f=i.value)==null?void 0:f.focus()})},[W(rn,{title:w(a),fileName:"style.css",lang:"css"},{default:Le(()=>[yt(d.$slots,"code-before",{},void 0,!0),Bl(m("textarea",{id:"editor-input",class:"input-strobe",ref_key:"inputElement",ref:i,onKeydown:Fa(r,["enter"]),onKeyup:Gs(l,["prevent"]),placeholder:e.placeholder,"onUpdate:modelValue":h[0]||(h[0]=u=>n.value=u)},null,40,Oh),[[jc,n.value]]),Eh,m("div",{class:"enter-button",onClick:r,ref_key:"enterButton",ref:s},"enter",512),yt(d.$slots,"code-after",{},void 0,!0)]),_:3},8,["title"]),W(rn,{title:"HTML Viewer",fileName:"table.html",lang:"html"},{default:Le(()=>[W(br,{markup:w(o).markup},null,8,["markup"])]),_:1})]))}});const In=he(Mh,[["__scopeId","data-v-9fa49e2e"]]),Hh={name:"Table",props:["content","hintContent"]};const wr=e=>(He("data-v-1e2c3b82"),e=e(),Ne(),e),Nh={class:"table-wrapper"},jh={class:"table-surface",ref:"surface"},Fh={class:"table-content"},zh=["innerHTML"],Dh=["innerHTML"],Bh={key:2,ref:"board",class:"table"},qh={class:"table-edge",ref:"edge"},Wh=wr(()=>m("div",{class:"table-leg"},null,-1)),Uh=wr(()=>m("div",{class:"table-leg"},null,-1)),Yh=[Wh,Uh];function Kh(e,t,s,i,n,o){return k(),C("div",Nh,[m("div",jh,null,512),m("div",Fh,[s.hintContent?(k(),C("div",{key:0,class:"hint-content",innerHTML:s.hintContent},null,8,zh)):xe("",!0),s.content?(k(),C("div",{key:1,innerHTML:s.content,ref:"board",class:"table"},null,8,Dh)):(k(),C("div",Bh,[yt(e.$slots,"default",{},void 0,!0)],512))]),m("div",qh,Yh,512)])}const On=he(Hh,[["render",Kh],["__scopeId","data-v-1e2c3b82"]]),En=e=>(He("data-v-43ba39a3"),e=e(),Ne(),e),Vh={class:"order"},Gh={class:"game-container"},Xh={class:"game-wrapper"},Jh=En(()=>m("br",null,null,-1)),Qh=X("{"),Zh=En(()=>m("br",null,null,-1)),eu=X(" /* Styles would go here. */"),tu=En(()=>m("br",null,null,-1)),su=X(" } "),iu=ee({__name:"SelectorGame",setup(e){const t=de(()=>S.level);function s(n){const o=S.level;fs();const a=document.querySelector(".table-content"),r=document.querySelector(".game-wrapper");try{a.querySelectorAll(n)}catch{n=""}const l=n?Array.from(a.querySelectorAll(n)):[],d=Array.from(a.querySelectorAll(o.selector));let h=!1;l.length==0&&Ts(document.querySelector(".editor")),l.length===d.length&&l.length>0&&(h=i(l,d)),h?(r.classList.add("win"),l.forEach(u=>{u.classList.remove("strobe"),u.classList.add("clean")}),setTimeout(function(){r.classList.remove("win"),fs(),Zt()},1e3)):(l.forEach(u=>{u.classList.remove("strobe"),Ts(u)}),setTimeout(function(){fs(),d.forEach(u=>{u.classList.add("strobe")})},500))}function i(n,o){return n.length===o.length&&n.every(a=>o.includes(a))}return(n,o)=>(k(),C(F,null,[m("p",Vh,U(w(t).doThis),1),m("div",Gh,[m("div",Xh,[W(As),W(On,{content:w(t).markup,class:ye(w(t).wrapperClass||w(Ae).wrapperClass)},null,8,["content","class"])])]),W(In,{placeholder:"Type in a CSS selector",onInput:o[0]||(o[0]=a=>s(a[0]))},{"code-after":Le(()=>[Jh,Qh,Zh,eu,tu,su]),_:1})],64))}});const nu=he(iu,[["__scopeId","data-v-43ba39a3"]]),ou={class:"customer-wrapper"},au={class:"customer-speech-bubble"},ru={class:"customer-body"},lu={class:"code"},cu=ee({__name:"Customer",props:{request:String,selector:String,meal:String},setup(e){return(t,s)=>(k(),C("div",ou,[m("div",au,U(e.request),1),m("div",ru,[m("div",lu,[m("pre",null,U(e.selector)+` {\r
  meal: `+U(e.meal)+`;\r
}`,1)])])]))}});const du=he(cu,[["__scopeId","data-v-c1c4318a"]]),pu={class:"game-container"},hu={class:"game-wrapper"},uu={class:"customers"},fu={class:"editor"},gu=ee({__name:"SpecificityGame",setup(e){const t=de(()=>S.level);function s(r){const l=r.target.closest("plate");l&&n(l)}const i=["sushi","toast","apple","pickle"];function n(r){var h,u;const l=r.firstChild,d=i[i.indexOf((u=(h=l==null?void 0:l.tagName)==null?void 0:h.toLowerCase())!=null?u:"soup")+1]||"sushi";l==null?r.appendChild(document.createElement(d)):r.replaceChild(document.createElement(d),l)}const o=Ee(null);function a(){const l=[...o.value.$el.querySelectorAll("plate")].map(d=>d.firstElementChild?d.firstElementChild.tagName.toLowerCase():"");fp(l)}return(r,l)=>(k(),C("div",pu,[m("div",hu,[W(As),W(On,{content:w(t).markup,onClick:s,ref_key:"table",ref:o},null,8,["content"]),m("div",{class:"actions"},[m("button",{onClick:a,id:"submit-button"},"Validate")]),m("div",uu,[(k(!0),C(F,null,Pe(w(t).customers,d=>(k(),Ge(du,Do(Cn(d)),null,16))),256))]),m("div",fu,[W(rn,{title:"HTML Viewer",fileName:"table.html",lang:"html"},{default:Le(()=>[W(br,{markup:w(t).markup},null,8,["markup"])]),_:1})])])]))}});const mu=he(gu,[["__scopeId","data-v-00d68f52"]]),Nt=e=>(He("data-v-4ea136c9"),e=e(),Ne(),e),bu={class:"order"},yu={class:"game-container"},vu={class:"game-wrapper"},wu=Nt(()=>m("br",null,null,-1)),xu=Nt(()=>m("br",null,null,-1)),_u=X(" }"),ku=Nt(()=>m("br",null,null,-1)),Tu=Nt(()=>m("br",null,null,-1)),$u=Nt(()=>m("br",null,null,-1)),Cu=Nt(()=>m("br",null,null,-1)),Su=Nt(()=>m("br",null,null,-1)),Pu=X("} "),Lu=ee({__name:"LayoutGame",setup(e){const t=de(()=>S.level),s=de(()=>{var n;return Object.fromEntries(Object.entries((n=t.value.cssRules)!=null?n:{}).filter(([o])=>o!==t.value.selector))}),i=n=>t.value.cssRules?t.value.cssRules[n]||[]:[];return(n,o)=>(k(),C(F,null,[m("p",bu,U(w(t).doThis),1),m("div",yu,[m("div",vu,[W(As),(k(),Ge(On,{content:w(t).markup,hintContent:w(t).hintMarkup,key:w(t).name,class:ye(w(t).wrapperClass||w(Ae).wrapperClass)},null,8,["content","hintContent","class"]))])]),W(In,{placeholder:"Type styles here",onInput:o[0]||(o[0]=a=>w(vr)(a))},{"code-before":Le(()=>[(k(!0),C(F,null,Pe(w(s),(a,r)=>(k(),C(F,{key:"selector_"+r},[X(U(r)+" {",1),wu,(k(!0),C(F,null,Pe(a,l=>(k(),C(F,{key:r+"_"+l},[X("\xA0\xA0"+U(l)+";",1),xu],64))),128)),_u,ku,Tu],64))),128)),X(" "+U(w(t).selector)+" {",1),$u,(k(!0),C(F,null,Pe(i(w(t).selector),a=>(k(),C(F,{key:w(t).selector+"_"+a},[X("\xA0\xA0"+U(a)+";",1),Cu],64))),128))]),"code-after":Le(()=>[Su,Pu]),_:1})],64))}});const Au=he(Lu,[["__scopeId","data-v-4ea136c9"]]),lt=e=>(He("data-v-4691c48a"),e=e(),Ne(),e),Ru={class:"order"},Iu={class:"game-container"},Ou={class:"game-wrapper"},Eu=["innerHTML"],Mu={class:"expected-result"},Hu=lt(()=>m("p",null,"Expected result:",-1)),Nu=["src"],ju=["href"],Fu=["href"],zu=lt(()=>m("br",null,null,-1)),Du={key:0},Bu=lt(()=>m("br",null,null,-1)),qu=lt(()=>m("br",null,null,-1)),Wu=X(" }"),Uu=lt(()=>m("br",null,null,-1)),Yu=lt(()=>m("br",null,null,-1)),Ku=lt(()=>m("br",null,null,-1)),Vu=lt(()=>m("br",null,null,-1)),Gu=lt(()=>m("br",null,null,-1)),Xu=X("} "),Ju=ee({__name:"ReproduceGame",setup(e){const t=de(()=>S.level),s=de(()=>{var a;return Object.fromEntries(Object.entries((a=t.value.cssRules)!=null?a:{}).filter(([r])=>r!==t.value.selector))}),i=de(()=>t.value.cssImports),n=de(()=>t.value.cssImportsHidden),o=Ee("");return mt(()=>t,()=>{o.value="",ot(()=>{var a;o.value=(a=t.value.markup)!=null?a:""})}),(a,r)=>(k(),C(F,null,[m("p",Ru,U(w(t).doThis),1),m("div",Iu,[m("div",Ou,[W(As),m("div",{class:ye(["game-content",w(t).wrapperClass||w(Ae).wrapperClass]),innerHTML:w(t).markup},null,10,Eu),m("div",Mu,[Hu,m("img",{src:w(t).expectedScreenshot},null,8,Nu)])])]),W(In,{placeholder:"Type styles here",onInput:r[0]||(r[0]=l=>w(vr)(l))},{"code-before":Le(()=>{var l,d;return[(k(!0),C(F,null,Pe(w(n),h=>(k(),C("link",{rel:"stylesheet",href:h},null,8,ju))),256)),(k(!0),C(F,null,Pe(w(i),h=>(k(),C("link",{rel:"stylesheet",href:h},null,8,Fu))),256)),(k(!0),C(F,null,Pe(w(i),h=>(k(),C(F,null,[X('@import "'+U(h)+'";',1),zu],64))),256)),w(i)?(k(),C("br",Du)):xe("",!0),(k(!0),C(F,null,Pe(w(s),(h,u)=>(k(),C(F,{key:"selector_"+u},[X(U(u)+" {",1),Bu,(k(!0),C(F,null,Pe(h,f=>(k(),C(F,{key:u+"_"+f},[X("\xA0\xA0"+U(f)+";",1),qu],64))),128)),Wu,Uu,Yu],64))),128)),X(" "+U(w(t).selector)+" {",1),Ku,(k(!0),C(F,null,Pe((d=((l=w(t).cssRules)!=null?l:{})[w(t).selector])!=null?d:[],h=>(k(),C(F,{key:w(t).selector+"_"+h},[X("\xA0\xA0"+U(h)+";",1),Vu],64))),128))]}),"code-after":Le(()=>[Gu,Xu]),_:1})],64))}});const Qu=he(Ju,[["__scopeId","data-v-4691c48a"]]),Zu={class:"left-col"},ef={class:"left-panel"},tf=ee({__name:"LeftCol",setup(e){const t=de(()=>{if(S.progress.currentLevel===0)return rh;switch(S.progress.currentChapter){case 1:return xh;case 2:return nu;case 3:return mu;case 4:case 5:case 6:return Au;case 7:case 8:return Qu}});return(s,i)=>(k(),C("div",Zu,[W(Zp),m("div",ef,[(k(),Ge(_a(w(t))))]),W(Yp)]))}});const sf=he(tf,[["__scopeId","data-v-12bae500"]]),nf={class:"chapter-header"},of={key:0},af=ee({__name:"ChapterHeader",setup(e){return(t,s)=>(k(),C("h1",nf,[w(S).progress.currentChapter>0?(k(),C("span",of,"Chapter "+U(w(S).progress.currentChapter)+": ",1)):xe("",!0),X(" "+U(w(Ae).name),1)]))}});const rf=he(af,[["__scopeId","data-v-ac04b66a"]]),lf={class:"level-text"},cf={key:0,class:"checkmark"},df={class:"level-nav"},pf={key:1,class:"level-progress"},hf=ee({__name:"LevelHeader",setup(e){const t=de(()=>Ae.value.levels),s=de(()=>Rn(S.progress.currentChapter,S.progress.currentLevel));return(i,n)=>(k(),C(F,null,[w(S).progress.currentLevel>0?(k(),C("h2",{key:0,class:ye(["level-header",{completed:w(s)}])},[m("span",lf," Level "+U(w(S).progress.currentLevel)+" of "+U(w(t).length),1),w(s)?(k(),C("span",cf,"\u2714\uFE0F")):xe("",!0)],2)):xe("",!0),m("div",df,[m("a",{class:"previous",href:"#",onClick:n[0]||(n[0]=Gs((...o)=>w(tn)&&w(tn)(...o),["prevent"]))}),m("a",{class:"next",href:"#",onClick:n[1]||(n[1]=Gs((...o)=>w($s)&&w($s)(...o),["prevent"]))})]),w(S).progress.currentLevel>0?(k(),C("div",pf,[m("div",{class:"progress",style:et({width:w(Lp)(w(S).progress.currentChapter)+"%"})},null,4)])):xe("",!0)],64))}});const uf=he(hf,[["__scopeId","data-v-f76d0bee"]]),xi=e=>(He("data-v-7a26e148"),e=e(),Ne(),e),ff={class:"level-menu"},gf=xi(()=>m("h2",null,"Choose a level",-1)),mf={class:"chapters-list"},bf={class:"chapters"},yf=["onClick"],vf={class:"chapter-number"},wf=xi(()=>m("div",{class:"chapter-toggle"},null,-1)),xf={key:0,class:"levels"},_f=["onClick"],kf=xi(()=>m("span",{class:"checkmark"},"\u2714\uFE0F",-1)),Tf={class:"level-number"},$f=xi(()=>m("div",{class:"level-menu-toggle"},null,-1)),Cf=[$f],Sf=ee({__name:"LevelMenu",setup(e){const t=Ee(S.progress.currentChapter);function s(n){n===t.value?t.value=0:t.value=n}function i(){S.menuOpened=!S.menuOpened}return(n,o)=>(k(),C(F,null,[m("div",ff,[gf,m("div",mf,[m("ul",bf,[(k(!0),C(F,null,Pe(w(wt),(a,r)=>(k(),C("li",{key:"chapter_"+a.name},[m("a",{class:ye([{current:r+1===w(S).progress.currentChapter,opened:r+1===t.value},"chapter-name"]),onClick:l=>s(r+1)},[m("span",vf,U(r+1),1),X(" "+U(a.name)+" ",1),wf],10,yf),r+1===t.value?(k(),C("ul",xf,[(k(!0),C(F,null,Pe(a.levels,(l,d)=>(k(),C("li",{key:"level_"+l.name},[m("a",{class:ye({current:d+1===w(S).progress.currentLevel,completed:w(Rn)(r+1,d+1)}),onClick:h=>w(Kt)(r+1,d+1)},[kf,m("span",Tf,U(d+1),1),X(" "+U(l.name),1)],10,_f)]))),128))])):xe("",!0)]))),128))])]),m("a",{class:"reset-progress",href:"#",onClick:o[0]||(o[0]=Gs((...a)=>w(nn)&&w(nn)(...a),["prevent"]))},"Reset Progress")]),m("div",{class:"level-menu-toggle-wrapper",onClick:i},Cf)],64))}});const Pf=he(Sf,[["__scopeId","data-v-7a26e148"]]),Lf=e=>(He("data-v-e9a62119"),e=e(),Ne(),e),Af=Lf(()=>m("hr",null,null,-1)),Rf={class:"instructions"},If=["innerHTML"],Of=ee({__name:"ChapterInstructions",setup(e){function t(){$s()}return(s,i)=>(k(),C(F,null,[Af,m("div",Rf,[m("div",{innerHTML:w(Ae).intro},null,8,If)]),m("div",{class:"actions"},[m("button",{onClick:t},"Next")])],64))}});const Ef=he(Of,[["__scopeId","data-v-e9a62119"]]),Mf=e=>(He("data-v-ae17a712"),e=e(),Ne(),e),Hf={class:"instructions"},Nf=["innerHTML"],jf=Mf(()=>m("hr",null,null,-1)),Ff={class:"title"},zf=["innerHTML"],Df={class:"actions"},Bf=ee({__name:"LevelInstructions",setup(e){const t=de(()=>S.level);return(s,i)=>(k(),C(F,null,[m("div",Hf,[w(Ae).instructions?(k(),C(F,{key:0},[m("div",{innerHTML:w(Ae).instructions},null,8,Nf),jf],64)):xe("",!0),m("h3",Ff,U(w(t).name),1),m("div",{innerHTML:w(S).level.instructions},null,8,zf)]),m("div",Df,[w(t).skippable?(k(),C("button",{key:0,onClick:i[0]||(i[0]=(...n)=>w(Zt)&&w(Zt)(...n))},"Next")):xe("",!0)])],64))}});const qf=he(Bf,[["__scopeId","data-v-ae17a712"]]),Wf={class:"display-help"},Uf={class:"title"},Yf={key:0,class:"syntax"},Kf=["innerHTML"],Vf={key:1,class:"examples-title"},Gf={class:"examples"},Xf=["innerHTML"],Jf=ee({__name:"SyntaxLevelInstructions",setup(e){const t=de(()=>S.level);return(s,i)=>(k(),C("div",Wf,[m("h3",Uf,U(w(t).helpTitle||w(t).name),1),w(t).syntax?(k(),C("p",Yf,[m("pre",null,U(w(t).syntax),1)])):xe("",!0),m("div",{class:"hint",innerHTML:w(t).help},null,8,Kf),w(t).examples&&w(t).examples.length>0?(k(),C("h4",Vf,"Examples")):xe("",!0),m("div",Gf,[(k(!0),C(F,null,Pe(w(t).examples,n=>(k(),C("div",{class:"example",key:n,innerHTML:n},null,8,Xf))),128))])]))}});const Qf=he(Jf,[["__scopeId","data-v-a74a823a"]]),Zf={class:"doc-wrapper"},eg=ee({__name:"RightCol",setup(e){const t=de(()=>{if(S.progress.currentLevel===0)return Ef;switch(S.progress.currentChapter){case 2:case 4:case 5:case 6:case 7:case 8:return Qf;case 1:case 3:default:return qf}});return(s,i)=>(k(),C("div",{class:ye(["right-col",{"menu-open":w(S).menuOpened}])},[m("div",Zf,[W(rf),W(uf),(k(),Ge(_a(w(t))))]),W(Pf)],2))}});const tg=he(eg,[["__scopeId","data-v-0462dd29"]]),sg=ee({__name:"App",setup(e){return Ei("Escape",t=>{t.preventDefault(),pr()}),Ei("PageUp",t=>{t.preventDefault(),tn()}),Ei("PageDown",t=>{t.preventDefault(),$s()}),Ap(),hr(),(t,s)=>(k(),C(F,null,[W(sf),W(tg)],64))}});za(sg).use(pp).mount("#app");
