import {createGlobalStyle} from 'styled-components'
import {colors} from './colors'

const GlobalStyle = createGlobalStyle`
/* fonts */
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
  /* colors */
  ${Object.entries(colors)
    .map(
      ([key, value]) => `
    .text-${key.replace(/_/g, '-')} { color: ${value} !important; }
    .bg-${key.replace(/_/g, '-')} { background-color: ${value} !important; }
    .border-${key.replace(/_/g, '-')} { border-color: ${value} !important; }
  `
    )
    .join('')}
  
  /* font-size */
  .fs{
    &-10{
      font-size: 10px;
    }
    &-11{
      font-size: 11px;
    }
    &-12{
      font-size: 12px;
    }
    &-13{
      font-size: 13px;
    }
    &-14{
      font-size: 14px;
    }
    &-15{
      font-size: 15px;
    }
    &-16{
      font-size: 16px;
    }
    &-17{
      font-size: 17px;
    }
    &-18{
      font-size: 18px;
    }
    &-24{
      font-size: 24px;
    }
  }
  /* all default */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Giest';
  }
  h1, h2, h3, h4, h5, h6 {
   margin: 0;
  }
  a{
    text-decoration: none;
  }
  body{
    
  }

/* border */
  
.rounded{ 
  &-6{
    border-radius:6px;
  }
  &-7{
    border-radius:7px;
  }
  &-10{
    border-radius: 10px;
  }
}
/* margin */
.m{
&-10{
  margin: 10px;
}
&-b-10{
  margin-bottom: 10px;
}
&-t-10{
  margin-top: 10px;
}
&-l-10{
  margin-left: 10px;
}
&-r-10{
  margin-right: 10px;
}
/* 15px */
&-15{
  margin: 15px;
}
&-b-15{
  margin-bottom: 15px;
}
&-t-15{
  margin-top: 15px;
}
&-l-15{
  margin-left: 15px;
}
&-r-15{
  margin-right: 15px;
}
/* 16px */
&-16{
  margin: 16px;
}
&-b-16{
  margin-bottom: 16px;
}
&-t-16{
  margin-top: 16px;
}
&-l-16{
  margin-left: 16px;
}
&-r-16{
  margin-right: 16px;
}
}
/* paddign */
.p{
&-10{
  padding: 10px;
}
&y-10{
  padding-top: 10px;
  padding-bottom: 10px;
}
&b-10{
  padding-bottom: 10px;
}
&t-10{
  padding-top: 10px;
}
&l-10{
  padding-left: 10px;
}
&r-10{
  padding-right: 10px;
}
/* 15px */
&-15{
  padding: 15px;
}
&y-15{
  padding-top: 15px;
  padding-bottom: 15px;
}
&b-15{
  padding-bottom: 15px;
}
&t-15{
  padding-top: 15px;
}
&l-15{
  padding-left: 15px;
}
&r-15{
  padding-right: 15px;
}
/* 16px */
&-16{
  padding: 16px;
}
&y-16{
  padding-top: 16px;
  padding-bottom: 16px;
}
&b-16{
  padding-bottom: 16px;
}
&t-16{
  padding-top: 16px;
}
&l-16{
  padding-left: 16px;
}
&r-16{
  padding-right: 16px;
}
}

/* others */
.dropdown-toggle::after{
  content: none;
}
.cursor-pointer{
  cursor: pointer;
}
`
export default GlobalStyle
