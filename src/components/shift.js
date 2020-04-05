import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Create,
  Show,
  Edit,
  SimpleForm,
  SelectField,
  TextInput,
  SimpleShowLayout,

 } from 'react-admin';


 export const ShiftList = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <TextField source="id" label="ID"/>
          <TextField source="name" label="Turno"/>
      </Datagrid>
  </List>
);

export const ShiftCreate = props => (
	<Create {...props}>
		<SimpleForm>
		<SelectField source="name" label="Turno" choices={[
      { id: 'm', name: 'Manhã'},
      { id: 'n', name: 'Noite'},
      ]}
    />
		</SimpleForm>
	</Create>
)

export const ShiftUpdate = props => (
	<Edit title="Edição de Turno" {...props}> 
		<SimpleForm>
    <SelectField source="name" label="Turno" choices={[
      { id: 'm', name: 'Manhã'},
      { id: 'n', name: 'Noite'},
      ]}
    />
		</SimpleForm>
	</Edit>
)

export const ShiftShow = (props) => (
	<Show {...props}>
			<SimpleShowLayout>
        <TextField source="id" label="ID"/>
        <TextField source="name" label="Turno"/>
			</SimpleShowLayout>
	</Show>
);