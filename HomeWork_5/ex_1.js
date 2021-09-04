const usersEmail = users.reduce((acc, { id, email }) => {
  return {
    ...acc,
    [id]: email,
  }
}, {})
