import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo_header.svg';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content />
      <nav>
        <img src={logo} alt="GymPoint" />
        <Link to="/students">Alunos</Link>
      </nav>

      <aside>
        <Profile>
          <div>
            <strong>{profile.name}</strong>
            <Link to="/">sair do sistema</Link>
          </div>
        </Profile>
      </aside>
    </Container>
  );
}
