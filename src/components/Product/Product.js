import React from 'react'
import Tabs from './Tabs'
import { Link } from "react-router-dom"

//TODO create function to get image out of product data
//TODO ASK Ryan, are you configuring a way to upload images? Will it be identical to how it's formatted now (PD uploads cloudinary links or Wagtail handles it?

function Product(props) {
  const [productData, setProductData] = React.useState({})

  function LoadProductData() {
    console.log('termlimitz')
    console.log(props.location.state.itemUrl)
    const url = 'https://' + props.location.state.itemUrl.split('http://')[1]
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log('jsnnn')
        console.log(json)
        setProductData({
          'title': json.title,
          'productType': json.product_type,
          'bulkTitle': json.bulk.title,
          'bulkUrl': json.bulk.meta.detail_url,
          'bulkId': json.bulk.id,
          'info': json.info[0].value.content,
          'faqs': json.faqs,
          'images': json.info[0].value.content.split('<p>Product Image: ')[1].split('</p>')[0]
        })
      })
  }

  React.useEffect(() => {
    LoadProductData()
  },[props])

  return (
    <section className="grocery-list">
      <div className="container">
        <div className="content">
          <h2 className="has-text-grey">{productData.title}</h2>
          <h4>Product Type: {productData.productType ? 'we got it' : 'not set in admin'}</h4>
          <h6>Bulk:
            <Link
              to={{
                pathname: `/bulk`,
                state: {
                  itemUrl: productData.bulkUrl,
                  itemName: productData.bulkTitle
                }
            }}>
              {productData.bulkTitle}
            </Link>
          </h6>
        </div>
        <Tabs info={productData.info} faqs={productData.faqs} images={productData.images} tabList={['General Information', 'FAQs', 'Images', 'Revision Version']} />
      </div>
    </section>
  )
}

export default Product
