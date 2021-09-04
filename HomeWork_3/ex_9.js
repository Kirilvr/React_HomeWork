const massId = [7, 1, 4]

const makeToString = (products, massId) =>
  products.reduce((accum, { id, name, price, currency }) => {
    if (massId.includes(id))
      accum =
        accum +
        `${name}` +
        ': цена ' +
        `${price}` +
        `${currency === 'euro' ? '€' : '$'}` +
        ', '
    return accum
  }, '')
