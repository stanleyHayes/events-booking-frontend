import React from "react";
import Layout from "../../components/layout";
import {Container, Divider, Grid, makeStyles, Typography} from "@material-ui/core";
import Reservation from "../../components/shared/reservation";
import {useSelector} from "react-redux";

const EventReservationsPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 84,
                paddingBottom: 84
            },
            divider: {
                marginTop: 32,
                marginBottom: 32
            },
            noBookingContainer: {
                minHeight: '65vh'
            },
            noBookingsText: {
                textTransform: "uppercase",
                fontWeight: 700
            }
        }
    });

    const classes = useStyles();

    const reservations = useSelector(state => state.reservations.reservations);

    return (
        <Layout>
            <Container className={classes.container}>
                <Typography  color="textPrimary"  variant="h3" align="center">Event Reservations</Typography>

                <Divider variant="fullWidth" className={classes.divider}/>

                <Grid container={true} spacing={5}>
                    {
                        reservations.length ? (
                            reservations.map((reservation, index) => {
                                return (
                                    <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                        <Reservation reservation={reservation}/>
                                    </Grid>
                                )
                            })
                        ) : (
                            <Grid
                                container={true}
                                justify="center"
                                className={classes.noBookingContainer}
                                alignItems="center">
                                <Grid item={true}>
                                    <Typography
                                        className={classes.noBookingsText}
                                        variant="h5">
                                        No reservations for this event
                                    </Typography>
                                </Grid>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </Layout>
    )
}

export default EventReservationsPage;