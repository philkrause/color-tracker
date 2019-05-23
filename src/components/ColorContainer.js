import React, { Component } from 'react'
import Header from './Header'

class ColorContainer extends Component {
  state = {
    hue: Math.ceil(Math.random() * 360),
    sat: Math.ceil(Math.random() * 100),
    lit: Math.ceil(Math.random() * 100)
  }

  hueF = event => {
    this.setState({
      hue: event.target.value
    })
  }

  satF = event => {
    this.setState({
      sat: event.target.value
    })
  }
  litF = event => {
    this.setState({
      lit: event.target.value
    })
    console.log(this.state.lit)
  }

  render() {
    const colorChange = {
      color: `hsl(${this.state.hue},${this.state.sat}%,${this.state.lit}%)`
    }

    return (
      <>
        <Header
          hue={this.state.hue}
          sat={this.state.sat}
          lit={this.state.lit}
        />
        <section className="color-container">
          <p>
            <input
              onChange={this.hueF}
              type="range"
              id="hue"
              name="hue"
              min="0"
              max="360"
              value={this.state.hue}
            />
            <label style={colorChange} for="hue">
              Hue
            </label>
          </p>
          <p>
            <input
              onChange={this.satF}
              type="range"
              id="sat"
              name="sat"
              min="0"
              max="100"
              value={this.state.sat}
            />
            <label style={colorChange} for="sat">
              Sat
            </label>
          </p>
          <p>
            <input
              onChange={this.litF}
              type="range"
              id="lit"
              name="lit"
              min="0"
              max="100"
              value={this.state.lit}
            />
            <label style={colorChange} for="lit">
              Lit
            </label>
          </p>
        </section>
      </>
    )
  }
}

export default ColorContainer
