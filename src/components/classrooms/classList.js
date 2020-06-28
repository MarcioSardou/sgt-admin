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
        <TextField source="professor.nome" label="Professor" />
        <TextField source="disciplina.nome" label="Disciplina" />
        <TextField source="dias_semana" label="Dia da semana"/>
        <TextField source="sala" label="Sala" />
        <TextField source="horario" label="Horário" />
        <BtnShow />
        <BtnEdit />
        <BtnDelete />
      </Datagrid>
    </List>
  );
};
