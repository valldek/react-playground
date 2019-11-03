import React from 'react';

function Comment (props) {

  return (
    <div className="comment">
      {/* <div className="user-info"> */}
        {/* <img
          src={props.author.avatarUrl}
          alt={props.author.name} className="avatar"
        /> */}
        {/* <Avatar user={props.author} />
        <div className="user-info-name">
          {props.author.name}
        </div> */}
      <UserInfo user={props.author} />
      <div className="comment-text">
        {props.text}
      </div>
      <div className="comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function Avatar (props) {
  return (
    <img
      src={props.user.avatarUrl}
      alt={props.user.name}
      className="avatar"/>
  )
}

function UserInfo (props) {
  return (
    <div className="user-info">
      <Avatar user={props.user} />
      <div className="user-info-name">
       {props.user.name}
      </div>
    </div>
  );
}

function formatDate(date) {
  return date.toLocaleDateString();
}

export default Comment;