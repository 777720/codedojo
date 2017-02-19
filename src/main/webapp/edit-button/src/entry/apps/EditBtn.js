import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit.js'
import SaveIcon from 'material-ui/svg-icons/navigation/check.js'
import { grey600, teal800, grey100, yellow700 } from 'material-ui/styles/colors'

class EditBtn extends React.Component {
  constructor(props) {
		super(props)
		this.state = {
			isOpenInput:false
		}
	}
  static propsTypes = {
    headLineTitle: PropTypes.string,
		clickFn: PropTypes.func,
		style: PropTypes.object,
		data: PropTypes.string,
		saveScoreFn: PropTypes.func,
	}
  static defaultProps = {
    headLineTitle: "标题文字",
    data:"待改变的文字内容"
  };
  getEditFouces = () => {
		console.log(this.refs.score_input);
		this.refs.score_input.handleInputFocus()

	}
	handleInputFocus = () => {
		this.setState({
			isOpenInput: true
		})
	}
	handleInputBlur = () => {
		this.setState({
			isOpenInput:false
		})
	}
	handleSaveIcon = () => {
		const { saveScoreFn } = this.props
		const newScore = this.refs.score_input.input.value
		saveScoreFn(newScore)
		this.setState({
			isOpenInput: false
		})
	}
  render () {
    const { clickFn, style, data, saveScoreFn } = this.props
		const { isOpenInput } = this.state
		const showBtnStyle={display:'inline',marginTop:'10px'}
		const closeBtnStyle={display:'none',marginTop:'10px'}
		return (
			<div>
				<div style={{float:'left',marginTop:'0px'}} className="level-one">
					总分:<TextField
								id="edit-score"
								defaultValue={data}
								style={{'width':'30px'}}
								underlineStyle={{borderColor: grey100}}
								ref="score_input"
								onBlur={this.handleInputBlur}
								onFocus={this.handleInputFocus}
							/>
							<div className="level-two">
								<EditIcon
									color = { grey600 }
									hoverColor = { teal800 }
									style = { isOpenInput ? closeBtnStyle : showBtnStyle }
									onClick = { this.getEditFouces }
								/>
							  <SaveIcon
									hoverColor = { teal800 }
									style = {isOpenInput ? showBtnStyle : closeBtnStyle}
									onClick={ this.handleSaveIcon }
							  />
							</div>
				</div>

			</div>
		)
  }
}

export default EditBtn;
