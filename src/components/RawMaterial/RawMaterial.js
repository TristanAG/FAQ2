import React from 'react'
import Tabs from './Tabs'

function RawMaterial(props) {
  const [rawMaterialData, setRawMaterialData] = React.useState({})

  function loadRawMaterialData() {
    const url = 'https://' + props.location.state.itemUrl.split('http://')[1]
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log('RMSjsnnn')
        console.log(json)
        setRawMaterialData({
          'title': json.title,
          'active': json.active,
          'ingredientBulks': json.bulk_ingredients,
          'faqs': json.faqs
        })
      })
  }

  React.useEffect(() => {
    loadRawMaterialData()
  },[props])

  return (
    <section className="grocery-list">


      <div className="container">
         <div className="content">
           <h2 className="has-text-grey">{rawMaterialData.title}</h2>
           <h3>Label Declaration: <i>do not see in db...</i></h3>
           {/* <h4>Product Type: {rawMaterialData.bulkType ? 'we got it' : 'not set in admin'}</h4> */}
         </div>
         <Tabs info={{}} faqs={rawMaterialData.faqs} ingredientBulks={rawMaterialData.ingredientBulks} tabList={['General Information', 'FAQs', 'Sourcing', 'Health Information', 'Bulks', 'Products', 'Allergens']} />
       </div>
    </section>
  )
}

export default RawMaterial
