import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Userpage from './components/Userpage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/User/:id' component={Userpage} />
      </Switch>
    </Router>
  )
}

export default App;
