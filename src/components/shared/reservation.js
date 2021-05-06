import React from "react";
import {Button, Card, CardContent, CardMedia, Divider, makeStyles, Typography} from "@material-ui/core";


const Reservation = ({reservation}) => {

    const useStyles = makeStyles(theme => {
        return {
            card: {
                marginLeft: 16,
                marginRight: 16
            },
            divider: {
                marginTop: 32,
                marginBottom: 32
            },
            shortDivider: {
                marginTop: 32,
                marginBottom: 32,
                width: 40,
                height: 3
            },
            subDivider: {
                marginTop: 8,
                marginBottom: 8
            },
            title: {
                textTransform: "uppercase",
                fontWeight: 600
            },
            caption: {
                textTransform: "uppercase",
                fontWeight: 700
            },
            media: {}
        }
    });

    const classes = useStyles();

    return (
        <Card variant="elevation" elevation={8} className={classes.card}>
            <CardMedia src={reservation.event.image} component="img" className={classes.media}/>
            <CardContent>
                <Typography color="textSecondary" variant="caption" className={classes.caption}>
                    User
                </Typography>
                <Typography color="textSecondary" variant="h6" className={classes.caption}>
                    {reservation.user.name}
                </Typography>
                <Divider variant="fullWidth" light={true} className={classes.subDivider}/>
                <Typography color="textSecondary" variant="caption" className={classes.caption}>
                    Event
                </Typography>
                <Typography color="textSecondary" variant="h6" className={classes.caption}>
                    {reservation.event.name}
                </Typography>
                <Divider variant="fullWidth" light={true} className={classes.subDivider}/>
                <Typography color="textSecondary" variant="caption" className={classes.caption}>
                    Status
                </Typography>
                <Typography color="textSecondary" variant="h6" className={classes.caption}>
                    {reservation.status}
                </Typography>
                <Divider variant="fullWidth" light={true} className={classes.subDivider}/>
                <Typography color="textSecondary" variant="caption" className={classes.caption}>
                    Setting
                </Typography>
                <Typography color="textSecondary" variant="h6">
                    {new Date(reservation.event.date).toLocaleDateString()} {' '} at {reservation.event.venue}
                </Typography>
                <Divider variant="fullWidth" light={true} className={classes.divider} />
                <Button variant="outlined" fullWidth={true} size="large">
                    Cancel
                </Button>

            </CardContent>
        </Card>
    )
}

export default Reservation;