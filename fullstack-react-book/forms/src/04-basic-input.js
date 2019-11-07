import React from 'react';

class Four extends React.Component {
  static displayName = "04-basic-input";

  state = {
    names: []
  };

  onFormSubmit = (evt) => {
    this.setState({
      names: [...this.state.names, this.refs.name.value]
    });
    this.refs.name.value = '';
    evt.preventDefault();
  };

  render () {
    return (
      <div>
        <h1>Sing Up Sheet</h1>

        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Name"
            ref="name"
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

export default Four;