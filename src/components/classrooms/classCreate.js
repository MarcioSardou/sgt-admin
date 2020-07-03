import React, { useState, useEffect } from "react";
import { appRequest } from "../../providers/dataProvider";
import { query } from "../../constants/queries";
import MaskedInput from 'react-text-mask';
import {
  smallText,
  timeValidate,
} from "../../utils/validators/validations";

import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  required,
} from "react-admin";

const HourMask = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[/[0-2]/, /[0-9]/, ':', /[0-5]/, /[0-9]/, ' ', '-', ' ', /[0-2]/, /[0-9]/, ':', /[0-5]/, /[0-9]/]}
      guide={false}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

export const ClassCreate = (props) => {
  const [subjects, setSubjects] = useState([]);
  const [teachers, setTeachers] = useState([]);

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

  useEffect(() => {
    renderData();
  }, []);

  return (
    <Create title="Criação de Turma" {...props}>
      <SimpleForm redirect="list">
        <TextInput source="turma" label="Turma" validate={smallText} />
        <TextInput source="sala" label="Sala" validate={smallText} />
        <TextInput 
          source="horario" 
          label="Horário" 
          validate={timeValidate}
          InputProps={{ inputComponent: HourMask }} 
        />
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
        <SelectInput
          source="dias_semana"
          label="Dia da semana"
          choices={[
            { id: "segunda-feira", name: "Segunda-feira" },
            { id: "terca-feira", name: "Terça-feira" },
            { id: "quarta-feira", name: "Quarta-feira" },
            { id: "quinta-feira", name: "Quinta-feira" },
            { id: "sexta-feira", name: "Sexta-feira" },
          ]}
          validate={required()}
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
          source="professor_id"
          choices={teachers}
          validate={required()}
        />
        <SelectInput
          source="disciplina_id"
          choices={subjects}
          validate={required()}
        />
      </SimpleForm>
    </Create>
  );
};
