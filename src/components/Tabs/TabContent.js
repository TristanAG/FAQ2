import React from 'react'
import GeneralInformation from './GeneralInformation'
import Faqs from './Faqs'

function TabContent({ tabs, tab, info, faqs, itemType }) {
  return (
    <div>
      {tab === 'general-information' && <GeneralInformation info={info} />}
      {tab === 'faqs' && <Faqs faqs={faqs}/>}
      {/* {tab === 'faqs' &&
        faqsData.map(faq => {
          return (
            <div className="faq-item">
              <div className="has-text-info">{faq.value.question.toLowerCase()}</div>
              <small dangerouslySetInnerHTML={{__html: faq.value.answer}} />
            </div>
          )
        })
      } */}
    </div>
  )
}

export default TabContent

{/* <TabContent
  tabs={['general-information', 'faqs', 'images', 'revision-version']}
  tab={tabActive}
  itemData={product.info[0].value.content}
  faqsData={product.faqs}
  itemType={'product'}
/> */}
{/* <TabContent tabContent="faqs" tabActive={tabActive} data={product.faqs} /> */}
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
{/* <div id="faqs" className={tabActive === 'faqs' ? 'is-active' : 'hidden'}>
  {product.faqs.map(faq => {
    return (
      <div className="faq-item">
        <div className="has-text-info">{faq.value.question.toLowerCase()}</div>
        <small dangerouslySetInnerHTML={{__html: faq.value.answer}} />
      </div>
    )
  })} */}
{/* </div> */}
{/* <div id="images" className={tabActive === 'images' ? 'is-active' : 'hidden'}>
  <img src={productImage} style={{width: '400px'}}/>
</div>
<div id="revision-version" className={tabActive === 'revision-version' ? 'is-active' : 'hidden'}>
  <p>revision version tab content....</p>
</div> */}
