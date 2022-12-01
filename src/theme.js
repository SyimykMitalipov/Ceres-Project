import { createTheme } from '@mui/material'

/// make a base styles for project 



const theme = createTheme({

  /// main color 
  palette: {
    primary: {
      main: '#007D35',
      secondary: '#1FB25E'
    }
  },

  /// breakpoints for the mobile and desktop
  breakpoints: {
    values: {
      lg: 1000,
      xl: 0
    }
  },

  /// default fonts for all typography


  typography: {
    fontFamily: ['Raleway', 'sans-serif'].join(',')
  },


  /// default styles for some components 


  components: {
    MuiCssBaseline: {
      styleOverrides: `
      font-family: 'Commissioner', sans-serif;
  *{padding: 0;margin: 0;border: 0;}
      *,*:before,*:after{-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}
      :focus,:active{outline: none;}
      a:focus,a:active{outline: none;}
      nav,footer,header,aside{display: block;}
      html,body{height:100%;width:100%;font-size:100%;line-height:1;font-size:14px;-ms-text-size-adjust:100%;-moz-text-size-adjust:100%;-webkit-text-size-adjust:100%;}
      input::-ms-clear{display: none;}
      button{cursor: pointer;}
      a,a:visited{text-decoration: none;}
      a:hover{text-decoration: none;}
      ul li{list-style: none;}
      img{vertical-align: top;}
      h1,h2,h3,h4,h5,h6{font-size:int;font-weight: inherit;}
      `
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' && {
            borderRadius: '20px',
            backgroundColor: '#007D35',
            fontWeight: 600,
            color: '#ffffff',
            transition: 'all 1s',
            '&:hover': {
              backgroundColor: '#1FB35E'
            }

          })
        })
      }
    },
    'MuiContainer': {
      styleOverrides: {
        root: {
          maxWidth: '1400px !important'
        }
      }
    }
  },

})


theme.typography.h1 = {
  ...theme.typography.h1,
  fontSize: 18,
  [theme.breakpoints.up("lg")]: {
    fontSize: 56,
    lineHeight: '50px'
  }
}
theme.typography.h2 = {
  ...theme.typography.h2,
  fontSize: 36,
  lineHeight: '50px',
  [theme.breakpoints.up("lg")]: {
    fontSize: 48,
    lineHeight: '50px'
  }

}

theme.typography.h3 = {
  ...theme.typography.h3,
  fontSize: 36,
  lineHeight: '50px',

}
theme.typography.h4 = {
  ...theme.typography.h4,
  fontSize: 28,
  lineHeight: '50px',

}




theme.typography.body1 = {
  ...theme.typography.body1,
  fontSize: 16,
  fontWeight: 500,
  lineHeight: '20px'
}
theme.typography.body2 = {
  ...theme.typography.body2,
  fontSize: 14,
  fontWeight: 500,
  lineHeight: '20px'
}


export default theme;