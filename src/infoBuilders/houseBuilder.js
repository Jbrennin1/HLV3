/* CREATE BUILDER FOR INFO SECTION BASED ON GAMEMODE */

const buildHouse = (obj, bool) => {

    if(obj!==null && obj) {
      var price = obj.zestimate || 'empty'
      var bedrooms = obj.bedrooms || 'empty'
      var bathrooms = obj.bathrooms || 'empty'
      var livingArea = obj.livingArea || 'empty'
      if(obj.address!==null && obj.address) {
        var address = obj.address.streetAddress || 'empty'
        var city = obj.address.city || 'empty'
        var state = obj.address.state || 'empty'
      }
      var year = obj.yearBuilt || 'empty'
      var zip = obj.zip || 'empty'
      return ({
        price: price,
        info: [
          `${bedrooms} bed ${bathrooms} bath ${livingArea} SqFt`,
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