import React from 'react'
import Tabs from './Tabs'

//TODO create function to get image out of product data
//TODO ASK Ryan, are you configuring a way to upload images? Will it be identical to how it's formatted now (PD uploads cloudinary links or Wagtail handles it?

function Bulk(props) {
  const [bulkData, setBulkData] = React.useState({})

  function LoadBulkData() {
    console.log('QQQtermlimitz')
    console.log(props.location.state.itemUrl)
    const url = 'https://' + props.location.state.itemUrl.split('http://')[1]
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log('BULKjsnnn')
        console.log(json.bulk_ingredients)
        setBulkData({
          'title': json.title,
          'bulkType': json.bulk_type,
          'bulkIngredients': json.bulk_ingredients,
          // 'bulkUrl': json.bulk.meta.detail_url,
          'info': json.info[0].value.content,
          'faqs': json.faqs,
          // 'images': json.info[0].value.content.split('<p>Product Image: ')[1].split('</p>')[0]
        })
      })
  }

  React.useEffect(() => {
    LoadBulkData()
  },[props])

  return (
    <section className="grocery-list">

      {/* {bulkData.bulkIngredients && bulkData.bulkIngredients.map(b => (
        <p key={b.bulk_ingredient.id}><a href={b.bulk_ingredient.meta.detail_url}>{b.bulk_ingredient.title}</a></p>
      ))} */}
      <div className="container">
        <div className="content">
          <h2 className="has-text-grey">{bulkData.title}</h2>
          <h4>Product Type: {bulkData.bulkType ? 'we got it' : 'not set in admin'}</h4>

        </div>
        <Tabs info={bulkData.info} faqs={bulkData.faqs} rawMaterials={bulkData.bulkIngredients} tabList={['Manufacturing', 'FAQs', 'Images', 'Raw Materials', 'Products', 'Allergens']} />
      </div>
    </section>
  )
}

export default Bulk
