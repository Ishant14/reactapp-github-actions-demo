import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) =>({
    media : {
        height: '100%',
        width: '100%'
    },
    paper : {
        height: 400,
        width: '100%'
    }
}));


const Example = () => {
    const classes = useStyles();
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            src: '/images/service/hyundai.jpg'
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            src: '/images/service/kiaService.jpg'
        }
    ]
    return (
        <Carousel
                  fullHeightHover
                  indicators={false}
        >
            {
                items.map( (item, i) => <Item key={i} src={item.src}/> )
            }
        </Carousel>
    )
}

const Item = (props) => {

    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <img src={props.src} className={classes.media} />
        </Paper>
    )
}


export default Example;