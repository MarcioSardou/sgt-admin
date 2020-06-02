import React from "react";
import authProvider from "./providers/authProvider";
// import translation from "./utils/translation";
// import portugueseMessages from "ra-language-portuguese";
// import polyglotI18nProvider from "ra-i18n-polyglot";
import { Admin, Resource } from "react-admin";
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
import {
  ShiftCreate,
  ShiftList,
  ShiftUpdate,
  ShiftShow,
} from "./components/shift";
import { ClassList } from "./components/classrooms/classList";
import { ClassCreate } from "./components/classrooms/classCreate";
import { ClassUpdate } from "./components/classrooms/classUpdate";
import { ClassShow } from "./components/classrooms/classShow";
import dataProvider from "./providers/dataProvider";

// const messages = {
//   pt: portugueseMessages,
// };
// const i18nProvider = (locale) => messages[locale];

function App() {
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      locale="pt"
      // i18nProvider={i18nProvider}
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
        options={{ label: "Turnos" }}
        name="Shifts"
        list={ShiftList}
        create={ShiftCreate}
        edit={ShiftUpdate}
        show={ShiftShow}
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
