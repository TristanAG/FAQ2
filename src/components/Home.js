import React from 'react'

function Home() {

  // var url = 'https://faqs.devapps.nordicnaturals.com/api/pages/';
  //
  // // var resp = fetch(url)
  // // resp.then(response => response.json()).then(json => {console.log(json.items)})
  //
  // fetch(url)
  //   .then(response => response.json())
  //   .then(json => {
  //     console.log(json.items)
  //   })

  return (
    <div className="home content" style={{paddingTop: '88px', paddingLeft: '88px', paddingRight: '144px'}}>
      <center>
        <h3>Nordic FAQs Search</h3>
        <input className="input is-rounded" type="text" placeholder="Prodcut / Bulk / Raw Material / Nordic Standard / FAQs" />
      </center>
    </div>
  )
}

export default Home
