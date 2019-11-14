import React from 'react';

const ActionLink = () => {
  function handleClick(evt) {
    evt.preventDefault();
    console.log('Grrrrrrrrrr!!!');
  }

  return (
    <a href="#" onClick={handleClick}>
      Don't touch me!
    </a>
  );
}

export default ActionLink;
