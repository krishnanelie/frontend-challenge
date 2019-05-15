import 'babel-polyfill'
import 'react-app-polyfill/ie9'

import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import React from 'react'
import ReactDOM from 'react-dom'

import { LoginCallback } from 'views'
import { PrivateRoute } from 'components'
import App from 'App'
import registerServiceWorker from 'registerServiceWorker'
import Busca from 'views/Busca'


const customHistory = createBrowserHistory()
customHistory.listen(() => window.tracker.pageView())

ReactDOM.render(
  <Router history={customHistory}>
    <Switch>
      <Route path="/login/callback" component={LoginCallback} />
      <PrivateRoute path="/" exact={true} component={App} />
      <PrivateRoute path="/busca" component={Busca} />

      {/* <PrivateRoute path='*' component={ComponenteDePagina404} /> */}
    </Switch>
  </Router>,
  document.getElementById('root'),
)

registerServiceWorker()
