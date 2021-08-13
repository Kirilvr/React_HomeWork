const products = (mass, id) =>
  mass.reduce((accum, mass) => {
    id === mass.id ? (accum = mass) : accum
    return accum
  }, null)
