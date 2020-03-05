import React from 'react'

function Manufacturing({ info }) {

  const [manufacturingInfo, setManufacturingInfo] = React.useState({})

  function parseInfo() {
    if (info) {
      setManufacturingInfo({
        'shelfLife': info.split('Shelf Life: ')[1].split('</p>')[0],
        'certifications': info.split('Certifications: ')[1].split('</p>')[0],
        'manufactureLocation': info.split('Manufacture Location: ')[1].split('</p>')[0],
      })
    }
  }

  React.useEffect(() => {
    parseInfo()
  },[info])

  return (
    <div>
      <p><b>Shelf Life:</b> {manufacturingInfo.shelfLife}</p>
      <p><b>Certifications:</b> {manufacturingInfo.certifications}</p>
      <p><b>Manufacture Location:</b> {manufacturingInfo.manufactureLocation}</p>
    </div>
  )
}

export default Manufacturing
