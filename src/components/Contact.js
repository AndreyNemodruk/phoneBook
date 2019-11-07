import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// const classes = {
//     card: {
//
//     },
// };

class Contact extends Component{
    constructor(){
        super();
        this.state={
            anchorEl: null,
        }
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget },()=>{console.log(event.currentTarget)});
    };


    handleClose = () => {
        this.setState({ anchorEl: null},()=>{console.log(this.state)});
    };

    deleteCard = (e) =>{
        e.preventDefault();
        let id=this.props.id;
        let request = fetch(`http://phonebook.hillel.it/api/phonebook/${id}`,{
                credentials: 'include',
                method:'DELETE',
            }
        );
        request.then((response)=>{
            response.json().then((result) =>{
                console.log(result.message);
                this.setState({ anchorEl: null},()=>{console.log(this.state)});
            })
        }).catch((e)=>{
            console.log(e)
        });
    };

    changedCard = ()=>{
        let id = this.props.id;
        this.props.changedCard(id);
        this.setState({ anchorEl: null});
    };



    render() {
        const { anchorEl} = this.state;
        return(
            <Grid component={'div'} container  style={{width: '100%', maxWidth:200, padding:10, fontSize:14, position:"relative", border:'1px solid black', margin:'10px 5px 0px 5px'}}>
                <Grid container component={'div'} wrap={"nowrap"} direction={"row"} style={{marginTop:10}}>
                    <Grid component={'div'} item xs={4}>
                        <Avatar alt="Remy Sharp" src="https://socialniesety.ru/files/images/components/articles_journal/originals/instagram/234/avatarka_dlya_instagram_primery_15.jpg" style={{height:'60px', width:'60px'}}/>
                    </Grid>
                    <Grid item component={'div'} xs={8} style={{alignSelf:"center"}} >
                        <Typography gutterBottom component="p" style={{fontSize:"inherit", paddingLeft:20}}>
                            {`${this.props.name} ${this.props.surname}`}
                        </Typography>
                    </Grid>
                    <div>
                        <IconButton
                            aria-owns={anchorEl ? 'simple-menu' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleClick}
                            color="primary"
                            size="small"
                            style={{
                                position: "absolute",
                                top:0,
                                right:0
                            }}
                        >
                            <MoreVertIcon fontSize={'small'}/>
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}
                        >
                            <MenuItem
                                onClick={this.changedCard}
                                style={{fontSize:12}}
                            >
                                Изменить контакт
                            </MenuItem>
                            <MenuItem
                                onClick={this.deleteCard}
                                style={{fontSize:12}}
                            >
                                Удалить контакт
                            </MenuItem>
                            <MenuItem
                                onClick={this.handleClose}
                                style={{fontSize:12}}
                            >
                                Создать группу
                            </MenuItem>
                            <MenuItem
                                style={{fontSize:12}}
                                onClick={this.handleClose}
                            >
                                Добавить в группу
                            </MenuItem>
                        </Menu>
                    </div>
                </Grid>
                {/*<Grid component={'div'}>*/}
                {/*    <Typography gutterBottom  component="p" style={{fontSize:12, padding:5}}>*/}
                {/*        {`телефон: ${this.props.phone}`}*/}
                {/*    </Typography>*/}
                {/*    <Typography gutterBottom component="p" style={{fontSize:12, padding:5}}>*/}
                {/*        ikibana2@gmail.com*/}
                {/*    </Typography>*/}
                {/*</Grid>*/}
            </Grid>
        )
    }
}
export default Contact;