import React from 'react'
import Tab from './Tab'
import TabContent from './TabContent'

function Tabs({ info, faqs, images, tabList }) {

  // TODO figure out way to abstract out tab logic to DRY it out

  const [tabActive, setTabActive] = React.useState(tabList[0])
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
            <Tab tabActive={tabActive} handleClick={handleClick} tab={tab} key={tab} />
          ))}
        </ul>
      </div>

      <TabContent
        tabs={tabList}
        tabActive={tabActive}
        info={info}
        faqs={faqs}
        images={images}
        itemType={'product'}
      />
    </>
  )
}

export default Tabs
