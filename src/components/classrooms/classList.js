import React from 'react';
import {
	List,
	Datagrid,
  TextField,
  NumberField,
	EditButton,
	DeleteButton,
  ShowButton,

} from 'react-admin';

export const ClassList = props => {

    
	return (
	<List {...props}>
		<Datagrid rowClick="edit">
		<NumberField source="id" label="ID"/>
		<TextField source="turma" label="Turma"/>
		<TextField source="sala" label="Sala"/>
    <TextField source="horario" label="Horário" />
		{/* <TextField source="professor" label="Professor"/> */}
		<EditButton/>
		<DeleteButton/>
		<ShowButton/>
		</Datagrid>
	</List>
	)}