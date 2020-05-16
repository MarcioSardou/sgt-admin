const entity = {

  Users(){
    return {
      create: 'createUser',
      update: 'updateUser',
      delete: 'deleteUser',
      singular: 'user',
      params: `
        id
        nome
        email
      `,
    }
  },

  Teachers(){
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
  },

  Subjects(){
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
  },

  Shifts(){
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
  },

  ClassRooms(){
    return {
      create: 'createClassRoom',
      update: 'updateClassRoom',
      delete: 'deleteClassRoom',
      singular: 'classRoom',
      params: `
        professor_id
        turno_id
        disciplina_id
        turma
        sala
        horario
      `,
    }
  }
}

export default entity
