const br=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}};br();function si(e,t){const s=Object.create(null),n=e.split(",");for(let i=0;i<n.length;i++)s[n[i]]=!0;return t?i=>!!s[i.toLowerCase()]:i=>!!s[i]}const yr="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vr=si(yr);function Oo(e){return!!e||e===""}function Ye(e){if(B(e)){const t={};for(let s=0;s<e.length;s++){const n=e[s],i=pe(n)?_r(n):Ye(n);if(i)for(const o in i)t[o]=i[o]}return t}else{if(pe(e))return e;if(he(e))return e}}const wr=/;(?![^(]*\))/g,xr=/:(.+)/;function _r(e){const t={};return e.split(wr).forEach(s=>{if(s){const n=s.split(xr);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Se(e){let t="";if(pe(e))t=e;else if(B(e))for(let s=0;s<e.length;s++){const n=Se(e[s]);n&&(t+=n+" ")}else if(he(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}function Ho(e){if(!e)return null;let{class:t,style:s}=e;return t&&!pe(t)&&(e.class=Se(t)),s&&(e.style=Ye(s)),e}const U=e=>pe(e)?e:e==null?"":B(e)||he(e)&&(e.toString===Do||!q(e.toString))?JSON.stringify(e,No,2):String(e),No=(e,t)=>t&&t.__v_isRef?No(e,t.value):zt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[n,i])=>(s[`${n} =>`]=i,s),{})}:Fo(t)?{[`Set(${t.size})`]:[...t.values()]}:he(t)&&!B(t)&&!zo(t)?String(t):t,ee={},Dt=[],ze=()=>{},kr=()=>!1,Tr=/^on[^a-z]/,Gs=e=>Tr.test(e),ni=e=>e.startsWith("onUpdate:"),_e=Object.assign,ii=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},$r=Object.prototype.hasOwnProperty,Y=(e,t)=>$r.call(e,t),B=Array.isArray,zt=e=>Js(e)==="[object Map]",Fo=e=>Js(e)==="[object Set]",q=e=>typeof e=="function",pe=e=>typeof e=="string",oi=e=>typeof e=="symbol",he=e=>e!==null&&typeof e=="object",jo=e=>he(e)&&q(e.then)&&q(e.catch),Do=Object.prototype.toString,Js=e=>Do.call(e),Cr=e=>Js(e).slice(8,-1),zo=e=>Js(e)==="[object Object]",li=e=>pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Es=si(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xs=e=>{const t=Object.create(null);return s=>t[s]||(t[s]=e(s))},Sr=/-(\w)/g,Ke=Xs(e=>e.replace(Sr,(t,s)=>s?s.toUpperCase():"")),Pr=/\B([A-Z])/g,Rt=Xs(e=>e.replace(Pr,"-$1").toLowerCase()),Zs=Xs(e=>e.charAt(0).toUpperCase()+e.slice(1)),wn=Xs(e=>e?`on${Zs(e)}`:""),ds=(e,t)=>!Object.is(e,t),xn=(e,t)=>{for(let s=0;s<e.length;s++)e[s](t)},Hs=(e,t,s)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:s})},Lr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Hi;const Ar=()=>Hi||(Hi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ae;class Ir{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ae&&(this.parent=Ae,this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1)}run(t){if(this.active){const s=Ae;try{return Ae=this,t()}finally{Ae=s}}}on(){Ae=this}off(){Ae=this.parent}stop(t){if(this.active){let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.scopes)for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);if(this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Rr(e,t=Ae){t&&t.active&&t.effects.push(e)}function Er(){return Ae}function Mr(e){Ae&&Ae.cleanups.push(e)}const ri=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Bo=e=>(e.w&gt)>0,qo=e=>(e.n&gt)>0,Or=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=gt},Hr=e=>{const{deps:t}=e;if(t.length){let s=0;for(let n=0;n<t.length;n++){const i=t[n];Bo(i)&&!qo(i)?i.delete(e):t[s++]=i,i.w&=~gt,i.n&=~gt}t.length=s}},Rn=new WeakMap;let ss=0,gt=1;const En=30;let je;const Pt=Symbol(""),Mn=Symbol("");class ai{constructor(t,s=null,n){this.fn=t,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Rr(this,n)}run(){if(!this.active)return this.fn();let t=je,s=ft;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=je,je=this,ft=!0,gt=1<<++ss,ss<=En?Or(this):Ni(this),this.fn()}finally{ss<=En&&Hr(this),gt=1<<--ss,je=this.parent,ft=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){je===this?this.deferStop=!0:this.active&&(Ni(this),this.onStop&&this.onStop(),this.active=!1)}}function Ni(e){const{deps:t}=e;if(t.length){for(let s=0;s<t.length;s++)t[s].delete(e);t.length=0}}let ft=!0;const Wo=[];function Jt(){Wo.push(ft),ft=!1}function Xt(){const e=Wo.pop();ft=e===void 0?!0:e}function Ee(e,t,s){if(ft&&je){let n=Rn.get(e);n||Rn.set(e,n=new Map);let i=n.get(s);i||n.set(s,i=ri()),Uo(i)}}function Uo(e,t){let s=!1;ss<=En?qo(e)||(e.n|=gt,s=!Bo(e)):s=!e.has(je),s&&(e.add(je),je.deps.push(e))}function tt(e,t,s,n,i,o){const l=Rn.get(e);if(!l)return;let r=[];if(t==="clear")r=[...l.values()];else if(s==="length"&&B(e))l.forEach((a,p)=>{(p==="length"||p>=n)&&r.push(a)});else switch(s!==void 0&&r.push(l.get(s)),t){case"add":B(e)?li(s)&&r.push(l.get("length")):(r.push(l.get(Pt)),zt(e)&&r.push(l.get(Mn)));break;case"delete":B(e)||(r.push(l.get(Pt)),zt(e)&&r.push(l.get(Mn)));break;case"set":zt(e)&&r.push(l.get(Pt));break}if(r.length===1)r[0]&&On(r[0]);else{const a=[];for(const p of r)p&&a.push(...p);On(ri(a))}}function On(e,t){const s=B(e)?e:[...e];for(const n of s)n.computed&&Fi(n);for(const n of s)n.computed||Fi(n)}function Fi(e,t){(e!==je||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Nr=si("__proto__,__v_isRef,__isVue"),Yo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(oi)),Fr=ci(),jr=ci(!1,!0),Dr=ci(!0),ji=zr();function zr(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...s){const n=G(this);for(let o=0,l=this.length;o<l;o++)Ee(n,"get",o+"");const i=n[t](...s);return i===-1||i===!1?n[t](...s.map(G)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...s){Jt();const n=G(this)[t].apply(this,s);return Xt(),n}}),e}function ci(e=!1,t=!1){return function(n,i,o){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&o===(e?t?na:Xo:t?Jo:Go).get(n))return n;const l=B(n);if(!e&&l&&Y(ji,i))return Reflect.get(ji,i,o);const r=Reflect.get(n,i,o);return(oi(i)?Yo.has(i):Nr(i))||(e||Ee(n,"get",i),t)?r:ye(r)?l&&li(i)?r:r.value:he(r)?e?Zo(r):en(r):r}}const Br=Ko(),qr=Ko(!0);function Ko(e=!1){return function(s,n,i,o){let l=s[n];if(hs(l)&&ye(l)&&!ye(i))return!1;if(!e&&!hs(i)&&(Hn(i)||(i=G(i),l=G(l)),!B(s)&&ye(l)&&!ye(i)))return l.value=i,!0;const r=B(s)&&li(n)?Number(n)<s.length:Y(s,n),a=Reflect.set(s,n,i,o);return s===G(o)&&(r?ds(i,l)&&tt(s,"set",n,i):tt(s,"add",n,i)),a}}function Wr(e,t){const s=Y(e,t);e[t];const n=Reflect.deleteProperty(e,t);return n&&s&&tt(e,"delete",t,void 0),n}function Ur(e,t){const s=Reflect.has(e,t);return(!oi(t)||!Yo.has(t))&&Ee(e,"has",t),s}function Yr(e){return Ee(e,"iterate",B(e)?"length":Pt),Reflect.ownKeys(e)}const Vo={get:Fr,set:Br,deleteProperty:Wr,has:Ur,ownKeys:Yr},Kr={get:Dr,set(e,t){return!0},deleteProperty(e,t){return!0}},Vr=_e({},Vo,{get:jr,set:qr}),pi=e=>e,Qs=e=>Reflect.getPrototypeOf(e);function Ss(e,t,s=!1,n=!1){e=e.__v_raw;const i=G(e),o=G(t);s||(t!==o&&Ee(i,"get",t),Ee(i,"get",o));const{has:l}=Qs(i),r=n?pi:s?ui:us;if(l.call(i,t))return r(e.get(t));if(l.call(i,o))return r(e.get(o));e!==i&&e.get(t)}function Ps(e,t=!1){const s=this.__v_raw,n=G(s),i=G(e);return t||(e!==i&&Ee(n,"has",e),Ee(n,"has",i)),e===i?s.has(e):s.has(e)||s.has(i)}function Ls(e,t=!1){return e=e.__v_raw,!t&&Ee(G(e),"iterate",Pt),Reflect.get(e,"size",e)}function Di(e){e=G(e);const t=G(this);return Qs(t).has.call(t,e)||(t.add(e),tt(t,"add",e,e)),this}function zi(e,t){t=G(t);const s=G(this),{has:n,get:i}=Qs(s);let o=n.call(s,e);o||(e=G(e),o=n.call(s,e));const l=i.call(s,e);return s.set(e,t),o?ds(t,l)&&tt(s,"set",e,t):tt(s,"add",e,t),this}function Bi(e){const t=G(this),{has:s,get:n}=Qs(t);let i=s.call(t,e);i||(e=G(e),i=s.call(t,e)),n&&n.call(t,e);const o=t.delete(e);return i&&tt(t,"delete",e,void 0),o}function qi(){const e=G(this),t=e.size!==0,s=e.clear();return t&&tt(e,"clear",void 0,void 0),s}function As(e,t){return function(n,i){const o=this,l=o.__v_raw,r=G(l),a=t?pi:e?ui:us;return!e&&Ee(r,"iterate",Pt),l.forEach((p,h)=>n.call(i,a(p),a(h),o))}}function Is(e,t,s){return function(...n){const i=this.__v_raw,o=G(i),l=zt(o),r=e==="entries"||e===Symbol.iterator&&l,a=e==="keys"&&l,p=i[e](...n),h=s?pi:t?ui:us;return!t&&Ee(o,"iterate",a?Mn:Pt),{next(){const{value:u,done:m}=p.next();return m?{value:u,done:m}:{value:r?[h(u[0]),h(u[1])]:h(u),done:m}},[Symbol.iterator](){return this}}}}function ct(e){return function(...t){return e==="delete"?!1:this}}function Gr(){const e={get(o){return Ss(this,o)},get size(){return Ls(this)},has:Ps,add:Di,set:zi,delete:Bi,clear:qi,forEach:As(!1,!1)},t={get(o){return Ss(this,o,!1,!0)},get size(){return Ls(this)},has:Ps,add:Di,set:zi,delete:Bi,clear:qi,forEach:As(!1,!0)},s={get(o){return Ss(this,o,!0)},get size(){return Ls(this,!0)},has(o){return Ps.call(this,o,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:As(!0,!1)},n={get(o){return Ss(this,o,!0,!0)},get size(){return Ls(this,!0)},has(o){return Ps.call(this,o,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:As(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Is(o,!1,!1),s[o]=Is(o,!0,!1),t[o]=Is(o,!1,!0),n[o]=Is(o,!0,!0)}),[e,s,t,n]}const[Jr,Xr,Zr,Qr]=Gr();function di(e,t){const s=t?e?Qr:Zr:e?Xr:Jr;return(n,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?n:Reflect.get(Y(s,i)&&i in n?s:n,i,o)}const ea={get:di(!1,!1)},ta={get:di(!1,!0)},sa={get:di(!0,!1)},Go=new WeakMap,Jo=new WeakMap,Xo=new WeakMap,na=new WeakMap;function ia(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oa(e){return e.__v_skip||!Object.isExtensible(e)?0:ia(Cr(e))}function en(e){return hs(e)?e:hi(e,!1,Vo,ea,Go)}function la(e){return hi(e,!1,Vr,ta,Jo)}function Zo(e){return hi(e,!0,Kr,sa,Xo)}function hi(e,t,s,n,i){if(!he(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=i.get(e);if(o)return o;const l=oa(e);if(l===0)return e;const r=new Proxy(e,l===2?n:s);return i.set(e,r),r}function Bt(e){return hs(e)?Bt(e.__v_raw):!!(e&&e.__v_isReactive)}function hs(e){return!!(e&&e.__v_isReadonly)}function Hn(e){return!!(e&&e.__v_isShallow)}function Qo(e){return Bt(e)||hs(e)}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function el(e){return Hs(e,"__v_skip",!0),e}const us=e=>he(e)?en(e):e,ui=e=>he(e)?Zo(e):e;function tl(e){ft&&je&&(e=G(e),Uo(e.dep||(e.dep=ri())))}function sl(e,t){e=G(e),e.dep&&On(e.dep)}function ye(e){return!!(e&&e.__v_isRef===!0)}function Me(e){return ra(e,!1)}function ra(e,t){return ye(e)?e:new aa(e,t)}class aa{constructor(t,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?t:G(t),this._value=s?t:us(t)}get value(){return tl(this),this._value}set value(t){t=this.__v_isShallow?t:G(t),ds(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:us(t),sl(this))}}function _(e){return ye(e)?e.value:e}const ca={get:(e,t,s)=>_(Reflect.get(e,t,s)),set:(e,t,s,n)=>{const i=e[t];return ye(i)&&!ye(s)?(i.value=s,!0):Reflect.set(e,t,s,n)}};function nl(e){return Bt(e)?e:new Proxy(e,ca)}class pa{constructor(t,s,n,i){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ai(t,()=>{this._dirty||(this._dirty=!0,sl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=n}get value(){const t=G(this);return tl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function da(e,t,s=!1){let n,i;const o=q(e);return o?(n=e,i=ze):(n=e.get,i=e.set),new pa(n,i,o||!i,s)}function mt(e,t,s,n){let i;try{i=n?e(...n):e()}catch(o){tn(o,t,s)}return i}function Be(e,t,s,n){if(q(e)){const o=mt(e,t,s,n);return o&&jo(o)&&o.catch(l=>{tn(l,t,s)}),o}const i=[];for(let o=0;o<e.length;o++)i.push(Be(e[o],t,s,n));return i}function tn(e,t,s,n=!0){const i=t?t.vnode:null;if(t){let o=t.parent;const l=t.proxy,r=s;for(;o;){const p=o.ec;if(p){for(let h=0;h<p.length;h++)if(p[h](e,l,r)===!1)return}o=o.parent}const a=t.appContext.config.errorHandler;if(a){mt(a,null,10,[e,l,r]);return}}ha(e,s,i,n)}function ha(e,t,s,n=!0){console.error(e)}let Ns=!1,Nn=!1;const Ie=[];let Xe=0;const is=[];let ns=null,Nt=0;const os=[];let pt=null,Ft=0;const il=Promise.resolve();let fi=null,Fn=null;function it(e){const t=fi||il;return e?t.then(this?e.bind(this):e):t}function ua(e){let t=Xe+1,s=Ie.length;for(;t<s;){const n=t+s>>>1;fs(Ie[n])<e?t=n+1:s=n}return t}function ol(e){(!Ie.length||!Ie.includes(e,Ns&&e.allowRecurse?Xe+1:Xe))&&e!==Fn&&(e.id==null?Ie.push(e):Ie.splice(ua(e.id),0,e),ll())}function ll(){!Ns&&!Nn&&(Nn=!0,fi=il.then(cl))}function fa(e){const t=Ie.indexOf(e);t>Xe&&Ie.splice(t,1)}function rl(e,t,s,n){B(e)?s.push(...e):(!t||!t.includes(e,e.allowRecurse?n+1:n))&&s.push(e),ll()}function ma(e){rl(e,ns,is,Nt)}function ga(e){rl(e,pt,os,Ft)}function sn(e,t=null){if(is.length){for(Fn=t,ns=[...new Set(is)],is.length=0,Nt=0;Nt<ns.length;Nt++)ns[Nt]();ns=null,Nt=0,Fn=null,sn(e,t)}}function al(e){if(sn(),os.length){const t=[...new Set(os)];if(os.length=0,pt){pt.push(...t);return}for(pt=t,pt.sort((s,n)=>fs(s)-fs(n)),Ft=0;Ft<pt.length;Ft++)pt[Ft]();pt=null,Ft=0}}const fs=e=>e.id==null?1/0:e.id;function cl(e){Nn=!1,Ns=!0,sn(e),Ie.sort((s,n)=>fs(s)-fs(n));const t=ze;try{for(Xe=0;Xe<Ie.length;Xe++){const s=Ie[Xe];s&&s.active!==!1&&mt(s,null,14)}}finally{Xe=0,Ie.length=0,al(),Ns=!1,fi=null,(Ie.length||is.length||os.length)&&cl(e)}}function ba(e,t,...s){if(e.isUnmounted)return;const n=e.vnode.props||ee;let i=s;const o=t.startsWith("update:"),l=o&&t.slice(7);if(l&&l in n){const h=`${l==="modelValue"?"model":l}Modifiers`,{number:u,trim:m}=n[h]||ee;m&&(i=s.map(k=>k.trim())),u&&(i=s.map(Lr))}let r,a=n[r=wn(t)]||n[r=wn(Ke(t))];!a&&o&&(a=n[r=wn(Rt(t))]),a&&Be(a,e,6,i);const p=n[r+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,Be(p,e,6,i)}}function pl(e,t,s=!1){const n=t.emitsCache,i=n.get(e);if(i!==void 0)return i;const o=e.emits;let l={},r=!1;if(!q(e)){const a=p=>{const h=pl(p,t,!0);h&&(r=!0,_e(l,h))};!s&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!o&&!r?(n.set(e,null),null):(B(o)?o.forEach(a=>l[a]=null):_e(l,o),n.set(e,l),l)}function nn(e,t){return!e||!Gs(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,Rt(t))||Y(e,t))}let Ce=null,on=null;function Fs(e){const t=Ce;return Ce=e,on=e&&e.type.__scopeId||null,t}function He(e){on=e}function Ne(){on=null}const ya=e=>Pe;function Pe(e,t=Ce,s){if(!t||e._n)return e;const n=(...i)=>{n._d&&Qi(-1);const o=Fs(t),l=e(...i);return Fs(o),n._d&&Qi(1),l};return n._n=!0,n._c=!0,n._d=!0,n}function _n(e){const{type:t,vnode:s,proxy:n,withProxy:i,props:o,propsOptions:[l],slots:r,attrs:a,emit:p,render:h,renderCache:u,data:m,setupState:k,ctx:H,inheritAttrs:N}=e;let L,I;const R=Fs(e);try{if(s.shapeFlag&4){const D=i||n;L=Ue(h.call(D,D,u,o,k,m,H)),I=a}else{const D=t;L=Ue(D.length>1?D(o,{attrs:a,slots:r,emit:p}):D(o,null)),I=t.props?a:va(a)}}catch(D){rs.length=0,tn(D,e,1),L=W(yt)}let E=L;if(I&&N!==!1){const D=Object.keys(I),{shapeFlag:ie}=E;D.length&&ie&7&&(l&&D.some(ni)&&(I=wa(I,l)),E=Ut(E,I))}return s.dirs&&(E=Ut(E),E.dirs=E.dirs?E.dirs.concat(s.dirs):s.dirs),s.transition&&(E.transition=s.transition),L=E,Fs(R),L}const va=e=>{let t;for(const s in e)(s==="class"||s==="style"||Gs(s))&&((t||(t={}))[s]=e[s]);return t},wa=(e,t)=>{const s={};for(const n in e)(!ni(n)||!(n.slice(9)in t))&&(s[n]=e[n]);return s};function xa(e,t,s){const{props:n,children:i,component:o}=e,{props:l,children:r,patchFlag:a}=t,p=o.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&a>=0){if(a&1024)return!0;if(a&16)return n?Wi(n,l,p):!!l;if(a&8){const h=t.dynamicProps;for(let u=0;u<h.length;u++){const m=h[u];if(l[m]!==n[m]&&!nn(p,m))return!0}}}else return(i||r)&&(!r||!r.$stable)?!0:n===l?!1:n?l?Wi(n,l,p):!0:!!l;return!1}function Wi(e,t,s){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let i=0;i<n.length;i++){const o=n[i];if(t[o]!==e[o]&&!nn(s,o))return!0}return!1}function _a({vnode:e,parent:t},s){for(;t&&t.subTree===e;)(e=t.vnode).el=s,t=t.parent}const ka=e=>e.__isSuspense;function Ta(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):ga(e)}function $a(e,t){if(be){let s=be.provides;const n=be.parent&&be.parent.provides;n===s&&(s=be.provides=Object.create(n)),s[e]=t}}function kn(e,t,s=!1){const n=be||Ce;if(n){const i=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return s&&q(t)?t.call(n.proxy):t}}const Ui={};function qt(e,t,s){return dl(e,t,s)}function dl(e,t,{immediate:s,deep:n,flush:i,onTrack:o,onTrigger:l}=ee){const r=be;let a,p=!1,h=!1;if(ye(e)?(a=()=>e.value,p=Hn(e)):Bt(e)?(a=()=>e,n=!0):B(e)?(h=!0,p=e.some(I=>Bt(I)||Hn(I)),a=()=>e.map(I=>{if(ye(I))return I.value;if(Bt(I))return jt(I);if(q(I))return mt(I,r,2)})):q(e)?t?a=()=>mt(e,r,2):a=()=>{if(!(r&&r.isUnmounted))return u&&u(),Be(e,r,3,[m])}:a=ze,t&&n){const I=a;a=()=>jt(I())}let u,m=I=>{u=L.onStop=()=>{mt(I,r,4)}};if(bs)return m=ze,t?s&&Be(t,r,3,[a(),h?[]:void 0,m]):a(),ze;let k=h?[]:Ui;const H=()=>{if(!!L.active)if(t){const I=L.run();(n||p||(h?I.some((R,E)=>ds(R,k[E])):ds(I,k)))&&(u&&u(),Be(t,r,3,[I,k===Ui?void 0:k,m]),k=I)}else L.run()};H.allowRecurse=!!t;let N;i==="sync"?N=H:i==="post"?N=()=>Te(H,r&&r.suspense):N=()=>ma(H);const L=new ai(a,N);return t?s?H():k=L.run():i==="post"?Te(L.run.bind(L),r&&r.suspense):L.run(),()=>{L.stop(),r&&r.scope&&ii(r.scope.effects,L)}}function Ca(e,t,s){const n=this.proxy,i=pe(e)?e.includes(".")?hl(n,e):()=>n[e]:e.bind(n,n);let o;q(t)?o=t:(o=t.handler,s=t);const l=be;Yt(this);const r=dl(i,o.bind(n),s);return l?Yt(l):Lt(),r}function hl(e,t){const s=t.split(".");return()=>{let n=e;for(let i=0;i<s.length&&n;i++)n=n[s[i]];return n}}function jt(e,t){if(!he(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ye(e))jt(e.value,t);else if(B(e))for(let s=0;s<e.length;s++)jt(e[s],t);else if(Fo(e)||zt(e))e.forEach(s=>{jt(s,t)});else if(zo(e))for(const s in e)jt(e[s],t);return e}function Q(e){return q(e)?{setup:e,name:e.name}:e}const ls=e=>!!e.type.__asyncLoader,ul=e=>e.type.__isKeepAlive;function Sa(e,t){fl(e,"a",t)}function Pa(e,t){fl(e,"da",t)}function fl(e,t,s=be){const n=e.__wdc||(e.__wdc=()=>{let i=s;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ln(t,n,s),s){let i=s.parent;for(;i&&i.parent;)ul(i.parent.vnode)&&La(n,t,s,i),i=i.parent}}function La(e,t,s,n){const i=ln(t,e,n,!0);gl(()=>{ii(n[t],i)},s)}function ln(e,t,s=be,n=!1){if(s){const i=s[e]||(s[e]=[]),o=t.__weh||(t.__weh=(...l)=>{if(s.isUnmounted)return;Jt(),Yt(s);const r=Be(t,s,e,l);return Lt(),Xt(),r});return n?i.unshift(o):i.push(o),o}}const ot=e=>(t,s=be)=>(!bs||e==="sp")&&ln(e,t,s),Aa=ot("bm"),ml=ot("m"),Ia=ot("bu"),Ra=ot("u"),Ea=ot("bum"),gl=ot("um"),Ma=ot("sp"),Oa=ot("rtg"),Ha=ot("rtc");function Na(e,t=be){ln("ec",e,t)}function _t(e,t,s,n){const i=e.dirs,o=t&&t.dirs;for(let l=0;l<i.length;l++){const r=i[l];o&&(r.oldValue=o[l].value);let a=r.dir[n];a&&(Jt(),Be(a,s,8,[e.el,r,e,t]),Xt())}}const mi="components";function ms(e,t){return vl(mi,e,!0,t)||e}const bl=Symbol();function yl(e){return pe(e)?vl(mi,e,!1)||e:e||bl}function vl(e,t,s=!0,n=!1){const i=Ce||be;if(i){const o=i.type;if(e===mi){const r=pc(o,!1);if(r&&(r===t||r===Ke(t)||r===Zs(Ke(t))))return o}const l=Yi(i[e]||o[e],t)||Yi(i.appContext[e],t);return!l&&n?o:l}}function Yi(e,t){return e&&(e[t]||e[Ke(t)]||e[Zs(Ke(t))])}function $e(e,t,s,n){let i;const o=s&&s[n];if(B(e)||pe(e)){i=new Array(e.length);for(let l=0,r=e.length;l<r;l++)i[l]=t(e[l],l,void 0,o&&o[l])}else if(typeof e=="number"){i=new Array(e);for(let l=0;l<e;l++)i[l]=t(l+1,l,void 0,o&&o[l])}else if(he(e))if(e[Symbol.iterator])i=Array.from(e,(l,r)=>t(l,r,void 0,o&&o[r]));else{const l=Object.keys(e);i=new Array(l.length);for(let r=0,a=l.length;r<a;r++){const p=l[r];i[r]=t(e[p],p,r,o&&o[r])}}else i=[];return s&&(s[n]=i),i}function bt(e,t,s={},n,i){if(Ce.isCE||Ce.parent&&ls(Ce.parent)&&Ce.parent.isCE)return W("slot",t==="default"?null:{name:t},n&&n());let o=e[t];o&&o._c&&(o._d=!1),T();const l=o&&wl(o(s)),r=Ve(j,{key:s.key||`_${t}`},l||(n?n():[]),l&&e._===1?64:-2);return!i&&r.scopeId&&(r.slotScopeIds=[r.scopeId+"-s"]),o&&o._c&&(o._d=!0),r}function wl(e){return e.some(t=>zs(t)?!(t.type===yt||t.type===j&&!wl(t.children)):!0)?e:null}const jn=e=>e?Rl(e)?xi(e)||e.proxy:jn(e.parent):null,js=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>jn(e.parent),$root:e=>jn(e.root),$emit:e=>e.emit,$options:e=>_l(e),$forceUpdate:e=>e.f||(e.f=()=>ol(e.update)),$nextTick:e=>e.n||(e.n=it.bind(e.proxy)),$watch:e=>Ca.bind(e)}),Fa={get({_:e},t){const{ctx:s,setupState:n,data:i,props:o,accessCache:l,type:r,appContext:a}=e;let p;if(t[0]!=="$"){const k=l[t];if(k!==void 0)switch(k){case 1:return n[t];case 2:return i[t];case 4:return s[t];case 3:return o[t]}else{if(n!==ee&&Y(n,t))return l[t]=1,n[t];if(i!==ee&&Y(i,t))return l[t]=2,i[t];if((p=e.propsOptions[0])&&Y(p,t))return l[t]=3,o[t];if(s!==ee&&Y(s,t))return l[t]=4,s[t];Dn&&(l[t]=0)}}const h=js[t];let u,m;if(h)return t==="$attrs"&&Ee(e,"get",t),h(e);if((u=r.__cssModules)&&(u=u[t]))return u;if(s!==ee&&Y(s,t))return l[t]=4,s[t];if(m=a.config.globalProperties,Y(m,t))return m[t]},set({_:e},t,s){const{data:n,setupState:i,ctx:o}=e;return i!==ee&&Y(i,t)?(i[t]=s,!0):n!==ee&&Y(n,t)?(n[t]=s,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:n,appContext:i,propsOptions:o}},l){let r;return!!s[l]||e!==ee&&Y(e,l)||t!==ee&&Y(t,l)||(r=o[0])&&Y(r,l)||Y(n,l)||Y(js,l)||Y(i.config.globalProperties,l)},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:Y(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};let Dn=!0;function ja(e){const t=_l(e),s=e.proxy,n=e.ctx;Dn=!1,t.beforeCreate&&Ki(t.beforeCreate,e,"bc");const{data:i,computed:o,methods:l,watch:r,provide:a,inject:p,created:h,beforeMount:u,mounted:m,beforeUpdate:k,updated:H,activated:N,deactivated:L,beforeDestroy:I,beforeUnmount:R,destroyed:E,unmounted:D,render:ie,renderTracked:ue,renderTriggered:fe,errorCaptured:ne,serverPrefetch:z,expose:le,inheritAttrs:oe,components:ce,directives:ve,filters:me}=t;if(p&&Da(p,n,null,e.appContext.config.unwrapInjectedRef),l)for(const re in l){const te=l[re];q(te)&&(n[re]=te.bind(s))}if(i){const re=i.call(s,s);he(re)&&(e.data=en(re))}if(Dn=!0,o)for(const re in o){const te=o[re],Ge=q(te)?te.bind(s,s):q(te.get)?te.get.bind(s,s):ze,bn=!q(te)&&q(te.set)?te.set.bind(s):ze,Qt=ae({get:Ge,set:bn});Object.defineProperty(n,re,{enumerable:!0,configurable:!0,get:()=>Qt.value,set:Mt=>Qt.value=Mt})}if(r)for(const re in r)xl(r[re],n,s,re);if(a){const re=q(a)?a.call(s):a;Reflect.ownKeys(re).forEach(te=>{$a(te,re[te])})}h&&Ki(h,e,"c");function ke(re,te){B(te)?te.forEach(Ge=>re(Ge.bind(s))):te&&re(te.bind(s))}if(ke(Aa,u),ke(ml,m),ke(Ia,k),ke(Ra,H),ke(Sa,N),ke(Pa,L),ke(Na,ne),ke(Ha,ue),ke(Oa,fe),ke(Ea,R),ke(gl,D),ke(Ma,z),B(le))if(le.length){const re=e.exposed||(e.exposed={});le.forEach(te=>{Object.defineProperty(re,te,{get:()=>s[te],set:Ge=>s[te]=Ge})})}else e.exposed||(e.exposed={});ie&&e.render===ze&&(e.render=ie),oe!=null&&(e.inheritAttrs=oe),ce&&(e.components=ce),ve&&(e.directives=ve)}function Da(e,t,s=ze,n=!1){B(e)&&(e=zn(e));for(const i in e){const o=e[i];let l;he(o)?"default"in o?l=kn(o.from||i,o.default,!0):l=kn(o.from||i):l=kn(o),ye(l)&&n?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>l.value,set:r=>l.value=r}):t[i]=l}}function Ki(e,t,s){Be(B(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,s)}function xl(e,t,s,n){const i=n.includes(".")?hl(s,n):()=>s[n];if(pe(e)){const o=t[e];q(o)&&qt(i,o)}else if(q(e))qt(i,e.bind(s));else if(he(e))if(B(e))e.forEach(o=>xl(o,t,s,n));else{const o=q(e.handler)?e.handler.bind(s):t[e.handler];q(o)&&qt(i,o,e)}}function _l(e){const t=e.type,{mixins:s,extends:n}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:l}}=e.appContext,r=o.get(t);let a;return r?a=r:!i.length&&!s&&!n?a=t:(a={},i.length&&i.forEach(p=>Ds(a,p,l,!0)),Ds(a,t,l)),o.set(t,a),a}function Ds(e,t,s,n=!1){const{mixins:i,extends:o}=t;o&&Ds(e,o,s,!0),i&&i.forEach(l=>Ds(e,l,s,!0));for(const l in t)if(!(n&&l==="expose")){const r=za[l]||s&&s[l];e[l]=r?r(e[l],t[l]):t[l]}return e}const za={data:Vi,props:$t,emits:$t,methods:$t,computed:$t,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:$t,directives:$t,watch:qa,provide:Vi,inject:Ba};function Vi(e,t){return t?e?function(){return _e(q(e)?e.call(this,this):e,q(t)?t.call(this,this):t)}:t:e}function Ba(e,t){return $t(zn(e),zn(t))}function zn(e){if(B(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function we(e,t){return e?[...new Set([].concat(e,t))]:t}function $t(e,t){return e?_e(_e(Object.create(null),e),t):t}function qa(e,t){if(!e)return t;if(!t)return e;const s=_e(Object.create(null),e);for(const n in t)s[n]=we(e[n],t[n]);return s}function Wa(e,t,s,n=!1){const i={},o={};Hs(o,rn,1),e.propsDefaults=Object.create(null),kl(e,t,i,o);for(const l in e.propsOptions[0])l in i||(i[l]=void 0);s?e.props=n?i:la(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function Ua(e,t,s,n){const{props:i,attrs:o,vnode:{patchFlag:l}}=e,r=G(i),[a]=e.propsOptions;let p=!1;if((n||l>0)&&!(l&16)){if(l&8){const h=e.vnode.dynamicProps;for(let u=0;u<h.length;u++){let m=h[u];if(nn(e.emitsOptions,m))continue;const k=t[m];if(a)if(Y(o,m))k!==o[m]&&(o[m]=k,p=!0);else{const H=Ke(m);i[H]=Bn(a,r,H,k,e,!1)}else k!==o[m]&&(o[m]=k,p=!0)}}}else{kl(e,t,i,o)&&(p=!0);let h;for(const u in r)(!t||!Y(t,u)&&((h=Rt(u))===u||!Y(t,h)))&&(a?s&&(s[u]!==void 0||s[h]!==void 0)&&(i[u]=Bn(a,r,u,void 0,e,!0)):delete i[u]);if(o!==r)for(const u in o)(!t||!Y(t,u)&&!0)&&(delete o[u],p=!0)}p&&tt(e,"set","$attrs")}function kl(e,t,s,n){const[i,o]=e.propsOptions;let l=!1,r;if(t)for(let a in t){if(Es(a))continue;const p=t[a];let h;i&&Y(i,h=Ke(a))?!o||!o.includes(h)?s[h]=p:(r||(r={}))[h]=p:nn(e.emitsOptions,a)||(!(a in n)||p!==n[a])&&(n[a]=p,l=!0)}if(o){const a=G(s),p=r||ee;for(let h=0;h<o.length;h++){const u=o[h];s[u]=Bn(i,a,u,p[u],e,!Y(p,u))}}return l}function Bn(e,t,s,n,i,o){const l=e[s];if(l!=null){const r=Y(l,"default");if(r&&n===void 0){const a=l.default;if(l.type!==Function&&q(a)){const{propsDefaults:p}=i;s in p?n=p[s]:(Yt(i),n=p[s]=a.call(null,t),Lt())}else n=a}l[0]&&(o&&!r?n=!1:l[1]&&(n===""||n===Rt(s))&&(n=!0))}return n}function Tl(e,t,s=!1){const n=t.propsCache,i=n.get(e);if(i)return i;const o=e.props,l={},r=[];let a=!1;if(!q(e)){const h=u=>{a=!0;const[m,k]=Tl(u,t,!0);_e(l,m),k&&r.push(...k)};!s&&t.mixins.length&&t.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!o&&!a)return n.set(e,Dt),Dt;if(B(o))for(let h=0;h<o.length;h++){const u=Ke(o[h]);Gi(u)&&(l[u]=ee)}else if(o)for(const h in o){const u=Ke(h);if(Gi(u)){const m=o[h],k=l[u]=B(m)||q(m)?{type:m}:m;if(k){const H=Zi(Boolean,k.type),N=Zi(String,k.type);k[0]=H>-1,k[1]=N<0||H<N,(H>-1||Y(k,"default"))&&r.push(u)}}}const p=[l,r];return n.set(e,p),p}function Gi(e){return e[0]!=="$"}function Ji(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Xi(e,t){return Ji(e)===Ji(t)}function Zi(e,t){return B(t)?t.findIndex(s=>Xi(s,e)):q(t)&&Xi(t,e)?0:-1}const $l=e=>e[0]==="_"||e==="$stable",gi=e=>B(e)?e.map(Ue):[Ue(e)],Ya=(e,t,s)=>{if(t._n)return t;const n=Pe((...i)=>gi(t(...i)),s);return n._c=!1,n},Cl=(e,t,s)=>{const n=e._ctx;for(const i in e){if($l(i))continue;const o=e[i];if(q(o))t[i]=Ya(i,o,n);else if(o!=null){const l=gi(o);t[i]=()=>l}}},Sl=(e,t)=>{const s=gi(t);e.slots.default=()=>s},Ka=(e,t)=>{if(e.vnode.shapeFlag&32){const s=t._;s?(e.slots=G(t),Hs(t,"_",s)):Cl(t,e.slots={})}else e.slots={},t&&Sl(e,t);Hs(e.slots,rn,1)},Va=(e,t,s)=>{const{vnode:n,slots:i}=e;let o=!0,l=ee;if(n.shapeFlag&32){const r=t._;r?s&&r===1?o=!1:(_e(i,t),!s&&r===1&&delete i._):(o=!t.$stable,Cl(t,i)),l=t}else t&&(Sl(e,t),l={default:1});if(o)for(const r in i)!$l(r)&&!(r in l)&&delete i[r]};function Pl(){return{app:null,config:{isNativeTag:kr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ga=0;function Ja(e,t){return function(n,i=null){q(n)||(n=Object.assign({},n)),i!=null&&!he(i)&&(i=null);const o=Pl(),l=new Set;let r=!1;const a=o.app={_uid:Ga++,_component:n,_props:i,_container:null,_context:o,_instance:null,version:uc,get config(){return o.config},set config(p){},use(p,...h){return l.has(p)||(p&&q(p.install)?(l.add(p),p.install(a,...h)):q(p)&&(l.add(p),p(a,...h))),a},mixin(p){return o.mixins.includes(p)||o.mixins.push(p),a},component(p,h){return h?(o.components[p]=h,a):o.components[p]},directive(p,h){return h?(o.directives[p]=h,a):o.directives[p]},mount(p,h,u){if(!r){const m=W(n,i);return m.appContext=o,h&&t?t(m,p):e(m,p,u),r=!0,a._container=p,p.__vue_app__=a,xi(m.component)||m.component.proxy}},unmount(){r&&(e(null,a._container),delete a._container.__vue_app__)},provide(p,h){return o.provides[p]=h,a}};return a}}function qn(e,t,s,n,i=!1){if(B(e)){e.forEach((m,k)=>qn(m,t&&(B(t)?t[k]:t),s,n,i));return}if(ls(n)&&!i)return;const o=n.shapeFlag&4?xi(n.component)||n.component.proxy:n.el,l=i?null:o,{i:r,r:a}=e,p=t&&t.r,h=r.refs===ee?r.refs={}:r.refs,u=r.setupState;if(p!=null&&p!==a&&(pe(p)?(h[p]=null,Y(u,p)&&(u[p]=null)):ye(p)&&(p.value=null)),q(a))mt(a,r,12,[l,h]);else{const m=pe(a),k=ye(a);if(m||k){const H=()=>{if(e.f){const N=m?h[a]:a.value;i?B(N)&&ii(N,o):B(N)?N.includes(o)||N.push(o):m?(h[a]=[o],Y(u,a)&&(u[a]=h[a])):(a.value=[o],e.k&&(h[e.k]=a.value))}else m?(h[a]=l,Y(u,a)&&(u[a]=l)):k&&(a.value=l,e.k&&(h[e.k]=l))};l?(H.id=-1,Te(H,s)):H()}}}const Te=Ta;function Xa(e){return Za(e)}function Za(e,t){const s=Ar();s.__VUE__=!0;const{insert:n,remove:i,patchProp:o,createElement:l,createText:r,createComment:a,setText:p,setElementText:h,parentNode:u,nextSibling:m,setScopeId:k=ze,cloneNode:H,insertStaticContent:N}=e,L=(c,d,f,y=null,b=null,x=null,C=!1,w=null,$=!!d.dynamicChildren)=>{if(c===d)return;c&&!ts(c,d)&&(y=Cs(c),at(c,b,x,!0),c=null),d.patchFlag===-2&&($=!1,d.dynamicChildren=null);const{type:v,ref:M,shapeFlag:A}=d;switch(v){case bi:I(c,d,f,y);break;case yt:R(c,d,f,y);break;case Tn:c==null&&E(d,f,y,C);break;case j:ve(c,d,f,y,b,x,C,w,$);break;default:A&1?ue(c,d,f,y,b,x,C,w,$):A&6?me(c,d,f,y,b,x,C,w,$):(A&64||A&128)&&v.process(c,d,f,y,b,x,C,w,$,Ot)}M!=null&&b&&qn(M,c&&c.ref,x,d||c,!d)},I=(c,d,f,y)=>{if(c==null)n(d.el=r(d.children),f,y);else{const b=d.el=c.el;d.children!==c.children&&p(b,d.children)}},R=(c,d,f,y)=>{c==null?n(d.el=a(d.children||""),f,y):d.el=c.el},E=(c,d,f,y)=>{[c.el,c.anchor]=N(c.children,d,f,y,c.el,c.anchor)},D=({el:c,anchor:d},f,y)=>{let b;for(;c&&c!==d;)b=m(c),n(c,f,y),c=b;n(d,f,y)},ie=({el:c,anchor:d})=>{let f;for(;c&&c!==d;)f=m(c),i(c),c=f;i(d)},ue=(c,d,f,y,b,x,C,w,$)=>{C=C||d.type==="svg",c==null?fe(d,f,y,b,x,C,w,$):le(c,d,b,x,C,w,$)},fe=(c,d,f,y,b,x,C,w)=>{let $,v;const{type:M,props:A,shapeFlag:O,transition:F,patchFlag:K,dirs:J}=c;if(c.el&&H!==void 0&&K===-1)$=c.el=H(c.el);else{if($=c.el=l(c.type,x,A&&A.is,A),O&8?h($,c.children):O&16&&z(c.children,$,null,y,b,x&&M!=="foreignObject",C,w),J&&_t(c,null,y,"created"),A){for(const se in A)se!=="value"&&!Es(se)&&o($,se,null,A[se],x,c.children,y,b,Je);"value"in A&&o($,"value",null,A.value),(v=A.onVnodeBeforeMount)&&We(v,y,c)}ne($,c,c.scopeId,C,y)}J&&_t(c,null,y,"beforeMount");const X=(!b||b&&!b.pendingBranch)&&F&&!F.persisted;X&&F.beforeEnter($),n($,d,f),((v=A&&A.onVnodeMounted)||X||J)&&Te(()=>{v&&We(v,y,c),X&&F.enter($),J&&_t(c,null,y,"mounted")},b)},ne=(c,d,f,y,b)=>{if(f&&k(c,f),y)for(let x=0;x<y.length;x++)k(c,y[x]);if(b){let x=b.subTree;if(d===x){const C=b.vnode;ne(c,C,C.scopeId,C.slotScopeIds,b.parent)}}},z=(c,d,f,y,b,x,C,w,$=0)=>{for(let v=$;v<c.length;v++){const M=c[v]=w?ut(c[v]):Ue(c[v]);L(null,M,d,f,y,b,x,C,w)}},le=(c,d,f,y,b,x,C)=>{const w=d.el=c.el;let{patchFlag:$,dynamicChildren:v,dirs:M}=d;$|=c.patchFlag&16;const A=c.props||ee,O=d.props||ee;let F;f&&kt(f,!1),(F=O.onVnodeBeforeUpdate)&&We(F,f,d,c),M&&_t(d,c,f,"beforeUpdate"),f&&kt(f,!0);const K=b&&d.type!=="foreignObject";if(v?oe(c.dynamicChildren,v,w,f,y,K,x):C||Ge(c,d,w,null,f,y,K,x,!1),$>0){if($&16)ce(w,d,A,O,f,y,b);else if($&2&&A.class!==O.class&&o(w,"class",null,O.class,b),$&4&&o(w,"style",A.style,O.style,b),$&8){const J=d.dynamicProps;for(let X=0;X<J.length;X++){const se=J[X],Fe=A[se],Ht=O[se];(Ht!==Fe||se==="value")&&o(w,se,Fe,Ht,b,c.children,f,y,Je)}}$&1&&c.children!==d.children&&h(w,d.children)}else!C&&v==null&&ce(w,d,A,O,f,y,b);((F=O.onVnodeUpdated)||M)&&Te(()=>{F&&We(F,f,d,c),M&&_t(d,c,f,"updated")},y)},oe=(c,d,f,y,b,x,C)=>{for(let w=0;w<d.length;w++){const $=c[w],v=d[w],M=$.el&&($.type===j||!ts($,v)||$.shapeFlag&70)?u($.el):f;L($,v,M,null,y,b,x,C,!0)}},ce=(c,d,f,y,b,x,C)=>{if(f!==y){for(const w in y){if(Es(w))continue;const $=y[w],v=f[w];$!==v&&w!=="value"&&o(c,w,v,$,C,d.children,b,x,Je)}if(f!==ee)for(const w in f)!Es(w)&&!(w in y)&&o(c,w,f[w],null,C,d.children,b,x,Je);"value"in y&&o(c,"value",f.value,y.value)}},ve=(c,d,f,y,b,x,C,w,$)=>{const v=d.el=c?c.el:r(""),M=d.anchor=c?c.anchor:r("");let{patchFlag:A,dynamicChildren:O,slotScopeIds:F}=d;F&&(w=w?w.concat(F):F),c==null?(n(v,f,y),n(M,f,y),z(d.children,f,M,b,x,C,w,$)):A>0&&A&64&&O&&c.dynamicChildren?(oe(c.dynamicChildren,O,f,b,x,C,w),(d.key!=null||b&&d===b.subTree)&&Ll(c,d,!0)):Ge(c,d,f,M,b,x,C,w,$)},me=(c,d,f,y,b,x,C,w,$)=>{d.slotScopeIds=w,c==null?d.shapeFlag&512?b.ctx.activate(d,f,y,C,$):xt(d,f,y,b,x,C,$):ke(c,d,$)},xt=(c,d,f,y,b,x,C)=>{const w=c.component=oc(c,y,b);if(ul(c)&&(w.ctx.renderer=Ot),lc(w),w.asyncDep){if(b&&b.registerDep(w,re),!c.el){const $=w.subTree=W(yt);R(null,$,d,f)}return}re(w,c,d,f,b,x,C)},ke=(c,d,f)=>{const y=d.component=c.component;if(xa(c,d,f))if(y.asyncDep&&!y.asyncResolved){te(y,d,f);return}else y.next=d,fa(y.update),y.update();else d.el=c.el,y.vnode=d},re=(c,d,f,y,b,x,C)=>{const w=()=>{if(c.isMounted){let{next:M,bu:A,u:O,parent:F,vnode:K}=c,J=M,X;kt(c,!1),M?(M.el=K.el,te(c,M,C)):M=K,A&&xn(A),(X=M.props&&M.props.onVnodeBeforeUpdate)&&We(X,F,M,K),kt(c,!0);const se=_n(c),Fe=c.subTree;c.subTree=se,L(Fe,se,u(Fe.el),Cs(Fe),c,b,x),M.el=se.el,J===null&&_a(c,se.el),O&&Te(O,b),(X=M.props&&M.props.onVnodeUpdated)&&Te(()=>We(X,F,M,K),b)}else{let M;const{el:A,props:O}=d,{bm:F,m:K,parent:J}=c,X=ls(d);if(kt(c,!1),F&&xn(F),!X&&(M=O&&O.onVnodeBeforeMount)&&We(M,J,d),kt(c,!0),A&&vn){const se=()=>{c.subTree=_n(c),vn(A,c.subTree,c,b,null)};X?d.type.__asyncLoader().then(()=>!c.isUnmounted&&se()):se()}else{const se=c.subTree=_n(c);L(null,se,f,y,c,b,x),d.el=se.el}if(K&&Te(K,b),!X&&(M=O&&O.onVnodeMounted)){const se=d;Te(()=>We(M,J,se),b)}(d.shapeFlag&256||J&&ls(J.vnode)&&J.vnode.shapeFlag&256)&&c.a&&Te(c.a,b),c.isMounted=!0,d=f=y=null}},$=c.effect=new ai(w,()=>ol(v),c.scope),v=c.update=()=>$.run();v.id=c.uid,kt(c,!0),v()},te=(c,d,f)=>{d.component=c;const y=c.vnode.props;c.vnode=d,c.next=null,Ua(c,d.props,y,f),Va(c,d.children,f),Jt(),sn(void 0,c.update),Xt()},Ge=(c,d,f,y,b,x,C,w,$=!1)=>{const v=c&&c.children,M=c?c.shapeFlag:0,A=d.children,{patchFlag:O,shapeFlag:F}=d;if(O>0){if(O&128){Qt(v,A,f,y,b,x,C,w,$);return}else if(O&256){bn(v,A,f,y,b,x,C,w,$);return}}F&8?(M&16&&Je(v,b,x),A!==v&&h(f,A)):M&16?F&16?Qt(v,A,f,y,b,x,C,w,$):Je(v,b,x,!0):(M&8&&h(f,""),F&16&&z(A,f,y,b,x,C,w,$))},bn=(c,d,f,y,b,x,C,w,$)=>{c=c||Dt,d=d||Dt;const v=c.length,M=d.length,A=Math.min(v,M);let O;for(O=0;O<A;O++){const F=d[O]=$?ut(d[O]):Ue(d[O]);L(c[O],F,f,null,b,x,C,w,$)}v>M?Je(c,b,x,!0,!1,A):z(d,f,y,b,x,C,w,$,A)},Qt=(c,d,f,y,b,x,C,w,$)=>{let v=0;const M=d.length;let A=c.length-1,O=M-1;for(;v<=A&&v<=O;){const F=c[v],K=d[v]=$?ut(d[v]):Ue(d[v]);if(ts(F,K))L(F,K,f,null,b,x,C,w,$);else break;v++}for(;v<=A&&v<=O;){const F=c[A],K=d[O]=$?ut(d[O]):Ue(d[O]);if(ts(F,K))L(F,K,f,null,b,x,C,w,$);else break;A--,O--}if(v>A){if(v<=O){const F=O+1,K=F<M?d[F].el:y;for(;v<=O;)L(null,d[v]=$?ut(d[v]):Ue(d[v]),f,K,b,x,C,w,$),v++}}else if(v>O)for(;v<=A;)at(c[v],b,x,!0),v++;else{const F=v,K=v,J=new Map;for(v=K;v<=O;v++){const Le=d[v]=$?ut(d[v]):Ue(d[v]);Le.key!=null&&J.set(Le.key,v)}let X,se=0;const Fe=O-K+1;let Ht=!1,Ei=0;const es=new Array(Fe);for(v=0;v<Fe;v++)es[v]=0;for(v=F;v<=A;v++){const Le=c[v];if(se>=Fe){at(Le,b,x,!0);continue}let qe;if(Le.key!=null)qe=J.get(Le.key);else for(X=K;X<=O;X++)if(es[X-K]===0&&ts(Le,d[X])){qe=X;break}qe===void 0?at(Le,b,x,!0):(es[qe-K]=v+1,qe>=Ei?Ei=qe:Ht=!0,L(Le,d[qe],f,null,b,x,C,w,$),se++)}const Mi=Ht?Qa(es):Dt;for(X=Mi.length-1,v=Fe-1;v>=0;v--){const Le=K+v,qe=d[Le],Oi=Le+1<M?d[Le+1].el:y;es[v]===0?L(null,qe,f,Oi,b,x,C,w,$):Ht&&(X<0||v!==Mi[X]?Mt(qe,f,Oi,2):X--)}}},Mt=(c,d,f,y,b=null)=>{const{el:x,type:C,transition:w,children:$,shapeFlag:v}=c;if(v&6){Mt(c.component.subTree,d,f,y);return}if(v&128){c.suspense.move(d,f,y);return}if(v&64){C.move(c,d,f,Ot);return}if(C===j){n(x,d,f);for(let A=0;A<$.length;A++)Mt($[A],d,f,y);n(c.anchor,d,f);return}if(C===Tn){D(c,d,f);return}if(y!==2&&v&1&&w)if(y===0)w.beforeEnter(x),n(x,d,f),Te(()=>w.enter(x),b);else{const{leave:A,delayLeave:O,afterLeave:F}=w,K=()=>n(x,d,f),J=()=>{A(x,()=>{K(),F&&F()})};O?O(x,K,J):J()}else n(x,d,f)},at=(c,d,f,y=!1,b=!1)=>{const{type:x,props:C,ref:w,children:$,dynamicChildren:v,shapeFlag:M,patchFlag:A,dirs:O}=c;if(w!=null&&qn(w,null,f,c,!0),M&256){d.ctx.deactivate(c);return}const F=M&1&&O,K=!ls(c);let J;if(K&&(J=C&&C.onVnodeBeforeUnmount)&&We(J,d,c),M&6)gr(c.component,f,y);else{if(M&128){c.suspense.unmount(f,y);return}F&&_t(c,null,d,"beforeUnmount"),M&64?c.type.remove(c,d,f,b,Ot,y):v&&(x!==j||A>0&&A&64)?Je(v,d,f,!1,!0):(x===j&&A&384||!b&&M&16)&&Je($,d,f),y&&Ii(c)}(K&&(J=C&&C.onVnodeUnmounted)||F)&&Te(()=>{J&&We(J,d,c),F&&_t(c,null,d,"unmounted")},f)},Ii=c=>{const{type:d,el:f,anchor:y,transition:b}=c;if(d===j){mr(f,y);return}if(d===Tn){ie(c);return}const x=()=>{i(f),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(c.shapeFlag&1&&b&&!b.persisted){const{leave:C,delayLeave:w}=b,$=()=>C(f,x);w?w(c.el,x,$):$()}else x()},mr=(c,d)=>{let f;for(;c!==d;)f=m(c),i(c),c=f;i(d)},gr=(c,d,f)=>{const{bum:y,scope:b,update:x,subTree:C,um:w}=c;y&&xn(y),b.stop(),x&&(x.active=!1,at(C,c,d,f)),w&&Te(w,d),Te(()=>{c.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Je=(c,d,f,y=!1,b=!1,x=0)=>{for(let C=x;C<c.length;C++)at(c[C],d,f,y,b)},Cs=c=>c.shapeFlag&6?Cs(c.component.subTree):c.shapeFlag&128?c.suspense.next():m(c.anchor||c.el),Ri=(c,d,f)=>{c==null?d._vnode&&at(d._vnode,null,null,!0):L(d._vnode||null,c,d,null,null,null,f),al(),d._vnode=c},Ot={p:L,um:at,m:Mt,r:Ii,mt:xt,mc:z,pc:Ge,pbc:oe,n:Cs,o:e};let yn,vn;return t&&([yn,vn]=t(Ot)),{render:Ri,hydrate:yn,createApp:Ja(Ri,yn)}}function kt({effect:e,update:t},s){e.allowRecurse=t.allowRecurse=s}function Ll(e,t,s=!1){const n=e.children,i=t.children;if(B(n)&&B(i))for(let o=0;o<n.length;o++){const l=n[o];let r=i[o];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=i[o]=ut(i[o]),r.el=l.el),s||Ll(l,r))}}function Qa(e){const t=e.slice(),s=[0];let n,i,o,l,r;const a=e.length;for(n=0;n<a;n++){const p=e[n];if(p!==0){if(i=s[s.length-1],e[i]<p){t[n]=i,s.push(n);continue}for(o=0,l=s.length-1;o<l;)r=o+l>>1,e[s[r]]<p?o=r+1:l=r;p<e[s[o]]&&(o>0&&(t[n]=s[o-1]),s[o]=n)}}for(o=s.length,l=s[o-1];o-- >0;)s[o]=l,l=t[l];return s}const ec=e=>e.__isTeleport,j=Symbol(void 0),bi=Symbol(void 0),yt=Symbol(void 0),Tn=Symbol(void 0),rs=[];let De=null;function T(e=!1){rs.push(De=e?null:[])}function tc(){rs.pop(),De=rs[rs.length-1]||null}let gs=1;function Qi(e){gs+=e}function Al(e){return e.dynamicChildren=gs>0?De||Dt:null,tc(),gs>0&&De&&De.push(e),e}function S(e,t,s,n,i,o){return Al(g(e,t,s,n,i,o,!0))}function Ve(e,t,s,n,i){return Al(W(e,t,s,n,i,!0))}function zs(e){return e?e.__v_isVNode===!0:!1}function ts(e,t){return e.type===t.type&&e.key===t.key}const rn="__vInternal",Il=({key:e})=>e!=null?e:null,Ms=({ref:e,ref_key:t,ref_for:s})=>e!=null?pe(e)||ye(e)||q(e)?{i:Ce,r:e,k:t,f:!!s}:e:null;function g(e,t=null,s=null,n=0,i=null,o=e===j?0:1,l=!1,r=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Il(t),ref:t&&Ms(t),scopeId:on,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null};return r?(vi(a,s),o&128&&e.normalize(a)):s&&(a.shapeFlag|=pe(s)?8:16),gs>0&&!l&&De&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&De.push(a),a}const W=sc;function sc(e,t=null,s=null,n=0,i=null,o=!1){if((!e||e===bl)&&(e=yt),zs(e)){const r=Ut(e,t,!0);return s&&vi(r,s),gs>0&&!o&&De&&(r.shapeFlag&6?De[De.indexOf(e)]=r:De.push(r)),r.patchFlag|=-2,r}if(dc(e)&&(e=e.__vccOpts),t){t=yi(t);let{class:r,style:a}=t;r&&!pe(r)&&(t.class=Se(r)),he(a)&&(Qo(a)&&!B(a)&&(a=_e({},a)),t.style=Ye(a))}const l=pe(e)?1:ka(e)?128:ec(e)?64:he(e)?4:q(e)?2:0;return g(e,t,s,n,i,l,o,!0)}function yi(e){return e?Qo(e)||rn in e?_e({},e):e:null}function Ut(e,t,s=!1){const{props:n,ref:i,patchFlag:o,children:l}=e,r=t?wi(n||{},t):n;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:r,key:r&&Il(r),ref:t&&t.ref?s&&i?B(i)?i.concat(Ms(t)):[i,Ms(t)]:Ms(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==j?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ut(e.ssContent),ssFallback:e.ssFallback&&Ut(e.ssFallback),el:e.el,anchor:e.anchor}}function Z(e=" ",t=0){return W(bi,null,e,t)}function xe(e="",t=!1){return t?(T(),Ve(yt,null,e)):W(yt,null,e)}function Ue(e){return e==null||typeof e=="boolean"?W(yt):B(e)?W(j,null,e.slice()):typeof e=="object"?ut(e):W(bi,null,String(e))}function ut(e){return e.el===null||e.memo?e:Ut(e)}function vi(e,t){let s=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(B(t))s=16;else if(typeof t=="object")if(n&65){const i=t.default;i&&(i._c&&(i._d=!1),vi(e,i()),i._c&&(i._d=!0));return}else{s=32;const i=t._;!i&&!(rn in t)?t._ctx=Ce:i===3&&Ce&&(Ce.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else q(t)?(t={default:t,_ctx:Ce},s=32):(t=String(t),n&64?(s=16,t=[Z(t)]):s=8);e.children=t,e.shapeFlag|=s}function wi(...e){const t={};for(let s=0;s<e.length;s++){const n=e[s];for(const i in n)if(i==="class")t.class!==n.class&&(t.class=Se([t.class,n.class]));else if(i==="style")t.style=Ye([t.style,n.style]);else if(Gs(i)){const o=t[i],l=n[i];l&&o!==l&&!(B(o)&&o.includes(l))&&(t[i]=o?[].concat(o,l):l)}else i!==""&&(t[i]=n[i])}return t}function We(e,t,s,n=null){Be(e,t,7,[s,n])}const nc=Pl();let ic=0;function oc(e,t,s){const n=e.type,i=(t?t.appContext:e.appContext)||nc,o={uid:ic++,vnode:e,type:n,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ir(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tl(n,i),emitsOptions:pl(n,i),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:n.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=ba.bind(null,o),e.ce&&e.ce(o),o}let be=null;const Yt=e=>{be=e,e.scope.on()},Lt=()=>{be&&be.scope.off(),be=null};function Rl(e){return e.vnode.shapeFlag&4}let bs=!1;function lc(e,t=!1){bs=t;const{props:s,children:n}=e.vnode,i=Rl(e);Wa(e,s,i,t),Ka(e,n);const o=i?rc(e,t):void 0;return bs=!1,o}function rc(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=el(new Proxy(e.ctx,Fa));const{setup:n}=s;if(n){const i=e.setupContext=n.length>1?cc(e):null;Yt(e),Jt();const o=mt(n,e,0,[e.props,i]);if(Xt(),Lt(),jo(o)){if(o.then(Lt,Lt),t)return o.then(l=>{eo(e,l,t)}).catch(l=>{tn(l,e,0)});e.asyncDep=o}else eo(e,o,t)}else El(e,t)}function eo(e,t,s){q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:he(t)&&(e.setupState=nl(t)),El(e,s)}let to;function El(e,t,s){const n=e.type;if(!e.render){if(!t&&to&&!n.render){const i=n.template;if(i){const{isCustomElement:o,compilerOptions:l}=e.appContext.config,{delimiters:r,compilerOptions:a}=n,p=_e(_e({isCustomElement:o,delimiters:r},l),a);n.render=to(i,p)}}e.render=n.render||ze}Yt(e),Jt(),ja(e),Xt(),Lt()}function ac(e){return new Proxy(e.attrs,{get(t,s){return Ee(e,"get","$attrs"),t[s]}})}function cc(e){const t=n=>{e.exposed=n||{}};let s;return{get attrs(){return s||(s=ac(e))},slots:e.slots,emit:e.emit,expose:t}}function xi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(nl(el(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in js)return js[s](e)}}))}function pc(e,t=!0){return q(e)?e.displayName||e.name:e.name||t&&e.__name}function dc(e){return q(e)&&"__vccOpts"in e}const ae=(e,t)=>da(e,t,bs);function hc(e,t,s){const n=arguments.length;return n===2?he(t)&&!B(t)?zs(t)?W(e,null,[t]):W(e,t):W(e,null,t):(n>3?s=Array.prototype.slice.call(arguments,2):n===3&&zs(s)&&(s=[s]),W(e,t,s))}const uc="3.2.37",fc="http://www.w3.org/2000/svg",St=typeof document<"u"?document:null,so=St&&St.createElement("template"),mc={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,n)=>{const i=t?St.createElementNS(fc,e):St.createElement(e,s?{is:s}:void 0);return e==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:e=>St.createTextNode(e),createComment:e=>St.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>St.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,s,n,i,o){const l=s?s.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),s),!(i===o||!(i=i.nextSibling)););else{so.innerHTML=n?`<svg>${e}</svg>`:e;const r=so.content;if(n){const a=r.firstChild;for(;a.firstChild;)r.appendChild(a.firstChild);r.removeChild(a)}t.insertBefore(r,s)}return[l?l.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}};function gc(e,t,s){const n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}function bc(e,t,s){const n=e.style,i=pe(s);if(s&&!i){for(const o in s)Wn(n,o,s[o]);if(t&&!pe(t))for(const o in t)s[o]==null&&Wn(n,o,"")}else{const o=n.display;i?t!==s&&(n.cssText=s):t&&e.removeAttribute("style"),"_vod"in e&&(n.display=o)}}const no=/\s*!important$/;function Wn(e,t,s){if(B(s))s.forEach(n=>Wn(e,t,n));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const n=yc(e,t);no.test(s)?e.setProperty(Rt(n),s.replace(no,""),"important"):e[n]=s}}const io=["Webkit","Moz","ms"],$n={};function yc(e,t){const s=$n[t];if(s)return s;let n=Ke(t);if(n!=="filter"&&n in e)return $n[t]=n;n=Zs(n);for(let i=0;i<io.length;i++){const o=io[i]+n;if(o in e)return $n[t]=o}return t}const oo="http://www.w3.org/1999/xlink";function vc(e,t,s,n,i){if(n&&t.startsWith("xlink:"))s==null?e.removeAttributeNS(oo,t.slice(6,t.length)):e.setAttributeNS(oo,t,s);else{const o=vr(t);s==null||o&&!Oo(s)?e.removeAttribute(t):e.setAttribute(t,o?"":s)}}function wc(e,t,s,n,i,o,l){if(t==="innerHTML"||t==="textContent"){n&&l(n,i,o),e[t]=s==null?"":s;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=s;const a=s==null?"":s;(e.value!==a||e.tagName==="OPTION")&&(e.value=a),s==null&&e.removeAttribute(t);return}let r=!1;if(s===""||s==null){const a=typeof e[t];a==="boolean"?s=Oo(s):s==null&&a==="string"?(s="",r=!0):a==="number"&&(s=0,r=!0)}try{e[t]=s}catch{}r&&e.removeAttribute(t)}const[Ml,xc]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const s=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(s&&Number(s[1])<=53)}return[e,t]})();let Un=0;const _c=Promise.resolve(),kc=()=>{Un=0},Tc=()=>Un||(_c.then(kc),Un=Ml());function $c(e,t,s,n){e.addEventListener(t,s,n)}function Cc(e,t,s,n){e.removeEventListener(t,s,n)}function Sc(e,t,s,n,i=null){const o=e._vei||(e._vei={}),l=o[t];if(n&&l)l.value=n;else{const[r,a]=Pc(t);if(n){const p=o[t]=Lc(n,i);$c(e,r,p,a)}else l&&(Cc(e,r,l,a),o[t]=void 0)}}const lo=/(?:Once|Passive|Capture)$/;function Pc(e){let t;if(lo.test(e)){t={};let s;for(;s=e.match(lo);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[Rt(e.slice(2)),t]}function Lc(e,t){const s=n=>{const i=n.timeStamp||Ml();(xc||i>=s.attached-1)&&Be(Ac(n,s.value),t,5,[n])};return s.value=e,s.attached=Tc(),s}function Ac(e,t){if(B(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(n=>i=>!i._stopped&&n&&n(i))}else return t}const ro=/^on[a-z]/,Ic=(e,t,s,n,i=!1,o,l,r,a)=>{t==="class"?gc(e,n,i):t==="style"?bc(e,s,n):Gs(t)?ni(t)||Sc(e,t,s,n,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Rc(e,t,n,i))?wc(e,t,n,o,l,r,a):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),vc(e,t,n,i))};function Rc(e,t,s,n){return n?!!(t==="innerHTML"||t==="textContent"||t in e&&ro.test(t)&&q(s)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ro.test(t)&&pe(s)?!1:t in e}const Ec=["ctrl","shift","alt","meta"],Mc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Ec.some(s=>e[`${s}Key`]&&!t.includes(s))},Bs=(e,t)=>(s,...n)=>{for(let i=0;i<t.length;i++){const o=Mc[t[i]];if(o&&o(s,t))return}return e(s,...n)},Oc={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ol=(e,t)=>s=>{if(!("key"in s))return;const n=Rt(s.key);if(t.some(i=>i===n||Oc[i]===n))return e(s)},Hc=_e({patchProp:Ic},mc);let ao;function Nc(){return ao||(ao=Xa(Hc))}const Hl=(...e)=>{const t=Nc().createApp(...e),{mount:s}=t;return t.mount=n=>{const i=Fc(n);if(!i)return;const o=t._component;!q(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.innerHTML="";const l=s(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),l},t};function Fc(e){return pe(e)?document.querySelector(e):e}const qs=(e,t,s)=>Math.min(Math.max(e,t),s);function Ws(){Array.from(document.querySelectorAll(".shake, .strobe")).forEach(e=>e.classList.remove("shake","strobe"))}const ys=e=>{!e||(e.classList.add("shake"),setTimeout(()=>{e.classList.remove("shake")},500))};function lt(e){return e.split("-")[0]}function Wt(e){return e.split("-")[1]}function ws(e){return["top","bottom"].includes(lt(e))?"x":"y"}function _i(e){return e==="y"?"height":"width"}function co(e){let{reference:t,floating:s,placement:n}=e;const i=t.x+t.width/2-s.width/2,o=t.y+t.height/2-s.height/2;let l;switch(lt(n)){case"top":l={x:i,y:t.y-s.height};break;case"bottom":l={x:i,y:t.y+t.height};break;case"right":l={x:t.x+t.width,y:o};break;case"left":l={x:t.x-s.width,y:o};break;default:l={x:t.x,y:t.y}}const r=ws(n),a=_i(r);switch(Wt(n)){case"start":l[r]=l[r]-(t[a]/2-s[a]/2);break;case"end":l[r]=l[r]+(t[a]/2-s[a]/2);break}return l}const jc=async(e,t,s)=>{const{placement:n="bottom",strategy:i="absolute",middleware:o=[],platform:l}=s;let r=await l.getElementRects({reference:e,floating:t,strategy:i}),{x:a,y:p}=co({...r,placement:n}),h=n,u={};for(let m=0;m<o.length;m++){const{name:k,fn:H}=o[m],{x:N,y:L,data:I,reset:R}=await H({x:a,y:p,initialPlacement:n,placement:h,strategy:i,middlewareData:u,rects:r,platform:l,elements:{reference:e,floating:t}});if(a=N!=null?N:a,p=L!=null?L:p,u={...u,[k]:I!=null?I:{}},R){typeof R=="object"&&(R.placement&&(h=R.placement),R.rects&&(r=R.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:i}):R.rects),{x:a,y:p}=co({...r,placement:h})),m=-1;continue}}return{x:a,y:p,placement:h,strategy:i,middlewareData:u}};function Dc(e){return{top:0,right:0,bottom:0,left:0,...e}}function Nl(e){return typeof e!="number"?Dc(e):{top:e,right:e,bottom:e,left:e}}function Yn(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function an(e,t){t===void 0&&(t={});const{x:s,y:n,platform:i,rects:o,elements:l,strategy:r}=e,{boundary:a="clippingParents",rootBoundary:p="viewport",elementContext:h="floating",altBoundary:u=!1,padding:m=0}=t,k=Nl(m),N=l[u?h==="floating"?"reference":"floating":h],L=await i.getClippingClientRect({element:await i.isElement(N)?N:N.contextElement||await i.getDocumentElement({element:l.floating}),boundary:a,rootBoundary:p}),I=Yn(await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:h==="floating"?{...o.floating,x:s,y:n}:o.reference,offsetParent:await i.getOffsetParent({element:l.floating}),strategy:r}));return{top:L.top-I.top+k.top,bottom:I.bottom-L.bottom+k.bottom,left:L.left-I.left+k.left,right:I.right-L.right+k.right}}const zc=Math.min,Ct=Math.max;function Kn(e,t,s){return Ct(e,zc(t,s))}const Bc=e=>({name:"arrow",options:e,async fn(t){const{element:s,padding:n=0}=e!=null?e:{},{x:i,y:o,placement:l,rects:r,platform:a}=t;if(s==null)return{};const p=Nl(n),h={x:i,y:o},u=lt(l),m=ws(u),k=_i(m),H=await a.getDimensions({element:s}),N=m==="y"?"top":"left",L=m==="y"?"bottom":"right",I=r.reference[k]+r.reference[m]-h[m]-r.floating[k],R=h[m]-r.reference[m],E=await a.getOffsetParent({element:s}),D=E?m==="y"?E.clientHeight||0:E.clientWidth||0:0,ie=I/2-R/2,ue=p[N],fe=D-H[k]-p[L],ne=D/2-H[k]/2+ie,z=Kn(ue,ne,fe);return{data:{[m]:z,centerOffset:ne-z}}}}),qc={left:"right",right:"left",bottom:"top",top:"bottom"};function Us(e){return e.replace(/left|right|bottom|top/g,t=>qc[t])}function Fl(e,t){const s=Wt(e)==="start",n=ws(e),i=_i(n);let o=n==="x"?s?"right":"left":s?"bottom":"top";return t.reference[i]>t.floating[i]&&(o=Us(o)),{main:o,cross:Us(o)}}const Wc={start:"end",end:"start"};function Vn(e){return e.replace(/start|end/g,t=>Wc[t])}const Uc=["top","right","bottom","left"],Yc=Uc.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);function Kc(e,t,s){return(e?[...s.filter(i=>Wt(i)===e),...s.filter(i=>Wt(i)!==e)]:s.filter(i=>lt(i)===i)).filter(i=>e?Wt(i)===e||(t?Vn(i)!==i:!1):!0)}const Vc=function(e){return e===void 0&&(e={}),{name:"autoPlacement",options:e,async fn(t){var s,n,i,o,l,r;const{x:a,y:p,rects:h,middlewareData:u,placement:m}=t,{alignment:k=null,allowedPlacements:H=Yc,autoAlignment:N=!0,...L}=e;if((s=u.autoPlacement)!=null&&s.skip)return{};const I=Kc(k,N,H),R=await an(t,L),E=(n=(i=u.autoPlacement)==null?void 0:i.index)!=null?n:0,D=I[E],{main:ie,cross:ue}=Fl(D,h);if(m!==D)return{x:a,y:p,reset:{placement:I[0]}};const fe=[R[lt(D)],R[ie],R[ue]],ne=[...(o=(l=u.autoPlacement)==null?void 0:l.overflows)!=null?o:[],{placement:D,overflows:fe}],z=I[E+1];if(z)return{data:{index:E+1,overflows:ne},reset:{placement:z}};const le=ne.slice().sort((ce,ve)=>ce.overflows[0]-ve.overflows[0]),oe=(r=le.find(ce=>{let{overflows:ve}=ce;return ve.every(me=>me<=0)}))==null?void 0:r.placement;return{data:{skip:!0},reset:{placement:oe!=null?oe:le[0].placement}}}}};function Gc(e){const t=Us(e);return[Vn(e),t,Vn(t)]}const Jc=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,n;const{placement:i,middlewareData:o,rects:l,initialPlacement:r}=t;if((s=o.flip)!=null&&s.skip)return{};const{mainAxis:a=!0,crossAxis:p=!0,fallbackPlacements:h,fallbackStrategy:u="bestFit",flipAlignment:m=!0,...k}=e,H=lt(i),L=h||(H===r||!m?[Us(r)]:Gc(r)),I=[r,...L],R=await an(t,k),E=[];let D=((n=o.flip)==null?void 0:n.overflows)||[];if(a&&E.push(R[H]),p){const{main:ne,cross:z}=Fl(i,l);E.push(R[ne],R[z])}if(D=[...D,{placement:i,overflows:E}],!E.every(ne=>ne<=0)){var ie,ue;const ne=((ie=(ue=o.flip)==null?void 0:ue.index)!=null?ie:0)+1,z=I[ne];if(z)return{data:{index:ne,overflows:D},reset:{placement:z}};let le="bottom";switch(u){case"bestFit":{var fe;const oe=(fe=D.slice().sort((ce,ve)=>ce.overflows.filter(me=>me>0).reduce((me,xt)=>me+xt,0)-ve.overflows.filter(me=>me>0).reduce((me,xt)=>me+xt,0))[0])==null?void 0:fe.placement;oe&&(le=oe);break}case"initialPlacement":le=r;break}return{data:{skip:!0},reset:{placement:le}}}return{}}}};function Xc(e){let{placement:t,rects:s,value:n}=e;const i=lt(t),o=["left","top"].includes(i)?-1:1,l=typeof n=="function"?n({...s,placement:t}):n,{mainAxis:r,crossAxis:a}=typeof l=="number"?{mainAxis:l,crossAxis:0}:{mainAxis:0,crossAxis:0,...l};return ws(i)==="x"?{x:a,y:r*o}:{x:r*o,y:a}}const Zc=function(e){return e===void 0&&(e=0),{name:"offset",options:e,fn(t){const{x:s,y:n,placement:i,rects:o}=t,l=Xc({placement:i,rects:o,value:e});return{x:s+l.x,y:n+l.y,data:l}}}};function Qc(e){return e==="x"?"y":"x"}const ep=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:n,placement:i}=t,{mainAxis:o=!0,crossAxis:l=!1,limiter:r={fn:L=>{let{x:I,y:R}=L;return{x:I,y:R}}},...a}=e,p={x:s,y:n},h=await an(t,a),u=ws(lt(i)),m=Qc(u);let k=p[u],H=p[m];if(o){const L=u==="y"?"top":"left",I=u==="y"?"bottom":"right",R=k+h[L],E=k-h[I];k=Kn(R,k,E)}if(l){const L=m==="y"?"top":"left",I=m==="y"?"bottom":"right",R=H+h[L],E=H-h[I];H=Kn(R,H,E)}const N=r.fn({...t,[u]:k,[m]:H});return{...N,data:{x:N.x-s,y:N.y-n}}}}},tp=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var s;const{placement:n,rects:i,middlewareData:o}=t,{apply:l,...r}=e;if((s=o.size)!=null&&s.skip)return{};const a=await an(t,r),p=lt(n),h=Wt(n)==="end";let u,m;p==="top"||p==="bottom"?(u=p,m=h?"left":"right"):(m=p,u=h?"top":"bottom");const k=Ct(a.left,0),H=Ct(a.right,0),N=Ct(a.top,0),L=Ct(a.bottom,0),I={height:i.floating.height-(["left","right"].includes(n)?2*(N!==0||L!==0?N+L:Ct(a.top,a.bottom)):a[u]),width:i.floating.width-(["top","bottom"].includes(n)?2*(k!==0||H!==0?k+H:Ct(a.left,a.right)):a[m])};return l==null||l({...I,...i}),{data:{skip:!0},reset:{rects:!0}}}}};function ki(e){return(e==null?void 0:e.toString())==="[object Window]"}function vt(e){if(e==null)return window;if(!ki(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function cn(e){return vt(e).getComputedStyle(e)}function st(e){return ki(e)?"":e?(e.nodeName||"").toLowerCase():""}function nt(e){return e instanceof vt(e).HTMLElement}function Ys(e){return e instanceof vt(e).Element}function sp(e){return e instanceof vt(e).Node}function jl(e){const t=vt(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function pn(e){const{overflow:t,overflowX:s,overflowY:n}=cn(e);return/auto|scroll|overlay|hidden/.test(t+n+s)}function np(e){return["table","td","th"].includes(st(e))}function Dl(e){const t=navigator.userAgent.toLowerCase().includes("firefox"),s=cn(e);return s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].includes(s.willChange)||t&&s.willChange==="filter"||t&&(s.filter?s.filter!=="none":!1)}const po=Math.min,as=Math.max,Ks=Math.round;function Kt(e,t){t===void 0&&(t=!1);const s=e.getBoundingClientRect();let n=1,i=1;return t&&nt(e)&&(n=e.offsetWidth>0&&Ks(s.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Ks(s.height)/e.offsetHeight||1),{width:s.width/n,height:s.height/i,top:s.top/i,right:s.right/n,bottom:s.bottom/i,left:s.left/n,x:s.left/n,y:s.top/i}}function wt(e){return((sp(e)?e.ownerDocument:e.document)||window.document).documentElement}function dn(e){return ki(e)?{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}:{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function zl(e){return Kt(wt(e)).left+dn(e).scrollLeft}function ip(e){const t=Kt(e);return Ks(t.width)!==e.offsetWidth||Ks(t.height)!==e.offsetHeight}function op(e,t,s){const n=nt(t),i=wt(t),o=Kt(e,n&&ip(t));let l={scrollLeft:0,scrollTop:0};const r={x:0,y:0};if(n||!n&&s!=="fixed")if((st(t)!=="body"||pn(i))&&(l=dn(t)),nt(t)){const a=Kt(t,!0);r.x=a.x+t.clientLeft,r.y=a.y+t.clientTop}else i&&(r.x=zl(i));return{x:o.left+l.scrollLeft-r.x,y:o.top+l.scrollTop-r.y,width:o.width,height:o.height}}function hn(e){return st(e)==="html"?e:e.assignedSlot||e.parentNode||(jl(e)?e.host:null)||wt(e)}function ho(e){return!nt(e)||getComputedStyle(e).position==="fixed"?null:e.offsetParent}function lp(e){let t=hn(e);for(;nt(t)&&!["html","body"].includes(st(t));){if(Dl(t))return t;t=t.parentNode}return null}function Gn(e){const t=vt(e);let s=ho(e);for(;s&&np(s)&&getComputedStyle(s).position==="static";)s=ho(s);return s&&(st(s)==="html"||st(s)==="body"&&getComputedStyle(s).position==="static"&&!Dl(s))?t:s||lp(e)||t}function uo(e){return{width:e.offsetWidth,height:e.offsetHeight}}function rp(e){let{rect:t,offsetParent:s,strategy:n}=e;const i=nt(s),o=wt(s);if(s===o)return t;let l={scrollLeft:0,scrollTop:0};const r={x:0,y:0};if((i||!i&&n!=="fixed")&&((st(s)!=="body"||pn(o))&&(l=dn(s)),nt(s))){const a=Kt(s,!0);r.x=a.x+s.clientLeft,r.y=a.y+s.clientTop}return{...t,x:t.x-l.scrollLeft+r.x,y:t.y-l.scrollTop+r.y}}function ap(e){const t=vt(e),s=wt(e),n=t.visualViewport;let i=s.clientWidth,o=s.clientHeight,l=0,r=0;return n&&(i=n.width,o=n.height,Math.abs(t.innerWidth/n.scale-n.width)<.01&&(l=n.offsetLeft,r=n.offsetTop)),{width:i,height:o,x:l,y:r}}function cp(e){var t;const s=wt(e),n=dn(e),i=(t=e.ownerDocument)==null?void 0:t.body,o=as(s.scrollWidth,s.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),l=as(s.scrollHeight,s.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0);let r=-n.scrollLeft+zl(e);const a=-n.scrollTop;return cn(i||s).direction==="rtl"&&(r+=as(s.clientWidth,i?i.clientWidth:0)-o),{width:o,height:l,x:r,y:a}}function Bl(e){return["html","body","#document"].includes(st(e))?e.ownerDocument.body:nt(e)&&pn(e)?e:Bl(hn(e))}function Vs(e,t){var s;t===void 0&&(t=[]);const n=Bl(e),i=n===((s=e.ownerDocument)==null?void 0:s.body),o=vt(n),l=i?[o].concat(o.visualViewport||[],pn(n)?n:[]):n,r=t.concat(l);return i?r:r.concat(Vs(hn(l)))}function pp(e,t){const s=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(s&&jl(s)){let n=t;do{if(n&&e===n)return!0;n=n.parentNode||n.host}while(n)}return!1}function dp(e){const t=Kt(e),s=t.top+e.clientTop,n=t.left+e.clientLeft;return{top:s,left:n,x:n,y:s,right:n+e.clientWidth,bottom:s+e.clientHeight,width:e.clientWidth,height:e.clientHeight}}function fo(e,t){return t==="viewport"?Yn(ap(e)):Ys(t)?dp(t):Yn(cp(wt(e)))}function hp(e){const t=Vs(hn(e)),n=["absolute","fixed"].includes(cn(e).position)&&nt(e)?Gn(e):e;return Ys(n)?t.filter(i=>Ys(i)&&pp(i,n)&&st(i)!=="body"):[]}function up(e){let{element:t,boundary:s,rootBoundary:n}=e;const o=[...s==="clippingParents"?hp(t):[].concat(s),n],l=o[0],r=o.reduce((a,p)=>{const h=fo(t,p);return a.top=as(h.top,a.top),a.right=po(h.right,a.right),a.bottom=po(h.bottom,a.bottom),a.left=as(h.left,a.left),a},fo(t,l));return r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}const fp={getElementRects:e=>{let{reference:t,floating:s,strategy:n}=e;return{reference:op(t,Gn(s),n),floating:{...uo(s),x:0,y:0}}},convertOffsetParentRelativeRectToViewportRelativeRect:e=>rp(e),getOffsetParent:e=>{let{element:t}=e;return Gn(t)},isElement:e=>Ys(e),getDocumentElement:e=>{let{element:t}=e;return wt(t)},getClippingClientRect:e=>up(e),getDimensions:e=>{let{element:t}=e;return uo(t)},getClientRects:e=>{let{element:t}=e;return t.getClientRects()}},mp=(e,t,s)=>jc(e,t,{platform:fp,...s});var gp=Object.defineProperty,bp=Object.defineProperties,yp=Object.getOwnPropertyDescriptors,mo=Object.getOwnPropertySymbols,vp=Object.prototype.hasOwnProperty,wp=Object.prototype.propertyIsEnumerable,go=(e,t,s)=>t in e?gp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ze=(e,t)=>{for(var s in t||(t={}))vp.call(t,s)&&go(e,s,t[s]);if(mo)for(var s of mo(t))wp.call(t,s)&&go(e,s,t[s]);return e},xs=(e,t)=>bp(e,yp(t));function ql(e,t){for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(typeof t[s]=="object"&&e[s]?ql(e[s],t[s]):e[s]=t[s])}const et={disabled:!1,distance:5,skidding:0,container:"body",boundary:void 0,instantMove:!1,disposeTimeout:5e3,popperTriggers:[],strategy:"absolute",preventOverflow:!0,flip:!0,shift:!0,overflowPadding:0,arrowPadding:0,arrowOverflow:!0,themes:{tooltip:{placement:"top",triggers:["hover","focus","touch"],hideTriggers:e=>[...e,"click"],delay:{show:200,hide:0},handleResize:!1,html:!1,loadingContent:"..."},dropdown:{placement:"bottom",triggers:["click"],delay:0,handleResize:!0,autoHide:!0},menu:{$extend:"dropdown",triggers:["hover","focus"],popperTriggers:["hover","focus"],delay:{show:0,hide:400}}}};function Vt(e,t){let s=et.themes[e]||{},n;do n=s[t],typeof n>"u"?s.$extend?s=et.themes[s.$extend]||{}:(s=null,n=et[t]):s=null;while(s);return n}function xp(e){const t=[e];let s=et.themes[e]||{};do s.$extend&&!s.$resetCss?(t.push(s.$extend),s=et.themes[s.$extend]||{}):s=null;while(s);return t.map(n=>`v-popper--theme-${n}`)}function bo(e){const t=[e];let s=et.themes[e]||{};do s.$extend?(t.push(s.$extend),s=et.themes[s.$extend]||{}):s=null;while(s);return t}let At=!1;if(typeof window<"u"){At=!1;try{const e=Object.defineProperty({},"passive",{get(){At=!0}});window.addEventListener("test",null,e)}catch{}}let Wl=!1;typeof window<"u"&&typeof navigator<"u"&&(Wl=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream);const Ul=["auto","top","bottom","left","right"].reduce((e,t)=>e.concat([t,`${t}-start`,`${t}-end`]),[]),yo={hover:"mouseenter",focus:"focus",click:"click",touch:"touchstart"},vo={hover:"mouseleave",focus:"blur",click:"click",touch:"touchend"};function wo(e,t){const s=e.indexOf(t);s!==-1&&e.splice(s,1)}function Cn(){return new Promise(e=>requestAnimationFrame(()=>{requestAnimationFrame(e)}))}const Re=[];let Tt=null;const xo={};function _o(e){let t=xo[e];return t||(t=xo[e]=[]),t}let Jn=function(){};typeof window<"u"&&(Jn=window.Element);function V(e){return function(t){return Vt(t.theme,e)}}const Sn="__floating-vue__popper";var Yl=()=>Q({name:"VPopper",provide(){return{[Sn]:{parentPopper:this}}},inject:{[Sn]:{default:null}},props:{theme:{type:String,required:!0},targetNodes:{type:Function,required:!0},referenceNode:{type:Function,required:!0},popperNode:{type:Function,required:!0},shown:{type:Boolean,default:!1},showGroup:{type:String,default:null},ariaId:{default:null},disabled:{type:Boolean,default:V("disabled")},positioningDisabled:{type:Boolean,default:V("positioningDisabled")},placement:{type:String,default:V("placement"),validator:e=>Ul.includes(e)},delay:{type:[String,Number,Object],default:V("delay")},distance:{type:[Number,String],default:V("distance")},skidding:{type:[Number,String],default:V("skidding")},triggers:{type:Array,default:V("triggers")},showTriggers:{type:[Array,Function],default:V("showTriggers")},hideTriggers:{type:[Array,Function],default:V("hideTriggers")},popperTriggers:{type:Array,default:V("popperTriggers")},popperShowTriggers:{type:[Array,Function],default:V("popperShowTriggers")},popperHideTriggers:{type:[Array,Function],default:V("popperHideTriggers")},container:{type:[String,Object,Jn,Boolean],default:V("container")},boundary:{type:[String,Jn],default:V("boundary")},strategy:{type:String,validator:e=>["absolute","fixed"].includes(e),default:V("strategy")},autoHide:{type:[Boolean,Function],default:V("autoHide")},handleResize:{type:Boolean,default:V("handleResize")},instantMove:{type:Boolean,default:V("instantMove")},eagerMount:{type:Boolean,default:V("eagerMount")},popperClass:{type:[String,Array,Object],default:V("popperClass")},computeTransformOrigin:{type:Boolean,default:V("computeTransformOrigin")},autoMinSize:{type:Boolean,default:V("autoMinSize")},autoSize:{type:[Boolean,String],default:V("autoSize")},autoMaxSize:{type:Boolean,default:V("autoMaxSize")},autoBoundaryMaxSize:{type:Boolean,default:V("autoBoundaryMaxSize")},preventOverflow:{type:Boolean,default:V("preventOverflow")},overflowPadding:{type:[Number,String],default:V("overflowPadding")},arrowPadding:{type:[Number,String],default:V("arrowPadding")},arrowOverflow:{type:Boolean,default:V("arrowOverflow")},flip:{type:Boolean,default:V("flip")},shift:{type:Boolean,default:V("shift")},shiftCrossAxis:{type:Boolean,default:V("shiftCrossAxis")}},emits:["show","hide","update:shown","apply-show","apply-hide","close-group","close-directive","auto-hide","resize","dispose"],data(){return{isShown:!1,isMounted:!1,skipTransition:!1,classes:{showFrom:!1,showTo:!1,hideFrom:!1,hideTo:!0},result:{x:0,y:0,placement:"",strategy:this.strategy,arrow:{x:0,y:0,centerOffset:0},transformOrigin:null},shownChildren:new Set,lastAutoHide:!0}},computed:{popperId(){return this.ariaId!=null?this.ariaId:this.randomId},shouldMountContent(){return this.eagerMount||this.isMounted},slotData(){return{popperId:this.popperId,isShown:this.isShown,shouldMountContent:this.shouldMountContent,skipTransition:this.skipTransition,autoHide:typeof this.autoHide=="function"?this.lastAutoHide:this.autoHide,show:this.show,hide:this.hide,handleResize:this.handleResize,onResize:this.onResize,classes:xs(Ze({},this.classes),{popperClass:this.popperClass}),result:this.positioningDisabled?null:this.result,attrs:this.$attrs}},parentPopper(){var e;return(e=this[Sn])==null?void 0:e.parentPopper},hasPopperShowTriggerHover(){var e,t;return((e=this.popperTriggers)==null?void 0:e.includes("hover"))||((t=this.popperShowTriggers)==null?void 0:t.includes("hover"))}},watch:Ze(Ze({shown:"$_autoShowHide",disabled(e){e?this.dispose():this.init()},async container(){this.isShown&&(this.$_ensureTeleport(),await this.$_computePosition())}},["triggers","positioningDisabled"].reduce((e,t)=>(e[t]="$_refreshListeners",e),{})),["placement","distance","skidding","boundary","strategy","overflowPadding","arrowPadding","preventOverflow","shift","shiftCrossAxis","flip"].reduce((e,t)=>(e[t]="$_computePosition",e),{})),created(){this.$_isDisposed=!0,this.randomId=`popper_${[Math.random(),Date.now()].map(e=>e.toString(36).substring(2,10)).join("_")}`,this.autoMinSize&&console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'),this.autoMaxSize&&console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.")},mounted(){this.init(),this.$_detachPopperNode()},activated(){this.$_autoShowHide()},deactivated(){this.hide()},beforeUnmount(){this.dispose()},methods:{show({event:e=null,skipDelay:t=!1,force:s=!1}={}){var n,i;((n=this.parentPopper)==null?void 0:n.lockedChild)&&this.parentPopper.lockedChild!==this||(this.$_pendingHide=!1,(s||!this.disabled)&&(((i=this.parentPopper)==null?void 0:i.lockedChild)===this&&(this.parentPopper.lockedChild=null),this.$_scheduleShow(e,t),this.$emit("show"),this.$_showFrameLocked=!0,requestAnimationFrame(()=>{this.$_showFrameLocked=!1})),this.$emit("update:shown",!0))},hide({event:e=null,skipDelay:t=!1}={}){var s;if(!this.$_hideInProgress){if(this.shownChildren.size>0){this.$_pendingHide=!0;return}if(this.hasPopperShowTriggerHover&&this.$_isAimingPopper()){this.parentPopper&&(this.parentPopper.lockedChild=this,clearTimeout(this.parentPopper.lockedChildTimer),this.parentPopper.lockedChildTimer=setTimeout(()=>{this.parentPopper.lockedChild===this&&(this.parentPopper.lockedChild.hide({skipDelay:t}),this.parentPopper.lockedChild=null)},1e3));return}((s=this.parentPopper)==null?void 0:s.lockedChild)===this&&(this.parentPopper.lockedChild=null),this.$_pendingHide=!1,this.$_scheduleHide(e,t),this.$emit("hide"),this.$emit("update:shown",!1)}},init(){!this.$_isDisposed||(this.$_isDisposed=!1,this.isMounted=!1,this.$_events=[],this.$_preventShow=!1,this.$_referenceNode=this.referenceNode(),this.$_targetNodes=this.targetNodes().filter(e=>e.nodeType===e.ELEMENT_NODE),this.$_popperNode=this.popperNode(),this.$_innerNode=this.$_popperNode.querySelector(".v-popper__inner"),this.$_arrowNode=this.$_popperNode.querySelector(".v-popper__arrow-container"),this.$_swapTargetAttrs("title","data-original-title"),this.$_detachPopperNode(),this.triggers.length&&this.$_addEventListeners(),this.shown&&this.show())},dispose(){this.$_isDisposed||(this.$_isDisposed=!0,this.$_removeEventListeners(),this.hide({skipDelay:!0}),this.$_detachPopperNode(),this.isMounted=!1,this.isShown=!1,this.$_updateParentShownChildren(!1),this.$_swapTargetAttrs("data-original-title","title"),this.$emit("dispose"))},async onResize(){this.isShown&&(await this.$_computePosition(),this.$emit("resize"))},async $_computePosition(){var e;if(this.$_isDisposed||this.positioningDisabled)return;const t={strategy:this.strategy,middleware:[]};(this.distance||this.skidding)&&t.middleware.push(Zc({mainAxis:this.distance,crossAxis:this.skidding}));const s=this.placement.startsWith("auto");if(s?t.middleware.push(Vc({alignment:(e=this.placement.split("-")[1])!=null?e:""})):t.placement=this.placement,this.preventOverflow&&(this.shift&&t.middleware.push(ep({padding:this.overflowPadding,boundary:this.boundary,crossAxis:this.shiftCrossAxis})),!s&&this.flip&&t.middleware.push(Jc({padding:this.overflowPadding,boundary:this.boundary}))),t.middleware.push(Bc({element:this.$_arrowNode,padding:this.arrowPadding})),this.arrowOverflow&&t.middleware.push({name:"arrowOverflow",fn:({placement:i,rects:o,middlewareData:l})=>{let r;const{centerOffset:a}=l.arrow;return i.startsWith("top")||i.startsWith("bottom")?r=Math.abs(a)>o.reference.width/2:r=Math.abs(a)>o.reference.height/2,{data:{overflow:r}}}}),this.autoMinSize||this.autoSize){const i=this.autoSize?this.autoSize:this.autoMinSize?"min":null;t.middleware.push({name:"autoSize",fn:({rects:o,placement:l,middlewareData:r})=>{var a;if((a=r.autoSize)!=null&&a.skip)return{};let p,h;return l.startsWith("top")||l.startsWith("bottom")?p=o.reference.width:h=o.reference.height,this.$_innerNode.style[i==="min"?"minWidth":i==="max"?"maxWidth":"width"]=p!=null?`${p}px`:null,this.$_innerNode.style[i==="min"?"minHeight":i==="max"?"maxHeight":"height"]=h!=null?`${h}px`:null,{data:{skip:!0},reset:{rects:!0}}}})}(this.autoMaxSize||this.autoBoundaryMaxSize)&&(this.$_innerNode.style.maxWidth=null,this.$_innerNode.style.maxHeight=null,t.middleware.push(tp({boundary:this.boundary,padding:this.overflowPadding,apply:({width:i,height:o})=>{this.$_innerNode.style.maxWidth=i!=null?`${i}px`:null,this.$_innerNode.style.maxHeight=o!=null?`${o}px`:null}})));const n=await mp(this.$_referenceNode,this.$_popperNode,t);Object.assign(this.result,{x:n.x,y:n.y,placement:n.placement,strategy:n.strategy,arrow:Ze(Ze({},n.middlewareData.arrow),n.middlewareData.arrowOverflow)})},$_scheduleShow(e=null,t=!1){if(this.$_updateParentShownChildren(!0),this.$_hideInProgress=!1,clearTimeout(this.$_scheduleTimer),Tt&&this.instantMove&&Tt.instantMove&&Tt!==this.parentPopper){Tt.$_applyHide(!0),this.$_applyShow(!0);return}t?this.$_applyShow():this.$_scheduleTimer=setTimeout(this.$_applyShow.bind(this),this.$_computeDelay("show"))},$_scheduleHide(e=null,t=!1){if(this.shownChildren.size>0){this.$_pendingHide=!0;return}this.$_updateParentShownChildren(!1),this.$_hideInProgress=!0,clearTimeout(this.$_scheduleTimer),this.isShown&&(Tt=this),t?this.$_applyHide():this.$_scheduleTimer=setTimeout(this.$_applyHide.bind(this),this.$_computeDelay("hide"))},$_computeDelay(e){const t=this.delay;return parseInt(t&&t[e]||t||0)},async $_applyShow(e=!1){clearTimeout(this.$_disposeTimer),clearTimeout(this.$_scheduleTimer),this.skipTransition=e,!this.isShown&&(this.$_ensureTeleport(),await Cn(),await this.$_computePosition(),await this.$_applyShowEffect(),this.positioningDisabled||this.$_registerEventListeners([...Vs(this.$_referenceNode),...Vs(this.$_popperNode)],"scroll",()=>{this.$_computePosition()}))},async $_applyShowEffect(){if(this.$_hideInProgress)return;if(this.computeTransformOrigin){const t=this.$_referenceNode.getBoundingClientRect(),s=this.$_popperNode.querySelector(".v-popper__wrapper"),n=s.parentNode.getBoundingClientRect(),i=t.x+t.width/2-(n.left+s.offsetLeft),o=t.y+t.height/2-(n.top+s.offsetTop);this.result.transformOrigin=`${i}px ${o}px`}this.isShown=!0,this.$_applyAttrsToTarget({"aria-describedby":this.popperId,"data-popper-shown":""});const e=this.showGroup;if(e){let t;for(let s=0;s<Re.length;s++)t=Re[s],t.showGroup!==e&&(t.hide(),t.$emit("close-group"))}Re.push(this),document.body.classList.add("v-popper--some-open");for(const t of bo(this.theme))_o(t).push(this),document.body.classList.add(`v-popper--some-open--${t}`);this.$emit("apply-show"),this.classes.showFrom=!0,this.classes.showTo=!1,this.classes.hideFrom=!1,this.classes.hideTo=!1,await Cn(),this.classes.showFrom=!1,this.classes.showTo=!0,this.$_popperNode.focus()},async $_applyHide(e=!1){if(this.shownChildren.size>0){this.$_pendingHide=!0,this.$_hideInProgress=!1;return}if(clearTimeout(this.$_scheduleTimer),!this.isShown)return;this.skipTransition=e,wo(Re,this),Re.length===0&&document.body.classList.remove("v-popper--some-open");for(const s of bo(this.theme)){const n=_o(s);wo(n,this),n.length===0&&document.body.classList.remove(`v-popper--some-open--${s}`)}Tt===this&&(Tt=null),this.isShown=!1,this.$_applyAttrsToTarget({"aria-describedby":void 0,"data-popper-shown":void 0}),clearTimeout(this.$_disposeTimer);const t=Vt(this.theme,"disposeTimeout");t!==null&&(this.$_disposeTimer=setTimeout(()=>{this.$_popperNode&&(this.$_detachPopperNode(),this.isMounted=!1)},t)),this.$_removeEventListeners("scroll"),this.$emit("apply-hide"),this.classes.showFrom=!1,this.classes.showTo=!1,this.classes.hideFrom=!0,this.classes.hideTo=!1,await Cn(),this.classes.hideFrom=!1,this.classes.hideTo=!0},$_autoShowHide(){this.shown?this.show():this.hide()},$_ensureTeleport(){if(this.$_isDisposed)return;let e=this.container;if(typeof e=="string"?e=window.document.querySelector(e):e===!1&&(e=this.$_targetNodes[0].parentNode),!e)throw new Error("No container for popover: "+this.container);e.appendChild(this.$_popperNode),this.isMounted=!0},$_addEventListeners(){const e=s=>{this.isShown&&!this.$_hideInProgress||(s.usedByTooltip=!0,!this.$_preventShow&&this.show({event:s}))};this.$_registerTriggerListeners(this.$_targetNodes,yo,this.triggers,this.showTriggers,e),this.$_registerTriggerListeners([this.$_popperNode],yo,this.popperTriggers,this.popperShowTriggers,e);const t=s=>{s.usedByTooltip||this.hide({event:s})};this.$_registerTriggerListeners(this.$_targetNodes,vo,this.triggers,this.hideTriggers,t),this.$_registerTriggerListeners([this.$_popperNode],vo,this.popperTriggers,this.popperHideTriggers,t)},$_registerEventListeners(e,t,s){this.$_events.push({targetNodes:e,eventType:t,handler:s}),e.forEach(n=>n.addEventListener(t,s,At?{passive:!0}:void 0))},$_registerTriggerListeners(e,t,s,n,i){let o=s;n!=null&&(o=typeof n=="function"?n(o):n),o.forEach(l=>{const r=t[l];r&&this.$_registerEventListeners(e,r,i)})},$_removeEventListeners(e){const t=[];this.$_events.forEach(s=>{const{targetNodes:n,eventType:i,handler:o}=s;!e||e===i?n.forEach(l=>l.removeEventListener(i,o)):t.push(s)}),this.$_events=t},$_refreshListeners(){this.$_isDisposed||(this.$_removeEventListeners(),this.$_addEventListeners())},$_handleGlobalClose(e,t=!1){this.$_showFrameLocked||(this.hide({event:e}),e.closePopover?this.$emit("close-directive"):this.$emit("auto-hide"),t&&(this.$_preventShow=!0,setTimeout(()=>{this.$_preventShow=!1},300)))},$_detachPopperNode(){this.$_popperNode.parentNode&&this.$_popperNode.parentNode.removeChild(this.$_popperNode)},$_swapTargetAttrs(e,t){for(const s of this.$_targetNodes){const n=s.getAttribute(e);n&&(s.removeAttribute(e),s.setAttribute(t,n))}},$_applyAttrsToTarget(e){for(const t of this.$_targetNodes)for(const s in e){const n=e[s];n==null?t.removeAttribute(s):t.setAttribute(s,n)}},$_updateParentShownChildren(e){let t=this.parentPopper;for(;t;)e?t.shownChildren.add(this.randomId):(t.shownChildren.delete(this.randomId),t.$_pendingHide&&t.hide()),t=t.parentPopper},$_isAimingPopper(){const e=this.$_referenceNode.getBoundingClientRect();if(cs>=e.left&&cs<=e.right&&ps>=e.top&&ps<=e.bottom){const t=this.$_popperNode.getBoundingClientRect(),s=cs-dt,n=ps-ht,o=t.left+t.width/2-dt+(t.top+t.height/2)-ht+t.width+t.height,l=dt+s*o,r=ht+n*o;return Rs(dt,ht,l,r,t.left,t.top,t.left,t.bottom)||Rs(dt,ht,l,r,t.left,t.top,t.right,t.top)||Rs(dt,ht,l,r,t.right,t.top,t.right,t.bottom)||Rs(dt,ht,l,r,t.left,t.bottom,t.right,t.bottom)}return!1}},render(){return this.$slots.default(this.slotData)}});typeof document<"u"&&typeof window<"u"&&(Wl?(document.addEventListener("touchstart",ko,At?{passive:!0,capture:!0}:!0),document.addEventListener("touchend",kp,At?{passive:!0,capture:!0}:!0)):(window.addEventListener("mousedown",ko,!0),window.addEventListener("click",_p,!0)),window.addEventListener("resize",Cp));function ko(e){for(let t=0;t<Re.length;t++){const s=Re[t];try{const n=s.popperNode();s.$_mouseDownContains=n.contains(e.target)}catch{}}}function _p(e){Kl(e)}function kp(e){Kl(e,!0)}function Kl(e,t=!1){const s={};for(let n=Re.length-1;n>=0;n--){const i=Re[n];try{const o=i.$_containsGlobalTarget=Tp(i,e);i.$_pendingHide=!1,requestAnimationFrame(()=>{if(i.$_pendingHide=!1,!s[i.randomId]&&To(i,o,e)){if(i.$_handleGlobalClose(e,t),!e.closeAllPopover&&e.closePopover&&o){let r=i.parentPopper;for(;r;)s[r.randomId]=!0,r=r.parentPopper;return}let l=i.parentPopper;for(;l&&To(l,l.$_containsGlobalTarget,e);){l.$_handleGlobalClose(e,t);l=l.parentPopper}}})}catch{}}}function Tp(e,t){const s=e.popperNode();return e.$_mouseDownContains||s.contains(t.target)}function To(e,t,s){return s.closeAllPopover||s.closePopover&&t||$p(e,s)&&!t}function $p(e,t){if(typeof e.autoHide=="function"){const s=e.autoHide(t);return e.lastAutoHide=s,s}return e.autoHide}function Cp(e){for(let t=0;t<Re.length;t++)Re[t].$_computePosition(e)}function Xn(){for(let e=0;e<Re.length;e++)Re[e].hide()}let dt=0,ht=0,cs=0,ps=0;typeof window<"u"&&window.addEventListener("mousemove",e=>{dt=cs,ht=ps,cs=e.clientX,ps=e.clientY},At?{passive:!0}:void 0);function Rs(e,t,s,n,i,o,l,r){const a=((l-i)*(t-o)-(r-o)*(e-i))/((r-o)*(s-e)-(l-i)*(n-t)),p=((s-e)*(t-o)-(n-t)*(e-i))/((r-o)*(s-e)-(l-i)*(n-t));return a>=0&&a<=1&&p>=0&&p<=1}var un=(e,t)=>{const s=e.__vccOpts||e;for(const[n,i]of t)s[n]=i;return s};const Sp={extends:Yl()};function Pp(e,t,s,n,i,o){return T(),S("div",wi({ref:"reference",class:"v-popper"},e.$attrs,{class:{"v-popper--shown":e.slotData.isShown}}),[bt(e.$slots,"default",Ho(yi(e.slotData)))],16)}var Lp=un(Sp,[["render",Pp]]);function Ap(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);var s=e.indexOf("Trident/");if(s>0){var n=e.indexOf("rv:");return parseInt(e.substring(n+3,e.indexOf(".",n)),10)}var i=e.indexOf("Edge/");return i>0?parseInt(e.substring(i+5,e.indexOf(".",i)),10):-1}let Os;function Zn(){Zn.init||(Zn.init=!0,Os=Ap()!==-1)}var fn={name:"ResizeObserver",props:{emitOnMount:{type:Boolean,default:!1},ignoreWidth:{type:Boolean,default:!1},ignoreHeight:{type:Boolean,default:!1}},emits:["notify"],mounted(){Zn(),it(()=>{this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitOnMount&&this.emitSize()});const e=document.createElement("object");this._resizeObject=e,e.setAttribute("aria-hidden","true"),e.setAttribute("tabindex",-1),e.onload=this.addResizeHandlers,e.type="text/html",Os&&this.$el.appendChild(e),e.data="about:blank",Os||this.$el.appendChild(e)},beforeUnmount(){this.removeResizeHandlers()},methods:{compareAndNotify(){(!this.ignoreWidth&&this._w!==this.$el.offsetWidth||!this.ignoreHeight&&this._h!==this.$el.offsetHeight)&&(this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitSize())},emitSize(){this.$emit("notify",{width:this._w,height:this._h})},addResizeHandlers(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.compareAndNotify),this.compareAndNotify()},removeResizeHandlers(){this._resizeObject&&this._resizeObject.onload&&(!Os&&this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.removeEventListener("resize",this.compareAndNotify),this.$el.removeChild(this._resizeObject),this._resizeObject.onload=null,this._resizeObject=null)}}};const Ip=ya();He("data-v-b329ee4c");const Rp={class:"resize-observer",tabindex:"-1"};Ne();const Ep=Ip((e,t,s,n,i,o)=>(T(),Ve("div",Rp)));fn.render=Ep;fn.__scopeId="data-v-b329ee4c";fn.__file="src/components/ResizeObserver.vue";var Vl=(e="theme")=>({computed:{themeClass(){return xp(this[e])}}});const Mp=Q({name:"VPopperContent",components:{ResizeObserver:fn},mixins:[Vl()],props:{popperId:String,theme:String,shown:Boolean,mounted:Boolean,skipTransition:Boolean,autoHide:Boolean,handleResize:Boolean,classes:Object,result:Object},emits:["hide","resize"],methods:{toPx(e){return e!=null&&!isNaN(e)?`${e}px`:null}}}),Op=["id","aria-hidden","tabindex","data-popper-placement"],Hp={ref:"inner",class:"v-popper__inner"},Np=g("div",{class:"v-popper__arrow-outer"},null,-1),Fp=g("div",{class:"v-popper__arrow-inner"},null,-1),jp=[Np,Fp];function Dp(e,t,s,n,i,o){const l=ms("ResizeObserver");return T(),S("div",{id:e.popperId,ref:"popover",class:Se(["v-popper__popper",[e.themeClass,e.classes.popperClass,{"v-popper__popper--shown":e.shown,"v-popper__popper--hidden":!e.shown,"v-popper__popper--show-from":e.classes.showFrom,"v-popper__popper--show-to":e.classes.showTo,"v-popper__popper--hide-from":e.classes.hideFrom,"v-popper__popper--hide-to":e.classes.hideTo,"v-popper__popper--skip-transition":e.skipTransition,"v-popper__popper--arrow-overflow":e.result&&e.result.arrow.overflow,"v-popper__popper--no-positioning":!e.result}]]),style:Ye(e.result?{position:e.result.strategy,transform:`translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`}:void 0),"aria-hidden":e.shown?"false":"true",tabindex:e.autoHide?0:void 0,"data-popper-placement":e.result?e.result.placement:void 0,onKeyup:t[2]||(t[2]=Ol(r=>e.autoHide&&e.$emit("hide"),["esc"]))},[g("div",{class:"v-popper__backdrop",onClick:t[0]||(t[0]=r=>e.autoHide&&e.$emit("hide"))}),g("div",{class:"v-popper__wrapper",style:Ye(e.result?{transformOrigin:e.result.transformOrigin}:void 0)},[g("div",Hp,[e.mounted?(T(),S(j,{key:0},[g("div",null,[bt(e.$slots,"default")]),e.handleResize?(T(),Ve(l,{key:0,onNotify:t[1]||(t[1]=r=>e.$emit("resize",r))})):xe("",!0)],64)):xe("",!0)],512),g("div",{ref:"arrow",class:"v-popper__arrow-container",style:Ye(e.result?{left:e.toPx(e.result.arrow.x),top:e.toPx(e.result.arrow.y)}:void 0)},jp,4)],4)],46,Op)}var Gl=un(Mp,[["render",Dp]]),Jl={methods:{show(...e){return this.$refs.popper.show(...e)},hide(...e){return this.$refs.popper.hide(...e)},dispose(...e){return this.$refs.popper.dispose(...e)},onResize(...e){return this.$refs.popper.onResize(...e)}}};const zp=Q({name:"VPopperWrapper",components:{Popper:Lp,PopperContent:Gl},mixins:[Jl,Vl("finalTheme")],props:{theme:{type:String,default:null}},computed:{finalTheme(){var e;return(e=this.theme)!=null?e:this.$options.vPopperTheme}},methods:{getTargetNodes(){return Array.from(this.$refs.popper.$el.children).filter(e=>e!==this.$refs.popperContent.$el)}}});function Bp(e,t,s,n,i,o){const l=ms("PopperContent"),r=ms("Popper");return T(),Ve(r,{ref:"popper",theme:e.finalTheme,"target-nodes":e.getTargetNodes,"reference-node":()=>e.$refs.popper.$el,"popper-node":()=>e.$refs.popperContent.$el,class:Se([e.themeClass])},{default:Pe(({popperId:a,isShown:p,shouldMountContent:h,skipTransition:u,autoHide:m,show:k,hide:H,handleResize:N,onResize:L,classes:I,result:R})=>[bt(e.$slots,"default",{shown:p,show:k,hide:H}),W(l,{ref:"popperContent","popper-id":a,theme:e.finalTheme,shown:p,mounted:h,"skip-transition":u,"auto-hide":m,"handle-resize":N,classes:I,result:R,onHide:H,onResize:L},{default:Pe(()=>[bt(e.$slots,"popper",{shown:p,hide:H})]),_:2},1032,["popper-id","theme","shown","mounted","skip-transition","auto-hide","handle-resize","classes","result","onHide","onResize"])]),_:3},8,["theme","target-nodes","reference-node","popper-node","class"])}var Ti=un(zp,[["render",Bp]]);const $o=Q(xs(Ze({},Ti),{name:"VDropdown",vPopperTheme:"dropdown"})),Co=Q(xs(Ze({},Ti),{name:"VMenu",vPopperTheme:"menu"})),So=Q(xs(Ze({},Ti),{name:"VTooltip",vPopperTheme:"tooltip"})),qp=Q({name:"VTooltipDirective",components:{Popper:Yl(),PopperContent:Gl},mixins:[Jl],inheritAttrs:!1,props:{theme:{type:String,default:"tooltip"},html:{type:Boolean,default:e=>Vt(e.theme,"html")},content:{type:[String,Number,Function],default:null},loadingContent:{type:String,default:e=>Vt(e.theme,"loadingContent")}},data(){return{asyncContent:null}},computed:{isContentAsync(){return typeof this.content=="function"},loading(){return this.isContentAsync&&this.asyncContent==null},finalContent(){return this.isContentAsync?this.loading?this.loadingContent:this.asyncContent:this.content}},watch:{content:{handler(){this.fetchContent(!0)},immediate:!0},async finalContent(){await this.$nextTick(),this.$refs.popper.onResize()}},created(){this.$_fetchId=0},methods:{fetchContent(e){if(typeof this.content=="function"&&this.$_isShown&&(e||!this.$_loading&&this.asyncContent==null)){this.asyncContent=null,this.$_loading=!0;const t=++this.$_fetchId,s=this.content(this);s.then?s.then(n=>this.onResult(t,n)):this.onResult(t,s)}},onResult(e,t){e===this.$_fetchId&&(this.$_loading=!1,this.asyncContent=t)},onShow(){this.$_isShown=!0,this.fetchContent()},onHide(){this.$_isShown=!1}}}),Wp=["innerHTML"],Up=["textContent"];function Yp(e,t,s,n,i,o){const l=ms("PopperContent"),r=ms("Popper");return T(),Ve(r,wi({ref:"popper"},e.$attrs,{theme:e.theme,"popper-node":()=>e.$refs.popperContent.$el,onApplyShow:e.onShow,onApplyHide:e.onHide}),{default:Pe(({popperId:a,isShown:p,shouldMountContent:h,skipTransition:u,autoHide:m,hide:k,handleResize:H,onResize:N,classes:L,result:I})=>[W(l,{ref:"popperContent",class:Se({"v-popper--tooltip-loading":e.loading}),"popper-id":a,theme:e.theme,shown:p,mounted:h,"skip-transition":u,"auto-hide":m,"handle-resize":H,classes:L,result:I,onHide:k,onResize:N},{default:Pe(()=>[e.html?(T(),S("div",{key:0,innerHTML:e.finalContent},null,8,Wp)):(T(),S("div",{key:1,textContent:U(e.finalContent)},null,8,Up))]),_:2},1032,["class","popper-id","theme","shown","mounted","skip-transition","auto-hide","handle-resize","classes","result","onHide","onResize"])]),_:1},16,["theme","popper-node","onApplyShow","onApplyHide"])}var Kp=un(qp,[["render",Yp]]);const Xl="v-popper--has-tooltip";function Vp(e,t){let s=e.placement;if(!s&&t)for(const n of Ul)t[n]&&(s=n);return s||(s=Vt(e.theme||"tooltip","placement")),s}function Zl(e,t,s){let n;const i=typeof t;return i==="string"?n={content:t}:t&&i==="object"?n=t:n={content:!1},n.placement=Vp(n,s),n.targetNodes=()=>[e],n.referenceNode=()=>e,n}let Pn,vs,Gp=0;function Jp(){if(Pn)return;vs=Me([]),Pn=Hl({name:"VTooltipDirectiveApp",setup(){return{directives:vs}},render(){return this.directives.map(t=>hc(Kp,xs(Ze({},t.options),{shown:t.shown||t.options.shown,key:t.id})))},devtools:{hide:!0}});const e=document.createElement("div");document.body.appendChild(e),Pn.mount(e)}function Ql(e,t,s){Jp();const n=Me(Zl(e,t,s)),i=Me(!1),o={id:Gp++,options:n,shown:i};return vs.value.push(o),e.classList&&e.classList.add(Xl),e.$_popper={options:n,item:o,show(){i.value=!0},hide(){i.value=!1}}}function er(e){if(e.$_popper){const t=vs.value.indexOf(e.$_popper.item);t!==-1&&vs.value.splice(t,1),delete e.$_popper,delete e.$_popperOldShown,delete e.$_popperMountTarget}e.classList&&e.classList.remove(Xl)}function Po(e,{value:t,modifiers:s}){const n=Zl(e,t,s);if(!n.content||Vt(n.theme||"tooltip","disabled"))er(e);else{let i;e.$_popper?(i=e.$_popper,i.options.value=n):i=Ql(e,t,s),typeof t.shown<"u"&&t.shown!==e.$_popperOldShown&&(e.$_popperOldShown=t.shown,t.shown?i.show():i.hide())}}var Xp={beforeMount:Po,updated:Po,beforeUnmount(e){er(e)}};function Lo(e){e.addEventListener("click",tr),e.addEventListener("touchstart",sr,At?{passive:!0}:!1)}function Ao(e){e.removeEventListener("click",tr),e.removeEventListener("touchstart",sr),e.removeEventListener("touchend",nr),e.removeEventListener("touchcancel",ir)}function tr(e){const t=e.currentTarget;e.closePopover=!t.$_vclosepopover_touch,e.closeAllPopover=t.$_closePopoverModifiers&&!!t.$_closePopoverModifiers.all}function sr(e){if(e.changedTouches.length===1){const t=e.currentTarget;t.$_vclosepopover_touch=!0;const s=e.changedTouches[0];t.$_vclosepopover_touchPoint=s,t.addEventListener("touchend",nr),t.addEventListener("touchcancel",ir)}}function nr(e){const t=e.currentTarget;if(t.$_vclosepopover_touch=!1,e.changedTouches.length===1){const s=e.changedTouches[0],n=t.$_vclosepopover_touchPoint;e.closePopover=Math.abs(s.screenY-n.screenY)<20&&Math.abs(s.screenX-n.screenX)<20,e.closeAllPopover=t.$_closePopoverModifiers&&!!t.$_closePopoverModifiers.all}}function ir(e){const t=e.currentTarget;t.$_vclosepopover_touch=!1}var Zp={beforeMount(e,{value:t,modifiers:s}){e.$_closePopoverModifiers=s,(typeof t>"u"||t)&&Lo(e)},updated(e,{value:t,oldValue:s,modifiers:n}){e.$_closePopoverModifiers=n,t!==s&&(typeof t>"u"||t?Lo(e):Ao(e))},beforeUnmount(e){Ao(e)}};function Qp(e,t={}){e.$_vTooltipInstalled||(e.$_vTooltipInstalled=!0,ql(et,t),e.directive("tooltip",Xp),e.directive("close-popper",Zp),e.component("v-tooltip",So),e.component("VTooltip",So),e.component("v-dropdown",$o),e.component("VDropdown",$o),e.component("v-menu",Co),e.component("VMenu",Co))}const ed={version:"2.0.0-beta.17",install:Qp,options:et},Ln="html_css_training_progress",td={completed:{},currentChapter:1,currentLevel:0,hasCompleted(e,t){return Array.isArray(this.completed[e])&&this.completed[e].includes(t)},completeLevel(){const e=this.currentChapter,t=this.currentLevel;this.hasCompleted(e,t)||(this.completed.hasOwnProperty(e)||(this.completed[e]=[]),this.completed[e].push(t),this.save())},getPercentCompleted(e){return Array.isArray(this.completed[e])?qs(this.completed[e].length/Qe[e-1].levels.length*100,0,100):0},load(){var e;try{Object.assign(this,JSON.parse((e=localStorage.getItem(Ln))!=null?e:"{}"))}catch{localStorage.removeItem(Ln),this.reset()}},save(){localStorage.setItem(Ln,JSON.stringify(P.progress))},reset(){this.currentChapter=1,this.currentLevel=0,this.completed={},this.save()}};let sd=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,s)=>(s&=63,s<36?t+=s.toString(36):s<62?t+=(s-26).toString(36).toUpperCase():s>62?t+="-":t+="_",t),"");function nd(e){const t=e.contentDocument,s=e.contentWindow;((n,i)=>{const o="div",l=["#c33","#ea4c88","#639","#06c","#690","#fc3","#f90","#963"];function r(R){return l[R%(l.length-1)]}function a(R,E,D,ie,ue,fe,ne,z){const le=t.createElement(o);return le.dataset.faceFor=z,new Map().set("position","absolute").set("transform-origin",["left","top"]).set("background",ne).set("width",`${ie}px`).set("height",`${ue}px`).set("opacity","0.8").set("transform",`translate3d(${R}px, ${E}px, ${D}px) rotateX(270deg) rotateY(${fe}deg)`).forEach((oe,ce)=>le.style[ce]=Array.isArray(oe)?oe.join(" "):oe),le.outerHTML}const p=.001;let h="";function u(R,E,D,ie){const ue=R.childNodes,fe=ue.length;for(let ne=0;ne<fe;ne++){const z=ue[ne];if(z.nodeType===Node.ELEMENT_NODE){const le=sd();z.dataset.uid=le,z.style.overflow="visible",z.style.transformStyle="preserve-3d",z.style.transform=`translateZ(${(n+(fe-ne)*p).toFixed(3)}px)`;let oe=D,ce=ie;z.offsetParent===R&&(oe+=R.offsetLeft,ce+=R.offsetTop),u(z,E+1,oe,ce);const ve=(E+1)*n,me=r(E);h+=a(oe+z.offsetLeft,ce+z.offsetTop,ve,z.offsetWidth,n,0,me,le),h+=a(oe+z.offsetLeft+z.offsetWidth,ce+z.offsetTop,ve,z.offsetHeight,n,270,me,le),h+=a(oe+z.offsetLeft,ce+z.offsetTop+z.offsetHeight,ve,z.offsetWidth,n,0,me,le),h+=a(oe+z.offsetLeft,ce+z.offsetTop,ve,z.offsetHeight,n,270,me,le)}}}const m=t.body;m.style.overflow="visible",m.style.transformStyle="preserve-3d",m.style.perspective=i.toString();const k=R=>(R/2).toFixed(2),H=`${k(s.innerWidth)}px ${k(s.innerHeight)}px`;m.style.perspectiveOrigin=H,m.style.transformOrigin=H,u(m,0,0,0),t.addEventListener("mousemove",R=>{if(!R.ctrlKey){const E=R.clientX/s.innerWidth,D=1-R.clientY/s.innerHeight,ie=120,ue=fe=>((fe-.5)*ie).toFixed(2);m.style.transform=`rotateX(${ue(D)}deg) rotateY(${ue(E)}deg)`}},!0),t.addEventListener("mouseover",R=>{if(R.ctrlKey){const E=R.target,D=E.dataset.uid||E.dataset.faceFor;E.dataset.faceFor&&Array.from(t.querySelectorAll(`[data-uid="${D}"], [data-face-for="${D}"]`)).forEach(ie=>ie.classList.add("hovered"))}}),t.addEventListener("mouseleave",R=>{t.querySelectorAll(".hovered").forEach(E=>E.classList.remove("hovered"))}),t.addEventListener("mouseout",R=>{const E=R.target,D=E.dataset.uid||E.dataset.faceFor;Array.from(t.querySelectorAll(`[data-uid="${D}"], [data-face-for="${D}"]`)).forEach(ie=>ie.classList.remove("hovered"))}),t.addEventListener("click",R=>{var D;let E=R.target;E.nodeName==="A"&&R.preventDefault(),E.dataset.faceFor&&(E=t.querySelector(`[data-uid="${E.dataset.faceFor}"]`)),E&&((D=s.top)==null||D.postMessage({event:"elementClick",tag:E.tagName.toLowerCase(),type:E.getAttribute("type")}))});const N=t.createElement(o);N.style.position="absolute",N.style.transformStyle="preserve-3d";const{marginTop:L,marginLeft:I}=getComputedStyle(m);N.style.top=`-${L}`,N.style.left=`-${I}`,N.innerHTML=h,m.appendChild(N),m.style.transition="transform 400ms ease-in-out",m.style.transform="rotateX(-22.5deg) rotateY(12.5deg)",setTimeout(()=>{m.style.transition=""},400)})(50,5e3)}var Io;const _s=typeof window<"u",id=e=>typeof e=="string",An=()=>{};_s&&((Io=window==null?void 0:window.navigator)==null?void 0:Io.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function od(e){return Er()?(Mr(e),!0):!1}function ld(e){var t;const s=_(e);return(t=s==null?void 0:s.$el)!=null?t:s}const or=_s?window:void 0;_s&&window.document;_s&&window.navigator;_s&&window.location;function lr(...e){let t,s,n,i;if(id(e[0])?([s,n,i]=e,t=or):[t,s,n,i]=e,!t)return An;let o=An;const l=qt(()=>ld(t),a=>{o(),a&&(a.addEventListener(s,n,i),o=()=>{a.removeEventListener(s,n,i),o=An})},{immediate:!0,flush:"post"}),r=()=>{l(),o()};return od(r),r}const rd=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function In(e,t,s={}){const{target:n=or,eventName:i="keydown",passive:o=!1}=s,l=rd(e);return lr(n,i,a=>{l(a)&&t(a)},o)}const Qn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ei="__vueuse_ssr_handlers__";Qn[ei]=Qn[ei]||{};Qn[ei];var Ro;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ro||(Ro={}));const rr=e=>(He("data-v-e7d0c50c"),e=e(),Ne(),e),ad={key:0},cd=Z("Use the "),pd=rr(()=>g("b",null,"3D",-1)),dd=Z(" view and the "),hd=rr(()=>g("b",null,"Ctrl",-1)),ud=Z(" key to select elements in the DOM."),fd=[cd,pd,dd,hd,ud],md=Q({__name:"InteractiveDOM",setup(e){const t=ae(()=>P.level),s=Me(!1),n=Me(null),i=Me(!1);function o(){if(!n.value)return;const l=n.value;s.value===!0&&l.contentWindow?(l.contentWindow.location.reload(),s.value=!1):(nd(l),s.value=!0)}return lr("message",l=>{if(l.data.event==="elementClick"){const r=l.data,a=r.tag,p=P.level;if(a==null||!p.tag)return;$d(r,p)?(i.value=!0,setTimeout(()=>{i.value=!1,Gt()},600)):ys(document.querySelector("iframe"))}}),(l,r)=>(T(),S(j,null,[g("p",{class:"order",style:Ye({opacity:_(t).order&&!i.value?1:0})},U(_(t).order||"\xA0"),5),g("iframe",{src:"demo/chapter1.html",ref_key:"iframe",ref:n,scrolling:"no"},null,512),_(t).order&&_(t).tag?(T(),S("p",ad,fd)):xe("",!0),g("button",{onClick:o,id:"button-3d"},U(s.value?"2D":"3D"),1)],64))}});const de=(e,t)=>{const s=e.__vccOpts||e;for(const[n,i]of t)s[n]=i;return s},gd=de(md,[["__scopeId","data-v-e7d0c50c"]]),bd=e=>(He("data-v-0745dc53"),e=e(),Ne(),e),yd={class:"instructions"},vd=["innerHTML"],wd=bd(()=>g("hr",null,null,-1)),xd={class:"title"},_d=["innerHTML"],kd={class:"actions"},Td=Q({__name:"LevelInstructions",setup(e){const t=ae(()=>P.level);return(s,n)=>(T(),S(j,null,[g("div",yd,[_(Oe).instructions?(T(),S(j,{key:0},[g("div",{innerHTML:_(Oe).instructions},null,8,vd),wd],64)):xe("",!0),g("h3",xd,U(_(t).name),1),g("div",{innerHTML:_(P).level.instructions},null,8,_d)]),g("div",kd,[_(t).skippable?(T(),S("button",{key:0,onClick:n[0]||(n[0]=(...i)=>_(Gt)&&_(Gt)(...i))},"Next")):xe("",!0)])],64))}});const ar=de(Td,[["__scopeId","data-v-0745dc53"]]);function $d(e,t){return(!t.tag||e.tag===t.tag)&&(!t.type||e.type===t.type)}const cr=[{name:"HTML and the DOM",skippable:!0,instructions:`<img src="img/chef.png" style="width: 88px; margin: 0 auto"/>
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

        <h3 class="syntax">&lt;dt&gt;</h3>
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
        `}],Cd={name:"HTML - Semantics",description:"Why semantics matter",intro:`
    <p>HTML is the markup language that describes the <strong>content</strong> of web pages.</p>
    <p>In this chapter, we will look at the different elements available in HTML and why understanding the purpose of each of them is important for you and your visitors.</p>`,levels:cr,leftPanelComponent:gd,rightPanelComponent:ar},P=en({progress:td,level:cr[0],menuOpened:!1});P.progress.load();function $i(){P.menuOpened=!1}function Eo(){confirm("Do you really want to reset your progress ?")&&(P.progress.reset(),Ci(),$i())}function Gt(){P.progress.completeLevel(),It(P.progress.currentChapter,P.progress.currentLevel+1)}function It(e,t){const s=Qe[e-1];t>s.levels.length&&e<Qe.length?(e++,t=0):t<0&&e>1&&(e=Math.max(1,e-1),t=Qe[e-1].levels.length);const n=qs(e,1,Qe.length),i=qs(t,0,Qe[e-1].levels.length);(i!==P.progress.currentLevel||n!==P.progress.currentChapter)&&(P.progress.currentChapter=n,P.progress.currentLevel=i,Xn(),Ci(),$i())}function Ci(){const e=Oe.value,t=e.levels;P.progress.currentLevel=qs(P.progress.currentLevel,0,t.length),P.level=t[P.progress.currentLevel-1],P.progress.save(),e.onLevelStart&&e.onLevelStart(P.level)}function Zt(){const e=document.querySelector(".editor textarea");e instanceof HTMLTextAreaElement&&(e.value="",e.focus())}const Sd={class:"input-header"},Pd={key:0,class:"file-name"},Ld={class:"file-window"},Ad={class:"line-numbers"},Id=g("br",null,null,-1),ti=Q({__name:"EditorPane",props:{title:String,fileName:{type:String,required:!1},lang:String,nbLines:{type:Number,default:20}},setup(e){return(t,s)=>(T(),S("div",{class:Se(["editor-pane",e.lang+"-view"])},[g("div",Sd,[e.fileName?(T(),S("div",Pd,U(e.fileName),1)):xe("",!0),Z(" "+U(e.title),1)]),g("div",Ld,[g("div",Ad,[(T(!0),S(j,null,$e(e.nbLines,n=>(T(),S(j,null,[Z(U(n),1),Id],64))),256))]),bt(t.$slots,"default")])],2))}});const Rd={class:"markup"},pr=Q({__name:"HTMLMarkup",props:{markup:String},setup(e){const t=e,s=Me(null);ml(n),qt(()=>t.markup,n);function n(){var l;const o=document.createElement("div");o.innerHTML=(l=t.markup)!=null?l:"",s.value&&(s.value.innerHTML=i(o,!0).innerHTML)}function i(o,l){if(o instanceof HTMLElement){const r=document.createElement("div"),a=o.tagName.toLowerCase(),p=o.getAttributeNames().map(u=>`${u}="${o.getAttribute(u)}"`).join(" "),h=Array.from(o.childNodes);return h.length>0?(l||(r.textContent=`<${a}${p?" "+p:""}>`),h.forEach(u=>r.appendChild(i(u,!1))),l||r.appendChild(document.createTextNode(`</${a}>`))):r.textContent=`<${a}${p?" "+p:""} />`,r}else{const r=document.createElement("span");return r.textContent=o.textContent,r}}return(o,l)=>(T(),S("div",Rd,[g("div",{ref_key:"container",ref:s},null,512)]))}});const Ed=e=>(He("data-v-790cbad4"),e=e(),Ne(),e),Md=["onKeydown","onKeyup","placeholder"],Od=Ed(()=>g("span",{class:"plus"},"+",-1)),Hd=Q({__name:"Editor",props:{placeholder:String},emits:["input"],setup(e,{emit:t}){const s=()=>i.value?i.value.value:"",n=Me(null),i=Me(null),o=ae(()=>P.level),l=ae(()=>{var p;return{height:((p=P.level.inputLinesNumber)!=null?p:1)*1.5+"em"}});function r(p){var m;const u=s().split(`
`).map(k=>k.trim()).map(k=>Oe.value===hr||k.endsWith(";")?k:k+";");if(u.length>=((m=o.value.inputLinesNumber)!=null?m:1)){p.preventDefault();const k=n.value;k.classList.remove("enterhit"),setTimeout(()=>k.classList.add("enterhit"),0)}i.value&&(i.value.value=u.join(`
`)),t("input",u)}function a(){const p=i.value;p.classList.toggle("input-strobe",p.value.length>0)}return(p,h)=>(T(),S("div",{class:"editor",onClick:h[0]||(h[0]=u=>{var m;return(m=i.value)==null?void 0:m.focus()})},[W(ti,{title:"CSS Editor",fileName:"style.css",lang:"css"},{default:Pe(()=>[bt(p.$slots,"code-before",{},void 0,!0),g("textarea",{id:"editor-input",class:"input-strobe",type:"text",ref_key:"inputElement",ref:i,onKeydown:Ol(r,["enter"]),onKeyup:Bs(a,["prevent"]),placeholder:e.placeholder,style:Ye(_(l))},null,44,Md),Od,g("div",{class:"enter-button",onClick:r,ref_key:"enterButton",ref:n},"enter",512),bt(p.$slots,"code-after",{},void 0,!0)]),_:3}),W(ti,{title:"HTML Viewer",fileName:"table.html",lang:"html"},{default:Pe(()=>[W(pr,{markup:_(o).markup},null,8,["markup"])]),_:1})]))}});const Si=de(Hd,[["__scopeId","data-v-790cbad4"]]),Nd={name:"Table",props:["content","hintContent"]};const dr=e=>(He("data-v-1e2c3b82"),e=e(),Ne(),e),Fd={class:"table-wrapper"},jd={class:"table-surface",ref:"surface"},Dd={class:"table-content"},zd=["innerHTML"],Bd=["innerHTML"],qd={key:2,ref:"board",class:"table"},Wd={class:"table-edge",ref:"edge"},Ud=dr(()=>g("div",{class:"table-leg"},null,-1)),Yd=dr(()=>g("div",{class:"table-leg"},null,-1)),Kd=[Ud,Yd];function Vd(e,t,s,n,i,o){return T(),S("div",Fd,[g("div",jd,null,512),g("div",Dd,[s.hintContent?(T(),S("div",{key:0,class:"hint-content",innerHTML:s.hintContent},null,8,zd)):xe("",!0),s.content?(T(),S("div",{key:1,innerHTML:s.content,ref:"board",class:"table"},null,8,Bd)):(T(),S("div",qd,[bt(e.$slots,"default",{},void 0,!0)],512))]),g("div",Wd,Kd,512)])}const Pi=de(Nd,[["render",Vd],["__scopeId","data-v-1e2c3b82"]]);const Gd={},Jd={id:"correct-animation"};function Xd(e,t){return T(),S("div",Jd," \u2714\uFE0F Correct ")}const mn=de(Gd,[["render",Xd]]),Li=e=>(He("data-v-b1d29135"),e=e(),Ne(),e),Zd={class:"order"},Qd={class:"game-container"},eh={class:"game-wrapper"},th=Li(()=>g("br",null,null,-1)),sh=Z("{"),nh=Li(()=>g("br",null,null,-1)),ih=Z(" /* Styles would go here. */"),oh=Li(()=>g("br",null,null,-1)),lh=Z(" } "),rh=Q({__name:"SelectorGame",setup(e){const t=ae(()=>P.level);function s(i){const o=P.level;Ws();const l=document.querySelector(".table-content"),r=document.querySelector(".game-wrapper");try{l.querySelectorAll(i)}catch{i=""}const a=i?Array.from(l.querySelectorAll(i)):[],p=Array.from(l.querySelectorAll(o.selector));let h=!1;a.length==0&&ys(document.querySelector(".editor")),a.length===p.length&&a.length>0&&(h=n(a,p)),h?(r.classList.add("win"),a.forEach(u=>{u.classList.remove("strobe"),u.classList.add("clean")}),Zt(),setTimeout(function(){r.classList.remove("win"),Gt()},1e3)):(a.forEach(u=>{u.classList.remove("strobe"),ys(u)}),setTimeout(function(){Ws(),p.forEach(u=>{u.classList.add("strobe")})},500))}function n(i,o){return i.length===o.length&&i.every(l=>o.includes(l))}return(i,o)=>(T(),S(j,null,[g("p",Zd,U(_(t).doThis),1),g("div",Qd,[g("div",eh,[W(mn),W(Pi,{content:_(t).markup},null,8,["content"])])]),W(Si,{placeholder:"Type in a CSS selector",onInput:o[0]||(o[0]=l=>s(l[0]))},{"code-after":Pe(()=>[th,sh,nh,ih,oh,lh]),_:1})],64))}});const ah=de(rh,[["__scopeId","data-v-b1d29135"]]),ch={class:"display-help"},ph={class:"title"},dh={key:0,class:"syntax"},hh=["innerHTML"],uh={key:1,class:"examples-title"},fh={class:"examples"},mh=["innerHTML"],gh=Q({__name:"SyntaxLevelInstructions",setup(e){const t=ae(()=>P.level);return(s,n)=>(T(),S("div",ch,[g("h3",ph,U(_(t).helpTitle||_(t).name),1),_(t).syntax?(T(),S("p",dh,[g("pre",null,U(_(t).syntax),1)])):xe("",!0),g("div",{class:"hint",innerHTML:_(t).help},null,8,hh),_(t).examples&&_(t).examples.length>0?(T(),S("h4",uh,"Examples")):xe("",!0),g("div",fh,[(T(!0),S(j,null,$e(_(t).examples,i=>(T(),S("div",{class:"example",key:i,innerHTML:i},null,8,mh))),128))])]))}});const ks=de(gh,[["__scopeId","data-v-0eb22727"]]);function Ts(){Array.from(document.querySelectorAll(".table *")).forEach(t=>{Ql(t,{triggers:["hover"],content:bh(t),delay:0},null),t.addEventListener("mouseover",s=>{s.stopPropagation(),Xn()}),t.addEventListener("mouseenter",s=>{s.stopPropagation(),Xn()})})}function bh(e){const t=e.tagName.toLowerCase(),s=e.getAttribute("class"),n=e.getAttribute("id");return`<${t}${n?` id="${n}"`:""}${s?` class="${s}"`:""}>`}const yh=[{name:"Type Selector",helpTitle:"Select elements by their type",doThis:"Select the plates",selector:"plate",syntax:"tagname",help:"Selects all elements of a type. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",examples:["<strong>div</strong> selects all <tag>div</tag> elements.","<strong>p</strong> selects all <tag>p</tag> elements."],markup:`
<plate></plate>
<plate></plate>
<bento></bento>
<plate></plate>
    `},{name:"Type Selector",doThis:"Select the plates",selector:"plate",syntax:"tagname",helpTitle:"Select elements by their type",help:"Selects all elements of a type. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",examples:["<strong>div</strong> selects all <tag>div</tag> elements.","<strong>p</strong> selects all <tag>p</tag> elements."],markup:`
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
    `}],hr={name:"CSS - Selectors",levels:yh,leftPanelComponent:ah,rightPanelComponent:ks,credits:'Credits: <a href="http://www.twitter.com/flukeout">@flukeout</a> for his work on <a href="https://flukeout.github.io/" target="_blank">CSS diner</a> that served as the foundation for this website',intro:`
    <p>To apply CSS to an element you need to select this element with a <b>selector</b>.</p>
    <p>CSS provides you with a number of different ways to do this, and you can explore them in this chapter.</p>`,onLevelStart(){Zt(),it(()=>Ts())}},vh={class:"customer-wrapper"},wh={class:"customer-speech-bubble"},xh={class:"customer-body"},_h={class:"code"},kh=Q({__name:"Customer",props:{request:String,selector:String,meal:String},setup(e){return(t,s)=>(T(),S("div",vh,[g("div",wh,U(e.request),1),g("div",xh,[g("div",_h,[g("pre",null,U(e.selector)+` {\r
  meal: `+U(e.meal)+`;\r
}`,1)])])]))}});const Th=de(kh,[["__scopeId","data-v-c1c4318a"]]),$h={class:"game-container"},Ch={class:"game-wrapper"},Sh={class:"customers"},Ph={class:"editor"},Lh=Q({__name:"SpecificityGame",setup(e){const t=ae(()=>P.level);function s(r){const a=r.target.closest("plate");a&&i(a)}const n=["sushi","toast","apple","pickle"];function i(r){var h,u;const a=r.firstChild,p=n[n.indexOf((u=(h=a==null?void 0:a.tagName)==null?void 0:h.toLowerCase())!=null?u:"soup")+1]||"sushi";a==null?r.appendChild(document.createElement(p)):r.replaceChild(document.createElement(p),a)}const o=Me(null);function l(){const a=[...o.value.$el.querySelectorAll("plate")].map(p=>p.firstElementChild?p.firstElementChild.tagName.toLowerCase():"");Ih(a)}return(r,a)=>(T(),S("div",$h,[g("div",Ch,[W(mn),W(Pi,{content:_(t).markup,onClick:s,ref_key:"table",ref:o},null,8,["content"]),g("div",{class:"actions"},[g("button",{onClick:l,id:"submit-button"},"Validate")]),g("div",Sh,[(T(!0),S(j,null,$e(_(t).customers,p=>(T(),Ve(Th,Ho(yi(p)),null,16))),256))]),g("div",Ph,[W(ti,{title:"HTML Viewer",fileName:"table.html",lang:"html"},{default:Pe(()=>[W(pr,{markup:_(t).markup},null,8,["markup"])]),_:1})])])]))}});const Ah=de(Lh,[["__scopeId","data-v-ac7b8a67"]]);function Ih(e){const t=P.level,s=document.querySelector(".game-wrapper");Ws();const n=document.querySelectorAll(".table-content plate");e.length===t.solution.length&&t.solution.every((o,l)=>e[l]===o)?(s.classList.add("win"),n.forEach(o=>{o.classList.add("clean")}),setTimeout(function(){s.classList.remove("win"),Gt()},1e3)):e.forEach((o,l)=>{if(t.solution[l]!==o){const r=n[l];ys(r)}})}const Rh=[{name:"ID vs tag",markup:`
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
        `,customers:[{selector:"bento.green *",meal:"pickle",request:"Put pickles in green bentos"},{selector:"#fancy",meal:"apple",request:"Put an apple on the fancy plate"},{selector:"plate:first-child",meal:"toast",request:"Put toasts on the first plate of each bento"},{selector:"plate:not(.square)",meal:"sushi",request:"Put sushis on plates not square"}],instructions:"<p>Combine all what you learned to solve this one!</p>",solution:["apple","sushi","pickle","toast","sushi",""]}],Eh={name:"CSS - Specificity",description:"When two properties override each other, the more specific selector wins",intro:`
    <p>Each selector in CSS has a certain level of specificity. For example, <code>div</code> has a low specificity because it targets any <tag>div</tag> in the document, while <code>#login-box</code> has a higher specificity because it only targets a element with a specific ID.</p>
    <p>The specificity matters when an element matches two selectors or more with conflicting properties assignment. The final property will be the one associated to the selector having the highest specificity.</p>
    <p>In this chapter, we will see how specificity is calculated and how you can use it to properly override styles.</p>`,instructions:`
    <p>Your customers have ordered a meal, but with conflicting instructions. The more specific the request, the higher the priority should be.</p>
    <p>Select the appropriate meal for each customer. You can change the meal by clicking on the plate.</p>
    <p>To help you, here is a <a target="_blank" href="img/specifishity.png">cheat sheet on specificity explained with fish</a>.</p>`,levels:Rh,leftPanelComponent:Ah,rightPanelComponent:ar,onLevelStart(){it(()=>Ts())}};function $s(e){var l,r,a,p,h;const t=P.level;if(!t)return;const s=(l=Oe.value.gameContainerSelector)!=null?l:"",n=new Set([t.selector,...Object.keys((r=t.cssRules)!=null?r:{}),...Object.keys((a=t.cssRulesHidden)!=null?a:{})]);let i="";for(let u of n)i+=`
${s} ${u} {
${[...t.cssRules?(p=t.cssRules[u])!=null?p:[]:[],...t.cssRulesHidden?(h=t.cssRulesHidden[u])!=null?h:[]:[]].map(m=>`  ${m};`).join(`
`)}
}`;e&&e.length>0&&(i+=`
${s} ${t.selector} {
  ${e.join(`
`)}
}`);const o=document.getElementById("css-editor-stylesheet");o.innerHTML=i}function ur(e){const t=P.level;Ws();const s=document.querySelector(".game-wrapper"),n=Array.from(s.querySelectorAll(t.selector));$s(e),Mh(e,t)?(s.classList.add("win"),n.forEach(o=>{o.classList.remove("strobe")}),setTimeout(function(){s.classList.remove("win"),Gt()},1500)):n.forEach(o=>{o.classList.remove("strobe"),ys(document.querySelector(".table-content"))})}function Mo(e){return typeof e!="string"?e:e.replaceAll(/,\s+/g,",").replaceAll(/\s*\/\s*/g,"/").replace(/;$/,"").trim()}function Mh(e,t){if(!t.check)return!0;const s=Object.fromEntries(e.map(n=>[n.split(":")[0],n.split(":")[1]]).map(([n,i])=>[n.trim(),Mo(i)]));return t.check.every(([n,...i])=>{const o=s[n];return i.some(l=>(l=Mo(l),typeof o=="string"&&o===l||typeof l=="function"&&l(o)?!0:(console.log(`Expected ${n} to be ${l}, got ${o}`),!1)))})}const Et=e=>(He("data-v-53f5e1ea"),e=e(),Ne(),e),Oh={class:"order"},Hh={class:"game-container"},Nh=Et(()=>g("br",null,null,-1)),Fh=Et(()=>g("br",null,null,-1)),jh=Z(" }"),Dh=Et(()=>g("br",null,null,-1)),zh=Et(()=>g("br",null,null,-1)),Bh=Et(()=>g("br",null,null,-1)),qh=Et(()=>g("br",null,null,-1)),Wh=Et(()=>g("br",null,null,-1)),Uh=Z("} "),Yh=Q({__name:"LayoutGame",setup(e){const t=ae(()=>P.level),s=ae(()=>{var i;return Object.fromEntries(Object.entries((i=t.value.cssRules)!=null?i:{}).filter(([o])=>o!==t.value.selector))}),n=i=>t.value.cssRules?t.value.cssRules[i]||[]:[];return(i,o)=>(T(),S(j,null,[g("p",Oh,U(_(t).doThis),1),g("div",Hh,[g("div",{class:Se(["game-wrapper",_(t).wrapperClass])},[W(mn),(T(),Ve(Pi,{content:_(t).markup,hintContent:_(t).hintMarkup,key:_(t).name},null,8,["content","hintContent"]))],2)]),W(Si,{placeholder:"Type styles here",onInput:o[0]||(o[0]=l=>_(ur)(l))},{"code-before":Pe(()=>[(T(!0),S(j,null,$e(_(s),(l,r)=>(T(),S(j,{key:"selector_"+r},[Z(U(r)+" {",1),Nh,(T(!0),S(j,null,$e(l,a=>(T(),S(j,{key:r+"_"+a},[Z("\xA0\xA0"+U(a)+";",1),Fh],64))),128)),jh,Dh,zh],64))),128)),Z(" "+U(_(t).selector)+" {",1),Bh,(T(!0),S(j,null,$e(n(_(t).selector),l=>(T(),S(j,{key:_(t).selector+"_"+l},[Z("\xA0\xA0"+U(l)+";",1),qh],64))),128))]),"code-after":Pe(()=>[Wh,Uh]),_:1})],64))}});const Ai=de(Yh,[["__scopeId","data-v-53f5e1ea"]]),Kh=[{name:"Inline display",doThis:"Set the display mode of apples to inline",selector:"apple",cssRulesHidden:{".table-content":["width: 800px","min-height: 360px"]},cssRules:{apple:["display: block"]},wrapperClass:"inline-layout",syntax:"display: inline",help:`<p>The <code>display</code> property does two things. The first thing it does is determine if the box it is applied to acts as <b>inline</b> or <b>block</b>. The second is to determine how the element's children should behave.</p>
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
    `,check:[["vertical-align","middle"]]}],Vh={name:"CSS - Inline & Block Layout",description:"Basic display modes of HTML content",levels:Kh,leftPanelComponent:Ai,rightPanelComponent:ks,intro:"<p>Let's learn the different ways to position elements in CSS !</p>",onLevelStart(){it(()=>{Ts(),Zt(),$s()})}},Gh=[{name:"Flex display",doThis:"Put the sushis on the plates",selector:"bento",wrapperClass:"flex-game",cssRules:{},syntax:"display: flex;",help:`<p>Flex layout lets you control the sizing and positioning of its direct child elements, that we will refer to as <b>items</b>. By default, flex layout has this behavior:
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
    </div>`,check:[["justify-content",e=>e==="flex-end"||e==="right"||e==="end"]]},{name:"Flex: justify-content 2/4",doThis:"Put the sushis on the plates",selector:"bento",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:"justify-content: <value>;",help:`<p><code>justify-content</code> let you choose how items should be spread on the main axis (the horizontal axis by default in English language)</p>
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
    </div>`,check:[["align-items","flex-end"]]},{name:"Flex align-items 2/3",doThis:"Put the sushis on the plates",selector:"bento",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:`justify-content: <value>;
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
    </div>`,inputLinesNumber:2,check:[["justify-content","space-between"],["align-items","flex-end"]]},{name:"Flex direction 1/5",doThis:"Put the sushis on the plates according to their color",selector:"bento",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:"flex-direction: <value>;",help:`<p><code>flex-direction</code> let you change the main axis of the flex layout, and its direction (left to right by default in English language)</p>
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
    </div>`,check:[["flex-direction","row-reverse"],["justify-content","flex-end"]]},{name:"Flex direction 4/5",doThis:"Put the sushis on the plates according to their color",selector:"bento",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:`flex-direction
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
    </div>`,check:[["flex-direction","row-reverse"],["justify-content","center"],["align-items","flex-end"]]},{name:"Flex order 1/2",doThis:"Put the sushis on the plates according to their color",selector:"sushi.egg",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:"order: <number>",help:`<p>You can change the order of distribution of items in a flex layout by specifying the <code>order</code> property on a direct child element.</p>
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
    </div>`,check:[["align-self","flex-end"]]},{name:"Flex: self align and order",doThis:"Put the sushis on the plates according to their color",selector:"sushi.salmon",wrapperClass:"flex-game",cssRules:{bento:["display: flex","justify-content: space-around"]},syntax:`align-self: <value>;
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
    </div>`,inputLinesNumber:2,check:[["flex-wrap","wrap"],["align-content","flex-start"]]},{name:"Flex: align-content 2/2",doThis:"Put the sushis on the plates according to their color",selector:"bento",wrapperClass:"flex-game",cssRules:{bento:["display: flex","flex-wrap: wrap"]},syntax:`align-content: <value>
flex-direction: <dir>`,help:`<p>When items are wrapped on multiple lines, the alignment of the lignes relatively to the flex container can be controlled with the <code>align-content</code> property. It takes the following values:</p>
    <ul>
    <li><code>flex-start</code> : lines are stacked at the start of the cross axis.</li>
    <li><code>flex-end</code>: lines are stacked at the end of the cross axis.</li>
    <li><code>center</code> : lines are centered in the container.
    <li><code>space-between</code> : lines are displayed with equal space between them.
    <li><code>space-around</code> : lines are displayed with equal space between and around them.
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
    </div>`,inputLinesNumber:2,check:[["flex-wrap","wrap"],["flex-direction","column-reverse"]]},{name:"Flex: Final challenge",doThis:"Put the sushis on the plates according to their color",selector:"bento",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:`justify-content: <value>
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
    </div>`,inputLinesNumber:4,check:[["flex-wrap","wrap"],["flex-direction","column"],["justify-content","center"],["align-content","space-evenly"]]}],Jh={name:"CSS - Flex Layout",description:"One-directional content flow",levels:Gh,leftPanelComponent:Ai,rightPanelComponent:ks,credits:'Credits: <a href="https://github.com/thomaspark">Thomas Park</a> for its inspiring <a target="_blank" href="https://flexboxfroggy.com/">Flexbox Froggy</a> game.',intro:`<p>Let's learn the different ways to position elements in CSS !</p>
  <p><code>flex</code> is another display mode for elements that is more powerful than <b>block</b>. Flex is used to specify <b>how the children of an element should occupy the space </b> they have in that element.</p>
    <p>Flex layouts should be used when you want to distribute elements along one axis, be it horizontal or vertical.</p>`,onLevelStart(){it(()=>{Ts(),Zt(),$s()})}},Xh=[{name:"Grid display",doThis:"Distribute the food in the correct areas of the bento",selector:"bento",wrapperClass:"grid-game",cssRules:{},syntax:"display: grid;",help:`<p>Grid layout lets you control the sizing and positioning of its <b>direct child elements</b>, that we will refer to as <b>items</b>. By default, grid elements have this behavior:
    <ul>
    <li>Items are placed in rows by default</li>
    <li>Rows evenly distribute the height of the container</li>
    <li>Items span the full width of the grid container</li>
    </ul></p>`,markup:`
    <bento style="width: 700px; height: 360px">
      <div class="tile rice"></div>
      <div class="tile broccoli"></div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid-template-rows: repeat(3, 1fr)">
      <div title="rice"></div>
      <div title="broccoli"></div>
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
      <div class="tile broccoli"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid-template-columns: 20% 60% 20%">
      <div style="--section-color: rgba(255,255,255,0.5)" title="rice (20% width)"></div>
      <div style="--section-color: rgba(0,0,0,0.5)" title="sushis (60% width)"></div>
      <div style="--section-color: rgba(0,255,0,0.5)" title="broccoli (20% width)"></div>
    </div>`,examples:["<code>grid-template-columns: 300px 300px;</code> defines a 2-column layout with each column being 300px wide"],check:[["grid-template-columns","20% 60% 20%"]]},{name:"Grid: Fixed template rows",doThis:"Distribute the food in the correct areas of the bento",selector:"bento",wrapperClass:"grid-game",cssRules:{bento:["display: grid"]},syntax:`grid-template-rows:
  <dim1> <dim2> <dim3...>;`,help:`<p>The <code>grid-template-rows</code> let you specify the number and the size of <b>rows</b> in your grid layout. It takes a value the list of dimensions of each column from top to bottom, separated with white spaces.</p>
    <p>The <code>fr</code> unit (free remaining) is a dimension used to specify a <b>fraction of the remaining space</b>.</p>`,markup:`
    <bento style="width: 700px; height: 360px">
      <div class="sushis">
        <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      </div>
      <div class="tile rice"></div>
      <div class="tile broccoli"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid-template-rows: 80px 2fr 1fr">
      <div style="--section-color: rgba(0,0,0,0.5)" title="sushis (80px height)"></div>
      <div style="--section-color: rgba(255,255,255,0.5)" title="rice (2/3 of remaining space)"></div>
      <div style="--section-color: rgba(0,255,0,0.5)" title="broccoli (1/3 of remaining space)"></div>
    </div>`,examples:["<code>grid-template-rows: 2fr 1fr 1fr</code> defines a 3-rows layout with the first row being twice as wide as the other rows"],check:[["grid-template-rows","80px 2fr 1fr"]]},{name:"Grid: Fixed template cols + rows",doThis:"Distribute the food in the correct areas of the bento",selector:"bento",wrapperClass:"grid-game",cssRules:{bento:["display: grid"]},syntax:`grid-template-rows
grid-template-columns`,help:`<p>By combining <code>grid-template-rows</code> and <code>grid-template-columns</code>, you can start describing a 2-dimensions layout.</p>
    <p>The items will be spread from left to right, then from top to bottom ; following the same logic than the inline content flow for the current language.</p>`,markup:`
    <bento style="width: 700px; height: 360px">
      <div class="tile rice"></div>
      <div class="tile broccoli"></div>
      <div class="sushis">
        <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      </div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid-template-rows: 1fr 100px; grid-template-columns: 2fr 1fr;">
      <div style="--section-color: rgba(255,255,255,0.5)" title="rice"></div>
      <div style="--section-color: rgba(0,255,0,0.5)" title="broccoli (1/3 wide)"></div>
      <div style="--section-color: rgba(0,0,0,0.5)" title="sushis (100px high)"></div>
      <div style="--section-color: rgba(255,255,0,0.5)" title="fruits"></div>
    </div>`,inputLinesNumber:2,check:[["grid-template-rows","1fr 100px"],["grid-template-columns","2fr 1fr"]]},{name:"Grid template: grid shorthand",doThis:"Distribute the food in the correct areas of the bento",selector:"bento",wrapperClass:"grid-game",cssRules:{bento:["display: grid"]},syntax:"grid: <rows> / <columns>",help:`<p>The <code>grid</code> property is a <b>shorthand</b> to specify both the columns and the rows in a single instruction. The rows and columns dimensions must be separated with a <code>/</code> character.</p>
    <p>Try to reproduce the same layout than the previous exercise with a single instruction.</p>`,markup:`
    <bento style="width: 700px; height: 360px">
      <div class="tile rice"></div>
      <div class="tile broccoli"></div>
      <div class="sushis">
        <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      </div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid: 1fr 100px / 2fr 1fr;">
      <div style="--section-color: rgba(255,255,255,0.5)" title="rice"></div>
      <div style="--section-color: rgba(0,255,0,0.5)" title="broccoli (1/3 wide)"></div>
      <div style="--section-color: rgba(0,0,0,0.5)" title="sushis (100px high)"></div>
      <div style="--section-color: rgba(255,255,0,0.5)" title="fruits"></div>
    </div>`,inputLinesNumber:1,check:[["grid","1fr 100px / 2fr 1fr"]]},{name:"Grid gaps",doThis:"Distribute the food in the correct areas of the bento",selector:"bento",wrapperClass:"grid-game",cssRules:{bento:["display: grid","grid: 1fr 100px / 2fr 1fr;"]},syntax:`gap: <dimension>
gap: <row> <col>`,help:`<p>To add space between the items of the grid, use the <code>gap</code> property. You can pass two values if you want to specify different gaps between rows and columns.</p>
    <p style="font-weight: bold">Try to add 50px gaps between the zones of the bento.</p>`,markup:`
    <bento style="width: 700px; height: 360px">
      <div class="tile rice"></div>
      <div class="tile broccoli"></div>
      <div class="sushis">
        <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      </div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid: 1fr 100px / 2fr 1fr; gap: 50px;">
      <div style="--section-color: rgba(255,255,255,0.5)" title="rice"></div>
      <div style="--section-color: rgba(0,255,0,0.5)" title="broccoli"></div>
      <div style="--section-color: rgba(0,0,0,0.5)" title="sushis"></div>
      <div style="--section-color: rgba(255,255,0,0.5)" title="fruits"></div>
    </div>`,inputLinesNumber:1,check:[["grid","1fr 100px / 2fr 1fr"]]},{name:"Grid template: repeat()",doThis:"Distribute the sushis in all the areas of the bento",selector:"bento",wrapperClass:"grid-game",cssRules:{bento:["display: grid"]},syntax:"repeat(<number>, <dim>)",help:`<p>The <code>repeat()</code> keyword is a utility to repeat the same dimension a certain number of times in a grid template declaration.</p>
    <p style="font-weight: bold">Try to use it to declare a 4x3 grid layout with equal size areas.</p>`,examples:["<code>grid-template-rows: repeat(5, 50px)</code> is equivalent to <code>grid-template-rows: 50px 50px 50px 50px 50px</code>"],markup:`
    <bento style="width: 700px; height: 360px">
      <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid: repeat(3, 1fr) / repeat(4, 1fr);">
      <div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>
    </div>`,inputLinesNumber:1,check:[["grid","repeat(3, 1fr) / repeat(4, 1fr)"]]},{name:"Grid: items alignment",doThis:"Center the sushis in the areas of the bento",selector:"bento",wrapperClass:"grid-game",cssRules:{bento:["display: grid","grid: repeat(3, 1fr) / repeat(4, 1fr)"]},syntax:`justify-items: <value>
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
      <div class="tile broccoli"></div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid: 150px 1fr / 1fr 1fr 1fr">
      <div></div><div></div><div></div>
      <div></div><div></div><div></div>
    </div>`,inputLinesNumber:2,check:[["justify-self","stretch"],["align-self","stretch"]]},{name:"grid-column-start",doThis:"Distribute the food in the correct areas of the bento",selector:".rice",wrapperClass:"grid-game",cssRules:{bento:["display: grid","grid: repeat(3, 1fr) / repeat(4, 1fr)"]},syntax:"grid-column-start: <num>",help:`<p><code>grid-column-start</code> specifies the position of the starting edge of the item within the grid columns. If required, it can add a span or a new line.</p>
    <p>The first column starts at 1. If a negative integer is given, it counts in reverse, starting from the end edge.</p>`,markup:`
    <bento style="width: 700px; height: 360px">      
      <div class="tile rice"></div>
      <div class="tile broccoli"></div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid: repeat(3, 1fr) / repeat(4, 1fr)">
      <div title="rice" style="grid-column-start: 2"></div>      
      <div title="broccoli"></div>
      <div title="fruits"></div>
    </div>`,check:[["grid-column-start","2"]]},{name:"grid-column-end",doThis:"Distribute the food in the correct areas of the bento",selector:".rice",wrapperClass:"grid-game",cssRules:{bento:["display: grid","grid: repeat(3, 1fr) / repeat(4, 1fr)"],".rice":["grid-column-start: 2"]},syntax:"grid-column-end: <num>",help:`<p><code>grid-column-end</code> specifies the position of the end edge of the item within the grid columns.</p>
    <p>The left edge of the first column has number 1, so the item will actually stop at column <code>num - 1</code>.</p>`,markup:`
    <bento style="width: 700px; height: 360px">      
      <div class="tile rice"></div>
      <div class="tile broccoli"></div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid: repeat(3, 1fr) / repeat(4, 1fr)">
      <div title="rice" style="grid-column-start: 2; grid-column-end: 4"></div>      
      <div title="broccoli"></div>
      <div title="fruits"></div>
    </div>`,check:[["grid-column-end","4"]]},{name:"grid-row-start",doThis:"Distribute the food in the correct areas of the bento",selector:".broccoli",wrapperClass:"grid-game",cssRules:{bento:["display: grid","grid: repeat(3, 1fr) / repeat(4, 1fr)"],".rice":["grid-column-start: 2","grid-column-end: 4"]},syntax:"grid-row-start: <num>",help:`<p><code>grid-row-start</code> specifies the position of the start edge of the item within the grid rows.</p>
    <p>Note how the fruits tile fills the remaining space available on first row.</p>`,markup:`
    <bento style="width: 700px; height: 360px">      
      <div class="tile rice"></div>
      <div class="tile broccoli"></div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid: repeat(3, 1fr) / repeat(4, 1fr)">
      <div title="rice" style="grid-column-start: 2; grid-column-end: 4"></div>      
      <div title="broccoli" style="grid-row-start: 2"></div>
      <div title="fruits"></div>
    </div>`,check:[["grid-row-start","2"]]},{name:"grid-row-end",doThis:"Distribute the food in the correct areas of the bento",selector:".broccoli",wrapperClass:"grid-game",cssRules:{bento:["display: grid","grid: repeat(3, 1fr) / repeat(4, 1fr)"],".rice":["grid-column-start: 2","grid-column-end: 4"],".broccoli":["grid-row-start: 2"]},syntax:"grid-row-end: <num>",help:"<p><code>grid-row-end</code> specifies the position of the end edge of the item within the grid rows.</p>",markup:`
    <bento style="width: 700px; height: 360px">      
      <div class="tile rice"></div>
      <div class="tile broccoli"></div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid: repeat(3, 1fr) / repeat(4, 1fr)">
      <div title="rice" style="grid-column-start: 2; grid-column-end: 4"></div>      
      <div title="broccoli" style="grid-row-start: 2; grid-row-end: 4"></div>
      <div title="fruits"></div>
    </div>`,check:[["grid-row-end","4"]]},{name:"grid-row & grid-column",doThis:"Distribute the food in the correct areas of the bento",selector:".rice",wrapperClass:"grid-game",cssRules:{bento:["display: grid","grid: repeat(3, 1fr) / repeat(4, 1fr)"]},syntax:`grid-row: <start>/<end>
grid-column: <start>/<end>`,help:`<p><code>grid-row</code> and <code>grid-column</code> are shorthands to specify both the start and end positions within the grid rows and columns, separated with <code>/</code>.</p>
    <p>Items can be spread on multiple rows and columns at the same time. The following items will try to occupy the free spaces left behind.</p>`,markup:`
    <bento style="width: 700px; height: 360px">      
      <div class="tile rice"></div>
      <div class="tile broccoli"></div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid: repeat(3, 1fr) / repeat(4, 1fr)">
      <div title="rice" style="grid-column: 3/5; grid-row: 1/3;"></div>      
      <div title="broccoli"></div>
      <div title="fruits"></div>
    </div>`,inputLinesNumber:2,check:[["grid-row","1/3"],["grid-column","3/5","3/-1"]]},{name:"grid-area",doThis:"Distribute the food in the correct areas of the bento",selector:".broccoli",wrapperClass:"grid-game",cssRules:{bento:["display: grid","grid: repeat(3, 1fr) / repeat(4, 1fr)"],".rice":["grid-column: 3/5","grid-row: 1/3"]},syntax:`grid-area: <row-start>
         / <col-start>
         / <row-end>
         / <col-end>`,help:`<p><code>grid-area</code> is even shorter because it let you specify the start and end positions for both row and column in a single instruction.</p>
    <p>The values are passed in this order: y1/x1/y2/x2 ; separated with character <code>/</code></p>`,markup:`
    <bento style="width: 700px; height: 360px">      
      <div class="tile rice"></div>
      <div class="tile broccoli"></div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style="grid: repeat(3, 1fr) / repeat(4, 1fr)">
      <div title="rice" style="grid-column: 3/5; grid-row: 1/3;"></div>      
      <div title="broccoli" style="grid-area: 3/2/4/4;"></div>
      <div title="fruits"></div>
    </div>`,check:[["grid-area"," 3/2/4/4"]]},{name:"Grid: Named Areas",doThis:"Distribute the food in the correct areas of the bento",selector:"bento",wrapperClass:"grid-game",cssRules:{bento:["display: grid","grid: repeat(2, 1fr) / repeat(3, 1fr)"],".sushis":["grid-area: starter"],".rice":["grid-area: rice"],".broccoli":["grid-area: veggie"],".fruits":["grid-area: dessert"]},syntax:`grid-template-areas:   
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
      <div class="tile broccoli"></div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style='grid: repeat(2, 1fr) / repeat(3, 1fr); grid-template-areas: "starter starter dessert" "rice veggie dessert"'>
      <div title="sushis" style="grid-area: starter"></div>      
      <div title="rice" style="grid-area: rice"></div>
      <div title="broccoli" style="grid-area: veggie"></div>
      <div title="fruits" style="grid-area: dessert"></div>
    </div>`,check:[["grid-template-areas",'"starter starter dessert" "rice veggie dessert"']]},{name:"Implicit Grid",doThis:"Distribute the food in the correct areas of the bento",selector:"bento",wrapperClass:"grid-game",cssRules:{bento:["display: grid","grid-auto-flow: column","grid-template-rows: 100%"]},syntax:`grid-auto-rows: <dims>...
grid-auto-columns: <dims>...`,examples:["<code>grid-auto-rows: minmax(100px, auto);</code> will automatically create rows at a minimum size of 100px.","<code>grid-auto-columns: 100px 200px</code> will automatically create columns alternating between 100px and 200px."],help:`<p>When you are not explicitely declaring a grid with <code>grid-template</code> properties, or when the explicit grid is full, the items are placed in new tracks, automatically created. These tracks are referred to as the <strong>implicit grid</strong>.</p>
    <p>You can change the sizing of these implicit new tracks with the <code>grid-auto-rows</code> and <code>grid-auto-columns</code> property.</p>`,markup:`
    <bento style="width: 700px; height: 360px">      
      <div class="tile rice"></div>
      <div class="tile broccoli"></div>
      <div class="tile rice"></div>
      <div class="tile broccoli"></div>
      <div class="tile rice"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style='grid-auto-flow: column; grid-template-rows: 100%; grid-auto-columns: 100px 1fr'>
      <div title="rice (100px wide)"></div>
      <div title="broccoli"></div>
      <div title="rice (100px wide)"></div>
      <div title="broccoli"></div>
      <div title="rice (100px wide)"></div>
    </div>`,check:[["grid-auto-columns",e=>e==="100px 1fr"||e==="100px auto"||e==="100px 1fr 100px 1fr 100px"]]},{name:"Implicit Grid - auto-fit / auto-fill",doThis:"Distribute the food in the correct areas of the bento",selector:"bento",wrapperClass:"grid-game",cssRules:{bento:["display: grid"]},syntax:`repeat(
  auto-fit,
  minmax(100px, 1fr)
)`,examples:["<code>grid-template-columns: repeat(auto-fit, minmax(50px, 100px))</code> will make as many columns as needed between 50px and 100px wide, to fill the entire grid container."],help:`<p>Use the <code>auto-fit</code> keyword in a <code>repeat()</code> instruction to automatically pick the right number of columns or rows that can fit the grid depending on your content.</p>
    <p>This is especially useful for automatic responsive sizing of your grid, when combining it with variable sizing like <code>minmax(200px, 1fr)</code>.</p>
    <p><code>auto-fill</code> is a small variation of <code>auto-fit</code> that allows to create empty columns to fill the first row if needed. There is no difference between them once the first track is filled.</p>
    <p style="font-weight: bold">Find the right declaration for <code>grid-template-columns</code> to fill the whole bento, but each area not more than 200px wide.</p>
    `,markup:`
    <bento style="width: 700px; height: 360px">      
      <div class="tile rice"></div>
      <div class="tile broccoli"></div>
      <div class="tile fruits"></div>      
      <div class="tile broccoli"></div>
      <div class="tile fruits"></div>
      <div class="tile rice"></div>
      <div class="tile rice"></div>
      <div class="tile broccoli"></div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style='grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))'>      
      <div title="rice (>=200px)"></div>
      <div title="broccoli (>=200px)"></div>
      <div title="fruits (>=200px)"></div>      
      <div title="broccoli (>=200px)"></div>
      <div title="fruits (>=200px)"></div>
      <div title="rice (>=200px)"></div>
      <div title="rice (>=200px)"></div>
      <div title="broccoli (>=200px)"></div>
      <div title="fruits (>=200px)"></div>
    </div>`,check:[["grid-template-columns","repeat(auto-fit, minmax(200px, 1fr))"]]},{name:"Implicit Grid - Dense Packing",doThis:"Distribute the food in the correct areas of the bento",selector:"bento",wrapperClass:"grid-game",cssRules:{bento:["display: grid"],".rice":["grid-column: auto / span 2"],".broccoli":["grid-row: auto / span 2"]},syntax:"grid-auto-flow: row dense",help:`<p>The default behavior of grid layout is to place items along the rows while always progressing forward. The items will be placed according to the order they are in the source, or any modification with the <code>order</code> property. If there is not enough space to fit an item, grid will leave a gap and move to the next track.</p>
    <p>An auto-placed layout with some items spanning multiple tracks may result in a grid with some unfilled cells. You can change the automatic flow to make fill these gaps. This may mean that the display becomes disconnected from the logical order. This is called <b>dense packing</b>.</p>
    `,markup:`
    <bento style="width: 700px; height: 360px">      
      <div class="tile broccoli"></div>
      <div class="tile fruits"></div>
      <div class="tile rice"></div>
      <div class="tile fruits"></div>
    </bento>
    `,hintMarkup:`<div class="hint-wrapper" style='grid-auto-flow: row dense;'>      
      <div title="broccoli" style="grid-row: auto / span 2"></div>  
      <div title="fruits"></div>
      <div title="rice" style="grid-column: auto / span 2"></div>
      <div title="fruits"></div>
    </div>`,check:[["grid-auto-flow",e=>e==="dense"||e==="row dense"]]}],Zh={name:"CSS - Grid Layout",description:"Powerful 2D layouts",levels:Xh,leftPanelComponent:Ai,rightPanelComponent:ks,credits:"Credits: ",intro:`<p>Let's learn the different ways to position elements in CSS !</p>
  <p>While flexbox is a great layout tool for <b>one-directional</b> flow, we still need a solution for complex 2D placement.</p>
  <p>CSS Grid is this solution. It consists of around 24 new CSS properties that provides a powerful way to create two-dimensional layouts. Let's dig in !</p>`,onLevelStart(){it(()=>{Ts(),Zt(),$s()})}},rt=e=>(He("data-v-16f0ef40"),e=e(),Ne(),e),Qh={class:"order"},eu={class:"game-container"},tu=["innerHTML"],su={class:"expected-result"},nu=rt(()=>g("p",null,"Expected result:",-1)),iu=["src"],ou=["href"],lu=["href"],ru=rt(()=>g("br",null,null,-1)),au={key:0},cu=rt(()=>g("br",null,null,-1)),pu=rt(()=>g("br",null,null,-1)),du=Z(" }"),hu=rt(()=>g("br",null,null,-1)),uu=rt(()=>g("br",null,null,-1)),fu=rt(()=>g("br",null,null,-1)),mu=rt(()=>g("br",null,null,-1)),gu=rt(()=>g("br",null,null,-1)),bu=Z("} "),yu=Q({__name:"ReproduceGame",setup(e){const t=ae(()=>P.level),s=ae(()=>{var l;return Object.fromEntries(Object.entries((l=t.value.cssRules)!=null?l:{}).filter(([r])=>r!==t.value.selector))}),n=ae(()=>t.value.cssImports),i=ae(()=>t.value.cssImportsHidden),o=Me("");return qt(()=>t,()=>{o.value="",it(()=>{var l;o.value=(l=t.value.markup)!=null?l:""})}),(l,r)=>(T(),S(j,null,[g("p",Qh,U(_(t).doThis),1),g("div",eu,[g("div",{class:Se(["game-wrapper",_(t).wrapperClass])},[W(mn),g("div",{class:"menu-wrapper",innerHTML:_(t).markup},null,8,tu),g("div",su,[nu,g("img",{src:_(t).expectedScreenshot},null,8,iu)])],2)]),W(Si,{placeholder:"Type styles here",onInput:r[0]||(r[0]=a=>_(ur)(a))},{"code-before":Pe(()=>{var a,p;return[(T(!0),S(j,null,$e(_(i),h=>(T(),S("link",{rel:"stylesheet",href:h},null,8,ou))),256)),(T(!0),S(j,null,$e(_(n),h=>(T(),S("link",{rel:"stylesheet",href:h},null,8,lu))),256)),(T(!0),S(j,null,$e(_(n),h=>(T(),S(j,null,[Z('@import "'+U(h)+'";',1),ru],64))),256)),_(n)?(T(),S("br",au)):xe("",!0),(T(!0),S(j,null,$e(_(s),(h,u)=>(T(),S(j,{key:"selector_"+u},[Z(U(u)+" {",1),cu,(T(!0),S(j,null,$e(h,m=>(T(),S(j,{key:u+"_"+m},[Z("\xA0\xA0"+U(m)+";",1),pu],64))),128)),du,hu,uu],64))),128)),Z(" "+U(_(t).selector)+" {",1),fu,(T(!0),S(j,null,$e((p=((a=_(t).cssRules)!=null?a:{})[_(t).selector])!=null?p:[],h=>(T(),S(j,{key:_(t).selector+"_"+h},[Z("\xA0\xA0"+U(h)+";",1),mu],64))),128))]}),"code-after":Pe(()=>[gu,bu]),_:1})],64))}});const vu=de(yu,[["__scopeId","data-v-16f0ef40"]]),ge=`
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
`,wu=[{name:"Font Families",selector:"h1",cssImports:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRules:{},syntax:'font-family: "MyFontName"',help:`<p>Use the <code>font-family</code> property to change the typeface of the text in an element.</p>
    <p>This property accepts a comma-separated list of font names as quoted strings. You can also use generic font names like <code>serif</code>, <code>sans-serif</code> or <code>monospace</code> to display generic fonts specific to the user operating system.</p>
    <p>When passing several values, the first font that can be resolved by the browser will be used. Therefore, it's a good idea to put a generic font keyword after the specific font you want to use.</p>`,examples:[`<code>font-family: "Roboto", sans-serif;</code> will try to display Roboto font, or will fallback to the default sans-serif font of user's operating system`],markup:ge,doThis:'Set h1 font to "Reggae One", or serif by default',expectedScreenshot:"img/reproduce/7-1.jpg",check:[["font-family",'"Reggae One", serif']]},{name:"Text Color",selector:"p.information",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"]},syntax:'color: <color>;"',help:"<p>Text color is changed with the <code>color</code> property</p>",markup:ge,doThis:"Change information paragraph color to gray",expectedScreenshot:"img/reproduce/7-2.jpg",check:[["color","gray"]]},{name:"Italic / Oblique",selector:"p.information",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"]},cssRules:{"p.information":["color: gray"]},syntax:`font-style: normal;
font-style: italic;
font-style: oblique;`,help:`<p>Fonts can have 3 styles: <code>normal</code>, <code>italic</code> or <code>oblique</code></p>
    <p>For fonts that support it, <code>oblique</code> shows a slanted version of the regular typeface without turning it into a cursive version like <code>italic</code> does.</p>`,markup:ge,doThis:"Put the information paragraph in italic",expectedScreenshot:"img/reproduce/7-3.jpg",check:[["font-style","italic"]]},{name:"Font Weight",selector:".price",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],"p.information":["font-style: italic","color: gray"]},cssRules:{},syntax:`font-weight: normal;
font-weight: bold;
font-weight: 100;`,help:`<p>If the font supports several weights, you can change it with <code>font-weight</code> property.</p>
    <p>Most fonts only supports a normal weight (400) and a bold weight (700). But you can try other values in the 100s like <code>100</code>, <code>200</code>, <code>300</code>... up to <code>900</code>.</p>
    <p><a href="https://web.dev/learn/css/typography/#variable-fonts" target="_blank" rel="external">Variable fonts</a> are a specific kind of dynamic font that can handle any value between 0 and 900.</p>`,markup:ge,doThis:"Put the prices in bold",expectedScreenshot:"img/reproduce/7-4.jpg",check:[["font-weight","bold"]]},{name:"Font Size",selector:"h2",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],"p.information":["font-style: italic","color: gray"],".price":["font-weight: bold"]},cssRules:{},syntax:"font-size: <dim>;",help:`<p>This property accepts all kinds of values: absolute dimensions like <code>24px</code>, relative dimensions like <code>120%</code> or <code>2.5em</code>, or keywords like <code>smaller</code>, <code>medium</code>, <code>large</code>, <code>x-large</code>...</p>
    <p>The relative values are always relative to the parent element's <code>font-size</code>, as this property is inherited by children elements.</p>`,markup:ge,doThis:"Set font size of h2 to 36px",expectedScreenshot:"img/reproduce/7-5.jpg",check:[["font-size","36px"]]},{name:"Text Casing",selector:"h2",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px"],"p.information":["font-style: italic","color: gray"],".price":["font-weight: bold"]},cssRules:{},syntax:`text-transform: lowercase;
text-transform: uppercase;
text-transform: capitalize;`,help:`<p>Use the <code>text-transform</code> property to change the text casing of an element.</p>
    <p>Note that the casing in the HTML code will be the one that will be indexed by search engines, so use this property only if it is a visual change specific to this web page.</p>`,markup:ge,doThis:"Put the h2 in uppercase",expectedScreenshot:"img/reproduce/7-6.jpg",check:[["text-transform","uppercase"]]},{name:"Font Variants",selector:".dish-name",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px","text-transform: uppercase"],"p.information":["font-style: italic","color: gray"],".price":["font-weight: bold"]},cssRules:{},syntax:"font-variant: normal;",help:`<p>Some fonts can be configured in several ways, for example to use alternate glyphs for capital letters, use traditional or simplified glyphs in East Asian languages, or display ligatures between some characters.</p>
    <p>These variants can be activated with the <code>font-variant</code> property, which takes a comma-separated list of variants to be used.</p>
    <p>You can find the complete list of variants on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant" target="_blank" rel="external">MDN</a>.</p>`,markup:ge,doThis:"Use the small-caps variant for dish names",expectedScreenshot:"img/reproduce/7-7.jpg",check:[["font-variant","small-caps"]]},{name:"List styles",selector:"li",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px","text-transform: uppercase"],"p.information":["font-style: italic","color: gray"],".dish-name":["font-variant: small-caps"],".price":["font-weight: bold"]},cssRules:{},syntax:`list-style: none;
list-style: square;
list-style: "\u2714";
list-style: url('star.svg');`,help:`<p>Most browsers add small discs \u25CF in front of each list item (<code>&lt;li&gt;</code> elements). This character can be changed or removed with <code>list-style</code> property.</p>
    <p>You can even add custom images or define your own counters.</p>`,markup:ge,doThis:'Use "upper-roman" style for the dishes list',expectedScreenshot:"img/reproduce/7-8.jpg",check:[["list-style","upper-roman"]]},{name:"Line Height",selector:"li",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px","text-transform: uppercase"],"p.information":["font-style: italic","color: gray"],".dish-name":["font-variant: small-caps"],".price":["font-weight: bold"]},cssRules:{li:["list-style: upper-roman"]},syntax:`line-height: <dim>;
line-height: 1.5;
line-height: 150%;
line-height: normal;`,help:"<p><code>line-height</code> controls the space between each line of text in an element. This does not apply to space between paragraphs.</p>",markup:ge,doThis:"Set line height between dishes to 200%",expectedScreenshot:"img/reproduce/7-9.jpg",check:[["line-height",e=>e=="200%"||e=="2"]]},{name:"Letter Spacing",selector:"h2",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px","text-transform: uppercase"],"p.information":["font-style: italic","color: gray"],".dish-name":["font-variant: small-caps"],".price":["font-weight: bold"],li:["list-style: upper-roman","line-height: 200%"]},syntax:`letter-spacing: 150%;
letter-spacing: -2px;
letter-spacing: normal;`,help:`<p>Add or reduce space between letters with <code>letter-spacing</code>.</p>
    <p>This property controls the space between each line of text in an element. This does not apply to space between paragraphs.</p>`,markup:ge,doThis:"Set letter-spacing for h2 to 1em",expectedScreenshot:"img/reproduce/7-10.jpg",check:[["letter-spacing","1em"]]},{name:"Word Spacing",selector:".dish-info",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px","text-transform: uppercase","letter-spacing: 1em"],"p.information":["font-style: italic","color: gray"],".dish-name":["font-variant: small-caps"],".price":["font-weight: bold"],li:["list-style: upper-roman","line-height: 200%"]},syntax:`word-spacing: <dim>;
word-spacing: normal;`,help:"<p>Add or reduce space between words with <code>word-spacing</code>.</p>",markup:ge,doThis:"Set word-spacing for dish details to 5 pixels",expectedScreenshot:"img/reproduce/7-11.jpg",check:[["word-spacing","5px"]]},{name:"Underlines and overlines",selector:"h2",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px","text-transform: uppercase","letter-spacing: 1em"],"p.information":["font-style: italic","color: gray"],".dish-info":["word-spacing: 5px"],".dish-name":["font-variant: small-caps"],".price":["font-weight: bold"],li:["list-style: upper-roman","line-height: 200%"]},syntax:`text-decoration: underline;
text-decoration: line-through;
text-decoration: overline;`,help:`<p>Use <code>text-decoration</code> to add lines to your text.</p>
    <p>Underlines with <code>underline</code> keyword are most commonly used, but it\u2019s possible to add lines above your text with <code>overline</code> or right through it with <code>line-through</code>. You can also specify multiple keywords for multiple lines.</p>`,markup:ge,doThis:"Add an underline to SUSHIS",expectedScreenshot:"img/reproduce/7-12.jpg",check:[["text-decoration","underline"]]},{name:"Text Alignment",selector:"p.information",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px","text-transform: uppercase","letter-spacing: 1em","text-decoration: underline"],"p.information":["font-style: italic","color: gray"],".dish-info":["word-spacing: 5px"],".dish-name":["font-variant: small-caps"],".price":["font-weight: bold"],li:["list-style: upper-roman","line-height: 200%"]},cssRules:{},syntax:`text-align: left;
text-align: right;
text-align: justify;`,help:`<p>Change the text alignment within a paragraph with the <code>text-align</code> property.</p>
    <p>Values accepted: <code>left</code> (or <code>start</code>), <code>right</code> (or <code>end</code>), <code>justify</code></p>`,markup:ge,doThis:"Align text of information paragraph to the right",expectedScreenshot:"img/reproduce/7-13.jpg",check:[["text-align","right"]]},{name:"Floating elements",selector:".price",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px","text-transform: uppercase","letter-spacing: 1em","text-decoration: underline"],"p.information":["font-style: italic","color: gray","text-align: right"],".dish-info":["word-spacing: 5px"],".dish-name":["font-variant: small-caps"],".price":["font-weight: bold"],li:["list-style: upper-roman","line-height: 200%"]},syntax:"float: <dir>;",help:`<p>Use <code>float</code> property to make an element floating to a specific direction: <code>left</code> or <code>right</code></p>
    <p>Floating elements will no longer follow the classic inline layout. Instead, sibling elements will wrap around it. This is useful for displaying text that matches the outline of an image for example.</p>`,markup:ge,doThis:"Align the prices with the right edge of the menu",expectedScreenshot:"img/reproduce/7-14.jpg",check:[["float","right"]]},{name:"Text Indentation",selector:"li",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px","text-transform: uppercase","letter-spacing: 1em","text-decoration: underline"],"p.information":["font-style: italic","color: gray","text-align: right"],".dish-info":["word-spacing: 5px"],".dish-name":["font-variant: small-caps"],".price":["font-weight: bold","float: right"],li:["list-style: upper-roman","line-height: 200%"]},syntax:"text-indent: <dim>;",help:"<p>Use <code>text-indent</code> to add an indent to your blocks of text. This property takes either a length (for example, 10px, 2em) or a percentage of the containing block\u2019s width.</p>",markup:ge,doThis:"Add a 20px indent and a 50px left margin for each item",expectedScreenshot:"img/reproduce/7-15.jpg",inputLinesNumber:2,check:[["text-indent","20px"],["margin-left","50px"]]},{name:"Text Direction",selector:"h2",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px","text-transform: uppercase","letter-spacing: 1em","text-decoration: underline"],"p.information":["font-style: italic","color: gray","text-align: right"],".dish-info":["word-spacing: 5px"],".dish-name":["font-variant: small-caps"],".price":["font-weight: bold","float: right"],li:["list-style: upper-roman","line-height: 200%","text-indent: 20px","margin-left: 50px"]},syntax:"writing-mode: <mode>;",help:`<p>By default, in Western languages, text is read from left to right. Some languages like Arabic, Hebrew, or Persian are written right to left, and some like Japanese are written vertically.</p>
    <p>You can change the direction of text with <code>writing-mode</code> property. Values accepted are <code>ltr</code> (left to right), <code>rtl</code> (right to left), <code>vertical-lr</code> (top to bottom) and <code>vertical-rl</code> (bottom to top).</p>`,markup:ge,doThis:"Display SUSHIS floating vertically on the left",expectedScreenshot:"img/reproduce/7-16.jpg",inputLinesNumber:2,check:[["writing-mode","vertical-lr"],["float","left"]]},{name:"Text Orientation",selector:"h2",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px","text-transform: uppercase","letter-spacing: 1em","text-decoration: underline"],"p.information":["font-style: italic","color: gray","text-align: right"],".dish-info":["word-spacing: 5px"],".dish-name":["font-variant: small-caps"],".price":["font-weight: bold","float: right"],li:["list-style: upper-roman","line-height: 200%","text-indent: 20px","margin-left: 50px"]},cssRules:{h2:["float: left","writing-mode: vertical-lr"]},syntax:"text-orientation: <mode>;",help:"<p>After changing the direction, you can also change the orientation of individual characters for styling purposes, with the <code>text-orientation</code> property. Values accepted are <code>mixed</code> (default), <code>upright</code> (rotate 90\xB0 characters of vertical text) or <code>sideways</code> (rotate 90\xB0 all characters)</p>",markup:ge,doThis:"Change the characters orientation and line decoration of SUSHIS",expectedScreenshot:"img/reproduce/7-17.jpg",inputLinesNumber:2,check:[["text-orientation","upright"],["text-decoration","overline"]]}],xu={name:"CSS - Typography",description:"The art of displaying text",levels:wu,leftPanelComponent:vu,rightPanelComponent:ks,gameContainerSelector:".menu-wrapper",intro:`<p>Time to work on the restaurant menu !</p>
  <img src="img/menu-logo.png" height="120" style="display:block; height: 120px; margin: 0 auto" />
  <p>Everyone knows that best restaurants all have nice fonts on their menu. Let's see how we can make beautiful text displays with CSS !</p>`,onLevelStart(){it(()=>{Zt(),$s()})}},Qe=[Cd,hr,Eh,Vh,Jh,Zh,xu],Oe=ae(()=>Qe[P.progress.currentChapter-1]),_u={key:0,class:"credits"},ku=["innerHTML"],Tu=Q({__name:"About",setup(e){const t=ae(()=>Oe.value.credits);return(s,n)=>_(t)?(T(),S("div",_u,[g("p",{innerHTML:_(t)},null,8,ku)])):xe("",!0)}});const $u=de(Tu,[["__scopeId","data-v-f5705abe"]]);const Cu={},fr=e=>(He("data-v-a0de842d"),e=e(),Ne(),e),Su=Z(" HTML/CSS Training "),Pu=fr(()=>g("div",{class:"logo"},[g("img",{src:""})],-1)),Lu=fr(()=>g("span",{class:"share-menu"},[Z(" Repository "),g("a",{class:"share-github",type:"github",href:"#"})],-1)),Au=[Su,Pu,Lu];function Iu(e,t){return T(),S("header",null,Au)}const Ru=de(Cu,[["render",Iu],["__scopeId","data-v-a0de842d"]]),Eu=e=>(He("data-v-85a11256"),e=e(),Ne(),e),Mu={class:"chapter-intro"},Ou={class:"chapter-name"},Hu=Eu(()=>g("hr",null,null,-1)),Nu=Q({__name:"ChapterIntro",setup(e){return(t,s)=>(T(),S("div",Mu,[g("h1",null,[Z("Chapter "+U(_(P).progress.currentChapter)+": ",1),g("p",Ou,U(_(Oe).name),1)]),Hu,g("p",null,U(_(Oe).description),1)]))}});const Fu=de(Nu,[["__scopeId","data-v-85a11256"]]),ju={class:"left-col"},Du={class:"left-panel"},zu=Q({__name:"LeftCol",setup(e){const t=ae(()=>P.progress.currentLevel===0?Fu:Oe.value.leftPanelComponent);return(s,n)=>(T(),S("div",ju,[W(Ru),g("div",Du,[(T(),Ve(yl(_(t))))]),W($u)]))}});const Bu=de(zu,[["__scopeId","data-v-a195aa93"]]),qu={class:"chapter-header"},Wu=Q({__name:"ChapterHeader",setup(e){const t=ae(()=>Qe[P.progress.currentChapter-1]);return(s,n)=>(T(),S("h1",qu,"Chapter "+U(_(P).progress.currentChapter)+": "+U(_(t).name),1))}});const Uu=de(Wu,[["__scopeId","data-v-5d0ec60e"]]),Yu={class:"level-text"},Ku={key:0,class:"checkmark"},Vu={class:"level-nav"},Gu={key:1,class:"level-progress"},Ju=Q({__name:"LevelHeader",setup(e){const t=ae(()=>Oe.value.levels);ae(()=>P.progress.hasCompleted(P.progress.currentChapter,P.progress.currentLevel));function s(n="next",i){const o=i.target;o.classList.add("link-jiggle"),setTimeout(()=>{o.classList.remove("link-jiggle")},1e3),n==="next"?It(P.progress.currentChapter,P.progress.currentLevel+1):It(P.progress.currentChapter,P.progress.currentLevel-1)}return(n,i)=>(T(),S(j,null,[_(P).progress.currentLevel>0?(T(),S("h2",{key:0,class:Se(["level-header",{completed:_(P).progress.hasCompleted(_(P).progress.currentChapter,_(P).progress.currentLevel)}])},[g("span",Yu," Level "+U(_(P).progress.currentLevel)+" of "+U(_(t).length),1),_(P).progress.hasCompleted(_(P).progress.currentChapter,_(P).progress.currentLevel)?(T(),S("span",Ku,"\u2714\uFE0F")):xe("",!0)],2)):xe("",!0),g("div",Vu,[g("a",{class:"previous",href:"#",onClick:i[0]||(i[0]=Bs(o=>s("previous",o),["prevent"]))}),g("a",{class:"next",href:"#",onClick:i[1]||(i[1]=Bs(o=>s("next",o),["prevent"]))})]),_(P).progress.currentLevel>0?(T(),S("div",Gu,[g("div",{class:"progress",style:Ye({width:_(P).progress.getPercentCompleted(_(P).progress.currentChapter)+"%"})},null,4)])):xe("",!0)],64))}});const Xu=de(Ju,[["__scopeId","data-v-f56742ce"]]),gn=e=>(He("data-v-a55d0726"),e=e(),Ne(),e),Zu={class:"level-menu"},Qu=gn(()=>g("h2",null,"Choose a level",-1)),ef={class:"chapters-list"},tf={class:"chapters"},sf=["onClick"],nf={class:"chapter-number"},of=gn(()=>g("div",{class:"chapter-toggle"},null,-1)),lf={key:0,class:"levels"},rf=["onClick"],af=gn(()=>g("span",{class:"checkmark"},"\u2714\uFE0F",-1)),cf={class:"level-number"},pf=gn(()=>g("div",{class:"level-menu-toggle"},null,-1)),df=[pf],hf=Q({__name:"LevelMenu",setup(e){const t=Me(P.progress.currentChapter);function s(i){i===t.value?t.value=0:t.value=i}function n(){P.menuOpened=!P.menuOpened}return(i,o)=>(T(),S(j,null,[g("div",Zu,[Qu,g("div",ef,[g("ul",tf,[(T(!0),S(j,null,$e(_(Qe),(l,r)=>(T(),S("li",{key:"chapter_"+l.name},[g("a",{class:Se([{current:r+1===_(P).progress.currentChapter,opened:r+1===t.value},"chapter-name"]),onClick:a=>s(r+1)},[g("span",nf,U(r+1),1),Z(" "+U(l.name)+" ",1),of],10,sf),r+1===t.value?(T(),S("ul",lf,[(T(!0),S(j,null,$e(l.levels,(a,p)=>(T(),S("li",{key:"level_"+a.name},[g("a",{class:Se({current:p+1===_(P).progress.currentLevel,completed:_(P).progress.hasCompleted(r+1,p+1)}),onClick:h=>_(It)(r+1,p+1)},[af,g("span",cf,U(p+1),1),Z(" "+U(a.name),1)],10,rf)]))),128))])):xe("",!0)]))),128))])]),g("a",{class:"reset-progress",href:"#",onClick:o[0]||(o[0]=Bs((...l)=>_(Eo)&&_(Eo)(...l),["prevent"]))},"Reset Progress")]),g("div",{class:"level-menu-toggle-wrapper",onClick:n},df)],64))}});const uf=de(hf,[["__scopeId","data-v-a55d0726"]]),ff=e=>(He("data-v-4fcb6017"),e=e(),Ne(),e),mf=ff(()=>g("hr",null,null,-1)),gf={class:"instructions"},bf=["innerHTML"],yf=Q({__name:"ChapterInstructions",setup(e){function t(){It(P.progress.currentChapter,1)}return(s,n)=>(T(),S(j,null,[mf,g("div",gf,[g("div",{innerHTML:_(Oe).intro},null,8,bf)]),g("div",{class:"actions"},[g("button",{onClick:t},"Next")])],64))}});const vf=de(yf,[["__scopeId","data-v-4fcb6017"]]),wf={class:"doc-wrapper"},xf=Q({__name:"RightCol",setup(e){const t=ae(()=>P.progress.currentLevel===0?vf:Oe.value.rightPanelComponent);return(s,n)=>(T(),S("div",{class:Se(["right-col",{"menu-open":_(P).menuOpened}])},[g("div",wf,[W(Uu),W(Xu),(T(),Ve(yl(_(t))))]),W(uf)],2))}});const _f=de(xf,[["__scopeId","data-v-d862448c"]]),kf=Q({__name:"App",setup(e){return In("Escape",t=>{t.preventDefault(),$i()}),In("PageUp",t=>{t.preventDefault(),It(P.progress.currentChapter,P.progress.currentLevel-1)}),In("PageDown",t=>{t.preventDefault(),It(P.progress.currentChapter,P.progress.currentLevel+1)}),Ci(),(t,s)=>(T(),S(j,null,[W(Bu),W(_f)],64))}});Hl(kf).use(ed).mount("#app");
