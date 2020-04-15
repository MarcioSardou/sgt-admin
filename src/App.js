import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList, UserCreate, UserUpdate, UserShow } from './components/users';
import { SubjectCreate, SubjectList, SubjectUpdate, SubjectShow } from './components/subjects';
import { TeacherCreate, TeacherList, TeacherUpdate, TeacherShow } from './components/teacher';
import { ShiftCreate, ShiftList, ShiftUpdate, ShiftShow } from './components/shift';
import { ClassCreate, ClassList, ClassUpdate, ClassShow } from './components/class';

import dataProvider from './providers/dataProvider'

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="Disciplinas"
        list={SubjectList}
        create={SubjectCreate}
        edit={SubjectUpdate}
        show={SubjectShow}
      />

      <Resource
        name="Teacher"
        list={TeacherList}
        create={TeacherCreate}
        edit={TeacherUpdate}
        show={TeacherShow}
      />

      <Resource
        name="Users"
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
        list={ClassList}
        create={ClassCreate}
        edit={ClassUpdate}
        show={ClassShow}
      />


    </Admin>
  )
}
export default App;