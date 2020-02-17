import React from 'react'
import { Link } from "react-router-dom"
import Product from './Product'
// import { FirebaseContext } from '../firebase'

function Nav() {
  // const { user, firebase } = React.useContext(FirebaseContext)
  const [preferences, setPreferences] = React.useState({})
  const [isActive, setIsActive] = React.useState(false)

  function closeNavOnMobile() {
    setIsActive(false)
  }

  return (
    <aside class="menu">
      <p class="menu-label">
        <img src="https://www.nordicnaturals.com/static/version1581543764/frontend/NordicNaturals/default/en_US/images/logo.png" style={{width: '140px'}}/>
      </p>
      <ul class="menu-list">
        <li><a>Search</a></li>
      </ul>
      <p class="menu-label">
        Nordic FAQs
      </p>
      <ul class="menu-list">
        <li>Products</li>
        <li>
          <ul>
            <li><a>Actives</a></li>
            <ul>
              {/* <li><Link to="/product" query={{ the: 'query' }}>Probiotic Pixies</Link></li> */}
              <li><Link to="/product">Ultimate Omega 2X</Link></li>
              <li><Link to={{pathname: '/product', productName: 'Ultimate Omega 333X', dataRef: 'http://datarefurl.com'}}>Ultimate Omega 333X</Link>
              </li>
            </ul>
            <li><a>Non-Actives</a></li>
          </ul>
        </li>
        <li><a>Bulks</a></li>
        <li><a>Raw Materials</a></li>
        <li><a>Nordic Standard</a></li>
      </ul>
    </aside>
  )
}

export default Nav
