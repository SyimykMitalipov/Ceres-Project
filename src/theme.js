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
      font-family: 'Commissioner', sans-serif`
    },
    MuiButton: {
      styleOverrides: {
        root: ({ownerState}) => ({
          ...(ownerState.variant === 'contained' && {
            borderRadius: '20px',
            backgroundColor: '#007D35',
            fontWeight:600,
            color: '#ffffff',
            transition: 'all 1s',
            '&:hover': {
              backgroundColor: '#1FB35E'
            }

          })
        })
      }
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg:'1110px !important',
      }
    }
  },

})


theme.typography.h1 = {
  ...theme.typography.h1,
  fontSize: 18
}
theme.typography.h2 = {
  ...theme.typography.h2,
  fontSize: 48,
  lineHeight: '50px',

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