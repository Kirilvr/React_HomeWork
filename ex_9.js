const massId = [7, 1, 4]

const namePriceProducts = (products, massId) =>
  products.reduce((accum, { id, name, price, currency }) => {
    if (massId.includes(id))
      accum +=
        `${name}` +
        ': цена ' +
        `${price}` +
        `${currency === 'euro' ? '€' : '$'}` +
        ', '
    return accum
  }, '')
