import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.scss'
import './styles/_index.scss'
import { Home, Shop, Deck, Decks, NotFound } from './routes'
import { Header } from './components'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/shop'>
          <Shop />
        </Route>
        <Route exact path='/shop/decks'>
          <Decks />
        </Route>
        <Route exact path='/shop/decks/:id'>
          <Deck />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
