import type {WebFiles} from "./models/GameState";

type WebLessons = {
    id: string;
    title: string;
    explanation: string;
    task: string;
    starterFiles: WebFiles;
    unlockYear: number;
}

export const webLessons: WebLessons[] =[
    {
        id : "first-homepage",
        unlockYear: 1995,
        title: "Build Your First Homepage",
        explanation: "The <h1> tag shows the main heading of a page",
        task: "Replace 'My Homepage' with the name of your website.",
        starterFiles: {
            html: "<h1>My Homepage</h1>\n<p>Welcome to my website!</p>",
            css: "",
            js: "",
        },
    },
    {
        id: "style-homepage",
        unlockYear: 1996,
        title: "Style Your Homepage",
        explanation: "CSS changes how a page looks. The color property sets the text color.",
        task: "In style.css, change the heading color from blue to purple,then click Preview",
        starterFiles: {
            html: "<h1>My Homepage</h1>\n<p>Welcome to my website!</p>",
            css: "h1 {\n color : blue; \n}",
            js: "",
        },
    },
    {
        id : "interactive-homepage",
        unlockYear: 1995,
        title: "Make Your Page Interactive",
        explanation: "JavaScript can change the page when you click a button.",
        task: "In script.js, replace 'Hello!' with your own message. Then click Preview and press Say Hello.",
        starterFiles: {
            html: "<button id = 'hello-button'>Say Hello</button>\n<p id = 'message'></p>",
            css: "",
            js: `const button = document.querySelector('#hello-button');
const message = document.querySelector('#message');

button.addEventListener('click', () => {
  message.textContent = 'Hello!';
        });`,
        },
    },
];


