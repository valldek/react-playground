import React from 'react';

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'coconut'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit (evt) {
    alert(`Yout favorite flavor is: ${this.state.value}`)
    evt.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="form-select">
          Pick your favorite flavor:
        </label>
        <select id="form-select" value={this.state.value} onChange={this.handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <button type="submit" onSubmit={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default FlavorForm;
