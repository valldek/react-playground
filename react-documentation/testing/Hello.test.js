import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Hello from './Hello';

let container = null;

describe('Hello Component Tests', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it ('renders with or without a name', () => {
    act(() => {
      render(<Hello />, container);
    });
    expect(container.textContent).toBe('Hello, stranger!');

    act(() => {
      render(<Hello name="John" />, container)
    });
    expect(container.textContent).toBe('Hello, John!');

    act(() => {
      render(<Hello name="Ann" />, container)
    });
    expect(container.textContent).toBe('Hello, Ann!');
  });
});