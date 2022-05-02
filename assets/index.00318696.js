import{r as F,n as K,c as R,h as W,d as C,a as _,o as p,b as i,e as t,u as c,p as y,f as k,g as G,w as z,i as U,j as T,k as g,l as O,m as u,t as f,q as N,F as w,s as Y,v as I,x as J,y as E,z as X,A as Q}from"./vendor.a4d2a4a4.js";const Z=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}};Z();const b=[{helpTitle:"Select elements by their type",selectorName:"Type Selector",doThis:"Select the plates",selector:"plate",syntax:"tagname",help:"Selects all elements of a type. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",examples:["<strong>div</strong> selects all <tag>div</tag> elements.","<strong>p</strong> selects all <tag>p</tag> elements."],boardMarkup:`
<plate></plate>
<plate></plate>
<bento></bento>
<plate></plate>
    `},{doThis:"Select the bento boxes",selector:"bento",syntax:"tagname",helpTitle:"Select elements by their type",selectorName:"Type Selector",help:"Selects all elements of a type. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",examples:["<strong>div</strong> selects all <tag>div</tag> elements.","<strong>p</strong> selects all <tag>p</tag> elements."],boardMarkup:`
    <bento></bento>
    <bento></bento>
    <plate>
        <bento></bento>
    </plate>
    `},{doThis:"Select the fancy plate",selector:"#fancy",selectorName:"ID Selector",helpTitle:"Select elements with an ID",syntax:"#id",help:"Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.",examples:['<strong>#cool</strong> selects any element with <strong>id="cool"</strong>','<strong>ul#long</strong> selects <tag>ul id="long"</tag>'],boardMarkup:`
    <plate></plate>
    <plate id="fancy"></plate>
    <bento></bento>
    `},{doThis:"Select the small apples",selector:".small",selectorName:"Class Selector",helpTitle:"Select elements by their class",syntax:".classname",help:"The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.",examples:['<strong>.neato</strong> selects all elements with <strong>class="neato"</strong>'],boardMarkup:`
    <apple></apple>
    <apple class="small"></apple>
    <plate>
      <apple class="small" />
    </plate>
    <plate />
    `},{doThis:"Select the small oranges",selector:"orange.small",helpTitle:"Combine the Class Selector",syntax:"tag.classname",help:"You can combine the class selector with other selectors, like the type selector.",examples:['<strong>ul.important</strong> selects all <tag>ul</tag> elements that have <strong>class="important"</strong>','<strong>#big.wide</strong> selects all elements with <strong>id="big"</strong> that also have <strong>class="wide"</strong>'],boardMarkup:`
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
    </plate>`},{helpTitle:"Select an element inside another element",selectorName:"Descendant Selector",doThis:"Select the apple on the plate",selector:"plate apple",syntax:"A B",help:"Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.",examples:["<strong>p  strong</strong> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>",'<strong>#fancy  span</strong> selects any <tag>span</tag> elements that are inside of the element with <strong>id="fancy"</strong>'],boardMarkup:`
    <bento></bento>
    <plate>
      <apple/>
    </plate>
    <apple></apple>
    `},{doThis:"Select the pickle on the fancy plate",selector:"#fancy pickle",helpTitle:"Combine the Descendant & ID Selectors",syntax:"#id A",help:"You can combine any selector with the descendent selector.",examples:['<strong>#cool span</strong> selects all <tag>span</tag> elements that are inside of elements with <strong>id="cool"</strong>'],boardMarkup:`
    <bento>
    <orange/>
    </bento>
    <plate id="fancy">
      <pickle/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    `},{doThis:"Select the small oranges in the bentos",selector:"bento orange.small",selectorName:"Challenge #1",helpTitle:"You can do it...",help:"Combine what you learned in the last few levels to solve this one!",boardMarkup:`
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
    `},{doThis:"Select all the plates and bentos",selector:"plate,bento",selectorName:"Comma Combinator",helpTitle:"Combine, selectors, with... commas!",syntax:"A, B, C",help:"Commas can be used to combine several selectors. You can combine any number of selectors this way.",examples:['<strong>p, .fun</strong> selects all <tag>p</tag> elements as well as all elements with <strong>class="fun"</strong>',"<strong>a, p, div</strong> selects all <tag>a</tag>, <tag>p</tag> and <tag>div</tag> elements"],boardMarkup:`
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
    `},{doThis:"Select all the things!",selector:"*",selectorName:"The Universal Selector",helpTitle:"You can select everything!",syntax:"*",help:"You can select all elements with the universal selector! ",examples:["<strong>p *</strong> selects any element inside all <tag>p</tag> elements."],boardMarkup:`
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
    `},{doThis:"Select everything on a plate",selector:"plate *",syntax:"A  *",helpTitle:"Combine the Universal Selector",help:"This selects all elements inside of <strong>A</strong>.",examples:["<strong>p *</strong> selects every element inside all <tag>p</tag> elements.",'<strong>ul.fancy *</strong> selects every element inside all <tag>ul class="fancy"</tag> elements.'],boardMarkup:`
    <plate id="fancy">
      <orange class="small"/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    <apple class="small"></apple>
    <plate>
      <apple></apple>
    </plate>`},{doThis:"Select every apple that are just to the right of a plate",selector:"plate + apple",helpTitle:"Select an element that directly follows another element",selectorName:"Adjacent Sibling Selector",syntax:"A + B",help:"This selects all <strong>B</strong> elements that directly follow <strong>A</strong>. Elements that follow one another are called siblings. They're on the same level, or depth. <br/><br/>In the HTML markup for this level, elements that have the same indentation are siblings.",examples:['<strong>p + .intro</strong> selects every element with <strong>class="intro"</strong> that directly follows a <tag>p</tag>',"<strong>div + a</strong> selects every <tag>a</tag> element that directly follows a <tag>div</tag>"],boardMarkup:`
    <bento>
      <apple class="small"></apple>
    </bento>
    <plate></plate>
    <apple class="small"></apple>
    <plate></plate>
    <apple></apple>
    <apple class="small"></apple>
    <apple class="small"></apple>
    `},{selectorName:"General Sibling Selector",helpTitle:"Select elements that follows another element",syntax:"A ~ B",doThis:"Select all the pickles to the right of the bento",selector:"bento ~ pickle",help:"You can select all siblings of an element that follow it. This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one.",examples:["<strong>A ~ B</strong> selects all <strong>B</strong> that follow a <strong>A</strong>"],boardMarkup:`
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
    `},{selectorName:"Child Selector",syntax:"A > B ",doThis:"Select the apple directly on a plate",selector:"plate > apple",helpTitle:"Select direct children of an element",help:"You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element. <br><br>Elements that are nested deeper than that are called descendant elements.",examples:["<strong>A > B</strong> selects all <strong>B</strong> that are a direct children <strong>A</strong>"],boardMarkup:`
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
    `},{selectorName:"First Child Pseudo-selector",helpTitle:"Select a first child element inside of another element",doThis:"Select the top orange",selector:"plate :first-child",syntax:":first-child",help:"You can select the first child element. A child element is any element that is directly nested in another element. You can combine this pseudo-selector with other selectors.",examples:["<strong>:first-child</strong> selects all first child elements.","<strong>p:first-child</strong> selects all first child <tag>p</tag> elements.","<strong>div p:first-child</strong> selects all first child <tag>p</tag> elements that are in a <tag>div</tag>."],boardMarkup:`
    <bento></bento>
    <plate></plate>
    <plate>
      <orange></orange>
      <orange></orange>
      <orange></orange>
    </plate>
    <pickle class="small"></pickle>
    `},{selectorName:"Only Child Pseudo-selector",helpTitle:"Select an element that are the only element inside of another one.",doThis:"Select the items alone on a plate",selector:"plate :only-child",syntax:":only-child",help:"You can select any element that is the only element inside of another one.",examples:["<strong>span:only-child</strong> selects the <tag>span</tag> elements that are the only child of some other element.","<strong>ul li:only-child</strong> selects the only <tag>li</tag> element that are in a <tag>ul</tag>."],boardMarkup:`
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
    `},{selectorName:"Last Child Pseudo-selector",helpTitle:"Select the last element inside of another element",doThis:"Select the last pickle",selector:"pickle:last-child",syntax:":last-child",help:"You can use this selector to select an element that is the last child element inside of another element. <br><br>Pro Tip &rarr; In cases where there is only one element, that element counts as the first-child, only-child and last-child!",examples:["<strong>:last-child</strong> selects all last-child elements.","<strong>span:last-child</strong> selects all last-child <tag>span</tag> elements.","<strong>ul li:last-child</strong> selects the last <tag>li</tag> elements inside of any <tag>ul</tag>."],boardMarkup:`
    <plate id="fancy">
      <pickle></pickle>
      <apple class="small"></apple>
    </plate>
    <pickle class="small"></pickle>
    <plate>
      <orange></orange>
    </plate>
    <pickle class="small"></pickle>`},{selectorName:"Nth Child Pseudo-selector",helpTitle:"Select an element by its order in another element",doThis:"Select the 3rd plate",selector:":nth-child(3)",syntax:":nth-child(A)",help:"Selects the <strong>nth</strong> (Ex: 1st, 3rd, 12th etc.) child element in another element.",examples:["<strong>:nth-child(8)</strong> selects every element that is the 8th child of another element.","<strong>div p:nth-child(2)</strong> selects the second <strong>p</strong> in every <strong>div</strong>"],boardMarkup:`
    <plate></plate>
    <plate></plate>
    <plate></plate>
    <plate></plate>
    `},{selectorName:"Nth Last Child Selector",helpTitle:"Select an element by its order in another element, counting from the back",doThis:"Select the 1st bento",selector:"bento:nth-last-child(3)",syntax:":nth-last-child(A)",help:"Selects the children from the bottom of the parent. This is like nth-child, but counting from the back!",examples:["<strong>:nth-last-child(2)</strong> selects all second-to-last child elements."],boardMarkup:`
    <plate></plate>
    <bento></bento>
    <plate>
      <orange></orange>
      <orange></orange>
      <orange></orange>
    </plate>
    <bento></bento>
    `},{selectorName:"First of Type Selector",helpTitle:"Select the first element of a specific type",doThis:"Select first apple",selector:"apple:first-of-type",syntax:":first-of-type",help:"Selects the first element of that type within another element.",examples:["<strong>span:first-of-type</strong> selects the first <tag>span</tag> in any element."],boardMarkup:`
    <orange class="small"></orange>
    <apple></apple>
    <apple class="small"></apple>
    <apple></apple>
    `},{selectorName:"Nth of Type Selector",doThis:"Select all even plates",selector:"plate:nth-of-type(even)",syntax:":nth-of-type(A)",help:"Selects a specific element based on its type and order in another element - or even or odd instances of that element.",examples:["<strong>div:nth-of-type(2)</strong> selects the second instance of a div.","<strong>.example:nth-of-type(odd)</strong> selects all odd instances of a the example class."],boardMarkup:`
    <plate></plate>
    <plate></plate>
    <plate></plate>
    <plate></plate>
    <plate></plate>
    <plate></plate>
    `},{selectorName:"Nth-of-type Selector with Formula",doThis:"Select every 2nd plate, starting from the 3rd",selector:"plate:nth-of-type(2n+3)",syntax:":nth-of-type(An+B)",help:"The nth-of-type formula selects every nth element, starting the count at a specific instance of that element.",examples:["<strong>span:nth-of-type(6n+2)</strong> selects every 6th instance of a <tag>span</tag>, starting from (and including) the second instance."],boardMarkup:`
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
    `},{selectorName:"Only of Type Selector",helpTitle:"Select elements that are the only ones of their type within their parent element",selector:"plate *:only-of-type",syntax:":only-of-type",doThis:"Select one-of-a-kind items in a plate",help:"Selects the only element of its type within another element.",examples:["<strong>p span:only-of-type</strong> selects a <tag>span</tag> within any <tag>p</tag> if it is the only <tag>span</tag> in there."],boardMarkup:`
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
    `},{selectorName:"Last of Type Selector",helpTitle:"Select the last element of a specific type",doThis:"Select the last pickle",selector:"pickle:last-of-type",syntax:":last-of-type",help:"Selects each last element of that type within another element. Remember type refers the kind of tag, so <tag>p</tag> and <tag>span</tag> are different types. <br><br> I wonder if this is how the last dinosaur was selected before it went extinct.",examples:["<strong>div:last-of-type</strong> selects the last <tag>div</tag> in every element.","<strong>p span:last-of-type</strong> selects the last <tag>span</tag> in every <tag>p</tag>."],boardMarkup:`
    <orange class="small"></orange>
    <pickle></pickle>
    <orange class="small"></orange>
    <apple class="small"></apple>
    <pickle></pickle>
    <apple class="small"></apple>
    `},{selectorName:"Empty Selector",helpTitle:"Select elements that don't have children",doThis:"Select the empty bentos",selector:"bento:empty",syntax:":empty",help:"Selects elements that don't have any other elements inside of them.",examples:["<strong>div:empty</strong> selects all empty <tag>div</tag> elements."],boardMarkup:`
    <bento></bento>
    <bento>
      <pickle class="small"></pickle>
    </bento>
    <plate></plate>
    <bento></bento>`},{selectorName:"Negation Pseudo-class",helpTitle:"Select all elements that don't match the negation selector",doThis:"Select the big apples",selector:"apple:not(.small)",syntax:":not(X)",help:'You can use this to select all elements that do not match selector <strong>"X"</strong>.',examples:['<strong>:not(#fancy)</strong> selects all elements that do not have <strong>id="fancy"</strong>.',"<strong>div:not(:first-child)</strong> selects every <tag>div</tag> that is not a first child.",'<strong>:not(.big, .medium)</strong> selects all elements that do not have <strong>class="big"</strong> or <strong>class="medium"</strong>.'],boardMarkup:`
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
    `},{selectorName:"Attribute Selector",helpTitle:"Select all elements that have a specific attribute",doThis:"Select the items for someone",selector:"[for]",syntax:"[attribute]",help:'Attributes appear inside the opening tag of an element, like this: <tag>span attribute="value"</tag>. An attribute does not always have a value, it can be blank!',examples:['<strong>[value]</strong> selects all elements that have a <strong>value="anything"</strong> attribute.','<strong>[type]</strong> selects all elements that have a <strong>type="anything"</strong>. attribute'],boardMarkup:`
    <bento><apple class="small"/></bento>
    <apple for="Ethan"></apple>
    <plate for="Alice"><pickle/></plate>
    <bento for="Clara"><orange/></bento>
    <pickle></pickle>`},{selectorName:"Attribute Selector",helpTitle:"Select all elements that have a specific attribute",doThis:"Select the plates for someone",selector:"plate[for]",syntax:"A[attribute]",help:"Combine the attribute selector with another selector (like the tag name selector) by adding it to the end.",examples:['<strong>a[href]</strong> selects all <tag>a</tag> elements that have a <strong>href="anything"</strong> attribute.',"<strong>input[disabled]</strong> selects all <tag>input</tag> elements with the <strong>disabled</strong> attribute"],boardMarkup:`
    <plate for="Sarah"><pickle/></plate>
    <plate for="Luke"><apple/></plate>
    <plate></plate>
    <bento for="Steve"><orange/></bento>
    `},{selectorName:"Attribute Value Selector",helpTitle:"Select all elements that have a specific attribute value",doThis:"Select Vitaly's meal",selector:"[for=Vitaly]",syntax:'[attribute="value"]',help:"Attribute selectors are case sensitive, each character must match exactly.",examples:['<strong>input[type="checkbox"]</strong> selects all checkbox input elements.'],boardMarkup:`
    <apple for="Alexei"></apple>
    <bento for="Albina"><apple /></bento>
    <bento for="Vitaly"><orange/></bento>
    <pickle></pickle>
    `},{selectorName:"Attribute Starts With Selector",helpTitle:"Select all elements with an attribute value that starts with specific characters",doThis:"Select the items for names that start with 'Sa'",selector:'[for^="Sa"]',syntax:'[attribute^="value"]',examples:['<strong>.toy[category^="Swim"]</strong> selects elements with class <strong>toy</strong> and either <strong>category="Swimwear"</strong> or <strong>category="Swimming"</strong>.'],boardMarkup:`
    <plate for="Sam"><pickle/></plate>
    <bento for="Sarah"><apple class="small"/></bento>
    <bento for="Mary"><orange/></bento>
    `},{selectorName:"Attribute Ends With Selector",helpTitle:"Select all elements with an attribute value that ends with specific characters",doThis:"Select the items for names that end with 'ato'",selector:'[for$="ato"]',syntax:'[attribute$="value"]',help:"",examples:['<strong>img[src$=".jpg"]</strong> selects all images display a <strong>.jpg</strong> image.'],boardMarkup:`
    <apple class="small"></apple>
    <bento for="Hayato"><pickle/></bento>
    <apple for="Ryota"></apple>
    <plate for="Minato"><orange/></plate>
    <pickle class="small"></pickle>
    `},{selectorName:"Attribute Wildcard Selector",helpTitle:"Select all elements with an attribute value that contains specific characters anywhere",syntax:'[attribute*="value"]',doThis:"Select the meals for names that contain 'obb'",selector:'[for*="obb"]',help:"A useful selector if you can identify a common pattern in things like <strong>class</strong>, <strong>href</strong> or <strong>src</strong> attributes.",examples:['<strong>img[src*="/thumbnails/"]</strong> selects all image elements that show images from the "thumbnails" folder.','<strong>[class*="heading"]</strong> selects all elements with "heading" in their class, like <strong>class="main-heading"</strong> and <strong>class="sub-heading"</strong>'],boardMarkup:`
    <bento for="Robbie"><apple /></bento>
    <bento for="Timmy"><pickle /></bento>
    <bento for="Bobby"><orange /></bento>
    `},{selectorName:"Final Challenge",helpTitle:"You can do it...",help:"Combine all what you learned to solve this one!",doThis:"Select the empty plates except the one for Timmy",selector:'plate:empty:not([for="Timmy"])',boardMarkup:`
    <bento></bento>
    <plate><apple /></plate>
    <plate for="Timmy"></plate>
    <plate></plate>
    <plate></plate>
    `}],D=(e,l,n)=>Math.min(Math.max(e,l),n),B="html_css_training_progress",ee={completed:[],currentLevel:1,hasCompleted(e){return this.completed.includes(e)},completeLevel(){const e=this.currentLevel;this.hasCompleted(e)||(this.completed.push(e),this.save())},getPercentCompleted(){return this.completed.length/b.length*100},hasFinished(){return this.completed.length>=b.length},load(){var e;try{Object.assign(this,JSON.parse((e=localStorage.getItem(B))!=null?e:"{}"))}catch{localStorage.removeItem(B),this.reset()}},save(){localStorage.setItem(B,JSON.stringify(o.progress))},reset(){this.currentLevel=1,this.completed=[],this.save()}},o=F({progress:ee,currentLevel:0,level:b[0],levelTimeout:1e3,menuOpened:!1});o.progress.load();function H(){o.menuOpened=!1}function te(){Array.from(document.querySelectorAll("#board *")).forEach(l=>{R(l,{triggers:["hover"],content:le(l),delay:0},null),l.addEventListener("mouseover",n=>n.stopPropagation()),l.addEventListener("mouseenter",n=>n.stopPropagation())})}function le(e){const l=e.tagName.toLowerCase(),n=e.getAttribute("class"),r=e.getAttribute("id");return`<${l}${r?` id="${r}"`:""}${n?` class="${n}"`:""}>`}function q(){confirm("Do you really want to reset your progress ?")&&(o.progress.reset(),A(),H())}function ae(e){Array.from(document.querySelectorAll(".shake, .strobe")).forEach(a=>a.classList.remove("shake","strobe"));const l=document.querySelector("#board");try{l.querySelectorAll(e)}catch{e=""}const n=e?Array.from(l.querySelectorAll(e)):[],r=Array.from(l.querySelectorAll(o.level.selector));let s=!1;if(n.length==0&&document.querySelector(".editor").classList.add("shake"),n.length===r.length&&n.length>0&&(s=se(n,r)),s){n.forEach(d=>{d.classList.remove("strobe"),d.classList.add("clean")});const a=document.querySelector(".editor input");a.value="",o.progress.completeLevel(),o.progress.hasFinished()||setTimeout(function(){o.progress.currentLevel++,A()},o.levelTimeout)}else n.forEach(a=>{a.classList.remove("strobe"),a.classList.add("shake")}),setTimeout(function(){Array.from(document.querySelectorAll(".shake")).forEach(a=>a.classList.remove("shake")),Array.from(document.querySelectorAll(".strobe")).forEach(a=>a.classList.remove("strobe")),r.forEach(a=>{a.classList.add("strobe")})},500)}function se(e,l){return e.length===l.length&&e.every(n=>l.includes(n))}function $(e){o.progress.currentLevel=D(e,1,b.length),W(),A(),H()}function A(){var e;o.progress.currentLevel=D(o.progress.currentLevel,1,b.length),o.level=b[o.progress.currentLevel-1],o.progress.save(),(e=document.querySelector("input"))==null||e.focus(),K(()=>te()).then()}var v=(e,l)=>{const n=e.__vccOpts||e;for(const[r,s]of l)n[r]=s;return n};const j=e=>(y("data-v-00e6c1a3"),e=e(),k(),e),ne={class:"game-container"},oe={class:"game-wrapper"},re={class:"table-wrapper"},ce={class:"table"},pe=["innerHTML"],ie=j(()=>t("div",{class:"table-leg"},null,-1)),de=j(()=>t("div",{class:"table-leg"},null,-1)),he=[ie,de],ge=C({setup(e){const l=_(null),n=_(null),r=_(null);return(s,a)=>(p(),i("div",ne,[t("div",oe,[t("div",re,[t("div",{class:"table-surface",ref_key:"surface",ref:l},null,512),t("div",ce,[t("div",{innerHTML:c(o).level.boardMarkup,ref_key:"board",ref:r,id:"board"},null,8,pe)])]),t("div",{class:"table-edge",ref_key:"edge",ref:n},he,512)])]))}});var me=v(ge,[["__scopeId","data-v-00e6c1a3"]]);const ue={class:"markup"},ve={props:{markup:String},setup(e){const l=e,n=_(null);G(r),z(()=>l.markup,r);function r(){const a=document.createElement("div");a.innerHTML=l.markup,console.log(l.markup,a),n.value.innerHTML=s(a,!0).innerHTML}function s(a,d){const h=a.tagName.toLowerCase(),m=document.createElement("div"),S=a.getAttributeNames().map(L=>`${L}="${a.getAttribute(L)}"`).join(" "),x=[...a.children];return x.length>0?(d||(m.textContent=`<${h}${S?" "+S:""}>`),x.forEach(L=>m.appendChild(s(L))),d||m.appendChild(document.createTextNode(`</${h}>`))):m.textContent=`<${h}${S?" "+S:""} />`,m}return(a,d)=>(p(),i("div",ue,[t("div",{ref_key:"markup",ref:n},null,512)]))}};const M=e=>(y("data-v-20942d94"),e=e(),k(),e),fe={class:"editor-pane"},be=M(()=>t("div",{class:"input-header"},[t("div",{class:"file-name"},"style.css"),u(" CSS Editor ")],-1)),_e={class:"file-window css-view"},ye=O('<div class="line-numbers" data-v-20942d94> 1<br data-v-20942d94>2<br data-v-20942d94>3<br data-v-20942d94>4<br data-v-20942d94>5<br data-v-20942d94>6<br data-v-20942d94>7<br data-v-20942d94>8<br data-v-20942d94>9<br data-v-20942d94>10<br data-v-20942d94>11<br data-v-20942d94>12<br data-v-20942d94>13<br data-v-20942d94>14<br data-v-20942d94>15<br data-v-20942d94>16<br data-v-20942d94>17<br data-v-20942d94>18<br data-v-20942d94>19<br data-v-20942d94>20 </div>',1),ke=["onKeydown","onKeyup"],Se=M(()=>t("span",{class:"plus"},"+",-1)),xe=M(()=>t("div",null,[u(" {"),t("br"),u(" /* Styles would go here. */"),t("br"),u(" } ")],-1)),Te={class:"editor-pane html-view"},we=M(()=>t("div",{class:"input-header"},[t("div",{class:"file-name"},"table.html"),u(" HTML Viewer ")],-1)),$e={class:"file-window"},Le=O('<div class="line-numbers" data-v-20942d94>1<br data-v-20942d94>2<br data-v-20942d94>3<br data-v-20942d94>4<br data-v-20942d94>5<br data-v-20942d94>6<br data-v-20942d94>7<br data-v-20942d94>8<br data-v-20942d94>9<br data-v-20942d94>10<br data-v-20942d94>11<br data-v-20942d94>12<br data-v-20942d94>13<br data-v-20942d94>14<br data-v-20942d94>15<br data-v-20942d94>16<br data-v-20942d94>17<br data-v-20942d94>18<br data-v-20942d94>19<br data-v-20942d94>20</div>',1),Ae=C({setup(e){let l="";const n=_(null),r=_(null);function s(){const h=n.value;h.classList.remove("enterhit"),setTimeout(()=>h.classList.add("enterhit"),0),a(l)}function a(h){l=r.value.value,ae(h)}function d(){const h=r.value;l=h.value,h.classList.toggle("input-strobe",l.length>0)}return(h,m)=>(p(),i("div",{class:"editor",onClick:m[0]||(m[0]=S=>{var x;return(x=r.value)==null?void 0:x.focus()})},[t("div",fe,[be,t("div",_e,[ye,t("input",{class:"input-strobe",type:"text",ref_key:"inputElement",ref:r,onKeydown:U(T(s,["prevent"]),["enter"]),onKeyup:T(d,["prevent"]),placeholder:"Type in a CSS selector"},null,40,ke),Se,t("div",{class:"enter-button",onClick:s,ref_key:"enterButton",ref:n},"enter",512),xe])]),t("div",Te,[we,t("div",$e,[Le,g(ve,{markup:c(o).level.boardMarkup},null,8,["markup"])])])]))}});var Me=v(Ae,[["__scopeId","data-v-20942d94"]]);const Ce={},Ne=e=>(y("data-v-4e39e774"),e=e(),k(),e),Ie={class:"what-is-this"},Ee=Ne(()=>t("p",null,[u(" Credits: "),t("a",{href:"http://www.twitter.com/flukeout"},"@flukeout")],-1)),Be=[Ee];function He(e,l,n,r,s,a){return p(),i("div",Ie,Be)}var Pe=v(Ce,[["render",He],["__scopeId","data-v-4e39e774"]]);const Oe={},V=e=>(y("data-v-eb988748"),e=e(),k(),e),Ye=u(" HTML/CSS Training "),De=V(()=>t("div",{class:"logo"},[t("img",{src:""})],-1)),qe=V(()=>t("span",{class:"share-menu"},[u(" Repository "),t("a",{class:"share-github",type:"github",href:"#"})],-1)),je=[Ye,De,qe];function Ve(e,l){return p(),i("header",null,je)}var Fe=v(Oe,[["render",Ve],["__scopeId","data-v-eb988748"]]);const Ke={class:"left-col"},Re={class:"order"},We={setup(e){return(l,n)=>(p(),i("div",Ke,[g(Fe),t("h2",Re,f(c(o).level.doThis),1),g(me),g(Me),g(Pe)]))}};var Ge=v(We,[["__scopeId","data-v-cb6ef246"]]);const ze={key:0,class:"display-help"},Ue={class:"selector-name"},Je={class:"title"},Xe={key:0,class:"syntax"},Qe=["innerHTML"],Ze={key:1,class:"examples-title"},et={class:"examples"},tt=["innerHTML"],lt={setup(e){return(l,n)=>{var r;return c(o).level?(p(),i("div",ze,[t("h3",Ue,f(c(o).level.selectorName),1),t("h2",Je,f(c(o).level.helpTitle),1),c(o).level.syntax?(p(),i("h3",Xe,f(c(o).level.syntax),1)):N("",!0),t("div",{class:"hint",innerHTML:c(o).level.help},null,8,Qe),((r=c(o).level.examples)==null?void 0:r.length)>0?(p(),i("h4",Ze,"Examples")):N("",!0),t("div",et,[(p(!0),i(w,null,Y(c(o).level.examples,s=>(p(),i("div",{class:"example",innerHTML:s},null,8,tt))),256))])])):N("",!0)}}};var at=v(lt,[["__scopeId","data-v-5970f4db"]]);const st=e=>(y("data-v-31db37ea"),e=e(),k(),e),nt={class:"level-text"},ot=st(()=>t("span",{class:"checkmark"},null,-1)),rt={class:"level-nav"},ct={class:"level-progress"},pt={setup(e){function l(n="next",r){const s=r.target;s.classList.add("link-jiggle"),setTimeout(()=>{s.classList.remove("link-jiggle")},1e3),$(n==="next"?o.progress.currentLevel+1:o.progress.currentLevel-1)}return(n,r)=>(p(),i(w,null,[t("h1",{class:I(["level-header",{completed:c(o).progress.hasCompleted(c(o).progress.currentLevel)}])},[t("span",nt," Level "+f(c(o).progress.currentLevel)+" of "+f(c(b).length),1),ot],2),t("div",rt,[t("a",{class:"previous",href:"#",onClick:r[0]||(r[0]=T(s=>l("previous",s),["prevent"]))}),t("a",{class:"next",href:"#",onClick:r[1]||(r[1]=T(s=>l("next",s),["prevent"]))})]),t("div",ct,[t("div",{class:"progress",style:J({width:c(o).progress.getPercentCompleted()+"%"})},null,4)])],64))}};var it=v(pt,[["__scopeId","data-v-31db37ea"]]);const P=e=>(y("data-v-a4411c08"),e=e(),k(),e),dt={class:"level-menu"},ht=P(()=>t("h2",null,"Choose a level",-1)),gt={class:"levels"},mt=["onClick"],ut=P(()=>t("span",{class:"checkmark"},null,-1)),vt={class:"level-number"},ft=P(()=>t("div",{class:"level-menu-toggle"},null,-1)),bt=[ft],_t={setup(e){function l(){o.menuOpened=!o.menuOpened}return(n,r)=>(p(),i(w,null,[t("div",dt,[ht,t("div",gt,[(p(!0),i(w,null,Y(c(b),(s,a)=>(p(),i("a",{key:a+s.doThis,class:I({current:a+1===c(o).progress.currentLevel,completed:c(o).progress.hasCompleted(a+1)}),onClick:d=>c($)(a+1)},[ut,t("span",vt,f(a+1),1),u(" "+f(s.syntax||s.selectorName),1)],10,mt))),128))]),t("a",{class:"reset-progress",href:"#",onClick:r[0]||(r[0]=T((...s)=>c(q)&&c(q)(...s),["prevent"]))},"Reset Progress")]),t("div",{class:"level-menu-toggle-wrapper",onClick:l},bt)],64))}};var yt=v(_t,[["__scopeId","data-v-a4411c08"]]);const kt={class:"help-wrapper"},St={setup(e){return(l,n)=>(p(),i("div",{class:I(["right-col",{"menu-open":c(o).menuOpened}])},[t("div",kt,[g(it),g(at)]),g(yt)],2))}};var xt=v(St,[["__scopeId","data-v-c8257c20"]]);const Tt=C({setup(e){return E("Escape",l=>{l.preventDefault(),H()}),E("PageUp",l=>{l.preventDefault(),$(o.progress.currentLevel-1)}),E("PageDown",l=>{l.preventDefault(),$(o.progress.currentLevel+1)}),A(),(l,n)=>(p(),i(w,null,[g(Ge),g(xt)],64))}});X(Tt).use(Q).mount("#app");
