import React from "react";
import Layout from "../../components/layout";
import {Container, Divider, makeStyles, Typography} from "@material-ui/core";
import Carousel from "react-multi-carousel";
import {useSelector} from "react-redux";
import Event from "../../components/shared/event";


const HomePage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 84,
                paddingBottom: 84
            },
            divider: {
                marginTop: 32,
                marginBottom: 32
            }
        }
    });

    const classes = useStyles();

    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    const events = useSelector(state => state.events.events);

    return (
        <Layout>
            <Container className={classes.container}>
                <Typography color="textPrimary" variant="h3" align="center">Events</Typography>

                <Divider variant="fullWidth" className={classes.divider}/>

                <Carousel
                    arrows={true}
                    autoPlay={false}
                    swipeable={true}
                    responsive={responsive}>
                    {
                        events.map((event, index) => {
                            return (
                                <Event key={index} event={event}/>
                            )
                        })
                    }
                </Carousel>

            </Container>
        </Layout>
    )
}

export default HomePage;