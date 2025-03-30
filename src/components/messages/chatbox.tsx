import { useRef, useState } from 'react';
import Style from './style';
import { InfoButton } from '../ui/buttons';
import { Container } from 'react-bootstrap';

const Chat = ({}) => {
  const [currentMessage, setCurrentMessage] = useState('');
  const lastMessageRef = useRef<any>(null); // مرجع آخرین پیام
  const [messages, setMessages] = useState([
    {
      text: 'Hi! Just a reminder that the final approval for the deliverables is due next Monday. Could you confirm if everything is on track?',
      sender: 'other',
      time: '10:01 AM',
      profile: '../../assets/images/jack.png',
    },
    {
      text: 'Hi Sophia, thanks for the reminder! Yes, we’re on track to finalize everything by Friday. I’ll send you a detailed status update by end of the day tomorrow',
      sender: 'me',
      time: '10:04 AM',
      profile: '../../assets/images/jack.png',
    },
    {
      text: 'Hi Sophia, thanks for the reminder! Yes, we’re on track to finalize everything by Friday. I’ll send you a detailed status update by end of the day tomorrow',
      sender: 'me',
      time: '10:04 AM',
      profile: '../../assets/images/jack.png',
    },
    {
      text: 'Hi Sophia, thanks for the reminder! Yes, we’re on track to finalize everything by Friday. I’ll send you a detailed status update by end of the day tomorrow',
      sender: 'me',
      time: '10:04 AM',
      profile: '../../assets/images/jack.png',
    },
    {
      text: 'Hi Sophia, thanks for the reminder! Yes, we’re on track to finalize everything by Friday. I’ll send you a detailed status update by end of the day tomorrow',
      sender: 'me',
      time: '10:04 AM',
      profile: '../../assets/images/jack.png',
    },
    {
      text: 'Hi Sophia, thanks for the reminder! Yes, we’re on track to finalize everything by Friday. I’ll send you a detailed status update by end of the day tomorrow',
      sender: 'me',
      time: '10:04 AM',
      profile: '../../assets/images/jack.png',
    },
    {
      text: 'Hi Sophia, thanks for the reminder! Yes, we’re on track to finalize everything by Friday. I’ll send you a detailed status update by end of the day tomorrow',
      sender: 'me',
      time: '10:04 AM',
      profile: '../../assets/images/jack.png',
    },
    {
      text: 'Great! Also, could you make sure the product pages are optimized for mobile before you send them over?',
      sender: 'other',
      time: '10:05 AM',
      profile: '../../assets/images/jack.png',
    },
    {
      text: 'Perfect, thank you! Let me know if there’s anything else you need from our side to expedite the process',
      sender: 'me',
      time: '10:02 AM',
      profile: '../../assets/images/jack.png',
    },
    {
      text: 'Thanks, Sophia! We’re all set for now. I’ll follow up tomorrow with the update and next steps',
      sender: 'other',
      time: '10:02 AM',
      profile: '../../assets/images/jack.png',
    },
  ]);

  const sendMessage = async () => {
    // document.getElementById('textAreaInput').focus()

    if (currentMessage !== '' && currentMessage) {
      const messageData = {
        profile: '../../assets/images/jack.png',
        sender: 'me',
        text: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes(),
      };
      setCurrentMessage('');
      setMessages((list) => [...list, messageData]);
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // end renderFarms

  return (
    <Style className="h-100">
      <header className="border-start border-secondary-200 cursor-pointer d-flex align-items-center border-bottom border-secondary-200 py-md-4 px-3">
        <div>
          <img width="32" src="../../assets/images/mina.png" alt="profile" />
        </div>
        <div className="w-100 ps-3">
          <h4 className="fw-semibold fs-14 mb-1">Sophia Lee</h4>
          <p className="fw-bold fs-12 text-primary-600">Active</p>
        </div>
      </header>
      <div className="border-start border-secondary-200 chat py-3">
        <div className="chat-body">
          <Container fluid="lg">
            <div className="message-container px-3 w-100 hideScroll">
              {messages.map((messageContent, index) => {
                return (
                  <div
                    key={index}
                    ref={index === messages.length - 1 ? lastMessageRef : null} // آخرین پیام
                    className={`d-flex align-items-end mb-3 w-75 ${
                      messageContent.sender === 'me'
                        ? 'float-end flex-row-reverse'
                        : ''
                    }`}
                  >
                    <div
                      className={`chat-profile ${messageContent.sender === 'me' ? 'ms-2' : 'me-2'}`}
                    >
                      <img
                        width={24}
                        src={
                          messageContent.sender === 'me'
                            ? messageContent.profile
                            : '../../assets/images/mina.png'
                        }
                        alt="profile"
                      />
                    </div>
                    <div
                      className={
                        messageContent.sender === 'other'
                          ? 'message you'
                          : 'message other'
                      }
                    >
                      <div className="message-content">
                        <p className="fs-14 text-secandory-700 mb-0">
                          {messageContent.text}
                        </p>
                      </div>
                      <div className="message-meta text-end">
                        <span className="fs-10 text-secandory-400 mb-0">
                          {messageContent.time}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div
                className="d-flex align-items-end mb-3 w-75"
                style={{ minHeight: '75px', width: '100%' }}
              ></div>
            </div>
          </Container>
        </div>
        <div className="chat-footer border-start border-secondary-200 bg-white">
          <div className="position-relative d-flex">
            <input
              className="w-100 bg-white py-3 px-3"
              value={currentMessage}
              type="text"
              placeholder="Type your messages here"
              onChange={(event) => {
                event.preventDefault();
                setCurrentMessage(event.target.value);
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  sendMessage();
                }
              }}
            />
            <div className="chatButtons d-flex align-items-stretch gap-2">
              <div
                className="border border-secondary-200 rounded-10 d-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px' }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.1664 9.83254L8.99138 11.0075C8.34138 11.6575 8.34138 12.7159 8.99138 13.3659C9.64138 14.0159 10.6997 14.0159 11.3497 13.3659L13.1998 11.5159C14.4998 10.2159 14.4998 8.10755 13.1998 6.79922C11.8998 5.49922 9.79139 5.49922 8.48306 6.79922L6.46641 8.81587C5.34974 9.93254 5.34974 11.7409 6.46641 12.8575"
                    stroke="#161618"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.50033 18.3327H12.5003C16.667 18.3327 18.3337 16.666 18.3337 12.4993V7.49935C18.3337 3.33268 16.667 1.66602 12.5003 1.66602H7.50033C3.33366 1.66602 1.66699 3.33268 1.66699 7.49935V12.4993C1.66699 16.666 3.33366 18.3327 7.50033 18.3327Z"
                    stroke="#161618"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <InfoButton
                classes="d-flex align-items-center justify-content-center h-100 px-3"
                onClick={sendMessage}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.54977 2.74012L9.91727 0.617616C12.7748 -0.334884 14.3273 1.22512 13.3823 4.08262L11.2598 10.4501C9.83477 14.7326 7.49477 14.7326 6.06977 10.4501L5.43977 8.56012L3.54977 7.93012C-0.732734 6.50512 -0.732734 4.17262 3.54977 2.74012Z"
                    fill="white"
                  />
                </svg>

                <span className="px-2">Send</span>
              </InfoButton>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
};

export default Chat;
