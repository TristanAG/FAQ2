import React from 'react'
import Tab from './Tab'
import TabContent from './TabContent'

function Tabs({ info, faqs, tabList }) {
  const [tabActive, setTabActive] = React.useState('general-information')
  const [activeTabItem, setActiveTabItem] = React.useState('')

  function handleClick(navClick) {
    if (activeTabItem !== navClick) {
      setTabActive(navClick)
      setActiveTabItem(navClick)
    }
  }

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabList.map(tab => (
            <Tab tabActive={tabActive} handleClick={handleClick} tab={tab} />
          ))}
        </ul>
      </div>

      <TabContent
        tabs={['general-information', 'faqs', 'images', 'revision-version']}
        tab={tabActive}
        info={info[0].value.content}
        faqs={faqs}
        itemType={'product'}
      />
    </>
  )
}

export default Tabs

{/* <div className="tabs is-boxed">
  <ul>
    <Tab tabActive={tabActive} handleClick={handleClick} tab='general-information' />
    <Tab tabActive={tabActive} handleClick={handleClick} tab='faqs' />
    <Tab tabActive={tabActive} handleClick={handleClick} tab='images' />
    <Tab tabActive={tabActive} handleClick={handleClick} tab='revision-version' />
  </ul>
</div> */}

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
