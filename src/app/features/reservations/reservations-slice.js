import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {reservations} from "../../../data/reservations";
import axios from "axios";
import {DEVELOPMENT_SERVER_URL} from "../../../constants/constants";

export const createReservation = createAsyncThunk('reservations/createReservation',
    async (reservation, token) => {
        const {data, message} = await axios(
            {
                url: `${DEVELOPMENT_SERVER_URL}/reservations`,
                method: 'post',
                data: reservation,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        return {data, message};
    });


export const getReservation = createAsyncThunk('reservations/getReservation',
    async (reservationID, token) => {
        const {data, message} = await axios(
            {
                url: `${DEVELOPMENT_SERVER_URL}/reservations/${reservationID}`,
                method: 'get'
            });
        return {data, message};
    });


export const updateReservation = createAsyncThunk('reservations/updateReservation',
    async (reservation, reservationID, token) => {
        const {data, message} = await axios(
            {
                url: `${DEVELOPMENT_SERVER_URL}/reservations/${reservationID}`,
                method: 'put',
                data: reservation,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        return {data, message};
    });


export const getReservations = createAsyncThunk('reservations/getReservations',
    async (token, query) => {
        const {data: events, message, count, page} = await axios({
            method: 'get',
            url: `${DEVELOPMENT_SERVER_URL}/${query}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return {events, message, count, page}
    }
);


const reservationsSlice = createSlice({
    name: "reservations",
    initialState: {
        reservations: [...reservations],
        reservation: reservations[0],
        loading: false,
        error: null,
        message: ''
    },
    extraReducers: {
        [createReservation.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [createReservation.fulfilled]: (state, action) => {
            state.error = null;
            state.loading = false;
            state.reservations.push(action.payload.booking);
            state.message = action.payload.message
        },
        [createReservation.rejected]: (state, action) => {
            state.error = action.payload.message;
            state.loading = false;
            state.message = action.payload.message
        },

        [getReservations.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [getReservations.fulfilled]: (state, action) => {
            state.error = null;
            state.loading = false;
            state.reservations.push(action.payload.reservation);
            state.message = action.payload.message
        },
        [getReservations.rejected]: (state, action) => {
            state.error = action.payload.message;
            state.loading = false;
            state.message = action.payload.message
        },
        [updateReservation.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [updateReservation.fulfilled]: (state, action) => {
            state.error = null;
            state.loading = false;
            state.reservations = state.reservations.map(reservation => {
                if (reservation._id === action.payload.reservation._id) {
                    return action.payload.reservation;
                }
                return reservation;
            });
            state.message = action.payload.message
        },
        [updateReservation.rejected]: (state, action) => {
            state.error = action.payload.message;
            state.loading = false;
            state.message = action.payload.message
        },
        [getReservation.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [getReservation.fulfilled]: (state, action) => {
            state.error = null;
            state.loading = false;
            state.reservation = action.payload.reservation;
            state.message = action.payload.message
        },
        [getReservation.rejected]: (state, action) => {
            state.error = action.payload.message;
            state.loading = false;
            state.message = action.payload.message
        }
    }
});

export default reservationsSlice.reducer;