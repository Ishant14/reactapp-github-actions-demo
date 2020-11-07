import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

const lightTheme = createMuiTheme({
    typography:{
        fontFamily: 'Camphor,Helvetica,Arial,sans-serif!important'
    },
    palette:{
        background:{
            default: 'red'
        }
    }
});


lightTheme.overrides = {
    MuiTypography: {
        body1:{
            fontSize: '14px'
        },
        colorTextSecondary: {
            color: '#414143'
        }
    },
    MuiButton: {
        root: {
            textTransform: 'none'
        }
    }
}

export default lightTheme;