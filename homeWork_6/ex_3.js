const countStudents = university.reduce(
  (acc, { countStudents }) => acc + countStudents,
  0
)
