import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Container} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Coworking from "./coworking";
import Contracts from "./contracts";
import Hospitality from "./hospitalService";
import AllInclusive from "./allInclusive"

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#eff1f5',
        boxShadow: 'none'
    },
    content: {
        marginTop: theme.spacing(10),
        textAlign: 'center'
    },
    cover: {
        width: 151,
    },
    heading: {
        fontWeight: 'bold',
        color: '#121037',
        marginBottom: theme.spacing(2)
    },
    title: {
        color: '#546e7a',
        fontSize: '1.25rem',
        marginBottom: theme.spacing(3)
    },
    easy: {
        padding: theme.spacing(1),
        color: '#3f51b5'
    }
}));

export default function Services() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Grid container direction="column">
                    <Grid container item xs={12}>
                        <Card className={classes.root}>
                            <CardContent className={classes.content}>
                                <Typography variant="h4" className={classes.heading}>
                                    We are reimagining renting to help you
                                    <span className={classes.easy}>
                        achieve your dreams
                    </span>
                                </Typography>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Our mission is to help you grow your business, meet and connect with
                                    people who share your passions. We help you fulfill your
                                    best potential through an engaging lifestyle experience.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container direction="column" className={classes.columns}>
                    <Grid container item xs={12}>
                        <Grid item xs={3} >
                            <Coworking/>
                        </Grid>
                        <Grid item xs={3}>
                            <AllInclusive/>
                        </Grid>
                        <Grid item xs={3} >
                            <Contracts/>
                        </Grid>
                        <Grid item xs={3}>
                            <Hospitality/>
                    </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}