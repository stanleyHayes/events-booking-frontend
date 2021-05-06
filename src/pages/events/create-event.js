import React, {useState} from "react";
import Layout from "../../components/layout";
import {
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    makeStyles,
    TextField,
    Typography
} from "@material-ui/core";

import {DatePicker, TimePicker} from '@material-ui/pickers';

const CreateEventPage = () => {

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
            subDivider: {
                marginTop: 8,
                marginBottom: 8
            },
            textField: {
                marginBottom: 8,
                marginTop: 8
            },
            button: {
                paddingTop: 16,
                paddingBottom: 16,
                marginTop: 16
            },
            title: {
                textTransform: "uppercase"
            }
        }
    });

    const classes = useStyles();

    const [event, setEvent] = useState({date: Date.now()});
    const [error, setError] = useState({});
    const {venue, description, name, category, time, date, price} = event;

    const handleEventChange = e => {
        setEvent({...event, [e.target.name]: e.target.value});
    }

    const handleEventSubmit = e => {
        e.preventDefault();

        if (!name) {
            setError({...error, name: "Field required"});
            return;
        } else {
            setError({...error, name: null});
        }

        if (!description) {
            setError({...error, description: "Field required"});
            return;
        } else {
            setError({...error, description: null});
        }
        if (!venue) {
            setError({...error, venue: "Field required"});
            return;
        } else {
            setError({...error, venue: null});
        }

        if (!name) {
            setError({...error, name: "Field required"});
            return;
        } else {
            setError({...error, name: null});
        }


        if (!category) {
            setError({...error, category: "Field required"});
            return;
        } else {
            setError({...error, category: null});
        }

        if (!price) {
            setError({...error, price: "Field required"});
            return;
        } else {
            setError({...error, price: null});
        }

        if (!date) {
            setError({...error, date: "Field required"});
            return;
        } else {
            setError({...error, date: null});
        }

        if (!time) {
            setError({...error, time: "Field required"});
            return;
        } else {
            setError({...error, time: null});
        }
        console.log(event);
    }

    const handleDateChange = date => {
        setEvent({...event, date});
    }

    const handleTimeChange = time => {
        setEvent({...time, time});
    }


    return (
        <Layout>
            <Container className={classes.container}>
                <Typography color="textPrimary" variant="h3" align="center">Create Event</Typography>

                <Divider variant="fullWidth" className={classes.divider}/>

                <Grid container={true} justify="center">
                    <Grid item={true} xs={12} md={6}>
                        <Card variant="elevation" elevation={1}>
                            <CardContent>
                                <TextField
                                    variant="outlined"
                                    fullWidth={true}
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={handleEventChange}
                                    margin="normal"
                                    className={classes.textField}
                                    label="Name"
                                    placeholder="Enter event name"
                                    required={true}
                                    error={Boolean(error.name)}
                                    helperText={error.name}
                                />

                                <TextField
                                    variant="outlined"
                                    fullWidth={true}
                                    type="text"
                                    name="category"
                                    value={category}
                                    onChange={handleEventChange}
                                    margin="normal"
                                    className={classes.textField}
                                    label="Category"
                                    placeholder="Enter category"
                                    required={true}
                                    error={Boolean(error.category)}
                                    helperText={error.category}
                                />

                                <TextField
                                    variant="outlined"
                                    fullWidth={true}
                                    type="number"
                                    name="price"
                                    value={price}
                                    onChange={handleEventChange}
                                    margin="normal"
                                    className={classes.textField}
                                    label="Price"
                                    placeholder="Enter event price"
                                    required={true}
                                    error={Boolean(error.price)}
                                    helperText={error.price}
                                />


                                <TextField
                                    variant="outlined"
                                    fullWidth={true}
                                    type="text"
                                    name="description"
                                    value={description}
                                    onChange={handleEventChange}
                                    margin="normal"
                                    className={classes.textField}
                                    label="Description"
                                    placeholder="Enter event description"
                                    required={true}
                                    multiline={true}
                                    rows={8}
                                    error={Boolean(error.description)}
                                    helperText={error.description}
                                />


                                <TextField
                                    variant="outlined"
                                    fullWidth={true}
                                    type="text"
                                    name="venue"
                                    value={venue}
                                    onChange={handleEventChange}
                                    margin="normal"
                                    className={classes.textField}
                                    label="Venue"
                                    placeholder="Enter event venue"
                                    required={true}
                                    error={Boolean(error.venue)}
                                    helperText={error.venue}
                                />

                                <DatePicker
                                    variant="dialog"
                                    value={date}
                                    fullWidth={true}
                                    label="Event Date"
                                    onChange={handleDateChange}
                                    inputVariant="outlined"
                                    disablePast={true}
                                    autoOk={true}
                                    required={true}
                                    InputAdornmentProps={{position: "start"}}
                                    format="MM-DD-YYYY"
                                    error={Boolean(error.date)}
                                    helperText={error.date}
                                    className={classes.textField}
                                />

                                <TimePicker
                                    variant="dialog"
                                    value={time}
                                    InputAdornmentProps={{position: "start"}}
                                    fullWidth={true}
                                    label="Event Time"
                                    onChange={handleTimeChange}
                                    inputVariant="outlined"
                                    disablePast={true}
                                    autoOk={true}
                                    required={true}
                                    ampm={true}
                                    error={Boolean(error.time)}
                                    helperText={error.time}
                                    className={classes.textField}
                                />

                                <Button
                                    className={classes.button}
                                    onClick={handleEventSubmit}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="large"
                                    disableElevation={true}>
                                    Create Event
                                </Button>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Container>
        </Layout>
    )
}

export default CreateEventPage;