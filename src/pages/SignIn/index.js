import React from 'react';
/*
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
*/

// import { Container } from './styles';
import logo from '~/assets/logo.svg';
/*
const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira seu e-mail')
    .required('O e-mail é obrigatorio!'),
  password: Yup.string().required('A senha é obrigatória!'),
});
*/
export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GymPoint" />
    </>
  );
}
