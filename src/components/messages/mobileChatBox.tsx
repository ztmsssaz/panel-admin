import { useEffect, useRef, useState } from 'react';
import Style from './style';
import { InfoButton } from '../ui/buttons';
import { Container } from 'react-bootstrap';
import { ArrowLeftIcon, SendIcon } from '../ui/icons/svgs';
import Skeleton from 'react-loading-skeleton';
// import { useSearchParams } from 'react-router';
import CallAndOthers from './call&others';
import MobileNavbar from '../ui/topNavBar/mobileNavbar';
import { NavLink, useNavigate, useParams } from 'react-router';

const MobileChatBox = ({}) => {
  const [currentMessage, setCurrentMessage] = useState('');
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(true);
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
      sender: 'other',
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
      sender: 'other',
      time: '10:04 AM',
      profile: '../../assets/images/jack.png',
    },
    {
      text: 'Hi Sophia, thanks for the reminder! Yes, we’re on track to finalize everything by Friday. I’ll send you a detailed status update by end of the day tomorrow',
      sender: 'me',
      time: '10:04 AM',
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
    if (window.innerWidth >= 768) {
      navigate(`/messages/${params.chatId}`);
    }
  }, []);

  return (
    <Style>
      <header className="bg-white position-fixed w-100 top-0 start-0 z-2">
        <MobileNavbar road={'Messages'} />
        <div
          className="d-flex align-items-center justify-content-between border-start border-secondary-200
       border-bottom border-secondary-200 py-3 py-md-4 px-3"
        >
          <div className="d-flex align-items-center">
            <NavLink className="d-md-none me-3" to="/messages">
              <ArrowLeftIcon />
            </NavLink>
            <div>
              {!loading ? (
                <img
                  width="32"
                  src="../../assets/images/mina.png"
                  alt="profile"
                />
              ) : (
                <Skeleton width={32} height={32} circle baseColor="#ccc" />
              )}
            </div>
            <div className="w-100 ps-3">
              <h4 className="fw-semibold fs-14 mb-1">
                {!loading ? 'Sophia Lee' : <Skeleton width={100} />}
              </h4>
              <p className="fw-bold fs-12 text-primary-600">
                {!loading ? 'Active' : <Skeleton width={45} />}
              </p>
            </div>
          </div>
          <CallAndOthers />
        </div>
      </header>
      <div className="chat mobile border-start border-secondary-200 py-3">
        <div className="chat-body">
          <div className="message-container w-100 overflow-scroll hideScroll">
            <Container fluid="lg">
              {messages.length > 0 ? (
                messages.map((messageContent, index) => {
                  return (
                    <div
                      key={index}
                      ref={
                        index === messages.length - 1 ? lastMessageRef : null
                      } // آخرین پیام
                      className={`d-flex align-items-end mb-3 w-75 ${
                        messageContent.sender === 'me'
                          ? 'float-end flex-row-reverse'
                          : ''
                      }`}
                    >
                      <div
                        className={`chat-profile ${messageContent.sender === 'me' ? 'ms-2' : 'me-2'}`}
                      >
                        {!loading ? (
                          <img
                            width={24}
                            src={
                              messageContent.sender === 'me'
                                ? messageContent.profile
                                : '../../assets/images/mina.png'
                            }
                            alt="profile"
                          />
                        ) : (
                          <Skeleton width={24} height={24} circle />
                        )}
                      </div>
                      <div
                        className={
                          messageContent.sender === 'other'
                            ? 'message you'
                            : 'message other'
                        }
                      >
                        <div className="message-content">
                          {!loading ? (
                            <p className="fs-14 text-secandory-700 mb-0">
                              {messageContent.text}
                            </p>
                          ) : (
                            <Skeleton
                              wrapper={({ children }) => (
                                <p className="d-block">{children}</p>
                              )}
                              containerClassName="d-block"
                              count={2}
                              baseColor="#fff"
                            />
                          )}
                        </div>
                        <div className="message-meta text-end">
                          <span className="fs-10 text-secandory-400 mb-0">
                            {!loading ? (
                              messageContent.time
                            ) : (
                              <Skeleton width={40} baseColor="#fff" />
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="centered text-secondary-400">Message Now!</p>
              )}
              <div
                className="d-flex align-items-end mb-3 w-75"
                style={{ minHeight: '75px', width: '100%' }}
              ></div>
            </Container>
          </div>
        </div>
        <div className="chat-footer rounded-bottom-10 border-start border-secondary-200 bg-white">
          <div className="d-flex">
            <input
              className="w-100 bg-white rounded-bottom-10 py-3 px-3"
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
                classes="d-flex align-items-center justify-content-center px-3"
                onClick={sendMessage}
              >
                <SendIcon />
                <span className="px-2">Send</span>
              </InfoButton>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
};

export default MobileChatBox;
