import React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  NumberField,

} from 'react-admin';



export const ClassShow = (props) => (
	<Show title="Exibição de Turma" {...props}>
			<SimpleShowLayout>
        <NumberField source="id" label="ID"/>
        <TextField source="turma" label="Turma"/>
        <TextField source="sala" label="Sala"/>
        <TextField source="horario" label="Horário" />
        <TextField source="professor.nome" label="Professor"/>
		    <TextField source="disciplina.nome" label="Disciplina"/>
		    <TextField source="turno.nome" label="Turno"/>
			</SimpleShowLayout>
	</Show>
);