import React, {useState} from "react";
import Layout from "../../components/layout";
import {
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    makeStyles, MenuItem, Select,
    Switch,
    TextField,
    Typography
} from "@material-ui/core";


const RegisterPage = () => {

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

    const [user, setUser] = useState({});
    const {email, password, name, gender, role} = user;
    const [error, setError] = useState({});
    const [visible, setVisible] = useState(false);

    const handleUserChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleUserSubmit = e => {
        e.preventDefault();

        if (!email) {
            setError({...error, email: "Field required"});
            return;
        } else {
            setError({...error, email: null});
        }

        if (!password) {
            setError({...error, password: "Field required"});
            return;
        } else {
            setError({...error, password: null});
        }
        console.log(user);

    }

    const handlePasswordVisibility = () => {
        setVisible(!visible);
    }

    return (
        <Layout>
            <Container className={classes.container}>
                <Typography color="textPrimary" variant="h3" align="center">Sign Up</Typography>

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
                                    onChange={handleUserChange}
                                    margin="normal"
                                    className={classes.textField}
                                    label="Name"
                                    placeholder="Enter name"
                                    required={true}
                                    error={Boolean(error.name)}
                                    helperText={error.name}
                                />

                                <Select
                                    className={classes.textField}
                                    margin="none"
                                    label="Gender"
                                    displayEmpty={true}
                                    fullWidth={true}
                                    name="gender"
                                    value={gender}
                                    defaultValue={"MALE"}
                                    onChange={handleUserChange}>
                                    <MenuItem value="MALE">Male</MenuItem>
                                    <MenuItem value="FEMALE">Female</MenuItem>
                                </Select>

                                <Select
                                    className={classes.textField}
                                    margin="none"
                                    label="Role"
                                    displayEmpty={true}
                                    fullWidth={true}
                                    name="role"
                                    value={role}
                                    defaultValue={"USER"}
                                    onChange={handleUserChange}>
                                    <MenuItem value="USER">User</MenuItem>
                                    <MenuItem value="ORGANISER">Organiser</MenuItem>
                                </Select>

                                <TextField
                                    variant="outlined"
                                    fullWidth={true}
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleUserChange}
                                    margin="normal"
                                    className={classes.textField}
                                    label="Email"
                                    placeholder="Enter email"
                                    required={true}
                                    error={Boolean(error.email)}
                                    helperText={error.email}
                                />

                                <TextField
                                    variant="outlined"
                                    fullWidth={true}
                                    type={visible ? "text" : "password"}
                                    name="password"
                                    value={password}
                                    onChange={handleUserChange}
                                    margin="normal"
                                    className={classes.textField}
                                    label="Password"
                                    placeholder="Enter password"
                                    required={true}
                                    error={Boolean(error.password)}
                                    helperText={error.password}
                                />

                                <Grid container={true} alignItems="center">
                                    <Grid item={true}>
                                        <Switch
                                            checked={visible}
                                            onChange={handlePasswordVisibility}
                                            size="medium"/>
                                    </Grid>
                                    <Grid item={true}>
                                        <Typography
                                            variant="body2">
                                            {visible ? "Hide Password" : "Show Password"}
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Button
                                    className={classes.button}
                                    onClick={handleUserSubmit}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="large"
                                    disableElevation={true}>
                                    Sign Up
                                </Button>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Container>
        </Layout>
    )
}

export default RegisterPage;