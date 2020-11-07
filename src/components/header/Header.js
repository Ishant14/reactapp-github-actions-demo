import * as React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Container
} from "@material-ui/core";
import LocalCarWashIcon from '@material-ui/icons/LocalCarWash';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    appBar: {
        backgroundColor: 'transparent',
        color: 'black',
        boxShadow: 'none',
        borderBottom: 'solid 1px #d3d3d3'
    },
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration:'none',
        textTransform: 'uppercase',
        color: '#546e7a',
        paddingRight: '30px'
    },
    btn : {
        fontSize: '14px',
        maxHeight: 40
    },
    logo:{
        fontSize: '3.1875rem',
        color: '#3f51b5'
    }
});

const navLinks = [
    { title: `about us`, path: `/about-us` },
    { title: `product`, path: `/product` },
    { title: `blog`, path: `/blog` },
    { title: `contact`, path: `/contact` }
];

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
                    <IconButton edge="start" color="inherit" aria-label="home"  >
                        <LocalCarWashIcon fontSize="large" className={classes.logo}/>
                        <Typography className={classes.btn}>CarCare</Typography>
                    </IconButton>
                    <List
                        component="nav"
                        aria-labelledby="main navigation"
                        className={classes.navDisplayFlex}
                    >
                        {navLinks.map(({ title, path }) => (
                            <a href={path} key={title} className={classes.linkText}>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            </a>
                        ))}
                        <Button className={classes.btn}
                            variant="contained"
                                color="primary"
                                size="small">
                            Login / SignUp
                        </Button>
                    </List>

                </Container>
            </Toolbar>
        </AppBar>
    );
};
export default Header;