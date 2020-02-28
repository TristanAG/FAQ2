import React from 'react'

function Faqs({ faqs }) {
  return (
    <>
      {faqs.map(faq => (
          <div className="faq-item">
            <div className="has-text-info">{faq.value.question.toLowerCase()}</div>
            <small dangerouslySetInnerHTML={{__html: faq.value.answer}} />
          </div>
        )
      )}
    </>
  )
  // {faqs.map(faq => (
  //     <div className="faq-item">
  //       <div className="has-text-info">{faq.value.question.toLowerCase()}</div>
  //       <small dangerouslySetInnerHTML={{__html: faq.value.answer}} />
  //     </div>
  //   )
  // )}
}

export default Faqs
