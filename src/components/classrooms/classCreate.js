import React, { useState, useEffect } from "react";
import { appRequest } from "../../providers/dataProvider";
import { query } from "../../constants/queries";
import {
  smallText,
  timeValidate,
  dateValidate,
} from "../../utils/validators/validations";

import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  required,
} from "react-admin";

export const ClassCreate = (props) => {
  const [subjects, setSubjects] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    async function renderData() {
      const {
        data: {
          data: { allSubjects, allTeachers },
        },
      } = await appRequest(query);
      const subject = allSubjects.edges.node.map((item) => ({
        ...item,
        name: item.nome,
      }));
      const teacher = allTeachers.edges.node.map((item) => ({
        ...item,
        name: item.nome,
      }));

      setSubjects(subject);
      setTeachers(teacher);
    }
    renderData();
  }, []);

  return (
    <Create title="Criação de Turma" {...props}>
      <SimpleForm>
        <TextInput source="turma" label="Turma" validate={smallText} />
        <TextInput source="sala" label="Sala" validate={smallText} />
        <TextInput source="horario" label="Horário" validate={timeValidate} />
        <SelectInput
          source="turno"
          label="Turno"
          validate={required()}
          choices={[
            { id: "manha", name: "Manhã" },
            { id: "tarde", name: "Tarde" },
            { id: "noite", name: "Noite" },
          ]}
        />
        <TextInput
          source="data"
          label="Data de exibição"
          validate={dateValidate}
        />
        <SelectInput
          source="status"
          choices={[
            { id: "confirmado", name: "Confirmado" },
            { id: "adiado", name: "Adiado" },
            { id: "faltou", name: "Faltou" },
          ]}
          validate={required()}
        />

        <SelectInput
          source="professor"
          choices={teachers}
          validate={required()}
        />
        <SelectInput
          source="disciplina"
          choices={subjects}
          validate={required()}
        />
      </SimpleForm>
    </Create>
  );
};
