import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

const sizes = [
  6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 24, 26,
];
const directions = ['', 'top', 'right', 'bottom', 'left'];

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
.transparent-light-gray-border {
  border: 2px solid rgba(255, 255, 255, 0.2); 
}
  /* Font Sizes */
  ${sizes.map((size) => `.fs-${size} { font-size: ${size}px; }`).join('\n')}
/* برای اندازه‌های موبایل (کمتر از 768px) */
  @media (max-width: 768px) {
    ${sizes.map(
      (size) => `
      .fs-md-${size} {
        font-size: ${size}px; /* کاهش اندازه فونت برای موبایل */
      }`,
    )}
  }
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
  ${sizes
    .map((size) =>
      directions
        .map((dir) => {
          const className = dir
            ? `.rounded-${dir}-${size}`
            : `.rounded-${size}`;
          const radius =
            dir === 'top'
              ? `border-top-left-radius: ${size}px; border-top-right-radius: ${size}px;`
              : dir === 'right'
                ? `border-top-right-radius: ${size}px; border-bottom-right-radius: ${size}px;`
                : dir === 'bottom'
                  ? `border-bottom-left-radius: ${size}px; border-bottom-right-radius: ${size}px;`
                  : dir === 'left'
                    ? `border-top-left-radius: ${size}px; border-bottom-left-radius: ${size}px;`
                    : `border-radius: ${size}px;`;

          return `${className} { ${radius} }`;
        })
        .join('\n'),
    )
    .join('\n')}


  /* Margin & Padding */
  ${sizes
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
  /* smooth buttons */
  .btn-group-wrapper {
  position: relative;
  display: inline-block;
}

.highlight {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #0d6efd;
  border-radius: 50px;
  z-index: 0;
  transition: all 0.3s ease;
}

.btn-group .btn {
  position: relative;
  z-index: 1;
  border: none;
  background: transparent;
}
/* ---- end buttons smooth */
.rotate-180 {
    transform: rotate(180deg);
  }
  /* links */
  .transition-all{
      transition:0.4s
  }
  .outline-3-white{
    outline: solid 3px #fff;
  }
  ::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 4px;
}
`;

export default GlobalStyle;
