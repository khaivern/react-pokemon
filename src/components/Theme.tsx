import { createTheme } from '@mui/material/styles'
import { CSSObject } from 'tss-react'

declare module '@mui/material/styles' {
    interface TypographyVariants {
        tab: CSSObject;
        logout: CSSObject;
    }

    interface TypographyVariantsOptions {
        tab?: CSSObject;
        logout: CSSObject;
    }
}

const red = '#b71c1c'
const green = '#00e676'

export default createTheme({
    palette: {
        primary: {
            main: red,
        },
        secondary: {
            main: green,
        },
    },
    typography: {
        tab: {
            fontWeight: '700',
            fontSize: '1.3rem',
            textTransform: 'none',
            color: 'rgba(255, 255, 255, 0.7)',
            '&:hover, &.Mui-selected': {
                color: 'white',
            },
        },
        logout: {
            fontWeight: '700',
            fontSize: '1.3rem',
            color: 'rgba(255, 255, 255, 0.7)',
            '&:hover': {
                color: 'white',
            },
        }
    },
})
