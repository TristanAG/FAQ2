import React from 'react'
import Tabs from '../Tabs'

function Product(props) {
  console.log(props.location.state.itemUrl)
  const [productData, setProductData] = React.useState({})
  const [productInfo, setProductInfo] = React.useState({})
  const [faqs, setFaqs] = React.useState({})
  const [itemUrl, setItemUrl] = React.useState('')
  const [images, setImages] = React.useState('https://res.cloudinary.com/nordic-naturals/image/upload/v1568067131/FAQ/Screen_Shot_2019-09-09_at_3.11.42_PM.png')

  //TODO create function to get image out of product data
    //TODO ASK Ryan, are you configuring a way to upload images? Will it be identical to how it's formatted now (PD uploads cloudinary links or Wagtail handles it?


  const itemUrlTemp = props.location.state.itemUrl

  function LoadProductData() {
    console.log('i ran')
    console.log(props.location.state.itemUrl)
    fetch('https' + itemUrlTemp.split('http')[1])
      .then(response => response.json(

      ))
      .then(json => {
        console.log('hello?')
        console.log(json)
        //what if I dump everything in to this state assignment... i think that's what i gotta do
        setProductData({
          'title': json.title,
          'productType': json.product_type,
          'bulk': json.bulk,
          'info': json.info,
          'faqs': json.faqs
        })
      })
  }

  React.useEffect(() => {
    LoadProductData()
  },[props.location.state.itemUrl])


  // const product = {
  //   "id": 277,
  //   "meta": {
  //       "type": "faqs.FinishedGood",
  //       "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/277/",
  //       "html_url": "http://faqs.devapps.nordicnaturals.com/products/nordic-flora-kids-probiotic-pixies/",
  //       "slug": "nordic-flora-kids-probiotic-pixies",
  //       "show_in_menus": false,
  //       "seo_title": "",
  //       "search_description": "",
  //       "first_published_at": null,
  //       "parent": {
  //           "id": 6,
  //           "meta": {
  //               "type": "faqs.FinishedGoodList",
  //               "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/6/",
  //               "html_url": "http://faqs.devapps.nordicnaturals.com/products/"
  //           },
  //           "title": "Products"
  //       }
  //   },
  //   "title": "Nordic Flora Kids Probiotic Pixies",
  //   "product_type": null,
  //   "bulk": {
  //       "id": 225,
  //       "meta": {
  //           "type": "faqs.BulkGood",
  //           "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/225/"
  //       },
  //       "title": "Nordic Flora Kids Probiotic Pixies"
  //   },
  //   "name": "Nordic Flora Kids Probiotic Pixies",
  //   "storage_conditions": "Store in a cool, dry place away from sunlight.",
  //   "info": [
  //       {
  //           "type": "heading_and_content",
  //           "value": {
  //               "heading": "generalInformation",
  //               "content": "<p>Upc: 7 68990 01678 3</p><p>Web Price: $23.76</p><p>Case Upc: 8 07 68990 01678 9</p><p>Retail Price: $27.95</p><p>Product Image: https://res.cloudinary.com/nordic-naturals/image/upload/v1568067131/FAQ/Screen_Shot_2019-09-09_at_3.11.42_PM.png</p><p>Case Count: 42</p><p>Unit Dimensions: 2.6\" x 3.14\" x 3.66\" Box</p><p>Wholesale Price: $16.77</p><p>Storage Conditions: Store in a dry place, at room temperature or below. </p><p>Case Dimensions: 18.9\" x 11.4\" x 6.3\" </p>"
  //           },
  //           "id": "c8a1ec65-7c4c-45e5-b4bf-35176a8a7e96"
  //       }
  //   ],
  //   "allergens": [],
  //   "featured": false,
  //   "featured_headline": null,
  //   "faqs": [
  //       {
  //           "type": "faqs",
  //           "value": {
  //               "question": "WHY SHOULD MY CHILD TAKE THIS PRODUCT?",
  //               "answer": "<p><span style=\"color: rgb(51,51,51);font-size: 16px;font-family: Arial;\">Nearly 70% of the immune system is found in the gut, and that's why a daily dose of probiotics is a back-to- school must have. Kids Probiotic Pixies are a fun and tasty way to achieve optimal digestive health and support a healthy immune system. Clinical studies show that Lactobacillus rhamnosus GG and Bifidobacterium lactis BL-04 support a healthy immune system and may reduce the risk of upper respiratory tract infections. These two well-researched strains survive passage through the GI tract and also support intestinal health, digestion, and nutrient absorption. These probiotics come in single-dose packets full of delicious probiotic powder that melts on your tongue (no water needed). </span><br>&nbsp;</p>",
  //               "category": "gi"
  //           },
  //           "id": "23dd45be-f571-4178-9dc3-b7f6657334f7"
  //       },
  //       {
  //           "type": "faqs",
  //           "value": {
  //               "question": "SHOULD MY CHILD TAKE THIS PRODUCT EVERYDAY?",
  //               "answer": "<p>For optimal digestive and immune system function, we recommend taking this product everyday.&nbsp;</p>",
  //               "category": "gi"
  //           },
  //           "id": "17541dfe-60f2-4257-be08-99e7b51a2580"
  //       },
  //       {
  //           "type": "faqs",
  //           "value": {
  //               "question": "CAN ADULTS EAT KIDS PROBIOTIC PIXIES?",
  //               "answer": "<p>Yes, adults can eat Kids Probiotic Pixies, but the dose is targeted towards kids.&nbsp;</p>",
  //               "category": "sd"
  //           },
  //           "id": "d340cddf-a5aa-4624-a821-bb0803d71bb9"
  //       },
  //       {
  //           "type": "faqs",
  //           "value": {
  //               "question": "ARE THERE ANY SIDE EFFECTS ASSOCIATED WITH USING THIS PRODUCT?",
  //               "answer": "<p><span style=\"color: rgba(0,0,0,0.87);background-color: rgb(253,253,253);font-size: 16px;font-family: Arial;\">There are no side effects associated with this product when following the recommended dosage. If any adverse side effects occur, discontinue use and consult your healthcare professional.</span></p>",
  //               "category": "sd"
  //           },
  //           "id": "be22ffe8-c721-4331-8937-248ce8efaa02"
  //       },
  //       {
  //           "type": "faqs",
  //           "value": {
  //               "question": "CAN I GIVE THIS PRODUCT TO MY CHILD ALONG SIDE OTHER SUPPLEMENTS?",
  //               "answer": "<p><span style=\"color: rgba(0,0,0,0.87);background-color: rgb(253,253,253);font-size: 16px;font-family: Arial;\">Yes, this product can be taken along side other supplements.</span></p>",
  //               "category": "sd"
  //           },
  //           "id": "0fb78b5c-cb9d-4a98-b896-8efe60b4457e"
  //       },
  //       {
  //           "type": "faqs",
  //           "value": {
  //               "question": "WHO SHOULD AVOID THIS PRODUCT?",
  //               "answer": "<p><span style=\"color: rgba(0,0,0,0.87);background-color: rgb(253,253,253);font-size: 16px;font-family: Arial;\">Consult with your child's pediatrician before using this product if your child has a known medical condition, or is taking medications.</span><br></p>",
  //               "category": "sd"
  //           },
  //           "id": "797abfd1-f471-4a1e-9843-03f8e23bf33e"
  //       },
  //       {
  //           "type": "faqs",
  //           "value": {
  //               "question": "CAN I GIVE MORE THAN THE RECOMMENDED DOSE TO MY CHILD?",
  //               "answer": "<p><span style=\"color: rgb(51,51,51);font-size: 16px;font-family: Arial;\">We recommend sticking to one Pixie packet per day, but if you can't help yourself, eating 2–3 packets per day (6–9 CFU) is safe.</span></p>",
  //               "category": "sd"
  //           },
  //           "id": "d709de12-4bd8-4c81-8952-b6cdca30af77"
  //       },
  //       {
  //           "type": "faqs",
  //           "value": {
  //               "question": "WHY IS THIS PRODUCT NOT CORN-FREE LIKE THE OTHER NORDIC FLORA PRODUCTS?",
  //               "answer": "<p><span style=\"color: rgb(51,51,51);font-size: 16px;font-family: Arial;\">The erythritol is made from non-GMO corn. However, no corn allergens or proteins are present. </span></p>",
  //               "category": "sd"
  //           },
  //           "id": "2bb218eb-4cf7-4b92-b10c-abb9390ec6cd"
  //       },
  //       {
  //           "type": "faqs",
  //           "value": {
  //               "question": "WHY CAN'T I GIVE KIDS PROBIOTIC PIXIES TO CHILDREN UNDER 3?",
  //               "answer": "<p><span style=\"color: rgb(51,51,51);font-size: 16px;font-family: Arial;\">Because the packets require some dexterity and coordination to open and pour into the mouth, we recommend them for kids 3 and up. For babies and toddlers ages 6 months to 3 years, we recommend taking </span><span style=\"color: rgba(0,0,0,0.87);background-color: rgb(253,253,253);font-size: 16px;font-family: Arial;\">Baby's Nordic Flora Probiotic Powder. </span></p>",
  //               "category": "sd"
  //           },
  //           "id": "1c5dc944-5aab-4960-8460-f9d420e80a0a"
  //       },
  //       {
  //           "type": "faqs",
  //           "value": {
  //               "question": "HOW DOES THIS PRODUCT FUNCTION?",
  //               "answer": "<p><span style=\"font-size: 16px;font-family: Arial;\">Kids Nordic Flora Probiotic Pixies contain lactobacillus rhamnosus GG and Bifidobacterium lactis BL-04, two widely studied probiotic strains that are acid and bile resistant, surviving passage through the GI tract. The probiotic strains adhere to intestinal epithelial cells for optimal colonization and aid in normal digestive and immune system activities. </span></p>",
  //               "category": "gi"
  //           },
  //           "id": "97512f98-e447-4a2d-a6df-0ec3b51a414a"
  //       }
  //   ]
  // }

  // const [productData, setProductData] = React.useState({
  //   'title': json.title,
  //   'productType': json.product_type,
  //   'bulk': json.bulk
  // })
  //
  // const [productInfo, setProductInfo] = React.useState(json.info)
  // const [faqs, setFaqs] = React.useState(json.faqs)



  return (
    // <section className="grocery-list">
    //   <div className="container">
    //     <div className="content">
    //       <h2 className="has-text-grey">{productData.title}</h2>
    //       <h4>Product Type: {productData.productType}</h4>
    //       {/* <h6>Bulk: <a href={productData.bulk.meta.detail_url}>{productData.bulk.title}</a></h6> */}
    //     </div>
    //     <Tabs info={productData.info} faqs={productData.faqs} images={images} tabList={['General Information', 'FAQs', 'Images', 'Revision Version']} />
    //   </div>
    // </section>
    <></>
  )
}

export default Product
