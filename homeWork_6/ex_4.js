const listOfDisciplines = university.reduce((acc, { faculty, subjects }) => {
  return {
    ...acc,
    [faculty]: subjects,
  }
}, {})
