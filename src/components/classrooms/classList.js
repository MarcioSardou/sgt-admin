import React, { useState, useEffect } from 'react';
import { appRequest } from '../../providers/dataProvider'
import { query } from '../../utils/queries'
import {
	List,
	Datagrid,
  TextField,
  NumberField,
  EmailField,
	EditButton,
	DeleteButton,
  ShowButton,

} from 'react-admin';

export const ClassList = props => {
	const [subjects, setSubjects] = useState([])
	const [teachers, setTeachers] = useState([])
	const [shifts, setShifts] = useState([])


	useEffect(() => {

		async function renderData(){

		const {
			data: {
				data: { allSubjects, allTeachers, allShifts },
			},
		} = await appRequest(query)
		const subjects = allSubjects.edges.node.map(item => item.nome)
		const teachers = allTeachers.edges.node.map(item => item.nome)
		const shifts = allShifts.edges.node.map(item => item.nome)

			setSubjects(subjects)
			setTeachers(teachers)
			setShifts(shifts)
			
	}
	renderData()
},[]) 

    
	return (
	<List {...props}>
		<Datagrid rowClick="edit">
		<NumberField source="id" label="ID"/>
		<TextField source="turma" label="Turma"/>
		<EmailField source="sala" label="Sala"/>
    <TextField source="horario" label="Horário" />
		<TextField source={teachers} label="Professor"/>
		<EditButton/>
		<DeleteButton/>
		<ShowButton/>
		</Datagrid>
	</List>
	)}