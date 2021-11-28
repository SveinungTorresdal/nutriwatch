import React from 'react';
import Menu from './Menu'
import Button from './Button'

const url = "https://reactjs.org"

const template =  (
  <div className="App bg-gray-50 dark:bg-gray-900 h-100">
  <header className="App-header">
    <Menu />
    <Button>
      Hello
    </Button>
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
