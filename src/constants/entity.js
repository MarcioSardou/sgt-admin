const entity = {
  Users() {
    return {
      create: "createUser",
      update: "updateUser",
      delete: "deleteUser",
      singular: "user",
      params: `
        id
        nome
        email
      `,
    };
  },

  Teachers() {
    return {
      create: "createTeacher",
      update: "updateTeacher",
      delete: "deleteTeacher",
      singular: "teacher",
      params: `
        id
        nome
      `,
    };
  },

  Subjects() {
    return {
      create: "createSubject",
      update: "updateSubject",
      delete: "deleteSubject",
      singular: "subject",
      params: `
        id
        nome
        codigo
      `,
    };
  },

  ClassRooms() {
    return {
      create: "createClassRoom",
      update: "updateClassRoom",
      delete: "deleteClassRoom",
      singular: "classRoom",
      params: `
        id
        turma
        sala
        horario
        turno
        status
        dias_semana
        professor_id
        disciplina_id
        professor {
          id
          nome
        }
        disciplina {
          id
          nome
        }
      `,
    };
  },
  paramsToRemoveOnUpdate: ["professor", "disciplina"],
};

export default entity;
