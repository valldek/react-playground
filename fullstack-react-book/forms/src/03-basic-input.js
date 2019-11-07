import React from 'react';

class Three extends React.Component {
  static displayName = "03-basic-input";

  onFormSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.refs.name.value);
  }

  render () {
    return (
      <div>
        Sing Up Sheet

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
      </div>
    )
  }
}

export default Three;