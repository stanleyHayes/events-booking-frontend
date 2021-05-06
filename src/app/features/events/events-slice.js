import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {events} from "../../../data/events";
import axios from "axios";
import {DEVELOPMENT_SERVER_URL} from "../../../constants/constants";

export const createEvent = createAsyncThunk('events/createEvent',
    async (event, token) => {
        const {data, message} = await axios(
            {
                url: `${DEVELOPMENT_SERVER_URL}/events`,
                method: 'post',
                data: event,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        return {data, message};
    });

export const getEvents = createAsyncThunk('events/getEvents',
    async (query) => {
        const {data: events, message, count, page} = await axios({
            method: 'get',
            url: `${DEVELOPMENT_SERVER_URL}/${query}`
        });
        return {events, message, count, page}
    }
);


export const updateEvent = createAsyncThunk('events/updateEvent',
    async (event, eventID, token) => {
        const {data, message} = await axios({
            method: 'put',
            url: `${DEVELOPMENT_SERVER_URL}/events/${eventID}`,
            data: event,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return {data, message}
    }
);

export const deleteEvent = createAsyncThunk('events/deleteEvent',
    async (eventID, token,) => {
        const {data: event, message} = await axios({
            method: 'delete',
            url: `${DEVELOPMENT_SERVER_URL}/events/${eventID}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return {event, message}
    }
);


export const getEvent = createAsyncThunk('events/getEvent',
    async (eventID) => {
        const {data: event, message} = await axios({
            method: 'get',
            url: `${DEVELOPMENT_SERVER_URL}/events/${eventID}`,
        });
        return {event, message}
    }
);

const eventsSlice = createSlice({
    name: "events",
    initialState: {
        events: [...events],
        loading: false,
        error: null,
        message: ''
    },
    extraReducers: {
        [createEvent.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [createEvent.fulfilled]: (state, action) => {
            state.error = null;
            state.loading = false;
            state.events.push(action.payload.events);
            state.message = action.payload.message
        },
        [createEvent.rejected]: (state, action) => {
            state.error = action.payload.message;
            state.loading = false;
            state.message = action.payload.message
        },

        [getEvents.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [getEvents.fulfilled]: (state, action) => {
            state.error = null;
            state.loading = false;
            state.events.push(action.payload.events);
            state.message = action.payload.message
        },
        [getEvents.rejected]: (state, action) => {
            state.error = action.payload.message;
            state.loading = false;
            state.message = action.payload.message
        },

        [deleteEvent.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [deleteEvent.fulfilled]: (state, action) => {
            state.error = null;
            state.loading = false;
            state.events.push(action.payload.events);
            state.message = action.payload.message
        },
        [deleteEvent.rejected]: (state, action) => {
            state.error = action.payload.message;
            state.loading = false;
            state.message = action.payload.message
        },

        [getEvent.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [getEvent.fulfilled]: (state, action) => {
            state.error = null;
            state.loading = false;
            state.events.push(action.payload.events);
            state.message = action.payload.message
        },
        [getEvent.rejected]: (state, action) => {
            state.error = action.payload.message;
            state.loading = false;
            state.message = action.payload.message
        },
        [updateEvent.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [updateEvent.fulfilled]: (state, action) => {
            state.error = null;
            state.loading = false;
            state.events.push(action.payload.events);
            state.message = action.payload.message
        },
        [updateEvent.rejected]: (state, action) => {
            state.error = action.payload.message;
            state.loading = false;
            state.message = action.payload.message
        }
    }
});

export default eventsSlice.reducer;