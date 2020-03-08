import React from 'react'

function Tab({ tabActive, tab, handleClick }) {

  //return word with first letter capitalized
  function Sanitize(word) {
    return word.split('').map((letter, i) => (
        i === 0 ? letter.toUpperCase() : letter
      )).join('')
  }

  return (
    <li className={tabActive === tab ? 'is-active' : ''} onClick={() => handleClick(tab)}>
      <a><span>{tab}</span></a>
    </li>

  )
}

export default Tab
