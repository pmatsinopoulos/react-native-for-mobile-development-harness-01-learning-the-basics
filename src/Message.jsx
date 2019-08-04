import React from 'react'
import PropTypes from 'prop-types'

class Message extends React.Component {
  static defaultProps = {
    text: "Hello World from React Native with a text property and default value (Message is a class component)"
  }

  render() {
    return (
      <div>
        {this.props.text}
      </div>
    )
  }
}

Message.propTypes = {
  text: PropTypes.string.isRequired
}

export default Message