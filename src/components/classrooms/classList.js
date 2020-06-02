import React from "react";
import { BtnEdit, BtnShow, BtnDelete } from "../../utils/templates/buttons";
import { List, Datagrid, TextField, NumberField } from "react-admin";

export const ClassList = (props) => {
  return (
    <List {...props} title="Aulas">
      <Datagrid rowClick="edit">
        <NumberField source="id" label="ID" />
        <TextField source="turma" label="Turma" />
        <TextField source="sala" label="Sala" />
        <TextField source="horario" label="Horário" />
        <TextField source="professor.nome" label="Professor" />
        <TextField source="disciplina.nome" label="Disciplina" />
        <TextField source="turno.nome" label="Turno" />
        <BtnShow />
        <BtnEdit />
        <BtnDelete />
      </Datagrid>
    </List>
  );
};
