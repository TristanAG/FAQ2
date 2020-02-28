import React from 'react'

function GeneralInformation({ info }) {
  return (
    <div dangerouslySetInnerHTML={{__html: info}} />
  )
}

export default GeneralInformation

// var content = product.info[0].value.content
// var contentPieces = content.split('</p>')
//
// const productDataPieces = content.split('</p>')
// const cleanedProductData = productDataPieces.map(piece => {
//   return piece.split('').splice(3).join('')
// })
//
// const upc = cleanedProductData[0]
// const webPrice = cleanedProductData[1]
// const caseUpc = cleanedProductData[2]
// const retailPrice = cleanedProductData[3]
// const productImage = cleanedProductData[4].split(': ')[1]
