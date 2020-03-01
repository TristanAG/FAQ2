import React from 'react'
import Tabs from '../Tabs'

//TODO create function to get image out of product data
//TODO ASK Ryan, are you configuring a way to upload images? Will it be identical to how it's formatted now (PD uploads cloudinary links or Wagtail handles it?

function Product(props) {
  // TODO destructure this from props
  const itemUrlTemp = props.location.state.itemUrl.split('http')[1]
  const [productData, setProductData] = React.useState({})
  // TODO move setImages into setProductData()
  const [images, setImages] = React.useState('https://res.cloudinary.com/nordic-naturals/image/upload/v1568067131/FAQ/Screen_Shot_2019-09-09_at_3.11.42_PM.png')

  function LoadProductData() {
    fetch('https' + itemUrlTemp).then(response => response.json())
      .then(json => {
        //what if I dump everything in to this state assignment... i think that's what i gotta do
        console.log(json.info[0].value.content)
        setProductData({
          'title': json.title,
          'productType': json.product_type,
          'bulk': json.bulk,
          'info': json.info[0].value.content,
          'faqs': json.faqs
        })
      })
  }

  React.useEffect(() => {
    LoadProductData()
  },[props.location.state.itemUrl])


  return (
    <section className="grocery-list">
      <div className="container">
        <div className="content">
          <h2 className="has-text-grey">{productData.title}</h2>
          <h4>Product Type: {productData.productType}</h4>
          {/* <h6>Bulk: <a href={productData.bulk.meta.detail_url}>{productData.bulk.title}</a></h6> */}
        </div>
        <Tabs info={productData.info} faqs={productData.faqs} images={images} tabList={['General Information', 'FAQs', 'Images', 'Revision Version']} />
      </div>
    </section>
  )
}

export default Product
