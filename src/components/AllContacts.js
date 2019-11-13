import React, {Component} from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Contact from "./Contact";
import styled from 'styled-components';

const Main = styled.div`{
    grid-area: main;
}`

class AllContacts extends Component{
    constructor(){
        super();
        this.state = {
            contacts:[],
        }
    }

    componentDidMount() {
        let ContactDataPromise=fetch('http://phonebook.hillel.it/api/phonebook?',{
            credentials: 'include'
        });
        ContactDataPromise.then(response=>{
            response.json().then(response=>{
                this.setState({
                    contacts:response
                }, ()=> console.log(this.state))
            })
        }).catch((e)=>{
            console.log(e);
            this.props.history.push("/login")
        })
    }

    changedCard = (id)=>{
        this.props.history.push("/changeCard");
        this.props.ifChange(id);
        console.log('ALL',this.state, id)
    };

    render() {
        return(
            <Main>
            {/*<Grid item xs={9} component={'div'}>*/}
                <AppBar position="static">
                    <Toolbar>
                        <Grid container component={'div'} direction='row' justify='space-around' alignItems='center' >
                            <Typography variant="h6">
                                Все контакты
                            </Typography>
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Grid component={'div'} container style={{marginTop:32}}>
                    {this.state.contacts.map(contact =>    (
                        <Contact
                            key={contact._id}
                            options={this.state.options}
                            name = {contact.name}
                            surname = {contact.surname}
                            //phone = {contact.phone[1]['value'] ? contact.phone[0]['value'] : 'none'}
                            id = {contact._id}
                            changedCard={this.changedCard}
                            categories = {this.props.allCategories}
                        >
                        </Contact>
                    ))}
                </Grid>
            {/*</Grid>*/}
            </Main>
        )
    }
}

export default AllContacts;