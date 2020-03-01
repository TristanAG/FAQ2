import React from 'react'

function Images({ images }) {
  return (
    <div>
      <img src={images} style={{width: '100%'}}/>
    </div>
  )
}

export default Images
