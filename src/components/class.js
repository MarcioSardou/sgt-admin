import React from 'react';
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
	
} from 'react-admin';



export const ClassList = props => (
	<List {...props}>
		<Datagrid rowClick="edit">
		<NumberField source="id" label="ID"/>
		<TextField source="turma" label="Turma"/>
		<EmailField source="sala" label="Sala"/>
    <TextField source="horario" label="Horário" />
		<TextField source="professor_id" label="aqi"/>
		<EditButton/>
		<DeleteButton/>
		<ShowButton/>
		</Datagrid>
	</List>
	);

export const ClassCreate = props => (
	<Create title="Criação de Turma" {...props}>
		<SimpleForm>
    {/* <SelectInput source={disciplinaId}/> */}
    {/* <SelectInput source={professorId}/> */}
    {/* <SelectInput source={turnoId}/> */}
		<TextInput source="turma" label="Turma"/>
		<TextInput source="sala" label="Sala"/>
    <TextInput source="horario" label="Horário"/>
		</SimpleForm>
	</Create>
)

export const ClassUpdate = props => (
	<Edit title="Edição de Turma" {...props}>
		<SimpleForm>
      {/* <SelectInput source={disciplinaId}/> */}
      {/* <SelectInput source={professorId}/> */}
      {/* <SelectInput source={turnoId}/> */}
      <TextInput source="turma" label="Turma"/>
      <TextInput source="sala" label="Sala"/>
      <TextInput source="horario" label="Horário"/>
		</SimpleForm>
	</Edit>
)

export const ClassShow = (props) => (
	<Show title="Exibição de Turma" {...props}>
			<SimpleShowLayout>
        {/* <SelectField source={disciplinaId}/> */}
        {/* <SelectField source={professorId}/> */}
        {/* <SelectFIeld source={turnoId}/> */}
        <NumberField source="id" label="ID"/>
        <TextField source="turma" label="Turma"/>
        <EmailField source="sala" label="Sala"/>
        <TextField source="horario" label="Horário" />
			</SimpleShowLayout>
	</Show>
);



