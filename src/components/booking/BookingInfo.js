import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from "@material-ui/core/Button";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>({
    root: {
        display: 'flex',
        minWidth: 275,
        boxShadow: 'none'
    },
    content: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(5)
    },
    pos: {
        marginBottom: 12,
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
    btn: {
        backgroundColor: theme.palette.success.main,
        color: 'white',
        fontWeight: 'bold',
        minHeight: 50,
        textTransform: 'uppercase'
    },
    easy: {
        padding: theme.spacing(1),
        color: '#3f51b5'
    }
}));

export default function BookingInfo() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <Typography variant="h3" className={classes.heading}>
                    Car Service made
                    <span className={classes.easy}>
                        easy
                    </span>
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    For entrepreneurs, startups and freelancers.
                    Discover coworking spaces designed to inspire and
                    to connect you to a community of motivated people.
                </Typography>
                <Button variant="contained"
                        className={classes.btn}>
                    Book My Service</Button>
            </CardContent>
        </Card>
    );
}