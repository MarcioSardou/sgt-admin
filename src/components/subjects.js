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
import { largeText, codValidation } from "../utils/validators/validations";

const PostPagination = () => { return null }

export const SubjectList = (props) => (
  <List 
    {...props} 
    title="Disciplinas"
    pagination={<PostPagination />}
    bulkActionButtons={false}
  >
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="nome" label="Nome" />
      <TextField source="codigo" label="Código" />
      <BtnShow />
      <BtnEdit />
      <BtnDelete />
    </Datagrid>
  </List>
);

export const SubjectCreate = (props) => (
  <Create title="Criação de Disciplina" {...props}>
    <SimpleForm>
      <TextInput source="nome" label="Nome" validate={largeText} />
      <TextInput source="codigo" label="Código" validate={codValidation} />
    </SimpleForm>
  </Create>
);

export const SubjectUpdate = (props) => (
  <Edit title="Edição de Disciplina" {...props}>
    <SimpleForm>
      <TextInput source="nome" label="Nome" validate={largeText} />
      <TextInput source="codigo" label="Código" validate={codValidation} />
    </SimpleForm>
  </Edit>
);

export const SubjectShow = (props) => (
  <Show title="Exibição de Disciplina" {...props}>
    <SimpleShowLayout>
      <TextField source="id" label="ID" />
      <TextField source="nome" label="Nome" />
      <TextField source="codigo" label="Código" />
    </SimpleShowLayout>
  </Show>
);
