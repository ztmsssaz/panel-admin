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
  .tab-content .tab-item {
    max-height: calc(100vh - 220px);
    overflow-y: auto;
    direction: rtl;
    div {
      direction: ltr;
    }
  }
`;

function Chatroom({ chatList }: { chatList: boolean }) {
  const [activeChat, setActiveChat] = useState<number>(0);

  const activateChat = useCallback((id: number) => {
    setActiveChat(id);
  }, []);
  return (
    <Style className="mt-2" data-testid="chatroom">
      <div className="d-flex d-md-none">
        <PivotTeamDropDown />
      </div>
      <Search />
      <Tabs defaultActiveKey="All" id="chatroom-tabs" className="mb-3">
        <Tab eventKey="All" title="All" className="tab-item">
          <div>
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
        <Tab eventKey="Unread" title="Unread(1)" className="tab-item">
          <div>
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
