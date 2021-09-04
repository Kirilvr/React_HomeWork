// const products = (mass, id) =>
//   mass.reduce((accum, mass) => {
//     id === mass.id ? (accum = mass) : accum
//     return accum
//   }, null)

const products = (mass, id) =>
  mass.find((product) => {
    if (product.id === id) return product
  })
