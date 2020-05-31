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
	maxLength,
	minLength,
	required
	
} from 'react-admin';
import { BtnEdit, BtnShow, BtnDelete } from '../utils/templates/buttons'
import { mediumText, emailValidate } from '../utils/validators/validations'


export const UserList = props => (
	<List {...props}>
		<Datagrid>
			<TextField source="id" label="ID"/>
			<TextField source="nome" label="Nome"/>
			<EmailField source="email" label="E-mail"/>
			<BtnShow/>
      <BtnEdit/>
      <BtnDelete/>
		</Datagrid>
	</List>
	);

export const UserCreate = props => (
	<Create title="Criação de Usuário" {...props}>
		<SimpleForm>
		<TextInput source="nome" label="Nome" validate={mediumText} />
		<TextInput source="email" label="E-mail" validate={emailValidate}/>
		<PasswordInput source="senha" label="Senha" validate={[
			required(),
			minLength(6, "Senha deve ter no mínimo 6 digitos"),
			maxLength(8, "Senha deve ter no máximo 8 dígitos")]}/>
		</SimpleForm>
	</Create>
)

export const UserUpdate = props => (
	<Edit title="Edição de Usuário" {...props}>
		<SimpleForm>
		<TextInput source="nome" label="Nome"validate={mediumText} />
		<TextInput source="email" label="E-mail" validate={emailValidate}/>
		<PasswordInput source="senha" label="Senha" validate={[
			required(),
			minLength(6, "Senha deve ter no mínimo 6 digitos"),
			maxLength(8, "Senha deve ter no máximo 8 dígitos")]}/>
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



