import React from 'react';

class Six extends React.Component {
  static displayName = "06-state-input-multi";

  state = {
    people: [],
    fields: {
      name: '',
      email: ''
    }
  };

  onFormSubmit = (evt) => {
    const people = [...this.state.people, this.state.fields];
    const fields = {
      name: '',
      email: ''
    }
    this.setState({
      people,
      fields
    });

    evt.preventDefault();
  };

  onInputChange = (evt) => {
    const fields = Object.assign({}, this.state.fields);
    fields[evt.target.name] = evt.target.value
    this.setState({
      fields
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
            name="name"
            value={this.state.fields.name}
            onChange={this.onInputChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.fields.email}
            onChange={this.onInputChange}
          />
          <button type="submit">
            Submit
          </button>
        </form>
        <div>
          <h3>Names:</h3>
            <ul>
              {this.state.people.map(({name, email}, idx) =>
                <li key={idx}>{name} ({email})</li>
              )}
            </ul>
        </div>
      </div>
    );
  };
}

export default Six;