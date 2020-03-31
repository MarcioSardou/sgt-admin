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
	EditButton,
	DeleteButton,
	ShowButton,
	
} from 'react-admin';


export const UserList = props => (
	<List {...props}>
		<Datagrid>
		<TextField source="id" />
		<TextField source="name" />
		<TextField source="username" />
		<EditButton/>
		<DeleteButton/>
		<ShowButton/>
		</Datagrid>
	</List>
	);

export const UserCreate = props => (
	<Create {...props}>
		<SimpleForm>
		<TextInput source="name" />
		<TextInput source="username" />
		</SimpleForm>
	</Create>
)

export const UserUpdate = props => (
	<Edit title="Edição de Usuário" {...props}>
		<SimpleForm>
		<TextInput source="name" />
		<TextInput source="username" />
		</SimpleForm>
	</Edit>
)

export const UserShow = (props) => (
	<Show {...props}>
			<SimpleShowLayout>
					<TextField source="name" />
					<TextField source="username" />
			</SimpleShowLayout>
	</Show>
);



