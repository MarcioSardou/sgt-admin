import React from 'react';
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

 } from 'react-admin';

export const SubjectList = props => (
  <List {...props}>
      <Datagrid>
          <TextField source="id" label="ID"/>
          <TextField source="nome" label="Nome"/>
          <TextField source="codigo" label="Código"/>
      </Datagrid>
  </List>
);

export const SubjectCreate = props => (
	<Create  title="Criação de Disciplina"{...props}>
		<SimpleForm>
		<TextInput source="nome" label="Nome"/>
		<TextInput source="codigo" label="Código"/>
		</SimpleForm>
	</Create>
)

export const SubjectUpdate = props => (
	<Edit title="Edição de Disciplina" {...props}>
		<SimpleForm>
    <TextInput source="nome" label="Nome"/>
		<TextInput source="codigo" label="Código"/>
		</SimpleForm>
	</Edit>
)

export const SubjectShow = (props) => (
	<Show title="Exibição de Disciplina"{...props}>
			<SimpleShowLayout>
          <TextField source="id" label="ID"/>
					<TextField source="nome" label="Nome" />
					<TextField source="codigo" label="Código"/>
			</SimpleShowLayout>
	</Show>
);
