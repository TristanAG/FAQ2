import React from 'react'
import Faqs from './Faqs'

function TabContent({ tabActive, tabs, info, faqs, rawMaterials }) {
  return (
    <div>
      {/* {tabActive === tabs[0] && <Manufacturing info={info} />} */}
      {tabActive === tabs[1] && <Faqs faqs={faqs}/>}
      {/* {tabActive === tabs[3] && <RawMaterials rawMaterials={rawMaterials}/>} */}
    </div>
  )
}

export default TabContent
