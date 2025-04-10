import styled from 'styled-components';
import { colors } from '../../layout/theme/colors';

const Style = styled.div`
  .chat {
    &-body {
      .message-container {
        max-height: calc(100vh - 220px);
        overflow-y: scroll;
        padding-bottom: 60px;
        height: 100%;
        background-color: ${colors.white};
        .chat-profile {
          max-width: 24px;
          border-radius: 15px;
          background: ${colors.white};
          img {
            width: 100%;
            border-radius: 50%;
          }
        }
        .message {
          min-width: 55px;
          display: inline-block;
          padding: 10px;
          position: relative;
          width: max-content;
          &.you {
            background: ${colors.info_100};
            border-radius: 10px 10px 10px 0;
          }
          &.other {
            background: ${colors.secondary_100};
            border-radius: 10px 10px 0 10px;
          }
          p {
            overflow-wrap: break-word;
            color: ${colors.secondary_900};
          }
        }
      }
    }
    &-footer {
      position: absolute;
      width: 100%;
      bottom: 0;
      /* padding: 30px 0; */
      right: 0;
      input {
        outline: none;
        border: none;
        border-top: solid 1px ${colors.secondary_200};
        padding-right: 170px !important;
        &::placeholder {
          font-size: 14px;
          color: ${colors.secondary_400};
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      .chatButtons {
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
      }
    }
    &.mobile {
      position: relative;
      top: 140px;
      overflow: hidden;

      .chat-body {
        .message-container {
          overflow: hidden;
          min-height: calc(100vh - 200px);
        }
      }
      .chat-footer {
        position: fixed;
        width: 100%;
        bottom: 0;
        right: 0;
      }
    }
  }
  /*  */
  /* انیمیشن fade-in برای پیام‌ها */
  @keyframes fadeInMessage {
    0% {
      opacity: 0;
      transform: translateX(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .message-animation {
    animation: fadeInMessage 0.3s ease-out forwards; /* زمان انیمیشن و نوع حرکت */
  }

  @media (min-width: 768px) {
    .chat {
      margin-right: auto;
      margin-left: auto;
    }
  }
`;

export default Style;
