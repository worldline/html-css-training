import {Level} from "./level";

export interface Chapter1Level extends Level {
    instructions: string;
    page: string;
}

export const chapter1Levels: Chapter1Level[] = [
    {
        name: "HTML & DOM",
        page: "demo/chapter1Dom.html",
        instructions: `<h3>Welcome to this training session !</h3>
        <img src="img/chef.png" style="width: 88px; margin-right: 0 auto"/>
        <p>During this training, we will be working on the website of Chef Nakamura's brand new restaurant.</p>
        <p>You can see the homepage on the left. It's basic, but it's a start !</p>
        <hr>
        <p>All the content on this page is actually composed of HTML elements in a tree structure we called the <strong>DOM</strong>, for Document Object Model</p>
        <p>Click on the 3D button on top right to see a 3D representation of this tree structure.</p>   
`
    }
]