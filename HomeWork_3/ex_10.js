const massId = [3, 1, 2]

const summPrice = (products, massId) =>
  products.reduce((accum, { id, price, currency }) => {
    const hasProduct = massId.includes(id)
    const hasCurrency = accum[currency]
    if (!hasCurrency && hasProduct) return { ...accum, [currency]: price }
    if (hasCurrency && hasProduct)
      return { ...accum, [currency]: hasCurrency + price }
    return accum
  }, {})
