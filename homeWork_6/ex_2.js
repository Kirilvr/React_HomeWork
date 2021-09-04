const subjects = university.reduce(
  (acc, { subjects }) => [...acc, ...subjects],
  []
)
