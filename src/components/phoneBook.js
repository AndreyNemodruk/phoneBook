import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";

import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";

import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";


const classes = {
    AppBar:{
        root:{
            flexGrow: 1,
        },
        menuButton: {
            marginRight:2,
        },
        title: {
            flexGrow: 1,
        },
    },
    fab: {
        margin: 1,
    },
    text:{
        color: 'primary',
    },

}

class PhoneBook extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    render() {
        return(
            <Grid item xs={9} component={'div'} style={{overflow: 'hidden'}}>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <Grid container component={'div'} direction='row' justify='space-between' alignItems='center' >
                                <Typography variant="h6" className={classes.AppBar.title}>
                                    Все контакты
                                </Typography>
                                <IconButton edge="start" className={classes.AppBar.menuButton} color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </div>
            </Grid>
        )
    }
}

export default PhoneBook;