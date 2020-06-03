export const query = ` allSubjects {
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

`;
