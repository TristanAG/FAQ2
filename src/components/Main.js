import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import '../css/App.css'

import Nav from './Nav'
import Home from './Home'
import Product from './Product'

function Main() {
  const user = 'Tristan'

  React.useEffect(() => {
    if (user) {
      const unsubscribe = loadUserPreferences()
    }
  }, [user])

  function loadUserPreferences() {
    console.log('hellyyo')
    // preferences = 'preferences'
  }

  function handleSnapshot(snapshot) {
    // setPreferences(snapshot.data().categories)
  }

  return (
    <Router>
      <div className="app-container">
        <div className="columns">
          <div className="column is-one-fourth">
            <Nav />
          </div>
          <div className="column is-three-quarters">
              {
                <>
                  <Route path="/product/" component={Product} />
                </>
              }
              <Route path="/" exact component={Home} />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default Main
