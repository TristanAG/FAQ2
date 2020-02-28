import React from 'react'

function GeneralInformation({ info }) {
  return (
    <div dangerouslySetInnerHTML={{__html: info}} />
  )
}

export default GeneralInformation
