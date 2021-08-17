const extractProducts = (mass, ingredient) =>
  mass.reduce((accum, product) => {
    if (product.ingredients.includes(ingredient)) return [...accum, product]
    return accum
  }, [])
