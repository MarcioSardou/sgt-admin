export const query =

` allSubjects {
    edges {
      node {
        id
        nome
        codigo
      }
    }
  }

  allTeachers {
    edges {
      node {
        id
        nome
      }
    }
  }

  allShifts {
    edges {
      node {
        id
        nome
      }
    }
  }
`