const entity = type => {
  
  switch (type) {
    
    case 'Classes':
      return {
        create: 'createClass',
        update: 'updateClass',
        delete: 'deleteClass',
        singular: 'class',
        params: `
        id
        turma
        sala
        horario
        subjectId
        teacherId
        shiftId
        subject {
          id
          nome
        }
        techer {
          id
          nome
        }
        shift {
          id
          nome
        }

        `,
      }
    
    case 'Subjects':
      return {
        create: 'createSubjects',
        update: 'updateSubjects',
        delete: 'deleteSubjects',
        singular: 'subject',
        params: `
        id
        nome
        codigo
        `,
      }
    
    
    case 'Teachers':
      return {
        create: 'createTeachers',
        update: 'updateTeachers',
        delete: 'deleteTeachers',
        singular: 'teacher',
        params: `
        id
        nome   
        `,
      }
    
    case 'Users':
      return {
        create: 'createUsers',
        update: 'updateUsers',
        delete: 'deleteUsers',
        singular: 'user',
        params: `
        id
        nome
        email
        senha
        `,
      }
    
    case 'Shifts':
      return {
        create: 'createShifts',
        update: 'updateShifts',
        delete: 'deleteShifts',
        singular: 'shift',
        params: `
        id
        nome
        `,
      }
    
    default:
    break
  }
}

export default entity
