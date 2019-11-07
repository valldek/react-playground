import React from 'react';
import isEmail from 'validator/lib/isEmail';

class Seven extends React.Component {
  static displayName = "07-basic-validation";

  state = {
    fields: {
      email: '',
      name: ''
    },
    fieldErrors: {

    },
    people: []
  }

  onInputChange = (evt) => {
    const fields = Object.assign({}, this.state.fields)
    fields[evt.target.name] = evt.target.value;
    this.setState({
      fields
    });
  }

  onFormSubmit = (evt) => {
    const person = this.state.fields;
    const people = [...this.state.people];
    const fieldErrors = this.validate(person);

    this.setState({
      fieldErrors
    });

    evt.preventDefault();

    if (Object.keys(fieldErrors).length) return;

    const fields = {
      name: '',
      email: '',
    }

    this.setState({
      fields,
      people: [...people, person]
    });
  }

  validate = person => {
    const errors = {};
    if (!person.name) errors.name = 'Name Required';
    if (!person.email) errors.email = 'Email Required';
    if (person.email && !isEmail(person.email)) errors.email = 'Invalid Email';
    return errors;
  };

  render () {
    return (
      <div>
        <h1>Sign Up Sheet</h1>

        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.fields.name}
            onChange={this.onInputChange}
          />
          <span style={{color: 'red'}}>
            {this.state.fieldErrors.name}
          </span>
          <br/>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.fields.email}
            onChange={this.onInputChange}
          />
          <span style={{color: 'red'}}>
            {this.state.fieldErrors.email}
          </span>
          <br/>
          <button type="submit">Submit</button>
          <div>
            <h3>People</h3>
            <ul>
              {this.state.people.map(({name, email}, idx) =>
                <li key={idx}>{name} ({email})</li>
              )}
            </ul>
          </div>
        </form>
      </div>
    );
  };
}

export default Seven;
