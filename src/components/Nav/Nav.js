import React from 'react'
import { Link } from "react-router-dom"
import Product from '../Product/Product'
import NavOption from './NavOption'

function Nav() {
  const [preferences, setPreferences] = React.useState({})
  const [isActive, setIsActive] = React.useState('')
  const [activeMenuItem, setActiveMenuItem] = React.useState('')

  const [products, setProducts] = React.useState({})
  const [productsCount, setProductsCount] = React.useState(0)

  const [bulks, setBulks] = React.useState({})
  const [bulksCount, setBulksCount] = React.useState(0)

  const [rawMaterials, setRawMaterials] = React.useState({})
  const [rawMaterialsCount, setRawMaterialsCount] = React.useState(0)

  const omega3sNavOption = 'omega-3s-nav-option'
  const softGelsNavOption = 'soft-gels-nav-option'

  React.useEffect(() => {
    loadBulkData()
    loadProductData()
    loadRawMaterialData()
  }, []);

  function loadBulkData() {
    const url = 'https://faqs.devapps.nordicnaturals.com/api/pages/?type=faqs.BulkGood'
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setBulks(json.items)
        setBulksCount(json.items.length)
      })
  }

  function loadRawMaterialData() {
    const url = 'https://faqs.devapps.nordicnaturals.com/api/pages/?type=faqs.RawMaterial'
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setRawMaterials(json.items)
        setRawMaterialsCount(json.items.length)
      })
  }

  function loadProductData() {
    const url = 'https://faqs.devapps.nordicnaturals.com/api/pages/?type=faqs.FinishedGood'
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setProducts(json.items)
        setProductsCount(json.items.length)
      })
  }

  function handleNavClick(navClick) {
    if (activeMenuItem === navClick) {
      setIsActive('')
      setActiveMenuItem('')
    } else {
      setIsActive(navClick)
      setActiveMenuItem(navClick)
    }
  }


  return (
    <aside className="menu">
      <p className="menu-label">
        <Link to={{pathname: '/'}}>
          <img src="https://www.nordicnaturals.com/static/version1581543764/frontend/NordicNaturals/default/en_US/images/logo.png" style={{width: '140px'}}/>
        </Link>
      </p>
      <ul className="menu-list">
        <li><a>Search</a></li>
      </ul>
      <p className="menu-label">
        Products
      </p>
      <ul className="menu-list">
        <li>
          <li><a>Omega-3s</a></li>
          <li><a>Probiotics & More</a></li>
          <li><a>Vitamins & More</a></li>
          <li><a>Gummies</a></li>
          {productsCount &&
            <NavOption
              optionTitle='ProductsUncategorized'
              option='products-uncategorized'
              handleNavClick={handleNavClick}
              items={products}
              isActive={isActive}
              itemCount={productsCount}
            />
          }
        </li>
      </ul>

      <p className="menu-label">
        Bulks
      </p>
      <ul className="menu-list">
        <li>
          <li><a>Capsules</a></li>
          <li><a>Gummies</a></li>
          <li><a>Liquid</a></li>
          {bulksCount &&
            <NavOption
              optionTitle='BulksUncategorized'
              option='bulks-uncategorized'
              handleNavClick={handleNavClick}
              items={bulks}
              isActive={isActive}
              itemCount={bulksCount}
            />
          }
        </li>
      </ul>

      <p className="menu-label">
        Raw Materials
      </p>
      <ul className="menu-list">
        <li>
          <li><a>Actives</a></li>
          <li><a>Non-Actives</a></li>
          {rawMaterialsCount &&
            <NavOption
              optionTitle='RawMaterialsUncategorized'
              option='raw-materials-uncategorized'
              handleNavClick={handleNavClick}
              items={rawMaterials}
              isActive={isActive}
              itemCount={rawMaterialsCount}
            />
          }
        </li>
      </ul>
      <p className="menu-label">
        Nordic Standards
      </p>
      <ul className="menu-list">
        <li>
          <li><a>Nordic Standards</a></li>
        </li>
      </ul>
    </aside>
  )
}

export default Nav
