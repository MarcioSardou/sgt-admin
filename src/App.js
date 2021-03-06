import React from "react";
import authProvider from "./providers/authProvider";
import i18nProvider from "./i18n/i18nProvider";
import { Admin, Resource, Notification, Layout } from "react-admin";
import { UserList, UserCreate, UserUpdate, UserShow } from "./components/users";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PeopleIcon from "@material-ui/icons/People";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import EventNoteIcon from "@material-ui/icons/EventNote";

import {
  SubjectCreate,
  SubjectList,
  SubjectUpdate,
  SubjectShow,
} from "./components/subjects";
import {
  TeacherCreate,
  TeacherList,
  TeacherUpdate,
  TeacherShow,
} from "./components/teacher";
import { ClassList } from "./components/classrooms/classList";
import { ClassCreate } from "./components/classrooms/classCreate";
import { ClassUpdate } from "./components/classrooms/classUpdate";
import { ClassShow } from "./components/classrooms/classShow";
import dataProvider from "./providers/dataProvider";

const MyNotification = (props) => (
  <Notification {...props} autoHideDuration={5000} />
);

const MyLayout = (props) => <Layout {...props} notification={MyNotification} />;
function App() {
  return (
    <Admin
      layout={MyLayout}
      authProvider={authProvider}
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
    >
      <Resource
        options={{ label: "Disciplinas" }}
        name="Subjects"
        list={SubjectList}
        create={SubjectCreate}
        edit={SubjectUpdate}
        show={SubjectShow}
        icon={EventNoteIcon}
      />

      <Resource
        options={{ label: "Professores" }}
        name="Teachers"
        list={TeacherList}
        create={TeacherCreate}
        edit={TeacherUpdate}
        show={TeacherShow}
        icon={PeopleIcon}
      />

      <Resource
        options={{ label: "Usuários" }}
        name="Users"
        list={UserList}
        create={UserCreate}
        edit={UserUpdate}
        show={UserShow}
        icon={AccountCircleIcon}
      />

      <Resource
        options={{ label: "Aulas" }}
        name="ClassRooms"
        list={ClassList}
        create={ClassCreate}
        edit={ClassUpdate}
        show={ClassShow}
        icon={MenuBookIcon}
      />
    </Admin>
  );
}
export default App;
