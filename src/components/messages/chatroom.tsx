import { useCallback, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../layout/theme/colors';
import ChatItem from './chatItem';
import Search from './search';
import PivotTeamDropDown from '../ui/sidebar/pivotTeam';

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
`;

function Chatroom({ chatList }: { chatList: boolean }) {
  const [activeChat, setActiveChat] = useState<number>(0);

  const activateChat = useCallback((id: number) => {
    setActiveChat(id);
  }, []);
  return (
    <Style className="mt-2">
      <div className="d-flex d-md-none">
        <PivotTeamDropDown />
      </div>
      <Search />
      <Tabs defaultActiveKey="All" id="chatroom-tabs" className="mb-3">
        <Tab eventKey="All" title="All">
          <ChatItem
            data={chatList}
            id={1}
            active={activeChat}
            onActive={activateChat}
          />
          <ChatItem
            data={chatList}
            id={2}
            active={activeChat}
            onActive={activateChat}
          />
          <ChatItem
            data={chatList}
            id={3}
            active={activeChat}
            onActive={activateChat}
          />
        </Tab>
        <Tab eventKey="Unread" title="Unread">
          Tab content for Unread
        </Tab>
      </Tabs>
    </Style>
  );
}

export default Chatroom;
