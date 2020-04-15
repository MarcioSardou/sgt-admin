const entity = type => {
  
  switch (type) {
    
    case 'Users':
      return {
        create: 'createUser',
        update: 'updateClass',
        delete: 'deleteClass',
        singular: 'user',
        params: `
          id
          nome
          email
        `,
      }

    case 'Classes':
      return {
        create: 'createClass',
        update: 'updateClass',
        delete: 'deleteClass',
        singular: 'class',
        params: `
          disciplina_id
          professor_id
          turno_id
          turma
          sala
          horario
        `,
      }
    
    case 'Subjects':
      return {
        create: 'createSubject',
        update: 'updateSubject',
        delete: 'deleteSubject',
        singular: 'subject',
        params: `
          id
          nome
          codigo
        `,
      }
    
    
    case 'Teachers':
      return {
        create: 'createTeacher',
        update: 'updateTeacher',
        delete: 'deleteTeacher',
        singular: 'teacher',
        params: `
          id
          nome   
        `,
      }
    
    case 'Shifts':
      return {
        create: 'createShift',
        update: 'updateShift',
        delete: 'deleteShift',
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
