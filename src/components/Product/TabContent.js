import React from 'react'

function TabContent({ tabs, tab, itemData, faqsData, itemType }) {

  const content = itemData

  switch (tab){
    case 'general-information':
      console.log('general information tab content')
      //so here i guess you transform the data into something usable
      console.log(itemData)

      break;
    case 'faqs':
      console.log('FAQs tab content')
      break;
  }

  return (
    <div>
      {tab === 'general-information' && <div dangerouslySetInnerHTML={{__html: content}} />}
      {tab === 'faqs' &&
        faqsData.map(faq => {
          return (
            <div className="faq-item">
              <div className="has-text-info">{faq.value.question.toLowerCase()}</div>
              <small dangerouslySetInnerHTML={{__html: faq.value.answer}} />
            </div>
          )
        })
      }
    </div>
  )
}

export default TabContent
