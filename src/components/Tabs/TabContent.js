import React from 'react'
import GeneralInformation from './GeneralInformation'
import Faqs from './Faqs'

function TabContent({ tabActive, tabs, info, faqs }) {
  return (
    <div>
      {tabActive === tabs[0] && <GeneralInformation info={info} />}
      {tabActive === tabs[1] && <Faqs faqs={faqs}/>}
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
