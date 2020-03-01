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
        {items.items.map(item => {
          return (
            <li>
              <Link
                to={{
                  pathname: '/product',
                  state: {
                    itemUrl: item.meta.detail_url,
                    itemName: item.name
                  }
              }}>
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default NavOption
