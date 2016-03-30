import React from 'react-native'
import SideMenu from 'react-native-side-menu'

const { Component, Dimensions, PropTypes } = React

const deviceScreen = Dimensions.get('window')

class FacebookStyle extends Component {
  render() {
    return (
      <SideMenu {...this.props}>
        {this.props.children}
      </SideMenu>
    )
  }
}

class AirBnbStyle extends Component {
  static propTypes = {
    openMenuOffset: PropTypes.number
  }
  static defaultProps = {
    openMenuOffset: deviceScreen.width * 2 / 3
  }
  constructor(props) {
    super(props)
    this.animationStyle = this.animationStyle.bind(this)
  }

  animationStyle(value) {
    const { openMenuOffset } = this.props
    return {
      transform: [{
        translateX: value.interpolate({
          inputRange: [0, openMenuOffset],
          outputRange: [0, openMenuOffset - 70]
        })
      }, {
        scaleX: value.interpolate({
          inputRange: [0, openMenuOffset],
          outputRange: [1, 0.7]
        })
      }, {
        scaleY: value.interpolate({
          inputRange: [0, openMenuOffset],
          outputRange: [1, 0.7]
        })
      }]
    }
  }

  render() {
    return (
      <SideMenu {...this.props} animationStyle={this.animationStyle}>
        {this.props.children}
      </SideMenu>
    )
  }
}

export default {
  FacebookStyle,
  AirBnbStyle
}
