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
  .chatItems {
    .tab-content #chatroom-tabs-tabpane-All {
      max-height: calc(100vh - 100px);
      overflow-y: scroll;
    }
  }
`;

function Chatroom({ chatList }: { chatList: boolean }) {
  const [activeChat, setActiveChat] = useState<number>(0);

  const activateChat = useCallback((id: number) => {
    setActiveChat(id);
  }, []);
  return (
    <Style className="chatItems mt-2">
      <div className="d-flex d-md-none">
        <PivotTeamDropDown />
      </div>
      <Search />
      <Tabs defaultActiveKey="All" id="chatroom-tabs" className="mb-3">
        <Tab eventKey="All" title="All">
          <div
            className="overflow-y-scroll bg-white"
            style={{
              maxHeight: 'calc(100vh - 230px)',
              minHeight: 'calc(100vh - 230px)',
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((id) => (
              <ChatItem
                key={id}
                data={chatList}
                id={id}
                active={activeChat}
                onActive={activateChat}
              />
            ))}
          </div>
        </Tab>
        <Tab eventKey="Unread" title="Unread(1)">
          <div
            className="overflow-y-scroll bg-white"
            style={{
              maxHeight: 'calc(100vh - 230px)',
              minHeight: 'calc(100vh - 230px)',
            }}
          >
            <ChatItem
              data={chatList}
              id={1}
              active={activeChat}
              onActive={activateChat}
            />
          </div>
        </Tab>
      </Tabs>
    </Style>
  );
}

export default Chatroom;
