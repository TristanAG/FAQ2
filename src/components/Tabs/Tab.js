import React from 'react'

function Tab({ tabActive, tab, handleClick }) {
  return (
    <li className={tabActive === tab && 'is-active'} onClick={() => handleClick(tab)}>
      <a><span>{tab}</span></a>
    </li>
  )
}

export default Tab
