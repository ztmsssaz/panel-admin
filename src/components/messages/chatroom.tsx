import styled from 'styled-components'
import ChatItem from './chatItem'
import {Tab, Tabs} from 'react-bootstrap'
import {colors} from '../../layout/theme/colors'
import Search from './search'
const Style = styled.div`
  .nav-tabs .nav-item .nav-link {
    color: ${colors.secondary_400};
    font-weight: 600;
    font-size: 14px;
    background-color: ${colors.white};
    border: none;
  }

  .nav-tabs .nav-item .nav-link.active {
    color: ${colors.secondary_700};
    border-color: ${colors.secondary_200} !important;
    box-shadow: 0px 1px 2px 0px rgba(82, 88, 102, 0.06);
    border-bottom: solid 2px ${colors.info_600} !important;
  }
`
function Chatroom() {
  return (
    <Style>
      <div>
        <Search />
      </div>
      <Tabs defaultActiveKey='All' id='chatroom-tabs' className='mb-3'>
        <Tab eventKey='All' title='All'>
          <ChatItem />
          <ChatItem />
          <ChatItem />
        </Tab>
        <Tab eventKey='Unread' title='Unread'>
          Tab content for Unread
        </Tab>
      </Tabs>
    </Style>
  )
}

export default Chatroom
