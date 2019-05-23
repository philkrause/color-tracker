import React, { Component } from 'react'

class Header extends Component {
  render() {
    const colorHeader = {
      color: `hsl(${this.props.hue},${this.props.sat}%,${this.props.lit}%)`
    }
    return (
      <>
        <section style={colorHeader} className="head">
          <h1>
            <i className="fas fa-random" />
            Color Tracker
          </h1>
        </section>
      </>
    )
  }
}

export default Header
