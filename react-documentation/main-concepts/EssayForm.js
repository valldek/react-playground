import React from 'react';

class EssayForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: 'Please write an essay about your favorite DOM element'
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
    alert(`An essay was submitted: ${this.state.value}`);
    evt.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="form-textarea">
          Essay:
        </label>
        <textarea id="form-textarea" value={this.state.value} onChange={this.handleChange}></textarea>
        <button type="submit" onSubmit={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default EssayForm;
