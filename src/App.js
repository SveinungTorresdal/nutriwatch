import React from 'react';
import Menu from './Menu'

class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      clicks: 0
    }
  }

  handleClick = e => {
    e.preventDefault()

    this.setState(prev => ({ clicks: prev.clicks+1 }))
  }

  render () {
    return (
      <div>
        <Menu />
        <p>{this.state.clicks}</p>
        <button className="border border-red-100 text-lg bg-red-400 text-white" onClick={this.handleClick}>
          Click
        </button>
      </div>
    )
  }
}

const url = "https://reactjs.org"

const template =  (
  <div className="App bg-gray-50 dark:bg-gray-900 h-100">
  <header className="App-header">
    <Counter />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
  </div>
)

function App() {
  return template
}

export default App;
