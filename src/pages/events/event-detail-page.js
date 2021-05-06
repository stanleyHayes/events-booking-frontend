import React from "react";
import Layout from "../../components/layout";
import {Container, Divider, makeStyles, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";

const EventDetailPage = () => {

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

    const event = useSelector(state => state.events.event);

    return (
        <Layout>
            <Container className={classes.container}>
                <Typography color="textPrimary" variant="h3" align="center">{event.name}</Typography>

                <Divider variant="fullWidth" className={classes.divider}/>

            </Container>
        </Layout>
    )
}

export default EventDetailPage;