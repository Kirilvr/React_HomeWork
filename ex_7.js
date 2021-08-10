const createNewMass = (array, str) =>
  Array.from(
    new Set(
      array.reduce((acc, item) => {
        if (item.toLowerCase().includes(str)) return [...acc, item]
        return acc
      }, [])
    )
  )
