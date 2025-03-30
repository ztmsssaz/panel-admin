import { ReactNode } from 'react';
import Sidebar from '../components/ui/sidebar';
import { Container } from 'react-bootstrap';
import GlobalStyle from './theme/globalStyle';

function Layout({ children }: { children: ReactNode }) {
  return (
    <Container
      fluid
      className="mx-auto overflow-y-scroll hideScroll h-100 mx-3"
    >
      <GlobalStyle />
      <div className="d-flex">
        <div
          className="vh-75 my-3 d-none d-md-block"
          style={{ minWidth: '220px' }}
        >
          <Sidebar />
        </div>
        <div
          className="bg-white w-100 rounded-3 my-3 mx-auto overflow-y-scroll hideScroll mx-0"
          style={{ boxShadow: '0px 1px 2px 0px rgba(82, 88, 102, 0.06)' }}
        >
          {children}
        </div>
      </div>
    </Container>
  );
}

export default Layout;
