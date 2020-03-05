import React from 'react'
import GeneralInformation from './GeneralInformation'
import Faqs from './Faqs'
import Images from './Images'
import RevisionVersion from './RevisionVersion'

//so the thing that would take this next level is to somehow to some intricate loop
//but fuck it because this is good enough and easier to understand

function TabContent({ tabActive, tabs, info, faqs, images }) {
  return (
    <div>
      {tabActive === tabs[0] && <GeneralInformation info={info} />}
      {tabActive === tabs[1] && <Faqs faqs={faqs}/>}
      {tabActive === tabs[2] && <Images images={images}/>}
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
