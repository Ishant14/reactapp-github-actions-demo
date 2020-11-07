import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from "@material-ui/core/Button";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TocIcon from '@material-ui/icons/Toc';
import {IconButton} from "@material-ui/core";

const useStyles = makeStyles((theme) =>({
    root: {
        display: 'flex',
        minWidth: 275,
        boxShadow: 'none',
        textAlign: 'center',
        backgroundColor: 'transparent',
        paddingRight: '5px',
        marginBottom: theme.spacing(10)
    },
    content: {
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
        marginBottom: theme.spacing(3),
        fontSize: '1rem',
        lineHeight: 1.5
    },
    btn: {
        backgroundColor: theme.palette.success.main,
        color: 'white',
        fontWeight: 'bold'
    },
    icon: {
        color: '#3f51b5'
    }
}));

export default function AllInclusive() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <IconButton edge="start" color="inherit" aria-label="home"
                            className={classes.icon}>
                    <TocIcon fontSize="large"/>
                </IconButton>
                <Typography variant="h6" className={classes.heading}>
                    All inclusive
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Monthly fee covers everything you need hassle free.
                    Keep cool and focus on what matters to you.
                </Typography>
            </CardContent>
        </Card>
    );
}