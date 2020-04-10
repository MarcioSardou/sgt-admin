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


export const UserList = props => (
	<List {...props}>
		<Datagrid>
			<TextField source="id" label="ID"/>
			<TextField source="nome" label="Nome"/>
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
		<TextInput source="nome" label="Nome"/>
		<TextInput source="email" label="E-mail"/>
		<PasswordInput source="senha" label="Senha" />
		</SimpleForm>
	</Create>
)

export const UserUpdate = props => (
	<Edit title="Edição de Usuário" {...props}>
		<SimpleForm>
		<TextInput source="nome" label="Nome"/>
		<TextInput source="email" label="E-mail"/>
		<PasswordInput source="senha" label="Senha" />
		</SimpleForm>
	</Edit>
)

export const UserShow = (props) => (
	<Show title="Exibição de Usuário" {...props}>
			<SimpleShowLayout>
					<TextField source="nome" />
					<TextField source="email" />
			</SimpleShowLayout>
	</Show>
);



