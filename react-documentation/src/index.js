import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from '../main-concepts/HelloWorld';
import JSXIntro from '../main-concepts/JSXIntro';
import FunctionalComponent from '../main-concepts/FunctionalComponent';
import ClassComponent from '../main-concepts/ClassComponent';
import Comment from '../main-concepts/Comment';
import Clock from '../main-concepts/Clock';
import ActionLink from '../main-concepts/ActionLink';
import Toggle from '../main-concepts/Toggle';
import Greeting from '../main-concepts/Greeting';
import LoginControl from '../main-concepts/LoginControl';
import Mailbox from '../main-concepts/Mailbox';
import Page from '../main-concepts/Page';
import ListItems from '../main-concepts/ListItems';
import NumberList from '../main-concepts/NumberList';
import Blog from '../main-concepts/Blog';
import NameForm from '../main-concepts/NameForm';
import EssayForm from '../main-concepts/EssayForm';
import FlavorForm from '../main-concepts/FlavorForm';
import Reservation from '../main-concepts/Reservation';
import Calculator from '../main-concepts/Calculator';

const root = document.getElementById('root');



// ReactDOM.render(<HelloWorld />, root);
// ReactDOM.render(<JSXIntro />, root);


// function tick () {
//   const element = (
//     <div>
//       <h1>Hello, world</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, root);
// }

// setInterval(tick, 1000);

// ReactDOM.render(
//   <FunctionalComponent name="John" />, root
// )

// function App () {
//   return (
//     <div>
//       <ClassComponent name="Sara" />
//       <ClassComponent name="Cahal" />
//       <ClassComponent name="Edite" />
//     </div>
//   )
// }

// const comment = {
//   author: {
//     name: "Name",
//     avatarUrl: "https://qwe.qwe.qwe"
//   },
//   text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, ducimus?",
//   date: new Date()
// }

// ReactDOM.render(
//   <Comment author={comment.author} date={comment.date} text={comment.text} />, root
// )


// function tick () {
//   ReactDOM.render(<Clock /*date={new Date()}*/ />, root);
// }

// setInterval(tick, 1000);

// ReactDOM.render(<Clock />, root);


// function App () {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//     </div>
//   )
// }

// ReactDOM.render(<App />, root);

// # Handling Events

// ReactDOM.render(<ActionLink />, root);
// ReactDOM.render(<Toggle />, root);


// # Conditional Rendering
// ReactDOM.render(<Greeting isLoggedIn={false} />, root);

// ReactDOM.render(<LoginControl />, root);

// const messages = ['React', 'Re: React', 'Re: Re: React'];

// ReactDOM.render(<Mailbox unreadMessages={messages} />, root)


// ReactDOM.render(
//   <Page />, root
// )

// # Lists and Keys

// ReactDOM.render(<ListItems />, root);


// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(<NumberList numbers={numbers} />, root);

// const posts = [
//   {
//     id: 1,
//     title: 'Hello World',
//     content: 'Welcome to learning React!'
//   },
//   {
//     id: 2,
//     title: 'Installation',
//     content: 'You can install React from npm'
//   }
// ];

// ReactDOM.render(<Blog posts={posts} />, root);

// # Forms

// ReactDOM.render(<NameForm />, root);

// ReactDOM.render(<EssayForm />, root);

// ReactDOM.render(<FlavorForm />, root);
// ReactDOM.render(<Reservation />, root);

// # lifting state up
ReactDOM.render(
  <Calculator />, root
);