import React from 'react'

function GeneralInformation({ info }) {


  const [upc, setUpc] = React.useState('')
  const [genInfo, setGenInfo] = React.useState({})

  function parseInfo() {
    // info && setUpc(info.split('Upc: ')[1].split('</p>')[0])
    if (info) {
      setGenInfo({
        'upc': info.split('Upc: ')[1].split('</p>')[0],
        'webPrice': info.split('Web Price: ')[1].split('</p>')[0],
        'retailPrice': info.split('Retail Price: ')[1].split('</p>')[0],
        'wholesalePrice': info.split('Wholesale Price: ')[1].split('</p>')[0],
        'caseUpc': info.split('Case Upc: ')[1].split('</p>')[0],
        'caseCount': info.split('Case Count: ')[1].split('</p>')[0],
        'unitDimensions': info.split('Unit Dimensions: ')[1].split('</p>')[0],
        'storageConditions': info.split('Storage Conditions: ')[1].split('</p>')[0]
      })
    }
  }

  React.useEffect(() => {
    //2 rerenders are happening because of parent component i think... should probably parse the data earlier then?
    parseInfo()
  },[info])

  return (
    // <div dangerouslySetInnerHTML={{__html: info}} />
    <div>
      <p><b>Storage Conditions</b> {genInfo.storageConditions}</p>
      <br />
      <p><b>Web Price</b> {genInfo.webPrice}</p>
      <p><b>Retail Price</b> {genInfo.retailPrice}</p>
      <p><b>Wholesale Price</b> {genInfo.wholesalePrice}</p>
      <br />
      <p><b>Upc</b> {genInfo.upc}</p>
      <p><b>Case Upc</b> {genInfo.caseUpc}</p>
      <br />
      <p><b>Case Count</b> {genInfo.caseCount}</p>
      <p><b>Unit Dimensions</b> {genInfo.unitDimensions}</p>
    </div>
  )
}

export default GeneralInformation
