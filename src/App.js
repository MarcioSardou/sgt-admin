import React from 'react';
// import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { UserList, UserCreate, UserUpdate, UserShow } from './components/users';
import { SubjectCreate, SubjectList, SubjectUpdate, SubjectShow } from './components/subjects';
import { TeacherCreate, TeacherList, TeacherUpdate, TeacherShow } from './components/teacher';
import { ShiftCreate, ShiftList, ShiftUpdate, ShiftShow } from './components/shift';


import dataProvider from './providers/dataProvider'

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="Subjects"
        list={SubjectList}
        create={SubjectCreate}
        edit={SubjectUpdate}
        show={SubjectShow}
      />

      <Resource
        name="Teachers"
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
        name="Shifts"
        list={ShiftList}
        create={ShiftCreate}
        edit={ShiftUpdate}
        show={ShiftShow}
      />

      <Resource
        name="ClassRooms"
        list={ListGuesser}
      />


    </Admin>
  )
}
export default App;