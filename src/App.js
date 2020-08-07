import React, {Component} from 'react'
import axios from 'axios'
import chuckMan from './chuckMan.jpg'
class App extends Component {
  state = {
    quote: ''
  }
  componentDidMount =() => {
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(res => {
        console.log('response', res.data.value)
        this.setState({
          quote: res.data.value
        })
      })
  }
  getNewFact = () => {
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(res => {
        console.log('response', res.data.value)
        this.setState({
        quote: res.data.value
      })
    })
  }
  change = (e) => {
    e.target.style.background = 'yellow';
  }

  leave = (e) => {
    e.target.style.background= 'teal';
  }

  render () {
    return(
      <div>
      <h1>Chuck Norris Facts</h1>
      <img src={chuckMan} alt="chuck is here" />
      <p className='fool'>{this.state.quote}</p>
    <button onClick={ this.getNewFact} onMouseOver={this.change} onMouseLeave={this.leave}>get new fact</button>
    </div>
    )
  }
}
export default App