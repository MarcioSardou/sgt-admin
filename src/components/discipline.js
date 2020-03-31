import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Create,
  Show,
  Edit,
  SimpleForm,
  TextInput,
  SimpleShowLayout,

 } from 'react-admin';

export const DisciplineList = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="cod" />
      </Datagrid>
  </List>
);

