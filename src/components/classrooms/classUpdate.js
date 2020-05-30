import React, { useState, useEffect } from 'react';
import { appRequest } from '../../providers/dataProvider'
import { query } from '../../constants/queries'
import {
	Edit,
	SimpleForm,
  TextInput,
  SelectInput,

	
} from 'react-admin';


export const ClassUpdate = props => {

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
    const subject = allSubjects.edges.node.map(item  => ({...item,name : item.nome}))
    const teacher = allTeachers.edges.node.map(item  => ({...item,name : item.nome}))
		const shift = allShifts.edges.node.map(item  => ({...item,name : item.nome}))
    
			setSubjects(subject)
			setTeachers(teacher)
      setShifts(shift)
      console.log(subject);
      	 
  }
	renderData()
},[]) 



	return (
	<Edit title="Edição de Turma" {...props}>
		<SimpleForm>
		<TextInput source="turma" label="Turma"/>
		<TextInput source="sala" label="Sala"/>
		<TextInput source="horario" label="Horário"/>
    <SelectInput 
      source="professor_id"
      label="Professor"
      choices={teachers}
    />
    <SelectInput 
      source="disciplina_id"
      label="Disciplina"
      choices={subjects}
    />
    <SelectInput 
      source="turno_id"
      label="Turno"
      choices={shifts}
    />
		</SimpleForm>
	</Edit>
)}




