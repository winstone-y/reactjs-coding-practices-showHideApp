// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  }

  toggleFirstName = () => {
    const {showFirstName} = this.state
    if (showFirstName === false) {
      this.setState({
        showFirstName: true,
      })
    } else {
      this.setState({
        showFirstName: false,
      })
    }
  }

  toggleLastName = () => {
    const {showLastName} = this.state
    if (showLastName === false) {
      this.setState({
        showLastName: true,
      })
    } else {
      this.setState({
        showLastName: false,
      })
    }
  }

  render() {
    const {showFirstName, showLastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="title">Show/Hide</h1>
        <div className="body">
          <div className="name-container">
            <button
              type="button"
              onClick={this.toggleFirstName}
              className="btn-name"
            >
              Show/Hide Firstname
            </button>
            <div>{showFirstName && <p className="name">Joe</p>}</div>
          </div>
          <div className="name-container">
            <button
              type="button"
              onClick={this.toggleLastName}
              className="btn-name"
            >
              Show/Hide Lastname
            </button>
            <div>{showLastName && <p className="name">Jonas</p>}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
