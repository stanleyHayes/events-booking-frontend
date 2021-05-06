import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import {Provider} from "react-redux";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import {BrowserRouter} from "react-router-dom";
import store from "./app/store";
import MomentUtils from "@date-io/moment";
import 'react-multi-carousel/lib/styles.css';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Quicksand, sans-serif'
    },
    palette: {
        background: {
            paper: "#1f2833"
        },
        text: {
            primary: "#66fcf1",
            secondary: "#ffffff",
            hint: "#c5c6c7",
            disabled: "#c5c6c7"
        },
        primary: {
            main: "#1f2833"
        },
        secondary: {
            main: "#45a298"
        },
        action: {
            hover: "#45a298",
            active: "#45a298",
            selected: "#45a298",
            focus:"#45a298"
        },
        divider: "#45a298",
        type: "dark"
    },
    shape: {
        borderRadius: 2
    }
});


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <App />
                    </MuiPickersUtilsProvider>
                </Provider>
            </ThemeProvider>
        </BrowserRouter>

    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
