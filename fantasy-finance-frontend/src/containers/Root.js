import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../App'
import PageNotFound from '../components/PageNotFound'
import Login from '../components/Login'
import Home from './Home'

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={App}/>
        <Route path="/login" component={Login}/>
        <Route path="/home" component={Home}/>
        <Route path="/*" component={PageNotFound} />
        </Switch>
      </Router>
  </Provider>
)
Root.propTypes = {
  store: PropTypes.object.isRequired
}
export default Root
