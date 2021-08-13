const massId = [3, 1, 2]

const summPrice = (products, massId) =>
  products.reduce((accum, { id, price, currency }) => {
    if (!accum[currency] && massId.includes(id))
      return { ...accum, [currency]: price }
    else if (accum[currency] && massId.includes(id))
      return { ...accum, [currency]: (accum[currency] += price) }
    return accum
  }, {})
