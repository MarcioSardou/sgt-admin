import React from "react";
import { BtnEdit, BtnShow, BtnDelete } from "../../utils/templates/buttons";
import { List, Datagrid, TextField, NumberField } from "react-admin";

const PostPagination = () => { return null }

export const ClassList = (props) => {
  return (
    <List 
      {...props} 
      title="Aulas"
      pagination={<PostPagination />}
      bulkActionButtons={false}
    >
      <Datagrid rowClick="edit">
        <NumberField source="id" label="ID" />
        <TextField source="turma" label="Turma" />
        <TextField source="sala" label="Sala" />
        <TextField source="horario" label="Horário" />
        <TextField source="professor.nome" label="Professor" />
        <TextField source="disciplina.nome" label="Disciplina" />
        <BtnShow />
        <BtnEdit />
        <BtnDelete />
      </Datagrid>
    </List>
  );
};
