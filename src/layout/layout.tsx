import { ReactNode, useState } from 'react';
import Sidebar from '../components/ui/sidebar/sidebar';
import { Container } from 'react-bootstrap';
import GlobalStyle from './theme/globalStyle';
import { useRealVh } from '../hooks/useRealVh';
import styled from 'styled-components';

const Styles = styled.div`
  aside {
    position: fixed;
    left: 0;
  }
  @media screen and (min-width: 992px) {
    section {
      margin: 10px 0 10px 240px;
    }
  }
`;

const Layout = ({ children }: { children: ReactNode }) => {
  const [toggle, _setToggle] = useState<boolean>(true);
  useRealVh();

  return (
    <Container
      fluid
      className="mx-auto overflow-y-scroll hideScroll h-100 mx-3 px-0 px-md-2"
    >
      <GlobalStyle />
      <Styles>
        <main className="d-flex" style={{ height: 'calc(var(--vh) * 100)' }}>
          <aside
            className="d-none d-lg-block h-100"
            style={{ transition: '0.3s', width: toggle ? '240px' : '50px' }}
          >
            <div className="position-relative h-100">
              <Sidebar open={toggle} />
            </div>
          </aside>
          <section className="w-100 overflow-y-scroll hideScroll rounded-10">
            <div
              className="bg-white rounded-3 my-md-2 my-lg-0"
              style={{
                boxShadow: '0px 1px 2px 0px rgba(82, 88, 102, 0.06)',
              }}
            >
              {children}
            </div>
          </section>
        </main>
      </Styles>
    </Container>
  );
};

export default Layout;
