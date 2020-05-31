import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Create,
  Show,
  Edit,
  SimpleForm,
  SelectInput,
  SimpleShowLayout,
  required,
} from "react-admin";
import { BtnEdit, BtnShow, BtnDelete } from "../utils/templates/buttons";

export const ShiftList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="nome" label="Turnos" />
      <BtnShow />
      <BtnEdit />
      <BtnDelete />
    </Datagrid>
  </List>
);

export const ShiftCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <SelectInput
        source="nome"
        label="Turnos"
        validate={required()}
        choices={[
          { id: "Manhã", name: "Manhã" },
          { id: "Noite", name: "Noite" },
        ]}
      />
    </SimpleForm>
  </Create>
);

export const ShiftUpdate = (props) => (
  <Edit title="Edição de Turno" {...props}>
    <SimpleForm>
      <SelectInput
        source="nome"
        label="Turno"
        validate={required()}
        choices={[
          { id: "manha", name: "Manhã" },
          { id: "noite", name: "Noite" },
        ]}
      />
    </SimpleForm>
  </Edit>
);

export const ShiftShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" label="ID" />
      <TextField source="nome" label="Turno" />
    </SimpleShowLayout>
  </Show>
);
