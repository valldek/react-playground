import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.props.onTemperatureChange(evt.target.value);
  }

  render() {
    const scale = this.props.scale;

    return(
      <fieldset>
        <legend>
          Enter tempearture in {scaleNames[scale]}:
        </legend>
        <input
          type="text"
          value={this.props.temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    )
  }
}

export default TemperatureInput;
