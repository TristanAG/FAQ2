import React from 'react'
import { Link } from "react-router-dom"

function NavOption({ option, handleNavClick, items, isActive, itemCount, itemType, optionTitle }) {
  return(
    <>
      <li
        onClick={() => handleNavClick(option)}
        className={isActive === option && 'is-active has-background-white-ter'}
      >
        <a>{optionTitle} <span className="tag is-info is-pulled-right">{itemCount}</span></a>
      </li>
      <ul className={isActive === option ? 'is-active' : 'hidden'}>
        {items.items.map(item => (
          <li>
            <Link to={{
              pathname: '/' + itemType +'',
              itemName: item.name,
              dataRef: 'http://datarefurl.com'
            }}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default NavOption
