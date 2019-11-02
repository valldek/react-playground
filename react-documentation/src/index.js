import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from '../main-concepts/HelloWorld';
import JSXIntro from '../main-concepts/JSXIntro';

const root = document.getElementById('root');

// ReactDOM.render(<HelloWorld />, root);
// ReactDOM.render(<JSXIntro />, root);


function tick () {
  const element = (
    <div>
      <h1>Hello, world</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, root);
}

setInterval(tick, 1000);
