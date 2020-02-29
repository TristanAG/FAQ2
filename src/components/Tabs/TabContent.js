import React from 'react'
import GeneralInformation from './GeneralInformation'
import Faqs from './Faqs'

function TabContent({ tabActive, info, faqs }) {
  return (
    <div>
      {tabActive === 'general-information' && <GeneralInformation info={info} />}
      {tabActive === 'faqs' && <Faqs faqs={faqs}/>}
    </div>
  )
}

export default TabContent




{/* <div id="images" className={tabActive === 'images' ? 'is-active' : 'hidden'}>
  <img src={productImage} style={{width: '400px'}}/>
</div>
<div id="revision-version" className={tabActive === 'revision-version' ? 'is-active' : 'hidden'}>
  <p>revision version tab content....</p>
</div> */}
