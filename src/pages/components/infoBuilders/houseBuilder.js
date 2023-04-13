/* CREATE BUILDER FOR INFO SECTION BASED ON GAMEMODE */

const buildHouse = (obj) => {

    if(obj!==null) {
      var price = obj.zestimate || 'empty'
      var bedrooms = obj.bedrooms || 'empty'
      var bathrooms = obj.bathrooms || 'empty'
      var livingArea = obj.livingArea || 'empty'
      var city = obj.address.city || 'empty'
      var state = obj.address.state || 'empty'
      var year = obj.yearBuilt || 'empty'
      var address = obj.address.streetAddress || 'empty'
      var zip = obj.zip || 'empty'
      return ({
        price: price,
        info: [
          `${bedrooms} bed ${bathrooms} bath ${livingArea}SqFt`,
          `${city} ${state} built ${year}`,
          `${address} ${zip}`
        ]}
      )
    } else {
      return ({
        price: 0,
        info: [
          `loading...`,
          `loading...`,
          `loading...`
        ]}
      )

}}

export default buildHouse;