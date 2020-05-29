import React from 'react';
// import jsonServerProvider from 'ra-data-json-server';
import authProvider from './providers/authProvider';
import { Admin, Resource } from 'react-admin';
import { UserList, UserCreate, UserUpdate, UserShow } from './components/users';
import { SubjectCreate, SubjectList, SubjectUpdate, SubjectShow } from './components/subjects';
import { TeacherCreate, TeacherList, TeacherUpdate, TeacherShow } from './components/teacher';
import { ShiftCreate, ShiftList, ShiftUpdate, ShiftShow } from './components/shift';
import { ClassList } from './components/classrooms/classList'
import { ClassCreate } from './components/classrooms/classCreate'
import { ClassUpdate } from './components/classrooms/classUpdate'
import dataProvider from './providers/dataProvider'

function App() {
  return (
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
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
        list={ClassList}
        create={ClassCreate}
        edit={ClassUpdate}
      />


    </Admin>
  )
}
export default App;