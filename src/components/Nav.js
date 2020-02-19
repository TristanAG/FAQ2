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
        <Link to={{pathname: '/'}}>
          <img src="https://www.nordicnaturals.com/static/version1581543764/frontend/NordicNaturals/default/en_US/images/logo.png" style={{width: '140px'}}/>
        </Link>
      </p>
      <ul class="menu-list">
        <li><a>Search</a></li>
      </ul>
      <p class="menu-label">
        Products
      </p>
      <ul class="menu-list">
        <li>
          <li><a>Omega-3s</a></li>
          {/* <ul>
            <li><Link to={{pathname: '/product', productName: 'Ultimate Omega 333X', dataRef: 'http://datarefurl.com'}}>Ultimate Omega 333X</Link></li>
          </ul> */}
          <li><a>Probiotics & More</a></li>
          <li><a>Vitamins & More</a></li>
          <li><a>Gummies</a></li>
        </li>
      </ul>

      <p class="menu-label">
        Bulks
      </p>
      <ul class="menu-list">
        <li>
          <li><a>Soft Gels</a></li>
          <ul>
            <li><Link to={{pathname: '/product', productName: 'Nordic Flora Kids Probiotic Pixies', dataRef: 'http://datarefurl.com'}}>Nordic Flora Kids Probiotic Pixies</Link></li>
          </ul>
          <li><a>Capsules</a></li>
          <li><a>Gummies</a></li>
          <li><a>Liquid</a></li>
        </li>
      </ul>

      <p class="menu-label">
        Raw Materials
      </p>
      <ul class="menu-list">
        <li>
          <li><a>Actives</a></li>
          {/* <ul>
            <li><Link to={{pathname: '/product', productName: 'Ultimate Omega 333X', dataRef: 'http://datarefurl.com'}}>Ultimate Omega 333X</Link></li>
          </ul> */}
          <li><a>Non-Actives</a></li>
        </li>
      </ul>
      <p class="menu-label">
        Nordic Standards
      </p>
      <ul class="menu-list">
        <li>
          <li><a>Nordic Standards</a></li>
        </li>
      </ul>


      {/* <li><a>Bulks</a></li>
      <li><a>Raw Materials</a></li>
      <li><a>Nordic Standard</a></li> */}
    </aside>
  )
}

export default Nav
