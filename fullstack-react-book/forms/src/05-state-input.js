import React from 'react';

class Five extends React.Component {
  static displayName = "05-state-input";

  state = {
    names: [],
    name: ''
  };

  onFormSubmit = (evt) => {
    this.setState({
      names: [...this.state.names, this.state.name],
      name: ''
    });
    evt.preventDefault();
  };

  onNameChange = (evt) => {
    this.setState({
      name: evt.target.value
    });
  }

  render () {
    return (
      <div>
        <h1>Sing Up Sheet</h1>

        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.onNameChange}
          />

          <button type="submit">
            Submit
          </button>
        </form>
        <div>
          <h3>Names:</h3>
            <ul>
              {this.state.names.map((name, idx) =>
                <li key={idx}>{name}</li>
              )}
            </ul>
        </div>
      </div>
    );
  };
}

export default Five;