import React from 'react'
import PropTypes from 'prop-types'

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      text: ''
    }
  }

  handleChange(event) {
    this.setState({ text: event.target.value })
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.text}/>
        Welcome {this.state.text}
      </div>
    )
  }
}

Welcome.propTypes = {
  text: PropTypes.string.isRequired
}

export default Welcome
