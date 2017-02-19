import React from 'react'
import ReactDom from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ExampleApp from './ExampleApp'


ReactDom.render(
  <ExampleApp />
  , document.getElementById('container')
)
