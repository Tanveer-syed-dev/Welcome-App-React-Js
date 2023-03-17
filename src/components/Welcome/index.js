// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  onSubscribe = () => {
    console.log(this.state)

    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  onButtonText = () => {
    const {isSubscribe} = this.state
    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.onButtonText()
    return (
      <div className="container">
        <h1 className="welcome-text">Welcome</h1>
        <p className="disc">Thank you! Happy Learning</p>
        <button className="button" type="button" onClick={this.onSubscribe}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
