(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();function Zi(e,t){const s=Object.create(null),i=e.split(",");for(let n=0;n<i.length;n++)s[i[n]]=!0;return t?n=>!!s[n.toLowerCase()]:n=>!!s[n]}const ul="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fl=Zi(ul);function Io(e){return!!e||e===""}function Ve(e){if(D(e)){const t={};for(let s=0;s<e.length;s++){const i=e[s],n=pe(i)?bl(i):Ve(i);if(n)for(const o in n)t[o]=n[o]}return t}else{if(pe(e))return e;if(ne(e))return e}}const gl=/;(?![^(]*\))/g,ml=/:(.+)/;function bl(e){const t={};return e.split(gl).forEach(s=>{if(s){const i=s.split(ml);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ye(e){let t="";if(pe(e))t=e;else if(D(e))for(let s=0;s<e.length;s++){const i=ye(e[s]);i&&(t+=i+" ")}else if(ne(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}function Oo(e){if(!e)return null;let{class:t,style:s}=e;return t&&!pe(t)&&(e.class=ye(t)),s&&(e.style=Ve(s)),e}const U=e=>pe(e)?e:e==null?"":D(e)||ne(e)&&(e.toString===jo||!q(e.toString))?JSON.stringify(e,Mo,2):String(e),Mo=(e,t)=>t&&t.__v_isRef?Mo(e,t.value):Dt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[i,n])=>(s[`${i} =>`]=n,s),{})}:Eo(t)?{[`Set(${t.size})`]:[...t.values()]}:ne(t)&&!D(t)&&!No(t)?String(t):t,ee={},Bt=[],Be=()=>{},yl=()=>!1,vl=/^on[^a-z]/,Js=e=>vl.test(e),en=e=>e.startsWith("onUpdate:"),Te=Object.assign,tn=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},wl=Object.prototype.hasOwnProperty,Y=(e,t)=>wl.call(e,t),D=Array.isArray,Dt=e=>Xs(e)==="[object Map]",Eo=e=>Xs(e)==="[object Set]",q=e=>typeof e=="function",pe=e=>typeof e=="string",sn=e=>typeof e=="symbol",ne=e=>e!==null&&typeof e=="object",Ho=e=>ne(e)&&q(e.then)&&q(e.catch),jo=Object.prototype.toString,Xs=e=>jo.call(e),xl=e=>Xs(e).slice(8,-1),No=e=>Xs(e)==="[object Object]",nn=e=>pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Es=Zi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qs=e=>{const t=Object.create(null);return s=>t[s]||(t[s]=e(s))},_l=/-(\w)/g,Ge=Qs(e=>e.replace(_l,(t,s)=>s?s.toUpperCase():"")),kl=/\B([A-Z])/g,Mt=Qs(e=>e.replace(kl,"-$1").toLowerCase()),Zs=Qs(e=>e.charAt(0).toUpperCase()+e.slice(1)),yi=Qs(e=>e?`on${Zs(e)}`:""),fs=(e,t)=>!Object.is(e,t),vi=(e,t)=>{for(let s=0;s<e.length;s++)e[s](t)},Ns=(e,t,s)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:s})},Tl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Mn;const $l=()=>Mn||(Mn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ae;class Cl{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ae&&(this.parent=Ae,this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1)}run(t){if(this.active){const s=Ae;try{return Ae=this,t()}finally{Ae=s}}}on(){Ae=this}off(){Ae=this.parent}stop(t){if(this.active){let s,i;for(s=0,i=this.effects.length;s<i;s++)this.effects[s].stop();for(s=0,i=this.cleanups.length;s<i;s++)this.cleanups[s]();if(this.scopes)for(s=0,i=this.scopes.length;s<i;s++)this.scopes[s].stop(!0);if(this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function Sl(e,t=Ae){t&&t.active&&t.effects.push(e)}function Pl(){return Ae}function Ll(e){Ae&&Ae.cleanups.push(e)}const on=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Fo=e=>(e.w&bt)>0,zo=e=>(e.n&bt)>0,Rl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=bt},Al=e=>{const{deps:t}=e;if(t.length){let s=0;for(let i=0;i<t.length;i++){const n=t[i];Fo(n)&&!zo(n)?n.delete(e):t[s++]=n,n.w&=~bt,n.n&=~bt}t.length=s}},Li=new WeakMap;let ls=0,bt=1;const Ri=30;let Fe;const Rt=Symbol(""),Ai=Symbol("");class an{constructor(t,s=null,i){this.fn=t,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Sl(this,i)}run(){if(!this.active)return this.fn();let t=Fe,s=gt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Fe,Fe=this,gt=!0,bt=1<<++ls,ls<=Ri?Rl(this):En(this),this.fn()}finally{ls<=Ri&&Al(this),bt=1<<--ls,Fe=this.parent,gt=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Fe===this?this.deferStop=!0:this.active&&(En(this),this.onStop&&this.onStop(),this.active=!1)}}function En(e){const{deps:t}=e;if(t.length){for(let s=0;s<t.length;s++)t[s].delete(e);t.length=0}}let gt=!0;const Bo=[];function Zt(){Bo.push(gt),gt=!1}function es(){const e=Bo.pop();gt=e===void 0?!0:e}function Oe(e,t,s){if(gt&&Fe){let i=Li.get(e);i||Li.set(e,i=new Map);let n=i.get(s);n||i.set(s,n=on()),Do(n)}}function Do(e,t){let s=!1;ls<=Ri?zo(e)||(e.n|=bt,s=!Fo(e)):s=!e.has(Fe),s&&(e.add(Fe),Fe.deps.push(e))}function nt(e,t,s,i,n,o){const a=Li.get(e);if(!a)return;let l=[];if(t==="clear")l=[...a.values()];else if(s==="length"&&D(e))a.forEach((r,d)=>{(d==="length"||d>=i)&&l.push(r)});else switch(s!==void 0&&l.push(a.get(s)),t){case"add":D(e)?nn(s)&&l.push(a.get("length")):(l.push(a.get(Rt)),Dt(e)&&l.push(a.get(Ai)));break;case"delete":D(e)||(l.push(a.get(Rt)),Dt(e)&&l.push(a.get(Ai)));break;case"set":Dt(e)&&l.push(a.get(Rt));break}if(l.length===1)l[0]&&Ii(l[0]);else{const r=[];for(const d of l)d&&r.push(...d);Ii(on(r))}}function Ii(e,t){const s=D(e)?e:[...e];for(const i of s)i.computed&&Hn(i);for(const i of s)i.computed||Hn(i)}function Hn(e,t){(e!==Fe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Il=Zi("__proto__,__v_isRef,__isVue"),qo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(sn)),Ol=ln(),Ml=ln(!1,!0),El=ln(!0),jn=Hl();function Hl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...s){const i=G(this);for(let o=0,a=this.length;o<a;o++)Oe(i,"get",o+"");const n=i[t](...s);return n===-1||n===!1?i[t](...s.map(G)):n}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...s){Zt();const i=G(this)[t].apply(this,s);return es(),i}}),e}function ln(e=!1,t=!1){return function(i,n,o){if(n==="__v_isReactive")return!e;if(n==="__v_isReadonly")return e;if(n==="__v_isShallow")return t;if(n==="__v_raw"&&o===(e?t?Ql:Vo:t?Ko:Yo).get(i))return i;const a=D(i);if(!e&&a&&Y(jn,n))return Reflect.get(jn,n,o);const l=Reflect.get(i,n,o);return(sn(n)?qo.has(n):Il(n))||(e||Oe(i,"get",n),t)?l:we(l)?a&&nn(n)?l:l.value:ne(l)?e?Go(l):ti(l):l}}const jl=Wo(),Nl=Wo(!0);function Wo(e=!1){return function(s,i,n,o){let a=s[i];if(Kt(a)&&we(a)&&!we(n))return!1;if(!e&&(!Fs(n)&&!Kt(n)&&(a=G(a),n=G(n)),!D(s)&&we(a)&&!we(n)))return a.value=n,!0;const l=D(s)&&nn(i)?Number(i)<s.length:Y(s,i),r=Reflect.set(s,i,n,o);return s===G(o)&&(l?fs(n,a)&&nt(s,"set",i,n):nt(s,"add",i,n)),r}}function Fl(e,t){const s=Y(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&s&&nt(e,"delete",t,void 0),i}function zl(e,t){const s=Reflect.has(e,t);return(!sn(t)||!qo.has(t))&&Oe(e,"has",t),s}function Bl(e){return Oe(e,"iterate",D(e)?"length":Rt),Reflect.ownKeys(e)}const Uo={get:Ol,set:jl,deleteProperty:Fl,has:zl,ownKeys:Bl},Dl={get:El,set(e,t){return!0},deleteProperty(e,t){return!0}},ql=Te({},Uo,{get:Ml,set:Nl}),rn=e=>e,ei=e=>Reflect.getPrototypeOf(e);function Ls(e,t,s=!1,i=!1){e=e.__v_raw;const n=G(e),o=G(t);s||(t!==o&&Oe(n,"get",t),Oe(n,"get",o));const{has:a}=ei(n),l=i?rn:s?pn:gs;if(a.call(n,t))return l(e.get(t));if(a.call(n,o))return l(e.get(o));e!==n&&e.get(t)}function Rs(e,t=!1){const s=this.__v_raw,i=G(s),n=G(e);return t||(e!==n&&Oe(i,"has",e),Oe(i,"has",n)),e===n?s.has(e):s.has(e)||s.has(n)}function As(e,t=!1){return e=e.__v_raw,!t&&Oe(G(e),"iterate",Rt),Reflect.get(e,"size",e)}function Nn(e){e=G(e);const t=G(this);return ei(t).has.call(t,e)||(t.add(e),nt(t,"add",e,e)),this}function Fn(e,t){t=G(t);const s=G(this),{has:i,get:n}=ei(s);let o=i.call(s,e);o||(e=G(e),o=i.call(s,e));const a=n.call(s,e);return s.set(e,t),o?fs(t,a)&&nt(s,"set",e,t):nt(s,"add",e,t),this}function zn(e){const t=G(this),{has:s,get:i}=ei(t);let n=s.call(t,e);n||(e=G(e),n=s.call(t,e)),i&&i.call(t,e);const o=t.delete(e);return n&&nt(t,"delete",e,void 0),o}function Bn(){const e=G(this),t=e.size!==0,s=e.clear();return t&&nt(e,"clear",void 0,void 0),s}function Is(e,t){return function(i,n){const o=this,a=o.__v_raw,l=G(a),r=t?rn:e?pn:gs;return!e&&Oe(l,"iterate",Rt),a.forEach((d,h)=>i.call(n,r(d),r(h),o))}}function Os(e,t,s){return function(...i){const n=this.__v_raw,o=G(n),a=Dt(o),l=e==="entries"||e===Symbol.iterator&&a,r=e==="keys"&&a,d=n[e](...i),h=s?rn:t?pn:gs;return!t&&Oe(o,"iterate",r?Ai:Rt),{next(){const{value:u,done:g}=d.next();return g?{value:u,done:g}:{value:l?[h(u[0]),h(u[1])]:h(u),done:g}},[Symbol.iterator](){return this}}}}function pt(e){return function(...t){return e==="delete"?!1:this}}function Wl(){const e={get(o){return Ls(this,o)},get size(){return As(this)},has:Rs,add:Nn,set:Fn,delete:zn,clear:Bn,forEach:Is(!1,!1)},t={get(o){return Ls(this,o,!1,!0)},get size(){return As(this)},has:Rs,add:Nn,set:Fn,delete:zn,clear:Bn,forEach:Is(!1,!0)},s={get(o){return Ls(this,o,!0)},get size(){return As(this,!0)},has(o){return Rs.call(this,o,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:Is(!0,!1)},i={get(o){return Ls(this,o,!0,!0)},get size(){return As(this,!0)},has(o){return Rs.call(this,o,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:Is(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Os(o,!1,!1),s[o]=Os(o,!0,!1),t[o]=Os(o,!1,!0),i[o]=Os(o,!0,!0)}),[e,s,t,i]}const[Ul,Yl,Kl,Vl]=Wl();function cn(e,t){const s=t?e?Vl:Kl:e?Yl:Ul;return(i,n,o)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?i:Reflect.get(Y(s,n)&&n in i?s:i,n,o)}const Gl={get:cn(!1,!1)},Jl={get:cn(!1,!0)},Xl={get:cn(!0,!1)},Yo=new WeakMap,Ko=new WeakMap,Vo=new WeakMap,Ql=new WeakMap;function Zl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function er(e){return e.__v_skip||!Object.isExtensible(e)?0:Zl(xl(e))}function ti(e){return Kt(e)?e:dn(e,!1,Uo,Gl,Yo)}function tr(e){return dn(e,!1,ql,Jl,Ko)}function Go(e){return dn(e,!0,Dl,Xl,Vo)}function dn(e,t,s,i,n){if(!ne(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=n.get(e);if(o)return o;const a=er(e);if(a===0)return e;const l=new Proxy(e,a===2?i:s);return n.set(e,l),l}function qt(e){return Kt(e)?qt(e.__v_raw):!!(e&&e.__v_isReactive)}function Kt(e){return!!(e&&e.__v_isReadonly)}function Fs(e){return!!(e&&e.__v_isShallow)}function Jo(e){return qt(e)||Kt(e)}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function Xo(e){return Ns(e,"__v_skip",!0),e}const gs=e=>ne(e)?ti(e):e,pn=e=>ne(e)?Go(e):e;function Qo(e){gt&&Fe&&(e=G(e),Do(e.dep||(e.dep=on())))}function Zo(e,t){e=G(e),e.dep&&Ii(e.dep)}function we(e){return!!(e&&e.__v_isRef===!0)}function Ee(e){return sr(e,!1)}function sr(e,t){return we(e)?e:new ir(e,t)}class ir{constructor(t,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?t:G(t),this._value=s?t:gs(t)}get value(){return Qo(this),this._value}set value(t){const s=this.__v_isShallow||Fs(t)||Kt(t);t=s?t:G(t),fs(t,this._rawValue)&&(this._rawValue=t,this._value=s?t:gs(t),Zo(this))}}function _(e){return we(e)?e.value:e}const nr={get:(e,t,s)=>_(Reflect.get(e,t,s)),set:(e,t,s,i)=>{const n=e[t];return we(n)&&!we(s)?(n.value=s,!0):Reflect.set(e,t,s,i)}};function ea(e){return qt(e)?e:new Proxy(e,nr)}var ta;class or{constructor(t,s,i,n){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[ta]=!1,this._dirty=!0,this.effect=new an(t,()=>{this._dirty||(this._dirty=!0,Zo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=i}get value(){const t=G(this);return Qo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}ta="__v_isReadonly";function ar(e,t,s=!1){let i,n;const o=q(e);return o?(i=e,n=Be):(i=e.get,n=e.set),new or(i,n,o||!n,s)}function mt(e,t,s,i){let n;try{n=i?e(...i):e()}catch(o){si(o,t,s)}return n}function De(e,t,s,i){if(q(e)){const o=mt(e,t,s,i);return o&&Ho(o)&&o.catch(a=>{si(a,t,s)}),o}const n=[];for(let o=0;o<e.length;o++)n.push(De(e[o],t,s,i));return n}function si(e,t,s,i=!0){const n=t?t.vnode:null;if(t){let o=t.parent;const a=t.proxy,l=s;for(;o;){const d=o.ec;if(d){for(let h=0;h<d.length;h++)if(d[h](e,a,l)===!1)return}o=o.parent}const r=t.appContext.config.errorHandler;if(r){mt(r,null,10,[e,a,l]);return}}lr(e,s,n,i)}function lr(e,t,s,i=!0){console.error(e)}let ms=!1,Oi=!1;const ve=[];let Ke=0;const Wt=[];let et=null,Pt=0;const sa=Promise.resolve();let hn=null;function Je(e){const t=hn||sa;return e?t.then(this?e.bind(this):e):t}function rr(e){let t=Ke+1,s=ve.length;for(;t<s;){const i=t+s>>>1;bs(ve[i])<e?t=i+1:s=i}return t}function un(e){(!ve.length||!ve.includes(e,ms&&e.allowRecurse?Ke+1:Ke))&&(e.id==null?ve.push(e):ve.splice(rr(e.id),0,e),ia())}function ia(){!ms&&!Oi&&(Oi=!0,hn=sa.then(oa))}function cr(e){const t=ve.indexOf(e);t>Ke&&ve.splice(t,1)}function dr(e){D(e)?Wt.push(...e):(!et||!et.includes(e,e.allowRecurse?Pt+1:Pt))&&Wt.push(e),ia()}function Dn(e,t=ms?Ke+1:0){for(;t<ve.length;t++){const s=ve[t];s&&s.pre&&(ve.splice(t,1),t--,s())}}function na(e){if(Wt.length){const t=[...new Set(Wt)];if(Wt.length=0,et){et.push(...t);return}for(et=t,et.sort((s,i)=>bs(s)-bs(i)),Pt=0;Pt<et.length;Pt++)et[Pt]();et=null,Pt=0}}const bs=e=>e.id==null?1/0:e.id,pr=(e,t)=>{const s=bs(e)-bs(t);if(s===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return s};function oa(e){Oi=!1,ms=!0,ve.sort(pr);const t=Be;try{for(Ke=0;Ke<ve.length;Ke++){const s=ve[Ke];s&&s.active!==!1&&mt(s,null,14)}}finally{Ke=0,ve.length=0,na(),ms=!1,hn=null,(ve.length||Wt.length)&&oa()}}function hr(e,t,...s){if(e.isUnmounted)return;const i=e.vnode.props||ee;let n=s;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in i){const h=`${a==="modelValue"?"model":a}Modifiers`,{number:u,trim:g}=i[h]||ee;g&&(n=s.map(k=>k.trim())),u&&(n=s.map(Tl))}let l,r=i[l=yi(t)]||i[l=yi(Ge(t))];!r&&o&&(r=i[l=yi(Mt(t))]),r&&De(r,e,6,n);const d=i[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,De(d,e,6,n)}}function aa(e,t,s=!1){const i=t.emitsCache,n=i.get(e);if(n!==void 0)return n;const o=e.emits;let a={},l=!1;if(!q(e)){const r=d=>{const h=aa(d,t,!0);h&&(l=!0,Te(a,h))};!s&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!o&&!l?(ne(e)&&i.set(e,null),null):(D(o)?o.forEach(r=>a[r]=null):Te(a,o),ne(e)&&i.set(e,a),a)}function ii(e,t){return!e||!Js(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,Mt(t))||Y(e,t))}let Pe=null,ni=null;function zs(e){const t=Pe;return Pe=e,ni=e&&e.type.__scopeId||null,t}function He(e){ni=e}function je(){ni=null}const ur=e=>Le;function Le(e,t=Pe,s){if(!t||e._n)return e;const i=(...n)=>{i._d&&Qn(-1);const o=zs(t),a=e(...n);return zs(o),i._d&&Qn(1),a};return i._n=!0,i._c=!0,i._d=!0,i}function wi(e){const{type:t,vnode:s,proxy:i,withProxy:n,props:o,propsOptions:[a],slots:l,attrs:r,emit:d,render:h,renderCache:u,data:g,setupState:k,ctx:M,inheritAttrs:j}=e;let L,A;const I=zs(e);try{if(s.shapeFlag&4){const z=n||i;L=Ye(h.call(z,z,u,o,k,g,M)),A=r}else{const z=t;L=Ye(z.length>1?z(o,{attrs:r,slots:l,emit:d}):z(o,null)),A=t.props?r:fr(r)}}catch(z){cs.length=0,si(z,e,1),L=W(vt)}let O=L;if(A&&j!==!1){const z=Object.keys(A),{shapeFlag:oe}=O;z.length&&oe&7&&(a&&z.some(en)&&(A=gr(A,a)),O=Vt(O,A))}return s.dirs&&(O=Vt(O),O.dirs=O.dirs?O.dirs.concat(s.dirs):s.dirs),s.transition&&(O.transition=s.transition),L=O,zs(I),L}const fr=e=>{let t;for(const s in e)(s==="class"||s==="style"||Js(s))&&((t||(t={}))[s]=e[s]);return t},gr=(e,t)=>{const s={};for(const i in e)(!en(i)||!(i.slice(9)in t))&&(s[i]=e[i]);return s};function mr(e,t,s){const{props:i,children:n,component:o}=e,{props:a,children:l,patchFlag:r}=t,d=o.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&r>=0){if(r&1024)return!0;if(r&16)return i?qn(i,a,d):!!a;if(r&8){const h=t.dynamicProps;for(let u=0;u<h.length;u++){const g=h[u];if(a[g]!==i[g]&&!ii(d,g))return!0}}}else return(n||l)&&(!l||!l.$stable)?!0:i===a?!1:i?a?qn(i,a,d):!0:!!a;return!1}function qn(e,t,s){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let n=0;n<i.length;n++){const o=i[n];if(t[o]!==e[o]&&!ii(s,o))return!0}return!1}function br({vnode:e,parent:t},s){for(;t&&t.subTree===e;)(e=t.vnode).el=s,t=t.parent}const yr=e=>e.__isSuspense;function vr(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):dr(e)}function wr(e,t){if(be){let s=be.provides;const i=be.parent&&be.parent.provides;i===s&&(s=be.provides=Object.create(i)),s[e]=t}}function xi(e,t,s=!1){const i=be||Pe;if(i){const n=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(n&&e in n)return n[e];if(arguments.length>1)return s&&q(t)?t.call(i.proxy):t}}const Wn={};function Ut(e,t,s){return la(e,t,s)}function la(e,t,{immediate:s,deep:i,flush:n,onTrack:o,onTrigger:a}=ee){const l=be;let r,d=!1,h=!1;if(we(e)?(r=()=>e.value,d=Fs(e)):qt(e)?(r=()=>e,i=!0):D(e)?(h=!0,d=e.some(A=>qt(A)||Fs(A)),r=()=>e.map(A=>{if(we(A))return A.value;if(qt(A))return zt(A);if(q(A))return mt(A,l,2)})):q(e)?t?r=()=>mt(e,l,2):r=()=>{if(!(l&&l.isUnmounted))return u&&u(),De(e,l,3,[g])}:r=Be,t&&i){const A=r;r=()=>zt(A())}let u,g=A=>{u=L.onStop=()=>{mt(A,l,4)}};if(ws)return g=Be,t?s&&De(t,l,3,[r(),h?[]:void 0,g]):r(),Be;let k=h?[]:Wn;const M=()=>{if(!!L.active)if(t){const A=L.run();(i||d||(h?A.some((I,O)=>fs(I,k[O])):fs(A,k)))&&(u&&u(),De(t,l,3,[A,k===Wn?void 0:k,g]),k=A)}else L.run()};M.allowRecurse=!!t;let j;n==="sync"?j=M:n==="post"?j=()=>Ce(M,l&&l.suspense):(M.pre=!0,l&&(M.id=l.uid),j=()=>un(M));const L=new an(r,j);return t?s?M():k=L.run():n==="post"?Ce(L.run.bind(L),l&&l.suspense):L.run(),()=>{L.stop(),l&&l.scope&&tn(l.scope.effects,L)}}function xr(e,t,s){const i=this.proxy,n=pe(e)?e.includes(".")?ra(i,e):()=>i[e]:e.bind(i,i);let o;q(t)?o=t:(o=t.handler,s=t);const a=be;Gt(this);const l=la(n,o.bind(i),s);return a?Gt(a):At(),l}function ra(e,t){const s=t.split(".");return()=>{let i=e;for(let n=0;n<s.length&&i;n++)i=i[s[n]];return i}}function zt(e,t){if(!ne(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),we(e))zt(e.value,t);else if(D(e))for(let s=0;s<e.length;s++)zt(e[s],t);else if(Eo(e)||Dt(e))e.forEach(s=>{zt(s,t)});else if(No(e))for(const s in e)zt(e[s],t);return e}function Z(e){return q(e)?{setup:e,name:e.name}:e}const rs=e=>!!e.type.__asyncLoader,ca=e=>e.type.__isKeepAlive;function _r(e,t){da(e,"a",t)}function kr(e,t){da(e,"da",t)}function da(e,t,s=be){const i=e.__wdc||(e.__wdc=()=>{let n=s;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(oi(t,i,s),s){let n=s.parent;for(;n&&n.parent;)ca(n.parent.vnode)&&Tr(i,t,s,n),n=n.parent}}function Tr(e,t,s,i){const n=oi(t,e,i,!0);ha(()=>{tn(i[t],n)},s)}function oi(e,t,s=be,i=!1){if(s){const n=s[e]||(s[e]=[]),o=t.__weh||(t.__weh=(...a)=>{if(s.isUnmounted)return;Zt(),Gt(s);const l=De(t,s,e,a);return At(),es(),l});return i?n.unshift(o):n.push(o),o}}const lt=e=>(t,s=be)=>(!ws||e==="sp")&&oi(e,t,s),$r=lt("bm"),pa=lt("m"),Cr=lt("bu"),Sr=lt("u"),Pr=lt("bum"),ha=lt("um"),Lr=lt("sp"),Rr=lt("rtg"),Ar=lt("rtc");function Ir(e,t=be){oi("ec",e,t)}function kt(e,t,s,i){const n=e.dirs,o=t&&t.dirs;for(let a=0;a<n.length;a++){const l=n[a];o&&(l.oldValue=o[a].value);let r=l.dir[i];r&&(Zt(),De(r,s,8,[e.el,l,e,t]),es())}}const fn="components";function ys(e,t){return ga(fn,e,!0,t)||e}const ua=Symbol();function fa(e){return pe(e)?ga(fn,e,!1)||e:e||ua}function ga(e,t,s=!0,i=!1){const n=Pe||be;if(n){const o=n.type;if(e===fn){const l=oc(o,!1);if(l&&(l===t||l===Ge(t)||l===Zs(Ge(t))))return o}const a=Un(n[e]||o[e],t)||Un(n.appContext[e],t);return!a&&i?o:a}}function Un(e,t){return e&&(e[t]||e[Ge(t)]||e[Zs(Ge(t))])}function Se(e,t,s,i){let n;const o=s&&s[i];if(D(e)||pe(e)){n=new Array(e.length);for(let a=0,l=e.length;a<l;a++)n[a]=t(e[a],a,void 0,o&&o[a])}else if(typeof e=="number"){n=new Array(e);for(let a=0;a<e;a++)n[a]=t(a+1,a,void 0,o&&o[a])}else if(ne(e))if(e[Symbol.iterator])n=Array.from(e,(a,l)=>t(a,l,void 0,o&&o[l]));else{const a=Object.keys(e);n=new Array(a.length);for(let l=0,r=a.length;l<r;l++){const d=a[l];n[l]=t(e[d],d,l,o&&o[l])}}else n=[];return s&&(s[i]=n),n}function yt(e,t,s={},i,n){if(Pe.isCE||Pe.parent&&rs(Pe.parent)&&Pe.parent.isCE)return W("slot",t==="default"?null:{name:t},i&&i());let o=e[t];o&&o._c&&(o._d=!1),T();const a=o&&ma(o(s)),l=Xe(F,{key:s.key||a&&a.key||`_${t}`},a||(i?i():[]),a&&e._===1?64:-2);return!n&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function ma(e){return e.some(t=>qs(t)?!(t.type===vt||t.type===F&&!ma(t.children)):!0)?e:null}const Mi=e=>e?Pa(e)?wn(e)||e.proxy:Mi(e.parent):null,Bs=Te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Mi(e.parent),$root:e=>Mi(e.root),$emit:e=>e.emit,$options:e=>gn(e),$forceUpdate:e=>e.f||(e.f=()=>un(e.update)),$nextTick:e=>e.n||(e.n=Je.bind(e.proxy)),$watch:e=>xr.bind(e)}),Or={get({_:e},t){const{ctx:s,setupState:i,data:n,props:o,accessCache:a,type:l,appContext:r}=e;let d;if(t[0]!=="$"){const k=a[t];if(k!==void 0)switch(k){case 1:return i[t];case 2:return n[t];case 4:return s[t];case 3:return o[t]}else{if(i!==ee&&Y(i,t))return a[t]=1,i[t];if(n!==ee&&Y(n,t))return a[t]=2,n[t];if((d=e.propsOptions[0])&&Y(d,t))return a[t]=3,o[t];if(s!==ee&&Y(s,t))return a[t]=4,s[t];Ei&&(a[t]=0)}}const h=Bs[t];let u,g;if(h)return t==="$attrs"&&Oe(e,"get",t),h(e);if((u=l.__cssModules)&&(u=u[t]))return u;if(s!==ee&&Y(s,t))return a[t]=4,s[t];if(g=r.config.globalProperties,Y(g,t))return g[t]},set({_:e},t,s){const{data:i,setupState:n,ctx:o}=e;return n!==ee&&Y(n,t)?(n[t]=s,!0):i!==ee&&Y(i,t)?(i[t]=s,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:i,appContext:n,propsOptions:o}},a){let l;return!!s[a]||e!==ee&&Y(e,a)||t!==ee&&Y(t,a)||(l=o[0])&&Y(l,a)||Y(i,a)||Y(Bs,a)||Y(n.config.globalProperties,a)},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:Y(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};let Ei=!0;function Mr(e){const t=gn(e),s=e.proxy,i=e.ctx;Ei=!1,t.beforeCreate&&Yn(t.beforeCreate,e,"bc");const{data:n,computed:o,methods:a,watch:l,provide:r,inject:d,created:h,beforeMount:u,mounted:g,beforeUpdate:k,updated:M,activated:j,deactivated:L,beforeDestroy:A,beforeUnmount:I,destroyed:O,unmounted:z,render:oe,renderTracked:ue,renderTriggered:fe,errorCaptured:ie,serverPrefetch:B,expose:le,inheritAttrs:ae,components:de,directives:xe,filters:ge}=t;if(d&&Er(d,i,null,e.appContext.config.unwrapInjectedRef),a)for(const re in a){const te=a[re];q(te)&&(i[re]=te.bind(s))}if(n){const re=n.call(s,s);ne(re)&&(e.data=ti(re))}if(Ei=!0,o)for(const re in o){const te=o[re],Qe=q(te)?te.bind(s,s):q(te.get)?te.get.bind(s,s):Be,gi=!q(te)&&q(te.set)?te.set.bind(s):Be,ss=ce({get:Qe,set:gi});Object.defineProperty(i,re,{enumerable:!0,configurable:!0,get:()=>ss.value,set:jt=>ss.value=jt})}if(l)for(const re in l)ba(l[re],i,s,re);if(r){const re=q(r)?r.call(s):r;Reflect.ownKeys(re).forEach(te=>{wr(te,re[te])})}h&&Yn(h,e,"c");function $e(re,te){D(te)?te.forEach(Qe=>re(Qe.bind(s))):te&&re(te.bind(s))}if($e($r,u),$e(pa,g),$e(Cr,k),$e(Sr,M),$e(_r,j),$e(kr,L),$e(Ir,ie),$e(Ar,ue),$e(Rr,fe),$e(Pr,I),$e(ha,z),$e(Lr,B),D(le))if(le.length){const re=e.exposed||(e.exposed={});le.forEach(te=>{Object.defineProperty(re,te,{get:()=>s[te],set:Qe=>s[te]=Qe})})}else e.exposed||(e.exposed={});oe&&e.render===Be&&(e.render=oe),ae!=null&&(e.inheritAttrs=ae),de&&(e.components=de),xe&&(e.directives=xe)}function Er(e,t,s=Be,i=!1){D(e)&&(e=Hi(e));for(const n in e){const o=e[n];let a;ne(o)?"default"in o?a=xi(o.from||n,o.default,!0):a=xi(o.from||n):a=xi(o),we(a)&&i?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>a.value,set:l=>a.value=l}):t[n]=a}}function Yn(e,t,s){De(D(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,s)}function ba(e,t,s,i){const n=i.includes(".")?ra(s,i):()=>s[i];if(pe(e)){const o=t[e];q(o)&&Ut(n,o)}else if(q(e))Ut(n,e.bind(s));else if(ne(e))if(D(e))e.forEach(o=>ba(o,t,s,i));else{const o=q(e.handler)?e.handler.bind(s):t[e.handler];q(o)&&Ut(n,o,e)}}function gn(e){const t=e.type,{mixins:s,extends:i}=t,{mixins:n,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,l=o.get(t);let r;return l?r=l:!n.length&&!s&&!i?r=t:(r={},n.length&&n.forEach(d=>Ds(r,d,a,!0)),Ds(r,t,a)),ne(t)&&o.set(t,r),r}function Ds(e,t,s,i=!1){const{mixins:n,extends:o}=t;o&&Ds(e,o,s,!0),n&&n.forEach(a=>Ds(e,a,s,!0));for(const a in t)if(!(i&&a==="expose")){const l=Hr[a]||s&&s[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const Hr={data:Kn,props:Ct,emits:Ct,methods:Ct,computed:Ct,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:Ct,directives:Ct,watch:Nr,provide:Kn,inject:jr};function Kn(e,t){return t?e?function(){return Te(q(e)?e.call(this,this):e,q(t)?t.call(this,this):t)}:t:e}function jr(e,t){return Ct(Hi(e),Hi(t))}function Hi(e){if(D(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function _e(e,t){return e?[...new Set([].concat(e,t))]:t}function Ct(e,t){return e?Te(Te(Object.create(null),e),t):t}function Nr(e,t){if(!e)return t;if(!t)return e;const s=Te(Object.create(null),e);for(const i in t)s[i]=_e(e[i],t[i]);return s}function Fr(e,t,s,i=!1){const n={},o={};Ns(o,ai,1),e.propsDefaults=Object.create(null),ya(e,t,n,o);for(const a in e.propsOptions[0])a in n||(n[a]=void 0);s?e.props=i?n:tr(n):e.type.props?e.props=n:e.props=o,e.attrs=o}function zr(e,t,s,i){const{props:n,attrs:o,vnode:{patchFlag:a}}=e,l=G(n),[r]=e.propsOptions;let d=!1;if((i||a>0)&&!(a&16)){if(a&8){const h=e.vnode.dynamicProps;for(let u=0;u<h.length;u++){let g=h[u];if(ii(e.emitsOptions,g))continue;const k=t[g];if(r)if(Y(o,g))k!==o[g]&&(o[g]=k,d=!0);else{const M=Ge(g);n[M]=ji(r,l,M,k,e,!1)}else k!==o[g]&&(o[g]=k,d=!0)}}}else{ya(e,t,n,o)&&(d=!0);let h;for(const u in l)(!t||!Y(t,u)&&((h=Mt(u))===u||!Y(t,h)))&&(r?s&&(s[u]!==void 0||s[h]!==void 0)&&(n[u]=ji(r,l,u,void 0,e,!0)):delete n[u]);if(o!==l)for(const u in o)(!t||!Y(t,u)&&!0)&&(delete o[u],d=!0)}d&&nt(e,"set","$attrs")}function ya(e,t,s,i){const[n,o]=e.propsOptions;let a=!1,l;if(t)for(let r in t){if(Es(r))continue;const d=t[r];let h;n&&Y(n,h=Ge(r))?!o||!o.includes(h)?s[h]=d:(l||(l={}))[h]=d:ii(e.emitsOptions,r)||(!(r in i)||d!==i[r])&&(i[r]=d,a=!0)}if(o){const r=G(s),d=l||ee;for(let h=0;h<o.length;h++){const u=o[h];s[u]=ji(n,r,u,d[u],e,!Y(d,u))}}return a}function ji(e,t,s,i,n,o){const a=e[s];if(a!=null){const l=Y(a,"default");if(l&&i===void 0){const r=a.default;if(a.type!==Function&&q(r)){const{propsDefaults:d}=n;s in d?i=d[s]:(Gt(n),i=d[s]=r.call(null,t),At())}else i=r}a[0]&&(o&&!l?i=!1:a[1]&&(i===""||i===Mt(s))&&(i=!0))}return i}function va(e,t,s=!1){const i=t.propsCache,n=i.get(e);if(n)return n;const o=e.props,a={},l=[];let r=!1;if(!q(e)){const h=u=>{r=!0;const[g,k]=va(u,t,!0);Te(a,g),k&&l.push(...k)};!s&&t.mixins.length&&t.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!o&&!r)return ne(e)&&i.set(e,Bt),Bt;if(D(o))for(let h=0;h<o.length;h++){const u=Ge(o[h]);Vn(u)&&(a[u]=ee)}else if(o)for(const h in o){const u=Ge(h);if(Vn(u)){const g=o[h],k=a[u]=D(g)||q(g)?{type:g}:g;if(k){const M=Xn(Boolean,k.type),j=Xn(String,k.type);k[0]=M>-1,k[1]=j<0||M<j,(M>-1||Y(k,"default"))&&l.push(u)}}}const d=[a,l];return ne(e)&&i.set(e,d),d}function Vn(e){return e[0]!=="$"}function Gn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Jn(e,t){return Gn(e)===Gn(t)}function Xn(e,t){return D(t)?t.findIndex(s=>Jn(s,e)):q(t)&&Jn(t,e)?0:-1}const wa=e=>e[0]==="_"||e==="$stable",mn=e=>D(e)?e.map(Ye):[Ye(e)],Br=(e,t,s)=>{if(t._n)return t;const i=Le((...n)=>mn(t(...n)),s);return i._c=!1,i},xa=(e,t,s)=>{const i=e._ctx;for(const n in e){if(wa(n))continue;const o=e[n];if(q(o))t[n]=Br(n,o,i);else if(o!=null){const a=mn(o);t[n]=()=>a}}},_a=(e,t)=>{const s=mn(t);e.slots.default=()=>s},Dr=(e,t)=>{if(e.vnode.shapeFlag&32){const s=t._;s?(e.slots=G(t),Ns(t,"_",s)):xa(t,e.slots={})}else e.slots={},t&&_a(e,t);Ns(e.slots,ai,1)},qr=(e,t,s)=>{const{vnode:i,slots:n}=e;let o=!0,a=ee;if(i.shapeFlag&32){const l=t._;l?s&&l===1?o=!1:(Te(n,t),!s&&l===1&&delete n._):(o=!t.$stable,xa(t,n)),a=t}else t&&(_a(e,t),a={default:1});if(o)for(const l in n)!wa(l)&&!(l in a)&&delete n[l]};function ka(){return{app:null,config:{isNativeTag:yl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wr=0;function Ur(e,t){return function(i,n=null){q(i)||(i=Object.assign({},i)),n!=null&&!ne(n)&&(n=null);const o=ka(),a=new Set;let l=!1;const r=o.app={_uid:Wr++,_component:i,_props:n,_container:null,_context:o,_instance:null,version:rc,get config(){return o.config},set config(d){},use(d,...h){return a.has(d)||(d&&q(d.install)?(a.add(d),d.install(r,...h)):q(d)&&(a.add(d),d(r,...h))),r},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),r},component(d,h){return h?(o.components[d]=h,r):o.components[d]},directive(d,h){return h?(o.directives[d]=h,r):o.directives[d]},mount(d,h,u){if(!l){const g=W(i,n);return g.appContext=o,h&&t?t(g,d):e(g,d,u),l=!0,r._container=d,d.__vue_app__=r,wn(g.component)||g.component.proxy}},unmount(){l&&(e(null,r._container),delete r._container.__vue_app__)},provide(d,h){return o.provides[d]=h,r}};return r}}function Ni(e,t,s,i,n=!1){if(D(e)){e.forEach((g,k)=>Ni(g,t&&(D(t)?t[k]:t),s,i,n));return}if(rs(i)&&!n)return;const o=i.shapeFlag&4?wn(i.component)||i.component.proxy:i.el,a=n?null:o,{i:l,r}=e,d=t&&t.r,h=l.refs===ee?l.refs={}:l.refs,u=l.setupState;if(d!=null&&d!==r&&(pe(d)?(h[d]=null,Y(u,d)&&(u[d]=null)):we(d)&&(d.value=null)),q(r))mt(r,l,12,[a,h]);else{const g=pe(r),k=we(r);if(g||k){const M=()=>{if(e.f){const j=g?h[r]:r.value;n?D(j)&&tn(j,o):D(j)?j.includes(o)||j.push(o):g?(h[r]=[o],Y(u,r)&&(u[r]=h[r])):(r.value=[o],e.k&&(h[e.k]=r.value))}else g?(h[r]=a,Y(u,r)&&(u[r]=a)):k&&(r.value=a,e.k&&(h[e.k]=a))};a?(M.id=-1,Ce(M,s)):M()}}}const Ce=vr;function Yr(e){return Kr(e)}function Kr(e,t){const s=$l();s.__VUE__=!0;const{insert:i,remove:n,patchProp:o,createElement:a,createText:l,createComment:r,setText:d,setElementText:h,parentNode:u,nextSibling:g,setScopeId:k=Be,cloneNode:M,insertStaticContent:j}=e,L=(c,p,f,y=null,b=null,x=null,C=!1,w=null,$=!!p.dynamicChildren)=>{if(c===p)return;c&&!ns(c,p)&&(y=Ps(c),dt(c,b,x,!0),c=null),p.patchFlag===-2&&($=!1,p.dynamicChildren=null);const{type:v,ref:E,shapeFlag:R}=p;switch(v){case bn:A(c,p,f,y);break;case vt:I(c,p,f,y);break;case _i:c==null&&O(p,f,y,C);break;case F:xe(c,p,f,y,b,x,C,w,$);break;default:R&1?ue(c,p,f,y,b,x,C,w,$):R&6?ge(c,p,f,y,b,x,C,w,$):(R&64||R&128)&&v.process(c,p,f,y,b,x,C,w,$,Nt)}E!=null&&b&&Ni(E,c&&c.ref,x,p||c,!p)},A=(c,p,f,y)=>{if(c==null)i(p.el=l(p.children),f,y);else{const b=p.el=c.el;p.children!==c.children&&d(b,p.children)}},I=(c,p,f,y)=>{c==null?i(p.el=r(p.children||""),f,y):p.el=c.el},O=(c,p,f,y)=>{[c.el,c.anchor]=j(c.children,p,f,y,c.el,c.anchor)},z=({el:c,anchor:p},f,y)=>{let b;for(;c&&c!==p;)b=g(c),i(c,f,y),c=b;i(p,f,y)},oe=({el:c,anchor:p})=>{let f;for(;c&&c!==p;)f=g(c),n(c),c=f;n(p)},ue=(c,p,f,y,b,x,C,w,$)=>{C=C||p.type==="svg",c==null?fe(p,f,y,b,x,C,w,$):le(c,p,b,x,C,w,$)},fe=(c,p,f,y,b,x,C,w)=>{let $,v;const{type:E,props:R,shapeFlag:H,transition:N,patchFlag:K,dirs:J}=c;if(c.el&&M!==void 0&&K===-1)$=c.el=M(c.el);else{if($=c.el=a(c.type,x,R&&R.is,R),H&8?h($,c.children):H&16&&B(c.children,$,null,y,b,x&&E!=="foreignObject",C,w),J&&kt(c,null,y,"created"),R){for(const se in R)se!=="value"&&!Es(se)&&o($,se,null,R[se],x,c.children,y,b,Ze);"value"in R&&o($,"value",null,R.value),(v=R.onVnodeBeforeMount)&&We(v,y,c)}ie($,c,c.scopeId,C,y)}J&&kt(c,null,y,"beforeMount");const X=(!b||b&&!b.pendingBranch)&&N&&!N.persisted;X&&N.beforeEnter($),i($,p,f),((v=R&&R.onVnodeMounted)||X||J)&&Ce(()=>{v&&We(v,y,c),X&&N.enter($),J&&kt(c,null,y,"mounted")},b)},ie=(c,p,f,y,b)=>{if(f&&k(c,f),y)for(let x=0;x<y.length;x++)k(c,y[x]);if(b){let x=b.subTree;if(p===x){const C=b.vnode;ie(c,C,C.scopeId,C.slotScopeIds,b.parent)}}},B=(c,p,f,y,b,x,C,w,$=0)=>{for(let v=$;v<c.length;v++){const E=c[v]=w?ft(c[v]):Ye(c[v]);L(null,E,p,f,y,b,x,C,w)}},le=(c,p,f,y,b,x,C)=>{const w=p.el=c.el;let{patchFlag:$,dynamicChildren:v,dirs:E}=p;$|=c.patchFlag&16;const R=c.props||ee,H=p.props||ee;let N;f&&Tt(f,!1),(N=H.onVnodeBeforeUpdate)&&We(N,f,p,c),E&&kt(p,c,f,"beforeUpdate"),f&&Tt(f,!0);const K=b&&p.type!=="foreignObject";if(v?ae(c.dynamicChildren,v,w,f,y,K,x):C||Qe(c,p,w,null,f,y,K,x,!1),$>0){if($&16)de(w,p,R,H,f,y,b);else if($&2&&R.class!==H.class&&o(w,"class",null,H.class,b),$&4&&o(w,"style",R.style,H.style,b),$&8){const J=p.dynamicProps;for(let X=0;X<J.length;X++){const se=J[X],Ne=R[se],Ft=H[se];(Ft!==Ne||se==="value")&&o(w,se,Ne,Ft,b,c.children,f,y,Ze)}}$&1&&c.children!==p.children&&h(w,p.children)}else!C&&v==null&&de(w,p,R,H,f,y,b);((N=H.onVnodeUpdated)||E)&&Ce(()=>{N&&We(N,f,p,c),E&&kt(p,c,f,"updated")},y)},ae=(c,p,f,y,b,x,C)=>{for(let w=0;w<p.length;w++){const $=c[w],v=p[w],E=$.el&&($.type===F||!ns($,v)||$.shapeFlag&70)?u($.el):f;L($,v,E,null,y,b,x,C,!0)}},de=(c,p,f,y,b,x,C)=>{if(f!==y){for(const w in y){if(Es(w))continue;const $=y[w],v=f[w];$!==v&&w!=="value"&&o(c,w,v,$,C,p.children,b,x,Ze)}if(f!==ee)for(const w in f)!Es(w)&&!(w in y)&&o(c,w,f[w],null,C,p.children,b,x,Ze);"value"in y&&o(c,"value",f.value,y.value)}},xe=(c,p,f,y,b,x,C,w,$)=>{const v=p.el=c?c.el:l(""),E=p.anchor=c?c.anchor:l("");let{patchFlag:R,dynamicChildren:H,slotScopeIds:N}=p;N&&(w=w?w.concat(N):N),c==null?(i(v,f,y),i(E,f,y),B(p.children,f,E,b,x,C,w,$)):R>0&&R&64&&H&&c.dynamicChildren?(ae(c.dynamicChildren,H,f,b,x,C,w),(p.key!=null||b&&p===b.subTree)&&Ta(c,p,!0)):Qe(c,p,f,E,b,x,C,w,$)},ge=(c,p,f,y,b,x,C,w,$)=>{p.slotScopeIds=w,c==null?p.shapeFlag&512?b.ctx.activate(p,f,y,C,$):_t(p,f,y,b,x,C,$):$e(c,p,$)},_t=(c,p,f,y,b,x,C)=>{const w=c.component=ec(c,y,b);if(ca(c)&&(w.ctx.renderer=Nt),tc(w),w.asyncDep){if(b&&b.registerDep(w,re),!c.el){const $=w.subTree=W(vt);I(null,$,p,f)}return}re(w,c,p,f,b,x,C)},$e=(c,p,f)=>{const y=p.component=c.component;if(mr(c,p,f))if(y.asyncDep&&!y.asyncResolved){te(y,p,f);return}else y.next=p,cr(y.update),y.update();else p.el=c.el,y.vnode=p},re=(c,p,f,y,b,x,C)=>{const w=()=>{if(c.isMounted){let{next:E,bu:R,u:H,parent:N,vnode:K}=c,J=E,X;Tt(c,!1),E?(E.el=K.el,te(c,E,C)):E=K,R&&vi(R),(X=E.props&&E.props.onVnodeBeforeUpdate)&&We(X,N,E,K),Tt(c,!0);const se=wi(c),Ne=c.subTree;c.subTree=se,L(Ne,se,u(Ne.el),Ps(Ne),c,b,x),E.el=se.el,J===null&&br(c,se.el),H&&Ce(H,b),(X=E.props&&E.props.onVnodeUpdated)&&Ce(()=>We(X,N,E,K),b)}else{let E;const{el:R,props:H}=p,{bm:N,m:K,parent:J}=c,X=rs(p);if(Tt(c,!1),N&&vi(N),!X&&(E=H&&H.onVnodeBeforeMount)&&We(E,J,p),Tt(c,!0),R&&bi){const se=()=>{c.subTree=wi(c),bi(R,c.subTree,c,b,null)};X?p.type.__asyncLoader().then(()=>!c.isUnmounted&&se()):se()}else{const se=c.subTree=wi(c);L(null,se,f,y,c,b,x),p.el=se.el}if(K&&Ce(K,b),!X&&(E=H&&H.onVnodeMounted)){const se=p;Ce(()=>We(E,J,se),b)}(p.shapeFlag&256||J&&rs(J.vnode)&&J.vnode.shapeFlag&256)&&c.a&&Ce(c.a,b),c.isMounted=!0,p=f=y=null}},$=c.effect=new an(w,()=>un(v),c.scope),v=c.update=()=>$.run();v.id=c.uid,Tt(c,!0),v()},te=(c,p,f)=>{p.component=c;const y=c.vnode.props;c.vnode=p,c.next=null,zr(c,p.props,y,f),qr(c,p.children,f),Zt(),Dn(),es()},Qe=(c,p,f,y,b,x,C,w,$=!1)=>{const v=c&&c.children,E=c?c.shapeFlag:0,R=p.children,{patchFlag:H,shapeFlag:N}=p;if(H>0){if(H&128){ss(v,R,f,y,b,x,C,w,$);return}else if(H&256){gi(v,R,f,y,b,x,C,w,$);return}}N&8?(E&16&&Ze(v,b,x),R!==v&&h(f,R)):E&16?N&16?ss(v,R,f,y,b,x,C,w,$):Ze(v,b,x,!0):(E&8&&h(f,""),N&16&&B(R,f,y,b,x,C,w,$))},gi=(c,p,f,y,b,x,C,w,$)=>{c=c||Bt,p=p||Bt;const v=c.length,E=p.length,R=Math.min(v,E);let H;for(H=0;H<R;H++){const N=p[H]=$?ft(p[H]):Ye(p[H]);L(c[H],N,f,null,b,x,C,w,$)}v>E?Ze(c,b,x,!0,!1,R):B(p,f,y,b,x,C,w,$,R)},ss=(c,p,f,y,b,x,C,w,$)=>{let v=0;const E=p.length;let R=c.length-1,H=E-1;for(;v<=R&&v<=H;){const N=c[v],K=p[v]=$?ft(p[v]):Ye(p[v]);if(ns(N,K))L(N,K,f,null,b,x,C,w,$);else break;v++}for(;v<=R&&v<=H;){const N=c[R],K=p[H]=$?ft(p[H]):Ye(p[H]);if(ns(N,K))L(N,K,f,null,b,x,C,w,$);else break;R--,H--}if(v>R){if(v<=H){const N=H+1,K=N<E?p[N].el:y;for(;v<=H;)L(null,p[v]=$?ft(p[v]):Ye(p[v]),f,K,b,x,C,w,$),v++}}else if(v>H)for(;v<=R;)dt(c[v],b,x,!0),v++;else{const N=v,K=v,J=new Map;for(v=K;v<=H;v++){const Re=p[v]=$?ft(p[v]):Ye(p[v]);Re.key!=null&&J.set(Re.key,v)}let X,se=0;const Ne=H-K+1;let Ft=!1,An=0;const is=new Array(Ne);for(v=0;v<Ne;v++)is[v]=0;for(v=N;v<=R;v++){const Re=c[v];if(se>=Ne){dt(Re,b,x,!0);continue}let qe;if(Re.key!=null)qe=J.get(Re.key);else for(X=K;X<=H;X++)if(is[X-K]===0&&ns(Re,p[X])){qe=X;break}qe===void 0?dt(Re,b,x,!0):(is[qe-K]=v+1,qe>=An?An=qe:Ft=!0,L(Re,p[qe],f,null,b,x,C,w,$),se++)}const In=Ft?Vr(is):Bt;for(X=In.length-1,v=Ne-1;v>=0;v--){const Re=K+v,qe=p[Re],On=Re+1<E?p[Re+1].el:y;is[v]===0?L(null,qe,f,On,b,x,C,w,$):Ft&&(X<0||v!==In[X]?jt(qe,f,On,2):X--)}}},jt=(c,p,f,y,b=null)=>{const{el:x,type:C,transition:w,children:$,shapeFlag:v}=c;if(v&6){jt(c.component.subTree,p,f,y);return}if(v&128){c.suspense.move(p,f,y);return}if(v&64){C.move(c,p,f,Nt);return}if(C===F){i(x,p,f);for(let R=0;R<$.length;R++)jt($[R],p,f,y);i(c.anchor,p,f);return}if(C===_i){z(c,p,f);return}if(y!==2&&v&1&&w)if(y===0)w.beforeEnter(x),i(x,p,f),Ce(()=>w.enter(x),b);else{const{leave:R,delayLeave:H,afterLeave:N}=w,K=()=>i(x,p,f),J=()=>{R(x,()=>{K(),N&&N()})};H?H(x,K,J):J()}else i(x,p,f)},dt=(c,p,f,y=!1,b=!1)=>{const{type:x,props:C,ref:w,children:$,dynamicChildren:v,shapeFlag:E,patchFlag:R,dirs:H}=c;if(w!=null&&Ni(w,null,f,c,!0),E&256){p.ctx.deactivate(c);return}const N=E&1&&H,K=!rs(c);let J;if(K&&(J=C&&C.onVnodeBeforeUnmount)&&We(J,p,c),E&6)hl(c.component,f,y);else{if(E&128){c.suspense.unmount(f,y);return}N&&kt(c,null,p,"beforeUnmount"),E&64?c.type.remove(c,p,f,b,Nt,y):v&&(x!==F||R>0&&R&64)?Ze(v,p,f,!1,!0):(x===F&&R&384||!b&&E&16)&&Ze($,p,f),y&&Ln(c)}(K&&(J=C&&C.onVnodeUnmounted)||N)&&Ce(()=>{J&&We(J,p,c),N&&kt(c,null,p,"unmounted")},f)},Ln=c=>{const{type:p,el:f,anchor:y,transition:b}=c;if(p===F){pl(f,y);return}if(p===_i){oe(c);return}const x=()=>{n(f),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(c.shapeFlag&1&&b&&!b.persisted){const{leave:C,delayLeave:w}=b,$=()=>C(f,x);w?w(c.el,x,$):$()}else x()},pl=(c,p)=>{let f;for(;c!==p;)f=g(c),n(c),c=f;n(p)},hl=(c,p,f)=>{const{bum:y,scope:b,update:x,subTree:C,um:w}=c;y&&vi(y),b.stop(),x&&(x.active=!1,dt(C,c,p,f)),w&&Ce(w,p),Ce(()=>{c.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ze=(c,p,f,y=!1,b=!1,x=0)=>{for(let C=x;C<c.length;C++)dt(c[C],p,f,y,b)},Ps=c=>c.shapeFlag&6?Ps(c.component.subTree):c.shapeFlag&128?c.suspense.next():g(c.anchor||c.el),Rn=(c,p,f)=>{c==null?p._vnode&&dt(p._vnode,null,null,!0):L(p._vnode||null,c,p,null,null,null,f),Dn(),na(),p._vnode=c},Nt={p:L,um:dt,m:jt,r:Ln,mt:_t,mc:B,pc:Qe,pbc:ae,n:Ps,o:e};let mi,bi;return t&&([mi,bi]=t(Nt)),{render:Rn,hydrate:mi,createApp:Ur(Rn,mi)}}function Tt({effect:e,update:t},s){e.allowRecurse=t.allowRecurse=s}function Ta(e,t,s=!1){const i=e.children,n=t.children;if(D(i)&&D(n))for(let o=0;o<i.length;o++){const a=i[o];let l=n[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=n[o]=ft(n[o]),l.el=a.el),s||Ta(a,l))}}function Vr(e){const t=e.slice(),s=[0];let i,n,o,a,l;const r=e.length;for(i=0;i<r;i++){const d=e[i];if(d!==0){if(n=s[s.length-1],e[n]<d){t[i]=n,s.push(i);continue}for(o=0,a=s.length-1;o<a;)l=o+a>>1,e[s[l]]<d?o=l+1:a=l;d<e[s[o]]&&(o>0&&(t[i]=s[o-1]),s[o]=i)}}for(o=s.length,a=s[o-1];o-- >0;)s[o]=a,a=t[a];return s}const Gr=e=>e.__isTeleport,F=Symbol(void 0),bn=Symbol(void 0),vt=Symbol(void 0),_i=Symbol(void 0),cs=[];let ze=null;function T(e=!1){cs.push(ze=e?null:[])}function Jr(){cs.pop(),ze=cs[cs.length-1]||null}let vs=1;function Qn(e){vs+=e}function $a(e){return e.dynamicChildren=vs>0?ze||Bt:null,Jr(),vs>0&&ze&&ze.push(e),e}function S(e,t,s,i,n,o){return $a(m(e,t,s,i,n,o,!0))}function Xe(e,t,s,i,n){return $a(W(e,t,s,i,n,!0))}function qs(e){return e?e.__v_isVNode===!0:!1}function ns(e,t){return e.type===t.type&&e.key===t.key}const ai="__vInternal",Ca=({key:e})=>e!=null?e:null,Hs=({ref:e,ref_key:t,ref_for:s})=>e!=null?pe(e)||we(e)||q(e)?{i:Pe,r:e,k:t,f:!!s}:e:null;function m(e,t=null,s=null,i=0,n=null,o=e===F?0:1,a=!1,l=!1){const r={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ca(t),ref:t&&Hs(t),scopeId:ni,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:n,dynamicChildren:null,appContext:null};return l?(vn(r,s),o&128&&e.normalize(r)):s&&(r.shapeFlag|=pe(s)?8:16),vs>0&&!a&&ze&&(r.patchFlag>0||o&6)&&r.patchFlag!==32&&ze.push(r),r}const W=Xr;function Xr(e,t=null,s=null,i=0,n=null,o=!1){if((!e||e===ua)&&(e=vt),qs(e)){const l=Vt(e,t,!0);return s&&vn(l,s),vs>0&&!o&&ze&&(l.shapeFlag&6?ze[ze.indexOf(e)]=l:ze.push(l)),l.patchFlag|=-2,l}if(ac(e)&&(e=e.__vccOpts),t){t=yn(t);let{class:l,style:r}=t;l&&!pe(l)&&(t.class=ye(l)),ne(r)&&(Jo(r)&&!D(r)&&(r=Te({},r)),t.style=Ve(r))}const a=pe(e)?1:yr(e)?128:Gr(e)?64:ne(e)?4:q(e)?2:0;return m(e,t,s,i,n,a,o,!0)}function yn(e){return e?Jo(e)||ai in e?Te({},e):e:null}function Vt(e,t,s=!1){const{props:i,ref:n,patchFlag:o,children:a}=e,l=t?Sa(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Ca(l),ref:t&&t.ref?s&&n?D(n)?n.concat(Hs(t)):[n,Hs(t)]:Hs(t):n,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==F?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Vt(e.ssContent),ssFallback:e.ssFallback&&Vt(e.ssFallback),el:e.el,anchor:e.anchor}}function Q(e=" ",t=0){return W(bn,null,e,t)}function ke(e="",t=!1){return t?(T(),Xe(vt,null,e)):W(vt,null,e)}function Ye(e){return e==null||typeof e=="boolean"?W(vt):D(e)?W(F,null,e.slice()):typeof e=="object"?ft(e):W(bn,null,String(e))}function ft(e){return e.el===null||e.memo?e:Vt(e)}function vn(e,t){let s=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(D(t))s=16;else if(typeof t=="object")if(i&65){const n=t.default;n&&(n._c&&(n._d=!1),vn(e,n()),n._c&&(n._d=!0));return}else{s=32;const n=t._;!n&&!(ai in t)?t._ctx=Pe:n===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else q(t)?(t={default:t,_ctx:Pe},s=32):(t=String(t),i&64?(s=16,t=[Q(t)]):s=8);e.children=t,e.shapeFlag|=s}function Sa(...e){const t={};for(let s=0;s<e.length;s++){const i=e[s];for(const n in i)if(n==="class")t.class!==i.class&&(t.class=ye([t.class,i.class]));else if(n==="style")t.style=Ve([t.style,i.style]);else if(Js(n)){const o=t[n],a=i[n];a&&o!==a&&!(D(o)&&o.includes(a))&&(t[n]=o?[].concat(o,a):a)}else n!==""&&(t[n]=i[n])}return t}function We(e,t,s,i=null){De(e,t,7,[s,i])}const Qr=ka();let Zr=0;function ec(e,t,s){const i=e.type,n=(t?t.appContext:e.appContext)||Qr,o={uid:Zr++,vnode:e,type:i,parent:t,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new Cl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:va(i,n),emitsOptions:aa(i,n),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:i.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=hr.bind(null,o),e.ce&&e.ce(o),o}let be=null;const Gt=e=>{be=e,e.scope.on()},At=()=>{be&&be.scope.off(),be=null};function Pa(e){return e.vnode.shapeFlag&4}let ws=!1;function tc(e,t=!1){ws=t;const{props:s,children:i}=e.vnode,n=Pa(e);Fr(e,s,n,t),Dr(e,i);const o=n?sc(e,t):void 0;return ws=!1,o}function sc(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=Xo(new Proxy(e.ctx,Or));const{setup:i}=s;if(i){const n=e.setupContext=i.length>1?nc(e):null;Gt(e),Zt();const o=mt(i,e,0,[e.props,n]);if(es(),At(),Ho(o)){if(o.then(At,At),t)return o.then(a=>{Zn(e,a,t)}).catch(a=>{si(a,e,0)});e.asyncDep=o}else Zn(e,o,t)}else La(e,t)}function Zn(e,t,s){q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ne(t)&&(e.setupState=ea(t)),La(e,s)}let eo;function La(e,t,s){const i=e.type;if(!e.render){if(!t&&eo&&!i.render){const n=i.template||gn(e).template;if(n){const{isCustomElement:o,compilerOptions:a}=e.appContext.config,{delimiters:l,compilerOptions:r}=i,d=Te(Te({isCustomElement:o,delimiters:l},a),r);i.render=eo(n,d)}}e.render=i.render||Be}Gt(e),Zt(),Mr(e),es(),At()}function ic(e){return new Proxy(e.attrs,{get(t,s){return Oe(e,"get","$attrs"),t[s]}})}function nc(e){const t=i=>{e.exposed=i||{}};let s;return{get attrs(){return s||(s=ic(e))},slots:e.slots,emit:e.emit,expose:t}}function wn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ea(Xo(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in Bs)return Bs[s](e)}}))}function oc(e,t=!0){return q(e)?e.displayName||e.name:e.name||t&&e.__name}function ac(e){return q(e)&&"__vccOpts"in e}const ce=(e,t)=>ar(e,t,ws);function lc(e,t,s){const i=arguments.length;return i===2?ne(t)&&!D(t)?qs(t)?W(e,null,[t]):W(e,t):W(e,null,t):(i>3?s=Array.prototype.slice.call(arguments,2):i===3&&qs(s)&&(s=[s]),W(e,t,s))}const rc="3.2.39",cc="http://www.w3.org/2000/svg",Lt=typeof document<"u"?document:null,to=Lt&&Lt.createElement("template"),dc={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,i)=>{const n=t?Lt.createElementNS(cc,e):Lt.createElement(e,s?{is:s}:void 0);return e==="select"&&i&&i.multiple!=null&&n.setAttribute("multiple",i.multiple),n},createText:e=>Lt.createTextNode(e),createComment:e=>Lt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Lt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,s,i,n,o){const a=s?s.previousSibling:t.lastChild;if(n&&(n===o||n.nextSibling))for(;t.insertBefore(n.cloneNode(!0),s),!(n===o||!(n=n.nextSibling)););else{to.innerHTML=i?`<svg>${e}</svg>`:e;const l=to.content;if(i){const r=l.firstChild;for(;r.firstChild;)l.appendChild(r.firstChild);l.removeChild(r)}t.insertBefore(l,s)}return[a?a.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}};function pc(e,t,s){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}function hc(e,t,s){const i=e.style,n=pe(s);if(s&&!n){for(const o in s)Fi(i,o,s[o]);if(t&&!pe(t))for(const o in t)s[o]==null&&Fi(i,o,"")}else{const o=i.display;n?t!==s&&(i.cssText=s):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=o)}}const so=/\s*!important$/;function Fi(e,t,s){if(D(s))s.forEach(i=>Fi(e,t,i));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const i=uc(e,t);so.test(s)?e.setProperty(Mt(i),s.replace(so,""),"important"):e[i]=s}}const io=["Webkit","Moz","ms"],ki={};function uc(e,t){const s=ki[t];if(s)return s;let i=Ge(t);if(i!=="filter"&&i in e)return ki[t]=i;i=Zs(i);for(let n=0;n<io.length;n++){const o=io[n]+i;if(o in e)return ki[t]=o}return t}const no="http://www.w3.org/1999/xlink";function fc(e,t,s,i,n){if(i&&t.startsWith("xlink:"))s==null?e.removeAttributeNS(no,t.slice(6,t.length)):e.setAttributeNS(no,t,s);else{const o=fl(t);s==null||o&&!Io(s)?e.removeAttribute(t):e.setAttribute(t,o?"":s)}}function gc(e,t,s,i,n,o,a){if(t==="innerHTML"||t==="textContent"){i&&a(i,n,o),e[t]=s==null?"":s;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=s;const r=s==null?"":s;(e.value!==r||e.tagName==="OPTION")&&(e.value=r),s==null&&e.removeAttribute(t);return}let l=!1;if(s===""||s==null){const r=typeof e[t];r==="boolean"?s=Io(s):s==null&&r==="string"?(s="",l=!0):r==="number"&&(s=0,l=!0)}try{e[t]=s}catch{}l&&e.removeAttribute(t)}const[Ra,mc]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const s=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(s&&Number(s[1])<=53)}return[e,t]})();let zi=0;const bc=Promise.resolve(),yc=()=>{zi=0},vc=()=>zi||(bc.then(yc),zi=Ra());function wc(e,t,s,i){e.addEventListener(t,s,i)}function xc(e,t,s,i){e.removeEventListener(t,s,i)}function _c(e,t,s,i,n=null){const o=e._vei||(e._vei={}),a=o[t];if(i&&a)a.value=i;else{const[l,r]=kc(t);if(i){const d=o[t]=Tc(i,n);wc(e,l,d,r)}else a&&(xc(e,l,a,r),o[t]=void 0)}}const oo=/(?:Once|Passive|Capture)$/;function kc(e){let t;if(oo.test(e)){t={};let i;for(;i=e.match(oo);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Mt(e.slice(2)),t]}function Tc(e,t){const s=i=>{const n=i.timeStamp||Ra();(mc||n>=s.attached-1)&&De($c(i,s.value),t,5,[i])};return s.value=e,s.attached=vc(),s}function $c(e,t){if(D(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(i=>n=>!n._stopped&&i&&i(n))}else return t}const ao=/^on[a-z]/,Cc=(e,t,s,i,n=!1,o,a,l,r)=>{t==="class"?pc(e,i,n):t==="style"?hc(e,s,i):Js(t)?en(t)||_c(e,t,s,i,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Sc(e,t,i,n))?gc(e,t,i,o,a,l,r):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),fc(e,t,i,n))};function Sc(e,t,s,i){return i?!!(t==="innerHTML"||t==="textContent"||t in e&&ao.test(t)&&q(s)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ao.test(t)&&pe(s)?!1:t in e}const Pc=["ctrl","shift","alt","meta"],Lc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Pc.some(s=>e[`${s}Key`]&&!t.includes(s))},Ws=(e,t)=>(s,...i)=>{for(let n=0;n<t.length;n++){const o=Lc[t[n]];if(o&&o(s,t))return}return e(s,...i)},Rc={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Aa=(e,t)=>s=>{if(!("key"in s))return;const i=Mt(s.key);if(t.some(n=>n===i||Rc[n]===i))return e(s)},Ac=Te({patchProp:Cc},dc);let lo;function Ic(){return lo||(lo=Yr(Ac))}const Ia=(...e)=>{const t=Ic().createApp(...e),{mount:s}=t;return t.mount=i=>{const n=Oc(i);if(!n)return;const o=t._component;!q(o)&&!o.render&&!o.template&&(o.template=n.innerHTML),n.innerHTML="";const a=s(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),a},t};function Oc(e){return pe(e)?document.querySelector(e):e}function Mc(e,t){return(!t.tag||e.tag===t.tag)&&(!t.type||e.type===t.type)}const Oa=[{name:"HTML and the DOM",skippable:!0,instructions:`<img src="img/chef.png" style="width: 88px; margin: 0 auto"/>
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
        `}],Ec={name:"HTML - Semantics",description:"Why semantics matter",intro:`
    <p>HTML is the markup language that describes the <strong>content</strong> of web pages.</p>
    <p>In this chapter, we will look at the different elements available in HTML and why understanding the purpose of each of them is important for you and your visitors.</p>`,levels:Oa};function Et(){const e=document.querySelector(".editor textarea");e instanceof HTMLTextAreaElement&&(e.value="",e.focus())}function rt(e){return e.split("-")[0]}function Yt(e){return e.split("-")[1]}function ks(e){return["top","bottom"].includes(rt(e))?"x":"y"}function xn(e){return e==="y"?"height":"width"}function ro(e){let{reference:t,floating:s,placement:i}=e;const n=t.x+t.width/2-s.width/2,o=t.y+t.height/2-s.height/2;let a;switch(rt(i)){case"top":a={x:n,y:t.y-s.height};break;case"bottom":a={x:n,y:t.y+t.height};break;case"right":a={x:t.x+t.width,y:o};break;case"left":a={x:t.x-s.width,y:o};break;default:a={x:t.x,y:t.y}}const l=ks(i),r=xn(l);switch(Yt(i)){case"start":a[l]=a[l]-(t[r]/2-s[r]/2);break;case"end":a[l]=a[l]+(t[r]/2-s[r]/2);break}return a}const Hc=async(e,t,s)=>{const{placement:i="bottom",strategy:n="absolute",middleware:o=[],platform:a}=s;let l=await a.getElementRects({reference:e,floating:t,strategy:n}),{x:r,y:d}=ro({...l,placement:i}),h=i,u={};for(let g=0;g<o.length;g++){const{name:k,fn:M}=o[g],{x:j,y:L,data:A,reset:I}=await M({x:r,y:d,initialPlacement:i,placement:h,strategy:n,middlewareData:u,rects:l,platform:a,elements:{reference:e,floating:t}});if(r=j!=null?j:r,d=L!=null?L:d,u={...u,[k]:A!=null?A:{}},I){typeof I=="object"&&(I.placement&&(h=I.placement),I.rects&&(l=I.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:n}):I.rects),{x:r,y:d}=ro({...l,placement:h})),g=-1;continue}}return{x:r,y:d,placement:h,strategy:n,middlewareData:u}};function jc(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ma(e){return typeof e!="number"?jc(e):{top:e,right:e,bottom:e,left:e}}function Bi(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function li(e,t){t===void 0&&(t={});const{x:s,y:i,platform:n,rects:o,elements:a,strategy:l}=e,{boundary:r="clippingParents",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:u=!1,padding:g=0}=t,k=Ma(g),j=a[u?h==="floating"?"reference":"floating":h],L=await n.getClippingClientRect({element:await n.isElement(j)?j:j.contextElement||await n.getDocumentElement({element:a.floating}),boundary:r,rootBoundary:d}),A=Bi(await n.convertOffsetParentRelativeRectToViewportRelativeRect({rect:h==="floating"?{...o.floating,x:s,y:i}:o.reference,offsetParent:await n.getOffsetParent({element:a.floating}),strategy:l}));return{top:L.top-A.top+k.top,bottom:A.bottom-L.bottom+k.bottom,left:L.left-A.left+k.left,right:A.right-L.right+k.right}}const Nc=Math.min,St=Math.max;function Di(e,t,s){return St(e,Nc(t,s))}const Fc=e=>({name:"arrow",options:e,async fn(t){const{element:s,padding:i=0}=e!=null?e:{},{x:n,y:o,placement:a,rects:l,platform:r}=t;if(s==null)return{};const d=Ma(i),h={x:n,y:o},u=rt(a),g=ks(u),k=xn(g),M=await r.getDimensions({element:s}),j=g==="y"?"top":"left",L=g==="y"?"bottom":"right",A=l.reference[k]+l.reference[g]-h[g]-l.floating[k],I=h[g]-l.reference[g],O=await r.getOffsetParent({element:s}),z=O?g==="y"?O.clientHeight||0:O.clientWidth||0:0,oe=A/2-I/2,ue=d[j],fe=z-M[k]-d[L],ie=z/2-M[k]/2+oe,B=Di(ue,ie,fe);return{data:{[g]:B,centerOffset:ie-B}}}}),zc={left:"right",right:"left",bottom:"top",top:"bottom"};function Us(e){return e.replace(/left|right|bottom|top/g,t=>zc[t])}function Ea(e,t){const s=Yt(e)==="start",i=ks(e),n=xn(i);let o=i==="x"?s?"right":"left":s?"bottom":"top";return t.reference[n]>t.floating[n]&&(o=Us(o)),{main:o,cross:Us(o)}}const Bc={start:"end",end:"start"};function qi(e){return e.replace(/start|end/g,t=>Bc[t])}const Dc=["top","right","bottom","left"],qc=Dc.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);function Wc(e,t,s){return(e?[...s.filter(n=>Yt(n)===e),...s.filter(n=>Yt(n)!==e)]:s.filter(n=>rt(n)===n)).filter(n=>e?Yt(n)===e||(t?qi(n)!==n:!1):!0)}const Uc=function(e){return e===void 0&&(e={}),{name:"autoPlacement",options:e,async fn(t){var s,i,n,o,a,l;const{x:r,y:d,rects:h,middlewareData:u,placement:g}=t,{alignment:k=null,allowedPlacements:M=qc,autoAlignment:j=!0,...L}=e;if((s=u.autoPlacement)!=null&&s.skip)return{};const A=Wc(k,j,M),I=await li(t,L),O=(i=(n=u.autoPlacement)==null?void 0:n.index)!=null?i:0,z=A[O],{main:oe,cross:ue}=Ea(z,h);if(g!==z)return{x:r,y:d,reset:{placement:A[0]}};const fe=[I[rt(z)],I[oe],I[ue]],ie=[...(o=(a=u.autoPlacement)==null?void 0:a.overflows)!=null?o:[],{placement:z,overflows:fe}],B=A[O+1];if(B)return{data:{index:O+1,overflows:ie},reset:{placement:B}};const le=ie.slice().sort((de,xe)=>de.overflows[0]-xe.overflows[0]),ae=(l=le.find(de=>{let{overflows:xe}=de;return xe.every(ge=>ge<=0)}))==null?void 0:l.placement;return{data:{skip:!0},reset:{placement:ae!=null?ae:le[0].placement}}}}};function Yc(e){const t=Us(e);return[qi(e),t,qi(t)]}const Kc=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,i;const{placement:n,middlewareData:o,rects:a,initialPlacement:l}=t;if((s=o.flip)!=null&&s.skip)return{};const{mainAxis:r=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:u="bestFit",flipAlignment:g=!0,...k}=e,M=rt(n),L=h||(M===l||!g?[Us(l)]:Yc(l)),A=[l,...L],I=await li(t,k),O=[];let z=((i=o.flip)==null?void 0:i.overflows)||[];if(r&&O.push(I[M]),d){const{main:ie,cross:B}=Ea(n,a);O.push(I[ie],I[B])}if(z=[...z,{placement:n,overflows:O}],!O.every(ie=>ie<=0)){var oe,ue;const ie=((oe=(ue=o.flip)==null?void 0:ue.index)!=null?oe:0)+1,B=A[ie];if(B)return{data:{index:ie,overflows:z},reset:{placement:B}};let le="bottom";switch(u){case"bestFit":{var fe;const ae=(fe=z.slice().sort((de,xe)=>de.overflows.filter(ge=>ge>0).reduce((ge,_t)=>ge+_t,0)-xe.overflows.filter(ge=>ge>0).reduce((ge,_t)=>ge+_t,0))[0])==null?void 0:fe.placement;ae&&(le=ae);break}case"initialPlacement":le=l;break}return{data:{skip:!0},reset:{placement:le}}}return{}}}};function Vc(e){let{placement:t,rects:s,value:i}=e;const n=rt(t),o=["left","top"].includes(n)?-1:1,a=typeof i=="function"?i({...s,placement:t}):i,{mainAxis:l,crossAxis:r}=typeof a=="number"?{mainAxis:a,crossAxis:0}:{mainAxis:0,crossAxis:0,...a};return ks(n)==="x"?{x:r,y:l*o}:{x:l*o,y:r}}const Gc=function(e){return e===void 0&&(e=0),{name:"offset",options:e,fn(t){const{x:s,y:i,placement:n,rects:o}=t,a=Vc({placement:n,rects:o,value:e});return{x:s+a.x,y:i+a.y,data:a}}}};function Jc(e){return e==="x"?"y":"x"}const Xc=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:i,placement:n}=t,{mainAxis:o=!0,crossAxis:a=!1,limiter:l={fn:L=>{let{x:A,y:I}=L;return{x:A,y:I}}},...r}=e,d={x:s,y:i},h=await li(t,r),u=ks(rt(n)),g=Jc(u);let k=d[u],M=d[g];if(o){const L=u==="y"?"top":"left",A=u==="y"?"bottom":"right",I=k+h[L],O=k-h[A];k=Di(I,k,O)}if(a){const L=g==="y"?"top":"left",A=g==="y"?"bottom":"right",I=M+h[L],O=M-h[A];M=Di(I,M,O)}const j=l.fn({...t,[u]:k,[g]:M});return{...j,data:{x:j.x-s,y:j.y-i}}}}},Qc=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var s;const{placement:i,rects:n,middlewareData:o}=t,{apply:a,...l}=e;if((s=o.size)!=null&&s.skip)return{};const r=await li(t,l),d=rt(i),h=Yt(i)==="end";let u,g;d==="top"||d==="bottom"?(u=d,g=h?"left":"right"):(g=d,u=h?"top":"bottom");const k=St(r.left,0),M=St(r.right,0),j=St(r.top,0),L=St(r.bottom,0),A={height:n.floating.height-(["left","right"].includes(i)?2*(j!==0||L!==0?j+L:St(r.top,r.bottom)):r[u]),width:n.floating.width-(["top","bottom"].includes(i)?2*(k!==0||M!==0?k+M:St(r.left,r.right)):r[g])};return a==null||a({...A,...n}),{data:{skip:!0},reset:{rects:!0}}}}};function _n(e){return(e==null?void 0:e.toString())==="[object Window]"}function wt(e){if(e==null)return window;if(!_n(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function ri(e){return wt(e).getComputedStyle(e)}function ot(e){return _n(e)?"":e?(e.nodeName||"").toLowerCase():""}function at(e){return e instanceof wt(e).HTMLElement}function Ys(e){return e instanceof wt(e).Element}function Zc(e){return e instanceof wt(e).Node}function Ha(e){const t=wt(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function ci(e){const{overflow:t,overflowX:s,overflowY:i}=ri(e);return/auto|scroll|overlay|hidden/.test(t+i+s)}function ed(e){return["table","td","th"].includes(ot(e))}function ja(e){const t=navigator.userAgent.toLowerCase().includes("firefox"),s=ri(e);return s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].includes(s.willChange)||t&&s.willChange==="filter"||t&&(s.filter?s.filter!=="none":!1)}const co=Math.min,ds=Math.max,Ks=Math.round;function Jt(e,t){t===void 0&&(t=!1);const s=e.getBoundingClientRect();let i=1,n=1;return t&&at(e)&&(i=e.offsetWidth>0&&Ks(s.width)/e.offsetWidth||1,n=e.offsetHeight>0&&Ks(s.height)/e.offsetHeight||1),{width:s.width/i,height:s.height/n,top:s.top/n,right:s.right/i,bottom:s.bottom/n,left:s.left/i,x:s.left/i,y:s.top/n}}function xt(e){return((Zc(e)?e.ownerDocument:e.document)||window.document).documentElement}function di(e){return _n(e)?{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}:{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Na(e){return Jt(xt(e)).left+di(e).scrollLeft}function td(e){const t=Jt(e);return Ks(t.width)!==e.offsetWidth||Ks(t.height)!==e.offsetHeight}function sd(e,t,s){const i=at(t),n=xt(t),o=Jt(e,i&&td(t));let a={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if(i||!i&&s!=="fixed")if((ot(t)!=="body"||ci(n))&&(a=di(t)),at(t)){const r=Jt(t,!0);l.x=r.x+t.clientLeft,l.y=r.y+t.clientTop}else n&&(l.x=Na(n));return{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function pi(e){return ot(e)==="html"?e:e.assignedSlot||e.parentNode||(Ha(e)?e.host:null)||xt(e)}function po(e){return!at(e)||getComputedStyle(e).position==="fixed"?null:e.offsetParent}function id(e){let t=pi(e);for(;at(t)&&!["html","body"].includes(ot(t));){if(ja(t))return t;t=t.parentNode}return null}function Wi(e){const t=wt(e);let s=po(e);for(;s&&ed(s)&&getComputedStyle(s).position==="static";)s=po(s);return s&&(ot(s)==="html"||ot(s)==="body"&&getComputedStyle(s).position==="static"&&!ja(s))?t:s||id(e)||t}function ho(e){return{width:e.offsetWidth,height:e.offsetHeight}}function nd(e){let{rect:t,offsetParent:s,strategy:i}=e;const n=at(s),o=xt(s);if(s===o)return t;let a={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if((n||!n&&i!=="fixed")&&((ot(s)!=="body"||ci(o))&&(a=di(s)),at(s))){const r=Jt(s,!0);l.x=r.x+s.clientLeft,l.y=r.y+s.clientTop}return{...t,x:t.x-a.scrollLeft+l.x,y:t.y-a.scrollTop+l.y}}function od(e){const t=wt(e),s=xt(e),i=t.visualViewport;let n=s.clientWidth,o=s.clientHeight,a=0,l=0;return i&&(n=i.width,o=i.height,Math.abs(t.innerWidth/i.scale-i.width)<.01&&(a=i.offsetLeft,l=i.offsetTop)),{width:n,height:o,x:a,y:l}}function ad(e){var t;const s=xt(e),i=di(e),n=(t=e.ownerDocument)==null?void 0:t.body,o=ds(s.scrollWidth,s.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),a=ds(s.scrollHeight,s.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0);let l=-i.scrollLeft+Na(e);const r=-i.scrollTop;return ri(n||s).direction==="rtl"&&(l+=ds(s.clientWidth,n?n.clientWidth:0)-o),{width:o,height:a,x:l,y:r}}function Fa(e){return["html","body","#document"].includes(ot(e))?e.ownerDocument.body:at(e)&&ci(e)?e:Fa(pi(e))}function Vs(e,t){var s;t===void 0&&(t=[]);const i=Fa(e),n=i===((s=e.ownerDocument)==null?void 0:s.body),o=wt(i),a=n?[o].concat(o.visualViewport||[],ci(i)?i:[]):i,l=t.concat(a);return n?l:l.concat(Vs(pi(a)))}function ld(e,t){const s=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(s&&Ha(s)){let i=t;do{if(i&&e===i)return!0;i=i.parentNode||i.host}while(i)}return!1}function rd(e){const t=Jt(e),s=t.top+e.clientTop,i=t.left+e.clientLeft;return{top:s,left:i,x:i,y:s,right:i+e.clientWidth,bottom:s+e.clientHeight,width:e.clientWidth,height:e.clientHeight}}function uo(e,t){return t==="viewport"?Bi(od(e)):Ys(t)?rd(t):Bi(ad(xt(e)))}function cd(e){const t=Vs(pi(e)),i=["absolute","fixed"].includes(ri(e).position)&&at(e)?Wi(e):e;return Ys(i)?t.filter(n=>Ys(n)&&ld(n,i)&&ot(n)!=="body"):[]}function dd(e){let{element:t,boundary:s,rootBoundary:i}=e;const o=[...s==="clippingParents"?cd(t):[].concat(s),i],a=o[0],l=o.reduce((r,d)=>{const h=uo(t,d);return r.top=ds(h.top,r.top),r.right=co(h.right,r.right),r.bottom=co(h.bottom,r.bottom),r.left=ds(h.left,r.left),r},uo(t,a));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}const pd={getElementRects:e=>{let{reference:t,floating:s,strategy:i}=e;return{reference:sd(t,Wi(s),i),floating:{...ho(s),x:0,y:0}}},convertOffsetParentRelativeRectToViewportRelativeRect:e=>nd(e),getOffsetParent:e=>{let{element:t}=e;return Wi(t)},isElement:e=>Ys(e),getDocumentElement:e=>{let{element:t}=e;return xt(t)},getClippingClientRect:e=>dd(e),getDimensions:e=>{let{element:t}=e;return ho(t)},getClientRects:e=>{let{element:t}=e;return t.getClientRects()}},hd=(e,t,s)=>Hc(e,t,{platform:pd,...s});var ud=Object.defineProperty,fd=Object.defineProperties,gd=Object.getOwnPropertyDescriptors,fo=Object.getOwnPropertySymbols,md=Object.prototype.hasOwnProperty,bd=Object.prototype.propertyIsEnumerable,go=(e,t,s)=>t in e?ud(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,tt=(e,t)=>{for(var s in t||(t={}))md.call(t,s)&&go(e,s,t[s]);if(fo)for(var s of fo(t))bd.call(t,s)&&go(e,s,t[s]);return e},Ts=(e,t)=>fd(e,gd(t));function za(e,t){for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(typeof t[s]=="object"&&e[s]?za(e[s],t[s]):e[s]=t[s])}const it={disabled:!1,distance:5,skidding:0,container:"body",boundary:void 0,instantMove:!1,disposeTimeout:5e3,popperTriggers:[],strategy:"absolute",preventOverflow:!0,flip:!0,shift:!0,overflowPadding:0,arrowPadding:0,arrowOverflow:!0,themes:{tooltip:{placement:"top",triggers:["hover","focus","touch"],hideTriggers:e=>[...e,"click"],delay:{show:200,hide:0},handleResize:!1,html:!1,loadingContent:"..."},dropdown:{placement:"bottom",triggers:["click"],delay:0,handleResize:!0,autoHide:!0},menu:{$extend:"dropdown",triggers:["hover","focus"],popperTriggers:["hover","focus"],delay:{show:0,hide:400}}}};function Xt(e,t){let s=it.themes[e]||{},i;do i=s[t],typeof i>"u"?s.$extend?s=it.themes[s.$extend]||{}:(s=null,i=it[t]):s=null;while(s);return i}function yd(e){const t=[e];let s=it.themes[e]||{};do s.$extend&&!s.$resetCss?(t.push(s.$extend),s=it.themes[s.$extend]||{}):s=null;while(s);return t.map(i=>`v-popper--theme-${i}`)}function mo(e){const t=[e];let s=it.themes[e]||{};do s.$extend?(t.push(s.$extend),s=it.themes[s.$extend]||{}):s=null;while(s);return t}let It=!1;if(typeof window<"u"){It=!1;try{const e=Object.defineProperty({},"passive",{get(){It=!0}});window.addEventListener("test",null,e)}catch{}}let Ba=!1;typeof window<"u"&&typeof navigator<"u"&&(Ba=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream);const Da=["auto","top","bottom","left","right"].reduce((e,t)=>e.concat([t,`${t}-start`,`${t}-end`]),[]),bo={hover:"mouseenter",focus:"focus",click:"click",touch:"touchstart"},yo={hover:"mouseleave",focus:"blur",click:"click",touch:"touchend"};function vo(e,t){const s=e.indexOf(t);s!==-1&&e.splice(s,1)}function Ti(){return new Promise(e=>requestAnimationFrame(()=>{requestAnimationFrame(e)}))}const Ie=[];let $t=null;const wo={};function xo(e){let t=wo[e];return t||(t=wo[e]=[]),t}let Ui=function(){};typeof window<"u"&&(Ui=window.Element);function V(e){return function(t){return Xt(t.theme,e)}}const $i="__floating-vue__popper";var qa=()=>Z({name:"VPopper",provide(){return{[$i]:{parentPopper:this}}},inject:{[$i]:{default:null}},props:{theme:{type:String,required:!0},targetNodes:{type:Function,required:!0},referenceNode:{type:Function,default:null},popperNode:{type:Function,required:!0},shown:{type:Boolean,default:!1},showGroup:{type:String,default:null},ariaId:{default:null},disabled:{type:Boolean,default:V("disabled")},positioningDisabled:{type:Boolean,default:V("positioningDisabled")},placement:{type:String,default:V("placement"),validator:e=>Da.includes(e)},delay:{type:[String,Number,Object],default:V("delay")},distance:{type:[Number,String],default:V("distance")},skidding:{type:[Number,String],default:V("skidding")},triggers:{type:Array,default:V("triggers")},showTriggers:{type:[Array,Function],default:V("showTriggers")},hideTriggers:{type:[Array,Function],default:V("hideTriggers")},popperTriggers:{type:Array,default:V("popperTriggers")},popperShowTriggers:{type:[Array,Function],default:V("popperShowTriggers")},popperHideTriggers:{type:[Array,Function],default:V("popperHideTriggers")},container:{type:[String,Object,Ui,Boolean],default:V("container")},boundary:{type:[String,Ui],default:V("boundary")},strategy:{type:String,validator:e=>["absolute","fixed"].includes(e),default:V("strategy")},autoHide:{type:[Boolean,Function],default:V("autoHide")},handleResize:{type:Boolean,default:V("handleResize")},instantMove:{type:Boolean,default:V("instantMove")},eagerMount:{type:Boolean,default:V("eagerMount")},popperClass:{type:[String,Array,Object],default:V("popperClass")},computeTransformOrigin:{type:Boolean,default:V("computeTransformOrigin")},autoMinSize:{type:Boolean,default:V("autoMinSize")},autoSize:{type:[Boolean,String],default:V("autoSize")},autoMaxSize:{type:Boolean,default:V("autoMaxSize")},autoBoundaryMaxSize:{type:Boolean,default:V("autoBoundaryMaxSize")},preventOverflow:{type:Boolean,default:V("preventOverflow")},overflowPadding:{type:[Number,String],default:V("overflowPadding")},arrowPadding:{type:[Number,String],default:V("arrowPadding")},arrowOverflow:{type:Boolean,default:V("arrowOverflow")},flip:{type:Boolean,default:V("flip")},shift:{type:Boolean,default:V("shift")},shiftCrossAxis:{type:Boolean,default:V("shiftCrossAxis")},noAutoFocus:{type:Boolean,default:V("noAutoFocus")}},emits:["show","hide","update:shown","apply-show","apply-hide","close-group","close-directive","auto-hide","resize","dispose"],data(){return{isShown:!1,isMounted:!1,skipTransition:!1,classes:{showFrom:!1,showTo:!1,hideFrom:!1,hideTo:!0},result:{x:0,y:0,placement:"",strategy:this.strategy,arrow:{x:0,y:0,centerOffset:0},transformOrigin:null},shownChildren:new Set,lastAutoHide:!0}},computed:{popperId(){return this.ariaId!=null?this.ariaId:this.randomId},shouldMountContent(){return this.eagerMount||this.isMounted},slotData(){return{popperId:this.popperId,isShown:this.isShown,shouldMountContent:this.shouldMountContent,skipTransition:this.skipTransition,autoHide:typeof this.autoHide=="function"?this.lastAutoHide:this.autoHide,show:this.show,hide:this.hide,handleResize:this.handleResize,onResize:this.onResize,classes:Ts(tt({},this.classes),{popperClass:this.popperClass}),result:this.positioningDisabled?null:this.result,attrs:this.$attrs}},parentPopper(){var e;return(e=this[$i])==null?void 0:e.parentPopper},hasPopperShowTriggerHover(){var e,t;return((e=this.popperTriggers)==null?void 0:e.includes("hover"))||((t=this.popperShowTriggers)==null?void 0:t.includes("hover"))}},watch:tt(tt({shown:"$_autoShowHide",disabled(e){e?this.dispose():this.init()},async container(){this.isShown&&(this.$_ensureTeleport(),await this.$_computePosition())}},["triggers","positioningDisabled"].reduce((e,t)=>(e[t]="$_refreshListeners",e),{})),["placement","distance","skidding","boundary","strategy","overflowPadding","arrowPadding","preventOverflow","shift","shiftCrossAxis","flip"].reduce((e,t)=>(e[t]="$_computePosition",e),{})),created(){this.$_isDisposed=!0,this.randomId=`popper_${[Math.random(),Date.now()].map(e=>e.toString(36).substring(2,10)).join("_")}`,this.autoMinSize&&console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'),this.autoMaxSize&&console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.")},mounted(){this.init(),this.$_detachPopperNode()},activated(){this.$_autoShowHide()},deactivated(){this.hide()},beforeUnmount(){this.dispose()},methods:{show({event:e=null,skipDelay:t=!1,force:s=!1}={}){var i,n;((i=this.parentPopper)==null?void 0:i.lockedChild)&&this.parentPopper.lockedChild!==this||(this.$_pendingHide=!1,(s||!this.disabled)&&(((n=this.parentPopper)==null?void 0:n.lockedChild)===this&&(this.parentPopper.lockedChild=null),this.$_scheduleShow(e,t),this.$emit("show"),this.$_showFrameLocked=!0,requestAnimationFrame(()=>{this.$_showFrameLocked=!1})),this.$emit("update:shown",!0))},hide({event:e=null,skipDelay:t=!1}={}){var s;if(!this.$_hideInProgress){if(this.shownChildren.size>0){this.$_pendingHide=!0;return}if(this.hasPopperShowTriggerHover&&this.$_isAimingPopper()){this.parentPopper&&(this.parentPopper.lockedChild=this,clearTimeout(this.parentPopper.lockedChildTimer),this.parentPopper.lockedChildTimer=setTimeout(()=>{this.parentPopper.lockedChild===this&&(this.parentPopper.lockedChild.hide({skipDelay:t}),this.parentPopper.lockedChild=null)},1e3));return}((s=this.parentPopper)==null?void 0:s.lockedChild)===this&&(this.parentPopper.lockedChild=null),this.$_pendingHide=!1,this.$_scheduleHide(e,t),this.$emit("hide"),this.$emit("update:shown",!1)}},init(){var e,t;!this.$_isDisposed||(this.$_isDisposed=!1,this.isMounted=!1,this.$_events=[],this.$_preventShow=!1,this.$_referenceNode=(t=(e=this.referenceNode)==null?void 0:e.call(this))!=null?t:this.$el,this.$_targetNodes=this.targetNodes().filter(s=>s.nodeType===s.ELEMENT_NODE),this.$_popperNode=this.popperNode(),this.$_innerNode=this.$_popperNode.querySelector(".v-popper__inner"),this.$_arrowNode=this.$_popperNode.querySelector(".v-popper__arrow-container"),this.$_swapTargetAttrs("title","data-original-title"),this.$_detachPopperNode(),this.triggers.length&&this.$_addEventListeners(),this.shown&&this.show())},dispose(){this.$_isDisposed||(this.$_isDisposed=!0,this.$_removeEventListeners(),this.hide({skipDelay:!0}),this.$_detachPopperNode(),this.isMounted=!1,this.isShown=!1,this.$_updateParentShownChildren(!1),this.$_swapTargetAttrs("data-original-title","title"),this.$emit("dispose"))},async onResize(){this.isShown&&(await this.$_computePosition(),this.$emit("resize"))},async $_computePosition(){var e;if(this.$_isDisposed||this.positioningDisabled)return;const t={strategy:this.strategy,middleware:[]};(this.distance||this.skidding)&&t.middleware.push(Gc({mainAxis:this.distance,crossAxis:this.skidding}));const s=this.placement.startsWith("auto");if(s?t.middleware.push(Uc({alignment:(e=this.placement.split("-")[1])!=null?e:""})):t.placement=this.placement,this.preventOverflow&&(this.shift&&t.middleware.push(Xc({padding:this.overflowPadding,boundary:this.boundary,crossAxis:this.shiftCrossAxis})),!s&&this.flip&&t.middleware.push(Kc({padding:this.overflowPadding,boundary:this.boundary}))),t.middleware.push(Fc({element:this.$_arrowNode,padding:this.arrowPadding})),this.arrowOverflow&&t.middleware.push({name:"arrowOverflow",fn:({placement:n,rects:o,middlewareData:a})=>{let l;const{centerOffset:r}=a.arrow;return n.startsWith("top")||n.startsWith("bottom")?l=Math.abs(r)>o.reference.width/2:l=Math.abs(r)>o.reference.height/2,{data:{overflow:l}}}}),this.autoMinSize||this.autoSize){const n=this.autoSize?this.autoSize:this.autoMinSize?"min":null;t.middleware.push({name:"autoSize",fn:({rects:o,placement:a,middlewareData:l})=>{var r;if((r=l.autoSize)!=null&&r.skip)return{};let d,h;return a.startsWith("top")||a.startsWith("bottom")?d=o.reference.width:h=o.reference.height,this.$_innerNode.style[n==="min"?"minWidth":n==="max"?"maxWidth":"width"]=d!=null?`${d}px`:null,this.$_innerNode.style[n==="min"?"minHeight":n==="max"?"maxHeight":"height"]=h!=null?`${h}px`:null,{data:{skip:!0},reset:{rects:!0}}}})}(this.autoMaxSize||this.autoBoundaryMaxSize)&&(this.$_innerNode.style.maxWidth=null,this.$_innerNode.style.maxHeight=null,t.middleware.push(Qc({boundary:this.boundary,padding:this.overflowPadding,apply:({width:n,height:o})=>{this.$_innerNode.style.maxWidth=n!=null?`${n}px`:null,this.$_innerNode.style.maxHeight=o!=null?`${o}px`:null}})));const i=await hd(this.$_referenceNode,this.$_popperNode,t);Object.assign(this.result,{x:i.x,y:i.y,placement:i.placement,strategy:i.strategy,arrow:tt(tt({},i.middlewareData.arrow),i.middlewareData.arrowOverflow)})},$_scheduleShow(e=null,t=!1){if(this.$_updateParentShownChildren(!0),this.$_hideInProgress=!1,clearTimeout(this.$_scheduleTimer),$t&&this.instantMove&&$t.instantMove&&$t!==this.parentPopper){$t.$_applyHide(!0),this.$_applyShow(!0);return}t?this.$_applyShow():this.$_scheduleTimer=setTimeout(this.$_applyShow.bind(this),this.$_computeDelay("show"))},$_scheduleHide(e=null,t=!1){if(this.shownChildren.size>0){this.$_pendingHide=!0;return}this.$_updateParentShownChildren(!1),this.$_hideInProgress=!0,clearTimeout(this.$_scheduleTimer),this.isShown&&($t=this),t?this.$_applyHide():this.$_scheduleTimer=setTimeout(this.$_applyHide.bind(this),this.$_computeDelay("hide"))},$_computeDelay(e){const t=this.delay;return parseInt(t&&t[e]||t||0)},async $_applyShow(e=!1){clearTimeout(this.$_disposeTimer),clearTimeout(this.$_scheduleTimer),this.skipTransition=e,!this.isShown&&(this.$_ensureTeleport(),await Ti(),await this.$_computePosition(),await this.$_applyShowEffect(),this.positioningDisabled||this.$_registerEventListeners([...Vs(this.$_referenceNode),...Vs(this.$_popperNode)],"scroll",()=>{this.$_computePosition()}))},async $_applyShowEffect(){if(this.$_hideInProgress)return;if(this.computeTransformOrigin){const t=this.$_referenceNode.getBoundingClientRect(),s=this.$_popperNode.querySelector(".v-popper__wrapper"),i=s.parentNode.getBoundingClientRect(),n=t.x+t.width/2-(i.left+s.offsetLeft),o=t.y+t.height/2-(i.top+s.offsetTop);this.result.transformOrigin=`${n}px ${o}px`}this.isShown=!0,this.$_applyAttrsToTarget({"aria-describedby":this.popperId,"data-popper-shown":""});const e=this.showGroup;if(e){let t;for(let s=0;s<Ie.length;s++)t=Ie[s],t.showGroup!==e&&(t.hide(),t.$emit("close-group"))}Ie.push(this),document.body.classList.add("v-popper--some-open");for(const t of mo(this.theme))xo(t).push(this),document.body.classList.add(`v-popper--some-open--${t}`);this.$emit("apply-show"),this.classes.showFrom=!0,this.classes.showTo=!1,this.classes.hideFrom=!1,this.classes.hideTo=!1,await Ti(),this.classes.showFrom=!1,this.classes.showTo=!0,this.noAutoFocus||this.$_popperNode.focus()},async $_applyHide(e=!1){if(this.shownChildren.size>0){this.$_pendingHide=!0,this.$_hideInProgress=!1;return}if(clearTimeout(this.$_scheduleTimer),!this.isShown)return;this.skipTransition=e,vo(Ie,this),Ie.length===0&&document.body.classList.remove("v-popper--some-open");for(const s of mo(this.theme)){const i=xo(s);vo(i,this),i.length===0&&document.body.classList.remove(`v-popper--some-open--${s}`)}$t===this&&($t=null),this.isShown=!1,this.$_applyAttrsToTarget({"aria-describedby":void 0,"data-popper-shown":void 0}),clearTimeout(this.$_disposeTimer);const t=Xt(this.theme,"disposeTimeout");t!==null&&(this.$_disposeTimer=setTimeout(()=>{this.$_popperNode&&(this.$_detachPopperNode(),this.isMounted=!1)},t)),this.$_removeEventListeners("scroll"),this.$emit("apply-hide"),this.classes.showFrom=!1,this.classes.showTo=!1,this.classes.hideFrom=!0,this.classes.hideTo=!1,await Ti(),this.classes.hideFrom=!1,this.classes.hideTo=!0},$_autoShowHide(){this.shown?this.show():this.hide()},$_ensureTeleport(){if(this.$_isDisposed)return;let e=this.container;if(typeof e=="string"?e=window.document.querySelector(e):e===!1&&(e=this.$_targetNodes[0].parentNode),!e)throw new Error("No container for popover: "+this.container);e.appendChild(this.$_popperNode),this.isMounted=!0},$_addEventListeners(){const e=s=>{this.isShown&&!this.$_hideInProgress||(s.usedByTooltip=!0,!this.$_preventShow&&this.show({event:s}))};this.$_registerTriggerListeners(this.$_targetNodes,bo,this.triggers,this.showTriggers,e),this.$_registerTriggerListeners([this.$_popperNode],bo,this.popperTriggers,this.popperShowTriggers,e);const t=s=>{s.usedByTooltip||this.hide({event:s})};this.$_registerTriggerListeners(this.$_targetNodes,yo,this.triggers,this.hideTriggers,t),this.$_registerTriggerListeners([this.$_popperNode],yo,this.popperTriggers,this.popperHideTriggers,t)},$_registerEventListeners(e,t,s){this.$_events.push({targetNodes:e,eventType:t,handler:s}),e.forEach(i=>i.addEventListener(t,s,It?{passive:!0}:void 0))},$_registerTriggerListeners(e,t,s,i,n){let o=s;i!=null&&(o=typeof i=="function"?i(o):i),o.forEach(a=>{const l=t[a];l&&this.$_registerEventListeners(e,l,n)})},$_removeEventListeners(e){const t=[];this.$_events.forEach(s=>{const{targetNodes:i,eventType:n,handler:o}=s;!e||e===n?i.forEach(a=>a.removeEventListener(n,o)):t.push(s)}),this.$_events=t},$_refreshListeners(){this.$_isDisposed||(this.$_removeEventListeners(),this.$_addEventListeners())},$_handleGlobalClose(e,t=!1){this.$_showFrameLocked||(this.hide({event:e}),e.closePopover?this.$emit("close-directive"):this.$emit("auto-hide"),t&&(this.$_preventShow=!0,setTimeout(()=>{this.$_preventShow=!1},300)))},$_detachPopperNode(){this.$_popperNode.parentNode&&this.$_popperNode.parentNode.removeChild(this.$_popperNode)},$_swapTargetAttrs(e,t){for(const s of this.$_targetNodes){const i=s.getAttribute(e);i&&(s.removeAttribute(e),s.setAttribute(t,i))}},$_applyAttrsToTarget(e){for(const t of this.$_targetNodes)for(const s in e){const i=e[s];i==null?t.removeAttribute(s):t.setAttribute(s,i)}},$_updateParentShownChildren(e){let t=this.parentPopper;for(;t;)e?t.shownChildren.add(this.randomId):(t.shownChildren.delete(this.randomId),t.$_pendingHide&&t.hide()),t=t.parentPopper},$_isAimingPopper(){const e=this.$_referenceNode.getBoundingClientRect();if(ps>=e.left&&ps<=e.right&&hs>=e.top&&hs<=e.bottom){const t=this.$_popperNode.getBoundingClientRect(),s=ps-ht,i=hs-ut,o=t.left+t.width/2-ht+(t.top+t.height/2)-ut+t.width+t.height,a=ht+s*o,l=ut+i*o;return Ms(ht,ut,a,l,t.left,t.top,t.left,t.bottom)||Ms(ht,ut,a,l,t.left,t.top,t.right,t.top)||Ms(ht,ut,a,l,t.right,t.top,t.right,t.bottom)||Ms(ht,ut,a,l,t.left,t.bottom,t.right,t.bottom)}return!1}},render(){return this.$slots.default(this.slotData)}});typeof document<"u"&&typeof window<"u"&&(Ba?(document.addEventListener("touchstart",_o,It?{passive:!0,capture:!0}:!0),document.addEventListener("touchend",wd,It?{passive:!0,capture:!0}:!0)):(window.addEventListener("mousedown",_o,!0),window.addEventListener("click",vd,!0)),window.addEventListener("resize",kd));function _o(e){for(let t=0;t<Ie.length;t++){const s=Ie[t];try{const i=s.popperNode();s.$_mouseDownContains=i.contains(e.target)}catch{}}}function vd(e){Wa(e)}function wd(e){Wa(e,!0)}function Wa(e,t=!1){const s={};for(let i=Ie.length-1;i>=0;i--){const n=Ie[i];try{const o=n.$_containsGlobalTarget=xd(n,e);n.$_pendingHide=!1,requestAnimationFrame(()=>{if(n.$_pendingHide=!1,!s[n.randomId]&&ko(n,o,e)){if(n.$_handleGlobalClose(e,t),!e.closeAllPopover&&e.closePopover&&o){let l=n.parentPopper;for(;l;)s[l.randomId]=!0,l=l.parentPopper;return}let a=n.parentPopper;for(;a&&ko(a,a.$_containsGlobalTarget,e);){a.$_handleGlobalClose(e,t);a=a.parentPopper}}})}catch{}}}function xd(e,t){const s=e.popperNode();return e.$_mouseDownContains||s.contains(t.target)}function ko(e,t,s){return s.closeAllPopover||s.closePopover&&t||_d(e,s)&&!t}function _d(e,t){if(typeof e.autoHide=="function"){const s=e.autoHide(t);return e.lastAutoHide=s,s}return e.autoHide}function kd(e){for(let t=0;t<Ie.length;t++)Ie[t].$_computePosition(e)}function Yi(){for(let e=0;e<Ie.length;e++)Ie[e].hide()}let ht=0,ut=0,ps=0,hs=0;typeof window<"u"&&window.addEventListener("mousemove",e=>{ht=ps,ut=hs,ps=e.clientX,hs=e.clientY},It?{passive:!0}:void 0);function Ms(e,t,s,i,n,o,a,l){const r=((a-n)*(t-o)-(l-o)*(e-n))/((l-o)*(s-e)-(a-n)*(i-t)),d=((s-e)*(t-o)-(i-t)*(e-n))/((l-o)*(s-e)-(a-n)*(i-t));return r>=0&&r<=1&&d>=0&&d<=1}var hi=(e,t)=>{const s=e.__vccOpts||e;for(const[i,n]of t)s[i]=n;return s};const Td={extends:qa()};function $d(e,t,s,i,n,o){return T(),S("div",{ref:"reference",class:ye(["v-popper",{"v-popper--shown":e.slotData.isShown}])},[yt(e.$slots,"default",Oo(yn(e.slotData)))],2)}var Cd=hi(Td,[["render",$d]]);function Sd(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);var s=e.indexOf("Trident/");if(s>0){var i=e.indexOf("rv:");return parseInt(e.substring(i+3,e.indexOf(".",i)),10)}var n=e.indexOf("Edge/");return n>0?parseInt(e.substring(n+5,e.indexOf(".",n)),10):-1}let js;function Ki(){Ki.init||(Ki.init=!0,js=Sd()!==-1)}var ui={name:"ResizeObserver",props:{emitOnMount:{type:Boolean,default:!1},ignoreWidth:{type:Boolean,default:!1},ignoreHeight:{type:Boolean,default:!1}},emits:["notify"],mounted(){Ki(),Je(()=>{this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitOnMount&&this.emitSize()});const e=document.createElement("object");this._resizeObject=e,e.setAttribute("aria-hidden","true"),e.setAttribute("tabindex",-1),e.onload=this.addResizeHandlers,e.type="text/html",js&&this.$el.appendChild(e),e.data="about:blank",js||this.$el.appendChild(e)},beforeUnmount(){this.removeResizeHandlers()},methods:{compareAndNotify(){(!this.ignoreWidth&&this._w!==this.$el.offsetWidth||!this.ignoreHeight&&this._h!==this.$el.offsetHeight)&&(this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitSize())},emitSize(){this.$emit("notify",{width:this._w,height:this._h})},addResizeHandlers(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.compareAndNotify),this.compareAndNotify()},removeResizeHandlers(){this._resizeObject&&this._resizeObject.onload&&(!js&&this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.removeEventListener("resize",this.compareAndNotify),this.$el.removeChild(this._resizeObject),this._resizeObject.onload=null,this._resizeObject=null)}}};const Pd=ur();He("data-v-b329ee4c");const Ld={class:"resize-observer",tabindex:"-1"};je();const Rd=Pd((e,t,s,i,n,o)=>(T(),Xe("div",Ld)));ui.render=Rd;ui.__scopeId="data-v-b329ee4c";ui.__file="src/components/ResizeObserver.vue";var Ua=(e="theme")=>({computed:{themeClass(){return yd(this[e])}}});const Ad=Z({name:"VPopperContent",components:{ResizeObserver:ui},mixins:[Ua()],props:{popperId:String,theme:String,shown:Boolean,mounted:Boolean,skipTransition:Boolean,autoHide:Boolean,handleResize:Boolean,classes:Object,result:Object},emits:["hide","resize"],methods:{toPx(e){return e!=null&&!isNaN(e)?`${e}px`:null}}}),Id=["id","aria-hidden","tabindex","data-popper-placement"],Od={ref:"inner",class:"v-popper__inner"},Md=m("div",{class:"v-popper__arrow-outer"},null,-1),Ed=m("div",{class:"v-popper__arrow-inner"},null,-1),Hd=[Md,Ed];function jd(e,t,s,i,n,o){const a=ys("ResizeObserver");return T(),S("div",{id:e.popperId,ref:"popover",class:ye(["v-popper__popper",[e.themeClass,e.classes.popperClass,{"v-popper__popper--shown":e.shown,"v-popper__popper--hidden":!e.shown,"v-popper__popper--show-from":e.classes.showFrom,"v-popper__popper--show-to":e.classes.showTo,"v-popper__popper--hide-from":e.classes.hideFrom,"v-popper__popper--hide-to":e.classes.hideTo,"v-popper__popper--skip-transition":e.skipTransition,"v-popper__popper--arrow-overflow":e.result&&e.result.arrow.overflow,"v-popper__popper--no-positioning":!e.result}]]),style:Ve(e.result?{position:e.result.strategy,transform:`translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`}:void 0),"aria-hidden":e.shown?"false":"true",tabindex:e.autoHide?0:void 0,"data-popper-placement":e.result?e.result.placement:void 0,onKeyup:t[2]||(t[2]=Aa(l=>e.autoHide&&e.$emit("hide"),["esc"]))},[m("div",{class:"v-popper__backdrop",onClick:t[0]||(t[0]=l=>e.autoHide&&e.$emit("hide"))}),m("div",{class:"v-popper__wrapper",style:Ve(e.result?{transformOrigin:e.result.transformOrigin}:void 0)},[m("div",Od,[e.mounted?(T(),S(F,{key:0},[m("div",null,[yt(e.$slots,"default")]),e.handleResize?(T(),Xe(a,{key:0,onNotify:t[1]||(t[1]=l=>e.$emit("resize",l))})):ke("",!0)],64)):ke("",!0)],512),m("div",{ref:"arrow",class:"v-popper__arrow-container",style:Ve(e.result?{left:e.toPx(e.result.arrow.x),top:e.toPx(e.result.arrow.y)}:void 0)},Hd,4)],4)],46,Id)}var Ya=hi(Ad,[["render",jd]]),Ka={methods:{show(...e){return this.$refs.popper.show(...e)},hide(...e){return this.$refs.popper.hide(...e)},dispose(...e){return this.$refs.popper.dispose(...e)},onResize(...e){return this.$refs.popper.onResize(...e)}}};const Nd=Z({name:"VPopperWrapper",components:{Popper:Cd,PopperContent:Ya},mixins:[Ka,Ua("finalTheme")],props:{theme:{type:String,default:null}},computed:{finalTheme(){var e;return(e=this.theme)!=null?e:this.$options.vPopperTheme}},methods:{getTargetNodes(){return Array.from(this.$el.children).filter(e=>e!==this.$refs.popperContent.$el)}}});function Fd(e,t,s,i,n,o){const a=ys("PopperContent"),l=ys("Popper");return T(),Xe(l,{ref:"popper",theme:e.finalTheme,"target-nodes":e.getTargetNodes,"popper-node":()=>e.$refs.popperContent.$el,class:ye([e.themeClass])},{default:Le(({popperId:r,isShown:d,shouldMountContent:h,skipTransition:u,autoHide:g,show:k,hide:M,handleResize:j,onResize:L,classes:A,result:I})=>[yt(e.$slots,"default",{shown:d,show:k,hide:M}),W(a,{ref:"popperContent","popper-id":r,theme:e.finalTheme,shown:d,mounted:h,"skip-transition":u,"auto-hide":g,"handle-resize":j,classes:A,result:I,onHide:M,onResize:L},{default:Le(()=>[yt(e.$slots,"popper",{shown:d,hide:M})]),_:2},1032,["popper-id","theme","shown","mounted","skip-transition","auto-hide","handle-resize","classes","result","onHide","onResize"])]),_:3},8,["theme","target-nodes","popper-node","class"])}var kn=hi(Nd,[["render",Fd]]);const zd=Z(Ts(tt({},kn),{name:"VDropdown",vPopperTheme:"dropdown"})),Bd=Z(Ts(tt({},kn),{name:"VMenu",vPopperTheme:"menu"})),Dd=Z(Ts(tt({},kn),{name:"VTooltip",vPopperTheme:"tooltip"})),qd=Z({name:"VTooltipDirective",components:{Popper:qa(),PopperContent:Ya},mixins:[Ka],inheritAttrs:!1,props:{theme:{type:String,default:"tooltip"},html:{type:Boolean,default:e=>Xt(e.theme,"html")},content:{type:[String,Number,Function],default:null},loadingContent:{type:String,default:e=>Xt(e.theme,"loadingContent")}},data(){return{asyncContent:null}},computed:{isContentAsync(){return typeof this.content=="function"},loading(){return this.isContentAsync&&this.asyncContent==null},finalContent(){return this.isContentAsync?this.loading?this.loadingContent:this.asyncContent:this.content}},watch:{content:{handler(){this.fetchContent(!0)},immediate:!0},async finalContent(){await this.$nextTick(),this.$refs.popper.onResize()}},created(){this.$_fetchId=0},methods:{fetchContent(e){if(typeof this.content=="function"&&this.$_isShown&&(e||!this.$_loading&&this.asyncContent==null)){this.asyncContent=null,this.$_loading=!0;const t=++this.$_fetchId,s=this.content(this);s.then?s.then(i=>this.onResult(t,i)):this.onResult(t,s)}},onResult(e,t){e===this.$_fetchId&&(this.$_loading=!1,this.asyncContent=t)},onShow(){this.$_isShown=!0,this.fetchContent()},onHide(){this.$_isShown=!1}}}),Wd=["innerHTML"],Ud=["textContent"];function Yd(e,t,s,i,n,o){const a=ys("PopperContent"),l=ys("Popper");return T(),Xe(l,Sa({ref:"popper"},e.$attrs,{theme:e.theme,"popper-node":()=>e.$refs.popperContent.$el,onApplyShow:e.onShow,onApplyHide:e.onHide}),{default:Le(({popperId:r,isShown:d,shouldMountContent:h,skipTransition:u,autoHide:g,hide:k,handleResize:M,onResize:j,classes:L,result:A})=>[W(a,{ref:"popperContent",class:ye({"v-popper--tooltip-loading":e.loading}),"popper-id":r,theme:e.theme,shown:d,mounted:h,"skip-transition":u,"auto-hide":g,"handle-resize":M,classes:L,result:A,onHide:k,onResize:j},{default:Le(()=>[e.html?(T(),S("div",{key:0,innerHTML:e.finalContent},null,8,Wd)):(T(),S("div",{key:1,textContent:U(e.finalContent)},null,8,Ud))]),_:2},1032,["class","popper-id","theme","shown","mounted","skip-transition","auto-hide","handle-resize","classes","result","onHide","onResize"])]),_:1},16,["theme","popper-node","onApplyShow","onApplyHide"])}var Kd=hi(qd,[["render",Yd]]);const Va="v-popper--has-tooltip";function Vd(e,t){let s=e.placement;if(!s&&t)for(const i of Da)t[i]&&(s=i);return s||(s=Xt(e.theme||"tooltip","placement")),s}function Ga(e,t,s){let i;const n=typeof t;return n==="string"?i={content:t}:t&&n==="object"?i=t:i={content:!1},i.placement=Vd(i,s),i.targetNodes=()=>[e],i.referenceNode=()=>e,i}let Ci,xs,Gd=0;function Jd(){if(Ci)return;xs=Ee([]),Ci=Ia({name:"VTooltipDirectiveApp",setup(){return{directives:xs}},render(){return this.directives.map(t=>lc(Kd,Ts(tt({},t.options),{shown:t.shown||t.options.shown,key:t.id})))},devtools:{hide:!0}});const e=document.createElement("div");document.body.appendChild(e),Ci.mount(e)}function Ja(e,t,s){Jd();const i=Ee(Ga(e,t,s)),n=Ee(!1),o={id:Gd++,options:i,shown:n};return xs.value.push(o),e.classList&&e.classList.add(Va),e.$_popper={options:i,item:o,show(){n.value=!0},hide(){n.value=!1}}}function Xa(e){if(e.$_popper){const t=xs.value.indexOf(e.$_popper.item);t!==-1&&xs.value.splice(t,1),delete e.$_popper,delete e.$_popperOldShown,delete e.$_popperMountTarget}e.classList&&e.classList.remove(Va)}function To(e,{value:t,modifiers:s}){const i=Ga(e,t,s);if(!i.content||Xt(i.theme||"tooltip","disabled"))Xa(e);else{let n;e.$_popper?(n=e.$_popper,n.options.value=i):n=Ja(e,t,s),typeof t.shown<"u"&&t.shown!==e.$_popperOldShown&&(e.$_popperOldShown=t.shown,t.shown?n.show():n.hide())}}var Xd={beforeMount:To,updated:To,beforeUnmount(e){Xa(e)}};function $o(e){e.addEventListener("click",Qa),e.addEventListener("touchstart",Za,It?{passive:!0}:!1)}function Co(e){e.removeEventListener("click",Qa),e.removeEventListener("touchstart",Za),e.removeEventListener("touchend",el),e.removeEventListener("touchcancel",tl)}function Qa(e){const t=e.currentTarget;e.closePopover=!t.$_vclosepopover_touch,e.closeAllPopover=t.$_closePopoverModifiers&&!!t.$_closePopoverModifiers.all}function Za(e){if(e.changedTouches.length===1){const t=e.currentTarget;t.$_vclosepopover_touch=!0;const s=e.changedTouches[0];t.$_vclosepopover_touchPoint=s,t.addEventListener("touchend",el),t.addEventListener("touchcancel",tl)}}function el(e){const t=e.currentTarget;if(t.$_vclosepopover_touch=!1,e.changedTouches.length===1){const s=e.changedTouches[0],i=t.$_vclosepopover_touchPoint;e.closePopover=Math.abs(s.screenY-i.screenY)<20&&Math.abs(s.screenX-i.screenX)<20,e.closeAllPopover=t.$_closePopoverModifiers&&!!t.$_closePopoverModifiers.all}}function tl(e){const t=e.currentTarget;t.$_vclosepopover_touch=!1}var Qd={beforeMount(e,{value:t,modifiers:s}){e.$_closePopoverModifiers=s,(typeof t>"u"||t)&&$o(e)},updated(e,{value:t,oldValue:s,modifiers:i}){e.$_closePopoverModifiers=i,t!==s&&(typeof t>"u"||t?$o(e):Co(e))},beforeUnmount(e){Co(e)}};function Zd(e,t={}){e.$_vTooltipInstalled||(e.$_vTooltipInstalled=!0,za(it,t),e.directive("tooltip",Xd),e.directive("close-popper",Qd),e.component("VTooltip",Dd),e.component("VDropdown",zd),e.component("VMenu",Bd))}const ep={version:"2.0.0-beta.20",install:Zd,options:it};function $s(){Array.from(document.querySelectorAll(".table *")).forEach(t=>{Ja(t,{triggers:["hover"],content:tp(t),delay:0},null),t.addEventListener("mouseover",s=>{s.stopPropagation(),Yi()}),t.addEventListener("mouseenter",s=>{s.stopPropagation(),Yi()})})}function tp(e){const t=e.tagName.toLowerCase(),s=e.getAttribute("class"),i=e.getAttribute("id");return`<${t}${i?` id="${i}"`:""}${s?` class="${s}"`:""}>`}const sp=[{name:"Type Selector",doThis:"Select the plates",selector:"plate",syntax:"tagname",helpTitle:"Select elements by their type",help:"Selects all elements of a type. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",examples:["<strong>div</strong> selects all <tag>div</tag> elements.","<strong>p</strong> selects all <tag>p</tag> elements."],markup:`
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
    `}],sl={name:"CSS Selectors",levels:sp,wrapperClass:"selectors-chapter",credits:'Credits: <a href="http://www.twitter.com/flukeout">@flukeout</a> for his work on <a href="https://flukeout.github.io/" target="_blank">CSS diner</a> that served as the foundation for this website',intro:`
    <p>To apply CSS to an element you need to select this element with a <b>selector</b>.</p>
    <p>CSS provides you with a number of different ways to do this, and you can explore them in this chapter.</p>`,onLevelStart(){Et(),Je(()=>$s())}},Gs=(e,t,s)=>Math.min(Math.max(e,t),s);function us(){Array.from(document.querySelectorAll(".shake, .strobe, .clean")).forEach(e=>e.classList.remove("shake","strobe","clean"))}const _s=e=>{!e||(e.classList.add("shake"),setTimeout(()=>{e.classList.remove("shake")},500))},Vi="html_css_training_progress";function Tn(e,t){return Array.isArray(P.progress.completed[e])&&P.progress.completed[e].includes(t)}function ip(){const e=P.progress.currentChapter,t=P.progress.currentLevel;Tn(e,t)||(P.progress.completed.hasOwnProperty(e)||(P.progress.completed[e]=[]),P.progress.completed[e].push(t),$n())}function np(e){return Array.isArray(P.progress.completed[e])?Gs(P.progress.completed[e].length/st[e-1].levels.length*100,0,100):0}function op(){var e;try{Object.assign(P.progress,JSON.parse((e=localStorage.getItem(Vi))!=null?e:"{}"))}catch{localStorage.removeItem(Vi),Gi()}}function $n(){localStorage.setItem(Vi,JSON.stringify(P.progress))}function Gi(){P.progress={currentChapter:1,currentLevel:0,completed:{}},$n()}function il(){P.menuOpened=!1}function Qt(){ip(),Ot(P.progress.currentChapter,P.progress.currentLevel+1)}function Ot(e,t){const s=st[e-1];t>s.levels.length&&e<st.length?(e++,t=0):t<0&&e>1&&(e=Math.max(1,e-1),t=st[e-1].levels.length);const i=Gs(e,1,st.length),n=Gs(t,0,st[e-1].levels.length);(n!==P.progress.currentLevel||i!==P.progress.currentChapter)&&(P.progress.currentChapter=i,P.progress.currentLevel=n,Yi(),nl(),il())}function nl(){const e=Me.value,t=e.levels;P.progress.currentLevel=Gs(P.progress.currentLevel,0,t.length),P.level=t[P.progress.currentLevel-1],$n(),e.onLevelStart&&e.onLevelStart(P.level)}function ap(e){const t=P.level,s=document.querySelector(".game-wrapper");us();const i=document.querySelectorAll(".table-content plate");e.length===t.solution.length&&t.solution.every((o,a)=>e[a]===o)?(s.classList.add("win"),i.forEach(o=>{o.classList.add("clean")}),setTimeout(function(){s.classList.remove("win"),Qt()},1e3)):e.forEach((o,a)=>{if(t.solution[a]!==o){const l=i[a];_s(l)}})}const lp=[{name:"ID vs tag",markup:`
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
        `,customers:[{selector:"bento.green *",meal:"pickle",request:"Put pickles in green bentos"},{selector:"#fancy",meal:"apple",request:"Put an apple on the fancy plate"},{selector:"plate:first-child",meal:"toast",request:"Put toasts on the first plate of each bento"},{selector:"plate:not(.square)",meal:"sushi",request:"Put sushis on plates not square"}],instructions:"<p>Combine all what you learned to solve this one!</p>",solution:["apple","sushi","pickle","toast","sushi",""]}],rp={name:"CSS Specificity",description:"When two properties override each other, the more specific selector wins",intro:`
    <p>Each selector in CSS has a certain level of specificity. For example, <code>div</code> has a low specificity because it targets any <tag>div</tag> in the document, while <code>#login-box</code> has a higher specificity because it only targets a element with a specific ID.</p>
    <p>The specificity matters when an element matches two selectors or more with conflicting properties assignment. The final property will be the one associated to the selector having the highest specificity.</p>
    <p>In this chapter, we will see how specificity is calculated and how you can use it to properly override styles.</p>`,instructions:`
    <p>Your customers have ordered a meal, but with conflicting instructions. The more specific the request, the higher the priority should be.</p>
    <p>Select the appropriate meal for each customer. You can change the meal by clicking on the plate.</p>
    <p>To help you, here is a <a target="_blank" href="img/specifishity.png">cheat sheet on specificity explained with fish</a>.</p>`,levels:lp,onLevelStart(){Je(()=>$s())}};function ts(e){var l,r,d,h;const t=P.level;if(!t)return;const s=t.wrapperClass||Me.value.wrapperClass,i=s?`.${s}`:"",n=new Set([t.selector,...Object.keys((l=t.cssRules)!=null?l:{}),...Object.keys((r=t.cssRulesHidden)!=null?r:{})]);let o="";for(let u of n)o+=`
${i} ${u} {
${[...t.cssRules?(d=t.cssRules[u])!=null?d:[]:[],...t.cssRulesHidden?(h=t.cssRulesHidden[u])!=null?h:[]:[]].map(g=>`  ${g};`).join(`
`)}
}`;e&&e.length>0&&(o+=`
${i} ${t.selector} {
  ${e.join(`
`)}
}`);const a=document.getElementById("css-editor-stylesheet");a.innerHTML=o}function ol(e){const t=P.level;us();const s=document.querySelector(".game-wrapper"),i=Array.from(s.querySelectorAll(t.selector));ts(e),cp(e,t)?(s.classList.add("win"),i.forEach(o=>{o.classList.remove("strobe")}),setTimeout(function(){s.classList.remove("win"),Qt()},1500)):i.forEach(o=>{o.classList.remove("strobe"),_s(document.querySelector(".table-content"))})}function So(e){return typeof e!="string"?e:e.replaceAll(/,\s+/g,",").replaceAll(/\s*\/\s*/g,"/").replaceAll(/'/g,'"').replace(/;$/,"").toLowerCase().trim()}function cp(e,t){if(!t.check)return!0;const s=Object.fromEntries(e.map(i=>[i.split(":")[0],i.split(":")[1]]).map(([i,n])=>[i.trim(),So(n)]));return t.check.every(([i,...n])=>{const o=s[i];return n.some(a=>(a=So(a),typeof o=="string"&&o===a||typeof a=="function"&&a(o)?!0:(console.log(`Expected ${i} to be ${a}, got ${o}`),!1)))})}const dp=[{name:"Inline display",doThis:"Set the display mode of apples to inline",selector:"apple",cssRulesHidden:{".table-content":["width: 800px","min-height: 360px"]},cssRules:{apple:["display: block"]},wrapperClass:"inline-layout",syntax:"display: inline",help:`<p>The <code>display</code> property does two things. The first thing it does is determine if the box it is applied to acts as <b>inline</b> or <b>block</b>. The second is to determine how the element's children should behave.</p>
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
    `,check:[["vertical-align","middle"]]}],pp={name:"Inline & Block Layout",description:"Basic display modes of HTML content",levels:dp,wrapperClass:"inline-block-chapter",intro:"<p>Let's learn the different ways to position elements in CSS !</p>",onLevelStart(){Je(()=>{$s(),Et(),ts()})}},hp=[{name:"Flex display",doThis:"Put the sushis on the plates",selector:"bento",wrapperClass:"flex-game",cssRules:{},syntax:"display: flex;",help:`<p>Flex layout lets you control the sizing and positioning of its direct child elements, that we will refer to as <b>items</b>. By default, flex layout has this behavior:
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
    </div>`,inputLinesNumber:4,check:[["flex-wrap","wrap"],["flex-direction","column"],["justify-content","center"],["align-content","space-evenly"]]}],up={name:"Flex Layout",description:"One-directional content flow",levels:hp,credits:'Credits: <a href="https://github.com/thomaspark">Thomas Park</a> for its inspiring <a target="_blank" href="https://flexboxfroggy.com/">Flexbox Froggy</a> game.',intro:`<p>Let's learn the different ways to position elements in CSS !</p>
  <p><code>flex</code> is another display mode for elements that is more powerful than <b>block</b>. Flex is used to specify <b>how the children of an element should occupy the space </b> they have in that element.</p>
    <p>Flex layouts should be used when you want to distribute elements along one axis, be it horizontal or vertical.</p>`,onLevelStart(){Je(()=>{$s(),Et(),ts()})}},fp=[{name:"Grid display",doThis:"Distribute the food in the correct areas of the bento",selector:"bento",wrapperClass:"grid-game",cssRules:{},syntax:"display: grid;",help:`<p>Grid layout lets you control the sizing and positioning of its <b>direct child elements</b>, that we will refer to as <b>items</b>. By default, grid elements have this behavior:
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
    </div>`,check:[["grid-template-columns","repeat(auto-fit, minmax(200px, 1fr))"]]}],gp={name:"Grid Layout",description:"Powerful 2D layouts",levels:fp,credits:'Credits: inspired from <a href="https://cssgridgarden.com/" target="_blank">CSS Grid Garden</a> by <a href="https://codepip.com" target="_blank">Codepip</a>',intro:`<p>Let's learn the different ways to position elements in CSS !</p>
  <p>While flexbox is a great layout tool for <b>one-directional</b> flow, we still need a solution for complex 2D placement.</p>
  <p>CSS Grid is this solution. It consists of around 24 new CSS properties that provides a powerful way to create two-dimensional layouts. Let's dig in !</p>`,onLevelStart(){Je(()=>{$s(),Et(),ts()})}},me=`
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
`,mp=[{name:"Font Families",selector:"h1",cssImports:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRules:{},syntax:'font-family: "MyFontName"',help:`<p>Use the <code>font-family</code> property to change the typeface of the text in an element.</p>
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
    <p>You can change the direction of text with <code>writing-mode</code> property. Values accepted are <code>ltr</code> (left to right), <code>rtl</code> (right to left), <code>vertical-lr</code> (top to bottom) and <code>vertical-rl</code> (bottom to top).</p>`,markup:me,doThis:"Display SUSHIS floating vertically on the left",expectedScreenshot:"img/reproduce/7-16.jpg",inputLinesNumber:2,check:[["writing-mode","vertical-lr"],["float","left"]]},{name:"Text Orientation",selector:"h2",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{h1:["font-family: 'Reggae One', serif"],h2:["font-size: 36px","text-transform: uppercase","letter-spacing: 1em","text-decoration: underline"],"p.information":["font-style: italic","color: gray","text-align: right"],".dish-info":["word-spacing: 5px"],".dish-name":["font-variant: small-caps"],".price":["font-weight: bold","float: right"],li:["list-style: upper-roman","line-height: 200%","text-indent: 20px","margin-left: 50px"]},cssRules:{h2:["float: left","writing-mode: vertical-lr"]},syntax:"text-orientation: <mode>;",help:"<p>After changing the direction, you can also change the orientation of individual characters for styling purposes, with the <code>text-orientation</code> property. Values accepted are <code>mixed</code> (default), <code>upright</code> (rotate 90\xB0 characters of vertical text) or <code>sideways</code> (rotate 90\xB0 all characters)</p>",markup:me,doThis:"Change the characters orientation and line decoration of SUSHIS",expectedScreenshot:"img/reproduce/7-17.jpg",inputLinesNumber:2,check:[["text-orientation","upright"],["text-decoration","overline"]]}],bp={name:"Typography",description:"The art of displaying text",levels:mp,wrapperClass:"menu-wrapper",intro:`<p>Time to work on the restaurant menu !</p>
  <img src="img/menu-logo.png" height="120" style="display:block; height: 120px; margin: 0 auto" />
  <p>Everyone knows that best restaurants all have nice fonts on their menu. Let's see how we can make beautiful text displays with CSS !</p>`,onLevelStart(){Je(()=>{Et(),ts()})}},os=`
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
</main>`,Ue={h1:["font-family: 'Reggae One', serif"],"img#chef-picture":["display: block","width: 100%"],".dish-name":["font-variant: small-caps","font-size: 140%"],".price":["font-weight: bold","margin-left: 1em"]},yp=[{name:"Background color",selector:"h2",cssImportsHidden:["https://fonts.googleapis.com/css?family=Reggae+One"],cssRulesHidden:{...Ue},syntax:"background-color: <color>",help:`<p>Use <code>background-color</code> to fill the element box (content + padding) with a color</p>
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
    <p>You can add as many filters as you want in the <code>filter</code> property, separated by whitespaces.</p>`,examples:["<code>filter: blur(5px);</code>","<code>filter: brightness(0.4);</code>","<code>filter: contrast(200%);</code>","<code>filter: drop-shadow(16px 16px 20px blue);</code>","<code>filter: grayscale(50%);</code>","<code>filter: hue-rotate(90deg);</code>","<code>filter: invert(75%);</code>","<code>filter: opacity(25%);</code>","<code>filter: saturate(30%);</code>","<code>filter: sepia(60%);</code>"],markup:as,doThis:"Change the brightness and saturation of the picture to 120%",expectedScreenshot:"img/reproduce/8-10.jpg",check:[["filter","brightness(120%) saturate(120%)","brightness(1.2) saturate(1.2)","saturate(120%) brightness(120%)","saturate(1.2) brightness(1.2)"]]}],vp={name:"Background & Images",description:"Illustrating text with pictures, vector graphics or colored backgrounds",levels:yp,wrapperClass:"menu-wrapper-part2",intro:`<p>The menu looks good, but it will be even better with colored backgrounds and images.</p>
  <p>We asked a photograph to take pictures of the special sushi platters. Looks delicious !</p>
  <img src="img/sushis/1.png" width="300" />
  <img src="img/sushis/2.png" width="300" />
  <img src="img/sushis/3.png" width="300" />
  <img src="img/sushis/4.png" width="300" />`,onLevelStart(){Je(()=>{Et(),ts()})}},st=[Ec,sl,rp,pp,up,gp,bp,vp],P=ti({progress:{completed:{},currentChapter:1,currentLevel:0},level:Oa[0],menuOpened:!1});window.state=P;const Me=ce(()=>st[P.progress.currentChapter-1]);var Po;const Cs=typeof window<"u",wp=e=>typeof e=="string",Si=()=>{};Cs&&((Po=window==null?void 0:window.navigator)==null?void 0:Po.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function xp(e){return typeof e=="function"?e():_(e)}function _p(e){return e}function kp(e){return Pl()?(Ll(e),!0):!1}function Tp(e){var t;const s=xp(e);return(t=s==null?void 0:s.$el)!=null?t:s}const al=Cs?window:void 0;Cs&&window.document;Cs&&window.navigator;Cs&&window.location;function ll(...e){let t,s,i,n;if(wp(e[0])?([s,i,n]=e,t=al):[t,s,i,n]=e,!t)return Si;let o=Si;const a=Ut(()=>Tp(t),r=>{o(),r&&(r.addEventListener(s,i,n),o=()=>{r.removeEventListener(s,i,n),o=Si})},{immediate:!0,flush:"post"}),l=()=>{a(),o()};return kp(l),l}const $p=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function Pi(e,t,s={}){const{target:i=al,eventName:n="keydown",passive:o=!1}=s,a=$p(e);return ll(i,n,r=>{a(r)&&t(r)},o)}const Ji=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xi="__vueuse_ssr_handlers__";Ji[Xi]=Ji[Xi]||{};Ji[Xi];var Lo;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Lo||(Lo={}));var Cp=Object.defineProperty,Ro=Object.getOwnPropertySymbols,Sp=Object.prototype.hasOwnProperty,Pp=Object.prototype.propertyIsEnumerable,Ao=(e,t,s)=>t in e?Cp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Lp=(e,t)=>{for(var s in t||(t={}))Sp.call(t,s)&&Ao(e,s,t[s]);if(Ro)for(var s of Ro(t))Pp.call(t,s)&&Ao(e,s,t[s]);return e};const Rp={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Lp({linear:_p},Rp);const Ap={key:0,class:"credits"},Ip=["innerHTML"],Op=Z({__name:"About",setup(e){const t=ce(()=>Me.value.credits);return(s,i)=>_(t)?(T(),S("div",Ap,[m("p",{innerHTML:_(t)},null,8,Ip)])):ke("",!0)}});const he=(e,t)=>{const s=e.__vccOpts||e;for(const[i,n]of t)s[i]=n;return s},Mp=he(Op,[["__scopeId","data-v-9c9636d8"]]);const Ep={},Hp=e=>(He("data-v-7ec5a0cc"),e=e(),je(),e),jp=Q(" HTML/CSS Training "),Np=Hp(()=>m("span",{class:"share-menu"},[Q(" Repository "),m("a",{class:"share-github",target:"_blank",href:"https://github.com/worldline/html-css-training"})],-1)),Fp=[jp,Np];function zp(e,t){return T(),S("header",null,Fp)}const Bp=he(Ep,[["render",zp],["__scopeId","data-v-7ec5a0cc"]]),Dp=e=>(He("data-v-5e4fbae2"),e=e(),je(),e),qp={class:"chapter-intro"},Wp={class:"chapter-name"},Up=Dp(()=>m("hr",null,null,-1)),Yp=Z({__name:"ChapterIntro",setup(e){return(t,s)=>(T(),S("div",qp,[m("h1",null,[Q("Chapter "+U(_(P).progress.currentChapter)+": ",1),m("p",Wp,U(_(Me).name),1)]),Up,m("p",null,U(_(Me).description),1)]))}});const Kp=he(Yp,[["__scopeId","data-v-5e4fbae2"]]);let Vp=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,s)=>(s&=63,s<36?t+=s.toString(36):s<62?t+=(s-26).toString(36).toUpperCase():s>62?t+="-":t+="_",t),"");function Gp(e){const t=e.contentDocument,s=e.contentWindow;((i,n)=>{const o="div",a=["#c33","#ea4c88","#639","#06c","#690","#fc3","#f90","#963"];function l(I){return a[I%(a.length-1)]}function r(I,O,z,oe,ue,fe,ie,B){const le=t.createElement(o);return le.dataset.faceFor=B,new Map().set("position","absolute").set("transform-origin",["left","top"]).set("background",ie).set("width",`${oe}px`).set("height",`${ue}px`).set("opacity","0.8").set("transform",`translate3d(${I}px, ${O}px, ${z}px) rotateX(270deg) rotateY(${fe}deg)`).forEach((ae,de)=>le.style[de]=Array.isArray(ae)?ae.join(" "):ae),le.outerHTML}const d=.001;let h="";function u(I,O,z,oe){const ue=I.childNodes,fe=ue.length;for(let ie=0;ie<fe;ie++){const B=ue[ie];if(B.nodeType===Node.ELEMENT_NODE){const le=Vp();B.dataset.uid=le,B.style.overflow="visible",B.style.transformStyle="preserve-3d",B.style.transform=`translateZ(${(i+(fe-ie)*d).toFixed(3)}px)`;let ae=z,de=oe;B.offsetParent===I&&(ae+=I.offsetLeft,de+=I.offsetTop),u(B,O+1,ae,de);const xe=(O+1)*i,ge=l(O);h+=r(ae+B.offsetLeft,de+B.offsetTop,xe,B.offsetWidth,i,0,ge,le),h+=r(ae+B.offsetLeft+B.offsetWidth,de+B.offsetTop,xe,B.offsetHeight,i,270,ge,le),h+=r(ae+B.offsetLeft,de+B.offsetTop+B.offsetHeight,xe,B.offsetWidth,i,0,ge,le),h+=r(ae+B.offsetLeft,de+B.offsetTop,xe,B.offsetHeight,i,270,ge,le)}}}const g=t.body;g.style.overflow="visible",g.style.transformStyle="preserve-3d",g.style.perspective=n.toString();const k=I=>(I/2).toFixed(2),M=`${k(s.innerWidth)}px ${k(s.innerHeight)}px`;g.style.perspectiveOrigin=M,g.style.transformOrigin=M,u(g,0,0,0),t.addEventListener("mousemove",I=>{if(!I.ctrlKey){const O=I.clientX/s.innerWidth,z=1-I.clientY/s.innerHeight,oe=120,ue=fe=>((fe-.5)*oe).toFixed(2);g.style.transform=`rotateX(${ue(z)}deg) rotateY(${ue(O)}deg)`}},!0),t.addEventListener("mouseover",I=>{if(I.ctrlKey){const O=I.target,z=O.dataset.uid||O.dataset.faceFor;O.dataset.faceFor&&Array.from(t.querySelectorAll(`[data-uid="${z}"], [data-face-for="${z}"]`)).forEach(oe=>oe.classList.add("hovered"))}}),t.addEventListener("mouseleave",I=>{t.querySelectorAll(".hovered").forEach(O=>O.classList.remove("hovered"))}),t.addEventListener("mouseout",I=>{const O=I.target,z=O.dataset.uid||O.dataset.faceFor;Array.from(t.querySelectorAll(`[data-uid="${z}"], [data-face-for="${z}"]`)).forEach(oe=>oe.classList.remove("hovered"))}),t.addEventListener("click",I=>{var z;let O=I.target;O.nodeName==="A"&&I.preventDefault(),O.dataset.faceFor&&(O=t.querySelector(`[data-uid="${O.dataset.faceFor}"]`)),O&&((z=s.top)==null||z.postMessage({event:"elementClick",tag:O.tagName.toLowerCase(),type:O.getAttribute("type")}))});const j=t.createElement(o);j.style.position="absolute",j.style.transformStyle="preserve-3d";const{marginTop:L,marginLeft:A}=getComputedStyle(g);j.style.top=`-${L}`,j.style.left=`-${A}`,j.innerHTML=h,g.appendChild(j),g.style.transition="transform 400ms ease-in-out",g.style.transform="rotateX(-22.5deg) rotateY(12.5deg)",setTimeout(()=>{g.style.transition=""},400)})(50,5e3)}const Jp={},Xp={id:"correct-animation"};function Qp(e,t){return T(),S("div",Xp," \u2714\uFE0F Correct ")}const Ss=he(Jp,[["render",Qp]]),rl=e=>(He("data-v-7c679098"),e=e(),je(),e),Zp={key:0},eh=Q("Use the "),th=rl(()=>m("b",null,"3D",-1)),sh=Q(" view and the "),ih=rl(()=>m("b",null,"Ctrl",-1)),nh=Q(" key to select elements in the DOM."),oh=[eh,th,sh,ih,nh],ah=Z({__name:"InteractiveDOM",setup(e){const t=ce(()=>P.level),s=Ee(!1),i=Ee(null),n=Ee(!1);function o(){if(!i.value)return;const a=i.value;s.value===!0&&a.contentWindow?(a.contentWindow.location.reload(),s.value=!1):(Gp(a),s.value=!0)}return ll("message",a=>{if(a.data.event==="elementClick"){const l=a.data,r=l.tag,d=P.level;if(r==null||!d.tag)return;Mc(l,d)?(n.value=!0,setTimeout(()=>{n.value=!1,Qt()},600)):_s(document.querySelector("iframe"))}}),(a,l)=>(T(),S(F,null,[m("p",{class:"order",style:Ve({opacity:_(t).order&&!n.value?1:0})},U(_(t).order||"\xA0"),5),m("div",{class:ye(["game-wrapper",{win:n.value}])},[W(Ss),m("iframe",{src:"demo/chapter1.html",ref_key:"iframe",ref:i,scrolling:"no"},null,512)],2),_(t).order&&_(t).tag?(T(),S("p",Zp,oh)):ke("",!0),m("button",{onClick:o,id:"button-3d"},U(s.value?"2D":"3D"),1)],64))}});const lh=he(ah,[["__scopeId","data-v-7c679098"]]),rh={class:"input-header"},ch={key:0,class:"file-name"},dh={class:"file-window"},ph={class:"line-numbers"},hh=m("br",null,null,-1),Qi=Z({__name:"EditorPane",props:{title:String,fileName:{type:String,required:!1},lang:String,nbLines:{type:Number,default:20}},setup(e){return(t,s)=>(T(),S("div",{class:ye(["editor-pane",e.lang+"-view"])},[m("div",rh,[e.fileName?(T(),S("div",ch,U(e.fileName),1)):ke("",!0),Q(" "+U(e.title),1)]),m("div",dh,[m("div",ph,[(T(!0),S(F,null,Se(e.nbLines,i=>(T(),S(F,null,[Q(U(i),1),hh],64))),256))]),yt(t.$slots,"default")])],2))}});const uh={class:"markup"},cl=Z({__name:"HTMLMarkup",props:{markup:String},setup(e){const t=e,s=Ee(null);pa(i),Ut(()=>t.markup,i);function i(){var a;const o=document.createElement("div");o.innerHTML=(a=t.markup)!=null?a:"",s.value&&(s.value.innerHTML=n(o,!0).innerHTML)}function n(o,a){if(o instanceof HTMLElement){const l=document.createElement("div"),r=o.tagName.toLowerCase(),d=o.getAttributeNames().map(u=>`${u}="${o.getAttribute(u)}"`).join(" "),h=Array.from(o.childNodes);return h.length>0?(a||(l.textContent=`<${r}${d?" "+d:""}>`),h.forEach(u=>l.appendChild(n(u,!1))),a||l.appendChild(document.createTextNode(`</${r}>`))):l.textContent=`<${r}${d?" "+d:""} />`,l}else{const l=document.createElement("span");return l.textContent=o.textContent,l}}return(o,a)=>(T(),S("div",uh,[m("div",{ref_key:"container",ref:s},null,512)]))}});const fh=e=>(He("data-v-132559ed"),e=e(),je(),e),gh=["onKeydown","onKeyup","placeholder"],mh=fh(()=>m("span",{class:"plus"},"+",-1)),bh=Z({__name:"Editor",props:{placeholder:String},emits:["input"],setup(e,{emit:t}){const s=()=>n.value?n.value.value:"",i=Ee(null),n=Ee(null),o=ce(()=>P.level),a=ce(()=>{var d;return{height:((d=P.level.inputLinesNumber)!=null?d:1)*1.5+"em"}});function l(d){var g;const u=s().split(`
`).map(k=>k.trim()).map(k=>Me.value===sl||k.endsWith(";")?k:k+";");if(u.length>=((g=o.value.inputLinesNumber)!=null?g:1)){d.preventDefault();const k=i.value;k.classList.remove("enterhit"),setTimeout(()=>k.classList.add("enterhit"),0)}n.value&&(n.value.value=u.join(`
`)),t("input",u)}function r(){const d=n.value;d.classList.toggle("input-strobe",d.value.length>0)}return(d,h)=>(T(),S("div",{class:"editor",onClick:h[0]||(h[0]=u=>{var g;return(g=n.value)==null?void 0:g.focus()})},[W(Qi,{title:"CSS Editor",fileName:"style.css",lang:"css"},{default:Le(()=>[yt(d.$slots,"code-before",{},void 0,!0),m("textarea",{id:"editor-input",class:"input-strobe",type:"text",ref_key:"inputElement",ref:n,onKeydown:Aa(l,["enter"]),onKeyup:Ws(r,["prevent"]),placeholder:e.placeholder,style:Ve(_(a))},null,44,gh),mh,m("div",{class:"enter-button",onClick:l,ref_key:"enterButton",ref:i},"enter",512),yt(d.$slots,"code-after",{},void 0,!0)]),_:3}),W(Qi,{title:"HTML Viewer",fileName:"table.html",lang:"html"},{default:Le(()=>[W(cl,{markup:_(o).markup},null,8,["markup"])]),_:1})]))}});const Cn=he(bh,[["__scopeId","data-v-132559ed"]]),yh={name:"Table",props:["content","hintContent"]};const dl=e=>(He("data-v-1e2c3b82"),e=e(),je(),e),vh={class:"table-wrapper"},wh={class:"table-surface",ref:"surface"},xh={class:"table-content"},_h=["innerHTML"],kh=["innerHTML"],Th={key:2,ref:"board",class:"table"},$h={class:"table-edge",ref:"edge"},Ch=dl(()=>m("div",{class:"table-leg"},null,-1)),Sh=dl(()=>m("div",{class:"table-leg"},null,-1)),Ph=[Ch,Sh];function Lh(e,t,s,i,n,o){return T(),S("div",vh,[m("div",wh,null,512),m("div",xh,[s.hintContent?(T(),S("div",{key:0,class:"hint-content",innerHTML:s.hintContent},null,8,_h)):ke("",!0),s.content?(T(),S("div",{key:1,innerHTML:s.content,ref:"board",class:"table"},null,8,kh)):(T(),S("div",Th,[yt(e.$slots,"default",{},void 0,!0)],512))]),m("div",$h,Ph,512)])}const Sn=he(yh,[["render",Lh],["__scopeId","data-v-1e2c3b82"]]),Pn=e=>(He("data-v-48e426a9"),e=e(),je(),e),Rh={class:"order"},Ah={class:"game-container"},Ih={class:"game-wrapper"},Oh=Pn(()=>m("br",null,null,-1)),Mh=Q("{"),Eh=Pn(()=>m("br",null,null,-1)),Hh=Q(" /* Styles would go here. */"),jh=Pn(()=>m("br",null,null,-1)),Nh=Q(" } "),Fh=Z({__name:"SelectorGame",setup(e){const t=ce(()=>P.level);function s(n){const o=P.level;us();const a=document.querySelector(".table-content"),l=document.querySelector(".game-wrapper");try{a.querySelectorAll(n)}catch{n=""}const r=n?Array.from(a.querySelectorAll(n)):[],d=Array.from(a.querySelectorAll(o.selector));let h=!1;r.length==0&&_s(document.querySelector(".editor")),r.length===d.length&&r.length>0&&(h=i(r,d)),h?(l.classList.add("win"),r.forEach(u=>{u.classList.remove("strobe"),u.classList.add("clean")}),Et(),setTimeout(function(){l.classList.remove("win"),us(),Qt()},1e3)):(r.forEach(u=>{u.classList.remove("strobe"),_s(u)}),setTimeout(function(){us(),d.forEach(u=>{u.classList.add("strobe")})},500))}function i(n,o){return n.length===o.length&&n.every(a=>o.includes(a))}return(n,o)=>(T(),S(F,null,[m("p",Rh,U(_(t).doThis),1),m("div",Ah,[m("div",Ih,[W(Ss),W(Sn,{content:_(t).markup,class:ye(_(t).wrapperClass||_(Me).wrapperClass)},null,8,["content","class"])])]),W(Cn,{placeholder:"Type in a CSS selector",onInput:o[0]||(o[0]=a=>s(a[0]))},{"code-after":Le(()=>[Oh,Mh,Eh,Hh,jh,Nh]),_:1})],64))}});const zh=he(Fh,[["__scopeId","data-v-48e426a9"]]),Bh={class:"customer-wrapper"},Dh={class:"customer-speech-bubble"},qh={class:"customer-body"},Wh={class:"code"},Uh=Z({__name:"Customer",props:{request:String,selector:String,meal:String},setup(e){return(t,s)=>(T(),S("div",Bh,[m("div",Dh,U(e.request),1),m("div",qh,[m("div",Wh,[m("pre",null,U(e.selector)+` {\r
  meal: `+U(e.meal)+`;\r
}`,1)])])]))}});const Yh=he(Uh,[["__scopeId","data-v-c1c4318a"]]),Kh={class:"game-container"},Vh={class:"game-wrapper"},Gh={class:"customers"},Jh={class:"editor"},Xh=Z({__name:"SpecificityGame",setup(e){const t=ce(()=>P.level);function s(l){const r=l.target.closest("plate");r&&n(r)}const i=["sushi","toast","apple","pickle"];function n(l){var h,u;const r=l.firstChild,d=i[i.indexOf((u=(h=r==null?void 0:r.tagName)==null?void 0:h.toLowerCase())!=null?u:"soup")+1]||"sushi";r==null?l.appendChild(document.createElement(d)):l.replaceChild(document.createElement(d),r)}const o=Ee(null);function a(){const r=[...o.value.$el.querySelectorAll("plate")].map(d=>d.firstElementChild?d.firstElementChild.tagName.toLowerCase():"");ap(r)}return(l,r)=>(T(),S("div",Kh,[m("div",Vh,[W(Ss),W(Sn,{content:_(t).markup,onClick:s,ref_key:"table",ref:o},null,8,["content"]),m("div",{class:"actions"},[m("button",{onClick:a,id:"submit-button"},"Validate")]),m("div",Gh,[(T(!0),S(F,null,Se(_(t).customers,d=>(T(),Xe(Yh,Oo(yn(d)),null,16))),256))]),m("div",Jh,[W(Qi,{title:"HTML Viewer",fileName:"table.html",lang:"html"},{default:Le(()=>[W(cl,{markup:_(t).markup},null,8,["markup"])]),_:1})])])]))}});const Qh=he(Xh,[["__scopeId","data-v-00d68f52"]]),Ht=e=>(He("data-v-4ea136c9"),e=e(),je(),e),Zh={class:"order"},eu={class:"game-container"},tu={class:"game-wrapper"},su=Ht(()=>m("br",null,null,-1)),iu=Ht(()=>m("br",null,null,-1)),nu=Q(" }"),ou=Ht(()=>m("br",null,null,-1)),au=Ht(()=>m("br",null,null,-1)),lu=Ht(()=>m("br",null,null,-1)),ru=Ht(()=>m("br",null,null,-1)),cu=Ht(()=>m("br",null,null,-1)),du=Q("} "),pu=Z({__name:"LayoutGame",setup(e){const t=ce(()=>P.level),s=ce(()=>{var n;return Object.fromEntries(Object.entries((n=t.value.cssRules)!=null?n:{}).filter(([o])=>o!==t.value.selector))}),i=n=>t.value.cssRules?t.value.cssRules[n]||[]:[];return(n,o)=>(T(),S(F,null,[m("p",Zh,U(_(t).doThis),1),m("div",eu,[m("div",tu,[W(Ss),(T(),Xe(Sn,{content:_(t).markup,hintContent:_(t).hintMarkup,key:_(t).name,class:ye(_(t).wrapperClass||_(Me).wrapperClass)},null,8,["content","hintContent","class"]))])]),W(Cn,{placeholder:"Type styles here",onInput:o[0]||(o[0]=a=>_(ol)(a))},{"code-before":Le(()=>[(T(!0),S(F,null,Se(_(s),(a,l)=>(T(),S(F,{key:"selector_"+l},[Q(U(l)+" {",1),su,(T(!0),S(F,null,Se(a,r=>(T(),S(F,{key:l+"_"+r},[Q("\xA0\xA0"+U(r)+";",1),iu],64))),128)),nu,ou,au],64))),128)),Q(" "+U(_(t).selector)+" {",1),lu,(T(!0),S(F,null,Se(i(_(t).selector),a=>(T(),S(F,{key:_(t).selector+"_"+a},[Q("\xA0\xA0"+U(a)+";",1),ru],64))),128))]),"code-after":Le(()=>[cu,du]),_:1})],64))}});const hu=he(pu,[["__scopeId","data-v-4ea136c9"]]),ct=e=>(He("data-v-4691c48a"),e=e(),je(),e),uu={class:"order"},fu={class:"game-container"},gu={class:"game-wrapper"},mu=["innerHTML"],bu={class:"expected-result"},yu=ct(()=>m("p",null,"Expected result:",-1)),vu=["src"],wu=["href"],xu=["href"],_u=ct(()=>m("br",null,null,-1)),ku={key:0},Tu=ct(()=>m("br",null,null,-1)),$u=ct(()=>m("br",null,null,-1)),Cu=Q(" }"),Su=ct(()=>m("br",null,null,-1)),Pu=ct(()=>m("br",null,null,-1)),Lu=ct(()=>m("br",null,null,-1)),Ru=ct(()=>m("br",null,null,-1)),Au=ct(()=>m("br",null,null,-1)),Iu=Q("} "),Ou=Z({__name:"ReproduceGame",setup(e){const t=ce(()=>P.level),s=ce(()=>{var a;return Object.fromEntries(Object.entries((a=t.value.cssRules)!=null?a:{}).filter(([l])=>l!==t.value.selector))}),i=ce(()=>t.value.cssImports),n=ce(()=>t.value.cssImportsHidden),o=Ee("");return Ut(()=>t,()=>{o.value="",Je(()=>{var a;o.value=(a=t.value.markup)!=null?a:""})}),(a,l)=>(T(),S(F,null,[m("p",uu,U(_(t).doThis),1),m("div",fu,[m("div",gu,[W(Ss),m("div",{class:ye(["game-content",_(t).wrapperClass||_(Me).wrapperClass]),innerHTML:_(t).markup},null,10,mu),m("div",bu,[yu,m("img",{src:_(t).expectedScreenshot},null,8,vu)])])]),W(Cn,{placeholder:"Type styles here",onInput:l[0]||(l[0]=r=>_(ol)(r))},{"code-before":Le(()=>{var r,d;return[(T(!0),S(F,null,Se(_(n),h=>(T(),S("link",{rel:"stylesheet",href:h},null,8,wu))),256)),(T(!0),S(F,null,Se(_(i),h=>(T(),S("link",{rel:"stylesheet",href:h},null,8,xu))),256)),(T(!0),S(F,null,Se(_(i),h=>(T(),S(F,null,[Q('@import "'+U(h)+'";',1),_u],64))),256)),_(i)?(T(),S("br",ku)):ke("",!0),(T(!0),S(F,null,Se(_(s),(h,u)=>(T(),S(F,{key:"selector_"+u},[Q(U(u)+" {",1),Tu,(T(!0),S(F,null,Se(h,g=>(T(),S(F,{key:u+"_"+g},[Q("\xA0\xA0"+U(g)+";",1),$u],64))),128)),Cu,Su,Pu],64))),128)),Q(" "+U(_(t).selector)+" {",1),Lu,(T(!0),S(F,null,Se((d=((r=_(t).cssRules)!=null?r:{})[_(t).selector])!=null?d:[],h=>(T(),S(F,{key:_(t).selector+"_"+h},[Q("\xA0\xA0"+U(h)+";",1),Ru],64))),128))]}),"code-after":Le(()=>[Au,Iu]),_:1})],64))}});const Mu=he(Ou,[["__scopeId","data-v-4691c48a"]]),Eu={class:"left-col"},Hu={class:"left-panel"},ju=Z({__name:"LeftCol",setup(e){const t=ce(()=>{if(P.progress.currentLevel===0)return Kp;switch(P.progress.currentChapter){case 1:return lh;case 2:return zh;case 3:return Qh;case 4:case 5:case 6:return hu;case 7:case 8:return Mu}});return(s,i)=>(T(),S("div",Eu,[W(Bp),m("div",Hu,[(T(),Xe(fa(_(t))))]),W(Mp)]))}});const Nu=he(ju,[["__scopeId","data-v-12bae500"]]),Fu={class:"chapter-header"},zu=Z({__name:"ChapterHeader",setup(e){const t=ce(()=>st[P.progress.currentChapter-1]);return(s,i)=>(T(),S("h1",Fu,"Chapter "+U(_(P).progress.currentChapter)+": "+U(_(t).name),1))}});const Bu=he(zu,[["__scopeId","data-v-e62a0f1e"]]),Du={class:"level-text"},qu={key:0,class:"checkmark"},Wu={class:"level-nav"},Uu={key:1,class:"level-progress"},Yu=Z({__name:"LevelHeader",setup(e){const t=ce(()=>Me.value.levels),s=ce(()=>Tn(P.progress.currentChapter,P.progress.currentLevel));function i(n="next",o){const a=o.target;a.classList.add("link-jiggle"),setTimeout(()=>{a.classList.remove("link-jiggle")},1e3),n==="next"?Ot(P.progress.currentChapter,P.progress.currentLevel+1):Ot(P.progress.currentChapter,P.progress.currentLevel-1)}return(n,o)=>(T(),S(F,null,[_(P).progress.currentLevel>0?(T(),S("h2",{key:0,class:ye(["level-header",{completed:_(s)}])},[m("span",Du," Level "+U(_(P).progress.currentLevel)+" of "+U(_(t).length),1),_(s)?(T(),S("span",qu,"\u2714\uFE0F")):ke("",!0)],2)):ke("",!0),m("div",Wu,[m("a",{class:"previous",href:"#",onClick:o[0]||(o[0]=Ws(a=>i("previous",a),["prevent"]))}),m("a",{class:"next",href:"#",onClick:o[1]||(o[1]=Ws(a=>i("next",a),["prevent"]))})]),_(P).progress.currentLevel>0?(T(),S("div",Uu,[m("div",{class:"progress",style:Ve({width:_(np)(_(P).progress.currentChapter)+"%"})},null,4)])):ke("",!0)],64))}});const Ku=he(Yu,[["__scopeId","data-v-80b5bec5"]]),fi=e=>(He("data-v-01318d24"),e=e(),je(),e),Vu={class:"level-menu"},Gu=fi(()=>m("h2",null,"Choose a level",-1)),Ju={class:"chapters-list"},Xu={class:"chapters"},Qu=["onClick"],Zu={class:"chapter-number"},ef=fi(()=>m("div",{class:"chapter-toggle"},null,-1)),tf={key:0,class:"levels"},sf=["onClick"],nf=fi(()=>m("span",{class:"checkmark"},"\u2714\uFE0F",-1)),of={class:"level-number"},af=fi(()=>m("div",{class:"level-menu-toggle"},null,-1)),lf=[af],rf=Z({__name:"LevelMenu",setup(e){const t=Ee(P.progress.currentChapter);function s(n){n===t.value?t.value=0:t.value=n}function i(){P.menuOpened=!P.menuOpened}return(n,o)=>(T(),S(F,null,[m("div",Vu,[Gu,m("div",Ju,[m("ul",Xu,[(T(!0),S(F,null,Se(_(st),(a,l)=>(T(),S("li",{key:"chapter_"+a.name},[m("a",{class:ye([{current:l+1===_(P).progress.currentChapter,opened:l+1===t.value},"chapter-name"]),onClick:r=>s(l+1)},[m("span",Zu,U(l+1),1),Q(" "+U(a.name)+" ",1),ef],10,Qu),l+1===t.value?(T(),S("ul",tf,[(T(!0),S(F,null,Se(a.levels,(r,d)=>(T(),S("li",{key:"level_"+r.name},[m("a",{class:ye({current:d+1===_(P).progress.currentLevel,completed:_(Tn)(l+1,d+1)}),onClick:h=>_(Ot)(l+1,d+1)},[nf,m("span",of,U(d+1),1),Q(" "+U(r.name),1)],10,sf)]))),128))])):ke("",!0)]))),128))])]),m("a",{class:"reset-progress",href:"#",onClick:o[0]||(o[0]=Ws((...a)=>_(Gi)&&_(Gi)(...a),["prevent"]))},"Reset Progress")]),m("div",{class:"level-menu-toggle-wrapper",onClick:i},lf)],64))}});const cf=he(rf,[["__scopeId","data-v-01318d24"]]),df=e=>(He("data-v-d12db1bc"),e=e(),je(),e),pf=df(()=>m("hr",null,null,-1)),hf={class:"instructions"},uf=["innerHTML"],ff=Z({__name:"ChapterInstructions",setup(e){function t(){Ot(P.progress.currentChapter,1)}return(s,i)=>(T(),S(F,null,[pf,m("div",hf,[m("div",{innerHTML:_(Me).intro},null,8,uf)]),m("div",{class:"actions"},[m("button",{onClick:t},"Next")])],64))}});const gf=he(ff,[["__scopeId","data-v-d12db1bc"]]),mf=e=>(He("data-v-ae17a712"),e=e(),je(),e),bf={class:"instructions"},yf=["innerHTML"],vf=mf(()=>m("hr",null,null,-1)),wf={class:"title"},xf=["innerHTML"],_f={class:"actions"},kf=Z({__name:"LevelInstructions",setup(e){const t=ce(()=>P.level);return(s,i)=>(T(),S(F,null,[m("div",bf,[_(Me).instructions?(T(),S(F,{key:0},[m("div",{innerHTML:_(Me).instructions},null,8,yf),vf],64)):ke("",!0),m("h3",wf,U(_(t).name),1),m("div",{innerHTML:_(P).level.instructions},null,8,xf)]),m("div",_f,[_(t).skippable?(T(),S("button",{key:0,onClick:i[0]||(i[0]=(...n)=>_(Qt)&&_(Qt)(...n))},"Next")):ke("",!0)])],64))}});const Tf=he(kf,[["__scopeId","data-v-ae17a712"]]),$f={class:"display-help"},Cf={class:"title"},Sf={key:0,class:"syntax"},Pf=["innerHTML"],Lf={key:1,class:"examples-title"},Rf={class:"examples"},Af=["innerHTML"],If=Z({__name:"SyntaxLevelInstructions",setup(e){const t=ce(()=>P.level);return(s,i)=>(T(),S("div",$f,[m("h3",Cf,U(_(t).helpTitle||_(t).name),1),_(t).syntax?(T(),S("p",Sf,[m("pre",null,U(_(t).syntax),1)])):ke("",!0),m("div",{class:"hint",innerHTML:_(t).help},null,8,Pf),_(t).examples&&_(t).examples.length>0?(T(),S("h4",Lf,"Examples")):ke("",!0),m("div",Rf,[(T(!0),S(F,null,Se(_(t).examples,n=>(T(),S("div",{class:"example",key:n,innerHTML:n},null,8,Af))),128))])]))}});const Of=he(If,[["__scopeId","data-v-cf836146"]]),Mf={class:"doc-wrapper"},Ef=Z({__name:"RightCol",setup(e){const t=ce(()=>{if(P.progress.currentLevel===0)return gf;switch(P.progress.currentChapter){case 2:case 4:case 5:case 6:case 7:case 8:return Of;case 1:case 3:default:return Tf}});return(s,i)=>(T(),S("div",{class:ye(["right-col",{"menu-open":_(P).menuOpened}])},[m("div",Mf,[W(Bu),W(Ku),(T(),Xe(fa(_(t))))]),W(cf)],2))}});const Hf=he(Ef,[["__scopeId","data-v-f319e6bc"]]),jf=Z({__name:"App",setup(e){return Pi("Escape",t=>{t.preventDefault(),il()}),Pi("PageUp",t=>{t.preventDefault(),Ot(P.progress.currentChapter,P.progress.currentLevel-1)}),Pi("PageDown",t=>{t.preventDefault(),Ot(P.progress.currentChapter,P.progress.currentLevel+1)}),op(),nl(),(t,s)=>(T(),S(F,null,[W(Nu),W(Hf)],64))}});Ia(jf).use(ep).mount("#app");
