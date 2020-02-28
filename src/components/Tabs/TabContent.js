import React from 'react'
import GeneralInformation from './GeneralInformation'
import Faqs from './Faqs'

function TabContent({ tab, info, faqs }) {
  return (
    <div>
      {tab === 'general-information' && <GeneralInformation info={info} />}
      {tab === 'faqs' && <Faqs faqs={faqs}/>}
    </div>
  )
}

export default TabContent


{/* <div id="general-information" className={tabActive === 'general-information' ? 'is-active' : 'hidden'}>
  <div>
    {cleanedProductData.map((wrd) => {
      return (
        <div style={{marginBottom: '12px'}}>
          <b>{wrd.split(':')[0]}</b>
          {wrd.split(':')[1]}
        </div>
      )
    })}
  </div>
</div> */}

{/* <div id="images" className={tabActive === 'images' ? 'is-active' : 'hidden'}>
  <img src={productImage} style={{width: '400px'}}/>
</div>
<div id="revision-version" className={tabActive === 'revision-version' ? 'is-active' : 'hidden'}>
  <p>revision version tab content....</p>
</div> */}
