const usersFilter = users.reduce((acc, user) => {
  if (user.age < 40) return [...acc, user]
  return acc
}, [])
