// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
    firstClass: '',
    lastClass: '',
  }

  toggleFirstName = () => {
    const {showFirstName} = this.state
    if (showFirstName === false) {
      this.setState({
        showFirstName: true,

        firstClass: 'name',
      })
    } else {
      this.setState({
        showFirstName: false,
        firstClass: 'hide',
      })
    }
  }

  toggleLastName = () => {
    const {showLastName} = this.state
    if (showLastName === false) {
      this.setState({
        showLastName: true,
        lastClass: 'name',
      })
    } else {
      this.setState({
        showLastName: false,
        lastClass: 'hide',
      })
    }
  }

  render() {
    const {firstClass, lastClass} = this.state

    return (
      <div className="bg-container">
        <h1 className="title">Show/Hide</h1>
        <div>
          <div className="name-container">
            <button
              type="button"
              onClick={this.toggleFirstName}
              className="btn-name"
            >
              Show/Hide Firstname
            </button>
            <div>
              <p className={firstClass}>Joe</p>
            </div>
          </div>
          <div className="name-container">
            <button
              type="button"
              onClick={this.toggleLastName}
              className="btn-name"
            >
              Show/Hide Lastname
            </button>
            <div>
              <p className={lastClass}>Jonas</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
