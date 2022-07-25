const cr=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}};cr();function Xn(e,t){const s=Object.create(null),n=e.split(",");for(let o=0;o<n.length;o++)s[n[o]]=!0;return t?o=>!!s[o.toLowerCase()]:o=>!!s[o]}const pr="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ur=Xn(pr);function Si(e){return!!e||e===""}function ze(e){if(q(e)){const t={};for(let s=0;s<e.length;s++){const n=e[s],o=ce(n)?fr(n):ze(n);if(o)for(const i in o)t[i]=o[i]}return t}else{if(ce(e))return e;if(pe(e))return e}}const dr=/;(?![^(]*\))/g,hr=/:(.+)/;function fr(e){const t={};return e.split(dr).forEach(s=>{if(s){const n=s.split(hr);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Le(e){let t="";if(ce(e))t=e;else if(q(e))for(let s=0;s<e.length;s++){const n=Le(e[s]);n&&(t+=n+" ")}else if(pe(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}function Pi(e){if(!e)return null;let{class:t,style:s}=e;return t&&!ce(t)&&(e.class=Le(t)),s&&(e.style=ze(s)),e}const J=e=>ce(e)?e:e==null?"":q(e)||pe(e)&&(e.toString===Mi||!B(e.toString))?JSON.stringify(e,Li,2):String(e),Li=(e,t)=>t&&t.__v_isRef?Li(e,t.value):Ft(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[n,o])=>(s[`${n} =>`]=o,s),{})}:Ai(t)?{[`Set(${t.size})`]:[...t.values()]}:pe(t)&&!q(t)&&!Ii(t)?String(t):t,Z={},Rt=[],Ne=()=>{},mr=()=>!1,gr=/^on[^a-z]/,zs=e=>gr.test(e),Gn=e=>e.startsWith("onUpdate:"),_e=Object.assign,Zn=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},br=Object.prototype.hasOwnProperty,z=(e,t)=>br.call(e,t),q=Array.isArray,Ft=e=>Ws(e)==="[object Map]",Ai=e=>Ws(e)==="[object Set]",B=e=>typeof e=="function",ce=e=>typeof e=="string",Qn=e=>typeof e=="symbol",pe=e=>e!==null&&typeof e=="object",Ei=e=>pe(e)&&B(e.then)&&B(e.catch),Mi=Object.prototype.toString,Ws=e=>Mi.call(e),yr=e=>Ws(e).slice(8,-1),Ii=e=>Ws(e)==="[object Object]",eo=e=>ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ss=Xn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Us=e=>{const t=Object.create(null);return s=>t[s]||(t[s]=e(s))},vr=/-(\w)/g,We=Us(e=>e.replace(vr,(t,s)=>s?s.toUpperCase():"")),_r=/\B([A-Z])/g,Lt=Us(e=>e.replace(_r,"-$1").toLowerCase()),Ks=Us(e=>e.charAt(0).toUpperCase()+e.slice(1)),fn=Us(e=>e?`on${Ks(e)}`:""),as=(e,t)=>!Object.is(e,t),mn=(e,t)=>{for(let s=0;s<e.length;s++)e[s](t)},As=(e,t,s)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:s})},wr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ao;const xr=()=>Ao||(Ao=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ce;class $r{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ce&&(this.parent=Ce,this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}run(t){if(this.active){const s=Ce;try{return Ce=this,t()}finally{Ce=s}}}on(){Ce=this}off(){Ce=this.parent}stop(t){if(this.active){let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.scopes)for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);if(this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.active=!1}}}function kr(e,t=Ce){t&&t.active&&t.effects.push(e)}function Tr(){return Ce}function Cr(e){Ce&&Ce.cleanups.push(e)}const to=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Oi=e=>(e.w&ht)>0,Ni=e=>(e.n&ht)>0,Sr=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ht},Pr=e=>{const{deps:t}=e;if(t.length){let s=0;for(let n=0;n<t.length;n++){const o=t[n];Oi(o)&&!Ni(o)?o.delete(e):t[s++]=o,o.w&=~ht,o.n&=~ht}t.length=s}},Cn=new WeakMap;let Zt=0,ht=1;const Sn=30;let Ie;const Tt=Symbol(""),Pn=Symbol("");class so{constructor(t,s=null,n){this.fn=t,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,kr(this,n)}run(){if(!this.active)return this.fn();let t=Ie,s=pt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ie,Ie=this,pt=!0,ht=1<<++Zt,Zt<=Sn?Sr(this):Eo(this),this.fn()}finally{Zt<=Sn&&Pr(this),ht=1<<--Zt,Ie=this.parent,pt=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ie===this?this.deferStop=!0:this.active&&(Eo(this),this.onStop&&this.onStop(),this.active=!1)}}function Eo(e){const{deps:t}=e;if(t.length){for(let s=0;s<t.length;s++)t[s].delete(e);t.length=0}}let pt=!0;const Hi=[];function Kt(){Hi.push(pt),pt=!1}function Yt(){const e=Hi.pop();pt=e===void 0?!0:e}function Ae(e,t,s){if(pt&&Ie){let n=Cn.get(e);n||Cn.set(e,n=new Map);let o=n.get(s);o||n.set(s,o=to()),Ri(o)}}function Ri(e,t){let s=!1;Zt<=Sn?Ni(e)||(e.n|=ht,s=!Oi(e)):s=!e.has(Ie),s&&(e.add(Ie),Ie.deps.push(e))}function Qe(e,t,s,n,o,i){const l=Cn.get(e);if(!l)return;let r=[];if(t==="clear")r=[...l.values()];else if(s==="length"&&q(e))l.forEach((a,u)=>{(u==="length"||u>=n)&&r.push(a)});else switch(s!==void 0&&r.push(l.get(s)),t){case"add":q(e)?eo(s)&&r.push(l.get("length")):(r.push(l.get(Tt)),Ft(e)&&r.push(l.get(Pn)));break;case"delete":q(e)||(r.push(l.get(Tt)),Ft(e)&&r.push(l.get(Pn)));break;case"set":Ft(e)&&r.push(l.get(Tt));break}if(r.length===1)r[0]&&Ln(r[0]);else{const a=[];for(const u of r)u&&a.push(...u);Ln(to(a))}}function Ln(e,t){const s=q(e)?e:[...e];for(const n of s)n.computed&&Mo(n);for(const n of s)n.computed||Mo(n)}function Mo(e,t){(e!==Ie||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Lr=Xn("__proto__,__v_isRef,__isVue"),Fi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Qn)),Ar=no(),Er=no(!1,!0),Mr=no(!0),Io=Ir();function Ir(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...s){const n=V(this);for(let i=0,l=this.length;i<l;i++)Ae(n,"get",i+"");const o=n[t](...s);return o===-1||o===!1?n[t](...s.map(V)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...s){Kt();const n=V(this)[t].apply(this,s);return Yt(),n}}),e}function no(e=!1,t=!1){return function(n,o,i){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&i===(e?t?Jr:zi:t?Bi:qi).get(n))return n;const l=q(n);if(!e&&l&&z(Io,o))return Reflect.get(Io,o,i);const r=Reflect.get(n,o,i);return(Qn(o)?Fi.has(o):Lr(o))||(e||Ae(n,"get",o),t)?r:be(r)?l&&eo(o)?r:r.value:pe(r)?e?Wi(r):Vs(r):r}}const Or=Di(),Nr=Di(!0);function Di(e=!1){return function(s,n,o,i){let l=s[n];if(cs(l)&&be(l)&&!be(o))return!1;if(!e&&!cs(o)&&(An(o)||(o=V(o),l=V(l)),!q(s)&&be(l)&&!be(o)))return l.value=o,!0;const r=q(s)&&eo(n)?Number(n)<s.length:z(s,n),a=Reflect.set(s,n,o,i);return s===V(i)&&(r?as(o,l)&&Qe(s,"set",n,o):Qe(s,"add",n,o)),a}}function Hr(e,t){const s=z(e,t);e[t];const n=Reflect.deleteProperty(e,t);return n&&s&&Qe(e,"delete",t,void 0),n}function Rr(e,t){const s=Reflect.has(e,t);return(!Qn(t)||!Fi.has(t))&&Ae(e,"has",t),s}function Fr(e){return Ae(e,"iterate",q(e)?"length":Tt),Reflect.ownKeys(e)}const ji={get:Ar,set:Or,deleteProperty:Hr,has:Rr,ownKeys:Fr},Dr={get:Mr,set(e,t){return!0},deleteProperty(e,t){return!0}},jr=_e({},ji,{get:Er,set:Nr}),oo=e=>e,Ys=e=>Reflect.getPrototypeOf(e);function ws(e,t,s=!1,n=!1){e=e.__v_raw;const o=V(e),i=V(t);s||(t!==i&&Ae(o,"get",t),Ae(o,"get",i));const{has:l}=Ys(o),r=n?oo:s?ro:ps;if(l.call(o,t))return r(e.get(t));if(l.call(o,i))return r(e.get(i));e!==o&&e.get(t)}function xs(e,t=!1){const s=this.__v_raw,n=V(s),o=V(e);return t||(e!==o&&Ae(n,"has",e),Ae(n,"has",o)),e===o?s.has(e):s.has(e)||s.has(o)}function $s(e,t=!1){return e=e.__v_raw,!t&&Ae(V(e),"iterate",Tt),Reflect.get(e,"size",e)}function Oo(e){e=V(e);const t=V(this);return Ys(t).has.call(t,e)||(t.add(e),Qe(t,"add",e,e)),this}function No(e,t){t=V(t);const s=V(this),{has:n,get:o}=Ys(s);let i=n.call(s,e);i||(e=V(e),i=n.call(s,e));const l=o.call(s,e);return s.set(e,t),i?as(t,l)&&Qe(s,"set",e,t):Qe(s,"add",e,t),this}function Ho(e){const t=V(this),{has:s,get:n}=Ys(t);let o=s.call(t,e);o||(e=V(e),o=s.call(t,e)),n&&n.call(t,e);const i=t.delete(e);return o&&Qe(t,"delete",e,void 0),i}function Ro(){const e=V(this),t=e.size!==0,s=e.clear();return t&&Qe(e,"clear",void 0,void 0),s}function ks(e,t){return function(n,o){const i=this,l=i.__v_raw,r=V(l),a=t?oo:e?ro:ps;return!e&&Ae(r,"iterate",Tt),l.forEach((u,d)=>n.call(o,a(u),a(d),i))}}function Ts(e,t,s){return function(...n){const o=this.__v_raw,i=V(o),l=Ft(i),r=e==="entries"||e===Symbol.iterator&&l,a=e==="keys"&&l,u=o[e](...n),d=s?oo:t?ro:ps;return!t&&Ae(i,"iterate",a?Pn:Tt),{next(){const{value:f,done:m}=u.next();return m?{value:f,done:m}:{value:r?[d(f[0]),d(f[1])]:d(f),done:m}},[Symbol.iterator](){return this}}}}function it(e){return function(...t){return e==="delete"?!1:this}}function qr(){const e={get(i){return ws(this,i)},get size(){return $s(this)},has:xs,add:Oo,set:No,delete:Ho,clear:Ro,forEach:ks(!1,!1)},t={get(i){return ws(this,i,!1,!0)},get size(){return $s(this)},has:xs,add:Oo,set:No,delete:Ho,clear:Ro,forEach:ks(!1,!0)},s={get(i){return ws(this,i,!0)},get size(){return $s(this,!0)},has(i){return xs.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:ks(!0,!1)},n={get(i){return ws(this,i,!0,!0)},get size(){return $s(this,!0)},has(i){return xs.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:ks(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Ts(i,!1,!1),s[i]=Ts(i,!0,!1),t[i]=Ts(i,!1,!0),n[i]=Ts(i,!0,!0)}),[e,s,t,n]}const[Br,zr,Wr,Ur]=qr();function io(e,t){const s=t?e?Ur:Wr:e?zr:Br;return(n,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?n:Reflect.get(z(s,o)&&o in n?s:n,o,i)}const Kr={get:io(!1,!1)},Yr={get:io(!1,!0)},Vr={get:io(!0,!1)},qi=new WeakMap,Bi=new WeakMap,zi=new WeakMap,Jr=new WeakMap;function Xr(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gr(e){return e.__v_skip||!Object.isExtensible(e)?0:Xr(yr(e))}function Vs(e){return cs(e)?e:lo(e,!1,ji,Kr,qi)}function Zr(e){return lo(e,!1,jr,Yr,Bi)}function Wi(e){return lo(e,!0,Dr,Vr,zi)}function lo(e,t,s,n,o){if(!pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=o.get(e);if(i)return i;const l=Gr(e);if(l===0)return e;const r=new Proxy(e,l===2?n:s);return o.set(e,r),r}function Dt(e){return cs(e)?Dt(e.__v_raw):!!(e&&e.__v_isReactive)}function cs(e){return!!(e&&e.__v_isReadonly)}function An(e){return!!(e&&e.__v_isShallow)}function Ui(e){return Dt(e)||cs(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function Ki(e){return As(e,"__v_skip",!0),e}const ps=e=>pe(e)?Vs(e):e,ro=e=>pe(e)?Wi(e):e;function Yi(e){pt&&Ie&&(e=V(e),Ri(e.dep||(e.dep=to())))}function Vi(e,t){e=V(e),e.dep&&Ln(e.dep)}function be(e){return!!(e&&e.__v_isRef===!0)}function He(e){return Qr(e,!1)}function Qr(e,t){return be(e)?e:new ea(e,t)}class ea{constructor(t,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?t:V(t),this._value=s?t:ps(t)}get value(){return Yi(this),this._value}set value(t){t=this.__v_isShallow?t:V(t),as(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:ps(t),Vi(this))}}function k(e){return be(e)?e.value:e}const ta={get:(e,t,s)=>k(Reflect.get(e,t,s)),set:(e,t,s,n)=>{const o=e[t];return be(o)&&!be(s)?(o.value=s,!0):Reflect.set(e,t,s,n)}};function Ji(e){return Dt(e)?e:new Proxy(e,ta)}class sa{constructor(t,s,n,o){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new so(t,()=>{this._dirty||(this._dirty=!0,Vi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=n}get value(){const t=V(this);return Yi(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function na(e,t,s=!1){let n,o;const i=B(e);return i?(n=e,o=Ne):(n=e.get,o=e.set),new sa(n,o,i||!o,s)}function ut(e,t,s,n){let o;try{o=n?e(...n):e()}catch(i){Js(i,t,s)}return o}function Re(e,t,s,n){if(B(e)){const i=ut(e,t,s,n);return i&&Ei(i)&&i.catch(l=>{Js(l,t,s)}),i}const o=[];for(let i=0;i<e.length;i++)o.push(Re(e[i],t,s,n));return o}function Js(e,t,s,n=!0){const o=t?t.vnode:null;if(t){let i=t.parent;const l=t.proxy,r=s;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,l,r)===!1)return}i=i.parent}const a=t.appContext.config.errorHandler;if(a){ut(a,null,10,[e,l,r]);return}}oa(e,s,o,n)}function oa(e,t,s,n=!0){console.error(e)}let Es=!1,En=!1;const Se=[];let Je=0;const es=[];let Qt=null,Ot=0;const ts=[];let lt=null,Nt=0;const Xi=Promise.resolve();let ao=null,Mn=null;function Vt(e){const t=ao||Xi;return e?t.then(this?e.bind(this):e):t}function ia(e){let t=Je+1,s=Se.length;for(;t<s;){const n=t+s>>>1;us(Se[n])<e?t=n+1:s=n}return t}function Gi(e){(!Se.length||!Se.includes(e,Es&&e.allowRecurse?Je+1:Je))&&e!==Mn&&(e.id==null?Se.push(e):Se.splice(ia(e.id),0,e),Zi())}function Zi(){!Es&&!En&&(En=!0,ao=Xi.then(tl))}function la(e){const t=Se.indexOf(e);t>Je&&Se.splice(t,1)}function Qi(e,t,s,n){q(e)?s.push(...e):(!t||!t.includes(e,e.allowRecurse?n+1:n))&&s.push(e),Zi()}function ra(e){Qi(e,Qt,es,Ot)}function aa(e){Qi(e,lt,ts,Nt)}function Xs(e,t=null){if(es.length){for(Mn=t,Qt=[...new Set(es)],es.length=0,Ot=0;Ot<Qt.length;Ot++)Qt[Ot]();Qt=null,Ot=0,Mn=null,Xs(e,t)}}function el(e){if(Xs(),ts.length){const t=[...new Set(ts)];if(ts.length=0,lt){lt.push(...t);return}for(lt=t,lt.sort((s,n)=>us(s)-us(n)),Nt=0;Nt<lt.length;Nt++)lt[Nt]();lt=null,Nt=0}}const us=e=>e.id==null?1/0:e.id;function tl(e){En=!1,Es=!0,Xs(e),Se.sort((s,n)=>us(s)-us(n));const t=Ne;try{for(Je=0;Je<Se.length;Je++){const s=Se[Je];s&&s.active!==!1&&ut(s,null,14)}}finally{Je=0,Se.length=0,el(),Es=!1,ao=null,(Se.length||es.length||ts.length)&&tl(e)}}function ca(e,t,...s){if(e.isUnmounted)return;const n=e.vnode.props||Z;let o=s;const i=t.startsWith("update:"),l=i&&t.slice(7);if(l&&l in n){const d=`${l==="modelValue"?"model":l}Modifiers`,{number:f,trim:m}=n[d]||Z;m&&(o=s.map(x=>x.trim())),f&&(o=s.map(wr))}let r,a=n[r=fn(t)]||n[r=fn(We(t))];!a&&i&&(a=n[r=fn(Lt(t))]),a&&Re(a,e,6,o);const u=n[r+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,Re(u,e,6,o)}}function sl(e,t,s=!1){const n=t.emitsCache,o=n.get(e);if(o!==void 0)return o;const i=e.emits;let l={},r=!1;if(!B(e)){const a=u=>{const d=sl(u,t,!0);d&&(r=!0,_e(l,d))};!s&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!r?(n.set(e,null),null):(q(i)?i.forEach(a=>l[a]=null):_e(l,i),n.set(e,l),l)}function Gs(e,t){return!e||!zs(t)?!1:(t=t.slice(2).replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,Lt(t))||z(e,t))}let $e=null,Zs=null;function Ms(e){const t=$e;return $e=e,Zs=e&&e.type.__scopeId||null,t}function Fe(e){Zs=e}function De(){Zs=null}const pa=e=>Ee;function Ee(e,t=$e,s){if(!t||e._n)return e;const n=(...o)=>{n._d&&Yo(-1);const i=Ms(t),l=e(...o);return Ms(i),n._d&&Yo(1),l};return n._n=!0,n._c=!0,n._d=!0,n}function gn(e){const{type:t,vnode:s,proxy:n,withProxy:o,props:i,propsOptions:[l],slots:r,attrs:a,emit:u,render:d,renderCache:f,data:m,setupState:x,ctx:H,inheritAttrs:R}=e;let P,A;const E=Ms(e);try{if(s.shapeFlag&4){const D=o||n;P=Be(d.call(D,D,f,i,x,m,H)),A=a}else{const D=t;P=Be(D.length>1?D(i,{attrs:a,slots:r,emit:u}):D(i,null)),A=t.props?a:ua(a)}}catch(D){os.length=0,Js(D,e,1),P=Y(mt)}let M=P;if(A&&R!==!1){const D=Object.keys(A),{shapeFlag:ne}=M;D.length&&ne&7&&(l&&D.some(Gn)&&(A=da(A,l)),M=qt(M,A))}return s.dirs&&(M=qt(M),M.dirs=M.dirs?M.dirs.concat(s.dirs):s.dirs),s.transition&&(M.transition=s.transition),P=M,Ms(E),P}const ua=e=>{let t;for(const s in e)(s==="class"||s==="style"||zs(s))&&((t||(t={}))[s]=e[s]);return t},da=(e,t)=>{const s={};for(const n in e)(!Gn(n)||!(n.slice(9)in t))&&(s[n]=e[n]);return s};function ha(e,t,s){const{props:n,children:o,component:i}=e,{props:l,children:r,patchFlag:a}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&a>=0){if(a&1024)return!0;if(a&16)return n?Fo(n,l,u):!!l;if(a&8){const d=t.dynamicProps;for(let f=0;f<d.length;f++){const m=d[f];if(l[m]!==n[m]&&!Gs(u,m))return!0}}}else return(o||r)&&(!r||!r.$stable)?!0:n===l?!1:n?l?Fo(n,l,u):!0:!!l;return!1}function Fo(e,t,s){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let o=0;o<n.length;o++){const i=n[o];if(t[i]!==e[i]&&!Gs(s,i))return!0}return!1}function fa({vnode:e,parent:t},s){for(;t&&t.subTree===e;)(e=t.vnode).el=s,t=t.parent}const ma=e=>e.__isSuspense;function ga(e,t){t&&t.pendingBranch?q(e)?t.effects.push(...e):t.effects.push(e):aa(e)}function ba(e,t){if(me){let s=me.provides;const n=me.parent&&me.parent.provides;n===s&&(s=me.provides=Object.create(n)),s[e]=t}}function bn(e,t,s=!1){const n=me||$e;if(n){const o=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return s&&B(t)?t.call(n.proxy):t}}const Do={};function ss(e,t,s){return nl(e,t,s)}function nl(e,t,{immediate:s,deep:n,flush:o,onTrack:i,onTrigger:l}=Z){const r=me;let a,u=!1,d=!1;if(be(e)?(a=()=>e.value,u=An(e)):Dt(e)?(a=()=>e,n=!0):q(e)?(d=!0,u=e.some(A=>Dt(A)||An(A)),a=()=>e.map(A=>{if(be(A))return A.value;if(Dt(A))return Ht(A);if(B(A))return ut(A,r,2)})):B(e)?t?a=()=>ut(e,r,2):a=()=>{if(!(r&&r.isUnmounted))return f&&f(),Re(e,r,3,[m])}:a=Ne,t&&n){const A=a;a=()=>Ht(A())}let f,m=A=>{f=P.onStop=()=>{ut(A,r,4)}};if(fs)return m=Ne,t?s&&Re(t,r,3,[a(),d?[]:void 0,m]):a(),Ne;let x=d?[]:Do;const H=()=>{if(!!P.active)if(t){const A=P.run();(n||u||(d?A.some((E,M)=>as(E,x[M])):as(A,x)))&&(f&&f(),Re(t,r,3,[A,x===Do?void 0:x,m]),x=A)}else P.run()};H.allowRecurse=!!t;let R;o==="sync"?R=H:o==="post"?R=()=>xe(H,r&&r.suspense):R=()=>ra(H);const P=new so(a,R);return t?s?H():x=P.run():o==="post"?xe(P.run.bind(P),r&&r.suspense):P.run(),()=>{P.stop(),r&&r.scope&&Zn(r.scope.effects,P)}}function ya(e,t,s){const n=this.proxy,o=ce(e)?e.includes(".")?ol(n,e):()=>n[e]:e.bind(n,n);let i;B(t)?i=t:(i=t.handler,s=t);const l=me;Bt(this);const r=nl(o,i.bind(n),s);return l?Bt(l):Ct(),r}function ol(e,t){const s=t.split(".");return()=>{let n=e;for(let o=0;o<s.length&&n;o++)n=n[s[o]];return n}}function Ht(e,t){if(!pe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),be(e))Ht(e.value,t);else if(q(e))for(let s=0;s<e.length;s++)Ht(e[s],t);else if(Ai(e)||Ft(e))e.forEach(s=>{Ht(s,t)});else if(Ii(e))for(const s in e)Ht(e[s],t);return e}function Q(e){return B(e)?{setup:e,name:e.name}:e}const ns=e=>!!e.type.__asyncLoader,il=e=>e.type.__isKeepAlive;function va(e,t){ll(e,"a",t)}function _a(e,t){ll(e,"da",t)}function ll(e,t,s=me){const n=e.__wdc||(e.__wdc=()=>{let o=s;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Qs(t,n,s),s){let o=s.parent;for(;o&&o.parent;)il(o.parent.vnode)&&wa(n,t,s,o),o=o.parent}}function wa(e,t,s,n){const o=Qs(t,e,n,!0);al(()=>{Zn(n[t],o)},s)}function Qs(e,t,s=me,n=!1){if(s){const o=s[e]||(s[e]=[]),i=t.__weh||(t.__weh=(...l)=>{if(s.isUnmounted)return;Kt(),Bt(s);const r=Re(t,s,e,l);return Ct(),Yt(),r});return n?o.unshift(i):o.push(i),i}}const st=e=>(t,s=me)=>(!fs||e==="sp")&&Qs(e,t,s),xa=st("bm"),rl=st("m"),$a=st("bu"),ka=st("u"),Ta=st("bum"),al=st("um"),Ca=st("sp"),Sa=st("rtg"),Pa=st("rtc");function La(e,t=me){Qs("ec",e,t)}function vt(e,t,s,n){const o=e.dirs,i=t&&t.dirs;for(let l=0;l<o.length;l++){const r=o[l];i&&(r.oldValue=i[l].value);let a=r.dir[n];a&&(Kt(),Re(a,s,8,[e.el,r,e,t]),Yt())}}const co="components";function ds(e,t){return ul(co,e,!0,t)||e}const cl=Symbol();function pl(e){return ce(e)?ul(co,e,!1)||e:e||cl}function ul(e,t,s=!0,n=!1){const o=$e||me;if(o){const i=o.type;if(e===co){const r=sc(i,!1);if(r&&(r===t||r===We(t)||r===Ks(We(t))))return i}const l=jo(o[e]||i[e],t)||jo(o.appContext[e],t);return!l&&n?i:l}}function jo(e,t){return e&&(e[t]||e[We(t)]||e[Ks(We(t))])}function dt(e,t,s,n){let o;const i=s&&s[n];if(q(e)||ce(e)){o=new Array(e.length);for(let l=0,r=e.length;l<r;l++)o[l]=t(e[l],l,void 0,i&&i[l])}else if(typeof e=="number"){o=new Array(e);for(let l=0;l<e;l++)o[l]=t(l+1,l,void 0,i&&i[l])}else if(pe(e))if(e[Symbol.iterator])o=Array.from(e,(l,r)=>t(l,r,void 0,i&&i[r]));else{const l=Object.keys(e);o=new Array(l.length);for(let r=0,a=l.length;r<a;r++){const u=l[r];o[r]=t(e[u],u,r,i&&i[r])}}else o=[];return s&&(s[n]=o),o}function ft(e,t,s={},n,o){if($e.isCE||$e.parent&&ns($e.parent)&&$e.parent.isCE)return Y("slot",t==="default"?null:{name:t},n&&n());let i=e[t];i&&i._c&&(i._d=!1),S();const l=i&&dl(i(s)),r=Ke(U,{key:s.key||`_${t}`},l||(n?n():[]),l&&e._===1?64:-2);return!o&&r.scopeId&&(r.slotScopeIds=[r.scopeId+"-s"]),i&&i._c&&(i._d=!0),r}function dl(e){return e.some(t=>Ns(t)?!(t.type===mt||t.type===U&&!dl(t.children)):!0)?e:null}const In=e=>e?kl(e)?go(e)||e.proxy:In(e.parent):null,Is=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>In(e.parent),$root:e=>In(e.root),$emit:e=>e.emit,$options:e=>fl(e),$forceUpdate:e=>e.f||(e.f=()=>Gi(e.update)),$nextTick:e=>e.n||(e.n=Vt.bind(e.proxy)),$watch:e=>ya.bind(e)}),Aa={get({_:e},t){const{ctx:s,setupState:n,data:o,props:i,accessCache:l,type:r,appContext:a}=e;let u;if(t[0]!=="$"){const x=l[t];if(x!==void 0)switch(x){case 1:return n[t];case 2:return o[t];case 4:return s[t];case 3:return i[t]}else{if(n!==Z&&z(n,t))return l[t]=1,n[t];if(o!==Z&&z(o,t))return l[t]=2,o[t];if((u=e.propsOptions[0])&&z(u,t))return l[t]=3,i[t];if(s!==Z&&z(s,t))return l[t]=4,s[t];On&&(l[t]=0)}}const d=Is[t];let f,m;if(d)return t==="$attrs"&&Ae(e,"get",t),d(e);if((f=r.__cssModules)&&(f=f[t]))return f;if(s!==Z&&z(s,t))return l[t]=4,s[t];if(m=a.config.globalProperties,z(m,t))return m[t]},set({_:e},t,s){const{data:n,setupState:o,ctx:i}=e;return o!==Z&&z(o,t)?(o[t]=s,!0):n!==Z&&z(n,t)?(n[t]=s,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:n,appContext:o,propsOptions:i}},l){let r;return!!s[l]||e!==Z&&z(e,l)||t!==Z&&z(t,l)||(r=i[0])&&z(r,l)||z(n,l)||z(Is,l)||z(o.config.globalProperties,l)},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:z(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};let On=!0;function Ea(e){const t=fl(e),s=e.proxy,n=e.ctx;On=!1,t.beforeCreate&&qo(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:l,watch:r,provide:a,inject:u,created:d,beforeMount:f,mounted:m,beforeUpdate:x,updated:H,activated:R,deactivated:P,beforeDestroy:A,beforeUnmount:E,destroyed:M,unmounted:D,render:ne,renderTracked:ue,renderTriggered:he,errorCaptured:se,serverPrefetch:j,expose:ie,inheritAttrs:oe,components:re,directives:ye,filters:fe}=t;if(u&&Ma(u,n,null,e.appContext.config.unwrapInjectedRef),l)for(const le in l){const ee=l[le];B(ee)&&(n[le]=ee.bind(s))}if(o){const le=o.call(s,s);pe(le)&&(e.data=Vs(le))}if(On=!0,i)for(const le in i){const ee=i[le],Ye=B(ee)?ee.bind(s,s):B(ee.get)?ee.get.bind(s,s):Ne,un=!B(ee)&&B(ee.set)?ee.set.bind(s):Ne,Jt=ge({get:Ye,set:un});Object.defineProperty(n,le,{enumerable:!0,configurable:!0,get:()=>Jt.value,set:Et=>Jt.value=Et})}if(r)for(const le in r)hl(r[le],n,s,le);if(a){const le=B(a)?a.call(s):a;Reflect.ownKeys(le).forEach(ee=>{ba(ee,le[ee])})}d&&qo(d,e,"c");function we(le,ee){q(ee)?ee.forEach(Ye=>le(Ye.bind(s))):ee&&le(ee.bind(s))}if(we(xa,f),we(rl,m),we($a,x),we(ka,H),we(va,R),we(_a,P),we(La,se),we(Pa,ue),we(Sa,he),we(Ta,E),we(al,D),we(Ca,j),q(ie))if(ie.length){const le=e.exposed||(e.exposed={});ie.forEach(ee=>{Object.defineProperty(le,ee,{get:()=>s[ee],set:Ye=>s[ee]=Ye})})}else e.exposed||(e.exposed={});ne&&e.render===Ne&&(e.render=ne),oe!=null&&(e.inheritAttrs=oe),re&&(e.components=re),ye&&(e.directives=ye)}function Ma(e,t,s=Ne,n=!1){q(e)&&(e=Nn(e));for(const o in e){const i=e[o];let l;pe(i)?"default"in i?l=bn(i.from||o,i.default,!0):l=bn(i.from||o):l=bn(i),be(l)&&n?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>l.value,set:r=>l.value=r}):t[o]=l}}function qo(e,t,s){Re(q(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,s)}function hl(e,t,s,n){const o=n.includes(".")?ol(s,n):()=>s[n];if(ce(e)){const i=t[e];B(i)&&ss(o,i)}else if(B(e))ss(o,e.bind(s));else if(pe(e))if(q(e))e.forEach(i=>hl(i,t,s,n));else{const i=B(e.handler)?e.handler.bind(s):t[e.handler];B(i)&&ss(o,i,e)}}function fl(e){const t=e.type,{mixins:s,extends:n}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:l}}=e.appContext,r=i.get(t);let a;return r?a=r:!o.length&&!s&&!n?a=t:(a={},o.length&&o.forEach(u=>Os(a,u,l,!0)),Os(a,t,l)),i.set(t,a),a}function Os(e,t,s,n=!1){const{mixins:o,extends:i}=t;i&&Os(e,i,s,!0),o&&o.forEach(l=>Os(e,l,s,!0));for(const l in t)if(!(n&&l==="expose")){const r=Ia[l]||s&&s[l];e[l]=r?r(e[l],t[l]):t[l]}return e}const Ia={data:Bo,props:xt,emits:xt,methods:xt,computed:xt,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:xt,directives:xt,watch:Na,provide:Bo,inject:Oa};function Bo(e,t){return t?e?function(){return _e(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function Oa(e,t){return xt(Nn(e),Nn(t))}function Nn(e){if(q(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function ve(e,t){return e?[...new Set([].concat(e,t))]:t}function xt(e,t){return e?_e(_e(Object.create(null),e),t):t}function Na(e,t){if(!e)return t;if(!t)return e;const s=_e(Object.create(null),e);for(const n in t)s[n]=ve(e[n],t[n]);return s}function Ha(e,t,s,n=!1){const o={},i={};As(i,en,1),e.propsDefaults=Object.create(null),ml(e,t,o,i);for(const l in e.propsOptions[0])l in o||(o[l]=void 0);s?e.props=n?o:Zr(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function Ra(e,t,s,n){const{props:o,attrs:i,vnode:{patchFlag:l}}=e,r=V(o),[a]=e.propsOptions;let u=!1;if((n||l>0)&&!(l&16)){if(l&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let m=d[f];if(Gs(e.emitsOptions,m))continue;const x=t[m];if(a)if(z(i,m))x!==i[m]&&(i[m]=x,u=!0);else{const H=We(m);o[H]=Hn(a,r,H,x,e,!1)}else x!==i[m]&&(i[m]=x,u=!0)}}}else{ml(e,t,o,i)&&(u=!0);let d;for(const f in r)(!t||!z(t,f)&&((d=Lt(f))===f||!z(t,d)))&&(a?s&&(s[f]!==void 0||s[d]!==void 0)&&(o[f]=Hn(a,r,f,void 0,e,!0)):delete o[f]);if(i!==r)for(const f in i)(!t||!z(t,f)&&!0)&&(delete i[f],u=!0)}u&&Qe(e,"set","$attrs")}function ml(e,t,s,n){const[o,i]=e.propsOptions;let l=!1,r;if(t)for(let a in t){if(Ss(a))continue;const u=t[a];let d;o&&z(o,d=We(a))?!i||!i.includes(d)?s[d]=u:(r||(r={}))[d]=u:Gs(e.emitsOptions,a)||(!(a in n)||u!==n[a])&&(n[a]=u,l=!0)}if(i){const a=V(s),u=r||Z;for(let d=0;d<i.length;d++){const f=i[d];s[f]=Hn(o,a,f,u[f],e,!z(u,f))}}return l}function Hn(e,t,s,n,o,i){const l=e[s];if(l!=null){const r=z(l,"default");if(r&&n===void 0){const a=l.default;if(l.type!==Function&&B(a)){const{propsDefaults:u}=o;s in u?n=u[s]:(Bt(o),n=u[s]=a.call(null,t),Ct())}else n=a}l[0]&&(i&&!r?n=!1:l[1]&&(n===""||n===Lt(s))&&(n=!0))}return n}function gl(e,t,s=!1){const n=t.propsCache,o=n.get(e);if(o)return o;const i=e.props,l={},r=[];let a=!1;if(!B(e)){const d=f=>{a=!0;const[m,x]=gl(f,t,!0);_e(l,m),x&&r.push(...x)};!s&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!a)return n.set(e,Rt),Rt;if(q(i))for(let d=0;d<i.length;d++){const f=We(i[d]);zo(f)&&(l[f]=Z)}else if(i)for(const d in i){const f=We(d);if(zo(f)){const m=i[d],x=l[f]=q(m)||B(m)?{type:m}:m;if(x){const H=Ko(Boolean,x.type),R=Ko(String,x.type);x[0]=H>-1,x[1]=R<0||H<R,(H>-1||z(x,"default"))&&r.push(f)}}}const u=[l,r];return n.set(e,u),u}function zo(e){return e[0]!=="$"}function Wo(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Uo(e,t){return Wo(e)===Wo(t)}function Ko(e,t){return q(t)?t.findIndex(s=>Uo(s,e)):B(t)&&Uo(t,e)?0:-1}const bl=e=>e[0]==="_"||e==="$stable",po=e=>q(e)?e.map(Be):[Be(e)],Fa=(e,t,s)=>{if(t._n)return t;const n=Ee((...o)=>po(t(...o)),s);return n._c=!1,n},yl=(e,t,s)=>{const n=e._ctx;for(const o in e){if(bl(o))continue;const i=e[o];if(B(i))t[o]=Fa(o,i,n);else if(i!=null){const l=po(i);t[o]=()=>l}}},vl=(e,t)=>{const s=po(t);e.slots.default=()=>s},Da=(e,t)=>{if(e.vnode.shapeFlag&32){const s=t._;s?(e.slots=V(t),As(t,"_",s)):yl(t,e.slots={})}else e.slots={},t&&vl(e,t);As(e.slots,en,1)},ja=(e,t,s)=>{const{vnode:n,slots:o}=e;let i=!0,l=Z;if(n.shapeFlag&32){const r=t._;r?s&&r===1?i=!1:(_e(o,t),!s&&r===1&&delete o._):(i=!t.$stable,yl(t,o)),l=t}else t&&(vl(e,t),l={default:1});if(i)for(const r in o)!bl(r)&&!(r in l)&&delete o[r]};function _l(){return{app:null,config:{isNativeTag:mr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qa=0;function Ba(e,t){return function(n,o=null){B(n)||(n=Object.assign({},n)),o!=null&&!pe(o)&&(o=null);const i=_l(),l=new Set;let r=!1;const a=i.app={_uid:qa++,_component:n,_props:o,_container:null,_context:i,_instance:null,version:ic,get config(){return i.config},set config(u){},use(u,...d){return l.has(u)||(u&&B(u.install)?(l.add(u),u.install(a,...d)):B(u)&&(l.add(u),u(a,...d))),a},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),a},component(u,d){return d?(i.components[u]=d,a):i.components[u]},directive(u,d){return d?(i.directives[u]=d,a):i.directives[u]},mount(u,d,f){if(!r){const m=Y(n,o);return m.appContext=i,d&&t?t(m,u):e(m,u,f),r=!0,a._container=u,u.__vue_app__=a,go(m.component)||m.component.proxy}},unmount(){r&&(e(null,a._container),delete a._container.__vue_app__)},provide(u,d){return i.provides[u]=d,a}};return a}}function Rn(e,t,s,n,o=!1){if(q(e)){e.forEach((m,x)=>Rn(m,t&&(q(t)?t[x]:t),s,n,o));return}if(ns(n)&&!o)return;const i=n.shapeFlag&4?go(n.component)||n.component.proxy:n.el,l=o?null:i,{i:r,r:a}=e,u=t&&t.r,d=r.refs===Z?r.refs={}:r.refs,f=r.setupState;if(u!=null&&u!==a&&(ce(u)?(d[u]=null,z(f,u)&&(f[u]=null)):be(u)&&(u.value=null)),B(a))ut(a,r,12,[l,d]);else{const m=ce(a),x=be(a);if(m||x){const H=()=>{if(e.f){const R=m?d[a]:a.value;o?q(R)&&Zn(R,i):q(R)?R.includes(i)||R.push(i):m?(d[a]=[i],z(f,a)&&(f[a]=d[a])):(a.value=[i],e.k&&(d[e.k]=a.value))}else m?(d[a]=l,z(f,a)&&(f[a]=l)):x&&(a.value=l,e.k&&(d[e.k]=l))};l?(H.id=-1,xe(H,s)):H()}}}const xe=ga;function za(e){return Wa(e)}function Wa(e,t){const s=xr();s.__VUE__=!0;const{insert:n,remove:o,patchProp:i,createElement:l,createText:r,createComment:a,setText:u,setElementText:d,parentNode:f,nextSibling:m,setScopeId:x=Ne,cloneNode:H,insertStaticContent:R}=e,P=(c,p,h,b=null,g=null,w=null,T=!1,_=null,$=!!p.dynamicChildren)=>{if(c===p)return;c&&!Gt(c,p)&&(b=_s(c),ot(c,g,w,!0),c=null),p.patchFlag===-2&&($=!1,p.dynamicChildren=null);const{type:v,ref:O,shapeFlag:L}=p;switch(v){case uo:A(c,p,h,b);break;case mt:E(c,p,h,b);break;case yn:c==null&&M(p,h,b,T);break;case U:ye(c,p,h,b,g,w,T,_,$);break;default:L&1?ue(c,p,h,b,g,w,T,_,$):L&6?fe(c,p,h,b,g,w,T,_,$):(L&64||L&128)&&v.process(c,p,h,b,g,w,T,_,$,Mt)}O!=null&&g&&Rn(O,c&&c.ref,w,p||c,!p)},A=(c,p,h,b)=>{if(c==null)n(p.el=r(p.children),h,b);else{const g=p.el=c.el;p.children!==c.children&&u(g,p.children)}},E=(c,p,h,b)=>{c==null?n(p.el=a(p.children||""),h,b):p.el=c.el},M=(c,p,h,b)=>{[c.el,c.anchor]=R(c.children,p,h,b,c.el,c.anchor)},D=({el:c,anchor:p},h,b)=>{let g;for(;c&&c!==p;)g=m(c),n(c,h,b),c=g;n(p,h,b)},ne=({el:c,anchor:p})=>{let h;for(;c&&c!==p;)h=m(c),o(c),c=h;o(p)},ue=(c,p,h,b,g,w,T,_,$)=>{T=T||p.type==="svg",c==null?he(p,h,b,g,w,T,_,$):ie(c,p,g,w,T,_,$)},he=(c,p,h,b,g,w,T,_)=>{let $,v;const{type:O,props:L,shapeFlag:N,transition:F,patchFlag:W,dirs:X}=c;if(c.el&&H!==void 0&&W===-1)$=c.el=H(c.el);else{if($=c.el=l(c.type,w,L&&L.is,L),N&8?d($,c.children):N&16&&j(c.children,$,null,b,g,w&&O!=="foreignObject",T,_),X&&vt(c,null,b,"created"),L){for(const te in L)te!=="value"&&!Ss(te)&&i($,te,null,L[te],w,c.children,b,g,Ve);"value"in L&&i($,"value",null,L.value),(v=L.onVnodeBeforeMount)&&qe(v,b,c)}se($,c,c.scopeId,T,b)}X&&vt(c,null,b,"beforeMount");const G=(!g||g&&!g.pendingBranch)&&F&&!F.persisted;G&&F.beforeEnter($),n($,p,h),((v=L&&L.onVnodeMounted)||G||X)&&xe(()=>{v&&qe(v,b,c),G&&F.enter($),X&&vt(c,null,b,"mounted")},g)},se=(c,p,h,b,g)=>{if(h&&x(c,h),b)for(let w=0;w<b.length;w++)x(c,b[w]);if(g){let w=g.subTree;if(p===w){const T=g.vnode;se(c,T,T.scopeId,T.slotScopeIds,g.parent)}}},j=(c,p,h,b,g,w,T,_,$=0)=>{for(let v=$;v<c.length;v++){const O=c[v]=_?ct(c[v]):Be(c[v]);P(null,O,p,h,b,g,w,T,_)}},ie=(c,p,h,b,g,w,T)=>{const _=p.el=c.el;let{patchFlag:$,dynamicChildren:v,dirs:O}=p;$|=c.patchFlag&16;const L=c.props||Z,N=p.props||Z;let F;h&&_t(h,!1),(F=N.onVnodeBeforeUpdate)&&qe(F,h,p,c),O&&vt(p,c,h,"beforeUpdate"),h&&_t(h,!0);const W=g&&p.type!=="foreignObject";if(v?oe(c.dynamicChildren,v,_,h,b,W,w):T||Ye(c,p,_,null,h,b,W,w,!1),$>0){if($&16)re(_,p,L,N,h,b,g);else if($&2&&L.class!==N.class&&i(_,"class",null,N.class,g),$&4&&i(_,"style",L.style,N.style,g),$&8){const X=p.dynamicProps;for(let G=0;G<X.length;G++){const te=X[G],Me=L[te],It=N[te];(It!==Me||te==="value")&&i(_,te,Me,It,g,c.children,h,b,Ve)}}$&1&&c.children!==p.children&&d(_,p.children)}else!T&&v==null&&re(_,p,L,N,h,b,g);((F=N.onVnodeUpdated)||O)&&xe(()=>{F&&qe(F,h,p,c),O&&vt(p,c,h,"updated")},b)},oe=(c,p,h,b,g,w,T)=>{for(let _=0;_<p.length;_++){const $=c[_],v=p[_],O=$.el&&($.type===U||!Gt($,v)||$.shapeFlag&70)?f($.el):h;P($,v,O,null,b,g,w,T,!0)}},re=(c,p,h,b,g,w,T)=>{if(h!==b){for(const _ in b){if(Ss(_))continue;const $=b[_],v=h[_];$!==v&&_!=="value"&&i(c,_,v,$,T,p.children,g,w,Ve)}if(h!==Z)for(const _ in h)!Ss(_)&&!(_ in b)&&i(c,_,h[_],null,T,p.children,g,w,Ve);"value"in b&&i(c,"value",h.value,b.value)}},ye=(c,p,h,b,g,w,T,_,$)=>{const v=p.el=c?c.el:r(""),O=p.anchor=c?c.anchor:r("");let{patchFlag:L,dynamicChildren:N,slotScopeIds:F}=p;F&&(_=_?_.concat(F):F),c==null?(n(v,h,b),n(O,h,b),j(p.children,h,O,g,w,T,_,$)):L>0&&L&64&&N&&c.dynamicChildren?(oe(c.dynamicChildren,N,h,g,w,T,_),(p.key!=null||g&&p===g.subTree)&&wl(c,p,!0)):Ye(c,p,h,O,g,w,T,_,$)},fe=(c,p,h,b,g,w,T,_,$)=>{p.slotScopeIds=_,c==null?p.shapeFlag&512?g.ctx.activate(p,h,b,T,$):yt(p,h,b,g,w,T,$):we(c,p,$)},yt=(c,p,h,b,g,w,T)=>{const _=c.component=Ga(c,b,g);if(il(c)&&(_.ctx.renderer=Mt),Za(_),_.asyncDep){if(g&&g.registerDep(_,le),!c.el){const $=_.subTree=Y(mt);E(null,$,p,h)}return}le(_,c,p,h,g,w,T)},we=(c,p,h)=>{const b=p.component=c.component;if(ha(c,p,h))if(b.asyncDep&&!b.asyncResolved){ee(b,p,h);return}else b.next=p,la(b.update),b.update();else p.el=c.el,b.vnode=p},le=(c,p,h,b,g,w,T)=>{const _=()=>{if(c.isMounted){let{next:O,bu:L,u:N,parent:F,vnode:W}=c,X=O,G;_t(c,!1),O?(O.el=W.el,ee(c,O,T)):O=W,L&&mn(L),(G=O.props&&O.props.onVnodeBeforeUpdate)&&qe(G,F,O,W),_t(c,!0);const te=gn(c),Me=c.subTree;c.subTree=te,P(Me,te,f(Me.el),_s(Me),c,g,w),O.el=te.el,X===null&&fa(c,te.el),N&&xe(N,g),(G=O.props&&O.props.onVnodeUpdated)&&xe(()=>qe(G,F,O,W),g)}else{let O;const{el:L,props:N}=p,{bm:F,m:W,parent:X}=c,G=ns(p);if(_t(c,!1),F&&mn(F),!G&&(O=N&&N.onVnodeBeforeMount)&&qe(O,X,p),_t(c,!0),L&&hn){const te=()=>{c.subTree=gn(c),hn(L,c.subTree,c,g,null)};G?p.type.__asyncLoader().then(()=>!c.isUnmounted&&te()):te()}else{const te=c.subTree=gn(c);P(null,te,h,b,c,g,w),p.el=te.el}if(W&&xe(W,g),!G&&(O=N&&N.onVnodeMounted)){const te=p;xe(()=>qe(O,X,te),g)}(p.shapeFlag&256||X&&ns(X.vnode)&&X.vnode.shapeFlag&256)&&c.a&&xe(c.a,g),c.isMounted=!0,p=h=b=null}},$=c.effect=new so(_,()=>Gi(v),c.scope),v=c.update=()=>$.run();v.id=c.uid,_t(c,!0),v()},ee=(c,p,h)=>{p.component=c;const b=c.vnode.props;c.vnode=p,c.next=null,Ra(c,p.props,b,h),ja(c,p.children,h),Kt(),Xs(void 0,c.update),Yt()},Ye=(c,p,h,b,g,w,T,_,$=!1)=>{const v=c&&c.children,O=c?c.shapeFlag:0,L=p.children,{patchFlag:N,shapeFlag:F}=p;if(N>0){if(N&128){Jt(v,L,h,b,g,w,T,_,$);return}else if(N&256){un(v,L,h,b,g,w,T,_,$);return}}F&8?(O&16&&Ve(v,g,w),L!==v&&d(h,L)):O&16?F&16?Jt(v,L,h,b,g,w,T,_,$):Ve(v,g,w,!0):(O&8&&d(h,""),F&16&&j(L,h,b,g,w,T,_,$))},un=(c,p,h,b,g,w,T,_,$)=>{c=c||Rt,p=p||Rt;const v=c.length,O=p.length,L=Math.min(v,O);let N;for(N=0;N<L;N++){const F=p[N]=$?ct(p[N]):Be(p[N]);P(c[N],F,h,null,g,w,T,_,$)}v>O?Ve(c,g,w,!0,!1,L):j(p,h,b,g,w,T,_,$,L)},Jt=(c,p,h,b,g,w,T,_,$)=>{let v=0;const O=p.length;let L=c.length-1,N=O-1;for(;v<=L&&v<=N;){const F=c[v],W=p[v]=$?ct(p[v]):Be(p[v]);if(Gt(F,W))P(F,W,h,null,g,w,T,_,$);else break;v++}for(;v<=L&&v<=N;){const F=c[L],W=p[N]=$?ct(p[N]):Be(p[N]);if(Gt(F,W))P(F,W,h,null,g,w,T,_,$);else break;L--,N--}if(v>L){if(v<=N){const F=N+1,W=F<O?p[F].el:b;for(;v<=N;)P(null,p[v]=$?ct(p[v]):Be(p[v]),h,W,g,w,T,_,$),v++}}else if(v>N)for(;v<=L;)ot(c[v],g,w,!0),v++;else{const F=v,W=v,X=new Map;for(v=W;v<=N;v++){const Te=p[v]=$?ct(p[v]):Be(p[v]);Te.key!=null&&X.set(Te.key,v)}let G,te=0;const Me=N-W+1;let It=!1,So=0;const Xt=new Array(Me);for(v=0;v<Me;v++)Xt[v]=0;for(v=F;v<=L;v++){const Te=c[v];if(te>=Me){ot(Te,g,w,!0);continue}let je;if(Te.key!=null)je=X.get(Te.key);else for(G=W;G<=N;G++)if(Xt[G-W]===0&&Gt(Te,p[G])){je=G;break}je===void 0?ot(Te,g,w,!0):(Xt[je-W]=v+1,je>=So?So=je:It=!0,P(Te,p[je],h,null,g,w,T,_,$),te++)}const Po=It?Ua(Xt):Rt;for(G=Po.length-1,v=Me-1;v>=0;v--){const Te=W+v,je=p[Te],Lo=Te+1<O?p[Te+1].el:b;Xt[v]===0?P(null,je,h,Lo,g,w,T,_,$):It&&(G<0||v!==Po[G]?Et(je,h,Lo,2):G--)}}},Et=(c,p,h,b,g=null)=>{const{el:w,type:T,transition:_,children:$,shapeFlag:v}=c;if(v&6){Et(c.component.subTree,p,h,b);return}if(v&128){c.suspense.move(p,h,b);return}if(v&64){T.move(c,p,h,Mt);return}if(T===U){n(w,p,h);for(let L=0;L<$.length;L++)Et($[L],p,h,b);n(c.anchor,p,h);return}if(T===yn){D(c,p,h);return}if(b!==2&&v&1&&_)if(b===0)_.beforeEnter(w),n(w,p,h),xe(()=>_.enter(w),g);else{const{leave:L,delayLeave:N,afterLeave:F}=_,W=()=>n(w,p,h),X=()=>{L(w,()=>{W(),F&&F()})};N?N(w,W,X):X()}else n(w,p,h)},ot=(c,p,h,b=!1,g=!1)=>{const{type:w,props:T,ref:_,children:$,dynamicChildren:v,shapeFlag:O,patchFlag:L,dirs:N}=c;if(_!=null&&Rn(_,null,h,c,!0),O&256){p.ctx.deactivate(c);return}const F=O&1&&N,W=!ns(c);let X;if(W&&(X=T&&T.onVnodeBeforeUnmount)&&qe(X,p,c),O&6)ar(c.component,h,b);else{if(O&128){c.suspense.unmount(h,b);return}F&&vt(c,null,p,"beforeUnmount"),O&64?c.type.remove(c,p,h,g,Mt,b):v&&(w!==U||L>0&&L&64)?Ve(v,p,h,!1,!0):(w===U&&L&384||!g&&O&16)&&Ve($,p,h),b&&To(c)}(W&&(X=T&&T.onVnodeUnmounted)||F)&&xe(()=>{X&&qe(X,p,c),F&&vt(c,null,p,"unmounted")},h)},To=c=>{const{type:p,el:h,anchor:b,transition:g}=c;if(p===U){rr(h,b);return}if(p===yn){ne(c);return}const w=()=>{o(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:T,delayLeave:_}=g,$=()=>T(h,w);_?_(c.el,w,$):$()}else w()},rr=(c,p)=>{let h;for(;c!==p;)h=m(c),o(c),c=h;o(p)},ar=(c,p,h)=>{const{bum:b,scope:g,update:w,subTree:T,um:_}=c;b&&mn(b),g.stop(),w&&(w.active=!1,ot(T,c,p,h)),_&&xe(_,p),xe(()=>{c.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ve=(c,p,h,b=!1,g=!1,w=0)=>{for(let T=w;T<c.length;T++)ot(c[T],p,h,b,g)},_s=c=>c.shapeFlag&6?_s(c.component.subTree):c.shapeFlag&128?c.suspense.next():m(c.anchor||c.el),Co=(c,p,h)=>{c==null?p._vnode&&ot(p._vnode,null,null,!0):P(p._vnode||null,c,p,null,null,null,h),el(),p._vnode=c},Mt={p:P,um:ot,m:Et,r:To,mt:yt,mc:j,pc:Ye,pbc:oe,n:_s,o:e};let dn,hn;return t&&([dn,hn]=t(Mt)),{render:Co,hydrate:dn,createApp:Ba(Co,dn)}}function _t({effect:e,update:t},s){e.allowRecurse=t.allowRecurse=s}function wl(e,t,s=!1){const n=e.children,o=t.children;if(q(n)&&q(o))for(let i=0;i<n.length;i++){const l=n[i];let r=o[i];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=o[i]=ct(o[i]),r.el=l.el),s||wl(l,r))}}function Ua(e){const t=e.slice(),s=[0];let n,o,i,l,r;const a=e.length;for(n=0;n<a;n++){const u=e[n];if(u!==0){if(o=s[s.length-1],e[o]<u){t[n]=o,s.push(n);continue}for(i=0,l=s.length-1;i<l;)r=i+l>>1,e[s[r]]<u?i=r+1:l=r;u<e[s[i]]&&(i>0&&(t[n]=s[i-1]),s[i]=n)}}for(i=s.length,l=s[i-1];i-- >0;)s[i]=l,l=t[l];return s}const Ka=e=>e.__isTeleport,U=Symbol(void 0),uo=Symbol(void 0),mt=Symbol(void 0),yn=Symbol(void 0),os=[];let Oe=null;function S(e=!1){os.push(Oe=e?null:[])}function Ya(){os.pop(),Oe=os[os.length-1]||null}let hs=1;function Yo(e){hs+=e}function xl(e){return e.dynamicChildren=hs>0?Oe||Rt:null,Ya(),hs>0&&Oe&&Oe.push(e),e}function I(e,t,s,n,o,i){return xl(y(e,t,s,n,o,i,!0))}function Ke(e,t,s,n,o){return xl(Y(e,t,s,n,o,!0))}function Ns(e){return e?e.__v_isVNode===!0:!1}function Gt(e,t){return e.type===t.type&&e.key===t.key}const en="__vInternal",$l=({key:e})=>e!=null?e:null,Ps=({ref:e,ref_key:t,ref_for:s})=>e!=null?ce(e)||be(e)||B(e)?{i:$e,r:e,k:t,f:!!s}:e:null;function y(e,t=null,s=null,n=0,o=null,i=e===U?0:1,l=!1,r=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&$l(t),ref:t&&Ps(t),scopeId:Zs,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:n,dynamicProps:o,dynamicChildren:null,appContext:null};return r?(fo(a,s),i&128&&e.normalize(a)):s&&(a.shapeFlag|=ce(s)?8:16),hs>0&&!l&&Oe&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Oe.push(a),a}const Y=Va;function Va(e,t=null,s=null,n=0,o=null,i=!1){if((!e||e===cl)&&(e=mt),Ns(e)){const r=qt(e,t,!0);return s&&fo(r,s),hs>0&&!i&&Oe&&(r.shapeFlag&6?Oe[Oe.indexOf(e)]=r:Oe.push(r)),r.patchFlag|=-2,r}if(nc(e)&&(e=e.__vccOpts),t){t=ho(t);let{class:r,style:a}=t;r&&!ce(r)&&(t.class=Le(r)),pe(a)&&(Ui(a)&&!q(a)&&(a=_e({},a)),t.style=ze(a))}const l=ce(e)?1:ma(e)?128:Ka(e)?64:pe(e)?4:B(e)?2:0;return y(e,t,s,n,o,l,i,!0)}function ho(e){return e?Ui(e)||en in e?_e({},e):e:null}function qt(e,t,s=!1){const{props:n,ref:o,patchFlag:i,children:l}=e,r=t?mo(n||{},t):n;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:r,key:r&&$l(r),ref:t&&t.ref?s&&o?q(o)?o.concat(Ps(t)):[o,Ps(t)]:Ps(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==U?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&qt(e.ssContent),ssFallback:e.ssFallback&&qt(e.ssFallback),el:e.el,anchor:e.anchor}}function ae(e=" ",t=0){return Y(uo,null,e,t)}function ke(e="",t=!1){return t?(S(),Ke(mt,null,e)):Y(mt,null,e)}function Be(e){return e==null||typeof e=="boolean"?Y(mt):q(e)?Y(U,null,e.slice()):typeof e=="object"?ct(e):Y(uo,null,String(e))}function ct(e){return e.el===null||e.memo?e:qt(e)}function fo(e,t){let s=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(q(t))s=16;else if(typeof t=="object")if(n&65){const o=t.default;o&&(o._c&&(o._d=!1),fo(e,o()),o._c&&(o._d=!0));return}else{s=32;const o=t._;!o&&!(en in t)?t._ctx=$e:o===3&&$e&&($e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:$e},s=32):(t=String(t),n&64?(s=16,t=[ae(t)]):s=8);e.children=t,e.shapeFlag|=s}function mo(...e){const t={};for(let s=0;s<e.length;s++){const n=e[s];for(const o in n)if(o==="class")t.class!==n.class&&(t.class=Le([t.class,n.class]));else if(o==="style")t.style=ze([t.style,n.style]);else if(zs(o)){const i=t[o],l=n[o];l&&i!==l&&!(q(i)&&i.includes(l))&&(t[o]=i?[].concat(i,l):l)}else o!==""&&(t[o]=n[o])}return t}function qe(e,t,s,n=null){Re(e,t,7,[s,n])}const Ja=_l();let Xa=0;function Ga(e,t,s){const n=e.type,o=(t?t.appContext:e.appContext)||Ja,i={uid:Xa++,vnode:e,type:n,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new $r(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gl(n,o),emitsOptions:sl(n,o),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:n.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ca.bind(null,i),e.ce&&e.ce(i),i}let me=null;const Bt=e=>{me=e,e.scope.on()},Ct=()=>{me&&me.scope.off(),me=null};function kl(e){return e.vnode.shapeFlag&4}let fs=!1;function Za(e,t=!1){fs=t;const{props:s,children:n}=e.vnode,o=kl(e);Ha(e,s,o,t),Da(e,n);const i=o?Qa(e,t):void 0;return fs=!1,i}function Qa(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=Ki(new Proxy(e.ctx,Aa));const{setup:n}=s;if(n){const o=e.setupContext=n.length>1?tc(e):null;Bt(e),Kt();const i=ut(n,e,0,[e.props,o]);if(Yt(),Ct(),Ei(i)){if(i.then(Ct,Ct),t)return i.then(l=>{Vo(e,l,t)}).catch(l=>{Js(l,e,0)});e.asyncDep=i}else Vo(e,i,t)}else Tl(e,t)}function Vo(e,t,s){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pe(t)&&(e.setupState=Ji(t)),Tl(e,s)}let Jo;function Tl(e,t,s){const n=e.type;if(!e.render){if(!t&&Jo&&!n.render){const o=n.template;if(o){const{isCustomElement:i,compilerOptions:l}=e.appContext.config,{delimiters:r,compilerOptions:a}=n,u=_e(_e({isCustomElement:i,delimiters:r},l),a);n.render=Jo(o,u)}}e.render=n.render||Ne}Bt(e),Kt(),Ea(e),Yt(),Ct()}function ec(e){return new Proxy(e.attrs,{get(t,s){return Ae(e,"get","$attrs"),t[s]}})}function tc(e){const t=n=>{e.exposed=n||{}};let s;return{get attrs(){return s||(s=ec(e))},slots:e.slots,emit:e.emit,expose:t}}function go(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ji(Ki(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in Is)return Is[s](e)}}))}function sc(e,t=!0){return B(e)?e.displayName||e.name:e.name||t&&e.__name}function nc(e){return B(e)&&"__vccOpts"in e}const ge=(e,t)=>na(e,t,fs);function oc(e,t,s){const n=arguments.length;return n===2?pe(t)&&!q(t)?Ns(t)?Y(e,null,[t]):Y(e,t):Y(e,null,t):(n>3?s=Array.prototype.slice.call(arguments,2):n===3&&Ns(s)&&(s=[s]),Y(e,t,s))}const ic="3.2.37",lc="http://www.w3.org/2000/svg",kt=typeof document<"u"?document:null,Xo=kt&&kt.createElement("template"),rc={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,n)=>{const o=t?kt.createElementNS(lc,e):kt.createElement(e,s?{is:s}:void 0);return e==="select"&&n&&n.multiple!=null&&o.setAttribute("multiple",n.multiple),o},createText:e=>kt.createTextNode(e),createComment:e=>kt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>kt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,s,n,o,i){const l=s?s.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),s),!(o===i||!(o=o.nextSibling)););else{Xo.innerHTML=n?`<svg>${e}</svg>`:e;const r=Xo.content;if(n){const a=r.firstChild;for(;a.firstChild;)r.appendChild(a.firstChild);r.removeChild(a)}t.insertBefore(r,s)}return[l?l.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}};function ac(e,t,s){const n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}function cc(e,t,s){const n=e.style,o=ce(s);if(s&&!o){for(const i in s)Fn(n,i,s[i]);if(t&&!ce(t))for(const i in t)s[i]==null&&Fn(n,i,"")}else{const i=n.display;o?t!==s&&(n.cssText=s):t&&e.removeAttribute("style"),"_vod"in e&&(n.display=i)}}const Go=/\s*!important$/;function Fn(e,t,s){if(q(s))s.forEach(n=>Fn(e,t,n));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const n=pc(e,t);Go.test(s)?e.setProperty(Lt(n),s.replace(Go,""),"important"):e[n]=s}}const Zo=["Webkit","Moz","ms"],vn={};function pc(e,t){const s=vn[t];if(s)return s;let n=We(t);if(n!=="filter"&&n in e)return vn[t]=n;n=Ks(n);for(let o=0;o<Zo.length;o++){const i=Zo[o]+n;if(i in e)return vn[t]=i}return t}const Qo="http://www.w3.org/1999/xlink";function uc(e,t,s,n,o){if(n&&t.startsWith("xlink:"))s==null?e.removeAttributeNS(Qo,t.slice(6,t.length)):e.setAttributeNS(Qo,t,s);else{const i=ur(t);s==null||i&&!Si(s)?e.removeAttribute(t):e.setAttribute(t,i?"":s)}}function dc(e,t,s,n,o,i,l){if(t==="innerHTML"||t==="textContent"){n&&l(n,o,i),e[t]=s==null?"":s;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=s;const a=s==null?"":s;(e.value!==a||e.tagName==="OPTION")&&(e.value=a),s==null&&e.removeAttribute(t);return}let r=!1;if(s===""||s==null){const a=typeof e[t];a==="boolean"?s=Si(s):s==null&&a==="string"?(s="",r=!0):a==="number"&&(s=0,r=!0)}try{e[t]=s}catch{}r&&e.removeAttribute(t)}const[Cl,hc]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const s=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(s&&Number(s[1])<=53)}return[e,t]})();let Dn=0;const fc=Promise.resolve(),mc=()=>{Dn=0},gc=()=>Dn||(fc.then(mc),Dn=Cl());function bc(e,t,s,n){e.addEventListener(t,s,n)}function yc(e,t,s,n){e.removeEventListener(t,s,n)}function vc(e,t,s,n,o=null){const i=e._vei||(e._vei={}),l=i[t];if(n&&l)l.value=n;else{const[r,a]=_c(t);if(n){const u=i[t]=wc(n,o);bc(e,r,u,a)}else l&&(yc(e,r,l,a),i[t]=void 0)}}const ei=/(?:Once|Passive|Capture)$/;function _c(e){let t;if(ei.test(e)){t={};let s;for(;s=e.match(ei);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[Lt(e.slice(2)),t]}function wc(e,t){const s=n=>{const o=n.timeStamp||Cl();(hc||o>=s.attached-1)&&Re(xc(n,s.value),t,5,[n])};return s.value=e,s.attached=gc(),s}function xc(e,t){if(q(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(n=>o=>!o._stopped&&n&&n(o))}else return t}const ti=/^on[a-z]/,$c=(e,t,s,n,o=!1,i,l,r,a)=>{t==="class"?ac(e,n,o):t==="style"?cc(e,s,n):zs(t)?Gn(t)||vc(e,t,s,n,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):kc(e,t,n,o))?dc(e,t,n,i,l,r,a):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),uc(e,t,n,o))};function kc(e,t,s,n){return n?!!(t==="innerHTML"||t==="textContent"||t in e&&ti.test(t)&&B(s)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ti.test(t)&&ce(s)?!1:t in e}const Tc=["ctrl","shift","alt","meta"],Cc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Tc.some(s=>e[`${s}Key`]&&!t.includes(s))},Hs=(e,t)=>(s,...n)=>{for(let o=0;o<t.length;o++){const i=Cc[t[o]];if(i&&i(s,t))return}return e(s,...n)},Sc={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Sl=(e,t)=>s=>{if(!("key"in s))return;const n=Lt(s.key);if(t.some(o=>o===n||Sc[o]===n))return e(s)},Pc=_e({patchProp:$c},rc);let si;function Lc(){return si||(si=za(Pc))}const Pl=(...e)=>{const t=Lc().createApp(...e),{mount:s}=t;return t.mount=n=>{const o=Ac(n);if(!o)return;const i=t._component;!B(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.innerHTML="";const l=s(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),l},t};function Ac(e){return ce(e)?document.querySelector(e):e}const Rs=(e,t,s)=>Math.min(Math.max(e,t),s);function Fs(){Array.from(document.querySelectorAll(".shake, .strobe")).forEach(e=>e.classList.remove("shake","strobe"))}const ms=e=>{e.classList.add("shake"),setTimeout(()=>{e.classList.remove("shake")},500)};function nt(e){return e.split("-")[0]}function jt(e){return e.split("-")[1]}function bs(e){return["top","bottom"].includes(nt(e))?"x":"y"}function bo(e){return e==="y"?"height":"width"}function ni(e){let{reference:t,floating:s,placement:n}=e;const o=t.x+t.width/2-s.width/2,i=t.y+t.height/2-s.height/2;let l;switch(nt(n)){case"top":l={x:o,y:t.y-s.height};break;case"bottom":l={x:o,y:t.y+t.height};break;case"right":l={x:t.x+t.width,y:i};break;case"left":l={x:t.x-s.width,y:i};break;default:l={x:t.x,y:t.y}}const r=bs(n),a=bo(r);switch(jt(n)){case"start":l[r]=l[r]-(t[a]/2-s[a]/2);break;case"end":l[r]=l[r]+(t[a]/2-s[a]/2);break}return l}const Ec=async(e,t,s)=>{const{placement:n="bottom",strategy:o="absolute",middleware:i=[],platform:l}=s;let r=await l.getElementRects({reference:e,floating:t,strategy:o}),{x:a,y:u}=ni({...r,placement:n}),d=n,f={};for(let m=0;m<i.length;m++){const{name:x,fn:H}=i[m],{x:R,y:P,data:A,reset:E}=await H({x:a,y:u,initialPlacement:n,placement:d,strategy:o,middlewareData:f,rects:r,platform:l,elements:{reference:e,floating:t}});if(a=R!=null?R:a,u=P!=null?P:u,f={...f,[x]:A!=null?A:{}},E){typeof E=="object"&&(E.placement&&(d=E.placement),E.rects&&(r=E.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:o}):E.rects),{x:a,y:u}=ni({...r,placement:d})),m=-1;continue}}return{x:a,y:u,placement:d,strategy:o,middlewareData:f}};function Mc(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ll(e){return typeof e!="number"?Mc(e):{top:e,right:e,bottom:e,left:e}}function jn(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function tn(e,t){t===void 0&&(t={});const{x:s,y:n,platform:o,rects:i,elements:l,strategy:r}=e,{boundary:a="clippingParents",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:m=0}=t,x=Ll(m),R=l[f?d==="floating"?"reference":"floating":d],P=await o.getClippingClientRect({element:await o.isElement(R)?R:R.contextElement||await o.getDocumentElement({element:l.floating}),boundary:a,rootBoundary:u}),A=jn(await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:d==="floating"?{...i.floating,x:s,y:n}:i.reference,offsetParent:await o.getOffsetParent({element:l.floating}),strategy:r}));return{top:P.top-A.top+x.top,bottom:A.bottom-P.bottom+x.bottom,left:P.left-A.left+x.left,right:A.right-P.right+x.right}}const Ic=Math.min,$t=Math.max;function qn(e,t,s){return $t(e,Ic(t,s))}const Oc=e=>({name:"arrow",options:e,async fn(t){const{element:s,padding:n=0}=e!=null?e:{},{x:o,y:i,placement:l,rects:r,platform:a}=t;if(s==null)return{};const u=Ll(n),d={x:o,y:i},f=nt(l),m=bs(f),x=bo(m),H=await a.getDimensions({element:s}),R=m==="y"?"top":"left",P=m==="y"?"bottom":"right",A=r.reference[x]+r.reference[m]-d[m]-r.floating[x],E=d[m]-r.reference[m],M=await a.getOffsetParent({element:s}),D=M?m==="y"?M.clientHeight||0:M.clientWidth||0:0,ne=A/2-E/2,ue=u[R],he=D-H[x]-u[P],se=D/2-H[x]/2+ne,j=qn(ue,se,he);return{data:{[m]:j,centerOffset:se-j}}}}),Nc={left:"right",right:"left",bottom:"top",top:"bottom"};function Ds(e){return e.replace(/left|right|bottom|top/g,t=>Nc[t])}function Al(e,t){const s=jt(e)==="start",n=bs(e),o=bo(n);let i=n==="x"?s?"right":"left":s?"bottom":"top";return t.reference[o]>t.floating[o]&&(i=Ds(i)),{main:i,cross:Ds(i)}}const Hc={start:"end",end:"start"};function Bn(e){return e.replace(/start|end/g,t=>Hc[t])}const Rc=["top","right","bottom","left"],Fc=Rc.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);function Dc(e,t,s){return(e?[...s.filter(o=>jt(o)===e),...s.filter(o=>jt(o)!==e)]:s.filter(o=>nt(o)===o)).filter(o=>e?jt(o)===e||(t?Bn(o)!==o:!1):!0)}const jc=function(e){return e===void 0&&(e={}),{name:"autoPlacement",options:e,async fn(t){var s,n,o,i,l,r;const{x:a,y:u,rects:d,middlewareData:f,placement:m}=t,{alignment:x=null,allowedPlacements:H=Fc,autoAlignment:R=!0,...P}=e;if((s=f.autoPlacement)!=null&&s.skip)return{};const A=Dc(x,R,H),E=await tn(t,P),M=(n=(o=f.autoPlacement)==null?void 0:o.index)!=null?n:0,D=A[M],{main:ne,cross:ue}=Al(D,d);if(m!==D)return{x:a,y:u,reset:{placement:A[0]}};const he=[E[nt(D)],E[ne],E[ue]],se=[...(i=(l=f.autoPlacement)==null?void 0:l.overflows)!=null?i:[],{placement:D,overflows:he}],j=A[M+1];if(j)return{data:{index:M+1,overflows:se},reset:{placement:j}};const ie=se.slice().sort((re,ye)=>re.overflows[0]-ye.overflows[0]),oe=(r=ie.find(re=>{let{overflows:ye}=re;return ye.every(fe=>fe<=0)}))==null?void 0:r.placement;return{data:{skip:!0},reset:{placement:oe!=null?oe:ie[0].placement}}}}};function qc(e){const t=Ds(e);return[Bn(e),t,Bn(t)]}const Bc=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,n;const{placement:o,middlewareData:i,rects:l,initialPlacement:r}=t;if((s=i.flip)!=null&&s.skip)return{};const{mainAxis:a=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f="bestFit",flipAlignment:m=!0,...x}=e,H=nt(o),P=d||(H===r||!m?[Ds(r)]:qc(r)),A=[r,...P],E=await tn(t,x),M=[];let D=((n=i.flip)==null?void 0:n.overflows)||[];if(a&&M.push(E[H]),u){const{main:se,cross:j}=Al(o,l);M.push(E[se],E[j])}if(D=[...D,{placement:o,overflows:M}],!M.every(se=>se<=0)){var ne,ue;const se=((ne=(ue=i.flip)==null?void 0:ue.index)!=null?ne:0)+1,j=A[se];if(j)return{data:{index:se,overflows:D},reset:{placement:j}};let ie="bottom";switch(f){case"bestFit":{var he;const oe=(he=D.slice().sort((re,ye)=>re.overflows.filter(fe=>fe>0).reduce((fe,yt)=>fe+yt,0)-ye.overflows.filter(fe=>fe>0).reduce((fe,yt)=>fe+yt,0))[0])==null?void 0:he.placement;oe&&(ie=oe);break}case"initialPlacement":ie=r;break}return{data:{skip:!0},reset:{placement:ie}}}return{}}}};function zc(e){let{placement:t,rects:s,value:n}=e;const o=nt(t),i=["left","top"].includes(o)?-1:1,l=typeof n=="function"?n({...s,placement:t}):n,{mainAxis:r,crossAxis:a}=typeof l=="number"?{mainAxis:l,crossAxis:0}:{mainAxis:0,crossAxis:0,...l};return bs(o)==="x"?{x:a,y:r*i}:{x:r*i,y:a}}const Wc=function(e){return e===void 0&&(e=0),{name:"offset",options:e,fn(t){const{x:s,y:n,placement:o,rects:i}=t,l=zc({placement:o,rects:i,value:e});return{x:s+l.x,y:n+l.y,data:l}}}};function Uc(e){return e==="x"?"y":"x"}const Kc=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:n,placement:o}=t,{mainAxis:i=!0,crossAxis:l=!1,limiter:r={fn:P=>{let{x:A,y:E}=P;return{x:A,y:E}}},...a}=e,u={x:s,y:n},d=await tn(t,a),f=bs(nt(o)),m=Uc(f);let x=u[f],H=u[m];if(i){const P=f==="y"?"top":"left",A=f==="y"?"bottom":"right",E=x+d[P],M=x-d[A];x=qn(E,x,M)}if(l){const P=m==="y"?"top":"left",A=m==="y"?"bottom":"right",E=H+d[P],M=H-d[A];H=qn(E,H,M)}const R=r.fn({...t,[f]:x,[m]:H});return{...R,data:{x:R.x-s,y:R.y-n}}}}},Yc=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var s;const{placement:n,rects:o,middlewareData:i}=t,{apply:l,...r}=e;if((s=i.size)!=null&&s.skip)return{};const a=await tn(t,r),u=nt(n),d=jt(n)==="end";let f,m;u==="top"||u==="bottom"?(f=u,m=d?"left":"right"):(m=u,f=d?"top":"bottom");const x=$t(a.left,0),H=$t(a.right,0),R=$t(a.top,0),P=$t(a.bottom,0),A={height:o.floating.height-(["left","right"].includes(n)?2*(R!==0||P!==0?R+P:$t(a.top,a.bottom)):a[f]),width:o.floating.width-(["top","bottom"].includes(n)?2*(x!==0||H!==0?x+H:$t(a.left,a.right)):a[m])};return l==null||l({...A,...o}),{data:{skip:!0},reset:{rects:!0}}}}};function yo(e){return(e==null?void 0:e.toString())==="[object Window]"}function gt(e){if(e==null)return window;if(!yo(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function sn(e){return gt(e).getComputedStyle(e)}function et(e){return yo(e)?"":e?(e.nodeName||"").toLowerCase():""}function tt(e){return e instanceof gt(e).HTMLElement}function js(e){return e instanceof gt(e).Element}function Vc(e){return e instanceof gt(e).Node}function El(e){const t=gt(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function nn(e){const{overflow:t,overflowX:s,overflowY:n}=sn(e);return/auto|scroll|overlay|hidden/.test(t+n+s)}function Jc(e){return["table","td","th"].includes(et(e))}function Ml(e){const t=navigator.userAgent.toLowerCase().includes("firefox"),s=sn(e);return s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].includes(s.willChange)||t&&s.willChange==="filter"||t&&(s.filter?s.filter!=="none":!1)}const oi=Math.min,is=Math.max,qs=Math.round;function zt(e,t){t===void 0&&(t=!1);const s=e.getBoundingClientRect();let n=1,o=1;return t&&tt(e)&&(n=e.offsetWidth>0&&qs(s.width)/e.offsetWidth||1,o=e.offsetHeight>0&&qs(s.height)/e.offsetHeight||1),{width:s.width/n,height:s.height/o,top:s.top/o,right:s.right/n,bottom:s.bottom/o,left:s.left/n,x:s.left/n,y:s.top/o}}function bt(e){return((Vc(e)?e.ownerDocument:e.document)||window.document).documentElement}function on(e){return yo(e)?{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}:{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Il(e){return zt(bt(e)).left+on(e).scrollLeft}function Xc(e){const t=zt(e);return qs(t.width)!==e.offsetWidth||qs(t.height)!==e.offsetHeight}function Gc(e,t,s){const n=tt(t),o=bt(t),i=zt(e,n&&Xc(t));let l={scrollLeft:0,scrollTop:0};const r={x:0,y:0};if(n||!n&&s!=="fixed")if((et(t)!=="body"||nn(o))&&(l=on(t)),tt(t)){const a=zt(t,!0);r.x=a.x+t.clientLeft,r.y=a.y+t.clientTop}else o&&(r.x=Il(o));return{x:i.left+l.scrollLeft-r.x,y:i.top+l.scrollTop-r.y,width:i.width,height:i.height}}function ln(e){return et(e)==="html"?e:e.assignedSlot||e.parentNode||(El(e)?e.host:null)||bt(e)}function ii(e){return!tt(e)||getComputedStyle(e).position==="fixed"?null:e.offsetParent}function Zc(e){let t=ln(e);for(;tt(t)&&!["html","body"].includes(et(t));){if(Ml(t))return t;t=t.parentNode}return null}function zn(e){const t=gt(e);let s=ii(e);for(;s&&Jc(s)&&getComputedStyle(s).position==="static";)s=ii(s);return s&&(et(s)==="html"||et(s)==="body"&&getComputedStyle(s).position==="static"&&!Ml(s))?t:s||Zc(e)||t}function li(e){return{width:e.offsetWidth,height:e.offsetHeight}}function Qc(e){let{rect:t,offsetParent:s,strategy:n}=e;const o=tt(s),i=bt(s);if(s===i)return t;let l={scrollLeft:0,scrollTop:0};const r={x:0,y:0};if((o||!o&&n!=="fixed")&&((et(s)!=="body"||nn(i))&&(l=on(s)),tt(s))){const a=zt(s,!0);r.x=a.x+s.clientLeft,r.y=a.y+s.clientTop}return{...t,x:t.x-l.scrollLeft+r.x,y:t.y-l.scrollTop+r.y}}function ep(e){const t=gt(e),s=bt(e),n=t.visualViewport;let o=s.clientWidth,i=s.clientHeight,l=0,r=0;return n&&(o=n.width,i=n.height,Math.abs(t.innerWidth/n.scale-n.width)<.01&&(l=n.offsetLeft,r=n.offsetTop)),{width:o,height:i,x:l,y:r}}function tp(e){var t;const s=bt(e),n=on(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=is(s.scrollWidth,s.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),l=is(s.scrollHeight,s.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0);let r=-n.scrollLeft+Il(e);const a=-n.scrollTop;return sn(o||s).direction==="rtl"&&(r+=is(s.clientWidth,o?o.clientWidth:0)-i),{width:i,height:l,x:r,y:a}}function Ol(e){return["html","body","#document"].includes(et(e))?e.ownerDocument.body:tt(e)&&nn(e)?e:Ol(ln(e))}function Bs(e,t){var s;t===void 0&&(t=[]);const n=Ol(e),o=n===((s=e.ownerDocument)==null?void 0:s.body),i=gt(n),l=o?[i].concat(i.visualViewport||[],nn(n)?n:[]):n,r=t.concat(l);return o?r:r.concat(Bs(ln(l)))}function sp(e,t){const s=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(s&&El(s)){let n=t;do{if(n&&e===n)return!0;n=n.parentNode||n.host}while(n)}return!1}function np(e){const t=zt(e),s=t.top+e.clientTop,n=t.left+e.clientLeft;return{top:s,left:n,x:n,y:s,right:n+e.clientWidth,bottom:s+e.clientHeight,width:e.clientWidth,height:e.clientHeight}}function ri(e,t){return t==="viewport"?jn(ep(e)):js(t)?np(t):jn(tp(bt(e)))}function op(e){const t=Bs(ln(e)),n=["absolute","fixed"].includes(sn(e).position)&&tt(e)?zn(e):e;return js(n)?t.filter(o=>js(o)&&sp(o,n)&&et(o)!=="body"):[]}function ip(e){let{element:t,boundary:s,rootBoundary:n}=e;const i=[...s==="clippingParents"?op(t):[].concat(s),n],l=i[0],r=i.reduce((a,u)=>{const d=ri(t,u);return a.top=is(d.top,a.top),a.right=oi(d.right,a.right),a.bottom=oi(d.bottom,a.bottom),a.left=is(d.left,a.left),a},ri(t,l));return r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}const lp={getElementRects:e=>{let{reference:t,floating:s,strategy:n}=e;return{reference:Gc(t,zn(s),n),floating:{...li(s),x:0,y:0}}},convertOffsetParentRelativeRectToViewportRelativeRect:e=>Qc(e),getOffsetParent:e=>{let{element:t}=e;return zn(t)},isElement:e=>js(e),getDocumentElement:e=>{let{element:t}=e;return bt(t)},getClippingClientRect:e=>ip(e),getDimensions:e=>{let{element:t}=e;return li(t)},getClientRects:e=>{let{element:t}=e;return t.getClientRects()}},rp=(e,t,s)=>Ec(e,t,{platform:lp,...s});var ap=Object.defineProperty,cp=Object.defineProperties,pp=Object.getOwnPropertyDescriptors,ai=Object.getOwnPropertySymbols,up=Object.prototype.hasOwnProperty,dp=Object.prototype.propertyIsEnumerable,ci=(e,t,s)=>t in e?ap(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Xe=(e,t)=>{for(var s in t||(t={}))up.call(t,s)&&ci(e,s,t[s]);if(ai)for(var s of ai(t))dp.call(t,s)&&ci(e,s,t[s]);return e},ys=(e,t)=>cp(e,pp(t));function Nl(e,t){for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(typeof t[s]=="object"&&e[s]?Nl(e[s],t[s]):e[s]=t[s])}const Ze={disabled:!1,distance:5,skidding:0,container:"body",boundary:void 0,instantMove:!1,disposeTimeout:5e3,popperTriggers:[],strategy:"absolute",preventOverflow:!0,flip:!0,shift:!0,overflowPadding:0,arrowPadding:0,arrowOverflow:!0,themes:{tooltip:{placement:"top",triggers:["hover","focus","touch"],hideTriggers:e=>[...e,"click"],delay:{show:200,hide:0},handleResize:!1,html:!1,loadingContent:"..."},dropdown:{placement:"bottom",triggers:["click"],delay:0,handleResize:!0,autoHide:!0},menu:{$extend:"dropdown",triggers:["hover","focus"],popperTriggers:["hover","focus"],delay:{show:0,hide:400}}}};function Wt(e,t){let s=Ze.themes[e]||{},n;do n=s[t],typeof n>"u"?s.$extend?s=Ze.themes[s.$extend]||{}:(s=null,n=Ze[t]):s=null;while(s);return n}function hp(e){const t=[e];let s=Ze.themes[e]||{};do s.$extend&&!s.$resetCss?(t.push(s.$extend),s=Ze.themes[s.$extend]||{}):s=null;while(s);return t.map(n=>`v-popper--theme-${n}`)}function pi(e){const t=[e];let s=Ze.themes[e]||{};do s.$extend?(t.push(s.$extend),s=Ze.themes[s.$extend]||{}):s=null;while(s);return t}let St=!1;if(typeof window<"u"){St=!1;try{const e=Object.defineProperty({},"passive",{get(){St=!0}});window.addEventListener("test",null,e)}catch{}}let Hl=!1;typeof window<"u"&&typeof navigator<"u"&&(Hl=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream);const Rl=["auto","top","bottom","left","right"].reduce((e,t)=>e.concat([t,`${t}-start`,`${t}-end`]),[]),ui={hover:"mouseenter",focus:"focus",click:"click",touch:"touchstart"},di={hover:"mouseleave",focus:"blur",click:"click",touch:"touchend"};function hi(e,t){const s=e.indexOf(t);s!==-1&&e.splice(s,1)}function _n(){return new Promise(e=>requestAnimationFrame(()=>{requestAnimationFrame(e)}))}const Pe=[];let wt=null;const fi={};function mi(e){let t=fi[e];return t||(t=fi[e]=[]),t}let Wn=function(){};typeof window<"u"&&(Wn=window.Element);function K(e){return function(t){return Wt(t.theme,e)}}const wn="__floating-vue__popper";var Fl=()=>Q({name:"VPopper",provide(){return{[wn]:{parentPopper:this}}},inject:{[wn]:{default:null}},props:{theme:{type:String,required:!0},targetNodes:{type:Function,required:!0},referenceNode:{type:Function,required:!0},popperNode:{type:Function,required:!0},shown:{type:Boolean,default:!1},showGroup:{type:String,default:null},ariaId:{default:null},disabled:{type:Boolean,default:K("disabled")},positioningDisabled:{type:Boolean,default:K("positioningDisabled")},placement:{type:String,default:K("placement"),validator:e=>Rl.includes(e)},delay:{type:[String,Number,Object],default:K("delay")},distance:{type:[Number,String],default:K("distance")},skidding:{type:[Number,String],default:K("skidding")},triggers:{type:Array,default:K("triggers")},showTriggers:{type:[Array,Function],default:K("showTriggers")},hideTriggers:{type:[Array,Function],default:K("hideTriggers")},popperTriggers:{type:Array,default:K("popperTriggers")},popperShowTriggers:{type:[Array,Function],default:K("popperShowTriggers")},popperHideTriggers:{type:[Array,Function],default:K("popperHideTriggers")},container:{type:[String,Object,Wn,Boolean],default:K("container")},boundary:{type:[String,Wn],default:K("boundary")},strategy:{type:String,validator:e=>["absolute","fixed"].includes(e),default:K("strategy")},autoHide:{type:[Boolean,Function],default:K("autoHide")},handleResize:{type:Boolean,default:K("handleResize")},instantMove:{type:Boolean,default:K("instantMove")},eagerMount:{type:Boolean,default:K("eagerMount")},popperClass:{type:[String,Array,Object],default:K("popperClass")},computeTransformOrigin:{type:Boolean,default:K("computeTransformOrigin")},autoMinSize:{type:Boolean,default:K("autoMinSize")},autoSize:{type:[Boolean,String],default:K("autoSize")},autoMaxSize:{type:Boolean,default:K("autoMaxSize")},autoBoundaryMaxSize:{type:Boolean,default:K("autoBoundaryMaxSize")},preventOverflow:{type:Boolean,default:K("preventOverflow")},overflowPadding:{type:[Number,String],default:K("overflowPadding")},arrowPadding:{type:[Number,String],default:K("arrowPadding")},arrowOverflow:{type:Boolean,default:K("arrowOverflow")},flip:{type:Boolean,default:K("flip")},shift:{type:Boolean,default:K("shift")},shiftCrossAxis:{type:Boolean,default:K("shiftCrossAxis")}},emits:["show","hide","update:shown","apply-show","apply-hide","close-group","close-directive","auto-hide","resize","dispose"],data(){return{isShown:!1,isMounted:!1,skipTransition:!1,classes:{showFrom:!1,showTo:!1,hideFrom:!1,hideTo:!0},result:{x:0,y:0,placement:"",strategy:this.strategy,arrow:{x:0,y:0,centerOffset:0},transformOrigin:null},shownChildren:new Set,lastAutoHide:!0}},computed:{popperId(){return this.ariaId!=null?this.ariaId:this.randomId},shouldMountContent(){return this.eagerMount||this.isMounted},slotData(){return{popperId:this.popperId,isShown:this.isShown,shouldMountContent:this.shouldMountContent,skipTransition:this.skipTransition,autoHide:typeof this.autoHide=="function"?this.lastAutoHide:this.autoHide,show:this.show,hide:this.hide,handleResize:this.handleResize,onResize:this.onResize,classes:ys(Xe({},this.classes),{popperClass:this.popperClass}),result:this.positioningDisabled?null:this.result,attrs:this.$attrs}},parentPopper(){var e;return(e=this[wn])==null?void 0:e.parentPopper},hasPopperShowTriggerHover(){var e,t;return((e=this.popperTriggers)==null?void 0:e.includes("hover"))||((t=this.popperShowTriggers)==null?void 0:t.includes("hover"))}},watch:Xe(Xe({shown:"$_autoShowHide",disabled(e){e?this.dispose():this.init()},async container(){this.isShown&&(this.$_ensureTeleport(),await this.$_computePosition())}},["triggers","positioningDisabled"].reduce((e,t)=>(e[t]="$_refreshListeners",e),{})),["placement","distance","skidding","boundary","strategy","overflowPadding","arrowPadding","preventOverflow","shift","shiftCrossAxis","flip"].reduce((e,t)=>(e[t]="$_computePosition",e),{})),created(){this.$_isDisposed=!0,this.randomId=`popper_${[Math.random(),Date.now()].map(e=>e.toString(36).substring(2,10)).join("_")}`,this.autoMinSize&&console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'),this.autoMaxSize&&console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.")},mounted(){this.init(),this.$_detachPopperNode()},activated(){this.$_autoShowHide()},deactivated(){this.hide()},beforeUnmount(){this.dispose()},methods:{show({event:e=null,skipDelay:t=!1,force:s=!1}={}){var n,o;((n=this.parentPopper)==null?void 0:n.lockedChild)&&this.parentPopper.lockedChild!==this||(this.$_pendingHide=!1,(s||!this.disabled)&&(((o=this.parentPopper)==null?void 0:o.lockedChild)===this&&(this.parentPopper.lockedChild=null),this.$_scheduleShow(e,t),this.$emit("show"),this.$_showFrameLocked=!0,requestAnimationFrame(()=>{this.$_showFrameLocked=!1})),this.$emit("update:shown",!0))},hide({event:e=null,skipDelay:t=!1}={}){var s;if(!this.$_hideInProgress){if(this.shownChildren.size>0){this.$_pendingHide=!0;return}if(this.hasPopperShowTriggerHover&&this.$_isAimingPopper()){this.parentPopper&&(this.parentPopper.lockedChild=this,clearTimeout(this.parentPopper.lockedChildTimer),this.parentPopper.lockedChildTimer=setTimeout(()=>{this.parentPopper.lockedChild===this&&(this.parentPopper.lockedChild.hide({skipDelay:t}),this.parentPopper.lockedChild=null)},1e3));return}((s=this.parentPopper)==null?void 0:s.lockedChild)===this&&(this.parentPopper.lockedChild=null),this.$_pendingHide=!1,this.$_scheduleHide(e,t),this.$emit("hide"),this.$emit("update:shown",!1)}},init(){!this.$_isDisposed||(this.$_isDisposed=!1,this.isMounted=!1,this.$_events=[],this.$_preventShow=!1,this.$_referenceNode=this.referenceNode(),this.$_targetNodes=this.targetNodes().filter(e=>e.nodeType===e.ELEMENT_NODE),this.$_popperNode=this.popperNode(),this.$_innerNode=this.$_popperNode.querySelector(".v-popper__inner"),this.$_arrowNode=this.$_popperNode.querySelector(".v-popper__arrow-container"),this.$_swapTargetAttrs("title","data-original-title"),this.$_detachPopperNode(),this.triggers.length&&this.$_addEventListeners(),this.shown&&this.show())},dispose(){this.$_isDisposed||(this.$_isDisposed=!0,this.$_removeEventListeners(),this.hide({skipDelay:!0}),this.$_detachPopperNode(),this.isMounted=!1,this.isShown=!1,this.$_updateParentShownChildren(!1),this.$_swapTargetAttrs("data-original-title","title"),this.$emit("dispose"))},async onResize(){this.isShown&&(await this.$_computePosition(),this.$emit("resize"))},async $_computePosition(){var e;if(this.$_isDisposed||this.positioningDisabled)return;const t={strategy:this.strategy,middleware:[]};(this.distance||this.skidding)&&t.middleware.push(Wc({mainAxis:this.distance,crossAxis:this.skidding}));const s=this.placement.startsWith("auto");if(s?t.middleware.push(jc({alignment:(e=this.placement.split("-")[1])!=null?e:""})):t.placement=this.placement,this.preventOverflow&&(this.shift&&t.middleware.push(Kc({padding:this.overflowPadding,boundary:this.boundary,crossAxis:this.shiftCrossAxis})),!s&&this.flip&&t.middleware.push(Bc({padding:this.overflowPadding,boundary:this.boundary}))),t.middleware.push(Oc({element:this.$_arrowNode,padding:this.arrowPadding})),this.arrowOverflow&&t.middleware.push({name:"arrowOverflow",fn:({placement:o,rects:i,middlewareData:l})=>{let r;const{centerOffset:a}=l.arrow;return o.startsWith("top")||o.startsWith("bottom")?r=Math.abs(a)>i.reference.width/2:r=Math.abs(a)>i.reference.height/2,{data:{overflow:r}}}}),this.autoMinSize||this.autoSize){const o=this.autoSize?this.autoSize:this.autoMinSize?"min":null;t.middleware.push({name:"autoSize",fn:({rects:i,placement:l,middlewareData:r})=>{var a;if((a=r.autoSize)!=null&&a.skip)return{};let u,d;return l.startsWith("top")||l.startsWith("bottom")?u=i.reference.width:d=i.reference.height,this.$_innerNode.style[o==="min"?"minWidth":o==="max"?"maxWidth":"width"]=u!=null?`${u}px`:null,this.$_innerNode.style[o==="min"?"minHeight":o==="max"?"maxHeight":"height"]=d!=null?`${d}px`:null,{data:{skip:!0},reset:{rects:!0}}}})}(this.autoMaxSize||this.autoBoundaryMaxSize)&&(this.$_innerNode.style.maxWidth=null,this.$_innerNode.style.maxHeight=null,t.middleware.push(Yc({boundary:this.boundary,padding:this.overflowPadding,apply:({width:o,height:i})=>{this.$_innerNode.style.maxWidth=o!=null?`${o}px`:null,this.$_innerNode.style.maxHeight=i!=null?`${i}px`:null}})));const n=await rp(this.$_referenceNode,this.$_popperNode,t);Object.assign(this.result,{x:n.x,y:n.y,placement:n.placement,strategy:n.strategy,arrow:Xe(Xe({},n.middlewareData.arrow),n.middlewareData.arrowOverflow)})},$_scheduleShow(e=null,t=!1){if(this.$_updateParentShownChildren(!0),this.$_hideInProgress=!1,clearTimeout(this.$_scheduleTimer),wt&&this.instantMove&&wt.instantMove&&wt!==this.parentPopper){wt.$_applyHide(!0),this.$_applyShow(!0);return}t?this.$_applyShow():this.$_scheduleTimer=setTimeout(this.$_applyShow.bind(this),this.$_computeDelay("show"))},$_scheduleHide(e=null,t=!1){if(this.shownChildren.size>0){this.$_pendingHide=!0;return}this.$_updateParentShownChildren(!1),this.$_hideInProgress=!0,clearTimeout(this.$_scheduleTimer),this.isShown&&(wt=this),t?this.$_applyHide():this.$_scheduleTimer=setTimeout(this.$_applyHide.bind(this),this.$_computeDelay("hide"))},$_computeDelay(e){const t=this.delay;return parseInt(t&&t[e]||t||0)},async $_applyShow(e=!1){clearTimeout(this.$_disposeTimer),clearTimeout(this.$_scheduleTimer),this.skipTransition=e,!this.isShown&&(this.$_ensureTeleport(),await _n(),await this.$_computePosition(),await this.$_applyShowEffect(),this.positioningDisabled||this.$_registerEventListeners([...Bs(this.$_referenceNode),...Bs(this.$_popperNode)],"scroll",()=>{this.$_computePosition()}))},async $_applyShowEffect(){if(this.$_hideInProgress)return;if(this.computeTransformOrigin){const t=this.$_referenceNode.getBoundingClientRect(),s=this.$_popperNode.querySelector(".v-popper__wrapper"),n=s.parentNode.getBoundingClientRect(),o=t.x+t.width/2-(n.left+s.offsetLeft),i=t.y+t.height/2-(n.top+s.offsetTop);this.result.transformOrigin=`${o}px ${i}px`}this.isShown=!0,this.$_applyAttrsToTarget({"aria-describedby":this.popperId,"data-popper-shown":""});const e=this.showGroup;if(e){let t;for(let s=0;s<Pe.length;s++)t=Pe[s],t.showGroup!==e&&(t.hide(),t.$emit("close-group"))}Pe.push(this),document.body.classList.add("v-popper--some-open");for(const t of pi(this.theme))mi(t).push(this),document.body.classList.add(`v-popper--some-open--${t}`);this.$emit("apply-show"),this.classes.showFrom=!0,this.classes.showTo=!1,this.classes.hideFrom=!1,this.classes.hideTo=!1,await _n(),this.classes.showFrom=!1,this.classes.showTo=!0,this.$_popperNode.focus()},async $_applyHide(e=!1){if(this.shownChildren.size>0){this.$_pendingHide=!0,this.$_hideInProgress=!1;return}if(clearTimeout(this.$_scheduleTimer),!this.isShown)return;this.skipTransition=e,hi(Pe,this),Pe.length===0&&document.body.classList.remove("v-popper--some-open");for(const s of pi(this.theme)){const n=mi(s);hi(n,this),n.length===0&&document.body.classList.remove(`v-popper--some-open--${s}`)}wt===this&&(wt=null),this.isShown=!1,this.$_applyAttrsToTarget({"aria-describedby":void 0,"data-popper-shown":void 0}),clearTimeout(this.$_disposeTimer);const t=Wt(this.theme,"disposeTimeout");t!==null&&(this.$_disposeTimer=setTimeout(()=>{this.$_popperNode&&(this.$_detachPopperNode(),this.isMounted=!1)},t)),this.$_removeEventListeners("scroll"),this.$emit("apply-hide"),this.classes.showFrom=!1,this.classes.showTo=!1,this.classes.hideFrom=!0,this.classes.hideTo=!1,await _n(),this.classes.hideFrom=!1,this.classes.hideTo=!0},$_autoShowHide(){this.shown?this.show():this.hide()},$_ensureTeleport(){if(this.$_isDisposed)return;let e=this.container;if(typeof e=="string"?e=window.document.querySelector(e):e===!1&&(e=this.$_targetNodes[0].parentNode),!e)throw new Error("No container for popover: "+this.container);e.appendChild(this.$_popperNode),this.isMounted=!0},$_addEventListeners(){const e=s=>{this.isShown&&!this.$_hideInProgress||(s.usedByTooltip=!0,!this.$_preventShow&&this.show({event:s}))};this.$_registerTriggerListeners(this.$_targetNodes,ui,this.triggers,this.showTriggers,e),this.$_registerTriggerListeners([this.$_popperNode],ui,this.popperTriggers,this.popperShowTriggers,e);const t=s=>{s.usedByTooltip||this.hide({event:s})};this.$_registerTriggerListeners(this.$_targetNodes,di,this.triggers,this.hideTriggers,t),this.$_registerTriggerListeners([this.$_popperNode],di,this.popperTriggers,this.popperHideTriggers,t)},$_registerEventListeners(e,t,s){this.$_events.push({targetNodes:e,eventType:t,handler:s}),e.forEach(n=>n.addEventListener(t,s,St?{passive:!0}:void 0))},$_registerTriggerListeners(e,t,s,n,o){let i=s;n!=null&&(i=typeof n=="function"?n(i):n),i.forEach(l=>{const r=t[l];r&&this.$_registerEventListeners(e,r,o)})},$_removeEventListeners(e){const t=[];this.$_events.forEach(s=>{const{targetNodes:n,eventType:o,handler:i}=s;!e||e===o?n.forEach(l=>l.removeEventListener(o,i)):t.push(s)}),this.$_events=t},$_refreshListeners(){this.$_isDisposed||(this.$_removeEventListeners(),this.$_addEventListeners())},$_handleGlobalClose(e,t=!1){this.$_showFrameLocked||(this.hide({event:e}),e.closePopover?this.$emit("close-directive"):this.$emit("auto-hide"),t&&(this.$_preventShow=!0,setTimeout(()=>{this.$_preventShow=!1},300)))},$_detachPopperNode(){this.$_popperNode.parentNode&&this.$_popperNode.parentNode.removeChild(this.$_popperNode)},$_swapTargetAttrs(e,t){for(const s of this.$_targetNodes){const n=s.getAttribute(e);n&&(s.removeAttribute(e),s.setAttribute(t,n))}},$_applyAttrsToTarget(e){for(const t of this.$_targetNodes)for(const s in e){const n=e[s];n==null?t.removeAttribute(s):t.setAttribute(s,n)}},$_updateParentShownChildren(e){let t=this.parentPopper;for(;t;)e?t.shownChildren.add(this.randomId):(t.shownChildren.delete(this.randomId),t.$_pendingHide&&t.hide()),t=t.parentPopper},$_isAimingPopper(){const e=this.$_referenceNode.getBoundingClientRect();if(ls>=e.left&&ls<=e.right&&rs>=e.top&&rs<=e.bottom){const t=this.$_popperNode.getBoundingClientRect(),s=ls-rt,n=rs-at,i=t.left+t.width/2-rt+(t.top+t.height/2)-at+t.width+t.height,l=rt+s*i,r=at+n*i;return Cs(rt,at,l,r,t.left,t.top,t.left,t.bottom)||Cs(rt,at,l,r,t.left,t.top,t.right,t.top)||Cs(rt,at,l,r,t.right,t.top,t.right,t.bottom)||Cs(rt,at,l,r,t.left,t.bottom,t.right,t.bottom)}return!1}},render(){return this.$slots.default(this.slotData)}});typeof document<"u"&&typeof window<"u"&&(Hl?(document.addEventListener("touchstart",gi,St?{passive:!0,capture:!0}:!0),document.addEventListener("touchend",mp,St?{passive:!0,capture:!0}:!0)):(window.addEventListener("mousedown",gi,!0),window.addEventListener("click",fp,!0)),window.addEventListener("resize",yp));function gi(e){for(let t=0;t<Pe.length;t++){const s=Pe[t];try{const n=s.popperNode();s.$_mouseDownContains=n.contains(e.target)}catch{}}}function fp(e){Dl(e)}function mp(e){Dl(e,!0)}function Dl(e,t=!1){const s={};for(let n=Pe.length-1;n>=0;n--){const o=Pe[n];try{const i=o.$_containsGlobalTarget=gp(o,e);o.$_pendingHide=!1,requestAnimationFrame(()=>{if(o.$_pendingHide=!1,!s[o.randomId]&&bi(o,i,e)){if(o.$_handleGlobalClose(e,t),!e.closeAllPopover&&e.closePopover&&i){let r=o.parentPopper;for(;r;)s[r.randomId]=!0,r=r.parentPopper;return}let l=o.parentPopper;for(;l&&bi(l,l.$_containsGlobalTarget,e);){l.$_handleGlobalClose(e,t);l=l.parentPopper}}})}catch{}}}function gp(e,t){const s=e.popperNode();return e.$_mouseDownContains||s.contains(t.target)}function bi(e,t,s){return s.closeAllPopover||s.closePopover&&t||bp(e,s)&&!t}function bp(e,t){if(typeof e.autoHide=="function"){const s=e.autoHide(t);return e.lastAutoHide=s,s}return e.autoHide}function yp(e){for(let t=0;t<Pe.length;t++)Pe[t].$_computePosition(e)}function Un(){for(let e=0;e<Pe.length;e++)Pe[e].hide()}let rt=0,at=0,ls=0,rs=0;typeof window<"u"&&window.addEventListener("mousemove",e=>{rt=ls,at=rs,ls=e.clientX,rs=e.clientY},St?{passive:!0}:void 0);function Cs(e,t,s,n,o,i,l,r){const a=((l-o)*(t-i)-(r-i)*(e-o))/((r-i)*(s-e)-(l-o)*(n-t)),u=((s-e)*(t-i)-(n-t)*(e-o))/((r-i)*(s-e)-(l-o)*(n-t));return a>=0&&a<=1&&u>=0&&u<=1}var rn=(e,t)=>{const s=e.__vccOpts||e;for(const[n,o]of t)s[n]=o;return s};const vp={extends:Fl()};function _p(e,t,s,n,o,i){return S(),I("div",mo({ref:"reference",class:"v-popper"},e.$attrs,{class:{"v-popper--shown":e.slotData.isShown}}),[ft(e.$slots,"default",Pi(ho(e.slotData)))],16)}var wp=rn(vp,[["render",_p]]);function xp(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);var s=e.indexOf("Trident/");if(s>0){var n=e.indexOf("rv:");return parseInt(e.substring(n+3,e.indexOf(".",n)),10)}var o=e.indexOf("Edge/");return o>0?parseInt(e.substring(o+5,e.indexOf(".",o)),10):-1}let Ls;function Kn(){Kn.init||(Kn.init=!0,Ls=xp()!==-1)}var an={name:"ResizeObserver",props:{emitOnMount:{type:Boolean,default:!1},ignoreWidth:{type:Boolean,default:!1},ignoreHeight:{type:Boolean,default:!1}},emits:["notify"],mounted(){Kn(),Vt(()=>{this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitOnMount&&this.emitSize()});const e=document.createElement("object");this._resizeObject=e,e.setAttribute("aria-hidden","true"),e.setAttribute("tabindex",-1),e.onload=this.addResizeHandlers,e.type="text/html",Ls&&this.$el.appendChild(e),e.data="about:blank",Ls||this.$el.appendChild(e)},beforeUnmount(){this.removeResizeHandlers()},methods:{compareAndNotify(){(!this.ignoreWidth&&this._w!==this.$el.offsetWidth||!this.ignoreHeight&&this._h!==this.$el.offsetHeight)&&(this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitSize())},emitSize(){this.$emit("notify",{width:this._w,height:this._h})},addResizeHandlers(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.compareAndNotify),this.compareAndNotify()},removeResizeHandlers(){this._resizeObject&&this._resizeObject.onload&&(!Ls&&this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.removeEventListener("resize",this.compareAndNotify),this.$el.removeChild(this._resizeObject),this._resizeObject.onload=null,this._resizeObject=null)}}};const $p=pa();Fe("data-v-b329ee4c");const kp={class:"resize-observer",tabindex:"-1"};De();const Tp=$p((e,t,s,n,o,i)=>(S(),Ke("div",kp)));an.render=Tp;an.__scopeId="data-v-b329ee4c";an.__file="src/components/ResizeObserver.vue";var jl=(e="theme")=>({computed:{themeClass(){return hp(this[e])}}});const Cp=Q({name:"VPopperContent",components:{ResizeObserver:an},mixins:[jl()],props:{popperId:String,theme:String,shown:Boolean,mounted:Boolean,skipTransition:Boolean,autoHide:Boolean,handleResize:Boolean,classes:Object,result:Object},emits:["hide","resize"],methods:{toPx(e){return e!=null&&!isNaN(e)?`${e}px`:null}}}),Sp=["id","aria-hidden","tabindex","data-popper-placement"],Pp={ref:"inner",class:"v-popper__inner"},Lp=y("div",{class:"v-popper__arrow-outer"},null,-1),Ap=y("div",{class:"v-popper__arrow-inner"},null,-1),Ep=[Lp,Ap];function Mp(e,t,s,n,o,i){const l=ds("ResizeObserver");return S(),I("div",{id:e.popperId,ref:"popover",class:Le(["v-popper__popper",[e.themeClass,e.classes.popperClass,{"v-popper__popper--shown":e.shown,"v-popper__popper--hidden":!e.shown,"v-popper__popper--show-from":e.classes.showFrom,"v-popper__popper--show-to":e.classes.showTo,"v-popper__popper--hide-from":e.classes.hideFrom,"v-popper__popper--hide-to":e.classes.hideTo,"v-popper__popper--skip-transition":e.skipTransition,"v-popper__popper--arrow-overflow":e.result&&e.result.arrow.overflow,"v-popper__popper--no-positioning":!e.result}]]),style:ze(e.result?{position:e.result.strategy,transform:`translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`}:void 0),"aria-hidden":e.shown?"false":"true",tabindex:e.autoHide?0:void 0,"data-popper-placement":e.result?e.result.placement:void 0,onKeyup:t[2]||(t[2]=Sl(r=>e.autoHide&&e.$emit("hide"),["esc"]))},[y("div",{class:"v-popper__backdrop",onClick:t[0]||(t[0]=r=>e.autoHide&&e.$emit("hide"))}),y("div",{class:"v-popper__wrapper",style:ze(e.result?{transformOrigin:e.result.transformOrigin}:void 0)},[y("div",Pp,[e.mounted?(S(),I(U,{key:0},[y("div",null,[ft(e.$slots,"default")]),e.handleResize?(S(),Ke(l,{key:0,onNotify:t[1]||(t[1]=r=>e.$emit("resize",r))})):ke("",!0)],64)):ke("",!0)],512),y("div",{ref:"arrow",class:"v-popper__arrow-container",style:ze(e.result?{left:e.toPx(e.result.arrow.x),top:e.toPx(e.result.arrow.y)}:void 0)},Ep,4)],4)],46,Sp)}var ql=rn(Cp,[["render",Mp]]),Bl={methods:{show(...e){return this.$refs.popper.show(...e)},hide(...e){return this.$refs.popper.hide(...e)},dispose(...e){return this.$refs.popper.dispose(...e)},onResize(...e){return this.$refs.popper.onResize(...e)}}};const Ip=Q({name:"VPopperWrapper",components:{Popper:wp,PopperContent:ql},mixins:[Bl,jl("finalTheme")],props:{theme:{type:String,default:null}},computed:{finalTheme(){var e;return(e=this.theme)!=null?e:this.$options.vPopperTheme}},methods:{getTargetNodes(){return Array.from(this.$refs.popper.$el.children).filter(e=>e!==this.$refs.popperContent.$el)}}});function Op(e,t,s,n,o,i){const l=ds("PopperContent"),r=ds("Popper");return S(),Ke(r,{ref:"popper",theme:e.finalTheme,"target-nodes":e.getTargetNodes,"reference-node":()=>e.$refs.popper.$el,"popper-node":()=>e.$refs.popperContent.$el,class:Le([e.themeClass])},{default:Ee(({popperId:a,isShown:u,shouldMountContent:d,skipTransition:f,autoHide:m,show:x,hide:H,handleResize:R,onResize:P,classes:A,result:E})=>[ft(e.$slots,"default",{shown:u,show:x,hide:H}),Y(l,{ref:"popperContent","popper-id":a,theme:e.finalTheme,shown:u,mounted:d,"skip-transition":f,"auto-hide":m,"handle-resize":R,classes:A,result:E,onHide:H,onResize:P},{default:Ee(()=>[ft(e.$slots,"popper",{shown:u,hide:H})]),_:2},1032,["popper-id","theme","shown","mounted","skip-transition","auto-hide","handle-resize","classes","result","onHide","onResize"])]),_:3},8,["theme","target-nodes","reference-node","popper-node","class"])}var vo=rn(Ip,[["render",Op]]);const yi=Q(ys(Xe({},vo),{name:"VDropdown",vPopperTheme:"dropdown"})),vi=Q(ys(Xe({},vo),{name:"VMenu",vPopperTheme:"menu"})),_i=Q(ys(Xe({},vo),{name:"VTooltip",vPopperTheme:"tooltip"})),Np=Q({name:"VTooltipDirective",components:{Popper:Fl(),PopperContent:ql},mixins:[Bl],inheritAttrs:!1,props:{theme:{type:String,default:"tooltip"},html:{type:Boolean,default:e=>Wt(e.theme,"html")},content:{type:[String,Number,Function],default:null},loadingContent:{type:String,default:e=>Wt(e.theme,"loadingContent")}},data(){return{asyncContent:null}},computed:{isContentAsync(){return typeof this.content=="function"},loading(){return this.isContentAsync&&this.asyncContent==null},finalContent(){return this.isContentAsync?this.loading?this.loadingContent:this.asyncContent:this.content}},watch:{content:{handler(){this.fetchContent(!0)},immediate:!0},async finalContent(){await this.$nextTick(),this.$refs.popper.onResize()}},created(){this.$_fetchId=0},methods:{fetchContent(e){if(typeof this.content=="function"&&this.$_isShown&&(e||!this.$_loading&&this.asyncContent==null)){this.asyncContent=null,this.$_loading=!0;const t=++this.$_fetchId,s=this.content(this);s.then?s.then(n=>this.onResult(t,n)):this.onResult(t,s)}},onResult(e,t){e===this.$_fetchId&&(this.$_loading=!1,this.asyncContent=t)},onShow(){this.$_isShown=!0,this.fetchContent()},onHide(){this.$_isShown=!1}}}),Hp=["innerHTML"],Rp=["textContent"];function Fp(e,t,s,n,o,i){const l=ds("PopperContent"),r=ds("Popper");return S(),Ke(r,mo({ref:"popper"},e.$attrs,{theme:e.theme,"popper-node":()=>e.$refs.popperContent.$el,onApplyShow:e.onShow,onApplyHide:e.onHide}),{default:Ee(({popperId:a,isShown:u,shouldMountContent:d,skipTransition:f,autoHide:m,hide:x,handleResize:H,onResize:R,classes:P,result:A})=>[Y(l,{ref:"popperContent",class:Le({"v-popper--tooltip-loading":e.loading}),"popper-id":a,theme:e.theme,shown:u,mounted:d,"skip-transition":f,"auto-hide":m,"handle-resize":H,classes:P,result:A,onHide:x,onResize:R},{default:Ee(()=>[e.html?(S(),I("div",{key:0,innerHTML:e.finalContent},null,8,Hp)):(S(),I("div",{key:1,textContent:J(e.finalContent)},null,8,Rp))]),_:2},1032,["class","popper-id","theme","shown","mounted","skip-transition","auto-hide","handle-resize","classes","result","onHide","onResize"])]),_:1},16,["theme","popper-node","onApplyShow","onApplyHide"])}var Dp=rn(Np,[["render",Fp]]);const zl="v-popper--has-tooltip";function jp(e,t){let s=e.placement;if(!s&&t)for(const n of Rl)t[n]&&(s=n);return s||(s=Wt(e.theme||"tooltip","placement")),s}function Wl(e,t,s){let n;const o=typeof t;return o==="string"?n={content:t}:t&&o==="object"?n=t:n={content:!1},n.placement=jp(n,s),n.targetNodes=()=>[e],n.referenceNode=()=>e,n}let xn,gs,qp=0;function Bp(){if(xn)return;gs=He([]),xn=Pl({name:"VTooltipDirectiveApp",setup(){return{directives:gs}},render(){return this.directives.map(t=>oc(Dp,ys(Xe({},t.options),{shown:t.shown||t.options.shown,key:t.id})))},devtools:{hide:!0}});const e=document.createElement("div");document.body.appendChild(e),xn.mount(e)}function Ul(e,t,s){Bp();const n=He(Wl(e,t,s)),o=He(!1),i={id:qp++,options:n,shown:o};return gs.value.push(i),e.classList&&e.classList.add(zl),e.$_popper={options:n,item:i,show(){o.value=!0},hide(){o.value=!1}}}function Kl(e){if(e.$_popper){const t=gs.value.indexOf(e.$_popper.item);t!==-1&&gs.value.splice(t,1),delete e.$_popper,delete e.$_popperOldShown,delete e.$_popperMountTarget}e.classList&&e.classList.remove(zl)}function wi(e,{value:t,modifiers:s}){const n=Wl(e,t,s);if(!n.content||Wt(n.theme||"tooltip","disabled"))Kl(e);else{let o;e.$_popper?(o=e.$_popper,o.options.value=n):o=Ul(e,t,s),typeof t.shown<"u"&&t.shown!==e.$_popperOldShown&&(e.$_popperOldShown=t.shown,t.shown?o.show():o.hide())}}var zp={beforeMount:wi,updated:wi,beforeUnmount(e){Kl(e)}};function xi(e){e.addEventListener("click",Yl),e.addEventListener("touchstart",Vl,St?{passive:!0}:!1)}function $i(e){e.removeEventListener("click",Yl),e.removeEventListener("touchstart",Vl),e.removeEventListener("touchend",Jl),e.removeEventListener("touchcancel",Xl)}function Yl(e){const t=e.currentTarget;e.closePopover=!t.$_vclosepopover_touch,e.closeAllPopover=t.$_closePopoverModifiers&&!!t.$_closePopoverModifiers.all}function Vl(e){if(e.changedTouches.length===1){const t=e.currentTarget;t.$_vclosepopover_touch=!0;const s=e.changedTouches[0];t.$_vclosepopover_touchPoint=s,t.addEventListener("touchend",Jl),t.addEventListener("touchcancel",Xl)}}function Jl(e){const t=e.currentTarget;if(t.$_vclosepopover_touch=!1,e.changedTouches.length===1){const s=e.changedTouches[0],n=t.$_vclosepopover_touchPoint;e.closePopover=Math.abs(s.screenY-n.screenY)<20&&Math.abs(s.screenX-n.screenX)<20,e.closeAllPopover=t.$_closePopoverModifiers&&!!t.$_closePopoverModifiers.all}}function Xl(e){const t=e.currentTarget;t.$_vclosepopover_touch=!1}var Wp={beforeMount(e,{value:t,modifiers:s}){e.$_closePopoverModifiers=s,(typeof t>"u"||t)&&xi(e)},updated(e,{value:t,oldValue:s,modifiers:n}){e.$_closePopoverModifiers=n,t!==s&&(typeof t>"u"||t?xi(e):$i(e))},beforeUnmount(e){$i(e)}};function Up(e,t={}){e.$_vTooltipInstalled||(e.$_vTooltipInstalled=!0,Nl(Ze,t),e.directive("tooltip",zp),e.directive("close-popper",Wp),e.component("v-tooltip",_i),e.component("VTooltip",_i),e.component("v-dropdown",yi),e.component("VDropdown",yi),e.component("v-menu",vi),e.component("VMenu",vi))}const Kp={version:"2.0.0-beta.17",install:Up,options:Ze},$n="html_css_training_progress",Yp={completed:{},currentChapter:1,currentLevel:0,hasCompleted(e,t){return Array.isArray(this.completed[e])&&this.completed[e].includes(t)},completeLevel(){const e=this.currentChapter,t=this.currentLevel;this.hasCompleted(e,t)||(this.completed.hasOwnProperty(e)||(this.completed[e]=[]),this.completed[e].push(t),this.save())},getPercentCompleted(e){return Array.isArray(this.completed[e])?Rs(this.completed[e].length/Ge[e-1].levels.length*100,0,100):0},load(){var e;try{Object.assign(this,JSON.parse((e=localStorage.getItem($n))!=null?e:"{}"))}catch{localStorage.removeItem($n),this.reset()}},save(){localStorage.setItem($n,JSON.stringify(C.progress))},reset(){this.currentChapter=1,this.currentLevel=0,this.completed={},this.save()}};let Vp=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,s)=>(s&=63,s<36?t+=s.toString(36):s<62?t+=(s-26).toString(36).toUpperCase():s>62?t+="-":t+="_",t),"");function Jp(e){const t=e.contentDocument,s=e.contentWindow;((n,o)=>{const i="div",l=["#c33","#ea4c88","#639","#06c","#690","#fc3","#f90","#963"];function r(E){return l[E%(l.length-1)]}function a(E,M,D,ne,ue,he,se,j){const ie=t.createElement(i);return ie.dataset.faceFor=j,new Map().set("position","absolute").set("transform-origin",["left","top"]).set("background",se).set("width",`${ne}px`).set("height",`${ue}px`).set("opacity","0.8").set("transform",`translate3d(${E}px, ${M}px, ${D}px) rotateX(270deg) rotateY(${he}deg)`).forEach((oe,re)=>ie.style[re]=Array.isArray(oe)?oe.join(" "):oe),ie.outerHTML}const u=.001;let d="";function f(E,M,D,ne){const ue=E.childNodes,he=ue.length;for(let se=0;se<he;se++){const j=ue[se];if(j.nodeType===Node.ELEMENT_NODE){const ie=Vp();j.dataset.uid=ie,j.style.overflow="visible",j.style.transformStyle="preserve-3d",j.style.transform=`translateZ(${(n+(he-se)*u).toFixed(3)}px)`;let oe=D,re=ne;j.offsetParent===E&&(oe+=E.offsetLeft,re+=E.offsetTop),f(j,M+1,oe,re);const ye=(M+1)*n,fe=r(M);d+=a(oe+j.offsetLeft,re+j.offsetTop,ye,j.offsetWidth,n,0,fe,ie),d+=a(oe+j.offsetLeft+j.offsetWidth,re+j.offsetTop,ye,j.offsetHeight,n,270,fe,ie),d+=a(oe+j.offsetLeft,re+j.offsetTop+j.offsetHeight,ye,j.offsetWidth,n,0,fe,ie),d+=a(oe+j.offsetLeft,re+j.offsetTop,ye,j.offsetHeight,n,270,fe,ie)}}}const m=t.body;m.style.overflow="visible",m.style.transformStyle="preserve-3d",m.style.perspective=o.toString();const x=E=>(E/2).toFixed(2),H=`${x(s.innerWidth)}px ${x(s.innerHeight)}px`;m.style.perspectiveOrigin=H,m.style.transformOrigin=H,f(m,0,0,0),t.addEventListener("mousemove",E=>{if(!E.ctrlKey){const M=E.clientX/s.innerWidth,D=1-E.clientY/s.innerHeight,ne=120,ue=he=>((he-.5)*ne).toFixed(2);m.style.transform=`rotateX(${ue(D)}deg) rotateY(${ue(M)}deg)`}},!0),t.addEventListener("mouseover",E=>{if(E.ctrlKey){const M=E.target,D=M.dataset.uid||M.dataset.faceFor;M.dataset.faceFor&&Array.from(t.querySelectorAll(`[data-uid="${D}"], [data-face-for="${D}"]`)).forEach(ne=>ne.classList.add("hovered"))}}),t.addEventListener("mouseleave",E=>{t.querySelectorAll(".hovered").forEach(M=>M.classList.remove("hovered"))}),t.addEventListener("mouseout",E=>{const M=E.target,D=M.dataset.uid||M.dataset.faceFor;Array.from(t.querySelectorAll(`[data-uid="${D}"], [data-face-for="${D}"]`)).forEach(ne=>ne.classList.remove("hovered"))}),t.addEventListener("click",E=>{var D;let M=E.target;M.nodeName==="A"&&E.preventDefault(),M.dataset.faceFor&&(M=t.querySelector(`[data-uid="${M.dataset.faceFor}"]`)),M&&((D=s.top)==null||D.postMessage({event:"elementClick",tag:M.tagName.toLowerCase(),type:M.getAttribute("type")}))});const R=t.createElement(i);R.style.position="absolute",R.style.transformStyle="preserve-3d";const{marginTop:P,marginLeft:A}=getComputedStyle(m);R.style.top=`-${P}`,R.style.left=`-${A}`,R.innerHTML=d,m.appendChild(R),m.style.transition="transform 400ms ease-in-out",m.style.transform="rotateX(-22.5deg) rotateY(12.5deg)",setTimeout(()=>{m.style.transition=""},400)})(50,5e3)}var ki;const vs=typeof window<"u",Xp=e=>typeof e=="string",kn=()=>{};vs&&((ki=window==null?void 0:window.navigator)==null?void 0:ki.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Gp(e){return Tr()?(Cr(e),!0):!1}function Zp(e){var t;const s=k(e);return(t=s==null?void 0:s.$el)!=null?t:s}const Gl=vs?window:void 0;vs&&window.document;vs&&window.navigator;vs&&window.location;function Zl(...e){let t,s,n,o;if(Xp(e[0])?([s,n,o]=e,t=Gl):[t,s,n,o]=e,!t)return kn;let i=kn;const l=ss(()=>Zp(t),a=>{i(),a&&(a.addEventListener(s,n,o),i=()=>{a.removeEventListener(s,n,o),i=kn})},{immediate:!0,flush:"post"}),r=()=>{l(),i()};return Gp(r),r}const Qp=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function Tn(e,t,s={}){const{target:n=Gl,eventName:o="keydown",passive:i=!1}=s,l=Qp(e);return Zl(n,o,a=>{l(a)&&t(a)},i)}const Yn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Vn="__vueuse_ssr_handlers__";Yn[Vn]=Yn[Vn]||{};Yn[Vn];var Ti;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ti||(Ti={}));const Ql=e=>(Fe("data-v-e7d0c50c"),e=e(),De(),e),eu={key:0},tu=ae("Use the "),su=Ql(()=>y("b",null,"3D",-1)),nu=ae(" view and the "),ou=Ql(()=>y("b",null,"Ctrl",-1)),iu=ae(" key to select elements in the DOM."),lu=[tu,su,nu,ou,iu],ru=Q({__name:"InteractiveDOM",setup(e){const t=ge(()=>C.level),s=He(!1),n=He(null),o=He(!1);function i(){if(!n.value)return;const l=n.value;s.value===!0&&l.contentWindow?(l.contentWindow.location.reload(),s.value=!1):(Jp(l),s.value=!0)}return Zl("message",l=>{if(l.data.event==="elementClick"){const r=l.data,a=r.tag,u=C.level;if(a==null||!u.tag)return;bu(r,u)?(o.value=!0,setTimeout(()=>{o.value=!1,Ut()},600)):ms(document.querySelector("iframe"))}}),(l,r)=>(S(),I(U,null,[y("p",{class:"order",style:ze({opacity:k(t).order&&!o.value?1:0})},J(k(t).order||"\xA0"),5),y("iframe",{src:"demo/chapter1.html",ref_key:"iframe",ref:n,scrolling:"no"},null,512),k(t).order&&k(t).tag?(S(),I("p",eu,lu)):ke("",!0),y("button",{onClick:i,id:"button-3d"},J(s.value?"2D":"3D"),1)],64))}});const de=(e,t)=>{const s=e.__vccOpts||e;for(const[n,o]of t)s[n]=o;return s},au=de(ru,[["__scopeId","data-v-e7d0c50c"]]),cu=e=>(Fe("data-v-0745dc53"),e=e(),De(),e),pu={class:"instructions"},uu=["innerHTML"],du=cu(()=>y("hr",null,null,-1)),hu={class:"title"},fu=["innerHTML"],mu={class:"actions"},gu=Q({__name:"LevelInstructions",setup(e){const t=ge(()=>C.level);return(s,n)=>(S(),I(U,null,[y("div",pu,[k(Ue).instructions?(S(),I(U,{key:0},[y("div",{innerHTML:k(Ue).instructions},null,8,uu),du],64)):ke("",!0),y("h3",hu,J(k(t).name),1),y("div",{innerHTML:k(C).level.instructions},null,8,fu)]),y("div",mu,[k(t).skippable?(S(),I("button",{key:0,onClick:n[0]||(n[0]=(...o)=>k(Ut)&&k(Ut)(...o))},"Next")):ke("",!0)])],64))}});const er=de(gu,[["__scopeId","data-v-0745dc53"]]);function bu(e,t){return(!t.tag||e.tag===t.tag)&&(!t.type||e.type===t.type)}const tr=[{name:"HTML and the DOM",skippable:!0,instructions:`<img src="img/chef.png" style="width: 88px; margin-right: 0 auto"/>
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
        `}],yu={name:"HTML - Semantics",description:"Why semantics matter",intro:`
    <p>HTML is the markup language that describes the <strong>content</strong> of web pages.</p>
    <p>In this chapter, we will look at the different elements available in HTML and why understanding the purpose of each of them is important for you and your visitors.</p>`,levels:tr,leftPanelComponent:au,rightPanelComponent:er},C=Vs({progress:Yp,level:tr[0],menuOpened:!1});C.progress.load();function _o(){C.menuOpened=!1}function Ci(){confirm("Do you really want to reset your progress ?")&&(C.progress.reset(),wo(),_o())}function Ut(){C.progress.completeLevel(),Pt(C.progress.currentChapter,C.progress.currentLevel+1)}function Pt(e,t){const s=Ge[e-1];t>s.levels.length&&e<Ge.length?(e++,t=0):t<0&&e>1&&(e=Math.max(1,e-1),t=Ge[e-1].levels.length);const n=Rs(e,1,Ge.length),o=Rs(t,0,Ge[e-1].levels.length);(o!==C.progress.currentLevel||n!==C.progress.currentChapter)&&(C.progress.currentChapter=n,C.progress.currentLevel=o,Un(),wo(),_o())}function wo(){const e=Ue.value,t=e.levels;C.progress.currentLevel=Rs(C.progress.currentLevel,0,t.length),C.level=t[C.progress.currentLevel-1],C.progress.save(),e.onLevelStart&&e.onLevelStart(C.level)}const vu={class:"input-header"},_u={key:0,class:"file-name"},wu={class:"file-window"},xu={class:"line-numbers"},$u=y("br",null,null,-1),Jn=Q({__name:"EditorPane",props:{title:String,fileName:{type:String,required:!1},lang:String,nbLines:{type:Number,default:20}},setup(e){return(t,s)=>(S(),I("div",{class:Le(["editor-pane",e.lang+"-view"])},[y("div",vu,[e.fileName?(S(),I("div",_u,J(e.fileName),1)):ke("",!0),ae(" "+J(e.title),1)]),y("div",wu,[y("div",xu,[(S(!0),I(U,null,dt(e.nbLines,n=>(S(),I(U,null,[ae(J(n),1),$u],64))),256))]),ft(t.$slots,"default")])],2))}});const ku={class:"markup"},sr=Q({__name:"HTMLMarkup",props:{markup:String},setup(e){const t=e,s=He(null);rl(n),ss(()=>t.markup,n);function n(){var l;const i=document.createElement("div");i.innerHTML=(l=t.markup)!=null?l:"",s.value&&(s.value.innerHTML=o(i,!0).innerHTML)}function o(i,l){const r=i.tagName.toLowerCase(),a=document.createElement("div"),u=i.getAttributeNames().map(f=>`${f}="${i.getAttribute(f)}"`).join(" "),d=Array.from(i.children);return d.length>0?(l||(a.textContent=`<${r}${u?" "+u:""}>`),d.forEach(f=>a.appendChild(o(f,!1))),l||a.appendChild(document.createTextNode(`</${r}>`))):a.textContent=`<${r}${u?" "+u:""} />`,a}return(i,l)=>(S(),I("div",ku,[y("div",{ref_key:"container",ref:s},null,512)]))}});const Tu=e=>(Fe("data-v-bfe1e005"),e=e(),De(),e),Cu=["onKeydown","onKeyup","placeholder"],Su=Tu(()=>y("span",{class:"plus"},"+",-1)),Pu=Q({__name:"Editor",props:{placeholder:String},emits:["input"],setup(e,{emit:t}){const s=()=>o.value?o.value.value:"",n=He(null),o=He(null),i=ge(()=>C.level),l=ge(()=>{var u;return{height:((u=C.level.inputLinesNumber)!=null?u:1)*1.5+"em"}});function r(u){var m;const f=s().split(`
`).map(x=>x.trim()).map(x=>x.endsWith(";")?x:x+";");if(f.length>=((m=i.value.inputLinesNumber)!=null?m:1)){u.preventDefault();const x=n.value;x.classList.remove("enterhit"),setTimeout(()=>x.classList.add("enterhit"),0)}o.value&&(o.value.value=f.join(`
`)),t("input",f.join(`
`))}function a(){const u=o.value;u.classList.toggle("input-strobe",u.value.length>0)}return(u,d)=>(S(),I("div",{class:"editor",onClick:d[0]||(d[0]=f=>{var m;return(m=o.value)==null?void 0:m.focus()})},[Y(Jn,{title:"CSS Editor",fileName:"style.css",lang:"css"},{default:Ee(()=>[ft(u.$slots,"code-before",{},void 0,!0),y("textarea",{id:"editor-input",class:"input-strobe",type:"text",ref_key:"inputElement",ref:o,onKeydown:Sl(r,["enter"]),onKeyup:Hs(a,["prevent"]),placeholder:e.placeholder,style:ze(k(l))},null,44,Cu),Su,y("div",{class:"enter-button",onClick:r,ref_key:"enterButton",ref:n},"enter",512),ft(u.$slots,"code-after",{},void 0,!0)]),_:3}),Y(Jn,{title:"HTML Viewer",fileName:"table.html",lang:"html"},{default:Ee(()=>[Y(sr,{markup:k(i).markup},null,8,["markup"])]),_:1})]))}});const nr=de(Pu,[["__scopeId","data-v-bfe1e005"]]),Lu={name:"Table",props:["content","hintContent"]};const or=e=>(Fe("data-v-5e236d31"),e=e(),De(),e),Au={class:"table-wrapper"},Eu={class:"table-surface",ref:"surface"},Mu={class:"table"},Iu=["innerHTML"],Ou=["innerHTML"],Nu={key:2,ref:"board",class:"table-board"},Hu={class:"table-edge",ref:"edge"},Ru=or(()=>y("div",{class:"table-leg"},null,-1)),Fu=or(()=>y("div",{class:"table-leg"},null,-1)),Du=[Ru,Fu];function ju(e,t,s,n,o,i){return S(),I("div",Au,[y("div",Eu,null,512),y("div",Mu,[s.hintContent?(S(),I("div",{key:0,class:"hint-content",innerHTML:s.hintContent},null,8,Iu)):ke("",!0),s.content?(S(),I("div",{key:1,innerHTML:s.content,ref:"board",class:"table-board"},null,8,Ou)):(S(),I("div",Nu,[ft(e.$slots,"default",{},void 0,!0)],512))]),y("div",Hu,Du,512)])}const xo=de(Lu,[["render",ju],["__scopeId","data-v-5e236d31"]]);function qu(e){const t=C.level;Fs();const s=document.querySelector(".table-board");try{s.querySelectorAll(e)}catch{e=""}const n=e?Array.from(s.querySelectorAll(e)):[],o=Array.from(s.querySelectorAll(t.selector));let i=!1;if(n.length==0&&ms(document.querySelector(".editor")),n.length===o.length&&n.length>0&&(i=Bu(n,o)),i){n.forEach(r=>{r.classList.remove("strobe"),r.classList.add("clean")});const l=document.querySelector(".editor input");l.value="",setTimeout(function(){Ut()},1e3)}else n.forEach(l=>{l.classList.remove("strobe"),ms(l)}),setTimeout(function(){Fs(),o.forEach(l=>{l.classList.add("strobe")})},500)}function Bu(e,t){return e.length===t.length&&e.every(s=>t.includes(s))}function zu(e,t){const s=C.level;Fs();const n=document.querySelector(".table-board"),o=Array.from(n.querySelectorAll(e));o.forEach(l=>{var r,a;return l.setAttribute("style",[(r=l.getAttribute("data-existing-style"))!=null?r:"",...(a=s.cssRules[s.selector])!=null?a:[],t].join(";"))}),Wu(o,s)?(o.forEach(l=>{l.classList.remove("strobe")}),setTimeout(function(){Ut()},1500)):o.forEach(l=>{l.classList.remove("strobe"),ms(document.querySelector(".table"))})}function Wu(e,t){return t.check?t.check.every(([s,n])=>e.every(o=>{const i=o.style.getPropertyValue(s);return typeof i=="string"&&i===n||typeof n=="function"&&n(i)?!0:(console.log(`Expected ${s} to be ${n}, got ${i}`),!1)})):!0}const $o=e=>(Fe("data-v-14d0adf0"),e=e(),De(),e),Uu={class:"order"},Ku={class:"game-container"},Yu={class:"game-wrapper"},Vu=$o(()=>y("br",null,null,-1)),Ju=ae("{"),Xu=$o(()=>y("br",null,null,-1)),Gu=ae(" /* Styles would go here. */"),Zu=$o(()=>y("br",null,null,-1)),Qu=ae(" } "),ed=Q({__name:"SelectorGame",setup(e){const t=ge(()=>C.level);return(s,n)=>(S(),I(U,null,[y("p",Uu,J(k(t).doThis),1),y("div",Ku,[y("div",Yu,[Y(xo,{content:k(t).markup},null,8,["content"])])]),Y(nr,{placeholder:"Type in a CSS selector",onInput:k(qu)},{"code-after":Ee(()=>[Vu,Ju,Xu,Gu,Zu,Qu]),_:1},8,["onInput"])],64))}});const td=de(ed,[["__scopeId","data-v-14d0adf0"]]),sd={class:"display-help"},nd={class:"title"},od={key:0,class:"syntax"},id=["innerHTML"],ld={key:1,class:"examples-title"},rd={class:"examples"},ad=["innerHTML"],cd=Q({__name:"SyntaxLevelInstructions",setup(e){const t=ge(()=>C.level);return(s,n)=>(S(),I("div",sd,[y("h3",nd,J(k(t).helpTitle||k(t).name),1),k(t).syntax?(S(),I("p",od,[y("pre",null,J(k(t).syntax),1)])):ke("",!0),y("div",{class:"hint",innerHTML:k(t).help},null,8,id),k(t).examples&&k(t).examples.length>0?(S(),I("h4",ld,"Examples")):ke("",!0),y("div",rd,[(S(!0),I(U,null,dt(k(t).examples,o=>(S(),I("div",{class:"example",key:o,innerHTML:o},null,8,ad))),128))])]))}});const ko=de(cd,[["__scopeId","data-v-e4801f67"]]);function cn(){Array.from(document.querySelectorAll(".table-board *")).forEach(t=>{Ul(t,{triggers:["hover"],content:pd(t),delay:0},null),t.addEventListener("mouseover",s=>{s.stopPropagation(),Un()}),t.addEventListener("mouseenter",s=>{s.stopPropagation(),Un()})})}function pd(e){const t=e.tagName.toLowerCase(),s=e.getAttribute("class"),n=e.getAttribute("id");return`<${t}${n?` id="${n}"`:""}${s?` class="${s}"`:""}>`}const ud=[{name:"Type Selector",helpTitle:"Select elements by their type",doThis:"Select the plates",selector:"plate",syntax:"tagname",help:"Selects all elements of a type. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",examples:["<strong>div</strong> selects all <tag>div</tag> elements.","<strong>p</strong> selects all <tag>p</tag> elements."],markup:`
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
    `}],dd={name:"CSS - Selectors",levels:ud,leftPanelComponent:td,rightPanelComponent:ko,credits:'Credits: <a href="http://www.twitter.com/flukeout">@flukeout</a> for his work on <a href="https://flukeout.github.io/" target="_blank">CSS diner</a> that served as the foundation for this website',intro:`
    <p>To apply CSS to an element you need to select this element with a <b>selector</b>.</p>
    <p>CSS provides you with a number of different ways to do this, and you can explore them in this chapter.</p>`,onLevelStart(){const e=document.querySelector(".editor textarea");e instanceof HTMLTextAreaElement&&(e.value="",e.focus()),Vt(()=>cn())}},hd={class:"customer-wrapper"},fd={class:"customer-speech-bubble"},md={class:"customer-body"},gd={class:"code"},bd=Q({__name:"Customer",props:{request:String,selector:String,meal:String},setup(e){return(t,s)=>(S(),I("div",hd,[y("div",fd,J(e.request),1),y("div",md,[y("div",gd,[y("pre",null,J(e.selector)+` {\r
  meal: `+J(e.meal)+`;\r
}`,1)])])]))}});const yd=de(bd,[["__scopeId","data-v-c1c4318a"]]),vd={class:"game-container"},_d={class:"game-wrapper"},wd={class:"customers"},xd={class:"editor"},$d=Q({__name:"SpecificityGame",setup(e){const t=ge(()=>C.level);function s(r){const a=r.target.closest("plate");a&&o(a)}const n=["sushi","toast","apple","pickle"];function o(r){var d,f;const a=r.firstChild,u=n[n.indexOf((f=(d=a==null?void 0:a.tagName)==null?void 0:d.toLowerCase())!=null?f:"soup")+1]||"sushi";a==null?r.appendChild(document.createElement(u)):r.replaceChild(document.createElement(u),a)}const i=He(null);function l(){const a=[...i.value.$el.querySelectorAll("plate")].map(u=>u.firstElementChild?u.firstElementChild.tagName.toLowerCase():"");Td(a)}return(r,a)=>(S(),I("div",vd,[y("div",_d,[Y(xo,{content:k(t).markup,onClick:s,ref_key:"table",ref:i},null,8,["content"]),y("div",{class:"actions"},[y("button",{onClick:l,id:"submit-button"},"Validate")]),y("div",wd,[(S(!0),I(U,null,dt(k(t).customers,u=>(S(),Ke(yd,Pi(ho(u)),null,16))),256))]),y("div",xd,[Y(Jn,{title:"HTML Viewer",fileName:"table.html",lang:"html"},{default:Ee(()=>[Y(sr,{markup:k(t).markup},null,8,["markup"])]),_:1})])])]))}});const kd=de($d,[["__scopeId","data-v-2c113a52"]]);function Td(e){const t=C.level;Fs();const s=document.querySelectorAll(".table-board plate");e.length===t.solution.length&&t.solution.every((o,i)=>e[i]===o)?(s.forEach(o=>{o.classList.add("clean")}),setTimeout(function(){Ut()},1e3)):e.forEach((o,i)=>{if(t.solution[i]!==o){const l=s[i];ms(l)}})}const Cd=[{name:"ID vs tag",markup:`
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
        `,customers:[{selector:"bento.green *",meal:"pickle",request:"Put pickles in green bentos"},{selector:"#fancy",meal:"apple",request:"Put an apple on the fancy plate"},{selector:"plate:first-child",meal:"toast",request:"Put toasts on the first plate of each bento"},{selector:"plate:not(.square)",meal:"sushi",request:"Put sushis on plates not square"}],instructions:"<p>Combine all what you learned to solve this one!</p>",solution:["apple","sushi","pickle","toast","sushi",""]}],Sd={name:"CSS - Specificity",description:"When two properties override each other, the more specific selector wins",intro:`
    <p>Each selector in CSS has a certain level of specificity. For example, <code>div</code> has a low specificity because it targets any <tag>div</tag> in the document, while <code>#login-box</code> has a higher specificity because it only targets a element with a specific ID.</p>
    <p>The specificity matters when an element matches two selectors or more with conflicting properties assignment. The final property will be the one associated to the selector having the highest specificity.</p>
    <p>In this chapter, we will see how specificity is calculated and how you can use it to properly override styles.</p>`,instructions:`
    <p>Your customers have ordered a meal, but with conflicting instructions. The more specific the request, the higher the priority should be.</p>
    <p>Select the appropriate meal for each customer. You can change the meal by clicking on the plate.</p>
    <p>To help you, here is a <a target="_blank" href="img/specifishity.png">cheat sheet on specificity explained with fish</a>.</p>`,levels:Cd,leftPanelComponent:kd,rightPanelComponent:er,onLevelStart(){Vt(()=>cn())}},At=e=>(Fe("data-v-e2cca0c1"),e=e(),De(),e),Pd={class:"order"},Ld={class:"game-container"},Ad=At(()=>y("br",null,null,-1)),Ed=At(()=>y("br",null,null,-1)),Md=ae(" }"),Id=At(()=>y("br",null,null,-1)),Od=At(()=>y("br",null,null,-1)),Nd=At(()=>y("br",null,null,-1)),Hd=At(()=>y("br",null,null,-1)),Rd=At(()=>y("br",null,null,-1)),Fd=ae("} "),Dd=Q({__name:"LayoutGame",setup(e){const t=ge(()=>C.level),s=ge(()=>Object.fromEntries(Object.entries(t.value.cssRules).filter(([n])=>n!==t.value.selector)));return(n,o)=>(S(),I(U,null,[y("p",Pd,J(k(t).doThis),1),y("div",Ld,[y("div",{class:Le(["game-wrapper",k(t).wrapperClass])},[(S(),Ke(xo,{content:k(t).markup,hintContent:k(t).hintMarkup,key:k(t).name},null,8,["content","hintContent"]))],2)]),Y(nr,{placeholder:"Type styles here",onInput:o[0]||(o[0]=i=>k(zu)(k(t).selector,i))},{"code-before":Ee(()=>[(S(!0),I(U,null,dt(k(s),(i,l)=>(S(),I(U,{key:"selector_"+l},[ae(J(l)+" {",1),Ad,(S(!0),I(U,null,dt(i,r=>(S(),I(U,{key:l+"_"+r},[ae("\xA0\xA0"+J(r)+";",1),Ed],64))),128)),Md,Id,Od],64))),128)),ae(" "+J(k(t).selector)+" {",1),Nd,(S(!0),I(U,null,dt(k(t).cssRules[k(t).selector]||[],i=>(S(),I(U,{key:k(t).selector+"_"+i},[ae("\xA0\xA0"+J(i)+";",1),Hd],64))),128))]),"code-after":Ee(()=>[Rd,Fd]),_:1})],64))}});const ir=de(Dd,[["__scopeId","data-v-e2cca0c1"]]),jd=[{name:"Block display and line breaking",doThis:"Display the bentos vertically",selector:"bento",tableStyles:"width: 800px; height: 360px",cssRules:{},syntax:"display: block",help:`<p>Block is the default display mode of paragraphs and sectionning elements like <tag>div</tag>, <tag>main</tag>, <tag>article</tag> etc.</p>
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
    `,check:[["display","block"]]},{name:"Box Model: margins",doThis:"Add a 20px bottom margin to bentos",selector:"bento",tableStyles:"width: 800px; height: 360px",cssRules:{bento:["display: block"]},syntax:`margin: <val><unit>
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
    `,check:[["margin-bottom","20px"]]},{name:"Box Model: padding",doThis:"Add a 10px padding to bentos",selector:"bento",syntax:"padding: <val><unit>",tableStyles:"width: 800px; height: 360px",cssRules:{bento:["display: block","margin-bottom: 20px"]},examples:["<code>padding: 1em</code> adds a 1em padding on all sides of the element","<code>padding: 0 20px</code> adds a 20px horizontal padding and zero vertical padding","<code>padding-top: 10px</code> adds a 10px padding at the top of the element"],help:`<p>Box model: <img src="img/boxmodel.png" alt="Box Model" /></p>
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
border-<dir>-width: <dim>`,tableStyles:"width: 800px; height: 360px",cssRules:{bento:["display: block","margin-bottom: 20px","padding: 10px"]},examples:["<code>border: 1px solid black</code> adds a 1 pixel width black solid border","<code>border-width: 20px</code> sets the border width to 20px while preserving existing border styles","<code>border-right-width: 1em</code> sets the right border width to 1em</code>"],help:`<p>Borders are the visual boundaries of an element's box. They can be styled in many ways.</p>
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
    `,check:[["border-top-width","10px"]]},{name:"Width and height",helpTitle:"Dimensioning a block element",doThis:"Make all the bentos 200px wide",selector:"bento",tableStyles:"width: 800px; height: 360px",cssRules:{bento:["display: block","margin-bottom: 20px","padding: 10px","border-top-width: 10px"]},syntax:"width: <value><unit>;",help:`<p>If an element has a display type of <code>block</code>, then:
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
    `,check:[["width","200px"]]},{name:"Auto margins",doThis:"Set all margins to auto",selector:"bento",tableStyles:"width: 800px; height: 360px",cssRules:{bento:["display: block","margin-bottom: 20px","padding: 10px","border-top-width: 10px","width: 200px"]},syntax:"margin: auto;",help:`<p>For <b>block</b> elements, margins with <code>auto</code> value are computed differently between top/bottom and left/right.</p>
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
    `,check:[["margin","auto"]]},{name:"Margins with block elements",doThis:"Add a 20px vertical margin between bentos and center them horizontally",selector:"bento",tableStyles:"width: 800px; height: 360px",cssRules:{bento:["display: block","margin-bottom: 20px","padding: 10px","border-top-width: 10px","width: 200px"]},syntax:`margin: <top and bottom> 
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
    `,check:[["margin","20px auto"]]},{name:"Inline block display",doThis:"Line up the bentos horizontally",selector:"bento",tableStyles:"width: 800px; height: 360px",wrapperClass:"va-initial",cssRules:{bento:["display: block","padding: 10px","border-top-width: 10px","width: 200px","margin: 20px auto"]},syntax:"display: inline-block;",help:`<p>If an element has a display type of <code>inline-block</code>, then it has a behavior in between <code>inline</code> and <code>block</code>:
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
    `,check:[["display","inline-block"]]},{name:"Inline block display",doThis:"Align the bentos on the top edge",selector:"plate",wrapperClass:"va-initial",tableStyles:"width: 600px; height: 300px",cssRules:{bento:["display: inline-block"],plate:["display: block","width: 100px","height: 100px","margin-bottom: 20px"]},syntax:"display: inline-block;",help:`<p>By default, an <code>inline-block</code> box will be vertically aligned according to the current <b>baseline</b>.</p>
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
    `,check:[["display","inline-block"]]},{name:"Inline block vertical align",doThis:"Align vertically the bentos at the middle of the table",selector:"bento",wrapperClass:"va-initial",tableStyles:"width: 600px; height: 300px",cssRules:{bento:["display: inline-block"]},syntax:"vertical-align: <align>;",help:`<p>The <code>vertical-align</code> changes the way an inline-block element is vertically aligned relatively to the baseline. It can take the following values:</p>    
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
    `,check:[["vertical-align","middle"]]}],qd={name:"CSS - Inline & Block Layout",levels:jd,leftPanelComponent:ir,rightPanelComponent:ko,intro:"<p>Let's learn the different ways to position elements in CSS !</p>",onLevelStart(){const e=C.level;Vt(()=>{var o;cn();const t=document.querySelector(".editor textarea");t instanceof HTMLTextAreaElement&&(t.value="",t.focus());const s=document.querySelector(".table-board");if(!s)return;s.setAttribute("style",(o=e.tableStyles)!=null?o:"");const n=new Set([e.selector,...Object.keys(e.cssRules)]);for(let i of n)s.querySelectorAll(i).forEach(l=>{var r,a;l.setAttribute("data-existing-style",(r=l.getAttribute("style"))!=null?r:""),l.setAttribute("style",[l.getAttribute("style"),...(a=e.cssRules[i])!=null?a:[]].join(";"))})})}},Bd=[{name:"Flex display",doThis:"Put the sushis on the plates",selector:"bento",wrapperClass:"flex-game",cssRules:{},syntax:"display: flex;",help:`<p>By default, flex elements have this behavior:
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
    </div>`,check:[["justify-content","flex-end"]]},{name:"Flex: justify-content 2/4",doThis:"Put the sushis on the plates",selector:"bento",wrapperClass:"flex-game",cssRules:{bento:["display: flex"]},syntax:"justify-content: <value>;",help:`<p><code>justify-content</code> let you choose how items should be spread on the main axis (the horizontal axis by default in English language)</p>
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
    </div>`,inputLinesNumber:4,check:[["flex-wrap","wrap"],["flex-direction","column"],["justify-content","center"],["align-content","space-evenly"]]}],zd={name:"CSS - Flex Layout",levels:Bd,leftPanelComponent:ir,rightPanelComponent:ko,credits:'Credits: <a href="https://github.com/thomaspark">Thomas Park</a> for its inspiring <a target="_blank" href="https://flexboxfroggy.com/">Flexbox Froggy</a> game.',intro:`<p>Let's learn the different ways to position elements in CSS !</p>
  <p><code>flex</code> is another display mode for elements that is more powerful than <b>block</b>. Flex is used to specify <b>how the children of an element should occupy the space </b> they have in that element.</p>
    <p>Flex layouts should be used when you want to distribute elements along one axis, be it horizontal or vertical.</p>`,onLevelStart(){const e=C.level;Vt(()=>{var o;cn();const t=document.querySelector(".editor textarea");t instanceof HTMLTextAreaElement&&(t.value="",t.focus());const s=document.querySelector(".table-board");if(!s)return;s.setAttribute("style",(o=e.tableStyles)!=null?o:"");const n=new Set([e.selector,...Object.keys(e.cssRules)]);for(let i of n)s.querySelectorAll(i).forEach(l=>{var r,a;l.setAttribute("data-existing-style",(r=l.getAttribute("style"))!=null?r:""),l.setAttribute("style",[l.getAttribute("style"),...(a=e.cssRules[i])!=null?a:[]].join(";"))})})}},Ge=[yu,dd,Sd,qd,zd],Ue=ge(()=>Ge[C.progress.currentChapter-1]),Wd={key:0,class:"credits"},Ud=["innerHTML"],Kd=Q({__name:"About",setup(e){const t=ge(()=>Ue.value.credits);return(s,n)=>k(t)?(S(),I("div",Wd,[y("p",{innerHTML:k(t)},null,8,Ud)])):ke("",!0)}});const Yd=de(Kd,[["__scopeId","data-v-f5705abe"]]);const Vd={},lr=e=>(Fe("data-v-a0de842d"),e=e(),De(),e),Jd=ae(" HTML/CSS Training "),Xd=lr(()=>y("div",{class:"logo"},[y("img",{src:""})],-1)),Gd=lr(()=>y("span",{class:"share-menu"},[ae(" Repository "),y("a",{class:"share-github",type:"github",href:"#"})],-1)),Zd=[Jd,Xd,Gd];function Qd(e,t){return S(),I("header",null,Zd)}const eh=de(Vd,[["render",Qd],["__scopeId","data-v-a0de842d"]]),th=e=>(Fe("data-v-85a11256"),e=e(),De(),e),sh={class:"chapter-intro"},nh={class:"chapter-name"},oh=th(()=>y("hr",null,null,-1)),ih=Q({__name:"ChapterIntro",setup(e){return(t,s)=>(S(),I("div",sh,[y("h1",null,[ae("Chapter "+J(k(C).progress.currentChapter)+": ",1),y("p",nh,J(k(Ue).name),1)]),oh,y("p",null,J(k(Ue).description),1)]))}});const lh=de(ih,[["__scopeId","data-v-85a11256"]]),rh={class:"left-col"},ah={class:"left-panel"},ch=Q({__name:"LeftCol",setup(e){const t=ge(()=>C.progress.currentLevel===0?lh:Ue.value.leftPanelComponent);return(s,n)=>(S(),I("div",rh,[Y(eh),y("div",ah,[(S(),Ke(pl(k(t))))]),Y(Yd)]))}});const ph=de(ch,[["__scopeId","data-v-a195aa93"]]),uh={class:"chapter-header"},dh=Q({__name:"ChapterHeader",setup(e){const t=ge(()=>Ge[C.progress.currentChapter-1]);return(s,n)=>(S(),I("h1",uh,"Chapter "+J(k(C).progress.currentChapter)+": "+J(k(t).name),1))}});const hh=de(dh,[["__scopeId","data-v-5d0ec60e"]]),fh={class:"level-text"},mh={key:0,class:"checkmark"},gh={class:"level-nav"},bh={key:1,class:"level-progress"},yh=Q({__name:"LevelHeader",setup(e){const t=ge(()=>Ue.value.levels);ge(()=>C.progress.hasCompleted(C.progress.currentChapter,C.progress.currentLevel));function s(n="next",o){const i=o.target;i.classList.add("link-jiggle"),setTimeout(()=>{i.classList.remove("link-jiggle")},1e3),n==="next"?Pt(C.progress.currentChapter,C.progress.currentLevel+1):Pt(C.progress.currentChapter,C.progress.currentLevel-1)}return(n,o)=>(S(),I(U,null,[k(C).progress.currentLevel>0?(S(),I("h2",{key:0,class:Le(["level-header",{completed:k(C).progress.hasCompleted(k(C).progress.currentChapter,k(C).progress.currentLevel)}])},[y("span",fh," Level "+J(k(C).progress.currentLevel)+" of "+J(k(t).length),1),k(C).progress.hasCompleted(k(C).progress.currentChapter,k(C).progress.currentLevel)?(S(),I("span",mh,"\u2714\uFE0F")):ke("",!0)],2)):ke("",!0),y("div",gh,[y("a",{class:"previous",href:"#",onClick:o[0]||(o[0]=Hs(i=>s("previous",i),["prevent"]))}),y("a",{class:"next",href:"#",onClick:o[1]||(o[1]=Hs(i=>s("next",i),["prevent"]))})]),k(C).progress.currentLevel>0?(S(),I("div",bh,[y("div",{class:"progress",style:ze({width:k(C).progress.getPercentCompleted(k(C).progress.currentChapter)+"%"})},null,4)])):ke("",!0)],64))}});const vh=de(yh,[["__scopeId","data-v-f56742ce"]]),pn=e=>(Fe("data-v-d9f13c41"),e=e(),De(),e),_h={class:"level-menu"},wh=pn(()=>y("h2",null,"Choose a level",-1)),xh={class:"chapters-list"},$h={class:"chapters"},kh=["onClick"],Th={class:"chapter-number"},Ch=pn(()=>y("div",{class:"chapter-toggle"},null,-1)),Sh={key:0,class:"levels"},Ph=["onClick"],Lh=pn(()=>y("span",{class:"checkmark"},"\u2714\uFE0F",-1)),Ah={class:"level-number"},Eh=pn(()=>y("div",{class:"level-menu-toggle"},null,-1)),Mh=[Eh],Ih=Q({__name:"LevelMenu",setup(e){const t=He(C.progress.currentChapter);function s(o){o===t.value?t.value=0:t.value=o}function n(){C.menuOpened=!C.menuOpened}return(o,i)=>(S(),I(U,null,[y("div",_h,[wh,y("div",xh,[y("ul",$h,[(S(!0),I(U,null,dt(k(Ge),(l,r)=>(S(),I("li",{key:"chapter_"+l.name},[y("a",{class:Le([{current:r+1===k(C).progress.currentChapter,opened:r+1===t.value},"chapter-name"]),onClick:a=>s(r+1)},[y("span",Th,J(r+1),1),ae(" "+J(l.name)+" ",1),Ch],10,kh),r+1===t.value?(S(),I("ul",Sh,[(S(!0),I(U,null,dt(l.levels,(a,u)=>(S(),I("li",{key:"level_"+a.name},[y("a",{class:Le({current:u+1===k(C).progress.currentLevel,completed:k(C).progress.hasCompleted(r+1,u+1)}),onClick:d=>k(Pt)(r+1,u+1)},[Lh,y("span",Ah,J(u+1),1),ae(" "+J(a.name),1)],10,Ph)]))),128))])):ke("",!0)]))),128))])]),y("a",{class:"reset-progress",href:"#",onClick:i[0]||(i[0]=Hs((...l)=>k(Ci)&&k(Ci)(...l),["prevent"]))},"Reset Progress")]),y("div",{class:"level-menu-toggle-wrapper",onClick:n},Mh)],64))}});const Oh=de(Ih,[["__scopeId","data-v-d9f13c41"]]),Nh=e=>(Fe("data-v-4fcb6017"),e=e(),De(),e),Hh=Nh(()=>y("hr",null,null,-1)),Rh={class:"instructions"},Fh=["innerHTML"],Dh=Q({__name:"ChapterInstructions",setup(e){function t(){Pt(C.progress.currentChapter,1)}return(s,n)=>(S(),I(U,null,[Hh,y("div",Rh,[y("div",{innerHTML:k(Ue).intro},null,8,Fh)]),y("div",{class:"actions"},[y("button",{onClick:t},"Next")])],64))}});const jh=de(Dh,[["__scopeId","data-v-4fcb6017"]]),qh={class:"doc-wrapper"},Bh=Q({__name:"RightCol",setup(e){const t=ge(()=>C.progress.currentLevel===0?jh:Ue.value.rightPanelComponent);return(s,n)=>(S(),I("div",{class:Le(["right-col",{"menu-open":k(C).menuOpened}])},[y("div",qh,[Y(hh),Y(vh),(S(),Ke(pl(k(t))))]),Y(Oh)],2))}});const zh=de(Bh,[["__scopeId","data-v-d19b50be"]]),Wh=Q({__name:"App",setup(e){return Tn("Escape",t=>{t.preventDefault(),_o()}),Tn("PageUp",t=>{t.preventDefault(),Pt(C.progress.currentChapter,C.progress.currentLevel-1)}),Tn("PageDown",t=>{t.preventDefault(),Pt(C.progress.currentChapter,C.progress.currentLevel+1)}),wo(),(t,s)=>(S(),I(U,null,[Y(ph),Y(zh)],64))}});Pl(Wh).use(Kp).mount("#app");
