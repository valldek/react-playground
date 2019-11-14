import React from 'react';
import {toCelsius, toFahrenheit, tryConvert} from './temparetureHelpers';

import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: '',
      scale: 'c'
    }

    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(temperature) {
    this.setState({
      scale: 'c',
      temperature
    });
  }

  handleFahrenheitChange(temperature) {
    this.setState({
      scale: 'f',
      temperature
    });
  }

  handleChange(evt) {
    this.setState({
      temperature: evt.target.value
    })
  }

  render() {
    const celsius = this.state.scale === 'f' ? tryConvert(this.state.temperature, toCelsius) : this.state.temperature;
    const fahrenheit = this.state.scale === 'c' ? tryConvert(this.state.temperature, toFahrenheit): this.state.temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict
          celsius={parseFloat(celsius)}
        />
      </div>
    );
  }
}

export default Calculator;
