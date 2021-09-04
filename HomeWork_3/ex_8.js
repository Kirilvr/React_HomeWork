// const cheaperPrice = (products, price) =>
//   products.reduce((accum, product) => {
//     if (product.price <= price) return [...accum, product]
//     return accum
//   }, [])

const findCheaper = (products, price) =>
  products.filter((products) => products.price <= price)
