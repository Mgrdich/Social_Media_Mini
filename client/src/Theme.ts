import {createMuiTheme, Theme} from "@material-ui/core";

let theme: Theme;
theme = createMuiTheme({
    palette: {
        primary: {
            main: "#ffa7c4",
        },
        secondary: {
            main: "#282c35",
        },
    },
    typography: {
        fontFamily: [
            'Cambay',
            'sans-serif'
        ].join(','),
    },
    overrides: {
        MuiInputBase: {
            input: {
                color: "#fff",
            },
        },
        MuiOutlinedInput: {
            root: {
                hover: {
                    notchedOutline: {
                        borderColor: "#fff",
                    }
                }
            },
            notchedOutline: {
                borderColor: "#fff",
            },
        },
        MuiFormLabel: {
            root:{
                color:"#fff"
            }
        },
    }
});

export {theme};