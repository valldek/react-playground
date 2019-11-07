import React from 'react';

class One extends React.Component {

  onGreatClick = (evt) => {
    console.log(`User clicked button: ${evt.target.value}`)
  }

  onAmazingClick = (evt) => {
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
          onClick={this.onGreatClick}
        >Great
        </button>
        <button
          type="button"
          name="button-2"
          value="amazing"
          onClick={this.onAmazingClick}
        >Amazing
        </button>
      </div>
    )
  }
}

export default One;