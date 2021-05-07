import React from "react";
import {Avatar, Button, Container, Divider, Grid, makeStyles, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {Close} from "@material-ui/icons";


const DrawerContent = ({handleDrawerClose}) => {

    const useStyles = makeStyles(() => {
        return {
            link: {
                textDecoration: "none"
            },
            button: {},
            divider: {
                marginTop: 16,
                marginBottom: 16
            },
            avatar: {
                width: 150,
                height: 150,
                borderWidth: 2,
                borderStyle: "solid",
                padding: 8
            },
            name: {},
            nickname: {},
            role: {
                fontWeight: "bold"
            },
            subDivider: {
                marginTop: 8,
                marginBottom: 8
            },
            container: {
                paddingTop: 32,
                paddingBottom: 32
            },
            closeButton: {}
        }
    });

    const classes = useStyles();


    return (
        <Container className={classes.container}>
            <Grid container={true} justify="center">
                <Grid container={true} justify="flex-end">
                    <Grid item={true}>
                        <Button
                            className={classes.closeButton}
                            onClick={handleDrawerClose}
                            startIcon={<Close/>}
                            variant="outlined"
                            size="large">
                            Close
                        </Button>
                    </Grid>
                </Grid>
                <Grid container={true} justify="center">
                    <Grid item={true}>
                        <Avatar src="/assets/lightingcolored.svg" className={classes.avatar}/>
                    </Grid>
                </Grid>
                <Grid item={true}>
                    <Typography
                        gutterBottom={true}
                        className={classes.name}
                        variant="h4"
                        align="center">
                        Events
                    </Typography>
                    <Divider variant="middle" className={classes.subDivider} light={true}/>
                    <Typography
                        gutterBottom={true}
                        className={classes.nickname}
                        variant="h6"
                        align="center">
                        Get the latest, hottest events right here
                    </Typography>
                </Grid>
            </Grid>

            <Divider variant="fullWidth" className={classes.divider}/>

            <Grid>
                <Grid item={true} xs={12}>
                    <Link to="/" className={classes.link}>
                        <Button fullWidth={true} variant="text" size="large">
                            Home
                        </Button>
                    </Link>

                    <Divider variant="fullWidth" className={classes.subDivider} light={true}/>

                    <Link to="/events" className={classes.link}>
                        <Button fullWidth={true} variant="text" size="large">
                            Events
                        </Button>
                    </Link>

                    <Divider variant="fullWidth" className={classes.subDivider} light={true}/>

                    <Link to="/new/event" className={classes.link}>
                        <Button fullWidth={true} variant="text" size="large">
                            Create
                        </Button>
                    </Link>

                    <Divider variant="fullWidth" className={classes.subDivider} light={true}/>

                    <Link to="/users/johndoe/reservations" className={classes.link}>
                        <Button fullWidth={true} variant="text" size="large">
                            My Reservations
                        </Button>
                    </Link>

                    <Divider variant="fullWidth" className={classes.subDivider} light={true}/>

                    <Link to="/auth/login" className={classes.link}>
                        <Button fullWidth={true} variant="text" size="large">
                            Login
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DrawerContent;