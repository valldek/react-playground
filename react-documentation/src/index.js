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
ReactDOM.render(<Toggle />, root);