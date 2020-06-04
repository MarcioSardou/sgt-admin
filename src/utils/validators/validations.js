import { required, maxLength, minLength, regex } from "react-admin";

const mandatory = required("Esse campo é obrigatório");

const smallText = [mandatory, maxLength(20)];

const mediumText = [mandatory, maxLength(30)];

const largeText = [mandatory, maxLength(50)];

const codValidation = [mandatory, minLength(7), maxLength(10)];

const emailValidate = [
  mandatory,
  regex(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    "Insira um email válido"
  ),
];

const timeValidate = [
  mandatory,
  regex(
    /^([0-1]?[0-9]|2[0-3]):[0-5][0-9] - ([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
    "Padrão de horário: HH:MM - HH:MM"
  ),
];

const dateValidate = [
  mandatory,
  regex(
    /^\d{4}\-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
    "Padrão de data: 2020-01-15"
  ),
];

export {
  smallText,
  mediumText,
  largeText,
  emailValidate,
  codValidation,
  timeValidate,
  dateValidate,
};
