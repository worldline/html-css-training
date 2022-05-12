import{n as ve,d as v,c as D,r as C,u as ye,o as p,a as h,b as a,t as b,e as o,f as le,g as L,F as $,h as k,p as O,i as F,j as _e,k as ke,l as xe,m as we,q as Se,w as Te,s as Ce,v as R,x as E,y as oe,z as Z,A as re,B as ie,C as K,D as Q,E as Le,G as $e}from"./vendor.3bc46d27.js";const Me=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};Me();const X=(e,t,n)=>Math.min(Math.max(e,t),n);function ce(){Array.from(document.querySelectorAll(".shake, .strobe")).forEach(e=>e.classList.remove("shake","strobe"))}const pe=e=>{document.querySelector(e).classList.add("shake"),setTimeout(()=>{document.querySelector(e).classList.remove("shake")},500)},ee="html_css_training_progress",Ae={completed:{},currentChapter:1,currentLevel:0,hasCompleted(e,t){return Array.isArray(this.completed[e])&&this.completed[e].includes(t)},completeLevel(){const e=this.currentChapter,t=this.currentLevel;this.hasCompleted(e,t)||(this.completed.hasOwnProperty(e)||(this.completed[e]=[]),this.completed[e].push(t),this.save())},getPercentCompleted(e){return Array.isArray(this.completed[e])?X(this.completed[e].length/M[e-1].levels.length*100,0,100):0},load(){var e;try{Object.assign(this,JSON.parse((e=localStorage.getItem(ee))!=null?e:"{}"))}catch{localStorage.removeItem(ee),this.reset()}},save(){localStorage.setItem(ee,JSON.stringify(s.progress))},reset(){this.currentChapter=1,this.currentLevel=0,this.completed={},this.save()}};function Ie(e){const t=e.contentDocument,n=e.contentWindow;((l,r)=>{const i="div",d=["#c33","#ea4c88","#639","#06c","#690","#fc3","#f90","#963"];function c(m){return d[m%(d.length-1)]}function u(m,g,y,A,B,N,j,f){const I=t.createElement(i);return I.dataset.faceFor=f,new Map().set("position","absolute").set("transform-origin",["left","top"]).set("background",j).set("width",`${A}px`).set("height",`${B}px`).set("opacity","0.8").set("transform",`translate3d(${m}px, ${g}px, ${y}px) rotateX(270deg) rotateY(${N}deg)`).forEach((T,H)=>I.style[H]=Array.isArray(T)?T.join(" "):T),I.outerHTML}const x=.001;let w="";function P(m,g,y,A){const B=m.childNodes,N=B.length;for(let j=0;j<N;j++){const f=B[j];if(f.nodeType===Node.ELEMENT_NODE){const I=ve();f.dataset.uid=I,f.style.overflow="visible",f.style.transformStyle="preserve-3d",f.style.transform=`translateZ(${(l+(N-j)*x).toFixed(3)}px)`;let T=y,H=A;f.offsetParent===m&&(T+=m.offsetLeft,H+=m.offsetTop),P(f,g+1,T,H);const U=(g+1)*l,V=c(g);w+=u(T+f.offsetLeft,H+f.offsetTop,U,f.offsetWidth,l,0,V,I),w+=u(T+f.offsetLeft+f.offsetWidth,H+f.offsetTop,U,f.offsetHeight,l,270,V,I),w+=u(T+f.offsetLeft,H+f.offsetTop+f.offsetHeight,U,f.offsetWidth,l,0,V,I),w+=u(T+f.offsetLeft,H+f.offsetTop,U,f.offsetHeight,l,270,V,I)}}}const S=t.body;S.style.overflow="visible",S.style.transformStyle="preserve-3d",S.style.perspective=r.toString();const se=m=>(m/2).toFixed(2),ne=`${se(n.innerWidth)}px ${se(n.innerHeight)}px`;S.style.perspectiveOrigin=ne,S.style.transformOrigin=ne,P(S,0,0,0),t.addEventListener("mousemove",m=>{if(!m.ctrlKey){const g=m.clientX/n.innerWidth,y=1-m.clientY/n.innerHeight,A=120,B=N=>((N-.5)*A).toFixed(2);S.style.transform=`rotateX(${B(y)}deg) rotateY(${B(g)}deg)`}},!0),t.addEventListener("mouseover",m=>{if(m.ctrlKey){const g=m.target,y=g.dataset.uid||g.dataset.faceFor;g.dataset.faceFor&&Array.from(t.querySelectorAll(`[data-uid="${y}"], [data-face-for="${y}"]`)).forEach(A=>A.classList.add("hovered"))}}),t.addEventListener("mouseleave",m=>{t.querySelectorAll(".hovered").forEach(g=>g.classList.remove("hovered"))}),t.addEventListener("mouseout",m=>{const g=m.target,y=g.dataset.uid||g.dataset.faceFor;Array.from(t.querySelectorAll(`[data-uid="${y}"], [data-face-for="${y}"]`)).forEach(A=>A.classList.remove("hovered"))}),t.addEventListener("click",m=>{var y;let g=m.target;g.nodeName==="A"&&m.preventDefault(),g.dataset.faceFor&&(g=t.querySelector(`[data-uid="${g.dataset.faceFor}"]`)),!!g&&((y=n.top)==null||y.postMessage({event:"elementClick",tag:g.tagName.toLowerCase(),type:g.getAttribute("type")}))});const W=t.createElement(i);W.style.position="absolute",W.style.transformStyle="preserve-3d";const{marginTop:fe,marginLeft:be}=getComputedStyle(S);W.style.top=`-${fe}`,W.style.left=`-${be}`,W.innerHTML=w,S.appendChild(W),S.style.transition="transform 400ms ease-in-out",S.style.transform="rotateX(-22.5deg) rotateY(12.5deg)",setTimeout(()=>{S.style.transition=""},400)})(50,5e3)}var _=(e,t)=>{const n=e.__vccOpts||e;for(const[l,r]of t)n[l]=r;return n};const de=e=>(O("data-v-21ec4214"),e=e(),F(),e),Ee={key:0},He=k("Use the "),De=de(()=>a("b",null,"3D",-1)),Pe=k(" view and the "),Be=de(()=>a("b",null,"Ctrl",-1)),Oe=k(" key to select elements in the DOM."),Fe=[He,De,Pe,Be,Oe],qe=v({setup(e){const t=D(()=>s.level),n=C(!1),l=C(null),r=C(!1);function i(){if(!l.value)return;const d=l.value;n.value===!0&&d.contentWindow?(d.contentWindow.location.reload(),n.value=!1):(Ie(d),n.value=!0)}return ye("message",d=>{if(d.data.event==="elementClick"){const c=d.data.tag;if(c==null||!s.level.selector)return;let u=c;d.data.type!=null&&(u+=`[type="${d.data.type}"]`),u===s.level.selector?(r.value=!0,setTimeout(()=>{r.value=!1,z()},600)):pe("iframe")}}),(d,c)=>(p(),h($,null,[a("p",{class:"order",style:le({opacity:o(t).order&&!r.value?1:0})},b(o(t).order||"\xA0"),5),a("iframe",{src:"demo/chapter1.html",ref_key:"iframe",ref:l,scrolling:"no"},null,512),o(t).order&&o(t).selector?(p(),h("p",Ee,Fe)):L("",!0),a("button",{onClick:i,id:"button-3d"},b(n.value?"2D":"3D"),1)],64))}});var Ye=_(qe,[["__scopeId","data-v-21ec4214"]]);const We={class:"instructions"},Ne={class:"title"},je=["innerHTML"],Re={class:"actions"},Ue=v({setup(e){return(t,n)=>(p(),h($,null,[a("div",We,[a("h3",Ne,b(o(s).level.name),1),a("div",{innerHTML:o(s).level.instructions},null,8,je)]),a("div",Re,[o(s).level.selector?L("",!0):(p(),h("button",{key:0,onClick:n[0]||(n[0]=(...l)=>o(z)&&o(z)(...l))},"Next"))])],64))}});var Ve=_(Ue,[["__scopeId","data-v-4756214c"]]);const he=[{name:"HTML and the DOM",instructions:`<img src="img/chef.png" style="width: 88px; margin-right: 0 auto"/>
        <p>During this training, we will be working on the website of Chef Nakamura's brand new restaurant.</p>
        <p>You can see the homepage on the left. It's basic, but it's a start !</p>
        <p>All the content on this page is actually composed of HTML elements grouped in a tree structure called the <strong>DOM</strong>, for Document Object Model</p>
        <p>Click on the <b>3D</b> button on top right to see a 3D representation of this tree structure.</p>
        <p>Move the mouse around to observe the structure. Holding the <b>Ctrl</b> key stops the camera movement.</p>`},{name:"Main root tags",instructions:`
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
        `},{name:"Sectionning: <main>",order:"Click on a <main> element",selector:"main",instructions:`
        <p>Properly describing the different sections of a web document helps for accessibility tools and for the indexability by search engines crawlers.</p>
        <h3 class="syntax">&lt;main&gt;</h3>
        <p>Dominant section of content, related to the central topic of the document.</p>
        <p>Users with certain disabilities may use this tag to directly jump to the important content.</p>
        <hr>
        <p>Use the <b>3D</b> view and the <b>Ctrl</b> key to select elements in the DOM.</p>
        `},{name:"Sectionning: <aside>",order:"Click on a <aside> element",selector:"aside",instructions:`
        <p>Properly describing the different sections of a web document helps for accessibility tools and for the indexability by search engines crawlers.</p>

        <h3 class="syntax">&lt;aside&gt;</h3>
        <p>Content indirectly related to the main content of the document. Frequently used for side panels.</p>
        `},{name:"Sectionning: <header>",order:"Click on a <header> element",selector:"header",instructions:`
        <p>Properly describing the different sections of a web document helps for accessibility tools and for the indexability by search engines crawlers.</p>

        <h3 class="syntax">&lt;header&gt;</h3>
        <p>Content used to introduce the document. Typically contains a level one heading, a logo, a menu or some navigation links.</p>
        `},{name:"Sectionning: <nav>",order:"Click on a <nav> element",selector:"nav",instructions:`
        <p>Properly describing the different sections of a web document helps for accessibility tools and for the indexability by search engines crawlers.</p>

        <h3 class="syntax">&lt;nav&gt;</h3>
        <p>Section used to provide navigation links, either internal or external.</p>
        <p>This element is especially useful for screenreader users to quickly navigate through your website.</p>
        `},{name:"Sectionning: <article>",order:"Click on a <article> element",selector:"article",instructions:`
        <p>Properly describing the different sections of a web document helps for accessibility tools and for the indexability by search engines crawlers.</p>

        <h3 class="syntax">&lt;article&gt;</h3>
        <p>An <tag>article</tag> represents a section of the document which can be extracted to be reused independently without its parent context.</p>
        <p><b>Examples</b>: a forum post, a newspaper article, a blog entry, a product card, a user-submitted comment, an interactive widget...</p>
        <p>Web crawlers can use this tag to parse a piece of content independently of its parent document.</p>
        `},{name:"Sectionning: <section>",order:"Click on a <section> element",selector:"section",instructions:`
        <p>Properly describing the different sections of a web document helps for accessibility tools and for the indexability by search engines crawlers.</p>

        <h3 class="syntax">&lt;section&gt;</h3>
        <p>When a section of the document has no specific semantic element to describe it, use a <tag>section</tag> tag.</p>
        <p>Sections content often start with a heading element that describes it.</p>
        `},{name:"Sectionning: Headings",order:"Click on a <h1> element",selector:"h1",instructions:`
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;h1&gt;, &lt;h2&gt; ... &lt;h6&gt;</h3>
        <p>Headings are used as section titles to create a hierarchy in the content of the document.</p>
        <p>HTML documents can have up to 6 levels of section headings, <tag>h1</tag> being the highest level.</p>
        <p>Using only one <tag>h1</tag> per page or view is beneficial to screenreader users. It should concisely describe the overall purpose of the content.</p>        
        `},{name:"Sectionning: Headings #2",order:"Click on a <h2> element",selector:"h2",instructions:`
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;h1&gt;, &lt;h2&gt; ... &lt;h6&gt;</h3>
        <p>Headings are used as section titles to create a hierarchy in the content of the document.</p>
        <p>A <tag>h2</tag> must necessarily be preceded by an <tag>h1</tag> in the document, and so on.</p>
        `},{name:"Text semantics: Paragraphs",order:"Click on a <p> element",selector:"p",instructions:`
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;p&gt;</h3>
        <p>Split your text content in paragraphs so that it's easier to read.</p>
        <p>By default, paragraphs are displayed in a block and have margins.</p>
        <p>Users of screen readers can jump from one paragraph to another to quickly find what they are looking for.</p>
        `},{name:"Text semantics: Lists",order:"Click on a <ul> element",selector:"ul",instructions:`
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;ul&gt; or &lt;ol&gt;</h3>
        <p><tag>ol</tag> stands for <b>ordered list</b>.</p>
        <p><tag>ul</tag> stands for <b>unordered list</b>.</p>
        <p>By default, ordered list items are preceded by a number, and unordered list items by a bullet point.</p>
        `},{name:"Text semantics: Lists items",order:"Click on a <li> element",selector:"li",instructions:`
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;li&gt;</h3>
        <p>Both <tag>ol</tag> and <tag>ul</tag> must have <tag>li</tag> (<b>list item</b>) elements as direct descendants.</p>
        <p>By default, list items have a left margin.</p>
        <p>Users of screen readers can jump from one list item to another to quickly find what they are looking for.</p>
        `},{name:"Text semantics: Descriptions Lists",order:"Click on a <dl> element",selector:"dl",instructions:`
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;dl&gt;</h3>
        <p>Definitions lists are useful to describe a mapping between some key-value pairs, like a glossary with terms and definitions, or an index mapping a word to a page number.</p>
        <p>Listing definitions can help web crawlers to link information and build their metadata.</p>
        `},{name:"Text semantics: Description Term",order:"Click on a <dt> element",selector:"dt",instructions:`
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;dt&gt;</h3>
        <p><tag>dt</tag> stands for <b>description term</b>, and represents the term being described.</p>
        <p><tag>dt</tag> and <tag>dd</tag> must be consecutive tags and direct descendants of a <tag>dl</tag> element.</p>
        `},{name:"Text semantics: Description Details",order:"Click on a <dd> element",selector:"dd",instructions:`
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;dt&gt;</h3>
        <p><tag>dd</tag> stands for <b>description details</b>, and represents the description of the previous term.</p>
        <p><tag>dt</tag> and <tag>dd</tag> must be consecutive tags and direct descendants of a <tag>dl</tag> element.</p>
        `},{name:"Text semantics: Time and dates",order:"Click on a <time> element",selector:"time",instructions:`
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;time datetime="23:00"&gt;</h3>
        <p>Put your dates, hours and durations in a <tag>time</tag> tag with an associated <b>datetime</b> attribute so that the value is machine-readable.</p>
        <p>It allows adding custom features on browsers such as creating calendar events or reminders.</p>
        `},{name:"Text semantics: Address",order:"Click on a <address> element",selector:"address",instructions:`
        <p>Properly describing the different sections of a web document helps for accessibility tools and for the indexability by search engines crawlers.</p>

        <h3 class="syntax">&lt;address&gt;</h3>
        <p>Identifies the contact information relevant to the current document: <b>author, physical address, email, phone number</b>...</p>
        <p>It is mostly useful for web crawlers to build their metadata.</p>
        `},{name:"Interactions: Links",order:"Click on a <a> element",selector:"a",instructions:`
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
        `},{name:"Interactions: Forms",order:"Click on a <form> element",selector:"form",instructions:`
        <p>Some elements are used for user interaction on the document. Again, picking the right element can make these interactions more convenient for your users.</p>

        <h3 class="syntax">&lt;form&gt;</h3>
        <p>Forms used to be the common way to send information through a website.</p>
        <p>When submitted, the browser sends a HTTP POST request containing the user input to the server at the adress specified by the <b>target</b> attribute.</p>
        <p>This default behavior of forms is less used today on modern websites with real-time interactions handled in JavaScript. But they are still useful for their semantic value, and all the standard APIs associated to them, such as form validation.</p>
        `},{name:"Interactions: Buttons",order:"Click on a <button> element",selector:"button",instructions:`
        <p>Some elements are used for user interaction on the document. Again, picking the right element can make these interactions more convenient for your users.</p>

        <h3 class="syntax">&lt;button&gt;</h3>
        <p>Buttons are used to submit forms or trigger some specific interactions on a web page, handled in JavaScript.</p>
        <p>If a link doesn't send you somewhere, it should probably be a <tag>button</tag> instead.</p>
        `},{name:"Interactions: Inputs",order:'Click on a <input type="tel"> element',selector:'input[type="tel"]',instructions:`
        <p>Some elements are used for user interaction on the document. Again, picking the right element can make these interactions more convenient for your users.</p>

        <h3 class="syntax">&lt;input type="text"&gt;</h3>
        <p><tag>input</tag> elements cover a large amount of different input fields used to receive user input.</p>
        <p>Depending on their <b>type</b> attribute, their UI and behavior will change to receive various types of input: 
        <b>text</b>, <b>password</b>, <b>checkbox</b>, <b>color</b>...</p>
        <p>The complete list of standard input types can be found <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#input_types" target="_blank">here</a>.</p>
        <p>For example, an <tag>input type="date"</tag> will open a datepicker UI that matches the device and operating system of the user. Try it on the restaurant website !</p>
        `}],Ke={name:"HTML - Semantics",description:"Why semantics matter",intro:`
    <p>HTML is the markup language that describes the <strong>content</strong> of web pages.</p>
    <p>In this chapter, we will look at the different elements available in HTML and why understanding the purpose of each of them is important for you and your visitors.</p>`,levels:he,leftPanelComponent:Ye,rightPanelComponent:Ve},s=_e({progress:Ae,currentLevel:0,level:he[0],levelTimeout:1e3,menuOpened:!1});s.progress.load();function te(){s.menuOpened=!1}function Xe(){Array.from(document.querySelectorAll("#board *")).forEach(t=>{xe(t,{triggers:["hover"],content:ze(t),delay:0},null),t.addEventListener("mouseover",n=>n.stopPropagation()),t.addEventListener("mouseenter",n=>n.stopPropagation())})}function ze(e){const t=e.tagName.toLowerCase(),n=e.getAttribute("class"),l=e.getAttribute("id");return`<${t}${l?` id="${l}"`:""}${n?` class="${n}"`:""}>`}function ue(){confirm("Do you really want to reset your progress ?")&&(s.progress.reset(),ae(),te())}function z(){s.progress.completeLevel(),q(s.progress.currentChapter,s.progress.currentLevel+1)}function q(e,t){const n=M[e-1];t>n.levels.length&&e<M.length?(e++,t=0):t<0&&e>1&&(e=Math.max(1,e-1),t=M[e-1].levels.length),s.progress.currentChapter=X(e,1,M.length),s.progress.currentLevel=X(t,0,M[e-1].levels.length),we(),ae(),te()}function ae(){var t;const e=M[s.progress.currentChapter-1].levels;s.progress.currentLevel=X(s.progress.currentLevel,0,e.length),s.level=e[s.progress.currentLevel-1],s.progress.save(),(t=document.querySelector("input"))==null||t.focus(),ke(()=>Xe())}const Ge={class:"markup"},Je=v({props:{markup:String},setup(e){const t=e,n=C(null);Se(l),Te(()=>t.markup,l);function l(){const i=document.createElement("div");i.innerHTML=t.markup,console.log(t.markup,i),n.value.innerHTML=r(i,!0).innerHTML}function r(i,d){const c=i.tagName.toLowerCase(),u=document.createElement("div"),x=i.getAttributeNames().map(P=>`${P}="${i.getAttribute(P)}"`).join(" "),w=[...i.children];return w.length>0?(d||(u.textContent=`<${c}${x?" "+x:""}>`),w.forEach(P=>u.appendChild(r(P))),d||u.appendChild(document.createTextNode(`</${c}>`))):u.textContent=`<${c}${x?" "+x:""} />`,u}return(i,d)=>(p(),h("div",Ge,[a("div",{ref_key:"markup",ref:n},null,512)]))}});const G=e=>(O("data-v-127fceb6"),e=e(),F(),e),Ze={class:"editor-pane"},Qe=G(()=>a("div",{class:"input-header"},[a("div",{class:"file-name"},"style.css"),k(" CSS Editor ")],-1)),et={class:"file-window css-view"},tt=oe('<div class="line-numbers" data-v-127fceb6> 1<br data-v-127fceb6>2<br data-v-127fceb6>3<br data-v-127fceb6>4<br data-v-127fceb6>5<br data-v-127fceb6>6<br data-v-127fceb6>7<br data-v-127fceb6>8<br data-v-127fceb6>9<br data-v-127fceb6>10<br data-v-127fceb6>11<br data-v-127fceb6>12<br data-v-127fceb6>13<br data-v-127fceb6>14<br data-v-127fceb6>15<br data-v-127fceb6>16<br data-v-127fceb6>17<br data-v-127fceb6>18<br data-v-127fceb6>19<br data-v-127fceb6>20 </div>',1),at=["onKeydown","onKeyup"],st=G(()=>a("span",{class:"plus"},"+",-1)),nt=G(()=>a("div",null,[k(" {"),a("br"),k(" /* Styles would go here. */"),a("br"),k(" } ")],-1)),lt={class:"editor-pane html-view"},ot=G(()=>a("div",{class:"input-header"},[a("div",{class:"file-name"},"table.html"),k(" HTML Viewer ")],-1)),rt={class:"file-window"},it=oe('<div class="line-numbers" data-v-127fceb6>1<br data-v-127fceb6>2<br data-v-127fceb6>3<br data-v-127fceb6>4<br data-v-127fceb6>5<br data-v-127fceb6>6<br data-v-127fceb6>7<br data-v-127fceb6>8<br data-v-127fceb6>9<br data-v-127fceb6>10<br data-v-127fceb6>11<br data-v-127fceb6>12<br data-v-127fceb6>13<br data-v-127fceb6>14<br data-v-127fceb6>15<br data-v-127fceb6>16<br data-v-127fceb6>17<br data-v-127fceb6>18<br data-v-127fceb6>19<br data-v-127fceb6>20</div>',1),ct=v({setup(e){let t="";const n=C(null),l=C(null);function r(){const c=n.value;c.classList.remove("enterhit"),setTimeout(()=>c.classList.add("enterhit"),0),i(t)}function i(c){t=l.value.value,It(c)}function d(){const c=l.value;t=c.value,c.classList.toggle("input-strobe",t.length>0)}return(c,u)=>(p(),h("div",{class:"editor",onClick:u[0]||(u[0]=x=>{var w;return(w=l.value)==null?void 0:w.focus()})},[a("div",Ze,[Qe,a("div",et,[tt,a("input",{class:"input-strobe",type:"text",ref_key:"inputElement",ref:l,onKeydown:Ce(R(r,["prevent"]),["enter"]),onKeyup:R(d,["prevent"]),placeholder:"Type in a CSS selector"},null,40,at),st,a("div",{class:"enter-button",onClick:r,ref_key:"enterButton",ref:n},"enter",512),nt])]),a("div",lt,[ot,a("div",rt,[it,E(Je,{markup:o(s).level.boardMarkup},null,8,["markup"])])])]))}});var pt=_(ct,[["__scopeId","data-v-127fceb6"]]);const ge=e=>(O("data-v-73e362c9"),e=e(),F(),e),dt={class:"order"},ht={class:"game-container"},ut={class:"game-wrapper"},gt={class:"table-wrapper"},mt={class:"table"},ft=["innerHTML"],bt=ge(()=>a("div",{class:"table-leg"},null,-1)),vt=ge(()=>a("div",{class:"table-leg"},null,-1)),yt=[bt,vt],_t=v({setup(e){const t=C(null),n=C(null),l=C(null);return(r,i)=>(p(),h($,null,[a("p",dt,b(o(s).level.doThis),1),a("div",ht,[a("div",ut,[a("div",gt,[a("div",{class:"table-surface",ref_key:"surface",ref:t},null,512),a("div",mt,[a("div",{innerHTML:o(s).level.boardMarkup,ref_key:"board",ref:l,id:"board"},null,8,ft)])]),a("div",{class:"table-edge",ref_key:"edge",ref:n},yt,512)])]),E(pt)],64))}});var kt=_(_t,[["__scopeId","data-v-73e362c9"]]);const xt={key:0,class:"display-help"},wt={class:"title"},St={key:0,class:"syntax"},Tt=["innerHTML"],Ct={key:1,class:"examples-title"},Lt={class:"examples"},$t=["innerHTML"],Mt=v({setup(e){return(t,n)=>{var l;return o(s).level?(p(),h("div",xt,[a("h3",wt,b(o(s).level.helpTitle),1),o(s).level.syntax?(p(),h("p",St,b(o(s).level.syntax),1)):L("",!0),a("div",{class:"hint",innerHTML:o(s).level.help},null,8,Tt),((l=o(s).level.examples)==null?void 0:l.length)>0?(p(),h("h4",Ct,"Examples")):L("",!0),a("div",Lt,[(p(!0),h($,null,Z(o(s).level.examples,r=>(p(),h("div",{class:"example",innerHTML:r},null,8,$t))),256))])])):L("",!0)}}});var At=_(Mt,[["__scopeId","data-v-7a3c92d4"]]);function It(e){var d;const t=s.level;ce();const n=document.querySelector("#board");try{n.querySelectorAll(e)}catch{e=""}const l=e?Array.from(n.querySelectorAll(e)):[],r=Array.from(n.querySelectorAll(t.selector));let i=!1;if(l.length==0&&pe(".editor"),l.length===r.length&&l.length>0&&(i=Et(l,r)),i){l.forEach(u=>{u.classList.remove("strobe"),u.classList.add("clean")});const c=document.querySelector(".editor input");c.value="",setTimeout(function(){z()},(d=s.levelTimeout)!=null?d:0)}else l.forEach(c=>{c.classList.remove("strobe"),c.classList.add("shake")}),setTimeout(function(){ce(),r.forEach(c=>{c.classList.add("strobe")})},500)}function Et(e,t){return e.length===t.length&&e.every(n=>t.includes(n))}const Ht=[{name:"Type Selector",helpTitle:"Select elements by their type",doThis:"Select the plates",selector:"plate",syntax:"tagname",help:"Selects all elements of a type. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",examples:["<strong>div</strong> selects all <tag>div</tag> elements.","<strong>p</strong> selects all <tag>p</tag> elements."],boardMarkup:`
<plate></plate>
<plate></plate>
<bento></bento>
<plate></plate>
    `},{name:"Type Selector",doThis:"Select the bento boxes",selector:"bento",syntax:"tagname",helpTitle:"Select elements by their type",help:"Selects all elements of a type. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",examples:["<strong>div</strong> selects all <tag>div</tag> elements.","<strong>p</strong> selects all <tag>p</tag> elements."],boardMarkup:`
    <bento></bento>
    <bento></bento>
    <plate>
        <bento></bento>
    </plate>
    `},{name:"ID Selector",doThis:"Select the fancy plate",selector:"#fancy",helpTitle:"Select elements with an ID",syntax:"#id",help:"Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.",examples:['<strong>#cool</strong> selects any element with <strong>id="cool"</strong>','<strong>ul#long</strong> selects <tag>ul id="long"</tag>'],boardMarkup:`
    <plate></plate>
    <plate id="fancy"></plate>
    <bento></bento>
    `},{name:"Class Selector",doThis:"Select the small apples",selector:".small",helpTitle:"Select elements by their class",syntax:".classname",help:"The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.",examples:['<strong>.neato</strong> selects all elements with <strong>class="neato"</strong>'],boardMarkup:`
    <apple></apple>
    <apple class="small"></apple>
    <plate>
      <apple class="small" />
    </plate>
    <plate />
    `},{name:"Class Selector #2",doThis:"Select the small oranges",selector:"orange.small",helpTitle:"Combine the Class Selector",syntax:"tag.classname",help:"You can combine the class selector with other selectors, like the type selector.",examples:['<strong>ul.important</strong> selects all <tag>ul</tag> elements that have <strong>class="important"</strong>','<strong>#big.wide</strong> selects all elements with <strong>id="big"</strong> that also have <strong>class="wide"</strong>'],boardMarkup:`
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
    </plate>`},{name:"Descendant Selector",helpTitle:"Select an element inside another element",doThis:"Select the apple on the plate",selector:"plate apple",syntax:"A B",help:"Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.",examples:["<strong>p  strong</strong> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>",'<strong>#fancy  span</strong> selects any <tag>span</tag> elements that are inside of the element with <strong>id="fancy"</strong>'],boardMarkup:`
    <bento></bento>
    <plate>
      <apple/>
    </plate>
    <apple></apple>
    `},{name:"Descendant & ID",doThis:"Select the pickle on the fancy plate",selector:"#fancy pickle",helpTitle:"Combine the Descendant & ID Selectors",syntax:"#id A",help:"You can combine any selector with the descendent selector.",examples:['<strong>#cool span</strong> selects all <tag>span</tag> elements that are inside of elements with <strong>id="cool"</strong>'],boardMarkup:`
    <bento>
    <orange/>
    </bento>
    <plate id="fancy">
      <pickle/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    `},{name:"Challenge #1",doThis:"Select the small oranges in the bentos",selector:"bento orange.small",helpTitle:"You can do it...",help:"Combine what you learned in the last few levels to solve this one!",boardMarkup:`
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
    `},{doThis:"Select all the plates and bentos",selector:"plate,bento",name:"Comma Combinator",helpTitle:"Combine, selectors, with... commas!",syntax:"A, B, C",help:"Commas can be used to combine several selectors. You can combine any number of selectors this way.",examples:['<strong>p, .fun</strong> selects all <tag>p</tag> elements as well as all elements with <strong>class="fun"</strong>',"<strong>a, p, div</strong> selects all <tag>a</tag>, <tag>p</tag> and <tag>div</tag> elements"],boardMarkup:`
    <pickle class="small"></pickle>
    <orange></orange>
    <plate>
      <pickle/>
    </plate>
    <bento>
      <pickle/>
    </bento>
    <plate>
      <apple></apple>
    </plate>
    `},{doThis:"Select all the things!",selector:"*",name:"The Universal Selector",helpTitle:"You can select everything!",syntax:"*",help:"You can select all elements with the universal selector! ",examples:["<strong>p *</strong> selects any element inside all <tag>p</tag> elements."],boardMarkup:`
    <apple></apple>
    <plate>
      <orange class="small" />
    </plate>
    <bento></bento>
    <bento>
      <orange/>
    </bento>
    <plate id="fancy">
        <pickle class="small"></pickle>
    </plate>
    `},{name:"Universal Selector #2",doThis:"Select everything on a plate",selector:"plate *",syntax:"A  *",helpTitle:"Combine the Universal Selector",help:"This selects all elements inside of <strong>A</strong>.",examples:["<strong>p *</strong> selects every element inside all <tag>p</tag> elements.",'<strong>ul.fancy *</strong> selects every element inside all <tag>ul class="fancy"</tag> elements.'],boardMarkup:`
    <plate id="fancy">
      <orange class="small"/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    <apple class="small"></apple>
    <plate>
      <apple></apple>
    </plate>`},{doThis:"Select every apple that are just to the right of a plate",selector:"plate + apple",helpTitle:"Select an element that directly follows another element",name:"Adjacent Sibling Selector",syntax:"A + B",help:"This selects all <strong>B</strong> elements that directly follow <strong>A</strong>. Elements that follow one another are called siblings. They're on the same level, or depth. <br/><br/>In the HTML markup for this level, elements that have the same indentation are siblings.",examples:['<strong>p + .intro</strong> selects every element with <strong>class="intro"</strong> that directly follows a <tag>p</tag>',"<strong>div + a</strong> selects every <tag>a</tag> element that directly follows a <tag>div</tag>"],boardMarkup:`
    <bento>
      <apple class="small"></apple>
    </bento>
    <plate></plate>
    <apple class="small"></apple>
    <plate></plate>
    <apple></apple>
    <apple class="small"></apple>
    <apple class="small"></apple>
    `},{name:"General Sibling Selector",helpTitle:"Select elements that follows another element",syntax:"A ~ B",doThis:"Select all the pickles to the right of the bento",selector:"bento ~ pickle",help:"You can select all siblings of an element that follow it. This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one.",examples:["<strong>A ~ B</strong> selects all <strong>B</strong> that follow a <strong>A</strong>"],boardMarkup:`
    <pickle></pickle>
    <bento>
      <orange class="small"/>
    </bento>
    <pickle class="small"></pickle>
    <pickle></pickle>
    <plate>
      <pickle></pickle>
    </plate>
    <plate>
      <pickle class="small"></pickle>
    </plate>
    `},{name:"Child Selector",syntax:"A > B ",doThis:"Select the apple directly on a plate",selector:"plate > apple",helpTitle:"Select direct children of an element",help:"You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element. <br><br>Elements that are nested deeper than that are called descendant elements.",examples:["<strong>A > B</strong> selects all <strong>B</strong> that are a direct children <strong>A</strong>"],boardMarkup:`
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
    `},{name:"First Child Pseudo-selector",helpTitle:"Select a first child element inside of another element",doThis:"Select the top orange",selector:"plate :first-child",syntax:":first-child",help:"You can select the first child element. A child element is any element that is directly nested in another element. You can combine this pseudo-selector with other selectors.",examples:["<strong>:first-child</strong> selects all first child elements.","<strong>p:first-child</strong> selects all first child <tag>p</tag> elements.","<strong>div p:first-child</strong> selects all first child <tag>p</tag> elements that are in a <tag>div</tag>."],boardMarkup:`
    <bento></bento>
    <plate></plate>
    <plate>
      <orange></orange>
      <orange></orange>
      <orange></orange>
    </plate>
    <pickle class="small"></pickle>
    `},{name:"Only Child Pseudo-selector",helpTitle:"Select an element that are the only element inside of another one.",doThis:"Select the items alone on a plate",selector:"plate :only-child",syntax:":only-child",help:"You can select any element that is the only element inside of another one.",examples:["<strong>span:only-child</strong> selects the <tag>span</tag> elements that are the only child of some other element.","<strong>ul li:only-child</strong> selects the only <tag>li</tag> element that are in a <tag>ul</tag>."],boardMarkup:`
    <plate>
      <apple></apple>
    </plate>
    <plate>
      <pickle></pickle>
    </plate>
    <bento>
      <pickle></pickle>
    </bento>
    <plate>
      <orange class="small"></orange>
      <orange></orange>
    </plate>
    <pickle class="small"></pickle>
    `},{name:"Last Child Pseudo-selector",helpTitle:"Select the last element inside of another element",doThis:"Select the last pickle",selector:"pickle:last-child",syntax:":last-child",help:"You can use this selector to select an element that is the last child element inside of another element. <br><br>Pro Tip &rarr; In cases where there is only one element, that element counts as the first-child, only-child and last-child!",examples:["<strong>:last-child</strong> selects all last-child elements.","<strong>span:last-child</strong> selects all last-child <tag>span</tag> elements.","<strong>ul li:last-child</strong> selects the last <tag>li</tag> elements inside of any <tag>ul</tag>."],boardMarkup:`
    <plate id="fancy">
      <pickle></pickle>
      <apple class="small"></apple>
    </plate>
    <pickle class="small"></pickle>
    <plate>
      <orange></orange>
    </plate>
    <pickle class="small"></pickle>`},{name:"Nth Child Pseudo-selector",helpTitle:"Select an element by its order in another element",doThis:"Select the 3rd plate",selector:":nth-child(3)",syntax:":nth-child(A)",help:"Selects the <strong>nth</strong> (Ex: 1st, 3rd, 12th etc.) child element in another element.",examples:["<strong>:nth-child(8)</strong> selects every element that is the 8th child of another element.","<strong>div p:nth-child(2)</strong> selects the second <strong>p</strong> in every <strong>div</strong>"],boardMarkup:`
    <plate></plate>
    <plate></plate>
    <plate></plate>
    <plate></plate>
    `},{name:"Nth Last Child Selector",helpTitle:"Select an element by its order in another element, counting from the back",doThis:"Select the 1st bento",selector:"bento:nth-last-child(3)",syntax:":nth-last-child(A)",help:"Selects the children from the bottom of the parent. This is like nth-child, but counting from the back!",examples:["<strong>:nth-last-child(2)</strong> selects all second-to-last child elements."],boardMarkup:`
    <plate></plate>
    <bento></bento>
    <plate>
      <orange></orange>
      <orange></orange>
      <orange></orange>
    </plate>
    <bento></bento>
    `},{name:"First of Type Selector",helpTitle:"Select the first element of a specific type",doThis:"Select first apple",selector:"apple:first-of-type",syntax:":first-of-type",help:"Selects the first element of that type within another element.",examples:["<strong>span:first-of-type</strong> selects the first <tag>span</tag> in any element."],boardMarkup:`
    <orange class="small"></orange>
    <apple></apple>
    <apple class="small"></apple>
    <apple></apple>
    `},{name:"Nth of Type Selector",doThis:"Select all even plates",selector:"plate:nth-of-type(even)",syntax:":nth-of-type(A)",help:"Selects a specific element based on its type and order in another element - or even or odd instances of that element.",examples:["<strong>div:nth-of-type(2)</strong> selects the second instance of a div.","<strong>.example:nth-of-type(odd)</strong> selects all odd instances of a the example class."],boardMarkup:`
    <plate></plate>
    <plate></plate>
    <plate></plate>
    <plate></plate>
    <plate></plate>
    <plate></plate>
    `},{name:"Nth-of-type Selector with Formula",doThis:"Select every 2nd plate, starting from the 3rd",selector:"plate:nth-of-type(2n+3)",syntax:":nth-of-type(An+B)",help:"The nth-of-type formula selects every nth element, starting the count at a specific instance of that element.",examples:["<strong>span:nth-of-type(6n+2)</strong> selects every 6th instance of a <tag>span</tag>, starting from (and including) the second instance."],boardMarkup:`
    <plate></plate>
    <plate>
      <pickle class="small" />
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
    `},{name:"Only of Type Selector",helpTitle:"Select elements that are the only ones of their type within their parent element",selector:"plate *:only-of-type",syntax:":only-of-type",doThis:"Select one-of-a-kind items in a plate",help:"Selects the only element of its type within another element.",examples:["<strong>p span:only-of-type</strong> selects a <tag>span</tag> within any <tag>p</tag> if it is the only <tag>span</tag> in there."],boardMarkup:`
    <plate id="fancy">
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
    `},{name:"Last of Type Selector",helpTitle:"Select the last element of a specific type",doThis:"Select the last pickle",selector:"pickle:last-of-type",syntax:":last-of-type",help:"Selects each last element of that type within another element. Remember type refers the kind of tag, so <tag>p</tag> and <tag>span</tag> are different types. <br><br> I wonder if this is how the last dinosaur was selected before it went extinct.",examples:["<strong>div:last-of-type</strong> selects the last <tag>div</tag> in every element.","<strong>p span:last-of-type</strong> selects the last <tag>span</tag> in every <tag>p</tag>."],boardMarkup:`
    <orange class="small"></orange>
    <pickle></pickle>
    <orange class="small"></orange>
    <apple class="small"></apple>
    <pickle></pickle>
    <apple class="small"></apple>
    `},{name:"Empty Selector",helpTitle:"Select elements that don't have children",doThis:"Select the empty bentos",selector:"bento:empty",syntax:":empty",help:"Selects elements that don't have any other elements inside of them.",examples:["<strong>div:empty</strong> selects all empty <tag>div</tag> elements."],boardMarkup:`
    <bento></bento>
    <bento>
      <pickle class="small"></pickle>
    </bento>
    <plate></plate>
    <bento></bento>`},{name:"Negation Pseudo-class",helpTitle:"Select all elements that don't match the negation selector",doThis:"Select the big apples",selector:"apple:not(.small)",syntax:":not(X)",help:'You can use this to select all elements that do not match selector <strong>"X"</strong>.',examples:['<strong>:not(#fancy)</strong> selects all elements that do not have <strong>id="fancy"</strong>.',"<strong>div:not(:first-child)</strong> selects every <tag>div</tag> that is not a first child.",'<strong>:not(.big, .medium)</strong> selects all elements that do not have <strong>class="big"</strong> or <strong>class="medium"</strong>.'],boardMarkup:`
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
    `},{name:"Attribute Selector",helpTitle:"Select all elements that have a specific attribute",doThis:"Select the items for someone",selector:"[for]",syntax:"[attribute]",help:'Attributes appear inside the opening tag of an element, like this: <tag>span attribute="value"</tag>. An attribute does not always have a value, it can be blank!',examples:['<strong>[value]</strong> selects all elements that have a <strong>value="anything"</strong> attribute.','<strong>[type]</strong> selects all elements that have a <strong>type="anything"</strong> attribute.'],boardMarkup:`
    <bento><apple class="small"/></bento>
    <apple for="Ethan"></apple>
    <plate for="Alice"><pickle/></plate>
    <bento for="Clara"><orange/></bento>
    <pickle></pickle>`},{name:"Attribute Selector",helpTitle:"Select all elements that have a specific attribute",doThis:"Select the plates for someone",selector:"plate[for]",syntax:"A[attribute]",help:"Combine the attribute selector with another selector (like the tag name selector) by adding it to the end.",examples:['<strong>a[href]</strong> selects all <tag>a</tag> elements that have a <strong>href="anything"</strong> attribute.',"<strong>input[disabled]</strong> selects all <tag>input</tag> elements with the <strong>disabled</strong> attribute"],boardMarkup:`
    <plate for="Sarah"><pickle/></plate>
    <plate for="Luke"><apple/></plate>
    <plate></plate>
    <bento for="Steve"><orange/></bento>
    `},{name:"Attribute Value Selector",helpTitle:"Select all elements that have a specific attribute value",doThis:"Select Vitaly's meal",selector:"[for=Vitaly]",syntax:'[attribute="value"]',help:"Attribute selectors are case sensitive, each character must match exactly.",examples:['<strong>input[type="checkbox"]</strong> selects all checkbox input elements.'],boardMarkup:`
    <apple for="Alexei"></apple>
    <bento for="Albina"><apple /></bento>
    <bento for="Vitaly"><orange/></bento>
    <pickle></pickle>
    `},{name:"Attribute Starts With Selector",helpTitle:"Select all elements with an attribute value that starts with specific characters",doThis:"Select the items for names that start with 'Sa'",selector:'[for^="Sa"]',syntax:'[attribute^="value"]',examples:['<strong>.toy[category^="Swim"]</strong> selects elements with class <strong>toy</strong> and either <strong>category="Swimwear"</strong> or <strong>category="Swimming"</strong>.'],boardMarkup:`
    <plate for="Sam"><pickle/></plate>
    <bento for="Sarah"><apple class="small"/></bento>
    <bento for="Mary"><orange/></bento>
    `},{name:"Attribute Ends With Selector",helpTitle:"Select all elements with an attribute value that ends with specific characters",doThis:"Select the items for names that end with 'ato'",selector:'[for$="ato"]',syntax:'[attribute$="value"]',help:"",examples:['<strong>img[src$=".jpg"]</strong> selects all images display a <strong>.jpg</strong> image.'],boardMarkup:`
    <apple class="small"></apple>
    <bento for="Hayato"><pickle/></bento>
    <apple for="Ryota"></apple>
    <plate for="Minato"><orange/></plate>
    <pickle class="small"></pickle>
    `},{name:"Attribute Wildcard Selector",helpTitle:"Select all elements with an attribute value that contains specific characters anywhere",syntax:'[attribute*="value"]',doThis:"Select the meals for names that contain 'obb'",selector:'[for*="obb"]',help:"A useful selector if you can identify a common pattern in things like <strong>class</strong>, <strong>href</strong> or <strong>src</strong> attributes.",examples:['<strong>img[src*="/thumbnails/"]</strong> selects all image elements that show images from the "thumbnails" folder.','<strong>[class*="heading"]</strong> selects all elements with "heading" in their class, like <strong>class="main-heading"</strong> and <strong>class="sub-heading"</strong>'],boardMarkup:`
    <bento for="Robbie"><apple /></bento>
    <bento for="Timmy"><pickle /></bento>
    <bento for="Bobby"><orange /></bento>
    `},{name:"Final Challenge",helpTitle:"You can do it...",help:"Combine all what you learned to solve this one!",doThis:"Select the empty plates except the one for Timmy",selector:'plate:empty:not([for="Timmy"])',boardMarkup:`
    <bento></bento>
    <plate><apple /></plate>
    <plate for="Timmy"></plate>
    <plate></plate>
    <plate></plate>
    `}],Dt={name:"CSS - Selectors",levels:Ht,leftPanelComponent:kt,rightPanelComponent:At,credits:'Credits: <a href="http://www.twitter.com/flukeout">@flukeout</a>'},M=[Ke,Dt],Y=D(()=>M[s.progress.currentChapter-1]);const Pt={key:0,class:"credits"},Bt=["innerHTML"],Ot=v({setup(e){const t=D(()=>Y.value.credits);return(n,l)=>o(t)?(p(),h("div",Pt,[a("p",{innerHTML:o(t)},null,8,Bt)])):L("",!0)}});var Ft=_(Ot,[["__scopeId","data-v-edf63844"]]);const qt={},me=e=>(O("data-v-eb988748"),e=e(),F(),e),Yt=k(" HTML/CSS Training "),Wt=me(()=>a("div",{class:"logo"},[a("img",{src:""})],-1)),Nt=me(()=>a("span",{class:"share-menu"},[k(" Repository "),a("a",{class:"share-github",type:"github",href:"#"})],-1)),jt=[Yt,Wt,Nt];function Rt(e,t){return p(),h("header",null,jt)}var Ut=_(qt,[["render",Rt],["__scopeId","data-v-eb988748"]]);const Vt=e=>(O("data-v-52b6b9b0"),e=e(),F(),e),Kt={class:"chapter-intro"},Xt={class:"chapter-name"},zt=Vt(()=>a("hr",null,null,-1)),Gt=v({setup(e){return(t,n)=>(p(),h("div",Kt,[a("h1",null,[k("Chapter "+b(o(s).progress.currentChapter)+": ",1),a("p",Xt,b(o(Y).name),1)]),zt,a("p",null,b(o(Y).description),1)]))}});var Jt=_(Gt,[["__scopeId","data-v-52b6b9b0"]]);const Zt={class:"left-col"},Qt={class:"left-panel"},ea=v({setup(e){const t=D(()=>s.progress.currentLevel===0?Jt:Y.value.leftPanelComponent);return(n,l)=>(p(),h("div",Zt,[E(Ut),a("div",Qt,[(p(),re(ie(o(t))))]),E(Ft)]))}});var ta=_(ea,[["__scopeId","data-v-526c21a8"]]);const aa={class:"chapter-header"},sa=v({setup(e){const t=D(()=>M[s.progress.currentChapter-1]);return(n,l)=>(p(),h("h1",aa,"Chapter "+b(o(s).progress.currentChapter)+": "+b(o(t).name),1))}});var na=_(sa,[["__scopeId","data-v-c98bc496"]]);const la={class:"level-text"},oa={key:0,class:"checkmark"},ra={class:"level-nav"},ia={key:1,class:"level-progress"},ca=v({setup(e){const t=D(()=>Y.value.levels);D(()=>s.progress.hasCompleted(s.progress.currentChapter,s.progress.currentLevel));function n(l="next",r){const i=r.target;i.classList.add("link-jiggle"),setTimeout(()=>{i.classList.remove("link-jiggle")},1e3),l==="next"?q(s.progress.currentChapter,s.progress.currentLevel+1):q(s.progress.currentChapter,s.progress.currentLevel-1)}return(l,r)=>(p(),h($,null,[o(s).progress.currentLevel>0?(p(),h("h2",{key:0,class:K(["level-header",{completed:o(s).progress.hasCompleted(o(s).progress.currentChapter,o(s).progress.currentLevel)}])},[a("span",la," Level "+b(o(s).progress.currentLevel)+" of "+b(o(t).length),1),o(s).progress.hasCompleted(o(s).progress.currentChapter,o(s).progress.currentLevel)?(p(),h("span",oa,"\u2714\uFE0F")):L("",!0)],2)):L("",!0),a("div",ra,[a("a",{class:"previous",href:"#",onClick:r[0]||(r[0]=R(i=>n("previous",i),["prevent"]))}),a("a",{class:"next",href:"#",onClick:r[1]||(r[1]=R(i=>n("next",i),["prevent"]))})]),o(s).progress.currentLevel>0?(p(),h("div",ia,[a("div",{class:"progress",style:le({width:o(s).progress.getPercentCompleted(o(s).progress.currentChapter)+"%"})},null,4)])):L("",!0)],64))}});var pa=_(ca,[["__scopeId","data-v-d5daa870"]]);const J=e=>(O("data-v-0539eaeb"),e=e(),F(),e),da={class:"level-menu"},ha=J(()=>a("h2",null,"Choose a level",-1)),ua={class:"chapters-list"},ga={class:"chapters"},ma=["onClick"],fa={class:"chapter-number"},ba=J(()=>a("div",{class:"chapter-toggle"},null,-1)),va={key:0,class:"levels"},ya=["onClick"],_a=J(()=>a("span",{class:"checkmark"},"\u2714\uFE0F",-1)),ka={class:"level-number"},xa=J(()=>a("div",{class:"level-menu-toggle"},null,-1)),wa=[xa],Sa=v({setup(e){const t=C(s.progress.currentChapter);function n(r){r===t.value?t.value=0:t.value=r}function l(){s.menuOpened=!s.menuOpened}return(r,i)=>(p(),h($,null,[a("div",da,[ha,a("div",ua,[a("ul",ga,[(p(!0),h($,null,Z(o(M),(d,c)=>(p(),h("li",{key:"chapter_"+d.name},[a("a",{class:K([{current:c+1===o(s).progress.currentChapter,opened:c+1===t.value},"chapter-name"]),onClick:u=>n(c+1)},[a("span",fa,b(c+1),1),k(" "+b(d.name)+" ",1),ba],10,ma),c+1===t.value?(p(),h("ul",va,[(p(!0),h($,null,Z(d.levels,(u,x)=>(p(),h("li",{key:"level_"+u.name},[a("a",{class:K({current:x+1===o(s).progress.currentLevel,completed:o(s).progress.hasCompleted(c+1,x+1)}),onClick:w=>o(q)(c+1,x+1)},[_a,a("span",ka,b(x+1),1),k(" "+b(u.name),1)],10,ya)]))),128))])):L("",!0)]))),128))])]),a("a",{class:"reset-progress",href:"#",onClick:i[0]||(i[0]=R((...d)=>o(ue)&&o(ue)(...d),["prevent"]))},"Reset Progress")]),a("div",{class:"level-menu-toggle-wrapper",onClick:l},wa)],64))}});var Ta=_(Sa,[["__scopeId","data-v-0539eaeb"]]);const Ca=e=>(O("data-v-77ce1f68"),e=e(),F(),e),La=Ca(()=>a("hr",null,null,-1)),$a={class:"instructions"},Ma=["innerHTML"],Aa=v({setup(e){function t(){q(s.progress.currentChapter,1)}return(n,l)=>(p(),h($,null,[La,a("div",$a,[a("div",{innerHTML:o(Y).intro},null,8,Ma)]),a("div",{class:"actions"},[a("button",{onClick:t},"Next")])],64))}});var Ia=_(Aa,[["__scopeId","data-v-77ce1f68"]]);const Ea={class:"doc-wrapper"},Ha=v({setup(e){const t=D(()=>s.progress.currentLevel===0?Ia:Y.value.rightPanelComponent);return(n,l)=>(p(),h("div",{class:K(["right-col",{"menu-open":o(s).menuOpened}])},[a("div",Ea,[E(na),E(pa),(p(),re(ie(o(t))))]),E(Ta)],2))}});var Da=_(Ha,[["__scopeId","data-v-31b2c9d5"]]);const Pa=v({setup(e){return Q("Escape",t=>{t.preventDefault(),te()}),Q("PageUp",t=>{t.preventDefault(),q(s.progress.currentChapter,s.progress.currentLevel-1)}),Q("PageDown",t=>{t.preventDefault(),q(s.progress.currentChapter,s.progress.currentLevel+1)}),ae(),(t,n)=>(p(),h($,null,[E(ta),E(Da)],64))}});Le(Pa).use($e).mount("#app");
