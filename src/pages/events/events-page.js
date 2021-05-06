import React from "react";
import Layout from "../../components/layout";
import {Container, Divider, Grid, makeStyles, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import Event from "../../components/shared/event";

const EventsPage = () => {

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

    const events = useSelector(state => state.events.events);

    return (
        <Layout>
            <Container className={classes.container}>
                <Typography  color="textPrimary"  variant="h3" align="center">Event</Typography>

                <Divider variant="fullWidth" className={classes.divider}/>

                <Grid container={true} spacing={1}>
                    {
                        events.length ? (
                            events.map((event, index) => {
                                return (
                                    <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                        <Event event={event}/>
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
                                        No Events Available
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

export default EventsPage;