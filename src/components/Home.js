import React from 'react'

function Home() {

  var url = 'https://faqs.devapps.nordicnaturals.com/api/pages/';

  // var resp = fetch(url)
  // resp.then(response => response.json()).then(json => {console.log(json.items)})

  fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log(json.items)
    })

  return (
    <div className="home">
      <p>homepage...</p>
    </div>
  )
}

export default Home
