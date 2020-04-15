import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	EmailField,
	Create,
	Show,
	Edit,
	SimpleForm,
	TextInput,
	PasswordInput,
	SimpleShowLayout,
	EditButton,
	DeleteButton,
	ShowButton,
	
} from 'react-admin';

import api from '../providers/dataProvider'

export const UserList = props => (
	<List {...props}>
		<Datagrid>
		<TextField source="id" label="ID"/>
		<TextField source="name" label="Nome"/>
		<EmailField source="email" label="E-mail"/>
		<EditButton/>
		<DeleteButton/>
		<ShowButton/>
		</Datagrid>
	</List>
);

export const UserCreate = props => (
	<Create title="Criação de Usuário" {...props}>
		<SimpleForm>
		<TextInput source="name" label="Nome"/>
		<TextInput source="username" label="E-mail"/>
		<PasswordInput source="password" label="Senha" />
		</SimpleForm>
	</Create>
)

export const UserUpdate = props => (
	<Edit title="Edição de Usuário" {...props}>
		<SimpleForm>
		<TextInput source="name" label="Nome"/>
		<TextInput source="username" label="E-mail"/>
		<PasswordInput source="password" label="Senha" />
		</SimpleForm>
	</Edit>
)

export const UserShow = (props) => (
	<Show title="Exibição de Usuário" {...props}>
			<SimpleShowLayout>
					<TextField source="name" />
					<TextField source="username" />
			</SimpleShowLayout>
	</Show>
);



