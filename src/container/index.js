import React from 'react'
import { StackNavigator } from 'react-navigation'

import Home from './home'

let AppStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  }
})

export default AppStack
