import {useState} from 'react'
import Style from './style'

const Chat = ({}) => {
  const [currentMessage, setCurrentMessage] = useState('')
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
  ])
  const sendMessage = async () => {
    document.getElementById('textAreaInput').focus()

    if (currentMessage !== '' && currentMessage) {
      const messageData = {
        profile: '../../assets/images/jack.png',
        sender: 'me',
        text: currentMessage,
        time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
      }
      setCurrentMessage('')
      setMessages((list) => [...list, messageData])
      document.body.scrollTo(0, document.body.scrollHeight + 50)
    }
  }
  // end renderFarms

  return (
    <Style>
      <div className='chat'>
        <div id='chatBody' className='chat-body container'>
          <div className='message-container overflow-visible-chat'>
            {messages.map((messageContent, index) => {
              return (
                <div
                  key={index}
                  className={`d-flex align-items-end mb-3 w-75 ${
                    messageContent.sender === 'me' ? 'float-end flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`chat-profile ${messageContent.sender === 'me' ? 'ms-2' : 'me-2'}`}
                  >
                    <img
                      src={
                        messageContent.sender === 'me'
                          ? messageContent.profile
                          : '../../assets/images/mina.png'
                      }
                      alt='profile'
                    />
                  </div>
                  <div
                    className={messageContent.sender === 'other' ? 'message you' : 'message other'}
                  >
                    <div className='message-content'>
                      <p className='fs-14 text-secandory-700 mb-0'>{messageContent.text}</p>
                    </div>
                    <div className='message-meta text-end'>
                      <span className='fs-10 text-secandory-400 mb-0'>{messageContent.time}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='chat-footer container bg-white pb-3'>
          <div className='position-relative d-flex'>
            {/* <FontAwesomeIcon className='attachment' icon={faPaperclip} color={theme.gray} /> */}
            <textarea
              id='textAreaInput'
              className='border-0 light-shadow rad-15'
              type='text'
              value={currentMessage}
              placeholder='تایپ کنید...'
              onChange={(event) => {
                event.preventDefault()
                setCurrentMessage(event.target.value)
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault()
                  sendMessage()
                }
              }}
            />
            <button className='bg-transparent border-0' onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </Style>
  )
}

export default Chat
