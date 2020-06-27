import React from "react";
import { BtnEdit, BtnShow, BtnDelete } from "../../utils/templates/buttons";
import { List, Datagrid, TextField } from "react-admin";

const PostPagination = () => {
  return null;
};

export const ClassList = (props) => {
  return (
    <List
      {...props}
      title="Aulas"
      pagination={<PostPagination />}
      bulkActionButtons={false}
    >
      <Datagrid rowClick="edit">
        <TextField source="sala" label="Sala" />
        <TextField source="horario" label="Horário" />
        <TextField source="disciplina.nome" label="Disciplina" />
        <TextField source="professor.nome" label="Professor" />
        <BtnShow />
        <BtnEdit />
        <BtnDelete />
      </Datagrid>
    </List>
  );
};
