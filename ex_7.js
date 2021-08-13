const ingr = ['chicken', 'cheese', 'sauce', 'cucumber']

const includeMassIngredients = (products, ingr) =>
  products.reduce((accum, product) => {
    if (
      [...new Set([...product.ingredients, ...ingr])].join() ===
      product.ingredients.join()
    )
      return [...accum, product]
    return accum
  }, [])
