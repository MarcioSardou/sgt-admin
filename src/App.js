import React from 'react';
import jsonServerProvider from 'ra-data-json-server';
import  { Admin, Resource, ListGuesser } from 'react-admin';
import {UserList, UserCreate, UserUpdate, UserShow } from './components/users';
import { DisciplineCreate, DisciplineList, DisciplineUpdate,DisciplineShow } from './components/subjects';
import { TeacherCreate, TeacherList, TeacherUpdate,TeacherShow } from './components/teacher';
import { ShiftCreate, ShiftList, ShiftUpdate,ShiftShow } from './components/shift';


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

function App() {
  return (
    <Admin dataProvider={dataProvider}>
    <Resource 
      name="Disciplinas"
      list={DisciplineList}
      create={DisciplineCreate}
      edit={DisciplineUpdate}
      show={DisciplineShow} 
    />

    <Resource 
      name="Professores"
      list={TeacherList}
      create={TeacherCreate}
      edit={TeacherUpdate}
      show={TeacherShow} 
    />

    <Resource 
      name="Usuários"
      list={UserList}
      create={UserCreate}
      edit={UserUpdate}
      show={UserShow}
    />

    <Resource 
      name="Turnos"
      list={ShiftList}
      create={ShiftCreate}
      edit={ShiftUpdate}
      show={ShiftShow}
    />

    <Resource 
      name="Turmas"
      list={ListGuesser}
    />

    
    </Admin>
  )
}
  export default App;