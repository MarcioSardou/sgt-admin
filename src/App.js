import React from 'react';
import  { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {UserList, UserCreate, UserUpdate, UserShow } from './components/users'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

function App() {
  return (
    <Admin dataProvider={dataProvider}>

    <Resource 
      name="Disciplinas"
     list={ListGuesser} 
    />

    <Resource 
      name="Professores"
      list={ListGuesser}
    />

    <Resource 
      name="Usuários"
      list={ListGuesser}
    />

    <Resource 
      name="Turnos"
      list={ListGuesser}
    />

    <Resource 
      name="Turmas"
      list={ListGuesser}
    />
    <Resource 
      name="users"
      list={UserList}
      create={UserCreate}
      edit={UserUpdate}
      show={UserShow}
    />
    
    </Admin>
  )
}
  export default App;