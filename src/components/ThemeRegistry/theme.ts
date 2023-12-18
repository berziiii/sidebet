import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: "'Urbanist', sans-serif",
        fontWeightLight: 100,
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        fontWeightBold: 800,
        allVariants: {
            color: '#000212'
        }
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#5e6ad2',
        },
        secondary: {
            main: '#8717bb'
        },
        background: {
            default: '#fafafa',
            paper: '#fff'
        },
        text: {
            primary: '#000212',
            secondary: '#000212',
        }
    }
});

const darkTheme = createTheme({
    typography: {
        fontFamily: "'Urbanist', sans-serif",
        fontWeightLight: 100,
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        fontWeightBold: 800,
        allVariants: {
            color: '#fafafa'
        }
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#5e6ad2',
        },
        secondary: {
            main: '#8717bb'
        },
        background: {
            default: '#000212',
            paper: '#000212'
        },
        text: {
            primary: '#fafafa',
        }
    },
});

export { theme, darkTheme};
