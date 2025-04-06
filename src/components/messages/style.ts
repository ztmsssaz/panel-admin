import styled from 'styled-components';
import { colors } from '../../layout/theme/colors';

const Style = styled.div`
  .chat {
    &-body {
      .message-container {
        overflow-y: scroll;
        padding-bottom: 60px;
        height: 100%;
        max-height: calc(100vh - 210px);
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
          width: 100%;
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
  }
  @media (min-width: 768px) {
    .chat {
      margin-right: auto;
      margin-left: auto;
    }
  }
`;

export default Style;
