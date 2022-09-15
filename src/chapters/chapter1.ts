import {Level} from "./level";
import { Chapter } from "./chapter";

export interface ElementClickedData {
    tag: string;
    type: string;
}

export function checkElementClicked(messageData: ElementClickedData, level: Chapter1Level){
    return (
        (!level.tag || messageData.tag === level.tag)
        && (!level.type || messageData.type === level.type)
    )
}

export interface Chapter1Level extends Level {
    instructions: string;
    order?: string;
    tag?: string;
    type?: string;
}

export const chapter1Levels: Chapter1Level[] = [
    {
        name: "HTML and the DOM",
        skippable: true,
        instructions: `<img src="img/chef.png" style="width: 88px; margin: 0 auto"/>
        <p>During this training, we will be working on the website of Chef Nakamura's brand new restaurant.</p>
        <p>You can see the homepage on the left. It's basic, but it's a start !</p>
        <p>All the content on this page is actually composed of HTML elements grouped in a tree structure called the <strong>DOM</strong>, for Document Object Model</p>
        <p>Click on the <b>3D</b> button on top right to see a 3D representation of this tree structure.</p>
        <p>Move the mouse around to observe the structure. Holding the <b>Ctrl</b> key stops the camera movement.</p>`
    },
    {
        name: "Main root tags",
        skippable: true,
        instructions: `
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
        `
    },
    {
        name: "Sectionning: <main>",
        order: "Click on a <main> element",
        tag: "main",
        instructions: `
        <p>Properly describing the different sections of a web document helps for accessibility tools and for the indexability by search engines crawlers.</p>
        <h3 class="syntax">&lt;main&gt;</h3>
        <p>Dominant section of content, related to the central topic of the document.</p>
        <p>Users with certain disabilities may use this tag to directly jump to the important content.</p>
        <hr>
        <p>Use the <b>3D</b> view and the <b>Ctrl</b> key to select elements in the DOM.</p>
        `
    },
    {
        name: "Sectionning: <aside>",
        order: "Click on a <aside> element",
        tag: "aside",
        instructions: `
        <p>Properly describing the different sections of a web document helps for accessibility tools and for the indexability by search engines crawlers.</p>

        <h3 class="syntax">&lt;aside&gt;</h3>
        <p>Content indirectly related to the main content of the document. Frequently used for side panels.</p>
        `
    },
    {
        name: "Sectionning: <header>",
        order: "Click on a <header> element",
        tag: "header",
        instructions: `
        <p>Properly describing the different sections of a web document helps for accessibility tools and for the indexability by search engines crawlers.</p>

        <h3 class="syntax">&lt;header&gt;</h3>
        <p>Content used to introduce the document. Typically contains a level one heading, a logo, a menu or some navigation links.</p>
        `
    },
    {
        name: "Sectionning: <nav>",
        order: "Click on a <nav> element",
        tag: "nav",
        instructions: `
        <p>Properly describing the different sections of a web document helps for accessibility tools and for the indexability by search engines crawlers.</p>

        <h3 class="syntax">&lt;nav&gt;</h3>
        <p>Section used to provide navigation links, either internal or external.</p>
        <p>This element is especially useful for screenreader users to quickly navigate through your website.</p>
        `
    },
    {
        name: "Sectionning: <article>",
        order: "Click on a <article> element",
        tag: "article",
        instructions: `
        <p>Properly describing the different sections of a web document helps for accessibility tools and for the indexability by search engines crawlers.</p>

        <h3 class="syntax">&lt;article&gt;</h3>
        <p>An <tag>article</tag> represents a section of the document which can be extracted to be reused independently without its parent context.</p>
        <p><b>Examples</b>: a forum post, a newspaper article, a blog entry, a product card, a user-submitted comment, an interactive widget...</p>
        <p>Web crawlers can use this tag to parse a piece of content independently of its parent document.</p>
        `
    },
    {
        name: "Sectionning: <section>",
        order: "Click on a <section> element",
        tag: "section",
        instructions: `
        <p>Properly describing the different sections of a web document helps for accessibility tools and for the indexability by search engines crawlers.</p>

        <h3 class="syntax">&lt;section&gt;</h3>
        <p>When a section of the document has no specific semantic element to describe it, use a <tag>section</tag> tag.</p>
        <p>Sections content often start with a heading element that describes it.</p>
        `
    },
    {
        name: "Sectionning: Headings",
        order: "Click on a <h1> element",
        tag: "h1",
        instructions: `
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;h1&gt;, &lt;h2&gt; ... &lt;h6&gt;</h3>
        <p>Headings are used as section titles to create a hierarchy in the content of the document.</p>
        <p>HTML documents can have up to 6 levels of section headings, <tag>h1</tag> being the highest level.</p>
        <p>Using only one <tag>h1</tag> per page or view is beneficial to screenreader users. It should concisely describe the overall purpose of the content.</p>        
        `
    },
    {
        name: "Sectionning: Headings #2",
        order: "Click on a <h2> element",
        tag: "h2",
        instructions: `
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;h1&gt;, &lt;h2&gt; ... &lt;h6&gt;</h3>
        <p>Headings are used as section titles to create a hierarchy in the content of the document.</p>
        <p>A <tag>h2</tag> must necessarily be preceded by an <tag>h1</tag> in the document, and so on.</p>
        `
    },
    {
        name: "Text semantics: Paragraphs",
        order: "Click on a <p> element",
        tag: "p",
        instructions: `
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;p&gt;</h3>
        <p>Split your text content in paragraphs so that it's easier to read.</p>
        <p>By default, paragraphs are displayed in a block and have margins.</p>
        <p>Users of screen readers can jump from one paragraph to another to quickly find what they are looking for.</p>
        `
    },
    {
        name: "Text semantics: Lists",
        order: "Click on a <ul> element",
        tag: "ul",
        instructions: `
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;ul&gt; or &lt;ol&gt;</h3>
        <p><tag>ol</tag> stands for <b>ordered list</b>.</p>
        <p><tag>ul</tag> stands for <b>unordered list</b>.</p>
        <p>By default, ordered list items are preceded by a number, and unordered list items by a bullet point.</p>
        `
    },
    {
        name: "Text semantics: Lists items",
        order: "Click on a <li> element",
        tag: "li",
        instructions: `
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;li&gt;</h3>
        <p>Both <tag>ol</tag> and <tag>ul</tag> must have <tag>li</tag> (<b>list item</b>) elements as direct descendants.</p>
        <p>By default, list items have a left margin.</p>
        <p>Users of screen readers can jump from one list item to another to quickly find what they are looking for.</p>
        `
    },
    {
        name: "Text semantics: Descriptions Lists",
        order: "Click on a <dl> element",
        tag: "dl",
        instructions: `
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;dl&gt;</h3>
        <p>Definitions lists are useful to describe a mapping between some key-value pairs, like a glossary with terms and definitions, or an index mapping a word to a page number.</p>
        <p>Listing definitions can help web crawlers to link information and build their metadata.</p>
        `
    },
    {
        name: "Text semantics: Description Term",
        order: "Click on a <dt> element",
        tag: "dt",
        instructions: `
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;dt&gt;</h3>
        <p><tag>dt</tag> stands for <b>description term</b>, and represents the term being described.</p>
        <p><tag>dt</tag> and <tag>dd</tag> must be consecutive tags and direct descendants of a <tag>dl</tag> element.</p>
        `
    },
    {
        name: "Text semantics: Description Details",
        order: "Click on a <dd> element",
        tag: "dd",
        instructions: `
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;dt&gt;</h3>
        <p><tag>dd</tag> stands for <b>description details</b>, and represents the description of the previous term.</p>
        <p><tag>dt</tag> and <tag>dd</tag> must be consecutive tags and direct descendants of a <tag>dl</tag> element.</p>
        `
    },
    {
        name: "Text semantics: Time and dates",
        order: "Click on a <time> element",
        tag: "time",
        instructions: `
        <p>Text on a web document can benefit from being placed in appropriate tags that have predefined styles provided by the browser.</p>

        <h3 class="syntax">&lt;time datetime="23:00"&gt;</h3>
        <p>Put your dates, hours and durations in a <tag>time</tag> tag with an associated <b>datetime</b> attribute so that the value is machine-readable.</p>
        <p>It allows adding custom features on browsers such as creating calendar events or reminders.</p>
        `
    },
    {
        name: "Text semantics: Address",
        order: "Click on a <address> element",
        tag: "address",
        instructions: `
        <p>Properly describing the different sections of a web document helps for accessibility tools and for the indexability by search engines crawlers.</p>

        <h3 class="syntax">&lt;address&gt;</h3>
        <p>Identifies the contact information relevant to the current document: <b>author, physical address, email, phone number</b>...</p>
        <p>It is mostly useful for web crawlers to build their metadata.</p>
        `
    },
    {
        name: "Interactions: Links",
        order: "Click on a <a> element",
        tag: "a",
        instructions: `
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
        `
    },
    {
        name: "Interactions: Forms",
        order: "Click on a <form> element",
        tag: "form",
        instructions: `
        <p>Some elements are used for user interaction on the document. Again, picking the right element can make these interactions more convenient for your users.</p>

        <h3 class="syntax">&lt;form&gt;</h3>
        <p>Forms used to be the common way to send information through a website.</p>
        <p>When submitted, the browser sends a HTTP POST request containing the user input to the server at the adress specified by the <b>target</b> attribute.</p>
        <p>This default behavior of forms is less used today on modern websites with real-time interactions handled in JavaScript. But they are still useful for their semantic value, and all the standard APIs associated to them, such as form validation.</p>
        `
    },
    {
        name: "Interactions: Buttons",
        order: "Click on a <button> element",
        tag: 'button',
        instructions: `
        <p>Some elements are used for user interaction on the document. Again, picking the right element can make these interactions more convenient for your users.</p>

        <h3 class="syntax">&lt;button&gt;</h3>
        <p>Buttons are used to submit forms or trigger some specific interactions on a web page, handled in JavaScript.</p>
        <p>If a link doesn't send you somewhere, it should probably be a <tag>button</tag> instead.</p>
        `
    },
    {
        name: "Interactions: Inputs",
        order: `Click on a <input type="tel"> element`,
        tag: 'input',
        type: "tel",
        instructions: `
        <p>Some elements are used for user interaction on the document. Again, picking the right element can make these interactions more convenient for your users.</p>

        <h3 class="syntax">&lt;input type="text"&gt;</h3>
        <p><tag>input</tag> elements cover a large amount of different input fields used to receive user input.</p>
        <p>Depending on their <b>type</b> attribute, their UI and behavior will change to receive various types of input: 
        <b>text</b>, <b>password</b>, <b>checkbox</b>, <b>color</b>...</p>
        <p>The complete list of standard input types can be found <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#input_types" target="_blank">here</a>.</p>
        <p>For example, an <tag>input type="datetime-local"</tag> will open a date and time picker UI that matches the device and operating system of the user. Try it on the restaurant website !</p>
        `
    },
]

export const chapter1: Chapter = {
    name: "HTML - Semantics",
    description: "Why semantics matter",
    intro: `
    <p>HTML is the markup language that describes the <strong>content</strong> of web pages.</p>
    <p>In this chapter, we will look at the different elements available in HTML and why understanding the purpose of each of them is important for you and your visitors.</p>`,
    levels: chapter1Levels
}