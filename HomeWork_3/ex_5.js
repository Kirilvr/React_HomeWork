// const availableProducts = menu.reduce((accum, product) => {
//   if (product.available) return [...accum, product]
//   return accum
// }, [])

const availableProducts = menu.filter(({ available }) => available)
