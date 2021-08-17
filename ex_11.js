const massId = [6, 1, 7, 5]

const summConvertPrice = (products, massId) =>
  products.reduce((accum, { id, price, currency }) => {
    const hasProduct = massId.includes(id)
    if (hasProduct && currency === 'euro') accum = accum + price
    if (hasProduct && currency === 'usd') accum = accum + price * 0.85
    return accum
  }, null)
