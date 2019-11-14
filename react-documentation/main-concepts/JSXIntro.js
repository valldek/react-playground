import React from 'react';

const JSXIntro = () => {
  const name = 'John Perez';
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  }

  function formatName (user) {
    return user.firstName + ' ' + user.lastName;
  }

  function getGreeting (user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

  return (
    // <h1>Hello, {name}</h1>
    <h1>{getGreeting(user)}</h1>
  );
}

export default JSXIntro;
