import React from 'react'
import Manufacturing from './Manufacturing'
import Faqs from './Faqs'
import RawMaterials from './RawMaterials'

//so the thing that would take this next level is to somehow to some intricate loop
//but fuck it because this is good enough and easier to understand

function TabContent({ tabActive, tabs, info, faqs, rawMaterials }) {
  return (
    <div>
      {tabActive === tabs[0] && <Manufacturing info={info} />}
      {tabActive === tabs[1] && <Faqs faqs={faqs}/>}
      {tabActive === tabs[3] && <RawMaterials rawMaterials={rawMaterials}/>}
    </div>
  )
}

export default TabContent
