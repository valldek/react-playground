import React from 'react';

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;

  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length &&
        <h2>
          You have {unreadMessages.length} unread Messages
        </h2>
      }
    </div>
  )
}

export default Mailbox;
