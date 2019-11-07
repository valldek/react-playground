import React from 'react';

class Two extends React.Component {
  static displayName = "02-basic-button";

  onButtonClick = (evt) => {
    console.log(`User clicked button: ${evt.target.value}`)
  }

  render() {
    return (
      <div>
        <h1>What do you think of React?</h1>
        <button
          type="button"
          name="button-1"
          value="great"
          onClick={this.onButtonClick}
        >Great
        </button>
        <button
          type="button"
          name="button-2"
          value="amazing"
          onClick={this.onButtonClick}
        >Amazing
        </button>
      </div>
    )
  }
}

export default Two;