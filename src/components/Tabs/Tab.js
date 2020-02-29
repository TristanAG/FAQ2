import React from 'react'

function Tab({ tabActive, tab, handleClick }) {

  // const tabs = tab.split('-')
  //
  //
  //
  //
  //
  // const firstString = tab.split('-')[0]
  // const secondString = tab.split('-')[1]
  //
  // const sanitizedFirstString = Sanitize(firstString)
  //
  // let sanitizedSecondString = ''
  //
  // if(secondString !== undefined) {
  //   sanitizedSecondString = Sanitize(secondString)
  // } else {
  //   sanitizedSecondString = ''
  // }
  //

  //return word with first letter capitalized
  function Sanitize(word) {
    return word.split('').map((letter, i) => (
        i === 0 ? letter.toUpperCase() : letter
      )).join('')
  }

  return (
    // <li className={tabActive === tab && 'is-active'} onClick={() => handleClick(tab)}>
    //   <a><span>{sanitizedFirstString + ' ' + sanitizedSecondString}</span></a>
    // </li>

    <li className={tabActive === tab && 'is-active'} onClick={() => handleClick(tab)}>
      <a><span>{tab}</span></a>
    </li>

  )
}

export default Tab
