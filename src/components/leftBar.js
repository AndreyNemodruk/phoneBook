import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';

const classes = {
    root:{
        flexGrow: 1,
    },
    fab: {
        margin: 1,
    },
    text:{

    },

}

class LeftBar extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    addNewCard = (e)=>{
        e.preventDefault();
        this.props.history.push("/addCard");
    }

    render() {
        return(
            <Grid item xs={3} alignItems="stretch" component={'div'} style={{minWidth: '210px'}}>
                <Grid container component={'div'} direction='row' justify='flex-start' alignItems='center'>
                    <Fab size="small" color="primary" aria-label="add" className={classes.fab} onClick={this.addNewCard}>
                        <AddIcon />
                    </Fab>
                    <Typography component='p' className={classes.text} style={{marginLeft: '10px'}}>
                        Новый контакт
                    </Typography>
                </Grid>
            </Grid>

        )
    }
}

export default LeftBar;