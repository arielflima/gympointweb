import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira seu e-mail')
    .required('O e-mail é obrigatorio!'),
  password: Yup.string().required('A senha é obrigatória!'),
});

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GymPoint" />
      <Form schema={schema}>
        <strong>SEU E-MAIL</strong>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <strong>SUA SENHA</strong>
        <Input name="password" type="password" placeholder="***********" />

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
