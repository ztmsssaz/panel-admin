import { ReactNode, useState } from 'react';
import Sidebar from '../components/ui/sidebar/sidebar';
import { Container } from 'react-bootstrap';
import GlobalStyle from './theme/globalStyle';

const Layout = ({ children }: { children: ReactNode }) => {
  const [toggle, setToggle] = useState<boolean>(true);

  function handleSidebar() {
    setToggle(!toggle);
  }

  return (
    <Container
      fluid
      className="mx-auto overflow-y-scroll hideScroll h-100 mx-3 px-0 px-md-2"
    >
      <GlobalStyle />
      <div className="d-flex">
        <div
          className="my-3 d-none d-md-block position-relative"
          style={{ transition: '0.3s', width: toggle ? '240px' : '50px' }}
        >
          <Sidebar open={toggle} onClick={handleSidebar} />
        </div>
        <div className="vh-100 w-100 overflow-y-scroll hideScroll">
          <div
            className="bg-white rounded-3 my-md-3"
            s
            style={{ boxShadow: '0px 1px 2px 0px rgba(82, 88, 102, 0.06)' }}
          >
            {children}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Layout;
