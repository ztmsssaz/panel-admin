import styled from 'styled-components'
import {colors} from '../../layout/theme/colors'

const Style = styled.div`
  .chat {
    min-height: 40vh;
    max-width: 700px;
    margin: 30px 10px 0 10px;
    padding-bottom: 20px;
    .overflow-visible-chat > div {
      overflow: visible;
    }
    &-body {
      .message-container {
        margin: 15px;
        height: 100%;

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
          &.you {
            background: ${colors.info_100};
            border-radius: 10px 10px 10px 0;
          }
          &.other {
            background: ${colors.secondary_100};
            border-radius: 10px 10px 0 10px;
            margin-right: auto;
          }
          p {
            overflow-wrap: break-word;
            color: ${colors.secondary_900};
          }
        }
      }
    }
    &-footer {
      width: 100%;
      max-width: 700px;
      margin: 0 auto;
      text-align: center;
      transform: translateX(-50%);
      .attachment,
      button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 3;
      }
      .attachment {
        right: 15px;
      }
      textarea {
        z-index: 2;
        width: 100%;
        height: 45px;
        max-height: 60px;
        padding: 10px 50px;
        border: none;
        &::placeholder {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      button {
        max-width: 45px;
        left: 8px;
      }
    }
  }
  @media (min-width: 768px) {
    .chat {
      margin-right: auto;
      margin-left: auto;
    }
  }
`

export default Style
