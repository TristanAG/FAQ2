import React from 'react'
import { Link } from "react-router-dom"

function NavOption({ option, handleNavClick, items, isActive, itemCount, itemType, optionTitle }) {
  function handleLinkClick(option) {
    setTimeout(function(){ window.scrollTo(0,0) }, 180);
  }

  return(
    <>
      <li
        onClick={() => handleNavClick(option)}
        className={isActive === option && 'is-active has-background-white-ter'}
      >
        <a>{optionTitle} <span className="tag is-info is-pulled-right">{itemCount}</span></a>
      </li>
      <ul className={isActive === option ? 'is-active' : 'hidden'}>
        {items.map(item => {
          return (
            <li>
              <Link
                to={{
                  pathname: '/product',
                  state: {
                    itemUrl: item.meta.detail_url,
                    itemName: item.title
                  }
                }}
                onClick={handleLinkClick}
              >
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default NavOption
