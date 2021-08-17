const ingredients = ['chicken', 'cheese', 'sauce', 'cucumber']

const hasMassIngredients = (products, ingredients) =>
  products.reduce((accum, product) => {
    if (
      [...new Set([...product.ingredients, ...ingredients])].join() ===
      product.ingredients.join()
    )
      return [...accum, product]
    return accum
  }, [])
