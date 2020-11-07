import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Container, Paper} from "@material-ui/core";
import BrandCard from "./brandCard";


const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: 'none',
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10)
    },
    content: {
        marginTop: theme.spacing(10),
        textAlign: 'center'
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
        fontWeight: 'bold'
    },
    easy: {
        padding: theme.spacing(1),
        color: '#3f51b5'
    }

}));

const brands = [
    {
        location: '/images/kiaLogo.png',
        name : 'Kia Motors',
        avatar: 'K'
    },
    {
        location: '/images/tataLogo.png',
        name : 'TATA Motors',
        avatar: 'T'
    },
    {
        location: '/images/hyundaiLogo.png',
        name : 'Hyundai Motors',
        avatar: 'H'
    }
];




export default function Centers() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container direction="column">
                    <Grid container item xs={12}>
                        <Grid item xs={4} >
                            <BrandCard
                                location = '/images/kiaLogo.png'
                                name ='Kia Motors'
                                avatar='K'
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <BrandCard
                                location = '/images/tataLogo.png'
                                name ='TATA Motors'
                                avatar='T'
                            />
                        </Grid>
                        <Grid item xs={4} >
                            <BrandCard
                                location = '/images/hyundaiLogo.jpeg'
                                name = 'Hyundai Motors'
                                avatar='H'
                            />
                        </Grid>
                    </Grid>
                </Grid>

            </Container>
        </div>
    );
}
