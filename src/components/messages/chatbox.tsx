import { useEffect, useRef, useState } from 'react';
import Style from './style';
import { InfoButton } from '../ui/buttons';
import { Container } from 'react-bootstrap';
import { ArrowLeftIcon, SendIcon } from '../ui/icons/svgs';
import Skeleton from 'react-loading-skeleton';
// import { useSearchParams } from 'react-router';
import CallAndOthers from './call&others';
import { NavLink } from 'react-router';
import { AttachmentIcon } from '../ui/icons';

const Chat = ({}) => {
  // const [searchParams] = useSearchParams();
  // const chatId = searchParams.get('chatId');
  const [currentMessage, setCurrentMessage] = useState('');

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
    {
      text: 'Hi Sophia, thanks for the reminder! Yes, we’re on track to finalize everything by Friday. I’ll send you a detailed status update by end of the day tomorrow',
      sender: 'other',
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Style className="position-relative">
      <header
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
      </header>
      <div className="chat border-start border-secondary-200 py-3">
        <div className="chat-body ">
          <div className="message-container w-100 overflow-scroll">
            <Container fluid="lg">
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
              })}
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
              <AttachmentIcon
                classes="border border-secondary-200 border-1 rounded-10 cursor-pointer"
                size={20}
              />

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

export default Chat;
