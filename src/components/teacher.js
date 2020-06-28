import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Create,
  Show,
  Edit,
  SimpleForm,
  TextInput,
  SimpleShowLayout,
} from "react-admin";
import { BtnEdit, BtnShow, BtnDelete } from "../utils/templates/buttons";
import { mediumText } from "../utils/validators/validations";

const PostPagination = () => {
  return null;
};

export const TeacherList = (props) => (
  <List
    {...props}
    title="Professores"
    pagination={<PostPagination />}
    bulkActionButtons={false}
  >
    <Datagrid rowClick="edit">
      <TextField source="nome" label="Nome" />
      <BtnShow />
      <BtnEdit />
      <BtnDelete />
    </Datagrid>
  </List>
);

export const TeacherCreate = (props) => (
  <Create {...props}>
    <SimpleForm redirect="list">
      <TextInput source="nome" label="Nome" validate={mediumText} />
    </SimpleForm>
  </Create>
);

export const TeacherUpdate = (props) => (
  <Edit title="Edição de Usuário" {...props}>
    <SimpleForm redirect="show">
      <TextInput source="nome" label="Nome" validate={mediumText} />
    </SimpleForm>
  </Edit>
);

export const TeacherShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" label="ID" />
      <TextField source="nome" label="Nome" />
    </SimpleShowLayout>
  </Show>
);
