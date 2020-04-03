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

export const DisciplineList = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <TextField source="id" label="ID"/>
          <TextField source="name" label="Nome"/>
          <TextField source="cod" label="Código"/>
      </Datagrid>
  </List>
);

export const DisciplineCreate = props => (
	<Create {...props}>
		<SimpleForm>
		<TextInput source="name" label="Nome"/>
		<TextInput source="cod" label="Código"/>
		</SimpleForm>
	</Create>
)

export const DisciplineUpdate = props => (
	<Edit title="Edição de Usuário" {...props}>
		<SimpleForm>
    <TextInput source="name" label="Nome"/>
		<TextInput source="cod" label="Código"/>
		</SimpleForm>
	</Edit>
)

export const DisciplineShow = (props) => (
	<Show {...props}>
			<SimpleShowLayout>
					<TextField source="name" label="Nome" />
					<TextField source="cod" label="Código"/>
			</SimpleShowLayout>
	</Show>
);
