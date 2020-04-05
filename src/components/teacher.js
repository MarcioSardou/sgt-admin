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

 export const TeacherList = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <TextField source="id" label="ID"/>
          <TextField source="name" label="Nome"/>
      </Datagrid>
  </List>
);

export const TeacherCreate = props => (
	<Create {...props}>
		<SimpleForm>
		<TextInput source="name" label="Nome"/>
		</SimpleForm>
	</Create>
)

export const TeacherUpdate = props => (
	<Edit title="Edição de Usuário" {...props}> 
		<SimpleForm>
    <TextInput source="name" label="Nome"/>
		</SimpleForm>
	</Edit>
)

export const TeacherShow = (props) => (
	<Show {...props}>
			<SimpleShowLayout>
          <TextField source="id" label="ID"/> 
					<TextField source="name" label="Nome" />
			</SimpleShowLayout>
	</Show>
);