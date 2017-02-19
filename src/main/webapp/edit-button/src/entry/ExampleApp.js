import React, { Component } from 'react'
import EditBtn from './apps/EditBtn'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
class ExampleApp extends Component {
  static defualtProps = {
  }
  static propTypes = {
  }
  constructor(props) {
    super(props)

  }
  onChange = (selectedArr) => {
    console.log(selectedArr)
  }
  render() {

    return (
      <MuiThemeProvider>
        <div>
          <EditBtn />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default ExampleApp
