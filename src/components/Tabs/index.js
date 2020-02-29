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
            <Tab tabActive={tabActive} handleClick={handleClick} tab={tab} key={tab} />
          ))}
        </ul>
      </div>

      <TabContent
        tabActive={tabActive}
        info={info[0].value.content}
        faqs={faqs}
        itemType={'product'}
      />
    </>
  )
}

export default Tabs
