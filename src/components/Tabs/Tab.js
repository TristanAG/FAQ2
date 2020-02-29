import React from 'react'

function Tab({ tabActive, tab, handleClick }) {

  const firstString = tab.split('-')[0]
  let secondString = tab.split('-')[1]

  // if(secondString === undefined) {
  //   secondString = 'boobs'
  // }

  console.log(firstString, secondString)

  const sanitizedFirstString = firstString.split('').map((letter, i) => (
    i === 0 ? letter.toUpperCase() : letter
  )).join('')

  // console.log(sanitizedFirstString)

  let sanitizedSecondString = ''
  if(secondString !== undefined) {
    sanitizedSecondString = secondString.split('').map((letter, i) => (
      i === 0 ? letter.toUpperCase() : letter
    )).join('')
  } else {
    sanitizedSecondString = ''
  }

  console.log(sanitizedFirstString + ' ' + sanitizedSecondString)

  return (
    <li className={tabActive === tab && 'is-active'} onClick={() => handleClick(tab)}>
      <a><span>{sanitizedFirstString + ' ' + sanitizedSecondString}</span></a>
    </li>
  )
}

export default Tab
