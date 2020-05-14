import React, { useState, useEffect } from 'react';
import {
	List,
	Datagrid,
  TextField,
  NumberField,
  EmailField,
	Create,
	Show,
	Edit,
	SimpleForm,
  TextInput,
  SelectInput,
	PasswordInput,
	SimpleShowLayout,
	EditButton,
	DeleteButton,
  ShowButton,
  useDataProvider,
	
} from 'react-admin';


export const ClassList = props => {

 
useEffect(() => {
   console.log(props);
  
},[props]) 

    

	return (
	<List {...props}>
		<Datagrid rowClick="edit">
		<NumberField source="id" label="ID"/>
		<TextField source="turma" label="Turma"/>
		<EmailField source="sala" label="Sala"/>
    <TextField source="horario" label="Horário" />
		<TextField source="professor_id" label="Professor"/>
		<EditButton/>
		<DeleteButton/>
		<ShowButton/>
		</Datagrid>
	</List>
	)}