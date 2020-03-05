import React from 'react'

function RawMaterials({ rawMaterials }) {
  console.log('rms tab in bulks')
  console.log(rawMaterials)
  return (
    <div>
      raw materials tab ...
      {rawMaterials && rawMaterials.map(rm => (
        <p key={rm.bulk_ingredient.id}><a href={rm.bulk_ingredient.meta.detail_url}>{rm.bulk_ingredient.title}</a></p>
      ))}
    </div>
  )
}

export default RawMaterials
