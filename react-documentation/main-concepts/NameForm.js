import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      value: evt.target.value
    })
  }

  handleSubmit(evt) {
    alert(`A name was submitted: ${this.state.value}`);
    evt.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="text-input">
          Name
        </label>
        <input type="text" id="text-input" value={this.state.value} onChange={this.handleChange}/>
      </form>
    )
  }
}

export default NameForm;
