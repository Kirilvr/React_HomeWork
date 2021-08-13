const massId = [6, 1, 7, 5]

const summConvertPrice = (products, massId) =>
  products.reduce((accum, { id, price, currency }) => {
    if (massId.includes(id) && currency === 'euro') accum += price
    else if (massId.includes(id) && currency === 'usd') accum += price * 0.85
    return accum
  }, null)
