
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Container} from "@material-ui/core";
import BookingInfo from "./BookingInfo";
import Example from "./ImageSlider";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    buttonMyService: {
        padding: theme.spacing(1),
        color: theme.palette.success.dark,
        fontSize: '20px'
    },
    cardContent: {
        padding: theme.spacing(1)
    }

}));

export default function Booking() {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={6} >
                    <BookingInfo/>
                </Grid>
                <Grid item xs={6}>
                   <Example/>
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Container maxWidth="lg" className={classes.container} >
             <Grid container direction="column">
                <Grid container item xs={12}>
                    <FormRow />
                </Grid>
             </Grid>
            </Container>
        </div>
    );
}