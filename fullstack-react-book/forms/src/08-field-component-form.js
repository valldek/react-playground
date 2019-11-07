import React from 'react';
import isEmail from 'validator/lib/isEmail';
import Field from './08-field-component-field';

class Eight extends React.Component {
  static displayName = '08-field-component-form';

  state = {
    fields: {
      name: '',
      email: ''
    },
    fieldErrors: {},
    people: []
  };

  onInputChange = ({name, value, error}) => {
    const fields = Object.assign({}, this.state.fields);
    const fieldErrors = Object.assign({}, this.state.fieldErrors);

    fields[name] = value;
    fieldErrors[name] = error;

    this.setState({fields, fieldErrors});
  };

  onFormSubmit = (evt) => {
    const people = this.state.people;
    const person = this.state.fields;

    evt.preventDefault();

    if (this.validate()) return;

    this.setState({
      people: [...people, person],
      fields: {
        name: '',
        email: ''
      }
    });

  };

  validate = () => {
    const person = this.state.fields;
    const fieldErrors = this.state.fieldErrors;
    const errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);

    if (!person.name) return true;
    if (!person.email) return true;
    if (errMessages.length) return true;

    return false;
  };


  render() {
    return (
      <div>
        <h1>Sign Up Sheet</h1>
        <form onSubmit={this.onFormSubmit}>
          <Field
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.fields.name}
            onChange={this.onInputChange}
            validate={val => (val ? false : 'Name Required')}
          />
          <br/>

          <Field
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.fields.email}
            onChange={this.onInputChange}
            validate={val => (isEmail(val) ? false : 'Invalid Email')}
          />
          <br/>

          <button
            type="submit"
            disabled={this.validate()}
          >Submit</button>
        </form>
        <div>
          <h3>People</h3>
          <ul>
            {this.state.people.map(({name, email}, idx) => <li key={idx}>{name} ({email})</li>)}
          </ul>
        </div>
      </div>
    )
  }
}

export default Eight;
