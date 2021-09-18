import cssLogo from '../../../image/about/TechnologiesLogo/cssLogo.png'
import javascriptLogo from '../../../image/about/TechnologiesLogo/javascriptLogo.png'
import reactjsLogo from '../../../image/about/TechnologiesLogo/reactjsLogo.png'
import nodejsLogo from '../../../image/about/TechnologiesLogo/nodejsLogo.png'
import mongodbLogo from '../../../image/about/TechnologiesLogo/mongodbLogo.png'
export const techUseItems = [
    {
        logo: cssLogo,
        title: 'CSS',
        description: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file which reduces complexity and repetition in the structural content as well as enabling the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.",
        url: 'https://en.wikipedia.org/wiki/CSS'
    },
    {
        logo: javascriptLogo,
        title: 'JavaScript',
        description: "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions. Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. Over 97% of websites use it client-side for web page behavior, often incorporating third-party libraries. Most web browsers have a dedicated JavaScript engine to execute the code on the user's device. As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).",
        url: 'https://en.wikipedia.org/wiki/JavaScript'
        
    },
    {
        logo: reactjsLogo,
        title: 'ReactJS',
        description: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.",
        url: 'https://reactjs.org'
    },
    {
        logo: nodejsLogo,
        title: 'NodeJS',
        description: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a 'JavaScript everywhere' paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts. Though .js is the standard filename extension for JavaScript code, the name 'Node.js' doesn't refer to a particular file in this context and is merely the name of the product.",
        url: 'https://nodejs.org/en/about/'
    },
    {
        logo: mongodbLogo,
        title: 'MongoDB',
        description: "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL).",
        url: 'https://www.mongodb.com'
    },
    
]