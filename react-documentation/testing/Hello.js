import React from 'react';

export default function Hello(props) {
  if (props.name) {
  return <h1>Hello, {props.name}!</h1>
  }
  return <h1>Hello, stranger!</h1>
}