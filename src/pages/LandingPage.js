import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Booking from "../components/booking/Booking";
import Header from "../components/header/Header";
import Services from "../components/services/Services"
import Centers from "../components/companyCenter/center"

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 10
    },
}));


const LandingPage = () => {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <Header/>
        <Booking/>
        <Services/>
        <Centers/>
    </div>
    );
}

export default LandingPage;