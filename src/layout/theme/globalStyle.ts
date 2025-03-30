import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Giest';
    src: url('/assets/fonts/Geist-Regular.woff2') format('woff2');
    font-weight: normal;
  }
  @font-face {
    font-family: 'Giest';
    src: url('/assets/fonts/Geist-Medium.woff2') format('woff2');
    font-weight: bold;
  }
  @font-face {
    font-family: 'Giest';
    src: url('/assets/fonts/Geist-SemiBold.woff2') format('woff2');
    font-weight: 600;
  }

  /* Colors */
  ${Object.entries(colors)
    .map(
      ([key, value]) => `
        .text-${key.replace(/_/g, '-')} { color: ${value} !important; }
        .bg-${key.replace(/_/g, '-')} { background-color: ${value} !important; }
        .border-${key.replace(/_/g, '-')} { border-color: ${value} !important; }
      `,
    )
    .join('')}

  /* Font Sizes */
  ${[10, 11, 12, 13, 14, 15, 16, 17, 18, 24]
    .map((size) => `.fs-${size} { font-size: ${size}px; }`)
    .join('\n')}

  /* Default Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Giest';
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  a {
    text-decoration: none;
  }

  /* Border Radius */
  ${[6, 7, 10]
    .map((size) => `.rounded-${size} { border-radius: ${size}px; }`)
    .join('\n')}

  /* Margin & Padding */
  ${[6, 7, 8, 9, 10, 15, 16]
    .map(
      (size) => `
      .m-${size} { margin: ${size}px; }
      .mb-${size} { margin-bottom: ${size}px; }
      .mt-${size} { margin-top: ${size}px; }
      .ml-${size} { margin-left: ${size}px; }
      .mr-${size} { margin-right: ${size}px; }
      .myy-${size} { margin-top: ${size}px; margin-bottom: ${size}px; }
      .p-${size} { padding: ${size}px; }
      .py-${size} { padding-top: ${size}px; padding-bottom: ${size}px; }
      .pb-${size} { padding-bottom: ${size}px; }
      .pt-${size} { padding-top: ${size}px; }
      .pl-${size} { padding-left: ${size}px; }
      .pr-${size} { padding-right: ${size}px; }
    `,
    )
    .join('\n')}

  /* Other Styles */
  .dropdown-toggle::after { content: none; }
  .cursor-pointer { cursor: pointer; }
  .inputIcons {
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
  }
  .h-inherit { height: inherit; }
  .hideScroll {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE & Edge */
    &::-webkit-scrollbar { display: none; } /* Chrome, Safari, Opera */
  }
  .vh-98{
    height:98vh;
  }
  .centered{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%)
  }
`;

export default GlobalStyle;
