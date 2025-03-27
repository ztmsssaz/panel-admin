import {ReactNode} from 'react'
import Sidebar from '../components/ui/sidebar'
import {Col, Container, Row} from 'react-bootstrap'
import GlobalStyle from './theme/globalStyle'

function Layout({children}: {children: ReactNode}) {
  return (
    <Container fluid='xxl' className='bg-secondary-100 vw-100 mx-auto p-0'>
      <GlobalStyle />
      <Row>
        <Col xs={2} className='vh-100'>
          <Sidebar />
        </Col>
        <Col xs={10} className='vh-100'>
          <div>{children}</div>
        </Col>
      </Row>
    </Container>
  )
}

export default Layout
