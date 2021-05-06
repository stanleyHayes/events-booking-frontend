import {configureStore} from "@reduxjs/toolkit";
import eventsReducer from "../app/features/events/events-slice";
import authenticationReducer from "../app/features/authentication/authentication-slice";
import reservationsReducer from "../app/features/reservations/reservations-slice";
const store = configureStore({
    reducer: {
        events: eventsReducer,
        authentication: authenticationReducer,
        reservations: reservationsReducer
    }
});

export default store;