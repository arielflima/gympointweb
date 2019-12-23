import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  height: 64px;
  width: 100%;
`;

export const Content = styled.div`
  margin: 0 auto;
  display: flex;

  img {
    margin: 30px;
  }

  aside {
    align-items: flex-end;
    justify-content: end;
    justify-self: end;
  }

  nav {
    align-items: flex-start;
    justify-content: start;
  }
`;

export const Profile = styled.div``;
