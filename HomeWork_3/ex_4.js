const types = menu.reduce((accum, products) => {
  const type = products.type
  if (!accum[type]) {
    return { ...accum, [type]: [products] }
  }
  return { ...accum, [type]: [...accum[type], products] }
}, {})
